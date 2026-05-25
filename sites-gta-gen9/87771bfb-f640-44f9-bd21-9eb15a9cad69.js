try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "87771bfb-f640-44f9-bd21-9eb15a9cad69", e._sentryDebugIdIdentifier = "sentry-dbid-87771bfb-f640-44f9-bd21-9eb15a9cad69")
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
  [690], {
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
    10690(e, t, r) {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => _,
        Badge: () => g,
        Body: () => st,
        Breadcrumbs: () => y,
        Button: () => Ce,
        Checkbox: () => d,
        ChipGroup: () => C,
        Code: () => it,
        Dialog: () => w,
        Display: () => dt,
        Divider: () => qe,
        Dropdown: () => s,
        Heading: () => ct,
        IconButton: () => Ee,
        Label: () => ft,
        Lightbox: () => o,
        Loader: () => Qe,
        Pagination: () => x,
        Popover: () => j,
        RadioGroup: () => u,
        ScrollArea: () => b,
        Spinner: () => ce,
        Switch: () => a,
        Tag: () => m,
        Text: () => mt,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => ht,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => sl,
        Content: () => ol,
        Portal: () => al,
        Root: () => rl,
        Trigger: () => nl,
        useTooltipContext: () => tl
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => nc,
        Close: () => dc,
        Content: () => Yl,
        Controls: () => oc,
        CssVars: () => uc,
        Download: () => cc,
        Image: () => rc,
        Keyboard: () => ac,
        LightboxContext: () => Xl,
        OpenIcon: () => Wl,
        Overlay: () => Ql,
        Portal: () => $l,
        Reset: () => lc,
        Root: () => Gl,
        RootImplContext: () => Kl,
        Thumbnail: () => Ul,
        Trigger: () => Zl,
        Zoom: () => ic,
        ZoomPan: () => Jl
      });
      var s = {};
      r.r(s), r.d(s, {
        Content: () => Lf,
        Description: () => Bf,
        Hint: () => Xf,
        Label: () => Ff,
        Option: () => Gf,
        OptionIcon: () => Hf,
        OptionText: () => Kf,
        Portal: () => Zf,
        Root: () => zf,
        ScrollArea: () => Mf,
        StatusIcon: () => Wf,
        StatusRoot: () => Uf,
        StatusText: () => $f,
        Trigger: () => Af,
        TriggerIcon: () => qf,
        TriggerText: () => Vf,
        useDropdownContext: () => Tf
      });
      var a = {};
      r.r(a), r.d(a, {
        Description: () => Cp,
        Input: () => _p,
        Label: () => xp,
        Root: () => wp,
        useSwitchContext: () => bp
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Ap,
        CheckMD: () => Mp,
        CheckXL: () => Vp,
        DashLG: () => Fp,
        DashMD: () => qp,
        DashXL: () => Bp
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => ah,
        ErrorText: () => ih,
        Group: () => ch,
        GroupDescription: () => fh,
        GroupErrorText: () => hh,
        GroupItems: () => ph,
        GroupLabel: () => uh,
        Input: () => oh,
        Label: () => sh,
        Root: () => nh,
        useGroupContext: () => lh
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Nh,
        Hint: () => Dh,
        Input: () => Rh,
        Label: () => kh,
        Root: () => Sh,
        RootContext: () => Ph,
        StatusIcon: () => Eh,
        StatusRoot: () => Ih,
        StatusText: () => Th,
        useTextAreaContext: () => Oh
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => Dm,
        DotMD: () => Nm,
        DotXL: () => Im
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => xm,
        Input: () => Tm,
        Label: () => _m,
        Option: () => Em,
        OptionDescription: () => Lm,
        OptionLabel: () => zm,
        Options: () => wm,
        Root: () => bm,
        StatusIcon: () => jm,
        StatusRoot: () => Cm,
        StatusText: () => Pm,
        useRadioGroupContext: () => gm
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Vv,
        Control: () => Lv,
        Description: () => Fv,
        Hint: () => zv,
        Icon: () => Av,
        Input: () => Mv,
        Label: () => Tv,
        PasswordButton: () => qv,
        Root: () => Ev,
        StatusIcon: () => Xv,
        StatusRoot: () => Bv,
        StatusText: () => Gv
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => hy,
        CloseButton: () => xy,
        Description: () => gy,
        ErrorText: () => _y,
        Footer: () => wy,
        Header: () => py,
        Icon: () => vy,
        Link: () => by,
        Root: () => fy,
        RootContext: () => cy,
        Title: () => yy,
        iconStatusMap: () => my,
        useAlertContext: () => uy
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => Cg,
        CloseButton: () => Og,
        Description: () => xg,
        Icon: () => _g,
        Link: () => Pg,
        PaginationCounter: () => Ng,
        PaginationNav: () => Sg,
        PaginationNextButton: () => kg,
        PaginationPrevButton: () => Rg,
        PaginationViewport: () => jg,
        Root: () => bg,
        RootContext: () => yg,
        iconStatusMap: () => wg,
        useAlertBannerContext: () => gg
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => Kg,
        Icon: () => Gg,
        Label: () => Xg,
        Root: () => Bg,
        RootContext: () => qg,
        useTagContext: () => Fg
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => Ub,
        CloseButton: () => Wb,
        Description: () => Kb,
        Icon: () => Zb,
        Provider: () => qb,
        Root: () => Gb,
        RootContext: () => Bb,
        Viewport: () => Fb,
        iconAppearanceMap: () => Hb,
        useToastContext: () => Xb
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => lw,
        Item: () => dw,
        OverflowMenu: () => cw,
        OverflowMenuItem: () => uw,
        Root: () => iw,
        RootContext: () => aw,
        useBreadcrumbsContext: () => sw
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => xw,
        Label: () => _w,
        Root: () => ww,
        useBadgeContext: () => bw
      });
      var b = {};
      r.r(b), r.d(b, {
        Corner: () => Ew,
        Root: () => Rw,
        Scrollbar: () => Dw,
        Thumb: () => Iw,
        Viewport: () => Nw
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => o_,
        Button: () => s_,
        CloseButton: () => r_,
        Content: () => Ww,
        Description: () => Qw,
        Footer: () => a_,
        Header: () => e_,
        HeaderButton: () => n_,
        HeaderTitle: () => t_,
        Layout: () => Jw,
        Overlay: () => Uw,
        Portal: () => d_,
        Root: () => Zw,
        ScrollArea: () => Yw,
        Title: () => $w,
        Trigger: () => i_,
        useDialogContext: () => Hw
      });
      var _ = {};
      r.r(_), r.d(_, {
        Image: () => B_,
        Root: () => F_,
        StatusIndicator: () => X_,
        useAvatarContext: () => q_
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => rx,
        Dropdown: () => ix,
        DropdownLabel: () => ax,
        Ellipsis: () => tx,
        Item: () => Y_,
        Label: () => lx,
        Next: () => ex,
        Option: () => dx,
        Pages: () => Q_,
        Prev: () => J_,
        ResultsPerPage: () => sx,
        Root: () => $_
      });
      var C = {};
      r.r(C), r.d(C, {
        Icon: () => uC,
        Item: () => cC,
        Label: () => pC,
        Root: () => lC,
        StatusIndicator: () => fC,
        useChipGroupContext: () => dC
      });
      var j = {};
      r.r(j), r.d(j, {
        Anchor: () => nj,
        Arrow: () => sj,
        Close: () => ij,
        Content: () => oj,
        Portal: () => aj,
        Root: () => JC,
        RootContext: () => YC,
        Trigger: () => ej,
        TriggerButton: () => rj
      });
      var P = r(39793);

      function O(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class S extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var k = S;

      function R(e) {
        if ("string" != typeof e) throw new k(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = M.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = D[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new k(e);
          return `#${r}`
        }(e) : e;
        const r = E.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(I(e, 2), 16)), parseInt(I(e[3] || "f", 2), 16) / 255]
        }
        const n = T.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = z.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const s = L.exec(t);
        if (s) {
          const [t, r, n, o] = Array.from(s).slice(1).map(parseFloat);
          if (O(0, 100, r) !== r) throw new k(e);
          if (O(0, 100, n) !== n) throw new k(e);
          return [...V(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new k(e)
      }
      const N = e => parseInt(e.replace(/_/g, ""), 36),
        D = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = N(t.substring(0, 3)),
            n = N(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        I = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        E = new RegExp(`^#${I("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        T = new RegExp(`^#${I("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        z = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${I(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        L = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        M = /^[a-z]+$/i,
        A = e => Math.round(255 * e),
        V = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(A);
          const o = (e % 360 + 360) % 360 / 60,
            s = (1 - Math.abs(2 * n - 1)) * (t / 100),
            a = s * (1 - Math.abs(o % 2 - 1));
          let i = 0,
            d = 0,
            l = 0;
          o >= 0 && o < 1 ? (i = s, d = a) : o >= 1 && o < 2 ? (i = a, d = s) : o >= 2 && o < 3 ? (d = s, l = a) : o >= 3 && o < 4 ? (d = a, l = s) : o >= 4 && o < 5 ? (i = a, l = s) : o >= 5 && o < 6 && (i = s, l = a);
          const c = n - s / 2;
          return [i + c, d + c, l + c].map(A)
        };

      function q(e, t) {
        const [r, n, o, s] = function(e) {
          const [t, r, n, o] = R(e).map((e, t) => 3 === t ? e : e / 255), s = Math.max(t, r, n), a = Math.min(t, r, n), i = (s + a) / 2;
          if (s === a) return [0, 0, i, o];
          const d = s - a;
          return [60 * (t === s ? (r - n) / d + (r < n ? 6 : 0) : r === s ? (n - t) / d + 2 : (t - r) / d + 4), i > .5 ? d / (2 - s - a) : d / (s + a), i, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${O(0,100,100*t).toFixed()}%, ${O(0,100,100*r).toFixed()}%, ${parseFloat(O(0,1,n).toFixed(3))})`
        }(r, n, o - t, s)
      }

      function F(e, t) {
        return q(e, -t)
      }
      var B = r(93082),
        X = r(76182),
        G = r(74631),
        K = r(16398);
      const H = {
          enabled: {
            background: (0, X.Tm)(G.no.enabled.background),
            border: (0, X.Tm)(G.no.enabled.border),
            text: (0, X.Tm)(G.no.enabled.text),
            outline: (0, X.Tm)(G.no.enabled.outline)
          },
          hover: {
            background: (0, X.Tm)(G.no.hover.background),
            border: (0, X.Tm)(G.no.hover.border),
            text: (0, X.Tm)(G.no.hover.text),
            outline: (0, X.Tm)(G.no.hover.outline)
          },
          focus: {
            background: (0, X.Tm)(G.no.focus.background),
            border: (0, X.Tm)(G.no.focus.border),
            text: (0, X.Tm)(G.no.focus.text),
            outline: (0, X.Tm)(G.no.focus.outline)
          },
          pressed: {
            background: (0, X.Tm)(G.no.pressed.background),
            border: (0, X.Tm)(G.no.pressed.border),
            text: (0, X.Tm)(G.no.pressed.text),
            outline: (0, X.Tm)(G.no.pressed.outline)
          },
          disabled: {
            background: (0, X.Tm)(G.no.disabled.background),
            border: (0, X.Tm)(G.no.disabled.border),
            text: (0, X.Tm)(G.no.disabled.text),
            outline: (0, X.Tm)(G.no.disabled.outline)
          },
          loading: {
            background: (0, X.Tm)(G.no.loading.background),
            border: (0, X.Tm)(G.no.loading.border),
            text: (0, X.Tm)(G.no.loading.text),
            outline: (0, X.Tm)(G.no.loading.outline)
          }
        },
        Z = ({
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
          (0, B.useEffect)(() => {
            if (!e.current || !s || !l) return;
            const c = `${s}:${t}:${r}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, K.getOrSet)(c, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = R(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(s);
                return {
                  text: d || (e > t ? X.LU.global.color.black.static[100] : X.LU.global.color.white.static[100]),
                  hover: a || (e >= r ? q(s, n) : F(s, n)),
                  pressed: i || (e >= r ? q(s, o) : F(s, o))
                }
              });
            return e.current.style.setProperty(H.enabled.background, s), e.current.style.setProperty(H.enabled.border, s), e.current.style.setProperty(H.enabled.text, u), e.current.style.setProperty(H.hover.background, f), e.current.style.setProperty(H.hover.border, f), e.current.style.setProperty(H.hover.text, u), e.current.style.setProperty(H.focus.background, f), e.current.style.setProperty(H.focus.border, f), e.current.style.setProperty(H.focus.text, u), e.current.style.setProperty(H.pressed.background, p), e.current.style.setProperty(H.pressed.border, p), e.current.style.setProperty(H.pressed.text, u), e.current.style.setProperty(H.loading.background, f), e.current.style.setProperty(H.loading.border, f), e.current.style.setProperty(H.loading.text, u), () => {
              e.current?.style.removeProperty(H.enabled.background), e.current?.style.removeProperty(H.enabled.border), e.current?.style.removeProperty(H.enabled.text), e.current?.style.removeProperty(H.hover.background), e.current?.style.removeProperty(H.hover.border), e.current?.style.removeProperty(H.hover.text), e.current?.style.removeProperty(H.focus.background), e.current?.style.removeProperty(H.focus.border), e.current?.style.removeProperty(H.focus.text), e.current?.style.removeProperty(H.pressed.background), e.current?.style.removeProperty(H.pressed.border), e.current?.style.removeProperty(H.pressed.text), e.current?.style.removeProperty(H.loading.background), e.current?.style.removeProperty(H.loading.border), e.current?.style.removeProperty(H.loading.text)
            }
          }, [e.current, t, r, n, o, s, a, i, d, l, ...c])
        };
      var U = r(9575),
        W = r(23743);
      r(77278);
      const $ = (0, B.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        Q = () => (0, B.useContext)($),
        Y = () => {
          const {
            platformScale: e
          } = Q();
          return e
        };
      var J = r(99878);
      const ee = e => "dark" === e ? J.xW.dark : J.xW.light;
      const te = () => K.IS_SERVER ? null : document.body;
      (0, B.forwardRef)(({
        children: e,
        className: t,
        container: r = te(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: s,
        defaultPlatformScale: a,
        platformScale: i,
        onPlatformScaleChange: d,
        locale: l = "en-US"
      }, c) => {
        const u = (0, B.useRef)(null),
          f = (0, U.UP)(u, c),
          p = (0, B.useRef)(r),
          {
            ratio: h,
            scale: m
          } = function(e) {
            const [t, r] = (0, B.useState)(e.platformScale || e.defaultPlatformScale), n = (0, B.useCallback)(t => {
              r(t), e.onPlatformScaleChange?.(t)
            }, [e.onPlatformScaleChange]), o = (0, B.useRef)([]), s = () => {
              if (!K.IS_SERVER) {
                for (const {
                    handler: e,
                    matchMedia: t
                  }
                  of o.current) t.removeEventListener("change", e);
                o.current = []
              }
            };
            return (0, B.useEffect)(() => (e.platformScale ? n(e.platformScale) : (() => {
              if (!K.IS_SERVER) {
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
            const r = (0, U.Ub)("(prefers-color-scheme: light)"),
              n = (0, U.Ub)("(prefers-color-scheme: dark)"),
              o = "system" !== e && e || r && "light" || n && "dark" || t,
              s = (0, B.useMemo)(() => ee(o), [o]),
              a = (0, B.useMemo)(() => (e => {
                const t = ee(e);
                return [J.xW.light, J.xW.dark].filter(e => e !== t)
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
          const a = (0, U.ZC)(s),
            i = (0, U.ZC)(e.current);
          (0, B.useEffect)(() => {
            e.current?.classList.contains(J.X6) || e.current?.classList.add(J.X6), e.current?.classList.contains(J.yU) || e.current?.classList.add(J.yU), e.current?.classList.contains(J.Np) || e.current?.classList.add(J.Np), e.current?.classList.add(r), e.current?.classList.remove(...n), a && s && e.current?.classList.contains(a) ? e.current?.classList.replace(a, s) : a && !s && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : s && e.current?.classList.add(s)
          }, [r, s]), (0, B.useEffect)(() => {
            e.current?.setAttribute("lang", o)
          }, [o]), (0, B.useEffect)(() => (t && e.current?.style.setProperty(J.HZ, t.toString()), () => {
            e.current?.style.removeProperty(J.HZ)
          }), [t]), (0, B.useEffect)(() => {
            i?.classList.remove(J.X6), i?.classList.remove(J.yU), i?.classList.remove(r), i?.style.removeProperty(J.HZ), s && i?.classList.remove(s)
          }, [i])
        })({
          locale: l,
          className: t,
          appearanceClass: v,
          otherAppearanceClasses: y,
          currentScale: i ? h : -0,
          container: n ? u : p
        }), (0, P.jsx)($.Provider, {
          value: {
            locale: l,
            defaultColorScheme: s,
            colorScheme: g,
            defaultPlatformScale: a,
            platformScale: m
          },
          children: n ? (0, P.jsx)(W.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var re = r(66892);

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

      function ae(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ie = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        de = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = se(se({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ie(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ae(e.variantClassNames, e => ae(e, e => e.split(" ")[0]))
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
        ce = (0, B.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = le,
          testId: n,
          ...o
        }, s) => {
          const a = Y(),
            i = "string" == typeof r ? r : r?.[a] ?? r.default ?? le,
            d = (0, K.mergeProps)({
              className: de({
                size: i
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, P.jsx)(re.b, {
            label: e,
            children: (0, P.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...d,
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
      var ue = r(81270),
        fe = r(21324);

      function pe(e) {
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

      function he(e, t) {
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
          t % 2 ? he(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = pe(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : he(Object(r)).forEach(function(t) {
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ye(l, n, e.defaultVariants) && (r += " " + c);
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
      var we = ge({
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
        _e = ge({
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
      const Ce = (0, B.forwardRef)(({
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
        const C = (0, B.useRef)(null),
          j = (0, U.UP)(C, x),
          O = Y(),
          S = "string" == typeof d ? d : d?.[O] ?? d.default ?? "MD",
          {
            buttonProps: k
          } = (0, U.sL)((0, K.mergeProps)(_, {
            isLoading: c,
            preventFocusOnPress: f
          }), C);
        Z({
          refs: {
            buttonRef: C
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
        const R = (0, K.mergeProps)({
            className: be({
              appearance: i,
              size: S,
              fullWidth: l,
              iconLeft: !!n,
              iconRight: !!s
            }),
            "data-testid": e
          }, k),
          N = n && fe[n],
          D = s && fe[s],
          I = t ? W.DX : "button",
          E = l && (D || D && N);
        return (0, P.jsxs)(I, {
          ref: j,
          ...R,
          children: [E && (0, P.jsx)("div", {
            className: "foundry_17pcofy14"
          }), N && (0, P.jsx)(N, {
            label: o || "",
            size: S,
            className: (0, ue.clsx)(we({
              size: S
            }), "foundry_17pcofy10")
          }), (0, P.jsx)(W.xV, {
            children: r
          }), D && (0, P.jsx)(D, {
            label: a || "",
            size: S,
            className: (0, ue.clsx)(we({
              size: S
            }), _e({
              fullWidth: l
            }))
          }), c && (0, P.jsx)("div", {
            className: "foundry_17pcofy15",
            children: (0, P.jsx)(ce, {
              label: u || "",
              size: "inline" + ("LG" === S ? "LG" : "MD"),
              hideTrack: !0,
              className: xe({
                size: S
              })
            })
          })]
        })
      });

      function je(e) {
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

      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = je(o)) in n ? Object.defineProperty(n, o, {
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

      function Se(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ke = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Re = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Oe(Oe({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ke(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Se(e.variantClassNames, e => Se(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ne = Re({
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
        De = Re({
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
        Ie = Re({
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
      const Ee = (0, B.forwardRef)(({
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
        const _ = (0, B.useRef)(null),
          x = (0, U.UP)(_, w),
          C = Y(),
          j = "string" == typeof a ? a : a?.[C] ?? a.default ?? "LG",
          {
            buttonProps: O
          } = (0, U.sL)((0, K.mergeProps)(b, {
            isLoading: d,
            preventFocusOnPress: c
          }), _);
        Z({
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
        const S = (0, K.mergeProps)({
            className: De({
              appearance: o,
              size: j,
              fullWidth: s
            }),
            "data-testid": e
          }, O),
          k = fe[r],
          R = t ? W.DX : "button";
        return (0, P.jsxs)(R, {
          ref: x,
          ...S,
          children: [k && (0, P.jsx)(k, {
            label: n || "",
            size: j,
            className: Ne({
              size: j
            })
          }), (0, P.jsx)(W.xV, {
            children: i
          }), d && (0, P.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, P.jsx)(ce, {
              label: l || "",
              size: j && "SM" !== j ? `inline${j}` : "inlineMD",
              hideTrack: !0,
              className: Ie({
                size: j
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

      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ze(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Te(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ze(Object(r)).forEach(function(t) {
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
      var Ae = (e, t, r) => {
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
            for (var [l, c] of e.compoundVariants) Ae(l, n, e.defaultVariants) && (r += " " + c);
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
      const qe = (0, B.forwardRef)(({
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
          c = o ? W.DX : d;
        return (0, P.jsx)(c, {
          ref: i,
          className: (0, ue.clsx)(Ve({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": s,
          ...a
        })
      });

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

      function Xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Be(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Fe(o)) in n ? Object.defineProperty(n, o, {
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

      function Ge(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ke = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        He = "var(--foundry_9dxgbc2)",
        Ze = "var(--foundry_9dxgbc3)",
        Ue = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Xe(Xe({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ke(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ge(e.variantClassNames, e => Ge(e, e => e.split(" ")[0]))
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
        We = "var(--foundry_9dxgbc0)",
        $e = "var(--foundry_9dxgbc1)";
      const Qe = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: s = "MD",
        ...a
      }, i) => {
        const d = Y(),
          l = "string" == typeof s ? s : s?.[d] ?? s.default ?? "MD",
          c = (0, K.mergeProps)({
            className: Ue({
              size: l
            }),
            "data-testid": t,
            style: (0, X.DI)({
              [We]: n?.pulseColorBackground,
              [$e]: n?.pulseColorForeground,
              [He]: n?.gradientColorBackground,
              [Ze]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          u = e ? W.DX : "div";
        return (0, P.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, P.jsx)(W.xV, {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ye(o)) in n ? Object.defineProperty(n, o, {
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) rt(l, n, e.defaultVariants) && (r += " " + c);
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
      const st = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? W.DX : "p",
          i = (0, K.mergeProps)({
            className: ot({
              size: n,
              appearance: r
            })
          }, o);
        return (0, P.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var at = nt({
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
      const it = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const s = e ? W.DX : "p",
            a = (0, K.mergeProps)({
              className: at({
                appearance: r
              })
            }, n);
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        dt = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? W.DX : "h1",
            s = (0, K.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        });
      var lt = nt({
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
      const ct = (0, B.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? W.DX : `h${t}`,
          a = (0, K.mergeProps)(n, {
            className: lt({
              level: t
            })
          });
        return (0, P.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...a
        })
      });
      var ut = nt({
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
      const ft = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? W.DX : "p",
          i = (0, K.mergeProps)({
            className: ut({
              size: n,
              appearance: r
            })
          }, o);
        return (0, P.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var pt = nt({
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
      const ht = {
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
        mt = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const s = e ? W.DX : ht[r] || "span",
            a = (0, K.mergeProps)(n, {
              className: pt({
                semantic: r
              })
            });
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        });
      var vt = r(35812),
        yt = r(67347);
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

      function wt(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -bt(t - e, r - t, n) + t : e > r ? +bt(e - r, r - t, n) + r : e
      }

      function _t(e, t, r) {
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

      function Ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xt(Object(r), !0).forEach(function(t) {
            _t(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const jt = {
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
      const Ot = ["enter", "leave"];
      const St = ["gotpointercapture", "lostpointercapture"];

      function kt(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = St.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Rt(e) {
        return "touches" in e
      }

      function Nt(e) {
        return Rt(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Dt(e) {
        return Rt(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function It(e, t) {
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

      function Et(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return It(r, n)
      }

      function Tt(e) {
        const t = Dt(e);
        return Rt(e) ? t.identifier : t.pointerId
      }

      function zt(e) {
        const t = Dt(e);
        return [t.clientX, t.clientY]
      }

      function Lt(e) {
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

      function At() {}

      function Vt(...e) {
        return 0 === e.length ? At : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function qt(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Ft {
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
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Mt(r.bounds, t)), this.setup && this.setup()), t.movement = u, this.computeOffset()));
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
              return [wt(t, s, a, n), wt(r, i, d, o)]
            }(t._bounds, t.offset, w), t.delta = gt.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
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
          const n = this.handler(Ct(Ct(Ct({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Bt extends Ft {
        constructor(...e) {
          super(...e), _t(this, "aliasKey", "xy")
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
      const Xt = e => e,
        Gt = {
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
                return gt.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? gt.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Xt
          },
          threshold: e => gt.toVector(e, 0)
        },
        Kt = Ct(Ct({}, Gt), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Kt.bounds(e(t));
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
        Ht = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Zt = "undefined" != typeof window && window.document && window.document.createElement;

      function Ut() {
        return Zt && "ontouchstart" in window
      }
      const Wt = {
          isBrowser: Zt,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Ut(),
          touchscreen: Ut() || Zt && window.navigator.maxTouchPoints > 1,
          pointer: Zt && "onpointerdown" in window,
          pointerLock: Zt && "exitPointerLock" in window.document
        },
        $t = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Qt = Ct(Ct({}, Kt), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Wt.pointerLock, Wt.touch && r ? "touch" : this.pointerLock ? "mouse" : Wt.pointer && !o ? "pointer" : Wt.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Wt.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
          axisThreshold: e => e ? Ct(Ct({}, $t), e) : $t,
          keyboardDisplacement: (e = 10) => e
        });

      function Yt(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [s, a] = e._direction;
        (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Jt = Ct(Ct({}, Gt), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Wt.touch && Wt.gesture) return "gesture";
            if (Wt.touch && n) return "touch";
            if (Wt.touchscreen) {
              if (Wt.pointer) return "pointer";
              if (Wt.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = qt(Mt(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              s = e => {
                const t = qt(Mt(n, e), {
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
        er = Ct(Ct({}, Kt), {}, {
          mouseOnly: (e = !0) => e
        }),
        tr = Kt,
        rr = Kt,
        nr = Ct(Ct({}, Kt), {}, {
          mouseOnly: (e = !0) => e
        }),
        or = new Map,
        sr = new Map;

      function ar(e) {
        or.set(e.key, e.engine), sr.set(e.key, e.resolver)
      }
      const ir = {
          key: "drag",
          engine: class extends Bt {
            constructor(...e) {
              super(...e), _t(this, "ingKey", "dragging")
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
                e._bounds = Kt.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Tt(e), r._pointerActive = !0, this.computeValues(zt(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Nt(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Tt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = zt(e);
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
              const n = Tt(e);
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
              const t = Ht[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, gt.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Ht && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Qt
        },
        dr = {
          key: "hover",
          engine: class extends Bt {
            constructor(...e) {
              super(...e), _t(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(zt(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = zt(e);
              t._movement = t._delta = gt.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: nr
        },
        lr = {
          key: "move",
          engine: class extends Bt {
            constructor(...e) {
              super(...e), _t(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(zt(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = zt(e),
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
        cr = {
          key: "pinch",
          engine: class extends Ft {
            constructor(...e) {
              super(...e), _t(this, "ingKey", "pinching"), _t(this, "aliasKey", "da")
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
              const n = Et(e, t._touchIds);
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
              const t = Et(e, this.state._touchIds);
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
              t._delta = [-Lt(e)[1] / 100 * t.offset[0], 0], gt.addTo(t._movement, t._delta), Yt(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
        ur = {
          key: "scroll",
          engine: class extends Bt {
            constructor(...e) {
              super(...e), _t(this, "ingKey", "scrolling")
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
          engine: class extends Bt {
            constructor(...e) {
              super(...e), _t(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Lt(e), gt.addTo(t._movement, t._delta), Yt(t), this.compute(e), this.emit()
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
      const pr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Wt.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        hr = ["target", "eventOptions", "window", "enabled", "transform"];

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
          _t(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const s = this._listeners,
            a = function(e, t = "") {
              const r = jt[e];
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
      class yr {
        constructor() {
          _t(this, "_timeouts", new Map)
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
          _t(this, "gestures", new Set), _t(this, "_targetEventStore", new vr(this)), _t(this, "gestureEventStores", {}), _t(this, "gestureTimeoutStores", {}), _t(this, "handlers", {}), _t(this, "config", {}), _t(this, "pointerIds", new Set), _t(this, "touchIds", new Set), _t(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && br(t, "drag"), r.wheel && br(t, "wheel"), r.scroll && br(t, "scroll"), r.move && br(t, "move"), r.pinch && br(t, "pinch"), r.hover && br(t, "hover")
        }
        setEventIds(e) {
          return Rt(e) ? (this.touchIds = new Set(function(e) {
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
              }(n, hr);
            if (r.shared = mr({
                target: o,
                eventOptions: s,
                window: a,
                enabled: i,
                transform: d
              }, pr), t) {
              const e = sr.get(t);
              r[t] = mr(Ct({
                shared: r.shared
              }, l), e)
            } else
              for (const e in l) {
                const t = sr.get(e);
                t && (r[e] = mr(Ct({
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
                  s = wr(r, o.eventOptions, !!n);
                o.enabled && new(or.get(t))(this, e, t).bind(s)
              }
              const o = wr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](Ct(Ct({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = Vt(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: s
              } = kt(e);
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
      const wr = (e, t, r) => (n, o, s, a = {}, i = !1) => {
          var d, l;
          const c = null !== (d = a.capture) && void 0 !== d ? d : t.capture,
            u = null !== (l = a.passive) && void 0 !== l ? l : t.passive;
          let f = i ? n : function(e, t = "", r = !1) {
            const n = jt[e],
              o = n && n[t] || t;
            return "on" + Pt(e) + Pt(o) + (function(e = !1, t) {
              return e && !Ot.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && u && (f += "Passive"), e[f] = e[f] || [], e[f].push(s)
        },
        _r = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function xr(e, t, r, n, o, s) {
        if (!e.has(r)) return;
        if (!or.has(n)) return;
        const a = r + "Start",
          i = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && i in t && t[i](e), n
        }, s[n] = s[n] || {}
      }

      function Cr(e, t = {}, r, n) {
        const o = B.useMemo(() => new gr(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), B.useEffect(o.effect.bind(o)), B.useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function jr(e, t) {
        const r = ([ir, cr, ur, fr, lr, dr].forEach(ar), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) _r.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), s = {};
            return xr(o, r, "onDrag", "drag", s, t), xr(o, r, "onWheel", "wheel", s, t), xr(o, r, "onScroll", "scroll", s, t), xr(o, r, "onPinch", "pinch", s, t), xr(o, r, "onMove", "move", s, t), xr(o, r, "onHover", "hover", s, t), {
              handlers: s,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return Cr(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const Pr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Or = ([e, t]) => ({
        x: e,
        y: t
      }), Sr = (e, t) => (e.x = t.x, e.y = t.y, e), kr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Rr = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Nr = (e, t, r) => Math.min(Math.max(e, t), r);

      function Dr() {
        return Dr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Dr.apply(null, arguments)
      }
      var Ir = ["shift", "alt", "meta", "mod", "ctrl"],
        Er = {
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

      function Tr(e) {
        return (e && Er[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function zr(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Lr(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Tr(e)
        });
        return Dr({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Ir.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && Vr([Tr(e.key), Tr(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && qr([Tr(e.key), Tr(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Mr.clear()
      });
      var Mr = new Set;

      function Ar(e) {
        return Array.isArray(e)
      }

      function Vr(e) {
        var t = Array.isArray(e) ? e : [e];
        Mr.has("meta") && Mr.forEach(function(e) {
          return ! function(e) {
            return Ir.includes(e)
          }(e) && Mr.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Mr.add(e.toLowerCase())
        })
      }

      function qr(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Mr.clear() : t.forEach(function(e) {
          return Mr.delete(e.toLowerCase())
        })
      }

      function Fr(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          s = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && s ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Ar(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Br = (0, B.createContext)(void 0);

      function Xr(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, P.jsx)(Br.Provider, {
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
      var Kr = (0, B.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Hr = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, B.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            s = o[0],
            a = o[1],
            i = (0, B.useState)([]),
            d = i[0],
            l = i[1],
            c = (0, B.useCallback)(function(e) {
              a(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            u = (0, B.useCallback)(function(e) {
              a(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, B.useCallback)(function(e) {
              a(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            p = (0, B.useCallback)(function(e) {
              l(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, B.useCallback)(function(e) {
              l(function(t) {
                return t.filter(function(t) {
                  return !Gr(t, e)
                })
              })
            }, []);
          return (0, P.jsx)(Kr.Provider, {
            value: {
              enabledScopes: s,
              hotkeys: d,
              enableScope: c,
              disableScope: u,
              toggleScope: f
            },
            children: (0, P.jsx)(Xr, {
              addHotkey: p,
              removeHotkey: h,
              children: n
            })
          })
        },
        Zr = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Ur = "undefined" != typeof window ? B.useLayoutEffect : B.useEffect;

      function Wr(e, t, r, n) {
        var o = (0, B.useState)(null),
          s = o[0],
          a = o[1],
          i = (0, B.useRef)(!1),
          d = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          l = Ar(e) ? e.join(null == d ? void 0 : d.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          u = (0, B.useCallback)(t, null != c ? c : []),
          f = (0, B.useRef)(u);
        f.current = c ? u : t;
        var p = function(e) {
            var t = (0, B.useRef)(void 0);
            return Gr(t.current, e) || (t.current = e), t.current
          }(d),
          h = (0, B.useContext)(Kr).enabledScopes,
          m = (0, B.useContext)(Br);
        return Ur(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Fr(e, ["input", "textarea", "select"]) || Fr(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== s) {
                    var n = s.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== s && !s.contains(n.activeElement)) return void Zr(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && zr(l, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = Lr(r, null == p ? void 0 : p.combinationKey);
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
                          y = Tr(f),
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
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (Ar(n = c) ? n : n.split(o)).every(function(e) {
                          return Mr.has(e.trim().toLowerCase())
                        })) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && i.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void Zr(e);
                      f.current(e, o), t || (i.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (Vr(Tr(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (qr(Tr(e.code)), i.current = !1, null != p && p.keyup && r(e, !0))
              },
              a = s || (null == d ? void 0 : d.document) || document;
            return a.addEventListener("keyup", o, null == d ? void 0 : d.eventListenerOptions), a.addEventListener("keydown", n, null == d ? void 0 : d.eventListenerOptions), m && zr(l, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return m.addHotkey(Lr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                a.removeEventListener("keyup", o, null == d ? void 0 : d.eventListenerOptions), a.removeEventListener("keydown", n, null == d ? void 0 : d.eventListenerOptions), m && zr(l, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return m.removeHotkey(Lr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [s, l, p, h]), a
      }

      function $r(e) {
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

      function Qr(e, t) {
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
          t % 2 ? Qr(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = $r(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var en = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tn = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Yr(Yr({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) en(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jr(e.variantClassNames, e => Jr(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rn = tn({
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
        nn = tn({
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
      const on = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        sn = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        an = (0, X.Tm)("var(--foundry_1a74xwb0)");
      var dn = r(54422),
        ln = r(57338),
        cn = r(74775);
      const un = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, s] = (0, B.useState)(null);
          return (0, B.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              s(e.default)
            })
          }, [r]), o ? (0, P.jsx)(dn.A, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        fn = {
          "en-US": r.e(2571).then(r.bind(r, 52571)),
          "de-DE": r.e(5056).then(r.bind(r, 75056)),
          "es-ES": r.e(3694).then(r.bind(r, 53694)),
          "es-MX": r.e(8683).then(r.bind(r, 58683)),
          "fr-FR": r.e(906).then(r.bind(r, 30906)),
          "it-IT": r.e(2e3).then(r.bind(r, 72e3)),
          "ja-JP": r.e(755).then(r.bind(r, 60755)),
          "ko-KR": r.e(4537).then(r.bind(r, 54537)),
          "pl-PL": r.e(4078).then(r.bind(r, 94078)),
          "pt-BR": r.e(2062).then(r.bind(r, 92062)),
          "ru-RU": r.e(3884).then(r.bind(r, 53884)),
          "zh-CN": r.e(277).then(r.bind(r, 50277)),
          "zh-TW": r.e(7645).then(r.bind(r, 37645))
        };
      class pn {
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
          return r ? t : Nr(t, this.max[e], this.min[e])
        }
      }
      class hn {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Rr(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.step = this.vFill - this.initial, this.max = this.getMax(), this.min = this.getMin()
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Rr(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Rr(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class mn {
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
      class vn {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Sr(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Sr(this.prevTap, {
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
      class yn {
        slide;
        trigger = null;
        thumbnail = null;
        containerOpacity = "1";
        containerBounds = null;
        containerRadius = "";
        placeholderFit = "";
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
          this.placeholderFit = e.objectFit, this.placeholderPosition = e.objectPosition, this.placeholderScale = "none" === e.scale ? void 0 : e.scale, this.placeholderTransform = e.transform, this.placeholderRadius = e.borderRadius || `${e.borderTopLeftRadius} ${e.borderTopRightRadius} ${e.borderBottomRightRadius} ${e.borderBottomLeftRadius}`
        }
        setTriggerStyles() {
          const e = getComputedStyle(this.trigger);
          this.containerOpacity = e.opacity, this.containerRadius = e.borderRadius || `${e.borderTopLeftRadius} ${e.borderTopRightRadius} ${e.borderBottomRightRadius} ${e.borderBottomLeftRadius}`
        }
        correctImageSize() {
          const e = this.thumbnail.naturalWidth,
            t = this.thumbnail.naturalHeight,
            r = this.slide.panAreaSize.w / e,
            n = this.slide.panAreaSize.h / t;
          this.width = n > r ? this.slide.panAreaSize.w : e * n, this.height = r > n ? this.slide.panAreaSize.h : t * r
        }
      }
      class gn {
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
      class bn extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class wn extends mn {
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
          if (!this.dispatch(e, new bn(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class _n {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Or(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Sr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Or(e);
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
            s = Sr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let a = Sr({
            x: 0,
            y: 0
          }, s);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Sr(this.startPan, s)), n && (a = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), a = {
            x: this.slide.bounds.correctPan("x", a.x),
            y: this.slide.bounds.correctPan("y", a.y)
          }, this.slide.setZoomLevel(t, !1), d = s, ((i = a).x !== d.x || i.y !== d.y || n || o) && (Sr(this.slide.pan, a), this.slide.setZoomLevel(r))
        }
      }
      class xn {
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
      class Cn extends mn {
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
          super(), this.width = e, this.height = t, this.opener = new yn({
            slide: this
          }), this.bounds = new pn({
            slide: this
          }), this.dragHandler = new vn({
            options: s,
            slide: this
          }), this.scrollWheel = new gn({
            slide: this
          }), this.zoomHandler = new _n({
            slide: this
          }), this.zoomLevels = new hn({
            options: r,
            slide: this
          }), this.tapHandler = new wn({
            options: n,
            slide: this
          }), this.panAreaSize = new xn({
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
          e = Rr(e), r || (e = Nr(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), kr(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), kr(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Sr(this.pan, this.bounds.center)
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
      var jn = r(74144);
      const Pn = (0, ln.YK)({
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
      var On = r(76608),
        Sn = r(38957);

      function kn(e) {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = kn(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rn(Object(r)).forEach(function(t) {
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
        En = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Nn(Nn({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) In(l, n, e.defaultVariants) && (r += " " + c);
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
        Tn = En({
          defaultClassName: "foundry_1gea4150",
          variantClassNames: {
            size: {
              LG: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc",
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd",
              SM: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
              XS: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf"
            },
            appearance: {
              default: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
              bold: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdi",
              hyperlink: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const zn = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? Sn.DX : "p",
          i = (0, On.mergeProps)({
            className: Tn({
              size: n,
              appearance: r
            })
          }, o);
        return (0, P.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var Ln = En({
        defaultClassName: "foundry_ujgffp0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdt foundry_tdsdcd0 foundry_tdsdcdv",
            bold: "foundry_tdsdcdt foundry_tdsdcd0 foundry_tdsdcdw"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const s = e ? Sn.DX : "p",
          a = (0, On.mergeProps)({
            className: Ln({
              appearance: r
            })
          }, n);
        return (0, P.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...a
        })
      }), (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? Sn.DX : "h1",
          s = (0, On.mergeProps)({
            className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
          }, r);
        return (0, P.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...s
        })
      });
      var Mn = En({
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
      (0, B.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? Sn.DX : `h${t}`,
          a = (0, On.mergeProps)(n, {
            className: Mn({
              level: t
            })
          });
        return (0, P.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...a
        })
      });
      var An = En({
        defaultClassName: "foundry_370tab0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdk foundry_tdsdcd0 foundry_tdsdcdm",
            MD: "foundry_tdsdcdk foundry_tdsdcd0 foundry_tdsdcdn",
            SM: "foundry_tdsdcdk foundry_tdsdcd0 foundry_tdsdcdo",
            XS: "foundry_tdsdcdk foundry_tdsdcd0 foundry_tdsdcdp",
            XXS: "foundry_tdsdcdk foundry_tdsdcd0 foundry_tdsdcdq"
          },
          appearance: {
            default: "foundry_tdsdcdk foundry_tdsdcd0 foundry_tdsdcdr",
            bold: "foundry_tdsdcdk foundry_tdsdcd0 foundry_tdsdcds"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? Sn.DX : "p",
          i = (0, On.mergeProps)({
            className: An({
              size: n,
              appearance: r
            })
          }, o);
        return (0, P.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var Vn = En({
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
      const qn = {
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
      };
      (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        semantic: r = "default",
        ...n
      }, o) => {
        const s = e ? Sn.DX : qn[r] || "span",
          a = (0, On.mergeProps)(n, {
            className: Vn({
              semantic: r
            })
          });
        return (0, P.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...a
        })
      });
      var Fn = "foundry_bc732x1";
      const Bn = (0, B.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Wr(e, e => r?.(e), [r]), (0, P.jsx)(zn, {
        size: "XS",
        className: (0, ue.clsx)("foundry_bc732x0", {
          [Fn]: t
        }),
        asChild: !0,
        children: (0, P.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Xn = so(),
        Gn = e => to(e, Xn),
        Kn = so();
      Gn.write = e => to(e, Kn);
      var Hn = so();
      Gn.onStart = e => to(e, Hn);
      var Zn = so();
      Gn.onFrame = e => to(e, Zn);
      var Un = so();
      Gn.onFinish = e => to(e, Un);
      var Wn = [];
      Gn.setTimeout = (e, t) => {
        const r = Gn.now() + t,
          n = () => {
            const e = Wn.findIndex(e => e.cancel == n);
            ~e && Wn.splice(e, 1), Jn -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Wn.splice($n(r), 0, o), Jn += 1, ro(), o
      };
      var $n = e => ~(~Wn.findIndex(t => t.time > e) || ~Wn.length);
      Gn.cancel = e => {
        Hn.delete(e), Zn.delete(e), Un.delete(e), Xn.delete(e), Kn.delete(e)
      }, Gn.sync = e => {
        eo = !0, Gn.batchedUpdates(e), eo = !1
      }, Gn.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Gn.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Hn.delete(r), t = null
        }, n
      };
      var Qn = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Gn.use = e => Qn = e, Gn.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Gn.batchedUpdates = e => e(), Gn.catch = console.error, Gn.frameLoop = "always", Gn.advance = () => {
        "demand" !== Gn.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : oo()
      };
      var Yn = -1,
        Jn = 0,
        eo = !1;

      function to(e, t) {
        eo ? (t.delete(e), e(0)) : (t.add(e), ro())
      }

      function ro() {
        Yn < 0 && (Yn = 0, "demand" !== Gn.frameLoop && Qn(no))
      }

      function no() {
        ~Yn && (Qn(no), Gn.batchedUpdates(oo))
      }

      function oo() {
        const e = Yn;
        Yn = Gn.now();
        const t = $n(Yn);
        t && (ao(Wn.splice(0, t), e => e.handler()), Jn -= t), Jn ? (Hn.flush(), Xn.flush(e ? Math.min(64, Yn - e) : 16.667), Zn.flush(), Kn.flush(), Un.flush()) : Yn = -1
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
            t.size && (e = new Set, Jn -= t.size, ao(t, t => t(r) && e.add(t)), Jn += e.size, t = e)
          }
        }
      }

      function ao(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Gn.catch(e)
          }
        })
      }
      var io = Object.defineProperty,
        lo = {};

      function co() {}((e, t) => {
        for (var r in t) io(e, r, {
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
      var mo = e => uo.und(e) ? [] : uo.arr(e) ? e : [e];

      function vo(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), po(r, t)
        }
      }
      var yo, go, bo = (e, ...t) => vo(e, e => e(...t)),
        wo = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        _o = null,
        xo = !1,
        Co = co,
        jo = e => {
          e.to && (go = e.to), e.now && (Gn.now = e.now), void 0 !== e.colors && (_o = e.colors), null != e.skipAnimation && (xo = e.skipAnimation), e.createStringInterpolator && (yo = e.createStringInterpolator), e.requestAnimationFrame && Gn.use(e.requestAnimationFrame), e.batchedUpdates && (Gn.batchedUpdates = e.batchedUpdates), e.willAdvance && (Co = e.willAdvance), e.frameLoop && (Gn.frameLoop = e.frameLoop)
        },
        Po = new Set,
        Oo = [],
        So = [],
        ko = 0,
        Ro = {
          get idle() {
            return !Po.size && !Oo.length
          },
          start(e) {
            ko > e.priority ? (Po.add(e), Gn.onStart(No)) : (Do(e), Gn(Eo))
          },
          advance: Eo,
          sort(e) {
            if (ko) Gn.onFrame(() => Ro.sort(e));
            else {
              const t = Oo.indexOf(e);
              ~t && (Oo.splice(t, 1), Io(e))
            }
          },
          clear() {
            Oo = [], Po.clear()
          }
        };

      function No() {
        Po.forEach(Do), Po.clear(), Gn(Eo)
      }

      function Do(e) {
        Oo.includes(e) || Io(e)
      }

      function Io(e) {
        Oo.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(Oo), 0, e)
      }

      function Eo(e) {
        const t = So;
        for (let r = 0; r < Oo.length; r++) {
          const n = Oo[r];
          ko = n.priority, n.idle || (Co(n), n.advance(e), n.idle || t.push(n))
        }
        return ko = 0, (So = Oo).length = 0, (Oo = t).length > 0
      }
      var To = "[-+]?\\d*\\.?\\d+",
        zo = To + "%";

      function Lo(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Mo = new RegExp("rgb" + Lo(To, To, To)),
        Ao = new RegExp("rgba" + Lo(To, To, To, To)),
        Vo = new RegExp("hsl" + Lo(To, zo, zo)),
        qo = new RegExp("hsla" + Lo(To, zo, zo, To)),
        Fo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Bo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Xo = /^#([0-9a-fA-F]{6})$/,
        Go = /^#([0-9a-fA-F]{8})$/;

      function Ko(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Ho(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          s = Ko(o, n, e + 1 / 3),
          a = Ko(o, n, e),
          i = Ko(o, n, e - 1 / 3);
        return Math.round(255 * s) << 24 | Math.round(255 * a) << 16 | Math.round(255 * i) << 8
      }

      function Zo(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Uo(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Wo(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function $o(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Qo(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Xo.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : _o && void 0 !== _o[e] ? _o[e] : (t = Mo.exec(e)) ? (Zo(t[1]) << 24 | Zo(t[2]) << 16 | Zo(t[3]) << 8 | 255) >>> 0 : (t = Ao.exec(e)) ? (Zo(t[1]) << 24 | Zo(t[2]) << 16 | Zo(t[3]) << 8 | Wo(t[4])) >>> 0 : (t = Fo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Go.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Bo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Vo.exec(e)) ? (255 | Ho(Uo(t[1]), $o(t[2]), $o(t[3]))) >>> 0 : (t = qo.exec(e)) ? (Ho(Uo(t[1]), $o(t[2]), $o(t[3])) | Wo(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Yo = (e, t, r) => {
          if (uo.fun(e)) return e;
          if (uo.arr(e)) return Yo({
            range: e,
            output: t,
            extrapolate: r
          });
          if (uo.str(e.output[0])) return yo(e);
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
        Jo = 1.70158,
        es = 1.525 * Jo,
        ts = Jo + 1,
        rs = 2 * Math.PI / 3,
        ns = 2 * Math.PI / 4.5,
        os = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        ss = {
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
          easeInBack: e => ts * e * e * e - Jo * e * e,
          easeOutBack: e => 1 + ts * Math.pow(e - 1, 3) + Jo * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - es) / 2 : (Math.pow(2 * e - 2, 2) * ((es + 1) * (2 * e - 2) + es) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * rs),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * rs) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ns) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ns) / 2 + 1,
          easeInBounce: e => 1 - os(1 - e),
          easeOutBounce: os,
          easeInOutBounce: e => e < .5 ? (1 - os(1 - 2 * e)) / 2 : (1 + os(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        as = Symbol.for("FluidValue.get"),
        is = Symbol.for("FluidValue.observers"),
        ds = e => Boolean(e && e[as]),
        ls = e => e && e[as] ? e[as]() : e,
        cs = e => e[is] || null;

      function us(e, t) {
        const r = e[is];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var fs = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            ps(this, e)
          }
        },
        ps = (e, t) => ys(e, as, t);

      function hs(e, t) {
        if (e[as]) {
          let r = e[is];
          r || ys(e, is, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function ms(e, t) {
        const r = e[is];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[is] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var vs, ys = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        gs = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        bs = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ws = new RegExp(`(${gs.source})(%|[a-z]+)`, "i"),
        _s = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        xs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Cs = e => {
          const [t, r] = js(e);
          if (!t || wo()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && xs.test(r) ? Cs(r) : r || e
        },
        js = e => {
          const t = xs.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Ps = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        Os = e => {
          vs || (vs = _o ? new RegExp(`(${Object.keys(_o).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => ls(e).replace(xs, Cs).replace(bs, Qo).replace(vs, Qo)),
            r = t.map(e => e.match(gs).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Yo({
              ...e,
              output: t
            }));
          return e => {
            const r = !ws.test(t[0]) && t.find(e => ws.test(e))?.replace(gs, "");
            let n = 0;
            return t[0].replace(gs, () => `${o[n++](e)}${r||""}`).replace(_s, Ps)
          }
        },
        Ss = "react-spring: ",
        ks = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Ss}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Rs = ks(console.warn),
        Ns = ks(console.warn);

      function Ds(e) {
        return uo.str(e) && ("#" == e[0] || /\d/.test(e) || !wo() && xs.test(e) || e in (_o || {}))
      }
      var Is = wo() ? B.useEffect : B.useLayoutEffect;

      function Es() {
        const e = (0, B.useState)()[1],
          t = (() => {
            const e = (0, B.useRef)(!1);
            return Is(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Ts = e => (0, B.useEffect)(e, zs),
        zs = [],
        Ls = Symbol.for("Animated:node"),
        Ms = e => e && e[Ls],
        As = (e, t) => {
          return r = e, n = Ls, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Vs = e => e && e[Ls] && e[Ls].getPayload(),
        qs = class {
          constructor() {
            As(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Fs = class e extends qs {
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
        Bs = class e extends Fs {
          constructor(e) {
            super(0), this._string = null, this._toString = Yo({
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
            e && (this._toString = Yo({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Xs = {
          dependencies: null
        },
        Gs = class extends qs {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return ho(this.source, (r, n) => {
              var o;
              (o = r) && o[Ls] === o ? t[n] = r.getValue(e) : ds(r) ? t[n] = ls(r) : e || (t[n] = r)
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
            Xs.dependencies && ds(e) && Xs.dependencies.add(e);
            const t = Vs(e);
            t && po(t, e => this.add(e))
          }
        },
        Ks = class e extends Gs {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Hs)), !0)
          }
        };

      function Hs(e) {
        return (Ds(e) ? Bs : Fs).create(e)
      }

      function Zs(e) {
        const t = Ms(e);
        return t ? t.constructor : uo.arr(e) ? Ks : Ds(e) ? Bs : Fs
      }
      var Us = (e, t) => {
          const r = !uo.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, B.forwardRef)((n, o) => {
            const s = (0, B.useRef)(null),
              a = r && (0, B.useCallback)(e => {
                s.current = function(e, t) {
                  return e && (uo.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [i, d] = function(e, t) {
                const r = new Set;
                return Xs.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Gs(e), Xs.dependencies = null, [e, r]
              }(n, t),
              l = Es(),
              c = () => {
                const e = s.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && l()
              },
              u = new Ws(c, d),
              f = (0, B.useRef)(void 0);
            Is(() => (f.current = u, po(d, e => hs(e, u)), () => {
              f.current && (po(f.current.deps, e => ms(e, f.current)), Gn.cancel(f.current.update))
            })), (0, B.useEffect)(c, []), Ts(() => () => {
              const e = f.current;
              po(e.deps, t => ms(t, e))
            });
            const p = t.getComponentProps(i.getValue());
            return B.createElement(e, {
              ...p,
              ref: a
            })
          })
        },
        Ws = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Gn.write(this.update)
          }
        },
        $s = Symbol.for("AnimatedComponent"),
        Qs = e => uo.str(e) ? e : e && uo.str(e.displayName) ? e.displayName : uo.fun(e) && e.name || null;

      function Ys(e, ...t) {
        return uo.fun(e) ? e(...t) : e
      }
      var Js = (e, t) => !0 === e || !!(t && e && (uo.fun(e) ? e(t) : mo(e).includes(t))),
        ea = (e, t) => uo.obj(e) ? t && e[t] : e,
        ta = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        ra = e => e,
        na = (e, t = ra) => {
          let r = oa;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            uo.und(r) || (n[o] = r)
          }
          return n
        },
        oa = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        sa = {
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

      function aa(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (ho(e, (e, n) => {
              sa[n] || (t[n] = e, r++)
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

      function ia(e) {
        return e = ls(e), uo.arr(e) ? e.map(ia) : Ds(e) ? lo.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function da(e) {
        return uo.fun(e) || uo.arr(e) && uo.obj(e[0])
      }

      function la(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var ca = {
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
        ua = {
          ...ca.default,
          mass: 1,
          damping: 1,
          easing: ss.linear,
          clamp: !1
        },
        fa = class {
          constructor() {
            this.velocity = 0, Object.assign(this, ua)
          }
        };

      function pa(e, t) {
        if (uo.und(t.decay)) {
          const r = !uo.und(t.tension) || !uo.und(t.friction);
          !r && uo.und(t.frequency) && uo.und(t.damping) && uo.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var ha = [],
        ma = class {
          constructor() {
            this.changed = !1, this.values = ha, this.toValues = null, this.fromValues = ha, this.config = new fa, this.immediate = !1
          }
        };

      function va(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: s
      }) {
        return new Promise((a, i) => {
          let d, l, c = Js(r.cancel ?? n?.cancel, t);
          if (c) p();
          else {
            uo.und(r.pause) || (o.paused = Js(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Js(e, t)), d = Ys(r.delay || 0, t), e ? (o.resumeQueue.add(f), s.pause()) : (s.resume(), f())
          }

          function u() {
            o.resumeQueue.add(f), o.timeouts.delete(l), l.cancel(), d = l.time - Gn.now()
          }

          function f() {
            d > 0 && !lo.skipAnimation ? (o.delayed = !0, l = Gn.setTimeout(p, d), o.pauseQueue.add(u), o.timeouts.add(l)) : p()
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
      var ya = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? wa(e.get()) : t.every(e => e.noop) ? ga(e.get()) : ba(e.get(), t.every(e => e.finished)),
        ga = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        ba = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        wa = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function _a(e, t, r, n) {
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
          const l = na(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, u;
          const f = new Promise((e, t) => (c = e, u = t)),
            p = e => {
              const t = o <= (r.cancelId || 0) && wa(n) || o !== r.asyncId && ba(n, !1);
              if (t) throw e.result = t, u(e), e
            },
            h = (e, t) => {
              const s = new Ca,
                a = new ja;
              return (async () => {
                if (lo.skipAnimation) throw xa(r), a.result = ba(n, !1), u(a), a;
                p(s);
                const i = uo.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                i.parentId = o, ho(l, (e, t) => {
                  uo.und(i[t]) && (i[t] = e)
                });
                const d = await n.start(i);
                return p(s), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), d
              })()
            };
          let m;
          if (lo.skipAnimation) return xa(r), ba(n, !1);
          try {
            let t;
            t = uo.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, n.stop.bind(n))), await Promise.all([t.then(c), f]), m = ba(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof Ca) m = e.result;
            else {
              if (!(e instanceof ja)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = s, r.asyncTo = s ? i : void 0, r.promise = s ? d : void 0)
          }
          return uo.fun(a) && Gn.batchedUpdates(() => {
            a(m, n, n.item)
          }), m
        })() : d
      }

      function xa(e, t) {
        vo(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Ca = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        ja = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Pa = e => e instanceof Sa,
        Oa = 1,
        Sa = class extends fs {
          constructor() {
            super(...arguments), this.id = Oa++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Ms(this);
            return e && e.getValue()
          }
          to(...e) {
            return lo.to(this, e)
          }
          interpolate(...e) {
            return Rs(`${Ss}The "interpolate" function is deprecated in v9 (use "to" instead)`), lo.to(this, e)
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
            us(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Ro.sort(this), us(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        ka = Symbol.for("SpringPhase"),
        Ra = e => (1 & e[ka]) > 0,
        Na = e => (2 & e[ka]) > 0,
        Da = e => (4 & e[ka]) > 0,
        Ia = (e, t) => t ? e[ka] |= 3 : e[ka] &= -3,
        Ea = (e, t) => t ? e[ka] |= 4 : e[ka] &= -5,
        Ta = class extends Sa {
          constructor(e, t) {
            if (super(), this.animation = new ma, this.defaultProps = {}, this._state = {
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
            return !(Na(this) || this._state.asyncTo) || Da(this)
          }
          get goal() {
            return ls(this.animation.to)
          }
          get velocity() {
            const e = Ms(this);
            return e instanceof Fs ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return Ra(this)
          }
          get isAnimating() {
            return Na(this)
          }
          get isPaused() {
            return Da(this)
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
            } = n, a = Vs(n.to);
            !a && ds(n.to) && (o = mo(ls(n.to))), n.values.forEach((i, d) => {
              if (i.done) return;
              const l = i.constructor == Bs ? 1 : a ? a[d].lastPosition : o[d];
              let c = n.immediate,
                u = l;
              if (!c) {
                if (u = i.lastPosition, s.tension <= 0) return void(i.done = !0);
                let t = i.elapsedTime += e;
                const r = n.fromValues[d],
                  o = null != i.v0 ? i.v0 : i.v0 = uo.arr(s.velocity) ? s.velocity[d] : s.velocity;
                let a;
                const f = s.precision || (r == l ? .005 : Math.min(1, .001 * Math.abs(l - r)));
                if (uo.und(s.duration))
                  if (s.decay) {
                    const e = !0 === s.decay ? .998 : s.decay,
                      n = Math.exp(-(1 - e) * t);
                    u = r + o / (1 - e) * (1 - n), c = Math.abs(i.lastPosition - u) <= f, a = o * n
                  } else {
                    a = null == i.lastVelocity ? o : i.lastVelocity;
                    const t = s.restVelocity || f / 10,
                      n = s.clamp ? 0 : s.bounce,
                      d = !uo.und(n),
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
            const i = Ms(this),
              d = i.getValue();
            if (t) {
              const e = ls(n.to);
              d === e && !r || s.decay ? r && s.decay && this._onChange(d) : (i.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(d)
          }
          set(e) {
            return Gn.batchedUpdates(() => {
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
            if (Na(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Gn.batchedUpdates(() => {
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
            }], Promise.all(r.map(e => this._update(e))).then(e => ya(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), xa(this._state, e && this._lastCallId), Gn.batchedUpdates(() => this._stop(t, e)), this
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
            r = uo.obj(r) ? r[t] : r, (null == r || da(r)) && (r = void 0), n = uo.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return Ra(this) || (e.reverse && ([r, n] = [n, r]), n = ls(n), uo.und(n) ? Ms(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, na(e, (e, t) => /^on/.test(t) ? ea(e, r) : e)), qa(this, e, "onProps"), Fa(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const s = this._state;
            return va(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: s,
              actions: {
                pause: () => {
                  Da(this) || (Ea(this, !0), bo(s.pauseQueue), Fa(this, "onPause", ba(this, za(this, this.animation.to)), this))
                },
                resume: () => {
                  Da(this) && (Ea(this, !1), Na(this) && this._resume(), bo(s.resumeQueue), Fa(this, "onResume", ba(this, za(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = La(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(wa(this));
            const n = !uo.und(e.to),
              o = !uo.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(wa(this));
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
            !o || n || t.default && !uo.und(c) || (c = u), t.reverse && ([c, u] = [u, c]);
            const f = !fo(u, l);
            f && (i.from = u), u = ls(u);
            const p = !fo(c, d);
            p && this._focus(c);
            const h = da(t.to),
              {
                config: m
              } = i,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !h && function(e, t, r) {
              r && (pa(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), pa(e, t), Object.assign(e, t);
              for (const t in ua) null == e[t] && (e[t] = ua[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: s
              } = e;
              uo.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * s, e.friction = 4 * Math.PI * o * s / n)
            }(m, Ys(t.config, s), t.config !== a.config ? Ys(a.config, s) : void 0);
            let g = Ms(this);
            if (!g || uo.und(c)) return r(ba(this, !0));
            const b = uo.und(t.reset) ? o && !t.default : !uo.und(u) && Js(t.reset, s),
              w = b ? u : this.get(),
              _ = ia(c),
              x = uo.num(_) || uo.arr(_) || Ds(_),
              C = !h && (!x || Js(a.immediate || t.immediate, s));
            if (p) {
              const e = Zs(c);
              if (e !== g.constructor) {
                if (!C) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const j = g.constructor;
            let P = ds(c),
              O = !1;
            if (!P) {
              const e = b || !Ra(this) && f;
              (p || e) && (O = fo(ia(w), _), P = !O), (fo(i.immediate, C) || C) && fo(m.decay, v) && fo(m.velocity, y) || (P = !0)
            }
            if (O && Na(this) && (i.changed && !b ? P = !0 : P || this._stop(d)), !h && ((P || ds(d)) && (i.values = g.getPayload(), i.toValues = ds(c) ? null : j == Bs ? [1] : mo(_)), i.immediate != C && (i.immediate = C, C || b || this._set(d)), P)) {
              const {
                onRest: e
              } = i;
              po(Va, e => qa(this, t, e));
              const n = ba(this, za(this, d));
              bo(this._pendingCalls, n), this._pendingCalls.add(r), i.changed && Gn.batchedUpdates(() => {
                i.changed = !b, e?.(n, this), b ? Ys(a.onRest, n) : i.onStart?.(n, this)
              })
            }
            b && this._set(w), h ? r(_a(t.to, t, this._state, this)) : P ? this._start() : Na(this) && !p ? this._pendingCalls.add(r) : r(ga(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (cs(this) && this._detach(), t.to = e, cs(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ds(t) && (hs(t, this), Pa(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ds(e) && ms(e, this)
          }
          _set(e, t = !0) {
            const r = ls(e);
            if (!uo.und(r)) {
              const e = Ms(this);
              if (!e || !fo(r, e.getValue())) {
                const n = Zs(r);
                e && e.constructor == n ? e.setValue(r) : As(this, n.create(r)), e && Gn.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return Ms(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Fa(this, "onStart", ba(this, za(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Ys(this.animation.onChange, e, this)), Ys(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Ms(this).reset(ls(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Na(this) || (Ia(this, !0), Da(this) || this._resume())
          }
          _resume() {
            lo.skipAnimation ? this.finish() : Ro.start(this)
          }
          _stop(e, t) {
            if (Na(this)) {
              Ia(this, !1);
              const r = this.animation;
              po(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), us(this, {
                type: "idle",
                parent: this
              });
              const n = t ? wa(this.get()) : ba(this.get(), za(this, e ?? r.to));
              bo(this._pendingCalls, n), r.changed && (r.changed = !1, Fa(this, "onRest", n, this))
            }
          }
        };

      function za(e, t) {
        const r = ia(t);
        return fo(ia(e.get()), r)
      }

      function La(e, t = e.loop, r = e.to) {
        const n = Ys(t);
        if (n) {
          const o = !0 !== n && aa(n),
            s = (o || e).reverse,
            a = !o || o.reset;
          return Ma({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !s || da(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function Ma(e) {
        const {
          to: t,
          from: r
        } = e = aa(e), n = new Set;
        return uo.obj(t) && Aa(t, n), uo.obj(r) && Aa(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Aa(e, t) {
        ho(e, (e, r) => null != e && t.add(r))
      }
      var Va = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function qa(e, t, r) {
        e.animation[r] = t[r] !== ta(t, r) ? ea(t[r], e.key) : void 0
      }

      function Fa(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Ba = ["onStart", "onChange", "onRest"],
        Xa = 1,
        Ga = class {
          constructor(e, t) {
            this.id = Xa++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return e && this.queue.push(Ma(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = mo(e).map(Ma) : this.queue = [], this._flush ? this._flush(this, t) : (Wa(this, t), function(e, t) {
              return Promise.all(t.map(t => Ka(e, t))).then(t => ya(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              po(mo(t), t => r[t].stop(!!e))
            } else xa(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (uo.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              po(mo(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (uo.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              po(mo(e), e => t[e].resume())
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
            (n && !this._started || o && !this._started) && (this._started = !0, vo(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const s = !n && this._started,
              a = o || s && r.size ? this.get() : null;
            o && t.size && vo(t, ([e, t]) => {
              t.value = a, e(t, this, this._item)
            }), s && (this._started = !1, vo(r, ([e, t]) => {
              t.value = a, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Gn.onFrame(this._onFrame)
          }
        };
      async function Ka(e, t, r) {
        const {
          keys: n,
          to: o,
          from: s,
          loop: a,
          onRest: i,
          onResolve: d
        } = t, l = uo.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === s && (t.from = null);
        const c = uo.arr(o) || uo.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, l && (l.onRest = void 0)) : po(Ba, r => {
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
            }, l && (l[r] = t[r])
          }
        });
        const u = e._state;
        t.pause === !u.paused ? (u.paused = t.pause, bo(t.pause ? u.pauseQueue : u.resumeQueue)) : u.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          p = !0 === t.cancel || !0 === ta(t, "cancel");
        (c || p && u.asyncId) && f.push(va(++e._lastAsyncId, {
          props: t,
          state: u,
          actions: {
            pause: co,
            resume: co,
            start(t, r) {
              p ? (xa(u, e._lastAsyncId), r(wa(e))) : (t.onRest = i, r(_a(c, t, u, e)))
            }
          }
        })), u.paused && await new Promise(e => {
          u.resumeQueue.add(e)
        });
        const h = ya(e, await Promise.all(f));
        if (a && h.finished && (!r || !h.noop)) {
          const r = La(t, a, o);
          if (r) return Wa(e, [r]), Ka(e, r, !0)
        }
        return d && Gn.batchedUpdates(() => d(h, e, e.item)), h
      }

      function Ha(e, t) {
        const r = {
          ...e.springs
        };
        return t && po(mo(t), e => {
            uo.und(e.keys) && (e = Ma(e)), uo.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), Ua(r, e, e => Za(e))
          }),
          function(e, t) {
            ho(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, hs(t, e))
            })
          }(e, r), r
      }

      function Za(e, t) {
        const r = new Ta;
        return r.key = e, t && hs(r, t), r
      }

      function Ua(e, t, r) {
        t.keys && po(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Wa(e, t) {
        po(t, t => {
          Ua(e.springs, t, t => Za(t, e))
        })
      }
      var $a = B.createContext({
          pause: !1,
          immediate: !1
        }),
        Qa = () => {
          const e = [],
            t = function(t) {
              Ns(`${Ss}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
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
        Ya = () => Qa(),
        Ja = () => (0, B.useState)(Ya)[0];

      function ei(e, t, r) {
        const n = uo.fun(t) && t,
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
          f = (0, B.useMemo)(() => n || 3 == arguments.length ? Qa() : void 0, []),
          p = mo(e),
          h = [],
          m = (0, B.useRef)(null),
          v = o ? null : m.current;
        Is(() => {
          m.current = h
        }), Ts(() => (po(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          po(m.current, e => {
            e.expired && clearTimeout(e.expirationId), la(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : ti++
              })
            }
            return uo.und(r) ? e : uo.fun(r) ? e.map(r) : mo(r)
          }(p, n ? n() : t, v),
          g = o && m.current || [];
        Is(() => po(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          la(e, f), Ys(l, t, r)
        }));
        const b = [];
        if (v && po(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (h[t] = e)
          }), po(p, (e, t) => {
            h[t] || (h[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new Ga
            }, h[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          po(b, (t, n) => {
            const o = v[n];
            ~t ? (e = h.indexOf(o), h[e] = {
              ...o,
              item: p[t]
            }) : r && h.splice(++e, 0, o)
          })
        }
        uo.fun(s) && h.sort((e, t) => s(e.item, t.item));
        let w = -a;
        const _ = Es(),
          x = na(t),
          C = new Map,
          j = (0, B.useRef)(new Map),
          P = (0, B.useRef)(!1);
        po(h, (e, r) => {
          const o = e.key,
            s = e.phase,
            l = n ? n() : t;
          let f, p;
          const h = Ys(l.delay || 0, o);
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
          if (f = Ys(f, e.item, r), f = uo.obj(f) ? aa(f) : {
              to: f
            }, !f.config) {
            const t = u || x.config;
            f.config = Ys(t, e.item, r, p)
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
          if ("enter" == p && uo.und(g.from)) {
            const o = n ? n() : t,
              s = uo.und(o.initial) || v ? o.from : o.initial;
            g.from = Ys(s, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            Ys(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = Ys(i, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(_, n)))
                }
              }
              e && t.some(e => e.expired) && (j.current.delete(r), d && (P.current = !0), _())
            }
          };
          const O = Ha(e.ctrl, g);
          "leave" === p && d ? j.current.set(e, {
            phase: p,
            springs: O,
            payload: g
          }) : C.set(e, {
            phase: p,
            springs: O,
            payload: g
          })
        });
        const O = (0, B.useContext)($a),
          S = function(e) {
            const t = (0, B.useRef)(void 0);
            return (0, B.useEffect)(() => {
              t.current = e
            }), t.current
          }(O),
          k = O !== S && function(e) {
            for (const t in e) return !0;
            return !1
          }(O);
        Is(() => {
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
        }), Is(() => {
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
        const R = e => B.createElement(B.Fragment, null, h.map((t, r) => {
          const {
            springs: n
          } = C.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), s = uo.str(t.key) || uo.num(t.key) ? t.key : t.ctrl.id, a = B.version < "19.0.0", i = o?.props ?? {}, d = a ? o?.ref : i?.ref;
          return o && o.type ? B.createElement(o.type, {
            ...i,
            key: s,
            ref: d
          }) : o
        }));
        return f ? [R, f] : R
      }
      var ti = 1,
        ri = class extends Sa {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Yo(...t);
            const r = this._get(),
              n = Zs(r);
            As(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            fo(t, this.get()) || (Ms(this).setValue(t), this._onChange(t, this.idle)), !this.idle && oi(this._active) && si(this)
          }
          _get() {
            const e = uo.arr(this.source) ? this.source.map(ls) : mo(ls(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !oi(this._active) && (this.idle = !1, po(Vs(this), e => {
              e.done = !1
            }), lo.skipAnimation ? (Gn.batchedUpdates(() => this.advance()), si(this)) : Ro.start(this))
          }
          _attach() {
            let e = 1;
            po(mo(this.source), t => {
              ds(t) && hs(t, this), Pa(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            po(mo(this.source), e => {
              ds(e) && ms(e, this)
            }), this._active.clear(), si(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = mo(this.source).reduce((e, t) => Math.max(e, (Pa(t) ? t.priority : 0) + 1), 0))
          }
        };

      function ni(e) {
        return !1 !== e.idle
      }

      function oi(e) {
        return !e.size || Array.from(e).every(ni)
      }

      function si(e) {
        e.idle || (e.idle = !0, po(Vs(e), e => {
          e.done = !0
        }), us(e, {
          type: "idle",
          parent: e
        }))
      }
      lo.assign({
        createStringInterpolator: Os,
        to: (e, t) => new ri(e, t)
      }), Ro.advance;
      var ai = r(84017),
        ii = /^--/;

      function di(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || ii.test(e) || ci.hasOwnProperty(e) && ci[e] ? ("" + t).trim() : t + "px"
      }
      var li = {},
        ci = {
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
        ui = ["Webkit", "Ms", "Moz", "O"];
      ci = Object.keys(ci).reduce((e, t) => (ui.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), ci);
      var fi = /^(matrix|translate|scale|rotate|skew)/,
        pi = /^(translate)/,
        hi = /^(rotate|skew)/,
        mi = (e, t) => uo.num(e) && 0 !== e ? e + t : e,
        vi = (e, t) => uo.arr(e) ? e.every(e => vi(e, t)) : uo.num(e) ? e === t : parseFloat(e) === t,
        yi = class extends Gs {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              s = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), s.push(e => [`translate3d(${e.map(e=>mi(e,"px")).join(",")})`, vi(e, 0)])), ho(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), s.push(e => [e, "" === e]);
              else if (fi.test(t)) {
                if (delete n[t], uo.und(e)) return;
                const r = pi.test(t) ? "px" : hi.test(t) ? "deg" : "";
                o.push(mo(e)), s.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${mi(o,r)})`, vi(o, 0)] : e => [`${t}(${e.map(e=>mi(e,r)).join(",")})`, vi(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new gi(o, s)), super(n)
          }
        },
        gi = class extends fs {
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
              const o = ls(r[0]),
                [s, a] = this.transforms[n](uo.arr(o) ? o : r.map(ls));
              e += " " + s, t = t && a
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && po(this.inputs, e => po(e, e => ds(e) && hs(e, this)))
          }
          observerRemoved(e) {
            0 == e && po(this.inputs, e => po(e, e => ds(e) && ms(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), us(this, e)
          }
        };
      lo.assign({
        batchedUpdates: ai.unstable_batchedUpdates,
        createStringInterpolator: Os,
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
      var bi = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Gs(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            s = e => {
              const t = Qs(e) || "Anonymous";
              return (e = uo.str(e) ? s[e] || (s[e] = Us(e, o)) : e[$s] || (e[$s] = Us(e, o))).displayName = `Animated(${t})`, e
            };
          return ho(e, (t, r) => {
            uo.arr(e) && (r = Qs(t)), s[r] = s(t)
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
              u = Object.keys(l).map(t => r || e.hasAttribute(t) ? t : li[t] || (li[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== s && (e.textContent = s);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = di(t, o[t]);
                ii.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== i && (e.scrollLeft = i), void 0 !== d && e.setAttribute("viewBox", d)
          },
          createAnimatedStyle: e => new yi(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        wi = bi.animated,
        _i = r(8316),
        xi = r(50446),
        Ci = r(31201),
        ji = r(17028),
        Pi = r(96883),
        Oi = r(10376),
        Si = "undefined" != typeof document ? B.useLayoutEffect : function() {};

      function ki(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 !== n--;)
              if (!ki(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || ki(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Ri(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ni(e, t) {
        const r = Ri(e);
        return Math.round(t * r) / r
      }

      function Di(e) {
        const t = B.useRef(e);
        return Si(() => {
          t.current = e
        }), t
      }
      const Ii = (e, t) => {
          const r = (0, Oi.cY)(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Ei = (e, t) => {
          const r = (0, Oi.BN)(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Ti = (e, t) => ({
          fn: (0, Oi.ER)(e).fn,
          options: [e, t]
        }),
        zi = (e, t) => {
          const r = (0, Oi.UU)(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Li = (e, t) => {
          const r = (0, Oi.Ej)(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Mi = (e, t) => {
          const r = (0, Oi.jD)(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Ai = (e, t) => {
          const r = (e => ({
            name: "arrow",
            options: e,
            fn(t) {
              const {
                element: r,
                padding: n
              } = "function" == typeof e ? e(t) : e;
              return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? (0, Oi.UE)({
                element: r.current,
                padding: n
              }).fn(t) : {} : r ? (0, Oi.UE)({
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
      var Vi = r(66704),
        qi = B.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...s
          } = e;
          return (0, P.jsx)(Vi.sG.svg, {
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
      qi.displayName = "Arrow";
      var Fi = qi,
        Bi = r(38351),
        Xi = r(86627);

      function Gi(e) {
        const [t, r] = B.useState(void 0);
        return (0, Xi.N)(() => {
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
      var Ki = "Popper",
        [Hi, Zi] = (0, Ci.A)(Ki),
        [Ui, Wi] = Hi(Ki),
        $i = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = B.useState(null);
          return (0, P.jsx)(Ui, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      $i.displayName = Ki;
      var Qi = "PopperAnchor",
        Yi = B.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, s = Wi(Qi, r), a = B.useRef(null), i = (0, xi.s)(t, a), d = B.useRef(null);
          return B.useEffect(() => {
            const e = d.current;
            d.current = n?.current || a.current, e !== d.current && s.onAnchorChange(d.current)
          }), n ? null : (0, P.jsx)(Vi.sG.div, {
            ...o,
            ref: i
          })
        });
      Yi.displayName = Qi;
      var Ji = "PopperContent",
        [ed, td] = Hi(Ji),
        rd = B.forwardRef((e, t) => {
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
          } = e, v = Wi(Ji, r), [y, g] = B.useState(null), b = (0, xi.s)(t, e => g(e)), [w, _] = B.useState(null), x = Gi(w), C = x?.width ?? 0, j = x?.height ?? 0, O = n + ("center" !== s ? "-" + s : ""), S = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, k = Array.isArray(l) ? l : [l], R = k.length > 0, N = {
            padding: S,
            boundary: k.filter(ad),
            altBoundary: R
          }, {
            refs: D,
            floatingStyles: I,
            placement: E,
            isPositioned: T,
            middlewareData: z
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: r = "absolute",
              middleware: n = [],
              platform: o,
              elements: {
                reference: s,
                floating: a
              } = {},
              transform: i = !0,
              whileElementsMounted: d,
              open: l
            } = e, [c, u] = B.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = B.useState(n);
            ki(f, n) || p(n);
            const [h, m] = B.useState(null), [v, y] = B.useState(null), g = B.useCallback(e => {
              e !== x.current && (x.current = e, m(e))
            }, []), b = B.useCallback(e => {
              e !== C.current && (C.current = e, y(e))
            }, []), w = s || h, _ = a || v, x = B.useRef(null), C = B.useRef(null), j = B.useRef(c), P = null != d, O = Di(d), S = Di(o), k = Di(l), R = B.useCallback(() => {
              if (!x.current || !C.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              S.current && (e.platform = S.current), (0, Oi.rD)(x.current, C.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== k.current
                };
                N.current && !ki(j.current, t) && (j.current = t, ai.flushSync(() => {
                  u(t)
                }))
              })
            }, [f, t, r, S, k]);
            Si(() => {
              !1 === l && j.current.isPositioned && (j.current.isPositioned = !1, u(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [l]);
            const N = B.useRef(!1);
            Si(() => (N.current = !0, () => {
              N.current = !1
            }), []), Si(() => {
              if (w && (x.current = w), _ && (C.current = _), w && _) {
                if (O.current) return O.current(w, _, R);
                R()
              }
            }, [w, _, R, O, P]);
            const D = B.useMemo(() => ({
                reference: x,
                floating: C,
                setReference: g,
                setFloating: b
              }), [g, b]),
              I = B.useMemo(() => ({
                reference: w,
                floating: _
              }), [w, _]),
              E = B.useMemo(() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!I.floating) return e;
                const t = Ni(I.floating, c.x),
                  n = Ni(I.floating, c.y);
                return i ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...Ri(I.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }, [r, i, I.floating, c.x, c.y]);
            return B.useMemo(() => ({
              ...c,
              update: R,
              refs: D,
              elements: I,
              floatingStyles: E
            }), [c, R, D, I, E])
          }({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, Oi.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [Ii({
              mainAxis: o + j,
              alignmentAxis: a
            }), d && Ei({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? Ti() : void 0,
              ...N
            }), d && zi({
              ...N
            }), Li({
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
            }), w && Ai({
              element: w,
              padding: i
            }), id({
              arrowWidth: C,
              arrowHeight: j
            }), f && Mi({
              strategy: "referenceHidden",
              ...N
            })]
          }), [L, M] = dd(E), A = (0, Bi.c)(h);
          (0, Xi.N)(() => {
            T && A?.()
          }, [T, A]);
          const V = z.arrow?.x,
            q = z.arrow?.y,
            F = 0 !== z.arrow?.centerOffset,
            [X, G] = B.useState();
          return (0, Xi.N)(() => {
            y && G(window.getComputedStyle(y).zIndex)
          }, [y]), (0, P.jsx)("div", {
            ref: D.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: T ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: X,
              "--radix-popper-transform-origin": [z.transformOrigin?.x, z.transformOrigin?.y].join(" "),
              ...z.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, P.jsx)(ed, {
              scope: r,
              placedSide: L,
              onArrowChange: _,
              arrowX: V,
              arrowY: q,
              shouldHideArrow: F,
              children: (0, P.jsx)(Vi.sG.div, {
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
      rd.displayName = Ji;
      var nd = "PopperArrow",
        od = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        sd = B.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = td(nd, r), s = od[o.placedSide];
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
            children: (0, P.jsx)(Fi, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function ad(e) {
        return null !== e
      }
      sd.displayName = nd;
      var id = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, s = 0 !== o.arrow?.centerOffset, a = s ? 0 : e.arrowWidth, i = s ? 0 : e.arrowHeight, [d, l] = dd(r), c = {
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

      function dd(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var ld = $i,
        cd = Yi,
        ud = rd,
        fd = sd,
        pd = r(2823),
        hd = r(47306),
        md = r(2976),
        vd = r(1531),
        yd = Object.freeze({
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
        gd = B.forwardRef((e, t) => (0, P.jsx)(Vi.sG.span, {
          ...e,
          ref: t,
          style: {
            ...yd,
            ...e.style
          }
        }));
      gd.displayName = "VisuallyHidden";
      var bd = gd,
        [wd, _d] = (0, Ci.A)("Tooltip", [Zi]),
        xd = Zi(),
        Cd = "TooltipProvider",
        jd = 700,
        Pd = "tooltip.open",
        [Od, Sd] = wd(Cd),
        kd = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = jd,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, a = B.useRef(!0), i = B.useRef(!1), d = B.useRef(0);
          return B.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, P.jsx)(Od, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: B.useCallback(() => {
              window.clearTimeout(d.current), a.current = !1
            }, []),
            onClose: B.useCallback(() => {
              window.clearTimeout(d.current), d.current = window.setTimeout(() => a.current = !0, n)
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: B.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        };
      kd.displayName = Cd;
      var Rd = "Tooltip",
        [Nd, Dd] = wd(Rd),
        Id = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: i
          } = e, d = Sd(Rd, e.__scopeTooltip), l = xd(t), [c, u] = B.useState(null), f = (0, Pi.B)(), p = B.useRef(0), h = a ?? d.disableHoverableContent, m = i ?? d.delayDuration, v = B.useRef(!1), [y, g] = (0, vd.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Pd))) : d.onClose(), s?.(e)
            },
            caller: Rd
          }), b = B.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), w = B.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, v.current = !1, g(!0)
          }, [g]), _ = B.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), x = B.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              v.current = !0, g(!0), p.current = 0
            }, m)
          }, [m, g]);
          return B.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, P.jsx)(ld, {
            ...l,
            children: (0, P.jsx)(Nd, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: B.useCallback(() => {
                d.isOpenDelayedRef.current ? x() : w()
              }, [d.isOpenDelayedRef, x, w]),
              onTriggerLeave: B.useCallback(() => {
                h ? _() : (window.clearTimeout(p.current), p.current = 0)
              }, [_, h]),
              onOpen: w,
              onClose: _,
              disableHoverableContent: h,
              children: r
            })
          })
        };
      Id.displayName = Rd;
      var Ed = "TooltipTrigger",
        Td = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Dd(Ed, r), s = Sd(Ed, r), a = xd(r), i = B.useRef(null), d = (0, xi.s)(t, i, o.onTriggerChange), l = B.useRef(!1), c = B.useRef(!1), u = B.useCallback(() => l.current = !1, []);
          return B.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, P.jsx)(cd, {
            asChild: !0,
            ...a,
            children: (0, P.jsx)(Vi.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, _i.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, _i.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, _i.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, _i.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, _i.mK)(e.onBlur, o.onClose),
              onClick: (0, _i.mK)(e.onClick, o.onClose)
            })
          })
        });
      Td.displayName = Ed;
      var zd = "TooltipPortal",
        [Ld, Md] = wd(zd, {
          forceMount: void 0
        }),
        Ad = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Dd(zd, t);
          return (0, P.jsx)(Ld, {
            scope: t,
            forceMount: r,
            children: (0, P.jsx)(hd.C, {
              present: r || s.open,
              children: (0, P.jsx)(pd.Z, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Ad.displayName = zd;
      var Vd = "TooltipContent",
        qd = B.forwardRef((e, t) => {
          const r = Md(Vd, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            a = Dd(Vd, e.__scopeTooltip);
          return (0, P.jsx)(hd.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, P.jsx)(Kd, {
              side: o,
              ...s,
              ref: t
            }) : (0, P.jsx)(Fd, {
              side: o,
              ...s,
              ref: t
            })
          })
        }),
        Fd = B.forwardRef((e, t) => {
          const r = Dd(Vd, e.__scopeTooltip),
            n = Sd(Vd, e.__scopeTooltip),
            o = B.useRef(null),
            s = (0, xi.s)(t, o),
            [a, i] = B.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = B.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = B.useCallback((e, t) => {
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
          return B.useEffect(() => () => f(), [f]), B.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), B.useEffect(() => {
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
          }, [d, c, a, l, f]), (0, P.jsx)(Kd, {
            ...e,
            ref: s
          })
        }),
        [Bd, Xd] = wd(Rd, {
          isInside: !1
        }),
        Gd = (0, md.Dc)("TooltipContent"),
        Kd = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            ...i
          } = e, d = Dd(Vd, r), l = xd(r), {
            onClose: c
          } = d;
          return B.useEffect(() => (document.addEventListener(Pd, c), () => document.removeEventListener(Pd, c)), [c]), B.useEffect(() => {
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
          }, [d.trigger, c]), (0, P.jsx)(ji.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, P.jsxs)(ud, {
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
              children: [(0, P.jsx)(Gd, {
                children: n
              }), (0, P.jsx)(Bd, {
                scope: r,
                isInside: !0,
                children: (0, P.jsx)(bd, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      qd.displayName = Vd;
      var Hd = "TooltipArrow",
        Zd = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = xd(r);
          return Xd(Hd, r).isInside ? null : (0, P.jsx)(fd, {
            ...o,
            ...n,
            ref: t
          })
        });
      Zd.displayName = Hd;
      var Ud = kd,
        Wd = Id,
        $d = Td,
        Qd = Ad,
        Yd = qd,
        Jd = Zd;
      const el = (0, B.createContext)(null);

      function tl() {
        const e = (0, B.useContext)(el);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const rl = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [s = !1, a] = (0, U.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, P.jsx)(Ud, {
            delayDuration: t,
            children: (0, P.jsx)(el.Provider, {
              value: {
                isOpen: s,
                ...o
              },
              children: (0, P.jsx)(Wd, {
                open: s,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        nl = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, P.jsx)($d, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        ol = (0, B.forwardRef)(({
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
          } = tl(), c = (0, U.jt)(), u = wi(Yd), f = ei(l, {
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
            config: ca.stiff,
            immediate: c
          }), p = (0, K.mergeProps)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: a,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: s,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, i);
          return f(e => (0, P.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        sl = (0, B.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, K.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, P.jsx)(Jd, {
            ...r,
            ref: t
          })
        }),
        al = Qd;

      function il(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var dl = r(93689);

      function ll(e) {
        const t = B.useRef({
          value: e,
          previous: e
        });
        return B.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
      var cl = r(23028),
        ul = ["PageUp", "PageDown"],
        fl = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        pl = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        hl = "Slider",
        [ml, vl, yl] = (0, cl.N)(hl),
        [gl, bl] = (0, Ci.A)(hl, [yl]),
        [wl, _l] = gl(hl),
        xl = B.forwardRef((e, t) => {
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
          } = e, v = B.useRef(new Set), y = B.useRef(0), g = "horizontal" === a ? Pl : Ol, [b = [], w] = (0, vd.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), u(e)
            }
          }), _ = B.useRef(b);

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
              l = il(i, [n, o]);
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
          return (0, P.jsx)(wl, {
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
            children: (0, P.jsx)(ml.Provider, {
              scope: e.__scopeSlider,
              children: (0, P.jsx)(ml.Slot, {
                scope: e.__scopeSlider,
                children: (0, P.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, _i.mK)(m.onPointerDown, () => {
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
                      const r = ul.includes(e.key) || e.shiftKey && fl.includes(e.key) ? 10 : 1,
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
      xl.displayName = hl;
      var [Cl, jl] = gl(hl, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Pl = B.forwardRef((e, t) => {
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
        } = e, [u, f] = B.useState(null), p = (0, xi.s)(t, e => f(e)), h = B.useRef(void 0), m = (0, dl.jH)(o), v = "ltr" === m, y = v && !s || !v && s;

        function g(e) {
          const t = h.current || u.getBoundingClientRect(),
            o = Ml([0, t.width], y ? [r, n] : [n, r]);
          return h.current = t, o(e - t.left)
        }
        return (0, P.jsx)(Cl, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, P.jsx)(Sl, {
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
              const t = pl[y ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Ol = B.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = B.useRef(null), u = (0, xi.s)(t, c), f = B.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Ml([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, P.jsx)(Cl, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, P.jsx)(Sl, {
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
              const t = pl[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Sl = B.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: a,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = _l(hl, r);
        return (0, P.jsx)(Vi.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, _i.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : ul.concat(fl).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, _i.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, _i.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, _i.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
          })
        })
      }), kl = "SliderTrack", Rl = B.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = _l(kl, r);
        return (0, P.jsx)(Vi.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Rl.displayName = kl;
      var Nl = "SliderRange",
        Dl = B.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = _l(Nl, r), s = jl(Nl, r), a = B.useRef(null), i = (0, xi.s)(t, a), d = o.values.length, l = o.values.map(e => Ll(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, P.jsx)(Vi.sG.span, {
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
      Dl.displayName = Nl;
      var Il = "SliderThumb",
        El = B.forwardRef((e, t) => {
          const r = vl(e.__scopeSlider),
            [n, o] = B.useState(null),
            s = (0, xi.s)(t, e => o(e)),
            a = B.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, P.jsx)(Tl, {
            ...e,
            ref: s,
            index: a
          })
        }),
        Tl = B.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...s
          } = e, a = _l(Il, r), i = jl(Il, r), [d, l] = B.useState(null), c = (0, xi.s)(t, e => l(e)), u = !d || a.form || !!d.closest("form"), f = Gi(d), p = a.values[n], h = void 0 === p ? 0 : Ll(p, a.min, a.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, a.values.length), v = f?.[i.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - Ml([0, 50], [0, n])(t) * r) * r
          }(v, h, i.direction) : 0;
          return B.useEffect(() => {
            if (d) return a.thumbs.add(d), () => {
              a.thumbs.delete(d)
            }
          }, [d, a.thumbs]), (0, P.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${h}% + ${y}px)`
            },
            children: [(0, P.jsx)(ml.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, P.jsx)(Vi.sG.span, {
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
                onFocus: (0, _i.mK)(e.onFocus, () => {
                  a.valueIndexToChangeRef.current = n
                })
              })
            }), u && (0, P.jsx)(zl, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: p
            }, n)]
          })
        });
      El.displayName = Il;
      var zl = B.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = B.useRef(null),
          s = (0, xi.s)(o, n),
          a = ll(t);
        return B.useEffect(() => {
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
        }, [a, t]), (0, P.jsx)(Vi.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: s,
          defaultValue: t
        })
      });

      function Ll(e, t, r) {
        return il(100 / (r - t) * (e - t), [0, 100])
      }

      function Ml(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      zl.displayName = "RadioBubbleInput";
      var Al = xl,
        Vl = Rl,
        ql = Dl,
        Fl = El,
        Bl = r(88819);
      const Xl = (0, B.createContext)({
          triggerRef: (0, B.createRef)(),
          triggerBorderRef: (0, B.createRef)(),
          thumbnailRef: (0, B.createRef)(),
          openIconRef: (0, B.createRef)(),
          overlayRef: (0, B.createRef)(),
          contentRef: (0, B.createRef)(),
          containerRef: (0, B.createRef)(),
          imageRef: (0, B.createRef)(),
          placeholderRef: (0, B.createRef)(),
          zoomPanRef: (0, B.createRef)(),
          captionRef: (0, B.createRef)(),
          controlsRef: (0, B.createRef)(),
          closeRef: (0, B.createRef)(),
          zoomRef: (0, B.createRef)(),
          zoomInRef: (0, B.createRef)(),
          zoomSliderRef: (0, B.createRef)(),
          zoomOutRef: (0, B.createRef)(),
          resetRef: (0, B.createRef)(),
          downloadRef: (0, B.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        Gl = ({
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
              } = Q();
              return e
            })(),
            p = (0, U.rl)(),
            h = (0, B.useRef)(null),
            m = (0, B.useRef)(null),
            v = (0, B.useRef)(null),
            y = (0, B.useRef)(null),
            g = (0, B.useRef)(null),
            b = (0, B.useRef)(null),
            w = (0, B.useRef)(null),
            _ = (0, B.useRef)(null),
            x = (0, B.useRef)(null),
            C = (0, B.useRef)(null),
            j = (0, B.useRef)(null),
            O = (0, B.useRef)(null),
            S = (0, B.useRef)(null),
            k = (0, B.useRef)(null),
            R = (0, B.useRef)(null),
            N = (0, B.useRef)(null),
            D = (0, B.useRef)(null),
            I = (0, B.useRef)(null),
            E = (0, B.useRef)(null),
            [T = !1, z] = (0, U.ic)({
              prop: t || n,
              onChange: r
            }),
            L = (0, B.useRef)(null);
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
          })), (0, P.jsx)(un, {
            messages: fn,
            locale: f,
            children: (0, P.jsx)(Xl.Provider, {
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
                placeholderRef: C,
                captionRef: j,
                controlsRef: O,
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
              children: (0, P.jsx)(Hl, {
                ...u
              })
            })
          })
        },
        Kl = (0, B.createContext)({
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
        Hl = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, B.useContext)(Xl), {
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
              triggerRef: a,
              triggerBorderRef: i,
              thumbnailRef: d,
              containerRef: l,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, B.useContext)(Xl), p = (0, B.useRef)(null);
            p.current || (p.current = vt.gsap.timeline({
              defaults: on
            }));
            const h = (0, B.useCallback)(e => {
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
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), vt.gsap.set([u.current, f.current], {
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
                  duration: 0
                }), p.current.fromTo([l.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h
                }, {
                  width: () => t.panAreaSize.w,
                  height: () => t.panAreaSize.h,
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
                  opacity: t.opener.containerOpacity,
                  borderRadius: t.opener.placeholderRadius
                }, {
                  opacity: 1,
                  borderRadius: 0,
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
                  [an]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [an]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Pr(f.current), t.closing || (vt.gsap.set([f.current], {
                  visibility: "visible",
                  ...sn
                }), vt.gsap.set([u.current], {
                  visibility: "hidden",
                  ...sn
                }))))
              }),
              v = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              y = (0, B.useCallback)(async e => {
                e || (window.addEventListener("click", h), await v(), window.removeEventListener("click", h)), r(e)
              }, [r]),
              g = (0, B.useCallback)(() => y(!1), [y]);
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
            } = (0, yt.useGSAP)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: s,
              containerRef: a,
              placeholderRef: i
            } = (0, B.useContext)(Xl), d = t(async e => {
              r.zoomTo(e), vt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), vt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), vt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), vt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              vt.gsap.to([s.current], {
                opacity: e,
                [an]: t,
                ...sn
              })
            }), p = t(async () => {
              vt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              })
            }), h = (0, B.useCallback)(() => {
              n.current && o.current && (vt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              }), vt.gsap.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...sn
              }), vt.gsap.set([a.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, B.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", h), window.addEventListener("resize", r.resize.bind(r)), () => {
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
          }), u = (0, K.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, P.jsx)(Kl.Provider, {
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
            children: (0, P.jsx)(Bl.bL, {
              ...u
            })
          })
        },
        Zl = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, cn.A)(),
            {
              triggerRef: s,
              triggerBorderRef: a,
              altText: i
            } = (0, B.useContext)(Xl),
            d = (0, U.UP)(s, n),
            l = (0, K.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Pn.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, P.jsx)(Bl.l9, {
            ref: d,
            ...l,
            children: (0, P.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: a,
              children: (0, P.jsx)(W.xV, {
                children: t
              })
            })
          })
        }),
        Ul = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, B.useContext)(Xl), s = (0, U.UP)(o, n), a = (0, K.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? W.DX : "img";
          return (0, P.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Wl = (0, B.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, B.useContext)(Xl), o = (0, U.UP)(n, r), s = (0, K.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), a = e ? W.DX : fe.Maximize2;
          return (0, P.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        $l = ({
          ...e
        }) => (0, P.jsx)(Bl.ZL, {
          ...e
        }),
        Ql = (0, B.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, B.useContext)(Xl), o = (0, U.UP)(n, r), s = (0, K.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, P.jsx)(Bl.hJ, {
            ref: o,
            ...s
          })
        }),
        Yl = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, B.useContext)(Kl), {
            contentRef: s,
            altText: a,
            triggerRef: i
          } = (0, B.useContext)(Xl), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, B.useContext)(Xl), [t, r] = (0, B.useState)(e.getCursor()), n = (0, B.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, B.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = (0, jn.m)("dark"), c = (0, U.UP)(s, n), u = (0, K.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, ue.clsx)("foundry_1a74xwb9", l),
            style: {
              cursor: d
            }
          });
          return (0, P.jsxs)(Bl.UC, {
            ref: c,
            ...u,
            children: [(0, P.jsx)(W.s6, {
              children: (0, P.jsx)(Bl.hE, {
                children: a
              })
            }), t]
          })
        }),
        Jl = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, B.useContext)(Xl);
          (() => {
            const {
              contextSafe: e
            } = (0, yt.useGSAP)(), {
              toggleControls: t
            } = (0, B.useContext)(Kl), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: a
            } = (0, B.useContext)(Xl), i = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.dragHandler.handleDrag(e), a.dragHandler.animate && !a.closing && (vt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...sn
              }), vt.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...sn
              }), vt.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...sn
              })))
            }), d = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || vt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...sn
              }))
            }), l = e(e => {
              !e.pinching && !a.zoomHandler.pinching || a.dragHandler.dragging || (a.zoomHandler.handleZoom(e), a.zoomHandler.animate && !a.closing && (vt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...sn
              }), vt.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...sn
              }), vt.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...sn
              })))
            }), c = (0, B.useCallback)(() => {
              a.controlsVisible || t()
            }, [, t]);
            (0, U.iQ)({
              ref: s,
              onFocusIn: c
            }), jr({
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
          const s = (0, U.UP)(o, n),
            a = (0, K.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, P.jsx)("div", {
            ref: s,
            ...a,
            children: (0, P.jsxs)(ec, {
              children: [(0, P.jsx)(tc, {}), t]
            })
          })
        }),
        ec = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, B.useContext)(Xl), s = (0, U.UP)(o, n), a = (0, K.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? W.DX : "div";
          return (0, P.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        tc = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, B.useContext)(Xl), s = (0, U.UP)(o, n), a = (0, K.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? W.DX : "img";
          return (0, P.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        rc = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, B.useContext)(Xl), s = (0, U.UP)(o, n), a = (0, K.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? W.DX : "img";
          return (0, P.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        nc = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, B.useContext)(Xl), s = (0, U.UP)(o, n), a = (0, K.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), i = t ? W.DX : "p";
          return (0, P.jsx)(Bl.VY, {
            asChild: !0,
            children: (0, P.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        oc = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, B.useContext)(Xl);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, B.useContext)(Kl);
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
          const s = (0, U.UP)(o, n),
            a = (0, K.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? W.DX : "div";
          return (0, P.jsx)(Hr, {
            children: (0, P.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        sc = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, P.jsx)(P.Fragment, {
            children: n
          });
          const s = (0, K.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, P.jsxs)(rl, {
            delayDuration: 0,
            children: [(0, P.jsx)(nl, {
              children: n
            }), (0, P.jsxs)(ol, {
              ...s,
              children: [(0, P.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, P.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, P.jsx)(sl, {})]
            })]
          })
        },
        ac = (0, B.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, K.mergeProps)(e, {
            isInline: !0
          });
          return (0, P.jsx)(Bn, {
            ref: t,
            ...r
          })
        }),
        ic = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const a = (0, cn.A)(),
            {
              zoomRef: i
            } = (0, B.useContext)(Xl),
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
              } = (0, B.useContext)(Xl), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, B.useContext)(Kl), [o, s] = (0, B.useState)(!1), [a, i] = (0, B.useState)(!1), [d, l] = (0, B.useState)(0), [c, u] = (0, B.useState)(0), [f, p] = (0, B.useState)(0), h = (0, B.useCallback)(() => {
                s(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, B.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, B.useEffect)(() => (e.addEventListener("zoom", h), () => {
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
            v = (0, U.UP)(i, s),
            y = (0, K.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? W.DX : "div";
          return (0, P.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, P.jsx)(sc, {
              side: "left",
              enabled: r,
              content: a.formatMessage(Pn.ZoomInButtonLabel),
              metadata: a.formatMessage(Pn.ZoomInButtonTooltip, {
                shortcut: (0, P.jsx)(ac, {
                  shortcut: "+"
                })
              }),
              children: (0, P.jsx)(Ee, {
                label: a.formatMessage(Pn.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: nn({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, P.jsxs)(Al, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, P.jsx)(Vl, {
                className: "foundry_1a74xwbu",
                children: (0, P.jsx)(ql, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, P.jsx)(sc, {
                side: "left",
                enabled: r,
                content: a.formatMessage(Pn.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, P.jsx)(Fl, {
                  className: "foundry_1a74xwbw",
                  children: (0, P.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, P.jsx)(sc, {
              side: "left",
              enabled: r,
              content: a.formatMessage(Pn.ZoomOutButtonLabel),
              metadata: a.formatMessage(Pn.ZoomOutButtonTooltip, {
                shortcut: (0, P.jsx)(ac, {
                  shortcut: "-"
                })
              }),
              children: (0, P.jsx)(Ee, {
                label: a.formatMessage(Pn.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: nn({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, P.jsx)(W.xV, {
              children: n
            })]
          })
        }),
        dc = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = (0, cn.A)(),
            {
              closeRef: a
            } = (0, B.useContext)(Xl),
            i = (0, U.UP)(a, o),
            d = (0, K.mergeProps)(n, {
              "data-testid": e,
              className: rn({
                styled: !t
              })
            }),
            l = t ? (0, P.jsx)(W.DX, {
              ref: i,
              ...d
            }) : (0, P.jsx)(Ee, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(Pn.CloseButtonLabel)
            });
          return (0, P.jsx)(sc, {
            side: "right",
            enabled: r,
            content: s.formatMessage(Pn.CloseButtonLabel),
            metadata: s.formatMessage(Pn.CloseButtonTooltip, {
              shortcut: (0, P.jsx)(ac, {
                shortcut: "Esc"
              })
            }),
            children: (0, P.jsx)(Bl.bm, {
              asChild: !0,
              children: l
            })
          })
        }),
        lc = (0, B.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, cn.A)(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, B.useContext)(Xl), {
                contextSafe: r
              } = (0, yt.useGSAP)(), {
                resetZoom: n
              } = (0, B.useContext)(Kl), [o, s] = (0, B.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = r(e => {
                vt.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...sn
                })
              }), i = (0, B.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                s(t), a(t)
              }, [s]);
              return (0, B.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: a
            } = (0, B.useContext)(Xl),
            i = (0, U.UP)(a, n),
            d = (0, K.mergeProps)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, P.jsx)(sc, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Pn.ResetZoomButtonLabel),
            metadata: o.formatMessage(Pn.ResetZoomButtonTooltip, {
              shortcut: (0, P.jsx)(ac, {
                shortcut: "R"
              })
            }),
            children: (0, P.jsx)(Ee, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Pn.ResetZoomButtonLabel)
            })
          })
        }),
        cc = (0, B.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, cn.A)(),
            {
              downloadRef: s,
              imageRef: a
            } = (0, B.useContext)(Xl),
            i = (0, U.UP)(s, n),
            d = (0, K.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, P.jsx)(sc, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Pn.DownloadButtonTooltip),
            children: (0, P.jsx)(Ee, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Pn.DownloadButtonTooltip),
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
        uc = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var fc = r(13258);

      function pc(e) {
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

      function hc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function mc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hc(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = pc(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gc = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mc(mc({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vc(e.variantClassNames, e => vc(e, e => e.split(" ")[0]))
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
      const bc = (0, B.createContext)(null);

      function wc() {
        const e = (0, B.useContext)(bc);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const _c = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...a
        }, i) => {
          const d = (0, K.mergeProps)({
              className: gc({
                status: s
              }),
              "data-testid": t
            }, a),
            l = r ? W.DX : "div";
          return (0, P.jsx)(bc.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: s,
              ...a
            },
            children: (0, P.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        xc = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = wc(), s = (0, K.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: fe.Check,
            invalid: fe.X,
            neutral: fe.TriangleAlert
          }, i = t ? W.DX : a[o];
          return (0, P.jsx)(i, {
            ref: n,
            ...s
          })
        }),
        Cc = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: a
          } = wc(), i = (0, K.mergeProps)({
            "data-testid": t,
            id: a || s
          }, n), d = r ? W.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var jc = "ScrollArea",
        [Pc, Oc] = (0, Ci.A)(jc),
        [Sc, kc] = Pc(jc),
        Rc = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...a
          } = e, [i, d] = B.useState(null), [l, c] = B.useState(null), [u, f] = B.useState(null), [p, h] = B.useState(null), [m, v] = B.useState(null), [y, g] = B.useState(0), [b, w] = B.useState(0), [_, x] = B.useState(!1), [C, j] = B.useState(!1), O = (0, xi.s)(t, e => d(e)), S = (0, dl.jH)(o);
          return (0, P.jsx)(Sc, {
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
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, P.jsx)(Vi.sG.div, {
              dir: S,
              ...a,
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
      Rc.displayName = jc;
      var Nc = "ScrollAreaViewport",
        Dc = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, a = kc(Nc, r), i = B.useRef(null), d = (0, xi.s)(t, i, a.onViewportChange);
          return (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, P.jsx)(Vi.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: d,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, P.jsx)("div", {
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
      Dc.displayName = Nc;
      var Ic = "ScrollAreaScrollbar",
        Ec = B.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = kc(Ic, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
          } = o, i = "horizontal" === e.orientation;
          return B.useEffect(() => (i ? s(!0) : a(!0), () => {
            i ? s(!1) : a(!1)
          }), [i, s, a]), "hover" === o.type ? (0, P.jsx)(Tc, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, P.jsx)(zc, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, P.jsx)(Lc, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, P.jsx)(Mc, {
            ...n,
            ref: t
          }) : null
        });
      Ec.displayName = Ic;
      var Tc = B.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = kc(Ic, e.__scopeScrollArea), [s, a] = B.useState(!1);
          return B.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, P.jsx)(hd.C, {
            present: r || s,
            children: (0, P.jsx)(Lc, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        zc = B.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = kc(Ic, e.__scopeScrollArea), s = "horizontal" === e.orientation, a = ru(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, B.useReducer((e, t) => l[e][t] ?? e, "hidden"));
          var l;
          return B.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), B.useEffect(() => {
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
          }, [o.viewport, s, d, a]), (0, P.jsx)(hd.C, {
            present: r || "hidden" !== i,
            children: (0, P.jsx)(Mc, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, _i.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, _i.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Lc = B.forwardRef((e, t) => {
          const r = kc(Ic, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, a] = B.useState(!1),
            i = "horizontal" === e.orientation,
            d = ru(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(i ? e : t)
              }
            }, 10);
          return nu(r.viewport, d), nu(r.content, d), (0, P.jsx)(hd.C, {
            present: n || s,
            children: (0, P.jsx)(Mc, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Mc = B.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = kc(Ic, e.__scopeScrollArea), s = B.useRef(null), a = B.useRef(0), [i, d] = B.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = $c(i.viewport, i.content), c = {
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
              const o = Qc(r),
                s = t || o / 2,
                a = o - s,
                i = r.scrollbar.paddingStart + s,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                l = r.content - r.viewport;
              return Jc([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, a.current, i, t)
          }
          return "horizontal" === r ? (0, P.jsx)(Ac, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = Yc(o.viewport.scrollLeft, i, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, P.jsx)(Vc, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = Yc(o.viewport.scrollTop, i);
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
        Ac = B.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = kc(Ic, e.__scopeScrollArea), [a, i] = B.useState(), d = B.useRef(null), l = (0, xi.s)(t, d, s.onScrollbarXChange);
          return B.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, P.jsx)(Bc, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Qc(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), eu(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Wc(a.paddingLeft),
                  paddingEnd: Wc(a.paddingRight)
                }
              })
            }
          })
        }),
        Vc = B.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = kc(Ic, e.__scopeScrollArea), [a, i] = B.useState(), d = B.useRef(null), l = (0, xi.s)(t, d, s.onScrollbarYChange);
          return B.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, P.jsx)(Bc, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Qc(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), eu(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Wc(a.paddingTop),
                  paddingEnd: Wc(a.paddingBottom)
                }
              })
            }
          })
        }),
        [qc, Fc] = Pc(Ic),
        Bc = B.forwardRef((e, t) => {
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
          } = e, p = kc(Ic, r), [h, m] = B.useState(null), v = (0, xi.s)(t, e => m(e)), y = B.useRef(null), g = B.useRef(""), b = p.viewport, w = n.content - n.viewport, _ = (0, Bi.c)(c), x = (0, Bi.c)(d), C = ru(u, 10);

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
          return B.useEffect(() => {
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
          }, [b, h, w, _]), B.useEffect(x, [n, x]), nu(h, C), nu(p.content, C), (0, P.jsx)(qc, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, Bi.c)(s),
            onThumbPointerUp: (0, Bi.c)(a),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, Bi.c)(i),
            children: (0, P.jsx)(Vi.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, _i.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, _i.mK)(e.onPointerMove, j),
              onPointerUp: (0, _i.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        Xc = "ScrollAreaThumb",
        Gc = B.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Fc(Xc, e.__scopeScrollArea);
          return (0, P.jsx)(hd.C, {
            present: r || o.hasThumb,
            children: (0, P.jsx)(Kc, {
              ref: t,
              ...n
            })
          })
        }),
        Kc = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = kc(Xc, r), a = Fc(Xc, r), {
            onThumbPositionChange: i
          } = a, d = (0, xi.s)(t, e => a.onThumbChange(e)), l = B.useRef(void 0), c = ru(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return B.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = tu(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, c, i]), (0, P.jsx)(Vi.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, _i.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, _i.mK)(e.onPointerUp, a.onThumbPointerUp)
          })
        });
      Gc.displayName = Xc;
      var Hc = "ScrollAreaCorner",
        Zc = B.forwardRef((e, t) => {
          const r = kc(Hc, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, P.jsx)(Uc, {
            ...e,
            ref: t
          }) : null
        });
      Zc.displayName = Hc;
      var Uc = B.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = kc(Hc, r), [s, a] = B.useState(0), [i, d] = B.useState(0), l = Boolean(s && i);
        return nu(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), nu(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        }), l ? (0, P.jsx)(Vi.sG.div, {
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

      function Wc(e) {
        return e ? parseInt(e, 10) : 0
      }

      function $c(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Qc(e) {
        const t = $c(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Yc(e, t, r = "ltr") {
        const n = Qc(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          a = t.content - t.viewport,
          i = s - n,
          d = il(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return Jc([0, a], [0, i])(d)
      }

      function Jc(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function eu(e, t) {
        return e > 0 && e < t
      }
      var tu = (e, t = () => {}) => {
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

      function ru(e, t) {
        const r = (0, Bi.c)(e),
          n = B.useRef(0);
        return B.useEffect(() => () => window.clearTimeout(n.current), []), B.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function nu(e, t) {
        const r = (0, Bi.c)(t);
        (0, Xi.N)(() => {
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
      var ou = Rc,
        su = Dc,
        au = Ec,
        iu = Gc,
        du = Zc,
        lu = r(91685),
        cu = r(83876),
        uu = r(45787),
        fu = r(35328),
        pu = [" ", "Enter", "ArrowUp", "ArrowDown"],
        hu = [" ", "Enter"],
        mu = "Select",
        [vu, yu, gu] = (0, cl.N)(mu),
        [bu, wu] = (0, Ci.A)(mu, [gu, Zi]),
        _u = Zi(),
        [xu, Cu] = bu(mu),
        [ju, Pu] = bu(mu),
        Ou = e => {
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
          } = e, m = _u(t), [v, y] = B.useState(null), [g, b] = B.useState(null), [w, _] = B.useState(!1), x = (0, dl.jH)(l), [C, j] = (0, vd.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: mu
          }), [O, S] = (0, vd.i)({
            prop: a,
            defaultProp: i,
            onChange: d,
            caller: mu
          }), k = B.useRef(null), R = !v || h || !!v.closest("form"), [N, D] = B.useState(new Set), I = Array.from(N).map(e => e.props.value).join(";");
          return (0, P.jsx)(ld, {
            ...m,
            children: (0, P.jsxs)(xu, {
              required: p,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: _,
              contentId: (0, Pi.B)(),
              value: O,
              onValueChange: S,
              open: C,
              onOpenChange: j,
              dir: x,
              triggerPointerDownPosRef: k,
              disabled: f,
              children: [(0, P.jsx)(vu.Provider, {
                scope: t,
                children: (0, P.jsx)(ju, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: B.useCallback(e => {
                    D(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: B.useCallback(e => {
                    D(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), R ? (0, P.jsxs)(df, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: c,
                autoComplete: u,
                value: O,
                onChange: e => S(e.target.value),
                disabled: f,
                form: h,
                children: [void 0 === O ? (0, P.jsx)("option", {
                  value: ""
                }) : null, Array.from(N)]
              }, I) : null]
            })
          })
        };
      Ou.displayName = mu;
      var Su = "SelectTrigger",
        ku = B.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = _u(r), a = Cu(Su, r), i = a.disabled || n, d = (0, xi.s)(t, a.onTriggerChange), l = yu(r), c = B.useRef("touch"), [u, f, p] = cf(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === a.value),
              n = uf(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          }), h = e => {
            i || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, P.jsx)(cd, {
            asChild: !0,
            ...s,
            children: (0, P.jsx)(Vi.sG.button, {
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
              "data-placeholder": lf(a.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, _i.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: (0, _i.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: (0, _i.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || pu.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      ku.displayName = Su;
      var Ru = "SelectValue",
        Nu = B.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: a = "",
            ...i
          } = e, d = Cu(Ru, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== s, u = (0, xi.s)(t, d.onValueNodeChange);
          return (0, Xi.N)(() => {
            l(c)
          }, [l, c]), (0, P.jsx)(Vi.sG.span, {
            ...i,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: lf(d.value) ? (0, P.jsx)(P.Fragment, {
              children: a
            }) : s
          })
        });
      Nu.displayName = Ru;
      var Du = B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, P.jsx)(Vi.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Du.displayName = "SelectIcon";
      var Iu = e => (0, P.jsx)(pd.Z, {
        asChild: !0,
        ...e
      });
      Iu.displayName = "SelectPortal";
      var Eu = "SelectContent",
        Tu = B.forwardRef((e, t) => {
          const r = Cu(Eu, e.__scopeSelect),
            [n, o] = B.useState();
          if ((0, Xi.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? ai.createPortal((0, P.jsx)(Lu, {
              scope: e.__scopeSelect,
              children: (0, P.jsx)(vu.Slot, {
                scope: e.__scopeSelect,
                children: (0, P.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, P.jsx)(Vu, {
            ...e,
            ref: t
          })
        });
      Tu.displayName = Eu;
      var zu = 10,
        [Lu, Mu] = bu(Eu),
        Au = (0, md.TL)("SelectContent.RemoveScroll"),
        Vu = B.forwardRef((e, t) => {
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
          } = e, g = Cu(Eu, r), [b, w] = B.useState(null), [_, x] = B.useState(null), C = (0, xi.s)(t, e => w(e)), [j, O] = B.useState(null), [S, k] = B.useState(null), R = yu(r), [N, D] = B.useState(!1), I = B.useRef(!1);
          B.useEffect(() => {
            if (b) return (0, uu.Eq)(b)
          }, [b]), (0, lu.Oh)();
          const E = B.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && _ && (_.scrollTop = 0), r === n && _ && (_.scrollTop = _.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [R, _]),
            T = B.useCallback(() => E([j, b]), [E, j, b]);
          B.useEffect(() => {
            N && T()
          }, [N, T]);
          const {
            onOpenChange: z,
            triggerPointerDownPosRef: L
          } = g;
          B.useEffect(() => {
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
          }, [b, z, L]), B.useEffect(() => {
            const e = () => z(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [z]);
          const [M, A] = cf(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = uf(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), V = B.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (O(e), n && (I.current = !0))
          }, [g.value]), q = B.useCallback(() => b?.focus(), [b]), F = B.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && k(e)
          }, [g.value]), X = "popper" === n ? Fu : qu, G = X === Fu ? {
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
          return (0, P.jsx)(Lu, {
            scope: r,
            content: b,
            viewport: _,
            onViewportChange: x,
            itemRefCallback: V,
            selectedItem: j,
            onItemLeave: q,
            itemTextRefCallback: F,
            focusSelectedItem: T,
            selectedItemText: S,
            position: n,
            isPositioned: N,
            searchRef: M,
            children: (0, P.jsx)(fu.A, {
              as: Au,
              allowPinchZoom: !0,
              children: (0, P.jsx)(cu.n, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, _i.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, P.jsx)(ji.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, P.jsx)(X, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...G,
                    onPlaced: () => D(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, _i.mK)(y.onKeyDown, e => {
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
      Vu.displayName = "SelectContentImpl";
      var qu = B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, s = Cu(Eu, r), a = Mu(Eu, r), [i, d] = B.useState(null), [l, c] = B.useState(null), u = (0, xi.s)(t, e => c(e)), f = yu(r), p = B.useRef(!1), h = B.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = a, b = B.useCallback(() => {
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
                c = window.innerWidth - zu,
                u = il(s, [zu, Math.max(zu, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                s = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - s,
                d = e.width + a,
                l = Math.max(d, t.width),
                c = window.innerWidth - zu,
                u = il(s, [zu, Math.max(zu, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const a = f(),
              d = window.innerHeight - 2 * zu,
              c = m.scrollHeight,
              u = window.getComputedStyle(l),
              h = parseInt(u.borderTopWidth, 10),
              g = parseInt(u.paddingTop, 10),
              b = parseInt(u.borderBottomWidth, 10),
              w = h + g + c + parseInt(u.paddingBottom, 10) + b,
              _ = Math.min(5 * v.offsetHeight, w),
              x = window.getComputedStyle(m),
              C = parseInt(x.paddingTop, 10),
              j = parseInt(x.paddingBottom, 10),
              P = e.top + e.height / 2 - zu,
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
              const t = Math.max(P, h + m.offsetTop + (e ? C : 0) + S) + R;
              i.style.height = t + "px", m.scrollTop = k - P + m.offsetTop
            }
            i.style.margin = `${zu}px 0`, i.style.minHeight = _ + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, s.trigger, s.valueNode, i, l, m, v, y, s.dir, n]);
        (0, Xi.N)(() => b(), [b]);
        const [w, _] = B.useState();
        (0, Xi.N)(() => {
          l && _(window.getComputedStyle(l).zIndex)
        }, [l]);
        const x = B.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, P.jsx)(Bu, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: x,
          children: (0, P.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, P.jsx)(Vi.sG.div, {
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
      qu.displayName = "SelectItemAlignedPosition";
      var Fu = B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = zu,
          ...s
        } = e, a = _u(r);
        return (0, P.jsx)(ud, {
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
      Fu.displayName = "SelectPopperPosition";
      var [Bu, Xu] = bu(Eu, {}), Gu = "SelectViewport", Ku = B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, s = Mu(Gu, r), a = Xu(Gu, r), i = (0, xi.s)(t, s.onViewportChange), d = B.useRef(0);
        return (0, P.jsxs)(P.Fragment, {
          children: [(0, P.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, P.jsx)(vu.Slot, {
            scope: r,
            children: (0, P.jsx)(Vi.sG.div, {
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
              onScroll: (0, _i.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * zu,
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
      Ku.displayName = Gu;
      var Hu = "SelectGroup",
        [Zu, Uu] = bu(Hu);
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Pi.B)();
        return (0, P.jsx)(Zu, {
          scope: r,
          id: o,
          children: (0, P.jsx)(Vi.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Hu;
      var Wu = "SelectLabel";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Uu(Wu, r);
        return (0, P.jsx)(Vi.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Wu;
      var $u = "SelectItem",
        [Qu, Yu] = bu($u),
        Ju = B.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...a
          } = e, i = Cu($u, r), d = Mu($u, r), l = i.value === n, [c, u] = B.useState(s ?? ""), [f, p] = B.useState(!1), h = (0, xi.s)(t, e => d.itemRefCallback?.(e, n, o)), m = (0, Pi.B)(), v = B.useRef("touch"), y = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, P.jsx)(Qu, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: l,
            onItemTextChange: B.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, P.jsx)(vu.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, P.jsx)(Vi.sG.div, {
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
                onFocus: (0, _i.mK)(a.onFocus, () => p(!0)),
                onBlur: (0, _i.mK)(a.onBlur, () => p(!1)),
                onClick: (0, _i.mK)(a.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, _i.mK)(a.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, _i.mK)(a.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, _i.mK)(a.onPointerMove, e => {
                  v.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, _i.mK)(a.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, _i.mK)(a.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (hu.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Ju.displayName = $u;
      var ef = "SelectItemText",
        tf = B.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, a = Cu(ef, r), i = Mu(ef, r), d = Yu(ef, r), l = Pu(ef, r), [c, u] = B.useState(null), f = (0, xi.s)(t, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, h = B.useMemo(() => (0, P.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = l;
          return (0, Xi.N)(() => (m(h), () => v(h)), [m, v, h]), (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)(Vi.sG.span, {
              id: d.textId,
              ...s,
              ref: f
            }), d.isSelected && a.valueNode && !a.valueNodeHasChildren ? ai.createPortal(s.children, a.valueNode) : null]
          })
        });
      tf.displayName = ef;
      var rf = "SelectItemIndicator";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Yu(rf, r).isSelected ? (0, P.jsx)(Vi.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = rf;
      var nf = "SelectScrollUpButton";
      B.forwardRef((e, t) => {
        const r = Mu(nf, e.__scopeSelect),
          n = Xu(nf, e.__scopeSelect),
          [o, s] = B.useState(!1),
          a = (0, xi.s)(t, n.onScrollButtonChange);
        return (0, Xi.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, P.jsx)(sf, {
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
      }).displayName = nf;
      var of = "SelectScrollDownButton";
      B.forwardRef((e, t) => {
        const r = Mu(of, e.__scopeSelect),
          n = Xu(of, e.__scopeSelect),
          [o, s] = B.useState(!1),
          a = (0, xi.s)(t, n.onScrollButtonChange);
        return (0, Xi.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              s(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, P.jsx)(sf, {
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
      }).displayName = of;
      var sf = B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, s = Mu("SelectScrollButton", r), a = B.useRef(null), i = yu(r), d = B.useCallback(() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }, []);
        return B.useEffect(() => () => d(), [d]), (0, Xi.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, P.jsx)(Vi.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, _i.mK)(o.onPointerDown, () => {
            null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, _i.mK)(o.onPointerMove, () => {
            s.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, _i.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, P.jsx)(Vi.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var af = "SelectArrow";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = _u(r), s = Cu(af, r), a = Mu(af, r);
        return s.open && "popper" === a.position ? (0, P.jsx)(fd, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = af;
      var df = B.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = B.useRef(null),
          s = (0, xi.s)(n, o),
          a = ll(t);
        return B.useEffect(() => {
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
        }, [a, t]), (0, P.jsx)(Vi.sG.select, {
          ...r,
          style: {
            ...yd,
            ...r.style
          },
          ref: s,
          defaultValue: t
        })
      });

      function lf(e) {
        return "" === e || void 0 === e
      }

      function cf(e) {
        const t = (0, Bi.c)(e),
          r = B.useRef(""),
          n = B.useRef(0),
          o = B.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          s = B.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return B.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s]
      }

      function uf(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = (a = e, i = Math.max(o, 0), a.map((e, t) => a[(i + t) % a.length]));
        var a, i;
        1 === n.length && (s = s.filter(e => e !== r));
        const d = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }
      df.displayName = "SelectBubbleInput";
      var ff = Ou,
        pf = ku,
        hf = Nu,
        mf = Du,
        vf = Iu,
        yf = Tu,
        gf = Ku,
        bf = Ju,
        wf = tf;

      function _f(e) {
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

      function xf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Cf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xf(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = _f(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Pf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Of = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Cf(Cf({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Pf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jf(e.variantClassNames, e => jf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Sf = Of({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kf = Of({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Rf = Of({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Nf = Of({
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
        Df = Of({
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
        If = Of({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ef = (0, B.createContext)(null);

      function Tf() {
        const e = (0, B.useContext)(Ef);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const zf = (0, B.forwardRef)(({
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
          const v = (0, B.useRef)(null),
            y = (0, U.UP)(v, m),
            g = (0, B.useId)(),
            b = (0, B.useId)(),
            w = (0, B.useId)(),
            _ = (0, B.useId)(),
            x = (0, B.useId)(),
            C = (0, B.useId)(),
            [j = !1, O] = (0, U.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            S = (0, K.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, P.jsx)(Ef.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: C,
              hintId: _,
              popoverId: x,
              defaultValue: s,
              onValueChange: a,
              value: d,
              isOpen: j,
              setIsOpen: O,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, P.jsx)(ff, {
              required: r,
              disabled: n,
              open: j,
              onOpenChange: () => O(!o && !j),
              value: d,
              defaultValue: s,
              onValueChange: a,
              name: i,
              children: (0, P.jsx)("div", {
                ref: y,
                ...S,
                children: e
              })
            })
          })
        }),
        Lf = (0, B.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = Tf(), a = (0, K.mergeProps)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Sf({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, P.jsx)(yf, {
            ...a,
            ref: o,
            children: (0, P.jsx)(gf, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Mf = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, K.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, P.jsxs)(ou, {
            ...o,
            ref: n,
            children: [(0, P.jsx)(gf, {
              asChild: !0,
              children: (0, P.jsx)(su, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, P.jsx)(au, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, P.jsx)(iu, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Af = (0, B.forwardRef)(({
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
          } = Tf(), {
            isPressed: g,
            pressProps: b
          } = (0, fc.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, K.mergeProps)({
            id: f,
            className: Df({
              size: y,
              isReadOnly: !!i,
              isInvalid: "invalid" === d,
              isPressed: !!g,
              isDisabled: !!l
            }),
            "aria-labelledby": (0, K.joinStrings)(r, c, u),
            "aria-describedby": (0, K.joinStrings)(n, h),
            "aria-activedescendant": v,
            "aria-controls": p,
            "aria-invalid": "invalid" === d,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, K.omit)(b, "onKeyDown"), s), _ = o ? W.DX : pf;
          return (0, P.jsx)(_, {
            ...w,
            ref: a,
            children: e
          })
        }),
        Vf = (0, B.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            a = t ? W.DX : "span";
          return (0, P.jsx)(a, {
            ...s,
            ref: o,
            children: (0, P.jsx)(hf, {
              placeholder: e
            })
          })
        }),
        qf = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: a
          } = Tf(), i = a ? fe.ChevronUp : fe.ChevronDown, d = (0, K.mergeProps)({
            asChild: !0,
            className: If({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, P.jsx)(mf, {
            ...d,
            ref: n,
            children: e || (0, P.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Ff = (0, B.forwardRef)(({
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
          } = Tf(), u = i && !o, f = (0, K.mergeProps)({
            id: s.id || l,
            htmlFor: c,
            "data-testid": e,
            className: Nf({
              showAsterisk: u,
              isDisabled: d
            })
          }, s), p = t ? W.DX : "label";
          return (0, P.jsx)(W.s6, {
            enabled: n,
            children: (0, P.jsx)(p, {
              ...f,
              ref: a,
              children: r
            })
          })
        }),
        Bf = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Tf(), i = (0, K.mergeProps)({
            className: kf({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? W.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Xf = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = Tf(), i = (0, K.mergeProps)({
            className: Rf({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? W.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Gf = (0, B.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, B.useRef)(null),
            i = (0, U.UP)(a, s),
            d = (0, K.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, P.jsx)(bf, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Kf = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, K.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, P.jsx)(wf, {
            ref: n,
            asChild: !0,
            children: (0, P.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        Hf = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, K.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, P.jsx)(mf, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        Zf = vf,
        Uf = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Tf(), i = (0, K.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? W.DX : _c;
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Wf = xc,
        $f = Cc;
      var Qf = r(42069),
        Yf = r(14961),
        Jf = r(37013),
        ep = r(38140),
        tp = r(96187);

      function rp(e, t, r) {
        let n = (0, tp.J)(e => {
          r && !e.defaultPrevented && r(t)
        });
        (0, B.useEffect)(() => {
          let t = e?.current?.form;
          return t?.addEventListener("reset", n), () => {
            t?.removeEventListener("reset", n)
          }
        }, [e])
      }

      function np(e, t, r) {
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
        } = (0, fc.d)({
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
        } = (0, fc.d)({
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
          focusableProps: C
        } = (0, ep.Wc)(e, r), j = (0, Jf.v)(b, C), P = (0, Qf.$)(e, {
          labelable: !0
        });
        return rp(r, t.defaultSelected, t.setSelected), {
          labelProps: (0, Jf.v)(_, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, Jf.v)(P, {
            "aria-invalid": f || "invalid" === u || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, Yf.wt)(e).checked)
            },
            disabled: n,
            ...null == s ? {} : {
              value: s
            },
            name: a,
            form: i,
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
      const op = "undefined" != typeof document ? B.useInsertionEffect ?? B.useLayoutEffect : () => {};

      function sp(e, t, r) {
        let [n, o] = (0, B.useState)(e || t), s = (0, B.useRef)(n), a = (0, B.useRef)(void 0 !== e), i = void 0 !== e;
        (0, B.useEffect)(() => {
          a.current, a.current = i
        }, [i]);
        let d = i ? e : n;
        op(() => {
          s.current = d
        });
        let [, l] = (0, B.useReducer)(() => ({}), {}), c = (0, B.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(s.current) : e;
          Object.is(s.current, n) || (s.current = n, o(n), l(), r?.(n, ...t))
        }, [r]);
        return [d, c]
      }

      function ap(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = sp(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, B.useState)(r);
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

      function ip(e) {
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

      function lp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ip(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var up = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lp(lp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) up(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cp(e.variantClassNames, e => cp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        pp = fp({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hp = fp({
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
        mp = fp({
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
        vp = fp({
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
        yp = fp({
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
      const gp = (0, B.createContext)(null);

      function bp() {
        const e = (0, B.useContext)(gp);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const wp = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: s = !1,
          isReadOnly: a = !1,
          ...i
        }, d) => {
          const l = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? W.DX : "div",
            u = (0, B.useId)(),
            f = (0, B.useId)(),
            p = (0, B.useId)();
          return (0, P.jsx)(gp.Provider, {
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
            children: (0, P.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        _p = (0, B.forwardRef)(({
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
          const p = (0, B.useRef)(null),
            h = (0, U.UP)(p, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: _
            } = bp(),
            x = ap({
              isDisabled: w,
              isReadOnly: _,
              isSelected: a,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: C
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: s,
                isPressed: a,
                isDisabled: i,
                isReadOnly: d
              } = np(e, t, r);
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
              "aria-labelledby": (0, K.joinStrings)(n, g),
              "aria-describedby": (0, K.joinStrings)(o, b),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: _
            }, x, p),
            j = (0, K.mergeProps)({
              className: yp({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": w || _,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || _ || x.toggle()
              }
            }, u);
          return (0, P.jsxs)("div", {
            ...j,
            children: [(0, P.jsx)(W.s6, {
              children: (0, P.jsx)("input", {
                ...C,
                ref: h
              })
            }), (0, P.jsx)("div", {
              className: vp({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, P.jsx)("div", {
                className: hp({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        xp = (0, B.forwardRef)(({
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
          } = bp(), c = (0, K.mergeProps)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: mp({
              isDisabled: a,
              size: l
            })
          }, o), u = t ? W.DX : "label";
          return (0, P.jsx)(W.s6, {
            enabled: n,
            children: (0, P.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Cp = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = bp(), i = n.id || a, d = (0, K.mergeProps)({
            className: pp({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? W.DX : "div";
          return (0, P.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var jp = r(99386),
        Pp = r(58907);

      function Op(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, Pp.N)(() => {
          if ("native" === n && r?.current && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: Sp(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let s = (0, B.useRef)(!1),
          a = (0, tp.J)(() => {
            s.current || t.resetValidation()
          }),
          i = (0, tp.J)(e => {
            t.displayValidation.isInvalid || t.commitValidation();
            let n = r?.current?.form;
            !e.defaultPrevented && r && n && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!1 === r.validity?.valid) return r
              }
              return null
            }(n) === r.current && (o ? o() : r.current?.focus(), (0, jp.Cl)("keyboard")), e.preventDefault()
          }),
          d = (0, tp.J)(() => {
            t.commitValidation()
          });
        (0, B.useEffect)(() => {
          let e = r?.current;
          if (!e) return;
          let t = e.form,
            n = t?.reset;
          return t && (t.reset = () => {
            s.current = !window.event || "message" === window.event.type && (0, Yf.wt)(window.event) instanceof MessagePort, n?.call(t), s.current = !1
          }), e.addEventListener("invalid", i), e.addEventListener("change", d), t?.addEventListener("reset", a), () => {
            e.removeEventListener("invalid", i), e.removeEventListener("change", d), t?.removeEventListener("reset", a), t && (t.reset = n)
          }
        }, [r, n])
      }

      function Sp(e) {
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
      const kp = {
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
        Rp = {
          ...kp,
          customError: !0,
          valid: !1
        },
        Np = {
          isInvalid: !1,
          validationDetails: kp,
          validationErrors: []
        },
        Dp = (0, B.createContext)({}),
        Ip = "__reactAriaFormValidationState";

      function Ep(e) {
        if (e[Ip]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: s
          } = e[Ip];
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
              validationDetails: Rp
            } : null,
            l = (0, B.useMemo)(() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Tp(r)
                }
                return []
              }(a, o);
              return zp(e)
            }, [a, o]);
          s?.validationDetails.valid && (s = void 0);
          let c = (0, B.useContext)(Dp),
            u = (0, B.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => Tp(c[e])) : Tp(c[n]) : [], [c, n]),
            [f, p] = (0, B.useState)(c),
            [h, m] = (0, B.useState)(!1);
          c !== f && (p(c), m(!1));
          let v = (0, B.useMemo)(() => zp(h ? [] : u), [h, u]),
            y = (0, B.useRef)(Np),
            [g, b] = (0, B.useState)(Np),
            w = (0, B.useRef)(Np),
            [_, x] = (0, B.useState)(!1);
          return (0, B.useEffect)(() => {
            if (!_) return;
            x(!1);
            let e = l || s || y.current;
            Lp(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: d || v || l || s || Np,
            displayValidation: "native" === i ? d || v || g : d || v || l || s || g,
            updateValidation(e) {
              "aria" !== i || Lp(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = Np;
              Lp(e, w.current) || (w.current = e, b(e)), "native" === i && x(!1), m(!0)
            },
            commitValidation() {
              "native" === i && x(!0), m(!0)
            }
          }
        }(e)
      }

      function Tp(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function zp(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Rp
        } : null
      }

      function Lp(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }
      const Mp = ({
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
        Ap = ({
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
        Vp = ({
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
        qp = ({
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
        Fp = ({
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
        Bp = ({
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

      function Xp(e) {
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

      function Gp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Kp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Xp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Hp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Zp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Up = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kp(Kp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Zp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hp(e.variantClassNames, e => Hp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Wp = Up({
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
        $p = Up({
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
        Qp = Up({
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
        Yp = Up({
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
        Jp = Up({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        eh = Up({
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
      const th = (0, B.createContext)(null);

      function rh() {
        const e = (0, B.useContext)(th);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const nh = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...s
        }, a) => {
          const i = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, K.omit)(s, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? W.DX : "div",
            l = (0, B.useId)(),
            c = (0, B.useId)(),
            u = (0, B.useId)();
          return (0, P.jsx)(th.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...s
            },
            children: (0, P.jsx)(d, {
              ...i,
              ref: a,
              children: o
            })
          })
        }),
        oh = (0, B.forwardRef)(({
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
          } = rh(), x = (0, B.useRef)(null), C = f.id || w, {
            isPressed: j,
            pressProps: O
          } = (0, fc.d)({
            ref: x
          }), {
            setSelected: S,
            toggle: k,
            ...R
          } = ap({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: N,
            isSelected: D,
            isDisabled: I,
            isReadOnly: E
          } = function(e, t, r) {
            let n = Ep({
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
              } = np({
                ...e,
                isInvalid: o
              }, t, r);
            Op(e, n, r);
            let {
              isIndeterminate: p,
              isRequired: h,
              validationBehavior: m = "aria"
            } = e;
            (0, B.useEffect)(() => {
              r.current && (r.current.indeterminate = !!p)
            });
            let {
              pressProps: v
            } = (0, fc.d)({
              isDisabled: u || f,
              onPress() {
                let {
                  [Ip]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, Jf.v)(i, v, (0, B.useMemo)(() => ({
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
            id: C,
            name: o,
            ..._
          }, {
            ...R,
            toggle: k,
            setSelected: _.isReadOnly ? () => !1 : S
          }, x), T = (0, K.mergeProps)({
            className: $p({
              size: h
            }),
            onClick: e => {
              s?.(e) ?? a?.(e), e.defaultPrevented || I || E || k()
            }
          }, O, f), z = (0, K.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, K.joinStrings)(c, b),
            "aria-describedby": (0, K.joinStrings)(d, g),
            "aria-errormessage": (0, K.joinStrings)(l, _.isInvalid ? g : void 0),
            "aria-required": y,
            required: y
          }, N), L = v ? i[`Dash${h}`] : i[`Check${h}`];
          return (0, P.jsxs)("div", {
            ...T,
            children: [(0, P.jsx)(W.s6, {
              children: (0, P.jsx)("input", {
                ...z,
                ref: p
              })
            }), (0, P.jsx)("div", {
              className: (0, ue.clsx)(Wp({
                size: h,
                appearance: m
              }), u),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : D ? "checked" : "unchecked",
              "data-disabled": I || E,
              "data-testid": e,
              "data-pressed": j,
              children: (0, P.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (D || v) && (0, P.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        sh = (0, B.forwardRef)(({
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
          } = rh(), u = s.id || d, f = c && !o, p = (0, K.mergeProps)({
            className: eh({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: s.htmlFor || l
          }, s), h = t ? W.DX : "label";
          return (0, P.jsx)(W.s6, {
            enabled: n,
            children: (0, P.jsx)(h, {
              ...p,
              ref: a,
              children: e
            })
          })
        }),
        ah = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = rh(), i = n.id || a, d = (0, K.mergeProps)({
            className: Qp({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? W.DX : "div";
          return (0, P.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        ih = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = rh(), a = n.id || s, i = (0, K.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: a
          }, n), d = t ? W.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        dh = (0, B.createContext)(null);

      function lh() {
        const e = (0, B.useContext)(dh);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const ch = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...s
        }, a) => {
          const [i, d] = (0, B.useState)(null), [l, c] = (0, B.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, K.mergeProps)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, s), p = t ? W.DX : "fieldset";
          return (0, P.jsx)(dh.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, P.jsx)(p, {
              ...f,
              ref: a,
              children: r
            })
          })
        }),
        uh = (0, B.forwardRef)(({
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
          } = lh(), l = d && !s, c = (0, K.mergeProps)({
            "data-testid": r,
            className: Jp({
              showAsterisk: l
            })
          }, a), u = t ? W.DX : "legend";
          return (0, P.jsx)(W.s6, {
            enabled: o,
            children: (0, P.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, P.jsx)(W.xV, {
                children: e
              }), !d && (0, P.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        fh = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: s
          } = lh(), a = (0, B.useId)(), i = n.id || a;
          (0, B.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
              id: i
            }, n),
            l = t ? W.DX : "div";
          return (0, P.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        ph = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = lh(), a = (0, K.mergeProps)({
            "data-testid": r,
            className: Yp({
              size: s
            })
          }, n), i = t ? W.DX : "div";
          return (0, P.jsx)(i, {
            ...a,
            ref: o,
            children: e
          })
        }),
        hh = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: s
          } = lh(), a = (0, B.useId)(), i = n.id || a;
          (0, B.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, K.mergeProps)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
            }, n),
            l = fe.X,
            c = t ? W.DX : "div";
          return (0, P.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, P.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, P.jsx)(W.xV, {
              children: e
            })]
          })
        });

      function mh(e) {
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

      function vh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vh(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = mh(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yh(yh({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gh(e.variantClassNames, e => gh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _h = wh({
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
        xh = wh({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ch = wh({
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
        jh = wh({
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
      const Ph = (0, B.createContext)(null);

      function Oh() {
        const e = (0, B.useContext)(Ph);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Sh = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const l = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? W.DX : "div",
            u = (0, B.useId)(),
            f = (0, B.useId)(),
            p = (0, B.useId)(),
            h = (0, B.useId)();
          return (0, P.jsx)(Ph.Provider, {
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
            children: (0, P.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        kh = (0, B.forwardRef)(({
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
          } = Oh(), u = (0, K.mergeProps)({
            className: Ch({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, s), f = t ? W.DX : "label";
          return (0, P.jsx)(W.s6, {
            enabled: n,
            children: (0, P.jsx)(f, {
              ...u,
              ref: a,
              children: e
            })
          })
        }),
        Rh = (0, B.forwardRef)(({
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
          } = Oh(), b = (0, B.useRef)(null), w = (0, U.UP)(b, c), _ = (0, K.mergeProps)({
            className: jh({
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
            "aria-labelledby": (0, K.joinStrings)(l.id, f, h, i),
            "aria-describedby": (0, K.joinStrings)(u, d),
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
          }, l), x = e ? W.DX : "textarea";
          return (0, P.jsx)(x, {
            ref: w,
            ..._,
            children: t
          })
        }),
        Nh = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Oh(), i = (0, K.mergeProps)({
            className: _h({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? W.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Dh = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = Oh(), i = (0, K.mergeProps)({
            className: xh({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? W.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ih = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Oh(), i = (0, K.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? W.DX : _c;
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Eh = xc,
        Th = Cc;
      let zh = Math.round(1e10 * Math.random()),
        Lh = 0;
      var Mh = r(67892);
      class Ah {
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
          if (!(0, Yf.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, Yf.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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
      var Vh = r(28562),
        qh = r(1360);

      function Fh(e, t) {
        return !!e && !!t && t.some(t => (0, Yf.sD)(t, e))
      }

      function Bh(e, t, r) {
        let n = t?.tabbable ? qh.A : qh.t,
          o = e?.nodeType === Node.ELEMENT_NODE ? e : null,
          s = (0, Vh.TW)(o),
          a = function(e, t, r, n) {
            return (0, Mh.Nf)() ? new Ah(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(s, e || s, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, Yf.sD)(t?.from, e)) return NodeFilter.FILTER_REJECT;
              if (t?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, Vh.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let r = (0, Vh.mD)(e);
                      return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === a.currentNode.tagName && "radio" === a.currentNode.type && a.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !Fh(e, r) || t?.accept && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return t?.from && (a.currentNode = t.from), a
      }
      class Xh {
        constructor() {
          this.fastMap = new Map, this.root = new Gh({
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
          let o = new Gh({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Fh(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          let e = new Xh;
          for (let t of this.traverse()) e.addTreeNode(t.scopeRef, t.parent?.scopeRef ?? null, t.nodeToRestore);
          return e
        }
      }
      class Gh {
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
      new Xh;
      const Kh = new WeakMap;
      var Hh = r(13087);

      function Zh(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, Hh.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Uh(e) {
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
          t = (0, Hh.Bi)(t);
          let a = (0, Hh.Bi)(),
            i = {};
          return r && (n = n ? `${a} ${n}` : a, i = {
            id: a,
            htmlFor: "label" === s ? t : void 0
          }), {
            labelProps: i,
            fieldProps: Zh({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), i = (0, Hh.X1)([Boolean(t), Boolean(r), n, o]), d = (0, Hh.X1)([Boolean(t), Boolean(r), n, o]);
        return a = (0, Jf.v)(a, {
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
      var Wh = r(14142),
        $h = r(87478);
      const Qh = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Yh = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Jh(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Qh.has(t.script)
        }
        let t = e.split("-")[0];
        return Yh.has(t)
      }
      var em = r(6859);
      const tm = Symbol.for("react-aria.i18n.locale");

      function rm() {
        let e = "undefined" != typeof window && window[tm] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Jh(e) ? "rtl" : "ltr"
        }
      }
      let nm = rm(),
        om = new Set;

      function sm() {
        nm = rm();
        for (let e of om) e(nm)
      }
      const am = B.createContext(null);

      function im() {
        let e = function() {
          let e = (0, em.wR)(),
            [t, r] = (0, B.useState)(nm);
          return (0, B.useEffect)(() => (0 === om.size && window.addEventListener("languagechange", sm), om.add(r), () => {
            om.delete(r), 0 === om.size && window.removeEventListener("languagechange", sm)
          }), []), e ? {
            locale: "undefined" != typeof window && window[tm] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, B.useContext)(am) || e
      }

      function dm(e, t) {
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
        } = im(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: m,
          errorMessageProps: v
        } = Uh({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), y = (0, Qf.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, s = (0, B.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: i
          } = (0, $h.A)(), d = (0, B.useCallback)(e => {
            (0, Yf.sD)(e.currentTarget, (0, Yf.wt)(e)) && s.current.isFocusWithin && !(0, Yf.sD)(e.currentTarget, e.relatedTarget) && (s.current.isFocusWithin = !1, i(), r && r(e), o && o(!1))
          }, [r, o, s, i]), l = (0, Wh.yB)(d), c = (0, B.useCallback)(e => {
            if (!(0, Yf.sD)(e.currentTarget, (0, Yf.wt)(e))) return;
            let t = (0, Yf.wt)(e);
            const r = (0, Vh.TW)(t),
              i = (0, Yf.bq)(r);
            if (!s.current.isFocusWithin && i === t) {
              n && n(e), o && o(!0), s.current.isFocusWithin = !0, l(e);
              let t = e.currentTarget;
              a(r, "focus", e => {
                let n = (0, Yf.wt)(e);
                if (s.current.isFocusWithin && !(0, Yf.sD)(t, n)) {
                  let e = new r.defaultView.FocusEvent("blur", {
                    relatedTarget: n
                  });
                  (0, Wh.o1)(e, t);
                  let o = (0, Wh.eg)(e);
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
        }), b = (0, Hh.Bi)(r);
        return Kh.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: d
        }), {
          radioGroupProps: (0, Jf.v)(y, {
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
              let n, o = Bh(e.currentTarget, {
                from: (0, Yf.wt)(e),
                accept: e => e instanceof(0, Vh.mD)(e).HTMLInputElement && "radio" === e.type
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

      function lm(e) {
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

      function cm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function um(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? cm(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = lm(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function fm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var pm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        hm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = um(um({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) pm(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fm(e.variantClassNames, e => fm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        mm = hm({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vm = hm({
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
      const ym = (0, B.createContext)(null);

      function gm() {
        const e = (0, B.useContext)(ym);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const bm = (0, B.forwardRef)(({
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
          const f = (0, B.useRef)(null),
            p = (0, U.UP)(f, u),
            h = (0, B.useId)(),
            m = (0, B.useId)(),
            v = (0, B.useId)(),
            y = function(e) {
              let t = (0, B.useMemo)(() => e.name || `radio-group-${zh}-${++Lh}`, [e.name]),
                [r, n] = sp(e.value, e.defaultValue ?? null, e.onChange),
                [o] = (0, B.useState)(r),
                [s, a] = (0, B.useState)(null),
                i = Ep({
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
            } = dm({
              ...c,
              orientation: r,
              "aria-labelledby": (0, K.joinStrings)(h, a),
              "aria-describedby": (0, K.joinStrings)(m, v, i),
              "aria-errormessage": (0, K.joinStrings)(v, d)
            }, y),
            b = (0, K.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, K.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = s ? W.DX : "div";
          return (0, P.jsx)(ym.Provider, {
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
            children: (0, P.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        wm = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: s,
            orientation: a
          } = gm(), i = (0, K.mergeProps)({
            "data-testid": e,
            className: vm({
              size: s,
              orientation: a
            })
          }, n), d = t ? W.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        _m = (0, B.forwardRef)(({
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
          } = gm(), l = i && !o, c = (0, K.mergeProps)({
            id: s.id || d,
            "data-testid": e,
            className: mm({
              showAsterisk: l
            })
          }, s), u = t ? W.DX : "div";
          return (0, P.jsx)(W.s6, {
            enabled: n,
            children: (0, P.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        xm = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = gm(), a = (0, K.mergeProps)({
            id: s,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), i = t ? W.DX : "div";
          return (0, P.jsx)(i, {
            ...a,
            ref: o,
            children: r
          })
        }),
        Cm = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: a
          } = gm(), i = (0, K.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: a
          }, n), d = r ? W.DX : _c;
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        jm = xc,
        Pm = Cc;
      var Om = hm({
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
        Sm = hm({
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
        km = hm({
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
        Rm = hm({
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
      const Nm = ({
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
        Dm = ({
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
        Im = ({
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
        Em = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? W.DX : "label";
          return (0, P.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Tm = (0, B.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, B.useRef)(null),
            s = (0, U.UP)(o, n),
            a = (0, B.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = gm(),
            {
              isPressed: p,
              pressProps: h
            } = (0, fc.d)({
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
                } = (0, fc.d)({
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
                } = (0, fc.d)({
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
                } = (0, ep.Wc)((0, Jf.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                w = (0, Jf.v)(m, b),
                _ = (0, Qf.$)(e, {
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
              } = Kh.get(t);
              return rp(r, t.defaultSelectedValue, t.setSelectedValue), Op({
                validationBehavior: S
              }, t, r), {
                labelProps: (0, Jf.v)(y, (0, B.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, Jf.v)(_, {
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
            g = (0, K.mergeProps)(m, {
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
          return (0, P.jsxs)("div", {
            className: Rm({
              size: l
            }),
            children: [(0, P.jsx)(W.s6, {
              children: (0, P.jsx)("input", {
                type: "radio",
                ...g,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, P.jsx)("div", {
              className: km({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": p,
              ...h,
              children: (0, P.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, P.jsx)(b, {})
              })
            })]
          })
        }),
        zm = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: a,
            state: i
          } = gm(), d = (0, B.useId)(), l = (0, K.mergeProps)({
            id: d,
            "data-testid": e,
            className: Sm({
              size: a,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? W.DX : "div";
          return (0, P.jsx)(W.s6, {
            enabled: n,
            children: (0, P.jsx)(c, {
              ...l,
              ref: s,
              children: r
            })
          })
        }),
        Lm = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = gm(), a = (0, K.mergeProps)({
            "data-testid": e,
            className: Om({
              isDisabled: s
            })
          }, n), i = t ? W.DX : "span";
          return (0, P.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        });

      function Mm(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Am(e, t, r) {
        return t = Fm(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, Bm() ? Reflect.construct(t, r || [], Fm(e).constructor) : t.apply(e, r))
      }

      function Vm(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Mm(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Mm(e, t) : void 0
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

      function qm(e, t, r) {
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

      function Fm(e) {
        return Fm = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Fm(e)
      }

      function Bm() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (Bm = function() {
          return !!e
        })()
      }

      function Xm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Gm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xm(Object(r), !0).forEach(function(t) {
            qm(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Km(e, t) {
        return Km = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Km(e, t)
      }

      function Hm(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          s = t.separate,
          a = n,
          i = "",
          d = Vm(e);
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

      function Zm(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          s = t.separate,
          a = t.showMask,
          i = 0,
          d = "",
          l = Vm(n);
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

      function Um(e, t) {
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

      function Wm(e) {
        return e.length > 0 ? qm({}, e, /./) : {}
      }

      function $m(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, s = t.mask, a = t.replacement, i = t.separate, d = e.slice(n, o), l = s.slice(n, o), c = "", u = 0; u < l.length; u++) {
          var f = Object.prototype.hasOwnProperty.call(a, l[u]);
          f && void 0 !== d[u] && d[u] !== l[u] ? c += d[u] : f && i && (c += l[u])
        }
        return c
      }

      function Qm(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? Wm(n) : n,
          s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return Zm(Hm(e, {
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
      var Ym = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Jm(e) {
        return Ym.includes(e) ? "\\".concat(e) : e
      }

      function ev(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function tv(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function rv(e, t, r) {
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

      function nv(e) {
        return nv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, nv(e)
      }

      function ov() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (ov = function() {
          return !!e
        })()
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

      function av(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sv(Object(r), !0).forEach(function(t) {
            rv(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function iv(e, t) {
        return iv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, iv(e, t)
      }

      function dv(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return dv = function(e) {
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
              if (ov()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && iv(o, r.prototype), o
            }(e, arguments, nv(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), iv(r, e)
        }, dv(e)
      }
      var lv, cv = function(e) {
          function t(e) {
            var r;
            return ev(this, t), (r = function(e, t, r) {
              return t = nv(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, ov() ? Reflect.construct(t, r || [], nv(e).constructor) : t.apply(e, r))
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
            }), t && iv(e, t)
          }(t, e), tv(t)
        }(dv(Error)),
        uv = ["options"],
        fv = ["text", "email", "tel", "search", "url"],
        pv = tv(function e(t) {
          var r = t.init,
            n = t.tracking;
          ev(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (fv.includes(e.type)) {
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
              Object.defineProperty(e, "value", av(av({}, v), {}, {
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
                    if (h.cachedId === h.id) throw new cv("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var s = e.value,
                      a = e.selectionStart,
                      i = e.selectionEnd;
                    if (null === a || null === i) throw new cv("The selection attributes have not been initialized.");
                    var d, l = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = l.length), a > m.selectionStart ? d = "insert" : a <= m.selectionStart && a < m.selectionEnd ? d = "deleteBackward" : a === m.selectionEnd && s.length < l.length && (d = "deleteForward"), void 0 === d || ("deleteBackward" === d || "deleteForward" === d) && s.length > l.length) throw new cv("Input type detection error.");
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
                      }(g, uv);
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
      lv = pv, Object.defineProperty(lv.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var hv, mv = ["track", "modify"];

      function vv(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? Wm(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var yv = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = Am(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = vv(r),
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
                d = vv(r),
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
                }(d, mv),
                f = u.mask,
                p = u.replacement,
                h = u.showMask,
                m = u.separate,
                v = Gm(Gm({}, "insert" === t ? {
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
              if (!1 === y) throw new cv("Custom tracking stop.");
              null === y ? s = "" : !0 !== y && void 0 !== y && (s = y);
              var g = null == c ? void 0 : c(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? Wm(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = $m(n, Gm({
                  end: a
                }, o)),
                w = $m(n, Gm({
                  start: i
                }, o)),
                _ = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(_, "");
              if (b && (b = Hm(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: m
                }), x = x.slice(b.length)), s && (s = Hm(s, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(s.length)), "insert" === t && "" === s) throw new cv("The character does not match the key value of the `replacement` object.");
              if (m) {
                var C = f.slice(a, i).replace(_, ""),
                  j = C.length - s.length;
                j < 0 ? w = w.slice(-j) : j > 0 && (w = C.slice(-j) + w)
              }
              w && (w = Hm(w, {
                replacementChars: x,
                replacement: p,
                separate: m
              }));
              var P = Zm(b + s + w, {
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
                    c = Um(s, {
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
            return Qm(e, vv(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Wm(n) : n;
              return Um(Qm(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, vv(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Wm(n) : n,
                s = $m(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Hm(s, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, vv(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? Wm(n) : n, s = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, i = "", d = 0; d < r.length; d++) {
                var l = r[d];
                0 === d && (i = "^"), s && (i += "("), i += Object.prototype.hasOwnProperty.call(o, l) ? "".concat(a ? "(?!".concat(Jm(l), ")") : "", "(").concat(o[l].source, ")") : Jm(l), d === r.length - 1 && (s && (i += ")?".repeat(r.length)), i += "$")
              }
              return i
            }(e, vv(r))
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
            }), t && Km(e, t)
          }(e, pv),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

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
            var n, o, s;
            n = e, o = t, s = r[t], (o = gv(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
      hv = yv, Object.defineProperty(hv.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var xv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wv(wv({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) xv(l, n, e.defaultVariants) && (r += " " + c);
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
        jv = Cv({
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
        Pv = Cv({
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
        Ov = Cv({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sv = Cv({
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
        kv = Cv({
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
        Rv = Cv({
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
      const Nv = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Dv = (0, B.createContext)(null);

      function Iv() {
        const e = (0, B.useContext)(Dv);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Ev = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, B.useState)("text"), u = `${(0,B.useId)()}-label`, f = `${(0,B.useId)()}-input`, p = `${(0,B.useId)()}-description`, h = (0, B.useRef)(null), m = (0, B.useRef)(Nv), v = (0, K.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), y = e ? W.DX : "div";
          return (0, P.jsx)(Dv.Provider, {
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
            children: (0, P.jsx)(y, {
              ref: d,
              ...v,
              children: t
            })
          })
        }),
        Tv = (0, B.forwardRef)(({
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
          } = Iv(), u = d && !o, f = (0, K.mergeProps)({
            id: s.id || c,
            htmlFor: s.htmlFor || l,
            "data-testid": e,
            className: Rv({
              showAsterisk: u,
              isDisabled: i
            })
          }, s), p = t ? W.DX : "label";
          return (0, P.jsx)(W.s6, {
            enabled: n,
            children: (0, P.jsx)(p, {
              ref: a,
              ...f,
              children: r
            })
          })
        }),
        zv = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Iv(), a = (0, K.mergeProps)({
            "data-testid": e,
            className: Ov({
              isDisabled: s
            })
          }, n), i = t ? W.DX : "span";
          return (0, P.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        }),
        Lv = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: a,
            status: i
          } = Iv(), d = (0, K.mergeProps)({
            "data-testid": e,
            className: (0, ue.clsx)(jv({
              isDisabled: s,
              isReadOnly: a,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? W.DX : "div";
          return (0, P.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        Mv = (0, B.forwardRef)(({
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
          } = Iv();
          (0, B.useEffect)(() => b(l), []);
          const C = "invalid" === m,
            j = (0, K.mergeProps)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, K.joinStrings)(v, i),
              "aria-describedby": (0, K.joinStrings)(g, d),
              "data-testid": e,
              className: (0, ue.clsx)(kv({
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
              ...C && {
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
            O = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                s = e.track,
                a = e.modify,
                i = (0, B.useRef)(null),
                d = (0, B.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: s,
                  modify: a
                });
              return d.current.mask = t, d.current.replacement = r, d.current.showMask = n, d.current.separate = o, d.current.track = s, d.current.modify = a, (0, B.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(i, new yv(d.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            S = (0, U.UP)(r && n ? O : null, _, u),
            k = t ? W.DX : "input";
          return (0, P.jsx)(k, {
            ref: S,
            ...j
          })
        }),
        Av = (0, B.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: a
          } = Iv(), i = (0, K.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, ue.clsx)(Sv({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), d = t ? W.DX : fe[e];
          return (0, P.jsx)(d, {
            ref: s,
            ...i
          })
        }),
        Vv = (0, B.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Iv(), n = (0, K.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, ue.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, P.jsx)(Ee, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        qv = (0, B.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: s,
            inputRef: a,
            focusState: i
          } = Iv(), d = "password" === o, l = d ? e : t;
          (0, B.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, K.mergeProps)({
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
          return (0, P.jsxs)(rl, {
            children: [(0, P.jsx)(nl, {
              children: (0, P.jsx)(Vv, {
                ref: n,
                ...c
              })
            }), (0, P.jsxs)(ol, {
              side: "bottom",
              align: "end",
              children: [l, (0, P.jsx)(sl, {})]
            })]
          })
        }),
        Fv = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Iv(), i = (0, K.mergeProps)({
            className: Pv({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? W.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Bv = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Iv(), i = (0, K.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? W.DX : _c;
          return (0, P.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Xv = xc,
        Gv = Cc;
      var Kv = r(2577);

      function Hv(e, t) {
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
        } = (0, ep.Wc)(e, t), {
          pressProps: u,
          isPressed: f
        } = (0, fc.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onClick: a,
          isDisabled: i,
          ref: t
        }), p = (0, Qf.$)(d, {
          labelable: !0
        }), h = (0, Jf.v)(c, u), m = (0, Kv.rd)(), v = (0, Kv._h)(e);
        return {
          isPressed: f,
          linkProps: (0, Jf.v)(p, v, {
            ...h,
            ...l,
            "aria-disabled": i || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              u.onClick?.(t), (0, Kv.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function Zv(e) {
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

      function Uv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Wv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uv(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Zv(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $v(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Yv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Wv(Wv({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $v(e.variantClassNames, e => $v(e, e => e.split(" ")[0]))
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
      const Jv = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        ey = (0, B.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.useRef)(null),
            a = (0, U.UP)(s, o),
            {
              buttonProps: i
            } = (0, U.sL)(n, s),
            d = (0, K.mergeProps)({
              "data-testid": r,
              className: Yv({
                size: t
              })
            }, i);
          return (0, P.jsx)("button", {
            ref: a,
            ...d,
            children: (0, P.jsx)(fe.X, {
              label: e,
              size: Jv[t]
            })
          })
        });

      function ty(e) {
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

      function ry(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ny(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ry(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ty(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ry(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function oy(e, t) {
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
        ay = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ny(ny({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oy(e.variantClassNames, e => oy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        iy = ay({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        dy = ay({
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
        ly = ay({
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
      const cy = (0, B.createContext)(null);

      function uy() {
        const e = (0, B.useContext)(cy);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const fy = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const a = e ? W.DX : "div",
            i = (0, K.mergeProps)({
              className: ly({
                status: r,
                background: n
              })
            }, o);
          return (0, P.jsx)(cy.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, P.jsx)(a, {
              ref: s,
              "data-testid": t,
              ...i
            })
          })
        }),
        py = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? W.DX : "div",
            s = (0, K.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        hy = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? W.DX : "div",
            s = (0, K.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        my = {
          danger: fe.CircleX,
          information: fe.Info,
          success: fe.CircleCheck,
          warning: fe.TriangleAlert
        },
        vy = (0, B.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = uy(), s = e ? W.DX : my[o], a = (0, K.mergeProps)({
            className: dy({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, P.jsx)(s, {
            label: "",
            ref: n,
            ...a
          })
        }),
        yy = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? W.DX : "div",
            s = (0, K.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        gy = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? W.DX : "div",
            s = (0, K.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        by = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.useRef)(null),
            a = (0, U.UP)(s, o),
            i = e ? W.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = Hv(n, s),
            c = (0, K.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, d);
          return (0, P.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...c,
            children: t
          })
        }),
        wy = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? W.DX : "div",
            a = (0, K.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        _y = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const s = e ? W.DX : "div";
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": t,
            className: (0, ue.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        xy = (0, B.forwardRef)((e, t) => {
          const {
            background: r
          } = uy(), n = "none" !== r, o = (0, K.mergeProps)({
            className: iy({
              hasBackground: n
            })
          }, e);
          return (0, P.jsx)(ey, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function Cy(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function jy(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Cy(n) && Cy(o) ? jy(n, o) : n === o
        }))
      }

      function Py(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function Oy(e) {
        return "number" == typeof e
      }

      function Sy(e) {
        return "string" == typeof e
      }

      function ky(e) {
        return "boolean" == typeof e
      }

      function Ry(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Ny(e) {
        return Math.abs(e)
      }

      function Dy(e) {
        return Math.sign(e)
      }

      function Iy(e, t) {
        return Ny(e - t)
      }

      function Ey(e) {
        return Ay(e).map(Number)
      }

      function Ty(e) {
        return e[zy(e)]
      }

      function zy(e) {
        return Math.max(0, e.length - 1)
      }

      function Ly(e, t) {
        return t === zy(e)
      }

      function My(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function Ay(e) {
        return Object.keys(e)
      }

      function Vy(e, t) {
        return [e, t].reduce((e, t) => (Ay(t).forEach(r => {
          const n = e[r],
            o = t[r],
            s = Ry(n) && Ry(o);
          e[r] = s ? Vy(n, o) : o
        }), e), {})
      }

      function qy(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function Fy() {
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

      function By(e = 0, t = 0) {
        const r = Ny(e - t);

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

      function Xy(e, t, r) {
        const {
          constrain: n
        } = By(0, e), o = e + 1;
        let s = a(t);

        function a(e) {
          return r ? Ny((o + e) % o) : n(e)
        }

        function i() {
          return s
        }

        function d() {
          return Xy(e, i(), r)
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

      function Gy(e, t, r, n, o, s, a, i, d, l, c, u, f, p, h, m, v, y, g) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, C = Fy(), j = Fy(), P = By(50, 225).constrain(p.measure(20)), O = {
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
          if (!qy(e, n) && e.touches.length >= 2) return M(e);
          const t = s.readPoint(e),
            r = s.readPoint(e, b),
            a = Iy(t, N),
            d = Iy(r, D);
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
              const r = u.add(-1 * Dy(e)),
                n = c.byDistance(e, !h).distance;
              return h || Ny(e) < P ? n : v && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Ny(e) <= Ny(t)) return 0;
              const r = Iy(Ny(e), Ny(t));
              return Ny(r / e)
            }(r, n),
            a = k - 10 * o,
            i = y + o / 50;
          E = !1, I = !1, j.clear(), l.useDuration(a).useFriction(i), d.distance(n, !h), z = !1, f.emit("pointerUp")
        }

        function A(e) {
          T && (e.stopPropagation(), e.preventDefault(), T = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function i(i) {
              (ky(g) || g(e, i)) && function(e) {
                const i = qy(e, n);
                z = i, T = h && i && !e.buttons && R, R = Iy(o.get(), a.get()) >= 2, i && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (I = !0, s.pointerDown(e), l.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = z ? r : t;
                  j.add(e, "touchmove", L, x).add(e, "touchend", M).add(e, "mousemove", L, x).add(e, "mouseup", M)
                }(), N = s.readPoint(e), D = s.readPoint(e, b), f.emit("pointerDown"))
              }(i)
            }
            const d = t;
            C.add(d, "dragstart", e => e.preventDefault(), x).add(d, "touchmove", () => {}, x).add(d, "touchend", () => {}).add(d, "touchstart", i).add(d, "mousedown", i).add(d, "touchcancel", M).add(d, "contextmenu", M).add(d, "click", A, !0)
          },
          destroy: function() {
            C.clear(), j.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function Ky(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function s(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (qy(r, t) ? r : r.touches[0])[o]
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
            return a && !i && Ny(d) > .1 ? d : 0
          },
          readPoint: s
        }
      }

      function Hy(e, t, r, n, o, s, a) {
        const i = [e].concat(n);
        let d, l, c = [],
          u = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            s && (l = f(e), c = n.map(f), d = new ResizeObserver(r => {
              (ky(s) || s(o, r)) && function(r) {
                for (const s of r) {
                  if (u) return;
                  const r = s.target === e,
                    a = n.indexOf(s.target),
                    i = r ? l : c[a];
                  if (Ny(f(r ? e : n[a]) - i) >= .5) {
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

      function Zy(e, t, r, n, o) {
        const s = o.measure(10),
          a = o.measure(50),
          i = By(.1, .99);
        let d = !1;

        function l() {
          return !d && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: l,
          constrain: function(o) {
            if (!l()) return;
            const d = e.reachedMin(t.get()) ? "min" : "max",
              c = Ny(e[d] - t.get()),
              u = r.get() - t.get(),
              f = i.constrain(c / a);
            r.subtract(u * f), !o && Ny(u) < s && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            d = !e
          }
        }
      }

      function Uy(e, t, r, n) {
        const o = t.min + .1,
          s = t.max + .1,
          {
            reachedMin: a,
            reachedMax: i
          } = By(o, s),
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

      function Wy(e) {
        let t = e;

        function r(e) {
          return Oy(e) ? e : e.get()
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

      function $y(e, t) {
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

      function Qy(e, t, r, n, o, s, a, i, d) {
        const l = Ey(o),
          c = Ey(o).reverse(),
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
              slideLocation: Wy(-1),
              translate: $y(e, d[t]),
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

      function Yy(e, t, r) {
        let n, o = !1;
        return {
          init: function(s) {
            r && (n = new MutationObserver(e => {
              o || (ky(r) || r(s, e)) && function(e) {
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

      function Jy(e, t, r, n, o, s, a) {
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
              return Sy(e) ? r[e](n) : e(t, n, o)
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
            return Ny(t[i] - e[i])
          }(), u = function() {
            if (!l) return 0;
            const e = s.getComputedStyle(Ty(n));
            return parseFloat(e.getPropertyValue(`margin-${d}`))
          }(), f = r.map(a), p = r.map((e, t, r) => {
            const n = !t,
              o = Ly(r, t);
            return n ? f[t] + c : o ? f[t] + u : r[t + 1][i] - e[i]
          }).map(Ny);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: c,
            endGap: u
          }
        }(O, j, P, r, D, o), L = function(e, t, r, n, o, s, a, i, d) {
          const {
            startEdge: l,
            endEdge: c,
            direction: u
          } = e, f = Oy(r), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return Ey(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? Ey(e).reduce((r, f, p) => {
                  const h = Ty(r) || 0,
                    m = 0 === h,
                    v = f === zy(e),
                    y = o[l] - s[h][l],
                    g = o[l] - s[f][c],
                    b = !n && m ? u(a) : 0,
                    w = Ny(g - (!n && v ? u(i) : 0) - (y + b));
                  return p && w > t + d && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(O, S, v, u, j, P, T, z, 2), {
          snaps: M,
          snapsAligned: A
        } = function(e, t, r, n, o) {
          const {
            startEdge: s,
            endEdge: a
          } = e, {
            groupSlides: i
          } = o, d = i(n).map(e => Ty(e)[a] - e[0][s]).map(Ny).map(t.measure), l = n.map(e => r[s] - e[s]).map(e => -Ny(e)), c = i(l).map(e => e[0]).map((e, t) => e + d[t]);
          return {
            snaps: l,
            snapsAligned: c
          }
        }(O, R, j, P, L), V = -Ty(M) + Ty(E), {
          snapsContained: q,
          scrollContainLimit: F
        } = function(e, t, r, n) {
          const o = By(-t + e, 0),
            s = r.map((e, t) => {
              const {
                min: n,
                max: s
              } = o, a = o.constrain(e), d = !t, l = Ly(r, t);
              return d ? s : l || i(n, a) ? n : i(s, a) ? s : a
            }).map(e => parseFloat(e.toFixed(3))),
            a = function() {
              const e = s[0],
                t = Ty(s);
              return By(s.lastIndexOf(e), s.indexOf(t) + 1)
            }();

          function i(e, t) {
            return Iy(e, t) <= 1
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
            limit: By(r ? n - e : Ty(t), n)
          }
        }(V, B, u), G = Xy(zy(B), c, u), K = G.clone(), H = Ey(r), Z = function(e, t, r, n) {
          const o = Fy(),
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
        })(ie, e)), U = B[G.get()], W = Wy(U), $ = Wy(U), Q = Wy(U), Y = Wy(U), J = function(e, t, r, n, o) {
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
              return i ? (r.set(e), s += t / i, s *= d, l += s, e.add(s), o = l - c) : (s = 0, r.set(n), e.set(n), o = t), a = Dy(o), c = l, p
            },
            settled: function() {
              return Ny(n.get() - t.get()) < .001
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
            return e.concat().sort((e, t) => Ny(e) - Ny(t))[0]
          }

          function l(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return d(o);
            const s = o.filter(e => Dy(e) === n);
            return s.length ? d(s) : Ty(o) - r
          }
          const c = {
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
                    })).sort((e, t) => Ny(e.diff) - Ny(t.diff)),
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
          };
          return c
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
        }(X), ne = Fy(), oe = function(e, t, r, n) {
          const o = {};
          let s, a = null,
            i = null,
            d = !1;
          const l = {
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
                return Ay(o).reduce((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: s
                    } = o[n];
                  return (e && s || !e && !s) && t.push(n), t
                }, [])
              }(e);
              return e && (a = t), e || (i = t), t
            }
          };
          return l
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
                o = Ly(r, t);
              return n ? My(Ty(r[0]) + 1) : o ? My(zy(s) - Ty(r)[0] + 1, Ty(r)[0]) : e
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
          const u = {
            init: function(u) {
              i && (s.add(document, "keydown", c, !1), t.forEach((t, c) => {
                s.add(t, "focus", t => {
                  (ky(i) || i(u, t)) && function(t) {
                    if ((new Date).getTime() - l > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const s = r.findIndex(e => e.includes(t));
                    Oy(s) && (o.useDuration(0), n.index(s, 0), a.emit("slideFocus"))
                  }(c)
                }, d)
              }))
            }
          };
          return u
        }(e, r, se, te, J, ne, a, x), ie = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: a,
          containerRect: j,
          slideRects: P,
          animation: Z,
          axis: O,
          dragHandler: Gy(O, e, n, o, Y, Ky(O, o), W, Z, te, J, ee, G, a, k, p, h, y, .68, _),
          eventStore: ne,
          percentOfView: k,
          index: G,
          indexPrevious: K,
          limit: X,
          location: W,
          offsetLocation: Q,
          previousLocation: $,
          options: s,
          resizeHandler: Hy(t, a, o, r, O, b, C),
          scrollBody: J,
          scrollBounds: Zy(X, Q, Y, J, k),
          scrollLooper: Uy(V, X, Q, [W, Q, $, Y]),
          scrollProgress: re,
          scrollSnapList: B.map(re.get),
          scrollSnaps: B,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Qy(O, S, V, I, E, M, B, Q, r),
          slideFocus: ae,
          slidesHandler: Yy(t, a, w),
          slidesInView: oe,
          slideIndexes: H,
          slideRegistry: se,
          slidesToScroll: L,
          target: Y,
          translate: $y(O, t)
        };
        return ie
      }
      const eg = {
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

      function tg(e) {
        function t(e, t) {
          return Vy(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = Ay(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => Ay(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function rg(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          s = tg(o),
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
          i = Fy(),
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
          _ = l(eg, rg.globalOptions),
          x = l(_),
          C = [];

        function j(t) {
          const r = Jy(e, g, b, n, o, t, d);
          return t.loop && !r.slideLooper.canLoop() ? j(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function P(t, r) {
          w || (_ = l(_, t), x = c(_), C = r || C, function() {
            const {
              container: t,
              slides: r
            } = x, n = Sy(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = Sy(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = j(x), u([_, ...C.map(({
            options: e
          }) => e)]).forEach(e => i.add(e, "change", O)), x.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(N), v.eventHandler.init(N), v.resizeHandler.init(N), v.slidesHandler.init(N), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(N), y = a.init(N, C)))
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

      function ng(e = {}, t = []) {
        const r = (0, B.useRef)(e),
          n = (0, B.useRef)(t),
          [o, s] = (0, B.useState)(),
          [a, i] = (0, B.useState)(),
          d = (0, B.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, B.useEffect)(() => {
          jy(r.current, e) || (r.current = e, d())
        }, [e, d]), (0, B.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = Py(e),
              n = Py(t);
            return r.every((e, t) => jy(e, n[t]))
          })(n.current, t) || (n.current = t, d())
        }, [t, d]), (0, B.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            rg.globalOptions = ng.globalOptions;
            const e = rg(a, r.current, n.current);
            return s(e), () => e.destroy()
          }
          s(void 0)
        }, [a, s]), [i, o]
      }

      function og(e = {}) {
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
      rg.globalOptions = void 0, ng.globalOptions = void 0, og.globalOptions = void 0;
      const sg = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function ag(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function ig(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function dg(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function lg(e = {}) {
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
          ("pointerDown" === t ? dg : ig)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            s = e.map(e => o[e]);
          return n.forEach(e => ig(e, r)), s.forEach(e => dg(e, r)), e
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
            } = a, v = f(sg, lg.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (c.loop = ag(t.loop), dg(n, c.loop)), t.draggable && w && (c.draggable = ag(t.draggable), dg(n, c.draggable)), t.dragging && (c.dragging = ag(t.dragging), d.forEach(e => r.on(e, u))), t.snapped && (c.snapped = ag(t.snapped), i.forEach(e => r.on(e, p)), p()), t.inView && (c.inView = ag(t.inView), l.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            d.forEach(e => r.off(e, u)), i.forEach(e => r.off(e, p)), l.forEach(e => r.off(e, h)), ig(n, c.loop), ig(n, c.draggable), ig(n, c.dragging), f([], s, c.snapped), f([], a, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return m
      }
      lg.globalOptions = void 0;

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
            var n, o, s;
            n = e, o = t, s = r[t], (o = cg(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
        mg = "foundry_qmpv6yv",
        vg = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fg(fg({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) hg(l, n, e.defaultVariants) && (r += " " + c);
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
      const yg = (0, B.createContext)(null);

      function gg() {
        const e = (0, B.useContext)(yg);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const bg = (0, B.forwardRef)(({
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
              const t = (0, U.rl)(),
                r = (0, U.jt)(),
                [n, o] = (0, B.useState)([]),
                s = n.length,
                [a, i] = (0, B.useState)(0),
                [d, l] = ng({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [og(), lg()]),
                c = (0, B.useRef)(0),
                u = (0, B.useRef)(!1),
                f = n[a],
                p = (0, B.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                h = (0, B.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, B.useCallback)((e, t) => {
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
              return (0, B.useEffect)(() => {
                l && (h(l), m(l), l.on("reInit", h).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [l, m]), (0, B.useEffect)(() => {
                l && (p(l), l.on("select", p).on("reInit", p))
              }, [l, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: s,
                emblaRef: d,
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
          (0, B.useEffect)(() => {
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
            m = (0, K.mergeProps)({
              className: vg(c)
            }, h, i),
            v = e ? W.DX : "div";
          return (0, P.jsx)(yg.Provider, {
            value: l,
            children: (0, P.jsx)(v, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...m,
              children: t
            })
          })
        }),
        wg = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        _g = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = gg();
          if (!e && !n || !n?.status) return null;
          const o = e || wg[n.status],
            s = fe[o],
            a = (0, K.mergeProps)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, P.jsx)(s, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...a
          })
        }),
        xg = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? W.DX : "div",
            s = (0, K.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Cg = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, a) => {
          const i = e ? W.DX : "div",
            d = (0, K.mergeProps)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, P.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...d
          })
        }),
        jg = (0, B.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s
          } = gg(), a = (0, K.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), i = (0, U.UP)(s, n), d = B.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, B.useEffect)(() => {
            d && o(d)
          }, []), (0, P.jsx)("div", {
            ref: i,
            "data-testid": e,
            ...a,
            children: (0, P.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Pg = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.useRef)(null),
            a = (0, U.UP)(s, o),
            i = e ? W.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = Hv(n, s),
            c = (0, K.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, P.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...d,
            ...c,
            children: t
          })
        }),
        Og = (0, B.forwardRef)((e, t) => {
          const r = (0, K.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, P.jsx)(ey, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Sg = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const s = e ? W.DX : "div",
            a = (0, K.mergeProps)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...a,
            children: r
          })
        }),
        kg = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = gg(), s = (0, K.mergeProps)({
            className: mg
          }, t);
          return (0, P.jsx)(Ee, {
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
        Rg = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = gg(), s = (0, K.mergeProps)({
            className: mg
          }, t);
          return (0, P.jsx)(Ee, {
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
        Ng = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = gg(), s = (0, K.mergeProps)({
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

      function Dg(e) {
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

      function Ig(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Eg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ig(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Dg(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ig(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Tg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var zg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Lg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Eg(Eg({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zg(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tg(e.variantClassNames, e => Tg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Mg = Lg({
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
        Ag = Lg({
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
        Vg = Lg({
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
      const qg = (0, B.createContext)(null);

      function Fg() {
        const e = (0, B.useContext)(qg);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Bg = (0, B.forwardRef)(({
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
            u = (0, K.mergeProps)({
              className: Ag(c)
            }, d),
            f = e ? W.DX : "div";
          return (0, P.jsx)(qg.Provider, {
            value: c,
            children: (0, P.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        Xg = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = Fg(), a = e ? W.DX : "div", i = (0, K.mergeProps)({
            className: Vg({
              size: s
            })
          }, n);
          return (0, P.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        Gg = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = fe[e],
            o = (0, K.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, P.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        Kg = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = Fg(), s = (0, K.mergeProps)({
            className: Mg({
              background: n
            })
          }, t);
          return (0, P.jsx)(Ee, {
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
      var Hg = "ToastProvider",
        [Zg, Ug, Wg] = (0, cl.N)("Toast"),
        [$g, Qg] = (0, Ci.A)("Toast", [Wg]),
        [Yg, Jg] = $g(Hg),
        eb = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            children: a
          } = e, [i, d] = B.useState(null), [l, c] = B.useState(0), u = B.useRef(!1), f = B.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${Hg}\`. Expected non-empty \`string\`.`), (0, P.jsx)(Zg.Provider, {
            scope: t,
            children: (0, P.jsx)(Yg, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: l,
              viewport: i,
              onViewportChange: d,
              onToastAdd: B.useCallback(() => c(e => e + 1), []),
              onToastRemove: B.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: u,
              isClosePausedRef: f,
              children: a
            })
          })
        };
      eb.displayName = Hg;
      var tb = "ToastViewport",
        rb = ["F8"],
        nb = "toast.viewportPause",
        ob = "toast.viewportResume",
        sb = B.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = rb,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, a = Jg(tb, r), i = Ug(r), d = B.useRef(null), l = B.useRef(null), c = B.useRef(null), u = B.useRef(null), f = (0, xi.s)(t, u, a.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = a.toastCount > 0;
          B.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), B.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (h && e && t) {
              const r = () => {
                  if (!a.isClosePausedRef.current) {
                    const e = new CustomEvent(nb);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(ob);
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
          const m = B.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Cb(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return B.useEffect(() => {
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
                  jb(o.slice(s + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, m]), (0, P.jsxs)(ji.lg, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, P.jsx)(ib, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                jb(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, P.jsx)(Zg.Slot, {
              scope: r,
              children: (0, P.jsx)(Vi.sG.ol, {
                tabIndex: -1,
                ...s,
                ref: f
              })
            }), h && (0, P.jsx)(ib, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                jb(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      sb.displayName = tb;
      var ab = "ToastFocusProxy",
        ib = B.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = Jg(ab, r);
          return (0, P.jsx)(gd, {
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
      ib.displayName = ab;
      var db = "Toast",
        lb = B.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...a
          } = e, [i, d] = (0, vd.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: db
          });
          return (0, P.jsx)(hd.C, {
            present: r || i,
            children: (0, P.jsx)(fb, {
              open: i,
              ...a,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, Bi.c)(e.onPause),
              onResume: (0, Bi.c)(e.onResume),
              onSwipeStart: (0, _i.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, _i.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, _i.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, _i.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        });
      lb.displayName = db;
      var [cb, ub] = $g(db, {
        onClose() {}
      }), fb = B.forwardRef((e, t) => {
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
        } = e, m = Jg(db, r), [v, y] = B.useState(null), g = (0, xi.s)(t, e => y(e)), b = B.useRef(null), w = B.useRef(null), _ = o || m.duration, x = B.useRef(0), C = B.useRef(_), j = B.useRef(0), {
          onToastAdd: O,
          onToastRemove: S
        } = m, k = (0, Bi.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), a()
        }), R = B.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(j.current), x.current = (new Date).getTime(), j.current = window.setTimeout(k, e))
        }, [k]);
        B.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                R(C.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - x.current;
                C.current = C.current - e, window.clearTimeout(j.current), d?.()
              };
            return e.addEventListener(nb, r), e.addEventListener(ob, t), () => {
              e.removeEventListener(nb, r), e.removeEventListener(ob, t)
            }
          }
        }, [m.viewport, _, d, l, R]), B.useEffect(() => {
          s && !m.isClosePausedRef.current && R(_)
        }, [s, _, m.isClosePausedRef, R]), B.useEffect(() => (O(), () => S()), [O, S]);
        const N = B.useMemo(() => v ? wb(v) : null, [v]);
        return m.viewport ? (0, P.jsxs)(P.Fragment, {
          children: [N && (0, P.jsx)(pb, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: N
          }), (0, P.jsx)(cb, {
            scope: r,
            onClose: k,
            children: ai.createPortal((0, P.jsx)(Zg.ItemSlot, {
              scope: r,
              children: (0, P.jsx)(ji.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, _i.mK)(i, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || k(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, P.jsx)(Vi.sG.li, {
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
                  onKeyDown: (0, _i.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, k()))
                  }),
                  onPointerDown: (0, _i.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, _i.mK)(e.onPointerMove, e => {
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
                    n ? (w.current = l, _b("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : xb(l, m.swipeDirection, d) ? (w.current = l, _b("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (b.current = null)
                  }),
                  onPointerUp: (0, _i.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      xb(t, m.swipeDirection, m.swipeThreshold) ? _b("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : _b("toast.swipeCancel", f, n, {
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
      }), pb = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = Jg(db, t), [s, a] = B.useState(!1), [i, d] = B.useState(!1);
        return function(e = () => {}) {
          const t = (0, Bi.c)(e);
          (0, Xi.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => a(!0)), B.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, P.jsx)(pd.Z, {
          asChild: !0,
          children: (0, P.jsx)(gd, {
            ...n,
            children: s && (0, P.jsxs)(P.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      B.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, P.jsx)(Vi.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var hb = B.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, P.jsx)(Vi.sG.div, {
          ...n,
          ref: t
        })
      });
      hb.displayName = "ToastDescription";
      var mb = "ToastAction",
        vb = B.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, P.jsx)(bb, {
            altText: r,
            asChild: !0,
            children: (0, P.jsx)(gb, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${mb}\`. Expected non-empty \`string\`.`), null)
        });
      vb.displayName = mb;
      var yb = "ToastClose",
        gb = B.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = ub(yb, r);
          return (0, P.jsx)(bb, {
            asChild: !0,
            children: (0, P.jsx)(Vi.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, _i.mK)(e.onClick, o.onClose)
            })
          })
        });
      gb.displayName = yb;
      var bb = B.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, P.jsx)(Vi.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function wb(e) {
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
              } else t.push(...wb(e))
          }
        }), t
      }

      function _b(e, t, r, {
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
        }), n ? (0, Vi.hO)(o, s) : o.dispatchEvent(s)
      }
      var xb = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
      };

      function Cb(e) {
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

      function jb(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var Pb = eb,
        Ob = sb,
        Sb = lb,
        kb = hb,
        Rb = vb,
        Nb = gb;

      function Db(e) {
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

      function Ib(e, t) {
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
          t % 2 ? Ib(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Db(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ib(Object(r)).forEach(function(t) {
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
      var zb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Lb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Eb(Eb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zb(l, n, e.defaultVariants) && (r += " " + c);
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
        },
        Mb = Lb({
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
        Ab = Lb({
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
        Vb = Lb({
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
      const qb = ({
          testId: e,
          ...t
        }) => (0, P.jsx)(Pb, {
          "data-testid": e,
          ...t
        }),
        Fb = (0, B.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
            className: Vb({
              position: r
            })
          }, n);
          return (0, P.jsx)(Ob, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        Bb = (0, B.createContext)(null);

      function Xb() {
        const e = (0, B.useContext)(Bb);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Gb = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const a = e ? W.DX : Sb,
            i = (0, K.mergeProps)({
              className: Ab({
                appearance: n
              })
            }, o);
          return (0, P.jsx)(Bb.Provider, {
            value: {
              appearance: n
            },
            children: (0, P.jsx)(a, {
              ref: s,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        Kb = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? W.DX : kb,
            a = (0, K.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        Hb = {
          danger: fe.CircleX,
          information: fe.Info,
          success: fe.CircleCheck,
          warning: fe.TriangleAlert,
          avocado: fe.CircleCheck
        },
        Zb = (0, B.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = Xb(), o = e ? W.DX : Hb[n], s = (0, K.mergeProps)({
            className: Mb({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, P.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        Ub = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, P.jsx)(Rb, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, P.jsx)(W.DX, {
              children: t
            }) : (0, P.jsx)(Ce, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Wb = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, s) => {
          const a = (0, K.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, P.jsx)(Nb, {
            ref: s,
            "data-testid": r,
            ...a,
            children: e ? (0, P.jsx)(W.DX, {
              children: t
            }) : (0, P.jsx)(ey, {
              size: "SM",
              label: n
            })
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
        nw = tw({
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
        ow = tw({
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

      function sw() {
        const e = (0, B.useContext)(aw);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const aw = (0, B.createContext)(null),
        iw = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const a = (0, K.mergeProps)({
              className: ow({
                size: n
              })
            }, o),
            i = r ? W.DX : "ol";
          return (0, P.jsx)(aw.Provider, {
            value: {
              size: n
            },
            children: (0, P.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        }),
        dw = (0, B.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, B.useRef)(null),
            {
              size: i
            } = sw(),
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
              } = Hv({
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
            l = r ? W.DX : "a",
            c = (0, K.mergeProps)({
              className: (0, ue.clsx)(rw({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, P.jsx)("li", {
            className: nw({
              size: i
            }),
            ref: s,
            children: (0, P.jsx)(l, {
              ref: a,
              ...c,
              children: t
            })
          })
        }),
        lw = (0, B.forwardRef)(({
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
        cw = (0, B.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [a, i] = (0, B.useState)(r), {
            size: d
          } = sw(), l = (0, K.mergeProps)({
            className: nw({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, P.jsx)("li", {
            ref: s,
            ...l,
            children: (0, P.jsxs)(ff, {
              open: a,
              onOpenChange: () => i(!a),
              children: [(0, P.jsx)(pf, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, P.jsx)(vf, {
                children: (0, P.jsx)(yf, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, P.jsx)(gf, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        uw = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? W.DX : bf,
            a = (0, K.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, P.jsx)(s, {
            ref: o,
            ...a,
            children: e
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
        yw = (e => {
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
      const gw = (0, B.createContext)(null);

      function bw() {
        const e = (0, B.useContext)(gw);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const ww = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...s
        }, a) => {
          const i = e ? W.DX : "div",
            d = (0, K.mergeProps)({
              className: yw({
                appearance: r,
                type: o,
                size: n
              })
            }, s);
          return (0, P.jsx)(gw.Provider, {
            value: {
              type: o
            },
            children: (0, P.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...d
            })
          })
        }),
        _w = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? W.DX : "div",
            s = (0, K.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            ...s
          })
        }),
        xw = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = fe[e],
            o = (0, K.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, P.jsx)(n, {
            ref: r,
            ...o
          })
        });

      function Cw(e) {
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

      function jw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Pw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jw(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Cw(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ow(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Sw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pw(Pw({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Sw(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ow(e.variantClassNames, e => Ow(e, e => e.split(" ")[0]))
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
      const Rw = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, K.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, P.jsx)(ou, {
            ref: r,
            ...n
          })
        }),
        Nw = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, K.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172",
            tabIndex: 0
          }, t);
          return (0, P.jsx)(su, {
            ref: r,
            ...n
          })
        }),
        Dw = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, K.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, P.jsx)(au, {
            ref: r,
            ...n
          })
        }),
        Iw = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, U.rl)(),
            o = (0, K.mergeProps)({
              "data-testid": e,
              className: kw({
                isTouchDevice: n
              })
            }, t);
          return (0, P.jsx)(iu, {
            ref: r,
            ...o
          })
        }),
        Ew = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, K.mergeProps)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(du, {
            ref: r,
            ...n
          })
        }),
        Tw = () => {
          const e = (0, U.Ub)(K.breakpoints.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        zw = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Lw(e) {
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

      function Mw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Aw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mw(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Lw(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Aw(Aw({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) qw(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vw(e.variantClassNames, e => Vw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Bw = "foundry_8kowh41",
        Xw = Fw({
          defaultClassName: "foundry_xov33n6",
          variantClassNames: {
            headerAlign: {
              left: "foundry_xov33n7",
              center: "foundry_xov33n8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gw = Fw({
          defaultClassName: "foundry_xov33na",
          variantClassNames: {
            align: {
              left: "foundry_xov33nb",
              center: "foundry_xov33nc"
            },
            appearance: {
              sentence: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
              uppercase: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm foundry_tdsdcdr"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Kw = (0, B.createContext)({
        isControlled: !1,
        openImmediately: !1,
        setIsOpen: () => {},
        contentId: "",
        descriptionId: "",
        triggerRef: (0, B.createRef)(),
        dialogSpringRef: Qa(),
        overlaySpringRef: Qa(),
        headerAlign: "center",
        setHeaderAlign: () => {}
      });

      function Hw() {
        const e = (0, B.useContext)(Kw);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const Zw = ({
          testId: e,
          defaultOpen: t,
          onOpenChange: r,
          isOpen: n,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: s,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: i,
          ...d
        }) => {
          const [l, c] = (0, B.useState)("center"), u = (0, K.mergeProps)({
            "data-testid": e
          }, d), [f, p] = (0, U.ic)({
            prop: n,
            defaultProp: t ?? !1,
            onChange: r
          }), h = (0, U.ZC)(f);
          return (0, P.jsx)(Kw.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== h || !t),
              setIsOpen: p,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: s,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: i,
              contentId: (0, B.useId)(),
              descriptionId: (0, B.useId)(),
              triggerRef: (0, B.useRef)(null),
              dialogSpringRef: Ja(),
              overlaySpringRef: Ja(),
              headerAlign: l,
              setHeaderAlign: c
            },
            children: (0, P.jsx)(Bl.bL, {
              open: f,
              onOpenChange: p,
              ...u
            })
          })
        },
        Uw = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = Hw(), a = zw(), i = (0, U.jt)(), d = ei(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: ca.stiff,
            immediate: i || s
          }), l = (0, K.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), c = wi(Bl.hJ);
          return (0, B.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, P.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        Ww = (0, B.forwardRef)(({
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
          } = Hw(), y = (0, U.rl)(), g = (0, U.jt)(), b = (0, B.useRef)(null), w = Tw(), {
            bindDrag: _
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = zw(),
              a = Tw(),
              i = (0, B.useRef)();
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
                  config: ca.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...s(0),
                  immediate: !1,
                  config: ca.stiff
                })) : (t.start({
                  ...a(100),
                  immediate: !1,
                  config: ca.stiff
                }), r.start({
                  ...s(100),
                  immediate: !1,
                  config: ca.stiff
                })))
              }, ar(ir), Cr({
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
          }), x = ei(a, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: a ? 100 : 0,
            config: ca.stiff,
            ref: m,
            immediate: g || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : h?.()
            }
          });
          (0, B.useEffect)(() => {
            m.start()
          }, [a]);
          const C = (0, U.UP)(b, s),
            j = y && !g && !n && _(),
            O = (0, K.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nf",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, j || {}, o),
            S = wi(Bl.UC);
          return x((t, r) => r ? (0, P.jsx)("div", {
            className: "foundry_xov33n2",
            children: (0, P.jsx)(S, {
              forceMount: !0,
              ref: C,
              ...O,
              style: t,
              children: e
            })
          }) : null)
        }),
        $w = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, K.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, P.jsx)(Bl.hE, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Qw = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, K.mergeProps)({
            "data-testid": t
          }, r);
          return (0, P.jsx)(Bl.VY, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Yw = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, K.mergeProps)({
            className: "foundry_xov33nj",
            "data-testid": t
          }, r);
          return (0, P.jsxs)(Rw, {
            ref: n,
            ...o,
            children: [(0, P.jsx)(Nw, {
              className: "foundry_xov33nk",
              children: e
            }), (0, P.jsx)(Dw, {
              className: "foundry_xov33nl",
              orientation: "vertical",
              children: (0, P.jsx)(Iw, {
                className: "foundry_xov33nm"
              })
            })]
          })
        }),
        Jw = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, n),
            a = e ? W.DX : "div";
          return (0, P.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        e_ = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            headerAlign: s
          } = (0, B.useContext)(Kw), a = (0, K.mergeProps)({
            "data-testid": r,
            className: Xw({
              headerAlign: s
            })
          }, n), i = e ? W.DX : "header";
          return (0, P.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        t_ = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n = "left",
          appearance: o = "sentence",
          ...s
        }, a) => {
          const {
            setHeaderAlign: i
          } = (0, B.useContext)(Kw);
          (0, B.useEffect)(() => {
            i(n)
          }, [n]);
          const d = (0, K.mergeProps)({
              "data-testid": r,
              className: Gw({
                align: n,
                appearance: o
              })
            }, s),
            l = e ? W.DX : Bl.hE;
          return (0, P.jsx)(l, {
            ref: a,
            ...d,
            children: t
          })
        }),
        r_ = (0, B.forwardRef)(({
          onPress: e,
          onClick: t,
          ...r
        }, n) => {
          const {
            isControlled: o,
            setIsOpen: s
          } = Hw(), a = (0, K.mergeProps)({
            className: (0, ue.clsx)("foundry_xov33n9", "foundry_xov33n1"),
            onPress: function(r) {
              e?.(r) ?? t?.(r), !o && s(!1)
            }
          }, r);
          return (0, P.jsx)(ey, {
            ...a,
            size: "LG",
            ref: n
          })
        }),
        n_ = (0, B.forwardRef)((e, t) => {
          const r = (0, K.mergeProps)({
            className: "foundry_xov33n3"
          }, e);
          return (0, P.jsx)(Ee, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        o_ = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nh"
            }, n),
            a = e ? W.DX : "div";
          return (0, P.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        s_ = (0, B.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: s,
            setIsOpen: a
          } = Hw(), i = (0, K.mergeProps)({
            className: Bw,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !s && a(!1)
            }
          }, n);
          return (0, P.jsx)(Ce, {
            ref: o,
            ...i,
            children: e
          })
        }),
        a_ = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33ni"
            }, n),
            a = e ? W.DX : "footer";
          return (0, P.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        i_ = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          onPress: r,
          onClick: n,
          ...o
        }, s) => {
          const {
            isControlled: a,
            setIsOpen: i,
            isOpen: d,
            contentId: l,
            triggerRef: c
          } = Hw(), u = (0, U.UP)(c, s), f = (0, K.mergeProps)({
            className: Bw,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": d,
            "aria-controls": l,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !a && i(!0)
            }
          }, o), p = e ? W.DX : Bl.l9;
          return (0, P.jsx)(p, {
            ...f,
            ref: u,
            children: t
          })
        }),
        d_ = ({
          testId: e,
          ...t
        }) => {
          const r = (0, K.mergeProps)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(Bl.ZL, {
            forceMount: !0,
            ...r
          })
        };

      function l_(...e) {
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
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: n
            }), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }
      var c_ = r(20972),
        u_ = r(89104);

      function f_() {
        return () => {}
      }
      var p_ = "Avatar",
        [h_, m_] = function(e, t = []) {
          let r = [];
          const n = () => {
            const t = r.map(e => B.createContext(e));
            return function(r) {
              const n = r?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...r,
                  [e]: n
                }
              }), [r, n])
            }
          };
          return n.scopeName = e, [function(t, n) {
            const o = B.createContext(n);
            o.displayName = t + "Context";
            const s = r.length;
            r = [...r, n];
            const a = t => {
              const {
                scope: r,
                children: n,
                ...a
              } = t, i = r?.[e]?.[s] || o, d = B.useMemo(() => a, Object.values(a));
              return (0, P.jsx)(i.Provider, {
                value: d,
                children: n
              })
            };
            return a.displayName = t + "Provider", [a, function(r, a) {
              const i = a?.[e]?.[s] || o,
                d = B.useContext(i);
              if (d) return d;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, l_(n, ...t)]
        }(p_),
        [v_, y_] = h_(p_),
        g_ = B.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = B.useState("idle");
          return (0, P.jsx)(v_, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: s,
            children: (0, P.jsx)(c_.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      g_.displayName = p_;
      var b_ = "AvatarImage",
        w_ = B.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...s
          } = e, a = y_(b_, r), i = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, u_.useSyncExternalStore)(f_, () => !0, () => !1),
              o = B.useRef(null),
              s = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [a, i] = B.useState(() => x_(s, e));
            return (0, Xi.N)(() => {
              i(x_(s, e))
            }, [s, e]), (0, Xi.N)(() => {
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
          }(n, s), d = (0, Bi.c)(e => {
            o(e), a.onImageLoadingStatusChange(e)
          });
          return (0, Xi.N)(() => {
            "idle" !== i && d(i)
          }, [i, d]), "loaded" === i ? (0, P.jsx)(c_.sG.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        });
      w_.displayName = b_;
      var __ = "AvatarFallback";

      function x_(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      B.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, s = y_(__, r), [a, i] = B.useState(void 0 === n);
        return B.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), a && "loaded" !== s.imageLoadingStatus ? (0, P.jsx)(c_.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = __;
      var C_ = g_,
        j_ = w_;

      function P_(e) {
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

      function O_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function S_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? O_(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = P_(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function k_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var R_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        N_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = S_(S_({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) R_(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return k_(e.variantClassNames, e => k_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        D_ = N_({
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
        I_ = "var(--foundry_v912w22)",
        E_ = "var(--foundry_v912w23)",
        T_ = N_({
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
        z_ = N_({
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
        L_ = "var(--foundry_v912w21)",
        M_ = "var(--foundry_v912w20)",
        A_ = N_({
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
      const V_ = (0, B.createContext)(null);

      function q_() {
        const e = (0, B.useContext)(V_);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const F_ = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: s = !1,
          ...a
        }, i) => {
          const d = (0, K.mergeProps)({
            "data-testid": r,
            "aria-disabled": s,
            className: D_({
              isDisabled: s
            }),
            asChild: e
          }, a);
          return (0, P.jsx)(V_.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, P.jsx)(C_, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        B_ = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: a
          } = q_(), [i, d] = (0, B.useState)(!1);
          (0, B.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, K.mergeProps)({
              className: T_({
                isDisabled: a
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, P.jsx)("span", {
            className: z_({
              size: s,
              isDisabled: a,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, P.jsx)(j_, {
              ref: o,
              ...c
            })
          })
        }),
        X_ = (0, B.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, B.useRef)(null),
            {
              size: s,
              status: a,
              isDisabled: i
            } = q_(),
            d = (0, U.UP)(o, n),
            l = (0, K.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: A_({
                status: a,
                size: s,
                isDisabled: i
              }),
              style: (0, X.DI)({
                [M_]: t?.online,
                [L_]: t?.offline,
                [I_]: t?.away,
                [E_]: t?.busy
              })
            }, r);
          return (0, P.jsx)("span", {
            ref: d,
            ...l
          })
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

      function K_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function H_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? K_(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = G_(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Z_(e, t) {
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
              n = H_(H_({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) U_(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Z_(e.variantClassNames, e => Z_(e, e => e.split(" ")[0]))
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
      const $_ = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            a = e ? W.DX : "nav";
          return (0, P.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Q_ = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            a = e ? W.DX : "div";
          return (0, P.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Y_ = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, B.useRef)(null),
            i = (0, U.UP)(a, s),
            {
              linkProps: d,
              isPressed: l
            } = Hv(o, a),
            c = (0, K.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, ue.clsx)(W_({
                isActive: r
              }))
            }, d),
            u = e ? W.DX : "a";
          return (0, P.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        J_ = (0, B.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, K.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, P.jsx)(Y_, {
            ref: n,
            ...o,
            children: (0, P.jsx)(fe.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        ex = (0, B.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, K.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, P.jsx)(Y_, {
            ref: n,
            ...o,
            children: (0, P.jsx)(fe.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        tx = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, K.mergeProps)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, n),
            s = e ? W.DX : "span";
          return (0, P.jsx)(s, {
            ...o,
            children: t || "..."
          })
        },
        rx = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            s = e ? W.DX : "div";
          return (0, P.jsx)(s, {
            ...o,
            children: t
          })
        },
        nx = (0, B.createContext)(null);

      function ox() {
        const e = (0, B.useContext)(nx);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const sx = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, B.useId)(),
            s = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            a = e ? W.DX : "div";
          return (0, P.jsx)(nx.Provider, {
            value: {
              labelId: o
            },
            children: (0, P.jsx)(a, {
              ...s,
              children: t
            })
          })
        },
        ax = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = ox(), a = (0, K.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, n), i = e ? W.DX : "label";
          return (0, P.jsx)(i, {
            ref: o,
            id: s,
            ...a,
            children: t
          })
        }),
        ix = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = ox(), a = (0, K.mergeProps)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), i = e ? W.DX : zf;
          return (0, P.jsxs)(i, {
            ...a,
            children: [(0, P.jsxs)(Af, {
              ref: o,
              children: [(0, P.jsx)(Vf, {
                placeholder: r
              }), (0, P.jsx)(qf, {})]
            }), (0, P.jsx)(Zf, {
              children: (0, P.jsx)(Lf, {
                children: (0, P.jsx)(Mf, {
                  children: t
                })
              })
            })]
          })
        }),
        dx = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
              "data-testid": r
            }, n),
            a = e ? W.DX : Gf;
          return (0, P.jsx)(a, {
            ...s,
            ref: o,
            children: (0, P.jsx)(Kf, {
              children: t
            })
          })
        }),
        lx = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, n),
            a = e ? W.DX : "p";
          return (0, P.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        });
      var cx = "rovingFocusGroup.onEntryFocus",
        ux = {
          bubbles: !1,
          cancelable: !0
        },
        fx = "RovingFocusGroup",
        [px, hx, mx] = (0, cl.N)(fx),
        [vx, yx] = (0, Ci.A)(fx, [mx]),
        [gx, bx] = vx(fx),
        wx = B.forwardRef((e, t) => (0, P.jsx)(px.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, P.jsx)(px.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, P.jsx)(_x, {
              ...e,
              ref: t
            })
          })
        }));
      wx.displayName = fx;
      var _x = B.forwardRef((e, t) => {
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
          } = e, f = B.useRef(null), p = (0, xi.s)(t, f), h = (0, dl.jH)(s), [m, v] = (0, vd.i)({
            prop: a,
            defaultProp: i ?? null,
            onChange: d,
            caller: fx
          }), [y, g] = B.useState(!1), b = (0, Bi.c)(l), w = hx(r), _ = B.useRef(!1), [x, C] = B.useState(0);
          return B.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(cx, b), () => e.removeEventListener(cx, b)
          }, [b]), (0, P.jsx)(gx, {
            scope: r,
            orientation: n,
            dir: h,
            loop: o,
            currentTabStopId: m,
            onItemFocus: B.useCallback(e => v(e), [v]),
            onItemShiftTab: B.useCallback(() => g(!0), []),
            onFocusableItemAdd: B.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: B.useCallback(() => C(e => e - 1), []),
            children: (0, P.jsx)(Vi.sG.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, _i.mK)(e.onMouseDown, () => {
                _.current = !0
              }),
              onFocus: (0, _i.mK)(e.onFocus, e => {
                const t = !_.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(cx, ux);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === m),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Px(n, c)
                  }
                }
                _.current = !1
              }),
              onBlur: (0, _i.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        xx = "RovingFocusGroupItem",
        Cx = B.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: s,
            children: a,
            ...i
          } = e, d = (0, Pi.B)(), l = s || d, c = bx(xx, r), u = c.currentTabStopId === l, f = hx(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: m
          } = c;
          return B.useEffect(() => {
            if (n) return p(), () => h()
          }, [n, p, h]), (0, P.jsx)(px.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, P.jsx)(Vi.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, _i.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, _i.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, _i.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : jx[n]
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
                  setTimeout(() => Px(s))
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
      Cx.displayName = xx;
      var jx = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function Px(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var Ox = wx,
        Sx = Cx,
        kx = "Toggle",
        Rx = B.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...s
          } = e, [a, i] = (0, vd.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: kx
          });
          return (0, P.jsx)(Vi.sG.button, {
            type: "button",
            "aria-pressed": a,
            "data-state": a ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...s,
            ref: t,
            onClick: (0, _i.mK)(e.onClick, () => {
              e.disabled || i(!a)
            })
          })
        });
      Rx.displayName = kx;
      var Nx = "ToggleGroup",
        [Dx, Ix] = (0, Ci.A)(Nx, [yx]),
        Ex = yx(),
        Tx = B.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, P.jsx)(Mx, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, P.jsx)(Ax, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Nx}\``)
        });
      Tx.displayName = Nx;
      var [zx, Lx] = Dx(Nx), Mx = B.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, vd.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: Nx
        });
        return (0, P.jsx)(zx, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: B.useMemo(() => a ? [a] : [], [a]),
          onItemActivate: i,
          onItemDeactivate: B.useCallback(() => i(""), [i]),
          children: (0, P.jsx)(Fx, {
            ...s,
            ref: t
          })
        })
      }), Ax = B.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, vd.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: Nx
        }), d = B.useCallback(e => i((t = []) => [...t, e]), [i]), l = B.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, P.jsx)(zx, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: a,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, P.jsx)(Fx, {
            ...s,
            ref: t
          })
        })
      });
      Tx.displayName = Nx;
      var [Vx, qx] = Dx(Nx), Fx = B.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: s,
          dir: a,
          loop: i = !0,
          ...d
        } = e, l = Ex(r), c = (0, dl.jH)(a), u = {
          role: "group",
          dir: c,
          ...d
        };
        return (0, P.jsx)(Vx, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, P.jsx)(Ox, {
            asChild: !0,
            ...l,
            orientation: s,
            dir: c,
            loop: i,
            children: (0, P.jsx)(Vi.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, P.jsx)(Vi.sG.div, {
            ...u,
            ref: t
          })
        })
      }), Bx = "ToggleGroupItem", Xx = B.forwardRef((e, t) => {
        const r = Lx(Bx, e.__scopeToggleGroup),
          n = qx(Bx, e.__scopeToggleGroup),
          o = Ex(e.__scopeToggleGroup),
          s = r.value.includes(e.value),
          a = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: s,
            disabled: a
          },
          d = B.useRef(null);
        return n.rovingFocus ? (0, P.jsx)(Sx, {
          asChild: !0,
          ...o,
          focusable: !a,
          active: s,
          ref: d,
          children: (0, P.jsx)(Gx, {
            ...i,
            ref: t
          })
        }) : (0, P.jsx)(Gx, {
          ...i,
          ref: t
        })
      });
      Xx.displayName = Bx;
      var Gx = B.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, s = Lx(Bx, r), a = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === s.type ? a : void 0;
          return (0, P.jsx)(Rx, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? s.onItemActivate(n) : s.onItemDeactivate(n)
            }
          })
        }),
        Kx = Tx,
        Hx = Xx;

      function Zx(e) {
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

      function Wx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ux(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Zx(o)) in n ? Object.defineProperty(n, o, {
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
        Yx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Wx(Wx({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qx(l, n, e.defaultVariants) && (r += " " + c);
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
        },
        Jx = "var(--foundry_zxwkyk2)",
        eC = "var(--foundry_zxwkyk3)",
        tC = Yx({
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
        rC = Yx({
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
        nC = Yx({
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
        oC = "var(--foundry_zxwkyk1)",
        sC = "var(--foundry_zxwkyk0)",
        aC = Yx({
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
      const iC = (0, B.createContext)(null);

      function dC() {
        const e = (0, B.useContext)(iC);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const lC = (0, B.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
            "data-testid": e,
            className: tC({
              size: t
            }),
            type: r
          }, n);
          return (0, P.jsx)(iC.Provider, {
            value: {
              size: t
            },
            children: (0, P.jsx)(Kx, {
              ref: o,
              ...s
            })
          })
        }),
        cC = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = dC(), o = (0, K.mergeProps)({
            "data-testid": e,
            className: rC({
              size: n
            })
          }, t);
          return (0, P.jsx)(Hx, {
            ref: r,
            ...o
          })
        }),
        uC = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = dC(), o = fe[e];
          return (0, P.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        fC = (0, B.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const s = (0, K.mergeProps)({
            "data-testid": e,
            className: aC({
              status: r
            }),
            style: (0, X.DI)({
              [sC]: t?.online,
              [oC]: t?.offline,
              [Jx]: t?.away,
              [eC]: t?.busy
            })
          }, n);
          return (0, P.jsx)("span", {
            ref: o,
            ...s
          })
        }),
        pC = (0, B.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = dC(), s = (0, K.mergeProps)({
            "data-testid": e,
            className: nC({
              variant: t,
              size: o
            })
          }, r);
          return (0, P.jsx)("span", {
            ref: n,
            ...s
          })
        });
      var hC = "Popover",
        [mC, vC] = (0, Ci.A)(hC, [Zi]),
        yC = Zi(),
        [gC, bC] = mC(hC),
        wC = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !1
          } = e, i = yC(t), d = B.useRef(null), [l, c] = B.useState(!1), [u, f] = (0, vd.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: hC
          });
          return (0, P.jsx)(ld, {
            ...i,
            children: (0, P.jsx)(gC, {
              scope: t,
              contentId: (0, Pi.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: B.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: B.useCallback(() => c(!0), []),
              onCustomAnchorRemove: B.useCallback(() => c(!1), []),
              modal: a,
              children: r
            })
          })
        };
      wC.displayName = hC;
      var _C = "PopoverAnchor",
        xC = B.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = bC(_C, r), s = yC(r), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: i
          } = o;
          return B.useEffect(() => (a(), () => i()), [a, i]), (0, P.jsx)(cd, {
            ...s,
            ...n,
            ref: t
          })
        });
      xC.displayName = _C;
      var CC = "PopoverTrigger",
        jC = B.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = bC(CC, r), s = yC(r), a = (0, xi.s)(t, o.triggerRef), i = (0, P.jsx)(Vi.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": AC(o.open),
            ...n,
            ref: a,
            onClick: (0, _i.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, P.jsx)(cd, {
            asChild: !0,
            ...s,
            children: i
          })
        });
      jC.displayName = CC;
      var PC = "PopoverPortal",
        [OC, SC] = mC(PC, {
          forceMount: void 0
        }),
        kC = e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = bC(PC, t);
          return (0, P.jsx)(OC, {
            scope: t,
            forceMount: r,
            children: (0, P.jsx)(hd.C, {
              present: r || s.open,
              children: (0, P.jsx)(pd.Z, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      kC.displayName = PC;
      var RC = "PopoverContent",
        NC = B.forwardRef((e, t) => {
          const r = SC(RC, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = bC(RC, e.__scopePopover);
          return (0, P.jsx)(hd.C, {
            present: n || s.open,
            children: s.modal ? (0, P.jsx)(IC, {
              ...o,
              ref: t
            }) : (0, P.jsx)(EC, {
              ...o,
              ref: t
            })
          })
        });
      NC.displayName = RC;
      var DC = (0, md.TL)("PopoverContent.RemoveScroll"),
        IC = B.forwardRef((e, t) => {
          const r = bC(RC, e.__scopePopover),
            n = B.useRef(null),
            o = (0, xi.s)(t, n),
            s = B.useRef(!1);
          return B.useEffect(() => {
            const e = n.current;
            if (e) return (0, uu.Eq)(e)
          }, []), (0, P.jsx)(fu.A, {
            as: DC,
            allowPinchZoom: !0,
            children: (0, P.jsx)(TC, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, _i.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), s.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, _i.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                s.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, _i.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        EC = B.forwardRef((e, t) => {
          const r = bC(RC, e.__scopePopover),
            n = B.useRef(!1),
            o = B.useRef(!1);
          return (0, P.jsx)(TC, {
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
        TC = B.forwardRef((e, t) => {
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
          } = e, f = bC(RC, r), p = yC(r);
          return (0, lu.Oh)(), (0, P.jsx)(cu.n, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: (0, P.jsx)(ji.qW, {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, P.jsx)(ud, {
                "data-state": AC(f.open),
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
        zC = "PopoverClose",
        LC = B.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = bC(zC, r);
          return (0, P.jsx)(Vi.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, _i.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      LC.displayName = zC;
      var MC = B.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = yC(r);
        return (0, P.jsx)(fd, {
          ...o,
          ...n,
          ref: t
        })
      });

      function AC(e) {
        return e ? "open" : "closed"
      }
      MC.displayName = "PopoverArrow";
      var VC = wC,
        qC = xC,
        FC = jC,
        BC = kC,
        XC = NC,
        GC = LC,
        KC = MC;

      function HC(e) {
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

      function ZC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function UC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ZC(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = HC(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ZC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function WC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var $C = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        QC = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = UC(UC({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) $C(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return WC(e.variantClassNames, e => WC(e, e => e.split(" ")[0]))
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
      const YC = (0, B.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        JC = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, s] = (0, U.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), a = (0, K.mergeProps)({
            open: o,
            onOpenChange: s
          }, n);
          return (0, P.jsx)(YC.Provider, {
            value: {
              open: o,
              setOpen: s
            },
            children: (0, P.jsx)(VC, {
              ...a
            })
          })
        },
        ej = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, K.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, P.jsx)(FC, {
            ref: r,
            ...n
          })
        }),
        tj = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        rj = (0, B.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: s
          } = (0, B.useContext)(YC), a = (0, B.useRef)(null), i = (0, U.UP)(a, o), {
            buttonProps: d
          } = (0, U.sL)(n, a), l = (0, K.mergeProps)({
            "data-testid": r,
            className: QC({
              size: t
            })
          }, d), c = s ? fe.ChevronUp : fe.ChevronDown;
          return (0, P.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, P.jsx)(c, {
              label: "",
              size: tj[t]
            })]
          })
        }),
        nj = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, K.mergeProps)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(qC, {
            ref: r,
            ...n
          })
        }),
        oj = (0, B.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, K.mergeProps)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, P.jsx)(XC, {
            ref: n,
            ...o
          })
        }),
        sj = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, K.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, P.jsx)(KC, {
            ref: r,
            ...n
          })
        }),
        aj = e => (0, P.jsx)(BC, {
          ...e
        }),
        ij = e => (0, P.jsx)(GC, {
          ...e
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