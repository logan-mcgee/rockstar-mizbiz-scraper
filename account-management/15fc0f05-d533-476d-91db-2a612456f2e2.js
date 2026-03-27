try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "15fc0f05-d533-476d-91db-2a612456f2e2", e._sentryDebugIdIdentifier = "sentry-dbid-15fc0f05-d533-476d-91db-2a612456f2e2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160",
    packageName: "@rockstargames/account-management"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunkaccount_management = self.webpackChunkaccount_management || []).push([
  [7792], {
    19888: (e, t, n) => {
      e.exports = n(58493)
    },
    58493: (e, t, n) => {
      var r = n(44914),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = r.useState,
        s = r.useEffect,
        a = r.useLayoutEffect,
        l = r.useDebugValue;

      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !o(e, n)
        } catch (e) {
          return !0
        }
      }
      var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
      } : function(e, t) {
        var n = t(),
          r = i({
            inst: {
              value: n,
              getSnapshot: t
            }
          }),
          o = r[0].inst,
          u = r[1];
        return a(function() {
          o.value = n, o.getSnapshot = t, c(o) && u({
            inst: o
          })
        }, [e, n, t]), s(function() {
          return c(o) && u({
            inst: o
          }), e(function() {
            c(o) && u({
              inst: o
            })
          })
        }, [e]), l(n), n
      };
      t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u
    },
    87792: (e, t, n) => {
      n.r(t), n.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => w,
        Badge: () => g,
        Body: () => ze,
        Breadcrumbs: () => y,
        Button: () => de,
        Checkbox: () => l,
        ChipGroup: () => x,
        Code: () => Ve,
        Dialog: () => b,
        Display: () => Fe,
        Divider: () => Re,
        Dropdown: () => i,
        Heading: () => qe,
        IconButton: () => _e,
        Label: () => $e,
        Lightbox: () => o,
        Loader: () => ke.a,
        Pagination: () => _,
        Popover: () => C,
        RadioGroup: () => d,
        Spinner: () => Q.y,
        Switch: () => s,
        Tag: () => m,
        Text: () => Ue,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => He,
        Toast: () => v,
        Tooltip: () => r
      });
      var r = {};
      n.r(r), n.d(r, {
        Arrow: () => ym,
        Content: () => vm,
        Portal: () => gm,
        Root: () => hm,
        Trigger: () => mm,
        useTooltipContext: () => pm
      });
      var o = {};
      n.r(o), n.d(o, {
        Caption: () => jg,
        Close: () => Eg,
        Content: () => wg,
        Controls: () => Sg,
        CssVars: () => Dg,
        Download: () => Ng,
        Image: () => Og,
        Keyboard: () => Rg,
        LightboxContext: () => dg,
        OpenIcon: () => yg,
        Overlay: () => bg,
        Portal: () => gg,
        Reset: () => Tg,
        Root: () => fg,
        RootImplContext: () => pg,
        Thumbnail: () => vg,
        Trigger: () => mg,
        Zoom: () => kg,
        ZoomPan: () => _g
      });
      var i = {};
      n.r(i), n.d(i, {
        Content: () => l_,
        Description: () => h_,
        Hint: () => m_,
        Label: () => p_,
        Option: () => v_,
        OptionIcon: () => g_,
        OptionText: () => y_,
        Portal: () => b_,
        Root: () => a_,
        ScrollArea: () => c_,
        StatusIcon: () => __,
        StatusRoot: () => w_,
        StatusText: () => x_,
        Trigger: () => u_,
        TriggerIcon: () => f_,
        TriggerText: () => d_,
        useDropdownContext: () => s_
      });
      var s = {};
      n.r(s), n.d(s, {
        Description: () => G_,
        Input: () => Z_,
        Label: () => K_,
        Root: () => U_,
        useSwitchContext: () => H_
      });
      var a = {};
      n.r(a), n.d(a, {
        CheckLG: () => dx,
        CheckMD: () => ux,
        CheckXL: () => fx,
        DashLG: () => hx,
        DashMD: () => px,
        DashXL: () => mx
      });
      var l = {};
      n.r(l), n.d(l, {
        Description: () => Tx,
        ErrorText: () => Nx,
        Input: () => kx,
        Label: () => Ex,
        Root: () => Rx
      });
      var c = {};
      n.r(c), n.d(c, {
        Description: () => Zx,
        Hint: () => Kx,
        Input: () => Ux,
        Label: () => Hx,
        Root: () => Xx,
        RootContext: () => Wx,
        StatusIcon: () => Yx,
        StatusRoot: () => Gx,
        StatusText: () => Qx,
        useTextAreaContext: () => $x
      });
      var u = {};
      n.r(u), n.d(u, {
        DotLG: () => KC,
        DotMD: () => ZC,
        DotXL: () => GC
      });
      var d = {};
      n.r(d), n.d(d, {
        Description: () => FC,
        Input: () => QC,
        Label: () => VC,
        Option: () => YC,
        OptionDescription: () => eO,
        OptionLabel: () => JC,
        Options: () => LC,
        Root: () => zC,
        StatusIcon: () => qC,
        StatusRoot: () => BC,
        StatusText: () => WC,
        useRadioGroupContext: () => AC
      });
      var f = {};
      n.r(f), n.d(f, {
        Button: () => nj,
        Control: () => JO,
        Description: () => oj,
        Hint: () => QO,
        Icon: () => tj,
        Input: () => ej,
        Label: () => YO,
        PasswordButton: () => rj,
        Root: () => GO,
        StatusIcon: () => sj,
        StatusRoot: () => ij,
        StatusText: () => aj
      });
      var p = {};
      n.r(p), n.d(p, {
        Body: () => Ej,
        CloseButton: () => Lj,
        Description: () => Ij,
        ErrorText: () => zj,
        Footer: () => Aj,
        Header: () => kj,
        Icon: () => Nj,
        Link: () => Mj,
        Root: () => Rj,
        RootContext: () => Sj,
        Title: () => Dj,
        iconStatusMap: () => Tj,
        useAlertContext: () => Pj
      });
      var h = {};
      n.r(h), n.d(h, {
        Alert: () => VS,
        CloseButton: () => qS,
        Description: () => LS,
        Icon: () => zS,
        Link: () => BS,
        PaginationCounter: () => HS,
        PaginationNav: () => WS,
        PaginationNextButton: () => $S,
        PaginationPrevButton: () => XS,
        PaginationViewport: () => FS,
        Root: () => MS,
        RootContext: () => DS,
        iconStatusMap: () => AS,
        useAlertBannerContext: () => IS
      });
      var m = {};
      n.r(m), n.d(m, {
        CloseButton: () => aP,
        Icon: () => sP,
        Label: () => iP,
        Root: () => oP,
        RootContext: () => nP,
        useTagContext: () => rP
      });
      var v = {};
      n.r(v), n.d(v, {
        Action: () => mR,
        CloseButton: () => vR,
        Description: () => fR,
        Icon: () => hR,
        Provider: () => aR,
        Root: () => dR,
        RootContext: () => cR,
        Viewport: () => lR,
        iconAppearanceMap: () => pR,
        useToastContext: () => uR
      });
      var y = {};
      n.r(y), n.d(y, {
        Icon: () => ER,
        Item: () => kR,
        OverflowMenu: () => TR,
        OverflowMenuItem: () => NR,
        Root: () => RR,
        RootContext: () => PR,
        useBreadcrumbsContext: () => SR
      });
      var g = {};
      n.r(g), n.d(g, {
        Icon: () => BR,
        Label: () => FR,
        Root: () => VR
      });
      var b = {};
      n.r(b), n.d(b, {
        ActionArea: () => ak,
        Button: () => pk,
        CloseButton: () => dk,
        Content: () => tk,
        Description: () => ok,
        Footer: () => ck,
        Header: () => lk,
        HeaderButton: () => fk,
        HeaderTitle: () => uk,
        Layout: () => sk,
        Overlay: () => ek,
        Portal: () => nk,
        Root: () => JR,
        ScrollArea: () => ik,
        Title: () => rk,
        Trigger: () => hk,
        useDialogContext: () => QR
      });
      var w = {};
      n.r(w), n.d(w, {
        Image: () => Zk,
        Root: () => Uk,
        StatusIndicator: () => Kk,
        useAvatarContext: () => Hk
      });
      var _ = {};
      n.r(_), n.d(_, {
        Controls: () => lE,
        Dropdown: () => pE,
        DropdownLabel: () => fE,
        Ellipsis: () => aE,
        Item: () => oE,
        Label: () => mE,
        Next: () => sE,
        Option: () => hE,
        Pages: () => rE,
        Prev: () => iE,
        ResultsPerPage: () => dE,
        Root: () => nE
      });
      var x = {};
      n.r(x), n.d(x, {
        Icon: () => TT,
        Item: () => ET,
        Label: () => DT,
        Root: () => kT,
        StatusIndicator: () => NT,
        useChipGroupContext: () => RT
      });
      var C = {};
      n.r(C), n.d(C, {
        Anchor: () => _N,
        Arrow: () => CN,
        Close: () => jN,
        Content: () => xN,
        Portal: () => ON,
        Root: () => bN,
        RootContext: () => gN,
        Trigger: () => wN
      });
      var O = n(74848);

      function j(e, t, n) {
        return Math.min(Math.max(e, n), t)
      }
      class S extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var P = S;

      function R(e) {
        if ("string" != typeof e) throw new P(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = A.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            n = E[function(e) {
              let t = 5381,
                n = e.length;
              for (; n;) t = 33 * t ^ e.charCodeAt(--n);
              return (t >>> 0) % 2341
            }(t)];
          if (!n) throw new P(e);
          return `#${n}`
        }(e) : e;
        const n = N.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(T(e, 2), 16)), parseInt(T(e[3] || "f", 2), 16) / 255]
        }
        const r = D.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = I.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const i = M.exec(t);
        if (i) {
          const [t, n, r, o] = Array.from(i).slice(1).map(parseFloat);
          if (j(0, 100, n) !== n) throw new P(e);
          if (j(0, 100, r) !== r) throw new P(e);
          return [...L(t, n, r), Number.isNaN(o) ? 1 : o]
        }
        throw new P(e)
      }
      const k = e => parseInt(e.replace(/_/g, ""), 36),
        E = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const n = k(t.substring(0, 3)),
            r = k(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - r.length; e++) o += "0";
          return e[n] = `${o}${r}`, e
        }, {}),
        T = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        N = new RegExp(`^#${T("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        D = new RegExp(`^#${T("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        I = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${T(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        M = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        A = /^[a-z]+$/i,
        z = e => Math.round(255 * e),
        L = (e, t, n) => {
          let r = n / 100;
          if (0 === t) return [r, r, r].map(z);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * r - 1)) * (t / 100),
            s = i * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (a = i, l = s) : o >= 1 && o < 2 ? (a = s, l = i) : o >= 2 && o < 3 ? (l = i, c = s) : o >= 3 && o < 4 ? (l = s, c = i) : o >= 4 && o < 5 ? (a = s, c = i) : o >= 5 && o < 6 && (a = i, c = s);
          const u = r - i / 2;
          return [a + u, l + u, c + u].map(z)
        };

      function V(e, t) {
        const [n, r, o, i] = function(e) {
          const [t, n, r, o] = R(e).map((e, t) => 3 === t ? e : e / 255), i = Math.max(t, n, r), s = Math.min(t, n, r), a = (i + s) / 2;
          if (i === s) return [0, 0, a, o];
          const l = i - s;
          return [60 * (t === i ? (n - r) / l + (n < r ? 6 : 0) : n === i ? (r - t) / l + 2 : (t - n) / l + 4), a > .5 ? l / (2 - i - s) : l / (i + s), a, o]
        }(e);
        return function(e, t, n, r) {
          return `hsla(${(e%360).toFixed()}, ${j(0,100,100*t).toFixed()}%, ${j(0,100,100*n).toFixed()}%, ${parseFloat(j(0,1,r).toFixed(3))})`
        }(n, r, o - t, i)
      }

      function F(e, t) {
        return V(e, -t)
      }
      var B = n(44914),
        q = n.t(B, 2),
        W = n.n(B),
        $ = n(41382),
        X = n(48254),
        H = n(92396);
      const U = {
          enabled: {
            background: (0, $.Tm)(X.no.enabled.background),
            border: (0, $.Tm)(X.no.enabled.border),
            text: (0, $.Tm)(X.no.enabled.text),
            outline: (0, $.Tm)(X.no.enabled.outline)
          },
          hover: {
            background: (0, $.Tm)(X.no.hover.background),
            border: (0, $.Tm)(X.no.hover.border),
            text: (0, $.Tm)(X.no.hover.text),
            outline: (0, $.Tm)(X.no.hover.outline)
          },
          focus: {
            background: (0, $.Tm)(X.no.focus.background),
            border: (0, $.Tm)(X.no.focus.border),
            text: (0, $.Tm)(X.no.focus.text),
            outline: (0, $.Tm)(X.no.focus.outline)
          },
          pressed: {
            background: (0, $.Tm)(X.no.pressed.background),
            border: (0, $.Tm)(X.no.pressed.border),
            text: (0, $.Tm)(X.no.pressed.text),
            outline: (0, $.Tm)(X.no.pressed.outline)
          },
          disabled: {
            background: (0, $.Tm)(X.no.disabled.background),
            border: (0, $.Tm)(X.no.disabled.border),
            text: (0, $.Tm)(X.no.disabled.text),
            outline: (0, $.Tm)(X.no.disabled.outline)
          },
          loading: {
            background: (0, $.Tm)(X.no.loading.background),
            border: (0, $.Tm)(X.no.loading.border),
            text: (0, $.Tm)(X.no.loading.text),
            outline: (0, $.Tm)(X.no.loading.outline)
          }
        },
        Z = ({
          refs: {
            buttonRef: e
          },
          config: {
            textLuminance: t,
            darkenLuminance: n,
            hoverLuminance: r,
            pressedLuminance: o
          },
          overrides: {
            backgroundColor: i,
            hoverColor: s,
            pressedColor: a,
            textColor: l
          },
          enabled: c = !1
        }, u = []) => {
          (0, B.useEffect)(() => {
            if (!e.current || !i || !c) return;
            const u = `${i}:${t}:${n}`,
              {
                text: d,
                hover: f,
                pressed: p
              } = (0, H.IO)(u, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [n, r, o] = R(e);
                  return .2126 * t(n) + .7152 * t(r) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? $.LU.global.color.black.static[100] : $.LU.global.color.white.static[100]),
                  hover: s || (e >= n ? V(i, r) : F(i, r)),
                  pressed: a || (e >= n ? V(i, o) : F(i, o))
                }
              });
            return e.current.style.setProperty(U.enabled.background, i), e.current.style.setProperty(U.enabled.border, i), e.current.style.setProperty(U.enabled.text, d), e.current.style.setProperty(U.hover.background, f), e.current.style.setProperty(U.hover.border, f), e.current.style.setProperty(U.hover.text, d), e.current.style.setProperty(U.focus.background, f), e.current.style.setProperty(U.focus.border, f), e.current.style.setProperty(U.focus.text, d), e.current.style.setProperty(U.pressed.background, p), e.current.style.setProperty(U.pressed.border, p), e.current.style.setProperty(U.pressed.text, d), e.current.style.setProperty(U.loading.background, f), e.current.style.setProperty(U.loading.border, f), e.current.style.setProperty(U.loading.text, d), () => {
              e.current?.style.removeProperty(U.enabled.background), e.current?.style.removeProperty(U.enabled.border), e.current?.style.removeProperty(U.enabled.text), e.current?.style.removeProperty(U.hover.background), e.current?.style.removeProperty(U.hover.border), e.current?.style.removeProperty(U.hover.text), e.current?.style.removeProperty(U.focus.background), e.current?.style.removeProperty(U.focus.border), e.current?.style.removeProperty(U.focus.text), e.current?.style.removeProperty(U.pressed.background), e.current?.style.removeProperty(U.pressed.border), e.current?.style.removeProperty(U.pressed.text), e.current?.style.removeProperty(U.loading.background), e.current?.style.removeProperty(U.loading.border), e.current?.style.removeProperty(U.loading.text)
            }
          }, [e.current, t, n, r, o, i, s, a, l, c, ...u])
        };
      var K = n(57648),
        G = n(92791),
        Y = n(60806),
        Q = n(1665),
        J = n(34164),
        ee = n(47177);

      function te(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ne(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ne(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = te(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function oe(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ie = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        se = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = re(re({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ie(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oe(e.variantClassNames, e => oe(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ae = se({
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
      se({
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
      var le = se({
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
        ce = se({
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
        ue = se({
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
      const de = (0, B.forwardRef)(({
        testId: e,
        asChild: t,
        children: n,
        iconLeft: r,
        iconLeftLabel: o,
        iconRight: i,
        iconRightLabel: s,
        appearance: a,
        size: l = "MD",
        fullWidth: c = !1,
        isLoading: u = !1,
        spinnerLabel: d,
        preventFocusOnPress: f = !0,
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
          j = (0, K.UP)(C, x),
          S = (0, Y.zQ)(),
          P = "string" == typeof l ? l : l?.[S] ?? l.default ?? "MD",
          {
            buttonProps: R
          } = (0, K.sL)((0, H.v6)(_, {
            isLoading: u,
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
          enabled: "accent" === a
        }, [t]);
        const k = (0, H.v6)({
            className: ae({
              appearance: a,
              size: P,
              fullWidth: c,
              iconLeft: !!r,
              iconRight: !!i,
              isLoading: u
            }),
            "data-testid": e
          }, R),
          E = r && ee[r],
          T = i && ee[i],
          N = t ? G.DX : "button",
          D = c && (T || T && E);
        return (0, O.jsxs)(N, {
          ref: j,
          ...k,
          children: [D && (0, O.jsx)("div", {
            className: "foundry_17pcofy15"
          }), E && (0, O.jsx)(E, {
            label: o || "",
            size: P,
            className: (0, J.$)(le({
              size: P
            }), "foundry_17pcofy11")
          }), (0, O.jsx)(G.xV, {
            children: n
          }), T && (0, O.jsx)(T, {
            label: s || "",
            size: P,
            className: (0, J.$)(le({
              size: P
            }), ce({
              fullWidth: c
            }))
          }), u && (0, O.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, O.jsx)(Q.y, {
              label: d || "",
              size: "inline" + ("LG" === P ? "LG" : "MD"),
              hideTrack: !0,
              className: ue({
                size: P
              })
            })
          })]
        })
      });

      function fe(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pe(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = fe(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function me(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ve = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ye = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = he(he({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ve(c, r, e.defaultVariants) && (n += " " + u);
            return n
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
        be = ye({
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
        we = ye({
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
      const _e = (0, B.forwardRef)(({
        testId: e,
        asChild: t,
        icon: n,
        label: r,
        appearance: o,
        fullWidth: i = !1,
        size: s = "LG",
        children: a,
        isLoading: l = !1,
        spinnerLabel: c,
        preventFocusOnPress: u = !0,
        override_darkenLuminance: d = .035,
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
          x = (0, K.UP)(_, w),
          C = (0, Y.zQ)(),
          j = "string" == typeof s ? s : s?.[C] ?? s.default ?? "LG",
          {
            buttonProps: S
          } = (0, K.sL)((0, H.v6)(b, {
            isLoading: l,
            preventFocusOnPress: u
          }), _);
        Z({
          refs: {
            buttonRef: _
          },
          config: {
            textLuminance: f,
            darkenLuminance: d,
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
        const P = (0, H.v6)({
            className: be({
              appearance: o,
              size: j,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, S),
          R = ee[n],
          k = t ? G.DX : "button";
        return (0, O.jsxs)(k, {
          ref: x,
          ...P,
          children: [R && (0, O.jsx)(R, {
            label: r || "",
            size: j,
            className: ge({
              size: j
            })
          }), (0, O.jsx)(G.xV, {
            children: a
          }), l && (0, O.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, O.jsx)(Q.y, {
              label: c || "",
              size: j && "SM" !== j ? `inline${j}` : "inlineMD",
              hideTrack: !0,
              className: we({
                size: j
              })
            })
          })]
        })
      });

      function xe(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ce(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = xe(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function je(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Se = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Pe = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Oe(Oe({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Se(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return je(e.variantClassNames, e => je(e, e => e.split(" ")[0]))
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
      const Re = (0, B.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: n = "thin",
        isDecorative: r = !1,
        asChild: o,
        testId: i,
        ...s
      }, a) => {
        const l = "horizontal" !== t || r ? "div" : "hr",
          c = r || "hr" === l ? void 0 : "separator",
          u = o ? G.DX : l;
        return (0, O.jsx)(u, {
          ref: a,
          className: (0, J.$)(Pe({
            thickness: n,
            orientation: t
          }), e),
          role: c,
          "aria-orientation": t,
          "data-testid": i,
          ...s
        })
      });
      var ke = n(45357);

      function Ee(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Te(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Ee(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Te(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function De(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Ie = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Me = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Ne(Ne({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ie(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return De(e.variantClassNames, e => De(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ae = Me({
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
      const ze = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const s = e ? G.DX : "p",
          a = (0, H.v6)({
            className: Ae({
              size: r,
              appearance: n
            })
          }, o);
        return (0, O.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var Le = Me({
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
      const Ve = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: n = "default",
          ...r
        }, o) => {
          const i = e ? G.DX : "p",
            s = (0, H.v6)({
              className: Le({
                appearance: n
              })
            }, r);
          return (0, O.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        Fe = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? G.DX : "h1",
            i = (0, H.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, n);
          return (0, O.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        });
      var Be = Me({
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
      const qe = (0, B.forwardRef)(({
        asChild: e,
        level: t,
        testId: n,
        ...r
      }, o) => {
        const i = e ? G.DX : `h${t}`,
          s = (0, H.v6)(r, {
            className: Be({
              level: t
            })
          });
        return (0, O.jsx)(i, {
          ref: o,
          "data-testid": n,
          ...s
        })
      });
      var We = Me({
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
      const $e = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const s = e ? G.DX : "p",
          a = (0, H.v6)({
            className: We({
              size: r,
              appearance: n
            })
          }, o);
        return (0, O.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var Xe = Me({
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
      const He = {
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
        Ue = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...r
        }, o) => {
          const i = e ? G.DX : He[n] || "span",
            s = (0, H.v6)(r, {
              className: Xe({
                semantic: n
              })
            });
          return (0, O.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });

      function Ze(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function Ke(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }
      var Ge, Ye, Qe, Je, et, tt, nt, rt, ot, it, st, at, lt, ct, ut, dt, ft, pt = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        ht = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        mt = 1e8,
        vt = 1e-8,
        yt = 2 * Math.PI,
        gt = yt / 4,
        bt = 0,
        wt = Math.sqrt,
        _t = Math.cos,
        xt = Math.sin,
        Ct = function(e) {
          return "string" == typeof e
        },
        Ot = function(e) {
          return "function" == typeof e
        },
        jt = function(e) {
          return "number" == typeof e
        },
        St = function(e) {
          return void 0 === e
        },
        Pt = function(e) {
          return "object" == typeof e
        },
        Rt = function(e) {
          return !1 !== e
        },
        kt = function() {
          return "undefined" != typeof window
        },
        Et = function(e) {
          return Ot(e) || Ct(e)
        },
        Tt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Nt = Array.isArray,
        Dt = /(?:-?\.?\d|\.)+/gi,
        It = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Mt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        At = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        zt = /[+-]=-?[.\d]+/,
        Lt = /[^,'"\[\]\s]+/gi,
        Vt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        Ft = {},
        Bt = {},
        qt = function(e) {
          return (Bt = gn(e, Ft)) && bo
        },
        Wt = function(e, t) {
          return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        },
        $t = function(e, t) {
          return !t && console.warn(e)
        },
        Xt = function(e, t) {
          return e && (Ft[e] = t) && Bt && (Bt[e] = t) || Ft
        },
        Ht = function() {
          return 0
        },
        Ut = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        Zt = {
          suppressEvents: !0,
          kill: !1
        },
        Kt = {
          suppressEvents: !0
        },
        Gt = {},
        Yt = [],
        Qt = {},
        Jt = {},
        en = {},
        tn = 30,
        nn = [],
        rn = "",
        on = function(e) {
          var t, n, r = e[0];
          if (Pt(r) || Ot(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
            for (n = nn.length; n-- && !nn[n].targetTest(r););
            t = nn[n]
          }
          for (n = e.length; n--;) e[n] && (e[n]._gsap || (e[n]._gsap = new Nr(e[n], t))) || e.splice(n, 1);
          return e
        },
        sn = function(e) {
          return e._gsap || on(Kn(e))[0]._gsap
        },
        an = function(e, t, n) {
          return (n = e[t]) && Ot(n) ? e[t]() : St(n) && e.getAttribute && e.getAttribute(t) || n
        },
        ln = function(e, t) {
          return (e = e.split(",")).forEach(t) || e
        },
        cn = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        un = function(e) {
          return Math.round(1e7 * e) / 1e7 || 0
        },
        dn = function(e, t) {
          var n = t.charAt(0),
            r = parseFloat(t.substr(2));
          return e = parseFloat(e), "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
        },
        fn = function(e, t) {
          for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
          return r < n
        },
        pn = function() {
          var e, t, n = Yt.length,
            r = Yt.slice(0);
          for (Qt = {}, Yt.length = 0, e = 0; e < n; e++)(t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        hn = function(e, t, n, r) {
          Yt.length && !Ye && pn(), e.render(t, n, r || Ye && t < 0 && (e._initted || e._startAt)), Yt.length && !Ye && pn()
        },
        mn = function(e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(Lt).length < 2 ? t : Ct(e) ? e.trim() : e
        },
        vn = function(e) {
          return e
        },
        yn = function(e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e
        },
        gn = function(e, t) {
          for (var n in t) e[n] = t[n];
          return e
        },
        bn = function e(t, n) {
          for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = Pt(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
          return t
        },
        wn = function(e, t) {
          var n, r = {};
          for (n in e) n in t || (r[n] = e[n]);
          return r
        },
        _n = function(e) {
          var t, n = e.parent || Je,
            r = e.keyframes ? (t = Nt(e.keyframes), function(e, n) {
              for (var r in n) r in e || "duration" === r && t || "ease" === r || (e[r] = n[r])
            }) : yn;
          if (Rt(e.inherit))
            for (; n;) r(e, n.vars.defaults), n = n.parent || n._dp;
          return e
        },
        xn = function(e, t, n, r, o) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i, s = e[r];
          if (o)
            for (i = t[o]; s && s[o] > i;) s = s._prev;
          return s ? (t._next = s._next, s._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = s, t.parent = t._dp = e, t
        },
        Cn = function(e, t, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var o = t._prev,
            i = t._next;
          o ? o._next = i : e[n] === t && (e[n] = i), i ? i._prev = o : e[r] === t && (e[r] = o), t._next = t._prev = t.parent = null
        },
        On = function(e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        jn = function(e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n;) n._dirty = 1, n = n.parent;
          return e
        },
        Sn = function(e, t, n, r) {
          return e._startAt && (Ye ? e._startAt.revert(Zt) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
        },
        Pn = function e(t) {
          return !t || t._ts && e(t.parent)
        },
        Rn = function(e) {
          return e._repeat ? kn(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        kn = function(e, t) {
          var n = Math.floor(e /= t);
          return e && n === e ? n - 1 : n
        },
        En = function(e, t) {
          return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        },
        Tn = function(e) {
          return e._end = un(e._start + (e._tDur / Math.abs(e._ts || e._rts || vt) || 0))
        },
        Nn = function(e, t) {
          var n = e._dp;
          return n && n.smoothChildTiming && e._ts && (e._start = un(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Tn(e), n._dirty || jn(n, e)), e
        },
        Dn = function(e, t) {
          var n;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = En(e.rawTime(), t), (!t._dur || Xn(0, t.totalDuration(), n) - t._tTime > vt) && t.render(n, !0)), jn(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
            e._zTime = -1e-8
          }
        },
        In = function(e, t, n, r) {
          return t.parent && On(t), t._start = un((jt(n) ? n : n || e !== Je ? qn(e, n, t) : e._time) + t._delay), t._end = un(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), xn(e, t, "_first", "_last", e._sort ? "_start" : 0), Ln(t) || (e._recent = t), r || Dn(e, t), e._ts < 0 && Nn(e, e._tTime), e
        },
        Mn = function(e, t) {
          return (Ft.ScrollTrigger || Wt("scrollTrigger", t)) && Ft.ScrollTrigger.create(t, e)
        },
        An = function(e, t, n, r, o) {
          return Fr(e, t, o), e._initted ? !n && e._pt && !Ye && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && ot !== br.frame ? (Yt.push(e), e._lazy = [o, r], 1) : void 0 : 1
        },
        zn = function e(t) {
          var n = t.parent;
          return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
        },
        Ln = function(e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t
        },
        Vn = function(e, t, n, r) {
          var o = e._repeat,
            i = un(t) || 0,
            s = e._tTime / e._tDur;
          return s && !r && (e._time *= i / e._dur), e._dur = i, e._tDur = o ? o < 0 ? 1e10 : un(i * (o + 1) + e._rDelay * o) : i, s > 0 && !r && Nn(e, e._tTime = e._tDur * s), e.parent && Tn(e), n || jn(e.parent, e), e
        },
        Fn = function(e) {
          return e instanceof Ir ? jn(e) : Vn(e, e._dur)
        },
        Bn = {
          _start: 0,
          endTime: Ht,
          totalDuration: Ht
        },
        qn = function e(t, n, r) {
          var o, i, s, a = t.labels,
            l = t._recent || Bn,
            c = t.duration() >= mt ? l.endTime(!1) : t._dur;
          return Ct(n) && (isNaN(n) || n in a) ? (i = n.charAt(0), s = "%" === n.substr(-1), o = n.indexOf("="), "<" === i || ">" === i ? (o >= 0 && (n = n.replace(/=/, "")), ("<" === i ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (o < 0 ? l : r).totalDuration() / 100 : 1)) : o < 0 ? (n in a || (a[n] = c), a[n]) : (i = parseFloat(n.charAt(o - 1) + n.substr(o + 1)), s && r && (i = i / 100 * (Nt(r) ? r[0] : r).totalDuration()), o > 1 ? e(t, n.substr(0, o - 1), r) + i : c + i)) : null == n ? c : +n
        },
        Wn = function(e, t, n) {
          var r, o, i = jt(t[1]),
            s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
          if (i && (a.duration = t[1]), a.parent = n, e) {
            for (r = a, o = n; o && !("immediateRender" in r);) r = o.vars.defaults || {}, o = Rt(o.vars.inherit) && o.parent;
            a.immediateRender = Rt(r.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
          }
          return new Xr(t[0], a, t[s + 1])
        },
        $n = function(e, t) {
          return e || 0 === e ? t(e) : t
        },
        Xn = function(e, t, n) {
          return n < e ? e : n > t ? t : n
        },
        Hn = function(e, t) {
          return Ct(e) && (t = Vt.exec(e)) ? t[1] : ""
        },
        Un = [].slice,
        Zn = function(e, t) {
          return e && Pt(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Pt(e[0])) && !e.nodeType && e !== et
        },
        Kn = function(e, t, n) {
          return Qe && !t && Qe.selector ? Qe.selector(e) : !Ct(e) || n || !tt && wr() ? Nt(e) ? function(e, t, n) {
            return void 0 === n && (n = []), e.forEach(function(e) {
              var r;
              return Ct(e) && !t || Zn(e, 1) ? (r = n).push.apply(r, Kn(e)) : n.push(e)
            }) || n
          }(e, n) : Zn(e) ? Un.call(e, 0) : e ? [e] : [] : Un.call((t || nt).querySelectorAll(e), 0)
        },
        Gn = function(e) {
          return e = Kn(e)[0] || $t("Invalid scope") || {},
            function(t) {
              var n = e.current || e.nativeElement || e;
              return Kn(t, n.querySelectorAll ? n : n === e ? $t("Invalid scope") || nt.createElement("div") : e)
            }
        },
        Yn = function(e) {
          return e.sort(function() {
            return .5 - Math.random()
          })
        },
        Qn = function(e) {
          if (Ot(e)) return e;
          var t = Pt(e) ? e : {
              each: e
            },
            n = Pr(t.ease),
            r = t.from || 0,
            o = parseFloat(t.base) || 0,
            i = {},
            s = r > 0 && r < 1,
            a = isNaN(r) || s,
            l = t.axis,
            c = r,
            u = r;
          return Ct(r) ? c = u = {
              center: .5,
              edges: .5,
              end: 1
            } [r] || 0 : !s && a && (c = r[0], u = r[1]),
            function(e, s, d) {
              var f, p, h, m, v, y, g, b, w, _ = (d || t).length,
                x = i[_];
              if (!x) {
                if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, mt])[1])) {
                  for (g = -mt; g < (g = d[w++].getBoundingClientRect().left) && w < _;);
                  w < _ && w--
                }
                for (x = i[_] = [], f = a ? Math.min(w, _) * c - .5 : r % w, p = w === mt ? 0 : a ? _ * u / w - .5 : r / w | 0, g = 0, b = mt, y = 0; y < _; y++) h = y % w - f, m = p - (y / w | 0), x[y] = v = l ? Math.abs("y" === l ? m : h) : wt(h * h + m * m), v > g && (g = v), v < b && (b = v);
                "random" === r && Yn(x), x.max = g - b, x.min = b, x.v = _ = (parseFloat(t.amount) || parseFloat(t.each) * (w > _ ? _ - 1 : l ? "y" === l ? _ / w : w : Math.max(w, _ / w)) || 0) * ("edges" === r ? -1 : 1), x.b = _ < 0 ? o - _ : o, x.u = Hn(t.amount || t.each) || 0, n = n && _ < 0 ? jr(n) : n
              }
              return _ = (x[e] - x.min) / x.max || 0, un(x.b + (n ? n(_) : _) * x.v) + x.u
            }
        },
        Jn = function(e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function(n) {
            var r = un(Math.round(parseFloat(n) / e) * e * t);
            return (r - r % 1) / t + (jt(n) ? 0 : Hn(n))
          }
        },
        er = function(e, t) {
          var n, r, o = Nt(e);
          return !o && Pt(e) && (n = o = e.radius || mt, e.values ? (e = Kn(e.values), (r = !jt(e[0])) && (n *= n)) : e = Jn(e.increment)), $n(t, o ? Ot(e) ? function(t) {
            return r = e(t), Math.abs(r - t) <= n ? r : t
          } : function(t) {
            for (var o, i, s = parseFloat(r ? t.x : t), a = parseFloat(r ? t.y : 0), l = mt, c = 0, u = e.length; u--;)(o = r ? (o = e[u].x - s) * o + (i = e[u].y - a) * i : Math.abs(e[u] - s)) < l && (l = o, c = u);
            return c = !n || l <= n ? e[c] : t, r || c === t || jt(t) ? c : c + Hn(t)
          } : Jn(e))
        },
        tr = function(e, t, n, r) {
          return $n(Nt(e) ? !t : !0 === n ? !!(n = 0) : !r, function() {
            return Nt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * r) / r
          })
        },
        nr = function(e, t, n) {
          return $n(n, function(n) {
            return e[~~t(n)]
          })
        },
        rr = function(e) {
          for (var t, n, r, o, i = 0, s = ""; ~(t = e.indexOf("random(", i));) r = e.indexOf(")", t), o = "[" === e.charAt(t + 7), n = e.substr(t + 7, r - t - 7).match(o ? Lt : Dt), s += e.substr(i, t - i) + tr(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), i = r + 1;
          return s + e.substr(i, e.length - i)
        },
        or = function(e, t, n, r, o) {
          var i = t - e,
            s = r - n;
          return $n(o, function(t) {
            return n + ((t - e) / i * s || 0)
          })
        },
        ir = function(e, t, n) {
          var r, o, i, s = e.labels,
            a = mt;
          for (r in s)(o = s[r] - t) < 0 == !!n && o && a > (o = Math.abs(o)) && (i = r, a = o);
          return i
        },
        sr = function(e, t, n) {
          var r, o, i, s = e.vars,
            a = s[t],
            l = Qe,
            c = e._ctx;
          if (a) return r = s[t + "Params"], o = s.callbackScope || e, n && Yt.length && pn(), c && (Qe = c), i = r ? a.apply(o, r) : a.call(o), Qe = l, i
        },
        ar = function(e) {
          return On(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ye), e.progress() < 1 && sr(e, "onInterrupt"), e
        },
        lr = [],
        cr = function(e) {
          if (e)
            if (e = !e.name && e.default || e, kt() || e.headless) {
              var t = e.name,
                n = Ot(e),
                r = t && !n && e.init ? function() {
                  this._props = []
                } : e,
                o = {
                  init: Ht,
                  render: eo,
                  add: Lr,
                  kill: no,
                  modifier: to,
                  rawVars: 0
                },
                i = {
                  targetTest: 0,
                  get: 0,
                  getSetter: Gr,
                  aliases: {},
                  register: 0
                };
              if (wr(), e !== r) {
                if (Jt[t]) return;
                yn(r, yn(wn(e, o), i)), gn(r.prototype, gn(o, wn(e, i))), Jt[r.prop = t] = r, e.targetTest && (nn.push(r), Gt[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
              }
              Xt(t, r), e.register && e.register(bo, r, io)
            } else lr.push(e)
        },
        ur = 255,
        dr = {
          aqua: [0, ur, ur],
          lime: [0, ur, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ur],
          navy: [0, 0, 128],
          white: [ur, ur, ur],
          olive: [128, 128, 0],
          yellow: [ur, ur, 0],
          orange: [ur, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ur, 0, 0],
          pink: [ur, 192, 203],
          cyan: [0, ur, ur],
          transparent: [ur, ur, ur, 0]
        },
        fr = function(e, t, n) {
          return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * ur + .5 | 0
        },
        pr = function(e, t, n) {
          var r, o, i, s, a, l, c, u, d, f, p = e ? jt(e) ? [e >> 16, e >> 8 & ur, e & ur] : 0 : dr.black;
          if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), dr[e]) p = dr[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (r = e.charAt(1), o = e.charAt(2), i = e.charAt(3), e = "#" + r + r + o + o + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & ur, p & ur, parseInt(e.substr(7), 16) / 255];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & ur, e & ur]
            } else if ("hsl" === e.substr(0, 3))
              if (p = f = e.match(Dt), t) {
                if (~e.indexOf("=")) return p = e.match(It), n && p.length < 4 && (p[3] = 1), p
              } else s = +p[0] % 360 / 360, a = +p[1] / 100, r = 2 * (l = +p[2] / 100) - (o = l <= .5 ? l * (a + 1) : l + a - l * a), p.length > 3 && (p[3] *= 1), p[0] = fr(s + 1 / 3, r, o), p[1] = fr(s, r, o), p[2] = fr(s - 1 / 3, r, o);
            else p = e.match(Dt) || dr.transparent;
            p = p.map(Number)
          }
          return t && !f && (r = p[0] / ur, o = p[1] / ur, i = p[2] / ur, l = ((c = Math.max(r, o, i)) + (u = Math.min(r, o, i))) / 2, c === u ? s = a = 0 : (d = c - u, a = l > .5 ? d / (2 - c - u) : d / (c + u), s = c === r ? (o - i) / d + (o < i ? 6 : 0) : c === o ? (i - r) / d + 2 : (r - o) / d + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * l + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        hr = function(e) {
          var t = [],
            n = [],
            r = -1;
          return e.split(vr).forEach(function(e) {
            var o = e.match(Mt) || [];
            t.push.apply(t, o), n.push(r += o.length + 1)
          }), t.c = n, t
        },
        mr = function(e, t, n) {
          var r, o, i, s, a = "",
            l = (e + a).match(vr),
            c = t ? "hsla(" : "rgba(",
            u = 0;
          if (!l) return e;
          if (l = l.map(function(e) {
              return (e = pr(e, t, 1)) && c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            }), n && (i = hr(e), (r = n.c).join(a) !== i.c.join(a)))
            for (s = (o = e.replace(vr, "1").split(Mt)).length - 1; u < s; u++) a += o[u] + (~r.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (i.length ? i : l.length ? l : n).shift());
          if (!o)
            for (s = (o = e.split(vr)).length - 1; u < s; u++) a += o[u] + l[u];
          return a + o[s]
        },
        vr = function() {
          var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in dr) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        yr = /hsl[a]?\(/,
        gr = function(e) {
          var t, n = e.join(" ");
          if (vr.lastIndex = 0, vr.test(n)) return t = yr.test(n), e[1] = mr(e[1], t), e[0] = mr(e[0], t, hr(e[1])), !0
        },
        br = function() {
          var e, t, n, r, o, i, s = Date.now,
            a = 500,
            l = 33,
            c = s(),
            u = c,
            d = 1e3 / 240,
            f = d,
            p = [],
            h = function n(h) {
              var m, v, y, g, b = s() - u,
                w = !0 === h;
              if ((b > a || b < 0) && (c += b - l), ((m = (y = (u += b) - c) - f) > 0 || w) && (g = ++r.frame, o = y - 1e3 * r.time, r.time = y /= 1e3, f += m + (m >= d ? 4 : d - m), v = 1), w || (e = t(n)), v)
                for (i = 0; i < p.length; i++) p[i](y, o, g, h)
            };
          return r = {
            time: 0,
            frame: 0,
            tick: function() {
              h(!0)
            },
            deltaRatio: function(e) {
              return o / (1e3 / (e || 60))
            },
            wake: function() {
              rt && (!tt && kt() && (et = tt = window, nt = et.document || {}, Ft.gsap = bo, (et.gsapVersions || (et.gsapVersions = [])).push(bo.version), qt(Bt || et.GreenSockGlobals || !et.gsap && et || {}), lr.forEach(cr)), n = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, e && r.sleep(), t = n || function(e) {
                return setTimeout(e, f - 1e3 * r.time + 1 | 0)
              }, st = 1, h(2))
            },
            sleep: function() {
              (n ? cancelAnimationFrame : clearTimeout)(e), st = 0, t = Ht
            },
            lagSmoothing: function(e, t) {
              a = e || 1 / 0, l = Math.min(t || 33, a)
            },
            fps: function(e) {
              d = 1e3 / (e || 240), f = 1e3 * r.time + d
            },
            add: function(e, t, n) {
              var o = t ? function(t, n, i, s) {
                e(t, n, i, s), r.remove(o)
              } : e;
              return r.remove(e), p[n ? "unshift" : "push"](o), wr(), o
            },
            remove: function(e, t) {
              ~(t = p.indexOf(e)) && p.splice(t, 1) && i >= t && i--
            },
            _listeners: p
          }, r
        }(),
        wr = function() {
          return !st && br.wake()
        },
        _r = {},
        xr = /^[\d.\-M][\d.\-,\s]/,
        Cr = /["']/g,
        Or = function(e) {
          for (var t, n, r, o = {}, i = e.substr(1, e.length - 3).split(":"), s = i[0], a = 1, l = i.length; a < l; a++) n = i[a], t = a !== l - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, t), o[s] = isNaN(r) ? r.replace(Cr, "").trim() : +r, s = n.substr(t + 1).trim();
          return o
        },
        jr = function(e) {
          return function(t) {
            return 1 - e(1 - t)
          }
        },
        Sr = function e(t, n) {
          for (var r, o = t._first; o;) o instanceof Ir ? e(o, n) : !o.vars.yoyoEase || o._yoyo && o._repeat || o._yoyo === n || (o.timeline ? e(o.timeline, n) : (r = o._ease, o._ease = o._yEase, o._yEase = r, o._yoyo = n)), o = o._next
        },
        Pr = function(e, t) {
          return e && (Ot(e) ? e : _r[e] || function(e) {
            var t, n, r, o, i = (e + "").split("("),
              s = _r[i[0]];
            return s && i.length > 1 && s.config ? s.config.apply(null, ~e.indexOf("{") ? [Or(i[1])] : (t = e, n = t.indexOf("(") + 1, r = t.indexOf(")"), o = t.indexOf("(", n), t.substring(n, ~o && o < r ? t.indexOf(")", r + 1) : r)).split(",").map(mn)) : _r._CE && xr.test(e) ? _r._CE("", e) : s
          }(e)) || t
        },
        Rr = function(e, t, n, r) {
          void 0 === n && (n = function(e) {
            return 1 - t(1 - e)
          }), void 0 === r && (r = function(e) {
            return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
          });
          var o, i = {
            easeIn: t,
            easeOut: n,
            easeInOut: r
          };
          return ln(e, function(e) {
            for (var t in _r[e] = Ft[e] = i, _r[o = e.toLowerCase()] = n, i) _r[o + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = _r[e + "." + t] = i[t]
          }), i
        },
        kr = function(e) {
          return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
          }
        },
        Er = function e(t, n, r) {
          var o = n >= 1 ? n : 1,
            i = (r || (t ? .3 : .45)) / (n < 1 ? n : 1),
            s = i / yt * (Math.asin(1 / o) || 0),
            a = function(e) {
              return 1 === e ? 1 : o * Math.pow(2, -10 * e) * xt((e - s) * i) + 1
            },
            l = "out" === t ? a : "in" === t ? function(e) {
              return 1 - a(1 - e)
            } : kr(a);
          return i = yt / i, l.config = function(n, r) {
            return e(t, n, r)
          }, l
        },
        Tr = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var r = function(e) {
              return e ? --e * e * ((n + 1) * e + n) + 1 : 0
            },
            o = "out" === t ? r : "in" === t ? function(e) {
              return 1 - r(1 - e)
            } : kr(r);
          return o.config = function(n) {
            return e(t, n)
          }, o
        };
      ln("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var n = t < 5 ? t + 1 : t;
        Rr(e + ",Power" + (n - 1), t ? function(e) {
          return Math.pow(e, n)
        } : function(e) {
          return e
        }, function(e) {
          return 1 - Math.pow(1 - e, n)
        }, function(e) {
          return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2
        })
      }), _r.Linear.easeNone = _r.none = _r.Linear.easeIn, Rr("Elastic", Er("in"), Er("out"), Er()), at = 7.5625, ut = 2 * (ct = 1 / (lt = 2.75)), dt = 2.5 * ct, Rr("Bounce", function(e) {
        return 1 - ft(1 - e)
      }, ft = function(e) {
        return e < ct ? at * e * e : e < ut ? at * Math.pow(e - 1.5 / lt, 2) + .75 : e < dt ? at * (e -= 2.25 / lt) * e + .9375 : at * Math.pow(e - 2.625 / lt, 2) + .984375
      }), Rr("Expo", function(e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
      }), Rr("Circ", function(e) {
        return -(wt(1 - e * e) - 1)
      }), Rr("Sine", function(e) {
        return 1 === e ? 1 : 1 - _t(e * gt)
      }), Rr("Back", Tr("in"), Tr("out"), Tr()), _r.SteppedEase = _r.steps = Ft.SteppedEase = {
        config: function(e, t) {
          void 0 === e && (e = 1);
          var n = 1 / e,
            r = e + (t ? 0 : 1),
            o = t ? 1 : 0;
          return function(e) {
            return ((r * Xn(0, .99999999, e) | 0) + o) * n
          }
        }
      }, ht.ease = _r["quad.out"], ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return rn += e + "," + e + "Params,"
      });
      var Nr = function(e, t) {
          this.id = bt++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : an, this.set = t ? t.getSetter : Gr
        },
        Dr = function() {
          function e(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Vn(this, +e.duration, 1, 1), this.data = e.data, Qe && (this._ctx = Qe, Qe.data.push(this)), st || br.wake()
          }
          var t = e.prototype;
          return t.delay = function(e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
          }, t.duration = function(e) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
          }, t.totalDuration = function(e) {
            return arguments.length ? (this._dirty = 0, Vn(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, t.totalTime = function(e, t) {
            if (wr(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (Nn(this, e), !n._dp || n.parent || Dn(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && In(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === vt || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), hn(this, e, t)), this
          }, t.time = function(e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Rn(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
          }, t.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
          }, t.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Rn(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
          }, t.iteration = function(e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? kn(this._tTime, n) + 1 : 1
          }, t.timeScale = function(e, t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var n = this.parent && this._ts ? En(this.parent._time, this) : this._tTime;
            return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Xn(-Math.abs(this._delay), this._tDur, n), !1 !== t), Tn(this),
              function(e) {
                for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                return e
              }(this)
          }, t.paused = function(e) {
            return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (wr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== vt && (this._tTime -= vt)))), this) : this._ps
          }, t.startTime = function(e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return t && (t._sort || !this.parent) && In(t, this, e - this._delay), this
            }
            return this._start
          }, t.endTime = function(e) {
            return this._start + (Rt(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, t.rawTime = function(e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? En(t.rawTime(e), this) : this._tTime : this._tTime
          }, t.revert = function(e) {
            void 0 === e && (e = Kt);
            var t = Ye;
            return Ye = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), Ye = t, this
          }, t.globalTime = function(e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
            return !this.parent && this._sat ? this._sat.globalTime(e) : n
          }, t.repeat = function(e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Fn(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, t.repeatDelay = function(e) {
            if (arguments.length) {
              var t = this._time;
              return this._rDelay = e, Fn(this), t ? this.time(t) : this
            }
            return this._rDelay
          }, t.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
          }, t.seek = function(e, t) {
            return this.totalTime(qn(this, e), Rt(t))
          }, t.restart = function(e, t) {
            return this.play().totalTime(e ? -this._delay : 0, Rt(t))
          }, t.play = function(e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
          }, t.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
          }, t.pause = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
          }, t.resume = function() {
            return this.paused(!1)
          }, t.reversed = function(e) {
            return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
          }, t.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
          }, t.isActive = function() {
            var e, t = this.parent || this._dp,
              n = this._start;
            return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - vt))
          }, t.eventCallback = function(e, t, n) {
            var r = this.vars;
            return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete r[e], this) : r[e]
          }, t.then = function(e) {
            var t = this;
            return new Promise(function(n) {
              var r = Ot(e) ? e : vn,
                o = function() {
                  var e = t.then;
                  t.then = null, Ot(r) && (r = r(t)) && (r.then || r === t) && (t.then = e), n(r), t.then = e
                };
              t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? o() : t._prom = o
            })
          }, t.kill = function() {
            ar(this)
          }, e
        }();
      yn(Dr.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
      });
      var Ir = function(e) {
        function t(t, n) {
          var r;
          return void 0 === t && (t = {}), (r = e.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = Rt(t.sortChildren), Je && In(t.parent || Je, Ze(r), n), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Mn(Ze(r), t.scrollTrigger), r
        }
        Ke(t, e);
        var n = t.prototype;
        return n.to = function(e, t, n) {
          return Wn(0, arguments, this), this
        }, n.from = function(e, t, n) {
          return Wn(1, arguments, this), this
        }, n.fromTo = function(e, t, n, r) {
          return Wn(2, arguments, this), this
        }, n.set = function(e, t, n) {
          return t.duration = 0, t.parent = this, _n(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Xr(e, t, qn(this, n), 1), this
        }, n.call = function(e, t, n) {
          return In(this, Xr.delayedCall(0, e, t), n)
        }, n.staggerTo = function(e, t, n, r, o, i, s) {
          return n.duration = t, n.stagger = n.stagger || r, n.onComplete = i, n.onCompleteParams = s, n.parent = this, new Xr(e, n, qn(this, o)), this
        }, n.staggerFrom = function(e, t, n, r, o, i, s) {
          return n.runBackwards = 1, _n(n).immediateRender = Rt(n.immediateRender), this.staggerTo(e, t, n, r, o, i, s)
        }, n.staggerFromTo = function(e, t, n, r, o, i, s, a) {
          return r.startAt = n, _n(r).immediateRender = Rt(r.immediateRender), this.staggerTo(e, t, r, o, i, s, a)
        }, n.render = function(e, t, n) {
          var r, o, i, s, a, l, c, u, d, f, p, h, m = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            g = e <= 0 ? 0 : un(e),
            b = this._zTime < 0 != e < 0 && (this._initted || !y);
          if (this !== Je && g > v && e >= 0 && (g = v), g !== this._tTime || n || b) {
            if (m !== this._time && y && (g += this._time - m, e += this._time - m), r = g, d = this._start, l = !(u = this._ts), b && (y || (m = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (p = this._yoyo, a = y + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * a + e, t, n);
              if (r = un(g % a), g === v ? (s = this._repeat, r = y) : ((s = ~~(g / a)) && s === g / a && (r = y, s--), r > y && (r = y)), f = kn(this._tTime, a), !m && this._tTime && f !== s && this._tTime - f * a - this._dur <= 0 && (f = s), p && 1 & s && (r = y - r, h = 1), s !== f && !this._lock) {
                var w = p && 1 & f,
                  _ = w === (p && 1 & s);
                if (s < f && (w = !w), m = w ? 0 : g % y ? y : g, this._lock = 1, this.render(m || (h ? 0 : un(s * a)), t, !y)._lock = 0, this._tTime = g, !t && this.parent && sr(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), m && m !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (y = this._dur, v = this._tDur, _ && (this._lock = 2, m = w ? y : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                Sr(this, h)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(e, t, n) {
                var r;
                if (n > t)
                  for (r = e._first; r && r._start <= n;) {
                    if ("isPause" === r.data && r._start > t) return r;
                    r = r._next
                  } else
                    for (r = e._last; r && r._start >= n;) {
                      if ("isPause" === r.data && r._start < t) return r;
                      r = r._prev
                    }
              }(this, un(m), un(r)), c && (g -= r - (r = c._start))), this._tTime = g, this._time = r, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, m = 0), !m && r && !t && !s && (sr(this, "onStart"), this._tTime !== g)) return this;
            if (r >= m && e >= 0)
              for (o = this._first; o;) {
                if (i = o._next, (o._act || r >= o._start) && o._ts && c !== o) {
                  if (o.parent !== this) return this.render(e, t, n);
                  if (o.render(o._ts > 0 ? (r - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (r - o._start) * o._ts, t, n), r !== this._time || !this._ts && !l) {
                    c = 0, i && (g += this._zTime = -1e-8);
                    break
                  }
                }
                o = i
              } else {
                o = this._last;
                for (var x = e < 0 ? e : r; o;) {
                  if (i = o._prev, (o._act || x <= o._end) && o._ts && c !== o) {
                    if (o.parent !== this) return this.render(e, t, n);
                    if (o.render(o._ts > 0 ? (x - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (x - o._start) * o._ts, t, n || Ye && (o._initted || o._startAt)), r !== this._time || !this._ts && !l) {
                      c = 0, i && (g += this._zTime = x ? -1e-8 : vt);
                      break
                    }
                  }
                  o = i
                }
              }
            if (c && !t && (this.pause(), c.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1, this._ts)) return this._start = d, Tn(this), this.render(e, t, n);
            this._onUpdate && !t && sr(this, "onUpdate", !0), (g === v && this._tTime >= this.totalDuration() || !g && m) && (d !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((e || !y) && (g === v && this._ts > 0 || !g && this._ts < 0) && On(this, 1), t || e < 0 && !m || !g && !m && v || (sr(this, g === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, n.add = function(e, t) {
          var n = this;
          if (jt(t) || (t = qn(this, t, e)), !(e instanceof Dr)) {
            if (Nt(e)) return e.forEach(function(e) {
              return n.add(e, t)
            }), this;
            if (Ct(e)) return this.addLabel(e, t);
            if (!Ot(e)) return this;
            e = Xr.delayedCall(0, e)
          }
          return this !== e ? In(this, e, t) : this
        }, n.getChildren = function(e, t, n, r) {
          void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === r && (r = -mt);
          for (var o = [], i = this._first; i;) i._start >= r && (i instanceof Xr ? t && o.push(i) : (n && o.push(i), e && o.push.apply(o, i.getChildren(!0, t, n)))), i = i._next;
          return o
        }, n.getById = function(e) {
          for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
            if (t[n].vars.id === e) return t[n]
        }, n.remove = function(e) {
          return Ct(e) ? this.removeLabel(e) : Ot(e) ? this.killTweensOf(e) : (Cn(this, e), e === this._recent && (this._recent = this._last), jn(this))
        }, n.totalTime = function(t, n) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = un(br.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(e, t) {
          return this.labels[e] = qn(this, t), this
        }, n.removeLabel = function(e) {
          return delete this.labels[e], this
        }, n.addPause = function(e, t, n) {
          var r = Xr.delayedCall(0, t || Ht, n);
          return r.data = "isPause", this._hasPause = 1, In(this, r, qn(this, e))
        }, n.removePause = function(e) {
          var t = this._first;
          for (e = qn(this, e); t;) t._start === e && "isPause" === t.data && On(t), t = t._next
        }, n.killTweensOf = function(e, t, n) {
          for (var r = this.getTweensOf(e, n), o = r.length; o--;) Mr !== r[o] && r[o].kill(e, t);
          return this
        }, n.getTweensOf = function(e, t) {
          for (var n, r = [], o = Kn(e), i = this._first, s = jt(t); i;) i instanceof Xr ? fn(i._targets, o) && (s ? (!Mr || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && r.push(i) : (n = i.getTweensOf(o, t)).length && r.push.apply(r, n), i = i._next;
          return r
        }, n.tweenTo = function(e, t) {
          t = t || {};
          var n, r = this,
            o = qn(r, e),
            i = t,
            s = i.startAt,
            a = i.onStart,
            l = i.onStartParams,
            c = i.immediateRender,
            u = Xr.to(r, yn({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration: t.duration || Math.abs((o - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || vt,
              onStart: function() {
                if (r.pause(), !n) {
                  var e = t.duration || Math.abs((o - (s && "time" in s ? s.time : r._time)) / r.timeScale());
                  u._dur !== e && Vn(u, e, 0, 1).render(u._time, !0, !0), n = 1
                }
                a && a.apply(u, l || [])
              }
            }, t));
          return c ? u.render(0) : u
        }, n.tweenFromTo = function(e, t, n) {
          return this.tweenTo(t, yn({
            startAt: {
              time: qn(this, e)
            }
          }, n))
        }, n.recent = function() {
          return this._recent
        }, n.nextLabel = function(e) {
          return void 0 === e && (e = this._time), ir(this, qn(this, e))
        }, n.previousLabel = function(e) {
          return void 0 === e && (e = this._time), ir(this, qn(this, e), 1)
        }, n.currentLabel = function(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + vt)
        }, n.shiftChildren = function(e, t, n) {
          void 0 === n && (n = 0);
          for (var r, o = this._first, i = this.labels; o;) o._start >= n && (o._start += e, o._end += e), o = o._next;
          if (t)
            for (r in i) i[r] >= n && (i[r] += e);
          return jn(this)
        }, n.invalidate = function(t) {
          var n = this._first;
          for (this._lock = 0; n;) n.invalidate(t), n = n._next;
          return e.prototype.invalidate.call(this, t)
        }, n.clear = function(e) {
          void 0 === e && (e = !0);
          for (var t, n = this._first; n;) t = n._next, this.remove(n), n = t;
          return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), jn(this)
        }, n.totalDuration = function(e) {
          var t, n, r, o = 0,
            i = this,
            s = i._last,
            a = mt;
          if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e));
          if (i._dirty) {
            for (r = i.parent; s;) t = s._prev, s._dirty && s.totalDuration(), (n = s._start) > a && i._sort && s._ts && !i._lock ? (i._lock = 1, In(i, s, n - s._delay, 1)._lock = 0) : a = n, n < 0 && s._ts && (o -= n, (!r && !i._dp || r && r.smoothChildTiming) && (i._start += n / i._ts, i._time -= n, i._tTime -= n), i.shiftChildren(-n, !1, -Infinity), a = 0), s._end > o && s._ts && (o = s._end), s = t;
            Vn(i, i === Je && i._time > o ? i._time : o, 1, 1), i._dirty = 0
          }
          return i._tDur
        }, t.updateRoot = function(e) {
          if (Je._ts && (hn(Je, En(e, Je)), ot = br.frame), br.frame >= tn) {
            tn += pt.autoSleep || 120;
            var t = Je._first;
            if ((!t || !t._ts) && pt.autoSleep && br._listeners.length < 2) {
              for (; t && !t._ts;) t = t._next;
              t || br.sleep()
            }
          }
        }, t
      }(Dr);
      yn(Ir.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var Mr, Ar, zr = function(e, t, n, r, o, i, s) {
          var a, l, c, u, d, f, p, h, m = new io(this._pt, e, t, 0, 1, Jr, null, o),
            v = 0,
            y = 0;
          for (m.b = n, m.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = rr(r)), i && (i(h = [n, r], e, t), n = h[0], r = h[1]), l = n.match(At) || []; a = At.exec(r);) u = a[0], d = r.substring(v, a.index), c ? c = (c + 1) % 5 : "rgba(" === d.substr(-5) && (c = 1), u !== l[y++] && (f = parseFloat(l[y - 1]) || 0, m._pt = {
            _next: m._pt,
            p: d || 1 === y ? d : ",",
            s: f,
            c: "=" === u.charAt(1) ? dn(f, u) - f : parseFloat(u) - f,
            m: c && c < 4 ? Math.round : 0
          }, v = At.lastIndex);
          return m.c = v < r.length ? r.substring(v, r.length) : "", m.fp = s, (zt.test(r) || p) && (m.e = 0), this._pt = m, m
        },
        Lr = function(e, t, n, r, o, i, s, a, l, c) {
          Ot(r) && (r = r(o || 0, e, i));
          var u, d = e[t],
            f = "get" !== n ? n : Ot(d) ? l ? e[t.indexOf("set") || !Ot(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : d,
            p = Ot(d) ? l ? Zr : Ur : Hr;
          if (Ct(r) && (~r.indexOf("random(") && (r = rr(r)), "=" === r.charAt(1) && ((u = dn(f, r) + (Hn(f) || 0)) || 0 === u) && (r = u)), !c || f !== r || Ar) return isNaN(f * r) || "" === r ? (!d && !(t in e) && Wt(t, r), zr.call(this, e, t, f, r, p, a || pt.stringFilter, l)) : (u = new io(this._pt, e, t, +f || 0, r - (f || 0), "boolean" == typeof d ? Qr : Yr, 0, p), l && (u.fp = l), s && u.modifier(s, this, e), this._pt = u)
        },
        Vr = function(e, t, n, r, o, i) {
          var s, a, l, c;
          if (Jt[e] && !1 !== (s = new Jt[e]).init(o, s.rawVars ? t[e] : function(e, t, n, r, o) {
              if (Ot(e) && (e = qr(e, o, t, n, r)), !Pt(e) || e.style && e.nodeType || Nt(e) || Tt(e)) return Ct(e) ? qr(e, o, t, n, r) : e;
              var i, s = {};
              for (i in e) s[i] = qr(e[i], o, t, n, r);
              return s
            }(t[e], r, o, i, n), n, r, i) && (n._pt = a = new io(n._pt, o, e, 0, 1, s.render, s, 0, s.priority), n !== it))
            for (l = n._ptLookup[n._targets.indexOf(o)], c = s._props.length; c--;) l[s._props[c]] = a;
          return s
        },
        Fr = function e(t, n, r) {
          var o, i, s, a, l, c, u, d, f, p, h, m, v, y = t.vars,
            g = y.ease,
            b = y.startAt,
            w = y.immediateRender,
            _ = y.lazy,
            x = y.onUpdate,
            C = y.runBackwards,
            O = y.yoyoEase,
            j = y.keyframes,
            S = y.autoRevert,
            P = t._dur,
            R = t._startAt,
            k = t._targets,
            E = t.parent,
            T = E && "nested" === E.data ? E.vars.targets : k,
            N = "auto" === t._overwrite && !Ge,
            D = t.timeline;
          if (D && (!j || !g) && (g = "none"), t._ease = Pr(g, ht.ease), t._yEase = O ? jr(Pr(!0 === O ? g : O, ht.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !D && !!y.runBackwards, !D || j && !y.stagger) {
            if (m = (d = k[0] ? sn(k[0]).harness : 0) && y[d.prop], o = wn(y, Gt), R && (R._zTime < 0 && R.progress(1), n < 0 && C && w && !S ? R.render(-1, !0) : R.revert(C && P ? Zt : Ut), R._lazy = 0), b) {
              if (On(t._startAt = Xr.set(k, yn({
                  data: "isStart",
                  overwrite: !1,
                  parent: E,
                  immediateRender: !0,
                  lazy: !R && Rt(_),
                  startAt: null,
                  delay: 0,
                  onUpdate: x && function() {
                    return sr(t, "onUpdate")
                  },
                  stagger: 0
                }, b))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (Ye || !w && !S) && t._startAt.revert(Zt), w && P && n <= 0 && r <= 0) return void(n && (t._zTime = n))
            } else if (C && P && !R)
              if (n && (w = !1), s = yn({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: w && !R && Rt(_),
                  immediateRender: w,
                  stagger: 0,
                  parent: E
                }, o), m && (s[d.prop] = m), On(t._startAt = Xr.set(k, s)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (Ye ? t._startAt.revert(Zt) : t._startAt.render(-1, !0)), t._zTime = n, w) {
                if (!n) return
              } else e(t._startAt, vt, vt);
            for (t._pt = t._ptCache = 0, _ = P && Rt(_) || _ && !P, i = 0; i < k.length; i++) {
              if (u = (l = k[i])._gsap || on(k)[i]._gsap, t._ptLookup[i] = p = {}, Qt[u.id] && Yt.length && pn(), h = T === k ? i : T.indexOf(l), d && !1 !== (f = new d).init(l, m || o, t, h, T) && (t._pt = a = new io(t._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(e) {
                  p[e] = a
                }), f.priority && (c = 1)), !d || m)
                for (s in o) Jt[s] && (f = Vr(s, o, t, h, l, T)) ? f.priority && (c = 1) : p[s] = a = Lr.call(t, l, s, "get", o[s], h, T, 0, y.stringFilter);
              t._op && t._op[i] && t.kill(l, t._op[i]), N && t._pt && (Mr = t, Je.killTweensOf(l, p, t.globalTime(n)), v = !t.parent, Mr = 0), t._pt && _ && (Qt[u.id] = 1)
            }
            c && oo(t), t._onInit && t._onInit(t)
          }
          t._onUpdate = x, t._initted = (!t._op || t._pt) && !v, j && n <= 0 && D.render(mt, !0, !0)
        },
        Br = function(e, t, n, r) {
          var o, i, s = t.ease || r || "power1.inOut";
          if (Nt(t)) i = n[e] || (n[e] = []), t.forEach(function(e, n) {
            return i.push({
              t: n / (t.length - 1) * 100,
              v: e,
              e: s
            })
          });
          else
            for (o in t) i = n[o] || (n[o] = []), "ease" === o || i.push({
              t: parseFloat(e),
              v: t[o],
              e: s
            })
        },
        qr = function(e, t, n, r, o) {
          return Ot(e) ? e.call(t, n, r, o) : Ct(e) && ~e.indexOf("random(") ? rr(e) : e
        },
        Wr = rn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        $r = {};
      ln(Wr + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
        return $r[e] = 1
      });
      var Xr = function(e) {
        function t(t, n, r, o) {
          var i;
          "number" == typeof n && (r.duration = n, n = r, r = null);
          var s, a, l, c, u, d, f, p, h = (i = e.call(this, o ? n : _n(n)) || this).vars,
            m = h.duration,
            v = h.delay,
            y = h.immediateRender,
            g = h.stagger,
            b = h.overwrite,
            w = h.keyframes,
            _ = h.defaults,
            x = h.scrollTrigger,
            C = h.yoyoEase,
            O = n.parent || Je,
            j = (Nt(t) || Tt(t) ? jt(t[0]) : "length" in n) ? [t] : Kn(t);
          if (i._targets = j.length ? on(j) : $t("GSAP target " + t + " not found. https://gsap.com", !pt.nullTargetWarn) || [], i._ptLookup = [], i._overwrite = b, w || g || Et(m) || Et(v)) {
            if (n = i.vars, (s = i.timeline = new Ir({
                data: "nested",
                defaults: _ || {},
                targets: O && "nested" === O.data ? O.vars.targets : j
              })).kill(), s.parent = s._dp = Ze(i), s._start = 0, g || Et(m) || Et(v)) {
              if (c = j.length, f = g && Qn(g), Pt(g))
                for (u in g) ~Wr.indexOf(u) && (p || (p = {}), p[u] = g[u]);
              for (a = 0; a < c; a++)(l = wn(n, $r)).stagger = 0, C && (l.yoyoEase = C), p && gn(l, p), d = j[a], l.duration = +qr(m, Ze(i), a, d, j), l.delay = (+qr(v, Ze(i), a, d, j) || 0) - i._delay, !g && 1 === c && l.delay && (i._delay = v = l.delay, i._start += v, l.delay = 0), s.to(d, l, f ? f(a, d, j) : 0), s._ease = _r.none;
              s.duration() ? m = v = 0 : i.timeline = 0
            } else if (w) {
              _n(yn(s.vars.defaults, {
                ease: "none"
              })), s._ease = Pr(w.ease || n.ease || "none");
              var S, P, R, k = 0;
              if (Nt(w)) w.forEach(function(e) {
                return s.to(j, e, ">")
              }), s.duration();
              else {
                for (u in l = {}, w) "ease" === u || "easeEach" === u || Br(u, w[u], l, w.easeEach);
                for (u in l)
                  for (S = l[u].sort(function(e, t) {
                      return e.t - t.t
                    }), k = 0, a = 0; a < S.length; a++)(R = {
                    ease: (P = S[a]).e,
                    duration: (P.t - (a ? S[a - 1].t : 0)) / 100 * m
                  })[u] = P.v, s.to(j, R, k), k += R.duration;
                s.duration() < m && s.to({}, {
                  duration: m - s.duration()
                })
              }
            }
            m || i.duration(m = s.duration())
          } else i.timeline = 0;
          return !0 !== b || Ge || (Mr = Ze(i), Je.killTweensOf(j), Mr = 0), In(O, Ze(i), r), n.reversed && i.reverse(), n.paused && i.paused(!0), (y || !m && !w && i._start === un(O._time) && Rt(y) && Pn(Ze(i)) && "nested" !== O.data) && (i._tTime = -1e-8, i.render(Math.max(0, -v) || 0)), x && Mn(Ze(i), x), i
        }
        Ke(t, e);
        var n = t.prototype;
        return n.render = function(e, t, n) {
          var r, o, i, s, a, l, c, u, d, f = this._time,
            p = this._tDur,
            h = this._dur,
            m = e < 0,
            v = e > p - vt && !m ? p : e < vt ? 0 : e;
          if (h) {
            if (v !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
              if (r = v, u = this.timeline, this._repeat) {
                if (s = h + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * s + e, t, n);
                if (r = un(v % s), v === p ? (i = this._repeat, r = h) : ((i = ~~(v / s)) && i === un(v / s) && (r = h, i--), r > h && (r = h)), (l = this._yoyo && 1 & i) && (d = this._yEase, r = h - r), a = kn(this._tTime, s), r === f && !n && this._initted && i === a) return this._tTime = v, this;
                i !== a && (u && this._yEase && Sr(u, l), this.vars.repeatRefresh && !l && !this._lock && this._time !== s && this._initted && (this._lock = n = 1, this.render(un(s * i), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (An(this, m ? e : r, n, t, v)) return this._tTime = 0, this;
                if (!(f === this._time || n && this.vars.repeatRefresh && i !== a)) return this;
                if (h !== this._dur) return this.render(e, t, n)
              }
              if (this._tTime = v, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (d || this._ease)(r / h), this._from && (this.ratio = c = 1 - c), r && !f && !t && !i && (sr(this, "onStart"), this._tTime !== v)) return this;
              for (o = this._pt; o;) o.r(c, o.d), o = o._next;
              u && u.render(e < 0 ? e : u._dur * u._ease(r / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (m && Sn(this, e, 0, n), sr(this, "onUpdate")), this._repeat && i !== a && this.vars.onRepeat && !t && this.parent && sr(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (m && !this._onUpdate && Sn(this, e, 0, !0), (e || !h) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && On(this, 1), t || m && !f || !(v || f || l) || (sr(this, v === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < p && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(e, t, n, r) {
            var o, i, s, a = e.ratio,
              l = t < 0 || !t && (!e._start && zn(e) && (e._initted || !Ln(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ln(e)) ? 0 : 1,
              c = e._rDelay,
              u = 0;
            if (c && e._repeat && (u = Xn(0, e._tDur, t), i = kn(u, c), e._yoyo && 1 & i && (l = 1 - l), i !== kn(e._tTime, c) && (a = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== a || Ye || r || e._zTime === vt || !t && e._zTime) {
              if (!e._initted && An(e, t, r, n, u)) return;
              for (s = e._zTime, e._zTime = t || (n ? vt : 0), n || (n = t && !s), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = u, o = e._pt; o;) o.r(l, o.d), o = o._next;
              t < 0 && Sn(e, t, 0, !0), e._onUpdate && !n && sr(e, "onUpdate"), u && e._repeat && !n && e.parent && sr(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && On(e, 1), n || Ye || (sr(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = t)
          }(this, e, t, n);
          return this
        }, n.targets = function() {
          return this._targets
        }, n.invalidate = function(t) {
          return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
        }, n.resetTo = function(e, t, n, r, o) {
          st || br.wake(), this._ts || this.play();
          var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Fr(this, i),
            function(e, t, n, r, o, i, s, a) {
              var l, c, u, d, f = (e._pt && e._ptCache || (e._ptCache = {}))[t];
              if (!f)
                for (f = e._ptCache[t] = [], u = e._ptLookup, d = e._targets.length; d--;) {
                  if ((l = u[d][t]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                  if (!l) return Ar = 1, e.vars[t] = "+=0", Fr(e, s), Ar = 0, a ? $t(t + " not eligible for reset") : 1;
                  f.push(l)
                }
              for (d = f.length; d--;)(l = (c = f[d])._pt || c).s = !r && 0 !== r || o ? l.s + (r || 0) + i * l.c : r, l.c = n - l.s, c.e && (c.e = cn(n) + Hn(c.e)), c.b && (c.b = l.s + Hn(c.b))
            }(this, e, t, n, r, this._ease(i / this._dur), i, o) ? this.resetTo(e, t, n, r, 1) : (Nn(this, 0), this.parent || xn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, n.kill = function(e, t) {
          if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? ar(this) : this;
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Mr && !0 !== Mr.vars.overwrite)._first || ar(this), this.parent && n !== this.timeline.totalDuration() && Vn(this, this._dur * this.timeline._tDur / n, 0, 1), this
          }
          var r, o, i, s, a, l, c, u = this._targets,
            d = e ? Kn(e) : u,
            f = this._ptLookup,
            p = this._pt;
          if ((!t || "all" === t) && function(e, t) {
              for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
              return n < 0
            }(u, d)) return "all" === t && (this._pt = 0), ar(this);
          for (r = this._op = this._op || [], "all" !== t && (Ct(t) && (a = {}, ln(t, function(e) {
              return a[e] = 1
            }), t = a), t = function(e, t) {
              var n, r, o, i, s = e[0] ? sn(e[0]).harness : 0,
                a = s && s.aliases;
              if (!a) return t;
              for (r in n = gn({}, t), a)
                if (r in n)
                  for (o = (i = a[r].split(",")).length; o--;) n[i[o]] = n[r];
              return n
            }(u, t)), c = u.length; c--;)
            if (~d.indexOf(u[c]))
              for (a in o = f[c], "all" === t ? (r[c] = t, s = o, i = {}) : (i = r[c] = r[c] || {}, s = t), s)(l = o && o[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || Cn(this, l, "_pt"), delete o[a]), "all" !== i && (i[a] = 1);
          return this._initted && !this._pt && p && ar(this), this
        }, t.to = function(e, n) {
          return new t(e, n, arguments[2])
        }, t.from = function(e, t) {
          return Wn(1, arguments)
        }, t.delayedCall = function(e, n, r, o) {
          return new t(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: o
          })
        }, t.fromTo = function(e, t, n) {
          return Wn(2, arguments)
        }, t.set = function(e, n) {
          return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n)
        }, t.killTweensOf = function(e, t, n) {
          return Je.killTweensOf(e, t, n)
        }, t
      }(Dr);
      yn(Xr.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), ln("staggerTo,staggerFrom,staggerFromTo", function(e) {
        Xr[e] = function() {
          var t = new Ir,
            n = Un.call(arguments, 0);
          return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
        }
      });
      var Hr = function(e, t, n) {
          return e[t] = n
        },
        Ur = function(e, t, n) {
          return e[t](n)
        },
        Zr = function(e, t, n, r) {
          return e[t](r.fp, n)
        },
        Kr = function(e, t, n) {
          return e.setAttribute(t, n)
        },
        Gr = function(e, t) {
          return Ot(e[t]) ? Ur : St(e[t]) && e.setAttribute ? Kr : Hr
        },
        Yr = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
        },
        Qr = function(e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        },
        Jr = function(e, t) {
          var n = t._pt,
            r = "";
          if (!e && t.b) r = t.b;
          else if (1 === e && t.e) r = t.e;
          else {
            for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r, n = n._next;
            r += t.c
          }
          t.set(t.t, t.p, r, t)
        },
        eo = function(e, t) {
          for (var n = t._pt; n;) n.r(e, n.d), n = n._next
        },
        to = function(e, t, n, r) {
          for (var o, i = this._pt; i;) o = i._next, i.p === r && i.modifier(e, t, n), i = o
        },
        no = function(e) {
          for (var t, n, r = this._pt; r;) n = r._next, r.p === e && !r.op || r.op === e ? Cn(this, r, "_pt") : r.dep || (t = 1), r = n;
          return !t
        },
        ro = function(e, t, n, r) {
          r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
        },
        oo = function(e) {
          for (var t, n, r, o, i = e._pt; i;) {
            for (t = i._next, n = r; n && n.pr > i.pr;) n = n._next;
            (i._prev = n ? n._prev : o) ? i._prev._next = i: r = i, (i._next = n) ? n._prev = i : o = i, i = t
          }
          e._pt = r
        },
        io = function() {
          function e(e, t, n, r, o, i, s, a, l) {
            this.t = t, this.s = r, this.c = o, this.p = n, this.r = i || Yr, this.d = s || this, this.set = a || Hr, this.pr = l || 0, this._next = e, e && (e._prev = this)
          }
          return e.prototype.modifier = function(e, t, n) {
            this.mSet = this.mSet || this.set, this.set = ro, this.m = e, this.mt = n, this.tween = t
          }, e
        }();
      ln(rn + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return Gt[e] = 1
      }), Ft.TweenMax = Ft.TweenLite = Xr, Ft.TimelineLite = Ft.TimelineMax = Ir, Je = new Ir({
        sortChildren: !1,
        defaults: ht,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), pt.stringFilter = gr;
      var so = [],
        ao = {},
        lo = [],
        co = 0,
        uo = 0,
        fo = function(e) {
          return (ao[e] || lo).map(function(e) {
            return e()
          })
        },
        po = function() {
          var e = Date.now(),
            t = [];
          e - co > 2 && (fo("matchMediaInit"), so.forEach(function(e) {
            var n, r, o, i, s = e.queries,
              a = e.conditions;
            for (r in s)(n = et.matchMedia(s[r]).matches) && (o = 1), n !== a[r] && (a[r] = n, i = 1);
            i && (e.revert(), o && t.push(e))
          }), fo("matchMediaRevert"), t.forEach(function(e) {
            return e.onMatch(e, function(t) {
              return e.add(null, t)
            })
          }), co = e, fo("matchMedia"))
        },
        ho = function() {
          function e(e, t) {
            this.selector = t && Gn(t), this.data = [], this._r = [], this.isReverted = !1, this.id = uo++, e && this.add(e)
          }
          var t = e.prototype;
          return t.add = function(e, t, n) {
            Ot(e) && (n = t, t = e, e = Ot);
            var r = this,
              o = function() {
                var e, o = Qe,
                  i = r.selector;
                return o && o !== r && o.data.push(r), n && (r.selector = Gn(n)), Qe = r, e = t.apply(r, arguments), Ot(e) && r._r.push(e), Qe = o, r.selector = i, r.isReverted = !1, e
              };
            return r.last = o, e === Ot ? o(r, function(e) {
              return r.add(null, e)
            }) : e ? r[e] = o : o
          }, t.ignore = function(e) {
            var t = Qe;
            Qe = null, e(this), Qe = t
          }, t.getTweens = function() {
            var t = [];
            return this.data.forEach(function(n) {
              return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof Xr && !(n.parent && "nested" === n.parent.data) && t.push(n)
            }), t
          }, t.clear = function() {
            this._r.length = this.data.length = 0
          }, t.kill = function(e, t) {
            var n = this;
            if (e ? function() {
                for (var t, r = n.getTweens(), o = n.data.length; o--;) "isFlip" === (t = n.data[o]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(e) {
                  return r.splice(r.indexOf(e), 1)
                }));
                for (r.map(function(e) {
                    return {
                      g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
                      t: e
                    }
                  }).sort(function(e, t) {
                    return t.g - e.g || -1 / 0
                  }).forEach(function(t) {
                    return t.t.revert(e)
                  }), o = n.data.length; o--;)(t = n.data[o]) instanceof Ir ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof Xr) && t.revert && t.revert(e);
                n._r.forEach(function(t) {
                  return t(e, n)
                }), n.isReverted = !0
              }() : this.data.forEach(function(e) {
                return e.kill && e.kill()
              }), this.clear(), t)
              for (var r = so.length; r--;) so[r].id === this.id && so.splice(r, 1)
          }, t.revert = function(e) {
            this.kill(e || {})
          }, e
        }(),
        mo = function() {
          function e(e) {
            this.contexts = [], this.scope = e, Qe && Qe.data.push(this)
          }
          var t = e.prototype;
          return t.add = function(e, t, n) {
            Pt(e) || (e = {
              matches: e
            });
            var r, o, i, s = new ho(0, n || this.scope),
              a = s.conditions = {};
            for (o in Qe && !s.selector && (s.selector = Qe.selector), this.contexts.push(s), t = s.add("onMatch", t), s.queries = e, e) "all" === o ? i = 1 : (r = et.matchMedia(e[o])) && (so.indexOf(s) < 0 && so.push(s), (a[o] = r.matches) && (i = 1), r.addListener ? r.addListener(po) : r.addEventListener("change", po));
            return i && t(s, function(e) {
              return s.add(null, e)
            }), this
          }, t.revert = function(e) {
            this.kill(e || {})
          }, t.kill = function(e) {
            this.contexts.forEach(function(t) {
              return t.kill(e, !0)
            })
          }, e
        }(),
        vo = {
          registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t.forEach(function(e) {
              return cr(e)
            })
          },
          timeline: function(e) {
            return new Ir(e)
          },
          getTweensOf: function(e, t) {
            return Je.getTweensOf(e, t)
          },
          getProperty: function(e, t, n, r) {
            Ct(e) && (e = Kn(e)[0]);
            var o = sn(e || {}).get,
              i = n ? vn : mn;
            return "native" === n && (n = ""), e ? t ? i((Jt[t] && Jt[t].get || o)(e, t, n, r)) : function(t, n, r) {
              return i((Jt[t] && Jt[t].get || o)(e, t, n, r))
            } : e
          },
          quickSetter: function(e, t, n) {
            if ((e = Kn(e)).length > 1) {
              var r = e.map(function(e) {
                  return bo.quickSetter(e, t, n)
                }),
                o = r.length;
              return function(e) {
                for (var t = o; t--;) r[t](e)
              }
            }
            e = e[0] || {};
            var i = Jt[t],
              s = sn(e),
              a = s.harness && (s.harness.aliases || {})[t] || t,
              l = i ? function(t) {
                var r = new i;
                it._pt = 0, r.init(e, n ? t + n : t, it, 0, [e]), r.render(1, r), it._pt && eo(1, it)
              } : s.set(e, a);
            return i ? l : function(t) {
              return l(e, a, n ? t + n : t, s, 1)
            }
          },
          quickTo: function(e, t, n) {
            var r, o = bo.to(e, gn(((r = {})[t] = "+=0.1", r.paused = !0, r), n || {})),
              i = function(e, n, r) {
                return o.resetTo(t, e, n, r)
              };
            return i.tween = o, i
          },
          isTweening: function(e) {
            return Je.getTweensOf(e, !0).length > 0
          },
          defaults: function(e) {
            return e && e.ease && (e.ease = Pr(e.ease, ht.ease)), bn(ht, e || {})
          },
          config: function(e) {
            return bn(pt, e || {})
          },
          registerEffect: function(e) {
            var t = e.name,
              n = e.effect,
              r = e.plugins,
              o = e.defaults,
              i = e.extendTimeline;
            (r || "").split(",").forEach(function(e) {
              return e && !Jt[e] && !Ft[e] && $t(t + " effect requires " + e + " plugin.")
            }), en[t] = function(e, t, r) {
              return n(Kn(e), yn(t || {}, o), r)
            }, i && (Ir.prototype[t] = function(e, n, r) {
              return this.add(en[t](e, Pt(n) ? n : (r = n) && {}, this), r)
            })
          },
          registerEase: function(e, t) {
            _r[e] = Pr(t)
          },
          parseEase: function(e, t) {
            return arguments.length ? Pr(e, t) : _r
          },
          getById: function(e) {
            return Je.getById(e)
          },
          exportRoot: function(e, t) {
            void 0 === e && (e = {});
            var n, r, o = new Ir(e);
            for (o.smoothChildTiming = Rt(e.smoothChildTiming), Je.remove(o), o._dp = 0, o._time = o._tTime = Je._time, n = Je._first; n;) r = n._next, !t && !n._dur && n instanceof Xr && n.vars.onComplete === n._targets[0] || In(o, n, n._start - n._delay), n = r;
            return In(Je, o, 0), o
          },
          context: function(e, t) {
            return e ? new ho(e, t) : Qe
          },
          matchMedia: function(e) {
            return new mo(e)
          },
          matchMediaRefresh: function() {
            return so.forEach(function(e) {
              var t, n, r = e.conditions;
              for (n in r) r[n] && (r[n] = !1, t = 1);
              t && e.revert()
            }) || po()
          },
          addEventListener: function(e, t) {
            var n = ao[e] || (ao[e] = []);
            ~n.indexOf(t) || n.push(t)
          },
          removeEventListener: function(e, t) {
            var n = ao[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1)
          },
          utils: {
            wrap: function e(t, n, r) {
              var o = n - t;
              return Nt(t) ? nr(t, e(0, t.length), n) : $n(r, function(e) {
                return (o + (e - t) % o) % o + t
              })
            },
            wrapYoyo: function e(t, n, r) {
              var o = n - t,
                i = 2 * o;
              return Nt(t) ? nr(t, e(0, t.length - 1), n) : $n(r, function(e) {
                return t + ((e = (i + (e - t) % i) % i || 0) > o ? i - e : e)
              })
            },
            distribute: Qn,
            random: tr,
            snap: er,
            normalize: function(e, t, n) {
              return or(e, t, 0, 1, n)
            },
            getUnit: Hn,
            clamp: function(e, t, n) {
              return $n(n, function(n) {
                return Xn(e, t, n)
              })
            },
            splitColor: pr,
            toArray: Kn,
            selector: Gn,
            mapRange: or,
            pipe: function() {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return function(e) {
                return t.reduce(function(e, t) {
                  return t(e)
                }, e)
              }
            },
            unitize: function(e, t) {
              return function(n) {
                return e(parseFloat(n)) + (t || Hn(n))
              }
            },
            interpolate: function e(t, n, r, o) {
              var i = isNaN(t + n) ? 0 : function(e) {
                return (1 - e) * t + e * n
              };
              if (!i) {
                var s, a, l, c, u, d = Ct(t),
                  f = {};
                if (!0 === r && (o = 1) && (r = null), d) t = {
                  p: t
                }, n = {
                  p: n
                };
                else if (Nt(t) && !Nt(n)) {
                  for (l = [], c = t.length, u = c - 2, a = 1; a < c; a++) l.push(e(t[a - 1], t[a]));
                  c--, i = function(e) {
                    e *= c;
                    var t = Math.min(u, ~~e);
                    return l[t](e - t)
                  }, r = n
                } else o || (t = gn(Nt(t) ? [] : {}, t));
                if (!l) {
                  for (s in n) Lr.call(f, t, s, "get", n[s]);
                  i = function(e) {
                    return eo(e, f) || (d ? t.p : t)
                  }
                }
              }
              return $n(r, i)
            },
            shuffle: Yn
          },
          install: qt,
          effects: en,
          ticker: br,
          updateRoot: Ir.updateRoot,
          plugins: Jt,
          globalTimeline: Je,
          core: {
            PropTween: io,
            globals: Xt,
            Tween: Xr,
            Timeline: Ir,
            Animation: Dr,
            getCache: sn,
            _removeLinkedListItem: Cn,
            reverting: function() {
              return Ye
            },
            context: function(e) {
              return e && Qe && (Qe.data.push(e), e._ctx = Qe), Qe
            },
            suppressOverwrites: function(e) {
              return Ge = e
            }
          }
        };
      ln("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return vo[e] = Xr[e]
      }), br.add(Ir.updateRoot), it = vo.to({}, {
        duration: 0
      });
      var yo = function(e, t) {
          for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
          return n
        },
        go = function(e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function(e, n, r) {
              r._onInit = function(e) {
                var r, o;
                if (Ct(n) && (r = {}, ln(n, function(e) {
                    return r[e] = 1
                  }), n = r), t) {
                  for (o in r = {}, n) r[o] = t(n[o]);
                  n = r
                }! function(e, t) {
                  var n, r, o, i = e._targets;
                  for (n in t)
                    for (r = i.length; r--;)(o = e._ptLookup[r][n]) && (o = o.d) && (o._pt && (o = yo(o, n)), o && o.modifier && o.modifier(t[n], e, i[r], n))
                }(e, n)
              }
            }
          }
        },
        bo = vo.registerPlugin({
          name: "attr",
          init: function(e, t, n, r, o) {
            var i, s, a;
            for (i in this.tween = n, t) a = e.getAttribute(i) || "", (s = this.add(e, "setAttribute", (a || 0) + "", t[i], r, o, 0, 0, i)).op = i, s.b = a, this._props.push(i)
          },
          render: function(e, t) {
            for (var n = t._pt; n;) Ye ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
          }
        }, {
          name: "endArray",
          init: function(e, t) {
            for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
          }
        }, go("roundProps", Jn), go("modifiers"), go("snap", er)) || vo;
      Xr.version = Ir.version = bo.version = "3.12.5", rt = 1, kt() && wr(), _r.Power0, _r.Power1, _r.Power2, _r.Power3, _r.Power4, _r.Linear, _r.Quad, _r.Cubic, _r.Quart, _r.Quint, _r.Strong, _r.Elastic, _r.Back, _r.SteppedEase, _r.Bounce, _r.Sine, _r.Expo, _r.Circ;
      var wo, _o, xo, Co, Oo, jo, So, Po, Ro = {},
        ko = 180 / Math.PI,
        Eo = Math.PI / 180,
        To = Math.atan2,
        No = /([A-Z])/g,
        Do = /(left|right|width|margin|padding|x)/i,
        Io = /[\s,\(]\S/,
        Mo = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        Ao = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        zo = function(e, t) {
          return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        Lo = function(e, t) {
          return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        Vo = function(e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
        },
        Fo = function(e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t)
        },
        Bo = function(e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        },
        qo = function(e, t, n) {
          return e.style[t] = n
        },
        Wo = function(e, t, n) {
          return e.style.setProperty(t, n)
        },
        $o = function(e, t, n) {
          return e._gsap[t] = n
        },
        Xo = function(e, t, n) {
          return e._gsap.scaleX = e._gsap.scaleY = n
        },
        Ho = function(e, t, n, r, o) {
          var i = e._gsap;
          i.scaleX = i.scaleY = n, i.renderTransform(o, i)
        },
        Uo = function(e, t, n, r, o) {
          var i = e._gsap;
          i[t] = n, i.renderTransform(o, i)
        },
        Zo = "transform",
        Ko = Zo + "Origin",
        Go = function e(t, n) {
          var r = this,
            o = this.target,
            i = o.style,
            s = o._gsap;
          if (t in Ro && i) {
            if (this.tfm = this.tfm || {}, "transform" === t) return Mo.transform.split(",").forEach(function(t) {
              return e.call(r, t, n)
            });
            if (~(t = Mo[t] || t).indexOf(",") ? t.split(",").forEach(function(e) {
                return r.tfm[e] = hi(o, e)
              }) : this.tfm[t] = s.x ? s[t] : hi(o, t), t === Ko && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(Zo) >= 0) return;
            s.svg && (this.svgo = o.getAttribute("data-svg-origin"), this.props.push(Ko, n, "")), t = Zo
          }(i || n) && this.props.push(t, n, i[t])
        },
        Yo = function(e) {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        Qo = function() {
          var e, t, n = this.props,
            r = this.target,
            o = r.style,
            i = r._gsap;
          for (e = 0; e < n.length; e += 3) n[e + 1] ? r[n[e]] = n[e + 2] : n[e + 2] ? o[n[e]] = n[e + 2] : o.removeProperty("--" === n[e].substr(0, 2) ? n[e] : n[e].replace(No, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (e = So()) && e.isStart || o[Zo] || (Yo(o), i.zOrigin && o[Ko] && (o[Ko] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
          }
        },
        Jo = function(e, t) {
          var n = {
            target: e,
            props: [],
            revert: Qo,
            save: Go
          };
          return e._gsap || bo.core.getCache(e), t && t.split(",").forEach(function(e) {
            return n.save(e)
          }), n
        },
        ei = function(e, t) {
          var n = _o.createElementNS ? _o.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : _o.createElement(e);
          return n && n.style ? n : _o.createElement(e)
        },
        ti = function e(t, n, r) {
          var o = getComputedStyle(t);
          return o[n] || o.getPropertyValue(n.replace(No, "-$1").toLowerCase()) || o.getPropertyValue(n) || !r && e(t, ri(n) || n, 1) || ""
        },
        ni = "O,Moz,ms,Ms,Webkit".split(","),
        ri = function(e, t, n) {
          var r = (t || Oo).style,
            o = 5;
          if (e in r && !n) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(ni[o] + e in r););
          return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? ni[o] : "") + e
        },
        oi = function() {
          "undefined" != typeof window && window.document && (wo = window, _o = wo.document, xo = _o.documentElement, Oo = ei("div") || {
            style: {}
          }, ei("div"), Zo = ri(Zo), Ko = Zo + "Origin", Oo.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Po = !!ri("perspective"), So = bo.core.reverting, Co = 1)
        },
        ii = function e(t) {
          var n, r = ei("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            o = this.parentNode,
            i = this.nextSibling,
            s = this.style.cssText;
          if (xo.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
          } catch (e) {} else this._gsapBBox && (n = this._gsapBBox());
          return o && (i ? o.insertBefore(this, i) : o.appendChild(this)), xo.removeChild(r), this.style.cssText = s, n
        },
        si = function(e, t) {
          for (var n = t.length; n--;)
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
        },
        ai = function(e) {
          var t;
          try {
            t = e.getBBox()
          } catch (n) {
            t = ii.call(e, !0)
          }
          return t && (t.width || t.height) || e.getBBox === ii || (t = ii.call(e, !0)), !t || t.width || t.x || t.y ? t : {
            x: +si(e, ["x", "cx", "x1"]) || 0,
            y: +si(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        li = function(e) {
          return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !ai(e))
        },
        ci = function(e, t) {
          if (t) {
            var n, r = e.style;
            t in Ro && t !== Ko && (t = Zo), r.removeProperty ? ("ms" !== (n = t.substr(0, 2)) && "webkit" !== t.substr(0, 6) || (t = "-" + t), r.removeProperty("--" === n ? t : t.replace(No, "-$1").toLowerCase())) : r.removeAttribute(t)
          }
        },
        ui = function(e, t, n, r, o, i) {
          var s = new io(e._pt, t, n, 0, 1, i ? Bo : Fo);
          return e._pt = s, s.b = r, s.e = o, e._props.push(n), s
        },
        di = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        fi = {
          grid: 1,
          flex: 1
        },
        pi = function e(t, n, r, o) {
          var i, s, a, l, c = parseFloat(r) || 0,
            u = (r + "").trim().substr((c + "").length) || "px",
            d = Oo.style,
            f = Do.test(n),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            v = "px" === o,
            y = "%" === o;
          if (o === u || !c || di[o] || di[u]) return c;
          if ("px" !== u && !v && (c = e(t, n, r, "px")), l = t.getCTM && li(t), (y || "%" === u) && (Ro[n] || ~n.indexOf("adius"))) return i = l ? t.getBBox()[f ? "width" : "height"] : t[h], cn(y ? c / i * m : c / 100 * i);
          if (d[f ? "width" : "height"] = m + (v ? u : o), s = ~n.indexOf("adius") || "em" === o && t.appendChild && !p ? t : t.parentNode, l && (s = (t.ownerSVGElement || {}).parentNode), s && s !== _o && s.appendChild || (s = _o.body), (a = s._gsap) && y && a.width && f && a.time === br.time && !a.uncache) return cn(c / a.width * m);
          if (!y || "height" !== n && "width" !== n)(y || "%" === u) && !fi[ti(s, "display")] && (d.position = ti(t, "position")), s === t && (d.position = "static"), s.appendChild(Oo), i = Oo[h], s.removeChild(Oo), d.position = "absolute";
          else {
            var g = t.style[n];
            t.style[n] = m + o, i = t[h], g ? t.style[n] = g : ci(t, n)
          }
          return f && y && ((a = sn(s)).time = br.time, a.width = s[h]), cn(v ? i * c / m : i && c ? m / i * c : 0)
        },
        hi = function(e, t, n, r) {
          var o;
          return Co || oi(), t in Mo && "transform" !== t && ~(t = Mo[t]).indexOf(",") && (t = t.split(",")[0]), Ro[t] && "transform" !== t ? (o = Si(e, r), o = "transformOrigin" !== t ? o[t] : o.svg ? o.origin : Pi(ti(e, Ko)) + " " + o.zOrigin + "px") : (!(o = e.style[t]) || "auto" === o || r || ~(o + "").indexOf("calc(")) && (o = bi[t] && bi[t](e, t, n) || ti(e, t) || an(e, t) || ("opacity" === t ? 1 : 0)), n && !~(o + "").trim().indexOf(" ") ? pi(e, t, o, n) + n : o
        },
        mi = function(e, t, n, r) {
          if (!n || "none" === n) {
            var o = ri(t, e, 1),
              i = o && ti(e, o, 1);
            i && i !== n ? (t = o, n = i) : "borderColor" === t && (n = ti(e, "borderTopColor"))
          }
          var s, a, l, c, u, d, f, p, h, m, v, y = new io(this._pt, e.style, t, 0, 1, Jr),
            g = 0,
            b = 0;
          if (y.b = n, y.e = r, n += "", "auto" == (r += "") && (d = e.style[t], e.style[t] = r, r = ti(e, t) || r, d ? e.style[t] = d : ci(e, t)), gr(s = [n, r]), r = s[1], l = (n = s[0]).match(Mt) || [], (r.match(Mt) || []).length) {
            for (; a = Mt.exec(r);) f = a[0], h = r.substring(g, a.index), u ? u = (u + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (u = 1), f !== (d = l[b++] || "") && (c = parseFloat(d) || 0, v = d.substr((c + "").length), "=" === f.charAt(1) && (f = dn(c, f) + v), p = parseFloat(f), m = f.substr((p + "").length), g = Mt.lastIndex - m.length, m || (m = m || pt.units[t] || v, g === r.length && (r += m, y.e += m)), v !== m && (c = pi(e, t, d, m) || 0), y._pt = {
              _next: y._pt,
              p: h || 1 === b ? h : ",",
              s: c,
              c: p - c,
              m: u && u < 4 || "zIndex" === t ? Math.round : 0
            });
            y.c = g < r.length ? r.substring(g, r.length) : ""
          } else y.r = "display" === t && "none" === r ? Bo : Fo;
          return zt.test(r) && (y.e = 0), this._pt = y, y
        },
        vi = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        yi = function(e) {
          var t = e.split(" "),
            n = t[0],
            r = t[1] || "50%";
          return "top" !== n && "bottom" !== n && "left" !== r && "right" !== r || (e = n, n = r, r = e), t[0] = vi[n] || n, t[1] = vi[r] || r, t.join(" ")
        },
        gi = function(e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n, r, o, i = t.t,
              s = i.style,
              a = t.u,
              l = i._gsap;
            if ("all" === a || !0 === a) s.cssText = "", r = 1;
            else
              for (o = (a = a.split(",")).length; --o > -1;) n = a[o], Ro[n] && (r = 1, n = "transformOrigin" === n ? Ko : Zo), ci(i, n);
            r && (ci(i, Zo), l && (l.svg && i.removeAttribute("transform"), Si(i, 1), l.uncache = 1, Yo(s)))
          }
        },
        bi = {
          clearProps: function(e, t, n, r, o) {
            if ("isFromStart" !== o.data) {
              var i = e._pt = new io(e._pt, t, n, 0, 0, gi);
              return i.u = r, i.pr = -10, i.tween = o, e._props.push(n), 1
            }
          }
        },
        wi = [1, 0, 0, 1, 0, 0],
        _i = {},
        xi = function(e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        },
        Ci = function(e) {
          var t = ti(e, Zo);
          return xi(t) ? wi : t.substr(7).match(It).map(cn)
        },
        Oi = function(e, t) {
          var n, r, o, i, s = e._gsap || sn(e),
            a = e.style,
            l = Ci(e);
          return s.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(o = e.transform.baseVal.consolidate().matrix).a, o.b, o.c, o.d, o.e, o.f]).join(",") ? wi : l : (l !== wi || e.offsetParent || e === xo || s.svg || (o = a.display, a.display = "block", (n = e.parentNode) && e.offsetParent || (i = 1, r = e.nextElementSibling, xo.appendChild(e)), l = Ci(e), o ? a.display = o : ci(e, "display"), i && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : xo.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        ji = function(e, t, n, r, o, i) {
          var s, a, l, c = e._gsap,
            u = o || Oi(e, !0),
            d = c.xOrigin || 0,
            f = c.yOrigin || 0,
            p = c.xOffset || 0,
            h = c.yOffset || 0,
            m = u[0],
            v = u[1],
            y = u[2],
            g = u[3],
            b = u[4],
            w = u[5],
            _ = t.split(" "),
            x = parseFloat(_[0]) || 0,
            C = parseFloat(_[1]) || 0;
          n ? u !== wi && (a = m * g - v * y) && (l = x * (-v / a) + C * (m / a) - (m * w - v * b) / a, x = x * (g / a) + C * (-y / a) + (y * w - g * b) / a, C = l) : (x = (s = ai(e)).x + (~_[0].indexOf("%") ? x / 100 * s.width : x), C = s.y + (~(_[1] || _[0]).indexOf("%") ? C / 100 * s.height : C)), r || !1 !== r && c.smooth ? (b = x - d, w = C - f, c.xOffset = p + (b * m + w * y) - b, c.yOffset = h + (b * v + w * g) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = C, c.smooth = !!r, c.origin = t, c.originIsAbsolute = !!n, e.style[Ko] = "0px 0px", i && (ui(i, c, "xOrigin", d, x), ui(i, c, "yOrigin", f, C), ui(i, c, "xOffset", p, c.xOffset), ui(i, c, "yOffset", h, c.yOffset)), e.setAttribute("data-svg-origin", x + " " + C)
        },
        Si = function(e, t) {
          var n = e._gsap || new Nr(e);
          if ("x" in n && !t && !n.uncache) return n;
          var r, o, i, s, a, l, c, u, d, f, p, h, m, v, y, g, b, w, _, x, C, O, j, S, P, R, k, E, T, N, D, I, M = e.style,
            A = n.scaleX < 0,
            z = "px",
            L = "deg",
            V = getComputedStyle(e),
            F = ti(e, Ko) || "0";
          return r = o = i = l = c = u = d = f = p = 0, s = a = 1, n.svg = !(!e.getCTM || !li(e)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (M[Zo] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[Zo] ? V[Zo] : "")), M.scale = M.rotate = M.translate = "none"), v = Oi(e, n.svg), n.svg && (n.uncache ? (P = e.getBBox(), F = n.xOrigin - P.x + "px " + (n.yOrigin - P.y) + "px", S = "") : S = !t && e.getAttribute("data-svg-origin"), ji(e, S || F, !!S || n.originIsAbsolute, !1 !== n.smooth, v)), h = n.xOrigin || 0, m = n.yOrigin || 0, v !== wi && (w = v[0], _ = v[1], x = v[2], C = v[3], r = O = v[4], o = j = v[5], 6 === v.length ? (s = Math.sqrt(w * w + _ * _), a = Math.sqrt(C * C + x * x), l = w || _ ? To(_, w) * ko : 0, (d = x || C ? To(x, C) * ko + l : 0) && (a *= Math.abs(Math.cos(d * Eo))), n.svg && (r -= h - (h * w + m * x), o -= m - (h * _ + m * C))) : (I = v[6], N = v[7], k = v[8], E = v[9], T = v[10], D = v[11], r = v[12], o = v[13], i = v[14], c = (y = To(I, T)) * ko, y && (S = O * (g = Math.cos(-y)) + k * (b = Math.sin(-y)), P = j * g + E * b, R = I * g + T * b, k = O * -b + k * g, E = j * -b + E * g, T = I * -b + T * g, D = N * -b + D * g, O = S, j = P, I = R), u = (y = To(-x, T)) * ko, y && (g = Math.cos(-y), D = C * (b = Math.sin(-y)) + D * g, w = S = w * g - k * b, _ = P = _ * g - E * b, x = R = x * g - T * b), l = (y = To(_, w)) * ko, y && (S = w * (g = Math.cos(y)) + _ * (b = Math.sin(y)), P = O * g + j * b, _ = _ * g - w * b, j = j * g - O * b, w = S, O = P), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, u = 180 - u), s = cn(Math.sqrt(w * w + _ * _ + x * x)), a = cn(Math.sqrt(j * j + I * I)), y = To(O, j), d = Math.abs(y) > 2e-4 ? y * ko : 0, p = D ? 1 / (D < 0 ? -D : D) : 0), n.svg && (S = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !xi(ti(e, Zo)), S && e.setAttribute("transform", S))), Math.abs(d) > 90 && Math.abs(d) < 270 && (A ? (s *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, d += d <= 0 ? 180 : -180)), t = t || n.uncache, n.x = r - ((n.xPercent = r && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + z, n.y = o - ((n.yPercent = o && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-o) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + z, n.z = i + z, n.scaleX = cn(s), n.scaleY = cn(a), n.rotation = cn(l) + L, n.rotationX = cn(c) + L, n.rotationY = cn(u) + L, n.skewX = d + L, n.skewY = f + L, n.transformPerspective = p + z, (n.zOrigin = parseFloat(F.split(" ")[2]) || !t && n.zOrigin || 0) && (M[Ko] = Pi(F)), n.xOffset = n.yOffset = 0, n.force3D = pt.force3D, n.renderTransform = n.svg ? Ii : Po ? Di : ki, n.uncache = 0, n
        },
        Pi = function(e) {
          return (e = e.split(" "))[0] + " " + e[1]
        },
        Ri = function(e, t, n) {
          var r = Hn(t);
          return cn(parseFloat(t) + parseFloat(pi(e, "x", n + "px", r))) + r
        },
        ki = function(e, t) {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Di(e, t)
        },
        Ei = "0deg",
        Ti = "0px",
        Ni = ") ",
        Di = function(e, t) {
          var n = t || this,
            r = n.xPercent,
            o = n.yPercent,
            i = n.x,
            s = n.y,
            a = n.z,
            l = n.rotation,
            c = n.rotationY,
            u = n.rotationX,
            d = n.skewX,
            f = n.skewY,
            p = n.scaleX,
            h = n.scaleY,
            m = n.transformPerspective,
            v = n.force3D,
            y = n.target,
            g = n.zOrigin,
            b = "",
            w = "auto" === v && e && 1 !== e || !0 === v;
          if (g && (u !== Ei || c !== Ei)) {
            var _, x = parseFloat(c) * Eo,
              C = Math.sin(x),
              O = Math.cos(x);
            x = parseFloat(u) * Eo, _ = Math.cos(x), i = Ri(y, i, C * _ * -g), s = Ri(y, s, -Math.sin(x) * -g), a = Ri(y, a, O * _ * -g + g)
          }
          m !== Ti && (b += "perspective(" + m + Ni), (r || o) && (b += "translate(" + r + "%, " + o + "%) "), (w || i !== Ti || s !== Ti || a !== Ti) && (b += a !== Ti || w ? "translate3d(" + i + ", " + s + ", " + a + ") " : "translate(" + i + ", " + s + Ni), l !== Ei && (b += "rotate(" + l + Ni), c !== Ei && (b += "rotateY(" + c + Ni), u !== Ei && (b += "rotateX(" + u + Ni), d === Ei && f === Ei || (b += "skew(" + d + ", " + f + Ni), 1 === p && 1 === h || (b += "scale(" + p + ", " + h + Ni), y.style[Zo] = b || "translate(0, 0)"
        },
        Ii = function(e, t) {
          var n, r, o, i, s, a = t || this,
            l = a.xPercent,
            c = a.yPercent,
            u = a.x,
            d = a.y,
            f = a.rotation,
            p = a.skewX,
            h = a.skewY,
            m = a.scaleX,
            v = a.scaleY,
            y = a.target,
            g = a.xOrigin,
            b = a.yOrigin,
            w = a.xOffset,
            _ = a.yOffset,
            x = a.forceCSS,
            C = parseFloat(u),
            O = parseFloat(d);
          f = parseFloat(f), p = parseFloat(p), (h = parseFloat(h)) && (p += h = parseFloat(h), f += h), f || p ? (f *= Eo, p *= Eo, n = Math.cos(f) * m, r = Math.sin(f) * m, o = Math.sin(f - p) * -v, i = Math.cos(f - p) * v, p && (h *= Eo, s = Math.tan(p - h), o *= s = Math.sqrt(1 + s * s), i *= s, h && (s = Math.tan(h), n *= s = Math.sqrt(1 + s * s), r *= s)), n = cn(n), r = cn(r), o = cn(o), i = cn(i)) : (n = m, i = v, r = o = 0), (C && !~(u + "").indexOf("px") || O && !~(d + "").indexOf("px")) && (C = pi(y, "x", u, "px"), O = pi(y, "y", d, "px")), (g || b || w || _) && (C = cn(C + g - (g * n + b * o) + w), O = cn(O + b - (g * r + b * i) + _)), (l || c) && (s = y.getBBox(), C = cn(C + l / 100 * s.width), O = cn(O + c / 100 * s.height)), s = "matrix(" + n + "," + r + "," + o + "," + i + "," + C + "," + O + ")", y.setAttribute("transform", s), x && (y.style[Zo] = s)
        },
        Mi = function(e, t, n, r, o) {
          var i, s, a = 360,
            l = Ct(o),
            c = parseFloat(o) * (l && ~o.indexOf("rad") ? ko : 1) - r,
            u = r + c + "deg";
          return l && ("short" === (i = o.split("_")[1]) && (c %= a) !== c % 180 && (c += c < 0 ? a : -360), "cw" === i && c < 0 ? c = (c + 36e9) % a - ~~(c / a) * a : "ccw" === i && c > 0 && (c = (c - 36e9) % a - ~~(c / a) * a)), e._pt = s = new io(e._pt, t, n, r, c, zo), s.e = u, s.u = "deg", e._props.push(n), s
        },
        Ai = function(e, t) {
          for (var n in t) e[n] = t[n];
          return e
        },
        zi = function(e, t, n) {
          var r, o, i, s, a, l, c, u = Ai({}, n._gsap),
            d = n.style;
          for (o in u.svg ? (i = n.getAttribute("transform"), n.setAttribute("transform", ""), d[Zo] = t, r = Si(n, 1), ci(n, Zo), n.setAttribute("transform", i)) : (i = getComputedStyle(n)[Zo], d[Zo] = t, r = Si(n, 1), d[Zo] = i), Ro)(i = u[o]) !== (s = r[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (a = Hn(i) !== (c = Hn(s)) ? pi(n, o, i, c) : parseFloat(i), l = parseFloat(s), e._pt = new io(e._pt, r, o, a, l - a, Ao), e._pt.u = c || 0, e._props.push(o));
          Ai(r, u)
        };
      ln("padding,margin,Width,Radius", function(e, t) {
        var n = "Top",
          r = "Right",
          o = "Bottom",
          i = "Left",
          s = (t < 3 ? [n, r, o, i] : [n + i, n + r, o + r, o + i]).map(function(n) {
            return t < 2 ? e + n : "border" + n + e
          });
        bi[t > 1 ? "border" + e : e] = function(e, t, n, r, o) {
          var i, a;
          if (arguments.length < 4) return i = s.map(function(t) {
            return hi(e, t, n)
          }), 5 === (a = i.join(" ")).split(i[0]).length ? i[0] : a;
          i = (r + "").split(" "), a = {}, s.forEach(function(e, t) {
            return a[e] = i[t] = i[t] || i[(t - 1) / 2 | 0]
          }), e.init(t, a, o)
        }
      });
      var Li, Vi, Fi = {
        name: "css",
        register: oi,
        targetTest: function(e) {
          return e.style && e.nodeType
        },
        init: function(e, t, n, r, o) {
          var i, s, a, l, c, u, d, f, p, h, m, v, y, g, b, w, _ = this._props,
            x = e.style,
            C = n.vars.startAt;
          for (d in Co || oi(), this.styles = this.styles || Jo(e), w = this.styles.props, this.tween = n, t)
            if ("autoRound" !== d && (s = t[d], !Jt[d] || !Vr(d, t, n, r, e, o)))
              if (c = typeof s, u = bi[d], "function" === c && (c = typeof(s = s.call(n, r, e, o))), "string" === c && ~s.indexOf("random(") && (s = rr(s)), u) u(this, e, d, s, n) && (b = 1);
              else if ("--" === d.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(d) + "").trim(), s += "", vr.lastIndex = 0, vr.test(i) || (f = Hn(i), p = Hn(s)), p ? f !== p && (i = pi(e, d, i, p) + p) : f && (s += f), this.add(x, "setProperty", i, s, r, o, 0, 0, d), _.push(d), w.push(d, 0, x[d]);
          else if ("undefined" !== c) {
            if (C && d in C ? (i = "function" == typeof C[d] ? C[d].call(n, r, e, o) : C[d], Ct(i) && ~i.indexOf("random(") && (i = rr(i)), Hn(i + "") || "auto" === i || (i += pt.units[d] || Hn(hi(e, d)) || ""), "=" === (i + "").charAt(1) && (i = hi(e, d))) : i = hi(e, d), l = parseFloat(i), (h = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), d in Mo && ("autoAlpha" === d && (1 === l && "hidden" === hi(e, "visibility") && a && (l = 0), w.push("visibility", 0, x.visibility), ui(this, x, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== d && "transform" !== d && ~(d = Mo[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Ro)
              if (this.styles.save(d), v || ((y = e._gsap).renderTransform && !t.parseTransform || Si(e, t.parseTransform), g = !1 !== t.smoothOrigin && y.smooth, (v = this._pt = new io(this._pt, x, Zo, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === d) this._pt = new io(this._pt, y, "scaleY", y.scaleY, (h ? dn(y.scaleY, h + a) : a) - y.scaleY || 0, Ao), this._pt.u = 0, _.push("scaleY", d), d += "X";
              else {
                if ("transformOrigin" === d) {
                  w.push(Ko, 0, x[Ko]), s = yi(s), y.svg ? ji(e, s, 0, g, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== y.zOrigin && ui(this, y, "zOrigin", y.zOrigin, p), ui(this, x, d, Pi(i), Pi(s)));
                  continue
                }
                if ("svgOrigin" === d) {
                  ji(e, s, 1, g, 0, this);
                  continue
                }
                if (d in _i) {
                  Mi(this, y, d, l, h ? dn(l, h + s) : s);
                  continue
                }
                if ("smoothOrigin" === d) {
                  ui(this, y, "smooth", y.smooth, s);
                  continue
                }
                if ("force3D" === d) {
                  y[d] = s;
                  continue
                }
                if ("transform" === d) {
                  zi(this, s, e);
                  continue
                }
              }
            else d in x || (d = ri(d) || d);
            if (m || (a || 0 === a) && (l || 0 === l) && !Io.test(s) && d in x) a || (a = 0), (f = (i + "").substr((l + "").length)) !== (p = Hn(s) || (d in pt.units ? pt.units[d] : f)) && (l = pi(e, d, i, p)), this._pt = new io(this._pt, m ? y : x, d, l, (h ? dn(l, h + a) : a) - l, m || "px" !== p && "zIndex" !== d || !1 === t.autoRound ? Ao : Vo), this._pt.u = p || 0, f !== p && "%" !== p && (this._pt.b = i, this._pt.r = Lo);
            else if (d in x) mi.call(this, e, d, i, h ? h + s : s);
            else if (d in e) this.add(e, d, i || e[d], h ? h + s : s, r, o);
            else if ("parseTransform" !== d) {
              Wt(d, s);
              continue
            }
            m || (d in x ? w.push(d, 0, x[d]) : w.push(d, 1, i || e[d])), _.push(d)
          }
          b && oo(this)
        },
        render: function(e, t) {
          if (t.tween._time || !So())
            for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
          else t.styles.revert()
        },
        get: hi,
        aliases: Mo,
        getSetter: function(e, t, n) {
          var r = Mo[t];
          return r && r.indexOf(",") < 0 && (t = r), t in Ro && t !== Ko && (e._gsap.x || hi(e, "x")) ? n && jo === n ? "scale" === t ? Xo : $o : (jo = n || {}) && ("scale" === t ? Ho : Uo) : e.style && !St(e.style[t]) ? qo : ~t.indexOf("-") ? Wo : Gr(e, t)
        },
        core: {
          _removeProperty: ci,
          _getMatrix: Oi
        }
      };
      bo.utils.checkPrefix = ri, bo.core.getStyleSaver = Jo, Vi = ln("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Li = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
        Ro[e] = 1
      }), ln(Li, function(e) {
        pt.units[e] = "deg", _i[e] = 1
      }), Mo[Vi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Li, ln("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
        var t = e.split(":");
        Mo[t[1]] = Vi[t[0]]
      }), ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
        pt.units[e] = "px"
      }), bo.registerPlugin(Fi);
      var Bi = bo.registerPlugin(Fi) || bo;
      Bi.core.Tween;
      let qi = "undefined" != typeof document ? B.useLayoutEffect : B.useEffect,
        Wi = e => e && !Array.isArray(e) && "object" == typeof e,
        $i = [],
        Xi = {},
        Hi = Bi;
      const Ui = (e, t = $i) => {
        let n = Xi;
        Wi(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : $i) : Wi(t) && (n = t, t = "dependencies" in n ? n.dependencies : $i), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: o
        } = n, i = (0, B.useRef)(!1), s = (0, B.useRef)(Hi.context(() => {}, r)), a = (0, B.useRef)(e => s.current.add(null, e)), l = t && t.length && !o;
        return l && qi(() => (i.current = !0, () => s.current.revert()), $i), qi(() => {
          if (e && s.current.add(e, r), !l || !i.current) return () => s.current.revert()
        }, t), {
          context: s.current,
          contextSafe: a.current
        }
      };
      Ui.register = e => {
        Hi = e
      }, Ui.headless = !0;
      const Zi = {
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

      function Ki(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function Gi(e, t, n, r = .15) {
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -Ki(t - e, n - t, r) + t : e > n ? +Ki(e - n, n - t, r) + n : e
      }

      function Yi(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Qi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Ji(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qi(Object(n), !0).forEach(function(t) {
            Yi(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qi(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      const es = {
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

      function ts(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const ns = ["enter", "leave"];
      const rs = ["gotpointercapture", "lostpointercapture"];

      function os(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = rs.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function is(e) {
        return "touches" in e
      }

      function ss(e) {
        return is(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function as(e) {
        return is(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function ls(e, t) {
        try {
          const n = t.clientX - e.clientX,
            r = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            i = (t.clientY + e.clientY) / 2,
            s = Math.hypot(n, r);
          return {
            angle: -180 * Math.atan2(n, r) / Math.PI,
            distance: s,
            origin: [o, i]
          }
        } catch (e) {}
        return null
      }

      function cs(e, t) {
        const [n, r] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return ls(n, r)
      }

      function us(e) {
        const t = as(e);
        return is(e) ? t.identifier : t.pointerId
      }

      function ds(e) {
        const t = as(e);
        return [t.clientX, t.clientY]
      }

      function fs(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function ps(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function hs() {}

      function ms(...e) {
        return 0 === e.length ? hs : 1 === e.length ? e[0] : function() {
          let t;
          for (const n of e) t = n.apply(this, arguments) || t;
          return t
        }
      }

      function vs(e, t) {
        return Object.assign({}, t, e || {})
      }
      class ys {
        constructor(e, t, n) {
          this.ctrl = e, this.args = t, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
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
            ingKey: n,
            args: r
          } = this;
          t[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], e.args = r, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
        }
        start(e) {
          const t = this.state,
            n = this.config;
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? ps(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            config: n,
            shared: r
          } = this;
          t.args = this.args;
          let o = 0;
          if (e && (t.event = e, n.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, r.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, r.locked = !!document.pointerLockElement, Object.assign(r, function(e) {
              const t = {};
              if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
                const {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                } = e;
                Object.assign(t, {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                })
              }
              return t
            }(e)), r.down = r.pressed = r.buttons % 2 == 1 || r.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            Zi.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, s] = t._movement, [a, l] = n.threshold, {
            _step: c,
            values: u
          } = t;
          if (n.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(i) >= a && u[0]), !1 === c[1] && (c[1] = Math.abs(s) >= l && u[1])) : (!1 === c[0] && (c[0] = Math.abs(i) >= a && Math.sign(i) * a), !1 === c[1] && (c[1] = Math.abs(s) >= l && Math.sign(s) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const d = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== c[0] ? e - c[0] : 0, d[1] = !1 !== c[1] ? t - c[1] : 0
          } else d[0] = !1 !== c[0] ? i - c[0] : 0, d[1] = !1 !== c[1] ? s - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = ps(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [h, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [h < v ? -1 : h > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && n.rubberband || [0, 0];
          if (t.offset = function(e, [t, n], [r, o]) {
              const [
                [i, s],
                [a, l]
              ] = e;
              return [Gi(t, i, s, r), Gi(n, a, l, o)]
            }(t._bounds, t.offset, w), t.delta = Zi.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = Zi.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Zi.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(Ji(Ji(Ji({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class gs extends ys {
        constructor(...e) {
          super(...e), Yi(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Zi.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Zi.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[ss(e)] : n.axisThreshold;
            t.axis = function([e, t], n) {
              const r = Math.abs(e),
                o = Math.abs(t);
              return r > o && r > n ? "x" : o > r && o > n ? "y" : void 0
            }(t._movement, r)
          }
          t._blocked = (n.lockDirection || !!n.axis) && !t.axis || !!n.axis && n.axis !== t.axis
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
      const bs = e => e,
        ws = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, n) => Ji(Ji({}, n.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Zi.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Zi.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || bs
          },
          threshold: e => Zi.toVector(e, 0)
        },
        _s = Ji(Ji({}, ws), {}, {
          axis(e, t, {
            axis: n
          }) {
            if (this.lockDirection = "lock" === n, !this.lockDirection) return n
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => _s.bounds(e(t));
            if ("current" in e) return () => e.current;
            if ("function" == typeof HTMLElement && e instanceof HTMLElement) return e;
            const {
              left: t = -1 / 0,
              right: n = 1 / 0,
              top: r = -1 / 0,
              bottom: o = 1 / 0
            } = e;
            return [
              [t, n],
              [r, o]
            ]
          }
        }),
        xs = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Cs = "undefined" != typeof window && window.document && window.document.createElement;

      function Os() {
        return Cs && "ontouchstart" in window
      }
      const js = {
          isBrowser: Cs,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Os(),
          touchscreen: Os() || Cs && window.navigator.maxTouchPoints > 1,
          pointer: Cs && "onpointerdown" in window,
          pointerLock: Cs && "exitPointerLock" in window.document
        },
        Ss = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Ps = Ji(Ji({}, _s), {}, {
          device(e, t, {
            pointer: {
              touch: n = !1,
              lock: r = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = r && js.pointerLock, js.touch && n ? "touch" : this.pointerLock ? "mouse" : js.pointer && !o ? "pointer" : js.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: n
          }) {
            if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, js.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
          },
          pointerCapture(e, t, {
            pointer: {
              capture: n = !0,
              buttons: r = 1,
              keys: o = !0
            } = {}
          }) {
            return this.pointerButtons = r, this.keys = o, !this.pointerLock && "pointer" === this.device && n
          },
          threshold(e, t, {
            filterTaps: n = !1,
            tapsThreshold: r = 3,
            axis: o
          }) {
            const i = Zi.toVector(e, n ? r : o ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = r, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: n = 250
          } = {}) {
            return {
              velocity: this.transform(Zi.toVector(e)),
              distance: this.transform(Zi.toVector(t)),
              duration: n
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
          axisThreshold: e => e ? Ji(Ji({}, Ss), e) : Ss,
          keyboardDisplacement: (e = 10) => e
        });

      function Rs(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, s] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && s < 0 || n > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const ks = Ji(Ji({}, ws), {}, {
          device(e, t, {
            shared: n,
            pointer: {
              touch: r = !1
            } = {}
          }) {
            if (n.target && !js.touch && js.gesture) return "gesture";
            if (js.touch && r) return "touch";
            if (js.touchscreen) {
              if (js.pointer) return "pointer";
              if (js.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: n = {},
            angleBounds: r = {}
          }) {
            const o = e => {
                const t = vs(ps(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = vs(ps(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof n && "function" != typeof r ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, Zi.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Es = Ji(Ji({}, _s), {}, {
          mouseOnly: (e = !0) => e
        }),
        Ts = _s,
        Ns = _s,
        Ds = Ji(Ji({}, _s), {}, {
          mouseOnly: (e = !0) => e
        }),
        Is = new Map,
        Ms = new Map;

      function As(e) {
        Is.set(e.key, e.engine), Ms.set(e.key, e.resolver)
      }
      const zs = {
          key: "drag",
          engine: class extends gs {
            constructor(...e) {
              super(...e), Yi(this, "ingKey", "dragging")
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
                  n = e.currentTarget.getBoundingClientRect(),
                  r = {
                    left: t.left - n.left + e.offset[0],
                    right: t.right - n.right + e.offset[0],
                    top: t.top - n.top + e.offset[1],
                    bottom: t.bottom - n.bottom + e.offset[1]
                  };
                e._bounds = _s.bounds(r)
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
                n = this.state;
              if (null != e.buttons && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)) return;
              const r = this.ctrl.setEventIds(e);
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = us(e), n._pointerActive = !0, this.computeValues(ds(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== ss(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = us(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = ds(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Zi.sub(o, t._values), this.computeValues(o)), Zi.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = us(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= n.tapsThreshold && i <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
              else {
                const [e, r] = t._delta, [o, i] = t._movement, [s, a] = n.swipe.velocity, [l, c] = n.swipe.distance, u = n.swipe.duration;
                if (t.elapsedTime < u) {
                  const n = Math.abs(e / t.timeDelta),
                    u = Math.abs(r / t.timeDelta);
                  n > s && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > a && Math.abs(i) > c && (t.swipe[1] = Math.sign(r))
                }
              }
              this.emit()
            }
            pointerClick(e) {
              !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }
            setupPointer(e) {
              const t = this.config,
                n = t.device;
              t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)))
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
              const t = xs[e.key];
              if (t) {
                const n = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, Zi.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in xs && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Ps
        },
        Ls = {
          key: "hover",
          engine: class extends gs {
            constructor(...e) {
              super(...e), Yi(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(ds(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = ds(e);
              t._movement = t._delta = Zi.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Ds
        },
        Vs = {
          key: "move",
          engine: class extends gs {
            constructor(...e) {
              super(...e), Yi(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(ds(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = ds(e),
                n = this.state;
              n._delta = Zi.sub(t, n._values), Zi.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Es
        },
        Fs = {
          key: "pinch",
          engine: class extends ys {
            constructor(...e) {
              super(...e), Yi(this, "ingKey", "pinching"), Yi(this, "aliasKey", "da")
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
                lastOffset: n
              } = this.state;
              this.state.offset = "wheel" === e ? Zi.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
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
                [t, n] = e._movement;
              if (!e.axis) {
                const r = 30 * Math.abs(t) - Math.abs(n);
                r < 0 ? e.axis = "angle" : r > 0 && (e.axis = "scale")
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
                n = this.ctrl.touchIds;
              if (t._active && t._touchIds.every(e => n.has(e))) return;
              if (n.size < 2) return;
              this.start(e), t._touchIds = Array.from(n).slice(0, 2);
              const r = cs(e, t._touchIds);
              r && this.pinchStart(e, r)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const t = this.state,
                n = t._pointerEvents,
                r = this.ctrl.pointerIds;
              if (t._active && Array.from(n.keys()).every(e => r.has(e))) return;
              if (n.size < 2 && n.set(e.pointerId, e), t._pointerEvents.size < 2) return;
              this.start(e);
              const o = ls(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = cs(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = ls(...Array.from(t.values()));
              n && this.pinchMove(e, n)
            }
            pinchMove(e, t) {
              const n = this.state,
                r = n._values[1],
                o = t.angle - r;
              let i = 0;
              Math.abs(o) > 270 && (i += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * i]), n.origin = t.origin, n.turns = i, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit()
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
              const n = t._movement;
              t._movement = [e.scale - 1, e.rotation], t._delta = Zi.sub(t._movement, n), this.compute(e), this.emit()
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
              t._delta = [-fs(e)[1] / 100 * t.offset[0], 0], Zi.addTo(t._movement, t._delta), Rs(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: ks
        },
        Bs = {
          key: "scroll",
          engine: class extends gs {
            constructor(...e) {
              super(...e), Yi(this, "ingKey", "scrolling")
            }
            scroll(e) {
              this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(e) {
              e.cancelable && e.preventDefault();
              const t = this.state,
                n = function(e) {
                  var t, n;
                  const {
                    scrollX: r,
                    scrollY: o,
                    scrollLeft: i,
                    scrollTop: s
                  } = e.currentTarget;
                  return [null !== (t = null != r ? r : i) && void 0 !== t ? t : 0, null !== (n = null != o ? o : s) && void 0 !== n ? n : 0]
                }(e);
              t._delta = Zi.sub(n, t._values), Zi.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Ts
        },
        qs = {
          key: "wheel",
          engine: class extends gs {
            constructor(...e) {
              super(...e), Yi(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = fs(e), Zi.addTo(t._movement, t._delta), Rs(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Ns
        };
      const Ws = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (js.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        $s = ["target", "eventOptions", "window", "enabled", "transform"];

      function Xs(e = {}, t) {
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = Xs(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class Hs {
        constructor(e, t) {
          Yi(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const n = es[e];
              return e + (n && n[t] || t)
            }(t, n),
            a = Ji(Ji({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(s, r, a);
          const l = () => {
            e.removeEventListener(s, r, a), i.delete(l)
          };
          return i.add(l), l
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class Us {
        constructor() {
          Yi(this, "_timeouts", new Map)
        }
        add(e, t, n = 140, ...r) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, n, ...r))
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
      class Zs {
        constructor(e) {
          var t, n;
          Yi(this, "gestures", new Set), Yi(this, "_targetEventStore", new Hs(this)), Yi(this, "gestureEventStores", {}), Yi(this, "gestureTimeoutStores", {}), Yi(this, "handlers", {}), Yi(this, "config", {}), Yi(this, "pointerIds", new Set), Yi(this, "touchIds", new Set), Yi(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && Ks(t, "drag"), n.wheel && Ks(t, "wheel"), n.scroll && Ks(t, "scroll"), n.move && Ks(t, "move"), n.pinch && Ks(t, "pinch"), n.hover && Ks(t, "hover")
        }
        setEventIds(e) {
          return is(e) ? (this.touchIds = new Set(function(e) {
            return function(e) {
              return Array.from(e.touches).filter(t => {
                var n, r;
                return t.target === e.currentTarget || (null === (n = e.currentTarget) || void 0 === n || null === (r = n.contains) || void 0 === r ? void 0 : r.call(n, t.target))
              })
            }(e).map(e => e.identifier)
          }(e)), this.touchIds) : "pointerId" in e ? ("pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(e, t) {
          this.handlers = e, this.nativeHandlers = t
        }
        applyConfig(e, t) {
          this.config = function(e, t, n = {}) {
            const r = e,
              {
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              } = r,
              c = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
              }(r, $s);
            if (n.shared = Xs({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, Ws), t) {
              const e = Ms.get(t);
              n[t] = Xs(Ji({
                shared: n.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Ms.get(e);
                t && (n[e] = Xs(Ji({
                  shared: n.shared
                }, c[e]), t))
              }
            return n
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
            n = {};
          let r;
          if (!t.target || (r = t.target(), r)) {
            if (t.enabled) {
              for (const t of this.gestures) {
                const o = this.config[t],
                  i = Gs(n, o.eventOptions, !!r);
                o.enabled && new(Is.get(t))(this, e, t).bind(i)
              }
              const o = Gs(n, t.eventOptions, !!r);
              for (const t in this.nativeHandlers) o(t, "", n => this.nativeHandlers[t](Ji(Ji({}, this.state.shared), {}, {
                event: n,
                args: e
              })), void 0, !0)
            }
            for (const e in n) n[e] = ms(...n[e]);
            if (!r) return n;
            for (const e in n) {
              const {
                device: t,
                capture: o,
                passive: i
              } = os(e);
              this._targetEventStore.add(r, t, "", n[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function Ks(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Hs(e, t), e.gestureTimeoutStores[t] = new Us
      }
      const Gs = (e, t, n) => (r, o, i, s = {}, a = !1) => {
          var l, c;
          const u = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = s.passive) && void 0 !== c ? c : t.passive;
          let f = a ? r : function(e, t = "", n = !1) {
            const r = es[e],
              o = r && r[t] || t;
            return "on" + ts(e) + ts(o) + (function(e = !1, t) {
              return e && !ns.includes(t)
            }(n, o) ? "Capture" : "")
          }(r, o, u);
          n && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        Ys = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Qs(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!Is.has(r)) return;
        const s = n + "Start",
          a = n + "End";
        o[r] = e => {
          let r;
          return e.first && s in t && t[s](e), n in t && (r = t[n](e)), e.last && a in t && t[a](e), r
        }, i[r] = i[r] || {}
      }

      function Js(e, t = {}, n, r) {
        const o = W().useMemo(() => new Zs(e), []);
        if (o.applyHandlers(e, r), o.applyConfig(t, n), W().useEffect(o.effect.bind(o)), W().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function ea(e, t) {
        const n = ([zs, Fs, Bs, qs, Vs, Ls].forEach(As), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) Ys.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return Qs(o, n, "onDrag", "drag", i, t), Qs(o, n, "onWheel", "wheel", i, t), Qs(o, n, "onScroll", "scroll", i, t), Qs(o, n, "onPinch", "pinch", i, t), Qs(o, n, "onMove", "move", i, t), Qs(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return Js(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      const ta = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, n) => {
        e.onload = () => t(), e.onerror = n
      }), na = ([e, t]) => ({
        x: e,
        y: t
      }), ra = (e, t) => (e.x = t.x, e.y = t.y, e), oa = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, ia = (e, t, n) => Math.min(Math.max(e, t), n);

      function sa() {
        return sa = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, sa.apply(null, arguments)
      }
      var aa = ["shift", "alt", "meta", "mod", "ctrl"],
        la = {
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

      function ca(e) {
        return (e && la[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function ua(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function da(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map(function(e) {
          return ca(e)
        });
        return sa({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter(function(e) {
            return !aa.includes(e)
          }),
          description: n,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && ha([ca(e.key), ca(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && ma([ca(e.key), ca(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        fa.clear()
      });
      var fa = new Set;

      function pa(e) {
        return Array.isArray(e)
      }

      function ha(e) {
        var t = Array.isArray(e) ? e : [e];
        fa.has("meta") && fa.forEach(function(e) {
          return ! function(e) {
            return aa.includes(e)
          }(e) && fa.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return fa.add(e.toLowerCase())
        })
      }

      function ma(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? fa.clear() : t.forEach(function(e) {
          return fa.delete(e.toLowerCase())
        })
      }

      function va(e, t) {
        void 0 === t && (t = !1);
        var n, r, o = e.target,
          i = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, pa(t) ? Boolean(r && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        })) : Boolean(r && t && t)
      }
      var ya = (0, B.createContext)(void 0);

      function ga(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, O.jsx)(ya.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function ba(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(n, r) {
          return n && ba(e[r], t[r])
        }, !0) : e === t
      }
      var wa = (0, B.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        _a = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, B.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            i = o[0],
            s = o[1],
            a = (0, B.useState)([]),
            l = a[0],
            c = a[1],
            u = (0, B.useCallback)(function(e) {
              s(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            d = (0, B.useCallback)(function(e) {
              s(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, B.useCallback)(function(e) {
              s(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            p = (0, B.useCallback)(function(e) {
              c(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, B.useCallback)(function(e) {
              c(function(t) {
                return t.filter(function(t) {
                  return !ba(t, e)
                })
              })
            }, []);
          return (0, O.jsx)(wa.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, O.jsx)(ga, {
              addHotkey: p,
              removeHotkey: h,
              children: r
            })
          })
        },
        xa = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Ca = "undefined" != typeof window ? B.useLayoutEffect : B.useEffect;

      function Oa(e, t, n, r) {
        var o = (0, B.useState)(null),
          i = o[0],
          s = o[1],
          a = (0, B.useRef)(!1),
          l = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          c = pa(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = n instanceof Array ? n : r instanceof Array ? r : void 0,
          d = (0, B.useCallback)(t, null != u ? u : []),
          f = (0, B.useRef)(d);
        f.current = u ? d : t;
        var p = function(e) {
            var t = (0, B.useRef)(void 0);
            return ba(t.current, e) || (t.current = e), t.current
          }(l),
          h = (0, B.useContext)(wa).enabledScopes,
          m = (0, B.useContext)(ya);
        return Ca(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !va(e, ["input", "textarea", "select"]) || va(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var r = i.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i && !i.contains(r.activeElement)) return void xa(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != p && p.enableOnContentEditable) && ua(c, null == p ? void 0 : p.splitKey).forEach(function(n) {
                    var r, o = da(n, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, i = t.alt,
                          s = t.meta,
                          a = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = ca(f),
                          g = d.toLowerCase();
                        if (!(null != u && u.includes(y) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!n) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (a) {
                            if (!h && !p) return !1
                          } else {
                            if (s === !h && "meta" !== g && "os" !== g) return !1;
                            if (c === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (pa(r = u) ? r : r.split(o)).every(function(e) {
                          return fa.has(e.trim().toLowerCase())
                        })) : !u)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == p ? void 0 : p.enabled)) return void xa(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              r = function(e) {
                void 0 !== e.key && (ha(ca(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (ma(ca(e.code)), a.current = !1, null != p && p.keyup && n(e, !0))
              },
              s = i || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), m && ua(c, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return m.addHotkey(da(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), m && ua(c, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return m.removeHotkey(da(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [i, c, p, h]), s
      }

      function ja(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Sa(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Pa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sa(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = ja(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sa(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Ra(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ka = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Ea = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Pa(Pa({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ka(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ra(e.variantClassNames, e => Ra(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ta = Ea({
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
        Na = Ea({
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
      Bi.registerPlugin(Ui);
      const Da = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Ia = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Ma = (0, $.Tm)("var(--foundry_1a74xwb0)");
      var Aa = n(76455),
        za = n(72267),
        La = n(6442);
      const Va = ({
          children: e,
          messages: t,
          locale: n,
          fallback: r
        }) => {
          const [o, i] = (0, B.useState)(null);
          return (0, B.useEffect)(() => {
            (t?.[n] ?? t["en-US"]).then(e => {
              i(e.default)
            })
          }, [n]), o ? (0, O.jsx)(Aa.A, {
            locale: n,
            messages: o,
            children: e
          }) : r ?? null
        },
        Fa = {
          "en-US": n.e(9359).then(n.bind(n, 89359)),
          "de-DE": n.e(8348).then(n.bind(n, 68348)),
          "es-ES": n.e(1706).then(n.bind(n, 51706)),
          "es-MX": n.e(4471).then(n.bind(n, 34471)),
          "fr-FR": n.e(5110).then(n.bind(n, 85110)),
          "it-IT": n.e(1052).then(n.bind(n, 41052)),
          "ja-JP": n.e(1423).then(n.bind(n, 1423)),
          "ko-KR": n.e(4781).then(n.bind(n, 44781)),
          "pl-PL": n.e(4618).then(n.bind(n, 4618)),
          "pt-BR": n.e(642).then(n.bind(n, 60642)),
          "ru-RU": n.e(5048).then(n.bind(n, 25048)),
          "zh-CN": n.e(5801).then(n.bind(n, 65801)),
          "zh-TW": n.e(2505).then(n.bind(n, 42505))
        };
      class Ba {
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
            n = this.slide.panAreaSize[e];
          this.center[e] = Math.round((n - t) / 2), this.max[e] = t > n ? Math.round(n - t) : this.center[e], this.min[e] = t > n ? 0 : this.center[e]
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
        correctPan(e, t, n = !1) {
          return n ? t : ia(t, this.max[e], this.min[e])
        }
      }
      class qa {
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
          const n = t.x / this.elementSize.x,
            r = t.y / this.elementSize.y;
          this.fit = Math.min(1, n < r ? n : r), this.fill = Math.min(1, n > r ? n : r), this.vFill = Math.min(1, r), this.initial = this.getInitial(), this.max = Math.max(this.fit, this.initial, this.getMax()), this.min = Math.min(this.fit, this.initial, this.getMin()), this.step = this.fit * (this.options.step / 100)
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
      class Wa {
        eventCallbacks = new Map;
        addEventListener(e, t) {
          this.eventCallbacks.has(e) || this.eventCallbacks.set(e, new Set), this.eventCallbacks.get(e)?.add(t)
        }
        removeEventListener(e, t) {
          this.eventCallbacks.has(e) && this.eventCallbacks.get(e)?.delete(t)
        }
        dispatch(e, t) {
          const n = t || new Event(e);
          return this.eventCallbacks.get(e)?.forEach(e => e(n)), n
        }
      }
      class $a {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", ra(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [n, r]
          } = e, o = t > 1, i = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && i && !o ? (this.setPanWithFriction("y", this.slide.pan.y + r, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && i ? this.setPanWithFriction("x", this.slide.pan.x + n, .35) : (this.setPanWithFriction("x", this.slide.pan.x + n), this.setPanWithFriction("y", this.slide.pan.y + r))
        }
        end(e) {
          const t = e.touches > 1;
          this.slide && this.slide.currZoomLevel > this.slide.zoomLevels.max || t || (this.finishPanGestureForAxis("x", e), this.finishPanGestureForAxis("y", e))
        }
        handleTap({
          event: e,
          xy: [t, n]
        }) {
          const r = {
              x: t,
              y: n
            },
            o = e;
          if (o.type.includes("cancel")) return;
          const i = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r)
          })(this.prevTap, r) < 25 && this.slide.tapHandler.doubleTap(r, o)) : (ra(this.prevTap, {
            x: t,
            y: n
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(r, o), this.clearTapTimer()
          }, i))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [n, r]
          } = t, o = "x" === e ? n : r, i = this.slide.pan[e], s = i + o;
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(i),
              t = this.getVerticalDragRatio(s);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const a = this.slide.bounds.correctPan(e, s);
          i !== a && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = a)
        }
        setPanWithFriction(e, t, n) {
          if (this.slide.bounds.correctPan(e, t) !== t || n) {
            const r = Math.round(t - this.slide.pan[e]);
            this.slide.pan[e] += r * (n || .35)
          } else this.slide.pan[e] = t
        }
        getVerticalDragRatio(e) {
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.y / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class Xa {
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
          e.src = this.thumbnail.currentSrc ?? "", await ta(e)
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
            n = this.slide.panAreaSize.x / e,
            r = this.slide.panAreaSize.y / t;
          this.width = r > n ? this.slide.panAreaSize.x : e * r, this.height = n > r ? this.slide.panAreaSize.y : t * n
        }
      }
      class Ha {
        slide;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleWheel({
          ctrlKey: e,
          event: t,
          delta: [n, r]
        }) {
          if (e) {
            let e = -r;
            1 === t.deltaMode ? e *= .05 : e *= t.deltaMode ? 1 : .002, e = 2 ** e;
            const n = this.slide.currZoomLevel * e;
            this.slide.zoomTo(n, {
              x: t.x,
              y: t.y
            })
          } else 1 === t.deltaMode && (n *= 18, r *= 18), this.slide.panTo(this.slide.pan.x - n, this.slide.pan.y - r)
        }
      }
      class Ua extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, n, r) {
          super(e), this.point = n, this.tapTarget = t, this.originalEvent = r
        }
      }
      class Za extends Wa {
        slide;
        options;
        constructor({
          slide: e,
          options: t
        }) {
          super(), this.slide = e, this.options = t
        }
        click(e, t) {
          const n = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("click", n, e, t)
        }
        tap(e, t) {
          const n = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("tap", n, e, t)
        }
        doubleTap(e, t) {
          const n = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("doubleTap", n, e, t)
        }
        doClickOrTapAction(e, t, n, r) {
          if (!this.dispatch(e, new Ua(e, t, n, r)).defaultPrevented) switch (this.options[e]) {
            case "none":
              break;
            case "close":
              this.slide.dispatch("close");
              break;
            case "zoom":
              this.slide.toggleZoom(n), this.slide.dispatch("animate");
              break;
            case "toggle-controls":
              this.slide.dispatch("toggle-controls");
              break;
            case "zoom-or-close":
              this.slide.currZoomLevel === this.slide.zoomLevels.initial ? this.slide.dispatch("close") : (this.slide.toggleZoom(n), this.slide.dispatch("animate"))
          }
        }
      }
      class Ka {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = na(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, ra(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const n = this.slide.zoomLevels.min,
            r = this.slide.zoomLevels.max;
          this.zoomPoint = na(e);
          let o = 1 / this.startZoomDistance * t * this.startZoomLevel;
          o > this.slide.zoomLevels.initial + this.slide.zoomLevels.initial / 15 && (this.wasOverFitZoomLevel = !0), o < n ? this.slide.pinchToClose && !this.wasOverFitZoomLevel && this.startZoomLevel <= this.slide.zoomLevels.initial ? this.slide.updateOverlayOpacity(1 - (n - o) / (n / 1.2)) : o = n - .15 * (n - o) : o > r && (o = r + .05 * (o - r)), this.slide.pan.x = this.calculatePanForZoomLevel("x", o), this.slide.pan.y = this.calculatePanForZoomLevel("y", o), this.slide.setZoomLevel(o, o >= this.slide.zoomLevels.initial)
        }
        end() {
          this.slide.currZoomLevel < this.slide.zoomLevels.initial && !this.wasOverFitZoomLevel && this.slide.pinchToClose ? (this.animate = !1, this.slide.dispatch("close")) : this.correctZoomPan()
        }
        calculatePanForZoomLevel(e, t) {
          const n = t / this.startZoomLevel;
          return this.zoomPoint[e] - (this.startZoomPoint[e] - this.startPan[e]) * n
        }
        correctZoomPan(e) {
          0 === this.zoomPoint.x && (e = !0);
          const t = this.slide.currZoomLevel;
          let n, r = !0;
          t < this.slide.zoomLevels.initial ? n = this.slide.zoomLevels.initial : t > this.slide.zoomLevels.max ? n = this.slide.zoomLevels.max : (r = !1, n = t), this.slide.getControlsOpacity();
          const o = this.slide.getControlsOpacity() < 1,
            i = ra({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = ra({
            x: 0,
            y: 0
          }, i);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, ra(this.startPan, i)), r && (s = {
            x: this.calculatePanForZoomLevel("x", n),
            y: this.calculatePanForZoomLevel("y", n)
          }), this.slide.setZoomLevel(n, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((a = s).x !== l.x || a.y !== l.y || r || o) && (ra(this.slide.pan, s), this.slide.setZoomLevel(n))
        }
      }
      class Ga {
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
      class Ya extends Wa {
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
          zoomLevelOptions: n,
          actionOptions: r,
          panAreaOptions: o,
          dragOptions: i
        }) {
          super(), this.width = e, this.height = t, this.opener = new Xa({
            slide: this
          }), this.bounds = new Ba({
            slide: this
          }), this.dragHandler = new $a({
            options: i,
            slide: this
          }), this.scrollWheel = new Ha({
            slide: this
          }), this.zoomHandler = new Ka({
            slide: this
          }), this.zoomLevels = new qa({
            options: n
          }), this.tapHandler = new Za({
            options: r,
            slide: this
          }), this.panAreaSize = new Ga({
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
        panTo(e, t, n) {
          this.pan.x = this.bounds.correctPan("x", e, n), this.pan.y = this.bounds.correctPan("y", t, n)
        }
        zoomTo(e, t, n) {
          const r = this.currZoomLevel;
          n || (e = ia(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, r), this.pan.y = this.calculateZoomToPanOffset("y", t, r), oa(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            n = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(n), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), oa(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), ra(this.pan, this.bounds.center)
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
        calculateZoomToPanOffset(e, t, n) {
          if (0 === this.bounds.max[e] - this.bounds.min[e]) return this.bounds.center[e];
          t || (t = this.getPanAreaCenterPoint()), n || (n = this.zoomLevels.initial);
          const r = this.currZoomLevel / n;
          return this.bounds.correctPan(e, (this.pan[e] - t[e]) * r + t[e])
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
      var Qa = n(30865);
      const Ja = e => "dark" === e ? Qa.xW.dark : Qa.xW.light,
        el = (0, za.YK)({
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
      var tl = "foundry_bc732x1";
      const nl = (0, B.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: n
      }, r) => (Oa(e, e => n?.(e), [n]), (0, O.jsx)(ze, {
        size: "XS",
        className: (0, J.$)("foundry_bc732x0", {
          [tl]: t
        }),
        asChild: !0,
        children: (0, O.jsx)("kbd", {
          ref: r,
          children: e
        })
      })));
      var rl = bl(),
        ol = e => ml(e, rl),
        il = bl();
      ol.write = e => ml(e, il);
      var sl = bl();
      ol.onStart = e => ml(e, sl);
      var al = bl();
      ol.onFrame = e => ml(e, al);
      var ll = bl();
      ol.onFinish = e => ml(e, ll);
      var cl = [];
      ol.setTimeout = (e, t) => {
        const n = ol.now() + t,
          r = () => {
            const e = cl.findIndex(e => e.cancel == r);
            ~e && cl.splice(e, 1), pl -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return cl.splice(ul(n), 0, o), pl += 1, vl(), o
      };
      var ul = e => ~(~cl.findIndex(t => t.time > e) || ~cl.length);
      ol.cancel = e => {
        sl.delete(e), al.delete(e), ll.delete(e), rl.delete(e), il.delete(e)
      }, ol.sync = e => {
        hl = !0, ol.batchedUpdates(e), hl = !1
      }, ol.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, ol.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          sl.delete(n), t = null
        }, r
      };
      var dl = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      ol.use = e => dl = e, ol.now = "undefined" != typeof performance ? () => performance.now() : Date.now, ol.batchedUpdates = e => e(), ol.catch = console.error, ol.frameLoop = "always", ol.advance = () => {
        "demand" !== ol.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : gl()
      };
      var fl = -1,
        pl = 0,
        hl = !1;

      function ml(e, t) {
        hl ? (t.delete(e), e(0)) : (t.add(e), vl())
      }

      function vl() {
        fl < 0 && (fl = 0, "demand" !== ol.frameLoop && dl(yl))
      }

      function yl() {
        ~fl && (dl(yl), ol.batchedUpdates(gl))
      }

      function gl() {
        const e = fl;
        fl = ol.now();
        const t = ul(fl);
        t && (wl(cl.splice(0, t), e => e.handler()), pl -= t), pl ? (sl.flush(), rl.flush(e ? Math.min(64, fl - e) : 16.667), al.flush(), il.flush(), ll.flush()) : fl = -1
      }

      function bl() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            pl += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (pl -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, pl -= t.size, wl(t, t => t(n) && e.add(t)), pl += e.size, t = e)
          }
        }
      }

      function wl(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            ol.catch(e)
          }
        })
      }
      var _l = Object.defineProperty,
        xl = {};

      function Cl() {}((e, t) => {
        for (var n in t) _l(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(xl, {
        assign: () => zl,
        colors: () => Il,
        createStringInterpolator: () => El,
        skipAnimation: () => Ml,
        to: () => Tl,
        willAdvance: () => Al
      });
      var Ol = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function jl(e, t) {
        if (Ol.arr(e)) {
          if (!Ol.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var Sl = (e, t) => e.forEach(t);

      function Pl(e, t, n) {
        if (Ol.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var Rl = e => Ol.und(e) ? [] : Ol.arr(e) ? e : [e];

      function kl(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), Sl(n, t)
        }
      }
      var El, Tl, Nl = (e, ...t) => kl(e, e => e(...t)),
        Dl = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Il = null,
        Ml = !1,
        Al = Cl,
        zl = e => {
          e.to && (Tl = e.to), e.now && (ol.now = e.now), void 0 !== e.colors && (Il = e.colors), null != e.skipAnimation && (Ml = e.skipAnimation), e.createStringInterpolator && (El = e.createStringInterpolator), e.requestAnimationFrame && ol.use(e.requestAnimationFrame), e.batchedUpdates && (ol.batchedUpdates = e.batchedUpdates), e.willAdvance && (Al = e.willAdvance), e.frameLoop && (ol.frameLoop = e.frameLoop)
        },
        Ll = new Set,
        Vl = [],
        Fl = [],
        Bl = 0,
        ql = {
          get idle() {
            return !Ll.size && !Vl.length
          },
          start(e) {
            Bl > e.priority ? (Ll.add(e), ol.onStart(Wl)) : ($l(e), ol(Hl))
          },
          advance: Hl,
          sort(e) {
            if (Bl) ol.onFrame(() => ql.sort(e));
            else {
              const t = Vl.indexOf(e);
              ~t && (Vl.splice(t, 1), Xl(e))
            }
          },
          clear() {
            Vl = [], Ll.clear()
          }
        };

      function Wl() {
        Ll.forEach($l), Ll.clear(), ol(Hl)
      }

      function $l(e) {
        Vl.includes(e) || Xl(e)
      }

      function Xl(e) {
        Vl.splice(function(t) {
          const n = t.findIndex(t => t.priority > e.priority);
          return n < 0 ? t.length : n
        }(Vl), 0, e)
      }

      function Hl(e) {
        const t = Fl;
        for (let n = 0; n < Vl.length; n++) {
          const r = Vl[n];
          Bl = r.priority, r.idle || (Al(r), r.advance(e), r.idle || t.push(r))
        }
        return Bl = 0, (Fl = Vl).length = 0, (Vl = t).length > 0
      }
      var Ul = "[-+]?\\d*\\.?\\d+",
        Zl = Ul + "%";

      function Kl(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Gl = new RegExp("rgb" + Kl(Ul, Ul, Ul)),
        Yl = new RegExp("rgba" + Kl(Ul, Ul, Ul, Ul)),
        Ql = new RegExp("hsl" + Kl(Ul, Zl, Zl)),
        Jl = new RegExp("hsla" + Kl(Ul, Zl, Zl, Ul)),
        ec = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        tc = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        nc = /^#([0-9a-fA-F]{6})$/,
        rc = /^#([0-9a-fA-F]{8})$/;

      function oc(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function ic(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = oc(o, r, e + 1 / 3),
          s = oc(o, r, e),
          a = oc(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function sc(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ac(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function lc(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function cc(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function uc(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = nc.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Il && void 0 !== Il[e] ? Il[e] : (t = Gl.exec(e)) ? (sc(t[1]) << 24 | sc(t[2]) << 16 | sc(t[3]) << 8 | 255) >>> 0 : (t = Yl.exec(e)) ? (sc(t[1]) << 24 | sc(t[2]) << 16 | sc(t[3]) << 8 | lc(t[4])) >>> 0 : (t = ec.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = rc.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = tc.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Ql.exec(e)) ? (255 | ic(ac(t[1]), cc(t[2]), cc(t[3]))) >>> 0 : (t = Jl.exec(e)) ? (ic(ac(t[1]), cc(t[2]), cc(t[3])) | lc(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var dc = (e, t, n) => {
          if (Ol.fun(e)) return e;
          if (Ol.arr(e)) return dc({
            range: e,
            output: t,
            extrapolate: n
          });
          if (Ol.str(e.output[0])) return El(e);
          const r = e,
            o = r.output,
            i = r.range || [0, 1],
            s = r.extrapolateLeft || r.extrapolate || "extend",
            a = r.extrapolateRight || r.extrapolate || "extend",
            l = r.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, i);
            return function(e, t, n, r, o, i, s, a, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === s) return c;
                "clamp" === s && (c = t)
              }
              if (c > n) {
                if ("identity" === a) return c;
                "clamp" === a && (c = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = i(c), r === -1 / 0 ? c = -c : o === 1 / 0 ? c += r : c = c * (o - r) + r, c)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, s, a, r.map)
          }
        },
        fc = 1.70158,
        pc = 1.525 * fc,
        hc = fc + 1,
        mc = 2 * Math.PI / 3,
        vc = 2 * Math.PI / 4.5,
        yc = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        gc = {
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
          easeInBack: e => hc * e * e * e - fc * e * e,
          easeOutBack: e => 1 + hc * Math.pow(e - 1, 3) + fc * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - pc) / 2 : (Math.pow(2 * e - 2, 2) * ((pc + 1) * (2 * e - 2) + pc) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * mc),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * mc) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * vc) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * vc) / 2 + 1,
          easeInBounce: e => 1 - yc(1 - e),
          easeOutBounce: yc,
          easeInOutBounce: e => e < .5 ? (1 - yc(1 - 2 * e)) / 2 : (1 + yc(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        bc = Symbol.for("FluidValue.get"),
        wc = Symbol.for("FluidValue.observers"),
        _c = e => Boolean(e && e[bc]),
        xc = e => e && e[bc] ? e[bc]() : e,
        Cc = e => e[wc] || null;

      function Oc(e, t) {
        const n = e[wc];
        n && n.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var jc = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Sc(this, e)
          }
        },
        Sc = (e, t) => Ec(e, bc, t);

      function Pc(e, t) {
        if (e[bc]) {
          let n = e[wc];
          n || Ec(e, wc, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Rc(e, t) {
        const n = e[wc];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[wc] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var kc, Ec = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Tc = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Nc = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Dc = new RegExp(`(${Tc.source})(%|[a-z]+)`, "i"),
        Ic = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Mc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Ac = e => {
          const [t, n] = zc(e);
          if (!t || Dl()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && Mc.test(n) ? Ac(n) : n || e
        },
        zc = e => {
          const t = Mc.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        Lc = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        Vc = e => {
          kc || (kc = Il ? new RegExp(`(${Object.keys(Il).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => xc(e).replace(Mc, Ac).replace(Nc, uc).replace(kc, uc)),
            n = t.map(e => e.match(Tc).map(Number)),
            r = n[0].map((e, t) => n.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = r.map(t => dc({
              ...e,
              output: t
            }));
          return e => {
            const n = !Dc.test(t[0]) && t.find(e => Dc.test(e))?.replace(Tc, "");
            let r = 0;
            return t[0].replace(Tc, () => `${o[r++](e)}${n||""}`).replace(Ic, Lc)
          }
        },
        Fc = "react-spring: ",
        Bc = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Fc}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        qc = Bc(console.warn),
        Wc = Bc(console.warn);

      function $c(e) {
        return Ol.str(e) && ("#" == e[0] || /\d/.test(e) || !Dl() && Mc.test(e) || e in (Il || {}))
      }
      var Xc = Dl() ? B.useEffect : B.useLayoutEffect;

      function Hc() {
        const e = (0, B.useState)()[1],
          t = (() => {
            const e = (0, B.useRef)(!1);
            return Xc(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Uc = e => (0, B.useEffect)(e, Zc),
        Zc = [],
        Kc = Symbol.for("Animated:node"),
        Gc = e => e && e[Kc],
        Yc = (e, t) => {
          return n = e, r = Kc, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        Qc = e => e && e[Kc] && e[Kc].getPayload(),
        Jc = class {
          constructor() {
            Yc(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        eu = class e extends Jc {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Ol.num(this._value) && (this.lastPosition = this._value)
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
            return Ol.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Ol.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        tu = class e extends eu {
          constructor(e) {
            super(0), this._string = null, this._toString = dc({
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
            if (Ol.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = dc({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        nu = {
          dependencies: null
        },
        ru = class extends Jc {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Pl(this.source, (n, r) => {
              var o;
              (o = n) && o[Kc] === o ? t[r] = n.getValue(e) : _c(n) ? t[r] = xc(n) : e || (t[r] = n)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Sl(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Pl(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            nu.dependencies && _c(e) && nu.dependencies.add(e);
            const t = Qc(e);
            t && Sl(t, e => this.add(e))
          }
        },
        ou = class e extends ru {
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
            return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(iu)), !0)
          }
        };

      function iu(e) {
        return ($c(e) ? tu : eu).create(e)
      }

      function su(e) {
        const t = Gc(e);
        return t ? t.constructor : Ol.arr(e) ? ou : $c(e) ? tu : eu
      }
      var au = (e, t) => {
          const n = !Ol.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, B.forwardRef)((r, o) => {
            const i = (0, B.useRef)(null),
              s = n && (0, B.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (Ol.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const n = new Set;
                return nu.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new ru(e), nu.dependencies = null, [e, n]
              }(r, t),
              c = Hc(),
              u = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && c()
              },
              d = new lu(u, l),
              f = (0, B.useRef)(void 0);
            Xc(() => (f.current = d, Sl(l, e => Pc(e, d)), () => {
              f.current && (Sl(f.current.deps, e => Rc(e, f.current)), ol.cancel(f.current.update))
            })), (0, B.useEffect)(u, []), Uc(() => () => {
              const e = f.current;
              Sl(e.deps, t => Rc(t, e))
            });
            const p = t.getComponentProps(a.getValue());
            return B.createElement(e, {
              ...p,
              ref: s
            })
          })
        },
        lu = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && ol.write(this.update)
          }
        },
        cu = Symbol.for("AnimatedComponent"),
        uu = e => Ol.str(e) ? e : e && Ol.str(e.displayName) ? e.displayName : Ol.fun(e) && e.name || null;

      function du(e, ...t) {
        return Ol.fun(e) ? e(...t) : e
      }
      var fu = (e, t) => !0 === e || !!(t && e && (Ol.fun(e) ? e(t) : Rl(e).includes(t))),
        pu = (e, t) => Ol.obj(e) ? t && e[t] : e,
        hu = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        mu = e => e,
        vu = (e, t = mu) => {
          let n = yu;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            Ol.und(n) || (r[o] = n)
          }
          return r
        },
        yu = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        gu = {
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

      function bu(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (Pl(e, (e, r) => {
              gu[r] || (t[r] = e, n++)
            }), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return Pl(e, (e, r) => r in t || (n[r] = e)), n
        }
        return {
          ...e
        }
      }

      function wu(e) {
        return e = xc(e), Ol.arr(e) ? e.map(wu) : $c(e) ? xl.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function _u(e) {
        return Ol.fun(e) || Ol.arr(e) && Ol.obj(e[0])
      }

      function xu(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var Cu = {
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
        Ou = {
          ...Cu.default,
          mass: 1,
          damping: 1,
          easing: gc.linear,
          clamp: !1
        },
        ju = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Ou)
          }
        };

      function Su(e, t) {
        if (Ol.und(t.decay)) {
          const n = !Ol.und(t.tension) || !Ol.und(t.friction);
          !n && Ol.und(t.frequency) && Ol.und(t.damping) && Ol.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Pu = [],
        Ru = class {
          constructor() {
            this.changed = !1, this.values = Pu, this.toValues = null, this.fromValues = Pu, this.config = new ju, this.immediate = !1
          }
        };

      function ku(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, c, u = fu(n.cancel ?? r?.cancel, t);
          if (u) p();
          else {
            Ol.und(n.pause) || (o.paused = fu(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || fu(e, t)), l = du(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - ol.now()
          }

          function f() {
            l > 0 && !xl.skipAnimation ? (o.delayed = !0, c = ol.setTimeout(p, l), o.pauseQueue.add(d), o.timeouts.add(c)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              i.start({
                ...n,
                callId: e,
                cancel: u
              }, s)
            } catch (e) {
              a(e)
            }
          }
        })
      }
      var Eu = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? Du(e.get()) : t.every(e => e.noop) ? Tu(e.get()) : Nu(e.get(), t.every(e => e.finished)),
        Tu = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Nu = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Du = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Iu(e, t, n, r) {
        const {
          callId: o,
          parentId: i,
          onRest: s
        } = t, {
          asyncTo: a,
          promise: l
        } = n;
        return i || e !== a || t.reset ? n.promise = (async () => {
          n.asyncId = o, n.asyncTo = e;
          const c = vu(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            p = e => {
              const t = o <= (n.cancelId || 0) && Du(r) || o !== n.asyncId && Nu(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            h = (e, t) => {
              const i = new Au,
                s = new zu;
              return (async () => {
                if (xl.skipAnimation) throw Mu(n), s.result = Nu(r, !1), d(s), s;
                p(i);
                const a = Ol.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, Pl(c, (e, t) => {
                  Ol.und(a[t]) && (a[t] = e)
                });
                const l = await r.start(a);
                return p(i), n.paused && await new Promise(e => {
                  n.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (xl.skipAnimation) return Mu(n), Nu(r, !1);
          try {
            let t;
            t = Ol.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([t.then(u), f]), m = Nu(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof Au) m = e.result;
            else {
              if (!(e instanceof zu)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? l : void 0)
          }
          return Ol.fun(s) && ol.batchedUpdates(() => {
            s(m, r, r.item)
          }), m
        })() : l
      }

      function Mu(e, t) {
        kl(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Au = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        zu = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Lu = e => e instanceof Fu,
        Vu = 1,
        Fu = class extends jc {
          constructor() {
            super(...arguments), this.id = Vu++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Gc(this);
            return e && e.getValue()
          }
          to(...e) {
            return xl.to(this, e)
          }
          interpolate(...e) {
            return qc(`${Fc}The "interpolate" function is deprecated in v9 (use "to" instead)`), xl.to(this, e)
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
            Oc(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || ql.sort(this), Oc(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Bu = Symbol.for("SpringPhase"),
        qu = e => (1 & e[Bu]) > 0,
        Wu = e => (2 & e[Bu]) > 0,
        $u = e => (4 & e[Bu]) > 0,
        Xu = (e, t) => t ? e[Bu] |= 3 : e[Bu] &= -3,
        Hu = (e, t) => t ? e[Bu] |= 4 : e[Bu] &= -5,
        Uu = class extends Fu {
          constructor(e, t) {
            if (super(), this.animation = new Ru, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Ol.und(e) || !Ol.und(t)) {
              const n = Ol.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Ol.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(Wu(this) || this._state.asyncTo) || $u(this)
          }
          get goal() {
            return xc(this.animation.to)
          }
          get velocity() {
            const e = Gc(this);
            return e instanceof eu ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return qu(this)
          }
          get isAnimating() {
            return Wu(this)
          }
          get isPaused() {
            return $u(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              n = !1;
            const r = this.animation;
            let {
              toValues: o
            } = r;
            const {
              config: i
            } = r, s = Qc(r.to);
            !s && _c(r.to) && (o = Rl(xc(r.to))), r.values.forEach((a, l) => {
              if (a.done) return;
              const c = a.constructor == tu ? 1 : s ? s[l].lastPosition : o[l];
              let u = r.immediate,
                d = c;
              if (!u) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = Ol.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (Ol.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), u = Math.abs(a.lastPosition - d) <= f, s = o * r
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !Ol.und(r),
                      p = n == c ? a.v0 > 0 : n < c;
                    let h, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (h = Math.abs(s) > t, h || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == p, m && (s = -s * r, d = c)), s += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * s) / i.mass * v, d += s * v
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, a.durationProgress = r), d = n + i.easing(r) * (c - n), s = (d - a.lastPosition) / e, u = 1 == r
                }
                a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              s && !s[l].done && (u = !1), u ? a.done = !0 : t = !1, a.setValue(d, i.round) && (n = !0)
            });
            const a = Gc(this),
              l = a.getValue();
            if (t) {
              const e = xc(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return ol.batchedUpdates(() => {
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
            if (Wu(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              ol.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              })
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let n;
            return Ol.und(e) ? (n = this.queue || [], this.queue = []) : n = [Ol.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map(e => this._update(e))).then(e => Eu(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), Mu(this._state, e && this._lastCallId), ol.batchedUpdates(() => this._stop(t, e)), this
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
              to: n,
              from: r
            } = e;
            n = Ol.obj(n) ? n[t] : n, (null == n || _u(n)) && (n = void 0), r = Ol.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return qu(this) || (e.reverse && ([n, r] = [r, n]), r = xc(r), Ol.und(r) ? Gc(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, vu(e, (e, t) => /^on/.test(t) ? pu(e, n) : e)), Ju(this, e, "onProps"), ed(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return ku(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  $u(this) || (Hu(this, !0), Nl(i.pauseQueue), ed(this, "onPause", Nu(this, Zu(this, this.animation.to)), this))
                },
                resume: () => {
                  $u(this) && (Hu(this, !1), Wu(this) && this._resume(), Nl(i.resumeQueue), ed(this, "onResume", Nu(this, Zu(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = Ku(e);
                if (t) return this._update(t, !0)
              }
              return n
            })
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(Du(this));
            const r = !Ol.und(e.to),
              o = !Ol.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(Du(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: s,
              animation: a
            } = this, {
              to: l,
              from: c
            } = a;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || r || t.default && !Ol.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !jl(d, c);
            f && (a.from = d), d = xc(d);
            const p = !jl(u, l);
            p && this._focus(u);
            const h = _u(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (r || o) && (m.velocity = 0), t.config && !h && function(e, t, n) {
              n && (Su(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Su(e, t), Object.assign(e, t);
              for (const t in Ou) null == e[t] && (e[t] = Ou[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Ol.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, du(t.config, i), t.config !== s.config ? du(s.config, i) : void 0);
            let g = Gc(this);
            if (!g || Ol.und(u)) return n(Nu(this, !0));
            const b = Ol.und(t.reset) ? o && !t.default : !Ol.und(d) && fu(t.reset, i),
              w = b ? d : this.get(),
              _ = wu(u),
              x = Ol.num(_) || Ol.arr(_) || $c(_),
              C = !h && (!x || fu(s.immediate || t.immediate, i));
            if (p) {
              const e = su(u);
              if (e !== g.constructor) {
                if (!C) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const O = g.constructor;
            let j = _c(u),
              S = !1;
            if (!j) {
              const e = b || !qu(this) && f;
              (p || e) && (S = jl(wu(w), _), j = !S), (jl(a.immediate, C) || C) && jl(m.decay, v) && jl(m.velocity, y) || (j = !0)
            }
            if (S && Wu(this) && (a.changed && !b ? j = !0 : j || this._stop(l)), !h && ((j || _c(l)) && (a.values = g.getPayload(), a.toValues = _c(u) ? null : O == tu ? [1] : Rl(_)), a.immediate != C && (a.immediate = C, C || b || this._set(l)), j)) {
              const {
                onRest: e
              } = a;
              Sl(Qu, e => Ju(this, t, e));
              const r = Nu(this, Zu(this, l));
              Nl(this._pendingCalls, r), this._pendingCalls.add(n), a.changed && ol.batchedUpdates(() => {
                a.changed = !b, e?.(r, this), b ? du(s.onRest, r) : a.onStart?.(r, this)
              })
            }
            b && this._set(w), h ? n(Iu(t.to, t, this._state, this)) : j ? this._start() : Wu(this) && !p ? this._pendingCalls.add(n) : n(Tu(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Cc(this) && this._detach(), t.to = e, Cc(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            _c(t) && (Pc(t, this), Lu(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            _c(e) && Rc(e, this)
          }
          _set(e, t = !0) {
            const n = xc(e);
            if (!Ol.und(n)) {
              const e = Gc(this);
              if (!e || !jl(n, e.getValue())) {
                const r = su(n);
                e && e.constructor == r ? e.setValue(n) : Yc(this, r.create(n)), e && ol.batchedUpdates(() => {
                  this._onChange(n, t)
                })
              }
            }
            return Gc(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, ed(this, "onStart", Nu(this, Zu(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), du(this.animation.onChange, e, this)), du(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Gc(this).reset(xc(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Wu(this) || (Xu(this, !0), $u(this) || this._resume())
          }
          _resume() {
            xl.skipAnimation ? this.finish() : ql.start(this)
          }
          _stop(e, t) {
            if (Wu(this)) {
              Xu(this, !1);
              const n = this.animation;
              Sl(n.values, e => {
                e.done = !0
              }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Oc(this, {
                type: "idle",
                parent: this
              });
              const r = t ? Du(this.get()) : Nu(this.get(), Zu(this, e ?? n.to));
              Nl(this._pendingCalls, r), n.changed && (n.changed = !1, ed(this, "onRest", r, this))
            }
          }
        };

      function Zu(e, t) {
        const n = wu(t);
        return jl(wu(e.get()), n)
      }

      function Ku(e, t = e.loop, n = e.to) {
        const r = du(t);
        if (r) {
          const o = !0 !== r && bu(r),
            i = (o || e).reverse,
            s = !o || o.reset;
          return Gu({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || _u(n) ? n : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function Gu(e) {
        const {
          to: t,
          from: n
        } = e = bu(e), r = new Set;
        return Ol.obj(t) && Yu(t, r), Ol.obj(n) && Yu(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function Yu(e, t) {
        Pl(e, (e, n) => null != e && t.add(n))
      }
      var Qu = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Ju(e, t, n) {
        e.animation[n] = t[n] !== hu(t, n) ? pu(t[n], e.key) : void 0
      }

      function ed(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var td = ["onStart", "onChange", "onRest"],
        nd = 1,
        rd = class {
          constructor(e, t) {
            this.id = nd++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return this.each((t, n) => e[n] = t.get()), e
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              Ol.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(Gu(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Rl(e).map(Gu) : this.queue = [], this._flush ? this._flush(this, t) : (ld(this, t), function(e, t) {
              return Promise.all(t.map(t => od(e, t))).then(t => Eu(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              Sl(Rl(t), t => n[t].stop(!!e))
            } else Mu(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (Ol.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Sl(Rl(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (Ol.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Sl(Rl(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            Pl(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, kl(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !r && this._started,
              s = o || i && n.size ? this.get() : null;
            o && t.size && kl(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, kl(n, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            ol.onFrame(this._onFrame)
          }
        };
      async function od(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, c = Ol.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = Ol.arr(o) || Ol.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Sl(td, n => {
          const r = t[n];
          if (Ol.fun(r)) {
            const o = e._events[n];
            t[n] = ({
              finished: e,
              cancelled: t
            }) => {
              const n = o.get(r);
              n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : o.set(r, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, c && (c[n] = t[n])
          }
        });
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Nl(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map(n => e.springs[n].start(t)),
          p = !0 === t.cancel || !0 === hu(t, "cancel");
        (u || p && d.asyncId) && f.push(ku(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Cl,
            resume: Cl,
            start(t, n) {
              p ? (Mu(d, e._lastAsyncId), n(Du(e))) : (t.onRest = a, n(Iu(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const h = Eu(e, await Promise.all(f));
        if (s && h.finished && (!n || !h.noop)) {
          const n = Ku(t, s, o);
          if (n) return ld(e, [n]), od(e, n, !0)
        }
        return l && ol.batchedUpdates(() => l(h, e, e.item)), h
      }

      function id(e, t) {
        const n = {
          ...e.springs
        };
        return t && Sl(Rl(t), e => {
            Ol.und(e.keys) && (e = Gu(e)), Ol.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), ad(n, e, e => sd(e))
          }),
          function(e, t) {
            Pl(t, (t, n) => {
              e.springs[n] || (e.springs[n] = t, Pc(t, e))
            })
          }(e, n), n
      }

      function sd(e, t) {
        const n = new Uu;
        return n.key = e, t && Pc(n, t), n
      }

      function ad(e, t, n) {
        t.keys && Sl(t.keys, r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        })
      }

      function ld(e, t) {
        Sl(t, t => {
          ad(e.springs, t, t => sd(t, e))
        })
      }
      var cd = B.createContext({
          pause: !1,
          immediate: !1
        }),
        ud = () => {
          const e = [],
            t = function(t) {
              Wc(`${Fc}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const r = [];
              return Sl(e, (e, o) => {
                if (Ol.und(t)) r.push(e.start());
                else {
                  const i = n(t, e, o);
                  i && r.push(e.start(i))
                }
              }), r
            };
          t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
          }, t.delete = function(t) {
            const n = e.indexOf(t);
            ~n && e.splice(n, 1)
          }, t.pause = function() {
            return Sl(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return Sl(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            Sl(e, (e, n) => {
              const r = Ol.fun(t) ? t(n, e) : t;
              r && e.set(r)
            })
          }, t.start = function(t) {
            const n = [];
            return Sl(e, (e, r) => {
              if (Ol.und(t)) n.push(e.start());
              else {
                const o = this._getProps(t, e, r);
                o && n.push(e.start(o))
              }
            }), n
          }, t.stop = function() {
            return Sl(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return Sl(e, (e, n) => e.update(this._getProps(t, e, n))), this
          };
          const n = function(e, t, n) {
            return Ol.fun(e) ? e(n, t) : e
          };
          return t._getProps = n, t
        },
        dd = () => ud(),
        fd = () => (0, B.useState)(dd)[0];

      function pd(e, t, n) {
        const r = Ol.fun(t) && t,
          {
            reset: o,
            sort: i,
            trail: s = 0,
            expires: a = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: c,
            ref: u,
            config: d
          } = r ? r() : t,
          f = (0, B.useMemo)(() => r || 3 == arguments.length ? ud() : void 0, []),
          p = Rl(e),
          h = [],
          m = (0, B.useRef)(null),
          v = o ? null : m.current;
        Xc(() => {
          m.current = h
        }), Uc(() => (Sl(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          Sl(m.current, e => {
            e.expired && clearTimeout(e.expirationId), xu(e.ctrl, f), e.ctrl.stop(!0)
          })
        }));
        const y = function(e, {
            key: t,
            keys: n = t
          }, r) {
            if (null === n) {
              const t = new Set;
              return e.map(e => {
                const n = r && r.find(n => n.item === e && "leave" !== n.phase && !t.has(n));
                return n ? (t.add(n), n.key) : hd++
              })
            }
            return Ol.und(n) ? e : Ol.fun(n) ? e.map(n) : Rl(n)
          }(p, r ? r() : t, v),
          g = o && m.current || [];
        Xc(() => Sl(g, ({
          ctrl: e,
          item: t,
          key: n
        }) => {
          xu(e, f), du(c, t, n)
        }));
        const b = [];
        if (v && Sl(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (h[t] = e)
          }), Sl(p, (e, t) => {
            h[t] || (h[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new rd
            }, h[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: n
          } = r ? r() : t;
          Sl(b, (t, r) => {
            const o = v[r];
            ~t ? (e = h.indexOf(o), h[e] = {
              ...o,
              item: p[t]
            }) : n && h.splice(++e, 0, o)
          })
        }
        Ol.fun(i) && h.sort((e, t) => i(e.item, t.item));
        let w = -s;
        const _ = Hc(),
          x = vu(t),
          C = new Map,
          O = (0, B.useRef)(new Map),
          j = (0, B.useRef)(!1);
        Sl(h, (e, n) => {
          const o = e.key,
            i = e.phase,
            c = r ? r() : t;
          let f, p;
          const h = du(c.delay || 0, o);
          if ("mount" == i) f = c.enter, p = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != i)
              if (e) f = c.leave, p = "leave";
              else {
                if (!(f = c.update)) return;
                p = "update"
              }
            else {
              if (e) return;
              f = c.enter, p = "enter"
            }
          }
          if (f = du(f, e.item, n), f = Ol.obj(f) ? bu(f) : {
              to: f
            }, !f.config) {
            const t = d || x.config;
            f.config = du(t, e.item, n, p)
          }
          w += s;
          const g = {
            ...x,
            delay: h + w,
            ref: u,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == p && Ol.und(g.from)) {
            const o = r ? r() : t,
              i = Ol.und(o.initial) || v ? o.from : o.initial;
            g.from = du(i, e.item, n)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            du(b, e);
            const t = m.current,
              n = t.find(e => e.key === o);
            if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == n.phase) {
                const t = du(a, n.item);
                if (!1 !== t) {
                  const r = !0 === t ? 0 : t;
                  if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(_, r)))
                }
              }
              e && t.some(e => e.expired) && (O.current.delete(n), l && (j.current = !0), _())
            }
          };
          const S = id(e.ctrl, g);
          "leave" === p && l ? O.current.set(e, {
            phase: p,
            springs: S,
            payload: g
          }) : C.set(e, {
            phase: p,
            springs: S,
            payload: g
          })
        });
        const S = (0, B.useContext)(cd),
          P = function(e) {
            const t = (0, B.useRef)(void 0);
            return (0, B.useEffect)(() => {
              t.current = e
            }), t.current
          }(S),
          R = S !== P && function(e) {
            for (const t in e) return !0;
            return !1
          }(S);
        Xc(() => {
          R && Sl(h, e => {
            e.ctrl.start({
              default: S
            })
          })
        }, [S]), Sl(C, (e, t) => {
          if (O.current.size) {
            const e = h.findIndex(e => e.key === t.key);
            h.splice(e, 1)
          }
        }), Xc(() => {
          Sl(O.current.size ? O.current : C, ({
            phase: e,
            payload: t
          }, n) => {
            const {
              ctrl: r
            } = n;
            n.phase = e, f?.add(r), R && "enter" == e && r.start({
              default: S
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(r, t.ref), !r.ref && !f || j.current ? (r.start(t), j.current && (j.current = !1)) : r.update(t))
          })
        }, o ? void 0 : n);
        const k = e => B.createElement(B.Fragment, null, h.map((t, n) => {
          const {
            springs: r
          } = C.get(t) || t.ctrl, o = e({
            ...r
          }, t.item, t, n), i = Ol.str(t.key) || Ol.num(t.key) ? t.key : t.ctrl.id, s = B.version < "19.0.0", a = o?.props ?? {}, l = s ? o?.ref : a?.ref;
          return o && o.type ? B.createElement(o.type, {
            ...a,
            key: i,
            ref: l
          }) : o
        }));
        return f ? [k, f] : k
      }
      var hd = 1,
        md = class extends Fu {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = dc(...t);
            const n = this._get(),
              r = su(n);
            Yc(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            jl(t, this.get()) || (Gc(this).setValue(t), this._onChange(t, this.idle)), !this.idle && yd(this._active) && gd(this)
          }
          _get() {
            const e = Ol.arr(this.source) ? this.source.map(xc) : Rl(xc(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !yd(this._active) && (this.idle = !1, Sl(Qc(this), e => {
              e.done = !1
            }), xl.skipAnimation ? (ol.batchedUpdates(() => this.advance()), gd(this)) : ql.start(this))
          }
          _attach() {
            let e = 1;
            Sl(Rl(this.source), t => {
              _c(t) && Pc(t, this), Lu(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            Sl(Rl(this.source), e => {
              _c(e) && Rc(e, this)
            }), this._active.clear(), gd(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Rl(this.source).reduce((e, t) => Math.max(e, (Lu(t) ? t.priority : 0) + 1), 0))
          }
        };

      function vd(e) {
        return !1 !== e.idle
      }

      function yd(e) {
        return !e.size || Array.from(e).every(vd)
      }

      function gd(e) {
        e.idle || (e.idle = !0, Sl(Qc(e), e => {
          e.done = !0
        }), Oc(e, {
          type: "idle",
          parent: e
        }))
      }
      xl.assign({
        createStringInterpolator: Vc,
        to: (e, t) => new md(e, t)
      }), ql.advance;
      var bd = n(86672),
        wd = /^--/;

      function _d(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || wd.test(e) || Cd.hasOwnProperty(e) && Cd[e] ? ("" + t).trim() : t + "px"
      }
      var xd = {},
        Cd = {
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
        Od = ["Webkit", "Ms", "Moz", "O"];
      Cd = Object.keys(Cd).reduce((e, t) => (Od.forEach(n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t]), e), Cd);
      var jd = /^(matrix|translate|scale|rotate|skew)/,
        Sd = /^(translate)/,
        Pd = /^(rotate|skew)/,
        Rd = (e, t) => Ol.num(e) && 0 !== e ? e + t : e,
        kd = (e, t) => Ol.arr(e) ? e.every(e => kd(e, t)) : Ol.num(e) ? e === t : parseFloat(e) === t,
        Ed = class extends ru {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push(e => [`translate3d(${e.map(e=>Rd(e,"px")).join(",")})`, kd(e, 0)])), Pl(r, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (jd.test(t)) {
                if (delete r[t], Ol.und(e)) return;
                const n = Sd.test(t) ? "px" : Pd.test(t) ? "deg" : "";
                o.push(Rl(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Rd(o,n)})`, kd(o, 0)] : e => [`${t}(${e.map(e=>Rd(e,n)).join(",")})`, kd(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (r.transform = new Td(o, i)), super(r)
          }
        },
        Td = class extends jc {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Sl(this.inputs, (n, r) => {
              const o = xc(n[0]),
                [i, s] = this.transforms[r](Ol.arr(o) ? o : n.map(xc));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Sl(this.inputs, e => Sl(e, e => _c(e) && Pc(e, this)))
          }
          observerRemoved(e) {
            0 == e && Sl(this.inputs, e => Sl(e, e => _c(e) && Rc(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Oc(this, e)
          }
        };
      xl.assign({
        batchedUpdates: bd.unstable_batchedUpdates,
        createStringInterpolator: Vc,
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
      var Nd = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new ru(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = uu(e) || "Anonymous";
              return (e = Ol.str(e) ? i[e] || (i[e] = au(e, o)) : e[cu] || (e[cu] = au(e, o))).displayName = `Animated(${t})`, e
            };
          return Pl(e, (t, n) => {
            Ol.arr(e) && (n = uu(t)), i[n] = i(t)
          }), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: r,
                style: o,
                children: i,
                scrollTop: s,
                scrollLeft: a,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => n || e.hasAttribute(t) ? t : xd[t] || (xd[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = _d(t, o[t]);
                wd.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach((t, n) => {
              e.setAttribute(t, u[n])
            }), void 0 !== r && (e.className = r), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new Ed(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        Dd = Nd.animated;

      function Id(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      "undefined" == typeof window || !window.document || window.document.createElement;
      var Md = n(91071);

      function Ad(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function zd(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Ld = Symbol("radix.slottable");

      function Vd(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Ld
      }
      var Fd = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const n = function(e) {
            const t = zd(e),
              n = B.forwardRef((e, n) => {
                const {
                  children: r,
                  ...o
                } = e, i = B.Children.toArray(r), s = i.find(Vd);
                if (s) {
                  const e = s.props.children,
                    r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                  })
                }
                return (0, O.jsx)(t, {
                  ...o,
                  ref: n,
                  children: r
                })
              });
            return n.displayName = `${e}.Slot`, n
          }(`Primitive.${t}`),
          r = B.forwardRef((e, r) => {
            const {
              asChild: o,
              ...i
            } = e, s = o ? n : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
              ...i,
              ref: r
            })
          });
        return r.displayName = `Primitive.${t}`, {
          ...e,
          [t]: r
        }
      }, {});

      function Bd(e) {
        const t = B.useRef(e);
        return B.useEffect(() => {
          t.current = e
        }), B.useMemo(() => (...e) => t.current?.(...e), [])
      }
      var qd, Wd = "dismissableLayer.update",
        $d = B.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Xd = B.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, c = B.useContext($d), [u, d] = B.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, p] = B.useState({}), h = (0, Md.s)(t, e => d(e)), m = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = u ? m.indexOf(u) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= y, _ = function(e, t = globalThis?.document) {
            const n = Bd(e),
              r = B.useRef(!1),
              o = B.useRef(() => {});
            return B.useEffect(() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Zd("dismissableLayer.pointerDownOutside", n, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = r, t.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", o.current);
                  r.current = !1
                },
                i = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }(e => {
            const t = e.target,
              n = [...c.branches].some(e => e.contains(t));
            w && !n && (o?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f), x = function(e, t = globalThis?.document) {
            const n = Bd(e),
              r = B.useRef(!1);
            return B.useEffect(() => {
              const e = e => {
                e.target && !r.current && Zd("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }(e => {
            const t = e.target;
            [...c.branches].some(e => e.contains(t)) || (i?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f);
          return function(e, t = globalThis?.document) {
            const n = Bd(e);
            B.useEffect(() => {
              const e = e => {
                "Escape" === e.key && n(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }, [n, t])
          }(e => {
            g === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), B.useEffect(() => {
            if (u) return n && (0 === c.layersWithOutsidePointerEventsDisabled.size && (qd = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Ud(), () => {
              n && 1 === c.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = qd)
            }
          }, [u, f, n, c]), B.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Ud())
          }, [u, c]), B.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(Wd, e), () => document.removeEventListener(Wd, e)
          }, []), (0, O.jsx)(Fd.div, {
            ...l,
            ref: h,
            style: {
              pointerEvents: b ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Id(e.onFocusCapture, x.onFocusCapture),
            onBlurCapture: Id(e.onBlurCapture, x.onBlurCapture),
            onPointerDownCapture: Id(e.onPointerDownCapture, _.onPointerDownCapture)
          })
        });
      Xd.displayName = "DismissableLayer";
      var Hd = B.forwardRef((e, t) => {
        const n = B.useContext($d),
          r = B.useRef(null),
          o = (0, Md.s)(t, r);
        return B.useEffect(() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, O.jsx)(Fd.div, {
          ...e,
          ref: o
        })
      });

      function Ud() {
        const e = new CustomEvent(Wd);
        document.dispatchEvent(e)
      }

      function Zd(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? function(e, t) {
          e && bd.flushSync(() => e.dispatchEvent(t))
        }(o, i) : o.dispatchEvent(i)
      }
      Hd.displayName = "DismissableLayerBranch";
      var Kd = Xd,
        Gd = Hd,
        Yd = globalThis?.document ? B.useLayoutEffect : () => {},
        Qd = q[" useId ".trim().toString()] || (() => {}),
        Jd = 0;

      function ef(e) {
        const [t, n] = B.useState(Qd());
        return Yd(() => {
          e || n(e => e ?? String(Jd++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
      const tf = ["top", "right", "bottom", "left"],
        nf = Math.min,
        rf = Math.max,
        of = Math.round,
        sf = Math.floor,
        af = e => ({
          x: e,
          y: e
        }),
        lf = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function cf(e, t, n) {
        return rf(e, nf(t, n))
      }

      function uf(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function df(e) {
        return e.split("-")[0]
      }

      function ff(e) {
        return e.split("-")[1]
      }

      function pf(e) {
        return "x" === e ? "y" : "x"
      }

      function hf(e) {
        return "y" === e ? "height" : "width"
      }

      function mf(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
      }

      function vf(e) {
        return pf(mf(e))
      }

      function yf(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
      }
      const gf = ["left", "right"],
        bf = ["right", "left"],
        wf = ["top", "bottom"],
        _f = ["bottom", "top"];

      function xf(e) {
        const t = df(e);
        return lf[t] + e.slice(t.length)
      }

      function Cf(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function Of(e) {
        const {
          x: t,
          y: n,
          width: r,
          height: o
        } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n
        }
      }

      function jf(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = mf(t),
          s = vf(t),
          a = hf(s),
          l = df(t),
          c = "y" === i,
          u = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          f = r[a] / 2 - o[a] / 2;
        let p;
        switch (l) {
          case "top":
            p = {
              x: u,
              y: r.y - o.height
            };
            break;
          case "bottom":
            p = {
              x: u,
              y: r.y + r.height
            };
            break;
          case "right":
            p = {
              x: r.x + r.width,
              y: d
            };
            break;
          case "left":
            p = {
              x: r.x - o.width,
              y: d
            };
            break;
          default:
            p = {
              x: r.x,
              y: r.y
            }
        }
        switch (ff(t)) {
          case "start":
            p[s] -= f * (n && c ? -1 : 1);
            break;
          case "end":
            p[s] += f * (n && c ? -1 : 1)
        }
        return p
      }
      async function Sf(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
          y: o,
          platform: i,
          rects: s,
          elements: a,
          strategy: l
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: f = !1,
          padding: p = 0
        } = uf(t, e), h = Cf(p), m = a[f ? "floating" === d ? "reference" : "floating" : d], v = Of(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: c,
          rootBoundary: u,
          strategy: l
        })), y = "floating" === d ? {
          x: r,
          y: o,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(g)) && await (null == i.getScale ? void 0 : i.getScale(g)) || {
          x: 1,
          y: 1
        }, w = Of(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: y,
          offsetParent: g,
          strategy: l
        }) : y);
        return {
          top: (v.top - w.top + h.top) / b.y,
          bottom: (w.bottom - v.bottom + h.bottom) / b.y,
          left: (v.left - w.left + h.left) / b.x,
          right: (w.right - v.right + h.right) / b.x
        }
      }

      function Pf(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function Rf(e) {
        return tf.some(t => e[t] >= 0)
      }
      const kf = new Set(["left", "top"]);

      function Ef() {
        return "undefined" != typeof window
      }

      function Tf(e) {
        return If(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function Nf(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function Df(e) {
        var t;
        return null == (t = (If(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function If(e) {
        return !!Ef() && (e instanceof Node || e instanceof Nf(e).Node)
      }

      function Mf(e) {
        return !!Ef() && (e instanceof Element || e instanceof Nf(e).Element)
      }

      function Af(e) {
        return !!Ef() && (e instanceof HTMLElement || e instanceof Nf(e).HTMLElement)
      }

      function zf(e) {
        return !(!Ef() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof Nf(e).ShadowRoot)
      }

      function Lf(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = Zf(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== o && "contents" !== o
      }

      function Vf(e) {
        return /^(table|td|th)$/.test(Tf(e))
      }

      function Ff(e) {
        try {
          if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
          return e.matches(":modal")
        } catch (e) {
          return !1
        }
      }
      const Bf = /transform|translate|scale|rotate|perspective|filter/,
        qf = /paint|layout|strict|content/,
        Wf = e => !!e && "none" !== e;
      let $f;

      function Xf(e) {
        const t = Mf(e) ? Zf(e) : e;
        return Wf(t.transform) || Wf(t.translate) || Wf(t.scale) || Wf(t.rotate) || Wf(t.perspective) || !Hf() && (Wf(t.backdropFilter) || Wf(t.filter)) || Bf.test(t.willChange || "") || qf.test(t.contain || "")
      }

      function Hf() {
        return null == $f && ($f = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), $f
      }

      function Uf(e) {
        return /^(html|body|#document)$/.test(Tf(e))
      }

      function Zf(e) {
        return Nf(e).getComputedStyle(e)
      }

      function Kf(e) {
        return Mf(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Gf(e) {
        if ("html" === Tf(e)) return e;
        const t = e.assignedSlot || e.parentNode || zf(e) && e.host || Df(e);
        return zf(t) ? t.host : t
      }

      function Yf(e) {
        const t = Gf(e);
        return Uf(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Af(t) && Lf(t) ? t : Yf(t)
      }

      function Qf(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = Yf(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          s = Nf(o);
        if (i) {
          const e = Jf(s);
          return t.concat(s, s.visualViewport || [], Lf(o) ? o : [], e && n ? Qf(e) : [])
        }
        return t.concat(o, Qf(o, [], n))
      }

      function Jf(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function ep(e) {
        const t = Zf(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = Af(e),
          i = o ? e.offsetWidth : n,
          s = o ? e.offsetHeight : r,
          a = of(n) !== i || of(r) !== s;
        return a && (n = i, r = s), {
          width: n,
          height: r,
          $: a
        }
      }

      function tp(e) {
        return Mf(e) ? e : e.contextElement
      }

      function np(e) {
        const t = tp(e);
        if (!Af(t)) return af(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = ep(t);
        let s = (i ? of(n.width) : n.width) / r,
          a = (i ? of(n.height) : n.height) / o;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
          x: s,
          y: a
        }
      }
      const rp = af(0);

      function op(e) {
        const t = Nf(e);
        return Hf() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : rp
      }

      function ip(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = tp(e);
        let s = af(1);
        t && (r ? Mf(r) && (s = np(r)) : s = np(e));
        const a = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== Nf(e)) && t
        }(i, n, r) ? op(i) : af(0);
        let l = (o.left + a.x) / s.x,
          c = (o.top + a.y) / s.y,
          u = o.width / s.x,
          d = o.height / s.y;
        if (i) {
          const e = Nf(i),
            t = r && Mf(r) ? Nf(r) : r;
          let n = e,
            o = Jf(n);
          for (; o && r && t !== n;) {
            const e = np(o),
              t = o.getBoundingClientRect(),
              r = Zf(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += i, c += s, n = Nf(o), o = Jf(n)
          }
        }
        return Of({
          width: u,
          height: d,
          x: l,
          y: c
        })
      }

      function sp(e, t) {
        const n = Kf(e).scrollLeft;
        return t ? t.left + n : ip(Df(e)).left + n
      }

      function ap(e, t) {
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - sp(e, n),
          y: n.top + t.scrollTop
        }
      }

      function lp(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = Nf(e),
            r = Df(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            s = r.clientHeight,
            a = 0,
            l = 0;
          if (o) {
            i = o.width, s = o.height;
            const e = Hf();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, l = o.offsetTop)
          }
          const c = sp(r);
          if (c <= 0) {
            const e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              s = Math.abs(r.clientWidth - t.clientWidth - o);
            s <= 25 && (i -= s)
          } else c <= 25 && (i += c);
          return {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = Df(e),
            n = Kf(e),
            r = e.ownerDocument.body,
            o = rf(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = rf(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let s = -n.scrollLeft + sp(e);
          const a = -n.scrollTop;
          return "rtl" === Zf(r).direction && (s += rf(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: s,
            y: a
          }
        }(Df(e));
        else if (Mf(t)) r = function(e, t) {
          const n = ip(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = Af(e) ? np(e) : af(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = op(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return Of(r)
      }

      function cp(e, t) {
        const n = Gf(e);
        return !(n === t || !Mf(n) || Uf(n)) && ("fixed" === Zf(n).position || cp(n, t))
      }

      function up(e, t, n) {
        const r = Af(t),
          o = Df(t),
          i = "fixed" === n,
          s = ip(e, !0, i, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = af(0);

        function c() {
          l.x = sp(o)
        }
        if (r || !r && !i)
          if (("body" !== Tf(t) || Lf(o)) && (a = Kf(t)), r) {
            const e = ip(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && c();
        i && !r && o && c();
        const u = !o || r || i ? af(0) : ap(o, a);
        return {
          x: s.left + a.scrollLeft - l.x - u.x,
          y: s.top + a.scrollTop - l.y - u.y,
          width: s.width,
          height: s.height
        }
      }

      function dp(e) {
        return "static" === Zf(e).position
      }

      function fp(e, t) {
        if (!Af(e) || "fixed" === Zf(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return Df(e) === n && (n = n.ownerDocument.body), n
      }

      function pp(e, t) {
        const n = Nf(e);
        if (Ff(e)) return n;
        if (!Af(e)) {
          let t = Gf(e);
          for (; t && !Uf(t);) {
            if (Mf(t) && !dp(t)) return t;
            t = Gf(t)
          }
          return n
        }
        let r = fp(e, t);
        for (; r && Vf(r) && dp(r);) r = fp(r, t);
        return r && Uf(r) && dp(r) && !Xf(r) ? n : r || function(e) {
          let t = Gf(e);
          for (; Af(t) && !Uf(t);) {
            if (Xf(t)) return t;
            if (Ff(t)) return null;
            t = Gf(t)
          }
          return null
        }(e) || n
      }
      const hp = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            s = Df(r),
            a = !!t && Ff(t.floating);
          if (r === s || a && i) return n;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            c = af(1);
          const u = af(0),
            d = Af(r);
          if ((d || !d && !i) && (("body" !== Tf(r) || Lf(s)) && (l = Kf(r)), d)) {
            const e = ip(r);
            c = np(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
          }
          const f = !s || d || i ? af(0) : ap(s, l);
          return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
            y: n.y * c.y - l.scrollTop * c.y + u.y + f.y
          }
        },
        getDocumentElement: Df,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === n ? Ff(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = Qf(e, [], !1).filter(e => Mf(e) && "body" !== Tf(e)),
                o = null;
              const i = "fixed" === Zf(e).position;
              let s = i ? Gf(e) : e;
              for (; Mf(s) && !Uf(s);) {
                const t = Zf(s),
                  n = Xf(s);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ("absolute" === o.position || "fixed" === o.position) || Lf(s) && !n && cp(e, s)) ? r = r.filter(e => e !== s) : o = t, s = Gf(s)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            s = lp(t, i[0], o);
          let a = s.top,
            l = s.right,
            c = s.bottom,
            u = s.left;
          for (let e = 1; e < i.length; e++) {
            const n = lp(t, i[e], o);
            a = rf(n.top, a), l = nf(n.right, l), c = nf(n.bottom, c), u = rf(n.left, u)
          }
          return {
            width: l - u,
            height: c - a,
            x: u,
            y: a
          }
        },
        getOffsetParent: pp,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || pp,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: up(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: r.width,
              height: r.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: n
          } = ep(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: np,
        isElement: Mf,
        isRTL: function(e) {
          return "rtl" === Zf(e).direction
        }
      };

      function mp(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const vp = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                middlewareData: i,
                rects: s,
                initialPlacement: a,
                platform: l,
                elements: c
              } = t, {
                mainAxis: u = !0,
                crossAxis: d = !0,
                fallbackPlacements: f,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: m = !0,
                ...v
              } = uf(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const y = df(o),
                g = mf(a),
                b = df(a) === a,
                w = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                _ = f || (b || !m ? [xf(a)] : function(e) {
                  const t = xf(e);
                  return [yf(e), t, yf(t)]
                }(a)),
                x = "none" !== h;
              !f && x && _.push(... function(e, t, n, r) {
                const o = ff(e);
                let i = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? bf : gf : t ? gf : bf;
                    case "left":
                    case "right":
                      return t ? wf : _f;
                    default:
                      return []
                  }
                }(df(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(yf)))), i
              }(a, m, h, w));
              const C = [a, ..._],
                O = await l.detectOverflow(t, v),
                j = [];
              let S = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (u && j.push(O[y]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = ff(e),
                    o = vf(e),
                    i = hf(o);
                  let s = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (s = xf(s)), [s, xf(s)]
                }(o, s, w);
                j.push(O[e[0]], O[e[1]])
              }
              if (S = [...S, {
                  placement: o,
                  overflows: j
                }], !j.every(e => e <= 0)) {
                var P, R;
                const e = ((null == (P = i.flip) ? void 0 : P.index) || 0) + 1,
                  t = C[e];
                if (t && ("alignment" !== d || g === mf(t) || S.every(e => mf(e.placement) !== g || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: S
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (R = S.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : R.placement;
                if (!n) switch (p) {
                  case "bestFit": {
                    var k;
                    const e = null == (k = S.filter(e => {
                      if (x) {
                        const t = mf(e.placement);
                        return t === g || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : k[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = a
                }
                if (o !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        },
        yp = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: r,
              placement: o,
              rects: i,
              platform: s,
              elements: a,
              middlewareData: l
            } = t, {
              element: c,
              padding: u = 0
            } = uf(e, t) || {};
            if (null == c) return {};
            const d = Cf(u),
              f = {
                x: n,
                y: r
              },
              p = vf(o),
              h = hf(p),
              m = await s.getDimensions(c),
              v = "y" === p,
              y = v ? "top" : "left",
              g = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              w = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
              _ = f[p] - i.reference[p],
              x = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(c));
            let C = x ? x[b] : 0;
            C && await (null == s.isElement ? void 0 : s.isElement(x)) || (C = a.floating[b] || i.floating[h]);
            const O = w / 2 - _ / 2,
              j = C / 2 - m[h] / 2 - 1,
              S = nf(d[y], j),
              P = nf(d[g], j),
              R = S,
              k = C - m[h] - P,
              E = C / 2 - m[h] / 2 + O,
              T = cf(R, E, k),
              N = !l.arrow && null != ff(o) && E !== T && i.reference[h] / 2 - (E < R ? S : P) - m[h] / 2 < 0,
              D = N ? E < R ? E - R : E - k : 0;
            return {
              [p]: f[p] + D,
              data: {
                [p]: T,
                centerOffset: E - T - D,
                ...N && {
                  alignmentOffset: D
                }
              },
              reset: N
            }
          }
        }),
        gp = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                middlewareData: s
              } = t, {
                offset: a = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = uf(e, t), u = {
                x: n,
                y: r
              }, d = mf(o), f = pf(d);
              let p = u[f],
                h = u[d];
              const m = uf(a, t),
                v = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...m
                };
              if (l) {
                const e = "y" === f ? "height" : "width",
                  t = i.reference[f] - i.floating[e] + v.mainAxis,
                  n = i.reference[f] + i.reference[e] - v.mainAxis;
                p < t ? p = t : p > n && (p = n)
              }
              if (c) {
                var y, g;
                const e = "y" === f ? "width" : "height",
                  t = kf.has(df(o)),
                  n = i.reference[d] - i.floating[e] + (t && (null == (y = s.offset) ? void 0 : y[d]) || 0) + (t ? 0 : v.crossAxis),
                  r = i.reference[d] + i.reference[e] + (t ? 0 : (null == (g = s.offset) ? void 0 : g[d]) || 0) - (t ? v.crossAxis : 0);
                h < n ? h = n : h > r && (h = r)
              }
              return {
                [f]: p,
                [d]: h
              }
            }
          }
        },
        bp = (e, t, n) => {
          const r = new Map,
            o = {
              platform: hp,
              ...n
            },
            i = {
              ...o.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: s
            } = n, a = s.detectOverflow ? s : {
              ...s,
              detectOverflow: Sf
            }, l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let c = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: u,
                y: d
              } = jf(c, r, l),
              f = r,
              p = 0;
            const h = {};
            for (let n = 0; n < i.length; n++) {
              const m = i[n];
              if (!m) continue;
              const {
                name: v,
                fn: y
              } = m, {
                x: g,
                y: b,
                data: w,
                reset: _
              } = await y({
                x: u,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: h,
                rects: c,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              u = null != g ? g : u, d = null != b ? b : d, h[v] = {
                ...h[v],
                ...w
              }, _ && p < 50 && (p++, "object" == typeof _ && (_.placement && (f = _.placement), _.rects && (c = !0 === _.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : _.rects), ({
                x: u,
                y: d
              } = jf(c, f, l))), n = -1)
            }
            return {
              x: u,
              y: d,
              placement: f,
              strategy: o,
              middlewareData: h
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var wp = "undefined" != typeof document ? B.useLayoutEffect : function() {};

      function _p(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 !== r--;)
              if (!_p(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || _p(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function xp(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Cp(e, t) {
        const n = xp(e);
        return Math.round(t * n) / n
      }

      function Op(e) {
        const t = B.useRef(e);
        return wp(() => {
          t.current = e
        }), t
      }
      const jp = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = 0), {
              name: "offset",
              options: e,
              async fn(t) {
                var n, r;
                const {
                  x: o,
                  y: i,
                  placement: s,
                  middlewareData: a
                } = t, l = await async function(e, t) {
                  const {
                    placement: n,
                    platform: r,
                    elements: o
                  } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), s = df(n), a = ff(n), l = "y" === mf(n), c = kf.has(s) ? -1 : 1, u = i && l ? -1 : 1, d = uf(t, e);
                  let {
                    mainAxis: f,
                    crossAxis: p,
                    alignmentAxis: h
                  } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                  } : {
                    mainAxis: d.mainAxis || 0,
                    crossAxis: d.crossAxis || 0,
                    alignmentAxis: d.alignmentAxis
                  };
                  return a && "number" == typeof h && (p = "end" === a ? -1 * h : h), l ? {
                    x: p * u,
                    y: f * c
                  } : {
                    x: f * c,
                    y: p * u
                  }
                }(t, e);
                return s === (null == (n = a.offset) ? void 0 : n.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                  x: o + l.x,
                  y: i + l.y,
                  data: {
                    ...l,
                    placement: s
                  }
                }
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Sp = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "shift",
              options: e,
              async fn(t) {
                const {
                  x: n,
                  y: r,
                  placement: o,
                  platform: i
                } = t, {
                  mainAxis: s = !0,
                  crossAxis: a = !1,
                  limiter: l = {
                    fn: e => {
                      let {
                        x: t,
                        y: n
                      } = e;
                      return {
                        x: t,
                        y: n
                      }
                    }
                  },
                  ...c
                } = uf(e, t), u = {
                  x: n,
                  y: r
                }, d = await i.detectOverflow(t, c), f = mf(df(o)), p = pf(f);
                let h = u[p],
                  m = u[f];
                if (s) {
                  const e = "y" === p ? "bottom" : "right";
                  h = cf(h + d["y" === p ? "top" : "left"], h, h - d[e])
                }
                if (a) {
                  const e = "y" === f ? "bottom" : "right";
                  m = cf(m + d["y" === f ? "top" : "left"], m, m - d[e])
                }
                const v = l.fn({
                  ...t,
                  [p]: h,
                  [f]: m
                });
                return {
                  ...v,
                  data: {
                    x: v.x - n,
                    y: v.y - r,
                    enabled: {
                      [p]: s,
                      [f]: a
                    }
                  }
                }
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Pp = (e, t) => ({
          fn: gp(e).fn,
          options: [e, t]
        }),
        Rp = (e, t) => {
          const n = vp(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        kp = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "size",
              options: e,
              async fn(t) {
                var n, r;
                const {
                  placement: o,
                  rects: i,
                  platform: s,
                  elements: a
                } = t, {
                  apply: l = () => {},
                  ...c
                } = uf(e, t), u = await s.detectOverflow(t, c), d = df(o), f = ff(o), p = "y" === mf(o), {
                  width: h,
                  height: m
                } = i.floating;
                let v, y;
                "top" === d || "bottom" === d ? (v = d, y = f === (await (null == s.isRTL ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = d, v = "end" === f ? "top" : "bottom");
                const g = m - u.top - u.bottom,
                  b = h - u.left - u.right,
                  w = nf(m - u[v], g),
                  _ = nf(h - u[y], b),
                  x = !t.middlewareData.shift;
                let C = w,
                  O = _;
                if (null != (n = t.middlewareData.shift) && n.enabled.x && (O = b), null != (r = t.middlewareData.shift) && r.enabled.y && (C = g), x && !f) {
                  const e = rf(u.left, 0),
                    t = rf(u.right, 0),
                    n = rf(u.top, 0),
                    r = rf(u.bottom, 0);
                  p ? O = h - 2 * (0 !== e || 0 !== t ? e + t : rf(u.left, u.right)) : C = m - 2 * (0 !== n || 0 !== r ? n + r : rf(u.top, u.bottom))
                }
                await l({
                  ...t,
                  availableWidth: O,
                  availableHeight: C
                });
                const j = await s.getDimensions(a.floating);
                return h !== j.width || m !== j.height ? {
                  reset: {
                    rects: !0
                  }
                } : {}
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Ep = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "hide",
              options: e,
              async fn(t) {
                const {
                  rects: n,
                  platform: r
                } = t, {
                  strategy: o = "referenceHidden",
                  ...i
                } = uf(e, t);
                switch (o) {
                  case "referenceHidden": {
                    const e = Pf(await r.detectOverflow(t, {
                      ...i,
                      elementContext: "reference"
                    }), n.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: Rf(e)
                      }
                    }
                  }
                  case "escaped": {
                    const e = Pf(await r.detectOverflow(t, {
                      ...i,
                      altBoundary: !0
                    }), n.floating);
                    return {
                      data: {
                        escapedOffsets: e,
                        escaped: Rf(e)
                      }
                    }
                  }
                  default:
                    return {}
                }
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Tp = (e, t) => {
          const n = (e => ({
            name: "arrow",
            options: e,
            fn(t) {
              const {
                element: n,
                padding: r
              } = "function" == typeof e ? e(t) : e;
              return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? yp({
                element: n.current,
                padding: r
              }).fn(t) : {} : n ? yp({
                element: n,
                padding: r
              }).fn(t) : {};
              var o
            }
          }))(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        };

      function Np(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Dp = Symbol("radix.slottable");

      function Ip(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Dp
      }
      var Mp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = Np(e),
                n = B.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = B.Children.toArray(r), s = i.find(Ip);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                    return (0, O.jsx)(t, {
                      ...o,
                      ref: n,
                      children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        Ap = B.forwardRef((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, O.jsx)(Mp.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, O.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Ap.displayName = "Arrow";
      var zp = Ap;

      function Lp(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function Vp(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Fp = Symbol("radix.slottable");

      function Bp(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Fp
      }
      var qp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const n = function(e) {
            const t = Vp(e),
              n = B.forwardRef((e, n) => {
                const {
                  children: r,
                  ...o
                } = e, i = B.Children.toArray(r), s = i.find(Bp);
                if (s) {
                  const e = s.props.children,
                    r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                  })
                }
                return (0, O.jsx)(t, {
                  ...o,
                  ref: n,
                  children: r
                })
              });
            return n.displayName = `${e}.Slot`, n
          }(`Primitive.${t}`),
          r = B.forwardRef((e, r) => {
            const {
              asChild: o,
              ...i
            } = e, s = o ? n : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
              ...i,
              ref: r
            })
          });
        return r.displayName = `Primitive.${t}`, {
          ...e,
          [t]: r
        }
      }, {});

      function Wp(e) {
        const [t, n] = B.useState(void 0);
        return Yd(() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver(t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const r = t[0];
              let o, i;
              if ("borderBoxSize" in r) {
                const e = r.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, i = t.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              n({
                width: o,
                height: i
              })
            });
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }, [e]), t
      }
      var $p = "Popper",
        [Xp, Hp] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, Lp(r, ...t)]
        }($p),
        [Up, Zp] = Xp($p),
        Kp = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = B.useState(null);
          return (0, O.jsx)(Up, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      Kp.displayName = $p;
      var Gp = "PopperAnchor",
        Yp = B.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, i = Zp(Gp, n), s = B.useRef(null), a = (0, Md.s)(t, s), l = B.useRef(null);
          return B.useEffect(() => {
            const e = l.current;
            l.current = r?.current || s.current, e !== l.current && i.onAnchorChange(l.current)
          }), r ? null : (0, O.jsx)(qp.div, {
            ...o,
            ref: a
          })
        });
      Yp.displayName = Gp;
      var Qp = "PopperContent",
        [Jp, eh] = Xp(Qp),
        th = B.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: c = [],
            collisionPadding: u = 0,
            sticky: d = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: h,
            ...m
          } = e, v = Zp(Qp, n), [y, g] = B.useState(null), b = (0, Md.s)(t, e => g(e)), [w, _] = B.useState(null), x = Wp(w), C = x?.width ?? 0, j = x?.height ?? 0, S = r + ("center" !== i ? "-" + i : ""), P = "number" == typeof u ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
          }, R = Array.isArray(c) ? c : [c], k = R.length > 0, E = {
            padding: P,
            boundary: R.filter(ih),
            altBoundary: k
          }, {
            refs: T,
            floatingStyles: N,
            placement: D,
            isPositioned: I,
            middlewareData: M
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: r = [],
              platform: o,
              elements: {
                reference: i,
                floating: s
              } = {},
              transform: a = !0,
              whileElementsMounted: l,
              open: c
            } = e, [u, d] = B.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = B.useState(r);
            _p(f, r) || p(r);
            const [h, m] = B.useState(null), [v, y] = B.useState(null), g = B.useCallback(e => {
              e !== x.current && (x.current = e, m(e))
            }, []), b = B.useCallback(e => {
              e !== C.current && (C.current = e, y(e))
            }, []), w = i || h, _ = s || v, x = B.useRef(null), C = B.useRef(null), O = B.useRef(u), j = null != l, S = Op(l), P = Op(o), R = Op(c), k = B.useCallback(() => {
              if (!x.current || !C.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: f
              };
              P.current && (e.platform = P.current), bp(x.current, C.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== R.current
                };
                E.current && !_p(O.current, t) && (O.current = t, bd.flushSync(() => {
                  d(t)
                }))
              })
            }, [f, t, n, P, R]);
            wp(() => {
              !1 === c && O.current.isPositioned && (O.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [c]);
            const E = B.useRef(!1);
            wp(() => (E.current = !0, () => {
              E.current = !1
            }), []), wp(() => {
              if (w && (x.current = w), _ && (C.current = _), w && _) {
                if (S.current) return S.current(w, _, k);
                k()
              }
            }, [w, _, k, S, j]);
            const T = B.useMemo(() => ({
                reference: x,
                floating: C,
                setReference: g,
                setFloating: b
              }), [g, b]),
              N = B.useMemo(() => ({
                reference: w,
                floating: _
              }), [w, _]),
              D = B.useMemo(() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!N.floating) return e;
                const t = Cp(N.floating, u.x),
                  r = Cp(N.floating, u.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...xp(N.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }, [n, a, N.floating, u.x, u.y]);
            return B.useMemo(() => ({
              ...u,
              update: k,
              refs: T,
              elements: N,
              floatingStyles: D
            }), [u, k, T, N, D])
          }({
            strategy: "fixed",
            placement: S,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: s = "function" == typeof ResizeObserver,
                layoutShift: a = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = r, c = tp(e), u = o || i ? [...c ? Qf(c) : [], ...t ? Qf(t) : []] : [];
              u.forEach(e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), i && e.addEventListener("resize", n)
              });
              const d = c && a ? function(e, t) {
                let n, r = null;
                const o = Df(e);

                function i() {
                  var e;
                  clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                }
                return function s(a, l) {
                  void 0 === a && (a = !1), void 0 === l && (l = 1), i();
                  const c = e.getBoundingClientRect(),
                    {
                      left: u,
                      top: d,
                      width: f,
                      height: p
                    } = c;
                  if (a || t(), !f || !p) return;
                  const h = {
                    rootMargin: -sf(d) + "px " + -sf(o.clientWidth - (u + f)) + "px " + -sf(o.clientHeight - (d + p)) + "px " + -sf(u) + "px",
                    threshold: rf(0, nf(1, l)) || 1
                  };
                  let m = !0;

                  function v(t) {
                    const r = t[0].intersectionRatio;
                    if (r !== l) {
                      if (!m) return s();
                      r ? s(!1, r) : n = setTimeout(() => {
                        s(!1, 1e-7)
                      }, 1e3)
                    }
                    1 !== r || mp(c, e.getBoundingClientRect()) || s(), m = !1
                  }
                  try {
                    r = new IntersectionObserver(v, {
                      ...h,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    r = new IntersectionObserver(v, h)
                  }
                  r.observe(e)
                }(!0), i
              }(c, n) : null;
              let f, p = -1,
                h = null;
              s && (h = new ResizeObserver(e => {
                let [r] = e;
                r && r.target === c && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                  var e;
                  null == (e = h) || e.observe(t)
                })), n()
              }), c && !l && h.observe(c), t && h.observe(t));
              let m = l ? ip(e) : null;
              return l && function t() {
                const r = ip(e);
                m && !mp(m, r) && n(), m = r, f = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                u.forEach(e => {
                  o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
                }), null == d || d(), null == (e = h) || e.disconnect(), h = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [jp({
              mainAxis: o + j,
              alignmentAxis: s
            }), l && Sp({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === d ? Pp() : void 0,
              ...E
            }), l && Rp({
              ...E
            }), kp({
              ...E,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: i
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${n}px`), s.setProperty("--radix-popper-available-height", `${r}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), w && Tp({
              element: w,
              padding: a
            }), sh({
              arrowWidth: C,
              arrowHeight: j
            }), f && Ep({
              strategy: "referenceHidden",
              ...E
            })]
          }), [A, z] = ah(D), L = Bd(h);
          Yd(() => {
            I && L?.()
          }, [I, L]);
          const V = M.arrow?.x,
            F = M.arrow?.y,
            q = 0 !== M.arrow?.centerOffset,
            [W, $] = B.useState();
          return Yd(() => {
            y && $(window.getComputedStyle(y).zIndex)
          }, [y]), (0, O.jsx)("div", {
            ref: T.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...N,
              transform: I ? N.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: W,
              "--radix-popper-transform-origin": [M.transformOrigin?.x, M.transformOrigin?.y].join(" "),
              ...M.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, O.jsx)(Jp, {
              scope: n,
              placedSide: A,
              onArrowChange: _,
              arrowX: V,
              arrowY: F,
              shouldHideArrow: q,
              children: (0, O.jsx)(qp.div, {
                "data-side": A,
                "data-align": z,
                ...m,
                ref: b,
                style: {
                  ...m.style,
                  animation: I ? void 0 : "none"
                }
              })
            })
          })
        });
      th.displayName = Qp;
      var nh = "PopperArrow",
        rh = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        oh = B.forwardRef(function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = eh(nh, n), i = rh[o.placedSide];
          return (0, O.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
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
            children: (0, O.jsx)(zp, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        });

      function ih(e) {
        return null !== e
      }
      oh.displayName = nh;
      var sh = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, c] = ah(n), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], d = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let p = "",
            h = "";
          return "bottom" === l ? (p = i ? u : `${d}px`, h = -a + "px") : "top" === l ? (p = i ? u : `${d}px`, h = `${r.floating.height+a}px`) : "right" === l ? (p = -a + "px", h = i ? u : `${f}px`) : "left" === l && (p = `${r.floating.width+a}px`, h = i ? u : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function ah(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var lh = Kp,
        ch = Yp,
        uh = th,
        dh = oh;

      function fh(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var ph = Symbol("radix.slottable");

      function hh(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === ph
      }
      var mh = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = fh(e),
                n = B.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = B.Children.toArray(r), s = i.find(hh);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                    return (0, O.jsx)(t, {
                      ...o,
                      ref: n,
                      children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        vh = B.forwardRef((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, i] = B.useState(!1);
          Yd(() => i(!0), []);
          const s = n || o && globalThis?.document?.body;
          return s ? bd.createPortal((0, O.jsx)(mh.div, {
            ...r,
            ref: t
          }), s) : null
        });
      vh.displayName = "Portal";
      var yh = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = B.useState(), r = B.useRef(null), o = B.useRef(e), i = B.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = function(e, t) {
            return B.useReducer((e, n) => t[e][n] ?? e, e)
          }(s, {
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
          return B.useEffect(() => {
            const e = gh(r.current);
            i.current = "mounted" === a ? e : "none"
          }, [a]), Yd(() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                s = gh(t);
              l(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, l]), Yd(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                s = i => {
                  const s = gh(r.current).includes(CSS.escape(i.animationName));
                  if (i.target === t && s && (l("ANIMATION_END"), !o.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    })
                  }
                },
                a = e => {
                  e.target === t && (i.current = gh(r.current))
                };
              return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
              }
            }
            l("ANIMATION_END")
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: B.useCallback(e => {
              r.current = e ? getComputedStyle(e) : null, n(e)
            }, [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : B.Children.only(n), i = (0, Md.s)(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? B.cloneElement(o, {
          ref: i
        }) : null
      };

      function gh(e) {
        return e?.animationName || "none"
      }

      function bh(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      yh.displayName = "Presence";
      var wh = Symbol("radix.slottable");

      function _h(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === wh
      }
      var xh = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = bh(e),
                n = B.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = B.Children.toArray(r), s = i.find(_h);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                    return (0, O.jsx)(t, {
                      ...o,
                      ref: n,
                      children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        Ch = q[" useInsertionEffect ".trim().toString()] || Yd;

      function Oh({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [o, i, s] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = B.useState(e), o = B.useRef(n), i = B.useRef(t);
          return Ch(() => {
            i.current = t
          }, [t]), B.useEffect(() => {
            o.current !== n && (i.current?.(n), o.current = n)
          }, [n, o]), [n, r, i]
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, l = a ? e : o; {
          const t = B.useRef(void 0 !== e);
          B.useEffect(() => {
            const e = t.current;
            if (e !== a) {
              const t = e ? "controlled" : "uncontrolled",
                n = a ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = a
          }, [a, r])
        }
        const c = B.useCallback(t => {
          if (a) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && s.current?.(n)
          } else i(t)
        }, [a, e, i, s]);
        return [l, c]
      }

      function jh(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      Symbol("RADIX:SYNC_STATE");
      var Sh = Symbol("radix.slottable");

      function Ph(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Sh
      }
      var Rh = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = jh(e),
                n = B.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = B.Children.toArray(r), s = i.find(Ph);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                    return (0, O.jsx)(t, {
                      ...o,
                      ref: n,
                      children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        kh = Object.freeze({
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
        Eh = B.forwardRef((e, t) => (0, O.jsx)(Rh.span, {
          ...e,
          ref: t,
          style: {
            ...kh,
            ...e.style
          }
        }));
      Eh.displayName = "VisuallyHidden";
      var Th = Eh,
        [Nh, Dh] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, Ad(r, ...t)]
        }("Tooltip", [Hp]),
        Ih = Hp(),
        Mh = "TooltipProvider",
        Ah = 700,
        zh = "tooltip.open",
        [Lh, Vh] = Nh(Mh),
        Fh = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = Ah,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, s = B.useRef(!0), a = B.useRef(!1), l = B.useRef(0);
          return B.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, O.jsx)(Lh, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: n,
            onOpen: B.useCallback(() => {
              window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: B.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, r)
            }, [r]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: B.useCallback(e => {
              a.current = e
            }, []),
            disableHoverableContent: o,
            children: i
          })
        };
      Fh.displayName = Mh;
      var Bh = "Tooltip",
        [qh, Wh] = Nh(Bh),
        $h = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
          } = e, l = Vh(Bh, e.__scopeTooltip), c = Ih(t), [u, d] = B.useState(null), f = ef(), p = B.useRef(0), h = s ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = B.useRef(!1), [y, g] = Oh({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(zh))) : l.onClose(), i?.(e)
            },
            caller: Bh
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
          }, []), (0, O.jsx)(lh, {
            ...c,
            children: (0, O.jsx)(qh, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: B.useCallback(() => {
                l.isOpenDelayedRef.current ? x() : w()
              }, [l.isOpenDelayedRef, x, w]),
              onTriggerLeave: B.useCallback(() => {
                h ? _() : (window.clearTimeout(p.current), p.current = 0)
              }, [_, h]),
              onOpen: w,
              onClose: _,
              disableHoverableContent: h,
              children: n
            })
          })
        };
      $h.displayName = Bh;
      var Xh = "TooltipTrigger",
        Hh = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Wh(Xh, n), i = Vh(Xh, n), s = Ih(n), a = B.useRef(null), l = (0, Md.s)(t, a, o.onTriggerChange), c = B.useRef(!1), u = B.useRef(!1), d = B.useCallback(() => c.current = !1, []);
          return B.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, O.jsx)(ch, {
            asChild: !0,
            ...s,
            children: (0, O.jsx)(xh.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: Id(e.onPointerMove, e => {
                "touch" !== e.pointerType && (u.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              }),
              onPointerLeave: Id(e.onPointerLeave, () => {
                o.onTriggerLeave(), u.current = !1
              }),
              onPointerDown: Id(e.onPointerDown, () => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: Id(e.onFocus, () => {
                c.current || o.onOpen()
              }),
              onBlur: Id(e.onBlur, o.onClose),
              onClick: Id(e.onClick, o.onClose)
            })
          })
        });
      Hh.displayName = Xh;
      var Uh = "TooltipPortal",
        [Zh, Kh] = Nh(Uh, {
          forceMount: void 0
        }),
        Gh = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Wh(Uh, t);
          return (0, O.jsx)(Zh, {
            scope: t,
            forceMount: n,
            children: (0, O.jsx)(yh, {
              present: n || i.open,
              children: (0, O.jsx)(vh, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Gh.displayName = Uh;
      var Yh = "TooltipContent",
        Qh = B.forwardRef((e, t) => {
          const n = Kh(Yh, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = Wh(Yh, e.__scopeTooltip);
          return (0, O.jsx)(yh, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, O.jsx)(rm, {
              side: o,
              ...i,
              ref: t
            }) : (0, O.jsx)(Jh, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        Jh = B.forwardRef((e, t) => {
          const n = Wh(Yh, e.__scopeTooltip),
            r = Vh(Yh, e.__scopeTooltip),
            o = B.useRef(null),
            i = (0, Md.s)(t, o),
            [s, a] = B.useState(null),
            {
              trigger: l,
              onClose: c
            } = n,
            u = o.current,
            {
              onPointerInTransitChange: d
            } = r,
            f = B.useCallback(() => {
              a(null), d(!1)
            }, [d]),
            p = B.useCallback((e, t) => {
              const n = e.currentTarget,
                r = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, n = 5) {
                  const r = [];
                  switch (t) {
                    case "top":
                      r.push({
                        x: e.x - n,
                        y: e.y + n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "bottom":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y - n
                      });
                      break;
                    case "left":
                      r.push({
                        x: e.x + n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "right":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x - n,
                        y: e.y + n
                      })
                  }
                  return r
                }(r, function(e, t) {
                  const n = Math.abs(t.top - e.y),
                    r = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(n, r, o, i)) {
                    case i:
                      return "left";
                    case o:
                      return "right";
                    case n:
                      return "top";
                    case r:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(r, n.getBoundingClientRect())),
                i = function(e) {
                  const t = e.slice();
                  return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            n = t[t.length - 2];
                          if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                          t.pop()
                        }
                        t.push(r)
                      }
                      t.pop();
                      const n = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const r = e[t];
                        for (; n.length >= 2;) {
                          const e = n[n.length - 1],
                            t = n[n.length - 2];
                          if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                          n.pop()
                        }
                        n.push(r)
                      }
                      return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: n,
                    bottom: r,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: n,
                    y: t
                  }, {
                    x: n,
                    y: r
                  }, {
                    x: o,
                    y: r
                  }]
                }(t.getBoundingClientRect())]);
              a(i), d(!0)
            }, [d]);
          return B.useEffect(() => () => f(), [f]), B.useEffect(() => {
            if (l && u) {
              const e = e => p(e, u),
                t = e => p(e, l);
              return l.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }, [l, u, p, f]), B.useEffect(() => {
            if (s) {
              const e = e => {
                const t = e.target,
                  n = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = l?.contains(t) || u?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: n,
                      y: r
                    } = e;
                    let o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const s = t[e],
                        a = t[i],
                        l = s.x,
                        c = s.y,
                        u = a.x,
                        d = a.y;
                      c > r != d > r && n < (u - l) * (r - c) / (d - c) + l && (o = !o)
                    }
                    return o
                  }(n, s);
                r ? f() : o && (f(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, u, s, c, f]), (0, O.jsx)(rm, {
            ...e,
            ref: i
          })
        }),
        [em, tm] = Nh(Bh, {
          isInside: !1
        }),
        nm = function(e) {
          const t = ({
            children: e
          }) => (0, O.jsx)(O.Fragment, {
            children: e
          });
          return t.displayName = `${e}.Slottable`, t.__radixId = wh, t
        }("TooltipContent"),
        rm = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
          } = e, l = Wh(Yh, n), c = Ih(n), {
            onClose: u
          } = l;
          return B.useEffect(() => (document.addEventListener(zh, u), () => document.removeEventListener(zh, u)), [u]), B.useEffect(() => {
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
          }, [l.trigger, u]), (0, O.jsx)(Xd, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, O.jsxs)(uh, {
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
              children: [(0, O.jsx)(nm, {
                children: r
              }), (0, O.jsx)(em, {
                scope: n,
                isInside: !0,
                children: (0, O.jsx)(Th, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        });
      Qh.displayName = Yh;
      var om = "TooltipArrow",
        im = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Ih(n);
          return tm(om, n).isInside ? null : (0, O.jsx)(dh, {
            ...o,
            ...r,
            ref: t
          })
        });
      im.displayName = om;
      var sm = Fh,
        am = $h,
        lm = Hh,
        cm = Gh,
        um = Qh,
        dm = im;
      const fm = (0, B.createContext)(null);

      function pm() {
        const e = (0, B.useContext)(fm);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const hm = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: n,
          onOpenChange: r,
          ...o
        }) => {
          const [i = !1, s] = (0, K.ic)({
            defaultProp: n,
            prop: o.isOpen,
            onChange: r
          });
          return (0, O.jsx)(sm, {
            delayDuration: t,
            children: (0, O.jsx)(fm.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, O.jsx)(am, {
                open: i,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        mm = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => (0, O.jsx)(lm, {
          asChild: !0,
          "data-testid": t,
          ...n,
          ref: r,
          children: e
        })),
        vm = (0, B.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: n = 8,
          align: r = "center",
          alignOffset: o = 0,
          avoidCollisions: i = !0,
          sticky: s = "partial",
          ...a
        }, l) => {
          const {
            isOpen: c
          } = pm(), u = (0, K.jt)(), d = Dd(um), f = pd(c, {
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
            config: Cu.stiff,
            immediate: u
          }), p = (0, H.v6)({
            "data-testid": e,
            side: t,
            align: r,
            sticky: s,
            sideOffset: n,
            alignOffset: o,
            avoidCollisions: i,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, a);
          return f(e => (0, O.jsx)(d, {
            ...p,
            style: e,
            ref: l
          }))
        }),
        ym = (0, B.forwardRef)(({
          testId: e
        }, t) => {
          const n = (0, H.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, O.jsx)(dm, {
            ...n,
            ref: t
          })
        }),
        gm = cm;

      function bm(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }

      function wm(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var _m = B.createContext(void 0);

      function xm(e) {
        const t = B.useContext(_m);
        return e || t || "ltr"
      }

      function Cm(e) {
        const t = B.useRef({
          value: e,
          previous: e
        });
        return B.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }

      function Om(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var jm = Symbol("radix.slottable");

      function Sm(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === jm
      }
      var Pm = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const n = function(e) {
            const t = Om(e),
              n = B.forwardRef((e, n) => {
                const {
                  children: r,
                  ...o
                } = e, i = B.Children.toArray(r), s = i.find(Sm);
                if (s) {
                  const e = s.props.children,
                    r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                  })
                }
                return (0, O.jsx)(t, {
                  ...o,
                  ref: n,
                  children: r
                })
              });
            return n.displayName = `${e}.Slot`, n
          }(`Primitive.${t}`),
          r = B.forwardRef((e, r) => {
            const {
              asChild: o,
              ...i
            } = e, s = o ? n : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
              ...i,
              ref: r
            })
          });
        return r.displayName = `Primitive.${t}`, {
          ...e,
          [t]: r
        }
      }, {});

      function Rm(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function km(e) {
        const t = Em(e),
          n = B.forwardRef((e, n) => {
            const {
              children: r,
              ...o
            } = e, i = B.Children.toArray(r), s = i.find(Nm);
            if (s) {
              const e = s.props.children,
                r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, O.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, O.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function Em(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Tm = Symbol("radix.slottable");

      function Nm(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Tm
      }

      function Dm(e) {
        const t = e + "CollectionProvider",
          [n, r] = function(e, t = []) {
            let n = [];
            const r = () => {
              const t = n.map(e => B.createContext(e));
              return function(n) {
                const r = n?.[e] || t;
                return B.useMemo(() => ({
                  [`__scope${e}`]: {
                    ...n,
                    [e]: r
                  }
                }), [n, r])
              }
            };
            return r.scopeName = e, [function(t, r) {
              const o = B.createContext(r),
                i = n.length;
              n = [...n, r];
              const s = t => {
                const {
                  scope: n,
                  children: r,
                  ...s
                } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
                return (0, O.jsx)(a.Provider, {
                  value: l,
                  children: r
                })
              };
              return s.displayName = t + "Provider", [s, function(n, s) {
                const a = s?.[e]?.[i] || o,
                  l = B.useContext(a);
                if (l) return l;
                if (void 0 !== r) return r;
                throw new Error(`\`${n}\` must be used within \`${t}\``)
              }]
            }, Rm(r, ...t)]
          }(t),
          [o, i] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          s = e => {
            const {
              scope: t,
              children: n
            } = e, r = B.useRef(null), i = B.useRef(new Map).current;
            return (0, O.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          };
        s.displayName = t;
        const a = e + "CollectionSlot",
          l = km(a),
          c = B.forwardRef((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = i(a, n), s = (0, Md.s)(t, o.collectionRef);
            return (0, O.jsx)(l, {
              ref: s,
              children: r
            })
          });
        c.displayName = a;
        const u = e + "CollectionItemSlot",
          d = "data-radix-collection-item",
          f = km(u),
          p = B.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...o
            } = e, s = B.useRef(null), a = (0, Md.s)(t, s), l = i(u, n);
            return B.useEffect(() => (l.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              l.itemMap.delete(s)
            })), (0, O.jsx)(f, {
              [d]: "",
              ref: a,
              children: r
            })
          });
        return p.displayName = u, [{
          Provider: s,
          Slot: c,
          ItemSlot: p
        }, function(t) {
          const n = i(e + "CollectionConsumer", t),
            r = B.useCallback(() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${d}]`)),
                r = Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
              return r
            }, [n.collectionRef, n.itemMap]);
          return r
        }, r]
      }
      Map;
      var Im = ["PageUp", "PageDown"],
        Mm = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Am = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        zm = "Slider",
        [Lm, Vm, Fm] = Dm(zm),
        [Bm, qm] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, wm(r, ...t)]
        }(zm, [Fm]),
        [Wm, $m] = Bm(zm),
        Xm = B.forwardRef((e, t) => {
          const {
            name: n,
            min: r = 0,
            max: o = 100,
            step: i = 1,
            orientation: s = "horizontal",
            disabled: a = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: c = [r],
            value: u,
            onValueChange: d = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: h,
            ...m
          } = e, v = B.useRef(new Set), y = B.useRef(0), g = "horizontal" === s ? Zm : Km, [b = [], w] = Oh({
            prop: u,
            defaultProp: c,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), _ = B.useRef(b);

          function x(e, t, {
            commit: n
          } = {
            commit: !1
          }) {
            const s = function(e) {
                return (String(e).split(".")[1] || "").length
              }(i),
              a = function(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
              }(Math.round((e - r) / i) * i + r, s),
              c = bm(a, [r, o]);
            w((e = []) => {
              const r = function(e = [], t, n) {
                const r = [...e];
                return r[n] = t, r.sort((e, t) => e - t)
              }(e, c, t);
              if (function(e, t) {
                  if (t > 0) {
                    const n = function(e) {
                      return e.slice(0, -1).map((t, n) => e[n + 1] - t)
                    }(e);
                    return Math.min(...n) >= t
                  }
                  return !0
                }(r, l * i)) {
                y.current = r.indexOf(c);
                const t = String(r) !== String(e);
                return t && n && f(r), t ? r : e
              }
              return e
            })
          }
          return (0, O.jsx)(Wm, {
            scope: e.__scopeSlider,
            name: n,
            disabled: a,
            min: r,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: b,
            orientation: s,
            form: h,
            children: (0, O.jsx)(Lm.Provider, {
              scope: e.__scopeSlider,
              children: (0, O.jsx)(Lm.Slot, {
                scope: e.__scopeSlider,
                children: (0, O.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: Id(m.onPointerDown, () => {
                    a || (_.current = b)
                  }),
                  min: r,
                  max: o,
                  inverted: p,
                  onSlideStart: a ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const n = e.map(e => Math.abs(e - t)),
                        r = Math.min(...n);
                      return n.indexOf(r)
                    }(b, e);
                    x(e, t)
                  },
                  onSlideMove: a ? void 0 : function(e) {
                    x(e, y.current)
                  },
                  onSlideEnd: a ? void 0 : function() {
                    const e = _.current[y.current];
                    b[y.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !a && x(r, 0, {
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
                      const n = Im.includes(e.key) || e.shiftKey && Mm.includes(e.key) ? 10 : 1,
                        r = y.current;
                      x(b[r] + i * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      Xm.displayName = zm;
      var [Hm, Um] = Bm(zm, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Zm = B.forwardRef((e, t) => {
        const {
          min: n,
          max: r,
          dir: o,
          inverted: i,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...u
        } = e, [d, f] = B.useState(null), p = (0, Md.s)(t, e => f(e)), h = B.useRef(void 0), m = xm(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = h.current || d.getBoundingClientRect(),
            o = sv([0, t.width], y ? [n, r] : [r, n]);
          return h.current = t, o(e - t.left)
        }
        return (0, O.jsx)(Hm, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, O.jsx)(Gm, {
            dir: m,
            "data-orientation": "horizontal",
            ...u,
            ref: p,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = g(e.clientX);
              s?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientX);
              a?.(t)
            },
            onSlideEnd: () => {
              h.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = Am[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Km = B.forwardRef((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...c
        } = e, u = B.useRef(null), d = (0, Md.s)(t, u), f = B.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = sv([0, t.height], p ? [r, n] : [n, r]);
          return f.current = t, o(e - t.top)
        }
        return (0, O.jsx)(Hm, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, O.jsx)(Gm, {
            "data-orientation": "vertical",
            ...c,
            ref: d,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = h(e.clientY);
              i?.(t)
            },
            onSlideMove: e => {
              const t = h(e.clientY);
              s?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, a?.()
            },
            onStepKeyDown: e => {
              const t = Am[p ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Gm = B.forwardRef((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...c
        } = e, u = $m(zm, n);
        return (0, O.jsx)(Pm.span, {
          ...c,
          ref: t,
          onKeyDown: Id(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : Im.concat(Mm).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: Id(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : r(e)
          }),
          onPointerMove: Id(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: Id(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), Ym = "SliderTrack", Qm = B.forwardRef((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = $m(Ym, n);
        return (0, O.jsx)(Pm.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      });
      Qm.displayName = Ym;
      var Jm = "SliderRange",
        ev = B.forwardRef((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = $m(Jm, n), i = Um(Jm, n), s = B.useRef(null), a = (0, Md.s)(t, s), l = o.values.length, c = o.values.map(e => iv(e, o.min, o.max)), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, O.jsx)(Pm.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: a,
            style: {
              ...e.style,
              [i.startEdge]: u + "%",
              [i.endEdge]: d + "%"
            }
          })
        });
      ev.displayName = Jm;
      var tv = "SliderThumb",
        nv = B.forwardRef((e, t) => {
          const n = Vm(e.__scopeSlider),
            [r, o] = B.useState(null),
            i = (0, Md.s)(t, e => o(e)),
            s = B.useMemo(() => r ? n().findIndex(e => e.ref.current === r) : -1, [n, r]);
          return (0, O.jsx)(rv, {
            ...e,
            ref: i,
            index: s
          })
        }),
        rv = B.forwardRef((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...i
          } = e, s = $m(tv, n), a = Um(tv, n), [l, c] = B.useState(null), u = (0, Md.s)(t, e => c(e)), d = !l || s.form || !!l.closest("form"), f = Wp(l), p = s.values[r], h = void 0 === p ? 0 : iv(p, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, s.values.length), v = f?.[a.size], y = v ? function(e, t, n) {
            const r = e / 2;
            return (r - sv([0, 50], [0, r])(t) * n) * n
          }(v, h, a.direction) : 0;
          return B.useEffect(() => {
            if (l) return s.thumbs.add(l), () => {
              s.thumbs.delete(l)
            }
          }, [l, s.thumbs]), (0, O.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${h}% + ${y}px)`
            },
            children: [(0, O.jsx)(Lm.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, O.jsx)(Pm.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": s.min,
                "aria-valuenow": p,
                "aria-valuemax": s.max,
                "aria-orientation": s.orientation,
                "data-orientation": s.orientation,
                "data-disabled": s.disabled ? "" : void 0,
                tabIndex: s.disabled ? void 0 : 0,
                ...i,
                ref: u,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: Id(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = r
                })
              })
            }), d && (0, O.jsx)(ov, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: p
            }, r)]
          })
        });
      nv.displayName = tv;
      var ov = B.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = B.useRef(null),
          i = (0, Md.s)(o, r),
          s = Cm(t);
        return B.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const n = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (s !== t && r) {
            const n = new Event("input", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }, [s, t]), (0, O.jsx)(Pm.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: i,
          defaultValue: t
        })
      });

      function iv(e, t, n) {
        return bm(100 / (n - t) * (e - t), [0, 100])
      }

      function sv(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      ov.displayName = "RadioBubbleInput";
      var av = Xm,
        lv = Qm,
        cv = ev,
        uv = nv;

      function dv(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function fv(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var pv = Symbol("radix.slottable");

      function hv(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === pv
      }
      var mv = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = fv(e),
                n = B.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = B.Children.toArray(r), s = i.find(hv);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                    return (0, O.jsx)(t, {
                      ...o,
                      ref: n,
                      children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        vv = "focusScope.autoFocusOnMount",
        yv = "focusScope.autoFocusOnUnmount",
        gv = {
          bubbles: !1,
          cancelable: !0
        },
        bv = B.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = B.useState(null), c = Bd(o), u = Bd(i), d = B.useRef(null), f = (0, Md.s)(t, e => l(e)), p = B.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          B.useEffect(() => {
            if (r) {
              let e = function(e) {
                  if (p.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? d.current = t : Cv(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || Cv(d.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Cv(a)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return a && r.observe(a, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }, [r, a, p.paused]), B.useEffect(() => {
            if (a) {
              Ov.add(p);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(vv, gv);
                a.addEventListener(vv, c), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (Cv(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(wv(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Cv(a))
              }
              return () => {
                a.removeEventListener(vv, c), setTimeout(() => {
                  const t = new CustomEvent(yv, gv);
                  a.addEventListener(yv, u), a.dispatchEvent(t), t.defaultPrevented || Cv(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(yv, u), Ov.remove(p)
                }, 0)
              }
            }
          }, [a, c, u, p]);
          const h = B.useCallback(e => {
            if (!n && !r) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = wv(e);
                  return [_v(t, e), _v(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && Cv(i, {
                select: !0
              })) : (e.preventDefault(), n && Cv(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, r, p.paused]);
          return (0, O.jsx)(mv.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: h
          })
        });

      function wv(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function _v(e, t) {
        for (const n of e)
          if (!xv(n, {
              upTo: t
            })) return n
      }

      function xv(e, {
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

      function Cv(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      bv.displayName = "FocusScope";
      var Ov = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = jv(e, t), e.unshift(t)
          },
          remove(t) {
            e = jv(e, t), e[0]?.resume()
          }
        }
      }();

      function jv(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }

      function Sv(e) {
        const t = Pv(e),
          n = B.forwardRef((e, n) => {
            const {
              children: r,
              ...o
            } = e, i = B.Children.toArray(r), s = i.find(kv);
            if (s) {
              const e = s.props.children,
                r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, O.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, O.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function Pv(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Rv = Symbol("radix.slottable");

      function kv(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Rv
      }
      var Ev = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = Sv(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        Tv = 0;

      function Nv() {
        B.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Dv()), document.body.insertAdjacentElement("beforeend", e[1] ?? Dv()), Tv++, () => {
            1 === Tv && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), Tv--
          }
        }, [])
      }

      function Dv() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Iv = n(31635),
        Mv = "right-scroll-bar-position",
        Av = "width-before-scroll-bar";

      function zv(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var Lv = "undefined" != typeof window ? B.useLayoutEffect : B.useEffect,
        Vv = new WeakMap;

      function Fv(e) {
        return e
      }
      var Bv = function(e) {
          void 0 === e && (e = {});
          var t = function(e, t) {
            void 0 === t && (t = Fv);
            var n = [],
              r = !1,
              o = {
                read: function() {
                  if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                  return n.length ? n[n.length - 1] : e
                },
                useMedium: function(e) {
                  var o = t(e, r);
                  return n.push(o),
                    function() {
                      n = n.filter(function(e) {
                        return e !== o
                      })
                    }
                },
                assignSyncMedium: function(e) {
                  for (r = !0; n.length;) {
                    var t = n;
                    n = [], t.forEach(e)
                  }
                  n = {
                    push: function(t) {
                      return e(t)
                    },
                    filter: function() {
                      return n
                    }
                  }
                },
                assignMedium: function(e) {
                  r = !0;
                  var t = [];
                  if (n.length) {
                    var o = n;
                    n = [], o.forEach(e), t = n
                  }
                  var i = function() {
                      var n = t;
                      t = [], n.forEach(e)
                    },
                    s = function() {
                      return Promise.resolve().then(i)
                    };
                  s(), n = {
                    push: function(e) {
                      t.push(e), s()
                    },
                    filter: function(e) {
                      return t = t.filter(e), n
                    }
                  }
                }
              };
            return o
          }(null);
          return t.options = (0, Iv.__assign)({
            async: !0,
            ssr: !1
          }, e), t
        }(),
        qv = function() {},
        Wv = B.forwardRef(function(e, t) {
          var n = B.useRef(null),
            r = B.useState({
              onScrollCapture: qv,
              onWheelCapture: qv,
              onTouchMoveCapture: qv
            }),
            o = r[0],
            i = r[1],
            s = e.forwardProps,
            a = e.children,
            l = e.className,
            c = e.removeScrollBar,
            u = e.enabled,
            d = e.shards,
            f = e.sideCar,
            p = e.noRelative,
            h = e.noIsolation,
            m = e.inert,
            v = e.allowPinchZoom,
            y = e.as,
            g = void 0 === y ? "div" : y,
            b = e.gapMode,
            w = (0, Iv.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            _ = f,
            x = function(e, t) {
              var n, r, o, i = (n = t || null, r = function(t) {
                return e.forEach(function(e) {
                  return zv(e, t)
                })
              }, (o = (0, B.useState)(function() {
                return {
                  value: n,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value
                    },
                    set current(e) {
                      var t = o.value;
                      t !== e && (o.value = e, o.callback(e, t))
                    }
                  }
                }
              })[0]).callback = r, o.facade);
              return Lv(function() {
                var t = Vv.get(i);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = i.current;
                  n.forEach(function(e) {
                    r.has(e) || zv(e, null)
                  }), r.forEach(function(e) {
                    n.has(e) || zv(e, o)
                  })
                }
                Vv.set(i, e)
              }, [e]), i
            }([n, t]),
            C = (0, Iv.__assign)((0, Iv.__assign)({}, w), o);
          return B.createElement(B.Fragment, null, u && B.createElement(_, {
            sideCar: Bv,
            removeScrollBar: c,
            shards: d,
            noRelative: p,
            noIsolation: h,
            inert: m,
            setCallbacks: i,
            allowPinchZoom: !!v,
            lockRef: n,
            gapMode: b
          }), s ? B.cloneElement(B.Children.only(a), (0, Iv.__assign)((0, Iv.__assign)({}, C), {
            ref: x
          })) : B.createElement(g, (0, Iv.__assign)({}, C, {
            className: l,
            ref: x
          }), a))
        });
      Wv.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, Wv.classNames = {
        fullWidth: Av,
        zeroRight: Mv
      };
      var $v = function(e) {
        var t = e.sideCar,
          n = (0, Iv.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw new Error("Sidecar medium not found");
        return B.createElement(r, (0, Iv.__assign)({}, n))
      };
      $v.isSideCarExport = !0;
      var Xv = function() {
          var e = 0,
            t = null;
          return {
            add: function(r) {
              var o;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = n.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (function(e, t) {
                e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
              }(t, r), o = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(o)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        Hv = function() {
          var e, t = (e = Xv(), function(t, n) {
            B.useEffect(function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }, [t && n])
          });
          return function(e) {
            var n = e.styles,
              r = e.dynamic;
            return t(n, r), null
          }
        },
        Uv = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        Zv = function(e) {
          return parseInt(e || "", 10) || 0
        },
        Kv = Hv(),
        Gv = "data-scroll-locked",
        Yv = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            s = e.right,
            a = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(Gv, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(s, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Mv, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(Av, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(Mv, " .").concat(Mv, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(Av, " .").concat(Av, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(Gv, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
        },
        Qv = function() {
          var e = parseInt(document.body.getAttribute(Gv) || "0", 10);
          return isFinite(e) ? e : 0
        },
        Jv = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          B.useEffect(function() {
            return document.body.setAttribute(Gv, (Qv() + 1).toString()),
              function() {
                var e = Qv() - 1;
                e <= 0 ? document.body.removeAttribute(Gv) : document.body.setAttribute(Gv, e.toString())
              }
          }, []);
          var i = B.useMemo(function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Uv;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [Zv(n), Zv(r), Zv(o)]
                }(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
              }
            }(o)
          }, [o]);
          return B.createElement(Kv, {
            styles: Yv(i, !t, o, n ? "" : "!important")
          })
        },
        ey = !1;
      if ("undefined" != typeof window) try {
        var ty = Object.defineProperty({}, "passive", {
          get: function() {
            return ey = !0, !0
          }
        });
        window.addEventListener("test", ty, ty), window.removeEventListener("test", ty, ty)
      } catch (e) {
        ey = !1
      }
      var ny = !!ey && {
          passive: !1
        },
        ry = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        oy = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), iy(e, r)) {
              var o = sy(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        iy = function(e, t) {
          return "v" === e ? function(e) {
            return ry(e, "overflowY")
          }(t) : function(e) {
            return ry(e, "overflowX")
          }(t)
        },
        sy = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        ay = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        ly = function(e) {
          return [e.deltaX, e.deltaY]
        },
        cy = function(e) {
          return e && "current" in e ? e.current : e
        },
        uy = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        dy = 0,
        fy = [];

      function py(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const hy = (my = function(e) {
        var t = B.useRef([]),
          n = B.useRef([0, 0]),
          r = B.useRef(),
          o = B.useState(dy++)[0],
          i = B.useState(Hv)[0],
          s = B.useRef(e);
        B.useEffect(function() {
          s.current = e
        }, [e]), B.useEffect(function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, Iv.__spreadArray)([e.lockRef.current], (e.shards || []).map(cy), !0).filter(Boolean);
            return t.forEach(function(e) {
                return e.classList.add("allow-interactivity-".concat(o))
              }),
              function() {
                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                  return e.classList.remove("allow-interactivity-".concat(o))
                })
              }
          }
        }, [e.inert, e.lockRef.current, e.shards]);
        var a = B.useCallback(function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !s.current.allowPinchZoom;
            var o, i = ay(e),
              a = n.current,
              l = "deltaX" in e ? e.deltaX : a[0] - i[0],
              c = "deltaY" in e ? e.deltaY : a[1] - i[1],
              u = e.target,
              d = Math.abs(l) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === u.type) return !1;
            var f = window.getSelection(),
              p = f && f.anchorNode;
            if (p && (p === u || p.contains(u))) return !1;
            var h = oy(d, u);
            if (!h) return !0;
            if (h ? o = d : (o = "v" === d ? "h" : "v", h = oy(d, u)), !h) return !1;
            if (!r.current && "changedTouches" in e && (l || c) && (r.current = o), !o) return !0;
            var m = r.current || o;
            return function(e, t, n, r) {
              var o = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                i = o * r,
                s = n.target,
                a = t.contains(s),
                l = !1,
                c = i > 0,
                u = 0,
                d = 0;
              do {
                if (!s) break;
                var f = sy(e, s),
                  p = f[0],
                  h = f[1] - f[2] - o * p;
                (p || h) && iy(e, s) && (u += h, d += p);
                var m = s.parentNode;
                s = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m
              } while (!a && s !== document.body || a && (t.contains(s) || t === s));
              return (c && (Math.abs(u) < 1 || !1) || !c && (Math.abs(d) < 1 || !1)) && (l = !0), l
            }(m, t, e, "h" === m ? l : c)
          }, []),
          l = B.useCallback(function(e) {
            var n = e;
            if (fy.length && fy[fy.length - 1] === i) {
              var r = "deltaY" in n ? ly(n) : ay(n),
                o = t.current.filter(function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && function(e, t) {
                    return e[0] === t[0] && e[1] === t[1]
                  }(e.delta, r)
                })[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var l = (s.current.shards || []).map(cy).filter(Boolean).filter(function(e) {
                  return e.contains(n.target)
                });
                (l.length > 0 ? a(n, l[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }, []),
          c = B.useCallback(function(e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: py(r)
            };
            t.current.push(i), setTimeout(function() {
              t.current = t.current.filter(function(e) {
                return e !== i
              })
            }, 1)
          }, []),
          u = B.useCallback(function(e) {
            n.current = ay(e), r.current = void 0
          }, []),
          d = B.useCallback(function(t) {
            c(t.type, ly(t), t.target, a(t, e.lockRef.current))
          }, []),
          f = B.useCallback(function(t) {
            c(t.type, ay(t), t.target, a(t, e.lockRef.current))
          }, []);
        B.useEffect(function() {
          return fy.push(i), e.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: f
            }), document.addEventListener("wheel", l, ny), document.addEventListener("touchmove", l, ny), document.addEventListener("touchstart", u, ny),
            function() {
              fy = fy.filter(function(e) {
                return e !== i
              }), document.removeEventListener("wheel", l, ny), document.removeEventListener("touchmove", l, ny), document.removeEventListener("touchstart", u, ny)
            }
        }, []);
        var p = e.removeScrollBar,
          h = e.inert;
        return B.createElement(B.Fragment, null, h ? B.createElement(i, {
          styles: uy(o)
        }) : null, p ? B.createElement(Jv, {
          noRelative: e.noRelative,
          gapMode: e.gapMode
        }) : null)
      }, Bv.useMedium(my), $v);
      var my, vy = B.forwardRef(function(e, t) {
        return B.createElement(Wv, (0, Iv.__assign)({}, e, {
          ref: t,
          sideCar: hy
        }))
      });
      vy.classNames = Wv.classNames;
      const yy = vy;
      var gy = new WeakMap,
        by = new WeakMap,
        wy = {},
        _y = 0,
        xy = function(e) {
          return e && (e.host || xy(e.parentNode))
        },
        Cy = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = xy(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            wy[n] || (wy[n] = new WeakMap);
            var i = wy[n],
              s = [],
              a = new Set,
              l = new Set(o),
              c = function(e) {
                e && !a.has(e) && (a.add(e), c(e.parentNode))
              };
            o.forEach(c);
            var u = function(e) {
              e && !l.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (a.has(e)) u(e);
                else try {
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    l = (gy.get(e) || 0) + 1,
                    c = (i.get(e) || 0) + 1;
                  gy.set(e, l), i.set(e, c), s.push(e), 1 === l && o && by.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return u(t), a.clear(), _y++,
              function() {
                s.forEach(function(e) {
                  var t = gy.get(e) - 1,
                    o = i.get(e) - 1;
                  gy.set(e, t), i.set(e, o), t || (by.has(e) || e.removeAttribute(r), by.delete(e)), o || e.removeAttribute(n)
                }), --_y || (gy = new WeakMap, gy = new WeakMap, by = new WeakMap, wy = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        Oy = "Dialog",
        [jy, Sy] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, dv(r, ...t)]
        }(Oy),
        [Py, Ry] = jy(Oy),
        ky = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = B.useRef(null), l = B.useRef(null), [c, u] = Oh({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Oy
          });
          return (0, O.jsx)(Py, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: ef(),
            titleId: ef(),
            descriptionId: ef(),
            open: c,
            onOpenChange: u,
            onOpenToggle: B.useCallback(() => u(e => !e), [u]),
            modal: s,
            children: n
          })
        };
      ky.displayName = Oy;
      var Ey = "DialogTrigger",
        Ty = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ry(Ey, n), i = (0, Md.s)(t, o.triggerRef);
          return (0, O.jsx)(Ev.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Yy(o.open),
            ...r,
            ref: i,
            onClick: Id(e.onClick, o.onOpenToggle)
          })
        });
      Ty.displayName = Ey;
      var Ny = "DialogPortal",
        [Dy, Iy] = jy(Ny, {
          forceMount: void 0
        }),
        My = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Ry(Ny, t);
          return (0, O.jsx)(Dy, {
            scope: t,
            forceMount: n,
            children: B.Children.map(r, e => (0, O.jsx)(yh, {
              present: n || i.open,
              children: (0, O.jsx)(vh, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      My.displayName = Ny;
      var Ay = "DialogOverlay",
        zy = B.forwardRef((e, t) => {
          const n = Iy(Ay, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Ry(Ay, e.__scopeDialog);
          return i.modal ? (0, O.jsx)(yh, {
            present: r || i.open,
            children: (0, O.jsx)(Vy, {
              ...o,
              ref: t
            })
          }) : null
        });
      zy.displayName = Ay;
      var Ly = Sv("DialogOverlay.RemoveScroll"),
        Vy = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ry(Ay, n);
          return (0, O.jsx)(yy, {
            as: Ly,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, O.jsx)(Ev.div, {
              "data-state": Yy(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        Fy = "DialogContent",
        By = B.forwardRef((e, t) => {
          const n = Iy(Fy, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Ry(Fy, e.__scopeDialog);
          return (0, O.jsx)(yh, {
            present: r || i.open,
            children: i.modal ? (0, O.jsx)(qy, {
              ...o,
              ref: t
            }) : (0, O.jsx)(Wy, {
              ...o,
              ref: t
            })
          })
        });
      By.displayName = Fy;
      var qy = B.forwardRef((e, t) => {
          const n = Ry(Fy, e.__scopeDialog),
            r = B.useRef(null),
            o = (0, Md.s)(t, n.contentRef, r);
          return B.useEffect(() => {
            const e = r.current;
            if (e) return Cy(e)
          }, []), (0, O.jsx)($y, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Id(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: Id(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: Id(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        Wy = B.forwardRef((e, t) => {
          const n = Ry(Fy, e.__scopeDialog),
            r = B.useRef(!1),
            o = B.useRef(!1);
          return (0, O.jsx)($y, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                s = n.triggerRef.current?.contains(i);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        $y = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = Ry(Fy, n), l = B.useRef(null), c = (0, Md.s)(t, l);
          return Nv(), (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(bv, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, O.jsx)(Xd, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Yy(a.open),
                ...s,
                ref: c,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, O.jsxs)(O.Fragment, {
              children: [(0, O.jsx)(tg, {
                titleId: a.titleId
              }), (0, O.jsx)(ng, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        Xy = "DialogTitle",
        Hy = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ry(Xy, n);
          return (0, O.jsx)(Ev.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      Hy.displayName = Xy;
      var Uy = "DialogDescription",
        Zy = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ry(Uy, n);
          return (0, O.jsx)(Ev.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      Zy.displayName = Uy;
      var Ky = "DialogClose",
        Gy = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ry(Ky, n);
          return (0, O.jsx)(Ev.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Id(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function Yy(e) {
        return e ? "open" : "closed"
      }
      Gy.displayName = Ky;
      var Qy = "DialogTitleWarning",
        [Jy, eg] = function(e, t) {
          const n = B.createContext(t),
            r = e => {
              const {
                children: t,
                ...r
              } = e, o = B.useMemo(() => r, Object.values(r));
              return (0, O.jsx)(n.Provider, {
                value: o,
                children: t
              })
            };
          return r.displayName = e + "Provider", [r, function(r) {
            const o = B.useContext(n);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }(Qy, {
          contentName: Fy,
          titleName: Xy,
          docsSlug: "dialog"
        }),
        tg = ({
          titleId: e
        }) => {
          const t = eg(Qy),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return B.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        ng = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${eg("DialogDescriptionWarning").contentName}}.`;
          return B.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        rg = ky,
        og = Ty,
        ig = My,
        sg = zy,
        ag = By,
        lg = Hy,
        cg = Zy,
        ug = Gy;
      const dg = (0, B.createContext)({
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
        fg = ({
          altText: e,
          open: t,
          onOpenChange: n,
          defaultOpen: r,
          minZoomLevel: o = 100,
          maxZoomLevel: i = 300,
          zoomLevelStep: s = 100,
          clickAction: a = "close",
          doubleTapAction: l,
          tapAction: c,
          hideTrigger: u = !0,
          ...d
        }) => {
          const f = (0, Y.Ym)(),
            p = (0, K.rl)(),
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
            S = (0, B.useRef)(null),
            P = (0, B.useRef)(null),
            R = (0, B.useRef)(null),
            k = (0, B.useRef)(null),
            E = (0, B.useRef)(null),
            T = (0, B.useRef)(null),
            N = (0, B.useRef)(null),
            D = (0, B.useRef)(null),
            [I = !1, M] = (0, K.ic)({
              prop: t || r,
              onChange: n
            }),
            A = (0, B.useRef)(null);
          return A.current || (A.current = new Ya({
            zoomLevelOptions: {
              max: i,
              min: o,
              step: s
            },
            actionOptions: {
              click: a,
              tap: c || p ? "toggle-controls" : "close",
              doubleTap: l || p ? "zoom" : "none"
            }
          })), (0, O.jsx)(Va, {
            messages: Fa,
            locale: f,
            children: (0, O.jsx)(dg.Provider, {
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
                controlsRef: S,
                closeRef: P,
                zoomRef: R,
                zoomInRef: k,
                zoomSliderRef: E,
                zoomOutRef: T,
                resetRef: N,
                downloadRef: D,
                open: I,
                setOpen: M,
                altText: e,
                hideTrigger: u,
                slide: A.current
              },
              children: (0, O.jsx)(hg, {
                ...d
              })
            })
          })
        },
        pg = (0, B.createContext)({
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
        hg = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, B.useContext)(dg), {
            onOpenChange: n,
            openAnim: r,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = Ui(), {
              slide: t,
              setOpen: n,
              hideTrigger: r,
              overlayRef: o,
              controlsRef: i,
              triggerRef: s,
              triggerBorderRef: a,
              thumbnailRef: l,
              containerRef: c,
              zoomPanRef: u,
              placeholderRef: d,
              imageRef: f
            } = (0, B.useContext)(dg), p = (0, B.useRef)(null);
            p.current || (p.current = Bi.timeline({
              defaults: Da
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), Bi.set([d.current, f.current], {
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
                }), Bi.set([f.current], {
                  visibility: "hidden"
                }), await t.opener.loadPlaceholder(d.current), p.current.clear(), d.current && (p.current.to([d.current, f.current], {
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
                }), p.current.to([u.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), p.current.to([c.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), r && p.current.to([s.current, a.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([d.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  duration: 0
                }), p.current.fromTo([c.current], {
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
                }, 0), p.current.fromTo([d.current, f.current], {
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
                }, 0), p.current.fromTo([u.current], {
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
                }, 0), p.current.fromTo([i.current], {
                  opacity: 0,
                  [Ma]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Ma]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await ta(f.current), t.closing || (Bi.set([f.current], {
                  visibility: "visible",
                  ...Ia
                }), Bi.set([d.current], {
                  visibility: "hidden",
                  ...Ia
                }))))
              }),
              v = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              y = (0, B.useCallback)(async e => {
                e || (window.addEventListener("click", h), await v(), window.removeEventListener("click", h)), n(e)
              }, [n]),
              g = (0, B.useCallback)(() => y(!1), [y]);
            return {
              onOpenChange: y,
              openAnim: m,
              close: g
            }
          })(), {
            update: i,
            zoomIn: s,
            zoomOut: a,
            zoomTo: l,
            resetZoom: c,
            toggleControls: u
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = Ui(), {
              slide: n,
              imageRef: r,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: s,
              placeholderRef: a
            } = (0, B.useContext)(dg), l = t(async e => {
              n.zoomTo(e), Bi.set([o.current], {
                ...n.getCurrentTransform(),
                ...Ia
              })
            }), c = t(async () => {
              n.zoomTo(n.currZoomLevel + n.zoomLevels.step), Bi.to([o.current], {
                ...n.getCurrentTransform(),
                ...Ia
              })
            }), u = t(async () => {
              n.zoomTo(n.currZoomLevel - n.zoomLevels.step), Bi.to([o.current], {
                ...n.getCurrentTransform(),
                ...Ia
              })
            }), d = t(async () => {
              n.zoomAndPanToInitial(), Bi.to([o.current], {
                ...n.getCurrentTransform(),
                ...Ia
              })
            }), f = t(async () => {
              if (n.closing) return;
              n.toggleControls();
              const e = n.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              Bi.to([i.current], {
                opacity: e,
                [Ma]: t,
                ...Ia
              })
            }), p = t(async () => {
              Bi.to([o.current], {
                ...n.getCurrentTransform(),
                ...Ia
              })
            }), h = (0, B.useCallback)(() => {
              r.current && o.current && (n.resize(), Bi.set([o.current], {
                ...n.getCurrentTransform(),
                ...Ia
              }), Bi.set([r.current, a.current], {
                ...n.getUpdatedContentSize(),
                ...Ia
              }), Bi.set([s.current], {
                width: n.panAreaSize.x,
                height: n.panAreaSize.y
              }))
            }, []);
            return (0, B.useEffect)(() => (n.addEventListener("close", e), n.addEventListener("animate", p), n.addEventListener("toggle-controls", f), window.addEventListener("resize", h), () => {
              n.removeEventListener("close", e), n.removeEventListener("animate", p), n.removeEventListener("toggle-controls", f), window.removeEventListener("resize", h)
            }), []), {
              zoomIn: c,
              zoomOut: u,
              zoomTo: l,
              resetZoom: d,
              toggleControls: f,
              update: p
            }
          })({
            close: o
          }), d = (0, H.v6)(e, {
            open: t,
            onOpenChange: n
          });
          return (0, O.jsx)(pg.Provider, {
            value: {
              update: i,
              openAnim: r,
              close: o,
              zoomIn: s,
              zoomOut: a,
              zoomTo: l,
              resetZoom: c,
              toggleControls: u,
              onOpenChange: n
            },
            children: (0, O.jsx)(rg, {
              ...d
            })
          })
        },
        mg = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const o = (0, La.A)(),
            {
              triggerRef: i,
              triggerBorderRef: s,
              altText: a
            } = (0, B.useContext)(dg),
            l = (0, K.UP)(i, r),
            c = (0, H.v6)(n, {
              "data-testid": e,
              "aria-label": o.formatMessage(el.OpenButtonLabel, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, O.jsx)(og, {
            ref: l,
            ...c,
            children: (0, O.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, O.jsx)(G.xV, {
                children: t
              })
            })
          })
        }),
        vg = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            thumbnailRef: o
          } = (0, B.useContext)(dg), i = (0, K.UP)(o, r), s = (0, H.v6)(n, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? G.DX : "img";
          return (0, O.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        yg = (0, B.forwardRef)(function({
          asChild: e,
          ...t
        }, n) {
          const {
            openIconRef: r
          } = (0, B.useContext)(dg), o = (0, K.UP)(r, n), i = (0, H.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? G.DX : ee.Maximize2;
          return (0, O.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        gg = ({
          ...e
        }) => (0, O.jsx)(ig, {
          ...e
        }),
        bg = (0, B.forwardRef)(function({
          testId: e,
          ...t
        }, n) {
          const {
            overlayRef: r
          } = (0, B.useContext)(dg), o = (0, K.UP)(r, n), i = (0, H.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, O.jsx)(sg, {
            ref: o,
            ...i
          })
        }),
        wg = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const {
            openAnim: o
          } = (0, B.useContext)(pg), {
            contentRef: i,
            altText: s,
            triggerRef: a
          } = (0, B.useContext)(dg), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, B.useContext)(dg), [t, n] = (0, B.useState)(e.getCursor()), r = (0, B.useCallback)(() => {
              n(e.getCursor())
            }, []);
            return (0, B.useEffect)(() => (e.addEventListener("zoom", r), () => {
              e.removeEventListener("zoom", r)
            }), [r]), {
              cursor: t
            }
          })(), c = [Qa.xW.tokens, Qa.xW.typography, Ja("dark")].join(" ");
          const u = (0, K.UP)(i, r),
            d = (0, H.v6)(n, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, a),
              className: (0, J.$)("foundry_1a74xwb9", c),
              style: {
                cursor: l
              }
            });
          return (0, O.jsxs)(ag, {
            ref: u,
            ...d,
            children: [(0, O.jsx)(G.s6, {
              children: (0, O.jsx)(lg, {
                children: s
              })
            }), t]
          })
        }),
        _g = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const {
            containerRef: o
          } = (0, B.useContext)(dg);
          (() => {
            const {
              contextSafe: e
            } = Ui(), {
              toggleControls: t
            } = (0, B.useContext)(pg), {
              containerRef: n,
              zoomPanRef: r,
              overlayRef: o,
              controlsRef: i,
              slide: s
            } = (0, B.useContext)(dg), a = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (Bi.to([r.current], {
                ...s.getCurrentTransform(),
                ...Ia
              }), Bi.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Ia
              }), Bi.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...Ia
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || Bi.to([r.current], {
                ...s.getCurrentTransform(),
                ...Ia
              }))
            }), c = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (Bi.to([r.current], {
                ...s.getCurrentTransform(),
                ...Ia
              }), Bi.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Ia
              }), Bi.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...Ia
              })))
            }), u = (0, B.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, K.iQ)({
              ref: i,
              onFocusIn: u
            }), ea({
              onWheel: l,
              onDrag: a,
              onPinch: c
            }, {
              target: n,
              drag: {
                filterTaps: !0
              },
              pinch: {
                pinchOnWheel: !1
              }
            })
          })();
          const i = (0, K.UP)(o, r),
            s = (0, H.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, O.jsx)("div", {
            ref: i,
            ...s,
            children: (0, O.jsxs)(xg, {
              children: [(0, O.jsx)(Cg, {}), t]
            })
          })
        }),
        xg = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            zoomPanRef: o
          } = (0, B.useContext)(dg), i = (0, K.UP)(o, r), s = (0, H.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? G.DX : "div";
          return (0, O.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Cg = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            placeholderRef: o
          } = (0, B.useContext)(dg), i = (0, K.UP)(o, r), s = (0, H.v6)(n, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? G.DX : "img";
          return (0, O.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Og = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            imageRef: o
          } = (0, B.useContext)(dg), i = (0, K.UP)(o, r), s = (0, H.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? G.DX : "img";
          return (0, O.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        jg = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            captionRef: o
          } = (0, B.useContext)(dg), i = (0, K.UP)(o, r), s = (0, H.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? G.DX : "p";
          return (0, O.jsx)(cg, {
            asChild: !0,
            children: (0, O.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Sg = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            controlsRef: o
          } = (0, B.useContext)(dg);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: n,
              resetZoom: r,
              close: o
            } = (0, B.useContext)(pg);
            Oa(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Oa(["minus", "subtract"], n, {
              enabled: e,
              preventDefault: !0
            }), Oa("r", r, {
              enabled: e,
              preventDefault: !0
            }), Oa("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = (0, K.UP)(o, r),
            s = (0, H.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? G.DX : "div";
          return (0, O.jsx)(_a, {
            children: (0, O.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Pg = ({
          content: e,
          metadata: t,
          enabled: n = !0,
          children: r,
          ...o
        }) => {
          if (!n) return (0, O.jsx)(O.Fragment, {
            children: r
          });
          const i = (0, H.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, O.jsxs)(hm, {
            delayDuration: 0,
            children: [(0, O.jsx)(mm, {
              children: r
            }), (0, O.jsxs)(vm, {
              ...i,
              children: [(0, O.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, O.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, O.jsx)(ym, {})]
            })]
          })
        },
        Rg = (0, B.forwardRef)(function({
          ...e
        }, t) {
          const n = (0, H.v6)(e, {
            isInline: !0
          });
          return (0, O.jsx)(nl, {
            ref: t,
            ...n
          })
        }),
        kg = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: n = !0,
          children: r,
          ...o
        }, i) {
          const s = (0, La.A)(),
            {
              zoomRef: a
            } = (0, B.useContext)(dg),
            {
              canZoomIn: l,
              zoomIn: c,
              canZoomOut: u,
              zoomOut: d,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: h,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, B.useContext)(dg), {
                zoomIn: t,
                zoomOut: n,
                zoomTo: r
              } = (0, B.useContext)(pg), [o, i] = (0, B.useState)(!1), [s, a] = (0, B.useState)(!1), [l, c] = (0, B.useState)(0), [u, d] = (0, B.useState)(0), [f, p] = (0, B.useState)(0), h = (0, B.useCallback)(() => {
                i(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), c(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, B.useCallback)(([e]) => {
                r(e / 100)
              }, [r]);
              return (0, B.useEffect)(() => (e.addEventListener("zoom", h), () => {
                e.removeEventListener("zoom", h)
              }), [h]), {
                zoomTo: m,
                zoomIn: t,
                zoomOut: n,
                canZoomIn: o,
                canZoomOut: s,
                zoomProgress: l,
                minZoomLevel: u,
                maxZoomLevel: f
              }
            })(),
            v = (0, K.UP)(a, i),
            y = (0, H.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? G.DX : "div";
          return (0, O.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, O.jsx)(Pg, {
              side: "left",
              enabled: n,
              content: s.formatMessage(el.ZoomInButtonLabel),
              metadata: s.formatMessage(el.ZoomInButtonTooltip, {
                shortcut: (0, O.jsx)(Rg, {
                  shortcut: "+"
                })
              }),
              children: (0, O.jsx)(_e, {
                label: s.formatMessage(el.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Na({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, O.jsxs)(av, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, O.jsx)(lv, {
                className: "foundry_1a74xwbu",
                children: (0, O.jsx)(cv, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, O.jsx)(Pg, {
                side: "left",
                enabled: n,
                content: s.formatMessage(el.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, O.jsx)(uv, {
                  className: "foundry_1a74xwbw",
                  children: (0, O.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, O.jsx)(Pg, {
              side: "left",
              enabled: n,
              content: s.formatMessage(el.ZoomOutButtonLabel),
              metadata: s.formatMessage(el.ZoomOutButtonTooltip, {
                shortcut: (0, O.jsx)(Rg, {
                  shortcut: "-"
                })
              }),
              children: (0, O.jsx)(_e, {
                label: s.formatMessage(el.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Na({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !u
              })
            }), (0, O.jsx)(G.xV, {
              children: r
            })]
          })
        }),
        Eg = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: n = !0,
          ...r
        }, o) {
          const i = (0, La.A)(),
            {
              closeRef: s
            } = (0, B.useContext)(dg),
            a = (0, K.UP)(s, o),
            l = (0, H.v6)(r, {
              "data-testid": e,
              className: Ta({
                styled: !t
              })
            }),
            c = t ? (0, O.jsx)(G.DX, {
              ref: a,
              ...l
            }) : (0, O.jsx)(_e, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: i.formatMessage(el.CloseButtonLabel)
            });
          return (0, O.jsx)(Pg, {
            side: "right",
            enabled: n,
            content: i.formatMessage(el.CloseButtonLabel),
            metadata: i.formatMessage(el.CloseButtonTooltip, {
              shortcut: (0, O.jsx)(Rg, {
                shortcut: "Esc"
              })
            }),
            children: (0, O.jsx)(ug, {
              asChild: !0,
              children: c
            })
          })
        }),
        Tg = (0, B.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...n
        }, r) {
          const o = (0, La.A)(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, B.useContext)(dg), {
                contextSafe: n
              } = Ui(), {
                resetZoom: r
              } = (0, B.useContext)(pg), [o, i] = (0, B.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = n(e => {
                Bi.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Ia
                })
              }), a = (0, B.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                i(t), s(t)
              }, [i]);
              return (0, B.useEffect)(() => (e.addEventListener("zoom", a), () => {
                e.removeEventListener("zoom", a)
              }), [a]), {
                isDisabled: !o,
                onPress: r,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, B.useContext)(dg),
            a = (0, K.UP)(s, r),
            l = (0, H.v6)(n, i, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, O.jsx)(Pg, {
            side: "left",
            enabled: t,
            content: o.formatMessage(el.ResetZoomButtonLabel),
            metadata: o.formatMessage(el.ResetZoomButtonTooltip, {
              shortcut: (0, O.jsx)(Rg, {
                shortcut: "R"
              })
            }),
            children: (0, O.jsx)(_e, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(el.ResetZoomButtonLabel)
            })
          })
        }),
        Ng = (0, B.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...n
        }, r) {
          const o = (0, La.A)(),
            {
              downloadRef: i,
              imageRef: s
            } = (0, B.useContext)(dg),
            a = (0, K.UP)(i, r),
            l = (0, H.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, O.jsx)(Pg, {
            side: "left",
            enabled: t,
            content: o.formatMessage(el.DownloadButtonTooltip),
            children: (0, O.jsx)(_e, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(el.DownloadButtonTooltip),
              onPress: () => (async e => {
                if (!e) return;
                const t = e.currentSrc,
                  n = t.split("\\").pop()?.split("/").pop() || "";
                fetch(t, {
                  headers: {
                    origin: location.origin
                  }
                }).then(e => e.blob()).then(e => {
                  ((e, t) => {
                    const n = document.createElement("a");
                    n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
                  })(window.URL.createObjectURL(e), n)
                }).catch(e => console.error(e))
              })(s.current)
            })
          })
        }),
        Dg = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Ig = n(70364);

      function Mg(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ag(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function zg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ag(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Mg(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ag(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Lg(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Vg = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Fg = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = zg(zg({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Vg(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lg(e.variantClassNames, e => Lg(e, e => e.split(" ")[0]))
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
      const Bg = (0, B.createContext)(null);

      function qg() {
        const e = (0, B.useContext)(Bg);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Wg = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          descriptionId: r = "",
          errorId: o = "",
          status: i = "neutral",
          ...s
        }, a) => {
          const l = (0, H.v6)({
              className: Fg({
                status: i
              }),
              "data-testid": t
            }, s),
            c = n ? G.DX : "div";
          return (0, O.jsx)(Bg.Provider, {
            value: {
              descriptionId: r,
              errorId: o,
              status: i,
              ...s
            },
            children: (0, O.jsx)(c, {
              ...l,
              ref: a,
              children: e
            })
          })
        }),
        $g = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          ...n
        }, r) => {
          const {
            status: o
          } = qg(), i = (0, H.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, n), s = {
            success: ee.Check,
            invalid: ee.X,
            neutral: ee.TriangleAlert
          }, a = t ? G.DX : s[o];
          return (0, O.jsx)(a, {
            ref: r,
            ...i
          })
        }),
        Xg = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            errorId: s
          } = qg(), a = (0, H.v6)({
            "data-testid": t,
            id: s || i
          }, r), l = n ? G.DX : "div";
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });

      function Hg(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Ug = Symbol("radix.slottable");

      function Zg(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Ug
      }
      var Kg = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const n = function(e) {
            const t = Hg(e),
              n = B.forwardRef((e, n) => {
                const {
                  children: r,
                  ...o
                } = e, i = B.Children.toArray(r), s = i.find(Zg);
                if (s) {
                  const e = s.props.children,
                    r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                  })
                }
                return (0, O.jsx)(t, {
                  ...o,
                  ref: n,
                  children: r
                })
              });
            return n.displayName = `${e}.Slot`, n
          }(`Primitive.${t}`),
          r = B.forwardRef((e, r) => {
            const {
              asChild: o,
              ...i
            } = e, s = o ? n : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
              ...i,
              ref: r
            })
          });
        return r.displayName = `Primitive.${t}`, {
          ...e,
          [t]: r
        }
      }, {});

      function Gg(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var Yg = "ScrollArea",
        [Qg, Jg] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, Gg(r, ...t)]
        }(Yg),
        [eb, tb] = Qg(Yg),
        nb = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...s
          } = e, [a, l] = B.useState(null), [c, u] = B.useState(null), [d, f] = B.useState(null), [p, h] = B.useState(null), [m, v] = B.useState(null), [y, g] = B.useState(0), [b, w] = B.useState(0), [_, x] = B.useState(!1), [C, j] = B.useState(!1), S = (0, Md.s)(t, e => l(e)), P = xm(o);
          return (0, O.jsx)(eb, {
            scope: n,
            type: r,
            dir: P,
            scrollHideDelay: i,
            scrollArea: a,
            viewport: c,
            onViewportChange: u,
            content: d,
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
            children: (0, O.jsx)(Kg.div, {
              dir: P,
              ...s,
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
      nb.displayName = Yg;
      var rb = "ScrollAreaViewport",
        ob = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...i
          } = e, s = tb(rb, n), a = B.useRef(null), l = (0, Md.s)(t, a, s.onViewportChange);
          return (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, O.jsx)(Kg.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, O.jsx)("div", {
                ref: s.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: r
              })
            })]
          })
        });
      ob.displayName = rb;
      var ib = "ScrollAreaScrollbar",
        sb = B.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = tb(ib, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: s
          } = o, a = "horizontal" === e.orientation;
          return B.useEffect(() => (a ? i(!0) : s(!0), () => {
            a ? i(!1) : s(!1)
          }), [a, i, s]), "hover" === o.type ? (0, O.jsx)(ab, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, O.jsx)(lb, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, O.jsx)(cb, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, O.jsx)(ub, {
            ...r,
            ref: t
          }) : null
        });
      sb.displayName = ib;
      var ab = B.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = tb(ib, e.__scopeScrollArea), [i, s] = B.useState(!1);
          return B.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const n = () => {
                  window.clearTimeout(t), s(!0)
                },
                r = () => {
                  t = window.setTimeout(() => s(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, O.jsx)(yh, {
            present: n || i,
            children: (0, O.jsx)(cb, {
              "data-state": i ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        }),
        lb = B.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = tb(ib, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = Rb(() => l("SCROLL_END"), 100), [a, l] = (c = {
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
          }, B.useReducer((e, t) => c[e][t] ?? e, "hidden"));
          var c;
          return B.useEffect(() => {
            if ("idle" === a) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [a, o.scrollHideDelay, l]), B.useEffect(() => {
            const e = o.viewport,
              t = i ? "scrollLeft" : "scrollTop";
            if (e) {
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (l("SCROLL"), s()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [o.viewport, i, l, s]), (0, O.jsx)(yh, {
            present: n || "hidden" !== a,
            children: (0, O.jsx)(ub, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: Id(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: Id(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        cb = B.forwardRef((e, t) => {
          const n = tb(ib, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [i, s] = B.useState(!1),
            a = "horizontal" === e.orientation,
            l = Rb(() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                s(a ? e : t)
              }
            }, 10);
          return kb(n.viewport, l), kb(n.content, l), (0, O.jsx)(yh, {
            present: r || i,
            children: (0, O.jsx)(ub, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        ub = B.forwardRef((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = tb(ib, e.__scopeScrollArea), i = B.useRef(null), s = B.useRef(0), [a, l] = B.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = xb(a.viewport, a.content), u = {
            ...r,
            sizes: a,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function d(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = Cb(n),
                i = t || o / 2,
                s = o - i,
                a = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - s,
                c = n.content - n.viewport;
              return jb([a, l], "ltr" === r ? [0, c] : [-1 * c, 0])(e)
            }(e, s.current, a, t)
          }
          return "horizontal" === n ? (0, O.jsx)(db, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Ob(o.viewport.scrollLeft, a, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === n ? (0, O.jsx)(fb, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Ob(o.viewport.scrollTop, a);
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
        }),
        db = B.forwardRef((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = tb(ib, e.__scopeScrollArea), [s, a] = B.useState(), l = B.useRef(null), c = (0, Md.s)(t, l, i.onScrollbarXChange);
          return B.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, O.jsx)(mb, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Cb(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), Sb(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && r({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: _b(s.paddingLeft),
                  paddingEnd: _b(s.paddingRight)
                }
              })
            }
          })
        }),
        fb = B.forwardRef((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = tb(ib, e.__scopeScrollArea), [s, a] = B.useState(), l = B.useRef(null), c = (0, Md.s)(t, l, i.onScrollbarYChange);
          return B.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, O.jsx)(mb, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Cb(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), Sb(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && r({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: _b(s.paddingTop),
                  paddingEnd: _b(s.paddingBottom)
                }
              })
            }
          })
        }),
        [pb, hb] = Qg(ib),
        mb = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: r,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: s,
            onThumbPointerDown: a,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: u,
            onResize: d,
            ...f
          } = e, p = tb(ib, n), [h, m] = B.useState(null), v = (0, Md.s)(t, e => m(e)), y = B.useRef(null), g = B.useRef(""), b = p.viewport, w = r.content - r.viewport, _ = Bd(u), x = Bd(l), C = Rb(d, 10);

          function j(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                n = e.clientY - y.current.top;
              c({
                x: t,
                y: n
              })
            }
          }
          return B.useEffect(() => {
            const e = e => {
              const t = e.target,
                n = h?.contains(t);
              n && _(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, h, w, _]), B.useEffect(x, [r, x]), kb(h, C), kb(p.content, C), (0, O.jsx)(pb, {
            scope: n,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: Bd(i),
            onThumbPointerUp: Bd(s),
            onThumbPositionChange: x,
            onThumbPointerDown: Bd(a),
            children: (0, O.jsx)(Kg.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: Id(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: Id(e.onPointerMove, j),
              onPointerUp: Id(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        vb = "ScrollAreaThumb",
        yb = B.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = hb(vb, e.__scopeScrollArea);
          return (0, O.jsx)(yh, {
            present: n || o.hasThumb,
            children: (0, O.jsx)(gb, {
              ref: t,
              ...r
            })
          })
        }),
        gb = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, i = tb(vb, n), s = hb(vb, n), {
            onThumbPositionChange: a
          } = s, l = (0, Md.s)(t, e => s.onThumbChange(e)), c = B.useRef(void 0), u = Rb(() => {
            c.current && (c.current(), c.current = void 0)
          }, 100);
          return B.useEffect(() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = Pb(e, a);
                  c.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [i.viewport, u, a]), (0, O.jsx)(Kg.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Id(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              s.onThumbPointerDown({
                x: n,
                y: r
              })
            }),
            onPointerUp: Id(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      yb.displayName = vb;
      var bb = "ScrollAreaCorner";
      B.forwardRef((e, t) => {
        const n = tb(bb, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, O.jsx)(wb, {
          ...e,
          ref: t
        }) : null
      }).displayName = bb;
      var wb = B.forwardRef((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = tb(bb, n), [i, s] = B.useState(0), [a, l] = B.useState(0), c = Boolean(i && a);
        return kb(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), kb(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), c ? (0, O.jsx)(Kg.div, {
          ...r,
          ref: t,
          style: {
            width: i,
            height: a,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function _b(e) {
        return e ? parseInt(e, 10) : 0
      }

      function xb(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function Cb(e) {
        const t = xb(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function Ob(e, t, n = "ltr") {
        const r = Cb(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - r,
          l = bm(e, "ltr" === n ? [0, s] : [-1 * s, 0]);
        return jb([0, s], [0, a])(l)
      }

      function jb(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function Sb(e, t) {
        return e > 0 && e < t
      }
      var Pb = (e, t = () => {}) => {
        let n = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          r = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = n.left !== i.left,
            a = n.top !== i.top;
          (s || a) && t(), n = i, r = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(r)
      };

      function Rb(e, t) {
        const n = Bd(e),
          r = B.useRef(0);
        return B.useEffect(() => () => window.clearTimeout(r.current), []), B.useCallback(() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }, [n, t])
      }

      function kb(e, t) {
        const n = Bd(t);
        Yd(() => {
          let t = 0;
          if (e) {
            const r = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            });
            return r.observe(e), () => {
              window.cancelAnimationFrame(t), r.unobserve(e)
            }
          }
        }, [e, n])
      }
      var Eb = nb,
        Tb = ob,
        Nb = sb,
        Db = yb;

      function Ib(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function Mb(e) {
        const t = Ab(e),
          n = B.forwardRef((e, n) => {
            const {
              children: r,
              ...o
            } = e, i = B.Children.toArray(r), s = i.find(Lb);
            if (s) {
              const e = s.props.children,
                r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, O.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, O.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function Ab(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var zb = Symbol("radix.slottable");

      function Lb(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === zb
      }
      var Vb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = Mb(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        Fb = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Bb = [" ", "Enter"],
        qb = "Select",
        [Wb, $b, Xb] = Dm(qb),
        [Hb, Ub] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, Ib(r, ...t)]
        }(qb, [Xb, Hp]),
        Zb = Hp(),
        [Kb, Gb] = Hb(qb),
        [Yb, Qb] = Hb(qb),
        Jb = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            value: s,
            defaultValue: a,
            onValueChange: l,
            dir: c,
            name: u,
            autoComplete: d,
            disabled: f,
            required: p,
            form: h
          } = e, m = Zb(t), [v, y] = B.useState(null), [g, b] = B.useState(null), [w, _] = B.useState(!1), x = xm(c), [C, j] = Oh({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: qb
          }), [S, P] = Oh({
            prop: s,
            defaultProp: a,
            onChange: l,
            caller: qb
          }), R = B.useRef(null), k = !v || h || !!v.closest("form"), [E, T] = B.useState(new Set), N = Array.from(E).map(e => e.props.value).join(";");
          return (0, O.jsx)(lh, {
            ...m,
            children: (0, O.jsxs)(Kb, {
              required: p,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: _,
              contentId: ef(),
              value: S,
              onValueChange: P,
              open: C,
              onOpenChange: j,
              dir: x,
              triggerPointerDownPosRef: R,
              disabled: f,
              children: [(0, O.jsx)(Wb.Provider, {
                scope: t,
                children: (0, O.jsx)(Yb, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: B.useCallback(e => {
                    T(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: B.useCallback(e => {
                    T(t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    })
                  }, []),
                  children: n
                })
              }), k ? (0, O.jsxs)(Iw, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: S,
                onChange: e => P(e.target.value),
                disabled: f,
                form: h,
                children: [void 0 === S ? (0, O.jsx)("option", {
                  value: ""
                }) : null, Array.from(E)]
              }, N) : null]
            })
          })
        };
      Jb.displayName = qb;
      var ew = "SelectTrigger",
        tw = B.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, i = Zb(n), s = Gb(ew, n), a = s.disabled || r, l = (0, Md.s)(t, s.onTriggerChange), c = $b(n), u = B.useRef("touch"), [d, f, p] = Aw(e => {
            const t = c().filter(e => !e.disabled),
              n = t.find(e => e.value === s.value),
              r = zw(t, e, n);
            void 0 !== r && s.onValueChange(r.value)
          }), h = e => {
            a || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, O.jsx)(ch, {
            asChild: !0,
            ...i,
            children: (0, O.jsx)(Vb.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: a,
              "data-disabled": a ? "" : void 0,
              "data-placeholder": Mw(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: Id(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== u.current && h(e)
              }),
              onPointerDown: Id(o.onPointerDown, e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: Id(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Fb.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      tw.displayName = ew;
      var nw = "SelectValue",
        rw = B.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = Gb(nw, n), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== i, d = (0, Md.s)(t, l.onValueNodeChange);
          return Yd(() => {
            c(u)
          }, [c, u]), (0, O.jsx)(Vb.span, {
            ...a,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: Mw(l.value) ? (0, O.jsx)(O.Fragment, {
              children: s
            }) : i
          })
        });
      rw.displayName = nw;
      var ow = B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, O.jsx)(Vb.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      });
      ow.displayName = "SelectIcon";
      var iw = e => (0, O.jsx)(vh, {
        asChild: !0,
        ...e
      });
      iw.displayName = "SelectPortal";
      var sw = "SelectContent",
        aw = B.forwardRef((e, t) => {
          const n = Gb(sw, e.__scopeSelect),
            [r, o] = B.useState();
          if (Yd(() => {
              o(new DocumentFragment)
            }, []), !n.open) {
            const t = r;
            return t ? bd.createPortal((0, O.jsx)(cw, {
              scope: e.__scopeSelect,
              children: (0, O.jsx)(Wb.Slot, {
                scope: e.__scopeSelect,
                children: (0, O.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, O.jsx)(fw, {
            ...e,
            ref: t
          })
        });
      aw.displayName = sw;
      var lw = 10,
        [cw, uw] = Hb(sw),
        dw = Mb("SelectContent.RemoveScroll"),
        fw = B.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            position: r = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            side: a,
            sideOffset: l,
            align: c,
            alignOffset: u,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = Gb(sw, n), [b, w] = B.useState(null), [_, x] = B.useState(null), C = (0, Md.s)(t, e => w(e)), [j, S] = B.useState(null), [P, R] = B.useState(null), k = $b(n), [E, T] = B.useState(!1), N = B.useRef(!1);
          B.useEffect(() => {
            if (b) return Cy(b)
          }, [b]), Nv();
          const D = B.useCallback(e => {
              const [t, ...n] = k().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && _ && (_.scrollTop = 0), n === r && _ && (_.scrollTop = _.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }, [k, _]),
            I = B.useCallback(() => D([j, b]), [D, j, b]);
          B.useEffect(() => {
            E && I()
          }, [E, I]);
          const {
            onOpenChange: M,
            triggerPointerDownPosRef: A
          } = g;
          B.useEffect(() => {
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
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : b.contains(n.target) || M(!1), document.removeEventListener("pointermove", t), A.current = null
                };
              return null !== A.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }, [b, M, A]), B.useEffect(() => {
            const e = () => M(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [M]);
          const [z, L] = Aw(e => {
            const t = k().filter(e => !e.disabled),
              n = t.find(e => e.ref.current === document.activeElement),
              r = zw(t, e, n);
            r && setTimeout(() => r.ref.current.focus())
          }), V = B.useCallback((e, t, n) => {
            const r = !N.current && !n;
            (void 0 !== g.value && g.value === t || r) && (S(e), r && (N.current = !0))
          }, [g.value]), F = B.useCallback(() => b?.focus(), [b]), q = B.useCallback((e, t, n) => {
            const r = !N.current && !n;
            (void 0 !== g.value && g.value === t || r) && R(e)
          }, [g.value]), W = "popper" === r ? hw : pw, $ = W === hw ? {
            side: a,
            sideOffset: l,
            align: c,
            alignOffset: u,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v
          } : {};
          return (0, O.jsx)(cw, {
            scope: n,
            content: b,
            viewport: _,
            onViewportChange: x,
            itemRefCallback: V,
            selectedItem: j,
            onItemLeave: F,
            itemTextRefCallback: q,
            focusSelectedItem: I,
            selectedItemText: P,
            position: r,
            isPositioned: E,
            searchRef: z,
            children: (0, O.jsx)(yy, {
              as: dw,
              allowPinchZoom: !0,
              children: (0, O.jsx)(bv, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Id(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, O.jsx)(Xd, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, O.jsx)(W, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...$,
                    onPlaced: () => T(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: Id(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || L(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = k().filter(e => !e.disabled);
                        let n = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout(() => D(n)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      fw.displayName = "SelectContentImpl";
      var pw = B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, i = Gb(sw, n), s = uw(sw, n), [a, l] = B.useState(null), [c, u] = B.useState(null), d = (0, Md.s)(t, e => u(e)), f = $b(n), p = B.useRef(!1), h = B.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = s, b = B.useCallback(() => {
          if (i.trigger && i.valueNode && a && c && m && v && y) {
            const e = i.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              n = i.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const r = o.left - t.left,
                i = n.left - r,
                s = e.left - i,
                l = e.width + s,
                c = Math.max(l, t.width),
                u = window.innerWidth - lw,
                d = bm(i, [lw, Math.max(lw, u - c)]);
              a.style.minWidth = l + "px", a.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                s = window.innerWidth - e.right - i,
                l = e.width + s,
                c = Math.max(l, t.width),
                u = window.innerWidth - lw,
                d = bm(i, [lw, Math.max(lw, u - c)]);
              a.style.minWidth = l + "px", a.style.right = d + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * lw,
              u = m.scrollHeight,
              d = window.getComputedStyle(c),
              h = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              w = h + g + u + parseInt(d.paddingBottom, 10) + b,
              _ = Math.min(5 * v.offsetHeight, w),
              x = window.getComputedStyle(m),
              C = parseInt(x.paddingTop, 10),
              O = parseInt(x.paddingBottom, 10),
              j = e.top + e.height / 2 - lw,
              S = l - j,
              P = v.offsetHeight / 2,
              R = h + g + (v.offsetTop + P),
              k = w - R;
            if (R <= j) {
              const e = s.length > 0 && v === s[s.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = c.clientHeight - m.offsetTop - m.offsetHeight,
                n = R + Math.max(S, P + (e ? O : 0) + t + b);
              a.style.height = n + "px"
            } else {
              const e = s.length > 0 && v === s[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(j, h + m.offsetTop + (e ? C : 0) + P) + k;
              a.style.height = t + "px", m.scrollTop = R - j + m.offsetTop
            }
            a.style.margin = `${lw}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = l + "px", r?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, i.trigger, i.valueNode, a, c, m, v, y, i.dir, r]);
        Yd(() => b(), [b]);
        const [w, _] = B.useState();
        Yd(() => {
          c && _(window.getComputedStyle(c).zIndex)
        }, [c]);
        const x = B.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, O.jsx)(mw, {
          scope: n,
          contentWrapper: a,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: x,
          children: (0, O.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, O.jsx)(Vb.div, {
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
      pw.displayName = "SelectItemAlignedPosition";
      var hw = B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = lw,
          ...i
        } = e, s = Zb(n);
        return (0, O.jsx)(uh, {
          ...s,
          ...i,
          ref: t,
          align: r,
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
      });
      hw.displayName = "SelectPopperPosition";
      var [mw, vw] = Hb(sw, {}), yw = "SelectViewport", gw = B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, i = uw(yw, n), s = vw(yw, n), a = (0, Md.s)(t, i.onViewportChange), l = B.useRef(0);
        return (0, O.jsxs)(O.Fragment, {
          children: [(0, O.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, O.jsx)(Wb.Slot, {
            scope: n,
            children: (0, O.jsx)(Vb.div, {
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
              onScroll: Id(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = s;
                if (r?.current && n) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * lw,
                      o = parseFloat(n.style.minHeight),
                      i = parseFloat(n.style.height),
                      s = Math.max(o, i);
                    if (s < r) {
                      const o = s + e,
                        i = Math.min(r, o),
                        a = o - i;
                      n.style.height = i + "px", "0px" === n.style.bottom && (t.scrollTop = a > 0 ? a : 0, n.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              })
            })
          })]
        })
      });
      gw.displayName = yw;
      var bw = "SelectGroup",
        [ww, _w] = Hb(bw);
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = ef();
        return (0, O.jsx)(ww, {
          scope: n,
          id: o,
          children: (0, O.jsx)(Vb.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      }).displayName = bw;
      var xw = "SelectLabel";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = _w(xw, n);
        return (0, O.jsx)(Vb.div, {
          id: o.id,
          ...r,
          ref: t
        })
      }).displayName = xw;
      var Cw = "SelectItem",
        [Ow, jw] = Hb(Cw),
        Sw = B.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: i,
            ...s
          } = e, a = Gb(Cw, n), l = uw(Cw, n), c = a.value === r, [u, d] = B.useState(i ?? ""), [f, p] = B.useState(!1), h = (0, Md.s)(t, e => l.itemRefCallback?.(e, r, o)), m = ef(), v = B.useRef("touch"), y = () => {
            o || (a.onValueChange(r), a.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, O.jsx)(Ow, {
            scope: n,
            value: r,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: B.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, O.jsx)(Wb.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: u,
              children: (0, O.jsx)(Vb.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": c && f,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: h,
                onFocus: Id(s.onFocus, () => p(!0)),
                onBlur: Id(s.onBlur, () => p(!1)),
                onClick: Id(s.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: Id(s.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: Id(s.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: Id(s.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: Id(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: Id(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (Bb.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Sw.displayName = Cw;
      var Pw = "SelectItemText",
        Rw = B.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...i
          } = e, s = Gb(Pw, n), a = uw(Pw, n), l = jw(Pw, n), c = Qb(Pw, n), [u, d] = B.useState(null), f = (0, Md.s)(t, e => d(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), p = u?.textContent, h = B.useMemo(() => (0, O.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: p
          }, l.value), [l.disabled, l.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return Yd(() => (m(h), () => v(h)), [m, v, h]), (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(Vb.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? bd.createPortal(i.children, s.valueNode) : null]
          })
        });
      Rw.displayName = Pw;
      var kw = "SelectItemIndicator";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return jw(kw, n).isSelected ? (0, O.jsx)(Vb.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      }).displayName = kw;
      var Ew = "SelectScrollUpButton";
      B.forwardRef((e, t) => {
        const n = uw(Ew, e.__scopeSelect),
          r = vw(Ew, e.__scopeSelect),
          [o, i] = B.useState(!1),
          s = (0, Md.s)(t, r.onScrollButtonChange);
        return Yd(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), o ? (0, O.jsx)(Nw, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = Ew;
      var Tw = "SelectScrollDownButton";
      B.forwardRef((e, t) => {
        const n = uw(Tw, e.__scopeSelect),
          r = vw(Tw, e.__scopeSelect),
          [o, i] = B.useState(!1),
          s = (0, Md.s)(t, r.onScrollButtonChange);
        return Yd(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              i(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), o ? (0, O.jsx)(Nw, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = Tw;
      var Nw = B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, i = uw("SelectScrollButton", n), s = B.useRef(null), a = $b(n), l = B.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return B.useEffect(() => () => l(), [l]), Yd(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, O.jsx)(Vb.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Id(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(r, 50))
          }),
          onPointerMove: Id(o.onPointerMove, () => {
            i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(r, 50))
          }),
          onPointerLeave: Id(o.onPointerLeave, () => {
            l()
          })
        })
      });
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, O.jsx)(Vb.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Dw = "SelectArrow";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Zb(n), i = Gb(Dw, n), s = uw(Dw, n);
        return i.open && "popper" === s.position ? (0, O.jsx)(dh, {
          ...o,
          ...r,
          ref: t
        }) : null
      }).displayName = Dw;
      var Iw = B.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = B.useRef(null),
          i = (0, Md.s)(r, o),
          s = Cm(t);
        return B.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const n = window.HTMLSelectElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (s !== t && r) {
            const n = new Event("change", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }, [s, t]), (0, O.jsx)(Vb.select, {
          ...n,
          style: {
            ...kh,
            ...n.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function Mw(e) {
        return "" === e || void 0 === e
      }

      function Aw(e) {
        const t = Bd(e),
          n = B.useRef(""),
          r = B.useRef(0),
          o = B.useCallback(e => {
            const o = n.current + e;
            t(o),
              function e(t) {
                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          i = B.useCallback(() => {
            n.current = "", window.clearTimeout(r.current)
          }, []);
        return B.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i]
      }

      function zw(e, t, n) {
        const r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === r.length && (i = i.filter(e => e !== n));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
        return l !== n ? l : void 0
      }
      Iw.displayName = "SelectBubbleInput";
      var Lw = Jb,
        Vw = tw,
        Fw = rw,
        Bw = ow,
        qw = iw,
        Ww = aw,
        $w = gw,
        Xw = Sw,
        Hw = Rw;

      function Uw(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Zw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Kw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zw(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Uw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zw(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Gw(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Yw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Qw = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Kw(Kw({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Yw(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gw(e.variantClassNames, e => Gw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Jw = Qw({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        e_ = Qw({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        t_ = Qw({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        n_ = Qw({
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
        r_ = Qw({
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
        o_ = Qw({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const i_ = (0, B.createContext)(null);

      function s_() {
        const e = (0, B.useContext)(i_);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const a_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          isRequired: n,
          isDisabled: r,
          isReadOnly: o,
          defaultValue: i,
          onValueChange: s,
          name: a,
          value: l,
          defaultOpen: c,
          onOpenChange: u,
          isOpen: d,
          size: f = "MD",
          status: p = "neutral",
          ...h
        }, m) => {
          const v = (0, B.useRef)(null),
            y = (0, K.UP)(v, m),
            g = (0, B.useId)(),
            b = (0, B.useId)(),
            w = (0, B.useId)(),
            _ = (0, B.useId)(),
            x = (0, B.useId)(),
            C = (0, B.useId)(),
            [j = !1, S] = (0, K.ic)({
              prop: d,
              defaultProp: c,
              onChange: u
            }),
            P = (0, H.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, O.jsx)(i_.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: C,
              hintId: _,
              popoverId: x,
              defaultValue: i,
              onValueChange: s,
              value: l,
              isOpen: j,
              setIsOpen: S,
              defaultOpen: c,
              onOpenChange: u,
              isRequired: n,
              isDisabled: r,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, O.jsx)(Lw, {
              required: n,
              disabled: r,
              open: j,
              onOpenChange: () => S(!o && !j),
              value: l,
              defaultValue: i,
              onValueChange: s,
              name: a,
              children: (0, O.jsx)("div", {
                ref: y,
                ...P,
                children: e
              })
            })
          })
        }),
        l_ = (0, B.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            popoverId: i
          } = s_(), s = (0, H.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Jw({
              hideDividers: e
            }),
            "data-testid": n
          }, r);
          return (0, O.jsx)(Ww, {
            ...s,
            ref: o,
            children: (0, O.jsx)($w, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        c_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, n);
          return (0, O.jsxs)(Eb, {
            ...o,
            ref: r,
            children: [(0, O.jsx)($w, {
              asChild: !0,
              children: (0, O.jsx)(Tb, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                children: e
              })
            }), (0, O.jsx)(Nb, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, O.jsx)(Db, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        u_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": n,
          "aria-describedby": r,
          asChild: o,
          ...i
        }, s) => {
          const {
            isReadOnly: a,
            status: l,
            isDisabled: c,
            labelId: u,
            hintId: d,
            triggerId: f,
            popoverId: p,
            descriptionId: h,
            isOpen: m,
            value: v,
            size: y
          } = s_(), {
            isPressed: g,
            pressProps: b
          } = (0, Ig.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, H.v6)({
            id: f,
            className: r_({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, H.VW)(n, u, d),
            "aria-describedby": (0, H.VW)(r, h),
            "aria-activedescendant": v,
            "aria-controls": p,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, H.cJ)(b, "onKeyDown"), i), _ = o ? G.DX : Vw;
          return (0, O.jsx)(_, {
            ...w,
            ref: s,
            children: e
          })
        }),
        d_ = (0, B.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": n
            }, r),
            s = t ? G.DX : "span";
          return (0, O.jsx)(s, {
            ...i,
            ref: o,
            children: (0, O.jsx)(Fw, {
              placeholder: e
            })
          })
        }),
        f_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: s
          } = s_(), a = s ? ee.ChevronUp : ee.ChevronDown, l = (0, H.v6)({
            asChild: !0,
            className: o_({
              isDisabled: i || o
            }),
            "data-testid": t
          }, n);
          return (0, O.jsx)(Bw, {
            ...l,
            ref: r,
            children: e || (0, O.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        p_ = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, s) => {
          const {
            isRequired: a,
            isDisabled: l,
            labelId: c,
            triggerId: u
          } = s_(), d = a && !o, f = (0, H.v6)({
            id: i.id || c,
            htmlFor: u,
            "data-testid": e,
            className: n_({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), p = t ? G.DX : "label";
          return (0, O.jsx)(G.s6, {
            enabled: r,
            children: (0, O.jsx)(p, {
              ...f,
              ref: s,
              children: n
            })
          })
        }),
        h_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = s_(), a = (0, H.v6)({
            className: e_({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, r), l = n ? G.DX : "div";
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        m_ = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = s_(), a = (0, H.v6)({
            className: t_({
              isDisabled: s
            }),
            "data-testid": n,
            id: i
          }, r), l = t ? G.DX : "div";
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        v_ = (0, B.forwardRef)(({
          children: e,
          value: t,
          isDisabled: n,
          testId: r,
          ...o
        }, i) => {
          const s = (0, B.useRef)(null),
            a = (0, K.UP)(s, i),
            l = (0, H.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: n,
              "data-testid": r
            }, o);
          return (0, O.jsx)(Xw, {
            ref: a,
            ...l,
            children: e
          })
        }),
        y_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, n);
          return (0, O.jsx)(Hw, {
            ref: r,
            asChild: !0,
            children: (0, O.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        g_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, n);
          return (0, O.jsx)(Bw, {
            asChild: !0,
            ...o,
            ref: r,
            children: e
          })
        }),
        b_ = qw,
        w_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = s_(), a = (0, H.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, r), l = n ? G.DX : Wg;
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        __ = $g,
        x_ = Xg;
      var C_ = n(99672),
        O_ = n(27979),
        j_ = n(5987),
        S_ = n(7049);

      function P_(e, t, n) {
        let r = (0, S_.J)(() => {
          n && n(t)
        });
        (0, B.useEffect)(() => {
          var t;
          let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == n || n.addEventListener("reset", r), () => {
            null == n || n.removeEventListener("reset", r)
          }
        }, [e])
      }
      var R_, k_ = n(99820);

      function E_(e, t, n) {
        let {
          isDisabled: r = !1,
          isReadOnly: o = !1,
          value: i,
          name: s,
          form: a,
          children: l,
          "aria-label": c,
          "aria-labelledby": u,
          validationState: d = "valid",
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
        } = (0, Ig.d)({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g,
          isDisabled: r
        }), {
          pressProps: _,
          isPressed: x
        } = (0, Ig.d)({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: m,
          onPressUp: y,
          onClick: g,
          onPress(e) {
            var r;
            null == v || v(e), t.toggle(), null === (r = n.current) || void 0 === r || r.focus()
          },
          isDisabled: r || o
        }), {
          focusableProps: C
        } = (0, k_.Wc)(e, n), O = (0, O_.v)(b, C), j = (0, j_.$)(e, {
          labelable: !0
        });
        return P_(n, t.defaultSelected, t.setSelected), {
          labelProps: (0, O_.v)(_, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, O_.v)(j, {
            "aria-invalid": f || "invalid" === d || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, C_.wt)(e).checked)
            },
            disabled: r,
            ...null == i ? {} : {
              value: i
            },
            name: s,
            form: a,
            type: "checkbox",
            ...O
          }),
          isSelected: t.isSelected,
          isPressed: w || x,
          isDisabled: r,
          isReadOnly: o,
          isInvalid: f || "invalid" === d
        }
      }
      const T_ = "undefined" != typeof document ? null !== (R_ = B.useInsertionEffect) && void 0 !== R_ ? R_ : B.useLayoutEffect : () => {};

      function N_(e, t, n) {
        let [r, o] = (0, B.useState)(e || t), i = (0, B.useRef)(r), s = (0, B.useRef)(void 0 !== e), a = void 0 !== e;
        (0, B.useEffect)(() => {
          s.current, s.current = a
        }, [a]);
        let l = a ? e : r;
        T_(() => {
          i.current = l
        });
        let [, c] = (0, B.useReducer)(() => ({}), {}), u = (0, B.useCallback)((e, ...t) => {
          let r = "function" == typeof e ? e(i.current) : e;
          Object.is(i.current, r) || (i.current = r, o(r), c(), null == n || n(r, ...t))
        }, [n]);
        return [l, u]
      }

      function D_(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = N_(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, B.useState)(n);
        var i;
        return {
          isSelected: n,
          defaultSelected: null !== (i = e.defaultSelected) && void 0 !== i ? i : o,
          setSelected: function(e) {
            t || r(e)
          },
          toggle: function() {
            t || r(!n)
          }
        }
      }

      function I_(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function M_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function A_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? M_(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = I_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M_(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function z_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var L_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        V_ = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = A_(A_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) L_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return z_(e.variantClassNames, e => z_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        F_ = V_({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        B_ = V_({
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
        q_ = V_({
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
        W_ = V_({
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
        $_ = V_({
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
      const X_ = (0, B.createContext)(null);

      function H_() {
        const e = (0, B.useContext)(X_);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const U_ = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: n,
          asChild: r,
          children: o,
          isDisabled: i = !1,
          isReadOnly: s = !1,
          ...a
        }, l) => {
          const c = (0, H.v6)({
              "data-testid": n,
              className: "foundry_okz6z20"
            }, a),
            u = r ? G.DX : "div",
            d = (0, B.useId)(),
            f = (0, B.useId)(),
            p = (0, B.useId)();
          return (0, O.jsx)(X_.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: f,
              inputId: p,
              isDisabled: i,
              isReadOnly: s,
              ...a
            },
            children: (0, O.jsx)(u, {
              ...c,
              ref: l,
              children: o
            })
          })
        }),
        Z_ = (0, B.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: n,
          "aria-labelledby": r,
          "aria-describedby": o,
          id: i,
          isSelected: s,
          defaultSelected: a,
          onSelectedChange: l,
          name: c,
          value: u,
          ...d
        }, f) => {
          const p = (0, B.useRef)(null),
            h = (0, K.UP)(p, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: _
            } = H_(),
            x = D_({
              isDisabled: w,
              isReadOnly: _,
              isSelected: s,
              defaultSelected: a,
              onChange: l
            }),
            {
              inputProps: C
            } = function(e, t, n) {
              let {
                labelProps: r,
                inputProps: o,
                isSelected: i,
                isPressed: s,
                isDisabled: a,
                isReadOnly: l
              } = E_(e, t, n);
              return {
                labelProps: r,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: i
                },
                isSelected: i,
                isPressed: s,
                isDisabled: a,
                isReadOnly: l
              }
            }({
              id: i || y,
              "aria-labelledby": (0, H.VW)(r, g),
              "aria-describedby": (0, H.VW)(o, b),
              name: c,
              value: u,
              isDisabled: w,
              isReadOnly: _
            }, x, p),
            j = (0, H.v6)({
              className: $_({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": w || _,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? n?.(e), e.defaultPrevented || w || _ || x.toggle()
              }
            }, d);
          return (0, O.jsxs)("div", {
            ...j,
            children: [(0, O.jsx)(G.s6, {
              children: (0, O.jsx)("input", {
                ...C,
                ref: h
              })
            }), (0, O.jsx)("div", {
              className: W_({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, O.jsx)("div", {
                className: B_({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        K_ = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          ...o
        }, i) => {
          const {
            isDisabled: s,
            labelId: a,
            inputId: l,
            size: c
          } = H_(), u = (0, H.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: q_({
              isDisabled: s,
              size: c
            })
          }, o), d = t ? G.DX : "label";
          return (0, O.jsx)(G.s6, {
            enabled: r,
            children: (0, O.jsx)(d, {
              ...u,
              ref: i,
              children: n
            })
          })
        }),
        G_ = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = H_(), a = r.id || s, l = (0, H.v6)({
            className: F_({
              isDisabled: i
            }),
            "data-testid": n,
            id: a
          }, r), c = t ? G.DX : "div";
          return (0, O.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Y_ = {
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
        Q_ = {
          ...Y_,
          customError: !0,
          valid: !1
        },
        J_ = {
          isInvalid: !1,
          validationDetails: Y_,
          validationErrors: []
        },
        ex = (0, B.createContext)({}),
        tx = "__formValidationState" + Date.now();

      function nx(e) {
        if (e[tx]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[tx];
          return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: n,
            name: r,
            value: o,
            builtinValidation: i,
            validate: s,
            validationBehavior: a = "aria"
          } = e;
          n && (t || (t = "invalid" === n));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: Q_
            } : null,
            c = (0, B.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return rx(n)
                }
                return []
              }(s, o);
              return ox(e)
            }, [s, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, B.useContext)(ex),
            d = (0, B.useMemo)(() => r ? Array.isArray(r) ? r.flatMap(e => rx(u[e])) : rx(u[r]) : [], [u, r]),
            [f, p] = (0, B.useState)(u),
            [h, m] = (0, B.useState)(!1);
          u !== f && (p(u), m(!1));
          let v = (0, B.useMemo)(() => ox(h ? [] : d), [h, d]),
            y = (0, B.useRef)(J_),
            [g, b] = (0, B.useState)(J_),
            w = (0, B.useRef)(J_),
            [_, x] = (0, B.useState)(!1);
          return (0, B.useEffect)(() => {
            if (!_) return;
            x(!1);
            let e = c || i || y.current;
            ix(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: l || v || c || i || J_,
            displayValidation: "native" === a ? l || v || g : l || v || c || i || g,
            updateValidation(e) {
              "aria" !== a || ix(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = J_;
              ix(e, w.current) || (w.current = e, b(e)), "native" === a && x(!1), m(!0)
            },
            commitValidation() {
              "native" === a && x(!0), m(!0)
            }
          }
        }(e)
      }

      function rx(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function ox(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Q_
        } : null
      }

      function ix(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n)
      }
      var sx = n(49953),
        ax = n(95562);

      function lx(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        (0, sx.N)(() => {
          if ("native" === r && (null == n ? void 0 : n.current) && !n.current.disabled) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: cx(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, B.useRef)(!1),
          s = (0, S_.J)(() => {
            i.current || t.resetValidation()
          }),
          a = (0, S_.J)(e => {
            var r;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == n || null === (r = n.current) || void 0 === r ? void 0 : r.form;
            var s;
            !e.defaultPrevented && n && i && function(e) {
              for (let n = 0; n < e.elements.length; n++) {
                var t;
                let r = e.elements[n];
                if (!1 === (null === (t = r.validity) || void 0 === t ? void 0 : t.valid)) return r
              }
              return null
            }(i) === n.current && (o ? o() : null === (s = n.current) || void 0 === s || s.focus(), (0, ax.Cl)("keyboard")), e.preventDefault()
          }),
          l = (0, S_.J)(() => {
            t.commitValidation()
          });
        (0, B.useEffect)(() => {
          let e = null == n ? void 0 : n.current;
          if (!e) return;
          let t = e.form,
            r = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            i.current = !window.event || "message" === window.event.type && (0, C_.wt)(window.event) instanceof MessagePort, null == r || r.call(t), i.current = !1
          }), e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", s), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", s), t && (t.reset = r)
          }
        }, [n, r])
      }

      function cx(e) {
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
      const ux = ({
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
        dx = ({
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
        fx = ({
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
        px = ({
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
        hx = ({
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
        mx = ({
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

      function vx(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function yx(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function gx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yx(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = vx(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yx(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function bx(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var wx = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        _x = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = gx(gx({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) wx(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bx(e.variantClassNames, e => bx(e, e => e.split(" ")[0]))
            }
          }, t
        },
        xx = _x({
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
        Cx = _x({
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
        Ox = _x({
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
        jx = _x({
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
      const Sx = (0, B.createContext)(null);

      function Px() {
        const e = (0, B.useContext)(Sx);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Rx = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: n,
          asChild: r,
          children: o,
          ...i
        }, s) => {
          const a = (0, H.v6)({
              "data-testid": n,
              className: "foundry_11gbdty0"
            }, (0, H.cJ)(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = r ? G.DX : "div",
            c = (0, B.useId)(),
            u = (0, B.useId)(),
            d = (0, B.useId)();
          return (0, O.jsx)(Sx.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: u,
              inputId: d,
              ...i
            },
            children: (0, O.jsx)(l, {
              ...a,
              ref: s,
              children: o
            })
          })
        }),
        kx = (0, B.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: n,
          onCheckedChange: r,
          name: o,
          onPress: i,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": c,
          "aria-labelledby": u,
          ...d
        }, f) => {
          const {
            size: p,
            appearance: h,
            isIndeterminate: m,
            isRequired: v,
            descriptionId: y,
            labelId: g,
            inputId: b,
            ...w
          } = Px(), _ = (0, B.useRef)(null), x = d.id || b, {
            isPressed: C,
            pressProps: j
          } = (0, Ig.d)({
            ref: _
          }), {
            setSelected: S,
            toggle: P,
            ...R
          } = D_({
            isSelected: t,
            defaultSelected: n,
            onChange: r
          }), {
            inputProps: k,
            isSelected: E,
            isDisabled: T,
            isReadOnly: N
          } = function(e, t, n) {
            let r = nx({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: i,
                validationDetails: s
              } = r.displayValidation,
              {
                labelProps: a,
                inputProps: l,
                isSelected: c,
                isPressed: u,
                isDisabled: d,
                isReadOnly: f
              } = E_({
                ...e,
                isInvalid: o
              }, t, n);
            lx(e, r, n);
            let {
              isIndeterminate: p,
              isRequired: h,
              validationBehavior: m = "aria"
            } = e;
            (0, B.useEffect)(() => {
              n.current && (n.current.indeterminate = !!p)
            });
            let {
              pressProps: v
            } = (0, Ig.d)({
              isDisabled: d || f,
              onPress() {
                let {
                  [tx]: t
                } = e, {
                  commitValidation: n
                } = t || r;
                n()
              }
            });
            return {
              labelProps: (0, O_.v)(a, v, (0, B.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: c,
                "aria-required": h && "aria" === m || void 0,
                required: h && "native" === m
              },
              isSelected: c,
              isPressed: u,
              isDisabled: d,
              isReadOnly: f,
              isInvalid: o,
              validationErrors: i,
              validationDetails: s
            }
          }({
            "aria-label": "",
            id: x,
            name: o,
            ...w
          }, {
            ...R,
            toggle: P,
            setSelected: w.isReadOnly ? () => !1 : S
          }, _), D = (0, H.v6)({
            className: Cx({
              size: p
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || T || N || P()
            }
          }, j, d), I = (0, H.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, H.VW)(u, g),
            "aria-describedby": (0, H.VW)(l, y),
            "aria-errormessage": (0, H.VW)(c, w.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, k), M = m ? a[`Dash${p}`] : a[`Check${p}`];
          return (0, O.jsxs)("div", {
            ...D,
            children: [(0, O.jsx)(G.s6, {
              children: (0, O.jsx)("input", {
                ...I,
                ref: f
              })
            }), (0, O.jsx)("div", {
              className: xx({
                size: p,
                appearance: h
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : E ? "checked" : "unchecked",
              "data-disabled": T || N,
              "data-testid": e,
              "data-pressed": C,
              children: (0, O.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (E || m) && (0, O.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Ex = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          hideVisually: r = !1,
          hideRequiredAsterisk: o,
          ...i
        }, s) => {
          const {
            size: a,
            labelId: l,
            inputId: c,
            isRequired: u
          } = Px(), d = i.id || l, f = u && !o, p = (0, H.v6)({
            className: jx({
              size: a,
              showAsterisk: f
            }),
            "data-testid": n,
            id: d,
            htmlFor: i.htmlFor || c
          }, i), h = t ? G.DX : "label";
          return (0, O.jsx)(G.s6, {
            enabled: r,
            children: (0, O.jsx)(h, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        Tx = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Px(), a = r.id || s, l = (0, H.v6)({
            className: Ox({
              isDisabled: i
            }),
            "data-testid": n,
            id: a
          }, r), c = t ? G.DX : "div";
          return (0, O.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Nx = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            descriptionId: i
          } = Px(), s = r.id || i, a = (0, H.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": n,
            id: s
          }, r), l = t ? G.DX : "div";
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });

      function Dx(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ix(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Mx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ix(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Dx(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ix(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Ax(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var zx = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Lx = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Mx(Mx({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) zx(c, r, e.defaultVariants) && (n += " " + u);
            return n
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
        Vx = Lx({
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
        Fx = Lx({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bx = Lx({
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
        qx = Lx({
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
      const Wx = (0, B.createContext)(null);

      function $x() {
        const e = (0, B.useContext)(Wx);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Xx = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const c = (0, H.v6)({
              "data-testid": n,
              className: "foundry_vq8c3j0"
            }, a),
            u = e ? G.DX : "div",
            d = (0, B.useId)(),
            f = (0, B.useId)(),
            p = (0, B.useId)(),
            h = (0, B.useId)();
          return (0, O.jsx)(Wx.Provider, {
            value: {
              labelId: d,
              descriptionId: f,
              hintId: p,
              inputId: h,
              isDisabled: r,
              isReadOnly: o,
              isRequired: i,
              status: s,
              ...a
            },
            children: (0, O.jsx)(u, {
              ref: l,
              ...c,
              children: t
            })
          })
        }),
        Hx = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          hideVisually: r = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, s) => {
          const {
            labelId: a,
            inputId: l,
            isDisabled: c,
            isRequired: u
          } = $x(), d = (0, H.v6)({
            className: Bx({
              isDisabled: c,
              showAsterisk: u && !o
            }),
            "data-testid": n,
            id: a,
            htmlFor: l
          }, i), f = t ? G.DX : "label";
          return (0, O.jsx)(G.s6, {
            enabled: r,
            children: (0, O.jsx)(f, {
              ...d,
              ref: s,
              children: e
            })
          })
        }),
        Ux = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          rows: r = 5,
          defaultValue: o,
          name: i,
          placeholder: s = " ",
          "aria-labelledby": a,
          "aria-describedby": l,
          ...c
        }, u) => {
          const {
            descriptionId: d,
            labelId: f,
            inputId: p,
            hintId: h,
            isDisabled: m,
            isRequired: v,
            isReadOnly: y,
            status: g
          } = $x(), b = (0, B.useRef)(null), w = (0, K.UP)(b, u), _ = (0, H.v6)({
            className: qx({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: i,
            id: c.id || p,
            rows: r,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: s,
            "aria-labelledby": (0, H.VW)(c.id, f, h, a),
            "aria-describedby": (0, H.VW)(d, l),
            "data-testid": n,
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
          }, c), x = e ? G.DX : "textarea";
          return (0, O.jsx)(x, {
            ref: w,
            ..._,
            children: t
          })
        }),
        Zx = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = $x(), a = (0, H.v6)({
            className: Vx({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, r), l = n ? G.DX : "div";
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Kx = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = $x(), a = (0, H.v6)({
            className: Fx({
              isDisabled: s
            }),
            "data-testid": n,
            id: i
          }, r), l = t ? G.DX : "div";
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Gx = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = $x(), a = (0, H.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, r), l = n ? G.DX : Wg;
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Yx = $g,
        Qx = Xg;
      let Jx = Math.round(1e10 * Math.random()),
        eC = 0;
      const tC = new WeakMap;
      var nC = n(24836),
        rC = n(92145),
        oC = n(30422),
        iC = n(93399);
      class sC {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, C_.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
          const t = [];
          let n = e,
            r = e;
          for (this._currentNode = e; n && n !== this.root;)
            if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              const e = n,
                o = this._doc.createTreeWalker(e, this.whatToShow, {
                  acceptNode: this._acceptNode
                });
              t.push(o), o.currentNode = r, this._currentSetFor.add(o), n = r = e.host
            } else n = n.parentNode;
          const o = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          t.push(o), o.currentNode = r, this._currentSetFor.add(o), this._walkerStack = t
        }
        get doc() {
          return this._doc
        }
        firstChild() {
          let e = this.currentNode,
            t = this.nextNode();
          return (0, C_.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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
              let n;
              if ("function" == typeof this.filter ? n = this.filter(e) : (null === (t = this.filter) || void 0 === t ? void 0 : t.acceptNode) && (n = this.filter.acceptNode(e)), n === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
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
              var n;
              let e;
              if ("function" == typeof this.filter ? e = this.filter(t) : (null === (n = this.filter) || void 0 === n ? void 0 : n.acceptNode) && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
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
        constructor(e, t, n, r) {
          this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
            if (e.nodeType === Node.ELEMENT_NODE) {
              const n = e.shadowRoot;
              if (n) {
                const e = this._doc.createTreeWalker(n, this.whatToShow, {
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
          }, this._doc = e, this.root = t, this.filter = null != r ? r : null, this.whatToShow = null != n ? n : NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
          const o = t.shadowRoot;
          if (o) {
            const e = this._doc.createTreeWalker(o, this.whatToShow, {
              acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(e)
          }
        }
      }

      function aC(e, t) {
        return !!e && !!t && t.some(t => (0, C_.sD)(t, e))
      }

      function lC(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? oC.A : oC.t,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = (0, nC.TW)(o),
          s = function(e, t, n, r) {
            return (0, iC.Nf)() ? new sC(e, t, n, r) : e.createTreeWalker(t, n, r)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, C_.sD)(null == t ? void 0 : t.from, e)) return NodeFilter.FILTER_REJECT;
              if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, nC.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let n = (0, nC.mD)(e);
                      return t instanceof n.RadioNodeList ? Array.from(t).filter(e => e instanceof n.HTMLInputElement) : t instanceof n.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !r(e) || n && !aC(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s
      }
      class cC {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new uC({
            scopeRef: e
          });
          r.addChild(o), o.parent = r, this.fastMap.set(e, o), n && (o.nodeToRestore = n)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let n = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && aC(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new cC;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new uC({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class uC {
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

      function dC(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = (0, rC.Bi)(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function fC(e) {
        let {
          description: t,
          errorMessage: n,
          isInvalid: r,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: s
        } = function(e) {
          let {
            id: t,
            label: n,
            "aria-labelledby": r,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = (0, rC.Bi)(t);
          let s = (0, rC.Bi)(),
            a = {};
          return n && (r = r ? `${s} ${r}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: dC({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), a = (0, rC.X1)([Boolean(t), Boolean(n), r, o]), l = (0, rC.X1)([Boolean(t), Boolean(n), r, o]);
        return s = (0, O_.v)(s, {
          "aria-describedby": [a, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: i,
          fieldProps: s,
          descriptionProps: {
            id: a
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      new cC;
      var pC = n(62894),
        hC = n(76948);
      const mC = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        vC = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function yC(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return mC.has(t.script)
        }
        let t = e.split("-")[0];
        return vC.has(t)
      }
      var gC = n(60415);
      const bC = Symbol.for("react-aria.i18n.locale");

      function wC() {
        let e = "undefined" != typeof window && window[bC] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: yC(e) ? "rtl" : "ltr"
        }
      }
      let _C = wC(),
        xC = new Set;

      function CC() {
        _C = wC();
        for (let e of xC) e(_C)
      }
      const OC = B.createContext(null);

      function jC() {
        let e = function() {
          let e = (0, gC.wR)(),
            [t, n] = (0, B.useState)(_C);
          return (0, B.useEffect)(() => (0 === xC.size && window.addEventListener("languagechange", CC), xC.add(n), () => {
            xC.delete(n), 0 === xC.size && window.removeEventListener("languagechange", CC)
          }), []), e ? {
            locale: "undefined" != typeof window && window[bC] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, B.useContext)(OC) || e
      }

      function SC(e, t) {
        let {
          name: n,
          form: r,
          isReadOnly: o,
          isRequired: i,
          isDisabled: s,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = jC(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: m,
          errorMessageProps: v
        } = fC({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = (0, j_.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, i = (0, B.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: s,
            removeAllGlobalListeners: a
          } = (0, hC.A)(), l = (0, B.useCallback)(e => {
            (0, C_.sD)(e.currentTarget, (0, C_.wt)(e)) && i.current.isFocusWithin && !(0, C_.sD)(e.currentTarget, e.relatedTarget) && (i.current.isFocusWithin = !1, a(), n && n(e), o && o(!1))
          }, [n, o, i, a]), c = (0, pC.yB)(l), u = (0, B.useCallback)(e => {
            if (!(0, C_.sD)(e.currentTarget, (0, C_.wt)(e))) return;
            let t = (0, C_.wt)(e);
            const n = (0, nC.TW)(t),
              a = (0, C_.bq)(n);
            if (!i.current.isFocusWithin && a === t) {
              r && r(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let t = e.currentTarget;
              s(n, "focus", e => {
                let r = (0, C_.wt)(e);
                if (i.current.isFocusWithin && !(0, C_.sD)(t, r)) {
                  let e = new n.defaultView.FocusEvent("blur", {
                    relatedTarget: r
                  });
                  (0, pC.o1)(e, t);
                  let o = (0, pC.eg)(e);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [r, o, c, s, l]);
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
          onBlurWithin(n) {
            var r;
            null === (r = e.onBlur) || void 0 === r || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = (0, rC.Bi)(n);
        return tC.set(t, {
          name: b,
          form: r,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: (0, O_.v)(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let n;
              switch (e.key) {
                case "ArrowRight":
                  n = "rtl" === c && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  n = "rtl" === c && "vertical" !== a ? "next" : "prev";
                  break;
                case "ArrowDown":
                  n = "next";
                  break;
                case "ArrowUp":
                  n = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let r, o = lC(e.currentTarget, {
                from: (0, C_.wt)(e),
                accept: e => e instanceof(0, nC.mD)(e).HTMLInputElement && "radio" === e.type
              });
              "next" === n ? (r = o.nextNode(), r || (o.currentNode = e.currentTarget, r = o.firstChild())) : (r = o.previousNode(), r || (o.currentNode = e.currentTarget, r = o.lastChild())), r && (r.focus(), t.setSelectedValue(r.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": i || void 0,
            "aria-disabled": s || void 0,
            "aria-orientation": a,
            ...h,
            ...g
          }),
          labelProps: p,
          descriptionProps: m,
          errorMessageProps: v,
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        }
      }

      function PC(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function RC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function kC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? RC(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = PC(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : RC(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function EC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var TC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        NC = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = kC(kC({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) TC(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return EC(e.variantClassNames, e => EC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        DC = NC({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        IC = NC({
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
      const MC = (0, B.createContext)(null);

      function AC() {
        const e = (0, B.useContext)(MC);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const zC = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: n = "vertical",
          children: r,
          testId: o,
          asChild: i,
          "aria-labelledby": s,
          "aria-describedby": a,
          "aria-errormessage": l,
          status: c = "neutral",
          ...u
        }, d) => {
          const f = (0, B.useRef)(null),
            p = (0, K.UP)(f, d),
            h = (0, B.useId)(),
            m = (0, B.useId)(),
            v = (0, B.useId)(),
            y = function(e) {
              let t = (0, B.useMemo)(() => e.name || `radio-group-${Jx}-${++eC}`, [e.name]);
              var n;
              let [r, o] = N_(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i] = (0, B.useState)(r), [s, a] = (0, B.useState)(null), l = nx({
                ...e,
                value: r
              }), c = l.displayValidation.isInvalid;
              var u;
              return {
                ...l,
                name: t,
                selectedValue: r,
                defaultSelectedValue: void 0 !== e.value ? i : null !== (u = e.defaultValue) && void 0 !== u ? u : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: s,
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
            } = SC({
              ...u,
              orientation: n,
              "aria-labelledby": (0, H.VW)(h, s),
              "aria-describedby": (0, H.VW)(m, v, a),
              "aria-errormessage": (0, H.VW)(v, l)
            }, y),
            b = (0, H.v6)({
              className: "foundry_njguqn0"
            }, g, (0, H.cJ)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = i ? G.DX : "div";
          return (0, O.jsx)(MC.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: n,
              descriptionId: m,
              labelId: h,
              errorId: v,
              status: c,
              ...u
            },
            children: (0, O.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...b,
              children: r
            })
          })
        }),
        LC = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            size: i,
            orientation: s
          } = AC(), a = (0, H.v6)({
            "data-testid": e,
            className: IC({
              size: i,
              orientation: s
            })
          }, r), l = t ? G.DX : "div";
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: n
          })
        }),
        VC = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, s) => {
          const {
            isRequired: a,
            labelId: l
          } = AC(), c = a && !o, u = (0, H.v6)({
            id: i.id || l,
            "data-testid": e,
            className: DC({
              showAsterisk: c
            })
          }, i), d = t ? G.DX : "div";
          return (0, O.jsx)(G.s6, {
            enabled: r,
            children: (0, O.jsx)(d, {
              ...u,
              ref: s,
              children: n
            })
          })
        }),
        FC = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            descriptionId: i
          } = AC(), s = (0, H.v6)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, r), a = t ? G.DX : "div";
          return (0, O.jsx)(a, {
            ...s,
            ref: o,
            children: n
          })
        }),
        BC = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            errorId: i,
            status: s
          } = AC(), a = (0, H.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: s
          }, r), l = n ? G.DX : Wg;
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        qC = $g,
        WC = Xg;
      var $C = NC({
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
        XC = NC({
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
        HC = NC({
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
        UC = NC({
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
      const ZC = ({
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
        KC = ({
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
        GC = ({
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
        YC = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_1pfduet0"
            }, r),
            s = e ? G.DX : "label";
          return (0, O.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        QC = (0, B.forwardRef)(({
          testId: e,
          value: t,
          ...n
        }, r) => {
          const o = (0, B.useRef)(null),
            i = (0, K.UP)(o, r),
            s = (0, B.useId)(),
            {
              state: a,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = AC(),
            {
              isPressed: p,
              pressProps: h
            } = (0, Ig.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: m
            } = function(e, t, n) {
              let {
                value: r,
                children: o,
                "aria-label": i,
                "aria-labelledby": s,
                onPressStart: a,
                onPressEnd: l,
                onPressChange: c,
                onPress: u,
                onPressUp: d,
                onClick: f
              } = e;
              const p = e.isDisabled || t.isDisabled;
              let h = t.selectedValue === r,
                {
                  pressProps: m,
                  isPressed: v
                } = (0, Ig.d)({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: c,
                  onPress: u,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: p
                }),
                {
                  pressProps: y,
                  isPressed: g
                } = (0, Ig.d)({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: c,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: p,
                  onPress(e) {
                    var o;
                    null == u || u(e), t.setSelectedValue(r), null === (o = n.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = (0, k_.Wc)((0, O_.v)(e, {
                  onFocus: () => t.setLastFocusedValue(r)
                }), n),
                w = (0, O_.v)(m, b),
                _ = (0, j_.$)(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === r && (x = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (x = 0), p && (x = void 0);
              let {
                name: C,
                form: O,
                descriptionId: j,
                errorMessageId: S,
                validationBehavior: P
              } = tC.get(t);
              return P_(n, t.defaultSelectedValue, t.setSelectedValue), lx({
                validationBehavior: P
              }, t, n), {
                labelProps: (0, O_.v)(y, (0, B.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, O_.v)(_, {
                  ...w,
                  type: "radio",
                  name: C,
                  form: O,
                  tabIndex: x,
                  disabled: p,
                  required: t.isRequired && "native" === P,
                  checked: h,
                  value: r,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(r)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? S : null, j].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: p,
                isSelected: h,
                isPressed: v || g
              }
            }({
              ...n,
              id: s,
              value: t,
              "aria-label": ""
            }, a, o),
            v = m.checked,
            y = m.disabled || a?.isReadOnly,
            g = (0, H.v6)(m, {
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
            }, n),
            b = u[`Dot${c}`];
          return (0, O.jsxs)("div", {
            className: UC({
              size: c
            }),
            children: [(0, O.jsx)(G.s6, {
              children: (0, O.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, O.jsx)("div", {
              className: HC({
                appearance: l
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
        JC = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          ...o
        }, i) => {
          const {
            size: s,
            state: a
          } = AC(), l = (0, B.useId)(), c = (0, H.v6)({
            id: l,
            "data-testid": e,
            className: XC({
              size: s,
              isDisabled: a?.isDisabled
            })
          }, o), u = t ? G.DX : "div";
          return (0, O.jsx)(G.s6, {
            enabled: r,
            children: (0, O.jsx)(u, {
              ...c,
              ref: i,
              children: n
            })
          })
        }),
        eO = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = AC(), s = (0, H.v6)({
            "data-testid": e,
            className: $C({
              isDisabled: i
            })
          }, r), a = t ? G.DX : "span";
          return (0, O.jsx)(a, {
            ref: o,
            ...s,
            children: n
          })
        });

      function tO(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function nO(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return tO(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tO(e, t) : void 0
              }
            }(e)) || t) {
            n && (e = n);
            var r = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return r >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[r++]
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
        var i, s = !0,
          a = !1;
        return {
          s: function() {
            n = n.call(e)
          },
          n: function() {
            var e = n.next();
            return s = e.done, e
          },
          e: function(e) {
            a = !0, i = e
          },
          f: function() {
            try {
              s || null == n.return || n.return()
            } finally {
              if (a) throw i
            }
          }
        }
      }

      function rO(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function oO(e) {
        return oO = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, oO(e)
      }

      function iO() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (iO = function() {
          return !!e
        })()
      }

      function sO(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function aO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sO(Object(n), !0).forEach(function(t) {
            rO(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sO(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function lO(e, t) {
        return lO = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, lO(e, t)
      }

      function cO(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          s = r,
          a = "",
          l = nO(e);
        try {
          for (l.s(); !(n = l.n()).done;) {
            var c, u = n.value,
              d = !Object.prototype.hasOwnProperty.call(o, u) && (null === (c = o[s[0]]) || void 0 === c ? void 0 : c.test(u));
            (i && u === s[0] || d) && (s = s.slice(1), a += u)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return a
      }

      function uO(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          s = t.showMask,
          a = 0,
          l = "",
          c = nO(r);
        try {
          for (c.s(); !(n = c.n()).done;) {
            var u = n.value;
            if (!s && void 0 === e[a]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[a] ? l += e[a++] : l += u
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (i && !s) {
          for (var d = r.length - 1; d >= 0 && l[d] === r[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function dO(e, t) {
        for (var n = t.mask, r = t.replacement, o = [], i = 0; i < n.length; i++) {
          var s, a = null !== (s = e[i]) && void 0 !== s ? s : n[i],
            l = Object.prototype.hasOwnProperty.call(r, a) ? "replacement" : void 0 !== e[i] && e[i] !== n[i] ? "input" : "mask";
          o.push({
            type: l,
            value: a,
            index: i
          })
        }
        return o
      }

      function fO(e) {
        return e.length > 0 ? rO({}, e, /./) : {}
      }

      function pO(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(r, o), c = i.slice(r, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && a && (u += c[d])
        }
        return u
      }

      function hO(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? fO(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return uO(cO(e, {
          replacementChars: n.replace(i, ""),
          replacement: o,
          separate: !1
        }), {
          mask: n,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var mO = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function vO(e) {
        return mO.includes(e) ? "\\".concat(e) : e
      }

      function yO(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function gO(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function bO(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function wO(e) {
        return wO = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, wO(e)
      }

      function _O() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (_O = function() {
          return !!e
        })()
      }

      function xO(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function CO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xO(Object(n), !0).forEach(function(t) {
            bO(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xO(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function OO(e, t) {
        return OO = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, OO(e, t)
      }

      function jO(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return jO = function(e) {
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
            t.set(e, n)
          }

          function n() {
            return function(e, t, n) {
              if (_O()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && OO(o, n.prototype), o
            }(e, arguments, wO(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), OO(n, e)
        }, jO(e)
      }
      var SO, PO = function(e) {
          function t(e) {
            var n;
            return yO(this, t), (n = function(e, t, n) {
              return t = wO(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, _O() ? Reflect.construct(t, n || [], wO(e).constructor) : t.apply(e, n))
            }(this, t, [e])).name = "SyntheticChangeError", n
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
            }), t && OO(e, t)
          }(t, e), gO(t)
        }(jO(Error)),
        RO = ["options"],
        kO = ["text", "email", "tel", "search", "url"],
        EO = gO(function e(t) {
          var n = t.init,
            r = t.tracking;
          yO(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (kO.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = i.initialValue,
                a = void 0 === s ? "" : s,
                l = i.controlled,
                c = void 0 !== l && l,
                u = n({
                  initialValue: e.value || a,
                  controlled: c
                }),
                d = u.value,
                f = u.options,
                p = {
                  value: d,
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
              Object.defineProperty(e, "value", CO(CO({}, v), {}, {
                set: function(t) {
                  var n;
                  m.value = t, null == v || null === (n = v.set) || void 0 === n || n.call(e, t)
                }
              })), e.value = d;
              var y = function() {
                  var t = function() {
                    var n, r;
                    m.selectionStart = null !== (n = e.selectionStart) && void 0 !== n ? n : 0, m.selectionEnd = null !== (r = e.selectionEnd) && void 0 !== r ? r : 0, h.id = window.setTimeout(t)
                  };
                  h.id = window.setTimeout(t)
                },
                g = function() {
                  window.clearTimeout(h.id), h.id = -1, h.cachedId = -1
                },
                b = function(t) {
                  try {
                    var n, o;
                    if (h.cachedId === h.id) throw new PO("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new PO("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new PO("Input type detection error.");
                    var u = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) u = i.slice(m.selectionStart, s);
                    else {
                      var v = c.length - i.length;
                      d = s, f = s + v
                    }
                    p.value !== c ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var y = p.options,
                      g = r({
                        inputType: l,
                        previousValue: c,
                        previousOptions: y,
                        value: i,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: s,
                        selectionEnd: a
                      }),
                      b = g.options,
                      w = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                          if (null == e) return {};
                          var n = {};
                          for (var r in e)
                            if ({}.hasOwnProperty.call(e, r)) {
                              if (t.includes(r)) continue;
                              n[r] = e[r]
                            } return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                      }(g, RO);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), p.value = w.value, p.options = b, m.selectionStart = w.selectionStart, m.selectionEnd = w.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, c)
                  } catch (n) {
                    if (e.value = m.value, e.setSelectionRange(m.selectionStart, m.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== n.name) throw n
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
      SO = EO, Object.defineProperty(SO.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var TO, NO = ["track", "modify"];

      function DO(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? fO(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var IO = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = oO(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, iO() ? Reflect.construct(t, n || [], oO(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = DO(n),
                i = o.mask,
                s = o.replacement,
                a = o.separate,
                l = o.showMask;
              return {
                value: t = r || t ? t : l ? i : "",
                options: {
                  mask: i,
                  replacement: s,
                  separate: a
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                r = e.previousValue,
                o = e.previousOptions,
                i = e.addedValue,
                s = e.changeStart,
                a = e.changeEnd,
                l = DO(n),
                c = l.track,
                u = l.modify,
                d = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                      if ({}.hasOwnProperty.call(e, r)) {
                        if (t.includes(r)) continue;
                        n[r] = e[r]
                      } return n
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                  }
                  return o
                }(l, NO),
                f = d.mask,
                p = d.replacement,
                h = d.showMask,
                m = d.separate,
                v = aO(aO({}, "insert" === t ? {
                  inputType: t,
                  data: i
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: r,
                  selectionStart: s,
                  selectionEnd: a
                }),
                y = null == c ? void 0 : c(v);
              if (!1 === y) throw new PO("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? fO(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = pO(r, aO({
                  end: s
                }, o)),
                w = pO(r, aO({
                  start: a
                }, o)),
                _ = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(_, "");
              if (b && (b = cO(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: m
                }), x = x.slice(b.length)), i && (i = cO(i, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new PO("The character does not match the key value of the `replacement` object.");
              if (m) {
                var C = f.slice(s, a).replace(_, ""),
                  O = C.length - i.length;
                O < 0 ? w = w.slice(-O) : O > 0 && (w = C.slice(-O) + w)
              }
              w && (w = cO(w, {
                replacementChars: x,
                replacement: p,
                separate: m
              }));
              var j = uO(b + i + w, {
                  mask: f,
                  replacement: p,
                  separate: m,
                  showMask: h
                }),
                S = function(e) {
                  var t, n, r, o = e.inputType,
                    i = e.value,
                    s = e.addedValue,
                    a = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = dO(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    }),
                    d = null === (t = u[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (n = u[a.length - 1]) || void 0 === n ? void 0 : n.index,
                    p = null === (r = u[a.length + s.length]) || void 0 === r ? void 0 : r.index;
                  if ("insert" === o) {
                    if (void 0 !== d) return d + 1;
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
                  var h = i.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  });
                  return -1 !== h ? h : i.length
                }({
                  inputType: t,
                  value: j,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: p,
                  separate: m
                });
              return {
                value: j,
                selectionStart: S,
                selectionEnd: S,
                options: {
                  mask: f,
                  replacement: p,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return hO(e, DO(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? fO(r) : r;
              return dO(hO(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, DO(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? fO(r) : r,
                i = pO(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return cO(i, {
                replacementChars: n.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, DO(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? fO(r) : r, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < n.length; l++) {
                var c = n[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(s ? "(?!".concat(vO(c), ")") : "", "(").concat(o[c].source, ")") : vO(c), l === n.length - 1 && (i && (a += ")?".repeat(n.length)), a += "$")
              }
              return a
            }(e, DO(n))
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
            }), t && lO(e, t)
          }(e, EO),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function MO(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function AO(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function zO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? AO(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = MO(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : AO(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function LO(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      TO = IO, Object.defineProperty(TO.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var VO = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        FO = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = zO(zO({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) VO(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return LO(e.variantClassNames, e => LO(e, e => e.split(" ")[0]))
            }
          }, t
        },
        BO = FO({
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
        qO = FO({
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
        WO = FO({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $O = FO({
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
        XO = FO({
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
        HO = FO({
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
      const UO = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        ZO = (0, B.createContext)(null);

      function KO() {
        const e = (0, B.useContext)(ZO);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const GO = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const [c, u] = (0, B.useState)("text"), d = `${(0,B.useId)()}-label`, f = `${(0,B.useId)()}-input`, p = `${(0,B.useId)()}-description`, h = (0, B.useRef)(null), m = (0, B.useRef)(UO), v = (0, H.v6)({
            "data-testid": n,
            className: "foundry_8oytzo4"
          }, a), y = e ? G.DX : "div";
          return (0, O.jsx)(ZO.Provider, {
            value: {
              isDisabled: r,
              isReadOnly: o,
              isRequired: i,
              status: s,
              labelId: d,
              inputId: f,
              descriptionId: p,
              type: c,
              setType: u,
              inputRef: h,
              focusState: m,
              ...a
            },
            children: (0, O.jsx)(y, {
              ref: l,
              ...v,
              children: t
            })
          })
        }),
        YO = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          hideRequiredAsterisk: o,
          ...i
        }, s) => {
          const {
            isDisabled: a,
            isRequired: l,
            inputId: c,
            labelId: u
          } = KO(), d = l && !o, f = (0, H.v6)({
            id: i.id || u,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: HO({
              showAsterisk: d,
              isDisabled: a
            })
          }, i), p = t ? G.DX : "label";
          return (0, O.jsx)(G.s6, {
            enabled: r,
            children: (0, O.jsx)(p, {
              ref: s,
              ...f,
              children: n
            })
          })
        }),
        QO = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = KO(), s = (0, H.v6)({
            "data-testid": e,
            className: WO({
              isDisabled: i
            })
          }, r), a = t ? G.DX : "span";
          return (0, O.jsx)(a, {
            ref: o,
            ...s,
            children: n
          })
        }),
        JO = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: s,
            status: a
          } = KO(), l = (0, H.v6)({
            "data-testid": e,
            className: (0, J.$)(BO({
              isDisabled: i,
              isReadOnly: s,
              isInvalid: "invalid" === a,
              isSuccess: "success" === a
            }), "foundry_8oytzo1")
          }, r), c = t ? G.DX : "div";
          return (0, O.jsx)(c, {
            ref: o,
            ...l,
            children: n
          })
        }),
        ej = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          mask: n,
          replacement: r,
          showMask: o = !0,
          track: i,
          placeholder: s = " ",
          "aria-labelledby": a,
          "aria-describedby": l,
          type: c = "text",
          ...u
        }, d) => {
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
          } = KO();
          (0, B.useEffect)(() => b(c), []);
          const C = "invalid" === m,
            j = (0, H.v6)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, H.VW)(v, a),
              "aria-describedby": (0, H.VW)(g, l),
              "data-testid": e,
              className: (0, J.$)(XO({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              onBlur: e => {
                if (x.current) {
                  const {
                    selectionStart: t,
                    selectionEnd: n
                  } = e.currentTarget;
                  x.current.selectionStart = t, x.current.selectionEnd = n
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
            }, u),
            S = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                n = e.replacement,
                r = e.showMask,
                o = e.separate,
                i = e.track,
                s = e.modify,
                a = (0, B.useRef)(null),
                l = (0, B.useRef)({
                  mask: t,
                  replacement: n,
                  showMask: r,
                  separate: o,
                  track: i,
                  modify: s
                });
              return l.current.mask = t, l.current.replacement = n, l.current.showMask = r, l.current.separate = o, l.current.track = i, l.current.modify = s, (0, B.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(n, r, o) {
                      return "current" === r && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), n[r] = o, !0)
                    }
                  })
                }(a, new IO(l.current))
              }, [])
            }({
              mask: n,
              replacement: r,
              showMask: o,
              track: i
            }),
            P = (0, K.UP)(n && r ? S : null, _, d),
            R = t ? G.DX : "input";
          return (0, O.jsx)(R, {
            ref: P,
            ...j
          })
        }),
        tj = (0, B.forwardRef)(({
          icon: e,
          asChild: t,
          testId: n,
          side: r,
          ...o
        }, i) => {
          const {
            isDisabled: s
          } = KO(), a = (0, H.v6)({
            size: "LG",
            "data-testid": n,
            className: (0, J.$)($O({
              side: r,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? G.DX : ee[e];
          return (0, O.jsx)(l, {
            ref: i,
            ...a
          })
        }),
        nj = (0, B.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: n
          } = KO(), r = (0, H.v6)({
            isDisabled: n,
            size: "LG",
            appearance: "ghost",
            className: (0, J.$)("foundry_8oytzox", "foundry_8oytzo3")
          }, e);
          return (0, O.jsx)(_e, {
            ref: t,
            ...r,
            preventFocusOnPress: !1
          })
        }),
        rj = (0, B.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...n
        }, r) => {
          const {
            type: o,
            setType: i,
            inputRef: s,
            focusState: a
          } = KO(), l = "password" === o, c = l ? e : t;
          (0, B.useEffect)(() => {
            a.current && (a.current.clickTriggered = !1)
          }, [a]);
          const u = (0, H.v6)({
            label: c,
            icon: l ? "Eye" : "EyeOff",
            onPress: () => {
              i(l ? "text" : "password");
              const e = s.current;
              if (a.current && e) {
                const {
                  selectionStart: t,
                  selectionEnd: n
                } = a.current;
                e.focus(), null === t && null === n || requestAnimationFrame(() => {
                  e.ownerDocument.activeElement === e && (e.selectionStart = t, e.selectionEnd = n)
                })
              }
            }
          }, n);
          return (0, O.jsxs)(hm, {
            children: [(0, O.jsx)(mm, {
              children: (0, O.jsx)(nj, {
                ref: r,
                ...u
              })
            }), (0, O.jsxs)(vm, {
              side: "bottom",
              align: "end",
              children: [c, (0, O.jsx)(ym, {})]
            })]
          })
        }),
        oj = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = KO(), a = (0, H.v6)({
            className: qO({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, r), l = n ? G.DX : "div";
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        ij = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = KO(), a = (0, H.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, r), l = n ? G.DX : Wg;
          return (0, O.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        sj = $g,
        aj = Xg;
      var lj = n(43831);

      function cj(e, t) {
        let {
          elementType: n = "a",
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ...l
        } = e, c = {};
        "a" !== n && (c = {
          role: "link",
          tabIndex: a ? void 0 : 0
        });
        let {
          focusableProps: u
        } = (0, k_.Wc)(e, t), {
          pressProps: d,
          isPressed: f
        } = (0, Ig.d)({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ref: t
        }), p = (0, j_.$)(l, {
          labelable: !0
        }), h = (0, O_.v)(u, d), m = (0, lj.rd)(), v = (0, lj._h)(e);
        return {
          isPressed: f,
          linkProps: (0, O_.v)(p, v, {
            ...h,
            ...c,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var n;
              null === (n = d.onClick) || void 0 === n || n.call(d, t), (0, lj.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function uj(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function dj(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function fj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dj(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = uj(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dj(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function pj(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var hj = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        mj = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = fj(fj({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) hj(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pj(e.variantClassNames, e => pj(e, e => e.split(" ")[0]))
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
      const vj = (0, B.forwardRef)(({
        children: e,
        ...t
      }, n) => {
        const r = (0, Y.zQ)(),
          o = "string" == typeof t.size ? t.size : t.size?.[r] ?? "LG",
          i = (0, H.v6)({
            className: mj({
              size: o
            })
          }, t);
        return (0, O.jsx)(_e, {
          appearance: "ghost",
          icon: "X",
          ...i,
          ref: n,
          children: e
        })
      });

      function yj(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function gj(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function bj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gj(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = yj(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gj(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function wj(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var _j = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        xj = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = bj(bj({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) _j(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wj(e.variantClassNames, e => wj(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Cj = xj({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Oj = xj({
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
        jj = xj({
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
      const Sj = (0, B.createContext)(null);

      function Pj() {
        const e = (0, B.useContext)(Sj);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Rj = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, i) => {
          const s = e ? G.DX : "div",
            a = (0, H.v6)({
              className: jj({
                status: n,
                background: r
              })
            }, o);
          return (0, O.jsx)(Sj.Provider, {
            value: {
              status: n,
              background: r
            },
            children: (0, O.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a
            })
          })
        }),
        kj = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? G.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qha"
            }, n);
          return (0, O.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        Ej = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? G.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qhb"
            }, n);
          return (0, O.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        Tj = {
          danger: ee.CircleX,
          information: ee.Info,
          success: ee.CircleCheck,
          warning: ee.TriangleAlert
        },
        Nj = (0, B.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...n
        }, r) => {
          const {
            status: o
          } = Pj(), i = e ? G.DX : Tj[o], s = (0, H.v6)({
            className: Oj({
              status: o,
              size: t
            }),
            size: t
          }, n);
          return (0, O.jsx)(i, {
            label: "",
            ref: r,
            ...s
          })
        }),
        Dj = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? G.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, n);
          return (0, O.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        Ij = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? G.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, O.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        Mj = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, B.useRef)(null),
            s = (0, K.UP)(i, o),
            a = e ? G.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = cj(r, i),
            u = (0, H.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, O.jsx)(a, {
            "data-pressed": c,
            "data-testid": n,
            ref: s,
            ...u,
            children: t
          })
        }),
        Aj = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? G.DX : "div",
            s = (0, H.v6)({
              className: "foundry_1m368qhm"
            }, r);
          return (0, O.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...s,
            children: t
          })
        }),
        zj = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const i = e ? G.DX : "div";
          return (0, O.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, J.$)(n, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...r
          })
        }),
        Lj = (0, B.forwardRef)((e, t) => {
          const {
            background: n
          } = Pj(), r = "none" !== n, o = (0, H.v6)({
            className: Cj({
              hasBackground: r
            })
          }, e);
          return (0, O.jsx)(vj, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function Vj(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Fj(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every(n => {
          const r = e[n],
            o = t[n];
          return "function" == typeof r ? `${r}` == `${o}` : Vj(r) && Vj(o) ? Fj(r, o) : r === o
        }))
      }

      function Bj(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function qj(e) {
        return "number" == typeof e
      }

      function Wj(e) {
        return "string" == typeof e
      }

      function $j(e) {
        return "boolean" == typeof e
      }

      function Xj(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Hj(e) {
        return Math.abs(e)
      }

      function Uj(e) {
        return Math.sign(e)
      }

      function Zj(e, t) {
        return Hj(e - t)
      }

      function Kj(e) {
        return eS(e).map(Number)
      }

      function Gj(e) {
        return e[Yj(e)]
      }

      function Yj(e) {
        return Math.max(0, e.length - 1)
      }

      function Qj(e, t) {
        return t === Yj(e)
      }

      function Jj(e, t = 0) {
        return Array.from(Array(e), (e, n) => t + n)
      }

      function eS(e) {
        return Object.keys(e)
      }

      function tS(e, t) {
        return [e, t].reduce((e, t) => (eS(t).forEach(n => {
          const r = e[n],
            o = t[n],
            i = Xj(r) && Xj(o);
          e[n] = i ? tS(r, o) : o
        }), e), {})
      }

      function nS(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function rS() {
        let e = [];
        const t = {
          add: function(n, r, o, i = {
            passive: !0
          }) {
            let s;
            if ("addEventListener" in n) n.addEventListener(r, o, i), s = () => n.removeEventListener(r, o, i);
            else {
              const e = n;
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

      function oS(e = 0, t = 0) {
        const n = Hj(e - t);

        function r(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function i(e) {
          return r(e) || o(e)
        }
        const s = {
          length: n,
          max: t,
          min: e,
          constrain: function(n) {
            return i(n) ? r(n) ? e : t : n
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function(e) {
            return n ? e - n * Math.ceil((e - t) / n) : e
          }
        };
        return s
      }

      function iS(e, t, n) {
        const {
          constrain: r
        } = oS(0, e), o = e + 1;
        let i = s(t);

        function s(e) {
          return n ? Hj((o + e) % o) : r(e)
        }

        function a() {
          return i
        }

        function l() {
          return iS(e, a(), n)
        }
        const c = {
          get: a,
          set: function(e) {
            return i = s(e), c
          },
          add: function(e) {
            return l().set(a() + e)
          },
          clone: l
        };
        return c
      }

      function sS(e, t, n, r, o, i, s, a, l, c, u, d, f, p, h, m, v, y, g) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, C = rS(), O = rS(), j = oS(50, 225).constrain(p.measure(20)), S = {
          mouse: 300,
          touch: 400
        }, P = {
          mouse: 500,
          touch: 600
        }, R = h ? 43 : 25;
        let k = !1,
          E = 0,
          T = 0,
          N = !1,
          D = !1,
          I = !1,
          M = !1;

        function A(e) {
          if (!nS(e, r) && e.touches.length >= 2) return z(e);
          const t = i.readPoint(e),
            n = i.readPoint(e, b),
            s = Zj(t, E),
            l = Zj(n, T);
          if (!D && !M) {
            if (!e.cancelable) return z(e);
            if (D = s > l, !D) return z(e)
          }
          const u = i.pointerMove(e);
          s > m && (I = !0), c.useFriction(.3).useDuration(.75), a.start(), o.add(w(u)), e.preventDefault()
        }

        function z(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            n = i.pointerUp(e) * (h ? P : S)[M ? "mouse" : "touch"],
            r = function(e, t) {
              const n = d.add(-1 * Uj(e)),
                r = u.byDistance(e, !h).distance;
              return h || Hj(e) < j ? r : v && t ? .5 * r : u.byIndex(n.get(), 0).distance
            }(w(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Hj(e) <= Hj(t)) return 0;
              const n = Zj(Hj(e), Hj(t));
              return Hj(n / e)
            }(n, r),
            s = R - 10 * o,
            a = y + o / 50;
          D = !1, N = !1, O.clear(), c.useDuration(s).useFriction(a), l.distance(r, !h), M = !1, f.emit("pointerUp")
        }

        function L(e) {
          I && (e.stopPropagation(), e.preventDefault(), I = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function a(a) {
              ($j(g) || g(e, a)) && function(e) {
                const a = nS(e, r);
                M = a, I = h && a && !e.buttons && k, k = Zj(o.get(), s.get()) >= 2, a && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (N = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(s), function() {
                  const e = M ? n : t;
                  O.add(e, "touchmove", A, x).add(e, "touchend", z).add(e, "mousemove", A, x).add(e, "mouseup", z)
                }(), E = i.readPoint(e), T = i.readPoint(e, b), f.emit("pointerDown"))
              }(a)
            }
            const l = t;
            C.add(l, "dragstart", e => e.preventDefault(), x).add(l, "touchmove", () => {}, x).add(l, "touchend", () => {}).add(l, "touchstart", a).add(l, "mousedown", a).add(l, "touchcancel", z).add(l, "contextmenu", z).add(l, "click", L, !0)
          },
          destroy: function() {
            C.clear(), O.clear()
          },
          pointerDown: function() {
            return N
          }
        }
      }

      function aS(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function i(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (nS(n, t) ? n : n.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return n = e, r = e, i(e)
          },
          pointerMove: function(e) {
            const t = i(e) - i(r),
              s = o(e) - o(n) > 170;
            return r = e, s && (n = e), t
          },
          pointerUp: function(e) {
            if (!n || !r) return 0;
            const t = i(r) - i(n),
              s = o(e) - o(n),
              a = o(e) - o(r) > 170,
              l = t / s;
            return s && !a && Hj(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function lS(e, t, n, r, o, i, s) {
        const a = [e].concat(r);
        let l, c, u = [],
          d = !1;

        function f(e) {
          return o.measureSize(s.measure(e))
        }
        return {
          init: function(o) {
            i && (c = f(e), u = r.map(f), l = new ResizeObserver(n => {
              ($j(i) || i(o, n)) && function(n) {
                for (const i of n) {
                  if (d) return;
                  const n = i.target === e,
                    s = r.indexOf(i.target),
                    a = n ? c : u[s];
                  if (Hj(f(n ? e : r[s]) - a) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(n)
            }), n.requestAnimationFrame(() => {
              a.forEach(e => l.observe(e))
            }))
          },
          destroy: function() {
            d = !0, l && l.disconnect()
          }
        }
      }

      function cS(e, t, n, r, o) {
        const i = o.measure(10),
          s = o.measure(50),
          a = oS(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = Hj(e[l] - t.get()),
              d = n.get() - t.get(),
              f = a.constrain(u / s);
            n.subtract(d * f), !o && Hj(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function uS(e, t, n, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: s,
            reachedMax: a
          } = oS(o, i),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? a(n.get()) : -1 === e && s(n.get())
                }(t)) return;
              const o = e * (-1 * t);
              r.forEach(e => e.add(o))
            }
          };
        return l
      }

      function dS(e) {
        let t = e;

        function n(e) {
          return qj(e) ? e : e.get()
        }
        const r = {
          get: function() {
            return t
          },
          set: function(e) {
            t = n(e)
          },
          add: function(e) {
            t += n(e)
          },
          subtract: function(e) {
            t -= n(e)
          }
        };
        return r
      }

      function fS(e, t) {
        const n = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          r = t.style;
        let o = null,
          i = !1;
        return {
          clear: function() {
            i || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (i) return;
            const s = (a = e.direction(t), Math.round(100 * a) / 100);
            var a;
            s !== o && (r.transform = n(s), o = s)
          },
          toggleActive: function(e) {
            i = !e
          }
        }
      }

      function pS(e, t, n, r, o, i, s, a, l) {
        const c = Kj(o),
          u = Kj(o).reverse(),
          d = function() {
            const e = s[0];
            return h(p(u, e), n, !1)
          }().concat(function() {
            const e = t - s[0] - 1;
            return h(p(c, e), -n, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function p(e, t) {
          return e.reduce((e, n) => f(e, t) > 0 ? e.concat([n]) : e, [])
        }

        function h(o, s, c) {
          const u = function(e) {
            return i.map((n, o) => ({
              start: n - r[o] + .5 + e,
              end: n + t - .5 + e
            }))
          }(s);
          return o.map(t => {
            const r = c ? 0 : -n,
              o = c ? n : 0,
              i = c ? "end" : "start",
              s = u[t][i];
            return {
              index: t,
              loopPoint: s,
              slideLocation: dS(-1),
              translate: fS(e, l[t]),
              target: () => a.get() > s ? r : o
            }
          })
        }
        const m = {
          canLoop: function() {
            return d.every(({
              index: e
            }) => {
              const n = c.filter(t => t !== e);
              return f(n, t) <= .1
            })
          },
          clear: function() {
            d.forEach(e => e.translate.clear())
          },
          loop: function() {
            d.forEach(e => {
              const {
                target: t,
                translate: n,
                slideLocation: r
              } = e, o = t();
              o !== r.get() && (n.to(o), r.set(o))
            })
          },
          loopPoints: d
        };
        return m
      }

      function hS(e, t, n) {
        let r, o = !1;
        return {
          init: function(i) {
            n && (r = new MutationObserver(e => {
              o || ($j(n) || n(i, e)) && function(e) {
                for (const n of e)
                  if ("childList" === n.type) {
                    i.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            }), r.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            r && r.disconnect(), o = !0
          }
        }
      }

      function mS(e, t, n, r, o, i, s) {
        const {
          align: a,
          axis: l,
          direction: c,
          startIndex: u,
          loop: d,
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
        } = i, C = {
          measure: function(e) {
            const {
              offsetTop: t,
              offsetLeft: n,
              offsetWidth: r,
              offsetHeight: o
            } = e;
            return {
              top: t,
              right: n + r,
              bottom: t + o,
              left: n,
              width: r,
              height: o
            }
          }
        }, O = C.measure(t), j = n.map(C.measure), S = function(e, t) {
          const n = "rtl" === t,
            r = "y" === e,
            o = !r && n ? -1 : 1,
            i = {
              scroll: r ? "y" : "x",
              cross: r ? "x" : "y",
              startEdge: r ? "top" : n ? "right" : "left",
              endEdge: r ? "bottom" : n ? "left" : "right",
              measureSize: function(e) {
                const {
                  height: t,
                  width: n
                } = e;
                return r ? t : n
              },
              direction: function(e) {
                return e * o
              }
            };
          return i
        }(l, c), P = S.measureSize(O), R = function(e) {
          const t = {
            measure: function(t) {
              return e * (t / 100)
            }
          };
          return t
        }(P), k = function(e, t) {
          const n = {
            start: function() {
              return 0
            },
            center: function(e) {
              return r(e) / 2
            },
            end: r
          };

          function r(e) {
            return t - e
          }
          const o = {
            measure: function(r, o) {
              return Wj(e) ? n[e](r) : e(t, r, o)
            }
          };
          return o
        }(a, P), E = !d && !!g, T = d || !!g, {
          slideSizes: N,
          slideSizesWithGaps: D,
          startGap: I,
          endGap: M
        } = function(e, t, n, r, o, i) {
          const {
            measureSize: s,
            startEdge: a,
            endEdge: l
          } = e, c = n[0] && o, u = function() {
            if (!c) return 0;
            const e = n[0];
            return Hj(t[a] - e[a])
          }(), d = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(Gj(r));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = n.map(s), p = n.map((e, t, n) => {
            const r = !t,
              o = Qj(n, t);
            return r ? f[t] + u : o ? f[t] + d : n[t + 1][a] - e[a]
          }).map(Hj);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: u,
            endGap: d
          }
        }(S, O, j, n, T, o), A = function(e, t, n, r, o, i, s, a, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, f = qj(n), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return Kj(e).filter(e => e % t === 0).map(n => e.slice(n, n + t))
              }(e, n) : function(e) {
                return e.length ? Kj(e).reduce((n, f, p) => {
                  const h = Gj(n) || 0,
                    m = 0 === h,
                    v = f === Yj(e),
                    y = o[c] - i[h][c],
                    g = o[c] - i[f][u],
                    b = !r && m ? d(s) : 0,
                    w = Hj(g - (!r && v ? d(a) : 0) - (y + b));
                  return p && w > t + l && n.push(f), v && n.push(e.length), n
                }, []).map((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(S, P, v, d, O, j, I, M, 2), {
          snaps: z,
          snapsAligned: L
        } = function(e, t, n, r, o) {
          const {
            startEdge: i,
            endEdge: s
          } = e, {
            groupSlides: a
          } = o, l = a(r).map(e => Gj(e)[s] - e[0][i]).map(Hj).map(t.measure), c = r.map(e => n[i] - e[i]).map(e => -Hj(e)), u = a(c).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: c,
            snapsAligned: u
          }
        }(S, k, O, j, A), V = -Gj(z) + Gj(D), {
          snapsContained: F,
          scrollContainLimit: B
        } = function(e, t, n, r) {
          const o = oS(-t + e, 0),
            i = n.map((e, t) => {
              const {
                min: r,
                max: i
              } = o, s = o.constrain(e), l = !t, c = Qj(n, t);
              return l ? i : c || a(r, s) ? r : a(i, s) ? i : s
            }).map(e => parseFloat(e.toFixed(3))),
            s = function() {
              const e = i[0],
                t = Gj(i);
              return oS(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function a(e, t) {
            return Zj(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === r) return i;
              const {
                min: n,
                max: a
              } = s;
              return i.slice(n, a)
            }(),
            scrollContainLimit: s
          }
        }(P, V, L, g), q = E ? F : L, {
          limit: W
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: oS(n ? r - e : Gj(t), r)
          }
        }(V, q, d), $ = iS(Yj(q), u, d), X = $.clone(), H = Kj(n), U = function(e, t, n, r) {
          const o = rS(),
            i = 1e3 / 60;
          let s = null,
            a = 0,
            l = 0;

          function c(e) {
            if (!l) return;
            s || (s = e, n(), n());
            const o = e - s;
            for (s = e, a += o; a >= i;) n(), a -= i;
            r(a / i), l && (l = t.requestAnimationFrame(c))
          }

          function u() {
            t.cancelAnimationFrame(l), s = null, a = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (s = null, a = 0)
              })
            },
            destroy: function() {
              u(), o.clear()
            },
            start: function() {
              l || (l = t.requestAnimationFrame(c))
            },
            stop: u,
            update: n,
            render: r
          }
        }(r, o, () => (({
          dragHandler: e,
          scrollBody: t,
          scrollBounds: n,
          options: {
            loop: r
          }
        }) => {
          r || n.constrain(e.pointerDown()), t.seek()
        })(ae), e => (({
          scrollBody: e,
          translate: t,
          location: n,
          offsetLocation: r,
          previousLocation: o,
          scrollLooper: i,
          slideLooper: s,
          dragHandler: a,
          animation: l,
          eventHandler: c,
          scrollBounds: u,
          options: {
            loop: d
          }
        }, f) => {
          const p = e.settled(),
            h = !u.shouldConstrain(),
            m = d ? p : p && h,
            v = m && !a.pointerDown();
          v && l.stop();
          const y = n.get() * f + o.get() * (1 - f);
          r.set(y), d && (i.loop(e.direction()), s.loop()), t.to(r.get()), v && c.emit("settle"), m || c.emit("scroll")
        })(ae, e)), Z = q[$.get()], K = dS(Z), G = dS(Z), Y = dS(Z), Q = dS(Z), J = function(e, t, n, r, o) {
          let i = 0,
            s = 0,
            a = o,
            l = .68,
            c = e.get(),
            u = 0;

          function d(e) {
            return a = e, p
          }

          function f(e) {
            return l = e, p
          }
          const p = {
            direction: function() {
              return s
            },
            duration: function() {
              return a
            },
            velocity: function() {
              return i
            },
            seek: function() {
              const t = r.get() - e.get();
              let o = 0;
              return a ? (n.set(e), i += t / a, i *= l, c += i, e.add(i), o = c - u) : (i = 0, n.set(r), e.set(r), o = t), s = Uj(o), u = c, p
            },
            settled: function() {
              return Hj(r.get() - t.get()) < .001
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
          return p
        }(K, Y, G, Q, f), ee = function(e, t, n, r, o) {
          const {
            reachedAny: i,
            removeOffset: s,
            constrain: a
          } = r;

          function l(e) {
            return e.concat().sort((e, t) => Hj(e) - Hj(t))[0]
          }

          function c(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return l(o);
            const i = o.filter(e => Uj(e) === r);
            return i.length ? l(i) : Gj(o) - n
          }
          const u = {
            byDistance: function(n, r) {
              const l = o.get() + n,
                {
                  index: u,
                  distance: d
                } = function(n) {
                  const r = e ? s(n) : a(n),
                    o = t.map((e, t) => ({
                      diff: c(e - r, 0),
                      index: t
                    })).sort((e, t) => Hj(e.diff) - Hj(t.diff)),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: r
                  }
                }(l),
                f = !e && i(l);
              return !r || f ? {
                index: u,
                distance: n
              } : {
                index: u,
                distance: n + c(t[u] - d, 0)
              }
            },
            byIndex: function(e, n) {
              return {
                index: e,
                distance: c(t[e] - o.get(), n)
              }
            },
            shortcut: c
          };
          return u
        }(d, q, V, W, Q), te = function(e, t, n, r, o, i, s) {
          function a(o) {
            const a = o.distance,
              l = o.index !== t.get();
            i.add(a), a && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (n.set(t.get()), t.set(o.index), s.emit("select"))
          }
          const l = {
            distance: function(e, t) {
              a(o.byDistance(e, t))
            },
            index: function(e, n) {
              const r = t.clone().set(e);
              a(o.byIndex(r.get(), n))
            }
          };
          return l
        }(U, $, X, J, ee, Q, s), ne = function(e) {
          const {
            max: t,
            length: n
          } = e, r = {
            get: function(e) {
              return n ? (e - t) / -n : 0
            }
          };
          return r
        }(W), re = rS(), oe = function(e, t, n, r) {
          const o = {};
          let i, s = null,
            a = null,
            l = !1;
          const c = {
            init: function() {
              i = new IntersectionObserver(e => {
                l || (e.forEach(e => {
                  const n = t.indexOf(e.target);
                  o[n] = e
                }), s = null, a = null, n.emit("slidesInView"))
              }, {
                root: e.parentElement,
                threshold: r
              }), t.forEach(e => i.observe(e))
            },
            destroy: function() {
              i && i.disconnect(), l = !0
            },
            get: function(e = !0) {
              if (e && s) return s;
              if (!e && a) return a;
              const t = function(e) {
                return eS(o).reduce((t, n) => {
                  const r = parseInt(n),
                    {
                      isIntersecting: i
                    } = o[r];
                  return (e && i || !e && !i) && t.push(r), t
                }, [])
              }(e);
              return e && (s = t), e || (a = t), t
            }
          };
          return c
        }(t, n, s, m), {
          slideRegistry: ie
        } = function(e, t, n, r, o, i) {
          const {
            groupSlides: s
          } = o, {
            min: a,
            max: l
          } = r, c = function() {
            const r = s(i),
              o = !e || "keepSnaps" === t;
            return 1 === n.length ? [i] : o ? r : r.slice(a, l).map((e, t, n) => {
              const r = !t,
                o = Qj(n, t);
              return r ? Jj(Gj(n[0]) + 1) : o ? Jj(Yj(i) - Gj(n)[0] + 1, Gj(n)[0]) : e
            })
          }();
          return {
            slideRegistry: c
          }
        }(E, g, q, B, A, H), se = function(e, t, n, r, o, i, s, a) {
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
              a && (i.add(document, "keydown", u, !1), t.forEach((t, u) => {
                i.add(t, "focus", t => {
                  ($j(a) || a(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    s.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = n.findIndex(e => e.includes(t));
                    qj(i) && (o.useDuration(0), r.index(i, 0), s.emit("slideFocus"))
                  }(u)
                }, l)
              }))
            }
          };
          return d
        }(e, n, ie, te, J, re, s, x), ae = {
          ownerDocument: r,
          ownerWindow: o,
          eventHandler: s,
          containerRect: O,
          slideRects: j,
          animation: U,
          axis: S,
          dragHandler: sS(S, e, r, o, Q, aS(S, o), K, U, te, J, ee, $, s, R, p, h, y, .68, _),
          eventStore: re,
          percentOfView: R,
          index: $,
          indexPrevious: X,
          limit: W,
          location: K,
          offsetLocation: Y,
          previousLocation: G,
          options: i,
          resizeHandler: lS(t, s, o, n, S, b, C),
          scrollBody: J,
          scrollBounds: cS(W, Y, Q, J, R),
          scrollLooper: uS(V, W, Y, [K, Y, G, Q]),
          scrollProgress: ne,
          scrollSnapList: q.map(ne.get),
          scrollSnaps: q,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: pS(S, P, V, N, D, z, q, Y, n),
          slideFocus: se,
          slidesHandler: hS(t, s, w),
          slidesInView: oe,
          slideIndexes: H,
          slideRegistry: ie,
          slidesToScroll: A,
          target: Q,
          translate: fS(S, t)
        };
        return ae
      }
      const vS = {
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

      function yS(e) {
        function t(e, t) {
          return tS(e, t || {})
        }
        const n = {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = eS(r).filter(t => e.matchMedia(t).matches).map(e => r[e]).reduce((e, n) => t(e, n), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => eS(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return n
      }

      function gS(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = yS(o),
          s = function(e) {
            let t = [];
            const n = {
              init: function(n, r) {
                return t = r.filter(({
                  options: t
                }) => !1 !== e.optionsAtMedia(t).active), t.forEach(t => t.init(n, e)), r.reduce((e, t) => Object.assign(e, {
                  [t.name]: t
                }), {})
              },
              destroy: function() {
                t = t.filter(e => e.destroy())
              }
            };
            return n
          }(i),
          a = rS(),
          l = function() {
            let e, t = {};

            function n(e) {
              return t[e] || []
            }
            const r = {
              init: function(t) {
                e = t
              },
              emit: function(t) {
                return n(t).forEach(n => n(e, t)), r
              },
              off: function(e, o) {
                return t[e] = n(e).filter(e => e !== o), r
              },
              on: function(e, o) {
                return t[e] = n(e).concat([o]), r
              },
              clear: function() {
                t = {}
              }
            };
            return r
          }(),
          {
            mergeOptions: c,
            optionsAtMedia: u,
            optionsMediaQueries: d
          } = i,
          {
            on: f,
            off: p,
            emit: h
          } = l,
          m = S;
        let v, y, g, b, w = !1,
          _ = c(vS, gS.globalOptions),
          x = c(_),
          C = [];

        function O(t) {
          const n = mS(e, g, b, r, o, t, l);
          return t.loop && !n.slideLooper.canLoop() ? O(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function j(t, n) {
          w || (_ = c(_, t), x = u(_), C = n || C, function() {
            const {
              container: t,
              slides: n
            } = x, r = Wj(t) ? e.querySelector(t) : t;
            g = r || e.children[0];
            const o = Wj(n) ? g.querySelectorAll(n) : n;
            b = [].slice.call(o || g.children)
          }(), v = O(x), d([_, ...C.map(({
            options: e
          }) => e)]).forEach(e => a.add(e, "change", S)), x.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(E), v.eventHandler.init(E), v.resizeHandler.init(E), v.slidesHandler.init(E), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(E), y = s.init(E, C)))
        }

        function S(e, t) {
          const n = k();
          P(), j(c({
            startIndex: n
          }, e), t), l.emit("reInit")
        }

        function P() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), s.destroy(), a.clear()
        }

        function R(e, t, n) {
          x.active && !w && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), v.scrollTo.index(e, n || 0))
        }

        function k() {
          return v.index.get()
        }
        const E = {
          canScrollNext: function() {
            return v.index.add(1).get() !== k()
          },
          canScrollPrev: function() {
            return v.index.add(-1).get() !== k()
          },
          containerNode: function() {
            return g
          },
          internalEngine: function() {
            return v
          },
          destroy: function() {
            w || (w = !0, a.clear(), P(), l.emit("destroy"), l.clear())
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
            R(v.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            R(v.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return v.scrollProgress.get(v.offsetLocation.get())
          },
          scrollSnapList: function() {
            return v.scrollSnapList
          },
          scrollTo: R,
          selectedScrollSnap: k,
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
        return j(t, n), setTimeout(() => l.emit("init"), 0), E
      }

      function bS(e = {}, t = []) {
        const n = (0, B.useRef)(e),
          r = (0, B.useRef)(t),
          [o, i] = (0, B.useState)(),
          [s, a] = (0, B.useState)(),
          l = (0, B.useCallback)(() => {
            o && o.reInit(n.current, r.current)
          }, [o]);
        return (0, B.useEffect)(() => {
          Fj(n.current, e) || (n.current = e, l())
        }, [e, l]), (0, B.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = Bj(e),
              r = Bj(t);
            return n.every((e, t) => Fj(e, r[t]))
          })(r.current, t) || (r.current = t, l())
        }, [t, l]), (0, B.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && s) {
            gS.globalOptions = bS.globalOptions;
            const e = gS(s, n.current, r.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }, [s, i]), [a, o]
      }

      function wS(e = {}) {
        let t, n = [];
        const r = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), r = e[t.selectedScrollSnap()];
          return r ? r.map(e => n[e]).reduce((e, t) => Math.max(e, t), 0) : null
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
              slideRects: s
            } = t.internalEngine();
            "y" !== o && (n = s.map(e => e.height), r.forEach(e => t.on(e, i)), i())
          },
          destroy: function() {
            r.forEach(e => t.off(e, i));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      gS.globalOptions = void 0, bS.globalOptions = void 0, wS.globalOptions = void 0;
      const _S = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function xS(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function CS(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function OS(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function jS(e = {}) {
        let t, n, r, o, i = [],
          s = [];
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
          ("pointerDown" === t ? OS : CS)(r, u.dragging)
        }

        function f(e = [], t = [], n) {
          const r = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return r.forEach(e => CS(e, n)), i.forEach(e => OS(e, n)), e
        }

        function p() {
          const {
            slideRegistry: e
          } = n.internalEngine(), t = e[n.selectedScrollSnap()];
          i = f(t, i, u.snapped)
        }

        function h() {
          const e = n.slidesInView();
          s = f(e, s, u.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(i, s) {
            n = i;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = s, v = f(_S, jS.globalOptions), y = f(v, e);
            t = m(y), r = n.rootNode(), o = n.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = n.internalEngine().options, w = !!g;
            t.loop && b && (u.loop = xS(t.loop), OS(r, u.loop)), t.draggable && w && (u.draggable = xS(t.draggable), OS(r, u.draggable)), t.dragging && (u.dragging = xS(t.dragging), l.forEach(e => n.on(e, d))), t.snapped && (u.snapped = xS(t.snapped), a.forEach(e => n.on(e, p)), p()), t.inView && (u.inView = xS(t.inView), c.forEach(e => n.on(e, h)), h())
          },
          destroy: function() {
            l.forEach(e => n.off(e, d)), a.forEach(e => n.off(e, p)), c.forEach(e => n.off(e, h)), CS(r, u.loop), CS(r, u.draggable), CS(r, u.dragging), f([], i, u.snapped), f([], s, u.inView), Object.keys(u).forEach(e => {
              u[e] = []
            })
          }
        };
        return m
      }
      jS.globalOptions = void 0;

      function SS(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function PS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function RS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? PS(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = SS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : PS(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function kS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ES = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        TS = "foundry_qmpv6yv",
        NS = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = RS(RS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ES(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kS(e.variantClassNames, e => kS(e, e => e.split(" ")[0]))
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
      const DS = (0, B.createContext)(null);

      function IS() {
        const e = (0, B.useContext)(DS);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const MS = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          loopPagination: r,
          status: o,
          background: i,
          align: s = "left",
          ...a
        }, l) => {
          const c = (({
              loopPagination: e = !0
            }) => {
              const t = (0, K.rl)(),
                n = (0, K.jt)(),
                [r, o] = (0, B.useState)([]),
                i = r.length,
                [s, a] = (0, B.useState)(0),
                [l, c] = bS({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [wS(), jS()]),
                u = (0, B.useRef)(0),
                d = (0, B.useRef)(!1),
                f = r[s],
                p = (0, B.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, n) => {
                    e.style.visibility = n === t ? "visible" : "hidden"
                  }), a(t), d.current = !0
                }, [c]),
                h = (0, B.useCallback)(e => {
                  u.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, B.useCallback)((e, t) => {
                  const n = e.internalEngine(),
                    r = e.scrollProgress(),
                    o = e.slidesInView(),
                    i = "scroll" === t;
                  e.scrollSnapList().forEach((t, s) => {
                    let a = t - r;
                    n.slideRegistry[s].forEach(s => {
                      if (i && !o.includes(s)) return;
                      n.options.loop && n.slideLooper.loopPoints.forEach(e => {
                        const n = e.target();
                        if (s === e.index && 0 !== n) {
                          const e = Math.sign(n); - 1 === e && (a = t - (1 + r)), 1 === e && (a = t + (1 - r))
                        }
                      });
                      const l = (c = 1 - Math.abs(a * u.current), Math.min(Math.max(c, 0), 1)).toString();
                      var c;
                      e.slideNodes()[s].style.opacity = l
                    })
                  })
                }, []);
              return (0, B.useEffect)(() => {
                c && (h(c), m(c), c.on("reInit", h).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [c, m]), (0, B.useEffect)(() => {
                c && (p(c), c.on("select", p).on("reInit", p))
              }, [c, p]), {
                setAlerts: o,
                alerts: r,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => c?.scrollPrev(n),
                nextAlert: () => c?.scrollNext(n),
                currentAlert: f,
                currentAlertIndex: s,
                setCurrentAlertIndex: a,
                isInitialized: d.current,
                loopPagination: e,
                canScrollNext: () => c?.canScrollNext() || !1,
                canScrollPrev: () => c?.canScrollPrev() || !1
              }
            })({
              loopPagination: r
            }),
            {
              currentAlert: u,
              isInitialized: d,
              setAlerts: f,
              numAlerts: p
            } = c;
          (0, B.useEffect)(() => {
            o && i && f([{
              status: o,
              background: i,
              align: s
            }])
          }, []);
          const h = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, H.v6)({
              className: NS(u)
            }, h, a),
            v = e ? G.DX : "div";
          return (0, O.jsx)(DS.Provider, {
            value: c,
            children: (0, O.jsx)(v, {
              ref: l,
              "data-testid": n,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        AS = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        zS = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const {
            currentAlert: r
          } = IS();
          if (!e && !r || !r?.status) return null;
          const o = e || AS[r.status],
            i = ee[o],
            s = (0, H.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, O.jsx)(i, {
            label: "",
            ref: n,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        LS = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? G.DX : "div",
            i = (0, H.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, O.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        VS = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          align: n = "left",
          status: r,
          background: o,
          ...i
        }, s) => {
          const a = e ? G.DX : "div",
            l = (0, H.v6)({
              className: "foundry_qmpv6yo"
            }, i);
          return (0, O.jsx)(a, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        FS = (0, B.forwardRef)(({
          testId: e,
          children: t,
          ...n
        }, r) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = IS(), s = (0, H.v6)({
            className: "foundry_qmpv6ym"
          }, n), a = (0, K.UP)(i, r), l = B.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, B.useEffect)(() => {
            l && o(l)
          }, []), (0, O.jsx)("div", {
            ref: a,
            "data-testid": e,
            ...s,
            children: (0, O.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        BS = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, B.useRef)(null),
            s = (0, K.UP)(i, o),
            a = e ? G.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = cj(r, i),
            u = (0, H.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, r);
          return (0, O.jsx)(a, {
            "data-pressed": c,
            "data-testid": n,
            ref: s,
            ...l,
            ...u,
            children: t
          })
        }),
        qS = (0, B.forwardRef)((e, t) => {
          const n = (0, H.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, O.jsx)(vj, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...n
          })
        }),
        WS = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          children: n,
          ...r
        }, o) => {
          const i = e ? G.DX : "div",
            s = (0, H.v6)({
              className: "foundry_qmpv6yt"
            }, r);
          return (0, O.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: n
          })
        }),
        $S = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            nextAlert: r,
            canScrollNext: o
          } = IS(), i = (0, H.v6)({
            className: TS
          }, t);
          return (0, O.jsx)(_e, {
            ref: n,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: r,
            isDisabled: !o(),
            ...i
          })
        }),
        XS = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            prevAlert: r,
            canScrollPrev: o
          } = IS(), i = (0, H.v6)({
            className: TS
          }, t);
          return (0, O.jsx)(_e, {
            ref: n,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: r,
            isDisabled: !o(),
            ...i
          })
        }),
        HS = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            currentAlertIndex: r,
            numAlerts: o
          } = IS(), i = (0, H.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn foundry_tdsdcdq"
          }, t);
          return (0, O.jsxs)("div", {
            ref: n,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [r + 1, "/", o]
          })
        });

      function US(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ZS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function KS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ZS(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = US(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ZS(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function GS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var YS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        QS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = KS(KS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) YS(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return GS(e.variantClassNames, e => GS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        JS = QS({
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
        eP = QS({
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
        tP = QS({
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
      const nP = (0, B.createContext)(null);

      function rP() {
        const e = (0, B.useContext)(nP);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const oP = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          size: r,
          background: o,
          color: i,
          hasBorder: s,
          isDisabled: a,
          ...l
        }, c) => {
          const u = {
              size: r,
              background: o,
              color: i,
              hasBorder: s,
              isDisabled: a
            },
            d = (0, H.v6)({
              className: eP(u)
            }, l),
            f = e ? G.DX : "div";
          return (0, O.jsx)(nP.Provider, {
            value: u,
            children: (0, O.jsx)(f, {
              ref: c,
              "data-testid": n,
              "aria-disabled": a,
              ...d,
              children: t
            })
          })
        }),
        iP = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: i
          } = rP(), s = e ? G.DX : "div", a = (0, H.v6)({
            className: tP({
              size: i
            })
          }, r);
          return (0, O.jsx)(s, {
            ref: o,
            "data-testid": n,
            ...a,
            children: t
          })
        }),
        sP = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = ee[e],
            o = (0, H.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, O.jsx)(r, {
            ref: n,
            size: "SM",
            ...o
          })
        }),
        aP = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            background: r,
            isDisabled: o
          } = rP(), i = (0, H.v6)({
            className: JS({
              background: r
            })
          }, t);
          return (0, O.jsx)(_e, {
            ref: n,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...i
          })
        });

      function lP(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function cP(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var uP = Symbol("radix.slottable");

      function dP(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === uP
      }
      var fP = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = cP(e),
                n = B.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = B.Children.toArray(r), s = i.find(dP);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                    return (0, O.jsx)(t, {
                      ...o,
                      ref: n,
                      children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        pP = "ToastProvider",
        [hP, mP, vP] = Dm("Toast"),
        [yP, gP] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, lP(r, ...t)]
        }("Toast", [vP]),
        [bP, wP] = yP(pP),
        _P = e => {
          const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
          } = e, [a, l] = B.useState(null), [c, u] = B.useState(0), d = B.useRef(!1), f = B.useRef(!1);
          return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${pP}\`. Expected non-empty \`string\`.`), (0, O.jsx)(hP.Provider, {
            scope: t,
            children: (0, O.jsx)(bP, {
              scope: t,
              label: n,
              duration: r,
              swipeDirection: o,
              swipeThreshold: i,
              toastCount: c,
              viewport: a,
              onViewportChange: l,
              onToastAdd: B.useCallback(() => u(e => e + 1), []),
              onToastRemove: B.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      _P.displayName = pP;
      var xP = "ToastViewport",
        CP = ["F8"],
        OP = "toast.viewportPause",
        jP = "toast.viewportResume",
        SP = B.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            hotkey: r = CP,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, s = wP(xP, n), a = mP(n), l = B.useRef(null), c = B.useRef(null), u = B.useRef(null), d = B.useRef(null), f = (0, Md.s)(t, d, s.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = s.toastCount > 0;
          B.useEffect(() => {
            const e = e => {
              0 !== r.length && r.every(t => e[t] || e.code === t) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [r]), B.useEffect(() => {
            const e = l.current,
              t = d.current;
            if (h && e && t) {
              const n = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(OP);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                r = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(jP);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && r()
                },
                i = () => {
                  e.contains(document.activeElement) || r()
                };
              return e.addEventListener("focusin", n), e.addEventListener("focusout", o), e.addEventListener("pointermove", n), e.addEventListener("pointerleave", i), window.addEventListener("blur", n), window.addEventListener("focus", r), () => {
                e.removeEventListener("focusin", n), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", n), e.removeEventListener("pointerleave", i), window.removeEventListener("blur", n), window.removeEventListener("focus", r)
              }
            }
          }, [h, s.isClosePausedRef]);
          const m = B.useCallback(({
            tabbingDirection: e
          }) => {
            const t = a().map(t => {
              const n = t.ref.current,
                r = [n, ...$P(n)];
              return "forwards" === e ? r : r.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [a]);
          return B.useEffect(() => {
            const e = d.current;
            if (e) {
              const t = t => {
                const n = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !n) {
                  const n = document.activeElement,
                    r = t.shiftKey;
                  if (t.target === e && r) return void c.current?.focus();
                  const o = m({
                      tabbingDirection: r ? "backwards" : "forwards"
                    }),
                    i = o.findIndex(e => e === n);
                  XP(o.slice(i + 1)) ? t.preventDefault() : r ? c.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, O.jsxs)(Gd, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, O.jsx)(RP, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                XP(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, O.jsx)(hP.Slot, {
              scope: n,
              children: (0, O.jsx)(fP.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), h && (0, O.jsx)(RP, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                XP(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      SP.displayName = xP;
      var PP = "ToastFocusProxy",
        RP = B.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
          } = e, i = wP(PP, n);
          return (0, O.jsx)(Eh, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !i.viewport?.contains(t) && r()
            }
          })
        });
      RP.displayName = PP;
      var kP = "Toast",
        EP = B.forwardRef((e, t) => {
          const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
          } = e, [a, l] = Oh({
            prop: r,
            defaultProp: o ?? !0,
            onChange: i,
            caller: kP
          });
          return (0, O.jsx)(yh, {
            present: n || a,
            children: (0, O.jsx)(DP, {
              open: a,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: Bd(e.onPause),
              onResume: Bd(e.onResume),
              onSwipeStart: Id(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: Id(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: n
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${n}px`)
              }),
              onSwipeCancel: Id(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: Id(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: n
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${n}px`), l(!1)
              })
            })
          })
        });
      EP.displayName = kP;
      var [TP, NP] = yP(kP, {
        onClose() {}
      }), DP = B.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          type: r = "foreground",
          duration: o,
          open: i,
          onClose: s,
          onEscapeKeyDown: a,
          onPause: l,
          onResume: c,
          onSwipeStart: u,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...h
        } = e, m = wP(kP, n), [v, y] = B.useState(null), g = (0, Md.s)(t, e => y(e)), b = B.useRef(null), w = B.useRef(null), _ = o || m.duration, x = B.useRef(0), C = B.useRef(_), j = B.useRef(0), {
          onToastAdd: S,
          onToastRemove: P
        } = m, R = Bd(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), s()
        }), k = B.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(j.current), x.current = (new Date).getTime(), j.current = window.setTimeout(R, e))
        }, [R]);
        B.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                k(C.current), c?.()
              },
              n = () => {
                const e = (new Date).getTime() - x.current;
                C.current = C.current - e, window.clearTimeout(j.current), l?.()
              };
            return e.addEventListener(OP, n), e.addEventListener(jP, t), () => {
              e.removeEventListener(OP, n), e.removeEventListener(jP, t)
            }
          }
        }, [m.viewport, _, l, c, k]), B.useEffect(() => {
          i && !m.isClosePausedRef.current && k(_)
        }, [i, _, m.isClosePausedRef, k]), B.useEffect(() => (S(), () => P()), [S, P]);
        const E = B.useMemo(() => v ? BP(v) : null, [v]);
        return m.viewport ? (0, O.jsxs)(O.Fragment, {
          children: [E && (0, O.jsx)(IP, {
            __scopeToast: n,
            role: "status",
            "aria-live": "foreground" === r ? "assertive" : "polite",
            children: E
          }), (0, O.jsx)(TP, {
            scope: n,
            onClose: R,
            children: bd.createPortal((0, O.jsx)(hP.ItemSlot, {
              scope: n,
              children: (0, O.jsx)(Kd, {
                asChild: !0,
                onEscapeKeyDown: Id(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || R(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, O.jsx)(fP.li, {
                  tabIndex: 0,
                  "data-state": i ? "open" : "closed",
                  "data-swipe-direction": m.swipeDirection,
                  ...h,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: Id(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, R()))
                  }),
                  onPointerDown: Id(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: Id(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      n = e.clientY - b.current.y,
                      r = Boolean(w.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      i = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      s = o ? i(0, t) : 0,
                      a = o ? 0 : i(0, n),
                      l = "touch" === e.pointerType ? 10 : 2,
                      c = {
                        x: s,
                        y: a
                      },
                      f = {
                        originalEvent: e,
                        delta: c
                      };
                    r ? (w.current = c, qP("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : WP(c, m.swipeDirection, l) ? (w.current = c, qP("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(n) > l) && (b.current = null)
                  }),
                  onPointerUp: Id(e.onPointerUp, e => {
                    const t = w.current,
                      n = e.target;
                    if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const n = e.currentTarget,
                        r = {
                          originalEvent: e,
                          delta: t
                        };
                      WP(t, m.swipeDirection, m.swipeThreshold) ? qP("toast.swipeEnd", p, r, {
                        discrete: !0
                      }) : qP("toast.swipeCancel", f, r, {
                        discrete: !0
                      }), n.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), m.viewport)
          })]
        }) : null
      }), IP = e => {
        const {
          __scopeToast: t,
          children: n,
          ...r
        } = e, o = wP(kP, t), [i, s] = B.useState(!1), [a, l] = B.useState(!1);
        return function(e = () => {}) {
          const t = Bd(e);
          Yd(() => {
            let e = 0,
              n = 0;
            return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(n)
            }
          }, [t])
        }(() => s(!0)), B.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, O.jsx)(vh, {
          asChild: !0,
          children: (0, O.jsx)(Eh, {
            ...r,
            children: i && (0, O.jsxs)(O.Fragment, {
              children: [o.label, " ", n]
            })
          })
        })
      };
      B.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          ...r
        } = e;
        return (0, O.jsx)(fP.div, {
          ...r,
          ref: t
        })
      }).displayName = "ToastTitle";
      var MP = B.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          ...r
        } = e;
        return (0, O.jsx)(fP.div, {
          ...r,
          ref: t
        })
      });
      MP.displayName = "ToastDescription";
      var AP = "ToastAction",
        zP = B.forwardRef((e, t) => {
          const {
            altText: n,
            ...r
          } = e;
          return n.trim() ? (0, O.jsx)(FP, {
            altText: n,
            asChild: !0,
            children: (0, O.jsx)(VP, {
              ...r,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${AP}\`. Expected non-empty \`string\`.`), null)
        });
      zP.displayName = AP;
      var LP = "ToastClose",
        VP = B.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            ...r
          } = e, o = NP(LP, n);
          return (0, O.jsx)(FP, {
            asChild: !0,
            children: (0, O.jsx)(fP.button, {
              type: "button",
              ...r,
              ref: t,
              onClick: Id(e.onClick, o.onClose)
            })
          })
        });
      VP.displayName = LP;
      var FP = B.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          altText: r,
          ...o
        } = e;
        return (0, O.jsx)(fP.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": r || void 0,
          ...o,
          ref: t
        })
      });

      function BP(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e)) {
            const n = e.ariaHidden || e.hidden || "none" === e.style.display,
              r = "" === e.dataset.radixToastAnnounceExclude;
            if (!n)
              if (r) {
                const n = e.dataset.radixToastAnnounceAlt;
                n && t.push(n)
              } else t.push(...BP(e))
          }
        }), t
      }

      function qP(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.currentTarget,
          i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? function(e, t) {
          e && bd.flushSync(() => e.dispatchEvent(t))
        }(o, i) : o.dispatchEvent(i)
      }
      var WP = (e, t, n = 0) => {
        const r = Math.abs(e.x),
          o = Math.abs(e.y),
          i = r > o;
        return "left" === t || "right" === t ? i && r > n : !i && o > n
      };

      function $P(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function XP(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var HP = _P,
        UP = SP,
        ZP = EP,
        KP = MP,
        GP = zP,
        YP = VP;

      function QP(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function JP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function eR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? JP(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = QP(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : JP(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function tR(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var nR = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        rR = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = eR(eR({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) nR(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tR(e.variantClassNames, e => tR(e, e => e.split(" ")[0]))
            }
          }, t
        },
        oR = rR({
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
        iR = rR({
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
        sR = rR({
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
      const aR = ({
          testId: e,
          ...t
        }) => (0, O.jsx)(HP, {
          "data-testid": e,
          ...t
        }),
        lR = (0, B.forwardRef)(({
          children: e,
          testId: t,
          position: n = "bottomRight",
          ...r
        }, o) => {
          const i = (0, H.v6)({
            className: sR({
              position: n
            })
          }, r);
          return (0, O.jsx)(UP, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        cR = (0, B.createContext)(null);

      function uR() {
        const e = (0, B.useContext)(cR);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const dR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          appearance: r = "success",
          ...o
        }, i) => {
          const s = e ? G.DX : ZP,
            a = (0, H.v6)({
              className: iR({
                appearance: r
              })
            }, o);
          return (0, O.jsx)(cR.Provider, {
            value: {
              appearance: r
            },
            children: (0, O.jsx)(s, {
              ref: i,
              "data-testid": n,
              ...a,
              children: t
            })
          })
        }),
        fR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? G.DX : KP,
            s = (0, H.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, O.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...s,
            children: t
          })
        }),
        pR = {
          danger: ee.CircleX,
          information: ee.Info,
          success: ee.CircleCheck,
          warning: ee.TriangleAlert,
          avocado: ee.CircleCheck
        },
        hR = (0, B.forwardRef)(({
          asChild: e,
          ...t
        }, n) => {
          const {
            appearance: r
          } = uR(), o = e ? G.DX : pR[r], i = (0, H.v6)({
            className: oR({
              appearance: r
            }),
            size: "LG"
          }, t);
          return (0, O.jsx)(o, {
            ref: n,
            ...i
          })
        }),
        mR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, r);
          return (0, O.jsx)(GP, {
            ref: o,
            "data-testid": n,
            ...i,
            children: e ? (0, O.jsx)(G.DX, {
              children: t
            }) : (0, O.jsx)(de, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        vR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          label: r,
          ...o
        }, i) => {
          const s = (0, H.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, O.jsx)(YP, {
            ref: i,
            "data-testid": n,
            ...s,
            children: e ? (0, O.jsx)(G.DX, {
              children: t
            }) : (0, O.jsx)(vj, {
              size: "SM",
              label: r
            })
          })
        });

      function yR(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function gR(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function bR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gR(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = yR(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gR(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function wR(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var _R = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        xR = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = bR(bR({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) _R(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wR(e.variantClassNames, e => wR(e, e => e.split(" ")[0]))
            }
          }, t
        },
        CR = xR({
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
        OR = xR({
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
        jR = xR({
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

      function SR() {
        const e = (0, B.useContext)(PR);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const PR = (0, B.createContext)(null),
        RR = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          size: r = "MD",
          ...o
        }, i) => {
          const s = (0, H.v6)({
              className: jR({
                size: r
              })
            }, o),
            a = n ? G.DX : "ol";
          return (0, O.jsx)(PR.Provider, {
            value: {
              size: r
            },
            children: (0, O.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        kR = (0, B.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: n,
          testId: r,
          ...o
        }, i) => {
          const s = (0, B.useRef)(null),
            {
              size: a
            } = SR(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: n,
                isDisabled: r,
                "aria-current": o,
                elementType: i = "a",
                ...s
              } = e, {
                linkProps: a
              } = cj({
                isDisabled: r || n,
                elementType: i,
                ...s
              }, t), l = {};
              return /^h[1-6]$/.test(i) || (l = a), n && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": r,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, s),
            c = n ? G.DX : "a",
            u = (0, H.v6)({
              className: (0, J.$)(CR({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": r
            }, l, o);
          return (0, O.jsx)("li", {
            className: OR({
              size: a
            }),
            ref: i,
            children: (0, O.jsx)(c, {
              ref: s,
              ...u,
              children: t
            })
          })
        }),
        ER = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = ee[e];
          return (0, O.jsx)(r, {
            ref: n,
            size: "LG",
            ...t
          })
        }),
        TR = (0, B.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: n = !1,
          label: r,
          ...o
        }, i) => {
          const [s, a] = (0, B.useState)(n), {
            size: l
          } = SR(), c = (0, H.v6)({
            className: OR({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, O.jsx)("li", {
            ref: i,
            ...c,
            children: (0, O.jsxs)(Lw, {
              open: s,
              onOpenChange: () => a(!s),
              children: [(0, O.jsx)(Vw, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": r,
                children: "..."
              }), (0, O.jsx)(qw, {
                children: (0, O.jsx)(Ww, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, O.jsx)($w, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        NR = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = t ? G.DX : Xw,
            s = (0, H.v6)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": n
            }, r);
          return (0, O.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        });

      function DR(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function IR(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function MR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? IR(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = DR(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : IR(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function AR(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var zR = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        LR = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = MR(MR({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) zR(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return AR(e.variantClassNames, e => AR(e, e => e.split(" ")[0]))
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
      const VR = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: n = "primary",
          ...r
        }, o) => {
          const i = e ? G.DX : "div",
            s = (0, H.v6)({
              className: LR({
                appearance: n
              })
            }, r);
          return (0, O.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        FR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? G.DX : "div",
            s = (0, H.v6)({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, r);
          return (0, O.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...s,
            children: t
          })
        }),
        BR = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = ee[e],
            o = (0, H.v6)({
              size: "SM",
              className: "foundry_18omk9t3",
              label: ""
            }, t);
          return (0, O.jsx)(r, {
            ref: n,
            ...o
          })
        }),
        qR = () => {
          const e = (0, K.Ub)(H.fi.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        WR = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function $R(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function XR(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function HR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? XR(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = $R(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : XR(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function UR(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ZR = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        KR = "foundry_8kowh41",
        GR = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = HR(HR({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ZR(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return UR(e.variantClassNames, e => UR(e, e => e.split(" ")[0]))
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
      const YR = (0, B.createContext)(null);

      function QR() {
        const e = (0, B.useContext)(YR);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const JR = ({
          testId: e,
          defaultOpen: t,
          onOpenChange: n,
          isOpen: r,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: i,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
          ...l
        }) => {
          const c = (0, H.v6)({
              "data-testid": e
            }, l),
            [u, d] = (0, K.ic)({
              prop: r,
              defaultProp: t ?? !1,
              onChange: n
            }),
            f = (0, K.ZC)(u);
          return (0, O.jsx)(YR.Provider, {
            value: {
              isOpen: u,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== f || !t),
              setIsOpen: d,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: i,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, B.useId)(),
              descriptionId: (0, B.useId)(),
              triggerRef: (0, B.useRef)(null),
              dialogSpringRef: fd(),
              overlaySpringRef: fd()
            },
            children: (0, O.jsx)(rg, {
              open: u,
              onOpenChange: d,
              ...c
            })
          })
        },
        ek = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            isOpen: r,
            overlaySpringRef: o,
            openImmediately: i
          } = QR(), s = WR(), a = (0, K.jt)(), l = pd(r, {
            ref: o,
            delay: r ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: Cu.stiff,
            immediate: a || i
          }), c = (0, H.v6)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), u = Dd(sg);
          return (0, B.useEffect)(() => {
            o.start()
          }, [r]), l((e, t) => t ? (0, O.jsx)(u, {
            forceMount: !0,
            ref: n,
            ...c,
            style: e
          }) : null)
        }),
        tk = (0, B.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: n,
          disableDrag: r = !1,
          ...o
        }, i) => {
          const {
            isOpen: s,
            setIsOpen: a,
            openImmediately: l,
            contentId: c,
            triggerRef: u,
            onOpenTransitionStart: d,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = QR(), y = (0, K.rl)(), g = (0, K.jt)(), b = (0, B.useRef)(null), w = qR(), {
            bindDrag: _
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: n,
            onCloseTransitionStart: r,
            onCloseTransitionComplete: o
          }) {
            const i = WR(),
              s = qR(),
              a = (0, B.useRef)();
            var l;
            return {
              bindDrag: (l = ({
                velocity: [, l],
                offset: [, c],
                direction: [, u],
                cancel: d,
                last: f,
                first: p,
                target: h
              }) => {
                const {
                  height: m
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
                  }(h, u)), (!a.current || c < -70) && d(), a.current) {
                  const e = 100 * (m - c) / m;
                  n.start({
                    ...i(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (c > .5 * m || l > .5 && u > 0 ? (t.start({
                  ...s(0),
                  immediate: !1,
                  config: Cu.stiff,
                  onStart: r,
                  onRest: o
                }), n.start({
                  ...i(0),
                  immediate: !1,
                  config: Cu.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: Cu.stiff
                }), n.start({
                  ...i(100),
                  immediate: !1,
                  config: Cu.stiff
                })))
              }, As(zs), Js({
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
              a(!1), p?.()
            },
            onCloseTransitionComplete: h
          }), x = pd(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: Cu.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, n) => {
              n ? d?.() : p?.()
            },
            onRest: (e, t, n) => {
              n ? f?.() : h?.()
            }
          });
          (0, B.useEffect)(() => {
            m.start()
          }, [s]);
          const C = (0, K.UP)(b, i),
            j = y && !g && !r && _(),
            S = (0, H.v6)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                n?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: c
            }, j || {}, o),
            P = Dd(ag);
          return x((t, n) => n ? (0, O.jsx)(P, {
            forceMount: !0,
            ref: C,
            ...S,
            style: t,
            children: e
          }) : null)
        }),
        nk = ({
          testId: e,
          ...t
        }) => {
          const n = (0, H.v6)({
            "data-testid": e
          }, t);
          return (0, O.jsx)(ig, {
            forceMount: !0,
            ...n
          })
        },
        rk = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, n);
          return (0, O.jsx)(lg, {
            ref: r,
            ...o,
            children: e
          })
        }),
        ok = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            "data-testid": t
          }, n);
          return (0, O.jsx)(cg, {
            ref: r,
            ...o,
            children: e
          })
        }),
        ik = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, n);
          return (0, O.jsxs)(Eb, {
            ref: r,
            ...o,
            children: [(0, O.jsx)(Tb, {
              className: "foundry_xov33ne",
              children: e
            }), (0, O.jsx)(Nb, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, O.jsx)(Db, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        sk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_xov33n2"
            }, r),
            s = e ? G.DX : "div";
          return (0, O.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        ak = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_xov33n3"
            }, r),
            s = e ? G.DX : "div";
          return (0, O.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        lk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_xov33n8"
            }, r),
            s = e ? G.DX : "header";
          return (0, O.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        ck = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_xov33nc"
            }, r),
            s = e ? G.DX : "footer";
          return (0, O.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        uk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          align: r,
          ...o
        }, i) => {
          const s = (0, H.v6)({
              "data-testid": n,
              className: GR({
                align: r
              })
            }, o),
            a = e ? G.DX : lg;
          return (0, O.jsx)(a, {
            ref: i,
            ...s,
            children: t
          })
        }),
        dk = (0, B.forwardRef)(({
          children: e,
          onPress: t,
          onClick: n,
          ...r
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = QR(), a = (0, H.v6)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? n?.(e), !i && s(!1)
            }
          }, r);
          return (0, O.jsx)(vj, {
            ...a,
            size: "MD",
            ref: o,
            children: e
          })
        }),
        fk = (0, B.forwardRef)((e, t) => {
          const n = (0, H.v6)({
            className: "foundry_xov33n5"
          }, e);
          return (0, O.jsx)(_e, {
            ref: t,
            ...n,
            appearance: "ghost",
            size: "SM"
          })
        }),
        pk = (0, B.forwardRef)(({
          children: e,
          onPress: t,
          onClick: n,
          ...r
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = QR(), a = (0, H.v6)({
            className: KR,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? n?.(e), !i && s(!1)
            }
          }, r);
          return (0, O.jsx)(de, {
            ref: o,
            ...a,
            children: e
          })
        }),
        hk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          onPress: n,
          onClick: r,
          ...o
        }, i) => {
          const {
            isControlled: s,
            setIsOpen: a,
            isOpen: l,
            contentId: c,
            triggerRef: u
          } = QR(), d = (0, K.UP)(u, i), f = (0, H.v6)({
            className: KR,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              n?.(e) ?? r?.(e), !s && a(!0)
            }
          }, o), p = e ? G.DX : og;
          return (0, O.jsx)(p, {
            ...f,
            ref: d,
            children: t
          })
        });

      function mk(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var vk = n(12579),
        yk = n(19888);

      function gk() {
        return () => {}
      }
      var bk = "Avatar",
        [wk, _k] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r);
            o.displayName = t + "Context";
            const i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, mk(r, ...t)]
        }(bk),
        [xk, Ck] = wk(bk),
        Ok = B.forwardRef((e, t) => {
          const {
            __scopeAvatar: n,
            ...r
          } = e, [o, i] = B.useState("idle");
          return (0, O.jsx)(xk, {
            scope: n,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: i,
            children: (0, O.jsx)(vk.sG.span, {
              ...r,
              ref: t
            })
          })
        });
      Ok.displayName = bk;
      var jk = "AvatarImage",
        Sk = B.forwardRef((e, t) => {
          const {
            __scopeAvatar: n,
            src: r,
            onLoadingStatusChange: o = () => {},
            ...i
          } = e, s = Ck(jk, n), a = function(e, {
            referrerPolicy: t,
            crossOrigin: n
          }) {
            const r = (0, yk.useSyncExternalStore)(gk, () => !0, () => !1),
              o = B.useRef(null),
              i = r ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, a] = B.useState(() => Rk(i, e));
            return Yd(() => {
              a(Rk(i, e))
            }, [i, e]), Yd(() => {
              const e = e => () => {
                a(e)
              };
              if (!i) return;
              const r = e("loaded"),
                o = e("error");
              return i.addEventListener("load", r), i.addEventListener("error", o), t && (i.referrerPolicy = t), "string" == typeof n && (i.crossOrigin = n), () => {
                i.removeEventListener("load", r), i.removeEventListener("error", o)
              }
            }, [i, n, t]), s
          }(r, i), l = Bd(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return Yd(() => {
            "idle" !== a && l(a)
          }, [a, l]), "loaded" === a ? (0, O.jsx)(vk.sG.img, {
            ...i,
            ref: t,
            src: r
          }) : null
        });
      Sk.displayName = jk;
      var Pk = "AvatarFallback";

      function Rk(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      B.forwardRef((e, t) => {
        const {
          __scopeAvatar: n,
          delayMs: r,
          ...o
        } = e, i = Ck(Pk, n), [s, a] = B.useState(void 0 === r);
        return B.useEffect(() => {
          if (void 0 !== r) {
            const e = window.setTimeout(() => a(!0), r);
            return () => window.clearTimeout(e)
          }
        }, [r]), s && "loaded" !== i.imageLoadingStatus ? (0, O.jsx)(vk.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Pk;
      var kk = Ok,
        Ek = Sk;

      function Tk(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Nk(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Dk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nk(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Tk(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nk(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Ik(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Mk = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Ak = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Dk(Dk({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Mk(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ik(e.variantClassNames, e => Ik(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zk = Ak({
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
        Lk = "var(--foundry_v912w22)",
        Vk = "var(--foundry_v912w23)",
        Fk = Ak({
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
        Bk = Ak({
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
        qk = "var(--foundry_v912w21)",
        Wk = "var(--foundry_v912w20)",
        $k = Ak({
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
      const Xk = (0, B.createContext)(null);

      function Hk() {
        const e = (0, B.useContext)(Xk);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Uk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          size: r,
          status: o,
          isDisabled: i = !1,
          ...s
        }, a) => {
          const l = (0, H.v6)({
            "data-testid": n,
            "aria-disabled": i,
            className: zk({
              isDisabled: i
            }),
            asChild: e
          }, s);
          return (0, O.jsx)(Xk.Provider, {
            value: {
              size: r,
              status: o,
              isDisabled: i
            },
            children: (0, O.jsx)(kk, {
              ref: a,
              ...l,
              children: t
            })
          })
        }),
        Zk = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          src: n,
          ...r
        }, o) => {
          const {
            size: i,
            isDisabled: s
          } = Hk(), [a, l] = (0, B.useState)(!1);
          (0, B.useEffect)(() => {
            l(!1)
          }, [n]);
          const c = a || !n ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : n,
            u = (0, H.v6)({
              className: Fk({
                isDisabled: s
              }),
              src: c,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, r);
          return (0, O.jsx)("span", {
            className: Bk({
              size: i,
              isDisabled: s,
              isFallback: a
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, O.jsx)(Ek, {
              ref: o,
              ...u
            })
          })
        }),
        Kk = (0, B.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...n
        }, r) => {
          const o = (0, B.useRef)(null),
            {
              size: i,
              status: s,
              isDisabled: a
            } = Hk(),
            l = (0, K.UP)(o, r),
            c = (0, H.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: $k({
                status: s,
                size: i,
                isDisabled: a
              }),
              style: (0, $.DI)({
                [Wk]: t?.online,
                [qk]: t?.offline,
                [Lk]: t?.away,
                [Vk]: t?.busy
              })
            }, n);
          return (0, O.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Gk(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Yk(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Qk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yk(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Gk(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yk(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Jk(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var eE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        tE = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Qk(Qk({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) eE(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jk(e.variantClassNames, e => Jk(e, e => e.split(" ")[0]))
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
      const nE = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_2jlbzt0"
            }, r),
            s = e ? G.DX : "nav";
          return (0, O.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        rE = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              role: "list",
              "data-testid": n,
              className: "foundry_2jlbzt1"
            }, r),
            s = e ? G.DX : "div";
          return (0, O.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        oE = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          isActive: n,
          testId: r,
          ...o
        }, i) => {
          const s = (0, B.useRef)(null),
            a = (0, K.UP)(s, i),
            {
              linkProps: l,
              isPressed: c
            } = cj(o, s),
            u = (0, H.v6)({
              role: "listitem",
              "data-testid": r,
              "data-pressed": c,
              "data-active": n,
              className: (0, J.$)(tE({
                isActive: n
              }))
            }, l),
            d = e ? G.DX : "a";
          return (0, O.jsx)(d, {
            ref: a,
            ...u,
            children: t
          })
        }),
        iE = (0, B.forwardRef)(({
          label: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, n);
          return (0, O.jsx)(oE, {
            ref: r,
            ...o,
            children: (0, O.jsx)(ee.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        sE = (0, B.forwardRef)(({
          label: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, n);
          return (0, O.jsx)(oE, {
            ref: r,
            ...o,
            children: (0, O.jsx)(ee.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        aE = ({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }) => {
          const o = (0, H.v6)({
              role: "listitem",
              "data-testid": n,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, r),
            i = e ? G.DX : "span";
          return (0, O.jsx)(i, {
            ...o,
            children: t || "..."
          })
        },
        lE = ({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }) => {
          const o = (0, H.v6)({
              "data-testid": n,
              className: "foundry_2jlbzt8"
            }, r),
            i = e ? G.DX : "div";
          return (0, O.jsx)(i, {
            ...o,
            children: t
          })
        },
        cE = (0, B.createContext)(null);

      function uE() {
        const e = (0, B.useContext)(cE);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const dE = ({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }) => {
          const o = (0, B.useId)(),
            i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_2jlbztb"
            }, r),
            s = e ? G.DX : "div";
          return (0, O.jsx)(cE.Provider, {
            value: {
              labelId: o
            },
            children: (0, O.jsx)(s, {
              ...i,
              children: t
            })
          })
        },
        fE = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            labelId: i
          } = uE(), s = (0, H.v6)({
            "data-testid": n,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, r), a = e ? G.DX : "label";
          return (0, O.jsx)(a, {
            ref: o,
            id: i,
            ...s,
            children: t
          })
        }),
        pE = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: n,
          ...r
        }, o) => {
          const {
            labelId: i
          } = uE(), s = (0, H.v6)({
            "aria-labelledby": i,
            className: "foundry_2jlbztc"
          }, r), a = e ? G.DX : a_;
          return (0, O.jsxs)(a, {
            ...s,
            children: [(0, O.jsxs)(u_, {
              ref: o,
              children: [(0, O.jsx)(d_, {
                placeholder: n
              }), (0, O.jsx)(f_, {})]
            }), (0, O.jsx)(b_, {
              children: (0, O.jsx)(l_, {
                children: (0, O.jsx)(c_, {
                  children: t
                })
              })
            })]
          })
        }),
        hE = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n
            }, r),
            s = e ? G.DX : v_;
          return (0, O.jsx)(s, {
            ...i,
            ref: o,
            children: (0, O.jsx)(y_, {
              children: t
            })
          })
        }),
        mE = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, r),
            s = e ? G.DX : "p";
          return (0, O.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        });

      function vE(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function yE(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var gE = Symbol("radix.slottable");

      function bE(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === gE
      }
      var wE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const n = function(e) {
            const t = yE(e),
              n = B.forwardRef((e, n) => {
                const {
                  children: r,
                  ...o
                } = e, i = B.Children.toArray(r), s = i.find(bE);
                if (s) {
                  const e = s.props.children,
                    r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                  })
                }
                return (0, O.jsx)(t, {
                  ...o,
                  ref: n,
                  children: r
                })
              });
            return n.displayName = `${e}.Slot`, n
          }(`Primitive.${t}`),
          r = B.forwardRef((e, r) => {
            const {
              asChild: o,
              ...i
            } = e, s = o ? n : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
              ...i,
              ref: r
            })
          });
        return r.displayName = `Primitive.${t}`, {
          ...e,
          [t]: r
        }
      }, {});

      function _E(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function xE(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var CE = Symbol("radix.slottable");

      function OE(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === CE
      }
      var jE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = xE(e),
                n = B.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = B.Children.toArray(r), s = i.find(OE);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                    return (0, O.jsx)(t, {
                      ...o,
                      ref: n,
                      children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        SE = "rovingFocusGroup.onEntryFocus",
        PE = {
          bubbles: !1,
          cancelable: !0
        },
        RE = "RovingFocusGroup",
        [kE, EE, TE] = Dm(RE),
        [NE, DE] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, _E(r, ...t)]
        }(RE, [TE]),
        [IE, ME] = NE(RE),
        AE = B.forwardRef((e, t) => (0, O.jsx)(kE.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, O.jsx)(kE.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, O.jsx)(zE, {
              ...e,
              ref: t
            })
          })
        }));
      AE.displayName = RE;
      var zE = B.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: n,
            orientation: r,
            loop: o = !1,
            dir: i,
            currentTabStopId: s,
            defaultCurrentTabStopId: a,
            onCurrentTabStopIdChange: l,
            onEntryFocus: c,
            preventScrollOnEntryFocus: u = !1,
            ...d
          } = e, f = B.useRef(null), p = (0, Md.s)(t, f), h = xm(i), [m, v] = Oh({
            prop: s,
            defaultProp: a ?? null,
            onChange: l,
            caller: RE
          }), [y, g] = B.useState(!1), b = Bd(c), w = EE(n), _ = B.useRef(!1), [x, C] = B.useState(0);
          return B.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(SE, b), () => e.removeEventListener(SE, b)
          }, [b]), (0, O.jsx)(IE, {
            scope: n,
            orientation: r,
            dir: h,
            loop: o,
            currentTabStopId: m,
            onItemFocus: B.useCallback(e => v(e), [v]),
            onItemShiftTab: B.useCallback(() => g(!0), []),
            onFocusableItemAdd: B.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: B.useCallback(() => C(e => e - 1), []),
            children: (0, O.jsx)(jE.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": r,
              ...d,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: Id(e.onMouseDown, () => {
                _.current = !0
              }),
              onFocus: Id(e.onFocus, e => {
                const t = !_.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(SE, PE);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      n = e.find(e => e.id === m),
                      r = [t, n, ...e].filter(Boolean).map(e => e.ref.current);
                    BE(r, u)
                  }
                }
                _.current = !1
              }),
              onBlur: Id(e.onBlur, () => g(!1))
            })
          })
        }),
        LE = "RovingFocusGroupItem",
        VE = B.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: n,
            focusable: r = !0,
            active: o = !1,
            tabStopId: i,
            children: s,
            ...a
          } = e, l = ef(), c = i || l, u = ME(LE, n), d = u.currentTabStopId === c, f = EE(n), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: m
          } = u;
          return B.useEffect(() => {
            if (r) return p(), () => h()
          }, [r, p, h]), (0, O.jsx)(kE.ItemSlot, {
            scope: n,
            id: c,
            focusable: r,
            active: o,
            children: (0, O.jsx)(jE.span, {
              tabIndex: d ? 0 : -1,
              "data-orientation": u.orientation,
              ...a,
              ref: t,
              onMouseDown: Id(e.onMouseDown, e => {
                r ? u.onItemFocus(c) : e.preventDefault()
              }),
              onFocus: Id(e.onFocus, () => u.onItemFocus(c)),
              onKeyDown: Id(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void u.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, n) {
                  const r = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, n);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r) ? void 0 : FE[r]
                }(e, u.orientation, u.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let i = o.map(e => e.ref.current);
                  if ("last" === t) i.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && i.reverse();
                    const o = i.indexOf(e.currentTarget);
                    i = u.loop ? (r = o + 1, (n = i).map((e, t) => n[(r + t) % n.length])) : i.slice(o + 1)
                  }
                  setTimeout(() => BE(i))
                }
                var n, r
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: d,
                hasTabStop: null != m
              }) : s
            })
          })
        });
      VE.displayName = LE;
      var FE = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function BE(e, t = !1) {
        const n = document.activeElement;
        for (const r of e) {
          if (r === n) return;
          if (r.focus({
              preventScroll: t
            }), document.activeElement !== n) return
        }
      }
      var qE = AE,
        WE = VE;

      function $E(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var XE = Symbol("radix.slottable");

      function HE(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === XE
      }
      var UE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = $E(e),
                n = B.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = B.Children.toArray(r), s = i.find(HE);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                    return (0, O.jsx)(t, {
                      ...o,
                      ref: n,
                      children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, O.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        ZE = "Toggle",
        KE = B.forwardRef((e, t) => {
          const {
            pressed: n,
            defaultPressed: r,
            onPressedChange: o,
            ...i
          } = e, [s, a] = Oh({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: ZE
          });
          return (0, O.jsx)(UE.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...i,
            ref: t,
            onClick: Id(e.onClick, () => {
              e.disabled || a(!s)
            })
          })
        });
      KE.displayName = ZE;
      var GE = "ToggleGroup",
        [YE, QE] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, vE(r, ...t)]
        }(GE, [DE]),
        JE = DE(),
        eT = B.forwardRef((e, t) => {
          const {
            type: n,
            ...r
          } = e;
          if ("single" === n) {
            const e = r;
            return (0, O.jsx)(rT, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === n) {
            const e = r;
            return (0, O.jsx)(oT, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${GE}\``)
        });
      eT.displayName = GE;
      var [tT, nT] = YE(GE), rT = B.forwardRef((e, t) => {
        const {
          value: n,
          defaultValue: r,
          onValueChange: o = () => {},
          ...i
        } = e, [s, a] = Oh({
          prop: n,
          defaultProp: r ?? "",
          onChange: o,
          caller: GE
        });
        return (0, O.jsx)(tT, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: B.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: a,
          onItemDeactivate: B.useCallback(() => a(""), [a]),
          children: (0, O.jsx)(aT, {
            ...i,
            ref: t
          })
        })
      }), oT = B.forwardRef((e, t) => {
        const {
          value: n,
          defaultValue: r,
          onValueChange: o = () => {},
          ...i
        } = e, [s, a] = Oh({
          prop: n,
          defaultProp: r ?? [],
          onChange: o,
          caller: GE
        }), l = B.useCallback(e => a((t = []) => [...t, e]), [a]), c = B.useCallback(e => a((t = []) => t.filter(t => t !== e)), [a]);
        return (0, O.jsx)(tT, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: l,
          onItemDeactivate: c,
          children: (0, O.jsx)(aT, {
            ...i,
            ref: t
          })
        })
      });
      eT.displayName = GE;
      var [iT, sT] = YE(GE), aT = B.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: n,
          disabled: r = !1,
          rovingFocus: o = !0,
          orientation: i,
          dir: s,
          loop: a = !0,
          ...l
        } = e, c = JE(n), u = xm(s), d = {
          role: "group",
          dir: u,
          ...l
        };
        return (0, O.jsx)(iT, {
          scope: n,
          rovingFocus: o,
          disabled: r,
          children: o ? (0, O.jsx)(qE, {
            asChild: !0,
            ...c,
            orientation: i,
            dir: u,
            loop: a,
            children: (0, O.jsx)(wE.div, {
              ...d,
              ref: t
            })
          }) : (0, O.jsx)(wE.div, {
            ...d,
            ref: t
          })
        })
      }), lT = "ToggleGroupItem", cT = B.forwardRef((e, t) => {
        const n = nT(lT, e.__scopeToggleGroup),
          r = sT(lT, e.__scopeToggleGroup),
          o = JE(e.__scopeToggleGroup),
          i = n.value.includes(e.value),
          s = r.disabled || e.disabled,
          a = {
            ...e,
            pressed: i,
            disabled: s
          },
          l = B.useRef(null);
        return r.rovingFocus ? (0, O.jsx)(WE, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: i,
          ref: l,
          children: (0, O.jsx)(uT, {
            ...a,
            ref: t
          })
        }) : (0, O.jsx)(uT, {
          ...a,
          ref: t
        })
      });
      cT.displayName = lT;
      var uT = B.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: n,
            value: r,
            ...o
          } = e, i = nT(lT, n), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, a = "single" === i.type ? s : void 0;
          return (0, O.jsx)(KE, {
            ...a,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? i.onItemActivate(r) : i.onItemDeactivate(r)
            }
          })
        }),
        dT = eT,
        fT = cT;

      function pT(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function hT(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function mT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hT(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = pT(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hT(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function vT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var yT = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        gT = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = mT(mT({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yT(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vT(e.variantClassNames, e => vT(e, e => e.split(" ")[0]))
            }
          }, t
        },
        bT = "var(--foundry_zxwkyk2)",
        wT = "var(--foundry_zxwkyk3)",
        _T = gT({
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
        xT = gT({
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
        CT = gT({
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
        OT = "var(--foundry_zxwkyk1)",
        jT = "var(--foundry_zxwkyk0)",
        ST = gT({
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
      const PT = (0, B.createContext)(null);

      function RT() {
        const e = (0, B.useContext)(PT);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const kT = (0, B.forwardRef)(({
          testId: e,
          size: t,
          type: n = "single",
          ...r
        }, o) => {
          const i = (0, H.v6)({
            "data-testid": e,
            className: _T({
              size: t
            }),
            type: n
          }, r);
          return (0, O.jsx)(PT.Provider, {
            value: {
              size: t
            },
            children: (0, O.jsx)(dT, {
              ref: o,
              ...i
            })
          })
        }),
        ET = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            size: r
          } = RT(), o = (0, H.v6)({
            "data-testid": e,
            className: xT({
              size: r
            })
          }, t);
          return (0, O.jsx)(fT, {
            ref: n,
            ...o
          })
        }),
        TT = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const {
            size: r
          } = RT(), o = ee[e];
          return (0, O.jsx)(o, {
            label: "",
            ref: n,
            size: r,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        NT = (0, B.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
            "data-testid": e,
            className: ST({
              status: n
            }),
            style: (0, $.DI)({
              [jT]: t?.online,
              [OT]: t?.offline,
              [bT]: t?.away,
              [wT]: t?.busy
            })
          }, r);
          return (0, O.jsx)("span", {
            ref: o,
            ...i
          })
        }),
        DT = (0, B.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...n
        }, r) => {
          const {
            size: o
          } = RT(), i = (0, H.v6)({
            "data-testid": e,
            className: CT({
              variant: t,
              size: o
            })
          }, n);
          return (0, O.jsx)("span", {
            ref: r,
            ...i
          })
        });

      function IT(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function MT(e) {
        const t = AT(e),
          n = B.forwardRef((e, n) => {
            const {
              children: r,
              ...o
            } = e, i = B.Children.toArray(r), s = i.find(LT);
            if (s) {
              const e = s.props.children,
                r = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, O.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, O.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function AT(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Md.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var zT = Symbol("radix.slottable");

      function LT(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === zT
      }
      var VT = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = MT(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        FT = "Popover",
        [BT, qT] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, O.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, IT(r, ...t)]
        }(FT, [Hp]),
        WT = Hp(),
        [$T, XT] = BT(FT),
        HT = e => {
          const {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !1
          } = e, a = WT(t), l = B.useRef(null), [c, u] = B.useState(!1), [d, f] = Oh({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: FT
          });
          return (0, O.jsx)(lh, {
            ...a,
            children: (0, O.jsx)($T, {
              scope: t,
              contentId: ef(),
              triggerRef: l,
              open: d,
              onOpenChange: f,
              onOpenToggle: B.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: c,
              onCustomAnchorAdd: B.useCallback(() => u(!0), []),
              onCustomAnchorRemove: B.useCallback(() => u(!1), []),
              modal: s,
              children: n
            })
          })
        };
      HT.displayName = FT;
      var UT = "PopoverAnchor",
        ZT = B.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, o = XT(UT, n), i = WT(n), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: a
          } = o;
          return B.useEffect(() => (s(), () => a()), [s, a]), (0, O.jsx)(ch, {
            ...i,
            ...r,
            ref: t
          })
        });
      ZT.displayName = UT;
      var KT = "PopoverTrigger",
        GT = B.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, o = XT(KT, n), i = WT(n), s = (0, Md.s)(t, o.triggerRef), a = (0, O.jsx)(VT.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": uN(o.open),
            ...r,
            ref: s,
            onClick: Id(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? a : (0, O.jsx)(ch, {
            asChild: !0,
            ...i,
            children: a
          })
        });
      GT.displayName = KT;
      var YT = "PopoverPortal",
        [QT, JT] = BT(YT, {
          forceMount: void 0
        }),
        eN = e => {
          const {
            __scopePopover: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = XT(YT, t);
          return (0, O.jsx)(QT, {
            scope: t,
            forceMount: n,
            children: (0, O.jsx)(yh, {
              present: n || i.open,
              children: (0, O.jsx)(vh, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      eN.displayName = YT;
      var tN = "PopoverContent",
        nN = B.forwardRef((e, t) => {
          const n = JT(tN, e.__scopePopover),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = XT(tN, e.__scopePopover);
          return (0, O.jsx)(yh, {
            present: r || i.open,
            children: i.modal ? (0, O.jsx)(oN, {
              ...o,
              ref: t
            }) : (0, O.jsx)(iN, {
              ...o,
              ref: t
            })
          })
        });
      nN.displayName = tN;
      var rN = MT("PopoverContent.RemoveScroll"),
        oN = B.forwardRef((e, t) => {
          const n = XT(tN, e.__scopePopover),
            r = B.useRef(null),
            o = (0, Md.s)(t, r),
            i = B.useRef(!1);
          return B.useEffect(() => {
            const e = r.current;
            if (e) return Cy(e)
          }, []), (0, O.jsx)(yy, {
            as: rN,
            allowPinchZoom: !0,
            children: (0, O.jsx)(sN, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: Id(e.onCloseAutoFocus, e => {
                e.preventDefault(), i.current || n.triggerRef.current?.focus()
              }),
              onPointerDownOutside: Id(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  r = 2 === t.button || n;
                i.current = r
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: Id(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        iN = B.forwardRef((e, t) => {
          const n = XT(tN, e.__scopePopover),
            r = B.useRef(!1),
            o = B.useRef(!1);
          return (0, O.jsx)(sN, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                s = n.triggerRef.current?.contains(i);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        sN = B.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onInteractOutside: u,
            ...d
          } = e, f = XT(tN, n), p = WT(n);
          return Nv(), (0, O.jsx)(bv, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: (0, O.jsx)(Xd, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: u,
              onEscapeKeyDown: a,
              onPointerDownOutside: l,
              onFocusOutside: c,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, O.jsx)(uh, {
                "data-state": uN(f.open),
                role: "dialog",
                id: f.contentId,
                ...p,
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
        aN = "PopoverClose",
        lN = B.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, o = XT(aN, n);
          return (0, O.jsx)(VT.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Id(e.onClick, () => o.onOpenChange(!1))
          })
        });
      lN.displayName = aN;
      var cN = B.forwardRef((e, t) => {
        const {
          __scopePopover: n,
          ...r
        } = e, o = WT(n);
        return (0, O.jsx)(dh, {
          ...o,
          ...r,
          ref: t
        })
      });

      function uN(e) {
        return e ? "open" : "closed"
      }
      cN.displayName = "PopoverArrow";
      var dN = HT,
        fN = ZT,
        pN = GT,
        hN = eN,
        mN = nN,
        vN = lN,
        yN = cN;
      const gN = (0, B.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        bN = ({
          open: e,
          defaultOpen: t,
          onOpenChange: n,
          ...r
        }) => {
          const [o = !1, i] = (0, K.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: n
          }), s = (0, H.v6)({
            open: o,
            onOpenChange: i
          }, r);
          return (0, O.jsx)(gN.Provider, {
            value: {
              open: o,
              setOpen: i
            },
            children: (0, O.jsx)(dN, {
              ...s
            })
          })
        },
        wN = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = (0, H.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, O.jsx)(pN, {
            ref: n,
            ...r
          })
        }),
        _N = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = (0, H.v6)({
            "data-testid": e
          }, t);
          return (0, O.jsx)(fN, {
            ref: n,
            ...r
          })
        }),
        xN = (0, B.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l1"
          }, n);
          return (0, O.jsx)(mN, {
            ref: r,
            ...o
          })
        }),
        CN = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = (0, H.v6)({
            "data-testid": e,
            className: "foundry_lroh6l2"
          }, t);
          return (0, O.jsx)(yN, {
            ref: n,
            ...r
          })
        }),
        ON = e => (0, O.jsx)(hN, {
          ...e
        }),
        jN = e => (0, O.jsx)(vN, {
          ...e
        })
    }
  }
]);