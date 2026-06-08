try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "36ede602-2359-4cbb-b406-7d3ee4c892f9", e._sentryDebugIdIdentifier = "sentry-dbid-36ede602-2359-4cbb-b406-7d3ee4c892f9")
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
  [6220], {
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

      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !o(e, n)
        } catch (e) {
          return !0
        }
      }
      var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
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
          c = r[1];
        return a(function() {
          o.value = n, o.getSnapshot = t, u(o) && c({
            inst: o
          })
        }, [e, n, t]), s(function() {
          return u(o) && c({
            inst: o
          }), e(function() {
            u(o) && c({
              inst: o
            })
          })
        }, [e]), l(n), n
      };
      t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c
    },
    76220: (e, t, n) => {
      n.r(t), n.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => _,
        Badge: () => g,
        Body: () => ze,
        Breadcrumbs: () => y,
        Button: () => fe,
        Checkbox: () => l,
        ChipGroup: () => x,
        Code: () => Fe,
        Dialog: () => b,
        Display: () => Be,
        Divider: () => ke,
        Dropdown: () => i,
        Heading: () => We,
        IconButton: () => xe,
        Label: () => Ke,
        Lightbox: () => o,
        Loader: () => Re.a,
        Pagination: () => w,
        Popover: () => C,
        ProgressBar: () => O,
        RadioGroup: () => d,
        ScrollArea: () => eR,
        Spinner: () => J.y,
        Switch: () => s,
        Tag: () => m,
        Text: () => Ze,
        TextArea: () => u,
        TextField: () => f,
        TextSemantics: () => He,
        Toast: () => v,
        Tooltip: () => r
      });
      var r = {};
      n.r(r), n.d(r, {
        Arrow: () => bm,
        Content: () => gm,
        Portal: () => _m,
        Root: () => vm,
        Trigger: () => ym,
        useTooltipContext: () => mm
      });
      var o = {};
      n.r(o), n.d(o, {
        Caption: () => Pg,
        Close: () => Tg,
        Content: () => wg,
        Controls: () => Sg,
        CssVars: () => Ig,
        Download: () => Ng,
        Image: () => jg,
        Keyboard: () => kg,
        LightboxContext: () => fg,
        OpenIcon: () => gg,
        Overlay: () => _g,
        Portal: () => bg,
        Reset: () => Dg,
        Root: () => pg,
        RootImplContext: () => hg,
        Thumbnail: () => yg,
        Trigger: () => vg,
        Zoom: () => Rg,
        ZoomPan: () => xg
      });
      var i = {};
      n.r(i), n.d(i, {
        Content: () => Uw,
        Description: () => nx,
        Hint: () => rx,
        Label: () => tx,
        Option: () => ox,
        OptionIcon: () => sx,
        OptionText: () => ix,
        Portal: () => ax,
        Root: () => Zw,
        ScrollArea: () => Yw,
        StatusIcon: () => ux,
        StatusRoot: () => lx,
        StatusText: () => cx,
        Trigger: () => Qw,
        TriggerIcon: () => ex,
        TriggerText: () => Jw,
        Viewport: () => Gw,
        useDropdownContext: () => Hw
      });
      var s = {};
      n.r(s), n.d(s, {
        Description: () => hC,
        Input: () => fC,
        Label: () => pC,
        Root: () => dC,
        useSwitchContext: () => cC
      });
      var a = {};
      n.r(a), n.d(a, {
        CheckLG: () => vC,
        CheckMD: () => mC,
        CheckXL: () => yC,
        DashLG: () => bC,
        DashMD: () => gC,
        DashXL: () => _C
      });
      var l = {};
      n.r(l), n.d(l, {
        Description: () => zC,
        ErrorText: () => VC,
        Group: () => qC,
        GroupDescription: () => $C,
        GroupErrorText: () => XC,
        GroupItems: () => KC,
        GroupLabel: () => WC,
        Input: () => LC,
        Label: () => AC,
        Root: () => MC,
        useGroupContext: () => BC
      });
      var u = {};
      n.r(u), n.d(u, {
        Description: () => lO,
        Hint: () => uO,
        Input: () => aO,
        Label: () => sO,
        Root: () => iO,
        RootContext: () => rO,
        StatusIcon: () => dO,
        StatusRoot: () => cO,
        StatusText: () => fO,
        useTextAreaContext: () => oO
      });
      var c = {};
      n.r(c), n.d(c, {
        DotLG: () => rj,
        DotMD: () => nj,
        DotXL: () => oj
      });
      var d = {};
      n.r(d), n.d(d, {
        Description: () => ZO,
        Input: () => sj,
        Label: () => HO,
        Option: () => ij,
        OptionDescription: () => lj,
        OptionLabel: () => aj,
        Options: () => XO,
        Root: () => KO,
        StatusIcon: () => GO,
        StatusRoot: () => UO,
        StatusText: () => YO,
        useRadioGroupContext: () => $O
      });
      var f = {};
      n.r(f), n.d(f, {
        Button: () => cP,
        Control: () => aP,
        Description: () => fP,
        Hint: () => sP,
        Icon: () => uP,
        Input: () => lP,
        Label: () => iP,
        PasswordButton: () => dP,
        Root: () => oP,
        StatusIcon: () => hP,
        StatusRoot: () => pP,
        StatusText: () => mP
      });
      var p = {};
      n.r(p), n.d(p, {
        Body: () => zP,
        CloseButton: () => XP,
        Description: () => qP,
        ErrorText: () => KP,
        Footer: () => $P,
        Header: () => AP,
        Icon: () => FP,
        Link: () => WP,
        Root: () => LP,
        RootContext: () => IP,
        Title: () => BP,
        iconStatusMap: () => VP,
        useAlertContext: () => MP
      });
      var h = {};
      n.r(h), n.d(h, {
        Alert: () => HS,
        CloseButton: () => GS,
        Description: () => XS,
        Icon: () => KS,
        Link: () => US,
        PaginationCounter: () => eE,
        PaginationNav: () => YS,
        PaginationNextButton: () => QS,
        PaginationPrevButton: () => JS,
        PaginationViewport: () => ZS,
        Root: () => WS,
        RootContext: () => BS,
        iconStatusMap: () => $S,
        useAlertBannerContext: () => qS
      });
      var m = {};
      n.r(m), n.d(m, {
        CloseButton: () => mE,
        Icon: () => hE,
        Label: () => pE,
        Root: () => fE,
        RootContext: () => cE,
        useTagContext: () => dE
      });
      var v = {};
      n.r(v), n.d(v, {
        Action: () => Ck,
        CloseButton: () => Ok,
        Description: () => _k,
        Icon: () => xk,
        Provider: () => mk,
        Root: () => bk,
        RootContext: () => yk,
        Viewport: () => vk,
        iconAppearanceMap: () => wk,
        useToastContext: () => gk
      });
      var y = {};
      n.r(y), n.d(y, {
        Icon: () => zk,
        Item: () => Ak,
        OverflowMenu: () => Vk,
        OverflowMenuItem: () => Fk,
        Root: () => Lk,
        RootContext: () => Mk,
        useBreadcrumbsContext: () => Ik
      });
      var g = {};
      n.r(g), n.d(g, {
        Icon: () => Yk,
        Label: () => Gk,
        Root: () => Uk,
        useBadgeContext: () => Zk
      });
      var b = {};
      n.r(b), n.d(b, {
        ActionArea: () => OR,
        CloseButton: () => CR,
        Content: () => mR,
        Description: () => yR,
        Footer: () => jR,
        Header: () => _R,
        HeaderButton: () => xR,
        HeaderTitle: () => wR,
        Layout: () => bR,
        Overlay: () => hR,
        Portal: () => pR,
        Root: () => cR,
        ScrollArea: () => gR,
        Title: () => vR,
        Trigger: () => fR
      });
      var _ = {};
      n.r(_), n.d(_, {
        Image: () => sT,
        Root: () => iT,
        StatusIndicator: () => aT,
        useAvatarContext: () => oT
      });
      var w = {};
      n.r(w), n.d(w, {
        Controls: () => _T,
        Dropdown: () => jT,
        DropdownLabel: () => OT,
        Ellipsis: () => bT,
        Item: () => vT,
        Label: () => ST,
        Next: () => gT,
        Option: () => PT,
        Pages: () => mT,
        Prev: () => yT,
        ResultsPerPage: () => CT,
        Root: () => hT
      });
      var x = {};
      n.r(x), n.d(x, {
        Icon: () => WD,
        Item: () => qD,
        Label: () => KD,
        Root: () => BD,
        StatusIndicator: () => $D,
        useChipGroupContext: () => FD
      });
      var C = {};
      n.r(C), n.d(C, {
        Anchor: () => BN,
        Arrow: () => WN,
        Close: () => KN,
        Content: () => qN,
        Portal: () => $N,
        Root: () => AN,
        RootContext: () => LN,
        Trigger: () => zN,
        TriggerButton: () => FN
      });
      var O = {};
      n.r(O), n.d(O, {
        Indicator: () => OI,
        Label: () => jI,
        Root: () => wI,
        Track: () => CI,
        UnitLabel: () => PI
      });
      var j = n(74848);

      function P(e, t, n) {
        return Math.min(Math.max(e, n), t)
      }
      class S extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var E = S;

      function k(e) {
        if ("string" != typeof e) throw new E(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = A.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            n = T[function(e) {
              let t = 5381,
                n = e.length;
              for (; n;) t = 33 * t ^ e.charCodeAt(--n);
              return (t >>> 0) % 2341
            }(t)];
          if (!n) throw new E(e);
          return `#${n}`
        }(e) : e;
        const n = N.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(D(e, 2), 16)), parseInt(D(e[3] || "f", 2), 16) / 255]
        }
        const r = I.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = M.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const i = L.exec(t);
        if (i) {
          const [t, n, r, o] = Array.from(i).slice(1).map(parseFloat);
          if (P(0, 100, n) !== n) throw new E(e);
          if (P(0, 100, r) !== r) throw new E(e);
          return [...V(t, n, r), Number.isNaN(o) ? 1 : o]
        }
        throw new E(e)
      }
      const R = e => parseInt(e.replace(/_/g, ""), 36),
        T = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const n = R(t.substring(0, 3)),
            r = R(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - r.length; e++) o += "0";
          return e[n] = `${o}${r}`, e
        }, {}),
        D = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        N = new RegExp(`^#${D("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        I = new RegExp(`^#${D("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        M = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${D(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        L = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        A = /^[a-z]+$/i,
        z = e => Math.round(255 * e),
        V = (e, t, n) => {
          let r = n / 100;
          if (0 === t) return [r, r, r].map(z);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * r - 1)) * (t / 100),
            s = i * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            l = 0,
            u = 0;
          o >= 0 && o < 1 ? (a = i, l = s) : o >= 1 && o < 2 ? (a = s, l = i) : o >= 2 && o < 3 ? (l = i, u = s) : o >= 3 && o < 4 ? (l = s, u = i) : o >= 4 && o < 5 ? (a = s, u = i) : o >= 5 && o < 6 && (a = i, u = s);
          const c = r - i / 2;
          return [a + c, l + c, u + c].map(z)
        };

      function F(e, t) {
        const [n, r, o, i] = function(e) {
          const [t, n, r, o] = k(e).map((e, t) => 3 === t ? e : e / 255), i = Math.max(t, n, r), s = Math.min(t, n, r), a = (i + s) / 2;
          if (i === s) return [0, 0, a, o];
          const l = i - s;
          return [60 * (t === i ? (n - r) / l + (n < r ? 6 : 0) : n === i ? (r - t) / l + 2 : (t - n) / l + 4), a > .5 ? l / (2 - i - s) : l / (i + s), a, o]
        }(e);
        return function(e, t, n, r) {
          return `hsla(${(e%360).toFixed()}, ${P(0,100,100*t).toFixed()}%, ${P(0,100,100*n).toFixed()}%, ${parseFloat(P(0,1,r).toFixed(3))})`
        }(n, r, o - t, i)
      }

      function B(e, t) {
        return F(e, -t)
      }
      var q = n(44914),
        W = n.t(q, 2),
        $ = n.n(q),
        K = n(41382),
        X = n(48254),
        H = n(92396);
      const Z = {
          enabled: {
            background: (0, K.Tm)(X.no.enabled.background),
            border: (0, K.Tm)(X.no.enabled.border),
            text: (0, K.Tm)(X.no.enabled.text),
            outline: (0, K.Tm)(X.no.enabled.outline)
          },
          hover: {
            background: (0, K.Tm)(X.no.hover.background),
            border: (0, K.Tm)(X.no.hover.border),
            text: (0, K.Tm)(X.no.hover.text),
            outline: (0, K.Tm)(X.no.hover.outline)
          },
          focus: {
            background: (0, K.Tm)(X.no.focus.background),
            border: (0, K.Tm)(X.no.focus.border),
            text: (0, K.Tm)(X.no.focus.text),
            outline: (0, K.Tm)(X.no.focus.outline)
          },
          pressed: {
            background: (0, K.Tm)(X.no.pressed.background),
            border: (0, K.Tm)(X.no.pressed.border),
            text: (0, K.Tm)(X.no.pressed.text),
            outline: (0, K.Tm)(X.no.pressed.outline)
          },
          disabled: {
            background: (0, K.Tm)(X.no.disabled.background),
            border: (0, K.Tm)(X.no.disabled.border),
            text: (0, K.Tm)(X.no.disabled.text),
            outline: (0, K.Tm)(X.no.disabled.outline)
          },
          loading: {
            background: (0, K.Tm)(X.no.loading.background),
            border: (0, K.Tm)(X.no.loading.border),
            text: (0, K.Tm)(X.no.loading.text),
            outline: (0, K.Tm)(X.no.loading.outline)
          }
        },
        U = ({
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
          enabled: u = !1
        }, c = []) => {
          (0, q.useEffect)(() => {
            if (!e.current || !i || !u) return;
            const c = `${i}:${t}:${n}`,
              {
                text: d,
                hover: f,
                pressed: p
              } = (0, H.IO)(c, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [n, r, o] = k(e);
                  return .2126 * t(n) + .7152 * t(r) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? K.LU.global.color.black.static[100] : K.LU.global.color.white.static[100]),
                  hover: s || (e >= n ? F(i, r) : B(i, r)),
                  pressed: a || (e >= n ? F(i, o) : B(i, o))
                }
              });
            return e.current.style.setProperty(Z.enabled.background, i), e.current.style.setProperty(Z.enabled.border, i), e.current.style.setProperty(Z.enabled.text, d), e.current.style.setProperty(Z.hover.background, f), e.current.style.setProperty(Z.hover.border, f), e.current.style.setProperty(Z.hover.text, d), e.current.style.setProperty(Z.focus.background, f), e.current.style.setProperty(Z.focus.border, f), e.current.style.setProperty(Z.focus.text, d), e.current.style.setProperty(Z.pressed.background, p), e.current.style.setProperty(Z.pressed.border, p), e.current.style.setProperty(Z.pressed.text, d), e.current.style.setProperty(Z.loading.background, f), e.current.style.setProperty(Z.loading.border, f), e.current.style.setProperty(Z.loading.text, d), () => {
              e.current?.style.removeProperty(Z.enabled.background), e.current?.style.removeProperty(Z.enabled.border), e.current?.style.removeProperty(Z.enabled.text), e.current?.style.removeProperty(Z.hover.background), e.current?.style.removeProperty(Z.hover.border), e.current?.style.removeProperty(Z.hover.text), e.current?.style.removeProperty(Z.focus.background), e.current?.style.removeProperty(Z.focus.border), e.current?.style.removeProperty(Z.focus.text), e.current?.style.removeProperty(Z.pressed.background), e.current?.style.removeProperty(Z.pressed.border), e.current?.style.removeProperty(Z.pressed.text), e.current?.style.removeProperty(Z.loading.background), e.current?.style.removeProperty(Z.loading.border), e.current?.style.removeProperty(Z.loading.text)
            }
          }, [e.current, t, n, r, o, i, s, a, l, u, ...c])
        };
      var G = n(18072),
        Y = n(92791),
        Q = n(79385),
        J = n(1665),
        ee = n(34164),
        te = n(50484);

      function ne(e) {
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

      function re(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? re(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = ne(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function ie(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var se = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ae = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = oe(oe({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) se(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ie(e.variantClassNames, e => ie(e, e => e.split(" ")[0]))
            }
          }, t
        },
        le = ae({
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
      ae({
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
      var ue = ae({
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
        ce = ae({
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
        de = ae({
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
      const fe = (0, q.forwardRef)(({
        testId: e,
        asChild: t,
        children: n,
        iconLeft: r,
        iconLeftLabel: o,
        iconRight: i,
        iconRightLabel: s,
        appearance: a,
        size: l = "MD",
        fullWidth: u = !1,
        isLoading: c = !1,
        spinnerLabel: d,
        preventFocusOnPress: f = !1,
        override_darkenLuminance: p = .035,
        override_textLuminance: h = .179,
        override_hoverLuminance: m = .08,
        override_pressedLuminance: v = .15,
        override_backgroundColor: y,
        override_hoverColor: g,
        override_pressedColor: b,
        override_textColor: _,
        ...w
      }, x) => {
        const C = (0, q.useRef)(null),
          O = (0, G.UP)(C, x),
          P = (0, Q.zQ)(),
          S = "string" == typeof l ? l : l?.[P] ?? l.default ?? "MD",
          {
            buttonProps: E
          } = (0, G.sL)((0, H.v6)(w, {
            isLoading: c,
            preventFocusOnPress: f
          }), C);
        U({
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
            textColor: _
          },
          enabled: "accent" === a
        }, [t]);
        const k = (0, H.v6)({
            className: le({
              appearance: a,
              size: S,
              fullWidth: u,
              iconLeft: !!r,
              iconRight: !!i
            }),
            "data-testid": e
          }, E),
          R = r && te[r],
          T = i && te[i],
          D = t ? Y.DX : "button",
          N = u && (T || T && R);
        return (0, j.jsxs)(D, {
          ref: O,
          ...k,
          children: [N && (0, j.jsx)("div", {
            className: "foundry_17pcofy15"
          }), R && (0, j.jsx)(R, {
            label: o || "",
            size: S,
            className: (0, ee.$)(ue({
              size: S
            }), "foundry_17pcofy11")
          }), (0, j.jsx)(Y.xV, {
            children: n
          }), T && (0, j.jsx)(T, {
            label: s || "",
            size: S,
            className: (0, ee.$)(ue({
              size: S
            }), ce({
              fullWidth: u
            }))
          }), c && (0, j.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, j.jsx)(J.y, {
              label: d || "",
              size: "inline" + ("XL" === S ? "LG" : "MD"),
              hideTrack: !0,
              className: de({
                size: S
              })
            })
          })]
        })
      });

      function pe(e) {
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

      function he(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? he(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = pe(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function ve(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ye = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ge = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = me(me({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ye(u, r, e.defaultVariants) && (n += " " + c);
            return n
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
        _e = ge({
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
        we = ge({
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
      const xe = (0, q.forwardRef)(({
        testId: e,
        asChild: t,
        icon: n,
        label: r,
        appearance: o,
        fullWidth: i = !1,
        size: s = "LG",
        children: a,
        isLoading: l = !1,
        spinnerLabel: u,
        preventFocusOnPress: c = !1,
        override_darkenLuminance: d = .035,
        override_textLuminance: f = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: m,
        override_hoverColor: v,
        override_pressedColor: y,
        override_textColor: g,
        ...b
      }, _) => {
        const w = (0, q.useRef)(null),
          x = (0, G.UP)(w, _),
          C = (0, Q.zQ)(),
          O = "string" == typeof s ? s : s?.[C] ?? s.default ?? "LG",
          {
            buttonProps: P
          } = (0, G.sL)((0, H.v6)(b, {
            isLoading: l,
            preventFocusOnPress: c
          }), w);
        U({
          refs: {
            buttonRef: w
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
        const S = (0, H.v6)({
            className: _e({
              appearance: o,
              size: O,
              fullWidth: i
            }),
            "data-testid": e
          }, P),
          E = te[n],
          k = t ? Y.DX : "button";
        return (0, j.jsxs)(k, {
          ref: x,
          ...S,
          children: [E && (0, j.jsx)(E, {
            label: r || "",
            size: O,
            className: be({
              size: O
            })
          }), (0, j.jsx)(Y.xV, {
            children: a
          }), l && (0, j.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, j.jsx)(J.y, {
              label: u || "",
              size: O && "SM" !== O ? `inline${O}` : "inlineMD",
              hideTrack: !0,
              className: we({
                size: O
              })
            })
          })]
        })
      });

      function Ce(e) {
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

      function Oe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Oe(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Ce(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Pe(e, t) {
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
        Ee = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = je(je({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Se(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pe(e.variantClassNames, e => Pe(e, e => e.split(" ")[0]))
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
      const ke = (0, q.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: n = "thin",
        isDecorative: r = !1,
        asChild: o,
        testId: i,
        ...s
      }, a) => {
        const l = "horizontal" !== t || r ? "div" : "hr",
          u = r || "hr" === l ? void 0 : "separator",
          c = o ? Y.DX : l;
        return (0, j.jsx)(c, {
          ref: a,
          className: (0, ee.$)(Ee({
            thickness: n,
            orientation: t
          }), e),
          role: u,
          "aria-orientation": t,
          "data-testid": i,
          ...s
        })
      });
      var Re = n(45357);

      function Te(e) {
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

      function De(e, t) {
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
          t % 2 ? De(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Te(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : De(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Ie(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Me = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Le = e => {
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
            for (var [u, c] of e.compoundVariants) Me(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ie(e.variantClassNames, e => Ie(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ae = Le({
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
      const ze = (0, q.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const s = e ? Y.DX : "p",
          a = (0, H.v6)({
            className: Ae({
              size: r,
              appearance: n
            })
          }, o);
        return (0, j.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var Ve = Le({
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
      const Fe = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: n = "default",
          ...r
        }, o) => {
          const i = e ? Y.DX : "p",
            s = (0, H.v6)({
              className: Ve({
                appearance: n
              })
            }, r);
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        Be = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? Y.DX : "h1",
            i = (0, H.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, n);
          return (0, j.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        });
      var qe = Le({
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
      const We = (0, q.forwardRef)(({
        asChild: e,
        level: t,
        testId: n,
        ...r
      }, o) => {
        const i = e ? Y.DX : `h${7===t?6:t}`,
          s = (0, H.v6)(r, {
            className: qe({
              level: t
            })
          });
        return (0, j.jsx)(i, {
          ref: o,
          "data-testid": n,
          ...s
        })
      });
      var $e = Le({
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
      const Ke = (0, q.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const s = e ? Y.DX : "p",
          a = (0, H.v6)({
            className: $e({
              size: r,
              appearance: n
            })
          }, o);
        return (0, j.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var Xe = Le({
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
        Ze = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...r
        }, o) => {
          const i = e ? Y.DX : He[n] || "span",
            s = (0, H.v6)(r, {
              className: Xe({
                semantic: n
              })
            });
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });

      function Ue(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function Ge(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }
      var Ye, Qe, Je, et, tt, nt, rt, ot, it, st, at, lt, ut, ct, dt, ft, pt, ht = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        mt = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        vt = 1e8,
        yt = 1e-8,
        gt = 2 * Math.PI,
        bt = gt / 4,
        _t = 0,
        wt = Math.sqrt,
        xt = Math.cos,
        Ct = Math.sin,
        Ot = function(e) {
          return "string" == typeof e
        },
        jt = function(e) {
          return "function" == typeof e
        },
        Pt = function(e) {
          return "number" == typeof e
        },
        St = function(e) {
          return void 0 === e
        },
        Et = function(e) {
          return "object" == typeof e
        },
        kt = function(e) {
          return !1 !== e
        },
        Rt = function() {
          return "undefined" != typeof window
        },
        Tt = function(e) {
          return jt(e) || Ot(e)
        },
        Dt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Nt = Array.isArray,
        It = /(?:-?\.?\d|\.)+/gi,
        Mt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Lt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        At = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        zt = /[+-]=-?[.\d]+/,
        Vt = /[^,'"\[\]\s]+/gi,
        Ft = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        Bt = {},
        qt = {},
        Wt = function(e) {
          return (qt = bn(e, Bt)) && _o
        },
        $t = function(e, t) {
          return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        },
        Kt = function(e, t) {
          return !t && console.warn(e)
        },
        Xt = function(e, t) {
          return e && (Bt[e] = t) && qt && (qt[e] = t) || Bt
        },
        Ht = function() {
          return 0
        },
        Zt = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        Ut = {
          suppressEvents: !0,
          kill: !1
        },
        Gt = {
          suppressEvents: !0
        },
        Yt = {},
        Qt = [],
        Jt = {},
        en = {},
        tn = {},
        nn = 30,
        rn = [],
        on = "",
        sn = function(e) {
          var t, n, r = e[0];
          if (Et(r) || jt(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
            for (n = rn.length; n-- && !rn[n].targetTest(r););
            t = rn[n]
          }
          for (n = e.length; n--;) e[n] && (e[n]._gsap || (e[n]._gsap = new Nr(e[n], t))) || e.splice(n, 1);
          return e
        },
        an = function(e) {
          return e._gsap || sn(Gn(e))[0]._gsap
        },
        ln = function(e, t, n) {
          return (n = e[t]) && jt(n) ? e[t]() : St(n) && e.getAttribute && e.getAttribute(t) || n
        },
        un = function(e, t) {
          return (e = e.split(",")).forEach(t) || e
        },
        cn = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        dn = function(e) {
          return Math.round(1e7 * e) / 1e7 || 0
        },
        fn = function(e, t) {
          var n = t.charAt(0),
            r = parseFloat(t.substr(2));
          return e = parseFloat(e), "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
        },
        pn = function(e, t) {
          for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
          return r < n
        },
        hn = function() {
          var e, t, n = Qt.length,
            r = Qt.slice(0);
          for (Jt = {}, Qt.length = 0, e = 0; e < n; e++)(t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        mn = function(e, t, n, r) {
          Qt.length && !Qe && hn(), e.render(t, n, r || Qe && t < 0 && (e._initted || e._startAt)), Qt.length && !Qe && hn()
        },
        vn = function(e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(Vt).length < 2 ? t : Ot(e) ? e.trim() : e
        },
        yn = function(e) {
          return e
        },
        gn = function(e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e
        },
        bn = function(e, t) {
          for (var n in t) e[n] = t[n];
          return e
        },
        _n = function e(t, n) {
          for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = Et(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
          return t
        },
        wn = function(e, t) {
          var n, r = {};
          for (n in e) n in t || (r[n] = e[n]);
          return r
        },
        xn = function(e) {
          var t, n = e.parent || et,
            r = e.keyframes ? (t = Nt(e.keyframes), function(e, n) {
              for (var r in n) r in e || "duration" === r && t || "ease" === r || (e[r] = n[r])
            }) : gn;
          if (kt(e.inherit))
            for (; n;) r(e, n.vars.defaults), n = n.parent || n._dp;
          return e
        },
        Cn = function(e, t, n, r, o) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i, s = e[r];
          if (o)
            for (i = t[o]; s && s[o] > i;) s = s._prev;
          return s ? (t._next = s._next, s._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = s, t.parent = t._dp = e, t
        },
        On = function(e, t, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var o = t._prev,
            i = t._next;
          o ? o._next = i : e[n] === t && (e[n] = i), i ? i._prev = o : e[r] === t && (e[r] = o), t._next = t._prev = t.parent = null
        },
        jn = function(e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        Pn = function(e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n;) n._dirty = 1, n = n.parent;
          return e
        },
        Sn = function(e, t, n, r) {
          return e._startAt && (Qe ? e._startAt.revert(Ut) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
        },
        En = function e(t) {
          return !t || t._ts && e(t.parent)
        },
        kn = function(e) {
          return e._repeat ? Rn(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        Rn = function(e, t) {
          var n = Math.floor(e /= t);
          return e && n === e ? n - 1 : n
        },
        Tn = function(e, t) {
          return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        },
        Dn = function(e) {
          return e._end = dn(e._start + (e._tDur / Math.abs(e._ts || e._rts || yt) || 0))
        },
        Nn = function(e, t) {
          var n = e._dp;
          return n && n.smoothChildTiming && e._ts && (e._start = dn(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Dn(e), n._dirty || Pn(n, e)), e
        },
        In = function(e, t) {
          var n;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Tn(e.rawTime(), t), (!t._dur || Xn(0, t.totalDuration(), n) - t._tTime > yt) && t.render(n, !0)), Pn(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
            e._zTime = -1e-8
          }
        },
        Mn = function(e, t, n, r) {
          return t.parent && jn(t), t._start = dn((Pt(n) ? n : n || e !== et ? Wn(e, n, t) : e._time) + t._delay), t._end = dn(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Cn(e, t, "_first", "_last", e._sort ? "_start" : 0), Vn(t) || (e._recent = t), r || In(e, t), e._ts < 0 && Nn(e, e._tTime), e
        },
        Ln = function(e, t) {
          return (Bt.ScrollTrigger || $t("scrollTrigger", t)) && Bt.ScrollTrigger.create(t, e)
        },
        An = function(e, t, n, r, o) {
          return Br(e, t, o), e._initted ? !n && e._pt && !Qe && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && it !== _r.frame ? (Qt.push(e), e._lazy = [o, r], 1) : void 0 : 1
        },
        zn = function e(t) {
          var n = t.parent;
          return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
        },
        Vn = function(e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t
        },
        Fn = function(e, t, n, r) {
          var o = e._repeat,
            i = dn(t) || 0,
            s = e._tTime / e._tDur;
          return s && !r && (e._time *= i / e._dur), e._dur = i, e._tDur = o ? o < 0 ? 1e10 : dn(i * (o + 1) + e._rDelay * o) : i, s > 0 && !r && Nn(e, e._tTime = e._tDur * s), e.parent && Dn(e), n || Pn(e.parent, e), e
        },
        Bn = function(e) {
          return e instanceof Mr ? Pn(e) : Fn(e, e._dur)
        },
        qn = {
          _start: 0,
          endTime: Ht,
          totalDuration: Ht
        },
        Wn = function e(t, n, r) {
          var o, i, s, a = t.labels,
            l = t._recent || qn,
            u = t.duration() >= vt ? l.endTime(!1) : t._dur;
          return Ot(n) && (isNaN(n) || n in a) ? (i = n.charAt(0), s = "%" === n.substr(-1), o = n.indexOf("="), "<" === i || ">" === i ? (o >= 0 && (n = n.replace(/=/, "")), ("<" === i ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (o < 0 ? l : r).totalDuration() / 100 : 1)) : o < 0 ? (n in a || (a[n] = u), a[n]) : (i = parseFloat(n.charAt(o - 1) + n.substr(o + 1)), s && r && (i = i / 100 * (Nt(r) ? r[0] : r).totalDuration()), o > 1 ? e(t, n.substr(0, o - 1), r) + i : u + i)) : null == n ? u : +n
        },
        $n = function(e, t, n) {
          var r, o, i = Pt(t[1]),
            s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
          if (i && (a.duration = t[1]), a.parent = n, e) {
            for (r = a, o = n; o && !("immediateRender" in r);) r = o.vars.defaults || {}, o = kt(o.vars.inherit) && o.parent;
            a.immediateRender = kt(r.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
          }
          return new Xr(t[0], a, t[s + 1])
        },
        Kn = function(e, t) {
          return e || 0 === e ? t(e) : t
        },
        Xn = function(e, t, n) {
          return n < e ? e : n > t ? t : n
        },
        Hn = function(e, t) {
          return Ot(e) && (t = Ft.exec(e)) ? t[1] : ""
        },
        Zn = [].slice,
        Un = function(e, t) {
          return e && Et(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Et(e[0])) && !e.nodeType && e !== tt
        },
        Gn = function(e, t, n) {
          return Je && !t && Je.selector ? Je.selector(e) : !Ot(e) || n || !nt && wr() ? Nt(e) ? function(e, t, n) {
            return void 0 === n && (n = []), e.forEach(function(e) {
              var r;
              return Ot(e) && !t || Un(e, 1) ? (r = n).push.apply(r, Gn(e)) : n.push(e)
            }) || n
          }(e, n) : Un(e) ? Zn.call(e, 0) : e ? [e] : [] : Zn.call((t || rt).querySelectorAll(e), 0)
        },
        Yn = function(e) {
          return e = Gn(e)[0] || Kt("Invalid scope") || {},
            function(t) {
              var n = e.current || e.nativeElement || e;
              return Gn(t, n.querySelectorAll ? n : n === e ? Kt("Invalid scope") || rt.createElement("div") : e)
            }
        },
        Qn = function(e) {
          return e.sort(function() {
            return .5 - Math.random()
          })
        },
        Jn = function(e) {
          if (jt(e)) return e;
          var t = Et(e) ? e : {
              each: e
            },
            n = Er(t.ease),
            r = t.from || 0,
            o = parseFloat(t.base) || 0,
            i = {},
            s = r > 0 && r < 1,
            a = isNaN(r) || s,
            l = t.axis,
            u = r,
            c = r;
          return Ot(r) ? u = c = {
              center: .5,
              edges: .5,
              end: 1
            } [r] || 0 : !s && a && (u = r[0], c = r[1]),
            function(e, s, d) {
              var f, p, h, m, v, y, g, b, _, w = (d || t).length,
                x = i[w];
              if (!x) {
                if (!(_ = "auto" === t.grid ? 0 : (t.grid || [1, vt])[1])) {
                  for (g = -vt; g < (g = d[_++].getBoundingClientRect().left) && _ < w;);
                  _ < w && _--
                }
                for (x = i[w] = [], f = a ? Math.min(_, w) * u - .5 : r % _, p = _ === vt ? 0 : a ? w * c / _ - .5 : r / _ | 0, g = 0, b = vt, y = 0; y < w; y++) h = y % _ - f, m = p - (y / _ | 0), x[y] = v = l ? Math.abs("y" === l ? m : h) : wt(h * h + m * m), v > g && (g = v), v < b && (b = v);
                "random" === r && Qn(x), x.max = g - b, x.min = b, x.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (_ > w ? w - 1 : l ? "y" === l ? w / _ : _ : Math.max(_, w / _)) || 0) * ("edges" === r ? -1 : 1), x.b = w < 0 ? o - w : o, x.u = Hn(t.amount || t.each) || 0, n = n && w < 0 ? Pr(n) : n
              }
              return w = (x[e] - x.min) / x.max || 0, dn(x.b + (n ? n(w) : w) * x.v) + x.u
            }
        },
        er = function(e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function(n) {
            var r = dn(Math.round(parseFloat(n) / e) * e * t);
            return (r - r % 1) / t + (Pt(n) ? 0 : Hn(n))
          }
        },
        tr = function(e, t) {
          var n, r, o = Nt(e);
          return !o && Et(e) && (n = o = e.radius || vt, e.values ? (e = Gn(e.values), (r = !Pt(e[0])) && (n *= n)) : e = er(e.increment)), Kn(t, o ? jt(e) ? function(t) {
            return r = e(t), Math.abs(r - t) <= n ? r : t
          } : function(t) {
            for (var o, i, s = parseFloat(r ? t.x : t), a = parseFloat(r ? t.y : 0), l = vt, u = 0, c = e.length; c--;)(o = r ? (o = e[c].x - s) * o + (i = e[c].y - a) * i : Math.abs(e[c] - s)) < l && (l = o, u = c);
            return u = !n || l <= n ? e[u] : t, r || u === t || Pt(t) ? u : u + Hn(t)
          } : er(e))
        },
        nr = function(e, t, n, r) {
          return Kn(Nt(e) ? !t : !0 === n ? !!(n = 0) : !r, function() {
            return Nt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * r) / r
          })
        },
        rr = function(e, t, n) {
          return Kn(n, function(n) {
            return e[~~t(n)]
          })
        },
        or = function(e) {
          for (var t, n, r, o, i = 0, s = ""; ~(t = e.indexOf("random(", i));) r = e.indexOf(")", t), o = "[" === e.charAt(t + 7), n = e.substr(t + 7, r - t - 7).match(o ? Vt : It), s += e.substr(i, t - i) + nr(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), i = r + 1;
          return s + e.substr(i, e.length - i)
        },
        ir = function(e, t, n, r, o) {
          var i = t - e,
            s = r - n;
          return Kn(o, function(t) {
            return n + ((t - e) / i * s || 0)
          })
        },
        sr = function(e, t, n) {
          var r, o, i, s = e.labels,
            a = vt;
          for (r in s)(o = s[r] - t) < 0 == !!n && o && a > (o = Math.abs(o)) && (i = r, a = o);
          return i
        },
        ar = function(e, t, n) {
          var r, o, i, s = e.vars,
            a = s[t],
            l = Je,
            u = e._ctx;
          if (a) return r = s[t + "Params"], o = s.callbackScope || e, n && Qt.length && hn(), u && (Je = u), i = r ? a.apply(o, r) : a.call(o), Je = l, i
        },
        lr = function(e) {
          return jn(e), e.scrollTrigger && e.scrollTrigger.kill(!!Qe), e.progress() < 1 && ar(e, "onInterrupt"), e
        },
        ur = [],
        cr = function(e) {
          if (e)
            if (e = !e.name && e.default || e, Rt() || e.headless) {
              var t = e.name,
                n = jt(e),
                r = t && !n && e.init ? function() {
                  this._props = []
                } : e,
                o = {
                  init: Ht,
                  render: to,
                  add: Vr,
                  kill: ro,
                  modifier: no,
                  rawVars: 0
                },
                i = {
                  targetTest: 0,
                  get: 0,
                  getSetter: Yr,
                  aliases: {},
                  register: 0
                };
              if (wr(), e !== r) {
                if (en[t]) return;
                gn(r, gn(wn(e, o), i)), bn(r.prototype, bn(o, wn(e, i))), en[r.prop = t] = r, e.targetTest && (rn.push(r), Yt[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
              }
              Xt(t, r), e.register && e.register(_o, r, so)
            } else ur.push(e)
        },
        dr = 255,
        fr = {
          aqua: [0, dr, dr],
          lime: [0, dr, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, dr],
          navy: [0, 0, 128],
          white: [dr, dr, dr],
          olive: [128, 128, 0],
          yellow: [dr, dr, 0],
          orange: [dr, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [dr, 0, 0],
          pink: [dr, 192, 203],
          cyan: [0, dr, dr],
          transparent: [dr, dr, dr, 0]
        },
        pr = function(e, t, n) {
          return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * dr + .5 | 0
        },
        hr = function(e, t, n) {
          var r, o, i, s, a, l, u, c, d, f, p = e ? Pt(e) ? [e >> 16, e >> 8 & dr, e & dr] : 0 : fr.black;
          if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), fr[e]) p = fr[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (r = e.charAt(1), o = e.charAt(2), i = e.charAt(3), e = "#" + r + r + o + o + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & dr, p & dr, parseInt(e.substr(7), 16) / 255];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & dr, e & dr]
            } else if ("hsl" === e.substr(0, 3))
              if (p = f = e.match(It), t) {
                if (~e.indexOf("=")) return p = e.match(Mt), n && p.length < 4 && (p[3] = 1), p
              } else s = +p[0] % 360 / 360, a = +p[1] / 100, r = 2 * (l = +p[2] / 100) - (o = l <= .5 ? l * (a + 1) : l + a - l * a), p.length > 3 && (p[3] *= 1), p[0] = pr(s + 1 / 3, r, o), p[1] = pr(s, r, o), p[2] = pr(s - 1 / 3, r, o);
            else p = e.match(It) || fr.transparent;
            p = p.map(Number)
          }
          return t && !f && (r = p[0] / dr, o = p[1] / dr, i = p[2] / dr, l = ((u = Math.max(r, o, i)) + (c = Math.min(r, o, i))) / 2, u === c ? s = a = 0 : (d = u - c, a = l > .5 ? d / (2 - u - c) : d / (u + c), s = u === r ? (o - i) / d + (o < i ? 6 : 0) : u === o ? (i - r) / d + 2 : (r - o) / d + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * l + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        mr = function(e) {
          var t = [],
            n = [],
            r = -1;
          return e.split(yr).forEach(function(e) {
            var o = e.match(Lt) || [];
            t.push.apply(t, o), n.push(r += o.length + 1)
          }), t.c = n, t
        },
        vr = function(e, t, n) {
          var r, o, i, s, a = "",
            l = (e + a).match(yr),
            u = t ? "hsla(" : "rgba(",
            c = 0;
          if (!l) return e;
          if (l = l.map(function(e) {
              return (e = hr(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            }), n && (i = mr(e), (r = n.c).join(a) !== i.c.join(a)))
            for (s = (o = e.replace(yr, "1").split(Lt)).length - 1; c < s; c++) a += o[c] + (~r.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (i.length ? i : l.length ? l : n).shift());
          if (!o)
            for (s = (o = e.split(yr)).length - 1; c < s; c++) a += o[c] + l[c];
          return a + o[s]
        },
        yr = function() {
          var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in fr) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        gr = /hsl[a]?\(/,
        br = function(e) {
          var t, n = e.join(" ");
          if (yr.lastIndex = 0, yr.test(n)) return t = gr.test(n), e[1] = vr(e[1], t), e[0] = vr(e[0], t, mr(e[1])), !0
        },
        _r = function() {
          var e, t, n, r, o, i, s = Date.now,
            a = 500,
            l = 33,
            u = s(),
            c = u,
            d = 1e3 / 240,
            f = d,
            p = [],
            h = function n(h) {
              var m, v, y, g, b = s() - c,
                _ = !0 === h;
              if ((b > a || b < 0) && (u += b - l), ((m = (y = (c += b) - u) - f) > 0 || _) && (g = ++r.frame, o = y - 1e3 * r.time, r.time = y /= 1e3, f += m + (m >= d ? 4 : d - m), v = 1), _ || (e = t(n)), v)
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
              ot && (!nt && Rt() && (tt = nt = window, rt = tt.document || {}, Bt.gsap = _o, (tt.gsapVersions || (tt.gsapVersions = [])).push(_o.version), Wt(qt || tt.GreenSockGlobals || !tt.gsap && tt || {}), ur.forEach(cr)), n = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, e && r.sleep(), t = n || function(e) {
                return setTimeout(e, f - 1e3 * r.time + 1 | 0)
              }, at = 1, h(2))
            },
            sleep: function() {
              (n ? cancelAnimationFrame : clearTimeout)(e), at = 0, t = Ht
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
          return !at && _r.wake()
        },
        xr = {},
        Cr = /^[\d.\-M][\d.\-,\s]/,
        Or = /["']/g,
        jr = function(e) {
          for (var t, n, r, o = {}, i = e.substr(1, e.length - 3).split(":"), s = i[0], a = 1, l = i.length; a < l; a++) n = i[a], t = a !== l - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, t), o[s] = isNaN(r) ? r.replace(Or, "").trim() : +r, s = n.substr(t + 1).trim();
          return o
        },
        Pr = function(e) {
          return function(t) {
            return 1 - e(1 - t)
          }
        },
        Sr = function e(t, n) {
          for (var r, o = t._first; o;) o instanceof Mr ? e(o, n) : !o.vars.yoyoEase || o._yoyo && o._repeat || o._yoyo === n || (o.timeline ? e(o.timeline, n) : (r = o._ease, o._ease = o._yEase, o._yEase = r, o._yoyo = n)), o = o._next
        },
        Er = function(e, t) {
          return e && (jt(e) ? e : xr[e] || function(e) {
            var t, n, r, o, i = (e + "").split("("),
              s = xr[i[0]];
            return s && i.length > 1 && s.config ? s.config.apply(null, ~e.indexOf("{") ? [jr(i[1])] : (t = e, n = t.indexOf("(") + 1, r = t.indexOf(")"), o = t.indexOf("(", n), t.substring(n, ~o && o < r ? t.indexOf(")", r + 1) : r)).split(",").map(vn)) : xr._CE && Cr.test(e) ? xr._CE("", e) : s
          }(e)) || t
        },
        kr = function(e, t, n, r) {
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
          return un(e, function(e) {
            for (var t in xr[e] = Bt[e] = i, xr[o = e.toLowerCase()] = n, i) xr[o + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = xr[e + "." + t] = i[t]
          }), i
        },
        Rr = function(e) {
          return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
          }
        },
        Tr = function e(t, n, r) {
          var o = n >= 1 ? n : 1,
            i = (r || (t ? .3 : .45)) / (n < 1 ? n : 1),
            s = i / gt * (Math.asin(1 / o) || 0),
            a = function(e) {
              return 1 === e ? 1 : o * Math.pow(2, -10 * e) * Ct((e - s) * i) + 1
            },
            l = "out" === t ? a : "in" === t ? function(e) {
              return 1 - a(1 - e)
            } : Rr(a);
          return i = gt / i, l.config = function(n, r) {
            return e(t, n, r)
          }, l
        },
        Dr = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var r = function(e) {
              return e ? --e * e * ((n + 1) * e + n) + 1 : 0
            },
            o = "out" === t ? r : "in" === t ? function(e) {
              return 1 - r(1 - e)
            } : Rr(r);
          return o.config = function(n) {
            return e(t, n)
          }, o
        };
      un("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var n = t < 5 ? t + 1 : t;
        kr(e + ",Power" + (n - 1), t ? function(e) {
          return Math.pow(e, n)
        } : function(e) {
          return e
        }, function(e) {
          return 1 - Math.pow(1 - e, n)
        }, function(e) {
          return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2
        })
      }), xr.Linear.easeNone = xr.none = xr.Linear.easeIn, kr("Elastic", Tr("in"), Tr("out"), Tr()), lt = 7.5625, dt = 2 * (ct = 1 / (ut = 2.75)), ft = 2.5 * ct, kr("Bounce", function(e) {
        return 1 - pt(1 - e)
      }, pt = function(e) {
        return e < ct ? lt * e * e : e < dt ? lt * Math.pow(e - 1.5 / ut, 2) + .75 : e < ft ? lt * (e -= 2.25 / ut) * e + .9375 : lt * Math.pow(e - 2.625 / ut, 2) + .984375
      }), kr("Expo", function(e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
      }), kr("Circ", function(e) {
        return -(wt(1 - e * e) - 1)
      }), kr("Sine", function(e) {
        return 1 === e ? 1 : 1 - xt(e * bt)
      }), kr("Back", Dr("in"), Dr("out"), Dr()), xr.SteppedEase = xr.steps = Bt.SteppedEase = {
        config: function(e, t) {
          void 0 === e && (e = 1);
          var n = 1 / e,
            r = e + (t ? 0 : 1),
            o = t ? 1 : 0;
          return function(e) {
            return ((r * Xn(0, .99999999, e) | 0) + o) * n
          }
        }
      }, mt.ease = xr["quad.out"], un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return on += e + "," + e + "Params,"
      });
      var Nr = function(e, t) {
          this.id = _t++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : ln, this.set = t ? t.getSetter : Yr
        },
        Ir = function() {
          function e(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Fn(this, +e.duration, 1, 1), this.data = e.data, Je && (this._ctx = Je, Je.data.push(this)), at || _r.wake()
          }
          var t = e.prototype;
          return t.delay = function(e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
          }, t.duration = function(e) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
          }, t.totalDuration = function(e) {
            return arguments.length ? (this._dirty = 0, Fn(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, t.totalTime = function(e, t) {
            if (wr(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (Nn(this, e), !n._dp || n.parent || In(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Mn(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === yt || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), mn(this, e, t)), this
          }, t.time = function(e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + kn(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
          }, t.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
          }, t.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + kn(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
          }, t.iteration = function(e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? Rn(this._tTime, n) + 1 : 1
          }, t.timeScale = function(e, t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var n = this.parent && this._ts ? Tn(this.parent._time, this) : this._tTime;
            return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Xn(-Math.abs(this._delay), this._tDur, n), !1 !== t), Dn(this),
              function(e) {
                for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                return e
              }(this)
          }, t.paused = function(e) {
            return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (wr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== yt && (this._tTime -= yt)))), this) : this._ps
          }, t.startTime = function(e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return t && (t._sort || !this.parent) && Mn(t, this, e - this._delay), this
            }
            return this._start
          }, t.endTime = function(e) {
            return this._start + (kt(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, t.rawTime = function(e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Tn(t.rawTime(e), this) : this._tTime : this._tTime
          }, t.revert = function(e) {
            void 0 === e && (e = Gt);
            var t = Qe;
            return Qe = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), Qe = t, this
          }, t.globalTime = function(e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
            return !this.parent && this._sat ? this._sat.globalTime(e) : n
          }, t.repeat = function(e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Bn(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, t.repeatDelay = function(e) {
            if (arguments.length) {
              var t = this._time;
              return this._rDelay = e, Bn(this), t ? this.time(t) : this
            }
            return this._rDelay
          }, t.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
          }, t.seek = function(e, t) {
            return this.totalTime(Wn(this, e), kt(t))
          }, t.restart = function(e, t) {
            return this.play().totalTime(e ? -this._delay : 0, kt(t))
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
            return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - yt))
          }, t.eventCallback = function(e, t, n) {
            var r = this.vars;
            return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete r[e], this) : r[e]
          }, t.then = function(e) {
            var t = this;
            return new Promise(function(n) {
              var r = jt(e) ? e : yn,
                o = function() {
                  var e = t.then;
                  t.then = null, jt(r) && (r = r(t)) && (r.then || r === t) && (t.then = e), n(r), t.then = e
                };
              t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? o() : t._prom = o
            })
          }, t.kill = function() {
            lr(this)
          }, e
        }();
      gn(Ir.prototype, {
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
      var Mr = function(e) {
        function t(t, n) {
          var r;
          return void 0 === t && (t = {}), (r = e.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = kt(t.sortChildren), et && Mn(t.parent || et, Ue(r), n), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Ln(Ue(r), t.scrollTrigger), r
        }
        Ge(t, e);
        var n = t.prototype;
        return n.to = function(e, t, n) {
          return $n(0, arguments, this), this
        }, n.from = function(e, t, n) {
          return $n(1, arguments, this), this
        }, n.fromTo = function(e, t, n, r) {
          return $n(2, arguments, this), this
        }, n.set = function(e, t, n) {
          return t.duration = 0, t.parent = this, xn(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Xr(e, t, Wn(this, n), 1), this
        }, n.call = function(e, t, n) {
          return Mn(this, Xr.delayedCall(0, e, t), n)
        }, n.staggerTo = function(e, t, n, r, o, i, s) {
          return n.duration = t, n.stagger = n.stagger || r, n.onComplete = i, n.onCompleteParams = s, n.parent = this, new Xr(e, n, Wn(this, o)), this
        }, n.staggerFrom = function(e, t, n, r, o, i, s) {
          return n.runBackwards = 1, xn(n).immediateRender = kt(n.immediateRender), this.staggerTo(e, t, n, r, o, i, s)
        }, n.staggerFromTo = function(e, t, n, r, o, i, s, a) {
          return r.startAt = n, xn(r).immediateRender = kt(r.immediateRender), this.staggerTo(e, t, r, o, i, s, a)
        }, n.render = function(e, t, n) {
          var r, o, i, s, a, l, u, c, d, f, p, h, m = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            g = e <= 0 ? 0 : dn(e),
            b = this._zTime < 0 != e < 0 && (this._initted || !y);
          if (this !== et && g > v && e >= 0 && (g = v), g !== this._tTime || n || b) {
            if (m !== this._time && y && (g += this._time - m, e += this._time - m), r = g, d = this._start, l = !(c = this._ts), b && (y || (m = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (p = this._yoyo, a = y + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * a + e, t, n);
              if (r = dn(g % a), g === v ? (s = this._repeat, r = y) : ((s = ~~(g / a)) && s === g / a && (r = y, s--), r > y && (r = y)), f = Rn(this._tTime, a), !m && this._tTime && f !== s && this._tTime - f * a - this._dur <= 0 && (f = s), p && 1 & s && (r = y - r, h = 1), s !== f && !this._lock) {
                var _ = p && 1 & f,
                  w = _ === (p && 1 & s);
                if (s < f && (_ = !_), m = _ ? 0 : g % y ? y : g, this._lock = 1, this.render(m || (h ? 0 : dn(s * a)), t, !y)._lock = 0, this._tTime = g, !t && this.parent && ar(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), m && m !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (y = this._dur, v = this._tDur, w && (this._lock = 2, m = _ ? y : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                Sr(this, h)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(e, t, n) {
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
              }(this, dn(m), dn(r)), u && (g -= r - (r = u._start))), this._tTime = g, this._time = r, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, m = 0), !m && r && !t && !s && (ar(this, "onStart"), this._tTime !== g)) return this;
            if (r >= m && e >= 0)
              for (o = this._first; o;) {
                if (i = o._next, (o._act || r >= o._start) && o._ts && u !== o) {
                  if (o.parent !== this) return this.render(e, t, n);
                  if (o.render(o._ts > 0 ? (r - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (r - o._start) * o._ts, t, n), r !== this._time || !this._ts && !l) {
                    u = 0, i && (g += this._zTime = -1e-8);
                    break
                  }
                }
                o = i
              } else {
                o = this._last;
                for (var x = e < 0 ? e : r; o;) {
                  if (i = o._prev, (o._act || x <= o._end) && o._ts && u !== o) {
                    if (o.parent !== this) return this.render(e, t, n);
                    if (o.render(o._ts > 0 ? (x - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (x - o._start) * o._ts, t, n || Qe && (o._initted || o._startAt)), r !== this._time || !this._ts && !l) {
                      u = 0, i && (g += this._zTime = x ? -1e-8 : yt);
                      break
                    }
                  }
                  o = i
                }
              }
            if (u && !t && (this.pause(), u.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1, this._ts)) return this._start = d, Dn(this), this.render(e, t, n);
            this._onUpdate && !t && ar(this, "onUpdate", !0), (g === v && this._tTime >= this.totalDuration() || !g && m) && (d !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((e || !y) && (g === v && this._ts > 0 || !g && this._ts < 0) && jn(this, 1), t || e < 0 && !m || !g && !m && v || (ar(this, g === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, n.add = function(e, t) {
          var n = this;
          if (Pt(t) || (t = Wn(this, t, e)), !(e instanceof Ir)) {
            if (Nt(e)) return e.forEach(function(e) {
              return n.add(e, t)
            }), this;
            if (Ot(e)) return this.addLabel(e, t);
            if (!jt(e)) return this;
            e = Xr.delayedCall(0, e)
          }
          return this !== e ? Mn(this, e, t) : this
        }, n.getChildren = function(e, t, n, r) {
          void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === r && (r = -vt);
          for (var o = [], i = this._first; i;) i._start >= r && (i instanceof Xr ? t && o.push(i) : (n && o.push(i), e && o.push.apply(o, i.getChildren(!0, t, n)))), i = i._next;
          return o
        }, n.getById = function(e) {
          for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
            if (t[n].vars.id === e) return t[n]
        }, n.remove = function(e) {
          return Ot(e) ? this.removeLabel(e) : jt(e) ? this.killTweensOf(e) : (On(this, e), e === this._recent && (this._recent = this._last), Pn(this))
        }, n.totalTime = function(t, n) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = dn(_r.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(e, t) {
          return this.labels[e] = Wn(this, t), this
        }, n.removeLabel = function(e) {
          return delete this.labels[e], this
        }, n.addPause = function(e, t, n) {
          var r = Xr.delayedCall(0, t || Ht, n);
          return r.data = "isPause", this._hasPause = 1, Mn(this, r, Wn(this, e))
        }, n.removePause = function(e) {
          var t = this._first;
          for (e = Wn(this, e); t;) t._start === e && "isPause" === t.data && jn(t), t = t._next
        }, n.killTweensOf = function(e, t, n) {
          for (var r = this.getTweensOf(e, n), o = r.length; o--;) Lr !== r[o] && r[o].kill(e, t);
          return this
        }, n.getTweensOf = function(e, t) {
          for (var n, r = [], o = Gn(e), i = this._first, s = Pt(t); i;) i instanceof Xr ? pn(i._targets, o) && (s ? (!Lr || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && r.push(i) : (n = i.getTweensOf(o, t)).length && r.push.apply(r, n), i = i._next;
          return r
        }, n.tweenTo = function(e, t) {
          t = t || {};
          var n, r = this,
            o = Wn(r, e),
            i = t,
            s = i.startAt,
            a = i.onStart,
            l = i.onStartParams,
            u = i.immediateRender,
            c = Xr.to(r, gn({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration: t.duration || Math.abs((o - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || yt,
              onStart: function() {
                if (r.pause(), !n) {
                  var e = t.duration || Math.abs((o - (s && "time" in s ? s.time : r._time)) / r.timeScale());
                  c._dur !== e && Fn(c, e, 0, 1).render(c._time, !0, !0), n = 1
                }
                a && a.apply(c, l || [])
              }
            }, t));
          return u ? c.render(0) : c
        }, n.tweenFromTo = function(e, t, n) {
          return this.tweenTo(t, gn({
            startAt: {
              time: Wn(this, e)
            }
          }, n))
        }, n.recent = function() {
          return this._recent
        }, n.nextLabel = function(e) {
          return void 0 === e && (e = this._time), sr(this, Wn(this, e))
        }, n.previousLabel = function(e) {
          return void 0 === e && (e = this._time), sr(this, Wn(this, e), 1)
        }, n.currentLabel = function(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + yt)
        }, n.shiftChildren = function(e, t, n) {
          void 0 === n && (n = 0);
          for (var r, o = this._first, i = this.labels; o;) o._start >= n && (o._start += e, o._end += e), o = o._next;
          if (t)
            for (r in i) i[r] >= n && (i[r] += e);
          return Pn(this)
        }, n.invalidate = function(t) {
          var n = this._first;
          for (this._lock = 0; n;) n.invalidate(t), n = n._next;
          return e.prototype.invalidate.call(this, t)
        }, n.clear = function(e) {
          void 0 === e && (e = !0);
          for (var t, n = this._first; n;) t = n._next, this.remove(n), n = t;
          return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Pn(this)
        }, n.totalDuration = function(e) {
          var t, n, r, o = 0,
            i = this,
            s = i._last,
            a = vt;
          if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e));
          if (i._dirty) {
            for (r = i.parent; s;) t = s._prev, s._dirty && s.totalDuration(), (n = s._start) > a && i._sort && s._ts && !i._lock ? (i._lock = 1, Mn(i, s, n - s._delay, 1)._lock = 0) : a = n, n < 0 && s._ts && (o -= n, (!r && !i._dp || r && r.smoothChildTiming) && (i._start += n / i._ts, i._time -= n, i._tTime -= n), i.shiftChildren(-n, !1, -Infinity), a = 0), s._end > o && s._ts && (o = s._end), s = t;
            Fn(i, i === et && i._time > o ? i._time : o, 1, 1), i._dirty = 0
          }
          return i._tDur
        }, t.updateRoot = function(e) {
          if (et._ts && (mn(et, Tn(e, et)), it = _r.frame), _r.frame >= nn) {
            nn += ht.autoSleep || 120;
            var t = et._first;
            if ((!t || !t._ts) && ht.autoSleep && _r._listeners.length < 2) {
              for (; t && !t._ts;) t = t._next;
              t || _r.sleep()
            }
          }
        }, t
      }(Ir);
      gn(Mr.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var Lr, Ar, zr = function(e, t, n, r, o, i, s) {
          var a, l, u, c, d, f, p, h, m = new so(this._pt, e, t, 0, 1, eo, null, o),
            v = 0,
            y = 0;
          for (m.b = n, m.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = or(r)), i && (i(h = [n, r], e, t), n = h[0], r = h[1]), l = n.match(At) || []; a = At.exec(r);) c = a[0], d = r.substring(v, a.index), u ? u = (u + 1) % 5 : "rgba(" === d.substr(-5) && (u = 1), c !== l[y++] && (f = parseFloat(l[y - 1]) || 0, m._pt = {
            _next: m._pt,
            p: d || 1 === y ? d : ",",
            s: f,
            c: "=" === c.charAt(1) ? fn(f, c) - f : parseFloat(c) - f,
            m: u && u < 4 ? Math.round : 0
          }, v = At.lastIndex);
          return m.c = v < r.length ? r.substring(v, r.length) : "", m.fp = s, (zt.test(r) || p) && (m.e = 0), this._pt = m, m
        },
        Vr = function(e, t, n, r, o, i, s, a, l, u) {
          jt(r) && (r = r(o || 0, e, i));
          var c, d = e[t],
            f = "get" !== n ? n : jt(d) ? l ? e[t.indexOf("set") || !jt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : d,
            p = jt(d) ? l ? Ur : Zr : Hr;
          if (Ot(r) && (~r.indexOf("random(") && (r = or(r)), "=" === r.charAt(1) && ((c = fn(f, r) + (Hn(f) || 0)) || 0 === c) && (r = c)), !u || f !== r || Ar) return isNaN(f * r) || "" === r ? (!d && !(t in e) && $t(t, r), zr.call(this, e, t, f, r, p, a || ht.stringFilter, l)) : (c = new so(this._pt, e, t, +f || 0, r - (f || 0), "boolean" == typeof d ? Jr : Qr, 0, p), l && (c.fp = l), s && c.modifier(s, this, e), this._pt = c)
        },
        Fr = function(e, t, n, r, o, i) {
          var s, a, l, u;
          if (en[e] && !1 !== (s = new en[e]).init(o, s.rawVars ? t[e] : function(e, t, n, r, o) {
              if (jt(e) && (e = Wr(e, o, t, n, r)), !Et(e) || e.style && e.nodeType || Nt(e) || Dt(e)) return Ot(e) ? Wr(e, o, t, n, r) : e;
              var i, s = {};
              for (i in e) s[i] = Wr(e[i], o, t, n, r);
              return s
            }(t[e], r, o, i, n), n, r, i) && (n._pt = a = new so(n._pt, o, e, 0, 1, s.render, s, 0, s.priority), n !== st))
            for (l = n._ptLookup[n._targets.indexOf(o)], u = s._props.length; u--;) l[s._props[u]] = a;
          return s
        },
        Br = function e(t, n, r) {
          var o, i, s, a, l, u, c, d, f, p, h, m, v, y = t.vars,
            g = y.ease,
            b = y.startAt,
            _ = y.immediateRender,
            w = y.lazy,
            x = y.onUpdate,
            C = y.runBackwards,
            O = y.yoyoEase,
            j = y.keyframes,
            P = y.autoRevert,
            S = t._dur,
            E = t._startAt,
            k = t._targets,
            R = t.parent,
            T = R && "nested" === R.data ? R.vars.targets : k,
            D = "auto" === t._overwrite && !Ye,
            N = t.timeline;
          if (N && (!j || !g) && (g = "none"), t._ease = Er(g, mt.ease), t._yEase = O ? Pr(Er(!0 === O ? g : O, mt.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !N && !!y.runBackwards, !N || j && !y.stagger) {
            if (m = (d = k[0] ? an(k[0]).harness : 0) && y[d.prop], o = wn(y, Yt), E && (E._zTime < 0 && E.progress(1), n < 0 && C && _ && !P ? E.render(-1, !0) : E.revert(C && S ? Ut : Zt), E._lazy = 0), b) {
              if (jn(t._startAt = Xr.set(k, gn({
                  data: "isStart",
                  overwrite: !1,
                  parent: R,
                  immediateRender: !0,
                  lazy: !E && kt(w),
                  startAt: null,
                  delay: 0,
                  onUpdate: x && function() {
                    return ar(t, "onUpdate")
                  },
                  stagger: 0
                }, b))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (Qe || !_ && !P) && t._startAt.revert(Ut), _ && S && n <= 0 && r <= 0) return void(n && (t._zTime = n))
            } else if (C && S && !E)
              if (n && (_ = !1), s = gn({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: _ && !E && kt(w),
                  immediateRender: _,
                  stagger: 0,
                  parent: R
                }, o), m && (s[d.prop] = m), jn(t._startAt = Xr.set(k, s)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (Qe ? t._startAt.revert(Ut) : t._startAt.render(-1, !0)), t._zTime = n, _) {
                if (!n) return
              } else e(t._startAt, yt, yt);
            for (t._pt = t._ptCache = 0, w = S && kt(w) || w && !S, i = 0; i < k.length; i++) {
              if (c = (l = k[i])._gsap || sn(k)[i]._gsap, t._ptLookup[i] = p = {}, Jt[c.id] && Qt.length && hn(), h = T === k ? i : T.indexOf(l), d && !1 !== (f = new d).init(l, m || o, t, h, T) && (t._pt = a = new so(t._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(e) {
                  p[e] = a
                }), f.priority && (u = 1)), !d || m)
                for (s in o) en[s] && (f = Fr(s, o, t, h, l, T)) ? f.priority && (u = 1) : p[s] = a = Vr.call(t, l, s, "get", o[s], h, T, 0, y.stringFilter);
              t._op && t._op[i] && t.kill(l, t._op[i]), D && t._pt && (Lr = t, et.killTweensOf(l, p, t.globalTime(n)), v = !t.parent, Lr = 0), t._pt && w && (Jt[c.id] = 1)
            }
            u && io(t), t._onInit && t._onInit(t)
          }
          t._onUpdate = x, t._initted = (!t._op || t._pt) && !v, j && n <= 0 && N.render(vt, !0, !0)
        },
        qr = function(e, t, n, r) {
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
        Wr = function(e, t, n, r, o) {
          return jt(e) ? e.call(t, n, r, o) : Ot(e) && ~e.indexOf("random(") ? or(e) : e
        },
        $r = on + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Kr = {};
      un($r + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
        return Kr[e] = 1
      });
      var Xr = function(e) {
        function t(t, n, r, o) {
          var i;
          "number" == typeof n && (r.duration = n, n = r, r = null);
          var s, a, l, u, c, d, f, p, h = (i = e.call(this, o ? n : xn(n)) || this).vars,
            m = h.duration,
            v = h.delay,
            y = h.immediateRender,
            g = h.stagger,
            b = h.overwrite,
            _ = h.keyframes,
            w = h.defaults,
            x = h.scrollTrigger,
            C = h.yoyoEase,
            O = n.parent || et,
            j = (Nt(t) || Dt(t) ? Pt(t[0]) : "length" in n) ? [t] : Gn(t);
          if (i._targets = j.length ? sn(j) : Kt("GSAP target " + t + " not found. https://gsap.com", !ht.nullTargetWarn) || [], i._ptLookup = [], i._overwrite = b, _ || g || Tt(m) || Tt(v)) {
            if (n = i.vars, (s = i.timeline = new Mr({
                data: "nested",
                defaults: w || {},
                targets: O && "nested" === O.data ? O.vars.targets : j
              })).kill(), s.parent = s._dp = Ue(i), s._start = 0, g || Tt(m) || Tt(v)) {
              if (u = j.length, f = g && Jn(g), Et(g))
                for (c in g) ~$r.indexOf(c) && (p || (p = {}), p[c] = g[c]);
              for (a = 0; a < u; a++)(l = wn(n, Kr)).stagger = 0, C && (l.yoyoEase = C), p && bn(l, p), d = j[a], l.duration = +Wr(m, Ue(i), a, d, j), l.delay = (+Wr(v, Ue(i), a, d, j) || 0) - i._delay, !g && 1 === u && l.delay && (i._delay = v = l.delay, i._start += v, l.delay = 0), s.to(d, l, f ? f(a, d, j) : 0), s._ease = xr.none;
              s.duration() ? m = v = 0 : i.timeline = 0
            } else if (_) {
              xn(gn(s.vars.defaults, {
                ease: "none"
              })), s._ease = Er(_.ease || n.ease || "none");
              var P, S, E, k = 0;
              if (Nt(_)) _.forEach(function(e) {
                return s.to(j, e, ">")
              }), s.duration();
              else {
                for (c in l = {}, _) "ease" === c || "easeEach" === c || qr(c, _[c], l, _.easeEach);
                for (c in l)
                  for (P = l[c].sort(function(e, t) {
                      return e.t - t.t
                    }), k = 0, a = 0; a < P.length; a++)(E = {
                    ease: (S = P[a]).e,
                    duration: (S.t - (a ? P[a - 1].t : 0)) / 100 * m
                  })[c] = S.v, s.to(j, E, k), k += E.duration;
                s.duration() < m && s.to({}, {
                  duration: m - s.duration()
                })
              }
            }
            m || i.duration(m = s.duration())
          } else i.timeline = 0;
          return !0 !== b || Ye || (Lr = Ue(i), et.killTweensOf(j), Lr = 0), Mn(O, Ue(i), r), n.reversed && i.reverse(), n.paused && i.paused(!0), (y || !m && !_ && i._start === dn(O._time) && kt(y) && En(Ue(i)) && "nested" !== O.data) && (i._tTime = -1e-8, i.render(Math.max(0, -v) || 0)), x && Ln(Ue(i), x), i
        }
        Ge(t, e);
        var n = t.prototype;
        return n.render = function(e, t, n) {
          var r, o, i, s, a, l, u, c, d, f = this._time,
            p = this._tDur,
            h = this._dur,
            m = e < 0,
            v = e > p - yt && !m ? p : e < yt ? 0 : e;
          if (h) {
            if (v !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
              if (r = v, c = this.timeline, this._repeat) {
                if (s = h + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * s + e, t, n);
                if (r = dn(v % s), v === p ? (i = this._repeat, r = h) : ((i = ~~(v / s)) && i === dn(v / s) && (r = h, i--), r > h && (r = h)), (l = this._yoyo && 1 & i) && (d = this._yEase, r = h - r), a = Rn(this._tTime, s), r === f && !n && this._initted && i === a) return this._tTime = v, this;
                i !== a && (c && this._yEase && Sr(c, l), this.vars.repeatRefresh && !l && !this._lock && this._time !== s && this._initted && (this._lock = n = 1, this.render(dn(s * i), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (An(this, m ? e : r, n, t, v)) return this._tTime = 0, this;
                if (!(f === this._time || n && this.vars.repeatRefresh && i !== a)) return this;
                if (h !== this._dur) return this.render(e, t, n)
              }
              if (this._tTime = v, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (d || this._ease)(r / h), this._from && (this.ratio = u = 1 - u), r && !f && !t && !i && (ar(this, "onStart"), this._tTime !== v)) return this;
              for (o = this._pt; o;) o.r(u, o.d), o = o._next;
              c && c.render(e < 0 ? e : c._dur * c._ease(r / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (m && Sn(this, e, 0, n), ar(this, "onUpdate")), this._repeat && i !== a && this.vars.onRepeat && !t && this.parent && ar(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (m && !this._onUpdate && Sn(this, e, 0, !0), (e || !h) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && jn(this, 1), t || m && !f || !(v || f || l) || (ar(this, v === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < p && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(e, t, n, r) {
            var o, i, s, a = e.ratio,
              l = t < 0 || !t && (!e._start && zn(e) && (e._initted || !Vn(e)) || (e._ts < 0 || e._dp._ts < 0) && !Vn(e)) ? 0 : 1,
              u = e._rDelay,
              c = 0;
            if (u && e._repeat && (c = Xn(0, e._tDur, t), i = Rn(c, u), e._yoyo && 1 & i && (l = 1 - l), i !== Rn(e._tTime, u) && (a = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== a || Qe || r || e._zTime === yt || !t && e._zTime) {
              if (!e._initted && An(e, t, r, n, c)) return;
              for (s = e._zTime, e._zTime = t || (n ? yt : 0), n || (n = t && !s), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = c, o = e._pt; o;) o.r(l, o.d), o = o._next;
              t < 0 && Sn(e, t, 0, !0), e._onUpdate && !n && ar(e, "onUpdate"), c && e._repeat && !n && e.parent && ar(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && jn(e, 1), n || Qe || (ar(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = t)
          }(this, e, t, n);
          return this
        }, n.targets = function() {
          return this._targets
        }, n.invalidate = function(t) {
          return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
        }, n.resetTo = function(e, t, n, r, o) {
          at || _r.wake(), this._ts || this.play();
          var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Br(this, i),
            function(e, t, n, r, o, i, s, a) {
              var l, u, c, d, f = (e._pt && e._ptCache || (e._ptCache = {}))[t];
              if (!f)
                for (f = e._ptCache[t] = [], c = e._ptLookup, d = e._targets.length; d--;) {
                  if ((l = c[d][t]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                  if (!l) return Ar = 1, e.vars[t] = "+=0", Br(e, s), Ar = 0, a ? Kt(t + " not eligible for reset") : 1;
                  f.push(l)
                }
              for (d = f.length; d--;)(l = (u = f[d])._pt || u).s = !r && 0 !== r || o ? l.s + (r || 0) + i * l.c : r, l.c = n - l.s, u.e && (u.e = cn(n) + Hn(u.e)), u.b && (u.b = l.s + Hn(u.b))
            }(this, e, t, n, r, this._ease(i / this._dur), i, o) ? this.resetTo(e, t, n, r, 1) : (Nn(this, 0), this.parent || Cn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, n.kill = function(e, t) {
          if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? lr(this) : this;
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Lr && !0 !== Lr.vars.overwrite)._first || lr(this), this.parent && n !== this.timeline.totalDuration() && Fn(this, this._dur * this.timeline._tDur / n, 0, 1), this
          }
          var r, o, i, s, a, l, u, c = this._targets,
            d = e ? Gn(e) : c,
            f = this._ptLookup,
            p = this._pt;
          if ((!t || "all" === t) && function(e, t) {
              for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
              return n < 0
            }(c, d)) return "all" === t && (this._pt = 0), lr(this);
          for (r = this._op = this._op || [], "all" !== t && (Ot(t) && (a = {}, un(t, function(e) {
              return a[e] = 1
            }), t = a), t = function(e, t) {
              var n, r, o, i, s = e[0] ? an(e[0]).harness : 0,
                a = s && s.aliases;
              if (!a) return t;
              for (r in n = bn({}, t), a)
                if (r in n)
                  for (o = (i = a[r].split(",")).length; o--;) n[i[o]] = n[r];
              return n
            }(c, t)), u = c.length; u--;)
            if (~d.indexOf(c[u]))
              for (a in o = f[u], "all" === t ? (r[u] = t, s = o, i = {}) : (i = r[u] = r[u] || {}, s = t), s)(l = o && o[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || On(this, l, "_pt"), delete o[a]), "all" !== i && (i[a] = 1);
          return this._initted && !this._pt && p && lr(this), this
        }, t.to = function(e, n) {
          return new t(e, n, arguments[2])
        }, t.from = function(e, t) {
          return $n(1, arguments)
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
          return $n(2, arguments)
        }, t.set = function(e, n) {
          return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n)
        }, t.killTweensOf = function(e, t, n) {
          return et.killTweensOf(e, t, n)
        }, t
      }(Ir);
      gn(Xr.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), un("staggerTo,staggerFrom,staggerFromTo", function(e) {
        Xr[e] = function() {
          var t = new Mr,
            n = Zn.call(arguments, 0);
          return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
        }
      });
      var Hr = function(e, t, n) {
          return e[t] = n
        },
        Zr = function(e, t, n) {
          return e[t](n)
        },
        Ur = function(e, t, n, r) {
          return e[t](r.fp, n)
        },
        Gr = function(e, t, n) {
          return e.setAttribute(t, n)
        },
        Yr = function(e, t) {
          return jt(e[t]) ? Zr : St(e[t]) && e.setAttribute ? Gr : Hr
        },
        Qr = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
        },
        Jr = function(e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        },
        eo = function(e, t) {
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
        to = function(e, t) {
          for (var n = t._pt; n;) n.r(e, n.d), n = n._next
        },
        no = function(e, t, n, r) {
          for (var o, i = this._pt; i;) o = i._next, i.p === r && i.modifier(e, t, n), i = o
        },
        ro = function(e) {
          for (var t, n, r = this._pt; r;) n = r._next, r.p === e && !r.op || r.op === e ? On(this, r, "_pt") : r.dep || (t = 1), r = n;
          return !t
        },
        oo = function(e, t, n, r) {
          r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
        },
        io = function(e) {
          for (var t, n, r, o, i = e._pt; i;) {
            for (t = i._next, n = r; n && n.pr > i.pr;) n = n._next;
            (i._prev = n ? n._prev : o) ? i._prev._next = i: r = i, (i._next = n) ? n._prev = i : o = i, i = t
          }
          e._pt = r
        },
        so = function() {
          function e(e, t, n, r, o, i, s, a, l) {
            this.t = t, this.s = r, this.c = o, this.p = n, this.r = i || Qr, this.d = s || this, this.set = a || Hr, this.pr = l || 0, this._next = e, e && (e._prev = this)
          }
          return e.prototype.modifier = function(e, t, n) {
            this.mSet = this.mSet || this.set, this.set = oo, this.m = e, this.mt = n, this.tween = t
          }, e
        }();
      un(on + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return Yt[e] = 1
      }), Bt.TweenMax = Bt.TweenLite = Xr, Bt.TimelineLite = Bt.TimelineMax = Mr, et = new Mr({
        sortChildren: !1,
        defaults: mt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), ht.stringFilter = br;
      var ao = [],
        lo = {},
        uo = [],
        co = 0,
        fo = 0,
        po = function(e) {
          return (lo[e] || uo).map(function(e) {
            return e()
          })
        },
        ho = function() {
          var e = Date.now(),
            t = [];
          e - co > 2 && (po("matchMediaInit"), ao.forEach(function(e) {
            var n, r, o, i, s = e.queries,
              a = e.conditions;
            for (r in s)(n = tt.matchMedia(s[r]).matches) && (o = 1), n !== a[r] && (a[r] = n, i = 1);
            i && (e.revert(), o && t.push(e))
          }), po("matchMediaRevert"), t.forEach(function(e) {
            return e.onMatch(e, function(t) {
              return e.add(null, t)
            })
          }), co = e, po("matchMedia"))
        },
        mo = function() {
          function e(e, t) {
            this.selector = t && Yn(t), this.data = [], this._r = [], this.isReverted = !1, this.id = fo++, e && this.add(e)
          }
          var t = e.prototype;
          return t.add = function(e, t, n) {
            jt(e) && (n = t, t = e, e = jt);
            var r = this,
              o = function() {
                var e, o = Je,
                  i = r.selector;
                return o && o !== r && o.data.push(r), n && (r.selector = Yn(n)), Je = r, e = t.apply(r, arguments), jt(e) && r._r.push(e), Je = o, r.selector = i, r.isReverted = !1, e
              };
            return r.last = o, e === jt ? o(r, function(e) {
              return r.add(null, e)
            }) : e ? r[e] = o : o
          }, t.ignore = function(e) {
            var t = Je;
            Je = null, e(this), Je = t
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
                  }), o = n.data.length; o--;)(t = n.data[o]) instanceof Mr ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof Xr) && t.revert && t.revert(e);
                n._r.forEach(function(t) {
                  return t(e, n)
                }), n.isReverted = !0
              }() : this.data.forEach(function(e) {
                return e.kill && e.kill()
              }), this.clear(), t)
              for (var r = ao.length; r--;) ao[r].id === this.id && ao.splice(r, 1)
          }, t.revert = function(e) {
            this.kill(e || {})
          }, e
        }(),
        vo = function() {
          function e(e) {
            this.contexts = [], this.scope = e, Je && Je.data.push(this)
          }
          var t = e.prototype;
          return t.add = function(e, t, n) {
            Et(e) || (e = {
              matches: e
            });
            var r, o, i, s = new mo(0, n || this.scope),
              a = s.conditions = {};
            for (o in Je && !s.selector && (s.selector = Je.selector), this.contexts.push(s), t = s.add("onMatch", t), s.queries = e, e) "all" === o ? i = 1 : (r = tt.matchMedia(e[o])) && (ao.indexOf(s) < 0 && ao.push(s), (a[o] = r.matches) && (i = 1), r.addListener ? r.addListener(ho) : r.addEventListener("change", ho));
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
        yo = {
          registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t.forEach(function(e) {
              return cr(e)
            })
          },
          timeline: function(e) {
            return new Mr(e)
          },
          getTweensOf: function(e, t) {
            return et.getTweensOf(e, t)
          },
          getProperty: function(e, t, n, r) {
            Ot(e) && (e = Gn(e)[0]);
            var o = an(e || {}).get,
              i = n ? yn : vn;
            return "native" === n && (n = ""), e ? t ? i((en[t] && en[t].get || o)(e, t, n, r)) : function(t, n, r) {
              return i((en[t] && en[t].get || o)(e, t, n, r))
            } : e
          },
          quickSetter: function(e, t, n) {
            if ((e = Gn(e)).length > 1) {
              var r = e.map(function(e) {
                  return _o.quickSetter(e, t, n)
                }),
                o = r.length;
              return function(e) {
                for (var t = o; t--;) r[t](e)
              }
            }
            e = e[0] || {};
            var i = en[t],
              s = an(e),
              a = s.harness && (s.harness.aliases || {})[t] || t,
              l = i ? function(t) {
                var r = new i;
                st._pt = 0, r.init(e, n ? t + n : t, st, 0, [e]), r.render(1, r), st._pt && to(1, st)
              } : s.set(e, a);
            return i ? l : function(t) {
              return l(e, a, n ? t + n : t, s, 1)
            }
          },
          quickTo: function(e, t, n) {
            var r, o = _o.to(e, bn(((r = {})[t] = "+=0.1", r.paused = !0, r), n || {})),
              i = function(e, n, r) {
                return o.resetTo(t, e, n, r)
              };
            return i.tween = o, i
          },
          isTweening: function(e) {
            return et.getTweensOf(e, !0).length > 0
          },
          defaults: function(e) {
            return e && e.ease && (e.ease = Er(e.ease, mt.ease)), _n(mt, e || {})
          },
          config: function(e) {
            return _n(ht, e || {})
          },
          registerEffect: function(e) {
            var t = e.name,
              n = e.effect,
              r = e.plugins,
              o = e.defaults,
              i = e.extendTimeline;
            (r || "").split(",").forEach(function(e) {
              return e && !en[e] && !Bt[e] && Kt(t + " effect requires " + e + " plugin.")
            }), tn[t] = function(e, t, r) {
              return n(Gn(e), gn(t || {}, o), r)
            }, i && (Mr.prototype[t] = function(e, n, r) {
              return this.add(tn[t](e, Et(n) ? n : (r = n) && {}, this), r)
            })
          },
          registerEase: function(e, t) {
            xr[e] = Er(t)
          },
          parseEase: function(e, t) {
            return arguments.length ? Er(e, t) : xr
          },
          getById: function(e) {
            return et.getById(e)
          },
          exportRoot: function(e, t) {
            void 0 === e && (e = {});
            var n, r, o = new Mr(e);
            for (o.smoothChildTiming = kt(e.smoothChildTiming), et.remove(o), o._dp = 0, o._time = o._tTime = et._time, n = et._first; n;) r = n._next, !t && !n._dur && n instanceof Xr && n.vars.onComplete === n._targets[0] || Mn(o, n, n._start - n._delay), n = r;
            return Mn(et, o, 0), o
          },
          context: function(e, t) {
            return e ? new mo(e, t) : Je
          },
          matchMedia: function(e) {
            return new vo(e)
          },
          matchMediaRefresh: function() {
            return ao.forEach(function(e) {
              var t, n, r = e.conditions;
              for (n in r) r[n] && (r[n] = !1, t = 1);
              t && e.revert()
            }) || ho()
          },
          addEventListener: function(e, t) {
            var n = lo[e] || (lo[e] = []);
            ~n.indexOf(t) || n.push(t)
          },
          removeEventListener: function(e, t) {
            var n = lo[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1)
          },
          utils: {
            wrap: function e(t, n, r) {
              var o = n - t;
              return Nt(t) ? rr(t, e(0, t.length), n) : Kn(r, function(e) {
                return (o + (e - t) % o) % o + t
              })
            },
            wrapYoyo: function e(t, n, r) {
              var o = n - t,
                i = 2 * o;
              return Nt(t) ? rr(t, e(0, t.length - 1), n) : Kn(r, function(e) {
                return t + ((e = (i + (e - t) % i) % i || 0) > o ? i - e : e)
              })
            },
            distribute: Jn,
            random: nr,
            snap: tr,
            normalize: function(e, t, n) {
              return ir(e, t, 0, 1, n)
            },
            getUnit: Hn,
            clamp: function(e, t, n) {
              return Kn(n, function(n) {
                return Xn(e, t, n)
              })
            },
            splitColor: hr,
            toArray: Gn,
            selector: Yn,
            mapRange: ir,
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
                var s, a, l, u, c, d = Ot(t),
                  f = {};
                if (!0 === r && (o = 1) && (r = null), d) t = {
                  p: t
                }, n = {
                  p: n
                };
                else if (Nt(t) && !Nt(n)) {
                  for (l = [], u = t.length, c = u - 2, a = 1; a < u; a++) l.push(e(t[a - 1], t[a]));
                  u--, i = function(e) {
                    e *= u;
                    var t = Math.min(c, ~~e);
                    return l[t](e - t)
                  }, r = n
                } else o || (t = bn(Nt(t) ? [] : {}, t));
                if (!l) {
                  for (s in n) Vr.call(f, t, s, "get", n[s]);
                  i = function(e) {
                    return to(e, f) || (d ? t.p : t)
                  }
                }
              }
              return Kn(r, i)
            },
            shuffle: Qn
          },
          install: Wt,
          effects: tn,
          ticker: _r,
          updateRoot: Mr.updateRoot,
          plugins: en,
          globalTimeline: et,
          core: {
            PropTween: so,
            globals: Xt,
            Tween: Xr,
            Timeline: Mr,
            Animation: Ir,
            getCache: an,
            _removeLinkedListItem: On,
            reverting: function() {
              return Qe
            },
            context: function(e) {
              return e && Je && (Je.data.push(e), e._ctx = Je), Je
            },
            suppressOverwrites: function(e) {
              return Ye = e
            }
          }
        };
      un("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return yo[e] = Xr[e]
      }), _r.add(Mr.updateRoot), st = yo.to({}, {
        duration: 0
      });
      var go = function(e, t) {
          for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
          return n
        },
        bo = function(e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function(e, n, r) {
              r._onInit = function(e) {
                var r, o;
                if (Ot(n) && (r = {}, un(n, function(e) {
                    return r[e] = 1
                  }), n = r), t) {
                  for (o in r = {}, n) r[o] = t(n[o]);
                  n = r
                }! function(e, t) {
                  var n, r, o, i = e._targets;
                  for (n in t)
                    for (r = i.length; r--;)(o = e._ptLookup[r][n]) && (o = o.d) && (o._pt && (o = go(o, n)), o && o.modifier && o.modifier(t[n], e, i[r], n))
                }(e, n)
              }
            }
          }
        },
        _o = yo.registerPlugin({
          name: "attr",
          init: function(e, t, n, r, o) {
            var i, s, a;
            for (i in this.tween = n, t) a = e.getAttribute(i) || "", (s = this.add(e, "setAttribute", (a || 0) + "", t[i], r, o, 0, 0, i)).op = i, s.b = a, this._props.push(i)
          },
          render: function(e, t) {
            for (var n = t._pt; n;) Qe ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
          }
        }, {
          name: "endArray",
          init: function(e, t) {
            for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
          }
        }, bo("roundProps", er), bo("modifiers"), bo("snap", tr)) || yo;
      Xr.version = Mr.version = _o.version = "3.12.5", ot = 1, Rt() && wr(), xr.Power0, xr.Power1, xr.Power2, xr.Power3, xr.Power4, xr.Linear, xr.Quad, xr.Cubic, xr.Quart, xr.Quint, xr.Strong, xr.Elastic, xr.Back, xr.SteppedEase, xr.Bounce, xr.Sine, xr.Expo, xr.Circ;
      var wo, xo, Co, Oo, jo, Po, So, Eo, ko = {},
        Ro = 180 / Math.PI,
        To = Math.PI / 180,
        Do = Math.atan2,
        No = /([A-Z])/g,
        Io = /(left|right|width|margin|padding|x)/i,
        Mo = /[\s,\(]\S/,
        Lo = {
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
        Vo = function(e, t) {
          return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        Fo = function(e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
        },
        Bo = function(e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t)
        },
        qo = function(e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        },
        Wo = function(e, t, n) {
          return e.style[t] = n
        },
        $o = function(e, t, n) {
          return e.style.setProperty(t, n)
        },
        Ko = function(e, t, n) {
          return e._gsap[t] = n
        },
        Xo = function(e, t, n) {
          return e._gsap.scaleX = e._gsap.scaleY = n
        },
        Ho = function(e, t, n, r, o) {
          var i = e._gsap;
          i.scaleX = i.scaleY = n, i.renderTransform(o, i)
        },
        Zo = function(e, t, n, r, o) {
          var i = e._gsap;
          i[t] = n, i.renderTransform(o, i)
        },
        Uo = "transform",
        Go = Uo + "Origin",
        Yo = function e(t, n) {
          var r = this,
            o = this.target,
            i = o.style,
            s = o._gsap;
          if (t in ko && i) {
            if (this.tfm = this.tfm || {}, "transform" === t) return Lo.transform.split(",").forEach(function(t) {
              return e.call(r, t, n)
            });
            if (~(t = Lo[t] || t).indexOf(",") ? t.split(",").forEach(function(e) {
                return r.tfm[e] = mi(o, e)
              }) : this.tfm[t] = s.x ? s[t] : mi(o, t), t === Go && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(Uo) >= 0) return;
            s.svg && (this.svgo = o.getAttribute("data-svg-origin"), this.props.push(Go, n, "")), t = Uo
          }(i || n) && this.props.push(t, n, i[t])
        },
        Qo = function(e) {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        Jo = function() {
          var e, t, n = this.props,
            r = this.target,
            o = r.style,
            i = r._gsap;
          for (e = 0; e < n.length; e += 3) n[e + 1] ? r[n[e]] = n[e + 2] : n[e + 2] ? o[n[e]] = n[e + 2] : o.removeProperty("--" === n[e].substr(0, 2) ? n[e] : n[e].replace(No, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (e = So()) && e.isStart || o[Uo] || (Qo(o), i.zOrigin && o[Go] && (o[Go] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
          }
        },
        ei = function(e, t) {
          var n = {
            target: e,
            props: [],
            revert: Jo,
            save: Yo
          };
          return e._gsap || _o.core.getCache(e), t && t.split(",").forEach(function(e) {
            return n.save(e)
          }), n
        },
        ti = function(e, t) {
          var n = xo.createElementNS ? xo.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : xo.createElement(e);
          return n && n.style ? n : xo.createElement(e)
        },
        ni = function e(t, n, r) {
          var o = getComputedStyle(t);
          return o[n] || o.getPropertyValue(n.replace(No, "-$1").toLowerCase()) || o.getPropertyValue(n) || !r && e(t, oi(n) || n, 1) || ""
        },
        ri = "O,Moz,ms,Ms,Webkit".split(","),
        oi = function(e, t, n) {
          var r = (t || jo).style,
            o = 5;
          if (e in r && !n) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(ri[o] + e in r););
          return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? ri[o] : "") + e
        },
        ii = function() {
          "undefined" != typeof window && window.document && (wo = window, xo = wo.document, Co = xo.documentElement, jo = ti("div") || {
            style: {}
          }, ti("div"), Uo = oi(Uo), Go = Uo + "Origin", jo.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Eo = !!oi("perspective"), So = _o.core.reverting, Oo = 1)
        },
        si = function e(t) {
          var n, r = ti("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            o = this.parentNode,
            i = this.nextSibling,
            s = this.style.cssText;
          if (Co.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
          } catch (e) {} else this._gsapBBox && (n = this._gsapBBox());
          return o && (i ? o.insertBefore(this, i) : o.appendChild(this)), Co.removeChild(r), this.style.cssText = s, n
        },
        ai = function(e, t) {
          for (var n = t.length; n--;)
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
        },
        li = function(e) {
          var t;
          try {
            t = e.getBBox()
          } catch (n) {
            t = si.call(e, !0)
          }
          return t && (t.width || t.height) || e.getBBox === si || (t = si.call(e, !0)), !t || t.width || t.x || t.y ? t : {
            x: +ai(e, ["x", "cx", "x1"]) || 0,
            y: +ai(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        ui = function(e) {
          return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !li(e))
        },
        ci = function(e, t) {
          if (t) {
            var n, r = e.style;
            t in ko && t !== Go && (t = Uo), r.removeProperty ? ("ms" !== (n = t.substr(0, 2)) && "webkit" !== t.substr(0, 6) || (t = "-" + t), r.removeProperty("--" === n ? t : t.replace(No, "-$1").toLowerCase())) : r.removeAttribute(t)
          }
        },
        di = function(e, t, n, r, o, i) {
          var s = new so(e._pt, t, n, 0, 1, i ? qo : Bo);
          return e._pt = s, s.b = r, s.e = o, e._props.push(n), s
        },
        fi = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        pi = {
          grid: 1,
          flex: 1
        },
        hi = function e(t, n, r, o) {
          var i, s, a, l, u = parseFloat(r) || 0,
            c = (r + "").trim().substr((u + "").length) || "px",
            d = jo.style,
            f = Io.test(n),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            v = "px" === o,
            y = "%" === o;
          if (o === c || !u || fi[o] || fi[c]) return u;
          if ("px" !== c && !v && (u = e(t, n, r, "px")), l = t.getCTM && ui(t), (y || "%" === c) && (ko[n] || ~n.indexOf("adius"))) return i = l ? t.getBBox()[f ? "width" : "height"] : t[h], cn(y ? u / i * m : u / 100 * i);
          if (d[f ? "width" : "height"] = m + (v ? c : o), s = ~n.indexOf("adius") || "em" === o && t.appendChild && !p ? t : t.parentNode, l && (s = (t.ownerSVGElement || {}).parentNode), s && s !== xo && s.appendChild || (s = xo.body), (a = s._gsap) && y && a.width && f && a.time === _r.time && !a.uncache) return cn(u / a.width * m);
          if (!y || "height" !== n && "width" !== n)(y || "%" === c) && !pi[ni(s, "display")] && (d.position = ni(t, "position")), s === t && (d.position = "static"), s.appendChild(jo), i = jo[h], s.removeChild(jo), d.position = "absolute";
          else {
            var g = t.style[n];
            t.style[n] = m + o, i = t[h], g ? t.style[n] = g : ci(t, n)
          }
          return f && y && ((a = an(s)).time = _r.time, a.width = s[h]), cn(v ? i * u / m : i && u ? m / i * u : 0)
        },
        mi = function(e, t, n, r) {
          var o;
          return Oo || ii(), t in Lo && "transform" !== t && ~(t = Lo[t]).indexOf(",") && (t = t.split(",")[0]), ko[t] && "transform" !== t ? (o = Si(e, r), o = "transformOrigin" !== t ? o[t] : o.svg ? o.origin : Ei(ni(e, Go)) + " " + o.zOrigin + "px") : (!(o = e.style[t]) || "auto" === o || r || ~(o + "").indexOf("calc(")) && (o = _i[t] && _i[t](e, t, n) || ni(e, t) || ln(e, t) || ("opacity" === t ? 1 : 0)), n && !~(o + "").trim().indexOf(" ") ? hi(e, t, o, n) + n : o
        },
        vi = function(e, t, n, r) {
          if (!n || "none" === n) {
            var o = oi(t, e, 1),
              i = o && ni(e, o, 1);
            i && i !== n ? (t = o, n = i) : "borderColor" === t && (n = ni(e, "borderTopColor"))
          }
          var s, a, l, u, c, d, f, p, h, m, v, y = new so(this._pt, e.style, t, 0, 1, eo),
            g = 0,
            b = 0;
          if (y.b = n, y.e = r, n += "", "auto" == (r += "") && (d = e.style[t], e.style[t] = r, r = ni(e, t) || r, d ? e.style[t] = d : ci(e, t)), br(s = [n, r]), r = s[1], l = (n = s[0]).match(Lt) || [], (r.match(Lt) || []).length) {
            for (; a = Lt.exec(r);) f = a[0], h = r.substring(g, a.index), c ? c = (c + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (c = 1), f !== (d = l[b++] || "") && (u = parseFloat(d) || 0, v = d.substr((u + "").length), "=" === f.charAt(1) && (f = fn(u, f) + v), p = parseFloat(f), m = f.substr((p + "").length), g = Lt.lastIndex - m.length, m || (m = m || ht.units[t] || v, g === r.length && (r += m, y.e += m)), v !== m && (u = hi(e, t, d, m) || 0), y._pt = {
              _next: y._pt,
              p: h || 1 === b ? h : ",",
              s: u,
              c: p - u,
              m: c && c < 4 || "zIndex" === t ? Math.round : 0
            });
            y.c = g < r.length ? r.substring(g, r.length) : ""
          } else y.r = "display" === t && "none" === r ? qo : Bo;
          return zt.test(r) && (y.e = 0), this._pt = y, y
        },
        yi = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        gi = function(e) {
          var t = e.split(" "),
            n = t[0],
            r = t[1] || "50%";
          return "top" !== n && "bottom" !== n && "left" !== r && "right" !== r || (e = n, n = r, r = e), t[0] = yi[n] || n, t[1] = yi[r] || r, t.join(" ")
        },
        bi = function(e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n, r, o, i = t.t,
              s = i.style,
              a = t.u,
              l = i._gsap;
            if ("all" === a || !0 === a) s.cssText = "", r = 1;
            else
              for (o = (a = a.split(",")).length; --o > -1;) n = a[o], ko[n] && (r = 1, n = "transformOrigin" === n ? Go : Uo), ci(i, n);
            r && (ci(i, Uo), l && (l.svg && i.removeAttribute("transform"), Si(i, 1), l.uncache = 1, Qo(s)))
          }
        },
        _i = {
          clearProps: function(e, t, n, r, o) {
            if ("isFromStart" !== o.data) {
              var i = e._pt = new so(e._pt, t, n, 0, 0, bi);
              return i.u = r, i.pr = -10, i.tween = o, e._props.push(n), 1
            }
          }
        },
        wi = [1, 0, 0, 1, 0, 0],
        xi = {},
        Ci = function(e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        },
        Oi = function(e) {
          var t = ni(e, Uo);
          return Ci(t) ? wi : t.substr(7).match(Mt).map(cn)
        },
        ji = function(e, t) {
          var n, r, o, i, s = e._gsap || an(e),
            a = e.style,
            l = Oi(e);
          return s.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(o = e.transform.baseVal.consolidate().matrix).a, o.b, o.c, o.d, o.e, o.f]).join(",") ? wi : l : (l !== wi || e.offsetParent || e === Co || s.svg || (o = a.display, a.display = "block", (n = e.parentNode) && e.offsetParent || (i = 1, r = e.nextElementSibling, Co.appendChild(e)), l = Oi(e), o ? a.display = o : ci(e, "display"), i && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : Co.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        Pi = function(e, t, n, r, o, i) {
          var s, a, l, u = e._gsap,
            c = o || ji(e, !0),
            d = u.xOrigin || 0,
            f = u.yOrigin || 0,
            p = u.xOffset || 0,
            h = u.yOffset || 0,
            m = c[0],
            v = c[1],
            y = c[2],
            g = c[3],
            b = c[4],
            _ = c[5],
            w = t.split(" "),
            x = parseFloat(w[0]) || 0,
            C = parseFloat(w[1]) || 0;
          n ? c !== wi && (a = m * g - v * y) && (l = x * (-v / a) + C * (m / a) - (m * _ - v * b) / a, x = x * (g / a) + C * (-y / a) + (y * _ - g * b) / a, C = l) : (x = (s = li(e)).x + (~w[0].indexOf("%") ? x / 100 * s.width : x), C = s.y + (~(w[1] || w[0]).indexOf("%") ? C / 100 * s.height : C)), r || !1 !== r && u.smooth ? (b = x - d, _ = C - f, u.xOffset = p + (b * m + _ * y) - b, u.yOffset = h + (b * v + _ * g) - _) : u.xOffset = u.yOffset = 0, u.xOrigin = x, u.yOrigin = C, u.smooth = !!r, u.origin = t, u.originIsAbsolute = !!n, e.style[Go] = "0px 0px", i && (di(i, u, "xOrigin", d, x), di(i, u, "yOrigin", f, C), di(i, u, "xOffset", p, u.xOffset), di(i, u, "yOffset", h, u.yOffset)), e.setAttribute("data-svg-origin", x + " " + C)
        },
        Si = function(e, t) {
          var n = e._gsap || new Nr(e);
          if ("x" in n && !t && !n.uncache) return n;
          var r, o, i, s, a, l, u, c, d, f, p, h, m, v, y, g, b, _, w, x, C, O, j, P, S, E, k, R, T, D, N, I, M = e.style,
            L = n.scaleX < 0,
            A = "px",
            z = "deg",
            V = getComputedStyle(e),
            F = ni(e, Go) || "0";
          return r = o = i = l = u = c = d = f = p = 0, s = a = 1, n.svg = !(!e.getCTM || !ui(e)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (M[Uo] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[Uo] ? V[Uo] : "")), M.scale = M.rotate = M.translate = "none"), v = ji(e, n.svg), n.svg && (n.uncache ? (S = e.getBBox(), F = n.xOrigin - S.x + "px " + (n.yOrigin - S.y) + "px", P = "") : P = !t && e.getAttribute("data-svg-origin"), Pi(e, P || F, !!P || n.originIsAbsolute, !1 !== n.smooth, v)), h = n.xOrigin || 0, m = n.yOrigin || 0, v !== wi && (_ = v[0], w = v[1], x = v[2], C = v[3], r = O = v[4], o = j = v[5], 6 === v.length ? (s = Math.sqrt(_ * _ + w * w), a = Math.sqrt(C * C + x * x), l = _ || w ? Do(w, _) * Ro : 0, (d = x || C ? Do(x, C) * Ro + l : 0) && (a *= Math.abs(Math.cos(d * To))), n.svg && (r -= h - (h * _ + m * x), o -= m - (h * w + m * C))) : (I = v[6], D = v[7], k = v[8], R = v[9], T = v[10], N = v[11], r = v[12], o = v[13], i = v[14], u = (y = Do(I, T)) * Ro, y && (P = O * (g = Math.cos(-y)) + k * (b = Math.sin(-y)), S = j * g + R * b, E = I * g + T * b, k = O * -b + k * g, R = j * -b + R * g, T = I * -b + T * g, N = D * -b + N * g, O = P, j = S, I = E), c = (y = Do(-x, T)) * Ro, y && (g = Math.cos(-y), N = C * (b = Math.sin(-y)) + N * g, _ = P = _ * g - k * b, w = S = w * g - R * b, x = E = x * g - T * b), l = (y = Do(w, _)) * Ro, y && (P = _ * (g = Math.cos(y)) + w * (b = Math.sin(y)), S = O * g + j * b, w = w * g - _ * b, j = j * g - O * b, _ = P, O = S), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), s = cn(Math.sqrt(_ * _ + w * w + x * x)), a = cn(Math.sqrt(j * j + I * I)), y = Do(O, j), d = Math.abs(y) > 2e-4 ? y * Ro : 0, p = N ? 1 / (N < 0 ? -N : N) : 0), n.svg && (P = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Ci(ni(e, Uo)), P && e.setAttribute("transform", P))), Math.abs(d) > 90 && Math.abs(d) < 270 && (L ? (s *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, d += d <= 0 ? 180 : -180)), t = t || n.uncache, n.x = r - ((n.xPercent = r && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + A, n.y = o - ((n.yPercent = o && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-o) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + A, n.z = i + A, n.scaleX = cn(s), n.scaleY = cn(a), n.rotation = cn(l) + z, n.rotationX = cn(u) + z, n.rotationY = cn(c) + z, n.skewX = d + z, n.skewY = f + z, n.transformPerspective = p + A, (n.zOrigin = parseFloat(F.split(" ")[2]) || !t && n.zOrigin || 0) && (M[Go] = Ei(F)), n.xOffset = n.yOffset = 0, n.force3D = ht.force3D, n.renderTransform = n.svg ? Mi : Eo ? Ii : Ri, n.uncache = 0, n
        },
        Ei = function(e) {
          return (e = e.split(" "))[0] + " " + e[1]
        },
        ki = function(e, t, n) {
          var r = Hn(t);
          return cn(parseFloat(t) + parseFloat(hi(e, "x", n + "px", r))) + r
        },
        Ri = function(e, t) {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Ii(e, t)
        },
        Ti = "0deg",
        Di = "0px",
        Ni = ") ",
        Ii = function(e, t) {
          var n = t || this,
            r = n.xPercent,
            o = n.yPercent,
            i = n.x,
            s = n.y,
            a = n.z,
            l = n.rotation,
            u = n.rotationY,
            c = n.rotationX,
            d = n.skewX,
            f = n.skewY,
            p = n.scaleX,
            h = n.scaleY,
            m = n.transformPerspective,
            v = n.force3D,
            y = n.target,
            g = n.zOrigin,
            b = "",
            _ = "auto" === v && e && 1 !== e || !0 === v;
          if (g && (c !== Ti || u !== Ti)) {
            var w, x = parseFloat(u) * To,
              C = Math.sin(x),
              O = Math.cos(x);
            x = parseFloat(c) * To, w = Math.cos(x), i = ki(y, i, C * w * -g), s = ki(y, s, -Math.sin(x) * -g), a = ki(y, a, O * w * -g + g)
          }
          m !== Di && (b += "perspective(" + m + Ni), (r || o) && (b += "translate(" + r + "%, " + o + "%) "), (_ || i !== Di || s !== Di || a !== Di) && (b += a !== Di || _ ? "translate3d(" + i + ", " + s + ", " + a + ") " : "translate(" + i + ", " + s + Ni), l !== Ti && (b += "rotate(" + l + Ni), u !== Ti && (b += "rotateY(" + u + Ni), c !== Ti && (b += "rotateX(" + c + Ni), d === Ti && f === Ti || (b += "skew(" + d + ", " + f + Ni), 1 === p && 1 === h || (b += "scale(" + p + ", " + h + Ni), y.style[Uo] = b || "translate(0, 0)"
        },
        Mi = function(e, t) {
          var n, r, o, i, s, a = t || this,
            l = a.xPercent,
            u = a.yPercent,
            c = a.x,
            d = a.y,
            f = a.rotation,
            p = a.skewX,
            h = a.skewY,
            m = a.scaleX,
            v = a.scaleY,
            y = a.target,
            g = a.xOrigin,
            b = a.yOrigin,
            _ = a.xOffset,
            w = a.yOffset,
            x = a.forceCSS,
            C = parseFloat(c),
            O = parseFloat(d);
          f = parseFloat(f), p = parseFloat(p), (h = parseFloat(h)) && (p += h = parseFloat(h), f += h), f || p ? (f *= To, p *= To, n = Math.cos(f) * m, r = Math.sin(f) * m, o = Math.sin(f - p) * -v, i = Math.cos(f - p) * v, p && (h *= To, s = Math.tan(p - h), o *= s = Math.sqrt(1 + s * s), i *= s, h && (s = Math.tan(h), n *= s = Math.sqrt(1 + s * s), r *= s)), n = cn(n), r = cn(r), o = cn(o), i = cn(i)) : (n = m, i = v, r = o = 0), (C && !~(c + "").indexOf("px") || O && !~(d + "").indexOf("px")) && (C = hi(y, "x", c, "px"), O = hi(y, "y", d, "px")), (g || b || _ || w) && (C = cn(C + g - (g * n + b * o) + _), O = cn(O + b - (g * r + b * i) + w)), (l || u) && (s = y.getBBox(), C = cn(C + l / 100 * s.width), O = cn(O + u / 100 * s.height)), s = "matrix(" + n + "," + r + "," + o + "," + i + "," + C + "," + O + ")", y.setAttribute("transform", s), x && (y.style[Uo] = s)
        },
        Li = function(e, t, n, r, o) {
          var i, s, a = 360,
            l = Ot(o),
            u = parseFloat(o) * (l && ~o.indexOf("rad") ? Ro : 1) - r,
            c = r + u + "deg";
          return l && ("short" === (i = o.split("_")[1]) && (u %= a) !== u % 180 && (u += u < 0 ? a : -360), "cw" === i && u < 0 ? u = (u + 36e9) % a - ~~(u / a) * a : "ccw" === i && u > 0 && (u = (u - 36e9) % a - ~~(u / a) * a)), e._pt = s = new so(e._pt, t, n, r, u, zo), s.e = c, s.u = "deg", e._props.push(n), s
        },
        Ai = function(e, t) {
          for (var n in t) e[n] = t[n];
          return e
        },
        zi = function(e, t, n) {
          var r, o, i, s, a, l, u, c = Ai({}, n._gsap),
            d = n.style;
          for (o in c.svg ? (i = n.getAttribute("transform"), n.setAttribute("transform", ""), d[Uo] = t, r = Si(n, 1), ci(n, Uo), n.setAttribute("transform", i)) : (i = getComputedStyle(n)[Uo], d[Uo] = t, r = Si(n, 1), d[Uo] = i), ko)(i = c[o]) !== (s = r[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (a = Hn(i) !== (u = Hn(s)) ? hi(n, o, i, u) : parseFloat(i), l = parseFloat(s), e._pt = new so(e._pt, r, o, a, l - a, Ao), e._pt.u = u || 0, e._props.push(o));
          Ai(r, c)
        };
      un("padding,margin,Width,Radius", function(e, t) {
        var n = "Top",
          r = "Right",
          o = "Bottom",
          i = "Left",
          s = (t < 3 ? [n, r, o, i] : [n + i, n + r, o + r, o + i]).map(function(n) {
            return t < 2 ? e + n : "border" + n + e
          });
        _i[t > 1 ? "border" + e : e] = function(e, t, n, r, o) {
          var i, a;
          if (arguments.length < 4) return i = s.map(function(t) {
            return mi(e, t, n)
          }), 5 === (a = i.join(" ")).split(i[0]).length ? i[0] : a;
          i = (r + "").split(" "), a = {}, s.forEach(function(e, t) {
            return a[e] = i[t] = i[t] || i[(t - 1) / 2 | 0]
          }), e.init(t, a, o)
        }
      });
      var Vi, Fi, Bi = {
        name: "css",
        register: ii,
        targetTest: function(e) {
          return e.style && e.nodeType
        },
        init: function(e, t, n, r, o) {
          var i, s, a, l, u, c, d, f, p, h, m, v, y, g, b, _, w = this._props,
            x = e.style,
            C = n.vars.startAt;
          for (d in Oo || ii(), this.styles = this.styles || ei(e), _ = this.styles.props, this.tween = n, t)
            if ("autoRound" !== d && (s = t[d], !en[d] || !Fr(d, t, n, r, e, o)))
              if (u = typeof s, c = _i[d], "function" === u && (u = typeof(s = s.call(n, r, e, o))), "string" === u && ~s.indexOf("random(") && (s = or(s)), c) c(this, e, d, s, n) && (b = 1);
              else if ("--" === d.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(d) + "").trim(), s += "", yr.lastIndex = 0, yr.test(i) || (f = Hn(i), p = Hn(s)), p ? f !== p && (i = hi(e, d, i, p) + p) : f && (s += f), this.add(x, "setProperty", i, s, r, o, 0, 0, d), w.push(d), _.push(d, 0, x[d]);
          else if ("undefined" !== u) {
            if (C && d in C ? (i = "function" == typeof C[d] ? C[d].call(n, r, e, o) : C[d], Ot(i) && ~i.indexOf("random(") && (i = or(i)), Hn(i + "") || "auto" === i || (i += ht.units[d] || Hn(mi(e, d)) || ""), "=" === (i + "").charAt(1) && (i = mi(e, d))) : i = mi(e, d), l = parseFloat(i), (h = "string" === u && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), d in Lo && ("autoAlpha" === d && (1 === l && "hidden" === mi(e, "visibility") && a && (l = 0), _.push("visibility", 0, x.visibility), di(this, x, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== d && "transform" !== d && ~(d = Lo[d]).indexOf(",") && (d = d.split(",")[0])), m = d in ko)
              if (this.styles.save(d), v || ((y = e._gsap).renderTransform && !t.parseTransform || Si(e, t.parseTransform), g = !1 !== t.smoothOrigin && y.smooth, (v = this._pt = new so(this._pt, x, Uo, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === d) this._pt = new so(this._pt, y, "scaleY", y.scaleY, (h ? fn(y.scaleY, h + a) : a) - y.scaleY || 0, Ao), this._pt.u = 0, w.push("scaleY", d), d += "X";
              else {
                if ("transformOrigin" === d) {
                  _.push(Go, 0, x[Go]), s = gi(s), y.svg ? Pi(e, s, 0, g, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== y.zOrigin && di(this, y, "zOrigin", y.zOrigin, p), di(this, x, d, Ei(i), Ei(s)));
                  continue
                }
                if ("svgOrigin" === d) {
                  Pi(e, s, 1, g, 0, this);
                  continue
                }
                if (d in xi) {
                  Li(this, y, d, l, h ? fn(l, h + s) : s);
                  continue
                }
                if ("smoothOrigin" === d) {
                  di(this, y, "smooth", y.smooth, s);
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
            else d in x || (d = oi(d) || d);
            if (m || (a || 0 === a) && (l || 0 === l) && !Mo.test(s) && d in x) a || (a = 0), (f = (i + "").substr((l + "").length)) !== (p = Hn(s) || (d in ht.units ? ht.units[d] : f)) && (l = hi(e, d, i, p)), this._pt = new so(this._pt, m ? y : x, d, l, (h ? fn(l, h + a) : a) - l, m || "px" !== p && "zIndex" !== d || !1 === t.autoRound ? Ao : Fo), this._pt.u = p || 0, f !== p && "%" !== p && (this._pt.b = i, this._pt.r = Vo);
            else if (d in x) vi.call(this, e, d, i, h ? h + s : s);
            else if (d in e) this.add(e, d, i || e[d], h ? h + s : s, r, o);
            else if ("parseTransform" !== d) {
              $t(d, s);
              continue
            }
            m || (d in x ? _.push(d, 0, x[d]) : _.push(d, 1, i || e[d])), w.push(d)
          }
          b && io(this)
        },
        render: function(e, t) {
          if (t.tween._time || !So())
            for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
          else t.styles.revert()
        },
        get: mi,
        aliases: Lo,
        getSetter: function(e, t, n) {
          var r = Lo[t];
          return r && r.indexOf(",") < 0 && (t = r), t in ko && t !== Go && (e._gsap.x || mi(e, "x")) ? n && Po === n ? "scale" === t ? Xo : Ko : (Po = n || {}) && ("scale" === t ? Ho : Zo) : e.style && !St(e.style[t]) ? Wo : ~t.indexOf("-") ? $o : Yr(e, t)
        },
        core: {
          _removeProperty: ci,
          _getMatrix: ji
        }
      };
      _o.utils.checkPrefix = oi, _o.core.getStyleSaver = ei, Fi = un("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Vi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
        ko[e] = 1
      }), un(Vi, function(e) {
        ht.units[e] = "deg", xi[e] = 1
      }), Lo[Fi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Vi, un("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
        var t = e.split(":");
        Lo[t[1]] = Fi[t[0]]
      }), un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
        ht.units[e] = "px"
      }), _o.registerPlugin(Bi);
      var qi = _o.registerPlugin(Bi) || _o;
      qi.core.Tween;
      let Wi = "undefined" != typeof document ? q.useLayoutEffect : q.useEffect,
        $i = e => e && !Array.isArray(e) && "object" == typeof e,
        Ki = [],
        Xi = {},
        Hi = qi;
      const Zi = (e, t = Ki) => {
        let n = Xi;
        $i(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : Ki) : $i(t) && (n = t, t = "dependencies" in n ? n.dependencies : Ki), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: o
        } = n, i = (0, q.useRef)(!1), s = (0, q.useRef)(Hi.context(() => {}, r)), a = (0, q.useRef)(e => s.current.add(null, e)), l = t && t.length && !o;
        return l && Wi(() => (i.current = !0, () => s.current.revert()), Ki), Wi(() => {
          if (e && s.current.add(e, r), !l || !i.current) return () => s.current.revert()
        }, t), {
          context: s.current,
          contextSafe: a.current
        }
      };
      Zi.register = e => {
        Hi = e
      }, Zi.headless = !0;
      const Ui = {
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

      function Gi(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function Yi(e, t, n, r = .15) {
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -Gi(t - e, n - t, r) + t : e > n ? +Gi(e - n, n - t, r) + n : e
      }

      function Qi(e, t, n) {
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

      function Ji(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function es(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ji(Object(n), !0).forEach(function(t) {
            Qi(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ji(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      const ts = {
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

      function ns(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const rs = ["enter", "leave"];
      const os = ["gotpointercapture", "lostpointercapture"];

      function is(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = os.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function ss(e) {
        return "touches" in e
      }

      function as(e) {
        return ss(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function ls(e) {
        return ss(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function us(e, t) {
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
        return us(n, r)
      }

      function ds(e) {
        const t = ls(e);
        return ss(e) ? t.identifier : t.pointerId
      }

      function fs(e) {
        const t = ls(e);
        return [t.clientX, t.clientY]
      }

      function ps(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function hs(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function ms() {}

      function vs(...e) {
        return 0 === e.length ? ms : 1 === e.length ? e[0] : function() {
          let t;
          for (const n of e) t = n.apply(this, arguments) || t;
          return t
        }
      }

      function ys(e, t) {
        return Object.assign({}, t, e || {})
      }
      class gs {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? hs(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            Ui.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, s] = t._movement, [a, l] = n.threshold, {
            _step: u,
            values: c
          } = t;
          if (n.hasCustomTransform ? (!1 === u[0] && (u[0] = Math.abs(i) >= a && c[0]), !1 === u[1] && (u[1] = Math.abs(s) >= l && c[1])) : (!1 === u[0] && (u[0] = Math.abs(i) >= a && Math.sign(i) * a), !1 === u[1] && (u[1] = Math.abs(s) >= l && Math.sign(s) * l)), t.intentional = !1 !== u[0] || !1 !== u[1], !t.intentional) return;
          const d = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = c;
            d[0] = !1 !== u[0] ? e - u[0] : 0, d[1] = !1 !== u[1] ? t - u[1] : 0
          } else d[0] = !1 !== u[0] ? i - u[0] : 0, d[1] = !1 !== u[1] ? s - u[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = hs(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [h, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [h < v ? -1 : h > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && n.rubberband || [0, 0];
          if (t.offset = function(e, [t, n], [r, o]) {
              const [
                [i, s],
                [a, l]
              ] = e;
              return [Yi(t, i, s, r), Yi(n, a, l, o)]
            }(t._bounds, t.offset, _), t.delta = Ui.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = Ui.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Ui.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(es(es(es({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class bs extends gs {
        constructor(...e) {
          super(...e), Qi(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Ui.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Ui.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[as(e)] : n.axisThreshold;
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
      const _s = e => e,
        ws = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, n) => es(es({}, n.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Ui.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Ui.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || _s
          },
          threshold: e => Ui.toVector(e, 0)
        },
        xs = es(es({}, ws), {}, {
          axis(e, t, {
            axis: n
          }) {
            if (this.lockDirection = "lock" === n, !this.lockDirection) return n
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => xs.bounds(e(t));
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
        Cs = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Os = "undefined" != typeof window && window.document && window.document.createElement;

      function js() {
        return Os && "ontouchstart" in window
      }
      const Ps = {
          isBrowser: Os,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: js(),
          touchscreen: js() || Os && window.navigator.maxTouchPoints > 1,
          pointer: Os && "onpointerdown" in window,
          pointerLock: Os && "exitPointerLock" in window.document
        },
        Ss = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Es = es(es({}, xs), {}, {
          device(e, t, {
            pointer: {
              touch: n = !1,
              lock: r = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = r && Ps.pointerLock, Ps.touch && n ? "touch" : this.pointerLock ? "mouse" : Ps.pointer && !o ? "pointer" : Ps.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: n
          }) {
            if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, Ps.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
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
            const i = Ui.toVector(e, n ? r : o ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = r, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: n = 250
          } = {}) {
            return {
              velocity: this.transform(Ui.toVector(e)),
              distance: this.transform(Ui.toVector(t)),
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
          axisThreshold: e => e ? es(es({}, Ss), e) : Ss,
          keyboardDisplacement: (e = 10) => e
        });

      function ks(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, s] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && s < 0 || n > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Rs = es(es({}, ws), {}, {
          device(e, t, {
            shared: n,
            pointer: {
              touch: r = !1
            } = {}
          }) {
            if (n.target && !Ps.touch && Ps.gesture) return "gesture";
            if (Ps.touch && r) return "touch";
            if (Ps.touchscreen) {
              if (Ps.pointer) return "pointer";
              if (Ps.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: n = {},
            angleBounds: r = {}
          }) {
            const o = e => {
                const t = ys(hs(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = ys(hs(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof n && "function" != typeof r ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, Ui.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Ts = es(es({}, xs), {}, {
          mouseOnly: (e = !0) => e
        }),
        Ds = xs,
        Ns = xs,
        Is = es(es({}, xs), {}, {
          mouseOnly: (e = !0) => e
        }),
        Ms = new Map,
        Ls = new Map;

      function As(e) {
        Ms.set(e.key, e.engine), Ls.set(e.key, e.resolver)
      }
      const zs = {
          key: "drag",
          engine: class extends bs {
            constructor(...e) {
              super(...e), Qi(this, "ingKey", "dragging")
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
                e._bounds = xs.bounds(r)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = ds(e), n._pointerActive = !0, this.computeValues(fs(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== as(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = ds(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = fs(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Ui.sub(o, t._values), this.computeValues(o)), Ui.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = ds(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= n.tapsThreshold && i <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
              else {
                const [e, r] = t._delta, [o, i] = t._movement, [s, a] = n.swipe.velocity, [l, u] = n.swipe.distance, c = n.swipe.duration;
                if (t.elapsedTime < c) {
                  const n = Math.abs(e / t.timeDelta),
                    c = Math.abs(r / t.timeDelta);
                  n > s && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), c > a && Math.abs(i) > u && (t.swipe[1] = Math.sign(r))
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
              const t = Cs[e.key];
              if (t) {
                const n = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, Ui.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Cs && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Es
        },
        Vs = {
          key: "hover",
          engine: class extends bs {
            constructor(...e) {
              super(...e), Qi(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(fs(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = fs(e);
              t._movement = t._delta = Ui.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Is
        },
        Fs = {
          key: "move",
          engine: class extends bs {
            constructor(...e) {
              super(...e), Qi(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(fs(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = fs(e),
                n = this.state;
              n._delta = Ui.sub(t, n._values), Ui.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Ts
        },
        Bs = {
          key: "pinch",
          engine: class extends gs {
            constructor(...e) {
              super(...e), Qi(this, "ingKey", "pinching"), Qi(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? Ui.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
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
              const o = us(...Array.from(n.values()));
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
              const n = us(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = Ui.sub(t._movement, n), this.compute(e), this.emit()
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
              t._delta = [-ps(e)[1] / 100 * t.offset[0], 0], Ui.addTo(t._movement, t._delta), ks(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Rs
        },
        qs = {
          key: "scroll",
          engine: class extends bs {
            constructor(...e) {
              super(...e), Qi(this, "ingKey", "scrolling")
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
              t._delta = Ui.sub(n, t._values), Ui.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Ds
        },
        Ws = {
          key: "wheel",
          engine: class extends bs {
            constructor(...e) {
              super(...e), Qi(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = ps(e), Ui.addTo(t._movement, t._delta), ks(t), this.compute(e), this.emit()
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
      const $s = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Ps.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Ks = ["target", "eventOptions", "window", "enabled", "transform"];

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
          Qi(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const n = ts[e];
              return e + (n && n[t] || t)
            }(t, n),
            a = es(es({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class Zs {
        constructor() {
          Qi(this, "_timeouts", new Map)
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
      class Us {
        constructor(e) {
          var t, n;
          Qi(this, "gestures", new Set), Qi(this, "_targetEventStore", new Hs(this)), Qi(this, "gestureEventStores", {}), Qi(this, "gestureTimeoutStores", {}), Qi(this, "handlers", {}), Qi(this, "config", {}), Qi(this, "pointerIds", new Set), Qi(this, "touchIds", new Set), Qi(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && Gs(t, "drag"), n.wheel && Gs(t, "wheel"), n.scroll && Gs(t, "scroll"), n.move && Gs(t, "move"), n.pinch && Gs(t, "pinch"), n.hover && Gs(t, "hover")
        }
        setEventIds(e) {
          return ss(e) ? (this.touchIds = new Set(function(e) {
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
              u = function(e, t) {
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
              }(r, Ks);
            if (n.shared = Xs({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, $s), t) {
              const e = Ls.get(t);
              n[t] = Xs(es({
                shared: n.shared
              }, u), e)
            } else
              for (const e in u) {
                const t = Ls.get(e);
                t && (n[e] = Xs(es({
                  shared: n.shared
                }, u[e]), t))
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
                  i = Ys(n, o.eventOptions, !!r);
                o.enabled && new(Ms.get(t))(this, e, t).bind(i)
              }
              const o = Ys(n, t.eventOptions, !!r);
              for (const t in this.nativeHandlers) o(t, "", n => this.nativeHandlers[t](es(es({}, this.state.shared), {}, {
                event: n,
                args: e
              })), void 0, !0)
            }
            for (const e in n) n[e] = vs(...n[e]);
            if (!r) return n;
            for (const e in n) {
              const {
                device: t,
                capture: o,
                passive: i
              } = is(e);
              this._targetEventStore.add(r, t, "", n[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function Gs(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Hs(e, t), e.gestureTimeoutStores[t] = new Zs
      }
      const Ys = (e, t, n) => (r, o, i, s = {}, a = !1) => {
          var l, u;
          const c = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            d = null !== (u = s.passive) && void 0 !== u ? u : t.passive;
          let f = a ? r : function(e, t = "", n = !1) {
            const r = ts[e],
              o = r && r[t] || t;
            return "on" + ns(e) + ns(o) + (function(e = !1, t) {
              return e && !rs.includes(t)
            }(n, o) ? "Capture" : "")
          }(r, o, c);
          n && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        Qs = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Js(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!Ms.has(r)) return;
        const s = n + "Start",
          a = n + "End";
        o[r] = e => {
          let r;
          return e.first && s in t && t[s](e), n in t && (r = t[n](e)), e.last && a in t && t[a](e), r
        }, i[r] = i[r] || {}
      }

      function ea(e, t = {}, n, r) {
        const o = $().useMemo(() => new Us(e), []);
        if (o.applyHandlers(e, r), o.applyConfig(t, n), $().useEffect(o.effect.bind(o)), $().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function ta(e, t) {
        const n = ([zs, Bs, qs, Ws, Fs, Vs].forEach(As), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) Qs.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return Js(o, n, "onDrag", "drag", i, t), Js(o, n, "onWheel", "wheel", i, t), Js(o, n, "onScroll", "scroll", i, t), Js(o, n, "onPinch", "pinch", i, t), Js(o, n, "onMove", "move", i, t), Js(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return ea(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      const na = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, n) => {
        e.onload = () => t(), e.onerror = n
      }), ra = ([e, t]) => ({
        x: e,
        y: t
      }), oa = (e, t) => (e.x = t.x, e.y = t.y, e), ia = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, sa = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), aa = (e, t, n) => Math.min(Math.max(e, t), n);

      function la() {
        return la = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, la.apply(null, arguments)
      }
      var ua = ["shift", "alt", "meta", "mod", "ctrl"],
        ca = {
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

      function da(e) {
        return (e && ca[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function fa(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function pa(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map(function(e) {
          return da(e)
        });
        return la({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter(function(e) {
            return !ua.includes(e)
          }),
          description: n,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && va([da(e.key), da(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && ya([da(e.key), da(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        ha.clear()
      });
      var ha = new Set;

      function ma(e) {
        return Array.isArray(e)
      }

      function va(e) {
        var t = Array.isArray(e) ? e : [e];
        ha.has("meta") && ha.forEach(function(e) {
          return ! function(e) {
            return ua.includes(e)
          }(e) && ha.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return ha.add(e.toLowerCase())
        })
      }

      function ya(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? ha.clear() : t.forEach(function(e) {
          return ha.delete(e.toLowerCase())
        })
      }

      function ga(e, t) {
        void 0 === t && (t = !1);
        var n, r, o = e.target,
          i = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, ma(t) ? Boolean(r && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        })) : Boolean(r && t && t)
      }
      var ba = (0, q.createContext)(void 0);

      function _a(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, j.jsx)(ba.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function wa(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(n, r) {
          return n && wa(e[r], t[r])
        }, !0) : e === t
      }
      var xa = (0, q.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Ca = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, q.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            i = o[0],
            s = o[1],
            a = (0, q.useState)([]),
            l = a[0],
            u = a[1],
            c = (0, q.useCallback)(function(e) {
              s(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            d = (0, q.useCallback)(function(e) {
              s(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, q.useCallback)(function(e) {
              s(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            p = (0, q.useCallback)(function(e) {
              u(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, q.useCallback)(function(e) {
              u(function(t) {
                return t.filter(function(t) {
                  return !wa(t, e)
                })
              })
            }, []);
          return (0, j.jsx)(xa.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: c,
              disableScope: d,
              toggleScope: f
            },
            children: (0, j.jsx)(_a, {
              addHotkey: p,
              removeHotkey: h,
              children: r
            })
          })
        },
        Oa = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        ja = "undefined" != typeof window ? q.useLayoutEffect : q.useEffect;

      function Pa(e, t, n, r) {
        var o = (0, q.useState)(null),
          i = o[0],
          s = o[1],
          a = (0, q.useRef)(!1),
          l = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          u = ma(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = n instanceof Array ? n : r instanceof Array ? r : void 0,
          d = (0, q.useCallback)(t, null != c ? c : []),
          f = (0, q.useRef)(d);
        f.current = c ? d : t;
        var p = function(e) {
            var t = (0, q.useRef)(void 0);
            return wa(t.current, e) || (t.current = e), t.current
          }(l),
          h = (0, q.useContext)(xa).enabledScopes,
          m = (0, q.useContext)(ba);
        return ja(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !ga(e, ["input", "textarea", "select"]) || ga(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var r = i.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i && !i.contains(r.activeElement)) return void Oa(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != p && p.enableOnContentEditable) && fa(u, null == p ? void 0 : p.splitKey).forEach(function(n) {
                    var r, o = pa(n, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, i = t.alt,
                          s = t.meta,
                          a = t.mod,
                          l = t.shift,
                          u = t.ctrl,
                          c = t.keys,
                          d = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = da(f),
                          g = d.toLowerCase();
                        if (!(null != c && c.includes(y) || null != c && c.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!n) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (a) {
                            if (!h && !p) return !1
                          } else {
                            if (s === !h && "meta" !== g && "os" !== g) return !1;
                            if (u === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (ma(r = c) ? r : r.split(o)).every(function(e) {
                          return ha.has(e.trim().toLowerCase())
                        })) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == p ? void 0 : p.enabled)) return void Oa(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              r = function(e) {
                void 0 !== e.key && (va(da(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (ya(da(e.code)), a.current = !1, null != p && p.keyup && n(e, !0))
              },
              s = i || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), m && fa(u, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return m.addHotkey(pa(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), m && fa(u, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return m.removeHotkey(pa(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [i, u, p, h]), s
      }

      function Sa(e) {
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

      function Ea(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function ka(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ea(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Sa(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ea(Object(n)).forEach(function(t) {
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
      var Ta = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Da = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ka(ka({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Ta(u, r, e.defaultVariants) && (n += " " + c);
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
        Na = Da({
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
        Ia = Da({
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
      qi.registerPlugin(Zi);
      const Ma = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        La = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Aa = (0, K.Tm)("var(--foundry_1a74xwb0)");
      var za = n(76455),
        Va = n(72267),
        Fa = n(6442);
      const Ba = ({
          children: e,
          messages: t,
          locale: n,
          fallback: r
        }) => {
          const [o, i] = (0, q.useState)(null);
          return (0, q.useEffect)(() => {
            (t?.[n] ?? t["en-US"]).then(e => {
              i(e.default)
            })
          }, [n]), o ? (0, j.jsx)(za.A, {
            locale: n,
            messages: o,
            children: e
          }) : r ?? null
        },
        qa = {
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
      class Wa {
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
            n = this.slide.panAreaSize["x" === e ? "w" : "h"],
            r = this.slide.panAreaSize.safeArea["x" === e ? "w" : "h"] + 2 * this.slide.panAreaSize.safeArea[e];
          this.center[e] = this.currZoomLevel === this.slide.zoomLevels.initial ? Math.round((n - t - (n - r)) / 2) : Math.round((n - t) / 2), this.max[e] = t > n ? Math.round(n - t) : this.center[e], this.min[e] = t > n ? 0 : this.center[e]
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
          return n ? t : aa(t, this.max[e], this.min[e])
        }
      }
      class $a {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = sa(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            n = e.h / this.elementSize.h;
          return sa(n < t ? n : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return sa(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class Ka {
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
      class Xa {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", oa(this.startPan, this.slide.pan)
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
          })(this.prevTap, r) < 25 && this.slide.tapHandler.doubleTap(r, o)) : (oa(this.prevTap, {
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
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.h / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class Ha {
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
          e.src = this.thumbnail.currentSrc ?? "", await na(e)
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
              n = this.slide.panAreaSize.w / e,
              r = this.slide.panAreaSize.h / t;
            this.width = r > n ? this.slide.panAreaSize.w : e * r, this.height = n > r ? this.slide.panAreaSize.h : t * n
          }
        }
      }
      class Za {
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
      class Ga extends Ka {
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
      class Ya {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = ra(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, oa(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const n = this.slide.zoomLevels.min,
            r = this.slide.zoomLevels.max;
          this.zoomPoint = ra(e);
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
            i = oa({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = oa({
            x: 0,
            y: 0
          }, i);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, oa(this.startPan, i)), r && (s = {
            x: this.calculatePanForZoomLevel("x", n),
            y: this.calculatePanForZoomLevel("y", n)
          }), this.slide.setZoomLevel(n, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((a = s).x !== l.x || a.y !== l.y || r || o) && (oa(this.slide.pan, s), this.slide.setZoomLevel(n))
        }
      }
      class Qa {
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
              n = e.getBoundingClientRect();
            return {
              x: n.left + parseFloat(t.paddingLeft),
              y: n.top + parseFloat(t.paddingTop),
              w: n.width - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight),
              h: n.height - parseFloat(t.paddingTop) - parseFloat(t.paddingBottom)
            }
          })(this.safeAreaTarget) : {
            w: this.w,
            h: this.h,
            x: 0,
            y: 0
          }
        }
      }
      class Ja extends Ka {
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
          zoomLevelOptions: n,
          actionOptions: r,
          panAreaOptions: o,
          dragOptions: i
        }) {
          super(), this.width = e, this.height = t, this.opener = new Ha({
            slide: this
          }), this.bounds = new Wa({
            slide: this
          }), this.dragHandler = new Xa({
            options: i,
            slide: this
          }), this.scrollWheel = new Za({
            slide: this
          }), this.zoomHandler = new Ya({
            slide: this
          }), this.zoomLevels = new $a({
            options: n,
            slide: this
          }), this.tapHandler = new Ga({
            options: r,
            slide: this
          }), this.panAreaSize = new Qa({
            options: o
          })
        }
        setup(e, t, n) {
          this.panAreaSize.setup(n), this.opener.setup(e, t), this.dragHandler.setup(), this.closing = !1, this.width = this.opener.width, this.height = this.opener.height, this.controlsVisible = !0, this.controlsOpacity = 1, this.calculateSize(), this.bounds.update(this.currZoomLevel)
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
        panTo(e, t, n) {
          this.pan.x = this.bounds.correctPan("x", e, n), this.pan.y = this.bounds.correctPan("y", t, n)
        }
        zoomTo(e, t, n) {
          const r = this.currZoomLevel;
          e = sa(e), n || (e = aa(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, r), this.pan.y = this.calculateZoomToPanOffset("y", t, r), ia(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            n = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(n), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), ia(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), oa(this.pan, this.bounds.center)
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
        calculateZoomToPanOffset(e, t, n) {
          if (0 === this.bounds.max[e] - this.bounds.min[e]) return this.bounds.center[e];
          t || (t = this.getPanAreaCenterPoint()), n || (n = this.zoomLevels.initial);
          const r = this.currZoomLevel / n;
          return this.bounds.correctPan(e, (this.pan[e] - t[e]) * r + t[e])
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
      var el = n(30865);
      const tl = e => "dark" === e ? el.xW.dark : el.xW.light,
        nl = (0, Va.YK)({
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
      var rl = "foundry_bc732x1";
      const ol = (0, q.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: n
      }, r) => (Pa(e, e => n?.(e), [n]), (0, j.jsx)(ze, {
        size: "XS",
        className: (0, ee.$)("foundry_bc732x0", {
          [rl]: t
        }),
        asChild: !0,
        children: (0, j.jsx)("kbd", {
          ref: r,
          children: e
        })
      })));
      var il = Object.defineProperty,
        sl = (e, t) => {
          let n = {};
          for (var r in e) il(n, r, {
            get: e[r],
            enumerable: !0
          });
          return t || il(n, Symbol.toStringTag, {
            value: "Module"
          }), n
        };
      let al = Cl();
      const ll = e => bl(e, al);
      let ul = Cl();
      ll.write = e => bl(e, ul);
      let cl = Cl();
      ll.onStart = e => bl(e, cl);
      let dl = Cl();
      ll.onFrame = e => bl(e, dl);
      let fl = Cl();
      ll.onFinish = e => bl(e, fl);
      let pl = [];
      ll.setTimeout = (e, t) => {
        const n = ll.now() + t,
          r = () => {
            const e = pl.findIndex(e => e.cancel == r);
            ~e && pl.splice(e, 1), yl -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return pl.splice(hl(n), 0, o), yl += 1, _l(), o
      };
      const hl = e => ~(~pl.findIndex(t => t.time > e) || ~pl.length);
      ll.cancel = e => {
        cl.delete(e), dl.delete(e), fl.delete(e), al.delete(e), ul.delete(e)
      }, ll.sync = e => {
        gl = !0, ll.batchedUpdates(e), gl = !1
      }, ll.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, ll.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          cl.delete(n), t = null
        }, r
      };
      let ml = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      ll.use = e => ml = e, ll.now = "undefined" != typeof performance ? () => performance.now() : Date.now, ll.batchedUpdates = e => e(), ll.catch = console.error, ll.frameLoop = "always", ll.advance = () => {
        "demand" !== ll.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : xl()
      };
      let vl = -1,
        yl = 0,
        gl = !1;

      function bl(e, t) {
        gl ? (t.delete(e), e(0)) : (t.add(e), _l())
      }

      function _l() {
        vl < 0 && (vl = 0, "demand" !== ll.frameLoop && ml(wl))
      }

      function wl() {
        ~vl && (ml(wl), ll.batchedUpdates(xl))
      }

      function xl() {
        const e = vl;
        vl = ll.now();
        const t = hl(vl);
        t && (Ol(pl.splice(0, t), e => e.handler()), yl -= t), yl ? (cl.flush(), al.flush(e ? Math.min(64, vl - e) : 16.667), dl.flush(), ul.flush(), fl.flush()) : vl = -1
      }

      function Cl() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            yl += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (yl -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, yl -= t.size, Ol(t, t => t(n) && e.add(t)), yl += e.size, t = e)
          }
        }
      }

      function Ol(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            ll.catch(e)
          }
        })
      }

      function jl() {}
      const Pl = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Sl(e, t) {
        if (Pl.arr(e)) {
          if (!Pl.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      const El = (e, t) => e.forEach(t);

      function kl(e, t, n) {
        if (Pl.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      const Rl = e => Pl.und(e) ? [] : Pl.arr(e) ? e : [e];

      function Tl(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), El(n, t)
        }
      }
      const Dl = (e, ...t) => Tl(e, e => e(...t)),
        Nl = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
      var Il = sl({
        assign: () => Fl,
        colors: () => Al,
        createStringInterpolator: () => Ml,
        skipAnimation: () => zl,
        to: () => Ll,
        willAdvance: () => Vl
      });
      let Ml, Ll, Al = null,
        zl = !1,
        Vl = jl;
      const Fl = e => {
          e.to && (Ll = e.to), e.now && (ll.now = e.now), void 0 !== e.colors && (Al = e.colors), null != e.skipAnimation && (zl = e.skipAnimation), e.createStringInterpolator && (Ml = e.createStringInterpolator), e.requestAnimationFrame && ll.use(e.requestAnimationFrame), e.batchedUpdates && (ll.batchedUpdates = e.batchedUpdates), e.willAdvance && (Vl = e.willAdvance), e.frameLoop && (ll.frameLoop = e.frameLoop)
        },
        Bl = new Set;
      let ql = [],
        Wl = [],
        $l = 0;
      const Kl = {
        get idle() {
          return !Bl.size && !ql.length
        },
        start(e) {
          $l > e.priority ? (Bl.add(e), ll.onStart(Xl)) : (Hl(e), ll(Ul))
        },
        advance: Ul,
        sort(e) {
          if ($l) ll.onFrame(() => Kl.sort(e));
          else {
            const t = ql.indexOf(e);
            ~t && (ql.splice(t, 1), Zl(e))
          }
        },
        clear() {
          ql = [], Bl.clear()
        }
      };

      function Xl() {
        Bl.forEach(Hl), Bl.clear(), ll(Ul)
      }

      function Hl(e) {
        ql.includes(e) || Zl(e)
      }

      function Zl(e) {
        ql.splice(function(t) {
          const n = t.findIndex(t => t.priority > e.priority);
          return n < 0 ? t.length : n
        }(ql), 0, e)
      }

      function Ul(e) {
        const t = Wl;
        for (let n = 0; n < ql.length; n++) {
          const r = ql[n];
          $l = r.priority, r.idle || (Vl(r), r.advance(e), r.idle || t.push(r))
        }
        return $l = 0, Wl = ql, Wl.length = 0, ql = t, ql.length > 0
      }
      const Gl = "[-+]?\\d*\\.?\\d+",
        Yl = "[-+]?\\d*\\.?\\d+%";

      function Ql(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      const Jl = new RegExp("rgb" + Ql(Gl, Gl, Gl)),
        eu = new RegExp("rgba" + Ql(Gl, Gl, Gl, Gl)),
        tu = new RegExp("hsl" + Ql(Gl, Yl, Yl)),
        nu = new RegExp("hsla" + Ql(Gl, Yl, Yl, Gl)),
        ru = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ou = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        iu = /^#([0-9a-fA-F]{6})$/,
        su = /^#([0-9a-fA-F]{8})$/;

      function au(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function lu(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = au(o, r, e + 1 / 3),
          s = au(o, r, e),
          a = au(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function uu(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function cu(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function du(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function fu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function pu(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = iu.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Al && void 0 !== Al[e] ? Al[e] : (t = Jl.exec(e)) ? (uu(t[1]) << 24 | uu(t[2]) << 16 | uu(t[3]) << 8 | 255) >>> 0 : (t = eu.exec(e)) ? (uu(t[1]) << 24 | uu(t[2]) << 16 | uu(t[3]) << 8 | du(t[4])) >>> 0 : (t = ru.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = su.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ou.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = tu.exec(e)) ? (255 | lu(cu(t[1]), fu(t[2]), fu(t[3]))) >>> 0 : (t = nu.exec(e)) ? (lu(cu(t[1]), fu(t[2]), fu(t[3])) | du(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      const hu = (e, t, n) => {
          if (Pl.fun(e)) return e;
          if (Pl.arr(e)) return hu({
            range: e,
            output: t,
            extrapolate: n
          });
          if (Pl.str(e.output[0])) return Ml(e);
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
              let u = l ? l(e) : e;
              if (u < t) {
                if ("identity" === s) return u;
                "clamp" === s && (u = t)
              }
              if (u > n) {
                if ("identity" === a) return u;
                "clamp" === a && (u = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u -= t : u = (u - t) / (n - t), u = i(u), r === -1 / 0 ? u = -u : o === 1 / 0 ? u += r : u = u * (o - r) + r, u)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, s, a, r.map)
          }
        },
        mu = 1.70158,
        vu = 1.525 * mu,
        yu = 2.70158,
        gu = 2 * Math.PI / 3,
        bu = 2 * Math.PI / 4.5,
        _u = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        wu = {
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
          easeInBack: e => yu * e * e * e - mu * e * e,
          easeOutBack: e => 1 + yu * Math.pow(e - 1, 3) + mu * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - vu) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + vu) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * gu),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * gu) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * bu) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * bu) / 2 + 1,
          easeInBounce: e => 1 - _u(1 - e),
          easeOutBounce: _u,
          easeInOutBounce: e => e < .5 ? (1 - _u(1 - 2 * e)) / 2 : (1 + _u(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        xu = Symbol.for("FluidValue.get"),
        Cu = Symbol.for("FluidValue.observers"),
        Ou = e => Boolean(e && e[xu]),
        ju = e => e && e[xu] ? e[xu]() : e,
        Pu = e => e[Cu] || null;

      function Su(e, t) {
        const n = e[Cu];
        n && n.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var Eu = class {
        constructor(e) {
          if (!e && !(e = this.get)) throw Error("Unknown getter");
          ku(this, e)
        }
      };
      const ku = (e, t) => Du(e, xu, t);

      function Ru(e, t) {
        if (e[xu]) {
          let n = e[Cu];
          n || Du(e, Cu, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Tu(e, t) {
        const n = e[Cu];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[Cu] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      const Du = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Nu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Iu = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Mu = new RegExp(`(${Nu.source})(%|[a-z]+)`, "i"),
        Lu = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Au = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        zu = e => {
          const [t, n] = Vu(e);
          if (!t || Nl()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && Au.test(n) ? zu(n) : n || e
        },
        Vu = e => {
          const t = Au.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        };
      let Fu;
      const Bu = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        qu = e => {
          Fu || (Fu = Al ? new RegExp(`(${Object.keys(Al).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => ju(e).replace(Au, zu).replace(Iu, pu).replace(Fu, pu)),
            n = t.map(e => e.match(Nu).map(Number)),
            r = n[0].map((e, t) => n.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })).map(t => hu({
              ...e,
              output: t
            })),
            o = e.range || [0, 1],
            i = t[0].match(Nu).map((e, n) => {
              const r = t.map(e => {
                const t = e.match(Nu)[n],
                  r = t.indexOf(".");
                return -1 === r ? 0 : t.length - r - 1
              });
              return r.every(e => e === r[0]) && r[0] > 0 ? r[0] : null
            });
          return e => {
            const n = o.indexOf(e);
            if (-1 !== n) return t[n];
            const s = !Mu.test(t[0]) && t.find(e => Mu.test(e))?.replace(Nu, "");
            let a = 0;
            return t[0].replace(Nu, () => {
              const t = a++,
                n = r[t](e),
                o = i[t];
              return `${null!=o?n.toFixed(o):n}${s||""}`
            }).replace(Lu, Bu)
          }
        },
        Wu = "react-spring: ",
        $u = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Wu}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        Ku = $u(console.warn),
        Xu = $u(console.warn);

      function Hu(e) {
        return Pl.str(e) && ("#" == e[0] || /\d/.test(e) || !Nl() && Au.test(e) || e in (Al || {}))
      }
      const Zu = Nl() ? q.useEffect : q.useLayoutEffect;

      function Uu() {
        const e = (0, q.useState)()[1],
          t = (() => {
            const e = (0, q.useRef)(!1);
            return Zu(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      const Gu = e => (0, q.useEffect)(e, Yu),
        Yu = [],
        Qu = Symbol.for("Animated:node"),
        Ju = e => e && e[Qu],
        ec = (e, t) => {
          return n = e, r = Qu, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        tc = e => e && e[Qu] && e[Qu].getPayload();
      var nc = class {
          constructor() {
            ec(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        rc = class e extends nc {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Pl.num(this._value) && (this.lastPosition = this._value)
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
            return Pl.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Pl.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        oc = class e extends rc {
          constructor(e) {
            super(0), this._string = null, this._toString = hu({
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
            if (Pl.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = hu({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        };
      const ic = {
        dependencies: null
      };
      var sc = class extends nc {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return kl(this.source, (n, r) => {
              var o;
              (o = n) && o[Qu] === o ? t[r] = n.getValue(e) : Ou(n) ? t[r] = ju(n) : e || (t[r] = n)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && El(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return kl(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            ic.dependencies && Ou(e) && ic.dependencies.add(e);
            const t = tc(e);
            t && El(t, e => this.add(e))
          }
        },
        ac = class e extends sc {
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
            return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(lc)), !0)
          }
        };

      function lc(e) {
        return (Hu(e) ? oc : rc).create(e)
      }

      function uc(e) {
        const t = Ju(e);
        return t ? t.constructor : Pl.arr(e) ? ac : Hu(e) ? oc : rc
      }
      const cc = (e, t) => {
        const n = !Pl.fun(e) || e.prototype && e.prototype.isReactComponent;
        return (0, q.forwardRef)((r, o) => {
          const i = (0, q.useRef)(null),
            s = n && (0, q.useCallback)(e => {
              i.current = function(e, t) {
                return e && (Pl.fun(e) ? e(t) : e.current = t), t
              }(o, e)
            }, [o]),
            [a, l] = function(e, t) {
              const n = new Set;
              return ic.dependencies = n, e.style && (e = {
                ...e,
                style: t.createAnimatedStyle(e.style)
              }), e = new sc(e), ic.dependencies = null, [e, n]
            }(r, t),
            u = Uu(),
            c = () => {
              const e = i.current;
              n && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && u()
            },
            d = new dc(c, l),
            f = (0, q.useRef)(void 0);
          Zu(() => (f.current = d, El(l, e => Ru(e, d)), () => {
            f.current && (El(f.current.deps, e => Tu(e, f.current)), ll.cancel(f.current.update))
          })), (0, q.useEffect)(c, []), Gu(() => () => {
            const e = f.current;
            El(e.deps, t => Tu(t, e))
          });
          const p = t.getComponentProps(a.getValue());
          return q.createElement(e, {
            ...p,
            ref: s
          })
        })
      };
      var dc = class {
        constructor(e, t) {
          this.update = e, this.deps = t
        }
        eventObserved(e) {
          "change" == e.type && ll.write(this.update)
        }
      };
      const fc = Symbol.for("AnimatedComponent"),
        pc = e => Pl.str(e) ? e : e && Pl.str(e.displayName) ? e.displayName : Pl.fun(e) && e.name || null;

      function hc(e, ...t) {
        return Pl.fun(e) ? e(...t) : e
      }
      const mc = (e, t) => !0 === e || !!(t && e && (Pl.fun(e) ? e(t) : Rl(e).includes(t))),
        vc = (e, t) => Pl.obj(e) ? t && e[t] : e,
        yc = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        gc = e => e,
        bc = (e, t = gc) => {
          let n = _c;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            Pl.und(n) || (r[o] = n)
          }
          return r
        },
        _c = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        wc = {
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

      function xc(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (kl(e, (e, r) => {
              wc[r] || (t[r] = e, n++)
            }), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return kl(e, (e, r) => r in t || (n[r] = e)), n
        }
        return {
          ...e
        }
      }

      function Cc(e) {
        const t = ju(e);
        return Pl.arr(t) ? t.map(Cc) : Hu(t) ? Il.createStringInterpolator({
          range: [0, 1],
          output: [t, t]
        })(1) : t
      }

      function Oc(e) {
        return Pl.fun(e) || Pl.arr(e) && Pl.obj(e[0])
      }

      function jc(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      const Pc = {
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
        Sc = {
          ...Pc.default,
          mass: 1,
          damping: 1,
          easing: wu.linear,
          clamp: !1
        };
      var Ec = class {
        constructor() {
          this.velocity = 0, Object.assign(this, Sc)
        }
      };

      function kc(e, t) {
        if (Pl.und(t.decay)) {
          const n = !Pl.und(t.tension) || !Pl.und(t.friction);
          !n && Pl.und(t.frequency) && Pl.und(t.damping) && Pl.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      const Rc = [];
      var Tc = class {
        constructor() {
          this.changed = !1, this.values = Rc, this.toValues = null, this.fromValues = Rc, this.config = new Ec, this.immediate = !1
        }
      };

      function Dc(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, u, c = mc(n.cancel ?? r?.cancel, t);
          if (c) p();
          else {
            Pl.und(n.pause) || (o.paused = mc(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || mc(e, t)), l = hc(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - ll.now()
          }

          function f() {
            l > 0 && !Il.skipAnimation ? (o.delayed = !0, u = ll.setTimeout(p, l), o.pauseQueue.add(d), o.timeouts.add(u)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
            try {
              i.start({
                ...n,
                callId: e,
                cancel: c
              }, s)
            } catch (e) {
              a(e)
            }
          }
        })
      }
      const Nc = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? Lc(e.get()) : t.every(e => e.noop) ? Ic(e.get()) : Mc(e.get(), t.every(e => e.finished)),
        Ic = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Mc = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Lc = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Ac(e, t, n, r) {
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
          const u = bc(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, d;
          const f = new Promise((e, t) => (c = e, d = t)),
            p = e => {
              const t = o <= (n.cancelId || 0) && Lc(r) || o !== n.asyncId && Mc(r, !1);
              if (t) throw e.result = t, d(e), e
            };
          let h = 0;
          const m = (e, t) => {
            const i = new Vc,
              s = new Fc;
            return (async () => {
              p(i);
              const a = Pl.obj(e) ? {
                ...e
              } : {
                ...t,
                to: e
              };
              if (a.parentId = o, kl(u, (e, t) => {
                  Pl.und(a[t]) && (a[t] = e)
                }), Il.skipAnimation) {
                if (++h > 1024) throw zc(n), s.result = Mc(r, !1), d(s), s;
                return a.immediate = !0, await r.start(a)
              }
              const l = await r.start(a);
              return p(i), n.paused && await new Promise(e => {
                n.resumeQueue.add(e)
              }), l
            })()
          };
          let v;
          try {
            let t;
            t = Pl.arr(e) ? (async e => {
              for (const t of e) await m(t)
            })(e) : Promise.resolve(e(m, r.stop.bind(r))), await Promise.all([t.then(c), f]), v = Mc(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof Vc) v = e.result;
            else {
              if (!(e instanceof Fc)) throw e;
              v = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? l : void 0)
          }
          return Pl.fun(s) && ll.batchedUpdates(() => {
            s(v, r, r.item)
          }), v
        })() : l
      }

      function zc(e, t) {
        Tl(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Vc = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Fc = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        };
      const Bc = e => e instanceof Wc;
      let qc = 1;
      var Wc = class extends Eu {
        constructor(...e) {
          super(...e), this.id = qc++, this._priority = 0
        }
        get priority() {
          return this._priority
        }
        set priority(e) {
          this._priority != e && (this._priority = e, this._onPriorityChange(e))
        }
        get() {
          const e = Ju(this);
          return e && e.getValue()
        }
        to(...e) {
          return Il.to(this, e)
        }
        interpolate(...e) {
          return Ku(`${Wu}The "interpolate" function is deprecated in v9 (use "to" instead)`), Il.to(this, e)
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
          Su(this, {
            type: "change",
            parent: this,
            value: e,
            idle: t
          })
        }
        _onPriorityChange(e) {
          this.idle || Kl.sort(this), Su(this, {
            type: "priority",
            parent: this,
            priority: e
          })
        }
      };
      const $c = Symbol.for("SpringPhase"),
        Kc = e => (1 & e[$c]) > 0,
        Xc = e => (2 & e[$c]) > 0,
        Hc = e => (4 & e[$c]) > 0,
        Zc = (e, t) => t ? e[$c] |= 3 : e[$c] &= -3,
        Uc = (e, t) => t ? e[$c] |= 4 : e[$c] &= -5;
      var Gc = class extends Wc {
        constructor(e, t) {
          if (super(), this.animation = new Tc, this.defaultProps = {}, this._state = {
              paused: !1,
              delayed: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Pl.und(e) || !Pl.und(t)) {
            const n = Pl.obj(e) ? {
              ...e
            } : {
              ...t,
              from: e
            };
            Pl.und(n.default) && (n.default = !0), this.start(n)
          }
        }
        get idle() {
          return !(Xc(this) || this._state.asyncTo) || Hc(this)
        }
        get goal() {
          return ju(this.animation.to)
        }
        get velocity() {
          const e = Ju(this);
          return e instanceof rc ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
        }
        get hasAnimated() {
          return Kc(this)
        }
        get isAnimating() {
          return Xc(this)
        }
        get isPaused() {
          return Hc(this)
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
          } = r, s = tc(r.to);
          !s && Ou(r.to) && (o = Rl(ju(r.to))), r.values.forEach((a, l) => {
            if (a.done) return;
            const u = a.constructor == oc ? 1 : s ? s[l].lastPosition : o[l];
            let c = r.immediate,
              d = u;
            if (!c) {
              if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
              let t = a.elapsedTime += e;
              const n = r.fromValues[l],
                o = null != a.v0 ? a.v0 : a.v0 = Pl.arr(i.velocity) ? i.velocity[l] : i.velocity;
              let s;
              const f = i.precision || (n == u ? .005 : Math.min(1, .001 * Math.abs(u - n)));
              if (Pl.und(i.duration))
                if (i.decay) {
                  const e = !0 === i.decay ? .998 : i.decay,
                    r = Math.exp(-(1 - e) * t);
                  d = n + o / (1 - e) * (1 - r), c = Math.abs(a.lastPosition - d) <= f, s = o * r
                } else {
                  s = null == a.lastVelocity ? o : a.lastVelocity;
                  const t = i.restVelocity || f / 10,
                    r = i.clamp ? 0 : i.bounce,
                    l = !Pl.und(r),
                    p = n == u ? a.v0 > 0 : n < u;
                  let h, m = !1;
                  const v = 1,
                    y = Math.ceil(e / v);
                  for (let e = 0; e < y && (h = Math.abs(s) > t, h || (c = Math.abs(u - d) <= f, !c)); ++e) l && (m = d == u || d > u == p, m && (s = -s * r, d = u)), s += (1e-6 * -i.tension * (d - u) + .001 * -i.friction * s) / i.mass * v, d += s * v
                }
              else {
                let r = 1;
                i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, a.durationProgress = r), d = n + i.easing(r) * (u - n), s = (d - a.lastPosition) / e, c = 1 == r
              }
              a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
            }
            s && !s[l].done && (c = !1), c ? a.done = !0 : t = !1, a.setValue(d, i.round) && (n = !0)
          });
          const a = Ju(this),
            l = a.getValue();
          if (t) {
            const e = ju(r.to);
            l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
          } else n && this._onChange(l)
        }
        set(e) {
          return ll.batchedUpdates(() => {
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
          if (Xc(this)) {
            const {
              to: e,
              config: t
            } = this.animation;
            ll.batchedUpdates(() => {
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
          return Pl.und(e) ? (n = this.queue || [], this.queue = []) : n = [Pl.obj(e) ? e : {
            ...t,
            to: e
          }], Promise.all(n.map(e => this._update(e))).then(e => Nc(this, e))
        }
        stop(e) {
          const {
            to: t
          } = this.animation;
          return Pl.und(t) || this._focus(this.get()), zc(this._state, e && this._lastCallId), ll.batchedUpdates(() => this._stop(t, e)), this
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
          n = Pl.obj(n) ? n[t] : n, (null == n || Oc(n)) && (n = void 0), r = Pl.obj(r) ? r[t] : r, null == r && (r = void 0);
          const o = {
            to: n,
            from: r
          };
          return Kc(this) || (e.reverse && ([n, r] = [r, n]), r = ju(r), Pl.und(r) ? Ju(this) || this._set(n) : this._set(r)), o
        }
        _update({
          ...e
        }, t) {
          const {
            key: n,
            defaultProps: r
          } = this;
          e.default && Object.assign(r, bc(e, (e, t) => /^on/.test(t) ? vc(e, n) : e)), nd(this, e, "onProps"), rd(this, "onProps", e, this);
          const o = this._prepareNode(e);
          if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
          const i = this._state;
          return Dc(++this._lastCallId, {
            key: n,
            props: e,
            defaultProps: r,
            state: i,
            actions: {
              pause: () => {
                Hc(this) || (Uc(this, !0), Dl(i.pauseQueue), rd(this, "onPause", Mc(this, Yc(this, this.animation.to)), this))
              },
              resume: () => {
                Hc(this) && (Uc(this, !1), Xc(this) && this._resume(), Dl(i.resumeQueue), rd(this, "onResume", Mc(this, Yc(this, this.animation.to)), this))
              },
              start: this._merge.bind(this, o)
            }
          }).then(n => {
            if (e.loop && n.finished && (!t || !n.noop)) {
              const t = Qc(e);
              if (t) return this._update(t, !0)
            }
            return n
          })
        }
        _merge(e, t, n) {
          if (t.cancel) return this.stop(!0), n(Lc(this));
          const r = !Pl.und(e.to),
            o = !Pl.und(e.from);
          if (r || o) {
            if (!(t.callId > this._lastToId)) return n(Lc(this));
            this._lastToId = t.callId
          }
          const {
            key: i,
            defaultProps: s,
            animation: a
          } = this, {
            to: l,
            from: u
          } = a;
          let {
            to: c = l,
            from: d = u
          } = e;
          !o || r || t.default && !Pl.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
          const f = !Sl(d, u);
          f && (a.from = d), d = ju(d);
          const p = !Sl(c, l);
          p && this._focus(c);
          const h = Oc(t.to),
            {
              config: m
            } = a,
            {
              decay: v,
              velocity: y
            } = m;
          !r && !o || m.decay || (m.velocity = 0), t.config && !h && function(e, t, n) {
            n && (kc(n = {
              ...n
            }, t), t = {
              ...n,
              ...t
            }), kc(e, t), Object.assign(e, t);
            for (const t in Sc) null == e[t] && (e[t] = Sc[t]);
            let {
              frequency: r,
              damping: o
            } = e;
            const {
              mass: i
            } = e;
            Pl.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
          }(m, hc(t.config, i), t.config !== s.config ? hc(s.config, i) : void 0);
          let g = Ju(this);
          if (!g || Pl.und(c)) return n(Mc(this, !0));
          const b = Pl.und(t.reset) ? o && !t.default : !Pl.und(d) && mc(t.reset, i),
            _ = b ? d : this.get(),
            w = Cc(c),
            x = Pl.num(w) || Pl.arr(w) || Hu(w),
            C = !h && (!x || mc(s.immediate || t.immediate, i));
          if (p) {
            const e = uc(c);
            if (e !== g.constructor) {
              if (!C) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
              g = this._set(w)
            }
          }
          const O = g.constructor;
          let j = Ou(c),
            P = !1;
          if (!j) {
            const e = b || !Kc(this) && f;
            (p || e) && (P = Sl(Cc(_), w), j = !P), (Sl(a.immediate, C) || C) && Sl(m.decay, v) && Sl(m.velocity, y) || (j = !0)
          }
          if (P && Xc(this) && (a.changed && !b ? j = !0 : j || this._stop(l)), !h && ((j || Ou(l)) && (a.values = g.getPayload(), a.toValues = Ou(c) ? null : O == oc ? [1] : Rl(w)), a.immediate != C && (a.immediate = C, C || b || this._set(l)), j)) {
            const {
              onRest: e
            } = a;
            El(td, e => nd(this, t, e));
            const r = Mc(this, Yc(this, l));
            Dl(this._pendingCalls, r), this._pendingCalls.add(n), a.changed && ll.batchedUpdates(() => {
              a.changed = !b, e?.(r, this), b ? hc(s.onRest, r) : a.onStart?.(r, this)
            })
          }
          b && this._set(_), h ? n(Ac(t.to, t, this._state, this)) : j ? this._start() : Xc(this) && !p ? this._pendingCalls.add(n) : n(Ic(_))
        }
        _focus(e) {
          const t = this.animation;
          e !== t.to && (Pu(this) && this._detach(), t.to = e, Pu(this) && this._attach())
        }
        _attach() {
          let e = 0;
          const {
            to: t
          } = this.animation;
          Ou(t) && (Ru(t, this), Bc(t) && (e = t.priority + 1)), this.priority = e
        }
        _detach() {
          const {
            to: e
          } = this.animation;
          Ou(e) && Tu(e, this)
        }
        _set(e, t = !0) {
          const n = ju(e);
          if (!Pl.und(n)) {
            const e = Ju(this);
            if (!e || !Sl(n, e.getValue())) {
              const r = uc(n);
              e && e.constructor == r ? e.setValue(n) : ec(this, r.create(n)), e && ll.batchedUpdates(() => {
                this._onChange(n, t)
              })
            }
          }
          return Ju(this)
        }
        _onStart() {
          const e = this.animation;
          e.changed || (e.changed = !0, rd(this, "onStart", Mc(this, Yc(this, e.to)), this))
        }
        _onChange(e, t) {
          t || (this._onStart(), hc(this.animation.onChange, e, this)), hc(this.defaultProps.onChange, e, this), super._onChange(e, t)
        }
        _start() {
          const e = this.animation;
          Ju(this).reset(ju(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Xc(this) || (Zc(this, !0), Hc(this) || this._resume())
        }
        _resume() {
          Il.skipAnimation ? this.finish() : Kl.start(this)
        }
        _stop(e, t) {
          if (Xc(this)) {
            Zc(this, !1);
            const n = this.animation;
            El(n.values, e => {
              e.done = !0
            }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Su(this, {
              type: "idle",
              parent: this
            });
            const r = t ? Lc(this.get()) : Mc(this.get(), Yc(this, e ?? n.to));
            Dl(this._pendingCalls, r), n.changed = !1, rd(this, "onRest", r, this)
          }
        }
      };

      function Yc(e, t) {
        const n = Cc(t);
        return Sl(Cc(e.get()), n)
      }

      function Qc(e, t = e.loop, n = e.to) {
        const r = hc(t);
        if (r) {
          const o = !0 !== r && xc(r),
            i = (o || e).reverse,
            s = !o || o.reset;
          return Jc({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Oc(n) ? n : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function Jc(e) {
        const {
          to: t,
          from: n
        } = e = xc(e), r = new Set;
        return Pl.obj(t) && ed(t, r), Pl.obj(n) && ed(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function ed(e, t) {
        kl(e, (e, n) => null != e && t.add(n))
      }
      const td = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function nd(e, t, n) {
        e.animation[n] = t[n] !== yc(t, n) ? vc(t[n], e.key) : void 0
      }

      function rd(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      const od = ["onStart", "onChange", "onRest"];
      let id = 1;
      var sd = class {
        constructor(e, t) {
          this.id = id++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._lastLoopId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            Pl.und(n) || this.springs[t].set(n)
          }
        }
        update(e) {
          return e && this.queue.push(Jc(e)), this
        }
        start(e) {
          let {
            queue: t
          } = this;
          return e ? t = Rl(e).map(Jc) : this.queue = [], this._flush ? this._flush(this, t) : (dd(this, t), function(e, t) {
            return Promise.all(t.map(t => ad(e, t))).then(t => Nc(e, t))
          }(this, t))
        }
        stop(e, t) {
          if (e !== !!e && (t = e), t) {
            const n = this.springs;
            El(Rl(t), t => n[t].stop(!!e))
          } else zc(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
          return this
        }
        pause(e) {
          if (Pl.und(e)) this.start({
            pause: !0
          });
          else {
            const t = this.springs;
            El(Rl(e), e => t[e].pause())
          }
          return this
        }
        resume(e) {
          if (Pl.und(e)) this.start({
            pause: !1
          });
          else {
            const t = this.springs;
            El(Rl(e), e => t[e].resume())
          }
          return this
        }
        each(e) {
          kl(this.springs, e)
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
            onRest: n
          } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
          (r && !this._started || o && !this._started) && (this._started = !0, Tl(e, ([e, t]) => {
            t.value = this.get(), e(t, this, this._item)
          }));
          const i = !r && this._started,
            s = o || i && n.size ? this.get() : null;
          o && t.size && Tl(t, ([e, t]) => {
            t.value = s, e(t, this, this._item)
          }), i && (this._started = !1, Tl(n, ([e, t]) => {
            t.value = s, e(t, this, this._item)
          }))
        }
        eventObserved(e) {
          if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
          else {
            if ("idle" != e.type) return;
            this._active.delete(e.parent)
          }
          ll.onFrame(this._onFrame)
        }
      };
      async function ad(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, u = Pl.obj(t.default) && t.default;
        s && (t.loop = !1);
        const c = t,
          d = n || c.parentId || !("loop" in t) ? n ? c.loopId : e._lastLoopId : ++e._lastLoopId;
        !1 === o && (t.to = null), !1 === i && (t.from = null);
        const f = Pl.arr(o) || Pl.fun(o) ? o : void 0;
        f ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : El(od, n => {
          const r = t[n];
          if (Pl.fun(r)) {
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
            }, u && (u[n] = t[n])
          }
        });
        const p = e._state;
        t.pause === !p.paused ? (p.paused = t.pause, Dl(t.pause ? p.pauseQueue : p.resumeQueue)) : p.paused && (t.pause = !0);
        const h = (r || Object.keys(e.springs)).map(n => e.springs[n].start(t)),
          m = !0 === t.cancel || !0 === yc(t, "cancel");
        (f || m && p.asyncId) && h.push(Dc(++e._lastAsyncId, {
          props: t,
          state: p,
          actions: {
            pause: jl,
            resume: jl,
            start(t, n) {
              m ? (zc(p, e._lastAsyncId), n(Lc(e))) : (t.onRest = a, n(Ac(f, t, p, e)))
            }
          }
        })), p.paused && await new Promise(e => {
          p.resumeQueue.add(e)
        });
        const v = Nc(e, await Promise.all(h));
        if (s && v.finished && (!n || !v.noop) && d === e._lastLoopId) {
          const n = Qc(t, s, o);
          if (n) return n.loopId = d, e._onLoopReset?.forEach(e => e()), dd(e, [n]), ad(e, n, !0)
        }
        return l && ll.batchedUpdates(() => l(v, e, e.item)), v
      }

      function ld(e, t) {
        const n = {
          ...e.springs
        };
        return t && El(Rl(t), e => {
            Pl.und(e.keys) && (e = Jc(e)), Pl.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), cd(n, e, e => ud(e))
          }),
          function(e, t) {
            kl(t, (t, n) => {
              e.springs[n] || (e.springs[n] = t, Ru(t, e))
            })
          }(e, n), n
      }

      function ud(e, t) {
        const n = new Gc;
        return n.key = e, t && Ru(n, t), n
      }

      function cd(e, t, n) {
        t.keys && El(t.keys, r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        })
      }

      function dd(e, t) {
        El(t, t => {
          cd(e.springs, t, t => ud(t, e))
        })
      }
      const fd = q.createContext({
          pause: !1,
          immediate: !1
        }),
        pd = () => {
          const e = [],
            t = function(t) {
              Xu(`${Wu}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const r = [];
              return El(e, (e, o) => {
                if (Pl.und(t)) r.push(e.start());
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
            return El(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return El(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            El(e, (e, n) => {
              const r = Pl.fun(t) ? t(n, e) : t;
              r && e.set(r)
            })
          }, t.start = function(t) {
            const n = [];
            return El(e, (e, r) => {
              if (Pl.und(t)) n.push(e.start());
              else {
                const o = this._getProps(t, e, r);
                o && n.push(e.start(o))
              }
            }), n
          }, t.stop = function() {
            return El(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return El(e, (e, n) => e.update(this._getProps(t, e, n))), this
          };
          const n = function(e, t, n) {
            return Pl.fun(e) ? e(n, t) : e
          };
          return t._getProps = n, t
        },
        hd = () => pd(),
        md = () => (0, q.useState)(hd)[0];

      function vd(e, t, n) {
        const r = Pl.fun(t) && t,
          {
            reset: o,
            sort: i,
            trail: s = 0,
            reverse: a = !1,
            expires: l = !0,
            exitBeforeEnter: u = !1,
            onDestroyed: c,
            ref: d,
            config: f
          } = r ? r() : t,
          p = (0, q.useMemo)(() => r || 3 == arguments.length ? pd() : void 0, []),
          h = Rl(e),
          m = [],
          v = (0, q.useRef)(null),
          y = o ? null : v.current;
        Zu(() => {
          v.current = m
        }), Gu(() => (El(m, e => {
          p?.add(e.ctrl), e.ctrl.ref = p
        }), () => {
          El(v.current, e => {
            e.expired && clearTimeout(e.expirationId), jc(e.ctrl, p), e.ctrl.stop(!0)
          })
        }));
        const g = function(e, {
            key: t,
            keys: n = t
          }, r) {
            if (null === n) {
              const t = new Set;
              return e.map(e => {
                const n = r && r.find(n => n.item === e && "leave" !== n.phase && !t.has(n));
                return n ? (t.add(n), n.key) : yd++
              })
            }
            return Pl.und(n) ? e : Pl.fun(n) ? e.map(n) : Rl(n)
          }(h, r ? r() : t, y),
          b = o && v.current || [];
        Zu(() => El(b, ({
          ctrl: e,
          item: t,
          key: n
        }) => {
          jc(e, p), hc(c, t, n)
        }));
        const _ = [];
        if (y && El(y, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = g.indexOf(e.key)) && (m[t] = e)
          }), El(h, (e, t) => {
            m[t] || (m[t] = {
              key: g[t],
              item: e,
              phase: "mount",
              ctrl: new sd
            }, m[t].ctrl.item = e)
          }), _.length) {
          let e = -1;
          const {
            leave: n
          } = r ? r() : t;
          El(_, (t, r) => {
            const o = y[r];
            ~t ? (e = m.indexOf(o), m[e] = {
              ...o,
              item: h[t]
            }) : n && m.splice(++e, 0, o)
          })
        }
        Pl.fun(i) && m.sort((e, t) => i(e.item, t.item));
        let w = -s;
        const x = [],
          C = Uu(),
          O = bc(t),
          j = new Map,
          P = (0, q.useRef)(new Map),
          S = (0, q.useRef)(!1);
        if (El(m, (e, n) => {
            const o = e.key,
              i = e.phase,
              a = r ? r() : t;
            let c, p;
            const h = hc(a.delay || 0, o);
            if ("mount" == i) c = a.enter, p = "enter";
            else {
              const e = g.indexOf(o) < 0;
              if ("leave" != i)
                if (e) c = a.leave, p = "leave";
                else {
                  if (!(c = a.update)) return;
                  p = "update"
                }
              else {
                if (e) return;
                c = a.enter, p = "enter"
              }
            }
            if (c = hc(c, e.item, n), c = Pl.obj(c) ? xc(c) : {
                to: c
              }, !c.config) {
              const t = f || O.config;
              c.config = hc(t, e.item, n, p)
            }
            w += s;
            const m = {
              ...O,
              delay: h + w,
              ref: d,
              immediate: a.immediate,
              reset: !1,
              ...c
            };
            if ("enter" == p && Pl.und(m.from)) {
              const o = r ? r() : t;
              m.from = hc(Pl.und(o.initial) || y ? o.from : o.initial, e.item, n)
            }
            const {
              onResolve: b
            } = m;
            m.onResolve = e => {
              hc(b, e);
              const t = v.current,
                n = t.find(e => e.key === o);
              if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                const e = t.every(e => e.ctrl.idle);
                if ("leave" == n.phase) {
                  P.current.delete(n);
                  const t = hc(l, n.item);
                  if (!1 !== t) {
                    const r = !0 === t ? 0 : t;
                    if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(C, r)))
                  }
                }
                e && t.some(e => e.expired) && (u && (S.current = !0), C())
              }
            };
            const _ = ld(e.ctrl, m);
            x.push({
              payload: m,
              propsDelay: h
            }), "leave" === p && u ? P.current.set(e, {
              phase: p,
              springs: _,
              payload: m
            }) : j.set(e, {
              phase: p,
              springs: _,
              payload: m
            })
          }), a && s) {
          const e = x.length;
          El(x, ({
            payload: t,
            propsDelay: n
          }, r) => {
            t.delay = n + (e - 1 - r) * s
          })
        }
        const E = (0, q.useContext)(fd),
          k = E !== function(e) {
            const t = (0, q.useRef)(void 0);
            return (0, q.useEffect)(() => {
              t.current = e
            }), t.current
          }(E) && function(e) {
            for (const t in e) return !0;
            return !1
          }(E);
        Zu(() => {
          k && El(m, e => {
            e.ctrl.start({
              default: E
            })
          })
        }, [E]), El(j, (e, t) => {
          if (P.current.size) {
            const e = m.findIndex(e => e.key === t.key);
            m.splice(e, 1)
          }
        }), Zu(() => {
          El(P.current.size ? P.current : j, ({
            phase: e,
            payload: t
          }, n) => {
            const {
              ctrl: r
            } = n;
            n.phase = e, p?.add(r), k && "enter" == e && r.start({
              default: E
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(r, t.ref), !r.ref && !p || S.current ? (r.start(t), S.current && (S.current = !1)) : r.update(t))
          })
        }, o ? void 0 : n);
        const R = e => q.createElement(q.Fragment, null, m.map((t, n) => {
          const r = j.get(t) || P.current.get(t),
            {
              springs: o
            } = r || t.ctrl,
            i = r ? {
              ...t,
              phase: r.phase
            } : t,
            s = e({
              ...o
            }, t.item, i, n),
            a = Pl.str(t.key) || Pl.num(t.key) ? t.key : t.ctrl.id,
            l = q.version < "19.0.0",
            u = s?.props ?? {},
            c = l ? s?.ref : u?.ref;
          return s && s.type ? q.createElement(s.type, {
            ...u,
            key: a,
            ref: c
          }) : s
        }));
        return p ? [R, p] : R
      }
      let yd = 1;
      var gd = class extends Wc {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = hu(...t);
          const n = this._get(),
            r = uc(n);
          ec(this, r.create(n))
        }
        advance(e) {
          const t = this._get();
          Sl(t, this.get()) || (Ju(this).setValue(t), this._onChange(t, this.idle)), !this.idle && _d(this._active) && wd(this)
        }
        _get() {
          const e = Pl.arr(this.source) ? this.source.map(ju) : Rl(ju(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !_d(this._active) && (this.idle = !1, El(tc(this), e => {
            e.done = !1
          }), Il.skipAnimation ? (ll.batchedUpdates(() => this.advance()), wd(this)) : Kl.start(this))
        }
        _attach() {
          let e = 1;
          El(Rl(this.source), t => {
            Ou(t) && Ru(t, this), Bc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          El(Rl(this.source), e => {
            Ou(e) && Tu(e, this)
          }), this._active.clear(), wd(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Rl(this.source).reduce((e, t) => Math.max(e, (Bc(t) ? t.priority : 0) + 1), 0))
        }
      };

      function bd(e) {
        return !1 !== e.idle
      }

      function _d(e) {
        return !e.size || Array.from(e).every(bd)
      }

      function wd(e) {
        e.idle || (e.idle = !0, El(tc(e), e => {
          e.done = !0
        }), Su(e, {
          type: "idle",
          parent: e
        }))
      }
      Il.assign({
        createStringInterpolator: qu,
        to: (e, t) => new gd(e, t)
      }), Kl.advance;
      var xd = n(86672);
      const Cd = /^--/;

      function Od(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Cd.test(e) || Pd.hasOwnProperty(e) && Pd[e] ? ("" + t).trim() : t + "px"
      }
      const jd = {};
      let Pd = {
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
      const Sd = ["Webkit", "Ms", "Moz", "O"];
      Pd = Object.keys(Pd).reduce((e, t) => (Sd.forEach(n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t]), e), Pd);
      const Ed = /^(matrix3d|matrix|translate3d|translate[XYZ]?|scale3d|scale[XYZ]?|rotate3d|rotate[XYZ]?|skew[XY]?)$/,
        kd = /^(translate)/,
        Rd = /^(rotate|skew)/,
        Td = (e, t) => Pl.num(e) && 0 !== e ? e + t : e,
        Dd = (e, t) => Pl.arr(e) ? e.every(e => Dd(e, t)) : Pl.num(e) ? e === t : parseFloat(e) === t;
      var Nd = class extends sc {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push(e => [`translate3d(${e.map(e=>Td(e,"px")).join(",")})`, Dd(e, 0)])), kl(r, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (Ed.test(t)) {
                if (delete r[t], Pl.und(e)) return;
                const n = kd.test(t) ? "px" : Rd.test(t) ? "deg" : "";
                o.push(Rl(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Td(o,n)})`, Dd(o, 0)] : e => [`${t}(${e.map(e=>Td(e,n)).join(",")})`, Dd(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (r.transform = new Id(o, i)), super(r)
          }
        },
        Id = class extends Eu {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return El(this.inputs, (n, r) => {
              const o = ju(n[0]),
                [i, s] = this.transforms[r](Pl.arr(o) ? o : n.map(ju));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && El(this.inputs, e => El(e, e => Ou(e) && Ru(e, this)))
          }
          observerRemoved(e) {
            0 == e && El(this.inputs, e => El(e, e => Ou(e) && Tu(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Su(this, e)
          }
        };
      Il.assign({
        batchedUpdates: xd.unstable_batchedUpdates,
        createStringInterpolator: qu,
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
      const Md = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new sc(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = pc(e) || "Anonymous";
              return (e = Pl.str(e) ? i[e] || (i[e] = cc(e, o)) : e[fc] || (e[fc] = cc(e, o))).displayName = `Animated(${t})`, e
            };
          return kl(e, (t, n) => {
            Pl.arr(e) && (n = pc(t)), i[n] = i(t)
          }), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute || !e.removeAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: r,
                style: o,
                children: i,
                scrollTop: s,
                scrollLeft: a,
                viewBox: l,
                ...u
              } = t,
              c = Object.values(u),
              d = Object.keys(u).map(t => n || e.hasAttribute(t) ? t : jd[t] || (jd[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            t.hasOwnProperty("children") && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = Od(t, o[t]);
                Cd.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach((t, n) => {
              const r = c[n];
              void 0 !== r ? e.setAttribute(t, r) : e.removeAttribute(t)
            }), t.hasOwnProperty("className") && (void 0 !== r ? e.className = r : e.removeAttribute("class")), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), t.hasOwnProperty("viewBox") && (void 0 !== l ? e.setAttribute("viewBox", l) : e.removeAttribute("viewBox"))
          },
          createAnimatedStyle: e => new Nd(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        Ld = Md.animated;
      var Ad = n(9957),
        zd = n(91071);

      function Vd(...e) {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function Fd(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Bd = Symbol("radix.slottable");

      function qd(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Bd
      }
      var Wd, $d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = Fd(e),
                n = q.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = q.Children.toArray(r), s = i.find(qd);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                    return (0, j.jsx)(t, {
                      ...o,
                      ref: n,
                      children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        Kd = n(10263),
        Xd = "dismissableLayer.update",
        Hd = q.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Zd = q.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, u = q.useContext(Hd), [c, d] = q.useState(null), f = c?.ownerDocument ?? globalThis?.document, [, p] = q.useState({}), h = (0, zd.s)(t, e => d(e)), m = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = c ? m.indexOf(c) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, _ = g >= y, w = function(e, t = globalThis?.document) {
            const n = (0, Kd.c)(e),
              r = q.useRef(!1),
              o = q.useRef(() => {});
            return q.useEffect(() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Yd("dismissableLayer.pointerDownOutside", n, i, {
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
              n = [...u.branches].some(e => e.contains(t));
            _ && !n && (o?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f), x = function(e, t = globalThis?.document) {
            const n = (0, Kd.c)(e),
              r = q.useRef(!1);
            return q.useEffect(() => {
              const e = e => {
                e.target && !r.current && Yd("dismissableLayer.focusOutside", n, {
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
            [...u.branches].some(e => e.contains(t)) || (i?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f);
          return function(e, t = globalThis?.document) {
            const n = (0, Kd.c)(e);
            q.useEffect(() => {
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
            g === u.layers.size - 1 && (r?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), q.useEffect(() => {
            if (c) return n && (0 === u.layersWithOutsidePointerEventsDisabled.size && (Wd = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Gd(), () => {
              n && 1 === u.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = Wd)
            }
          }, [c, f, n, u]), q.useEffect(() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Gd())
          }, [c, u]), q.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(Xd, e), () => document.removeEventListener(Xd, e)
          }, []), (0, j.jsx)($d.div, {
            ...l,
            ref: h,
            style: {
              pointerEvents: b ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Ad.mK)(e.onFocusCapture, x.onFocusCapture),
            onBlurCapture: (0, Ad.mK)(e.onBlurCapture, x.onBlurCapture),
            onPointerDownCapture: (0, Ad.mK)(e.onPointerDownCapture, w.onPointerDownCapture)
          })
        });
      Zd.displayName = "DismissableLayer";
      var Ud = q.forwardRef((e, t) => {
        const n = q.useContext(Hd),
          r = q.useRef(null),
          o = (0, zd.s)(t, r);
        return q.useEffect(() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, j.jsx)($d.div, {
          ...e,
          ref: o
        })
      });

      function Gd() {
        const e = new CustomEvent(Xd);
        document.dispatchEvent(e)
      }

      function Yd(e, t, n, {
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
          e && xd.flushSync(() => e.dispatchEvent(t))
        }(o, i) : o.dispatchEvent(i)
      }
      Ud.displayName = "DismissableLayerBranch";
      var Qd = Zd,
        Jd = Ud,
        ef = n(88200),
        tf = W[" useId ".trim().toString()] || (() => {}),
        nf = 0;

      function rf(e) {
        const [t, n] = q.useState(tf());
        return (0, ef.N)(() => {
          e || n(e => e ?? String(nf++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
      const of = ["top", "right", "bottom", "left"], sf = Math.min, af = Math.max, lf = Math.round, uf = Math.floor, cf = e => ({
        x: e,
        y: e
      }), df = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };

      function ff(e, t, n) {
        return af(e, sf(t, n))
      }

      function pf(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function hf(e) {
        return e.split("-")[0]
      }

      function mf(e) {
        return e.split("-")[1]
      }

      function vf(e) {
        return "x" === e ? "y" : "x"
      }

      function yf(e) {
        return "y" === e ? "height" : "width"
      }

      function gf(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
      }

      function bf(e) {
        return vf(gf(e))
      }

      function _f(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
      }
      const wf = ["left", "right"],
        xf = ["right", "left"],
        Cf = ["top", "bottom"],
        Of = ["bottom", "top"];

      function jf(e) {
        const t = hf(e);
        return df[t] + e.slice(t.length)
      }

      function Pf(e) {
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

      function Sf(e) {
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

      function Ef(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = gf(t),
          s = bf(t),
          a = yf(s),
          l = hf(t),
          u = "y" === i,
          c = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          f = r[a] / 2 - o[a] / 2;
        let p;
        switch (l) {
          case "top":
            p = {
              x: c,
              y: r.y - o.height
            };
            break;
          case "bottom":
            p = {
              x: c,
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
        switch (mf(t)) {
          case "start":
            p[s] -= f * (n && u ? -1 : 1);
            break;
          case "end":
            p[s] += f * (n && u ? -1 : 1)
        }
        return p
      }
      async function kf(e, t) {
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
          boundary: u = "clippingAncestors",
          rootBoundary: c = "viewport",
          elementContext: d = "floating",
          altBoundary: f = !1,
          padding: p = 0
        } = pf(t, e), h = Pf(p), m = a[f ? "floating" === d ? "reference" : "floating" : d], v = Sf(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: u,
          rootBoundary: c,
          strategy: l
        })), y = "floating" === d ? {
          x: r,
          y: o,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(g)) && await (null == i.getScale ? void 0 : i.getScale(g)) || {
          x: 1,
          y: 1
        }, _ = Sf(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: y,
          offsetParent: g,
          strategy: l
        }) : y);
        return {
          top: (v.top - _.top + h.top) / b.y,
          bottom: (_.bottom - v.bottom + h.bottom) / b.y,
          left: (v.left - _.left + h.left) / b.x,
          right: (_.right - v.right + h.right) / b.x
        }
      }

      function Rf(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function Tf(e) {
        return of.some(t => e[t] >= 0)
      }
      const Df = new Set(["left", "top"]);

      function Nf() {
        return "undefined" != typeof window
      }

      function If(e) {
        return Af(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function Mf(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function Lf(e) {
        var t;
        return null == (t = (Af(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function Af(e) {
        return !!Nf() && (e instanceof Node || e instanceof Mf(e).Node)
      }

      function zf(e) {
        return !!Nf() && (e instanceof Element || e instanceof Mf(e).Element)
      }

      function Vf(e) {
        return !!Nf() && (e instanceof HTMLElement || e instanceof Mf(e).HTMLElement)
      }

      function Ff(e) {
        return !(!Nf() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof Mf(e).ShadowRoot)
      }

      function Bf(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = Yf(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== o && "contents" !== o
      }

      function qf(e) {
        return /^(table|td|th)$/.test(If(e))
      }

      function Wf(e) {
        try {
          if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
          return e.matches(":modal")
        } catch (e) {
          return !1
        }
      }
      const $f = /transform|translate|scale|rotate|perspective|filter/,
        Kf = /paint|layout|strict|content/,
        Xf = e => !!e && "none" !== e;
      let Hf;

      function Zf(e) {
        const t = zf(e) ? Yf(e) : e;
        return Xf(t.transform) || Xf(t.translate) || Xf(t.scale) || Xf(t.rotate) || Xf(t.perspective) || !Uf() && (Xf(t.backdropFilter) || Xf(t.filter)) || $f.test(t.willChange || "") || Kf.test(t.contain || "")
      }

      function Uf() {
        return null == Hf && (Hf = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Hf
      }

      function Gf(e) {
        return /^(html|body|#document)$/.test(If(e))
      }

      function Yf(e) {
        return Mf(e).getComputedStyle(e)
      }

      function Qf(e) {
        return zf(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Jf(e) {
        if ("html" === If(e)) return e;
        const t = e.assignedSlot || e.parentNode || Ff(e) && e.host || Lf(e);
        return Ff(t) ? t.host : t
      }

      function ep(e) {
        const t = Jf(e);
        return Gf(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vf(t) && Bf(t) ? t : ep(t)
      }

      function tp(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = ep(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          s = Mf(o);
        if (i) {
          const e = np(s);
          return t.concat(s, s.visualViewport || [], Bf(o) ? o : [], e && n ? tp(e) : [])
        }
        return t.concat(o, tp(o, [], n))
      }

      function np(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function rp(e) {
        const t = Yf(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = Vf(e),
          i = o ? e.offsetWidth : n,
          s = o ? e.offsetHeight : r,
          a = lf(n) !== i || lf(r) !== s;
        return a && (n = i, r = s), {
          width: n,
          height: r,
          $: a
        }
      }

      function op(e) {
        return zf(e) ? e : e.contextElement
      }

      function ip(e) {
        const t = op(e);
        if (!Vf(t)) return cf(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = rp(t);
        let s = (i ? lf(n.width) : n.width) / r,
          a = (i ? lf(n.height) : n.height) / o;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
          x: s,
          y: a
        }
      }
      const sp = cf(0);

      function ap(e) {
        const t = Mf(e);
        return Uf() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : sp
      }

      function lp(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = op(e);
        let s = cf(1);
        t && (r ? zf(r) && (s = ip(r)) : s = ip(e));
        const a = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== Mf(e)) && t
        }(i, n, r) ? ap(i) : cf(0);
        let l = (o.left + a.x) / s.x,
          u = (o.top + a.y) / s.y,
          c = o.width / s.x,
          d = o.height / s.y;
        if (i) {
          const e = Mf(i),
            t = r && zf(r) ? Mf(r) : r;
          let n = e,
            o = np(n);
          for (; o && r && t !== n;) {
            const e = ip(o),
              t = o.getBoundingClientRect(),
              r = Yf(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, u *= e.y, c *= e.x, d *= e.y, l += i, u += s, n = Mf(o), o = np(n)
          }
        }
        return Sf({
          width: c,
          height: d,
          x: l,
          y: u
        })
      }

      function up(e, t) {
        const n = Qf(e).scrollLeft;
        return t ? t.left + n : lp(Lf(e)).left + n
      }

      function cp(e, t) {
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - up(e, n),
          y: n.top + t.scrollTop
        }
      }

      function dp(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = Mf(e),
            r = Lf(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            s = r.clientHeight,
            a = 0,
            l = 0;
          if (o) {
            i = o.width, s = o.height;
            const e = Uf();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, l = o.offsetTop)
          }
          const u = up(r);
          if (u <= 0) {
            const e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              s = Math.abs(r.clientWidth - t.clientWidth - o);
            s <= 25 && (i -= s)
          } else u <= 25 && (i += u);
          return {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = Lf(e),
            n = Qf(e),
            r = e.ownerDocument.body,
            o = af(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = af(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let s = -n.scrollLeft + up(e);
          const a = -n.scrollTop;
          return "rtl" === Yf(r).direction && (s += af(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: s,
            y: a
          }
        }(Lf(e));
        else if (zf(t)) r = function(e, t) {
          const n = lp(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = Vf(e) ? ip(e) : cf(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = ap(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return Sf(r)
      }

      function fp(e, t) {
        const n = Jf(e);
        return !(n === t || !zf(n) || Gf(n)) && ("fixed" === Yf(n).position || fp(n, t))
      }

      function pp(e, t, n) {
        const r = Vf(t),
          o = Lf(t),
          i = "fixed" === n,
          s = lp(e, !0, i, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = cf(0);

        function u() {
          l.x = up(o)
        }
        if (r || !r && !i)
          if (("body" !== If(t) || Bf(o)) && (a = Qf(t)), r) {
            const e = lp(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && u();
        i && !r && o && u();
        const c = !o || r || i ? cf(0) : cp(o, a);
        return {
          x: s.left + a.scrollLeft - l.x - c.x,
          y: s.top + a.scrollTop - l.y - c.y,
          width: s.width,
          height: s.height
        }
      }

      function hp(e) {
        return "static" === Yf(e).position
      }

      function mp(e, t) {
        if (!Vf(e) || "fixed" === Yf(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return Lf(e) === n && (n = n.ownerDocument.body), n
      }

      function vp(e, t) {
        const n = Mf(e);
        if (Wf(e)) return n;
        if (!Vf(e)) {
          let t = Jf(e);
          for (; t && !Gf(t);) {
            if (zf(t) && !hp(t)) return t;
            t = Jf(t)
          }
          return n
        }
        let r = mp(e, t);
        for (; r && qf(r) && hp(r);) r = mp(r, t);
        return r && Gf(r) && hp(r) && !Zf(r) ? n : r || function(e) {
          let t = Jf(e);
          for (; Vf(t) && !Gf(t);) {
            if (Zf(t)) return t;
            if (Wf(t)) return null;
            t = Jf(t)
          }
          return null
        }(e) || n
      }
      const yp = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            s = Lf(r),
            a = !!t && Wf(t.floating);
          if (r === s || a && i) return n;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = cf(1);
          const c = cf(0),
            d = Vf(r);
          if ((d || !d && !i) && (("body" !== If(r) || Bf(s)) && (l = Qf(r)), d)) {
            const e = lp(r);
            u = ip(r), c.x = e.x + r.clientLeft, c.y = e.y + r.clientTop
          }
          const f = !s || d || i ? cf(0) : cp(s, l);
          return {
            width: n.width * u.x,
            height: n.height * u.y,
            x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
            y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
          }
        },
        getDocumentElement: Lf,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === n ? Wf(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = tp(e, [], !1).filter(e => zf(e) && "body" !== If(e)),
                o = null;
              const i = "fixed" === Yf(e).position;
              let s = i ? Jf(e) : e;
              for (; zf(s) && !Gf(s);) {
                const t = Yf(s),
                  n = Zf(s);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ("absolute" === o.position || "fixed" === o.position) || Bf(s) && !n && fp(e, s)) ? r = r.filter(e => e !== s) : o = t, s = Jf(s)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            s = dp(t, i[0], o);
          let a = s.top,
            l = s.right,
            u = s.bottom,
            c = s.left;
          for (let e = 1; e < i.length; e++) {
            const n = dp(t, i[e], o);
            a = af(n.top, a), l = sf(n.right, l), u = sf(n.bottom, u), c = af(n.left, c)
          }
          return {
            width: l - c,
            height: u - a,
            x: c,
            y: a
          }
        },
        getOffsetParent: vp,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || vp,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: pp(e.reference, await t(e.floating), e.strategy),
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
          } = rp(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: ip,
        isElement: zf,
        isRTL: function(e) {
          return "rtl" === Yf(e).direction
        }
      };

      function gp(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const bp = function(e) {
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
                elements: u
              } = t, {
                mainAxis: c = !0,
                crossAxis: d = !0,
                fallbackPlacements: f,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: m = !0,
                ...v
              } = pf(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const y = hf(o),
                g = gf(a),
                b = hf(a) === a,
                _ = await (null == l.isRTL ? void 0 : l.isRTL(u.floating)),
                w = f || (b || !m ? [jf(a)] : function(e) {
                  const t = jf(e);
                  return [_f(e), t, _f(t)]
                }(a)),
                x = "none" !== h;
              !f && x && w.push(... function(e, t, n, r) {
                const o = mf(e);
                let i = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? xf : wf : t ? wf : xf;
                    case "left":
                    case "right":
                      return t ? Cf : Of;
                    default:
                      return []
                  }
                }(hf(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(_f)))), i
              }(a, m, h, _));
              const C = [a, ...w],
                O = await l.detectOverflow(t, v),
                j = [];
              let P = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (c && j.push(O[y]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = mf(e),
                    o = bf(e),
                    i = yf(o);
                  let s = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (s = jf(s)), [s, jf(s)]
                }(o, s, _);
                j.push(O[e[0]], O[e[1]])
              }
              if (P = [...P, {
                  placement: o,
                  overflows: j
                }], !j.every(e => e <= 0)) {
                var S, E;
                const e = ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1,
                  t = C[e];
                if (t && ("alignment" !== d || g === gf(t) || P.every(e => gf(e.placement) !== g || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: P
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (E = P.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : E.placement;
                if (!n) switch (p) {
                  case "bestFit": {
                    var k;
                    const e = null == (k = P.filter(e => {
                      if (x) {
                        const t = gf(e.placement);
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
        _p = e => ({
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
              element: u,
              padding: c = 0
            } = pf(e, t) || {};
            if (null == u) return {};
            const d = Pf(c),
              f = {
                x: n,
                y: r
              },
              p = bf(o),
              h = yf(p),
              m = await s.getDimensions(u),
              v = "y" === p,
              y = v ? "top" : "left",
              g = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              _ = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
              w = f[p] - i.reference[p],
              x = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(u));
            let C = x ? x[b] : 0;
            C && await (null == s.isElement ? void 0 : s.isElement(x)) || (C = a.floating[b] || i.floating[h]);
            const O = _ / 2 - w / 2,
              j = C / 2 - m[h] / 2 - 1,
              P = sf(d[y], j),
              S = sf(d[g], j),
              E = P,
              k = C - m[h] - S,
              R = C / 2 - m[h] / 2 + O,
              T = ff(E, R, k),
              D = !l.arrow && null != mf(o) && R !== T && i.reference[h] / 2 - (R < E ? P : S) - m[h] / 2 < 0,
              N = D ? R < E ? R - E : R - k : 0;
            return {
              [p]: f[p] + N,
              data: {
                [p]: T,
                centerOffset: R - T - N,
                ...D && {
                  alignmentOffset: N
                }
              },
              reset: D
            }
          }
        }),
        wp = function(e) {
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
                crossAxis: u = !0
              } = pf(e, t), c = {
                x: n,
                y: r
              }, d = gf(o), f = vf(d);
              let p = c[f],
                h = c[d];
              const m = pf(a, t),
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
              if (u) {
                var y, g;
                const e = "y" === f ? "width" : "height",
                  t = Df.has(hf(o)),
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
        xp = (e, t, n) => {
          const r = new Map,
            o = {
              platform: yp,
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
              detectOverflow: kf
            }, l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let u = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: c,
                y: d
              } = Ef(u, r, l),
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
                data: _,
                reset: w
              } = await y({
                x: c,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: h,
                rects: u,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              c = null != g ? g : c, d = null != b ? b : d, h[v] = {
                ...h[v],
                ..._
              }, w && p < 50 && (p++, "object" == typeof w && (w.placement && (f = w.placement), w.rects && (u = !0 === w.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : w.rects), ({
                x: c,
                y: d
              } = Ef(u, f, l))), n = -1)
            }
            return {
              x: c,
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
      var Cp = "undefined" != typeof document ? q.useLayoutEffect : function() {};

      function Op(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 !== r--;)
              if (!Op(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Op(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function jp(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Pp(e, t) {
        const n = jp(e);
        return Math.round(t * n) / n
      }

      function Sp(e) {
        const t = q.useRef(e);
        return Cp(() => {
          t.current = e
        }), t
      }
      const Ep = (e, t) => {
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
                  } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), s = hf(n), a = mf(n), l = "y" === gf(n), u = Df.has(s) ? -1 : 1, c = i && l ? -1 : 1, d = pf(t, e);
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
                    x: p * c,
                    y: f * u
                  } : {
                    x: f * u,
                    y: p * c
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
        kp = (e, t) => {
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
                  ...u
                } = pf(e, t), c = {
                  x: n,
                  y: r
                }, d = await i.detectOverflow(t, u), f = gf(hf(o)), p = vf(f);
                let h = c[p],
                  m = c[f];
                if (s) {
                  const e = "y" === p ? "bottom" : "right";
                  h = ff(h + d["y" === p ? "top" : "left"], h, h - d[e])
                }
                if (a) {
                  const e = "y" === f ? "bottom" : "right";
                  m = ff(m + d["y" === f ? "top" : "left"], m, m - d[e])
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
        Rp = (e, t) => ({
          fn: wp(e).fn,
          options: [e, t]
        }),
        Tp = (e, t) => {
          const n = bp(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Dp = (e, t) => {
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
                  ...u
                } = pf(e, t), c = await s.detectOverflow(t, u), d = hf(o), f = mf(o), p = "y" === gf(o), {
                  width: h,
                  height: m
                } = i.floating;
                let v, y;
                "top" === d || "bottom" === d ? (v = d, y = f === (await (null == s.isRTL ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = d, v = "end" === f ? "top" : "bottom");
                const g = m - c.top - c.bottom,
                  b = h - c.left - c.right,
                  _ = sf(m - c[v], g),
                  w = sf(h - c[y], b),
                  x = !t.middlewareData.shift;
                let C = _,
                  O = w;
                if (null != (n = t.middlewareData.shift) && n.enabled.x && (O = b), null != (r = t.middlewareData.shift) && r.enabled.y && (C = g), x && !f) {
                  const e = af(c.left, 0),
                    t = af(c.right, 0),
                    n = af(c.top, 0),
                    r = af(c.bottom, 0);
                  p ? O = h - 2 * (0 !== e || 0 !== t ? e + t : af(c.left, c.right)) : C = m - 2 * (0 !== n || 0 !== r ? n + r : af(c.top, c.bottom))
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
        Np = (e, t) => {
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
                } = pf(e, t);
                switch (o) {
                  case "referenceHidden": {
                    const e = Rf(await r.detectOverflow(t, {
                      ...i,
                      elementContext: "reference"
                    }), n.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: Tf(e)
                      }
                    }
                  }
                  case "escaped": {
                    const e = Rf(await r.detectOverflow(t, {
                      ...i,
                      altBoundary: !0
                    }), n.floating);
                    return {
                      data: {
                        escapedOffsets: e,
                        escaped: Tf(e)
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
        Ip = (e, t) => {
          const n = (e => ({
            name: "arrow",
            options: e,
            fn(t) {
              const {
                element: n,
                padding: r
              } = "function" == typeof e ? e(t) : e;
              return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? _p({
                element: n.current,
                padding: r
              }).fn(t) : {} : n ? _p({
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

      function Mp(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Lp = Symbol("radix.slottable");

      function Ap(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Lp
      }
      var zp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = Mp(e),
                n = q.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = q.Children.toArray(r), s = i.find(Ap);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                    return (0, j.jsx)(t, {
                      ...o,
                      ref: n,
                      children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        Vp = q.forwardRef((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, j.jsx)(zp.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, j.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Vp.displayName = "Arrow";
      var Fp = Vp;

      function Bp(...e) {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function qp(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Wp = Symbol("radix.slottable");

      function $p(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Wp
      }
      var Kp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const n = function(e) {
            const t = qp(e),
              n = q.forwardRef((e, n) => {
                const {
                  children: r,
                  ...o
                } = e, i = q.Children.toArray(r), s = i.find($p);
                if (s) {
                  const e = s.props.children,
                    r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                  })
                }
                return (0, j.jsx)(t, {
                  ...o,
                  ref: n,
                  children: r
                })
              });
            return n.displayName = `${e}.Slot`, n
          }(`Primitive.${t}`),
          r = q.forwardRef((e, r) => {
            const {
              asChild: o,
              ...i
            } = e, s = o ? n : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
              ...i,
              ref: r
            })
          });
        return r.displayName = `Primitive.${t}`, {
          ...e,
          [t]: r
        }
      }, {});

      function Xp(e) {
        const [t, n] = q.useState(void 0);
        return (0, ef.N)(() => {
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
      var Hp = "Popper",
        [Zp, Up] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => q.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return q.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = q.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
              return (0, j.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = q.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, Bp(r, ...t)]
        }(Hp),
        [Gp, Yp] = Zp(Hp),
        Qp = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = q.useState(null);
          return (0, j.jsx)(Gp, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      Qp.displayName = Hp;
      var Jp = "PopperAnchor",
        eh = q.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, i = Yp(Jp, n), s = q.useRef(null), a = (0, zd.s)(t, s), l = q.useRef(null);
          return q.useEffect(() => {
            const e = l.current;
            l.current = r?.current || s.current, e !== l.current && i.onAnchorChange(l.current)
          }), r ? null : (0, j.jsx)(Kp.div, {
            ...o,
            ref: a
          })
        });
      eh.displayName = Jp;
      var th = "PopperContent",
        [nh, rh] = Zp(th),
        oh = q.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: c = 0,
            sticky: d = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: h,
            ...m
          } = e, v = Yp(th, n), [y, g] = q.useState(null), b = (0, zd.s)(t, e => g(e)), [_, w] = q.useState(null), x = Xp(_), C = x?.width ?? 0, O = x?.height ?? 0, P = r + ("center" !== i ? "-" + i : ""), S = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, E = Array.isArray(u) ? u : [u], k = E.length > 0, R = {
            padding: S,
            boundary: E.filter(lh),
            altBoundary: k
          }, {
            refs: T,
            floatingStyles: D,
            placement: N,
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
              open: u
            } = e, [c, d] = q.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = q.useState(r);
            Op(f, r) || p(r);
            const [h, m] = q.useState(null), [v, y] = q.useState(null), g = q.useCallback(e => {
              e !== x.current && (x.current = e, m(e))
            }, []), b = q.useCallback(e => {
              e !== C.current && (C.current = e, y(e))
            }, []), _ = i || h, w = s || v, x = q.useRef(null), C = q.useRef(null), O = q.useRef(c), j = null != l, P = Sp(l), S = Sp(o), E = Sp(u), k = q.useCallback(() => {
              if (!x.current || !C.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: f
              };
              S.current && (e.platform = S.current), xp(x.current, C.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== E.current
                };
                R.current && !Op(O.current, t) && (O.current = t, xd.flushSync(() => {
                  d(t)
                }))
              })
            }, [f, t, n, S, E]);
            Cp(() => {
              !1 === u && O.current.isPositioned && (O.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [u]);
            const R = q.useRef(!1);
            Cp(() => (R.current = !0, () => {
              R.current = !1
            }), []), Cp(() => {
              if (_ && (x.current = _), w && (C.current = w), _ && w) {
                if (P.current) return P.current(_, w, k);
                k()
              }
            }, [_, w, k, P, j]);
            const T = q.useMemo(() => ({
                reference: x,
                floating: C,
                setReference: g,
                setFloating: b
              }), [g, b]),
              D = q.useMemo(() => ({
                reference: _,
                floating: w
              }), [_, w]),
              N = q.useMemo(() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!D.floating) return e;
                const t = Pp(D.floating, c.x),
                  r = Pp(D.floating, c.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...jp(D.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }, [n, a, D.floating, c.x, c.y]);
            return q.useMemo(() => ({
              ...c,
              update: k,
              refs: T,
              elements: D,
              floatingStyles: N
            }), [c, k, T, D, N])
          }({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: s = "function" == typeof ResizeObserver,
                layoutShift: a = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = r, u = op(e), c = o || i ? [...u ? tp(u) : [], ...t ? tp(t) : []] : [];
              c.forEach(e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), i && e.addEventListener("resize", n)
              });
              const d = u && a ? function(e, t) {
                let n, r = null;
                const o = Lf(e);

                function i() {
                  var e;
                  clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                }
                return function s(a, l) {
                  void 0 === a && (a = !1), void 0 === l && (l = 1), i();
                  const u = e.getBoundingClientRect(),
                    {
                      left: c,
                      top: d,
                      width: f,
                      height: p
                    } = u;
                  if (a || t(), !f || !p) return;
                  const h = {
                    rootMargin: -uf(d) + "px " + -uf(o.clientWidth - (c + f)) + "px " + -uf(o.clientHeight - (d + p)) + "px " + -uf(c) + "px",
                    threshold: af(0, sf(1, l)) || 1
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
                    1 !== r || gp(u, e.getBoundingClientRect()) || s(), m = !1
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
              }(u, n) : null;
              let f, p = -1,
                h = null;
              s && (h = new ResizeObserver(e => {
                let [r] = e;
                r && r.target === u && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                  var e;
                  null == (e = h) || e.observe(t)
                })), n()
              }), u && !l && h.observe(u), t && h.observe(t));
              let m = l ? lp(e) : null;
              return l && function t() {
                const r = lp(e);
                m && !gp(m, r) && n(), m = r, f = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                c.forEach(e => {
                  o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
                }), null == d || d(), null == (e = h) || e.disconnect(), h = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [Ep({
              mainAxis: o + O,
              alignmentAxis: s
            }), l && kp({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === d ? Rp() : void 0,
              ...R
            }), l && Tp({
              ...R
            }), Dp({
              ...R,
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
            }), _ && Ip({
              element: _,
              padding: a
            }), uh({
              arrowWidth: C,
              arrowHeight: O
            }), f && Np({
              strategy: "referenceHidden",
              ...R
            })]
          }), [L, A] = ch(N), z = (0, Kd.c)(h);
          (0, ef.N)(() => {
            I && z?.()
          }, [I, z]);
          const V = M.arrow?.x,
            F = M.arrow?.y,
            B = 0 !== M.arrow?.centerOffset,
            [W, $] = q.useState();
          return (0, ef.N)(() => {
            y && $(window.getComputedStyle(y).zIndex)
          }, [y]), (0, j.jsx)("div", {
            ref: T.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...D,
              transform: I ? D.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: W,
              "--radix-popper-transform-origin": [M.transformOrigin?.x, M.transformOrigin?.y].join(" "),
              ...M.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, j.jsx)(nh, {
              scope: n,
              placedSide: L,
              onArrowChange: w,
              arrowX: V,
              arrowY: F,
              shouldHideArrow: B,
              children: (0, j.jsx)(Kp.div, {
                "data-side": L,
                "data-align": A,
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
      oh.displayName = th;
      var ih = "PopperArrow",
        sh = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        ah = q.forwardRef(function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = rh(ih, n), i = sh[o.placedSide];
          return (0, j.jsx)("span", {
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
            children: (0, j.jsx)(Fp, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        });

      function lh(e) {
        return null !== e
      }
      ah.displayName = ih;
      var uh = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, u] = ch(n), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [u], d = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let p = "",
            h = "";
          return "bottom" === l ? (p = i ? c : `${d}px`, h = -a + "px") : "top" === l ? (p = i ? c : `${d}px`, h = `${r.floating.height+a}px`) : "right" === l ? (p = -a + "px", h = i ? c : `${f}px`) : "left" === l && (p = `${r.floating.width+a}px`, h = i ? c : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function ch(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var dh = Qp,
        fh = eh,
        ph = oh,
        hh = ah;

      function mh(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var vh = Symbol("radix.slottable");

      function yh(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === vh
      }
      var gh = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = mh(e),
                n = q.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = q.Children.toArray(r), s = i.find(yh);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                    return (0, j.jsx)(t, {
                      ...o,
                      ref: n,
                      children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        bh = q.forwardRef((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, i] = q.useState(!1);
          (0, ef.N)(() => i(!0), []);
          const s = n || o && globalThis?.document?.body;
          return s ? xd.createPortal((0, j.jsx)(gh.div, {
            ...r,
            ref: t
          }), s) : null
        });
      bh.displayName = "Portal";
      var _h = n(7971);

      function wh(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var xh = Symbol("radix.slottable");

      function Ch(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === xh
      }
      var Oh = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = wh(e),
                n = q.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = q.Children.toArray(r), s = i.find(Ch);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                    return (0, j.jsx)(t, {
                      ...o,
                      ref: n,
                      children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        jh = W[" useInsertionEffect ".trim().toString()] || ef.N;

      function Ph({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [o, i, s] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = q.useState(e), o = q.useRef(n), i = q.useRef(t);
          return jh(() => {
            i.current = t
          }, [t]), q.useEffect(() => {
            o.current !== n && (i.current?.(n), o.current = n)
          }, [n, o]), [n, r, i]
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, l = a ? e : o; {
          const t = q.useRef(void 0 !== e);
          q.useEffect(() => {
            const e = t.current;
            if (e !== a) {
              const t = e ? "controlled" : "uncontrolled",
                n = a ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = a
          }, [a, r])
        }
        const u = q.useCallback(t => {
          if (a) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && s.current?.(n)
          } else i(t)
        }, [a, e, i, s]);
        return [l, u]
      }

      function Sh(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      Symbol("RADIX:SYNC_STATE");
      var Eh = Symbol("radix.slottable");

      function kh(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Eh
      }
      var Rh = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = Sh(e),
                n = q.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = q.Children.toArray(r), s = i.find(kh);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                    return (0, j.jsx)(t, {
                      ...o,
                      ref: n,
                      children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        Th = Object.freeze({
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
        Dh = q.forwardRef((e, t) => (0, j.jsx)(Rh.span, {
          ...e,
          ref: t,
          style: {
            ...Th,
            ...e.style
          }
        }));
      Dh.displayName = "VisuallyHidden";
      var Nh = Dh,
        [Ih, Mh] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => q.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return q.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = q.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
              return (0, j.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = q.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, Vd(r, ...t)]
        }("Tooltip", [Up]),
        Lh = Up(),
        Ah = "TooltipProvider",
        zh = 700,
        Vh = "tooltip.open",
        [Fh, Bh] = Ih(Ah),
        qh = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = zh,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, s = q.useRef(!0), a = q.useRef(!1), l = q.useRef(0);
          return q.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, j.jsx)(Fh, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: n,
            onOpen: q.useCallback(() => {
              window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: q.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, r)
            }, [r]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: q.useCallback(e => {
              a.current = e
            }, []),
            disableHoverableContent: o,
            children: i
          })
        };
      qh.displayName = Ah;
      var Wh = "Tooltip",
        [$h, Kh] = Ih(Wh),
        Xh = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
          } = e, l = Bh(Wh, e.__scopeTooltip), u = Lh(t), [c, d] = q.useState(null), f = rf(), p = q.useRef(0), h = s ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = q.useRef(!1), [y, g] = Ph({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Vh))) : l.onClose(), i?.(e)
            },
            caller: Wh
          }), b = q.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), _ = q.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, v.current = !1, g(!0)
          }, [g]), w = q.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), x = q.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              v.current = !0, g(!0), p.current = 0
            }, m)
          }, [m, g]);
          return q.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, j.jsx)(dh, {
            ...u,
            children: (0, j.jsx)($h, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: d,
              onTriggerEnter: q.useCallback(() => {
                l.isOpenDelayedRef.current ? x() : _()
              }, [l.isOpenDelayedRef, x, _]),
              onTriggerLeave: q.useCallback(() => {
                h ? w() : (window.clearTimeout(p.current), p.current = 0)
              }, [w, h]),
              onOpen: _,
              onClose: w,
              disableHoverableContent: h,
              children: n
            })
          })
        };
      Xh.displayName = Wh;
      var Hh = "TooltipTrigger",
        Zh = q.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Kh(Hh, n), i = Bh(Hh, n), s = Lh(n), a = q.useRef(null), l = (0, zd.s)(t, a, o.onTriggerChange), u = q.useRef(!1), c = q.useRef(!1), d = q.useCallback(() => u.current = !1, []);
          return q.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, j.jsx)(fh, {
            asChild: !0,
            ...s,
            children: (0, j.jsx)(Oh.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: (0, Ad.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, Ad.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, Ad.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: (0, Ad.mK)(e.onFocus, () => {
                u.current || o.onOpen()
              }),
              onBlur: (0, Ad.mK)(e.onBlur, o.onClose),
              onClick: (0, Ad.mK)(e.onClick, o.onClose)
            })
          })
        });
      Zh.displayName = Hh;
      var Uh = "TooltipPortal",
        [Gh, Yh] = Ih(Uh, {
          forceMount: void 0
        }),
        Qh = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Kh(Uh, t);
          return (0, j.jsx)(Gh, {
            scope: t,
            forceMount: n,
            children: (0, j.jsx)(_h.C, {
              present: n || i.open,
              children: (0, j.jsx)(bh, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Qh.displayName = Uh;
      var Jh = "TooltipContent",
        em = q.forwardRef((e, t) => {
          const n = Yh(Jh, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = Kh(Jh, e.__scopeTooltip);
          return (0, j.jsx)(_h.C, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, j.jsx)(im, {
              side: o,
              ...i,
              ref: t
            }) : (0, j.jsx)(tm, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        tm = q.forwardRef((e, t) => {
          const n = Kh(Jh, e.__scopeTooltip),
            r = Bh(Jh, e.__scopeTooltip),
            o = q.useRef(null),
            i = (0, zd.s)(t, o),
            [s, a] = q.useState(null),
            {
              trigger: l,
              onClose: u
            } = n,
            c = o.current,
            {
              onPointerInTransitChange: d
            } = r,
            f = q.useCallback(() => {
              a(null), d(!1)
            }, [d]),
            p = q.useCallback((e, t) => {
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
          return q.useEffect(() => () => f(), [f]), q.useEffect(() => {
            if (l && c) {
              const e = e => p(e, c),
                t = e => p(e, l);
              return l.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [l, c, p, f]), q.useEffect(() => {
            if (s) {
              const e = e => {
                const t = e.target,
                  n = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = l?.contains(t) || c?.contains(t),
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
                        u = s.y,
                        c = a.x,
                        d = a.y;
                      u > r != d > r && n < (c - l) * (r - u) / (d - u) + l && (o = !o)
                    }
                    return o
                  }(n, s);
                r ? f() : o && (f(), u())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, c, s, u, f]), (0, j.jsx)(im, {
            ...e,
            ref: i
          })
        }),
        [nm, rm] = Ih(Wh, {
          isInside: !1
        }),
        om = function(e) {
          const t = ({
            children: e
          }) => (0, j.jsx)(j.Fragment, {
            children: e
          });
          return t.displayName = `${e}.Slottable`, t.__radixId = xh, t
        }("TooltipContent"),
        im = q.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
          } = e, l = Kh(Jh, n), u = Lh(n), {
            onClose: c
          } = l;
          return q.useEffect(() => (document.addEventListener(Vh, c), () => document.removeEventListener(Vh, c)), [c]), q.useEffect(() => {
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
          }, [l.trigger, c]), (0, j.jsx)(Zd, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, j.jsxs)(ph, {
              "data-state": l.stateAttribute,
              ...u,
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
              children: [(0, j.jsx)(om, {
                children: r
              }), (0, j.jsx)(nm, {
                scope: n,
                isInside: !0,
                children: (0, j.jsx)(Nh, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        });
      em.displayName = Jh;
      var sm = "TooltipArrow",
        am = q.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Lh(n);
          return rm(sm, n).isInside ? null : (0, j.jsx)(hh, {
            ...o,
            ...r,
            ref: t
          })
        });
      am.displayName = sm;
      var lm = qh,
        um = Xh,
        cm = Zh,
        dm = Qh,
        fm = em,
        pm = am;
      const hm = (0, q.createContext)(null);

      function mm() {
        const e = (0, q.useContext)(hm);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const vm = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: n,
          onOpenChange: r,
          ...o
        }) => {
          const [i = !1, s] = (0, G.ic)({
            defaultProp: n,
            prop: o.isOpen,
            onChange: r
          });
          return (0, j.jsx)(lm, {
            delayDuration: t,
            children: (0, j.jsx)(hm.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, j.jsx)(um, {
                open: i,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        ym = (0, q.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => (0, j.jsx)(cm, {
          asChild: !0,
          "data-testid": t,
          ...n,
          ref: r,
          children: e
        })),
        gm = (0, q.forwardRef)(({
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
            isOpen: u
          } = mm(), c = (0, G.jt)(), d = Ld(fm), f = vd(u, {
            delay: u ? 0 : 200,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            config: Pc.stiff,
            immediate: c
          }), p = (0, H.v6)({
            "data-testid": e,
            side: t,
            align: r,
            sticky: s,
            sideOffset: n,
            alignOffset: o,
            avoidCollisions: i,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, a);
          return f(e => (0, j.jsx)(d, {
            ...p,
            style: e,
            ref: l
          }))
        }),
        bm = (0, q.forwardRef)(({
          testId: e
        }, t) => {
          const n = (0, H.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, j.jsx)(pm, {
            ...n,
            ref: t
          })
        }),
        _m = dm;
      var wm = n(56165);

      function xm(...e) {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var Cm = n(71427);

      function Om(e) {
        const t = q.useRef({
          value: e,
          previous: e
        });
        return q.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }

      function jm(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Pm = Symbol("radix.slottable");

      function Sm(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Pm
      }
      var Em = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const n = function(e) {
            const t = jm(e),
              n = q.forwardRef((e, n) => {
                const {
                  children: r,
                  ...o
                } = e, i = q.Children.toArray(r), s = i.find(Sm);
                if (s) {
                  const e = s.props.children,
                    r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                  })
                }
                return (0, j.jsx)(t, {
                  ...o,
                  ref: n,
                  children: r
                })
              });
            return n.displayName = `${e}.Slot`, n
          }(`Primitive.${t}`),
          r = q.forwardRef((e, r) => {
            const {
              asChild: o,
              ...i
            } = e, s = o ? n : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
              ...i,
              ref: r
            })
          });
        return r.displayName = `Primitive.${t}`, {
          ...e,
          [t]: r
        }
      }, {});

      function km(...e) {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function Rm(e) {
        const t = Tm(e),
          n = q.forwardRef((e, n) => {
            const {
              children: r,
              ...o
            } = e, i = q.Children.toArray(r), s = i.find(Nm);
            if (s) {
              const e = s.props.children,
                r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
              return (0, j.jsx)(t, {
                ...o,
                ref: n,
                children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
              })
            }
            return (0, j.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function Tm(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Dm = Symbol("radix.slottable");

      function Nm(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Dm
      }

      function Im(e) {
        const t = e + "CollectionProvider",
          [n, r] = function(e, t = []) {
            let n = [];
            const r = () => {
              const t = n.map(e => q.createContext(e));
              return function(n) {
                const r = n?.[e] || t;
                return q.useMemo(() => ({
                  [`__scope${e}`]: {
                    ...n,
                    [e]: r
                  }
                }), [n, r])
              }
            };
            return r.scopeName = e, [function(t, r) {
              const o = q.createContext(r),
                i = n.length;
              n = [...n, r];
              const s = t => {
                const {
                  scope: n,
                  children: r,
                  ...s
                } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
                return (0, j.jsx)(a.Provider, {
                  value: l,
                  children: r
                })
              };
              return s.displayName = t + "Provider", [s, function(n, s) {
                const a = s?.[e]?.[i] || o,
                  l = q.useContext(a);
                if (l) return l;
                if (void 0 !== r) return r;
                throw new Error(`\`${n}\` must be used within \`${t}\``)
              }]
            }, km(r, ...t)]
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
            } = e, r = q.useRef(null), i = q.useRef(new Map).current;
            return (0, j.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          };
        s.displayName = t;
        const a = e + "CollectionSlot",
          l = Rm(a),
          u = q.forwardRef((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = i(a, n), s = (0, zd.s)(t, o.collectionRef);
            return (0, j.jsx)(l, {
              ref: s,
              children: r
            })
          });
        u.displayName = a;
        const c = e + "CollectionItemSlot",
          d = "data-radix-collection-item",
          f = Rm(c),
          p = q.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...o
            } = e, s = q.useRef(null), a = (0, zd.s)(t, s), l = i(c, n);
            return q.useEffect(() => (l.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              l.itemMap.delete(s)
            })), (0, j.jsx)(f, {
              [d]: "",
              ref: a,
              children: r
            })
          });
        return p.displayName = c, [{
          Provider: s,
          Slot: u,
          ItemSlot: p
        }, function(t) {
          const n = i(e + "CollectionConsumer", t),
            r = q.useCallback(() => {
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
      var Mm = ["PageUp", "PageDown"],
        Lm = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Am = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        zm = "Slider",
        [Vm, Fm, Bm] = Im(zm),
        [qm, Wm] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => q.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return q.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = q.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
              return (0, j.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = q.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, xm(r, ...t)]
        }(zm, [Bm]),
        [$m, Km] = qm(zm),
        Xm = q.forwardRef((e, t) => {
          const {
            name: n,
            min: r = 0,
            max: o = 100,
            step: i = 1,
            orientation: s = "horizontal",
            disabled: a = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: u = [r],
            value: c,
            onValueChange: d = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: h,
            ...m
          } = e, v = q.useRef(new Set), y = q.useRef(0), g = "horizontal" === s ? Um : Gm, [b = [], _] = Ph({
            prop: c,
            defaultProp: u,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), w = q.useRef(b);

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
              u = (0, wm.q)(a, [r, o]);
            _((e = []) => {
              const r = function(e = [], t, n) {
                const r = [...e];
                return r[n] = t, r.sort((e, t) => e - t)
              }(e, u, t);
              if (function(e, t) {
                  if (t > 0) {
                    const n = function(e) {
                      return e.slice(0, -1).map((t, n) => e[n + 1] - t)
                    }(e);
                    return Math.min(...n) >= t
                  }
                  return !0
                }(r, l * i)) {
                y.current = r.indexOf(u);
                const t = String(r) !== String(e);
                return t && n && f(r), t ? r : e
              }
              return e
            })
          }
          return (0, j.jsx)($m, {
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
            children: (0, j.jsx)(Vm.Provider, {
              scope: e.__scopeSlider,
              children: (0, j.jsx)(Vm.Slot, {
                scope: e.__scopeSlider,
                children: (0, j.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, Ad.mK)(m.onPointerDown, () => {
                    a || (w.current = b)
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
                    const e = w.current[y.current];
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
                      const n = Mm.includes(e.key) || e.shiftKey && Lm.includes(e.key) ? 10 : 1,
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
      var [Hm, Zm] = qm(zm, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Um = q.forwardRef((e, t) => {
        const {
          min: n,
          max: r,
          dir: o,
          inverted: i,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: l,
          onStepKeyDown: u,
          ...c
        } = e, [d, f] = q.useState(null), p = (0, zd.s)(t, e => f(e)), h = q.useRef(void 0), m = (0, Cm.jH)(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = h.current || d.getBoundingClientRect(),
            o = av([0, t.width], y ? [n, r] : [r, n]);
          return h.current = t, o(e - t.left)
        }
        return (0, j.jsx)(Hm, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, j.jsx)(Ym, {
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
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Gm = q.forwardRef((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...u
        } = e, c = q.useRef(null), d = (0, zd.s)(t, c), f = q.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = av([0, t.height], p ? [r, n] : [n, r]);
          return f.current = t, o(e - t.top)
        }
        return (0, j.jsx)(Hm, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, j.jsx)(Ym, {
            "data-orientation": "vertical",
            ...u,
            ref: d,
            style: {
              ...u.style,
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
      }), Ym = q.forwardRef((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...u
        } = e, c = Km(zm, n);
        return (0, j.jsx)(Em.span, {
          ...u,
          ref: t,
          onKeyDown: (0, Ad.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : Mm.concat(Lm).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, Ad.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : r(e)
          }),
          onPointerMove: (0, Ad.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, Ad.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), Qm = "SliderTrack", Jm = q.forwardRef((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = Km(Qm, n);
        return (0, j.jsx)(Em.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      });
      Jm.displayName = Qm;
      var ev = "SliderRange",
        tv = q.forwardRef((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = Km(ev, n), i = Zm(ev, n), s = q.useRef(null), a = (0, zd.s)(t, s), l = o.values.length, u = o.values.map(e => sv(e, o.min, o.max)), c = l > 1 ? Math.min(...u) : 0, d = 100 - Math.max(...u);
          return (0, j.jsx)(Em.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: a,
            style: {
              ...e.style,
              [i.startEdge]: c + "%",
              [i.endEdge]: d + "%"
            }
          })
        });
      tv.displayName = ev;
      var nv = "SliderThumb",
        rv = q.forwardRef((e, t) => {
          const n = Fm(e.__scopeSlider),
            [r, o] = q.useState(null),
            i = (0, zd.s)(t, e => o(e)),
            s = q.useMemo(() => r ? n().findIndex(e => e.ref.current === r) : -1, [n, r]);
          return (0, j.jsx)(ov, {
            ...e,
            ref: i,
            index: s
          })
        }),
        ov = q.forwardRef((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...i
          } = e, s = Km(nv, n), a = Zm(nv, n), [l, u] = q.useState(null), c = (0, zd.s)(t, e => u(e)), d = !l || s.form || !!l.closest("form"), f = Xp(l), p = s.values[r], h = void 0 === p ? 0 : sv(p, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, s.values.length), v = f?.[a.size], y = v ? function(e, t, n) {
            const r = e / 2;
            return (r - av([0, 50], [0, r])(t) * n) * n
          }(v, h, a.direction) : 0;
          return q.useEffect(() => {
            if (l) return s.thumbs.add(l), () => {
              s.thumbs.delete(l)
            }
          }, [l, s.thumbs]), (0, j.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${h}% + ${y}px)`
            },
            children: [(0, j.jsx)(Vm.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, j.jsx)(Em.span, {
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
                ref: c,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: (0, Ad.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = r
                })
              })
            }), d && (0, j.jsx)(iv, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: p
            }, r)]
          })
        });
      rv.displayName = nv;
      var iv = q.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = q.useRef(null),
          i = (0, zd.s)(o, r),
          s = Om(t);
        return q.useEffect(() => {
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
        }, [s, t]), (0, j.jsx)(Em.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: i,
          defaultValue: t
        })
      });

      function sv(e, t, n) {
        const r = 100 / (n - t) * (e - t);
        return (0, wm.q)(r, [0, 100])
      }

      function av(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      iv.displayName = "RadioBubbleInput";
      var lv = Xm,
        uv = Jm,
        cv = tv,
        dv = rv;

      function fv(...e) {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function pv(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var hv = Symbol("radix.slottable");

      function mv(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === hv
      }
      var vv = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = pv(e),
                n = q.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = q.Children.toArray(r), s = i.find(mv);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                    return (0, j.jsx)(t, {
                      ...o,
                      ref: n,
                      children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        yv = "focusScope.autoFocusOnMount",
        gv = "focusScope.autoFocusOnUnmount",
        bv = {
          bubbles: !1,
          cancelable: !0
        },
        _v = q.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = q.useState(null), u = (0, Kd.c)(o), c = (0, Kd.c)(i), d = q.useRef(null), f = (0, zd.s)(t, e => l(e)), p = q.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          q.useEffect(() => {
            if (r) {
              let e = function(e) {
                  if (p.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? d.current = t : Ov(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || Ov(d.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Ov(a)
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
          }, [r, a, p.paused]), q.useEffect(() => {
            if (a) {
              jv.add(p);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(yv, bv);
                a.addEventListener(yv, u), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (Ov(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(wv(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Ov(a))
              }
              return () => {
                a.removeEventListener(yv, u), setTimeout(() => {
                  const t = new CustomEvent(gv, bv);
                  a.addEventListener(gv, c), a.dispatchEvent(t), t.defaultPrevented || Ov(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(gv, c), jv.remove(p)
                }, 0)
              }
            }
          }, [a, u, c, p]);
          const h = q.useCallback(e => {
            if (!n && !r) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = wv(e);
                  return [xv(t, e), xv(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && Ov(i, {
                select: !0
              })) : (e.preventDefault(), n && Ov(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, r, p.paused]);
          return (0, j.jsx)(vv.div, {
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

      function xv(e, t) {
        for (const n of e)
          if (!Cv(n, {
              upTo: t
            })) return n
      }

      function Cv(e, {
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

      function Ov(e, {
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
      _v.displayName = "FocusScope";
      var jv = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = Pv(e, t), e.unshift(t)
          },
          remove(t) {
            e = Pv(e, t), e[0]?.resume()
          }
        }
      }();

      function Pv(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }

      function Sv(e) {
        const t = Ev(e),
          n = q.forwardRef((e, n) => {
            const {
              children: r,
              ...o
            } = e, i = q.Children.toArray(r), s = i.find(Rv);
            if (s) {
              const e = s.props.children,
                r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
              return (0, j.jsx)(t, {
                ...o,
                ref: n,
                children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
              })
            }
            return (0, j.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function Ev(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var kv = Symbol("radix.slottable");

      function Rv(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === kv
      }
      var Tv = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = Sv(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        Dv = 0;

      function Nv() {
        q.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Iv()), document.body.insertAdjacentElement("beforeend", e[1] ?? Iv()), Dv++, () => {
            1 === Dv && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), Dv--
          }
        }, [])
      }

      function Iv() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Mv = n(31635),
        Lv = "right-scroll-bar-position",
        Av = "width-before-scroll-bar";

      function zv(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var Vv = "undefined" != typeof window ? q.useLayoutEffect : q.useEffect,
        Fv = new WeakMap;

      function Bv(e) {
        return e
      }
      var qv = function(e) {
          void 0 === e && (e = {});
          var t = function(e, t) {
            void 0 === t && (t = Bv);
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
          return t.options = (0, Mv.__assign)({
            async: !0,
            ssr: !1
          }, e), t
        }(),
        Wv = function() {},
        $v = q.forwardRef(function(e, t) {
          var n = q.useRef(null),
            r = q.useState({
              onScrollCapture: Wv,
              onWheelCapture: Wv,
              onTouchMoveCapture: Wv
            }),
            o = r[0],
            i = r[1],
            s = e.forwardProps,
            a = e.children,
            l = e.className,
            u = e.removeScrollBar,
            c = e.enabled,
            d = e.shards,
            f = e.sideCar,
            p = e.noRelative,
            h = e.noIsolation,
            m = e.inert,
            v = e.allowPinchZoom,
            y = e.as,
            g = void 0 === y ? "div" : y,
            b = e.gapMode,
            _ = (0, Mv.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            w = f,
            x = function(e, t) {
              var n, r, o, i = (n = t || null, r = function(t) {
                return e.forEach(function(e) {
                  return zv(e, t)
                })
              }, (o = (0, q.useState)(function() {
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
              return Vv(function() {
                var t = Fv.get(i);
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
                Fv.set(i, e)
              }, [e]), i
            }([n, t]),
            C = (0, Mv.__assign)((0, Mv.__assign)({}, _), o);
          return q.createElement(q.Fragment, null, c && q.createElement(w, {
            sideCar: qv,
            removeScrollBar: u,
            shards: d,
            noRelative: p,
            noIsolation: h,
            inert: m,
            setCallbacks: i,
            allowPinchZoom: !!v,
            lockRef: n,
            gapMode: b
          }), s ? q.cloneElement(q.Children.only(a), (0, Mv.__assign)((0, Mv.__assign)({}, C), {
            ref: x
          })) : q.createElement(g, (0, Mv.__assign)({}, C, {
            className: l,
            ref: x
          }), a))
        });
      $v.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, $v.classNames = {
        fullWidth: Av,
        zeroRight: Lv
      };
      var Kv = function(e) {
        var t = e.sideCar,
          n = (0, Mv.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw new Error("Sidecar medium not found");
        return q.createElement(r, (0, Mv.__assign)({}, n))
      };
      Kv.isSideCarExport = !0;
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
            q.useEffect(function() {
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
        Zv = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        Uv = function(e) {
          return parseInt(e || "", 10) || 0
        },
        Gv = Hv(),
        Yv = "data-scroll-locked",
        Qv = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            s = e.right,
            a = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(Yv, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(s, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Lv, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(Av, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(Lv, " .").concat(Lv, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(Av, " .").concat(Av, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(Yv, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
        },
        Jv = function() {
          var e = parseInt(document.body.getAttribute(Yv) || "0", 10);
          return isFinite(e) ? e : 0
        },
        ey = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          q.useEffect(function() {
            return document.body.setAttribute(Yv, (Jv() + 1).toString()),
              function() {
                var e = Jv() - 1;
                e <= 0 ? document.body.removeAttribute(Yv) : document.body.setAttribute(Yv, e.toString())
              }
          }, []);
          var i = q.useMemo(function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Zv;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [Uv(n), Uv(r), Uv(o)]
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
          return q.createElement(Gv, {
            styles: Qv(i, !t, o, n ? "" : "!important")
          })
        },
        ty = !1;
      if ("undefined" != typeof window) try {
        var ny = Object.defineProperty({}, "passive", {
          get: function() {
            return ty = !0, !0
          }
        });
        window.addEventListener("test", ny, ny), window.removeEventListener("test", ny, ny)
      } catch (e) {
        ty = !1
      }
      var ry = !!ty && {
          passive: !1
        },
        oy = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        iy = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), sy(e, r)) {
              var o = ay(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        sy = function(e, t) {
          return "v" === e ? function(e) {
            return oy(e, "overflowY")
          }(t) : function(e) {
            return oy(e, "overflowX")
          }(t)
        },
        ay = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        ly = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        uy = function(e) {
          return [e.deltaX, e.deltaY]
        },
        cy = function(e) {
          return e && "current" in e ? e.current : e
        },
        dy = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        fy = 0,
        py = [];

      function hy(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const my = (vy = function(e) {
        var t = q.useRef([]),
          n = q.useRef([0, 0]),
          r = q.useRef(),
          o = q.useState(fy++)[0],
          i = q.useState(Hv)[0],
          s = q.useRef(e);
        q.useEffect(function() {
          s.current = e
        }, [e]), q.useEffect(function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, Mv.__spreadArray)([e.lockRef.current], (e.shards || []).map(cy), !0).filter(Boolean);
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
        var a = q.useCallback(function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !s.current.allowPinchZoom;
            var o, i = ly(e),
              a = n.current,
              l = "deltaX" in e ? e.deltaX : a[0] - i[0],
              u = "deltaY" in e ? e.deltaY : a[1] - i[1],
              c = e.target,
              d = Math.abs(l) > Math.abs(u) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === c.type) return !1;
            var f = window.getSelection(),
              p = f && f.anchorNode;
            if (p && (p === c || p.contains(c))) return !1;
            var h = iy(d, c);
            if (!h) return !0;
            if (h ? o = d : (o = "v" === d ? "h" : "v", h = iy(d, c)), !h) return !1;
            if (!r.current && "changedTouches" in e && (l || u) && (r.current = o), !o) return !0;
            var m = r.current || o;
            return function(e, t, n, r) {
              var o = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                i = o * r,
                s = n.target,
                a = t.contains(s),
                l = !1,
                u = i > 0,
                c = 0,
                d = 0;
              do {
                if (!s) break;
                var f = ay(e, s),
                  p = f[0],
                  h = f[1] - f[2] - o * p;
                (p || h) && sy(e, s) && (c += h, d += p);
                var m = s.parentNode;
                s = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m
              } while (!a && s !== document.body || a && (t.contains(s) || t === s));
              return (u && (Math.abs(c) < 1 || !1) || !u && (Math.abs(d) < 1 || !1)) && (l = !0), l
            }(m, t, e, "h" === m ? l : u)
          }, []),
          l = q.useCallback(function(e) {
            var n = e;
            if (py.length && py[py.length - 1] === i) {
              var r = "deltaY" in n ? uy(n) : ly(n),
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
          u = q.useCallback(function(e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: hy(r)
            };
            t.current.push(i), setTimeout(function() {
              t.current = t.current.filter(function(e) {
                return e !== i
              })
            }, 1)
          }, []),
          c = q.useCallback(function(e) {
            n.current = ly(e), r.current = void 0
          }, []),
          d = q.useCallback(function(t) {
            u(t.type, uy(t), t.target, a(t, e.lockRef.current))
          }, []),
          f = q.useCallback(function(t) {
            u(t.type, ly(t), t.target, a(t, e.lockRef.current))
          }, []);
        q.useEffect(function() {
          return py.push(i), e.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: f
            }), document.addEventListener("wheel", l, ry), document.addEventListener("touchmove", l, ry), document.addEventListener("touchstart", c, ry),
            function() {
              py = py.filter(function(e) {
                return e !== i
              }), document.removeEventListener("wheel", l, ry), document.removeEventListener("touchmove", l, ry), document.removeEventListener("touchstart", c, ry)
            }
        }, []);
        var p = e.removeScrollBar,
          h = e.inert;
        return q.createElement(q.Fragment, null, h ? q.createElement(i, {
          styles: dy(o)
        }) : null, p ? q.createElement(ey, {
          noRelative: e.noRelative,
          gapMode: e.gapMode
        }) : null)
      }, qv.useMedium(vy), Kv);
      var vy, yy = q.forwardRef(function(e, t) {
        return q.createElement($v, (0, Mv.__assign)({}, e, {
          ref: t,
          sideCar: my
        }))
      });
      yy.classNames = $v.classNames;
      const gy = yy;
      var by = new WeakMap,
        _y = new WeakMap,
        wy = {},
        xy = 0,
        Cy = function(e) {
          return e && (e.host || Cy(e.parentNode))
        },
        Oy = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = Cy(t);
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
              u = function(e) {
                e && !a.has(e) && (a.add(e), u(e.parentNode))
              };
            o.forEach(u);
            var c = function(e) {
              e && !l.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (a.has(e)) c(e);
                else try {
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    l = (by.get(e) || 0) + 1,
                    u = (i.get(e) || 0) + 1;
                  by.set(e, l), i.set(e, u), s.push(e), 1 === l && o && _y.set(e, !0), 1 === u && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return c(t), a.clear(), xy++,
              function() {
                s.forEach(function(e) {
                  var t = by.get(e) - 1,
                    o = i.get(e) - 1;
                  by.set(e, t), i.set(e, o), t || (_y.has(e) || e.removeAttribute(r), _y.delete(e)), o || e.removeAttribute(n)
                }), --xy || (by = new WeakMap, by = new WeakMap, _y = new WeakMap, wy = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        jy = "Dialog",
        [Py, Sy] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => q.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return q.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = q.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
              return (0, j.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = q.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, fv(r, ...t)]
        }(jy),
        [Ey, ky] = Py(jy),
        Ry = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = q.useRef(null), l = q.useRef(null), [u, c] = Ph({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: jy
          });
          return (0, j.jsx)(Ey, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: rf(),
            titleId: rf(),
            descriptionId: rf(),
            open: u,
            onOpenChange: c,
            onOpenToggle: q.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: n
          })
        };
      Ry.displayName = jy;
      var Ty = "DialogTrigger",
        Dy = q.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ky(Ty, n), i = (0, zd.s)(t, o.triggerRef);
          return (0, j.jsx)(Tv.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Qy(o.open),
            ...r,
            ref: i,
            onClick: (0, Ad.mK)(e.onClick, o.onOpenToggle)
          })
        });
      Dy.displayName = Ty;
      var Ny = "DialogPortal",
        [Iy, My] = Py(Ny, {
          forceMount: void 0
        }),
        Ly = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = ky(Ny, t);
          return (0, j.jsx)(Iy, {
            scope: t,
            forceMount: n,
            children: q.Children.map(r, e => (0, j.jsx)(_h.C, {
              present: n || i.open,
              children: (0, j.jsx)(bh, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      Ly.displayName = Ny;
      var Ay = "DialogOverlay",
        zy = q.forwardRef((e, t) => {
          const n = My(Ay, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = ky(Ay, e.__scopeDialog);
          return i.modal ? (0, j.jsx)(_h.C, {
            present: r || i.open,
            children: (0, j.jsx)(Fy, {
              ...o,
              ref: t
            })
          }) : null
        });
      zy.displayName = Ay;
      var Vy = Sv("DialogOverlay.RemoveScroll"),
        Fy = q.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ky(Ay, n);
          return (0, j.jsx)(gy, {
            as: Vy,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, j.jsx)(Tv.div, {
              "data-state": Qy(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        By = "DialogContent",
        qy = q.forwardRef((e, t) => {
          const n = My(By, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = ky(By, e.__scopeDialog);
          return (0, j.jsx)(_h.C, {
            present: r || i.open,
            children: i.modal ? (0, j.jsx)(Wy, {
              ...o,
              ref: t
            }) : (0, j.jsx)($y, {
              ...o,
              ref: t
            })
          })
        });
      qy.displayName = By;
      var Wy = q.forwardRef((e, t) => {
          const n = ky(By, e.__scopeDialog),
            r = q.useRef(null),
            o = (0, zd.s)(t, n.contentRef, r);
          return q.useEffect(() => {
            const e = r.current;
            if (e) return Oy(e)
          }, []), (0, j.jsx)(Ky, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, Ad.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, Ad.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: (0, Ad.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        $y = q.forwardRef((e, t) => {
          const n = ky(By, e.__scopeDialog),
            r = q.useRef(!1),
            o = q.useRef(!1);
          return (0, j.jsx)(Ky, {
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
        Ky = q.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = ky(By, n), l = q.useRef(null), u = (0, zd.s)(t, l);
          return Nv(), (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(_v, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, j.jsx)(Zd, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Qy(a.open),
                ...s,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, j.jsxs)(j.Fragment, {
              children: [(0, j.jsx)(ng, {
                titleId: a.titleId
              }), (0, j.jsx)(rg, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        Xy = "DialogTitle",
        Hy = q.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ky(Xy, n);
          return (0, j.jsx)(Tv.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      Hy.displayName = Xy;
      var Zy = "DialogDescription",
        Uy = q.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ky(Zy, n);
          return (0, j.jsx)(Tv.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      Uy.displayName = Zy;
      var Gy = "DialogClose",
        Yy = q.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ky(Gy, n);
          return (0, j.jsx)(Tv.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, Ad.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function Qy(e) {
        return e ? "open" : "closed"
      }
      Yy.displayName = Gy;
      var Jy = "DialogTitleWarning",
        [eg, tg] = function(e, t) {
          const n = q.createContext(t),
            r = e => {
              const {
                children: t,
                ...r
              } = e, o = q.useMemo(() => r, Object.values(r));
              return (0, j.jsx)(n.Provider, {
                value: o,
                children: t
              })
            };
          return r.displayName = e + "Provider", [r, function(r) {
            const o = q.useContext(n);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }(Jy, {
          contentName: By,
          titleName: Xy,
          docsSlug: "dialog"
        }),
        ng = ({
          titleId: e
        }) => {
          const t = tg(Jy),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return q.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        rg = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${tg("DialogDescriptionWarning").contentName}}.`;
          return q.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        og = Ry,
        ig = Dy,
        sg = Ly,
        ag = zy,
        lg = qy,
        ug = Hy,
        cg = Uy,
        dg = Yy;
      const fg = (0, q.createContext)({
          triggerRef: (0, q.createRef)(),
          triggerBorderRef: (0, q.createRef)(),
          thumbnailRef: (0, q.createRef)(),
          openIconRef: (0, q.createRef)(),
          overlayRef: (0, q.createRef)(),
          contentRef: (0, q.createRef)(),
          containerRef: (0, q.createRef)(),
          imageRef: (0, q.createRef)(),
          placeholderRef: (0, q.createRef)(),
          zoomPanRef: (0, q.createRef)(),
          captionRef: (0, q.createRef)(),
          controlsRef: (0, q.createRef)(),
          closeRef: (0, q.createRef)(),
          zoomRef: (0, q.createRef)(),
          zoomInRef: (0, q.createRef)(),
          zoomSliderRef: (0, q.createRef)(),
          zoomOutRef: (0, q.createRef)(),
          resetRef: (0, q.createRef)(),
          downloadRef: (0, q.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        pg = ({
          altText: e,
          open: t,
          onOpenChange: n,
          defaultOpen: r,
          minZoomLevel: o = 100,
          maxZoomLevel: i = 300,
          zoomLevelStep: s = 100,
          clickAction: a = "close",
          doubleTapAction: l,
          tapAction: u,
          hideTrigger: c = !0,
          ...d
        }) => {
          const f = (0, Q.Ym)(),
            p = (0, G.rl)(),
            h = (0, q.useRef)(null),
            m = (0, q.useRef)(null),
            v = (0, q.useRef)(null),
            y = (0, q.useRef)(null),
            g = (0, q.useRef)(null),
            b = (0, q.useRef)(null),
            _ = (0, q.useRef)(null),
            w = (0, q.useRef)(null),
            x = (0, q.useRef)(null),
            C = (0, q.useRef)(null),
            O = (0, q.useRef)(null),
            P = (0, q.useRef)(null),
            S = (0, q.useRef)(null),
            E = (0, q.useRef)(null),
            k = (0, q.useRef)(null),
            R = (0, q.useRef)(null),
            T = (0, q.useRef)(null),
            D = (0, q.useRef)(null),
            N = (0, q.useRef)(null),
            [I = !1, M] = (0, G.ic)({
              prop: t || r,
              onChange: n
            }),
            L = (0, q.useRef)(null);
          return L.current || (L.current = new Ja({
            zoomLevelOptions: {
              max: i,
              min: o,
              step: s
            },
            actionOptions: {
              click: a,
              tap: u || (p ? "toggle-controls" : "close"),
              doubleTap: l || (p ? "zoom" : "none")
            }
          })), (0, j.jsx)(Ba, {
            messages: qa,
            locale: f,
            children: (0, j.jsx)(fg.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: _,
                zoomPanRef: w,
                imageRef: x,
                placeholderRef: C,
                captionRef: O,
                controlsRef: P,
                closeRef: S,
                zoomRef: E,
                zoomInRef: k,
                zoomSliderRef: R,
                zoomOutRef: T,
                resetRef: D,
                downloadRef: N,
                open: I,
                setOpen: M,
                altText: e,
                hideTrigger: c,
                slide: L.current
              },
              children: (0, j.jsx)(mg, {
                ...d
              })
            })
          })
        },
        hg = (0, q.createContext)({
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
        mg = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, q.useContext)(fg), {
            onOpenChange: n,
            openAnim: r,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = Zi(), {
              slide: t,
              setOpen: n,
              hideTrigger: r,
              overlayRef: o,
              controlsRef: i,
              triggerRef: s,
              triggerBorderRef: a,
              thumbnailRef: l,
              containerRef: u,
              zoomPanRef: c,
              placeholderRef: d,
              imageRef: f
            } = (0, q.useContext)(fg), p = (0, q.useRef)(null);
            p.current || (p.current = qi.timeline({
              defaults: Ma
            }));
            const h = (0, q.useCallback)(e => {
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), qi.set([d.current, f.current], {
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
                }), qi.set([f.current], {
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
                }), p.current.to([c.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), p.current.to([u.current], {
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
                  borderRadius: t.opener.placeholderRadius,
                  clipPath: t.opener.placeholderClip,
                  duration: 0
                }), p.current.fromTo([u.current], {
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
                }, 0), p.current.fromTo([i.current], {
                  opacity: 0,
                  [Aa]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Aa]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await na(f.current), t.closing || (qi.set([f.current], {
                  visibility: "visible",
                  ...La
                }), qi.set([d.current], {
                  visibility: "hidden",
                  ...La
                }))))
              }),
              v = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              y = (0, q.useCallback)(async e => {
                e || (window.addEventListener("click", h), await v(), window.removeEventListener("click", h)), n(e)
              }, [n]),
              g = (0, q.useCallback)(() => y(!1), [y]);
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
            resetZoom: u,
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = Zi(), {
              slide: n,
              imageRef: r,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: s,
              placeholderRef: a
            } = (0, q.useContext)(fg), l = t(async e => {
              n.zoomTo(e), qi.set([o.current], {
                ...n.getCurrentTransform(),
                ...La
              })
            }), u = t(async () => {
              n.zoomTo(n.currZoomLevel + n.zoomLevels.step), qi.to([o.current], {
                ...n.getCurrentTransform(),
                ...La
              })
            }), c = t(async () => {
              n.zoomTo(n.currZoomLevel - n.zoomLevels.step), qi.to([o.current], {
                ...n.getCurrentTransform(),
                ...La
              })
            }), d = t(async () => {
              n.zoomAndPanToInitial(), qi.to([o.current], {
                ...n.getCurrentTransform(),
                ...La
              })
            }), f = t(async () => {
              if (n.closing) return;
              n.toggleControls();
              const e = n.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              qi.to([i.current], {
                opacity: e,
                [Aa]: t,
                ...La
              })
            }), p = t(async () => {
              qi.to([o.current], {
                ...n.getCurrentTransform(),
                ...La
              })
            }), h = (0, q.useCallback)(() => {
              r.current && o.current && (qi.set([o.current], {
                ...n.getCurrentTransform(),
                ...La
              }), qi.set([r.current, a.current], {
                ...n.getUpdatedContentSize(),
                ...La
              }), qi.set([s.current], {
                width: n.panAreaSize.w,
                height: n.panAreaSize.h
              }))
            }, []);
            return (0, q.useEffect)(() => (n.addEventListener("close", e), n.addEventListener("animate", p), n.addEventListener("toggle-controls", f), n.addEventListener("resize", h), window.addEventListener("resize", n.resize.bind(n)), () => {
              n.removeEventListener("close", e), n.removeEventListener("animate", p), n.removeEventListener("toggle-controls", f), n.removeEventListener("resize", h), window.removeEventListener("resize", n.resize.bind(n))
            }), []), {
              zoomIn: u,
              zoomOut: c,
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
          return (0, j.jsx)(hg.Provider, {
            value: {
              update: i,
              openAnim: r,
              close: o,
              zoomIn: s,
              zoomOut: a,
              zoomTo: l,
              resetZoom: u,
              toggleControls: c,
              onOpenChange: n
            },
            children: (0, j.jsx)(og, {
              ...d
            })
          })
        },
        vg = (0, q.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const o = (0, Fa.A)(),
            {
              triggerRef: i,
              triggerBorderRef: s,
              altText: a
            } = (0, q.useContext)(fg),
            l = (0, G.UP)(i, r),
            u = (0, H.v6)(n, {
              "data-testid": e,
              "aria-label": o.formatMessage(nl.OpenButtonLabel, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, j.jsx)(ig, {
            ref: l,
            ...u,
            children: (0, j.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, j.jsx)(Y.xV, {
                children: t
              })
            })
          })
        }),
        yg = (0, q.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            thumbnailRef: o
          } = (0, q.useContext)(fg), i = (0, G.UP)(o, r), s = (0, H.v6)(n, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? Y.DX : "img";
          return (0, j.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        gg = (0, q.forwardRef)(function({
          asChild: e,
          ...t
        }, n) {
          const {
            openIconRef: r
          } = (0, q.useContext)(fg), o = (0, G.UP)(r, n), i = (0, H.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? Y.DX : te.Maximize2;
          return (0, j.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        bg = ({
          ...e
        }) => (0, j.jsx)(sg, {
          ...e
        }),
        _g = (0, q.forwardRef)(function({
          testId: e,
          ...t
        }, n) {
          const {
            overlayRef: r
          } = (0, q.useContext)(fg), o = (0, G.UP)(r, n), i = (0, H.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, j.jsx)(ag, {
            ref: o,
            ...i
          })
        }),
        wg = (0, q.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const {
            openAnim: o
          } = (0, q.useContext)(hg), {
            contentRef: i,
            altText: s,
            triggerRef: a
          } = (0, q.useContext)(fg), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, q.useContext)(fg), [t, n] = (0, q.useState)(e.getCursor()), r = (0, q.useCallback)(() => {
              n(e.getCursor())
            }, []);
            return (0, q.useEffect)(() => (e.addEventListener("zoom", r), () => {
              e.removeEventListener("zoom", r)
            }), [r]), {
              cursor: t
            }
          })(), u = [el.xW.tokens, el.xW.typography, el.xW.grid, tl("dark")].join(" ");
          const c = (0, G.UP)(i, r),
            d = (0, H.v6)(n, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, a),
              className: (0, ee.$)("foundry_1a74xwb9", u),
              style: {
                cursor: l
              }
            });
          return (0, j.jsxs)(lg, {
            ref: c,
            ...d,
            children: [(0, j.jsx)(Y.s6, {
              children: (0, j.jsx)(ug, {
                children: s
              })
            }), t]
          })
        }),
        xg = (0, q.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const {
            containerRef: o
          } = (0, q.useContext)(fg);
          (() => {
            const {
              contextSafe: e
            } = Zi(), {
              toggleControls: t
            } = (0, q.useContext)(hg), {
              containerRef: n,
              zoomPanRef: r,
              overlayRef: o,
              controlsRef: i,
              slide: s
            } = (0, q.useContext)(fg), a = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (qi.to([r.current], {
                ...s.getCurrentTransform(),
                ...La
              }), qi.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...La
              }), qi.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...La
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || qi.to([r.current], {
                ...s.getCurrentTransform(),
                ...La
              }))
            }), u = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (qi.to([r.current], {
                ...s.getCurrentTransform(),
                ...La
              }), qi.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...La
              }), qi.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...La
              })))
            }), c = (0, q.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, G.iQ)({
              ref: i,
              onFocusIn: c
            }), ta({
              onWheel: l,
              onDrag: a,
              onPinch: u
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
          const i = (0, G.UP)(o, r),
            s = (0, H.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, j.jsx)("div", {
            ref: i,
            ...s,
            children: (0, j.jsxs)(Cg, {
              children: [(0, j.jsx)(Og, {}), t]
            })
          })
        }),
        Cg = (0, q.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            zoomPanRef: o
          } = (0, q.useContext)(fg), i = (0, G.UP)(o, r), s = (0, H.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? Y.DX : "div";
          return (0, j.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Og = (0, q.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            placeholderRef: o
          } = (0, q.useContext)(fg), i = (0, G.UP)(o, r), s = (0, H.v6)(n, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? Y.DX : "img";
          return (0, j.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        jg = (0, q.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            imageRef: o
          } = (0, q.useContext)(fg), i = (0, G.UP)(o, r), s = (0, H.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? Y.DX : "img";
          return (0, j.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Pg = (0, q.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            captionRef: o
          } = (0, q.useContext)(fg), i = (0, G.UP)(o, r), s = (0, H.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), a = t ? Y.DX : "p";
          return (0, j.jsx)(cg, {
            asChild: !0,
            children: (0, j.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Sg = (0, q.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            controlsRef: o
          } = (0, q.useContext)(fg);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: n,
              resetZoom: r,
              close: o
            } = (0, q.useContext)(hg);
            Pa(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Pa(["minus", "subtract"], n, {
              enabled: e,
              preventDefault: !0
            }), Pa("r", r, {
              enabled: e,
              preventDefault: !0
            }), Pa("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = (0, G.UP)(o, r),
            s = (0, H.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? Y.DX : "div";
          return (0, j.jsx)(Ca, {
            children: (0, j.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Eg = ({
          content: e,
          metadata: t,
          enabled: n = !0,
          children: r,
          ...o
        }) => {
          if (!n) return (0, j.jsx)(j.Fragment, {
            children: r
          });
          const i = (0, H.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, j.jsxs)(vm, {
            delayDuration: 0,
            children: [(0, j.jsx)(ym, {
              children: r
            }), (0, j.jsxs)(gm, {
              ...i,
              children: [(0, j.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, j.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, j.jsx)(bm, {})]
            })]
          })
        },
        kg = (0, q.forwardRef)(function({
          ...e
        }, t) {
          const n = (0, H.v6)(e, {
            isInline: !0
          });
          return (0, j.jsx)(ol, {
            ref: t,
            ...n
          })
        }),
        Rg = (0, q.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: n = !0,
          children: r,
          ...o
        }, i) {
          const s = (0, Fa.A)(),
            {
              zoomRef: a
            } = (0, q.useContext)(fg),
            {
              canZoomIn: l,
              zoomIn: u,
              canZoomOut: c,
              zoomOut: d,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: h,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, q.useContext)(fg), {
                zoomIn: t,
                zoomOut: n,
                zoomTo: r
              } = (0, q.useContext)(hg), [o, i] = (0, q.useState)(!1), [s, a] = (0, q.useState)(!1), [l, u] = (0, q.useState)(0), [c, d] = (0, q.useState)(0), [f, p] = (0, q.useState)(0), h = (0, q.useCallback)(() => {
                i(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), u(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, q.useCallback)(([e]) => {
                r(e / 100)
              }, [r]);
              return (0, q.useEffect)(() => (e.addEventListener("zoom", h), () => {
                e.removeEventListener("zoom", h)
              }), [h]), {
                zoomTo: m,
                zoomIn: t,
                zoomOut: n,
                canZoomIn: o,
                canZoomOut: s,
                zoomProgress: l,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            v = (0, G.UP)(a, i),
            y = (0, H.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? Y.DX : "div";
          return (0, j.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, j.jsx)(Eg, {
              side: "left",
              enabled: n,
              content: s.formatMessage(nl.ZoomInButtonLabel),
              metadata: s.formatMessage(nl.ZoomInButtonTooltip, {
                shortcut: (0, j.jsx)(kg, {
                  shortcut: "+"
                })
              }),
              children: (0, j.jsx)(xe, {
                label: s.formatMessage(nl.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Ia({
                  position: "top"
                }),
                onPress: u,
                isDisabled: !l
              })
            }), (0, j.jsxs)(lv, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, j.jsx)(uv, {
                className: "foundry_1a74xwbu",
                children: (0, j.jsx)(cv, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, j.jsx)(Eg, {
                side: "left",
                enabled: n,
                content: s.formatMessage(nl.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, j.jsx)(dv, {
                  className: "foundry_1a74xwbw",
                  children: (0, j.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, j.jsx)(Eg, {
              side: "left",
              enabled: n,
              content: s.formatMessage(nl.ZoomOutButtonLabel),
              metadata: s.formatMessage(nl.ZoomOutButtonTooltip, {
                shortcut: (0, j.jsx)(kg, {
                  shortcut: "-"
                })
              }),
              children: (0, j.jsx)(xe, {
                label: s.formatMessage(nl.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Ia({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !c
              })
            }), (0, j.jsx)(Y.xV, {
              children: r
            })]
          })
        }),
        Tg = (0, q.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: n = !0,
          ...r
        }, o) {
          const i = (0, Fa.A)(),
            {
              closeRef: s
            } = (0, q.useContext)(fg),
            a = (0, G.UP)(s, o),
            l = (0, H.v6)(r, {
              "data-testid": e,
              className: Na({
                styled: !t
              })
            }),
            u = t ? (0, j.jsx)(Y.DX, {
              ref: a,
              ...l
            }) : (0, j.jsx)(xe, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: i.formatMessage(nl.CloseButtonLabel)
            });
          return (0, j.jsx)(Eg, {
            side: "right",
            enabled: n,
            content: i.formatMessage(nl.CloseButtonLabel),
            metadata: i.formatMessage(nl.CloseButtonTooltip, {
              shortcut: (0, j.jsx)(kg, {
                shortcut: "Esc"
              })
            }),
            children: (0, j.jsx)(dg, {
              asChild: !0,
              children: u
            })
          })
        }),
        Dg = (0, q.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...n
        }, r) {
          const o = (0, Fa.A)(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, q.useContext)(fg), {
                contextSafe: n
              } = Zi(), {
                resetZoom: r
              } = (0, q.useContext)(hg), [o, i] = (0, q.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = n(e => {
                qi.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...La
                })
              }), a = (0, q.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                i(t), s(t)
              }, [i]);
              return (0, q.useEffect)(() => (e.addEventListener("zoom", a), () => {
                e.removeEventListener("zoom", a)
              }), [a]), {
                isDisabled: !o,
                onPress: r,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, q.useContext)(fg),
            a = (0, G.UP)(s, r),
            l = (0, H.v6)(n, i, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, j.jsx)(Eg, {
            side: "left",
            enabled: t,
            content: o.formatMessage(nl.ResetZoomButtonLabel),
            metadata: o.formatMessage(nl.ResetZoomButtonTooltip, {
              shortcut: (0, j.jsx)(kg, {
                shortcut: "R"
              })
            }),
            children: (0, j.jsx)(xe, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(nl.ResetZoomButtonLabel)
            })
          })
        }),
        Ng = (0, q.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...n
        }, r) {
          const o = (0, Fa.A)(),
            {
              downloadRef: i,
              imageRef: s
            } = (0, q.useContext)(fg),
            a = (0, G.UP)(i, r),
            l = (0, H.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, j.jsx)(Eg, {
            side: "left",
            enabled: t,
            content: o.formatMessage(nl.DownloadButtonTooltip),
            children: (0, j.jsx)(xe, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(nl.DownloadButtonTooltip),
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
        Ig = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };

      function Mg(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }

      function Lg(e) {
        if (function() {
            if (null == Ag) {
              Ag = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Ag = !0, !0
                  }
                })
              } catch {}
            }
            return Ag
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      let Ag = null;
      const zg = e => e?.ownerDocument ?? document,
        Vg = e => e && "window" in e && e.window === e ? e : zg(e).defaultView || window;

      function Fg(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const Bg = (e = document) => e.activeElement;

      function qg(e) {
        return e.target
      }
      const Wg = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function $g(e, t) {
        return Wg ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Vg(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: r
          } = e.style, o = "none" !== n && "hidden" !== r && "collapse" !== r;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            o = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || $g(e.parentElement, e))
      }
      const Kg = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        Xg = Kg.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Kg.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Hg = Kg.join(':not([hidden]):not([tabindex="-1"]),');

      function Zg(e, t) {
        return e.matches(Xg) && !Gg(e) && (t?.skipVisibilityCheck || $g(e))
      }

      function Ug(e) {
        return e.matches(Hg) && $g(e) && !Gg(e)
      }

      function Gg(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }
      const Yg = "undefined" != typeof document ? q.useLayoutEffect : () => {};

      function Qg(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Jg(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function eb(e) {
        let t = (0, q.useRef)({
          isFocused: !1,
          observer: null
        });
        return Yg(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []), (0, q.useCallback)(n => {
          let r = qg(n);
          if (r instanceof HTMLButtonElement || r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = r,
              o = r => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = Qg(r);
                  e?.(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            n.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver(() => {
              if (t.current.isFocused && n.disabled) {
                t.current.observer?.disconnect();
                let e = n === Bg() ? null : Bg();
                n.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: e
                })), n.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: e
                }))
              }
            }), t.current.observer.observe(n, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }, [e])
      }
      let tb = !1;

      function nb(e) {
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let t = window.navigator.userAgentData?.brands;
        return Array.isArray(t) && t.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function rb(e) {
        return "undefined" != typeof window && null != window.navigator && e.test(window.navigator.userAgentData?.platform || window.navigator.platform)
      }

      function ob(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const ib = ob(function() {
          return rb(/^Mac/i)
        }),
        sb = ob(function() {
          return rb(/^iPhone/i)
        }),
        ab = ob(function() {
          return rb(/^iPad/i) || ib() && navigator.maxTouchPoints > 1
        }),
        lb = ob(function() {
          return sb() || ab()
        }),
        ub = (ob(function() {
          return ib() || lb()
        }), ob(function() {
          return nb(/AppleWebKit/i) && !cb()
        })),
        cb = ob(function() {
          return nb(/Chrome/i)
        }),
        db = ob(function() {
          return nb(/Android/i)
        }),
        fb = ob(function() {
          return nb(/Firefox/i)
        });
      let pb = new Map,
        hb = new Set;

      function mb() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          let r = qg(n);
          if (!e(n) || !r) return;
          let o = pb.get(r);
          if (o && (o.delete(n.propertyName), 0 === o.size && (r.removeEventListener("transitioncancel", t), pb.delete(r)), 0 === pb.size)) {
            for (let e of hb) e();
            hb.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          let r = qg(n);
          if (!e(n) || !r) return;
          let o = pb.get(r);
          o || (o = new Set, pb.set(r, o), r.addEventListener("transitioncancel", t, {
            once: !0
          })), o.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function vb(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of pb) "isConnected" in e && !e.isConnected && pb.delete(e)
          }(), 0 === pb.size ? e() : hb.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? mb() : document.addEventListener("DOMContentLoaded", mb));
      let yb = "default",
        gb = "",
        bb = new WeakMap;

      function _b(e) {
        if (lb()) {
          if ("disabled" !== yb) return;
          yb = "restoring", setTimeout(() => {
            vb(() => {
              if ("restoring" === yb) {
                const t = zg(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = gb || ""), gb = "", yb = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && bb.has(e)) {
          let t = bb.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), bb.delete(e)
        }
      }

      function wb(e) {
        let t = e?.defaultView;
        return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0
      }
      let xb = new WeakMap;

      function Cb(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (db() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      const Ob = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        jb = q.createContext(Ob),
        Pb = q.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Sb = new WeakMap;
      const Eb = "function" == typeof q.useId ? function(e) {
        let t = q.useId(),
          [n] = (0, q.useState)(Db());
        return e || `${n?"react-aria":`react-aria${Ob.prefix}`}-${t}`
      } : function(e) {
        let t = (0, q.useContext)(jb),
          n = function(e = !1) {
            let t = (0, q.useContext)(jb),
              n = (0, q.useRef)(null);
            if (null === n.current && !e) {
              let e = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
              if (e) {
                let n = Sb.get(e);
                null == n ? Sb.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, Sb.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function kb() {
        return !1
      }

      function Rb() {
        return !0
      }

      function Tb(e) {
        return () => {}
      }

      function Db() {
        return "function" == typeof q.useSyncExternalStore ? q.useSyncExternalStore(Tb, kb, Rb) : (0, q.useContext)(Pb)
      }
      let Nb, Ib = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Mb = new Map;

      function Lb(e) {
        let [t, n] = (0, q.useState)(e), r = (0, q.useRef)(null), o = Eb(t), i = (0, q.useRef)(null);
        if (Nb && Nb.register(i, o), Ib) {
          const e = Mb.get(o);
          e && !e.includes(r) ? e.push(r) : Mb.set(o, [r])
        }
        return Yg(() => {
          let e = o;
          return () => {
            Nb && Nb.unregister(i), Mb.delete(e)
          }
        }, [o]), (0, q.useEffect)(() => {
          let e = r.current;
          return e && n(e), () => {
            e && (r.current = null)
          }
        }), o
      }

      function Ab(e, t) {
        if (e === t) return e;
        let n = Mb.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = Mb.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }

      function zb(e = []) {
        let t = Lb(),
          [n, r] = function(e) {
            let [t, n] = (0, q.useState)(e), r = (0, q.useRef)(t), o = (0, q.useRef)(null), i = (0, q.useRef)(() => {
              if (!o.current) return;
              let e = o.current.next();
              e.done ? o.current = null : r.current === e.value ? i.current() : n(e.value)
            });
            Yg(() => {
              r.current = t, o.current && i.current()
            });
            let s = (0, q.useCallback)(e => {
              o.current = e(r.current), i.current()
            }, [i]);
            return [t, s]
          }(t),
          o = (0, q.useCallback)(() => {
            r(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, r]);
        return Yg(o, [t, o, ...e]), n
      }

      function Vb(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let n = !1;
          const r = e.map(e => {
            const r = Fb(e, t);
            return n ||= "function" == typeof r, r
          });
          if (n) return () => {
            r.forEach((t, n) => {
              "function" == typeof t ? t() : Fb(e[n], null)
            })
          }
        }
      }

      function Fb(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function Bb(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Mg(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Ab(n, o) : "ref" === e && n && o ? t.ref = Vb(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ee.A)(n, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (Nb = new FinalizationRegistry(e => {
        Mb.delete(e)
      }));
      const qb = (0, q.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, e => $b(e, t))
        },
        useHref: e => e
      });

      function Wb() {
        return (0, q.useContext)(qb)
      }

      function $b(e, t, n = !0) {
        let {
          metaKey: r,
          ctrlKey: o,
          altKey: i,
          shiftKey: s
        } = t;
        fb() && window.event?.type?.startsWith("key") && "_blank" === e.target && (ib() ? r = !0 : o = !0);
        let a = ub() && ib() && !ab() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: r,
          ctrlKey: o,
          altKey: i,
          shiftKey: s
        }) : new MouseEvent("click", {
          metaKey: r,
          ctrlKey: o,
          altKey: i,
          shiftKey: s,
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        $b.isOpening = n, Lg(e), e.dispatchEvent(a), $b.isOpening = !1
      }

      function Kb(e) {
        const t = Wb().useHref(e?.href ?? "");
        let n = {};
        if (e)
          for (let r of ["href", "target", "rel", "download", "ping", "referrerPolicy"]) r in e && (n[r] = "href" === r ? t : e[r]);
        return n
      }

      function Xb(e, t, n, r) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let n = e.getAttribute("target");
          return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r))
      }
      $b.isOpening = !1;
      const Hb = q.createContext({
        register: () => {}
      });
      Hb.displayName = "PressResponderContext";
      const Zb = q.useInsertionEffect ?? Yg;

      function Ub(e) {
        const t = (0, q.useRef)(null);
        return Zb(() => {
          t.current = e
        }, [e]), (0, q.useCallback)((...e) => {
          const n = t.current;
          return n?.(...e)
        }, [])
      }

      function Gb() {
        let e = (0, q.useRef)(new Map),
          t = (0, q.useCallback)((t, n, r, o) => {
            let i = o?.once ? (...t) => {
              e.current.delete(r), r(...t)
            } : r;
            e.current.set(r, {
              type: n,
              eventTarget: t,
              fn: i,
              options: o
            }), t.addEventListener(n, i, o)
          }, []),
          n = (0, q.useCallback)((t, n, r, o) => {
            let i = e.current.get(r)?.fn || r;
            t.removeEventListener(n, i, o), e.current.delete(r)
          }, []),
          r = (0, q.useCallback)(() => {
            e.current.forEach((e, t) => {
              n(e.eventTarget, e.type, t, e.options)
            })
          }, [n]);
        return (0, q.useEffect)(() => r, [r]), {
          addGlobalListener: t,
          removeGlobalListener: n,
          removeAllGlobalListeners: r
        }
      }

      function Yb(e, t) {
        Yg(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }
      class Qb {
        #e;
        constructor(e, t, n, r) {
          this.#e = !0;
          let o = r?.target ?? n.currentTarget;
          const i = o?.getBoundingClientRect();
          let s, a, l = 0,
            u = null;
          null != n.clientX && null != n.clientY && (a = n.clientX, u = n.clientY), i && (null != a && null != u ? (s = a - i.left, l = u - i.top) : (s = i.width / 2, l = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = l, this.key = n.key
        }
        continuePropagation() {
          this.#e = !1
        }
        get shouldStopPropagation() {
          return this.#e
        }
      }
      const Jb = Symbol("linkClicked"),
        e_ = "react-aria-pressable-style",
        t_ = "data-react-aria-pressable";

      function n_(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          onClick: s,
          isDisabled: a,
          isPressed: l,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, q.useContext)(Hb);
          if (t) {
            let {
              register: n,
              ref: r,
              ...o
            } = t;
            e = Bb(o, e), n()
          }
          return Yb(t, e.ref), e
        }(e), [h, m] = (0, q.useState)(!1), v = (0, q.useRef)({
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
        } = Gb(), b = (0, q.useCallback)((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Qb("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        }, [a, r, n]), _ = (0, q.useCallback)((e, r, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Qb("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), m(!1), t && i && !a) {
            let n = new Qb("press", r, e);
            t(n), l &&= n.shouldStopPropagation
          }
          return s.isTriggeringEvent = !1, l
        }, [a, o, n, t]), w = Ub(_), x = Ub((0, q.useCallback)((e, t) => {
          let n = v.current;
          if (a) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Qb("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }, [a, i])), C = (0, q.useCallback)(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(i_(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || _b(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [d, g, _]), O = Ub(C);
        (0, q.useEffect)(() => {
          a && v.current.isPressed && O({
            currentTarget: v.current.target,
            shiftKey: !1,
            ctrlKey: !1,
            metaKey: !1,
            altKey: !1
          })
        }, [a]);
        let j = (0, q.useCallback)(e => {
            c && C(e)
          }, [c, C]),
          P = (0, q.useCallback)(e => {
            a || s?.(e)
          }, [a, s]),
          S = (0, q.useCallback)((e, t) => {
            if (!a && s) {
              let n = new MouseEvent("click", e);
              Jg(n, t), s(Qg(n))
            }
          }, [a, s]),
          E = (0, q.useMemo)(() => {
            let e = v.current,
              t = {
                onKeyDown(t) {
                  if (o_(t.nativeEvent, t.currentTarget) && Fg(t.currentTarget, qg(t))) {
                    s_(qg(t), t.key) && t.preventDefault();
                    let r = !0;
                    e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", r = b(t, "keyboard"));
                    let o = t.currentTarget,
                      i = t => {
                        o_(t, o) && !t.repeat && Fg(o, qg(t)) && e.target && x(i_(e.target, t), "keyboard")
                      };
                    y(zg(t.currentTarget), "keyup", Mg(i, n), !0), r && t.stopPropagation(), t.metaKey && ib() && e.metaKeyEvents?.set(t.key, t.nativeEvent)
                  } else "Meta" === t.key && (e.metaKeyEvents = new Map)
                },
                onClick(t) {
                  if ((!t || Fg(t.currentTarget, qg(t))) && t && 0 === t.button && !e.isTriggeringEvent && !$b.isOpening) {
                    let n = !0;
                    if (a && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Cb(t.nativeEvent)) {
                      if (e.isPressed && "keyboard" !== e.pointerType) {
                        let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                          o = x(i_(t.currentTarget, t), r),
                          i = w(i_(t.currentTarget, t), r, !0);
                        n = o && i, e.isOverTarget = !1, P(t), O(t)
                      }
                    } else {
                      let e = b(t, "virtual"),
                        r = x(t, "virtual"),
                        o = w(t, "virtual");
                      P(t), n = e && r && o
                    }
                    e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                  }
                }
              },
              n = t => {
                if (e.isPressed && e.target && o_(t, e.target)) {
                  s_(qg(t), t.key) && t.preventDefault();
                  let n = qg(t),
                    r = Fg(e.target, n);
                  w(i_(e.target, t), "keyboard", r), r && S(t, e.target), g(), "Enter" !== t.key && r_(e.target) && Fg(e.target, n) && !t[Jb] && (t[Jb] = !0, $b(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key)
                } else if ("Meta" === t.key && e.metaKeyEvents?.size) {
                  let t = e.metaKeyEvents;
                  e.metaKeyEvents = void 0;
                  for (let n of t.values()) e.target?.dispatchEvent(new KeyboardEvent("keyup", n))
                }
              };
            if ("undefined" != typeof PointerEvent) {
              t.onPointerDown = t => {
                if (0 !== t.button || !Fg(t.currentTarget, qg(t))) return;
                if (o = t.nativeEvent, !db() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
                var o;
                e.pointerType = t.pointerType;
                let i = !0;
                if (!e.isPressed) {
                  e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                    if (lb()) {
                      if ("default" === yb) {
                        const t = zg(e);
                        gb = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                      }
                      yb = "disabled"
                    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                      let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                      bb.set(e, e.style[t]), e.style[t] = "none"
                    }
                  }(e.target), i = b(t, e.pointerType);
                  let o = qg(t);
                  "releasePointerCapture" in o && ("hasPointerCapture" in o ? o.hasPointerCapture(t.pointerId) && o.releasePointerCapture(t.pointerId) : o.releasePointerCapture(t.pointerId)), y(zg(t.currentTarget), "pointerup", n, !1), y(zg(t.currentTarget), "pointercancel", r, !1)
                }
                i && t.stopPropagation()
              }, t.onMouseDown = t => {
                if (Fg(t.currentTarget, qg(t)) && 0 === t.button) {
                  if (u) {
                    let n = function(e) {
                      for (; e && !Zg(e, {
                          skipVisibilityCheck: !0
                        });) e = e.parentElement;
                      let t = Vg(e),
                        n = t.document.activeElement;
                      if (!n || n === e) return;
                      tb = !0;
                      let r = !1,
                        o = e => {
                          (qg(e) === n || r) && e.stopImmediatePropagation()
                        },
                        i = t => {
                          (qg(t) === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, Lg(n), l()))
                        },
                        s = t => {
                          (qg(t) === e || r) && t.stopImmediatePropagation()
                        },
                        a = t => {
                          (qg(t) === e || r) && (t.stopImmediatePropagation(), r || (r = !0, Lg(n), l()))
                        };
                      t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                      let l = () => {
                          cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), tb = !1, r = !1
                        },
                        u = requestAnimationFrame(l);
                      return l
                    }(t.target);
                    n && e.disposables.push(n)
                  }
                  t.stopPropagation()
                }
              }, t.onPointerUp = t => {
                Fg(t.currentTarget, qg(t)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || x(t, e.pointerType || t.pointerType))
              }, t.onPointerEnter = t => {
                t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(i_(e.target, t), e.pointerType))
              }, t.onPointerLeave = t => {
                t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(i_(e.target, t), e.pointerType, !1), j(t))
              };
              let n = t => {
                  if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                    if (Fg(e.target, qg(t)) && null != e.pointerType) {
                      let n = !1,
                        r = setTimeout(() => {
                          e.isPressed && e.target instanceof HTMLElement && (n ? O(t) : (Lg(e.target), e.target.click()))
                        }, 80);
                      y(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                    } else O(t);
                    e.isOverTarget = !1
                  }
                },
                r = e => {
                  O(e)
                };
              t.onDragStart = e => {
                Fg(e.currentTarget, qg(e)) && O(e)
              }
            }
            return t
          }, [y, a, u, g, d, j, b, P, S]);
        return (0, q.useEffect)(() => {
          if (!f) return;
          const e = zg(f.current);
          if (!e || !e.head || e.getElementById(e_)) return;
          const t = e.createElement("style");
          t.id = e_;
          let n = function(e) {
            let t = e ?? ("undefined" != typeof document ? document : void 0);
            if (!t) return wb(t);
            if (xb.has(t)) return xb.get(t);
            let n = t.querySelector('meta[property="csp-nonce"]'),
              r = n && n instanceof Vg(n).HTMLMetaElement && (n.nonce || n.content) || wb(t) || void 0;
            return void 0 !== r && xb.set(t, r), r
          }(e);
          n && (t.nonce = n), t.textContent = `\n@layer {\n  [${t_}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, q.useEffect)(() => {
          let e = v.current;
          return () => {
            d || _b(e.target ?? void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || h,
          pressProps: Bb(p, E, {
            [t_]: !0
          })
        }
      }

      function r_(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function o_(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof Vg(o).HTMLInputElement && !l_(o, n) || o instanceof Vg(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && r_(o)) && "Enter" !== n)
      }

      function i_(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r,
          key: t.key
        }
      }

      function s_(e, t) {
        return e instanceof HTMLInputElement ? !l_(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : r_(e)))
        }(e)
      }
      const a_ = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function l_(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : a_.has(e.type)
      }

      function u_(e) {
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

      function c_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function d_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c_(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = u_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c_(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function f_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var p_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        h_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = d_(d_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) p_(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return f_(e.variantClassNames, e => f_(e, e => e.split(" ")[0]))
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
      const m_ = (0, q.createContext)(null);

      function v_() {
        const e = (0, q.useContext)(m_);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const y_ = (0, q.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          descriptionId: r = "",
          errorId: o = "",
          status: i = "neutral",
          ...s
        }, a) => {
          const l = (0, H.v6)({
              className: h_({
                status: i
              }),
              "data-testid": t
            }, s),
            u = n ? Y.DX : "div";
          return (0, j.jsx)(m_.Provider, {
            value: {
              descriptionId: r,
              errorId: o,
              status: i,
              ...s
            },
            children: (0, j.jsx)(u, {
              ...l,
              ref: a,
              children: e
            })
          })
        }),
        g_ = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          ...n
        }, r) => {
          const {
            status: o
          } = v_(), i = (0, H.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, n), s = {
            success: te.Check,
            invalid: te.X,
            neutral: te.TriangleAlert
          }, a = t ? Y.DX : s[o];
          return (0, j.jsx)(a, {
            ref: r,
            ...i
          })
        }),
        b_ = (0, q.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            errorId: s
          } = v_(), a = (0, H.v6)({
            "data-testid": t,
            id: s || i
          }, r), l = n ? Y.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });
      var __ = n(41953);

      function w_(...e) {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function x_(e) {
        const t = C_(e),
          n = q.forwardRef((e, n) => {
            const {
              children: r,
              ...o
            } = e, i = q.Children.toArray(r), s = i.find(j_);
            if (s) {
              const e = s.props.children,
                r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
              return (0, j.jsx)(t, {
                ...o,
                ref: n,
                children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
              })
            }
            return (0, j.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function C_(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var O_ = Symbol("radix.slottable");

      function j_(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === O_
      }
      var P_ = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = x_(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        S_ = [" ", "Enter", "ArrowUp", "ArrowDown"],
        E_ = [" ", "Enter"],
        k_ = "Select",
        [R_, T_, D_] = Im(k_),
        [N_, I_] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => q.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return q.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = q.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
              return (0, j.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = q.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, w_(r, ...t)]
        }(k_, [D_, Up]),
        M_ = Up(),
        [L_, A_] = N_(k_),
        [z_, V_] = N_(k_),
        F_ = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            value: s,
            defaultValue: a,
            onValueChange: l,
            dir: u,
            name: c,
            autoComplete: d,
            disabled: f,
            required: p,
            form: h
          } = e, m = M_(t), [v, y] = q.useState(null), [g, b] = q.useState(null), [_, w] = q.useState(!1), x = (0, Cm.jH)(u), [C, O] = Ph({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: k_
          }), [P, S] = Ph({
            prop: s,
            defaultProp: a,
            onChange: l,
            caller: k_
          }), E = q.useRef(null), k = !v || h || !!v.closest("form"), [R, T] = q.useState(new Set), D = Array.from(R).map(e => e.props.value).join(";");
          return (0, j.jsx)(dh, {
            ...m,
            children: (0, j.jsxs)(L_, {
              required: p,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: _,
              onValueNodeHasChildrenChange: w,
              contentId: rf(),
              value: P,
              onValueChange: S,
              open: C,
              onOpenChange: O,
              dir: x,
              triggerPointerDownPosRef: E,
              disabled: f,
              children: [(0, j.jsx)(R_.Provider, {
                scope: t,
                children: (0, j.jsx)(z_, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: q.useCallback(e => {
                    T(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: q.useCallback(e => {
                    T(t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    })
                  }, []),
                  children: n
                })
              }), k ? (0, j.jsxs)(ww, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: c,
                autoComplete: d,
                value: P,
                onChange: e => S(e.target.value),
                disabled: f,
                form: h,
                children: [void 0 === P ? (0, j.jsx)("option", {
                  value: ""
                }) : null, Array.from(R)]
              }, D) : null]
            })
          })
        };
      F_.displayName = k_;
      var B_ = "SelectTrigger",
        q_ = q.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, i = M_(n), s = A_(B_, n), a = s.disabled || r, l = (0, zd.s)(t, s.onTriggerChange), u = T_(n), c = q.useRef("touch"), [d, f, p] = Cw(e => {
            const t = u().filter(e => !e.disabled),
              n = t.find(e => e.value === s.value),
              r = Ow(t, e, n);
            void 0 !== r && s.onValueChange(r.value)
          }), h = e => {
            a || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, j.jsx)(fh, {
            asChild: !0,
            ...i,
            children: (0, j.jsx)(P_.button, {
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
              "data-placeholder": xw(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, Ad.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: (0, Ad.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: (0, Ad.mK)(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || S_.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      q_.displayName = B_;
      var W_ = "SelectValue",
        $_ = q.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = A_(W_, n), {
            onValueNodeHasChildrenChange: u
          } = l, c = void 0 !== i, d = (0, zd.s)(t, l.onValueNodeChange);
          return (0, ef.N)(() => {
            u(c)
          }, [u, c]), (0, j.jsx)(P_.span, {
            ...a,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: xw(l.value) ? (0, j.jsx)(j.Fragment, {
              children: s
            }) : i
          })
        });
      $_.displayName = W_;
      var K_ = q.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, j.jsx)(P_.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      });
      K_.displayName = "SelectIcon";
      var X_ = e => (0, j.jsx)(bh, {
        asChild: !0,
        ...e
      });
      X_.displayName = "SelectPortal";
      var H_ = "SelectContent",
        Z_ = q.forwardRef((e, t) => {
          const n = A_(H_, e.__scopeSelect),
            [r, o] = q.useState();
          if ((0, ef.N)(() => {
              o(new DocumentFragment)
            }, []), !n.open) {
            const t = r;
            return t ? xd.createPortal((0, j.jsx)(G_, {
              scope: e.__scopeSelect,
              children: (0, j.jsx)(R_.Slot, {
                scope: e.__scopeSelect,
                children: (0, j.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, j.jsx)(J_, {
            ...e,
            ref: t
          })
        });
      Z_.displayName = H_;
      var U_ = 10,
        [G_, Y_] = N_(H_),
        Q_ = x_("SelectContent.RemoveScroll"),
        J_ = q.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            position: r = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            side: a,
            sideOffset: l,
            align: u,
            alignOffset: c,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = A_(H_, n), [b, _] = q.useState(null), [w, x] = q.useState(null), C = (0, zd.s)(t, e => _(e)), [O, P] = q.useState(null), [S, E] = q.useState(null), k = T_(n), [R, T] = q.useState(!1), D = q.useRef(!1);
          q.useEffect(() => {
            if (b) return Oy(b)
          }, [b]), Nv();
          const N = q.useCallback(e => {
              const [t, ...n] = k().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && w && (w.scrollTop = 0), n === r && w && (w.scrollTop = w.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }, [k, w]),
            I = q.useCallback(() => N([O, b]), [N, O, b]);
          q.useEffect(() => {
            R && I()
          }, [R, I]);
          const {
            onOpenChange: M,
            triggerPointerDownPosRef: L
          } = g;
          q.useEffect(() => {
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
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : b.contains(n.target) || M(!1), document.removeEventListener("pointermove", t), L.current = null
                };
              return null !== L.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }, [b, M, L]), q.useEffect(() => {
            const e = () => M(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [M]);
          const [A, z] = Cw(e => {
            const t = k().filter(e => !e.disabled),
              n = t.find(e => e.ref.current === document.activeElement),
              r = Ow(t, e, n);
            r && setTimeout(() => r.ref.current.focus())
          }), V = q.useCallback((e, t, n) => {
            const r = !D.current && !n;
            (void 0 !== g.value && g.value === t || r) && (P(e), r && (D.current = !0))
          }, [g.value]), F = q.useCallback(() => b?.focus(), [b]), B = q.useCallback((e, t, n) => {
            const r = !D.current && !n;
            (void 0 !== g.value && g.value === t || r) && E(e)
          }, [g.value]), W = "popper" === r ? tw : ew, $ = W === tw ? {
            side: a,
            sideOffset: l,
            align: u,
            alignOffset: c,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v
          } : {};
          return (0, j.jsx)(G_, {
            scope: n,
            content: b,
            viewport: w,
            onViewportChange: x,
            itemRefCallback: V,
            selectedItem: O,
            onItemLeave: F,
            itemTextRefCallback: B,
            focusSelectedItem: I,
            selectedItemText: S,
            position: r,
            isPositioned: R,
            searchRef: A,
            children: (0, j.jsx)(gy, {
              as: Q_,
              allowPinchZoom: !0,
              children: (0, j.jsx)(_v, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Ad.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, j.jsx)(Zd, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, j.jsx)(W, {
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
                    onKeyDown: (0, Ad.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || z(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = k().filter(e => !e.disabled);
                        let n = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout(() => N(n)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      J_.displayName = "SelectContentImpl";
      var ew = q.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, i = A_(H_, n), s = Y_(H_, n), [a, l] = q.useState(null), [u, c] = q.useState(null), d = (0, zd.s)(t, e => c(e)), f = T_(n), p = q.useRef(!1), h = q.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = s, b = q.useCallback(() => {
          if (i.trigger && i.valueNode && a && u && m && v && y) {
            const e = i.trigger.getBoundingClientRect(),
              t = u.getBoundingClientRect(),
              n = i.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const r = o.left - t.left,
                i = n.left - r,
                s = e.left - i,
                l = e.width + s,
                u = Math.max(l, t.width),
                c = window.innerWidth - U_,
                d = (0, wm.q)(i, [U_, Math.max(U_, c - u)]);
              a.style.minWidth = l + "px", a.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                s = window.innerWidth - e.right - i,
                l = e.width + s,
                u = Math.max(l, t.width),
                c = window.innerWidth - U_,
                d = (0, wm.q)(i, [U_, Math.max(U_, c - u)]);
              a.style.minWidth = l + "px", a.style.right = d + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * U_,
              c = m.scrollHeight,
              d = window.getComputedStyle(u),
              h = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              _ = h + g + c + parseInt(d.paddingBottom, 10) + b,
              w = Math.min(5 * v.offsetHeight, _),
              x = window.getComputedStyle(m),
              C = parseInt(x.paddingTop, 10),
              O = parseInt(x.paddingBottom, 10),
              j = e.top + e.height / 2 - U_,
              P = l - j,
              S = v.offsetHeight / 2,
              E = h + g + (v.offsetTop + S),
              k = _ - E;
            if (E <= j) {
              const e = s.length > 0 && v === s[s.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = u.clientHeight - m.offsetTop - m.offsetHeight,
                n = E + Math.max(P, S + (e ? O : 0) + t + b);
              a.style.height = n + "px"
            } else {
              const e = s.length > 0 && v === s[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(j, h + m.offsetTop + (e ? C : 0) + S) + k;
              a.style.height = t + "px", m.scrollTop = E - j + m.offsetTop
            }
            a.style.margin = `${U_}px 0`, a.style.minHeight = w + "px", a.style.maxHeight = l + "px", r?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, i.trigger, i.valueNode, a, u, m, v, y, i.dir, r]);
        (0, ef.N)(() => b(), [b]);
        const [_, w] = q.useState();
        (0, ef.N)(() => {
          u && w(window.getComputedStyle(u).zIndex)
        }, [u]);
        const x = q.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, j.jsx)(nw, {
          scope: n,
          contentWrapper: a,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: x,
          children: (0, j.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, j.jsx)(P_.div, {
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
      ew.displayName = "SelectItemAlignedPosition";
      var tw = q.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = U_,
          ...i
        } = e, s = M_(n);
        return (0, j.jsx)(ph, {
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
      tw.displayName = "SelectPopperPosition";
      var [nw, rw] = N_(H_, {}), ow = "SelectViewport", iw = q.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, i = Y_(ow, n), s = rw(ow, n), a = (0, zd.s)(t, i.onViewportChange), l = q.useRef(0);
        return (0, j.jsxs)(j.Fragment, {
          children: [(0, j.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, j.jsx)(R_.Slot, {
            scope: n,
            children: (0, j.jsx)(P_.div, {
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
              onScroll: (0, Ad.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = s;
                if (r?.current && n) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * U_,
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
      iw.displayName = ow;
      var sw = "SelectGroup",
        [aw, lw] = N_(sw);
      q.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = rf();
        return (0, j.jsx)(aw, {
          scope: n,
          id: o,
          children: (0, j.jsx)(P_.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      }).displayName = sw;
      var uw = "SelectLabel";
      q.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = lw(uw, n);
        return (0, j.jsx)(P_.div, {
          id: o.id,
          ...r,
          ref: t
        })
      }).displayName = uw;
      var cw = "SelectItem",
        [dw, fw] = N_(cw),
        pw = q.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: i,
            ...s
          } = e, a = A_(cw, n), l = Y_(cw, n), u = a.value === r, [c, d] = q.useState(i ?? ""), [f, p] = q.useState(!1), h = (0, zd.s)(t, e => l.itemRefCallback?.(e, r, o)), m = rf(), v = q.useRef("touch"), y = () => {
            o || (a.onValueChange(r), a.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, j.jsx)(dw, {
            scope: n,
            value: r,
            disabled: o,
            textId: m,
            isSelected: u,
            onItemTextChange: q.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, j.jsx)(R_.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: c,
              children: (0, j.jsx)(P_.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": u && f,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: h,
                onFocus: (0, Ad.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, Ad.mK)(s.onBlur, () => p(!1)),
                onClick: (0, Ad.mK)(s.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, Ad.mK)(s.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, Ad.mK)(s.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, Ad.mK)(s.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Ad.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, Ad.mK)(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (E_.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      pw.displayName = cw;
      var hw = "SelectItemText",
        mw = q.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...i
          } = e, s = A_(hw, n), a = Y_(hw, n), l = fw(hw, n), u = V_(hw, n), [c, d] = q.useState(null), f = (0, zd.s)(t, e => d(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), p = c?.textContent, h = q.useMemo(() => (0, j.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: p
          }, l.value), [l.disabled, l.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = u;
          return (0, ef.N)(() => (m(h), () => v(h)), [m, v, h]), (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(P_.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? xd.createPortal(i.children, s.valueNode) : null]
          })
        });
      mw.displayName = hw;
      var vw = "SelectItemIndicator";
      q.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return fw(vw, n).isSelected ? (0, j.jsx)(P_.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      }).displayName = vw;
      var yw = "SelectScrollUpButton";
      q.forwardRef((e, t) => {
        const n = Y_(yw, e.__scopeSelect),
          r = rw(yw, e.__scopeSelect),
          [o, i] = q.useState(!1),
          s = (0, zd.s)(t, r.onScrollButtonChange);
        return (0, ef.N)(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), o ? (0, j.jsx)(bw, {
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
      }).displayName = yw;
      var gw = "SelectScrollDownButton";
      q.forwardRef((e, t) => {
        const n = Y_(gw, e.__scopeSelect),
          r = rw(gw, e.__scopeSelect),
          [o, i] = q.useState(!1),
          s = (0, zd.s)(t, r.onScrollButtonChange);
        return (0, ef.N)(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              i(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), o ? (0, j.jsx)(bw, {
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
      }).displayName = gw;
      var bw = q.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, i = Y_("SelectScrollButton", n), s = q.useRef(null), a = T_(n), l = q.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return q.useEffect(() => () => l(), [l]), (0, ef.N)(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, j.jsx)(P_.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, Ad.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(r, 50))
          }),
          onPointerMove: (0, Ad.mK)(o.onPointerMove, () => {
            i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(r, 50))
          }),
          onPointerLeave: (0, Ad.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      q.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, j.jsx)(P_.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var _w = "SelectArrow";
      q.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = M_(n), i = A_(_w, n), s = Y_(_w, n);
        return i.open && "popper" === s.position ? (0, j.jsx)(hh, {
          ...o,
          ...r,
          ref: t
        }) : null
      }).displayName = _w;
      var ww = q.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = q.useRef(null),
          i = (0, zd.s)(r, o),
          s = Om(t);
        return q.useEffect(() => {
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
        }, [s, t]), (0, j.jsx)(P_.select, {
          ...n,
          style: {
            ...Th,
            ...n.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function xw(e) {
        return "" === e || void 0 === e
      }

      function Cw(e) {
        const t = (0, Kd.c)(e),
          n = q.useRef(""),
          r = q.useRef(0),
          o = q.useCallback(e => {
            const o = n.current + e;
            t(o),
              function e(t) {
                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          i = q.useCallback(() => {
            n.current = "", window.clearTimeout(r.current)
          }, []);
        return q.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i]
      }

      function Ow(e, t, n) {
        const r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === r.length && (i = i.filter(e => e !== n));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
        return l !== n ? l : void 0
      }
      ww.displayName = "SelectBubbleInput";
      var jw = F_,
        Pw = q_,
        Sw = $_,
        Ew = K_,
        kw = X_,
        Rw = Z_,
        Tw = iw,
        Dw = pw,
        Nw = mw;

      function Iw(e) {
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

      function Mw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Lw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mw(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Iw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mw(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Aw(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var zw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Vw = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Lw(Lw({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) zw(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Aw(e.variantClassNames, e => Aw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Fw = Vw({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bw = Vw({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qw = Vw({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ww = Vw({
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
        $w = Vw({
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
        Kw = Vw({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Xw = (0, q.createContext)(null);

      function Hw() {
        const e = (0, q.useContext)(Xw);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Zw = (0, q.forwardRef)(({
          children: e,
          testId: t,
          isRequired: n,
          isDisabled: r,
          isReadOnly: o,
          defaultValue: i,
          onValueChange: s,
          name: a,
          value: l,
          defaultOpen: u,
          onOpenChange: c,
          isOpen: d,
          size: f = "MD",
          status: p = "neutral",
          ...h
        }, m) => {
          const v = (0, q.useRef)(null),
            y = (0, G.UP)(v, m),
            g = (0, q.useId)(),
            b = (0, q.useId)(),
            _ = (0, q.useId)(),
            w = (0, q.useId)(),
            x = (0, q.useId)(),
            C = (0, q.useId)(),
            [O = !1, P] = (0, G.ic)({
              prop: d,
              defaultProp: u,
              onChange: c
            }),
            S = (0, H.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, j.jsx)(Xw.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: _,
              triggerId: C,
              hintId: w,
              popoverId: x,
              defaultValue: i,
              onValueChange: s,
              value: l,
              isOpen: O,
              setIsOpen: P,
              defaultOpen: u,
              onOpenChange: c,
              isRequired: n,
              isDisabled: r,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, j.jsx)(jw, {
              required: n,
              disabled: r,
              open: O,
              onOpenChange: () => P(!o && !O),
              value: l,
              defaultValue: i,
              onValueChange: s,
              name: a,
              children: (0, j.jsx)("div", {
                ref: y,
                ...S,
                children: e
              })
            })
          })
        }),
        Uw = (0, q.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            popoverId: i
          } = Hw(), s = (0, H.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Fw({
              hideDividers: e
            }),
            "data-testid": n
          }, r);
          return (0, j.jsx)(Rw, {
            ...s,
            ref: o,
            children: (0, j.jsx)(Tw, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Gw = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = (0, H.v6)({
            "data-testid": e
          }, t);
          return (0, j.jsx)(Tw, {
            ref: n,
            ...r
          })
        }),
        Yw = (0, q.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, n);
          return (0, j.jsxs)(__.bL, {
            ...o,
            ref: r,
            children: [(0, j.jsx)(Gw, {
              asChild: !0,
              children: (0, j.jsx)(__.LM, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, j.jsx)(__.Ze, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, j.jsx)(__.zi, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Qw = (0, q.forwardRef)(({
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
            isDisabled: u,
            labelId: c,
            hintId: d,
            triggerId: f,
            popoverId: p,
            descriptionId: h,
            isOpen: m,
            value: v,
            size: y
          } = Hw(), {
            isPressed: g,
            pressProps: b
          } = n_({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), _ = (0, H.v6)({
            id: f,
            className: $w({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!u
            }),
            "aria-labelledby": (0, H.VW)(n, c, d),
            "aria-describedby": (0, H.VW)(r, h),
            "aria-activedescendant": v,
            "aria-controls": p,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, H.cJ)(b, "onKeyDown"), i), w = o ? Y.DX : Pw;
          return (0, j.jsx)(w, {
            ..._,
            ref: s,
            children: e
          })
        }),
        Jw = (0, q.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": n
            }, r),
            s = t ? Y.DX : "span";
          return (0, j.jsx)(s, {
            ...i,
            ref: o,
            children: (0, j.jsx)(Sw, {
              placeholder: e
            })
          })
        }),
        ex = (0, q.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: s
          } = Hw(), a = s ? te.ChevronUp : te.ChevronDown, l = (0, H.v6)({
            asChild: !0,
            className: Kw({
              isDisabled: i || o
            }),
            "data-testid": t
          }, n);
          return (0, j.jsx)(Ew, {
            ...l,
            ref: r,
            children: e || (0, j.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        tx = (0, q.forwardRef)(({
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
            labelId: u,
            triggerId: c
          } = Hw(), d = a && !o, f = (0, H.v6)({
            id: i.id || u,
            htmlFor: c,
            "data-testid": e,
            className: Ww({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), p = t ? Y.DX : "label";
          return (0, j.jsx)(Y.s6, {
            enabled: r,
            children: (0, j.jsx)(p, {
              ...f,
              ref: s,
              children: n
            })
          })
        }),
        nx = (0, q.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Hw(), a = (0, H.v6)({
            className: Bw({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, r), l = n ? Y.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        rx = (0, q.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = Hw(), a = (0, H.v6)({
            className: qw({
              isDisabled: s
            }),
            "data-testid": n,
            id: i
          }, r), l = t ? Y.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        ox = (0, q.forwardRef)(({
          children: e,
          value: t,
          isDisabled: n,
          testId: r,
          ...o
        }, i) => {
          const s = (0, q.useRef)(null),
            a = (0, G.UP)(s, i),
            l = (0, H.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: n,
              "data-testid": r
            }, o);
          return (0, j.jsx)(Dw, {
            ref: a,
            ...l,
            children: e
          })
        }),
        ix = (0, q.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, n);
          return (0, j.jsx)(Nw, {
            ref: r,
            asChild: !0,
            children: (0, j.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        sx = (0, q.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, n);
          return (0, j.jsx)(Ew, {
            asChild: !0,
            ...o,
            ref: r,
            children: e
          })
        }),
        ax = kw,
        lx = (0, q.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = Hw(), a = (0, H.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, r), l = n ? Y.DX : y_;
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        ux = g_,
        cx = b_,
        dx = new Set(["id"]),
        fx = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        px = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        hx = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        mx = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        vx = /^(data-.*)$/;

      function yx(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          global: o,
          events: i = o,
          propNames: s
        } = t, a = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (dx.has(t) || n && fx.has(t) || r && px.has(t) || o && hx.has(t) || i && (mx.has(t) || t.endsWith("Capture") && mx.has(t.slice(0, -7))) || s?.has(t) || vx.test(t)) && (a[t] = e[t]);
        return a
      }
      let gx = null,
        bx = "keyboard";
      const _x = new Set;
      let wx = new Map,
        xx = !1,
        Cx = !1;

      function Ox(e, t) {
        for (let n of _x) n(e, t)
      }

      function jx(e) {
        xx = !0, !$b.isOpening && function(e) {
          return !(e.metaKey || !ib() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (gx = "keyboard", bx = "keyboard", Ox("keyboard", e))
      }

      function Px(e) {
        gx = "pointer", bx = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (xx = !0, Ox("pointer", e))
      }

      function Sx(e) {
        !$b.isOpening && Cb(e) && (xx = !0, gx = "virtual", bx = "virtual")
      }

      function Ex(e) {
        let t = Vg(qg(e)),
          n = zg(qg(e));
        qg(e) !== t && qg(e) !== n && !tb && e.isTrusted && (xx || Cx || (gx = "virtual", bx = "virtual", Ox("virtual", e)), xx = !1, Cx = !1)
      }

      function kx() {
        tb || (xx = !1, Cx = !0)
      }

      function Rx(e) {
        if ("undefined" == typeof window || "undefined" == typeof document) return;
        const t = Vg(e),
          n = zg(e);
        if (wx.get(t)) return;
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          xx = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", jx, !0), n.addEventListener("keyup", jx, !0), n.addEventListener("click", Sx, !0), t.addEventListener("focus", Ex, !0), t.addEventListener("blur", kx, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", Px, !0), n.addEventListener("pointermove", Px, !0), n.addEventListener("pointerup", Px, !0)), t.addEventListener("beforeunload", () => {
          Tx(e)
        }, {
          once: !0
        }), wx.set(t, {
          focus: r
        })
      }
      const Tx = (e, t) => {
        const n = Vg(e),
          r = zg(e);
        t && r.removeEventListener("DOMContentLoaded", t), wx.has(n) && (n.HTMLElement.prototype.focus = wx.get(n).focus, r.removeEventListener("keydown", jx, !0), r.removeEventListener("keyup", jx, !0), r.removeEventListener("click", Sx, !0), n.removeEventListener("focus", Ex, !0), n.removeEventListener("blur", kx, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", Px, !0), r.removeEventListener("pointermove", Px, !0), r.removeEventListener("pointerup", Px, !0)), wx.delete(n))
      };

      function Dx(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(r), t && n.stopPropagation()
        }
      }
      "undefined" != typeof document && function(e) {
        const t = zg(e);
        let n;
        "loading" !== t.readyState ? Rx(e) : (n = () => {
          Rx(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let Nx = q.createContext(null);

      function Ix(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: o
          } = e;
          const i = (0, q.useCallback)(e => {
              if (qg(e) === e.currentTarget) return r && r(e), o && o(!1), !0
            }, [r, o]),
            s = eb(i),
            a = (0, q.useCallback)(e => {
              let t = qg(e);
              const r = zg(t),
                i = r ? Bg(r) : Bg();
              t === e.currentTarget && t === i && (n && n(e), o && o(!0), s(e))
            }, [o, n, s]);
          return {
            focusProps: {
              onFocus: !t && (n || o || r) ? a : void 0,
              onBlur: t || !r && !o ? void 0 : i
            }
          }
        }(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Dx(e.onKeyDown),
              onKeyUp: Dx(e.onKeyUp)
            }
          }
        }(e), o = Bb(n, r), i = function(e) {
          let t = (0, q.useContext)(Nx) || {};
          Yb(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), s = e.isDisabled ? {} : i, a = (0, q.useRef)(e.autoFocus);
        (0, q.useEffect)(() => {
          a.current && t.current && function(e) {
            if (!e.isConnected) return;
            const t = zg(e);
            if ("virtual" === gx) {
              let n = Bg(t);
              vb(() => {
                const r = Bg(t);
                r !== n && r !== t.body || !e.isConnected || Lg(e)
              })
            } else Lg(e)
          }(t.current), a.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Bb({
            ...o,
            tabIndex: l
          }, s)
        }
      }

      function Mx(e, t, n) {
        let r = Ub(e => {
          n && !e.defaultPrevented && n(t)
        });
        (0, q.useEffect)(() => {
          let t = e?.current?.form;
          return t?.addEventListener("reset", r), () => {
            t?.removeEventListener("reset", r)
          }
        }, [e])
      }

      function Lx(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        Yg(() => {
          if ("native" === r && n?.current && !n.current.disabled) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: Ax(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, q.useRef)(!1),
          s = Ub(() => {
            i.current || t.resetValidation()
          }),
          a = Ub(e => {
            t.displayValidation.isInvalid || t.commitValidation();
            let r = n?.current?.form;
            var i;
            !e.defaultPrevented && n && r && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let n = e.elements[t];
                if (!1 === n.validity?.valid) return n
              }
              return null
            }(r) === n.current && (o ? o() : n.current?.focus(), gx = i = "keyboard", bx = i, Ox(i, null)), e.preventDefault()
          }),
          l = Ub(() => {
            t.commitValidation()
          });
        (0, q.useEffect)(() => {
          let e = n?.current;
          if (!e) return;
          let t = e.form,
            r = t?.reset;
          return t && (t.reset = () => {
            i.current = !window.event || "message" === window.event.type && qg(window.event) instanceof MessagePort, r?.call(t), i.current = !1
          }), e.addEventListener("invalid", a), e.addEventListener("change", l), t?.addEventListener("reset", s), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), t?.removeEventListener("reset", s), t && (t.reset = r)
          }
        }, [n, r])
      }

      function Ax(e) {
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

      function zx(e = !0) {
        let t = Lb(),
          [n, r] = function(e = !0) {
            let [t, n] = (0, q.useState)(e), r = (0, q.useRef)(!1), o = (0, q.useCallback)(e => {
              r.current = !0, n(!!e)
            }, []);
            return Yg(() => {
              r.current || n(!1)
            }, []), [o, t]
          }(e);
        return {
          id: r ? t : void 0,
          ref: n
        }
      }
      const Vx = {
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
        Fx = {
          ...Vx,
          customError: !0,
          valid: !1
        },
        Bx = {
          isInvalid: !1,
          validationDetails: Vx,
          validationErrors: []
        },
        qx = (0, q.createContext)({}),
        Wx = "__reactAriaFormValidationState";

      function $x(e) {
        if (e[Wx]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[Wx];
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
          n && (t ||= "invalid" === n);
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: Fx
            } : null,
            u = (0, q.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return Kx(n)
                }
                return []
              }(s, o);
              return Xx(e)
            }, [s, o]);
          i?.validationDetails.valid && (i = void 0);
          let c = (0, q.useContext)(qx),
            d = (0, q.useMemo)(() => r ? Array.isArray(r) ? r.flatMap(e => Kx(c[e])) : Kx(c[r]) : [], [c, r]),
            [f, p] = (0, q.useState)(c),
            [h, m] = (0, q.useState)(!1);
          c !== f && (p(c), m(!1));
          let v = (0, q.useMemo)(() => Xx(h ? [] : d), [h, d]),
            y = (0, q.useRef)(Bx),
            [g, b] = (0, q.useState)(Bx),
            _ = (0, q.useRef)(Bx),
            [w, x] = (0, q.useState)(!1);
          return (0, q.useEffect)(() => {
            if (!w) return;
            x(!1);
            let e = u || i || y.current;
            Hx(e, _.current) || (_.current = e, b(e))
          }), {
            realtimeValidation: l || v || u || i || Bx,
            displayValidation: "native" === a ? l || v || g : l || v || u || i || g,
            updateValidation(e) {
              "aria" !== a || Hx(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = Bx;
              Hx(e, _.current) || (_.current = e, b(e)), "native" === a && x(!1), m(!0)
            },
            commitValidation() {
              "native" === a && x(!0), m(!0)
            }
          }
        }(e)
      }

      function Kx(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Xx(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Fx
        } : null
      }

      function Hx(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n)
      }

      function Zx(e, t, n) {
        let {
          isDisabled: r = !1,
          isReadOnly: o = !1,
          value: i,
          name: s,
          form: a,
          children: l,
          isRequired: u,
          validationBehavior: c = "aria",
          "aria-label": d,
          "aria-labelledby": f,
          "aria-describedby": p,
          onPressStart: h,
          onPressEnd: m,
          onPressChange: v,
          onPress: y,
          onPressUp: g,
          onClick: b
        } = e, _ = $x({
          ...e,
          value: t.isSelected
        }), {
          isInvalid: w,
          validationErrors: x,
          validationDetails: C
        } = _.displayValidation;
        Lx(e, _, n);
        let {
          pressProps: O,
          isPressed: j
        } = n_({
          onPressStart: h,
          onPressEnd: m,
          onPressChange: v,
          onPress: y,
          onPressUp: g,
          onClick: b,
          isDisabled: r
        }), [P, S] = (0, q.useState)(!1), {
          pressProps: E
        } = n_({
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
          onPress(r) {
            if ("keyboard" === r.pointerType || "virtual" === r.pointerType) return void r.continuePropagation();
            y?.(r), t.toggle(), n.current?.focus();
            let {
              [Wx]: o
            } = e, {
              commitValidation: i
            } = o || _;
            i()
          },
          isDisabled: r || o
        }), {
          focusableProps: k
        } = Ix(e, n), R = Bb(O, k), T = yx(e, {
          labelable: !0
        });
        Mx(n, t.defaultSelected, t.setSelected);
        let D = zx(),
          N = zx();
        return {
          labelProps: Bb(E, {
            onClick: e => e.preventDefault()
          }),
          inputProps: Bb(T, {
            checked: t.isSelected,
            "aria-required": u && "aria" === c || void 0,
            required: u && "native" === c,
            "aria-invalid": w || "invalid" === e.validationState || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            "aria-describedby": [D.id, N.id, p].filter(Boolean).join(" ") || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(qg(e).checked)
            },
            disabled: r,
            ...null == i ? {} : {
              value: i
            },
            name: s,
            form: a,
            type: "checkbox",
            ...R
          }),
          descriptionProps: D,
          errorMessageProps: N,
          isSelected: t.isSelected,
          isPressed: j || P,
          isDisabled: r,
          isReadOnly: o,
          isInvalid: w || "invalid" === e.validationState,
          validationErrors: x,
          validationDetails: C
        }
      }
      var Ux;
      const Gx = "undefined" != typeof document ? null !== (Ux = q.useInsertionEffect) && void 0 !== Ux ? Ux : q.useLayoutEffect : () => {};

      function Yx(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = function(e, t, n) {
          let [r, o] = (0, q.useState)(e || t), i = (0, q.useRef)(r), s = (0, q.useRef)(void 0 !== e), a = void 0 !== e;
          (0, q.useEffect)(() => {
            s.current, s.current = a
          }, [a]);
          let l = a ? e : r;
          Gx(() => {
            i.current = l
          });
          let [, u] = (0, q.useReducer)(() => ({}), {}), c = (0, q.useCallback)((e, ...t) => {
            let r = "function" == typeof e ? e(i.current) : e;
            Object.is(i.current, r) || (i.current = r, o(r), u(), null == n || n(r, ...t))
          }, [n]);
          return [l, c]
        }(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, q.useState)(n);
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

      function Qx(e) {
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

      function Jx(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function eC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Jx(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Qx(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jx(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function tC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var nC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        rC = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = eC(eC({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) nC(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tC(e.variantClassNames, e => tC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        oC = rC({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        iC = rC({
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
        sC = rC({
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
        aC = rC({
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
        lC = rC({
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
      const uC = (0, q.createContext)(null);

      function cC() {
        const e = (0, q.useContext)(uC);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const dC = (0, q.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: n,
          asChild: r,
          children: o,
          isDisabled: i = !1,
          isReadOnly: s = !1,
          ...a
        }, l) => {
          const u = (0, H.v6)({
              "data-testid": n,
              className: "foundry_okz6z20"
            }, a),
            c = r ? Y.DX : "div",
            d = (0, q.useId)(),
            f = (0, q.useId)(),
            p = (0, q.useId)();
          return (0, j.jsx)(uC.Provider, {
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
            children: (0, j.jsx)(c, {
              ...u,
              ref: l,
              children: o
            })
          })
        }),
        fC = (0, q.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: n,
          "aria-labelledby": r,
          "aria-describedby": o,
          id: i,
          isSelected: s,
          defaultSelected: a,
          onSelectedChange: l,
          name: u,
          value: c,
          ...d
        }, f) => {
          const p = (0, q.useRef)(null),
            h = (0, G.UP)(p, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: _,
              isReadOnly: w
            } = cC(),
            x = Yx({
              isDisabled: _,
              isReadOnly: w,
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
                ...s
              } = Zx(e, t, n);
              return {
                labelProps: r,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: i
                },
                isSelected: i,
                ...s
              }
            }({
              id: i || y,
              "aria-labelledby": (0, H.VW)(r, g),
              "aria-describedby": (0, H.VW)(o, b),
              name: u,
              value: c,
              isDisabled: _,
              isReadOnly: w
            }, x, p),
            O = (0, H.v6)({
              className: lC({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": _ || w,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? n?.(e), e.defaultPrevented || _ || w || x.toggle()
              }
            }, d);
          return (0, j.jsxs)("div", {
            ...O,
            children: [(0, j.jsx)(Y.s6, {
              children: (0, j.jsx)("input", {
                ...C,
                ref: h
              })
            }), (0, j.jsx)("div", {
              className: aC({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, j.jsx)("div", {
                className: iC({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        pC = (0, q.forwardRef)(({
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
            size: u
          } = cC(), c = (0, H.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: sC({
              isDisabled: s,
              size: u
            })
          }, o), d = t ? Y.DX : "label";
          return (0, j.jsx)(Y.s6, {
            enabled: r,
            children: (0, j.jsx)(d, {
              ...c,
              ref: i,
              children: n
            })
          })
        }),
        hC = (0, q.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = cC(), a = r.id || s, l = (0, H.v6)({
            className: oC({
              isDisabled: i
            }),
            "data-testid": n,
            id: a
          }, r), u = t ? Y.DX : "div";
          return (0, j.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        }),
        mC = ({
          color: e = "currentColor"
        }) => (0, j.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, j.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        vC = ({
          color: e = "currentColor"
        }) => (0, j.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, j.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        yC = ({
          color: e = "currentColor"
        }) => (0, j.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, j.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        gC = ({
          color: e = "currentColor"
        }) => (0, j.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, j.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        bC = ({
          color: e = "currentColor"
        }) => (0, j.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, j.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        _C = ({
          color: e = "currentColor"
        }) => (0, j.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, j.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function wC(e) {
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

      function xC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function CC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xC(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = wC(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xC(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function OC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var jC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        PC = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = CC(CC({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) jC(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return OC(e.variantClassNames, e => OC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        SC = PC({
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
        EC = PC({
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
        kC = PC({
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
        RC = PC({
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
        TC = PC({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        DC = PC({
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
      const NC = (0, q.createContext)(null);

      function IC() {
        const e = (0, q.useContext)(NC);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const MC = (0, q.forwardRef)(({
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
            l = r ? Y.DX : "div",
            u = (0, q.useId)(),
            c = (0, q.useId)(),
            d = (0, q.useId)();
          return (0, j.jsx)(NC.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: c,
              inputId: d,
              ...i
            },
            children: (0, j.jsx)(l, {
              ...a,
              ref: s,
              children: o
            })
          })
        }),
        LC = (0, q.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: n,
          onCheckedChange: r,
          name: o,
          onPress: i,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": u,
          "aria-labelledby": c,
          className: d,
          ...f
        }, p) => {
          const {
            size: h,
            appearance: m,
            isIndeterminate: v,
            isRequired: y,
            descriptionId: g,
            labelId: b,
            inputId: _,
            ...w
          } = IC(), x = (0, q.useRef)(null), C = f.id || _, {
            isPressed: O,
            pressProps: P
          } = n_({
            ref: x
          }), {
            setSelected: S,
            toggle: E,
            ...k
          } = Yx({
            isSelected: t,
            defaultSelected: n,
            onChange: r
          }), {
            inputProps: R,
            isSelected: T,
            isDisabled: D,
            isReadOnly: N
          } = function(e, t, n) {
            let {
              labelProps: r,
              inputProps: o,
              descriptionProps: i,
              errorMessageProps: s,
              isSelected: a,
              isPressed: l,
              isDisabled: u,
              isReadOnly: c,
              isInvalid: d,
              validationErrors: f,
              validationDetails: p
            } = Zx(e, t, n), {
              isIndeterminate: h
            } = e;
            return (0, q.useEffect)(() => {
              n.current && (n.current.indeterminate = !!h)
            }), {
              labelProps: Bb(r, (0, q.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: o,
              descriptionProps: i,
              errorMessageProps: s,
              isSelected: a,
              isPressed: l,
              isDisabled: u,
              isReadOnly: c,
              isInvalid: d,
              validationErrors: f,
              validationDetails: p
            }
          }({
            "aria-label": "",
            id: C,
            name: o,
            ...w
          }, {
            ...k,
            toggle: E,
            setSelected: w.isReadOnly ? () => !1 : S
          }, x), I = (0, H.v6)({
            className: EC({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || D || N || E()
            }
          }, P, f), M = (0, H.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, H.VW)(c, b),
            "aria-describedby": (0, H.VW)(l, g),
            "aria-errormessage": (0, H.VW)(u, w.isInvalid ? g : void 0),
            "aria-required": y,
            required: y
          }, R), L = v ? a[`Dash${h}`] : a[`Check${h}`];
          return (0, j.jsxs)("div", {
            ...I,
            children: [(0, j.jsx)(Y.s6, {
              children: (0, j.jsx)("input", {
                ...M,
                ref: p
              })
            }), (0, j.jsx)("div", {
              className: (0, ee.$)(SC({
                size: h,
                appearance: m
              }), d),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : T ? "checked" : "unchecked",
              "data-disabled": D || N,
              "data-testid": e,
              "data-pressed": O,
              children: (0, j.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (T || v) && (0, j.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        AC = (0, q.forwardRef)(({
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
            inputId: u,
            isRequired: c
          } = IC(), d = i.id || l, f = c && !o, p = (0, H.v6)({
            className: DC({
              size: a,
              showAsterisk: f
            }),
            "data-testid": n,
            id: d,
            htmlFor: i.htmlFor || u
          }, i), h = t ? Y.DX : "label";
          return (0, j.jsx)(Y.s6, {
            enabled: r,
            children: (0, j.jsx)(h, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        zC = (0, q.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = IC(), a = r.id || s, l = (0, H.v6)({
            className: kC({
              isDisabled: i
            }),
            "data-testid": n,
            id: a
          }, r), u = t ? Y.DX : "div";
          return (0, j.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        }),
        VC = (0, q.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            descriptionId: i
          } = IC(), s = r.id || i, a = (0, H.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": n,
            id: s
          }, r), l = t ? Y.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        FC = (0, q.createContext)(null);

      function BC() {
        const e = (0, q.useContext)(FC);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const qC = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          size: r = "MD",
          isRequired: o = !1,
          ...i
        }, s) => {
          const [a, l] = (0, q.useState)(null), [u, c] = (0, q.useState)(null), d = [a, u].filter(Boolean).join(" "), f = (0, H.v6)({
            "data-testid": e,
            "aria-describedby": d,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, i), p = t ? Y.DX : "fieldset";
          return (0, j.jsx)(FC.Provider, {
            value: {
              size: r,
              isRequired: o,
              descriptionId: a,
              errorTextId: u,
              setDescriptionId: l,
              setErrorTextId: c
            },
            children: (0, j.jsx)(p, {
              ...f,
              ref: s,
              children: n
            })
          })
        }),
        WC = (0, q.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          optionalText: r = "optional",
          hideVisually: o = !1,
          hideRequiredAsterisk: i,
          ...s
        }, a) => {
          const {
            isRequired: l
          } = BC(), u = l && !i, c = (0, H.v6)({
            "data-testid": n,
            className: TC({
              showAsterisk: u
            })
          }, s), d = t ? Y.DX : "legend";
          return (0, j.jsx)(Y.s6, {
            enabled: o,
            children: (0, j.jsxs)(d, {
              ...c,
              ref: a,
              children: [(0, j.jsx)(Y.xV, {
                children: e
              }), !l && (0, j.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", r, ")"]
              })]
            })
          })
        }),
        $C = (0, q.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            setDescriptionId: i
          } = BC(), s = (0, q.useId)(), a = r.id || s;
          (0, q.useEffect)(() => {
            i(a)
          }, [i, a]);
          const l = (0, H.v6)({
              "data-testid": n,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: a
            }, r),
            u = t ? Y.DX : "div";
          return (0, j.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        }),
        KC = (0, q.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: i
          } = BC(), s = (0, H.v6)({
            "data-testid": n,
            className: RC({
              size: i
            })
          }, r), a = t ? Y.DX : "div";
          return (0, j.jsx)(a, {
            ...s,
            ref: o,
            children: e
          })
        }),
        XC = (0, q.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            setErrorTextId: i
          } = BC(), s = (0, q.useId)(), a = r.id || s;
          (0, q.useEffect)(() => {
            i(a)
          }, [i, a]);
          const l = (0, H.v6)({
              "data-testid": n,
              id: a,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, r),
            u = te.X,
            c = t ? Y.DX : "div";
          return (0, j.jsxs)(c, {
            ...l,
            ref: o,
            children: [(0, j.jsx)(u, {
              label: "",
              size: "SM"
            }), (0, j.jsx)(Y.xV, {
              children: e
            })]
          })
        });

      function HC(e) {
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

      function ZC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function UC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ZC(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = HC(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ZC(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function GC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var YC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        QC = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = UC(UC({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) YC(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return GC(e.variantClassNames, e => GC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        JC = QC({
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
        eO = QC({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        tO = QC({
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
        nO = QC({
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
      const rO = (0, q.createContext)(null);

      function oO() {
        const e = (0, q.useContext)(rO);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const iO = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const u = (0, H.v6)({
              "data-testid": n,
              className: "foundry_vq8c3j0"
            }, a),
            c = e ? Y.DX : "div",
            d = (0, q.useId)(),
            f = (0, q.useId)(),
            p = (0, q.useId)(),
            h = (0, q.useId)();
          return (0, j.jsx)(rO.Provider, {
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
            children: (0, j.jsx)(c, {
              ref: l,
              ...u,
              children: t
            })
          })
        }),
        sO = (0, q.forwardRef)(({
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
            isDisabled: u,
            isRequired: c
          } = oO(), d = (0, H.v6)({
            className: tO({
              isDisabled: u,
              showAsterisk: c && !o
            }),
            "data-testid": n,
            id: a,
            htmlFor: l
          }, i), f = t ? Y.DX : "label";
          return (0, j.jsx)(Y.s6, {
            enabled: r,
            children: (0, j.jsx)(f, {
              ...d,
              ref: s,
              children: e
            })
          })
        }),
        aO = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          rows: r = 5,
          defaultValue: o,
          name: i,
          placeholder: s = " ",
          "aria-labelledby": a,
          "aria-describedby": l,
          ...u
        }, c) => {
          const {
            descriptionId: d,
            labelId: f,
            inputId: p,
            hintId: h,
            isDisabled: m,
            isRequired: v,
            isReadOnly: y,
            status: g
          } = oO(), b = (0, q.useRef)(null), _ = (0, G.UP)(b, c), w = (0, H.v6)({
            className: nO({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: i,
            id: u.id || p,
            rows: r,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: s,
            "aria-labelledby": (0, H.VW)(u.id, f, h, a),
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
          }, u), x = e ? Y.DX : "textarea";
          return (0, j.jsx)(x, {
            ref: _,
            ...w,
            children: t
          })
        }),
        lO = (0, q.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = oO(), a = (0, H.v6)({
            className: JC({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, r), l = n ? Y.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        uO = (0, q.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = oO(), a = (0, H.v6)({
            className: eO({
              isDisabled: s
            }),
            "data-testid": n,
            id: i
          }, r), l = t ? Y.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        cO = (0, q.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = oO(), a = (0, H.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, r), l = n ? Y.DX : y_;
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        dO = g_,
        fO = b_,
        pO = "undefined" != typeof document ? q.useInsertionEffect ?? q.useLayoutEffect : () => {};
      let hO = Math.round(1e10 * Math.random()),
        mO = 0;

      function vO(e) {
        let t = (0, q.useMemo)(() => e.name || `radio-group-${hO}-${++mO}`, [e.name]),
          [n, r] = function(e, t, n) {
            let [r, o] = (0, q.useState)(e || t), i = (0, q.useRef)(r), s = (0, q.useRef)(void 0 !== e), a = void 0 !== e;
            (0, q.useEffect)(() => {
              s.current, s.current = a
            }, [a]);
            let l = a ? e : r;
            pO(() => {
              i.current = l
            });
            let [, u] = (0, q.useReducer)(() => ({}), {}), c = (0, q.useCallback)((e, ...t) => {
              let r = "function" == typeof e ? e(i.current) : e;
              Object.is(i.current, r) || (i.current = r, o(r), u(), n?.(r, ...t))
            }, [n]);
            return [l, c]
          }(e.value, e.defaultValue ?? null, e.onChange),
          [o] = (0, q.useState)(n),
          [i, s] = (0, q.useState)(null),
          a = $x({
            ...e,
            value: n
          }),
          l = a.displayValidation.isInvalid;
        return {
          ...a,
          name: t,
          selectedValue: n,
          defaultSelectedValue: void 0 !== e.value ? o : e.defaultValue ?? null,
          setSelectedValue: t => {
            e.isReadOnly || e.isDisabled || (r(t), a.commitValidation())
          },
          lastFocusedValue: i,
          setLastFocusedValue: s,
          isDisabled: e.isDisabled || !1,
          isReadOnly: e.isReadOnly || !1,
          isRequired: e.isRequired || !1,
          validationState: e.validationState || (l ? "invalid" : null),
          isInvalid: l
        }
      }

      function yO(e, t) {
        return !!e && !!t && t.some(t => Fg(t, e))
      }

      function gO(e, t, n) {
        let r = t?.tabbable ? Ug : Zg,
          o = e?.nodeType === Node.ELEMENT_NODE ? e : null,
          i = zg(o),
          s = function(e, t, n, r) {
            return e.createTreeWalker(t, n, r)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if (Fg(t?.from, e)) return NodeFilter.FILTER_REJECT;
              if (t?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from(zg(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let n = Vg(e);
                      return t instanceof n.RadioNodeList ? Array.from(t).filter(e => e instanceof n.HTMLInputElement) : t instanceof n.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !r(e) || n && !yO(e, n) || t?.accept && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return t?.from && (s.currentNode = t.from), s
      }
      class bO {
        constructor() {
          this.fastMap = new Map, this.root = new _O({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(t ?? null);
          if (!r) return;
          let o = new _O({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && yO(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          let e = new bO;
          for (let t of this.traverse()) e.addTreeNode(t.scopeRef, t.parent?.scopeRef ?? null, t.nodeToRestore);
          return e
        }
      }
      class _O {
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
      new bO;
      const wO = new WeakMap;

      function xO(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = Lb(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function CO(e) {
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
          t = Lb(t);
          let s = Lb(),
            a = {};
          return n && (r = r ? `${s} ${r}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: xO({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), a = zb([Boolean(t), Boolean(n), r, o]), l = zb([Boolean(t), Boolean(n), r, o]);
        return s = Bb(s, {
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
      const OO = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        jO = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function PO(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return OO.has(t.script)
        }
        let t = e.split("-")[0];
        return jO.has(t)
      }
      const SO = Symbol.for("react-aria.i18n.locale");

      function EO() {
        let e = "undefined" != typeof window && window[SO] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: PO(e) ? "rtl" : "ltr"
        }
      }
      let kO = EO(),
        RO = new Set;

      function TO() {
        kO = EO();
        for (let e of RO) e(kO)
      }
      const DO = q.createContext(null);

      function NO() {
        let e = function() {
          let e = Db(),
            [t, n] = (0, q.useState)(kO);
          return (0, q.useEffect)(() => (0 === RO.size && window.addEventListener("languagechange", TO), RO.add(n), () => {
            RO.delete(n), 0 === RO.size && window.removeEventListener("languagechange", TO)
          }), []), e ? {
            locale: "undefined" != typeof window && window[SO] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, q.useContext)(DO) || e
      }

      function IO(e, t) {
        let {
          name: n,
          form: r,
          isReadOnly: o,
          isRequired: i,
          isDisabled: s,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: u
        } = NO(), {
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: m,
          errorMessageProps: v
        } = CO({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = yx(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, i = (0, q.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: s,
            removeAllGlobalListeners: a
          } = Gb(), l = (0, q.useCallback)(e => {
            Fg(e.currentTarget, qg(e)) && i.current.isFocusWithin && !Fg(e.currentTarget, e.relatedTarget) && (i.current.isFocusWithin = !1, a(), n && n(e), o && o(!1))
          }, [n, o, i, a]), u = eb(l), c = (0, q.useCallback)(e => {
            if (!Fg(e.currentTarget, qg(e))) return;
            let t = qg(e);
            const n = zg(t),
              a = Bg(n);
            if (!i.current.isFocusWithin && a === t) {
              r && r(e), o && o(!0), i.current.isFocusWithin = !0, u(e);
              let t = e.currentTarget;
              s(n, "focus", e => {
                let r = qg(e);
                if (i.current.isFocusWithin && !Fg(t, r)) {
                  let e = new n.defaultView.FocusEvent("blur", {
                    relatedTarget: r
                  });
                  Jg(e, t);
                  let o = Qg(e);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [r, o, u, s, l]);
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
          onBlurWithin(n) {
            e.onBlur?.(n), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = Lb(n);
        return wO.set(t, {
          name: b,
          form: r,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: Bb(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let n;
              switch (e.key) {
                case "ArrowRight":
                  n = "rtl" === u && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  n = "rtl" === u && "vertical" !== a ? "next" : "prev";
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
              let r, o = gO(e.currentTarget, {
                from: qg(e),
                accept: e => e instanceof Vg(e).HTMLInputElement && "radio" === e.type
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
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        }
      }

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

      function LO(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function AO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? LO(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = MO(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : LO(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function zO(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
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
              r = AO(AO({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) VO(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zO(e.variantClassNames, e => zO(e, e => e.split(" ")[0]))
            }
          }, t
        },
        BO = FO({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qO = FO({
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
      const WO = (0, q.createContext)(null);

      function $O() {
        const e = (0, q.useContext)(WO);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const KO = (0, q.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: n = "vertical",
          children: r,
          testId: o,
          asChild: i,
          "aria-labelledby": s,
          "aria-describedby": a,
          "aria-errormessage": l,
          status: u = "neutral",
          ...c
        }, d) => {
          const f = (0, q.useRef)(null),
            p = (0, G.UP)(f, d),
            h = (0, q.useId)(),
            m = (0, q.useId)(),
            v = (0, q.useId)(),
            y = vO({
              ...c,
              isInvalid: "invalid" === u
            }),
            {
              radioGroupProps: g
            } = IO({
              ...c,
              orientation: n,
              "aria-labelledby": (0, H.VW)(h, s),
              "aria-describedby": (0, H.VW)(m, v, a),
              "aria-errormessage": (0, H.VW)(v, l)
            }, y),
            b = (0, H.v6)({
              className: "foundry_njguqn0"
            }, g, (0, H.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            _ = i ? Y.DX : "div";
          return (0, j.jsx)(WO.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: n,
              descriptionId: m,
              labelId: h,
              errorId: v,
              status: u,
              ...c
            },
            children: (0, j.jsx)(_, {
              ref: p,
              "data-testid": o,
              ...b,
              children: r
            })
          })
        }),
        XO = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            size: i,
            orientation: s
          } = $O(), a = (0, H.v6)({
            "data-testid": e,
            className: qO({
              size: i,
              orientation: s
            })
          }, r), l = t ? Y.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: n
          })
        }),
        HO = (0, q.forwardRef)(({
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
          } = $O(), u = a && !o, c = (0, H.v6)({
            id: i.id || l,
            "data-testid": e,
            className: BO({
              showAsterisk: u
            })
          }, i), d = t ? Y.DX : "div";
          return (0, j.jsx)(Y.s6, {
            enabled: r,
            children: (0, j.jsx)(d, {
              ...c,
              ref: s,
              children: n
            })
          })
        }),
        ZO = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            descriptionId: i
          } = $O(), s = (0, H.v6)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, r), a = t ? Y.DX : "div";
          return (0, j.jsx)(a, {
            ...s,
            ref: o,
            children: n
          })
        }),
        UO = (0, q.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            errorId: i,
            status: s
          } = $O(), a = (0, H.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: s
          }, r), l = n ? Y.DX : y_;
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        GO = g_,
        YO = b_;
      var QO = FO({
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
        JO = FO({
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
        ej = FO({
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
        tj = FO({
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
      const nj = ({
          color: e = "currentColor"
        }) => (0, j.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, j.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        rj = ({
          color: e = "currentColor"
        }) => (0, j.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, j.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        oj = ({
          color: e = "currentColor"
        }) => (0, j.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, j.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        ij = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_1pfduet0"
            }, r),
            s = e ? Y.DX : "label";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        sj = (0, q.forwardRef)(({
          testId: e,
          value: t,
          ...n
        }, r) => {
          const o = (0, q.useRef)(null),
            i = (0, G.UP)(o, r),
            s = (0, q.useId)(),
            {
              state: a,
              appearance: l,
              size: u,
              isReadOnly: d,
              isRequired: f
            } = $O(),
            {
              isPressed: p,
              pressProps: h
            } = n_({
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
                onPressChange: u,
                onPress: c,
                onPressUp: d,
                onClick: f
              } = e;
              const p = e.isDisabled || t.isDisabled;
              let h = t.selectedValue === r,
                {
                  pressProps: m,
                  isPressed: v
                } = n_({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: u,
                  onPress: c,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: p
                }),
                {
                  pressProps: y,
                  isPressed: g
                } = n_({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: u,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: p,
                  onPress(e) {
                    c?.(e), t.setSelectedValue(r), n.current?.focus()
                  }
                }),
                {
                  focusableProps: b
                } = Ix(Bb(e, {
                  onFocus: () => t.setLastFocusedValue(r)
                }), n),
                _ = Bb(m, b),
                w = yx(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === r && (x = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (x = 0), p && (x = void 0);
              let {
                name: C,
                form: O,
                descriptionId: j,
                errorMessageId: P,
                validationBehavior: S
              } = wO.get(t);
              Mx(n, t.defaultSelectedValue, t.setSelectedValue), Lx({
                validationBehavior: S
              }, t, n);
              let E = zx();
              return {
                labelProps: Bb(y, (0, q.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: Bb(w, {
                  ..._,
                  type: "radio",
                  name: C,
                  form: O,
                  tabIndex: x,
                  disabled: p,
                  required: t.isRequired && "native" === S,
                  checked: h,
                  value: r,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(r)
                  },
                  "aria-describedby": [e["aria-describedby"], E.id, t.isInvalid ? P : null, j].filter(Boolean).join(" ") || void 0
                }),
                descriptionProps: E,
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
            b = c[`Dot${u}`];
          return (0, j.jsxs)("div", {
            className: tj({
              size: u
            }),
            children: [(0, j.jsx)(Y.s6, {
              children: (0, j.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, j.jsx)("div", {
              className: ej({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": p,
              ...h,
              children: (0, j.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, j.jsx)(b, {})
              })
            })]
          })
        }),
        aj = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          ...o
        }, i) => {
          const {
            size: s,
            state: a
          } = $O(), l = (0, q.useId)(), u = (0, H.v6)({
            id: l,
            "data-testid": e,
            className: JO({
              size: s,
              isDisabled: a?.isDisabled
            })
          }, o), c = t ? Y.DX : "div";
          return (0, j.jsx)(Y.s6, {
            enabled: r,
            children: (0, j.jsx)(c, {
              ...u,
              ref: i,
              children: n
            })
          })
        }),
        lj = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = $O(), s = (0, H.v6)({
            "data-testid": e,
            className: QO({
              isDisabled: i
            })
          }, r), a = t ? Y.DX : "span";
          return (0, j.jsx)(a, {
            ref: o,
            ...s,
            children: n
          })
        });

      function uj(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function cj(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return uj(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? uj(e, t) : void 0
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

      function dj(e, t, n) {
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

      function fj(e) {
        return fj = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, fj(e)
      }

      function pj() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (pj = function() {
          return !!e
        })()
      }

      function hj(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function mj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hj(Object(n), !0).forEach(function(t) {
            dj(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hj(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function vj(e, t) {
        return vj = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, vj(e, t)
      }

      function yj(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          s = r,
          a = "",
          l = cj(e);
        try {
          for (l.s(); !(n = l.n()).done;) {
            var u, c = n.value,
              d = !Object.prototype.hasOwnProperty.call(o, c) && (null === (u = o[s[0]]) || void 0 === u ? void 0 : u.test(c));
            (i && c === s[0] || d) && (s = s.slice(1), a += c)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return a
      }

      function gj(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          s = t.showMask,
          a = 0,
          l = "",
          u = cj(r);
        try {
          for (u.s(); !(n = u.n()).done;) {
            var c = n.value;
            if (!s && void 0 === e[a]) break;
            Object.prototype.hasOwnProperty.call(o, c) && void 0 !== e[a] ? l += e[a++] : l += c
          }
        } catch (e) {
          u.e(e)
        } finally {
          u.f()
        }
        if (i && !s) {
          for (var d = r.length - 1; d >= 0 && l[d] === r[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function bj(e, t) {
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

      function _j(e) {
        return e.length > 0 ? dj({}, e, /./) : {}
      }

      function wj(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(r, o), u = i.slice(r, o), c = "", d = 0; d < u.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, u[d]);
          f && void 0 !== l[d] && l[d] !== u[d] ? c += l[d] : f && a && (c += u[d])
        }
        return c
      }

      function xj(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? _j(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return gj(yj(e, {
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
      var Cj = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Oj(e) {
        return Cj.includes(e) ? "\\".concat(e) : e
      }

      function jj(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Pj(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Sj(e, t, n) {
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

      function Ej(e) {
        return Ej = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Ej(e)
      }

      function kj() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (kj = function() {
          return !!e
        })()
      }

      function Rj(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Tj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rj(Object(n), !0).forEach(function(t) {
            Sj(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rj(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Dj(e, t) {
        return Dj = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Dj(e, t)
      }

      function Nj(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Nj = function(e) {
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
              if (kj()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && Dj(o, n.prototype), o
            }(e, arguments, Ej(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Dj(n, e)
        }, Nj(e)
      }
      var Ij, Mj = function(e) {
          function t(e) {
            var n;
            return jj(this, t), (n = function(e, t, n) {
              return t = Ej(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, kj() ? Reflect.construct(t, n || [], Ej(e).constructor) : t.apply(e, n))
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
            }), t && Dj(e, t)
          }(t, e), Pj(t)
        }(Nj(Error)),
        Lj = ["options"],
        Aj = ["text", "email", "tel", "search", "url"],
        zj = Pj(function e(t) {
          var n = t.init,
            r = t.tracking;
          jj(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Aj.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = i.initialValue,
                a = void 0 === s ? "" : s,
                l = i.controlled,
                u = void 0 !== l && l,
                c = n({
                  initialValue: e.value || a,
                  controlled: u
                }),
                d = c.value,
                f = c.options,
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
              Object.defineProperty(e, "value", Tj(Tj({}, v), {}, {
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
                    if (h.cachedId === h.id) throw new Mj("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new Mj("The selection attributes have not been initialized.");
                    var l, u = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = u.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && i.length < u.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > u.length) throw new Mj("Input type detection error.");
                    var c = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) c = i.slice(m.selectionStart, s);
                    else {
                      var v = u.length - i.length;
                      d = s, f = s + v
                    }
                    p.value !== u ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var y = p.options,
                      g = r({
                        inputType: l,
                        previousValue: u,
                        previousOptions: y,
                        value: i,
                        addedValue: c,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: s,
                        selectionEnd: a
                      }),
                      b = g.options,
                      _ = function(e, t) {
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
                      }(g, Lj);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), p.value = _.value, p.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, u)
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
      Ij = zj, Object.defineProperty(Ij.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Vj, Fj = ["track", "modify"];

      function Bj(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? _j(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var qj = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = fj(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, pj() ? Reflect.construct(t, n || [], fj(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = Bj(n),
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
                l = Bj(n),
                u = l.track,
                c = l.modify,
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
                }(l, Fj),
                f = d.mask,
                p = d.replacement,
                h = d.showMask,
                m = d.separate,
                v = mj(mj({}, "insert" === t ? {
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
                y = null == u ? void 0 : u(v);
              if (!1 === y) throw new Mj("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == c ? void 0 : c(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? _j(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = wj(r, mj({
                  end: s
                }, o)),
                _ = wj(r, mj({
                  start: a
                }, o)),
                w = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(w, "");
              if (b && (b = yj(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: m
                }), x = x.slice(b.length)), i && (i = yj(i, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new Mj("The character does not match the key value of the `replacement` object.");
              if (m) {
                var C = f.slice(s, a).replace(w, ""),
                  O = C.length - i.length;
                O < 0 ? _ = _.slice(-O) : O > 0 && (_ = C.slice(-O) + _)
              }
              _ && (_ = yj(_, {
                replacementChars: x,
                replacement: p,
                separate: m
              }));
              var j = gj(b + i + _, {
                  mask: f,
                  replacement: p,
                  separate: m,
                  showMask: h
                }),
                P = function(e) {
                  var t, n, r, o = e.inputType,
                    i = e.value,
                    s = e.addedValue,
                    a = e.beforeChangeValue,
                    l = e.replacement,
                    u = e.separate,
                    c = bj(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || u && "replacement" === t
                    }),
                    d = null === (t = c[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (n = c[a.length - 1]) || void 0 === n ? void 0 : n.index,
                    p = null === (r = c[a.length + s.length]) || void 0 === r ? void 0 : r.index;
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
                selectionStart: P,
                selectionEnd: P,
                options: {
                  mask: f,
                  replacement: p,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return xj(e, Bj(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? _j(r) : r;
              return bj(xj(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, Bj(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? _j(r) : r,
                i = wj(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return yj(i, {
                replacementChars: n.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, Bj(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? _j(r) : r, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < n.length; l++) {
                var u = n[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, u) ? "".concat(s ? "(?!".concat(Oj(u), ")") : "", "(").concat(o[u].source, ")") : Oj(u), l === n.length - 1 && (i && (a += ")?".repeat(n.length)), a += "$")
              }
              return a
            }(e, Bj(n))
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
            }), t && vj(e, t)
          }(e, zj),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function Wj(e) {
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

      function $j(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Kj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $j(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Wj(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $j(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Xj(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      Vj = qj, Object.defineProperty(Vj.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Hj = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Zj = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Kj(Kj({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Hj(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xj(e.variantClassNames, e => Xj(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Uj = Zj({
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
        Gj = Zj({
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
        Yj = Zj({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Qj = Zj({
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
        Jj = Zj({
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
        eP = Zj({
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
      const tP = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        nP = (0, q.createContext)(null);

      function rP() {
        const e = (0, q.useContext)(nP);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const oP = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const [u, c] = (0, q.useState)("text"), d = `${(0,q.useId)()}-label`, f = `${(0,q.useId)()}-input`, p = `${(0,q.useId)()}-description`, h = (0, q.useRef)(null), m = (0, q.useRef)(tP), v = (0, H.v6)({
            "data-testid": n,
            className: "foundry_8oytzo4"
          }, a), y = e ? Y.DX : "div";
          return (0, j.jsx)(nP.Provider, {
            value: {
              isDisabled: r,
              isReadOnly: o,
              isRequired: i,
              status: s,
              labelId: d,
              inputId: f,
              descriptionId: p,
              type: u,
              setType: c,
              inputRef: h,
              focusState: m,
              ...a
            },
            children: (0, j.jsx)(y, {
              ref: l,
              ...v,
              children: t
            })
          })
        }),
        iP = (0, q.forwardRef)(({
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
            inputId: u,
            labelId: c
          } = rP(), d = l && !o, f = (0, H.v6)({
            id: i.id || c,
            htmlFor: i.htmlFor || u,
            "data-testid": e,
            className: eP({
              showAsterisk: d,
              isDisabled: a
            })
          }, i), p = t ? Y.DX : "label";
          return (0, j.jsx)(Y.s6, {
            enabled: r,
            children: (0, j.jsx)(p, {
              ref: s,
              ...f,
              children: n
            })
          })
        }),
        sP = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = rP(), s = (0, H.v6)({
            "data-testid": e,
            className: Yj({
              isDisabled: i
            })
          }, r), a = t ? Y.DX : "span";
          return (0, j.jsx)(a, {
            ref: o,
            ...s,
            children: n
          })
        }),
        aP = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: s,
            status: a
          } = rP(), l = (0, H.v6)({
            "data-testid": e,
            className: (0, ee.$)(Uj({
              isDisabled: i,
              isReadOnly: s,
              isInvalid: "invalid" === a,
              isSuccess: "success" === a
            }), "foundry_8oytzo1")
          }, r), u = t ? Y.DX : "div";
          return (0, j.jsx)(u, {
            ref: o,
            ...l,
            children: n
          })
        }),
        lP = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          mask: n,
          replacement: r,
          showMask: o = !0,
          track: i,
          placeholder: s = " ",
          "aria-labelledby": a,
          "aria-describedby": l,
          type: u = "text",
          ...c
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
            type: _,
            inputRef: w,
            focusState: x
          } = rP();
          (0, q.useEffect)(() => b(u), []);
          const C = "invalid" === m,
            O = (0, H.v6)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: _,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, H.VW)(v, a),
              "aria-describedby": (0, H.VW)(g, l),
              "data-testid": e,
              className: (0, ee.$)(Jj({
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
            }, c),
            P = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                n = e.replacement,
                r = e.showMask,
                o = e.separate,
                i = e.track,
                s = e.modify,
                a = (0, q.useRef)(null),
                l = (0, q.useRef)({
                  mask: t,
                  replacement: n,
                  showMask: r,
                  separate: o,
                  track: i,
                  modify: s
                });
              return l.current.mask = t, l.current.replacement = n, l.current.showMask = r, l.current.separate = o, l.current.track = i, l.current.modify = s, (0, q.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(n, r, o) {
                      return "current" === r && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), n[r] = o, !0)
                    }
                  })
                }(a, new qj(l.current))
              }, [])
            }({
              mask: n,
              replacement: r,
              showMask: o,
              track: i
            }),
            S = (0, G.UP)(n && r ? P : null, w, d),
            E = t ? Y.DX : "input";
          return (0, j.jsx)(E, {
            ref: S,
            ...O
          })
        }),
        uP = (0, q.forwardRef)(({
          icon: e,
          asChild: t,
          testId: n,
          side: r,
          ...o
        }, i) => {
          const {
            isDisabled: s
          } = rP(), a = (0, H.v6)({
            size: "LG",
            "data-testid": n,
            className: (0, ee.$)(Qj({
              side: r,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? Y.DX : te[e];
          return (0, j.jsx)(l, {
            ref: i,
            ...a
          })
        }),
        cP = (0, q.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: n
          } = rP(), r = (0, H.v6)({
            isDisabled: n,
            size: "LG",
            appearance: "ghost",
            className: (0, ee.$)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, j.jsx)(xe, {
            ref: t,
            ...r,
            preventFocusOnPress: !1
          })
        }),
        dP = (0, q.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...n
        }, r) => {
          const {
            type: o,
            setType: i,
            inputRef: s,
            focusState: a
          } = rP(), l = "password" === o, u = l ? e : t;
          (0, q.useEffect)(() => {
            a.current && (a.current.clickTriggered = !1)
          }, [a]);
          const c = (0, H.v6)({
            label: u,
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
            },
            preventFocusOnPress: !0
          }, n);
          return (0, j.jsxs)(vm, {
            children: [(0, j.jsx)(ym, {
              children: (0, j.jsx)(cP, {
                ref: r,
                ...c
              })
            }), (0, j.jsxs)(gm, {
              side: "bottom",
              align: "end",
              children: [u, (0, j.jsx)(bm, {})]
            })]
          })
        }),
        fP = (0, q.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = rP(), a = (0, H.v6)({
            className: Gj({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, r), l = n ? Y.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        pP = (0, q.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = rP(), a = (0, H.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, r), l = n ? Y.DX : y_;
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        hP = g_,
        mP = b_;

      function vP(e, t) {
        let {
          elementType: n = "a",
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ...l
        } = e, u = {};
        "a" !== n && (u = {
          role: "link",
          tabIndex: a ? void 0 : 0
        });
        let {
          focusableProps: c
        } = Ix(e, t), {
          pressProps: d,
          isPressed: f
        } = n_({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ref: t
        }), p = yx(l, {
          labelable: !0
        }), h = Bb(c, d), m = Wb();
        return {
          isPressed: f,
          linkProps: Bb(p, Kb(e), {
            ...h,
            ...u,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              d.onClick?.(t), Xb(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function yP(e) {
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

      function gP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function bP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gP(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = yP(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gP(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function _P(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var wP = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        xP = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = bP(bP({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) wP(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _P(e.variantClassNames, e => _P(e, e => e.split(" ")[0]))
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
      const CP = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        OP = (0, q.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: n,
          ...r
        }, o) => {
          const i = (0, q.useRef)(null),
            s = (0, G.UP)(i, o),
            {
              buttonProps: a
            } = (0, G.sL)(r, i),
            l = (0, H.v6)({
              "data-testid": n,
              className: xP({
                size: t
              })
            }, a);
          return (0, j.jsx)("button", {
            ref: s,
            ...l,
            children: (0, j.jsx)(te.X, {
              label: e,
              size: CP[t]
            })
          })
        });

      function jP(e) {
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

      function PP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function SP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? PP(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = jP(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : PP(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function EP(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var kP = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        RP = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = SP(SP({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) kP(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return EP(e.variantClassNames, e => EP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        TP = RP({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        DP = RP({
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
        NP = RP({
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
      const IP = (0, q.createContext)(null);

      function MP() {
        const e = (0, q.useContext)(IP);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const LP = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, i) => {
          const s = e ? Y.DX : "div",
            a = (0, H.v6)({
              className: NP({
                status: n,
                background: r
              })
            }, o);
          return (0, j.jsx)(IP.Provider, {
            value: {
              status: n,
              background: r
            },
            children: (0, j.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a
            })
          })
        }),
        AP = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? Y.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qha"
            }, n);
          return (0, j.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        zP = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? Y.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qhb"
            }, n);
          return (0, j.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        VP = {
          danger: te.CircleX,
          information: te.Info,
          success: te.CircleCheck,
          warning: te.TriangleAlert
        },
        FP = (0, q.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...n
        }, r) => {
          const {
            status: o
          } = MP(), i = e ? Y.DX : VP[o], s = (0, H.v6)({
            className: DP({
              status: o,
              size: t
            }),
            size: t
          }, n);
          return (0, j.jsx)(i, {
            label: "",
            ref: r,
            ...s
          })
        }),
        BP = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? Y.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, n);
          return (0, j.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        qP = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? Y.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, j.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        WP = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, q.useRef)(null),
            s = (0, G.UP)(i, o),
            a = e ? Y.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = vP(r, i),
            c = (0, H.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, l);
          return (0, j.jsx)(a, {
            "data-pressed": u,
            "data-testid": n,
            ref: s,
            ...c,
            children: t
          })
        }),
        $P = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? Y.DX : "div",
            s = (0, H.v6)({
              className: "foundry_1m368qhm"
            }, r);
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...s,
            children: t
          })
        }),
        KP = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const i = e ? Y.DX : "div";
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, ee.$)(n, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...r
          })
        }),
        XP = (0, q.forwardRef)((e, t) => {
          const {
            background: n
          } = MP(), r = "none" !== n, o = (0, H.v6)({
            className: TP({
              hasBackground: r
            })
          }, e);
          return (0, j.jsx)(OP, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function HP(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function ZP(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every(n => {
          const r = e[n],
            o = t[n];
          return "function" == typeof r ? `${r}` == `${o}` : HP(r) && HP(o) ? ZP(r, o) : r === o
        }))
      }

      function UP(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function GP(e) {
        return "number" == typeof e
      }

      function YP(e) {
        return "string" == typeof e
      }

      function QP(e) {
        return "boolean" == typeof e
      }

      function JP(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function eS(e) {
        return Math.abs(e)
      }

      function tS(e) {
        return Math.sign(e)
      }

      function nS(e, t) {
        return eS(e - t)
      }

      function rS(e) {
        return lS(e).map(Number)
      }

      function oS(e) {
        return e[iS(e)]
      }

      function iS(e) {
        return Math.max(0, e.length - 1)
      }

      function sS(e, t) {
        return t === iS(e)
      }

      function aS(e, t = 0) {
        return Array.from(Array(e), (e, n) => t + n)
      }

      function lS(e) {
        return Object.keys(e)
      }

      function uS(e, t) {
        return [e, t].reduce((e, t) => (lS(t).forEach(n => {
          const r = e[n],
            o = t[n],
            i = JP(r) && JP(o);
          e[n] = i ? uS(r, o) : o
        }), e), {})
      }

      function cS(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function dS() {
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

      function fS(e = 0, t = 0) {
        const n = eS(e - t);

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

      function pS(e, t, n) {
        const {
          constrain: r
        } = fS(0, e), o = e + 1;
        let i = s(t);

        function s(e) {
          return n ? eS((o + e) % o) : r(e)
        }

        function a() {
          return i
        }

        function l() {
          return pS(e, a(), n)
        }
        const u = {
          get: a,
          set: function(e) {
            return i = s(e), u
          },
          add: function(e) {
            return l().set(a() + e)
          },
          clone: l
        };
        return u
      }

      function hS(e, t, n, r, o, i, s, a, l, u, c, d, f, p, h, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, C = dS(), O = dS(), j = fS(50, 225).constrain(p.measure(20)), P = {
          mouse: 300,
          touch: 400
        }, S = {
          mouse: 500,
          touch: 600
        }, E = h ? 43 : 25;
        let k = !1,
          R = 0,
          T = 0,
          D = !1,
          N = !1,
          I = !1,
          M = !1;

        function L(e) {
          if (!cS(e, r) && e.touches.length >= 2) return A(e);
          const t = i.readPoint(e),
            n = i.readPoint(e, b),
            s = nS(t, R),
            l = nS(n, T);
          if (!N && !M) {
            if (!e.cancelable) return A(e);
            if (N = s > l, !N) return A(e)
          }
          const c = i.pointerMove(e);
          s > m && (I = !0), u.useFriction(.3).useDuration(.75), a.start(), o.add(_(c)), e.preventDefault()
        }

        function A(e) {
          const t = c.byDistance(0, !1).index !== d.get(),
            n = i.pointerUp(e) * (h ? S : P)[M ? "mouse" : "touch"],
            r = function(e, t) {
              const n = d.add(-1 * tS(e)),
                r = c.byDistance(e, !h).distance;
              return h || eS(e) < j ? r : v && t ? .5 * r : c.byIndex(n.get(), 0).distance
            }(_(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (eS(e) <= eS(t)) return 0;
              const n = nS(eS(e), eS(t));
              return eS(n / e)
            }(n, r),
            s = E - 10 * o,
            a = y + o / 50;
          N = !1, D = !1, O.clear(), u.useDuration(s).useFriction(a), l.distance(r, !h), M = !1, f.emit("pointerUp")
        }

        function z(e) {
          I && (e.stopPropagation(), e.preventDefault(), I = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function a(a) {
              (QP(g) || g(e, a)) && function(e) {
                const a = cS(e, r);
                M = a, I = h && a && !e.buttons && k, k = nS(o.get(), s.get()) >= 2, a && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (D = !0, i.pointerDown(e), u.useFriction(0).useDuration(0), o.set(s), function() {
                  const e = M ? n : t;
                  O.add(e, "touchmove", L, x).add(e, "touchend", A).add(e, "mousemove", L, x).add(e, "mouseup", A)
                }(), R = i.readPoint(e), T = i.readPoint(e, b), f.emit("pointerDown"))
              }(a)
            }
            const l = t;
            C.add(l, "dragstart", e => e.preventDefault(), x).add(l, "touchmove", () => {}, x).add(l, "touchend", () => {}).add(l, "touchstart", a).add(l, "mousedown", a).add(l, "touchcancel", A).add(l, "contextmenu", A).add(l, "click", z, !0)
          },
          destroy: function() {
            C.clear(), O.clear()
          },
          pointerDown: function() {
            return D
          }
        }
      }

      function mS(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function i(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (cS(n, t) ? n : n.touches[0])[o]
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
            return s && !a && eS(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function vS(e, t, n, r, o, i, s) {
        const a = [e].concat(r);
        let l, u, c = [],
          d = !1;

        function f(e) {
          return o.measureSize(s.measure(e))
        }
        return {
          init: function(o) {
            i && (u = f(e), c = r.map(f), l = new ResizeObserver(n => {
              (QP(i) || i(o, n)) && function(n) {
                for (const i of n) {
                  if (d) return;
                  const n = i.target === e,
                    s = r.indexOf(i.target),
                    a = n ? u : c[s];
                  if (eS(f(n ? e : r[s]) - a) >= .5) {
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

      function yS(e, t, n, r, o) {
        const i = o.measure(10),
          s = o.measure(50),
          a = fS(.1, .99);
        let l = !1;

        function u() {
          return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: u,
          constrain: function(o) {
            if (!u()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = eS(e[l] - t.get()),
              d = n.get() - t.get(),
              f = a.constrain(c / s);
            n.subtract(d * f), !o && eS(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function gS(e, t, n, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: s,
            reachedMax: a
          } = fS(o, i),
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

      function bS(e) {
        let t = e;

        function n(e) {
          return GP(e) ? e : e.get()
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

      function _S(e, t) {
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

      function wS(e, t, n, r, o, i, s, a, l) {
        const u = rS(o),
          c = rS(o).reverse(),
          d = function() {
            const e = s[0];
            return h(p(c, e), n, !1)
          }().concat(function() {
            const e = t - s[0] - 1;
            return h(p(u, e), -n, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function p(e, t) {
          return e.reduce((e, n) => f(e, t) > 0 ? e.concat([n]) : e, [])
        }

        function h(o, s, u) {
          const c = function(e) {
            return i.map((n, o) => ({
              start: n - r[o] + .5 + e,
              end: n + t - .5 + e
            }))
          }(s);
          return o.map(t => {
            const r = u ? 0 : -n,
              o = u ? n : 0,
              i = u ? "end" : "start",
              s = c[t][i];
            return {
              index: t,
              loopPoint: s,
              slideLocation: bS(-1),
              translate: _S(e, l[t]),
              target: () => a.get() > s ? r : o
            }
          })
        }
        const m = {
          canLoop: function() {
            return d.every(({
              index: e
            }) => {
              const n = u.filter(t => t !== e);
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

      function xS(e, t, n) {
        let r, o = !1;
        return {
          init: function(i) {
            n && (r = new MutationObserver(e => {
              o || (QP(n) || n(i, e)) && function(e) {
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

      function CS(e, t, n, r, o, i, s) {
        const {
          align: a,
          axis: l,
          direction: u,
          startIndex: c,
          loop: d,
          duration: f,
          dragFree: p,
          dragThreshold: h,
          inViewThreshold: m,
          slidesToScroll: v,
          skipSnaps: y,
          containScroll: g,
          watchResize: b,
          watchSlides: _,
          watchDrag: w,
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
        }, O = C.measure(t), j = n.map(C.measure), P = function(e, t) {
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
        }(l, u), S = P.measureSize(O), E = function(e) {
          const t = {
            measure: function(t) {
              return e * (t / 100)
            }
          };
          return t
        }(S), k = function(e, t) {
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
              return YP(e) ? n[e](r) : e(t, r, o)
            }
          };
          return o
        }(a, S), R = !d && !!g, T = d || !!g, {
          slideSizes: D,
          slideSizesWithGaps: N,
          startGap: I,
          endGap: M
        } = function(e, t, n, r, o, i) {
          const {
            measureSize: s,
            startEdge: a,
            endEdge: l
          } = e, u = n[0] && o, c = function() {
            if (!u) return 0;
            const e = n[0];
            return eS(t[a] - e[a])
          }(), d = function() {
            if (!u) return 0;
            const e = i.getComputedStyle(oS(r));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = n.map(s), p = n.map((e, t, n) => {
            const r = !t,
              o = sS(n, t);
            return r ? f[t] + c : o ? f[t] + d : n[t + 1][a] - e[a]
          }).map(eS);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: c,
            endGap: d
          }
        }(P, O, j, n, T, o), L = function(e, t, n, r, o, i, s, a, l) {
          const {
            startEdge: u,
            endEdge: c,
            direction: d
          } = e, f = GP(n), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return rS(e).filter(e => e % t === 0).map(n => e.slice(n, n + t))
              }(e, n) : function(e) {
                return e.length ? rS(e).reduce((n, f, p) => {
                  const h = oS(n) || 0,
                    m = 0 === h,
                    v = f === iS(e),
                    y = o[u] - i[h][u],
                    g = o[u] - i[f][c],
                    b = !r && m ? d(s) : 0,
                    _ = eS(g - (!r && v ? d(a) : 0) - (y + b));
                  return p && _ > t + l && n.push(f), v && n.push(e.length), n
                }, []).map((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(P, S, v, d, O, j, I, M, 2), {
          snaps: A,
          snapsAligned: z
        } = function(e, t, n, r, o) {
          const {
            startEdge: i,
            endEdge: s
          } = e, {
            groupSlides: a
          } = o, l = a(r).map(e => oS(e)[s] - e[0][i]).map(eS).map(t.measure), u = r.map(e => n[i] - e[i]).map(e => -eS(e)), c = a(u).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: u,
            snapsAligned: c
          }
        }(P, k, O, j, L), V = -oS(A) + oS(N), {
          snapsContained: F,
          scrollContainLimit: B
        } = function(e, t, n, r) {
          const o = fS(-t + e, 0),
            i = n.map((e, t) => {
              const {
                min: r,
                max: i
              } = o, s = o.constrain(e), l = !t, u = sS(n, t);
              return l ? i : u || a(r, s) ? r : a(i, s) ? i : s
            }).map(e => parseFloat(e.toFixed(3))),
            s = function() {
              const e = i[0],
                t = oS(i);
              return fS(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function a(e, t) {
            return nS(e, t) <= 1
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
        }(S, V, z, g), q = R ? F : z, {
          limit: W
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: fS(n ? r - e : oS(t), r)
          }
        }(V, q, d), $ = pS(iS(q), c, d), K = $.clone(), X = rS(n), H = function(e, t, n, r) {
          const o = dS(),
            i = 1e3 / 60;
          let s = null,
            a = 0,
            l = 0;

          function u(e) {
            if (!l) return;
            s || (s = e, n(), n());
            const o = e - s;
            for (s = e, a += o; a >= i;) n(), a -= i;
            r(a / i), l && (l = t.requestAnimationFrame(u))
          }

          function c() {
            t.cancelAnimationFrame(l), s = null, a = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (s = null, a = 0)
              })
            },
            destroy: function() {
              c(), o.clear()
            },
            start: function() {
              l || (l = t.requestAnimationFrame(u))
            },
            stop: c,
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
          eventHandler: u,
          scrollBounds: c,
          options: {
            loop: d
          }
        }, f) => {
          const p = e.settled(),
            h = !c.shouldConstrain(),
            m = d ? p : p && h,
            v = m && !a.pointerDown();
          v && l.stop();
          const y = n.get() * f + o.get() * (1 - f);
          r.set(y), d && (i.loop(e.direction()), s.loop()), t.to(r.get()), v && u.emit("settle"), m || u.emit("scroll")
        })(ae, e)), Z = q[$.get()], U = bS(Z), G = bS(Z), Y = bS(Z), Q = bS(Z), J = function(e, t, n, r, o) {
          let i = 0,
            s = 0,
            a = o,
            l = .68,
            u = e.get(),
            c = 0;

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
              return a ? (n.set(e), i += t / a, i *= l, u += i, e.add(i), o = u - c) : (i = 0, n.set(r), e.set(r), o = t), s = tS(o), c = u, p
            },
            settled: function() {
              return eS(r.get() - t.get()) < .001
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
        }(U, Y, G, Q, f), ee = function(e, t, n, r, o) {
          const {
            reachedAny: i,
            removeOffset: s,
            constrain: a
          } = r;

          function l(e) {
            return e.concat().sort((e, t) => eS(e) - eS(t))[0]
          }

          function u(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return l(o);
            const i = o.filter(e => tS(e) === r);
            return i.length ? l(i) : oS(o) - n
          }
          const c = {
            byDistance: function(n, r) {
              const l = o.get() + n,
                {
                  index: c,
                  distance: d
                } = function(n) {
                  const r = e ? s(n) : a(n),
                    o = t.map((e, t) => ({
                      diff: u(e - r, 0),
                      index: t
                    })).sort((e, t) => eS(e.diff) - eS(t.diff)),
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
                index: c,
                distance: n
              } : {
                index: c,
                distance: n + u(t[c] - d, 0)
              }
            },
            byIndex: function(e, n) {
              return {
                index: e,
                distance: u(t[e] - o.get(), n)
              }
            },
            shortcut: u
          };
          return c
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
        }(H, $, K, J, ee, Q, s), ne = function(e) {
          const {
            max: t,
            length: n
          } = e, r = {
            get: function(e) {
              return n ? (e - t) / -n : 0
            }
          };
          return r
        }(W), re = dS(), oe = function(e, t, n, r) {
          const o = {};
          let i, s = null,
            a = null,
            l = !1;
          const u = {
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
                return lS(o).reduce((t, n) => {
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
          return u
        }(t, n, s, m), {
          slideRegistry: ie
        } = function(e, t, n, r, o, i) {
          const {
            groupSlides: s
          } = o, {
            min: a,
            max: l
          } = r, u = function() {
            const r = s(i),
              o = !e || "keepSnaps" === t;
            return 1 === n.length ? [i] : o ? r : r.slice(a, l).map((e, t, n) => {
              const r = !t,
                o = sS(n, t);
              return r ? aS(oS(n[0]) + 1) : o ? aS(iS(i) - oS(n)[0] + 1, oS(n)[0]) : e
            })
          }();
          return {
            slideRegistry: u
          }
        }(R, g, q, B, L, X), se = function(e, t, n, r, o, i, s, a) {
          const l = {
            passive: !0,
            capture: !0
          };
          let u = 0;

          function c(e) {
            "Tab" === e.code && (u = (new Date).getTime())
          }
          const d = {
            init: function(d) {
              a && (i.add(document, "keydown", c, !1), t.forEach((t, c) => {
                i.add(t, "focus", t => {
                  (QP(a) || a(d, t)) && function(t) {
                    if ((new Date).getTime() - u > 10) return;
                    s.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = n.findIndex(e => e.includes(t));
                    GP(i) && (o.useDuration(0), r.index(i, 0), s.emit("slideFocus"))
                  }(c)
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
          animation: H,
          axis: P,
          dragHandler: hS(P, e, r, o, Q, mS(P, o), U, H, te, J, ee, $, s, E, p, h, y, .68, w),
          eventStore: re,
          percentOfView: E,
          index: $,
          indexPrevious: K,
          limit: W,
          location: U,
          offsetLocation: Y,
          previousLocation: G,
          options: i,
          resizeHandler: vS(t, s, o, n, P, b, C),
          scrollBody: J,
          scrollBounds: yS(W, Y, Q, J, E),
          scrollLooper: gS(V, W, Y, [U, Y, G, Q]),
          scrollProgress: ne,
          scrollSnapList: q.map(ne.get),
          scrollSnaps: q,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: wS(P, S, V, D, N, A, q, Y, n),
          slideFocus: se,
          slidesHandler: xS(t, s, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ie,
          slidesToScroll: L,
          target: Q,
          translate: _S(P, t)
        };
        return ae
      }
      const OS = {
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

      function jS(e) {
        function t(e, t) {
          return uS(e, t || {})
        }
        const n = {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = lS(r).filter(t => e.matchMedia(t).matches).map(e => r[e]).reduce((e, n) => t(e, n), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => lS(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return n
      }

      function PS(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = jS(o),
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
          a = dS(),
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
            mergeOptions: u,
            optionsAtMedia: c,
            optionsMediaQueries: d
          } = i,
          {
            on: f,
            off: p,
            emit: h
          } = l,
          m = P;
        let v, y, g, b, _ = !1,
          w = u(OS, PS.globalOptions),
          x = u(w),
          C = [];

        function O(t) {
          const n = CS(e, g, b, r, o, t, l);
          return t.loop && !n.slideLooper.canLoop() ? O(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function j(t, n) {
          _ || (w = u(w, t), x = c(w), C = n || C, function() {
            const {
              container: t,
              slides: n
            } = x, r = YP(t) ? e.querySelector(t) : t;
            g = r || e.children[0];
            const o = YP(n) ? g.querySelectorAll(n) : n;
            b = [].slice.call(o || g.children)
          }(), v = O(x), d([w, ...C.map(({
            options: e
          }) => e)]).forEach(e => a.add(e, "change", P)), x.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(R), v.eventHandler.init(R), v.resizeHandler.init(R), v.slidesHandler.init(R), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(R), y = s.init(R, C)))
        }

        function P(e, t) {
          const n = k();
          S(), j(u({
            startIndex: n
          }, e), t), l.emit("reInit")
        }

        function S() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), s.destroy(), a.clear()
        }

        function E(e, t, n) {
          x.active && !_ && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), v.scrollTo.index(e, n || 0))
        }

        function k() {
          return v.index.get()
        }
        const R = {
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
            _ || (_ = !0, a.clear(), S(), l.emit("destroy"), l.clear())
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
            E(v.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            E(v.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return v.scrollProgress.get(v.offsetLocation.get())
          },
          scrollSnapList: function() {
            return v.scrollSnapList
          },
          scrollTo: E,
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
        return j(t, n), setTimeout(() => l.emit("init"), 0), R
      }

      function SS(e = {}, t = []) {
        const n = (0, q.useRef)(e),
          r = (0, q.useRef)(t),
          [o, i] = (0, q.useState)(),
          [s, a] = (0, q.useState)(),
          l = (0, q.useCallback)(() => {
            o && o.reInit(n.current, r.current)
          }, [o]);
        return (0, q.useEffect)(() => {
          ZP(n.current, e) || (n.current = e, l())
        }, [e, l]), (0, q.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = UP(e),
              r = UP(t);
            return n.every((e, t) => ZP(e, r[t]))
          })(r.current, t) || (r.current = t, l())
        }, [t, l]), (0, q.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && s) {
            PS.globalOptions = SS.globalOptions;
            const e = PS(s, n.current, r.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }, [s, i]), [a, o]
      }

      function ES(e = {}) {
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
      PS.globalOptions = void 0, SS.globalOptions = void 0, ES.globalOptions = void 0;
      const kS = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function RS(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function TS(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function DS(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function NS(e = {}) {
        let t, n, r, o, i = [],
          s = [];
        const a = ["select"],
          l = ["pointerDown", "pointerUp"],
          u = ["slidesInView"],
          c = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function d(e, t) {
          ("pointerDown" === t ? DS : TS)(r, c.dragging)
        }

        function f(e = [], t = [], n) {
          const r = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return r.forEach(e => TS(e, n)), i.forEach(e => DS(e, n)), e
        }

        function p() {
          const {
            slideRegistry: e
          } = n.internalEngine(), t = e[n.selectedScrollSnap()];
          i = f(t, i, c.snapped)
        }

        function h() {
          const e = n.slidesInView();
          s = f(e, s, c.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(i, s) {
            n = i;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = s, v = f(kS, NS.globalOptions), y = f(v, e);
            t = m(y), r = n.rootNode(), o = n.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = n.internalEngine().options, _ = !!g;
            t.loop && b && (c.loop = RS(t.loop), DS(r, c.loop)), t.draggable && _ && (c.draggable = RS(t.draggable), DS(r, c.draggable)), t.dragging && (c.dragging = RS(t.dragging), l.forEach(e => n.on(e, d))), t.snapped && (c.snapped = RS(t.snapped), a.forEach(e => n.on(e, p)), p()), t.inView && (c.inView = RS(t.inView), u.forEach(e => n.on(e, h)), h())
          },
          destroy: function() {
            l.forEach(e => n.off(e, d)), a.forEach(e => n.off(e, p)), u.forEach(e => n.off(e, h)), TS(r, c.loop), TS(r, c.draggable), TS(r, c.dragging), f([], i, c.snapped), f([], s, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return m
      }
      NS.globalOptions = void 0;

      function IS(e) {
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

      function MS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function LS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? MS(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = IS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : MS(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function AS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var zS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        VS = "foundry_qmpv6yv",
        FS = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = LS(LS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) zS(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return AS(e.variantClassNames, e => AS(e, e => e.split(" ")[0]))
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
      const BS = (0, q.createContext)(null);

      function qS() {
        const e = (0, q.useContext)(BS);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const WS = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          loopPagination: r,
          status: o,
          background: i,
          align: s = "left",
          ...a
        }, l) => {
          const u = (({
              loopPagination: e = !0
            }) => {
              const t = (0, G.rl)(),
                n = (0, G.jt)(),
                [r, o] = (0, q.useState)([]),
                i = r.length,
                [s, a] = (0, q.useState)(0),
                [l, u] = SS({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [ES(), NS()]),
                c = (0, q.useRef)(0),
                d = (0, q.useRef)(!1),
                f = r[s],
                p = (0, q.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, n) => {
                    e.style.visibility = n === t ? "visible" : "hidden"
                  }), a(t), d.current = !0
                }, [u]),
                h = (0, q.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, q.useCallback)((e, t) => {
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
                      const l = (u = 1 - Math.abs(a * c.current), Math.min(Math.max(u, 0), 1)).toString();
                      var u;
                      e.slideNodes()[s].style.opacity = l
                    })
                  })
                }, []);
              return (0, q.useEffect)(() => {
                u && (h(u), m(u), u.on("reInit", h).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [u, m]), (0, q.useEffect)(() => {
                u && (p(u), u.on("select", p).on("reInit", p))
              }, [u, p]), {
                setAlerts: o,
                alerts: r,
                numAlerts: i,
                emblaRef: l,
                emblaApi: u,
                prevAlert: () => u?.scrollPrev(n),
                nextAlert: () => u?.scrollNext(n),
                currentAlert: f,
                currentAlertIndex: s,
                setCurrentAlertIndex: a,
                isInitialized: d.current,
                loopPagination: e,
                canScrollNext: () => u?.canScrollNext() || !1,
                canScrollPrev: () => u?.canScrollPrev() || !1
              }
            })({
              loopPagination: r
            }),
            {
              currentAlert: c,
              isInitialized: d,
              setAlerts: f,
              numAlerts: p
            } = u;
          (0, q.useEffect)(() => {
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
              className: FS(c)
            }, h, a),
            v = e ? Y.DX : "div";
          return (0, j.jsx)(BS.Provider, {
            value: u,
            children: (0, j.jsx)(v, {
              ref: l,
              "data-testid": n,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        $S = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        KS = (0, q.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const {
            currentAlert: r
          } = qS();
          if (!e && !r || !r?.status) return null;
          const o = e || $S[r.status],
            i = te[o],
            s = (0, H.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, j.jsx)(i, {
            label: "",
            ref: n,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        XS = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? Y.DX : "div",
            i = (0, H.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, j.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        HS = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          align: n = "left",
          status: r,
          background: o,
          ...i
        }, s) => {
          const a = e ? Y.DX : "div",
            l = (0, H.v6)({
              className: "foundry_qmpv6yo"
            }, i);
          return (0, j.jsx)(a, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        ZS = (0, q.forwardRef)(({
          testId: e,
          children: t,
          ...n
        }, r) => {
          const {
            setAlerts: o,
            emblaRef: i,
            emblaApi: s
          } = qS(), a = (0, H.v6)({
            className: "foundry_qmpv6ym"
          }, n), l = (0, G.UP)(i, r), u = q.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, q.useEffect)(() => {
            u && o(u)
          }, []), s?.on("slidesChanged", () => {
            u && o(u)
          }), (0, j.jsx)("div", {
            ref: l,
            "data-testid": e,
            ...a,
            children: (0, j.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        US = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, q.useRef)(null),
            s = (0, G.UP)(i, o),
            a = e ? Y.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = vP(r, i),
            c = (0, H.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, r);
          return (0, j.jsx)(a, {
            "data-pressed": u,
            "data-testid": n,
            ref: s,
            ...l,
            ...c,
            children: t
          })
        }),
        GS = (0, q.forwardRef)((e, t) => {
          const n = (0, H.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, j.jsx)(OP, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...n
          })
        }),
        YS = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          children: n,
          ...r
        }, o) => {
          const i = e ? Y.DX : "div",
            s = (0, H.v6)({
              className: "foundry_qmpv6yt"
            }, r);
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: n
          })
        }),
        QS = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            nextAlert: r,
            canScrollNext: o
          } = qS(), i = (0, H.v6)({
            className: VS
          }, t);
          return (0, j.jsx)(xe, {
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
        JS = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            prevAlert: r,
            canScrollPrev: o
          } = qS(), i = (0, H.v6)({
            className: VS
          }, t);
          return (0, j.jsx)(xe, {
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
        eE = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            currentAlertIndex: r,
            numAlerts: o
          } = qS(), i = (0, H.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, j.jsxs)("div", {
            ref: n,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [r + 1, "/", o]
          })
        });

      function tE(e) {
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

      function nE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function rE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nE(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = tE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nE(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function oE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var iE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        sE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = rE(rE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) iE(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oE(e.variantClassNames, e => oE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        aE = sE({
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
        lE = sE({
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
        uE = sE({
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
      const cE = (0, q.createContext)(null);

      function dE() {
        const e = (0, q.useContext)(cE);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const fE = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          size: r,
          background: o,
          color: i,
          hasBorder: s,
          isDisabled: a,
          ...l
        }, u) => {
          const c = {
              size: r,
              background: o,
              color: i,
              hasBorder: s,
              isDisabled: a
            },
            d = (0, H.v6)({
              className: lE(c)
            }, l),
            f = e ? Y.DX : "div";
          return (0, j.jsx)(cE.Provider, {
            value: c,
            children: (0, j.jsx)(f, {
              ref: u,
              "data-testid": n,
              "aria-disabled": a,
              ...d,
              children: t
            })
          })
        }),
        pE = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: i
          } = dE(), s = e ? Y.DX : "div", a = (0, H.v6)({
            className: uE({
              size: i
            })
          }, r);
          return (0, j.jsx)(s, {
            ref: o,
            "data-testid": n,
            ...a,
            children: t
          })
        }),
        hE = (0, q.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = te[e],
            o = (0, H.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, j.jsx)(r, {
            ref: n,
            size: "SM",
            ...o
          })
        }),
        mE = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            background: r,
            isDisabled: o
          } = dE(), i = (0, H.v6)({
            className: aE({
              background: r
            })
          }, t);
          return (0, j.jsx)(xe, {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function yE(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var gE = Symbol("radix.slottable");

      function bE(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === gE
      }
      var _E = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = yE(e),
                n = q.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = q.Children.toArray(r), s = i.find(bE);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                    return (0, j.jsx)(t, {
                      ...o,
                      ref: n,
                      children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        wE = "ToastProvider",
        [xE, CE, OE] = Im("Toast"),
        [jE, PE] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => q.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return q.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = q.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
              return (0, j.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = q.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, vE(r, ...t)]
        }("Toast", [OE]),
        [SE, EE] = jE(wE),
        kE = e => {
          const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
          } = e, [a, l] = q.useState(null), [u, c] = q.useState(0), d = q.useRef(!1), f = q.useRef(!1);
          return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${wE}\`. Expected non-empty \`string\`.`), (0, j.jsx)(xE.Provider, {
            scope: t,
            children: (0, j.jsx)(SE, {
              scope: t,
              label: n,
              duration: r,
              swipeDirection: o,
              swipeThreshold: i,
              toastCount: u,
              viewport: a,
              onViewportChange: l,
              onToastAdd: q.useCallback(() => c(e => e + 1), []),
              onToastRemove: q.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      kE.displayName = wE;
      var RE = "ToastViewport",
        TE = ["F8"],
        DE = "toast.viewportPause",
        NE = "toast.viewportResume",
        IE = q.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            hotkey: r = TE,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, s = EE(RE, n), a = CE(n), l = q.useRef(null), u = q.useRef(null), c = q.useRef(null), d = q.useRef(null), f = (0, zd.s)(t, d, s.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = s.toastCount > 0;
          q.useEffect(() => {
            const e = e => {
              0 !== r.length && r.every(t => e[t] || e.code === t) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [r]), q.useEffect(() => {
            const e = l.current,
              t = d.current;
            if (h && e && t) {
              const n = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(DE);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                r = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(NE);
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
          const m = q.useCallback(({
            tabbingDirection: e
          }) => {
            const t = a().map(t => {
              const n = t.ref.current,
                r = [n, ...QE(n)];
              return "forwards" === e ? r : r.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [a]);
          return q.useEffect(() => {
            const e = d.current;
            if (e) {
              const t = t => {
                const n = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !n) {
                  const n = document.activeElement,
                    r = t.shiftKey;
                  if (t.target === e && r) return void u.current?.focus();
                  const o = m({
                      tabbingDirection: r ? "backwards" : "forwards"
                    }),
                    i = o.findIndex(e => e === n);
                  JE(o.slice(i + 1)) ? t.preventDefault() : r ? u.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, j.jsxs)(Jd, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, j.jsx)(LE, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                JE(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, j.jsx)(xE.Slot, {
              scope: n,
              children: (0, j.jsx)(_E.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), h && (0, j.jsx)(LE, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                JE(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      IE.displayName = RE;
      var ME = "ToastFocusProxy",
        LE = q.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
          } = e, i = EE(ME, n);
          return (0, j.jsx)(Dh, {
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
      LE.displayName = ME;
      var AE = "Toast",
        zE = q.forwardRef((e, t) => {
          const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
          } = e, [a, l] = Ph({
            prop: r,
            defaultProp: o ?? !0,
            onChange: i,
            caller: AE
          });
          return (0, j.jsx)(_h.C, {
            present: n || a,
            children: (0, j.jsx)(BE, {
              open: a,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Kd.c)(e.onPause),
              onResume: (0, Kd.c)(e.onResume),
              onSwipeStart: (0, Ad.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Ad.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: n
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${n}px`)
              }),
              onSwipeCancel: (0, Ad.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Ad.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: n
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${n}px`), l(!1)
              })
            })
          })
        });
      zE.displayName = AE;
      var [VE, FE] = jE(AE, {
        onClose() {}
      }), BE = q.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          type: r = "foreground",
          duration: o,
          open: i,
          onClose: s,
          onEscapeKeyDown: a,
          onPause: l,
          onResume: u,
          onSwipeStart: c,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...h
        } = e, m = EE(AE, n), [v, y] = q.useState(null), g = (0, zd.s)(t, e => y(e)), b = q.useRef(null), _ = q.useRef(null), w = o || m.duration, x = q.useRef(0), C = q.useRef(w), O = q.useRef(0), {
          onToastAdd: P,
          onToastRemove: S
        } = m, E = (0, Kd.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), s()
        }), k = q.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(O.current), x.current = (new Date).getTime(), O.current = window.setTimeout(E, e))
        }, [E]);
        q.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                k(C.current), u?.()
              },
              n = () => {
                const e = (new Date).getTime() - x.current;
                C.current = C.current - e, window.clearTimeout(O.current), l?.()
              };
            return e.addEventListener(DE, n), e.addEventListener(NE, t), () => {
              e.removeEventListener(DE, n), e.removeEventListener(NE, t)
            }
          }
        }, [m.viewport, w, l, u, k]), q.useEffect(() => {
          i && !m.isClosePausedRef.current && k(w)
        }, [i, w, m.isClosePausedRef, k]), q.useEffect(() => (P(), () => S()), [P, S]);
        const R = q.useMemo(() => v ? UE(v) : null, [v]);
        return m.viewport ? (0, j.jsxs)(j.Fragment, {
          children: [R && (0, j.jsx)(qE, {
            __scopeToast: n,
            role: "status",
            "aria-live": "foreground" === r ? "assertive" : "polite",
            children: R
          }), (0, j.jsx)(VE, {
            scope: n,
            onClose: E,
            children: xd.createPortal((0, j.jsx)(xE.ItemSlot, {
              scope: n,
              children: (0, j.jsx)(Qd, {
                asChild: !0,
                onEscapeKeyDown: (0, Ad.mK)(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || E(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, j.jsx)(_E.li, {
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
                  onKeyDown: (0, Ad.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, E()))
                  }),
                  onPointerDown: (0, Ad.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, Ad.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      n = e.clientY - b.current.y,
                      r = Boolean(_.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      i = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      s = o ? i(0, t) : 0,
                      a = o ? 0 : i(0, n),
                      l = "touch" === e.pointerType ? 10 : 2,
                      u = {
                        x: s,
                        y: a
                      },
                      f = {
                        originalEvent: e,
                        delta: u
                      };
                    r ? (_.current = u, GE("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : YE(u, m.swipeDirection, l) ? (_.current = u, GE("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(n) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, Ad.mK)(e.onPointerUp, e => {
                    const t = _.current,
                      n = e.target;
                    if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), _.current = null, b.current = null, t) {
                      const n = e.currentTarget,
                        r = {
                          originalEvent: e,
                          delta: t
                        };
                      YE(t, m.swipeDirection, m.swipeThreshold) ? GE("toast.swipeEnd", p, r, {
                        discrete: !0
                      }) : GE("toast.swipeCancel", f, r, {
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
      }), qE = e => {
        const {
          __scopeToast: t,
          children: n,
          ...r
        } = e, o = EE(AE, t), [i, s] = q.useState(!1), [a, l] = q.useState(!1);
        return function(e = () => {}) {
          const t = (0, Kd.c)(e);
          (0, ef.N)(() => {
            let e = 0,
              n = 0;
            return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(n)
            }
          }, [t])
        }(() => s(!0)), q.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, j.jsx)(bh, {
          asChild: !0,
          children: (0, j.jsx)(Dh, {
            ...r,
            children: i && (0, j.jsxs)(j.Fragment, {
              children: [o.label, " ", n]
            })
          })
        })
      };
      q.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          ...r
        } = e;
        return (0, j.jsx)(_E.div, {
          ...r,
          ref: t
        })
      }).displayName = "ToastTitle";
      var WE = q.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          ...r
        } = e;
        return (0, j.jsx)(_E.div, {
          ...r,
          ref: t
        })
      });
      WE.displayName = "ToastDescription";
      var $E = "ToastAction",
        KE = q.forwardRef((e, t) => {
          const {
            altText: n,
            ...r
          } = e;
          return n.trim() ? (0, j.jsx)(ZE, {
            altText: n,
            asChild: !0,
            children: (0, j.jsx)(HE, {
              ...r,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${$E}\`. Expected non-empty \`string\`.`), null)
        });
      KE.displayName = $E;
      var XE = "ToastClose",
        HE = q.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            ...r
          } = e, o = FE(XE, n);
          return (0, j.jsx)(ZE, {
            asChild: !0,
            children: (0, j.jsx)(_E.button, {
              type: "button",
              ...r,
              ref: t,
              onClick: (0, Ad.mK)(e.onClick, o.onClose)
            })
          })
        });
      HE.displayName = XE;
      var ZE = q.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          altText: r,
          ...o
        } = e;
        return (0, j.jsx)(_E.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": r || void 0,
          ...o,
          ref: t
        })
      });

      function UE(e) {
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
              } else t.push(...UE(e))
          }
        }), t
      }

      function GE(e, t, n, {
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
          e && xd.flushSync(() => e.dispatchEvent(t))
        }(o, i) : o.dispatchEvent(i)
      }
      var YE = (e, t, n = 0) => {
        const r = Math.abs(e.x),
          o = Math.abs(e.y),
          i = r > o;
        return "left" === t || "right" === t ? i && r > n : !i && o > n
      };

      function QE(e) {
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

      function JE(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var ek = kE,
        tk = IE,
        nk = zE,
        rk = WE,
        ok = KE,
        ik = HE;

      function sk(e) {
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

      function ak(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function lk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ak(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = sk(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ak(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function uk(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ck = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        dk = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = lk(lk({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ck(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uk(e.variantClassNames, e => uk(e, e => e.split(" ")[0]))
            }
          }, t
        },
        fk = dk({
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
        pk = dk({
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
        hk = dk({
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
      const mk = ({
          testId: e,
          ...t
        }) => (0, j.jsx)(ek, {
          "data-testid": e,
          ...t
        }),
        vk = (0, q.forwardRef)(({
          children: e,
          testId: t,
          position: n = "bottomRight",
          ...r
        }, o) => {
          const i = (0, H.v6)({
            className: hk({
              position: n
            })
          }, r);
          return (0, j.jsx)(tk, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        yk = (0, q.createContext)(null);

      function gk() {
        const e = (0, q.useContext)(yk);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const bk = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          appearance: r = "success",
          ...o
        }, i) => {
          const s = e ? Y.DX : nk,
            a = (0, H.v6)({
              className: pk({
                appearance: r
              })
            }, o);
          return (0, j.jsx)(yk.Provider, {
            value: {
              appearance: r
            },
            children: (0, j.jsx)(s, {
              ref: i,
              "data-testid": n,
              ...a,
              children: t
            })
          })
        }),
        _k = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? Y.DX : rk,
            s = (0, H.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...s,
            children: t
          })
        }),
        wk = {
          danger: te.CircleX,
          information: te.Info,
          success: te.CircleCheck,
          warning: te.TriangleAlert,
          avocado: te.CircleCheck
        },
        xk = (0, q.forwardRef)(({
          asChild: e,
          ...t
        }, n) => {
          const {
            appearance: r
          } = gk(), o = e ? Y.DX : wk[r], i = (0, H.v6)({
            className: fk({
              appearance: r
            }),
            size: "LG"
          }, t);
          return (0, j.jsx)(o, {
            ref: n,
            ...i
          })
        }),
        Ck = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, r);
          return (0, j.jsx)(ok, {
            ref: o,
            "data-testid": n,
            ...i,
            children: e ? (0, j.jsx)(Y.DX, {
              children: t
            }) : (0, j.jsx)(fe, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Ok = (0, q.forwardRef)(({
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
          return (0, j.jsx)(ik, {
            ref: i,
            "data-testid": n,
            ...s,
            children: e ? (0, j.jsx)(Y.DX, {
              children: t
            }) : (0, j.jsx)(OP, {
              size: "SM",
              label: r
            })
          })
        });

      function jk(e) {
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

      function Pk(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Sk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pk(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = jk(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pk(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Ek(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var kk = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Rk = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Sk(Sk({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) kk(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ek(e.variantClassNames, e => Ek(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Tk = Rk({
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
        Dk = Rk({
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
        Nk = Rk({
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

      function Ik() {
        const e = (0, q.useContext)(Mk);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Mk = (0, q.createContext)(null),
        Lk = (0, q.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          size: r = "MD",
          ...o
        }, i) => {
          const s = (0, H.v6)({
              className: Nk({
                size: r
              })
            }, o),
            a = n ? Y.DX : "ol";
          return (0, j.jsx)(Mk.Provider, {
            value: {
              size: r
            },
            children: (0, j.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        Ak = (0, q.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: n,
          testId: r,
          ...o
        }, i) => {
          const s = (0, q.useRef)(null),
            {
              size: a
            } = Ik(),
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
              } = vP({
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
            u = n ? Y.DX : "a",
            c = (0, H.v6)({
              className: (0, ee.$)(Tk({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": r
            }, l, o);
          return (0, j.jsx)("li", {
            className: Dk({
              size: a
            }),
            ref: i,
            children: (0, j.jsx)(u, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        zk = (0, q.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = te[e];
          return (0, j.jsx)(r, {
            ref: n,
            size: "LG",
            ...t
          })
        }),
        Vk = (0, q.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: n = !1,
          label: r,
          ...o
        }, i) => {
          const [s, a] = (0, q.useState)(n), {
            size: l
          } = Ik(), u = (0, H.v6)({
            className: Dk({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, j.jsx)("li", {
            ref: i,
            ...u,
            children: (0, j.jsxs)(jw, {
              open: s,
              onOpenChange: () => a(!s),
              children: [(0, j.jsx)(Pw, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": r,
                children: "..."
              }), (0, j.jsx)(kw, {
                children: (0, j.jsx)(Rw, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, j.jsx)(Tw, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Fk = (0, q.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = t ? Y.DX : Dw,
            s = (0, H.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": n
            }, r);
          return (0, j.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        });

      function Bk(e) {
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

      function qk(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Wk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qk(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Bk(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qk(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function $k(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Kk = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Xk = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Wk(Wk({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Kk(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $k(e.variantClassNames, e => $k(e, e => e.split(" ")[0]))
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
      const Hk = (0, q.createContext)(null);

      function Zk() {
        const e = (0, q.useContext)(Hk);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Uk = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: n = "primary",
          size: r = "SM",
          type: o = "text",
          ...i
        }, s) => {
          const a = e ? Y.DX : "div",
            l = (0, H.v6)({
              className: Xk({
                appearance: n,
                type: o,
                size: r
              })
            }, i);
          return (0, j.jsx)(Hk.Provider, {
            value: {
              type: o
            },
            children: (0, j.jsx)(a, {
              ref: s,
              "data-testid": t,
              ...l
            })
          })
        }),
        Gk = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? Y.DX : "div",
            i = (0, H.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, n);
          return (0, j.jsx)(o, {
            ref: r,
            ...i
          })
        }),
        Yk = (0, q.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = te[e],
            o = (0, H.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, j.jsx)(r, {
            ref: n,
            ...o
          })
        }),
        Qk = () => {
          const e = (0, G.Ub)(H.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Jk = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });
      var eR = n(74163);

      function tR(e) {
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

      function nR(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function rR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nR(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = tR(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nR(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function oR(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var iR = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        sR = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = rR(rR({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) iR(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oR(e.variantClassNames, e => oR(e, e => e.split(" ")[0]))
            }
          }, t
        },
        aR = sR({
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
        lR = sR({
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
      const uR = (0, q.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, q.createRef)(),
          dialogSpringRef: pd(),
          overlaySpringRef: pd()
        }),
        cR = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: n,
          onOpenTransitionStart: r,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: i,
          onCloseTransitionComplete: s,
          ...a
        }) => {
          const [l, u] = (0, G.ic)({
            prop: n,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, G.ZC)(l);
          return (0, j.jsx)(uR.Provider, {
            value: {
              isOpen: l,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: u,
              onOpenTransitionStart: r,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: i,
              onCloseTransitionComplete: s,
              contentId: (0, q.useId)(),
              descriptionId: (0, q.useId)(),
              triggerRef: (0, q.useRef)(null),
              dialogSpringRef: md(),
              overlaySpringRef: md()
            },
            children: (0, j.jsx)(dR, {
              ...a
            })
          })
        },
        dR = e => {
          const {
            isOpen: t,
            setIsOpen: n
          } = (0, q.useContext)(uR), r = (0, H.v6)({
            open: t,
            onOpenChange: n
          }, e);
          return (0, j.jsx)(og, {
            ...r
          })
        },
        fR = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            contentId: r,
            triggerRef: o
          } = (0, q.useContext)(uR), i = (0, G.UP)(o, n), s = (0, H.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": r
          }, t);
          return (0, j.jsx)(ig, {
            ...s,
            ref: i
          })
        }),
        pR = e => (0, j.jsx)(sg, {
          forceMount: !0,
          ...e
        }),
        hR = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            isOpen: r,
            overlaySpringRef: o,
            openImmediately: i
          } = (0, q.useContext)(uR), s = Jk(), a = (0, G.jt)(), l = vd(r, {
            ref: o,
            delay: r ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: Pc.stiff,
            immediate: a || i
          }), u = (0, H.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = Ld(ag);
          return (0, q.useEffect)(() => {
            o.start()
          }, [r]), l((e, t) => t ? (0, j.jsx)(c, {
            forceMount: !0,
            ref: n,
            ...u,
            style: e
          }) : null)
        }),
        mR = (0, q.forwardRef)(({
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
            contentId: u,
            triggerRef: c,
            onOpenTransitionStart: d,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = (0, q.useContext)(uR), y = (0, G.rl)(), g = (0, G.jt)(), b = (0, q.useRef)(null), _ = Qk(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: n,
            onCloseTransitionStart: r,
            onCloseTransitionComplete: o
          }) {
            const i = Jk(),
              s = Qk(),
              a = (0, q.useRef)();
            var l;
            return {
              bindDrag: (l = ({
                velocity: [, l],
                offset: [, u],
                direction: [, c],
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
                  }(h, c)), (!a.current || u < -70) && d(), a.current) {
                  const e = 100 * (m - u) / m;
                  n.start({
                    ...i(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (u > .5 * m || l > .5 && c > 0 ? (t.start({
                  ...s(0),
                  immediate: !1,
                  config: Pc.stiff,
                  onStart: r,
                  onRest: o
                }), n.start({
                  ...i(0),
                  immediate: !1,
                  config: Pc.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: Pc.stiff
                }), n.start({
                  ...i(100),
                  immediate: !1,
                  config: Pc.stiff
                })))
              }, As(zs), ea({
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
          }), x = vd(s, {
            from: _(0),
            enter: _(100),
            leave: _(0),
            delay: s ? 100 : 0,
            config: Pc.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, n) => {
              n ? d?.() : p?.()
            },
            onRest: (e, t, n) => {
              n ? f?.() : h?.()
            }
          });
          (0, q.useEffect)(() => {
            m.start()
          }, [s]);
          const C = (0, G.UP)(b, i),
            O = y && !g && !r && w(),
            P = (0, H.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                n?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: u
            }, O || {}, o),
            S = Ld(lg);
          return x((t, n) => n ? (0, j.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, j.jsx)(S, {
              forceMount: !0,
              ref: C,
              ...P,
              style: t,
              children: e
            })
          }) : null)
        }),
        vR = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = (0, H.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, j.jsx)(ug, {
            ref: n,
            ...r
          })
        }),
        yR = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = (0, H.v6)({
            "data-testid": e
          }, t);
          return (0, j.jsx)(cg, {
            ref: n,
            ...r
          })
        }),
        gR = (0, q.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, n);
          return (0, j.jsxs)(eR.Root, {
            ref: r,
            ...o,
            children: [(0, j.jsx)(eR.Viewport, {
              className: "foundry_xov33ni",
              children: e
            }), (0, j.jsx)(eR.Scrollbar, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, j.jsx)(eR.Thumb, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        bR = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, n),
            i = e ? Y.DX : "div";
          return (0, j.jsx)(i, {
            ref: r,
            ...o
          })
        }),
        _R = (0, q.forwardRef)(({
          align: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: aR({
                align: e
              })
            }, r),
            s = t ? Y.DX : "header";
          return (0, j.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        wR = (0, q.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...n
        }, r) => {
          const o = (0, H.v6)({
            "data-testid": e,
            className: lR({
              appearance: t
            })
          }, n);
          return (0, j.jsx)(ug, {
            ref: r,
            ...o
          })
        }),
        xR = (0, q.forwardRef)((e, t) => {
          const n = (0, H.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, j.jsx)(xe, {
            ref: t,
            ...n,
            appearance: "ghost",
            size: "LG"
          })
        }),
        CR = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, n),
            i = t ? (0, j.jsx)(Y.DX, {
              ref: r,
              ...o
            }) : (0, j.jsx)(OP, {
              ref: r,
              ...o,
              size: "LG"
            });
          return (0, j.jsx)(dg, {
            asChild: !0,
            children: i
          })
        }),
        OR = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, n),
            i = e ? Y.DX : "div";
          return (0, j.jsx)(i, {
            ref: r,
            ...o
          })
        }),
        jR = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, n),
            i = e ? Y.DX : "footer";
          return (0, j.jsx)(i, {
            ref: r,
            ...o
          })
        });

      function PR(e, t = []) {
        let n = [];
        const r = () => {
          const t = n.map(e => q.createContext(e));
          return function(n) {
            const r = n?.[e] || t;
            return q.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            }), [n, r])
          }
        };
        return r.scopeName = e, [function(t, r) {
          const o = q.createContext(r);
          o.displayName = t + "Context";
          const i = n.length;
          n = [...n, r];
          const s = t => {
            const {
              scope: n,
              children: r,
              ...s
            } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
            return (0, j.jsx)(a.Provider, {
              value: l,
              children: r
            })
          };
          return s.displayName = t + "Provider", [s, function(n, s) {
            const a = s?.[e]?.[i] || o,
              l = q.useContext(a);
            if (l) return l;
            if (void 0 !== r) return r;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, SR(r, ...t)]
      }

      function SR(...e) {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var ER = n(12579),
        kR = n(19888);

      function RR() {
        return () => {}
      }
      var TR = "Avatar",
        [DR, NR] = PR(TR),
        [IR, MR] = DR(TR),
        LR = q.forwardRef((e, t) => {
          const {
            __scopeAvatar: n,
            ...r
          } = e, [o, i] = q.useState("idle");
          return (0, j.jsx)(IR, {
            scope: n,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: i,
            children: (0, j.jsx)(ER.sG.span, {
              ...r,
              ref: t
            })
          })
        });
      LR.displayName = TR;
      var AR = "AvatarImage",
        zR = q.forwardRef((e, t) => {
          const {
            __scopeAvatar: n,
            src: r,
            onLoadingStatusChange: o = () => {},
            ...i
          } = e, s = MR(AR, n), a = function(e, {
            referrerPolicy: t,
            crossOrigin: n
          }) {
            const r = (0, kR.useSyncExternalStore)(RR, () => !0, () => !1),
              o = q.useRef(null),
              i = r ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, a] = q.useState(() => FR(i, e));
            return (0, ef.N)(() => {
              a(FR(i, e))
            }, [i, e]), (0, ef.N)(() => {
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
          }(r, i), l = (0, Kd.c)(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return (0, ef.N)(() => {
            "idle" !== a && l(a)
          }, [a, l]), "loaded" === a ? (0, j.jsx)(ER.sG.img, {
            ...i,
            ref: t,
            src: r
          }) : null
        });
      zR.displayName = AR;
      var VR = "AvatarFallback";

      function FR(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      q.forwardRef((e, t) => {
        const {
          __scopeAvatar: n,
          delayMs: r,
          ...o
        } = e, i = MR(VR, n), [s, a] = q.useState(void 0 === r);
        return q.useEffect(() => {
          if (void 0 !== r) {
            const e = window.setTimeout(() => a(!0), r);
            return () => window.clearTimeout(e)
          }
        }, [r]), s && "loaded" !== i.imageLoadingStatus ? (0, j.jsx)(ER.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = VR;
      var BR = LR,
        qR = zR;

      function WR(e) {
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

      function $R(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function KR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $R(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = WR(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $R(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function XR(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var HR = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ZR = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = KR(KR({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) HR(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return XR(e.variantClassNames, e => XR(e, e => e.split(" ")[0]))
            }
          }, t
        },
        UR = ZR({
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
        GR = "var(--foundry_v912w22)",
        YR = "var(--foundry_v912w23)",
        QR = ZR({
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
        JR = ZR({
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
        eT = "var(--foundry_v912w21)",
        tT = "var(--foundry_v912w20)",
        nT = ZR({
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
      const rT = (0, q.createContext)(null);

      function oT() {
        const e = (0, q.useContext)(rT);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const iT = (0, q.forwardRef)(({
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
            className: UR({
              isDisabled: i
            }),
            asChild: e
          }, s);
          return (0, j.jsx)(rT.Provider, {
            value: {
              size: r,
              status: o,
              isDisabled: i
            },
            children: (0, j.jsx)(BR, {
              ref: a,
              ...l,
              children: t
            })
          })
        }),
        sT = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          src: n,
          ...r
        }, o) => {
          const {
            size: i,
            isDisabled: s
          } = oT(), [a, l] = (0, q.useState)(!1);
          (0, q.useEffect)(() => {
            l(!1)
          }, [n]);
          const u = a || !n ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : n,
            c = (0, H.v6)({
              className: QR({
                isDisabled: s
              }),
              src: u,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, r);
          return (0, j.jsx)("span", {
            className: JR({
              size: i,
              isDisabled: s,
              isFallback: a
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, j.jsx)(qR, {
              ref: o,
              ...c
            })
          })
        }),
        aT = (0, q.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...n
        }, r) => {
          const o = (0, q.useRef)(null),
            {
              size: i,
              status: s,
              isDisabled: a
            } = oT(),
            l = s || "online",
            u = (0, G.UP)(o, r),
            c = (0, H.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: nT({
                status: l,
                size: i,
                isDisabled: a
              }),
              style: (0, K.DI)({
                [tT]: t?.online,
                [eT]: t?.offline,
                [GR]: t?.away,
                [YR]: t?.busy
              })
            }, n);
          return (0, j.jsx)("span", {
            ref: u,
            ...c
          })
        });

      function lT(e) {
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

      function uT(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function cT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? uT(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = lT(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uT(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function dT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var fT = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        pT = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = cT(cT({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) fT(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dT(e.variantClassNames, e => dT(e, e => e.split(" ")[0]))
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
      const hT = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_2jlbzt0"
            }, r),
            s = e ? Y.DX : "nav";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        mT = (0, q.forwardRef)(({
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
            s = e ? Y.DX : "div";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        vT = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          isActive: n,
          testId: r,
          ...o
        }, i) => {
          const s = (0, q.useRef)(null),
            a = (0, G.UP)(s, i),
            {
              linkProps: l,
              isPressed: u
            } = vP(o, s),
            c = (0, H.v6)({
              role: "listitem",
              "data-testid": r,
              "data-pressed": u,
              "data-active": n,
              className: (0, ee.$)(pT({
                isActive: n
              }))
            }, l),
            d = e ? Y.DX : "a";
          return (0, j.jsx)(d, {
            ref: a,
            ...c,
            children: t
          })
        }),
        yT = (0, q.forwardRef)(({
          label: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, n);
          return (0, j.jsx)(vT, {
            ref: r,
            ...o,
            children: (0, j.jsx)(te.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        gT = (0, q.forwardRef)(({
          label: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, n);
          return (0, j.jsx)(vT, {
            ref: r,
            ...o,
            children: (0, j.jsx)(te.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        bT = ({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }) => {
          const o = (0, H.v6)({
              role: "listitem",
              "data-testid": n,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, r),
            i = e ? Y.DX : "span";
          return (0, j.jsx)(i, {
            ...o,
            children: t || "..."
          })
        },
        _T = ({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }) => {
          const o = (0, H.v6)({
              "data-testid": n,
              className: "foundry_2jlbzt8"
            }, r),
            i = e ? Y.DX : "div";
          return (0, j.jsx)(i, {
            ...o,
            children: t
          })
        },
        wT = (0, q.createContext)(null);

      function xT() {
        const e = (0, q.useContext)(wT);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const CT = ({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }) => {
          const o = (0, q.useId)(),
            i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_2jlbztb"
            }, r),
            s = e ? Y.DX : "div";
          return (0, j.jsx)(wT.Provider, {
            value: {
              labelId: o
            },
            children: (0, j.jsx)(s, {
              ...i,
              children: t
            })
          })
        },
        OT = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            labelId: i
          } = xT(), s = (0, H.v6)({
            "data-testid": n,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, r), a = e ? Y.DX : "label";
          return (0, j.jsx)(a, {
            ref: o,
            id: i,
            ...s,
            children: t
          })
        }),
        jT = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: n,
          ...r
        }, o) => {
          const {
            labelId: i
          } = xT(), s = (0, H.v6)({
            "aria-labelledby": i,
            className: "foundry_2jlbztc"
          }, r), a = e ? Y.DX : Zw;
          return (0, j.jsxs)(a, {
            ...s,
            children: [(0, j.jsxs)(Qw, {
              ref: o,
              children: [(0, j.jsx)(Jw, {
                placeholder: n
              }), (0, j.jsx)(ex, {})]
            }), (0, j.jsx)(ax, {
              children: (0, j.jsx)(Uw, {
                children: (0, j.jsx)(Yw, {
                  children: t
                })
              })
            })]
          })
        }),
        PT = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n
            }, r),
            s = e ? Y.DX : ox;
          return (0, j.jsx)(s, {
            ...i,
            ref: o,
            children: (0, j.jsx)(ix, {
              children: t
            })
          })
        }),
        ST = (0, q.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": n,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, r),
            s = e ? Y.DX : "p";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        });

      function ET(...e) {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function kT(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var RT = Symbol("radix.slottable");

      function TT(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === RT
      }
      var DT = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const n = function(e) {
            const t = kT(e),
              n = q.forwardRef((e, n) => {
                const {
                  children: r,
                  ...o
                } = e, i = q.Children.toArray(r), s = i.find(TT);
                if (s) {
                  const e = s.props.children,
                    r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                  })
                }
                return (0, j.jsx)(t, {
                  ...o,
                  ref: n,
                  children: r
                })
              });
            return n.displayName = `${e}.Slot`, n
          }(`Primitive.${t}`),
          r = q.forwardRef((e, r) => {
            const {
              asChild: o,
              ...i
            } = e, s = o ? n : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
              ...i,
              ref: r
            })
          });
        return r.displayName = `Primitive.${t}`, {
          ...e,
          [t]: r
        }
      }, {});

      function NT(...e) {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function IT(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var MT = Symbol("radix.slottable");

      function LT(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === MT
      }
      var AT = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = IT(e),
                n = q.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = q.Children.toArray(r), s = i.find(LT);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                    return (0, j.jsx)(t, {
                      ...o,
                      ref: n,
                      children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        zT = "rovingFocusGroup.onEntryFocus",
        VT = {
          bubbles: !1,
          cancelable: !0
        },
        FT = "RovingFocusGroup",
        [BT, qT, WT] = Im(FT),
        [$T, KT] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => q.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return q.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = q.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
              return (0, j.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = q.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, NT(r, ...t)]
        }(FT, [WT]),
        [XT, HT] = $T(FT),
        ZT = q.forwardRef((e, t) => (0, j.jsx)(BT.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, j.jsx)(BT.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, j.jsx)(UT, {
              ...e,
              ref: t
            })
          })
        }));
      ZT.displayName = FT;
      var UT = q.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: n,
            orientation: r,
            loop: o = !1,
            dir: i,
            currentTabStopId: s,
            defaultCurrentTabStopId: a,
            onCurrentTabStopIdChange: l,
            onEntryFocus: u,
            preventScrollOnEntryFocus: c = !1,
            ...d
          } = e, f = q.useRef(null), p = (0, zd.s)(t, f), h = (0, Cm.jH)(i), [m, v] = Ph({
            prop: s,
            defaultProp: a ?? null,
            onChange: l,
            caller: FT
          }), [y, g] = q.useState(!1), b = (0, Kd.c)(u), _ = qT(n), w = q.useRef(!1), [x, C] = q.useState(0);
          return q.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(zT, b), () => e.removeEventListener(zT, b)
          }, [b]), (0, j.jsx)(XT, {
            scope: n,
            orientation: r,
            dir: h,
            loop: o,
            currentTabStopId: m,
            onItemFocus: q.useCallback(e => v(e), [v]),
            onItemShiftTab: q.useCallback(() => g(!0), []),
            onFocusableItemAdd: q.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: q.useCallback(() => C(e => e - 1), []),
            children: (0, j.jsx)(AT.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": r,
              ...d,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, Ad.mK)(e.onMouseDown, () => {
                w.current = !0
              }),
              onFocus: (0, Ad.mK)(e.onFocus, e => {
                const t = !w.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(zT, VT);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = _().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      n = e.find(e => e.id === m),
                      r = [t, n, ...e].filter(Boolean).map(e => e.ref.current);
                    JT(r, c)
                  }
                }
                w.current = !1
              }),
              onBlur: (0, Ad.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        GT = "RovingFocusGroupItem",
        YT = q.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: n,
            focusable: r = !0,
            active: o = !1,
            tabStopId: i,
            children: s,
            ...a
          } = e, l = rf(), u = i || l, c = HT(GT, n), d = c.currentTabStopId === u, f = qT(n), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: m
          } = c;
          return q.useEffect(() => {
            if (r) return p(), () => h()
          }, [r, p, h]), (0, j.jsx)(BT.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: (0, j.jsx)(AT.span, {
              tabIndex: d ? 0 : -1,
              "data-orientation": c.orientation,
              ...a,
              ref: t,
              onMouseDown: (0, Ad.mK)(e.onMouseDown, e => {
                r ? c.onItemFocus(u) : e.preventDefault()
              }),
              onFocus: (0, Ad.mK)(e.onFocus, () => c.onItemFocus(u)),
              onKeyDown: (0, Ad.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, n) {
                  const r = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, n);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r) ? void 0 : QT[r]
                }(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let i = o.map(e => e.ref.current);
                  if ("last" === t) i.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && i.reverse();
                    const o = i.indexOf(e.currentTarget);
                    i = c.loop ? (r = o + 1, (n = i).map((e, t) => n[(r + t) % n.length])) : i.slice(o + 1)
                  }
                  setTimeout(() => JT(i))
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
      YT.displayName = GT;
      var QT = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function JT(e, t = !1) {
        const n = document.activeElement;
        for (const r of e) {
          if (r === n) return;
          if (r.focus({
              preventScroll: t
            }), document.activeElement !== n) return
        }
      }
      var eD = ZT,
        tD = YT;

      function nD(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var rD = Symbol("radix.slottable");

      function oD(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === rD
      }
      var iD = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = nD(e),
                n = q.forwardRef((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, i = q.Children.toArray(r), s = i.find(oD);
                  if (s) {
                    const e = s.props.children,
                      r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
                    return (0, j.jsx)(t, {
                      ...o,
                      ref: n,
                      children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, j.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        sD = "Toggle",
        aD = q.forwardRef((e, t) => {
          const {
            pressed: n,
            defaultPressed: r,
            onPressedChange: o,
            ...i
          } = e, [s, a] = Ph({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: sD
          });
          return (0, j.jsx)(iD.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...i,
            ref: t,
            onClick: (0, Ad.mK)(e.onClick, () => {
              e.disabled || a(!s)
            })
          })
        });
      aD.displayName = sD;
      var lD = "ToggleGroup",
        [uD, cD] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => q.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return q.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = q.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
              return (0, j.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = q.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, ET(r, ...t)]
        }(lD, [KT]),
        dD = KT(),
        fD = q.forwardRef((e, t) => {
          const {
            type: n,
            ...r
          } = e;
          if ("single" === n) {
            const e = r;
            return (0, j.jsx)(mD, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === n) {
            const e = r;
            return (0, j.jsx)(vD, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${lD}\``)
        });
      fD.displayName = lD;
      var [pD, hD] = uD(lD), mD = q.forwardRef((e, t) => {
        const {
          value: n,
          defaultValue: r,
          onValueChange: o = () => {},
          ...i
        } = e, [s, a] = Ph({
          prop: n,
          defaultProp: r ?? "",
          onChange: o,
          caller: lD
        });
        return (0, j.jsx)(pD, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: q.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: a,
          onItemDeactivate: q.useCallback(() => a(""), [a]),
          children: (0, j.jsx)(bD, {
            ...i,
            ref: t
          })
        })
      }), vD = q.forwardRef((e, t) => {
        const {
          value: n,
          defaultValue: r,
          onValueChange: o = () => {},
          ...i
        } = e, [s, a] = Ph({
          prop: n,
          defaultProp: r ?? [],
          onChange: o,
          caller: lD
        }), l = q.useCallback(e => a((t = []) => [...t, e]), [a]), u = q.useCallback(e => a((t = []) => t.filter(t => t !== e)), [a]);
        return (0, j.jsx)(pD, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: l,
          onItemDeactivate: u,
          children: (0, j.jsx)(bD, {
            ...i,
            ref: t
          })
        })
      });
      fD.displayName = lD;
      var [yD, gD] = uD(lD), bD = q.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: n,
          disabled: r = !1,
          rovingFocus: o = !0,
          orientation: i,
          dir: s,
          loop: a = !0,
          ...l
        } = e, u = dD(n), c = (0, Cm.jH)(s), d = {
          role: "group",
          dir: c,
          ...l
        };
        return (0, j.jsx)(yD, {
          scope: n,
          rovingFocus: o,
          disabled: r,
          children: o ? (0, j.jsx)(eD, {
            asChild: !0,
            ...u,
            orientation: i,
            dir: c,
            loop: a,
            children: (0, j.jsx)(DT.div, {
              ...d,
              ref: t
            })
          }) : (0, j.jsx)(DT.div, {
            ...d,
            ref: t
          })
        })
      }), _D = "ToggleGroupItem", wD = q.forwardRef((e, t) => {
        const n = hD(_D, e.__scopeToggleGroup),
          r = gD(_D, e.__scopeToggleGroup),
          o = dD(e.__scopeToggleGroup),
          i = n.value.includes(e.value),
          s = r.disabled || e.disabled,
          a = {
            ...e,
            pressed: i,
            disabled: s
          },
          l = q.useRef(null);
        return r.rovingFocus ? (0, j.jsx)(tD, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: i,
          ref: l,
          children: (0, j.jsx)(xD, {
            ...a,
            ref: t
          })
        }) : (0, j.jsx)(xD, {
          ...a,
          ref: t
        })
      });
      wD.displayName = _D;
      var xD = q.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: n,
            value: r,
            ...o
          } = e, i = hD(_D, n), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, a = "single" === i.type ? s : void 0;
          return (0, j.jsx)(aD, {
            ...a,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? i.onItemActivate(r) : i.onItemDeactivate(r)
            }
          })
        }),
        CD = fD,
        OD = wD;

      function jD(e) {
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

      function PD(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function SD(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? PD(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = jD(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : PD(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function ED(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var kD = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        RD = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = SD(SD({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) kD(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ED(e.variantClassNames, e => ED(e, e => e.split(" ")[0]))
            }
          }, t
        },
        TD = "var(--foundry_zxwkyk2)",
        DD = "var(--foundry_zxwkyk3)",
        ND = RD({
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
        ID = RD({
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
        MD = RD({
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
        LD = "var(--foundry_zxwkyk1)",
        AD = "var(--foundry_zxwkyk0)",
        zD = RD({
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
      const VD = (0, q.createContext)(null);

      function FD() {
        const e = (0, q.useContext)(VD);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const BD = (0, q.forwardRef)(({
          testId: e,
          size: t,
          type: n = "single",
          ...r
        }, o) => {
          const i = (0, H.v6)({
            "data-testid": e,
            className: ND({
              size: t
            }),
            type: n
          }, r);
          return (0, j.jsx)(VD.Provider, {
            value: {
              size: t
            },
            children: (0, j.jsx)(CD, {
              ref: o,
              ...i
            })
          })
        }),
        qD = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            size: r
          } = FD(), o = (0, H.v6)({
            "data-testid": e,
            className: ID({
              size: r
            })
          }, t);
          return (0, j.jsx)(OD, {
            ref: n,
            ...o
          })
        }),
        WD = (0, q.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const {
            size: r
          } = FD(), o = te[e];
          return (0, j.jsx)(o, {
            label: "",
            ref: n,
            size: r,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        $D = (0, q.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: n,
          ...r
        }, o) => {
          const i = (0, H.v6)({
            "data-testid": e,
            className: zD({
              status: n
            }),
            style: (0, K.DI)({
              [AD]: t?.online,
              [LD]: t?.offline,
              [TD]: t?.away,
              [DD]: t?.busy
            })
          }, r);
          return (0, j.jsx)("span", {
            ref: o,
            ...i
          })
        }),
        KD = (0, q.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...n
        }, r) => {
          const {
            size: o
          } = FD(), i = (0, H.v6)({
            "data-testid": e,
            className: MD({
              variant: t,
              size: o
            })
          }, n);
          return (0, j.jsx)("span", {
            ref: r,
            ...i
          })
        });

      function XD(...e) {
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
            return q.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function HD(e) {
        const t = ZD(e),
          n = q.forwardRef((e, n) => {
            const {
              children: r,
              ...o
            } = e, i = q.Children.toArray(r), s = i.find(GD);
            if (s) {
              const e = s.props.children,
                r = i.map(t => t === s ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
              return (0, j.jsx)(t, {
                ...o,
                ref: n,
                children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
              })
            }
            return (0, j.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function ZD(e) {
        const t = q.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (q.isValidElement(n)) {
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
            return n.type !== q.Fragment && (o.ref = t ? (0, zd.t)(t, e) : e), q.cloneElement(n, o)
          }
          return q.Children.count(n) > 1 ? q.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var UD = Symbol("radix.slottable");

      function GD(e) {
        return q.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === UD
      }
      var YD = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = HD(`Primitive.${t}`),
            r = q.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        QD = "Popover",
        [JD, eN] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => q.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return q.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = q.createContext(r),
              i = n.length;
            n = [...n, r];
            const s = t => {
              const {
                scope: n,
                children: r,
                ...s
              } = t, a = n?.[e]?.[i] || o, l = q.useMemo(() => s, Object.values(s));
              return (0, j.jsx)(a.Provider, {
                value: l,
                children: r
              })
            };
            return s.displayName = t + "Provider", [s, function(n, s) {
              const a = s?.[e]?.[i] || o,
                l = q.useContext(a);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, XD(r, ...t)]
        }(QD, [Up]),
        tN = Up(),
        [nN, rN] = JD(QD),
        oN = e => {
          const {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !1
          } = e, a = tN(t), l = q.useRef(null), [u, c] = q.useState(!1), [d, f] = Ph({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: QD
          });
          return (0, j.jsx)(dh, {
            ...a,
            children: (0, j.jsx)(nN, {
              scope: t,
              contentId: rf(),
              triggerRef: l,
              open: d,
              onOpenChange: f,
              onOpenToggle: q.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: u,
              onCustomAnchorAdd: q.useCallback(() => c(!0), []),
              onCustomAnchorRemove: q.useCallback(() => c(!1), []),
              modal: s,
              children: n
            })
          })
        };
      oN.displayName = QD;
      var iN = "PopoverAnchor",
        sN = q.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, o = rN(iN, n), i = tN(n), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: a
          } = o;
          return q.useEffect(() => (s(), () => a()), [s, a]), (0, j.jsx)(fh, {
            ...i,
            ...r,
            ref: t
          })
        });
      sN.displayName = iN;
      var aN = "PopoverTrigger",
        lN = q.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, o = rN(aN, n), i = tN(n), s = (0, zd.s)(t, o.triggerRef), a = (0, j.jsx)(YD.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": xN(o.open),
            ...r,
            ref: s,
            onClick: (0, Ad.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? a : (0, j.jsx)(fh, {
            asChild: !0,
            ...i,
            children: a
          })
        });
      lN.displayName = aN;
      var uN = "PopoverPortal",
        [cN, dN] = JD(uN, {
          forceMount: void 0
        }),
        fN = e => {
          const {
            __scopePopover: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = rN(uN, t);
          return (0, j.jsx)(cN, {
            scope: t,
            forceMount: n,
            children: (0, j.jsx)(_h.C, {
              present: n || i.open,
              children: (0, j.jsx)(bh, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      fN.displayName = uN;
      var pN = "PopoverContent",
        hN = q.forwardRef((e, t) => {
          const n = dN(pN, e.__scopePopover),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = rN(pN, e.__scopePopover);
          return (0, j.jsx)(_h.C, {
            present: r || i.open,
            children: i.modal ? (0, j.jsx)(vN, {
              ...o,
              ref: t
            }) : (0, j.jsx)(yN, {
              ...o,
              ref: t
            })
          })
        });
      hN.displayName = pN;
      var mN = HD("PopoverContent.RemoveScroll"),
        vN = q.forwardRef((e, t) => {
          const n = rN(pN, e.__scopePopover),
            r = q.useRef(null),
            o = (0, zd.s)(t, r),
            i = q.useRef(!1);
          return q.useEffect(() => {
            const e = r.current;
            if (e) return Oy(e)
          }, []), (0, j.jsx)(gy, {
            as: mN,
            allowPinchZoom: !0,
            children: (0, j.jsx)(gN, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, Ad.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), i.current || n.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, Ad.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  r = 2 === t.button || n;
                i.current = r
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, Ad.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        yN = q.forwardRef((e, t) => {
          const n = rN(pN, e.__scopePopover),
            r = q.useRef(!1),
            o = q.useRef(!1);
          return (0, j.jsx)(gN, {
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
        gN = q.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onInteractOutside: c,
            ...d
          } = e, f = rN(pN, n), p = tN(n);
          return Nv(), (0, j.jsx)(_v, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: (0, j.jsx)(Zd, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: a,
              onPointerDownOutside: l,
              onFocusOutside: u,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, j.jsx)(ph, {
                "data-state": xN(f.open),
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
        bN = "PopoverClose",
        _N = q.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, o = rN(bN, n);
          return (0, j.jsx)(YD.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, Ad.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      _N.displayName = bN;
      var wN = q.forwardRef((e, t) => {
        const {
          __scopePopover: n,
          ...r
        } = e, o = tN(n);
        return (0, j.jsx)(hh, {
          ...o,
          ...r,
          ref: t
        })
      });

      function xN(e) {
        return e ? "open" : "closed"
      }
      wN.displayName = "PopoverArrow";
      var CN = oN,
        ON = sN,
        jN = lN,
        PN = fN,
        SN = hN,
        EN = _N,
        kN = wN;

      function RN(e) {
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

      function TN(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function DN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? TN(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = RN(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : TN(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function NN(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var IN = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        MN = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = DN(DN({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) IN(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return NN(e.variantClassNames, e => NN(e, e => e.split(" ")[0]))
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
      const LN = (0, q.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        AN = ({
          open: e,
          defaultOpen: t,
          onOpenChange: n,
          ...r
        }) => {
          const [o = !1, i] = (0, G.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: n
          }), s = (0, H.v6)({
            open: o,
            onOpenChange: i
          }, r);
          return (0, j.jsx)(LN.Provider, {
            value: {
              open: o,
              setOpen: i
            },
            children: (0, j.jsx)(CN, {
              ...s
            })
          })
        },
        zN = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = (0, H.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, j.jsx)(jN, {
            ref: n,
            ...r
          })
        }),
        VN = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        FN = (0, q.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: n,
          ...r
        }, o) => {
          const {
            open: i
          } = (0, q.useContext)(LN), s = (0, q.useRef)(null), a = (0, G.UP)(s, o), {
            buttonProps: l
          } = (0, G.sL)(r, s), u = (0, H.v6)({
            "data-testid": n,
            className: MN({
              size: t
            })
          }, l), c = i ? te.ChevronUp : te.ChevronDown;
          return (0, j.jsxs)("button", {
            ref: a,
            ...u,
            children: [e, (0, j.jsx)(c, {
              label: "",
              size: VN[t]
            })]
          })
        }),
        BN = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = (0, H.v6)({
            "data-testid": e
          }, t);
          return (0, j.jsx)(ON, {
            ref: n,
            ...r
          })
        }),
        qN = (0, q.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, n);
          return (0, j.jsx)(SN, {
            ref: r,
            ...o
          })
        }),
        WN = (0, q.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = (0, H.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, j.jsx)(kN, {
            ref: n,
            ...r
          })
        }),
        $N = e => (0, j.jsx)(PN, {
          ...e
        }),
        KN = e => (0, j.jsx)(EN, {
          ...e
        });

      function XN(e) {
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

      function HN(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function ZN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? HN(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = XN(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : HN(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function UN(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var GN = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        YN = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ZN(ZN({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) GN(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return UN(e.variantClassNames, e => UN(e, e => e.split(" ")[0]))
            }
          }, t
        },
        QN = "var(--foundry_rmorls2)",
        JN = YN({
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
        eI = "var(--foundry_rmorls0)",
        tI = YN({
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
        nI = "var(--foundry_rmorls3)",
        rI = "var(--foundry_rmorls1)",
        oI = YN({
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
        iI = "Progress",
        [sI, aI] = PR(iI),
        [lI, uI] = sI(iI),
        cI = q.forwardRef((e, t) => {
          const {
            __scopeProgress: n,
            value: r = null,
            max: o,
            getValueLabel: i = pI,
            ...s
          } = e;
          !o && 0 !== o || vI(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const a = vI(o) ? o : 100;
          null === r || yI(r, a) || console.error(`Invalid prop \`value\` of value \`${`${r}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const l = yI(r, a) ? r : null,
            u = mI(l) ? i(l, a) : void 0;
          return (0, j.jsx)(lI, {
            scope: n,
            value: l,
            max: a,
            children: (0, j.jsx)(ER.sG.div, {
              "aria-valuemax": a,
              "aria-valuemin": 0,
              "aria-valuenow": mI(l) ? l : void 0,
              "aria-valuetext": u,
              role: "progressbar",
              "data-state": hI(l, a),
              "data-value": l ?? void 0,
              "data-max": a,
              ...s,
              ref: t
            })
          })
        });
      cI.displayName = iI;
      var dI = "ProgressIndicator",
        fI = q.forwardRef((e, t) => {
          const {
            __scopeProgress: n,
            ...r
          } = e, o = uI(dI, n);
          return (0, j.jsx)(ER.sG.div, {
            "data-state": hI(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...r,
            ref: t
          })
        });

      function pI(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function hI(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function mI(e) {
        return "number" == typeof e
      }

      function vI(e) {
        return mI(e) && !isNaN(e) && e > 0
      }

      function yI(e, t) {
        return mI(e) && !isNaN(e) && e <= t && e >= 0
      }
      fI.displayName = dI;
      var gI = cI,
        bI = fI;
      const _I = (0, q.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        wI = (0, q.forwardRef)(({
          size: e = "MD",
          max: t,
          value: n,
          ...r
        }, o) => {
          const i = Math.round(n / t * 100),
            s = "number" != typeof n || "number" != typeof t;
          return (0, j.jsx)(_I.Provider, {
            value: {
              value: n,
              max: t,
              size: e,
              percentage: i,
              isInvalid: s
            },
            children: (0, j.jsx)(xI, {
              ...r,
              ref: o
            })
          })
        }),
        xI = (0, q.forwardRef)(({
          testId: e,
          asChild: t,
          ...n
        }, r) => {
          const o = (0, H.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, n),
            i = t ? Y.DX : "div";
          return (0, j.jsx)(i, {
            ...o,
            ref: r
          })
        }),
        CI = (0, q.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...n
        }, r) => {
          const {
            value: o,
            max: i,
            size: s
          } = (0, q.useContext)(_I), a = (0, H.v6)({
            "data-testid": e,
            className: tI({
              size: s
            }),
            value: o,
            max: i,
            style: (0, K.DI)({
              [nI]: t
            }),
            "data-track": !0
          }, n);
          return (0, j.jsx)(gI, {
            ref: r,
            ...a
          })
        }),
        OI = (0, q.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: n,
          ...r
        }, o) => {
          const {
            percentage: i,
            isInvalid: s
          } = (0, q.useContext)(_I), a = s ? "-100%" : `-${100-i}%`, l = (0, H.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, K.DI)({
              [eI]: a,
              [rI]: `${t}ms`,
              [QN]: n
            })
          }, r);
          return (0, j.jsx)(bI, {
            ref: o,
            ...l
          })
        }),
        jI = (0, q.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const {
            size: o
          } = (0, q.useContext)(_I), i = (0, H.v6)({
            "data-testid": t,
            className: JN({
              size: o
            }),
            "aria-hidden": !0
          }, n), s = e ? Y.DX : "span";
          return (0, j.jsx)(s, {
            ref: r,
            ...i
          })
        }),
        PI = (0, q.forwardRef)(({
          testId: e,
          format: t,
          ...n
        }, r) => {
          const {
            value: o,
            max: i,
            size: s,
            percentage: a,
            isInvalid: l
          } = (0, q.useContext)(_I), u = (0, H.v6)({
            "data-testid": e,
            className: JN({
              size: s
            }),
            "aria-hidden": !0
          }, n);
          return l ? (0, j.jsx)("span", {
            ref: r,
            ...u
          }) : "percentage" === t ? (0, j.jsxs)("span", {
            ref: r,
            ...u,
            children: [a, " ", (0, j.jsx)("span", {
              className: oI({
                size: s
              }),
              children: "%"
            })]
          }) : (0, j.jsxs)("span", {
            ref: r,
            ...u,
            children: [o, "/", i]
          })
        })
    }
  }
]);