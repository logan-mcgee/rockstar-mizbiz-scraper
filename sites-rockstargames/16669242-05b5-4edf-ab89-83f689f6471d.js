try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "16669242-05b5-4edf-ab89-83f689f6471d", e._sentryDebugIdIdentifier = "sentry-dbid-16669242-05b5-4edf-ab89-83f689f6471d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [761], {
    36553: (e, t, r) => {
      e.exports = r(44622)
    },
    44622: (e, t, r) => {
      var n = r(71127),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = n.useState,
        s = n.useEffect,
        a = n.useLayoutEffect,
        l = n.useDebugValue;

      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r)
        } catch (e) {
          return !0
        }
      }
      var d = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
      } : function(e, t) {
        var r = t(),
          n = i({
            inst: {
              value: r,
              getSnapshot: t
            }
          }),
          o = n[0].inst,
          d = n[1];
        return a(function() {
          o.value = r, o.getSnapshot = t, u(o) && d({
            inst: o
          })
        }, [e, r, t]), s(function() {
          return u(o) && d({
            inst: o
          }), e(function() {
            u(o) && d({
              inst: o
            })
          })
        }, [e]), l(r), r
      };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : d
    },
    65281: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => _,
        Badge: () => g,
        Body: () => pt,
        Breadcrumbs: () => y,
        Button: () => Re,
        Checkbox: () => l,
        Code: () => mt,
        Dialog: () => b,
        Display: () => vt,
        Divider: () => Ze,
        Dropdown: () => i,
        Heading: () => gt,
        IconButton: () => qe,
        Label: () => _t,
        Lightbox: () => o,
        Loader: () => it,
        Pagination: () => w,
        RadioGroup: () => c,
        Spinner: () => ye,
        Switch: () => s,
        Tag: () => m,
        Text: () => Ct,
        TextArea: () => u,
        TextField: () => f,
        TextSemantics: () => xt,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Vm,
        Content: () => Am,
        Portal: () => Fm,
        Root: () => Mm,
        Trigger: () => zm,
        useTooltipContext: () => Lm
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Vy,
        Close: () => Xy,
        Content: () => Iy,
        Controls: () => Fy,
        CssVars: () => Ky,
        Download: () => Uy,
        Image: () => Ay,
        Keyboard: () => By,
        LightboxContext: () => Py,
        OpenIcon: () => Ry,
        Overlay: () => Ny,
        Portal: () => Dy,
        Reset: () => Hy,
        Root: () => jy,
        RootImplContext: () => Sy,
        Thumbnail: () => Ey,
        Trigger: () => Ty,
        Zoom: () => Wy,
        ZoomPan: () => Ly
      });
      var i = {};
      r.r(i), r.d(i, {
        Content: () => Ww,
        Description: () => $w,
        Hint: () => Gw,
        Label: () => Zw,
        Option: () => Yw,
        OptionIcon: () => Jw,
        OptionText: () => Qw,
        Portal: () => ex,
        Root: () => Bw,
        ScrollArea: () => Xw,
        StatusIcon: () => rx,
        StatusRoot: () => tx,
        StatusText: () => nx,
        Trigger: () => Hw,
        TriggerIcon: () => Kw,
        TriggerText: () => Uw,
        useDropdownContext: () => qw
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => Gx,
        Input: () => Zx,
        Label: () => $x,
        Root: () => Kx,
        useSwitchContext: () => Ux
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => uC,
        CheckMD: () => lC,
        CheckXL: () => dC,
        DashLG: () => fC,
        DashMD: () => cC,
        DashXL: () => pC
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => TC,
        ErrorText: () => EC,
        Input: () => SC,
        Label: () => kC,
        Root: () => jC
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => UC,
        Hint: () => KC,
        Input: () => HC,
        Label: () => XC,
        Root: () => WC,
        RootContext: () => qC,
        StatusIcon: () => $C,
        StatusRoot: () => ZC,
        StatusText: () => GC,
        useTextAreaContext: () => BC
      });
      var d = {};
      r.r(d), r.d(d, {
        DotLG: () => FO,
        DotMD: () => VO,
        DotXL: () => qO
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => RO,
        Input: () => WO,
        Label: () => EO,
        Option: () => BO,
        OptionDescription: () => HO,
        OptionLabel: () => XO,
        Options: () => TO,
        Root: () => kO,
        StatusIcon: () => NO,
        StatusRoot: () => DO,
        StatusText: () => IO,
        useRadioGroupContext: () => SO
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => UP,
        Control: () => WP,
        Description: () => ZP,
        Hint: () => BP,
        Icon: () => HP,
        Input: () => XP,
        Label: () => qP,
        PasswordButton: () => KP,
        Root: () => FP,
        StatusIcon: () => GP,
        StatusRoot: () => $P,
        StatusText: () => YP
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => bj,
        CloseButton: () => Sj,
        Description: () => Cj,
        ErrorText: () => jj,
        Footer: () => Pj,
        Header: () => gj,
        Icon: () => wj,
        Link: () => Oj,
        Root: () => yj,
        RootContext: () => mj,
        Title: () => xj,
        iconStatusMap: () => _j,
        useAlertContext: () => vj
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => Zj,
        CloseButton: () => Yj,
        Description: () => Kj,
        Icon: () => Uj,
        Link: () => Gj,
        PaginationCounter: () => tS,
        PaginationNav: () => Qj,
        PaginationNextButton: () => Jj,
        PaginationPrevButton: () => eS,
        PaginationViewport: () => $j,
        Root: () => Xj,
        RootContext: () => Bj,
        iconStatusMap: () => Hj,
        useAlertBannerContext: () => Wj
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => vS,
        Icon: () => mS,
        Label: () => hS,
        Root: () => pS,
        RootContext: () => cS,
        useTagContext: () => fS
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => bk,
        CloseButton: () => _k,
        Description: () => vk,
        Icon: () => gk,
        Provider: () => ck,
        Root: () => mk,
        RootContext: () => pk,
        Viewport: () => fk,
        iconAppearanceMap: () => yk,
        useToastContext: () => hk
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => Ik,
        Item: () => Nk,
        OverflowMenu: () => Lk,
        OverflowMenuItem: () => Mk,
        Root: () => Dk,
        RootContext: () => Rk,
        useBreadcrumbsContext: () => Ek
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => Hk,
        Label: () => Xk,
        Root: () => Wk
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => dE,
        Button: () => vE,
        CloseButton: () => hE,
        Content: () => oE,
        Description: () => aE,
        Footer: () => fE,
        Header: () => cE,
        HeaderButton: () => mE,
        HeaderTitle: () => pE,
        Layout: () => uE,
        Overlay: () => nE,
        Portal: () => iE,
        Root: () => rE,
        ScrollArea: () => lE,
        Title: () => sE,
        Trigger: () => yE,
        useDialogContext: () => tE
      });
      var _ = {};
      r.r(_), r.d(_, {
        Image: () => nR,
        Root: () => rR,
        StatusIndicator: () => oR,
        useAvatarContext: () => tR
      });
      var w = {};
      r.r(w), r.d(w, {
        Controls: () => yR,
        Dropdown: () => xR,
        DropdownLabel: () => wR,
        Ellipsis: () => vR,
        Item: () => pR,
        Label: () => OR,
        Next: () => mR,
        Option: () => CR,
        Pages: () => fR,
        Prev: () => hR,
        ResultsPerPage: () => _R,
        Root: () => cR
      });
      var x = r(42295);

      function C(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class O extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var P = O;

      function j(e) {
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
        const r = E.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(T(e, 2), 16)), parseInt(T(e[3] || "f", 2), 16) / 255]
        }
        const n = R.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = D.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const i = N.exec(t);
        if (i) {
          const [t, r, n, o] = Array.from(i).slice(1).map(parseFloat);
          if (C(0, 100, r) !== r) throw new P(e);
          if (C(0, 100, n) !== n) throw new P(e);
          return [...M(t, r, n), Number.isNaN(o) ? 1 : o]
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
        T = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        E = new RegExp(`^#${T("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        R = new RegExp(`^#${T("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        D = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${T(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        N = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        I = /^[a-z]+$/i,
        L = e => Math.round(255 * e),
        M = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(L);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * n - 1)) * (t / 100),
            s = i * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            l = 0,
            u = 0;
          o >= 0 && o < 1 ? (a = i, l = s) : o >= 1 && o < 2 ? (a = s, l = i) : o >= 2 && o < 3 ? (l = i, u = s) : o >= 3 && o < 4 ? (l = s, u = i) : o >= 4 && o < 5 ? (a = s, u = i) : o >= 5 && o < 6 && (a = i, u = s);
          const d = n - i / 2;
          return [a + d, l + d, u + d].map(L)
        };

      function z(e, t) {
        const [r, n, o, i] = function(e) {
          const [t, r, n, o] = j(e).map((e, t) => 3 === t ? e : e / 255), i = Math.max(t, r, n), s = Math.min(t, r, n), a = (i + s) / 2;
          if (i === s) return [0, 0, a, o];
          const l = i - s;
          return [60 * (t === i ? (r - n) / l + (r < n ? 6 : 0) : r === i ? (n - t) / l + 2 : (t - r) / l + 4), a > .5 ? l / (2 - i - s) : l / (i + s), a, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${C(0,100,100*t).toFixed()}%, ${C(0,100,100*r).toFixed()}%, ${parseFloat(C(0,1,n).toFixed(3))})`
        }(r, n, o - t, i)
      }

      function A(e, t) {
        return z(e, -t)
      }
      var V = r(71127),
        F = r.t(V, 2),
        q = r.n(V),
        B = r(93715),
        W = r(57461),
        X = r(75523);
      const H = {
          enabled: {
            background: (0, B.Tm)(W.no.enabled.background),
            border: (0, B.Tm)(W.no.enabled.border),
            text: (0, B.Tm)(W.no.enabled.text),
            outline: (0, B.Tm)(W.no.enabled.outline)
          },
          hover: {
            background: (0, B.Tm)(W.no.hover.background),
            border: (0, B.Tm)(W.no.hover.border),
            text: (0, B.Tm)(W.no.hover.text),
            outline: (0, B.Tm)(W.no.hover.outline)
          },
          focus: {
            background: (0, B.Tm)(W.no.focus.background),
            border: (0, B.Tm)(W.no.focus.border),
            text: (0, B.Tm)(W.no.focus.text),
            outline: (0, B.Tm)(W.no.focus.outline)
          },
          pressed: {
            background: (0, B.Tm)(W.no.pressed.background),
            border: (0, B.Tm)(W.no.pressed.border),
            text: (0, B.Tm)(W.no.pressed.text),
            outline: (0, B.Tm)(W.no.pressed.outline)
          },
          disabled: {
            background: (0, B.Tm)(W.no.disabled.background),
            border: (0, B.Tm)(W.no.disabled.border),
            text: (0, B.Tm)(W.no.disabled.text),
            outline: (0, B.Tm)(W.no.disabled.outline)
          },
          loading: {
            background: (0, B.Tm)(W.no.loading.background),
            border: (0, B.Tm)(W.no.loading.border),
            text: (0, B.Tm)(W.no.loading.text),
            outline: (0, B.Tm)(W.no.loading.outline)
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
            backgroundColor: i,
            hoverColor: s,
            pressedColor: a,
            textColor: l
          },
          enabled: u = !1
        }, d = []) => {
          (0, V.useEffect)(() => {
            if (!e.current || !i || !u) return;
            const d = `${i}:${t}:${r}`,
              {
                text: c,
                hover: f,
                pressed: p
              } = (0, X.IO)(d, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = j(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? B.LU.global.color.black.static[100] : B.LU.global.color.white.static[100]),
                  hover: s || (e >= r ? z(i, n) : A(i, n)),
                  pressed: a || (e >= r ? z(i, o) : A(i, o))
                }
              });
            return e.current.style.setProperty(H.enabled.background, i), e.current.style.setProperty(H.enabled.border, i), e.current.style.setProperty(H.enabled.text, c), e.current.style.setProperty(H.hover.background, f), e.current.style.setProperty(H.hover.border, f), e.current.style.setProperty(H.hover.text, c), e.current.style.setProperty(H.focus.background, f), e.current.style.setProperty(H.focus.border, f), e.current.style.setProperty(H.focus.text, c), e.current.style.setProperty(H.pressed.background, p), e.current.style.setProperty(H.pressed.border, p), e.current.style.setProperty(H.pressed.text, c), e.current.style.setProperty(H.loading.background, f), e.current.style.setProperty(H.loading.border, f), e.current.style.setProperty(H.loading.text, c), () => {
              e.current?.style.removeProperty(H.enabled.background), e.current?.style.removeProperty(H.enabled.border), e.current?.style.removeProperty(H.enabled.text), e.current?.style.removeProperty(H.hover.background), e.current?.style.removeProperty(H.hover.border), e.current?.style.removeProperty(H.hover.text), e.current?.style.removeProperty(H.focus.background), e.current?.style.removeProperty(H.focus.border), e.current?.style.removeProperty(H.focus.text), e.current?.style.removeProperty(H.pressed.background), e.current?.style.removeProperty(H.pressed.border), e.current?.style.removeProperty(H.pressed.text), e.current?.style.removeProperty(H.loading.background), e.current?.style.removeProperty(H.loading.border), e.current?.style.removeProperty(H.loading.text)
            }
          }, [e.current, t, r, n, o, i, s, a, l, u, ...d])
        };
      var K = r(19403),
        Z = r(4408),
        $ = r(50078),
        G = r(18429),
        Y = r(95362),
        Q = Symbol.for("react.lazy"),
        J = F[" use ".trim().toString()];

      function ee(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === Q && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function te(e) {
        const t = V.forwardRef((e, t) => {
          let {
            children: r,
            ...n
          } = e;
          if (ee(r) && "function" == typeof J && (r = J(r._payload)), V.isValidElement(r)) {
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
                    i = t[n];
                  /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...i
                  } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== V.Fragment && (o.ref = t ? (0, Y.t)(t, e) : e), V.cloneElement(r, o)
          }
          return V.Children.count(r) > 1 ? V.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var re = Symbol("radix.slottable");

      function ne(e) {
        return V.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === re
      }
      var oe = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = function(e) {
              const t = te(e),
                r = V.forwardRef((e, r) => {
                  let {
                    children: n,
                    ...o
                  } = e;
                  ee(n) && "function" == typeof J && (n = J(n._payload));
                  const i = V.Children.toArray(n),
                    s = i.find(ne);
                  if (s) {
                    const e = s.props.children,
                      n = i.map(t => t === s ? V.Children.count(e) > 1 ? V.Children.only(null) : V.isValidElement(e) ? e.props.children : null : t);
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
                ...i
              } = e, s = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, x.jsx)(s, {
                ...i,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        ie = Object.freeze({
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
        se = V.forwardRef((e, t) => (0, x.jsx)(oe.span, {
          ...e,
          ref: t,
          style: {
            ...ie,
            ...e.style
          }
        }));
      se.displayName = "VisuallyHidden";
      var ae = se,
        le = ({
          children: e,
          label: t
        }) => {
          const r = V.Children.only(e);
          return (0, x.jsxs)(x.Fragment, {
            children: [V.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, x.jsx)(ae, {
              children: t
            })]
          })
        };
      le.displayName = "AccessibleIcon";
      var ue = le;

      function de(e) {
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

      function ce(e, t) {
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
          t % 2 ? ce(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = de(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ce(Object(r)).forEach(function(t) {
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
        me = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fe(fe({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) he(u, n, e.defaultVariants) && (r += " " + d);
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
      const ve = "pageMD",
        ye = (0, V.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = ve,
          testId: n,
          ...o
        }, i) => {
          const s = (0, $.zQ)(),
            a = "string" == typeof r ? r : r?.[s] ?? r.default ?? ve,
            l = (0, X.v6)({
              className: me({
                size: a
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, x.jsx)(ue, {
            label: e,
            children: (0, x.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: i,
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
      var ge = r(1556),
        be = r(84531),
        _e = r.t(be, 2);

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

      function Ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xe(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = we(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xe(Object(r)).forEach(function(t) {
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
      var Pe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        je = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ce(Ce({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) Pe(u, n, e.defaultVariants) && (r += " " + d);
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
        Se = je({
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
      je({
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
      var ke = je({
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
        Te = je({
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
        Ee = je({
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
      const Re = (0, V.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: i,
        iconRightLabel: s,
        appearance: a,
        size: l = "MD",
        fullWidth: u = !1,
        isLoading: d = !1,
        spinnerLabel: c,
        override_darkenLuminance: f = .035,
        override_textLuminance: p = .179,
        override_hoverLuminance: h = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: v,
        override_hoverColor: y,
        override_pressedColor: g,
        override_textColor: b,
        ..._
      }, w) => {
        const C = (0, V.useRef)(null),
          O = (0, K.UP)(C, w),
          P = (0, $.zQ)(),
          j = "string" == typeof l ? l : l?.[P] ?? l.default ?? "MD",
          {
            buttonProps: S
          } = (0, K.sL)((0, X.v6)(_, {
            isLoading: d
          }), C);
        U({
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
          enabled: "accent" === a
        }, [t]);
        const k = (0, X.v6)({
            className: Se({
              appearance: a,
              size: j,
              fullWidth: u,
              iconLeft: !!n,
              iconRight: !!i,
              isLoading: d
            }),
            "data-testid": e
          }, S),
          T = n && _e[n],
          E = i && _e[i],
          R = t ? Z.DX : "button",
          D = u && (E || E && T);
        return (0, x.jsxs)(R, {
          ref: O,
          ...k,
          children: [D && (0, x.jsx)("div", {
            className: "foundry_17pcofy15"
          }), T && (0, x.jsx)(T, {
            label: o || "",
            size: j,
            className: (0, ge.clsx)(ke({
              size: j
            }), "foundry_17pcofy11")
          }), (0, x.jsx)(Z.xV, {
            children: r
          }), E && (0, x.jsx)(E, {
            label: s || "",
            size: j,
            className: (0, ge.clsx)(ke({
              size: j
            }), Te({
              fullWidth: u
            }))
          }), d && (0, x.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, x.jsx)(ye, {
              label: c || "",
              size: "inline" + ("LG" === j ? "LG" : "MD"),
              hideTrack: !0,
              className: Ee({
                size: j
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

      function Ne(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ne(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = De(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ne(Object(r)).forEach(function(t) {
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
      var Me = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ze = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ie(Ie({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) Me(u, n, e.defaultVariants) && (r += " " + d);
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
        },
        Ae = ze({
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
        Ve = ze({
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
        Fe = ze({
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
      const qe = (0, V.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: i = !1,
        size: s = "LG",
        children: a,
        isLoading: l = !1,
        spinnerLabel: u,
        override_darkenLuminance: d = .035,
        override_textLuminance: c = .179,
        override_hoverLuminance: f = .08,
        override_pressedLuminance: p = .15,
        override_backgroundColor: h,
        override_hoverColor: m,
        override_pressedColor: v,
        override_textColor: y,
        ...g
      }, b) => {
        const _ = (0, V.useRef)(null),
          w = (0, K.UP)(_, b),
          C = (0, $.zQ)(),
          O = "string" == typeof s ? s : s?.[C] ?? s.default ?? "LG",
          {
            buttonProps: P
          } = (0, K.sL)((0, X.v6)(g, {
            isLoading: l
          }), _);
        U({
          refs: {
            buttonRef: _
          },
          config: {
            textLuminance: c,
            darkenLuminance: d,
            hoverLuminance: f,
            pressedLuminance: p
          },
          overrides: {
            backgroundColor: h,
            hoverColor: m,
            pressedColor: v,
            textColor: y
          },
          enabled: "accent" === o
        }, [t]);
        const j = (0, X.v6)({
            className: Ve({
              appearance: o,
              size: O,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, P),
          S = _e[r],
          k = t ? Z.DX : "button";
        return (0, x.jsxs)(k, {
          ref: w,
          ...j,
          children: [S && (0, x.jsx)(S, {
            label: n || "",
            size: O,
            className: Ae({
              size: O
            })
          }), (0, x.jsx)(Z.xV, {
            children: a
          }), l && (0, x.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, x.jsx)(ye, {
              label: u || "",
              size: O && "SM" !== O ? `inline${O}` : "inlineMD",
              hideTrack: !0,
              className: Fe({
                size: O
              })
            })
          })]
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

      function We(e, t) {
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
          t % 2 ? We(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Be(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : We(Object(r)).forEach(function(t) {
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
      var Ue = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ke = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Xe(Xe({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) Ue(u, n, e.defaultVariants) && (r += " " + d);
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
      const Ze = (0, V.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: i,
        ...s
      }, a) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          u = n || "hr" === l ? void 0 : "separator",
          d = o ? Z.DX : l;
        return (0, x.jsx)(d, {
          ref: a,
          className: (0, ge.clsx)(Ke({
            thickness: r,
            orientation: t
          }), e),
          role: u,
          "aria-orientation": t,
          "data-testid": i,
          ...s
        })
      });

      function $e(e) {
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

      function Ge(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ge(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $e(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ge(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qe(e, t) {
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
        et = "var(--foundry_9dxgbc2)",
        tt = "var(--foundry_9dxgbc3)",
        rt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ye(Ye({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) Je(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qe(e.variantClassNames, e => Qe(e, e => e.split(" ")[0]))
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
        nt = "var(--foundry_9dxgbc0)",
        ot = "var(--foundry_9dxgbc1)";
      const it = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: i = "MD",
        ...s
      }, a) => {
        const l = (0, $.zQ)(),
          u = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          d = (0, X.v6)({
            className: rt({
              size: u
            }),
            "data-testid": t,
            style: (0, B.DI)({
              [nt]: n?.pulseColorBackground,
              [ot]: n?.pulseColorForeground,
              [et]: n?.gradientColorBackground,
              [tt]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          c = e ? Z.DX : "div";
        return (0, x.jsx)(c, {
          ref: a,
          ...d,
          children: e ? (0, x.jsx)(Z.xV, {
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

      function st(e) {
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

      function at(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? at(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = st(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : at(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ut(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var dt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ct = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lt(lt({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) dt(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ut(e.variantClassNames, e => ut(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ft = ct({
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
      const pt = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? Z.DX : "p",
          a = (0, X.v6)({
            className: ft({
              size: n,
              appearance: r
            })
          }, o);
        return (0, x.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var ht = ct({
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
      const mt = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const i = e ? Z.DX : "p",
            s = (0, X.v6)({
              className: ht({
                appearance: r
              })
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        vt = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "h1",
            i = (0, X.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        });
      var yt = ct({
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
      const gt = (0, V.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? Z.DX : `h${t}`,
          s = (0, X.v6)(n, {
            className: yt({
              level: t
            })
          });
        return (0, x.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var bt = ct({
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
      const _t = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? Z.DX : "p",
          a = (0, X.v6)({
            className: bt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, x.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var wt = ct({
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
      const xt = {
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
        Ct = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? Z.DX : xt[r] || "span",
            s = (0, X.v6)(n, {
              className: wt({
                semantic: r
              })
            });
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });

      function Ot(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function Pt(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }
      var jt, St, kt, Tt, Et, Rt, Dt, Nt, It, Lt, Mt, zt, At, Vt, Ft, qt, Bt, Wt = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        Xt = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        Ht = 1e8,
        Ut = 1e-8,
        Kt = 2 * Math.PI,
        Zt = Kt / 4,
        $t = 0,
        Gt = Math.sqrt,
        Yt = Math.cos,
        Qt = Math.sin,
        Jt = function(e) {
          return "string" == typeof e
        },
        er = function(e) {
          return "function" == typeof e
        },
        tr = function(e) {
          return "number" == typeof e
        },
        rr = function(e) {
          return void 0 === e
        },
        nr = function(e) {
          return "object" == typeof e
        },
        or = function(e) {
          return !1 !== e
        },
        ir = function() {
          return "undefined" != typeof window
        },
        sr = function(e) {
          return er(e) || Jt(e)
        },
        ar = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        lr = Array.isArray,
        ur = /random\([^)]+\)/g,
        dr = /,\s*/g,
        cr = /(?:-?\.?\d|\.)+/gi,
        fr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        pr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        hr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        mr = /[+-]=-?[.\d]+/,
        vr = /[^,'"\[\]\s]+/gi,
        yr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        gr = {},
        br = {},
        _r = function(e) {
          return (br = Gr(e, gr)) && Qo
        },
        wr = function(e, t) {
          return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        },
        xr = function(e, t) {
          return !t && console.warn(e)
        },
        Cr = function(e, t) {
          return e && (gr[e] = t) && br && (br[e] = t) || gr
        },
        Or = function() {
          return 0
        },
        Pr = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        jr = {
          suppressEvents: !0,
          kill: !1
        },
        Sr = {
          suppressEvents: !0
        },
        kr = {},
        Tr = [],
        Er = {},
        Rr = {},
        Dr = {},
        Nr = 30,
        Ir = [],
        Lr = "",
        Mr = function(e) {
          var t, r, n = e[0];
          if (nr(n) || er(n) || (e = [e]), !(t = (n._gsap || {}).harness)) {
            for (r = Ir.length; r-- && !Ir[r].targetTest(n););
            t = Ir[r]
          }
          for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new fo(e[r], t))) || e.splice(r, 1);
          return e
        },
        zr = function(e) {
          return e._gsap || Mr(kn(e))[0]._gsap
        },
        Ar = function(e, t, r) {
          return (r = e[t]) && er(r) ? e[t]() : rr(r) && e.getAttribute && e.getAttribute(t) || r
        },
        Vr = function(e, t) {
          return (e = e.split(",")).forEach(t) || e
        },
        Fr = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        qr = function(e) {
          return Math.round(1e7 * e) / 1e7 || 0
        },
        Br = function(e, t) {
          var r = t.charAt(0),
            n = parseFloat(t.substr(2));
          return e = parseFloat(e), "+" === r ? e + n : "-" === r ? e - n : "*" === r ? e * n : e / n
        },
        Wr = function(e, t) {
          for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r;);
          return n < r
        },
        Xr = function() {
          var e, t, r = Tr.length,
            n = Tr.slice(0);
          for (Er = {}, Tr.length = 0, e = 0; e < r; e++)(t = n[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        Hr = function(e) {
          return !!(e._initted || e._startAt || e.add)
        },
        Ur = function(e, t, r, n) {
          Tr.length && !St && Xr(), e.render(t, r, n || !!(St && t < 0 && Hr(e))), Tr.length && !St && Xr()
        },
        Kr = function(e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(vr).length < 2 ? t : Jt(e) ? e.trim() : e
        },
        Zr = function(e) {
          return e
        },
        $r = function(e, t) {
          for (var r in t) r in e || (e[r] = t[r]);
          return e
        },
        Gr = function(e, t) {
          for (var r in t) e[r] = t[r];
          return e
        },
        Yr = function e(t, r) {
          for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = nr(r[n]) ? e(t[n] || (t[n] = {}), r[n]) : r[n]);
          return t
        },
        Qr = function(e, t) {
          var r, n = {};
          for (r in e) r in t || (n[r] = e[r]);
          return n
        },
        Jr = function(e) {
          var t, r = e.parent || Tt,
            n = e.keyframes ? (t = lr(e.keyframes), function(e, r) {
              for (var n in r) n in e || "duration" === n && t || "ease" === n || (e[n] = r[n])
            }) : $r;
          if (or(e.inherit))
            for (; r;) n(e, r.vars.defaults), r = r.parent || r._dp;
          return e
        },
        en = function(e, t, r, n, o) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var i, s = e[n];
          if (o)
            for (i = t[o]; s && s[o] > i;) s = s._prev;
          return s ? (t._next = s._next, s._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = s, t.parent = t._dp = e, t
        },
        tn = function(e, t, r, n) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var o = t._prev,
            i = t._next;
          o ? o._next = i : e[r] === t && (e[r] = i), i ? i._prev = o : e[n] === t && (e[n] = o), t._next = t._prev = t.parent = null
        },
        rn = function(e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        nn = function(e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var r = e; r;) r._dirty = 1, r = r.parent;
          return e
        },
        on = function(e, t, r, n) {
          return e._startAt && (St ? e._startAt.revert(jr) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n))
        },
        sn = function e(t) {
          return !t || t._ts && e(t.parent)
        },
        an = function(e) {
          return e._repeat ? ln(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        ln = function(e, t) {
          var r = Math.floor(e = qr(e / t));
          return e && r === e ? r - 1 : r
        },
        un = function(e, t) {
          return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        },
        dn = function(e) {
          return e._end = qr(e._start + (e._tDur / Math.abs(e._ts || e._rts || Ut) || 0))
        },
        cn = function(e, t) {
          var r = e._dp;
          return r && r.smoothChildTiming && e._ts && (e._start = qr(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), dn(e), r._dirty || nn(r, e)), e
        },
        fn = function(e, t) {
          var r;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = un(e.rawTime(), t), (!t._dur || On(0, t.totalDuration(), r) - t._tTime > Ut) && t.render(r, !0)), nn(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            e._zTime = -1e-8
          }
        },
        pn = function(e, t, r, n) {
          return t.parent && rn(t), t._start = qr((tr(r) ? r : r || e !== Tt ? wn(e, r, t) : e._time) + t._delay), t._end = qr(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), en(e, t, "_first", "_last", e._sort ? "_start" : 0), yn(t) || (e._recent = t), n || fn(e, t), e._ts < 0 && cn(e, e._tTime), e
        },
        hn = function(e, t) {
          return (gr.ScrollTrigger || wr("scrollTrigger", t)) && gr.ScrollTrigger.create(t, e)
        },
        mn = function(e, t, r, n, o) {
          return _o(e, t, o), e._initted ? !r && e._pt && !St && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && It !== Qn.frame ? (Tr.push(e), e._lazy = [o, n], 1) : void 0 : 1
        },
        vn = function e(t) {
          var r = t.parent;
          return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || e(r))
        },
        yn = function(e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t
        },
        gn = function(e, t, r, n) {
          var o = e._repeat,
            i = qr(t) || 0,
            s = e._tTime / e._tDur;
          return s && !n && (e._time *= i / e._dur), e._dur = i, e._tDur = o ? o < 0 ? 1e10 : qr(i * (o + 1) + e._rDelay * o) : i, s > 0 && !n && cn(e, e._tTime = e._tDur * s), e.parent && dn(e), r || nn(e.parent, e), e
        },
        bn = function(e) {
          return e instanceof ho ? nn(e) : gn(e, e._dur)
        },
        _n = {
          _start: 0,
          endTime: Or,
          totalDuration: Or
        },
        wn = function e(t, r, n) {
          var o, i, s, a = t.labels,
            l = t._recent || _n,
            u = t.duration() >= Ht ? l.endTime(!1) : t._dur;
          return Jt(r) && (isNaN(r) || r in a) ? (i = r.charAt(0), s = "%" === r.substr(-1), o = r.indexOf("="), "<" === i || ">" === i ? (o >= 0 && (r = r.replace(/=/, "")), ("<" === i ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (o < 0 ? l : n).totalDuration() / 100 : 1)) : o < 0 ? (r in a || (a[r] = u), a[r]) : (i = parseFloat(r.charAt(o - 1) + r.substr(o + 1)), s && n && (i = i / 100 * (lr(n) ? n[0] : n).totalDuration()), o > 1 ? e(t, r.substr(0, o - 1), n) + i : u + i)) : null == r ? u : +r
        },
        xn = function(e, t, r) {
          var n, o, i = tr(t[1]),
            s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
          if (i && (a.duration = t[1]), a.parent = r, e) {
            for (n = a, o = r; o && !("immediateRender" in n);) n = o.vars.defaults || {}, o = or(o.vars.inherit) && o.parent;
            a.immediateRender = or(n.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
          }
          return new Po(t[0], a, t[s + 1])
        },
        Cn = function(e, t) {
          return e || 0 === e ? t(e) : t
        },
        On = function(e, t, r) {
          return r < e ? e : r > t ? t : r
        },
        Pn = function(e, t) {
          return Jt(e) && (t = yr.exec(e)) ? t[1] : ""
        },
        jn = [].slice,
        Sn = function(e, t) {
          return e && nr(e) && "length" in e && (!t && !e.length || e.length - 1 in e && nr(e[0])) && !e.nodeType && e !== Et
        },
        kn = function(e, t, r) {
          return kt && !t && kt.selector ? kt.selector(e) : !Jt(e) || r || !Rt && Jn() ? lr(e) ? function(e, t, r) {
            return void 0 === r && (r = []), e.forEach(function(e) {
              var n;
              return Jt(e) && !t || Sn(e, 1) ? (n = r).push.apply(n, kn(e)) : r.push(e)
            }) || r
          }(e, r) : Sn(e) ? jn.call(e, 0) : e ? [e] : [] : jn.call((t || Dt).querySelectorAll(e), 0)
        },
        Tn = function(e) {
          return e = kn(e)[0] || xr("Invalid scope") || {},
            function(t) {
              var r = e.current || e.nativeElement || e;
              return kn(t, r.querySelectorAll ? r : r === e ? xr("Invalid scope") || Dt.createElement("div") : e)
            }
        },
        En = function(e) {
          return e.sort(function() {
            return .5 - Math.random()
          })
        },
        Rn = function(e) {
          if (er(e)) return e;
          var t = nr(e) ? e : {
              each: e
            },
            r = so(t.ease),
            n = t.from || 0,
            o = parseFloat(t.base) || 0,
            i = {},
            s = n > 0 && n < 1,
            a = isNaN(n) || s,
            l = t.axis,
            u = n,
            d = n;
          return Jt(n) ? u = d = {
              center: .5,
              edges: .5,
              end: 1
            } [n] || 0 : !s && a && (u = n[0], d = n[1]),
            function(e, s, c) {
              var f, p, h, m, v, y, g, b, _, w = (c || t).length,
                x = i[w];
              if (!x) {
                if (!(_ = "auto" === t.grid ? 0 : (t.grid || [1, Ht])[1])) {
                  for (g = -Ht; g < (g = c[_++].getBoundingClientRect().left) && _ < w;);
                  _ < w && _--
                }
                for (x = i[w] = [], f = a ? Math.min(_, w) * u - .5 : n % _, p = _ === Ht ? 0 : a ? w * d / _ - .5 : n / _ | 0, g = 0, b = Ht, y = 0; y < w; y++) h = y % _ - f, m = p - (y / _ | 0), x[y] = v = l ? Math.abs("y" === l ? m : h) : Gt(h * h + m * m), v > g && (g = v), v < b && (b = v);
                "random" === n && En(x), x.max = g - b, x.min = b, x.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (_ > w ? w - 1 : l ? "y" === l ? w / _ : _ : Math.max(_, w / _)) || 0) * ("edges" === n ? -1 : 1), x.b = w < 0 ? o - w : o, x.u = Pn(t.amount || t.each) || 0, r = r && w < 0 ? oo(r) : r
              }
              return w = (x[e] - x.min) / x.max || 0, qr(x.b + (r ? r(w) : w) * x.v) + x.u
            }
        },
        Dn = function(e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function(r) {
            var n = qr(Math.round(parseFloat(r) / e) * e * t);
            return (n - n % 1) / t + (tr(r) ? 0 : Pn(r))
          }
        },
        Nn = function(e, t) {
          var r, n, o = lr(e);
          return !o && nr(e) && (r = o = e.radius || Ht, e.values ? (e = kn(e.values), (n = !tr(e[0])) && (r *= r)) : e = Dn(e.increment)), Cn(t, o ? er(e) ? function(t) {
            return n = e(t), Math.abs(n - t) <= r ? n : t
          } : function(t) {
            for (var o, i, s = parseFloat(n ? t.x : t), a = parseFloat(n ? t.y : 0), l = Ht, u = 0, d = e.length; d--;)(o = n ? (o = e[d].x - s) * o + (i = e[d].y - a) * i : Math.abs(e[d] - s)) < l && (l = o, u = d);
            return u = !r || l <= r ? e[u] : t, n || u === t || tr(t) ? u : u + Pn(t)
          } : Dn(e))
        },
        In = function(e, t, r, n) {
          return Cn(lr(e) ? !t : !0 === r ? !!(r = 0) : !n, function() {
            return lr(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + .99 * r)) / r) * r * n) / n
          })
        },
        Ln = function(e, t, r) {
          return Cn(r, function(r) {
            return e[~~t(r)]
          })
        },
        Mn = function(e) {
          return e.replace(ur, function(e) {
            var t = e.indexOf("[") + 1,
              r = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(dr);
            return In(t ? r : +r[0], t ? 0 : +r[1], +r[2] || 1e-5)
          })
        },
        zn = function(e, t, r, n, o) {
          var i = t - e,
            s = n - r;
          return Cn(o, function(t) {
            return r + ((t - e) / i * s || 0)
          })
        },
        An = function(e, t, r) {
          var n, o, i, s = e.labels,
            a = Ht;
          for (n in s)(o = s[n] - t) < 0 == !!r && o && a > (o = Math.abs(o)) && (i = n, a = o);
          return i
        },
        Vn = function(e, t, r) {
          var n, o, i, s = e.vars,
            a = s[t],
            l = kt,
            u = e._ctx;
          if (a) return n = s[t + "Params"], o = s.callbackScope || e, r && Tr.length && Xr(), u && (kt = u), i = n ? a.apply(o, n) : a.call(o), kt = l, i
        },
        Fn = function(e) {
          return rn(e), e.scrollTrigger && e.scrollTrigger.kill(!!St), e.progress() < 1 && Vn(e, "onInterrupt"), e
        },
        qn = [],
        Bn = function(e) {
          if (e)
            if (e = !e.name && e.default || e, ir() || e.headless) {
              var t = e.name,
                r = er(e),
                n = t && !r && e.init ? function() {
                  this._props = []
                } : e,
                o = {
                  init: Or,
                  render: Io,
                  add: go,
                  kill: Mo,
                  modifier: Lo,
                  rawVars: 0
                },
                i = {
                  targetTest: 0,
                  get: 0,
                  getSetter: Eo,
                  aliases: {},
                  register: 0
                };
              if (Jn(), e !== n) {
                if (Rr[t]) return;
                $r(n, $r(Qr(e, o), i)), Gr(n.prototype, Gr(o, Qr(e, i))), Rr[n.prop = t] = n, e.targetTest && (Ir.push(n), kr[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
              }
              Cr(t, n), e.register && e.register(Qo, n, Vo)
            } else qn.push(e)
        },
        Wn = 255,
        Xn = {
          aqua: [0, Wn, Wn],
          lime: [0, Wn, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, Wn],
          navy: [0, 0, 128],
          white: [Wn, Wn, Wn],
          olive: [128, 128, 0],
          yellow: [Wn, Wn, 0],
          orange: [Wn, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [Wn, 0, 0],
          pink: [Wn, 192, 203],
          cyan: [0, Wn, Wn],
          transparent: [Wn, Wn, Wn, 0]
        },
        Hn = function(e, t, r) {
          return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (r - t) * e * 6 : e < .5 ? r : 3 * e < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * Wn + .5 | 0
        },
        Un = function(e, t, r) {
          var n, o, i, s, a, l, u, d, c, f, p = e ? tr(e) ? [e >> 16, e >> 8 & Wn, e & Wn] : 0 : Xn.black;
          if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Xn[e]) p = Xn[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (n = e.charAt(1), o = e.charAt(2), i = e.charAt(3), e = "#" + n + n + o + o + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & Wn, p & Wn, parseInt(e.substr(7), 16) / 255];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & Wn, e & Wn]
            } else if ("hsl" === e.substr(0, 3))
              if (p = f = e.match(cr), t) {
                if (~e.indexOf("=")) return p = e.match(fr), r && p.length < 4 && (p[3] = 1), p
              } else s = +p[0] % 360 / 360, a = +p[1] / 100, n = 2 * (l = +p[2] / 100) - (o = l <= .5 ? l * (a + 1) : l + a - l * a), p.length > 3 && (p[3] *= 1), p[0] = Hn(s + 1 / 3, n, o), p[1] = Hn(s, n, o), p[2] = Hn(s - 1 / 3, n, o);
            else p = e.match(cr) || Xn.transparent;
            p = p.map(Number)
          }
          return t && !f && (n = p[0] / Wn, o = p[1] / Wn, i = p[2] / Wn, l = ((u = Math.max(n, o, i)) + (d = Math.min(n, o, i))) / 2, u === d ? s = a = 0 : (c = u - d, a = l > .5 ? c / (2 - u - d) : c / (u + d), s = u === n ? (o - i) / c + (o < i ? 6 : 0) : u === o ? (i - n) / c + 2 : (n - o) / c + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * l + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        Kn = function(e) {
          var t = [],
            r = [],
            n = -1;
          return e.split($n).forEach(function(e) {
            var o = e.match(pr) || [];
            t.push.apply(t, o), r.push(n += o.length + 1)
          }), t.c = r, t
        },
        Zn = function(e, t, r) {
          var n, o, i, s, a = "",
            l = (e + a).match($n),
            u = t ? "hsla(" : "rgba(",
            d = 0;
          if (!l) return e;
          if (l = l.map(function(e) {
              return (e = Un(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            }), r && (i = Kn(e), (n = r.c).join(a) !== i.c.join(a)))
            for (s = (o = e.replace($n, "1").split(pr)).length - 1; d < s; d++) a += o[d] + (~n.indexOf(d) ? l.shift() || u + "0,0,0,0)" : (i.length ? i : l.length ? l : r).shift());
          if (!o)
            for (s = (o = e.split($n)).length - 1; d < s; d++) a += o[d] + l[d];
          return a + o[s]
        },
        $n = function() {
          var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in Xn) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        Gn = /hsl[a]?\(/,
        Yn = function(e) {
          var t, r = e.join(" ");
          if ($n.lastIndex = 0, $n.test(r)) return t = Gn.test(r), e[1] = Zn(e[1], t), e[0] = Zn(e[0], t, Kn(e[1])), !0
        },
        Qn = function() {
          var e, t, r, n, o, i, s = Date.now,
            a = 500,
            l = 33,
            u = s(),
            d = u,
            c = 1e3 / 240,
            f = c,
            p = [],
            h = function r(h) {
              var m, v, y, g, b = s() - d,
                _ = !0 === h;
              if ((b > a || b < 0) && (u += b - l), ((m = (y = (d += b) - u) - f) > 0 || _) && (g = ++n.frame, o = y - 1e3 * n.time, n.time = y /= 1e3, f += m + (m >= c ? 4 : c - m), v = 1), _ || (e = t(r)), v)
                for (i = 0; i < p.length; i++) p[i](y, o, g, h)
            };
          return n = {
            time: 0,
            frame: 0,
            tick: function() {
              h(!0)
            },
            deltaRatio: function(e) {
              return o / (1e3 / (e || 60))
            },
            wake: function() {
              Nt && (!Rt && ir() && (Et = Rt = window, Dt = Et.document || {}, gr.gsap = Qo, (Et.gsapVersions || (Et.gsapVersions = [])).push(Qo.version), _r(br || Et.GreenSockGlobals || !Et.gsap && Et || {}), qn.forEach(Bn)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, e && n.sleep(), t = r || function(e) {
                return setTimeout(e, f - 1e3 * n.time + 1 | 0)
              }, Mt = 1, h(2))
            },
            sleep: function() {
              (r ? cancelAnimationFrame : clearTimeout)(e), Mt = 0, t = Or
            },
            lagSmoothing: function(e, t) {
              a = e || 1 / 0, l = Math.min(t || 33, a)
            },
            fps: function(e) {
              c = 1e3 / (e || 240), f = 1e3 * n.time + c
            },
            add: function(e, t, r) {
              var o = t ? function(t, r, i, s) {
                e(t, r, i, s), n.remove(o)
              } : e;
              return n.remove(e), p[r ? "unshift" : "push"](o), Jn(), o
            },
            remove: function(e, t) {
              ~(t = p.indexOf(e)) && p.splice(t, 1) && i >= t && i--
            },
            _listeners: p
          }, n
        }(),
        Jn = function() {
          return !Mt && Qn.wake()
        },
        eo = {},
        to = /^[\d.\-M][\d.\-,\s]/,
        ro = /["']/g,
        no = function(e) {
          for (var t, r, n, o = {}, i = e.substr(1, e.length - 3).split(":"), s = i[0], a = 1, l = i.length; a < l; a++) r = i[a], t = a !== l - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, t), o[s] = isNaN(n) ? n.replace(ro, "").trim() : +n, s = r.substr(t + 1).trim();
          return o
        },
        oo = function(e) {
          return function(t) {
            return 1 - e(1 - t)
          }
        },
        io = function e(t, r) {
          for (var n, o = t._first; o;) o instanceof ho ? e(o, r) : !o.vars.yoyoEase || o._yoyo && o._repeat || o._yoyo === r || (o.timeline ? e(o.timeline, r) : (n = o._ease, o._ease = o._yEase, o._yEase = n, o._yoyo = r)), o = o._next
        },
        so = function(e, t) {
          return e && (er(e) ? e : eo[e] || function(e) {
            var t, r, n, o, i = (e + "").split("("),
              s = eo[i[0]];
            return s && i.length > 1 && s.config ? s.config.apply(null, ~e.indexOf("{") ? [no(i[1])] : (t = e, r = t.indexOf("(") + 1, n = t.indexOf(")"), o = t.indexOf("(", r), t.substring(r, ~o && o < n ? t.indexOf(")", n + 1) : n)).split(",").map(Kr)) : eo._CE && to.test(e) ? eo._CE("", e) : s
          }(e)) || t
        },
        ao = function(e, t, r, n) {
          void 0 === r && (r = function(e) {
            return 1 - t(1 - e)
          }), void 0 === n && (n = function(e) {
            return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
          });
          var o, i = {
            easeIn: t,
            easeOut: r,
            easeInOut: n
          };
          return Vr(e, function(e) {
            for (var t in eo[e] = gr[e] = i, eo[o = e.toLowerCase()] = r, i) eo[o + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = eo[e + "." + t] = i[t]
          }), i
        },
        lo = function(e) {
          return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
          }
        },
        uo = function e(t, r, n) {
          var o = r >= 1 ? r : 1,
            i = (n || (t ? .3 : .45)) / (r < 1 ? r : 1),
            s = i / Kt * (Math.asin(1 / o) || 0),
            a = function(e) {
              return 1 === e ? 1 : o * Math.pow(2, -10 * e) * Qt((e - s) * i) + 1
            },
            l = "out" === t ? a : "in" === t ? function(e) {
              return 1 - a(1 - e)
            } : lo(a);
          return i = Kt / i, l.config = function(r, n) {
            return e(t, r, n)
          }, l
        },
        co = function e(t, r) {
          void 0 === r && (r = 1.70158);
          var n = function(e) {
              return e ? --e * e * ((r + 1) * e + r) + 1 : 0
            },
            o = "out" === t ? n : "in" === t ? function(e) {
              return 1 - n(1 - e)
            } : lo(n);
          return o.config = function(r) {
            return e(t, r)
          }, o
        };
      Vr("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var r = t < 5 ? t + 1 : t;
        ao(e + ",Power" + (r - 1), t ? function(e) {
          return Math.pow(e, r)
        } : function(e) {
          return e
        }, function(e) {
          return 1 - Math.pow(1 - e, r)
        }, function(e) {
          return e < .5 ? Math.pow(2 * e, r) / 2 : 1 - Math.pow(2 * (1 - e), r) / 2
        })
      }), eo.Linear.easeNone = eo.none = eo.Linear.easeIn, ao("Elastic", uo("in"), uo("out"), uo()), zt = 7.5625, Ft = 2 * (Vt = 1 / (At = 2.75)), qt = 2.5 * Vt, ao("Bounce", function(e) {
        return 1 - Bt(1 - e)
      }, Bt = function(e) {
        return e < Vt ? zt * e * e : e < Ft ? zt * Math.pow(e - 1.5 / At, 2) + .75 : e < qt ? zt * (e -= 2.25 / At) * e + .9375 : zt * Math.pow(e - 2.625 / At, 2) + .984375
      }), ao("Expo", function(e) {
        return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e)
      }), ao("Circ", function(e) {
        return -(Gt(1 - e * e) - 1)
      }), ao("Sine", function(e) {
        return 1 === e ? 1 : 1 - Yt(e * Zt)
      }), ao("Back", co("in"), co("out"), co()), eo.SteppedEase = eo.steps = gr.SteppedEase = {
        config: function(e, t) {
          void 0 === e && (e = 1);
          var r = 1 / e,
            n = e + (t ? 0 : 1),
            o = t ? 1 : 0;
          return function(e) {
            return ((n * On(0, .99999999, e) | 0) + o) * r
          }
        }
      }, Xt.ease = eo["quad.out"], Vr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return Lr += e + "," + e + "Params,"
      });
      var fo = function(e, t) {
          this.id = $t++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Ar, this.set = t ? t.getSetter : Eo
        },
        po = function() {
          function e(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, gn(this, +e.duration, 1, 1), this.data = e.data, kt && (this._ctx = kt, kt.data.push(this)), Mt || Qn.wake()
          }
          var t = e.prototype;
          return t.delay = function(e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
          }, t.duration = function(e) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
          }, t.totalDuration = function(e) {
            return arguments.length ? (this._dirty = 0, gn(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, t.totalTime = function(e, t) {
            if (Jn(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (cn(this, e), !r._dp || r.parent || fn(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && pn(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === Ut || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), Ur(this, e, t)), this
          }, t.time = function(e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + an(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
          }, t.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
          }, t.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + an(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
          }, t.iteration = function(e, t) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * r, t) : this._repeat ? ln(this._tTime, r) + 1 : 1
          }, t.timeScale = function(e, t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var r = this.parent && this._ts ? un(this.parent._time, this) : this._tTime;
            return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(On(-Math.abs(this._delay), this.totalDuration(), r), !1 !== t), dn(this),
              function(e) {
                for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                return e
              }(this)
          }, t.paused = function(e) {
            return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Jn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Ut && (this._tTime -= Ut)))), this) : this._ps
          }, t.startTime = function(e) {
            if (arguments.length) {
              this._start = qr(e);
              var t = this.parent || this._dp;
              return t && (t._sort || !this.parent) && pn(t, this, this._start - this._delay), this
            }
            return this._start
          }, t.endTime = function(e) {
            return this._start + (or(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, t.rawTime = function(e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? un(t.rawTime(e), this) : this._tTime : this._tTime
          }, t.revert = function(e) {
            void 0 === e && (e = Sr);
            var t = St;
            return St = e, Hr(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), St = t, this
          }, t.globalTime = function(e) {
            for (var t = this, r = arguments.length ? e : t.rawTime(); t;) r = t._start + r / (Math.abs(t._ts) || 1), t = t._dp;
            return !this.parent && this._sat ? this._sat.globalTime(e) : r
          }, t.repeat = function(e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, bn(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, t.repeatDelay = function(e) {
            if (arguments.length) {
              var t = this._time;
              return this._rDelay = e, bn(this), t ? this.time(t) : this
            }
            return this._rDelay
          }, t.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
          }, t.seek = function(e, t) {
            return this.totalTime(wn(this, e), or(t))
          }, t.restart = function(e, t) {
            return this.play().totalTime(e ? -this._delay : 0, or(t)), this._dur || (this._zTime = -1e-8), this
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
              r = this._start;
            return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= r && e < this.endTime(!0) - Ut))
          }, t.eventCallback = function(e, t, r) {
            var n = this.vars;
            return arguments.length > 1 ? (t ? (n[e] = t, r && (n[e + "Params"] = r), "onUpdate" === e && (this._onUpdate = t)) : delete n[e], this) : n[e]
          }, t.then = function(e) {
            var t = this,
              r = t._prom;
            return new Promise(function(n) {
              var o = er(e) ? e : Zr,
                i = function() {
                  var e = t.then;
                  t.then = null, r && r(), er(o) && (o = o(t)) && (o.then || o === t) && (t.then = e), n(o), t.then = e
                };
              t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? i() : t._prom = i
            })
          }, t.kill = function() {
            Fn(this)
          }, e
        }();
      $r(po.prototype, {
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
      var ho = function(e) {
        function t(t, r) {
          var n;
          return void 0 === t && (t = {}), (n = e.call(this, t) || this).labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = or(t.sortChildren), Tt && pn(t.parent || Tt, Ot(n), r), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && hn(Ot(n), t.scrollTrigger), n
        }
        Pt(t, e);
        var r = t.prototype;
        return r.to = function(e, t, r) {
          return xn(0, arguments, this), this
        }, r.from = function(e, t, r) {
          return xn(1, arguments, this), this
        }, r.fromTo = function(e, t, r, n) {
          return xn(2, arguments, this), this
        }, r.set = function(e, t, r) {
          return t.duration = 0, t.parent = this, Jr(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Po(e, t, wn(this, r), 1), this
        }, r.call = function(e, t, r) {
          return pn(this, Po.delayedCall(0, e, t), r)
        }, r.staggerTo = function(e, t, r, n, o, i, s) {
          return r.duration = t, r.stagger = r.stagger || n, r.onComplete = i, r.onCompleteParams = s, r.parent = this, new Po(e, r, wn(this, o)), this
        }, r.staggerFrom = function(e, t, r, n, o, i, s) {
          return r.runBackwards = 1, Jr(r).immediateRender = or(r.immediateRender), this.staggerTo(e, t, r, n, o, i, s)
        }, r.staggerFromTo = function(e, t, r, n, o, i, s, a) {
          return n.startAt = r, Jr(n).immediateRender = or(n.immediateRender), this.staggerTo(e, t, n, o, i, s, a)
        }, r.render = function(e, t, r) {
          var n, o, i, s, a, l, u, d, c, f, p, h, m = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            g = e <= 0 ? 0 : qr(e),
            b = this._zTime < 0 != e < 0 && (this._initted || !y);
          if (this !== Tt && g > v && e >= 0 && (g = v), g !== this._tTime || r || b) {
            if (m !== this._time && y && (g += this._time - m, e += this._time - m), n = g, c = this._start, l = !(d = this._ts), b && (y || (m = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (p = this._yoyo, a = y + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * a + e, t, r);
              if (n = qr(g % a), g === v ? (s = this._repeat, n = y) : ((s = ~~(f = qr(g / a))) && s === f && (n = y, s--), n > y && (n = y)), f = ln(this._tTime, a), !m && this._tTime && f !== s && this._tTime - f * a - this._dur <= 0 && (f = s), p && 1 & s && (n = y - n, h = 1), s !== f && !this._lock) {
                var _ = p && 1 & f,
                  w = _ === (p && 1 & s);
                if (s < f && (_ = !_), m = _ ? 0 : g % y ? y : g, this._lock = 1, this.render(m || (h ? 0 : qr(s * a)), t, !y)._lock = 0, this._tTime = g, !t && this.parent && Vn(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1, f = s), m && m !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (y = this._dur, v = this._tDur, w && (this._lock = 2, m = _ ? y : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                io(this, h)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(e, t, r) {
                var n;
                if (r > t)
                  for (n = e._first; n && n._start <= r;) {
                    if ("isPause" === n.data && n._start > t) return n;
                    n = n._next
                  } else
                    for (n = e._last; n && n._start >= r;) {
                      if ("isPause" === n.data && n._start < t) return n;
                      n = n._prev
                    }
              }(this, qr(m), qr(n)), u && (g -= n - (n = u._start))), this._tTime = g, this._time = n, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, m = 0), !m && g && y && !t && !f && (Vn(this, "onStart"), this._tTime !== g)) return this;
            if (n >= m && e >= 0)
              for (o = this._first; o;) {
                if (i = o._next, (o._act || n >= o._start) && o._ts && u !== o) {
                  if (o.parent !== this) return this.render(e, t, r);
                  if (o.render(o._ts > 0 ? (n - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (n - o._start) * o._ts, t, r), n !== this._time || !this._ts && !l) {
                    u = 0, i && (g += this._zTime = -1e-8);
                    break
                  }
                }
                o = i
              } else {
                o = this._last;
                for (var x = e < 0 ? e : n; o;) {
                  if (i = o._prev, (o._act || x <= o._end) && o._ts && u !== o) {
                    if (o.parent !== this) return this.render(e, t, r);
                    if (o.render(o._ts > 0 ? (x - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (x - o._start) * o._ts, t, r || St && Hr(o)), n !== this._time || !this._ts && !l) {
                      u = 0, i && (g += this._zTime = x ? -1e-8 : Ut);
                      break
                    }
                  }
                  o = i
                }
              }
            if (u && !t && (this.pause(), u.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1, this._ts)) return this._start = c, dn(this), this.render(e, t, r);
            this._onUpdate && !t && Vn(this, "onUpdate", !0), (g === v && this._tTime >= this.totalDuration() || !g && m) && (c !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || ((e || !y) && (g === v && this._ts > 0 || !g && this._ts < 0) && rn(this, 1), t || e < 0 && !m || !g && !m && v || (Vn(this, g === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, r.add = function(e, t) {
          var r = this;
          if (tr(t) || (t = wn(this, t, e)), !(e instanceof po)) {
            if (lr(e)) return e.forEach(function(e) {
              return r.add(e, t)
            }), this;
            if (Jt(e)) return this.addLabel(e, t);
            if (!er(e)) return this;
            e = Po.delayedCall(0, e)
          }
          return this !== e ? pn(this, e, t) : this
        }, r.getChildren = function(e, t, r, n) {
          void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === n && (n = -Ht);
          for (var o = [], i = this._first; i;) i._start >= n && (i instanceof Po ? t && o.push(i) : (r && o.push(i), e && o.push.apply(o, i.getChildren(!0, t, r)))), i = i._next;
          return o
        }, r.getById = function(e) {
          for (var t = this.getChildren(1, 1, 1), r = t.length; r--;)
            if (t[r].vars.id === e) return t[r]
        }, r.remove = function(e) {
          return Jt(e) ? this.removeLabel(e) : er(e) ? this.killTweensOf(e) : (e.parent === this && tn(this, e), e === this._recent && (this._recent = this._last), nn(this))
        }, r.totalTime = function(t, r) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = qr(Qn.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(e, t) {
          return this.labels[e] = wn(this, t), this
        }, r.removeLabel = function(e) {
          return delete this.labels[e], this
        }, r.addPause = function(e, t, r) {
          var n = Po.delayedCall(0, t || Or, r);
          return n.data = "isPause", this._hasPause = 1, pn(this, n, wn(this, e))
        }, r.removePause = function(e) {
          var t = this._first;
          for (e = wn(this, e); t;) t._start === e && "isPause" === t.data && rn(t), t = t._next
        }, r.killTweensOf = function(e, t, r) {
          for (var n = this.getTweensOf(e, r), o = n.length; o--;) mo !== n[o] && n[o].kill(e, t);
          return this
        }, r.getTweensOf = function(e, t) {
          for (var r, n = [], o = kn(e), i = this._first, s = tr(t); i;) i instanceof Po ? Wr(i._targets, o) && (s ? (!mo || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && n.push(i) : (r = i.getTweensOf(o, t)).length && n.push.apply(n, r), i = i._next;
          return n
        }, r.tweenTo = function(e, t) {
          t = t || {};
          var r, n = this,
            o = wn(n, e),
            i = t,
            s = i.startAt,
            a = i.onStart,
            l = i.onStartParams,
            u = i.immediateRender,
            d = Po.to(n, $r({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration: t.duration || Math.abs((o - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || Ut,
              onStart: function() {
                if (n.pause(), !r) {
                  var e = t.duration || Math.abs((o - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                  d._dur !== e && gn(d, e, 0, 1).render(d._time, !0, !0), r = 1
                }
                a && a.apply(d, l || [])
              }
            }, t));
          return u ? d.render(0) : d
        }, r.tweenFromTo = function(e, t, r) {
          return this.tweenTo(t, $r({
            startAt: {
              time: wn(this, e)
            }
          }, r))
        }, r.recent = function() {
          return this._recent
        }, r.nextLabel = function(e) {
          return void 0 === e && (e = this._time), An(this, wn(this, e))
        }, r.previousLabel = function(e) {
          return void 0 === e && (e = this._time), An(this, wn(this, e), 1)
        }, r.currentLabel = function(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + Ut)
        }, r.shiftChildren = function(e, t, r) {
          void 0 === r && (r = 0);
          var n, o = this._first,
            i = this.labels;
          for (e = qr(e); o;) o._start >= r && (o._start += e, o._end += e), o = o._next;
          if (t)
            for (n in i) i[n] >= r && (i[n] += e);
          return nn(this)
        }, r.invalidate = function(t) {
          var r = this._first;
          for (this._lock = 0; r;) r.invalidate(t), r = r._next;
          return e.prototype.invalidate.call(this, t)
        }, r.clear = function(e) {
          void 0 === e && (e = !0);
          for (var t, r = this._first; r;) t = r._next, this.remove(r), r = t;
          return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), nn(this)
        }, r.totalDuration = function(e) {
          var t, r, n, o = 0,
            i = this,
            s = i._last,
            a = Ht;
          if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e));
          if (i._dirty) {
            for (n = i.parent; s;) t = s._prev, s._dirty && s.totalDuration(), (r = s._start) > a && i._sort && s._ts && !i._lock ? (i._lock = 1, pn(i, s, r - s._delay, 1)._lock = 0) : a = r, r < 0 && s._ts && (o -= r, (!n && !i._dp || n && n.smoothChildTiming) && (i._start += qr(r / i._ts), i._time -= r, i._tTime -= r), i.shiftChildren(-r, !1, -Infinity), a = 0), s._end > o && s._ts && (o = s._end), s = t;
            gn(i, i === Tt && i._time > o ? i._time : o, 1, 1), i._dirty = 0
          }
          return i._tDur
        }, t.updateRoot = function(e) {
          if (Tt._ts && (Ur(Tt, un(e, Tt)), It = Qn.frame), Qn.frame >= Nr) {
            Nr += Wt.autoSleep || 120;
            var t = Tt._first;
            if ((!t || !t._ts) && Wt.autoSleep && Qn._listeners.length < 2) {
              for (; t && !t._ts;) t = t._next;
              t || Qn.sleep()
            }
          }
        }, t
      }(po);
      $r(ho.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var mo, vo, yo = function(e, t, r, n, o, i, s) {
          var a, l, u, d, c, f, p, h, m = new Vo(this._pt, e, t, 0, 1, No, null, o),
            v = 0,
            y = 0;
          for (m.b = r, m.e = n, r += "", (p = ~(n += "").indexOf("random(")) && (n = Mn(n)), i && (i(h = [r, n], e, t), r = h[0], n = h[1]), l = r.match(hr) || []; a = hr.exec(n);) d = a[0], c = n.substring(v, a.index), u ? u = (u + 1) % 5 : "rgba(" === c.substr(-5) && (u = 1), d !== l[y++] && (f = parseFloat(l[y - 1]) || 0, m._pt = {
            _next: m._pt,
            p: c || 1 === y ? c : ",",
            s: f,
            c: "=" === d.charAt(1) ? Br(f, d) - f : parseFloat(d) - f,
            m: u && u < 4 ? Math.round : 0
          }, v = hr.lastIndex);
          return m.c = v < n.length ? n.substring(v, n.length) : "", m.fp = s, (mr.test(n) || p) && (m.e = 0), this._pt = m, m
        },
        go = function(e, t, r, n, o, i, s, a, l, u) {
          er(n) && (n = n(o || 0, e, i));
          var d, c = e[t],
            f = "get" !== r ? r : er(c) ? l ? e[t.indexOf("set") || !er(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : c,
            p = er(c) ? l ? ko : So : jo;
          if (Jt(n) && (~n.indexOf("random(") && (n = Mn(n)), "=" === n.charAt(1) && ((d = Br(f, n) + (Pn(f) || 0)) || 0 === d) && (n = d)), !u || f !== n || vo) return isNaN(f * n) || "" === n ? (!c && !(t in e) && wr(t, n), yo.call(this, e, t, f, n, p, a || Wt.stringFilter, l)) : (d = new Vo(this._pt, e, t, +f || 0, n - (f || 0), "boolean" == typeof c ? Do : Ro, 0, p), l && (d.fp = l), s && d.modifier(s, this, e), this._pt = d)
        },
        bo = function(e, t, r, n, o, i) {
          var s, a, l, u;
          if (Rr[e] && !1 !== (s = new Rr[e]).init(o, s.rawVars ? t[e] : function(e, t, r, n, o) {
              if (er(e) && (e = xo(e, o, t, r, n)), !nr(e) || e.style && e.nodeType || lr(e) || ar(e)) return Jt(e) ? xo(e, o, t, r, n) : e;
              var i, s = {};
              for (i in e) s[i] = xo(e[i], o, t, r, n);
              return s
            }(t[e], n, o, i, r), r, n, i) && (r._pt = a = new Vo(r._pt, o, e, 0, 1, s.render, s, 0, s.priority), r !== Lt))
            for (l = r._ptLookup[r._targets.indexOf(o)], u = s._props.length; u--;) l[s._props[u]] = a;
          return s
        },
        _o = function e(t, r, n) {
          var o, i, s, a, l, u, d, c, f, p, h, m, v, y = t.vars,
            g = y.ease,
            b = y.startAt,
            _ = y.immediateRender,
            w = y.lazy,
            x = y.onUpdate,
            C = y.runBackwards,
            O = y.yoyoEase,
            P = y.keyframes,
            j = y.autoRevert,
            S = t._dur,
            k = t._startAt,
            T = t._targets,
            E = t.parent,
            R = E && "nested" === E.data ? E.vars.targets : T,
            D = "auto" === t._overwrite && !jt,
            N = t.timeline;
          if (N && (!P || !g) && (g = "none"), t._ease = so(g, Xt.ease), t._yEase = O ? oo(so(!0 === O ? g : O, Xt.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !N && !!y.runBackwards, !N || P && !y.stagger) {
            if (m = (c = T[0] ? zr(T[0]).harness : 0) && y[c.prop], o = Qr(y, kr), k && (k._zTime < 0 && k.progress(1), r < 0 && C && _ && !j ? k.render(-1, !0) : k.revert(C && S ? jr : Pr), k._lazy = 0), b) {
              if (rn(t._startAt = Po.set(T, $r({
                  data: "isStart",
                  overwrite: !1,
                  parent: E,
                  immediateRender: !0,
                  lazy: !k && or(w),
                  startAt: null,
                  delay: 0,
                  onUpdate: x && function() {
                    return Vn(t, "onUpdate")
                  },
                  stagger: 0
                }, b))), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (St || !_ && !j) && t._startAt.revert(jr), _ && S && r <= 0 && n <= 0) return void(r && (t._zTime = r))
            } else if (C && S && !k)
              if (r && (_ = !1), s = $r({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: _ && !k && or(w),
                  immediateRender: _,
                  stagger: 0,
                  parent: E
                }, o), m && (s[c.prop] = m), rn(t._startAt = Po.set(T, s)), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (St ? t._startAt.revert(jr) : t._startAt.render(-1, !0)), t._zTime = r, _) {
                if (!r) return
              } else e(t._startAt, Ut, Ut);
            for (t._pt = t._ptCache = 0, w = S && or(w) || w && !S, i = 0; i < T.length; i++) {
              if (d = (l = T[i])._gsap || Mr(T)[i]._gsap, t._ptLookup[i] = p = {}, Er[d.id] && Tr.length && Xr(), h = R === T ? i : R.indexOf(l), c && !1 !== (f = new c).init(l, m || o, t, h, R) && (t._pt = a = new Vo(t._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(e) {
                  p[e] = a
                }), f.priority && (u = 1)), !c || m)
                for (s in o) Rr[s] && (f = bo(s, o, t, h, l, R)) ? f.priority && (u = 1) : p[s] = a = go.call(t, l, s, "get", o[s], h, R, 0, y.stringFilter);
              t._op && t._op[i] && t.kill(l, t._op[i]), D && t._pt && (mo = t, Tt.killTweensOf(l, p, t.globalTime(r)), v = !t.parent, mo = 0), t._pt && w && (Er[d.id] = 1)
            }
            u && Ao(t), t._onInit && t._onInit(t)
          }
          t._onUpdate = x, t._initted = (!t._op || t._pt) && !v, P && r <= 0 && N.render(Ht, !0, !0)
        },
        wo = function(e, t, r, n) {
          var o, i, s = t.ease || n || "power1.inOut";
          if (lr(t)) i = r[e] || (r[e] = []), t.forEach(function(e, r) {
            return i.push({
              t: r / (t.length - 1) * 100,
              v: e,
              e: s
            })
          });
          else
            for (o in t) i = r[o] || (r[o] = []), "ease" === o || i.push({
              t: parseFloat(e),
              v: t[o],
              e: s
            })
        },
        xo = function(e, t, r, n, o) {
          return er(e) ? e.call(t, r, n, o) : Jt(e) && ~e.indexOf("random(") ? Mn(e) : e
        },
        Co = Lr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Oo = {};
      Vr(Co + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
        return Oo[e] = 1
      });
      var Po = function(e) {
        function t(t, r, n, o) {
          var i;
          "number" == typeof r && (n.duration = r, r = n, n = null);
          var s, a, l, u, d, c, f, p, h = (i = e.call(this, o ? r : Jr(r)) || this).vars,
            m = h.duration,
            v = h.delay,
            y = h.immediateRender,
            g = h.stagger,
            b = h.overwrite,
            _ = h.keyframes,
            w = h.defaults,
            x = h.scrollTrigger,
            C = h.yoyoEase,
            O = r.parent || Tt,
            P = (lr(t) || ar(t) ? tr(t[0]) : "length" in r) ? [t] : kn(t);
          if (i._targets = P.length ? Mr(P) : xr("GSAP target " + t + " not found. https://gsap.com", !Wt.nullTargetWarn) || [], i._ptLookup = [], i._overwrite = b, _ || g || sr(m) || sr(v)) {
            if (r = i.vars, (s = i.timeline = new ho({
                data: "nested",
                defaults: w || {},
                targets: O && "nested" === O.data ? O.vars.targets : P
              })).kill(), s.parent = s._dp = Ot(i), s._start = 0, g || sr(m) || sr(v)) {
              if (u = P.length, f = g && Rn(g), nr(g))
                for (d in g) ~Co.indexOf(d) && (p || (p = {}), p[d] = g[d]);
              for (a = 0; a < u; a++)(l = Qr(r, Oo)).stagger = 0, C && (l.yoyoEase = C), p && Gr(l, p), c = P[a], l.duration = +xo(m, Ot(i), a, c, P), l.delay = (+xo(v, Ot(i), a, c, P) || 0) - i._delay, !g && 1 === u && l.delay && (i._delay = v = l.delay, i._start += v, l.delay = 0), s.to(c, l, f ? f(a, c, P) : 0), s._ease = eo.none;
              s.duration() ? m = v = 0 : i.timeline = 0
            } else if (_) {
              Jr($r(s.vars.defaults, {
                ease: "none"
              })), s._ease = so(_.ease || r.ease || "none");
              var j, S, k, T = 0;
              if (lr(_)) _.forEach(function(e) {
                return s.to(P, e, ">")
              }), s.duration();
              else {
                for (d in l = {}, _) "ease" === d || "easeEach" === d || wo(d, _[d], l, _.easeEach);
                for (d in l)
                  for (j = l[d].sort(function(e, t) {
                      return e.t - t.t
                    }), T = 0, a = 0; a < j.length; a++)(k = {
                    ease: (S = j[a]).e,
                    duration: (S.t - (a ? j[a - 1].t : 0)) / 100 * m
                  })[d] = S.v, s.to(P, k, T), T += k.duration;
                s.duration() < m && s.to({}, {
                  duration: m - s.duration()
                })
              }
            }
            m || i.duration(m = s.duration())
          } else i.timeline = 0;
          return !0 !== b || jt || (mo = Ot(i), Tt.killTweensOf(P), mo = 0), pn(O, Ot(i), n), r.reversed && i.reverse(), r.paused && i.paused(!0), (y || !m && !_ && i._start === qr(O._time) && or(y) && sn(Ot(i)) && "nested" !== O.data) && (i._tTime = -1e-8, i.render(Math.max(0, -v) || 0)), x && hn(Ot(i), x), i
        }
        Pt(t, e);
        var r = t.prototype;
        return r.render = function(e, t, r) {
          var n, o, i, s, a, l, u, d, c, f = this._time,
            p = this._tDur,
            h = this._dur,
            m = e < 0,
            v = e > p - Ut && !m ? p : e < Ut ? 0 : e;
          if (h) {
            if (v !== this._tTime || !e || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m || this._lazy) {
              if (n = v, d = this.timeline, this._repeat) {
                if (s = h + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * s + e, t, r);
                if (n = qr(v % s), v === p ? (i = this._repeat, n = h) : (i = ~~(a = qr(v / s))) && i === a ? (n = h, i--) : n > h && (n = h), (l = this._yoyo && 1 & i) && (c = this._yEase, n = h - n), a = ln(this._tTime, s), n === f && !r && this._initted && i === a) return this._tTime = v, this;
                i !== a && (d && this._yEase && io(d, l), this.vars.repeatRefresh && !l && !this._lock && n !== s && this._initted && (this._lock = r = 1, this.render(qr(s * i), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (mn(this, m ? e : n, r, t, v)) return this._tTime = 0, this;
                if (!(f === this._time || r && this.vars.repeatRefresh && i !== a)) return this;
                if (h !== this._dur) return this.render(e, t, r)
              }
              if (this._tTime = v, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (c || this._ease)(n / h), this._from && (this.ratio = u = 1 - u), !f && v && !t && !a && (Vn(this, "onStart"), this._tTime !== v)) return this;
              for (o = this._pt; o;) o.r(u, o.d), o = o._next;
              d && d.render(e < 0 ? e : d._dur * d._ease(n / this._dur), t, r) || this._startAt && (this._zTime = e), this._onUpdate && !t && (m && on(this, e, 0, r), Vn(this, "onUpdate")), this._repeat && i !== a && this.vars.onRepeat && !t && this.parent && Vn(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (m && !this._onUpdate && on(this, e, 0, !0), (e || !h) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && rn(this, 1), t || m && !f || !(v || f || l) || (Vn(this, v === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < p && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(e, t, r, n) {
            var o, i, s, a = e.ratio,
              l = t < 0 || !t && (!e._start && vn(e) && (e._initted || !yn(e)) || (e._ts < 0 || e._dp._ts < 0) && !yn(e)) ? 0 : 1,
              u = e._rDelay,
              d = 0;
            if (u && e._repeat && (d = On(0, e._tDur, t), i = ln(d, u), e._yoyo && 1 & i && (l = 1 - l), i !== ln(e._tTime, u) && (a = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== a || St || n || e._zTime === Ut || !t && e._zTime) {
              if (!e._initted && mn(e, t, n, r, d)) return;
              for (s = e._zTime, e._zTime = t || (r ? Ut : 0), r || (r = t && !s), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = d, o = e._pt; o;) o.r(l, o.d), o = o._next;
              t < 0 && on(e, t, 0, !0), e._onUpdate && !r && Vn(e, "onUpdate"), d && e._repeat && !r && e.parent && Vn(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && rn(e, 1), r || St || (Vn(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = t)
          }(this, e, t, r);
          return this
        }, r.targets = function() {
          return this._targets
        }, r.invalidate = function(t) {
          return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
        }, r.resetTo = function(e, t, r, n, o) {
          Mt || Qn.wake(), this._ts || this.play();
          var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || _o(this, i),
            function(e, t, r, n, o, i, s, a) {
              var l, u, d, c, f = (e._pt && e._ptCache || (e._ptCache = {}))[t];
              if (!f)
                for (f = e._ptCache[t] = [], d = e._ptLookup, c = e._targets.length; c--;) {
                  if ((l = d[c][t]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                  if (!l) return vo = 1, e.vars[t] = "+=0", _o(e, s), vo = 0, a ? xr(t + " not eligible for reset") : 1;
                  f.push(l)
                }
              for (c = f.length; c--;)(l = (u = f[c])._pt || u).s = !n && 0 !== n || o ? l.s + (n || 0) + i * l.c : n, l.c = r - l.s, u.e && (u.e = Fr(r) + Pn(u.e)), u.b && (u.b = l.s + Pn(u.b))
            }(this, e, t, r, n, this._ease(i / this._dur), i, o) ? this.resetTo(e, t, r, n, 1) : (cn(this, 0), this.parent || en(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(e, t) {
          if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? Fn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!St), this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, mo && !0 !== mo.vars.overwrite)._first || Fn(this), this.parent && r !== this.timeline.totalDuration() && gn(this, this._dur * this.timeline._tDur / r, 0, 1), this
          }
          var n, o, i, s, a, l, u, d = this._targets,
            c = e ? kn(e) : d,
            f = this._ptLookup,
            p = this._pt;
          if ((!t || "all" === t) && function(e, t) {
              for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r];);
              return r < 0
            }(d, c)) return "all" === t && (this._pt = 0), Fn(this);
          for (n = this._op = this._op || [], "all" !== t && (Jt(t) && (a = {}, Vr(t, function(e) {
              return a[e] = 1
            }), t = a), t = function(e, t) {
              var r, n, o, i, s = e[0] ? zr(e[0]).harness : 0,
                a = s && s.aliases;
              if (!a) return t;
              for (n in r = Gr({}, t), a)
                if (n in r)
                  for (o = (i = a[n].split(",")).length; o--;) r[i[o]] = r[n];
              return r
            }(d, t)), u = d.length; u--;)
            if (~c.indexOf(d[u]))
              for (a in o = f[u], "all" === t ? (n[u] = t, s = o, i = {}) : (i = n[u] = n[u] || {}, s = t), s)(l = o && o[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || tn(this, l, "_pt"), delete o[a]), "all" !== i && (i[a] = 1);
          return this._initted && !this._pt && p && Fn(this), this
        }, t.to = function(e, r) {
          return new t(e, r, arguments[2])
        }, t.from = function(e, t) {
          return xn(1, arguments)
        }, t.delayedCall = function(e, r, n, o) {
          return new t(r, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: o
          })
        }, t.fromTo = function(e, t, r) {
          return xn(2, arguments)
        }, t.set = function(e, r) {
          return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(e, r)
        }, t.killTweensOf = function(e, t, r) {
          return Tt.killTweensOf(e, t, r)
        }, t
      }(po);
      $r(Po.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), Vr("staggerTo,staggerFrom,staggerFromTo", function(e) {
        Po[e] = function() {
          var t = new ho,
            r = jn.call(arguments, 0);
          return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r)
        }
      });
      var jo = function(e, t, r) {
          return e[t] = r
        },
        So = function(e, t, r) {
          return e[t](r)
        },
        ko = function(e, t, r, n) {
          return e[t](n.fp, r)
        },
        To = function(e, t, r) {
          return e.setAttribute(t, r)
        },
        Eo = function(e, t) {
          return er(e[t]) ? So : rr(e[t]) && e.setAttribute ? To : jo
        },
        Ro = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
        },
        Do = function(e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        },
        No = function(e, t) {
          var r = t._pt,
            n = "";
          if (!e && t.b) n = t.b;
          else if (1 === e && t.e) n = t.e;
          else {
            for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round(1e4 * (r.s + r.c * e)) / 1e4) + n, r = r._next;
            n += t.c
          }
          t.set(t.t, t.p, n, t)
        },
        Io = function(e, t) {
          for (var r = t._pt; r;) r.r(e, r.d), r = r._next
        },
        Lo = function(e, t, r, n) {
          for (var o, i = this._pt; i;) o = i._next, i.p === n && i.modifier(e, t, r), i = o
        },
        Mo = function(e) {
          for (var t, r, n = this._pt; n;) r = n._next, n.p === e && !n.op || n.op === e ? tn(this, n, "_pt") : n.dep || (t = 1), n = r;
          return !t
        },
        zo = function(e, t, r, n) {
          n.mSet(e, t, n.m.call(n.tween, r, n.mt), n)
        },
        Ao = function(e) {
          for (var t, r, n, o, i = e._pt; i;) {
            for (t = i._next, r = n; r && r.pr > i.pr;) r = r._next;
            (i._prev = r ? r._prev : o) ? i._prev._next = i: n = i, (i._next = r) ? r._prev = i : o = i, i = t
          }
          e._pt = n
        },
        Vo = function() {
          function e(e, t, r, n, o, i, s, a, l) {
            this.t = t, this.s = n, this.c = o, this.p = r, this.r = i || Ro, this.d = s || this, this.set = a || jo, this.pr = l || 0, this._next = e, e && (e._prev = this)
          }
          return e.prototype.modifier = function(e, t, r) {
            this.mSet = this.mSet || this.set, this.set = zo, this.m = e, this.mt = r, this.tween = t
          }, e
        }();
      Vr(Lr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return kr[e] = 1
      }), gr.TweenMax = gr.TweenLite = Po, gr.TimelineLite = gr.TimelineMax = ho, Tt = new ho({
        sortChildren: !1,
        defaults: Xt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), Wt.stringFilter = Yn;
      var Fo = [],
        qo = {},
        Bo = [],
        Wo = 0,
        Xo = 0,
        Ho = function(e) {
          return (qo[e] || Bo).map(function(e) {
            return e()
          })
        },
        Uo = function() {
          var e = Date.now(),
            t = [];
          e - Wo > 2 && (Ho("matchMediaInit"), Fo.forEach(function(e) {
            var r, n, o, i, s = e.queries,
              a = e.conditions;
            for (n in s)(r = Et.matchMedia(s[n]).matches) && (o = 1), r !== a[n] && (a[n] = r, i = 1);
            i && (e.revert(), o && t.push(e))
          }), Ho("matchMediaRevert"), t.forEach(function(e) {
            return e.onMatch(e, function(t) {
              return e.add(null, t)
            })
          }), Wo = e, Ho("matchMedia"))
        },
        Ko = function() {
          function e(e, t) {
            this.selector = t && Tn(t), this.data = [], this._r = [], this.isReverted = !1, this.id = Xo++, e && this.add(e)
          }
          var t = e.prototype;
          return t.add = function(e, t, r) {
            er(e) && (r = t, t = e, e = er);
            var n = this,
              o = function() {
                var e, o = kt,
                  i = n.selector;
                return o && o !== n && o.data.push(n), r && (n.selector = Tn(r)), kt = n, e = t.apply(n, arguments), er(e) && n._r.push(e), kt = o, n.selector = i, n.isReverted = !1, e
              };
            return n.last = o, e === er ? o(n, function(e) {
              return n.add(null, e)
            }) : e ? n[e] = o : o
          }, t.ignore = function(e) {
            var t = kt;
            kt = null, e(this), kt = t
          }, t.getTweens = function() {
            var t = [];
            return this.data.forEach(function(r) {
              return r instanceof e ? t.push.apply(t, r.getTweens()) : r instanceof Po && !(r.parent && "nested" === r.parent.data) && t.push(r)
            }), t
          }, t.clear = function() {
            this._r.length = this.data.length = 0
          }, t.kill = function(e, t) {
            var r = this;
            if (e ? function() {
                for (var t, n = r.getTweens(), o = r.data.length; o--;) "isFlip" === (t = r.data[o]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(e) {
                  return n.splice(n.indexOf(e), 1)
                }));
                for (n.map(function(e) {
                    return {
                      g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
                      t: e
                    }
                  }).sort(function(e, t) {
                    return t.g - e.g || -1 / 0
                  }).forEach(function(t) {
                    return t.t.revert(e)
                  }), o = r.data.length; o--;)(t = r.data[o]) instanceof ho ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof Po) && t.revert && t.revert(e);
                r._r.forEach(function(t) {
                  return t(e, r)
                }), r.isReverted = !0
              }() : this.data.forEach(function(e) {
                return e.kill && e.kill()
              }), this.clear(), t)
              for (var n = Fo.length; n--;) Fo[n].id === this.id && Fo.splice(n, 1)
          }, t.revert = function(e) {
            this.kill(e || {})
          }, e
        }(),
        Zo = function() {
          function e(e) {
            this.contexts = [], this.scope = e, kt && kt.data.push(this)
          }
          var t = e.prototype;
          return t.add = function(e, t, r) {
            nr(e) || (e = {
              matches: e
            });
            var n, o, i, s = new Ko(0, r || this.scope),
              a = s.conditions = {};
            for (o in kt && !s.selector && (s.selector = kt.selector), this.contexts.push(s), t = s.add("onMatch", t), s.queries = e, e) "all" === o ? i = 1 : (n = Et.matchMedia(e[o])) && (Fo.indexOf(s) < 0 && Fo.push(s), (a[o] = n.matches) && (i = 1), n.addListener ? n.addListener(Uo) : n.addEventListener("change", Uo));
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
        $o = {
          registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            t.forEach(function(e) {
              return Bn(e)
            })
          },
          timeline: function(e) {
            return new ho(e)
          },
          getTweensOf: function(e, t) {
            return Tt.getTweensOf(e, t)
          },
          getProperty: function(e, t, r, n) {
            Jt(e) && (e = kn(e)[0]);
            var o = zr(e || {}).get,
              i = r ? Zr : Kr;
            return "native" === r && (r = ""), e ? t ? i((Rr[t] && Rr[t].get || o)(e, t, r, n)) : function(t, r, n) {
              return i((Rr[t] && Rr[t].get || o)(e, t, r, n))
            } : e
          },
          quickSetter: function(e, t, r) {
            if ((e = kn(e)).length > 1) {
              var n = e.map(function(e) {
                  return Qo.quickSetter(e, t, r)
                }),
                o = n.length;
              return function(e) {
                for (var t = o; t--;) n[t](e)
              }
            }
            e = e[0] || {};
            var i = Rr[t],
              s = zr(e),
              a = s.harness && (s.harness.aliases || {})[t] || t,
              l = i ? function(t) {
                var n = new i;
                Lt._pt = 0, n.init(e, r ? t + r : t, Lt, 0, [e]), n.render(1, n), Lt._pt && Io(1, Lt)
              } : s.set(e, a);
            return i ? l : function(t) {
              return l(e, a, r ? t + r : t, s, 1)
            }
          },
          quickTo: function(e, t, r) {
            var n, o = Qo.to(e, $r(((n = {})[t] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})),
              i = function(e, r, n) {
                return o.resetTo(t, e, r, n)
              };
            return i.tween = o, i
          },
          isTweening: function(e) {
            return Tt.getTweensOf(e, !0).length > 0
          },
          defaults: function(e) {
            return e && e.ease && (e.ease = so(e.ease, Xt.ease)), Yr(Xt, e || {})
          },
          config: function(e) {
            return Yr(Wt, e || {})
          },
          registerEffect: function(e) {
            var t = e.name,
              r = e.effect,
              n = e.plugins,
              o = e.defaults,
              i = e.extendTimeline;
            (n || "").split(",").forEach(function(e) {
              return e && !Rr[e] && !gr[e] && xr(t + " effect requires " + e + " plugin.")
            }), Dr[t] = function(e, t, n) {
              return r(kn(e), $r(t || {}, o), n)
            }, i && (ho.prototype[t] = function(e, r, n) {
              return this.add(Dr[t](e, nr(r) ? r : (n = r) && {}, this), n)
            })
          },
          registerEase: function(e, t) {
            eo[e] = so(t)
          },
          parseEase: function(e, t) {
            return arguments.length ? so(e, t) : eo
          },
          getById: function(e) {
            return Tt.getById(e)
          },
          exportRoot: function(e, t) {
            void 0 === e && (e = {});
            var r, n, o = new ho(e);
            for (o.smoothChildTiming = or(e.smoothChildTiming), Tt.remove(o), o._dp = 0, o._time = o._tTime = Tt._time, r = Tt._first; r;) n = r._next, !t && !r._dur && r instanceof Po && r.vars.onComplete === r._targets[0] || pn(o, r, r._start - r._delay), r = n;
            return pn(Tt, o, 0), o
          },
          context: function(e, t) {
            return e ? new Ko(e, t) : kt
          },
          matchMedia: function(e) {
            return new Zo(e)
          },
          matchMediaRefresh: function() {
            return Fo.forEach(function(e) {
              var t, r, n = e.conditions;
              for (r in n) n[r] && (n[r] = !1, t = 1);
              t && e.revert()
            }) || Uo()
          },
          addEventListener: function(e, t) {
            var r = qo[e] || (qo[e] = []);
            ~r.indexOf(t) || r.push(t)
          },
          removeEventListener: function(e, t) {
            var r = qo[e],
              n = r && r.indexOf(t);
            n >= 0 && r.splice(n, 1)
          },
          utils: {
            wrap: function e(t, r, n) {
              var o = r - t;
              return lr(t) ? Ln(t, e(0, t.length), r) : Cn(n, function(e) {
                return (o + (e - t) % o) % o + t
              })
            },
            wrapYoyo: function e(t, r, n) {
              var o = r - t,
                i = 2 * o;
              return lr(t) ? Ln(t, e(0, t.length - 1), r) : Cn(n, function(e) {
                return t + ((e = (i + (e - t) % i) % i || 0) > o ? i - e : e)
              })
            },
            distribute: Rn,
            random: In,
            snap: Nn,
            normalize: function(e, t, r) {
              return zn(e, t, 0, 1, r)
            },
            getUnit: Pn,
            clamp: function(e, t, r) {
              return Cn(r, function(r) {
                return On(e, t, r)
              })
            },
            splitColor: Un,
            toArray: kn,
            selector: Tn,
            mapRange: zn,
            pipe: function() {
              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
              return function(e) {
                return t.reduce(function(e, t) {
                  return t(e)
                }, e)
              }
            },
            unitize: function(e, t) {
              return function(r) {
                return e(parseFloat(r)) + (t || Pn(r))
              }
            },
            interpolate: function e(t, r, n, o) {
              var i = isNaN(t + r) ? 0 : function(e) {
                return (1 - e) * t + e * r
              };
              if (!i) {
                var s, a, l, u, d, c = Jt(t),
                  f = {};
                if (!0 === n && (o = 1) && (n = null), c) t = {
                  p: t
                }, r = {
                  p: r
                };
                else if (lr(t) && !lr(r)) {
                  for (l = [], u = t.length, d = u - 2, a = 1; a < u; a++) l.push(e(t[a - 1], t[a]));
                  u--, i = function(e) {
                    e *= u;
                    var t = Math.min(d, ~~e);
                    return l[t](e - t)
                  }, n = r
                } else o || (t = Gr(lr(t) ? [] : {}, t));
                if (!l) {
                  for (s in r) go.call(f, t, s, "get", r[s]);
                  i = function(e) {
                    return Io(e, f) || (c ? t.p : t)
                  }
                }
              }
              return Cn(n, i)
            },
            shuffle: En
          },
          install: _r,
          effects: Dr,
          ticker: Qn,
          updateRoot: ho.updateRoot,
          plugins: Rr,
          globalTimeline: Tt,
          core: {
            PropTween: Vo,
            globals: Cr,
            Tween: Po,
            Timeline: ho,
            Animation: po,
            getCache: zr,
            _removeLinkedListItem: tn,
            reverting: function() {
              return St
            },
            context: function(e) {
              return e && kt && (kt.data.push(e), e._ctx = kt), kt
            },
            suppressOverwrites: function(e) {
              return jt = e
            }
          }
        };
      Vr("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return $o[e] = Po[e]
      }), Qn.add(ho.updateRoot), Lt = $o.to({}, {
        duration: 0
      });
      var Go = function(e, t) {
          for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
          return r
        },
        Yo = function(e, t) {
          return {
            name: e,
            headless: 1,
            rawVars: 1,
            init: function(e, r, n) {
              n._onInit = function(e) {
                var n, o;
                if (Jt(r) && (n = {}, Vr(r, function(e) {
                    return n[e] = 1
                  }), r = n), t) {
                  for (o in n = {}, r) n[o] = t(r[o]);
                  r = n
                }! function(e, t) {
                  var r, n, o, i = e._targets;
                  for (r in t)
                    for (n = i.length; n--;)(o = e._ptLookup[n][r]) && (o = o.d) && (o._pt && (o = Go(o, r)), o && o.modifier && o.modifier(t[r], e, i[n], r))
                }(e, r)
              }
            }
          }
        },
        Qo = $o.registerPlugin({
          name: "attr",
          init: function(e, t, r, n, o) {
            var i, s, a;
            for (i in this.tween = r, t) a = e.getAttribute(i) || "", (s = this.add(e, "setAttribute", (a || 0) + "", t[i], n, o, 0, 0, i)).op = i, s.b = a, this._props.push(i)
          },
          render: function(e, t) {
            for (var r = t._pt; r;) St ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
          }
        }, {
          name: "endArray",
          headless: 1,
          init: function(e, t) {
            for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
          }
        }, Yo("roundProps", Dn), Yo("modifiers"), Yo("snap", Nn)) || $o;
      Po.version = ho.version = Qo.version = "3.14.2", Nt = 1, ir() && Jn(), eo.Power0, eo.Power1, eo.Power2, eo.Power3, eo.Power4, eo.Linear, eo.Quad, eo.Cubic, eo.Quart, eo.Quint, eo.Strong, eo.Elastic, eo.Back, eo.SteppedEase, eo.Bounce, eo.Sine, eo.Expo, eo.Circ;
      var Jo, ei, ti, ri, ni, oi, ii, si, ai = {},
        li = 180 / Math.PI,
        ui = Math.PI / 180,
        di = Math.atan2,
        ci = /([A-Z])/g,
        fi = /(left|right|width|margin|padding|x)/i,
        pi = /[\s,\(]\S/,
        hi = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        mi = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        vi = function(e, t) {
          return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        yi = function(e, t) {
          return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        gi = function(e, t) {
          return t.set(t.t, t.p, 1 === e ? t.e : e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        bi = function(e, t) {
          var r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
        },
        _i = function(e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t)
        },
        wi = function(e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        },
        xi = function(e, t, r) {
          return e.style[t] = r
        },
        Ci = function(e, t, r) {
          return e.style.setProperty(t, r)
        },
        Oi = function(e, t, r) {
          return e._gsap[t] = r
        },
        Pi = function(e, t, r) {
          return e._gsap.scaleX = e._gsap.scaleY = r
        },
        ji = function(e, t, r, n, o) {
          var i = e._gsap;
          i.scaleX = i.scaleY = r, i.renderTransform(o, i)
        },
        Si = function(e, t, r, n, o) {
          var i = e._gsap;
          i[t] = r, i.renderTransform(o, i)
        },
        ki = "transform",
        Ti = ki + "Origin",
        Ei = function e(t, r) {
          var n = this,
            o = this.target,
            i = o.style,
            s = o._gsap;
          if (t in ai && i) {
            if (this.tfm = this.tfm || {}, "transform" === t) return hi.transform.split(",").forEach(function(t) {
              return e.call(n, t, r)
            });
            if (~(t = hi[t] || t).indexOf(",") ? t.split(",").forEach(function(e) {
                return n.tfm[e] = Zi(o, e)
              }) : this.tfm[t] = s.x ? s[t] : Zi(o, t), t === Ti && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(ki) >= 0) return;
            s.svg && (this.svgo = o.getAttribute("data-svg-origin"), this.props.push(Ti, r, "")), t = ki
          }(i || r) && this.props.push(t, r, i[t])
        },
        Ri = function(e) {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        Di = function() {
          var e, t, r = this.props,
            n = this.target,
            o = n.style,
            i = n._gsap;
          for (e = 0; e < r.length; e += 3) r[e + 1] ? 2 === r[e + 1] ? n[r[e]](r[e + 2]) : n[r[e]] = r[e + 2] : r[e + 2] ? o[r[e]] = r[e + 2] : o.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(ci, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (e = ii()) && e.isStart || o[ki] || (Ri(o), i.zOrigin && o[Ti] && (o[Ti] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
          }
        },
        Ni = function(e, t) {
          var r = {
            target: e,
            props: [],
            revert: Di,
            save: Ei
          };
          return e._gsap || Qo.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(e) {
            return r.save(e)
          }), r
        },
        Ii = function(e, t) {
          var r = ei.createElementNS ? ei.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ei.createElement(e);
          return r && r.style ? r : ei.createElement(e)
        },
        Li = function e(t, r, n) {
          var o = getComputedStyle(t);
          return o[r] || o.getPropertyValue(r.replace(ci, "-$1").toLowerCase()) || o.getPropertyValue(r) || !n && e(t, zi(r) || r, 1) || ""
        },
        Mi = "O,Moz,ms,Ms,Webkit".split(","),
        zi = function(e, t, r) {
          var n = (t || ni).style,
            o = 5;
          if (e in n && !r) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Mi[o] + e in n););
          return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? Mi[o] : "") + e
        },
        Ai = function() {
          "undefined" != typeof window && window.document && (Jo = window, ei = Jo.document, ti = ei.documentElement, ni = Ii("div") || {
            style: {}
          }, Ii("div"), ki = zi(ki), Ti = ki + "Origin", ni.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", si = !!zi("perspective"), ii = Qo.core.reverting, ri = 1)
        },
        Vi = function(e) {
          var t, r = e.ownerSVGElement,
            n = Ii("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            o = e.cloneNode(!0);
          o.style.display = "block", n.appendChild(o), ti.appendChild(n);
          try {
            t = o.getBBox()
          } catch (e) {}
          return n.removeChild(o), ti.removeChild(n), t
        },
        Fi = function(e, t) {
          for (var r = t.length; r--;)
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
        },
        qi = function(e) {
          var t, r;
          try {
            t = e.getBBox()
          } catch (n) {
            t = Vi(e), r = 1
          }
          return t && (t.width || t.height) || r || (t = Vi(e)), !t || t.width || t.x || t.y ? t : {
            x: +Fi(e, ["x", "cx", "x1"]) || 0,
            y: +Fi(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Bi = function(e) {
          return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !qi(e))
        },
        Wi = function(e, t) {
          if (t) {
            var r, n = e.style;
            t in ai && t !== Ti && (t = ki), n.removeProperty ? ("ms" !== (r = t.substr(0, 2)) && "webkit" !== t.substr(0, 6) || (t = "-" + t), n.removeProperty("--" === r ? t : t.replace(ci, "-$1").toLowerCase())) : n.removeAttribute(t)
          }
        },
        Xi = function(e, t, r, n, o, i) {
          var s = new Vo(e._pt, t, r, 0, 1, i ? wi : _i);
          return e._pt = s, s.b = n, s.e = o, e._props.push(r), s
        },
        Hi = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Ui = {
          grid: 1,
          flex: 1
        },
        Ki = function e(t, r, n, o) {
          var i, s, a, l, u = parseFloat(n) || 0,
            d = (n + "").trim().substr((u + "").length) || "px",
            c = ni.style,
            f = fi.test(r),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            v = "px" === o,
            y = "%" === o;
          if (o === d || !u || Hi[o] || Hi[d]) return u;
          if ("px" !== d && !v && (u = e(t, r, n, "px")), l = t.getCTM && Bi(t), (y || "%" === d) && (ai[r] || ~r.indexOf("adius"))) return i = l ? t.getBBox()[f ? "width" : "height"] : t[h], Fr(y ? u / i * m : u / 100 * i);
          if (c[f ? "width" : "height"] = m + (v ? d : o), s = "rem" !== o && ~r.indexOf("adius") || "em" === o && t.appendChild && !p ? t : t.parentNode, l && (s = (t.ownerSVGElement || {}).parentNode), s && s !== ei && s.appendChild || (s = ei.body), (a = s._gsap) && y && a.width && f && a.time === Qn.time && !a.uncache) return Fr(u / a.width * m);
          if (!y || "height" !== r && "width" !== r)(y || "%" === d) && !Ui[Li(s, "display")] && (c.position = Li(t, "position")), s === t && (c.position = "static"), s.appendChild(ni), i = ni[h], s.removeChild(ni), c.position = "absolute";
          else {
            var g = t.style[r];
            t.style[r] = m + o, i = t[h], g ? t.style[r] = g : Wi(t, r)
          }
          return f && y && ((a = zr(s)).time = Qn.time, a.width = s[h]), Fr(v ? i * u / m : i && u ? m / i * u : 0)
        },
        Zi = function(e, t, r, n) {
          var o;
          return ri || Ai(), t in hi && "transform" !== t && ~(t = hi[t]).indexOf(",") && (t = t.split(",")[0]), ai[t] && "transform" !== t ? (o = ss(e, n), o = "transformOrigin" !== t ? o[t] : o.svg ? o.origin : as(Li(e, Ti)) + " " + o.zOrigin + "px") : (!(o = e.style[t]) || "auto" === o || n || ~(o + "").indexOf("calc(")) && (o = Ji[t] && Ji[t](e, t, r) || Li(e, t) || Ar(e, t) || ("opacity" === t ? 1 : 0)), r && !~(o + "").trim().indexOf(" ") ? Ki(e, t, o, r) + r : o
        },
        $i = function(e, t, r, n) {
          if (!r || "none" === r) {
            var o = zi(t, e, 1),
              i = o && Li(e, o, 1);
            i && i !== r ? (t = o, r = i) : "borderColor" === t && (r = Li(e, "borderTopColor"))
          }
          var s, a, l, u, d, c, f, p, h, m, v, y = new Vo(this._pt, e.style, t, 0, 1, No),
            g = 0,
            b = 0;
          if (y.b = r, y.e = n, r += "", "var(--" === (n += "").substring(0, 6) && (n = Li(e, n.substring(4, n.indexOf(")")))), "auto" === n && (c = e.style[t], e.style[t] = n, n = Li(e, t) || n, c ? e.style[t] = c : Wi(e, t)), Yn(s = [r, n]), n = s[1], l = (r = s[0]).match(pr) || [], (n.match(pr) || []).length) {
            for (; a = pr.exec(n);) f = a[0], h = n.substring(g, a.index), d ? d = (d + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (d = 1), f !== (c = l[b++] || "") && (u = parseFloat(c) || 0, v = c.substr((u + "").length), "=" === f.charAt(1) && (f = Br(u, f) + v), p = parseFloat(f), m = f.substr((p + "").length), g = pr.lastIndex - m.length, m || (m = m || Wt.units[t] || v, g === n.length && (n += m, y.e += m)), v !== m && (u = Ki(e, t, c, m) || 0), y._pt = {
              _next: y._pt,
              p: h || 1 === b ? h : ",",
              s: u,
              c: p - u,
              m: d && d < 4 || "zIndex" === t ? Math.round : 0
            });
            y.c = g < n.length ? n.substring(g, n.length) : ""
          } else y.r = "display" === t && "none" === n ? wi : _i;
          return mr.test(n) && (y.e = 0), this._pt = y, y
        },
        Gi = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Yi = function(e) {
          var t = e.split(" "),
            r = t[0],
            n = t[1] || "50%";
          return "top" !== r && "bottom" !== r && "left" !== n && "right" !== n || (e = r, r = n, n = e), t[0] = Gi[r] || r, t[1] = Gi[n] || n, t.join(" ")
        },
        Qi = function(e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var r, n, o, i = t.t,
              s = i.style,
              a = t.u,
              l = i._gsap;
            if ("all" === a || !0 === a) s.cssText = "", n = 1;
            else
              for (o = (a = a.split(",")).length; --o > -1;) r = a[o], ai[r] && (n = 1, r = "transformOrigin" === r ? Ti : ki), Wi(i, r);
            n && (Wi(i, ki), l && (l.svg && i.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", ss(i, 1), l.uncache = 1, Ri(s)))
          }
        },
        Ji = {
          clearProps: function(e, t, r, n, o) {
            if ("isFromStart" !== o.data) {
              var i = e._pt = new Vo(e._pt, t, r, 0, 0, Qi);
              return i.u = n, i.pr = -10, i.tween = o, e._props.push(r), 1
            }
          }
        },
        es = [1, 0, 0, 1, 0, 0],
        ts = {},
        rs = function(e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        },
        ns = function(e) {
          var t = Li(e, ki);
          return rs(t) ? es : t.substr(7).match(fr).map(Fr)
        },
        os = function(e, t) {
          var r, n, o, i, s = e._gsap || zr(e),
            a = e.style,
            l = ns(e);
          return s.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(o = e.transform.baseVal.consolidate().matrix).a, o.b, o.c, o.d, o.e, o.f]).join(",") ? es : l : (l !== es || e.offsetParent || e === ti || s.svg || (o = a.display, a.display = "block", (r = e.parentNode) && (e.offsetParent || e.getBoundingClientRect().width) || (i = 1, n = e.nextElementSibling, ti.appendChild(e)), l = ns(e), o ? a.display = o : Wi(e, "display"), i && (n ? r.insertBefore(e, n) : r ? r.appendChild(e) : ti.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        is = function(e, t, r, n, o, i) {
          var s, a, l, u = e._gsap,
            d = o || os(e, !0),
            c = u.xOrigin || 0,
            f = u.yOrigin || 0,
            p = u.xOffset || 0,
            h = u.yOffset || 0,
            m = d[0],
            v = d[1],
            y = d[2],
            g = d[3],
            b = d[4],
            _ = d[5],
            w = t.split(" "),
            x = parseFloat(w[0]) || 0,
            C = parseFloat(w[1]) || 0;
          r ? d !== es && (a = m * g - v * y) && (l = x * (-v / a) + C * (m / a) - (m * _ - v * b) / a, x = x * (g / a) + C * (-y / a) + (y * _ - g * b) / a, C = l) : (x = (s = qi(e)).x + (~w[0].indexOf("%") ? x / 100 * s.width : x), C = s.y + (~(w[1] || w[0]).indexOf("%") ? C / 100 * s.height : C)), n || !1 !== n && u.smooth ? (b = x - c, _ = C - f, u.xOffset = p + (b * m + _ * y) - b, u.yOffset = h + (b * v + _ * g) - _) : u.xOffset = u.yOffset = 0, u.xOrigin = x, u.yOrigin = C, u.smooth = !!n, u.origin = t, u.originIsAbsolute = !!r, e.style[Ti] = "0px 0px", i && (Xi(i, u, "xOrigin", c, x), Xi(i, u, "yOrigin", f, C), Xi(i, u, "xOffset", p, u.xOffset), Xi(i, u, "yOffset", h, u.yOffset)), e.setAttribute("data-svg-origin", x + " " + C)
        },
        ss = function(e, t) {
          var r = e._gsap || new fo(e);
          if ("x" in r && !t && !r.uncache) return r;
          var n, o, i, s, a, l, u, d, c, f, p, h, m, v, y, g, b, _, w, x, C, O, P, j, S, k, T, E, R, D, N, I, L = e.style,
            M = r.scaleX < 0,
            z = "px",
            A = "deg",
            V = getComputedStyle(e),
            F = Li(e, Ti) || "0";
          return n = o = i = l = u = d = c = f = p = 0, s = a = 1, r.svg = !(!e.getCTM || !Bi(e)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (L[ki] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[ki] ? V[ki] : "")), L.scale = L.rotate = L.translate = "none"), v = os(e, r.svg), r.svg && (r.uncache ? (S = e.getBBox(), F = r.xOrigin - S.x + "px " + (r.yOrigin - S.y) + "px", j = "") : j = !t && e.getAttribute("data-svg-origin"), is(e, j || F, !!j || r.originIsAbsolute, !1 !== r.smooth, v)), h = r.xOrigin || 0, m = r.yOrigin || 0, v !== es && (_ = v[0], w = v[1], x = v[2], C = v[3], n = O = v[4], o = P = v[5], 6 === v.length ? (s = Math.sqrt(_ * _ + w * w), a = Math.sqrt(C * C + x * x), l = _ || w ? di(w, _) * li : 0, (c = x || C ? di(x, C) * li + l : 0) && (a *= Math.abs(Math.cos(c * ui))), r.svg && (n -= h - (h * _ + m * x), o -= m - (h * w + m * C))) : (I = v[6], D = v[7], T = v[8], E = v[9], R = v[10], N = v[11], n = v[12], o = v[13], i = v[14], u = (y = di(I, R)) * li, y && (j = O * (g = Math.cos(-y)) + T * (b = Math.sin(-y)), S = P * g + E * b, k = I * g + R * b, T = O * -b + T * g, E = P * -b + E * g, R = I * -b + R * g, N = D * -b + N * g, O = j, P = S, I = k), d = (y = di(-x, R)) * li, y && (g = Math.cos(-y), N = C * (b = Math.sin(-y)) + N * g, _ = j = _ * g - T * b, w = S = w * g - E * b, x = k = x * g - R * b), l = (y = di(w, _)) * li, y && (j = _ * (g = Math.cos(y)) + w * (b = Math.sin(y)), S = O * g + P * b, w = w * g - _ * b, P = P * g - O * b, _ = j, O = S), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, d = 180 - d), s = Fr(Math.sqrt(_ * _ + w * w + x * x)), a = Fr(Math.sqrt(P * P + I * I)), y = di(O, P), c = Math.abs(y) > 2e-4 ? y * li : 0, p = N ? 1 / (N < 0 ? -N : N) : 0), r.svg && (j = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !rs(Li(e, ki)), j && e.setAttribute("transform", j))), Math.abs(c) > 90 && Math.abs(c) < 270 && (M ? (s *= -1, c += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), t = t || r.uncache, r.x = n - ((r.xPercent = n && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + z, r.y = o - ((r.yPercent = o && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-o) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + z, r.z = i + z, r.scaleX = Fr(s), r.scaleY = Fr(a), r.rotation = Fr(l) + A, r.rotationX = Fr(u) + A, r.rotationY = Fr(d) + A, r.skewX = c + A, r.skewY = f + A, r.transformPerspective = p + z, (r.zOrigin = parseFloat(F.split(" ")[2]) || !t && r.zOrigin || 0) && (L[Ti] = as(F)), r.xOffset = r.yOffset = 0, r.force3D = Wt.force3D, r.renderTransform = r.svg ? hs : si ? ps : us, r.uncache = 0, r
        },
        as = function(e) {
          return (e = e.split(" "))[0] + " " + e[1]
        },
        ls = function(e, t, r) {
          var n = Pn(t);
          return Fr(parseFloat(t) + parseFloat(Ki(e, "x", r + "px", n))) + n
        },
        us = function(e, t) {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, ps(e, t)
        },
        ds = "0deg",
        cs = "0px",
        fs = ") ",
        ps = function(e, t) {
          var r = t || this,
            n = r.xPercent,
            o = r.yPercent,
            i = r.x,
            s = r.y,
            a = r.z,
            l = r.rotation,
            u = r.rotationY,
            d = r.rotationX,
            c = r.skewX,
            f = r.skewY,
            p = r.scaleX,
            h = r.scaleY,
            m = r.transformPerspective,
            v = r.force3D,
            y = r.target,
            g = r.zOrigin,
            b = "",
            _ = "auto" === v && e && 1 !== e || !0 === v;
          if (g && (d !== ds || u !== ds)) {
            var w, x = parseFloat(u) * ui,
              C = Math.sin(x),
              O = Math.cos(x);
            x = parseFloat(d) * ui, w = Math.cos(x), i = ls(y, i, C * w * -g), s = ls(y, s, -Math.sin(x) * -g), a = ls(y, a, O * w * -g + g)
          }
          m !== cs && (b += "perspective(" + m + fs), (n || o) && (b += "translate(" + n + "%, " + o + "%) "), (_ || i !== cs || s !== cs || a !== cs) && (b += a !== cs || _ ? "translate3d(" + i + ", " + s + ", " + a + ") " : "translate(" + i + ", " + s + fs), l !== ds && (b += "rotate(" + l + fs), u !== ds && (b += "rotateY(" + u + fs), d !== ds && (b += "rotateX(" + d + fs), c === ds && f === ds || (b += "skew(" + c + ", " + f + fs), 1 === p && 1 === h || (b += "scale(" + p + ", " + h + fs), y.style[ki] = b || "translate(0, 0)"
        },
        hs = function(e, t) {
          var r, n, o, i, s, a = t || this,
            l = a.xPercent,
            u = a.yPercent,
            d = a.x,
            c = a.y,
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
            C = parseFloat(d),
            O = parseFloat(c);
          f = parseFloat(f), p = parseFloat(p), (h = parseFloat(h)) && (p += h = parseFloat(h), f += h), f || p ? (f *= ui, p *= ui, r = Math.cos(f) * m, n = Math.sin(f) * m, o = Math.sin(f - p) * -v, i = Math.cos(f - p) * v, p && (h *= ui, s = Math.tan(p - h), o *= s = Math.sqrt(1 + s * s), i *= s, h && (s = Math.tan(h), r *= s = Math.sqrt(1 + s * s), n *= s)), r = Fr(r), n = Fr(n), o = Fr(o), i = Fr(i)) : (r = m, i = v, n = o = 0), (C && !~(d + "").indexOf("px") || O && !~(c + "").indexOf("px")) && (C = Ki(y, "x", d, "px"), O = Ki(y, "y", c, "px")), (g || b || _ || w) && (C = Fr(C + g - (g * r + b * o) + _), O = Fr(O + b - (g * n + b * i) + w)), (l || u) && (s = y.getBBox(), C = Fr(C + l / 100 * s.width), O = Fr(O + u / 100 * s.height)), s = "matrix(" + r + "," + n + "," + o + "," + i + "," + C + "," + O + ")", y.setAttribute("transform", s), x && (y.style[ki] = s)
        },
        ms = function(e, t, r, n, o) {
          var i, s, a = 360,
            l = Jt(o),
            u = parseFloat(o) * (l && ~o.indexOf("rad") ? li : 1) - n,
            d = n + u + "deg";
          return l && ("short" === (i = o.split("_")[1]) && (u %= a) !== u % 180 && (u += u < 0 ? a : -360), "cw" === i && u < 0 ? u = (u + 36e9) % a - ~~(u / a) * a : "ccw" === i && u > 0 && (u = (u - 36e9) % a - ~~(u / a) * a)), e._pt = s = new Vo(e._pt, t, r, n, u, vi), s.e = d, s.u = "deg", e._props.push(r), s
        },
        vs = function(e, t) {
          for (var r in t) e[r] = t[r];
          return e
        },
        ys = function(e, t, r) {
          var n, o, i, s, a, l, u, d = vs({}, r._gsap),
            c = r.style;
          for (o in d.svg ? (i = r.getAttribute("transform"), r.setAttribute("transform", ""), c[ki] = t, n = ss(r, 1), Wi(r, ki), r.setAttribute("transform", i)) : (i = getComputedStyle(r)[ki], c[ki] = t, n = ss(r, 1), c[ki] = i), ai)(i = d[o]) !== (s = n[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (a = Pn(i) !== (u = Pn(s)) ? Ki(r, o, i, u) : parseFloat(i), l = parseFloat(s), e._pt = new Vo(e._pt, n, o, a, l - a, mi), e._pt.u = u || 0, e._props.push(o));
          vs(n, d)
        };
      Vr("padding,margin,Width,Radius", function(e, t) {
        var r = "Top",
          n = "Right",
          o = "Bottom",
          i = "Left",
          s = (t < 3 ? [r, n, o, i] : [r + i, r + n, o + n, o + i]).map(function(r) {
            return t < 2 ? e + r : "border" + r + e
          });
        Ji[t > 1 ? "border" + e : e] = function(e, t, r, n, o) {
          var i, a;
          if (arguments.length < 4) return i = s.map(function(t) {
            return Zi(e, t, r)
          }), 5 === (a = i.join(" ")).split(i[0]).length ? i[0] : a;
          i = (n + "").split(" "), a = {}, s.forEach(function(e, t) {
            return a[e] = i[t] = i[t] || i[(t - 1) / 2 | 0]
          }), e.init(t, a, o)
        }
      });
      var gs, bs, _s = {
        name: "css",
        register: Ai,
        targetTest: function(e) {
          return e.style && e.nodeType
        },
        init: function(e, t, r, n, o) {
          var i, s, a, l, u, d, c, f, p, h, m, v, y, g, b, _, w, x = this._props,
            C = e.style,
            O = r.vars.startAt;
          for (c in ri || Ai(), this.styles = this.styles || Ni(e), _ = this.styles.props, this.tween = r, t)
            if ("autoRound" !== c && (s = t[c], !Rr[c] || !bo(c, t, r, n, e, o)))
              if (u = typeof s, d = Ji[c], "function" === u && (u = typeof(s = s.call(r, n, e, o))), "string" === u && ~s.indexOf("random(") && (s = Mn(s)), d) d(this, e, c, s, r) && (b = 1);
              else if ("--" === c.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(c) + "").trim(), s += "", $n.lastIndex = 0, $n.test(i) || (f = Pn(i), (p = Pn(s)) ? f !== p && (i = Ki(e, c, i, p) + p) : f && (s += f)), this.add(C, "setProperty", i, s, n, o, 0, 0, c), x.push(c), _.push(c, 0, C[c]);
          else if ("undefined" !== u) {
            if (O && c in O ? (i = "function" == typeof O[c] ? O[c].call(r, n, e, o) : O[c], Jt(i) && ~i.indexOf("random(") && (i = Mn(i)), Pn(i + "") || "auto" === i || (i += Wt.units[c] || Pn(Zi(e, c)) || ""), "=" === (i + "").charAt(1) && (i = Zi(e, c))) : i = Zi(e, c), l = parseFloat(i), (h = "string" === u && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), c in hi && ("autoAlpha" === c && (1 === l && "hidden" === Zi(e, "visibility") && a && (l = 0), _.push("visibility", 0, C.visibility), Xi(this, C, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== c && "transform" !== c && ~(c = hi[c]).indexOf(",") && (c = c.split(",")[0])), m = c in ai) {
              if (this.styles.save(c), w = s, "string" === u && "var(--" === s.substring(0, 6)) {
                if ("calc(" === (s = Li(e, s.substring(4, s.indexOf(")")))).substring(0, 5)) {
                  var P = e.style.perspective;
                  e.style.perspective = s, s = Li(e, "perspective"), P ? e.style.perspective = P : Wi(e, "perspective")
                }
                a = parseFloat(s)
              }
              if (v || ((y = e._gsap).renderTransform && !t.parseTransform || ss(e, t.parseTransform), g = !1 !== t.smoothOrigin && y.smooth, (v = this._pt = new Vo(this._pt, C, ki, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === c) this._pt = new Vo(this._pt, y, "scaleY", y.scaleY, (h ? Br(y.scaleY, h + a) : a) - y.scaleY || 0, mi), this._pt.u = 0, x.push("scaleY", c), c += "X";
              else {
                if ("transformOrigin" === c) {
                  _.push(Ti, 0, C[Ti]), s = Yi(s), y.svg ? is(e, s, 0, g, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== y.zOrigin && Xi(this, y, "zOrigin", y.zOrigin, p), Xi(this, C, c, as(i), as(s)));
                  continue
                }
                if ("svgOrigin" === c) {
                  is(e, s, 1, g, 0, this);
                  continue
                }
                if (c in ts) {
                  ms(this, y, c, l, h ? Br(l, h + s) : s);
                  continue
                }
                if ("smoothOrigin" === c) {
                  Xi(this, y, "smooth", y.smooth, s);
                  continue
                }
                if ("force3D" === c) {
                  y[c] = s;
                  continue
                }
                if ("transform" === c) {
                  ys(this, s, e);
                  continue
                }
              }
            } else c in C || (c = zi(c) || c);
            if (m || (a || 0 === a) && (l || 0 === l) && !pi.test(s) && c in C) a || (a = 0), (f = (i + "").substr((l + "").length)) !== (p = Pn(s) || (c in Wt.units ? Wt.units[c] : f)) && (l = Ki(e, c, i, p)), this._pt = new Vo(this._pt, m ? y : C, c, l, (h ? Br(l, h + a) : a) - l, m || "px" !== p && "zIndex" !== c || !1 === t.autoRound ? mi : bi), this._pt.u = p || 0, m && w !== s ? (this._pt.b = i, this._pt.e = w, this._pt.r = gi) : f !== p && "%" !== p && (this._pt.b = i, this._pt.r = yi);
            else if (c in C) $i.call(this, e, c, i, h ? h + s : s);
            else if (c in e) this.add(e, c, i || e[c], h ? h + s : s, n, o);
            else if ("parseTransform" !== c) {
              wr(c, s);
              continue
            }
            m || (c in C ? _.push(c, 0, C[c]) : "function" == typeof e[c] ? _.push(c, 2, e[c]()) : _.push(c, 1, i || e[c])), x.push(c)
          }
          b && Ao(this)
        },
        render: function(e, t) {
          if (t.tween._time || !ii())
            for (var r = t._pt; r;) r.r(e, r.d), r = r._next;
          else t.styles.revert()
        },
        get: Zi,
        aliases: hi,
        getSetter: function(e, t, r) {
          var n = hi[t];
          return n && n.indexOf(",") < 0 && (t = n), t in ai && t !== Ti && (e._gsap.x || Zi(e, "x")) ? r && oi === r ? "scale" === t ? Pi : Oi : (oi = r || {}) && ("scale" === t ? ji : Si) : e.style && !rr(e.style[t]) ? xi : ~t.indexOf("-") ? Ci : Eo(e, t)
        },
        core: {
          _removeProperty: Wi,
          _getMatrix: os
        }
      };
      Qo.utils.checkPrefix = zi, Qo.core.getStyleSaver = Ni, bs = Vr("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (gs = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
        ai[e] = 1
      }), Vr(gs, function(e) {
        Wt.units[e] = "deg", ts[e] = 1
      }), hi[bs[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + gs, Vr("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
        var t = e.split(":");
        hi[t[1]] = bs[t[0]]
      }), Vr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
        Wt.units[e] = "px"
      }), Qo.registerPlugin(_s);
      var ws = Qo.registerPlugin(_s) || Qo;
      ws.core.Tween;
      let xs = "undefined" != typeof document ? V.useLayoutEffect : V.useEffect,
        Cs = e => e && !Array.isArray(e) && "object" == typeof e,
        Os = [],
        Ps = {},
        js = ws;
      const Ss = (e, t = Os) => {
        let r = Ps;
        Cs(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : Os) : Cs(t) && (r = t, t = "dependencies" in r ? r.dependencies : Os), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, i = (0, V.useRef)(!1), s = (0, V.useRef)(js.context(() => {}, n)), a = (0, V.useRef)(e => s.current.add(null, e)), l = t && t.length && !o;
        return l && xs(() => (i.current = !0, () => s.current.revert()), Os), xs(() => {
          if (e && s.current.add(e, n), !l || !i.current) return () => s.current.revert()
        }, t), {
          context: s.current,
          contextSafe: a.current
        }
      };
      Ss.register = e => {
        js = e
      }, Ss.headless = !0;
      const ks = {
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

      function Ts(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function Es(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -Ts(t - e, r - t, n) + t : e > r ? +Ts(e - r, r - t, n) + r : e
      }

      function Rs(e, t, r) {
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

      function Ds(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ns(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ds(Object(r), !0).forEach(function(t) {
            Rs(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ds(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const Is = {
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

      function Ls(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Ms = ["enter", "leave"];
      const zs = ["gotpointercapture", "lostpointercapture"];

      function As(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = zs.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Vs(e) {
        return "touches" in e
      }

      function Fs(e) {
        return Vs(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function qs(e) {
        return Vs(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Bs(e, t) {
        try {
          const r = t.clientX - e.clientX,
            n = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            i = (t.clientY + e.clientY) / 2,
            s = Math.hypot(r, n);
          return {
            angle: -180 * Math.atan2(r, n) / Math.PI,
            distance: s,
            origin: [o, i]
          }
        } catch (e) {}
        return null
      }

      function Ws(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Bs(r, n)
      }

      function Xs(e) {
        const t = qs(e);
        return Vs(e) ? t.identifier : t.pointerId
      }

      function Hs(e) {
        const t = qs(e);
        return [t.clientX, t.clientY]
      }

      function Us(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Ks(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Zs() {}

      function $s(...e) {
        return 0 === e.length ? Zs : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Gs(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Ys {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Ks(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            ks.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, s] = t._movement, [a, l] = r.threshold, {
            _step: u,
            values: d
          } = t;
          if (r.hasCustomTransform ? (!1 === u[0] && (u[0] = Math.abs(i) >= a && d[0]), !1 === u[1] && (u[1] = Math.abs(s) >= l && d[1])) : (!1 === u[0] && (u[0] = Math.abs(i) >= a && Math.sign(i) * a), !1 === u[1] && (u[1] = Math.abs(s) >= l && Math.sign(s) * l)), t.intentional = !1 !== u[0] || !1 !== u[1], !t.intentional) return;
          const c = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = d;
            c[0] = !1 !== u[0] ? e - u[0] : 0, c[1] = !1 !== u[1] ? t - u[1] : 0
          } else c[0] = !1 !== u[0] ? i - u[0] : 0, c[1] = !1 !== u[1] ? s - u[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(c);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Ks(r.bounds, t)), this.setup && this.setup()), t.movement = c, this.computeOffset()));
          const [h, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [h < v ? -1 : h > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [i, s],
                [a, l]
              ] = e;
              return [Es(t, i, s, n), Es(r, a, l, o)]
            }(t._bounds, t.offset, _), t.delta = ks.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = ks.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            ks.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(Ns(Ns(Ns({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Qs extends Ys {
        constructor(...e) {
          super(...e), Rs(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = ks.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = ks.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Fs(e)] : r.axisThreshold;
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
      const Js = e => e,
        ea = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => Ns(Ns({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return ks.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? ks.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Js
          },
          threshold: e => ks.toVector(e, 0)
        },
        ta = Ns(Ns({}, ea), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => ta.bounds(e(t));
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
        ra = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        na = "undefined" != typeof window && window.document && window.document.createElement;

      function oa() {
        return na && "ontouchstart" in window
      }
      const ia = {
          isBrowser: na,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: oa(),
          touchscreen: oa() || na && window.navigator.maxTouchPoints > 1,
          pointer: na && "onpointerdown" in window,
          pointerLock: na && "exitPointerLock" in window.document
        },
        sa = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        aa = Ns(Ns({}, ta), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && ia.pointerLock, ia.touch && r ? "touch" : this.pointerLock ? "mouse" : ia.pointer && !o ? "pointer" : ia.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, ia.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const i = ks.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(ks.toVector(e)),
              distance: this.transform(ks.toVector(t)),
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
          axisThreshold: e => e ? Ns(Ns({}, sa), e) : sa,
          keyboardDisplacement: (e = 10) => e
        });

      function la(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, s] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && s < 0 || r > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const ua = Ns(Ns({}, ea), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !ia.touch && ia.gesture) return "gesture";
            if (ia.touch && n) return "touch";
            if (ia.touchscreen) {
              if (ia.pointer) return "pointer";
              if (ia.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = Gs(Ks(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = Gs(Ks(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, ks.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        da = Ns(Ns({}, ta), {}, {
          mouseOnly: (e = !0) => e
        }),
        ca = ta,
        fa = ta,
        pa = Ns(Ns({}, ta), {}, {
          mouseOnly: (e = !0) => e
        }),
        ha = new Map,
        ma = new Map;

      function va(e) {
        ha.set(e.key, e.engine), ma.set(e.key, e.resolver)
      }
      const ya = {
          key: "drag",
          engine: class extends Qs {
            constructor(...e) {
              super(...e), Rs(this, "ingKey", "dragging")
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
                e._bounds = ta.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Xs(e), r._pointerActive = !0, this.computeValues(Hs(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Fs(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Xs(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Hs(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = ks.sub(o, t._values), this.computeValues(o)), ks.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Xs(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= r.tapsThreshold && i <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, i] = t._movement, [s, a] = r.swipe.velocity, [l, u] = r.swipe.distance, d = r.swipe.duration;
                if (t.elapsedTime < d) {
                  const r = Math.abs(e / t.timeDelta),
                    d = Math.abs(n / t.timeDelta);
                  r > s && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), d > a && Math.abs(i) > u && (t.swipe[1] = Math.sign(n))
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
              const t = ra[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, ks.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in ra && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: aa
        },
        ga = {
          key: "hover",
          engine: class extends Qs {
            constructor(...e) {
              super(...e), Rs(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Hs(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Hs(e);
              t._movement = t._delta = ks.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: pa
        },
        ba = {
          key: "move",
          engine: class extends Qs {
            constructor(...e) {
              super(...e), Rs(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Hs(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Hs(e),
                r = this.state;
              r._delta = ks.sub(t, r._values), ks.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: da
        },
        _a = {
          key: "pinch",
          engine: class extends Ys {
            constructor(...e) {
              super(...e), Rs(this, "ingKey", "pinching"), Rs(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? ks.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Ws(e, t._touchIds);
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
              const o = Bs(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Ws(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Bs(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = ks.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Us(e)[1] / 100 * t.offset[0], 0], ks.addTo(t._movement, t._delta), la(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: ua
        },
        wa = {
          key: "scroll",
          engine: class extends Qs {
            constructor(...e) {
              super(...e), Rs(this, "ingKey", "scrolling")
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
                    scrollTop: s
                  } = e.currentTarget;
                  return [null !== (t = null != n ? n : i) && void 0 !== t ? t : 0, null !== (r = null != o ? o : s) && void 0 !== r ? r : 0]
                }(e);
              t._delta = ks.sub(r, t._values), ks.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: ca
        },
        xa = {
          key: "wheel",
          engine: class extends Qs {
            constructor(...e) {
              super(...e), Rs(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Us(e), ks.addTo(t._movement, t._delta), la(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: fa
        };
      const Ca = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (ia.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Oa = ["target", "eventOptions", "window", "enabled", "transform"];

      function Pa(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = Pa(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class ja {
        constructor(e, t) {
          Rs(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const r = Is[e];
              return e + (r && r[t] || t)
            }(t, r),
            a = Ns(Ns({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(s, n, a);
          const l = () => {
            e.removeEventListener(s, n, a), i.delete(l)
          };
          return i.add(l), l
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class Sa {
        constructor() {
          Rs(this, "_timeouts", new Map)
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
      class ka {
        constructor(e) {
          var t, r;
          Rs(this, "gestures", new Set), Rs(this, "_targetEventStore", new ja(this)), Rs(this, "gestureEventStores", {}), Rs(this, "gestureTimeoutStores", {}), Rs(this, "handlers", {}), Rs(this, "config", {}), Rs(this, "pointerIds", new Set), Rs(this, "touchIds", new Set), Rs(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && Ta(t, "drag"), r.wheel && Ta(t, "wheel"), r.scroll && Ta(t, "scroll"), r.move && Ta(t, "move"), r.pinch && Ta(t, "pinch"), r.hover && Ta(t, "hover")
        }
        setEventIds(e) {
          return Vs(e) ? (this.touchIds = new Set(function(e) {
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
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              } = n,
              u = function(e, t) {
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
              }(n, Oa);
            if (r.shared = Pa({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, Ca), t) {
              const e = ma.get(t);
              r[t] = Pa(Ns({
                shared: r.shared
              }, u), e)
            } else
              for (const e in u) {
                const t = ma.get(e);
                t && (r[e] = Pa(Ns({
                  shared: r.shared
                }, u[e]), t))
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
                  i = Ea(r, o.eventOptions, !!n);
                o.enabled && new(ha.get(t))(this, e, t).bind(i)
              }
              const o = Ea(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](Ns(Ns({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = $s(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: i
              } = As(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function Ta(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new ja(e, t), e.gestureTimeoutStores[t] = new Sa
      }
      const Ea = (e, t, r) => (n, o, i, s = {}, a = !1) => {
          var l, u;
          const d = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            c = null !== (u = s.passive) && void 0 !== u ? u : t.passive;
          let f = a ? n : function(e, t = "", r = !1) {
            const n = Is[e],
              o = n && n[t] || t;
            return "on" + Ls(e) + Ls(o) + (function(e = !1, t) {
              return e && !Ms.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, d);
          r && c && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        Ra = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Da(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!ha.has(n)) return;
        const s = r + "Start",
          a = r + "End";
        o[n] = e => {
          let n;
          return e.first && s in t && t[s](e), r in t && (n = t[r](e)), e.last && a in t && t[a](e), n
        }, i[n] = i[n] || {}
      }

      function Na(e, t = {}, r, n) {
        const o = q().useMemo(() => new ka(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), q().useEffect(o.effect.bind(o)), q().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function Ia(e, t) {
        const r = ([ya, _a, wa, xa, ba, ga].forEach(va), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) Ra.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return Da(o, r, "onDrag", "drag", i, t), Da(o, r, "onWheel", "wheel", i, t), Da(o, r, "onScroll", "scroll", i, t), Da(o, r, "onPinch", "pinch", i, t), Da(o, r, "onMove", "move", i, t), Da(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return Na(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const La = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Ma = ([e, t]) => ({
        x: e,
        y: t
      }), za = (e, t) => (e.x = t.x, e.y = t.y, e), Aa = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Va = (e, t, r) => Math.min(Math.max(e, t), r);

      function Fa() {
        return Fa = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Fa.apply(null, arguments)
      }
      var qa = ["shift", "alt", "meta", "mod", "ctrl"],
        Ba = {
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

      function Wa(e) {
        return (e && Ba[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Xa(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Ha(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Wa(e)
        });
        return Fa({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !qa.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && Za([Wa(e.key), Wa(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && $a([Wa(e.key), Wa(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Ua.clear()
      });
      var Ua = new Set;

      function Ka(e) {
        return Array.isArray(e)
      }

      function Za(e) {
        var t = Array.isArray(e) ? e : [e];
        Ua.has("meta") && Ua.forEach(function(e) {
          return ! function(e) {
            return qa.includes(e)
          }(e) && Ua.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Ua.add(e.toLowerCase())
        })
      }

      function $a(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Ua.clear() : t.forEach(function(e) {
          return Ua.delete(e.toLowerCase())
        })
      }

      function Ga(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Ka(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Ya = (0, V.createContext)(void 0);

      function Qa(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, x.jsx)(Ya.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Ja(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Ja(e[n], t[n])
        }, !0) : e === t
      }
      var el = (0, V.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        tl = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, V.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            s = o[1],
            a = (0, V.useState)([]),
            l = a[0],
            u = a[1],
            d = (0, V.useCallback)(function(e) {
              s(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            c = (0, V.useCallback)(function(e) {
              s(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, V.useCallback)(function(e) {
              s(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            p = (0, V.useCallback)(function(e) {
              u(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, V.useCallback)(function(e) {
              u(function(t) {
                return t.filter(function(t) {
                  return !Ja(t, e)
                })
              })
            }, []);
          return (0, x.jsx)(el.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: d,
              disableScope: c,
              toggleScope: f
            },
            children: (0, x.jsx)(Qa, {
              addHotkey: p,
              removeHotkey: h,
              children: n
            })
          })
        },
        rl = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        nl = "undefined" != typeof window ? V.useLayoutEffect : V.useEffect;

      function ol(e, t, r, n) {
        var o = (0, V.useState)(null),
          i = o[0],
          s = o[1],
          a = (0, V.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          u = Ka(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          d = r instanceof Array ? r : n instanceof Array ? n : void 0,
          c = (0, V.useCallback)(t, null != d ? d : []),
          f = (0, V.useRef)(c);
        f.current = d ? c : t;
        var p = function(e) {
            var t = (0, V.useRef)(void 0);
            return Ja(t.current, e) || (t.current = e), t.current
          }(l),
          h = (0, V.useContext)(el).enabledScopes,
          m = (0, V.useContext)(Ya);
        return nl(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Ga(e, ["input", "textarea", "select"]) || Ga(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void rl(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Xa(u, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = Ha(r, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, i = t.alt,
                          s = t.meta,
                          a = t.mod,
                          l = t.shift,
                          u = t.ctrl,
                          d = t.keys,
                          c = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = Wa(f),
                          g = c.toLowerCase();
                        if (!(null != d && d.includes(y) || null != d && d.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (a) {
                            if (!h && !p) return !1
                          } else {
                            if (s === !h && "meta" !== g && "os" !== g) return !1;
                            if (u === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!d || 1 !== d.length || !d.includes(g) && !d.includes(y)) || (d ? (void 0 === o && (o = ","), (Ka(n = d) ? n : n.split(o)).every(function(e) {
                          return Ua.has(e.trim().toLowerCase())
                        })) : !d)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void rl(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (Za(Wa(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && ($a(Wa(e.code)), a.current = !1, null != p && p.keyup && r(e, !0))
              },
              s = i || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Xa(u, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return m.addHotkey(Ha(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Xa(u, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return m.removeHotkey(Ha(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [i, u, p, h]), s
      }

      function il(e) {
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

      function sl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function al(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sl(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = il(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ll(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ul = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = al(al({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) ul(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ll(e.variantClassNames, e => ll(e, e => e.split(" ")[0]))
            }
          }, t
        },
        cl = dl({
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
        fl = dl({
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
      ws.registerPlugin(Ss);
      const pl = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        hl = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        ml = (0, B.Tm)("var(--foundry_1a74xwb0)");
      var vl = r(9872),
        yl = r(24944),
        gl = r(30597);
      const bl = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, i] = (0, V.useState)(null);
          return (0, V.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              i(e.default)
            })
          }, [r]), o ? (0, x.jsx)(vl.A, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        _l = {
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
          "zh-TW": r.e(2234).then(r.bind(r, 82234))
        };
      class wl {
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
          return r ? t : Va(t, this.max[e], this.min[e])
        }
      }
      class xl {
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
      class Cl {
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
      class Ol {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", za(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [r, n]
          } = e, o = t > 1, i = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && i && !o ? (this.setPanWithFriction("y", this.slide.pan.y + n, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && i ? this.setPanWithFriction("x", this.slide.pan.x + r, .35) : (this.setPanWithFriction("x", this.slide.pan.x + r), this.setPanWithFriction("y", this.slide.pan.y + n))
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
          const i = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const r = Math.abs(e.x - t.x),
              n = Math.abs(e.y - t.y);
            return Math.sqrt(r * r + n * n)
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (za(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }, i))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, n]
          } = t, o = "x" === e ? r : n, i = this.slide.pan[e], s = i + o;
          if (this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(i),
              t = this.getVerticalDragRatio(s);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const a = this.slide.bounds.correctPan(e, s);
          i !== a && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = a)
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
      class Pl {
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
          e.src = this.thumbnail.currentSrc ?? "", await La(e)
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
      class jl {
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
      class Sl extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class kl extends Cl {
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
          if (!this.dispatch(e, new Sl(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class Tl {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Ma(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, za(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Ma(e);
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
            i = za({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = za({
            x: 0,
            y: 0
          }, i);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, za(this.startPan, i)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((a = s).x !== l.x || a.y !== l.y || n || o) && (za(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class El extends Cl {
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
          super(), this.width = e, this.height = t, this.opener = new Pl({
            slide: this
          }), this.bounds = new wl({
            slide: this
          }), this.dragHandler = new Ol({
            slide: this
          }), this.scrollWheel = new jl({
            slide: this
          }), this.zoomHandler = new Tl({
            slide: this
          }), this.zoomLevels = new xl({
            options: r
          }), this.tapHandler = new kl({
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
          r || (e = Va(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Aa(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Aa(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), za(this.pan, this.bounds.center)
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
      var Rl = r(25778);
      const Dl = (0, yl.YK)({
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
      var Nl = "foundry_bc732x1";
      const Il = (0, V.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (ol(e, e => r?.(e), [r]), (0, x.jsx)(pt, {
        size: "XS",
        className: (0, ge.clsx)("foundry_bc732x0", {
          [Nl]: t
        }),
        asChild: !0,
        children: (0, x.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Ll = Yl(),
        Ml = e => Kl(e, Ll),
        zl = Yl();
      Ml.write = e => Kl(e, zl);
      var Al = Yl();
      Ml.onStart = e => Kl(e, Al);
      var Vl = Yl();
      Ml.onFrame = e => Kl(e, Vl);
      var Fl = Yl();
      Ml.onFinish = e => Kl(e, Fl);
      var ql = [];
      Ml.setTimeout = (e, t) => {
        const r = Ml.now() + t,
          n = () => {
            const e = ql.findIndex(e => e.cancel == n);
            ~e && ql.splice(e, 1), Hl -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return ql.splice(Bl(r), 0, o), Hl += 1, Zl(), o
      };
      var Bl = e => ~(~ql.findIndex(t => t.time > e) || ~ql.length);
      Ml.cancel = e => {
        Al.delete(e), Vl.delete(e), Fl.delete(e), Ll.delete(e), zl.delete(e)
      }, Ml.sync = e => {
        Ul = !0, Ml.batchedUpdates(e), Ul = !1
      }, Ml.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Ml.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Al.delete(r), t = null
        }, n
      };
      var Wl = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Ml.use = e => Wl = e, Ml.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Ml.batchedUpdates = e => e(), Ml.catch = console.error, Ml.frameLoop = "always", Ml.advance = () => {
        "demand" !== Ml.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Gl()
      };
      var Xl = -1,
        Hl = 0,
        Ul = !1;

      function Kl(e, t) {
        Ul ? (t.delete(e), e(0)) : (t.add(e), Zl())
      }

      function Zl() {
        Xl < 0 && (Xl = 0, "demand" !== Ml.frameLoop && Wl($l))
      }

      function $l() {
        ~Xl && (Wl($l), Ml.batchedUpdates(Gl))
      }

      function Gl() {
        const e = Xl;
        Xl = Ml.now();
        const t = Bl(Xl);
        t && (Ql(ql.splice(0, t), e => e.handler()), Hl -= t), Hl ? (Al.flush(), Ll.flush(e ? Math.min(64, Xl - e) : 16.667), Vl.flush(), zl.flush(), Fl.flush()) : Xl = -1
      }

      function Yl() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Hl += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Hl -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Hl -= t.size, Ql(t, t => t(r) && e.add(t)), Hl += e.size, t = e)
          }
        }
      }

      function Ql(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Ml.catch(e)
          }
        })
      }
      var Jl = Object.defineProperty,
        eu = {};

      function tu() {}((e, t) => {
        for (var r in t) Jl(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(eu, {
        assign: () => mu,
        colors: () => fu,
        createStringInterpolator: () => lu,
        skipAnimation: () => pu,
        to: () => uu,
        willAdvance: () => hu
      });
      var ru = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function nu(e, t) {
        if (ru.arr(e)) {
          if (!ru.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var ou = (e, t) => e.forEach(t);

      function iu(e, t, r) {
        if (ru.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var su = e => ru.und(e) ? [] : ru.arr(e) ? e : [e];

      function au(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), ou(r, t)
        }
      }
      var lu, uu, du = (e, ...t) => au(e, e => e(...t)),
        cu = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        fu = null,
        pu = !1,
        hu = tu,
        mu = e => {
          e.to && (uu = e.to), e.now && (Ml.now = e.now), void 0 !== e.colors && (fu = e.colors), null != e.skipAnimation && (pu = e.skipAnimation), e.createStringInterpolator && (lu = e.createStringInterpolator), e.requestAnimationFrame && Ml.use(e.requestAnimationFrame), e.batchedUpdates && (Ml.batchedUpdates = e.batchedUpdates), e.willAdvance && (hu = e.willAdvance), e.frameLoop && (Ml.frameLoop = e.frameLoop)
        },
        vu = new Set,
        yu = [],
        gu = [],
        bu = 0,
        _u = {
          get idle() {
            return !vu.size && !yu.length
          },
          start(e) {
            bu > e.priority ? (vu.add(e), Ml.onStart(wu)) : (xu(e), Ml(Ou))
          },
          advance: Ou,
          sort(e) {
            if (bu) Ml.onFrame(() => _u.sort(e));
            else {
              const t = yu.indexOf(e);
              ~t && (yu.splice(t, 1), Cu(e))
            }
          },
          clear() {
            yu = [], vu.clear()
          }
        };

      function wu() {
        vu.forEach(xu), vu.clear(), Ml(Ou)
      }

      function xu(e) {
        yu.includes(e) || Cu(e)
      }

      function Cu(e) {
        yu.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(yu), 0, e)
      }

      function Ou(e) {
        const t = gu;
        for (let r = 0; r < yu.length; r++) {
          const n = yu[r];
          bu = n.priority, n.idle || (hu(n), n.advance(e), n.idle || t.push(n))
        }
        return bu = 0, (gu = yu).length = 0, (yu = t).length > 0
      }
      var Pu = {
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
        ju = "[-+]?\\d*\\.?\\d+",
        Su = ju + "%";

      function ku(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Tu = new RegExp("rgb" + ku(ju, ju, ju)),
        Eu = new RegExp("rgba" + ku(ju, ju, ju, ju)),
        Ru = new RegExp("hsl" + ku(ju, Su, Su)),
        Du = new RegExp("hsla" + ku(ju, Su, Su, ju)),
        Nu = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Iu = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Lu = /^#([0-9a-fA-F]{6})$/,
        Mu = /^#([0-9a-fA-F]{8})$/;

      function zu(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Au(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = zu(o, n, e + 1 / 3),
          s = zu(o, n, e),
          a = zu(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function Vu(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Fu(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function qu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Bu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Wu(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Lu.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : fu && void 0 !== fu[e] ? fu[e] : (t = Tu.exec(e)) ? (Vu(t[1]) << 24 | Vu(t[2]) << 16 | Vu(t[3]) << 8 | 255) >>> 0 : (t = Eu.exec(e)) ? (Vu(t[1]) << 24 | Vu(t[2]) << 16 | Vu(t[3]) << 8 | qu(t[4])) >>> 0 : (t = Nu.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Mu.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Iu.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Ru.exec(e)) ? (255 | Au(Fu(t[1]), Bu(t[2]), Bu(t[3]))) >>> 0 : (t = Du.exec(e)) ? (Au(Fu(t[1]), Bu(t[2]), Bu(t[3])) | qu(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Xu = (e, t, r) => {
          if (ru.fun(e)) return e;
          if (ru.arr(e)) return Xu({
            range: e,
            output: t,
            extrapolate: r
          });
          if (ru.str(e.output[0])) return lu(e);
          const n = e,
            o = n.output,
            i = n.range || [0, 1],
            s = n.extrapolateLeft || n.extrapolate || "extend",
            a = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, i);
            return function(e, t, r, n, o, i, s, a, l) {
              let u = l ? l(e) : e;
              if (u < t) {
                if ("identity" === s) return u;
                "clamp" === s && (u = t)
              }
              if (u > r) {
                if ("identity" === a) return u;
                "clamp" === a && (u = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? u = -u : r === 1 / 0 ? u -= t : u = (u - t) / (r - t), u = i(u), n === -1 / 0 ? u = -u : o === 1 / 0 ? u += n : u = u * (o - n) + n, u)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, s, a, n.map)
          }
        },
        Hu = 1.70158,
        Uu = 1.525 * Hu,
        Ku = Hu + 1,
        Zu = 2 * Math.PI / 3,
        $u = 2 * Math.PI / 4.5,
        Gu = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Yu = {
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
          easeInBack: e => Ku * e * e * e - Hu * e * e,
          easeOutBack: e => 1 + Ku * Math.pow(e - 1, 3) + Hu * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Uu) / 2 : (Math.pow(2 * e - 2, 2) * ((Uu + 1) * (2 * e - 2) + Uu) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Zu),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Zu) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * $u) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * $u) / 2 + 1,
          easeInBounce: e => 1 - Gu(1 - e),
          easeOutBounce: Gu,
          easeInOutBounce: e => e < .5 ? (1 - Gu(1 - 2 * e)) / 2 : (1 + Gu(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Qu = Symbol.for("FluidValue.get"),
        Ju = Symbol.for("FluidValue.observers"),
        ed = e => Boolean(e && e[Qu]),
        td = e => e && e[Qu] ? e[Qu]() : e,
        rd = e => e[Ju] || null;

      function nd(e, t) {
        const r = e[Ju];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var od = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            id(this, e)
          }
        },
        id = (e, t) => ud(e, Qu, t);

      function sd(e, t) {
        if (e[Qu]) {
          let r = e[Ju];
          r || ud(e, Ju, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function ad(e, t) {
        const r = e[Ju];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Ju] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var ld, ud = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        dd = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        cd = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        fd = new RegExp(`(${dd.source})(%|[a-z]+)`, "i"),
        pd = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        hd = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        md = e => {
          const [t, r] = vd(e);
          if (!t || cu()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && hd.test(r) ? md(r) : r || e
        },
        vd = e => {
          const t = hd.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        yd = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        gd = e => {
          ld || (ld = fu ? new RegExp(`(${Object.keys(fu).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => td(e).replace(hd, md).replace(cd, Wu).replace(ld, Wu)),
            r = t.map(e => e.match(dd).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Xu({
              ...e,
              output: t
            }));
          return e => {
            const r = !fd.test(t[0]) && t.find(e => fd.test(e))?.replace(dd, "");
            let n = 0;
            return t[0].replace(dd, () => `${o[n++](e)}${r||""}`).replace(pd, yd)
          }
        },
        bd = "react-spring: ",
        _d = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${bd}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        wd = _d(console.warn),
        xd = _d(console.warn);

      function Cd(e) {
        return ru.str(e) && ("#" == e[0] || /\d/.test(e) || !cu() && hd.test(e) || e in (fu || {}))
      }
      var Od = cu() ? V.useEffect : V.useLayoutEffect;

      function Pd() {
        const e = (0, V.useState)()[1],
          t = (() => {
            const e = (0, V.useRef)(!1);
            return Od(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var jd = e => (0, V.useEffect)(e, Sd),
        Sd = [],
        kd = Symbol.for("Animated:node"),
        Td = e => e && e[kd],
        Ed = (e, t) => {
          return r = e, n = kd, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Rd = e => e && e[kd] && e[kd].getPayload(),
        Dd = class {
          constructor() {
            Ed(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Nd = class e extends Dd {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, ru.num(this._value) && (this.lastPosition = this._value)
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
            return ru.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, ru.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Id = class e extends Nd {
          constructor(e) {
            super(0), this._string = null, this._toString = Xu({
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
            if (ru.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Xu({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Ld = {
          dependencies: null
        },
        Md = class extends Dd {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return iu(this.source, (r, n) => {
              var o;
              (o = r) && o[kd] === o ? t[n] = r.getValue(e) : ed(r) ? t[n] = td(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && ou(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return iu(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Ld.dependencies && ed(e) && Ld.dependencies.add(e);
            const t = Rd(e);
            t && ou(t, e => this.add(e))
          }
        },
        zd = class e extends Md {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Ad)), !0)
          }
        };

      function Ad(e) {
        return (Cd(e) ? Id : Nd).create(e)
      }

      function Vd(e) {
        const t = Td(e);
        return t ? t.constructor : ru.arr(e) ? zd : Cd(e) ? Id : Nd
      }
      var Fd = (e, t) => {
          const r = !ru.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, V.forwardRef)((n, o) => {
            const i = (0, V.useRef)(null),
              s = r && (0, V.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (ru.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return Ld.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Md(e), Ld.dependencies = null, [e, r]
              }(n, t),
              u = Pd(),
              d = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && u()
              },
              c = new qd(d, l),
              f = (0, V.useRef)(void 0);
            Od(() => (f.current = c, ou(l, e => sd(e, c)), () => {
              f.current && (ou(f.current.deps, e => ad(e, f.current)), Ml.cancel(f.current.update))
            })), (0, V.useEffect)(d, []), jd(() => () => {
              const e = f.current;
              ou(e.deps, t => ad(t, e))
            });
            const p = t.getComponentProps(a.getValue());
            return V.createElement(e, {
              ...p,
              ref: s
            })
          })
        },
        qd = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Ml.write(this.update)
          }
        },
        Bd = Symbol.for("AnimatedComponent"),
        Wd = (e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Md(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = Xd(e) || "Anonymous";
              return (e = ru.str(e) ? i[e] || (i[e] = Fd(e, o)) : e[Bd] || (e[Bd] = Fd(e, o))).displayName = `Animated(${t})`, e
            };
          return iu(e, (t, r) => {
            ru.arr(e) && (r = Xd(t)), i[r] = i(t)
          }), {
            animated: i
          }
        },
        Xd = e => ru.str(e) ? e : e && ru.str(e.displayName) ? e.displayName : ru.fun(e) && e.name || null;

      function Hd(e, ...t) {
        return ru.fun(e) ? e(...t) : e
      }
      var Ud = (e, t) => !0 === e || !!(t && e && (ru.fun(e) ? e(t) : su(e).includes(t))),
        Kd = (e, t) => ru.obj(e) ? t && e[t] : e,
        Zd = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        $d = e => e,
        Gd = (e, t = $d) => {
          let r = Yd;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            ru.und(r) || (n[o] = r)
          }
          return n
        },
        Yd = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Qd = {
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

      function Jd(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (iu(e, (e, n) => {
              Qd[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return iu(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function ec(e) {
        return e = td(e), ru.arr(e) ? e.map(ec) : Cd(e) ? eu.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function tc(e) {
        return ru.fun(e) || ru.arr(e) && ru.obj(e[0])
      }

      function rc(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var nc = {
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
        oc = {
          ...nc.default,
          mass: 1,
          damping: 1,
          easing: Yu.linear,
          clamp: !1
        },
        ic = class {
          constructor() {
            this.velocity = 0, Object.assign(this, oc)
          }
        };

      function sc(e, t) {
        if (ru.und(t.decay)) {
          const r = !ru.und(t.tension) || !ru.und(t.friction);
          !r && ru.und(t.frequency) && ru.und(t.damping) && ru.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var ac = [],
        lc = class {
          constructor() {
            this.changed = !1, this.values = ac, this.toValues = null, this.fromValues = ac, this.config = new ic, this.immediate = !1
          }
        };

      function uc(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, u, d = Ud(r.cancel ?? n?.cancel, t);
          if (d) p();
          else {
            ru.und(r.pause) || (o.paused = Ud(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Ud(e, t)), l = Hd(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function c() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - Ml.now()
          }

          function f() {
            l > 0 && !eu.skipAnimation ? (o.delayed = !0, u = Ml.setTimeout(p, l), o.pauseQueue.add(c), o.timeouts.add(u)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(c), o.timeouts.delete(u), e <= (o.cancelId || 0) && (d = !0);
            try {
              i.start({
                ...r,
                callId: e,
                cancel: d
              }, s)
            } catch (e) {
              a(e)
            }
          }
        })
      }
      var dc = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? pc(e.get()) : t.every(e => e.noop) ? cc(e.get()) : fc(e.get(), t.every(e => e.finished)),
        cc = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        fc = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        pc = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function hc(e, t, r, n) {
        const {
          callId: o,
          parentId: i,
          onRest: s
        } = t, {
          asyncTo: a,
          promise: l
        } = r;
        return i || e !== a || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const u = Gd(t, (e, t) => "onRest" === t ? void 0 : e);
          let d, c;
          const f = new Promise((e, t) => (d = e, c = t)),
            p = e => {
              const t = o <= (r.cancelId || 0) && pc(n) || o !== r.asyncId && fc(n, !1);
              if (t) throw e.result = t, c(e), e
            },
            h = (e, t) => {
              const i = new vc,
                s = new yc;
              return (async () => {
                if (eu.skipAnimation) throw mc(r), s.result = fc(n, !1), c(s), s;
                p(i);
                const a = ru.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, iu(u, (e, t) => {
                  ru.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return p(i), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (eu.skipAnimation) return mc(r), fc(n, !1);
          try {
            let t;
            t = ru.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, n.stop.bind(n))), await Promise.all([t.then(d), f]), m = fc(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof vc) m = e.result;
            else {
              if (!(e instanceof yc)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? a : void 0, r.promise = i ? l : void 0)
          }
          return ru.fun(s) && Ml.batchedUpdates(() => {
            s(m, n, n.item)
          }), m
        })() : l
      }

      function mc(e, t) {
        au(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var vc = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        yc = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        gc = e => e instanceof _c,
        bc = 1,
        _c = class extends od {
          constructor() {
            super(...arguments), this.id = bc++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Td(this);
            return e && e.getValue()
          }
          to(...e) {
            return eu.to(this, e)
          }
          interpolate(...e) {
            return wd(`${bd}The "interpolate" function is deprecated in v9 (use "to" instead)`), eu.to(this, e)
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
            nd(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || _u.sort(this), nd(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        wc = Symbol.for("SpringPhase"),
        xc = e => (1 & e[wc]) > 0,
        Cc = e => (2 & e[wc]) > 0,
        Oc = e => (4 & e[wc]) > 0,
        Pc = (e, t) => t ? e[wc] |= 3 : e[wc] &= -3,
        jc = (e, t) => t ? e[wc] |= 4 : e[wc] &= -5,
        Sc = class extends _c {
          constructor(e, t) {
            if (super(), this.animation = new lc, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !ru.und(e) || !ru.und(t)) {
              const r = ru.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              ru.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Cc(this) || this._state.asyncTo) || Oc(this)
          }
          get goal() {
            return td(this.animation.to)
          }
          get velocity() {
            const e = Td(this);
            return e instanceof Nd ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return xc(this)
          }
          get isAnimating() {
            return Cc(this)
          }
          get isPaused() {
            return Oc(this)
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
            } = n, s = Rd(n.to);
            !s && ed(n.to) && (o = su(td(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const u = a.constructor == Id ? 1 : s ? s[l].lastPosition : o[l];
              let d = n.immediate,
                c = u;
              if (!d) {
                if (c = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = ru.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (r == u ? .005 : Math.min(1, .001 * Math.abs(u - r)));
                if (ru.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    c = r + o / (1 - e) * (1 - n), d = Math.abs(a.lastPosition - c) <= f, s = o * n
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !ru.und(n),
                      p = r == u ? a.v0 > 0 : r < u;
                    let h, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (h = Math.abs(s) > t, h || (d = Math.abs(u - c) <= f, !d)); ++e) l && (m = c == u || c > u == p, m && (s = -s * n, c = u)), s += (1e-6 * -i.tension * (c - u) + .001 * -i.friction * s) / i.mass * v, c += s * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, a.durationProgress = n), c = r + i.easing(n) * (u - r), s = (c - a.lastPosition) / e, d = 1 == n
                }
                a.lastVelocity = s, Number.isNaN(c) && (console.warn("Got NaN while animating:", this), d = !0)
              }
              s && !s[l].done && (d = !1), d ? a.done = !0 : t = !1, a.setValue(c, i.round) && (r = !0)
            });
            const a = Td(this),
              l = a.getValue();
            if (t) {
              const e = td(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Ml.batchedUpdates(() => {
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
            if (Cc(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Ml.batchedUpdates(() => {
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
            return ru.und(e) ? (r = this.queue || [], this.queue = []) : r = [ru.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => dc(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), mc(this._state, e && this._lastCallId), Ml.batchedUpdates(() => this._stop(t, e)), this
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
            r = ru.obj(r) ? r[t] : r, (null == r || tc(r)) && (r = void 0), n = ru.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return xc(this) || (e.reverse && ([r, n] = [n, r]), n = td(n), ru.und(n) ? Td(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, Gd(e, (e, t) => /^on/.test(t) ? Kd(e, r) : e)), Nc(this, e, "onProps"), Ic(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return uc(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  Oc(this) || (jc(this, !0), du(i.pauseQueue), Ic(this, "onPause", fc(this, kc(this, this.animation.to)), this))
                },
                resume: () => {
                  Oc(this) && (jc(this, !1), Cc(this) && this._resume(), du(i.resumeQueue), Ic(this, "onResume", fc(this, kc(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Tc(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(pc(this));
            const n = !ru.und(e.to),
              o = !ru.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(pc(this));
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
              to: d = l,
              from: c = u
            } = e;
            !o || n || t.default && !ru.und(d) || (d = c), t.reverse && ([d, c] = [c, d]);
            const f = !nu(c, u);
            f && (a.from = c), c = td(c);
            const p = !nu(d, l);
            p && this._focus(d);
            const h = tc(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !h && function(e, t, r) {
              r && (sc(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), sc(e, t), Object.assign(e, t);
              for (const t in oc) null == e[t] && (e[t] = oc[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              ru.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, Hd(t.config, i), t.config !== s.config ? Hd(s.config, i) : void 0);
            let g = Td(this);
            if (!g || ru.und(d)) return r(fc(this, !0));
            const b = ru.und(t.reset) ? o && !t.default : !ru.und(c) && Ud(t.reset, i),
              _ = b ? c : this.get(),
              w = ec(d),
              x = ru.num(w) || ru.arr(w) || Cd(w),
              C = !h && (!x || Ud(s.immediate || t.immediate, i));
            if (p) {
              const e = Vd(d);
              if (e !== g.constructor) {
                if (!C) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const O = g.constructor;
            let P = ed(d),
              j = !1;
            if (!P) {
              const e = b || !xc(this) && f;
              (p || e) && (j = nu(ec(_), w), P = !j), (nu(a.immediate, C) || C) && nu(m.decay, v) && nu(m.velocity, y) || (P = !0)
            }
            if (j && Cc(this) && (a.changed && !b ? P = !0 : P || this._stop(l)), !h && ((P || ed(l)) && (a.values = g.getPayload(), a.toValues = ed(d) ? null : O == Id ? [1] : su(w)), a.immediate != C && (a.immediate = C, C || b || this._set(l)), P)) {
              const {
                onRest: e
              } = a;
              ou(Dc, e => Nc(this, t, e));
              const n = fc(this, kc(this, l));
              du(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && Ml.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? Hd(s.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(_), h ? r(hc(t.to, t, this._state, this)) : P ? this._start() : Cc(this) && !p ? this._pendingCalls.add(r) : r(cc(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (rd(this) && this._detach(), t.to = e, rd(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ed(t) && (sd(t, this), gc(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ed(e) && ad(e, this)
          }
          _set(e, t = !0) {
            const r = td(e);
            if (!ru.und(r)) {
              const e = Td(this);
              if (!e || !nu(r, e.getValue())) {
                const n = Vd(r);
                e && e.constructor == n ? e.setValue(r) : Ed(this, n.create(r)), e && Ml.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return Td(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Ic(this, "onStart", fc(this, kc(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Hd(this.animation.onChange, e, this)), Hd(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Td(this).reset(td(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Cc(this) || (Pc(this, !0), Oc(this) || this._resume())
          }
          _resume() {
            eu.skipAnimation ? this.finish() : _u.start(this)
          }
          _stop(e, t) {
            if (Cc(this)) {
              Pc(this, !1);
              const r = this.animation;
              ou(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), nd(this, {
                type: "idle",
                parent: this
              });
              const n = t ? pc(this.get()) : fc(this.get(), kc(this, e ?? r.to));
              du(this._pendingCalls, n), r.changed && (r.changed = !1, Ic(this, "onRest", n, this))
            }
          }
        };

      function kc(e, t) {
        const r = ec(t);
        return nu(ec(e.get()), r)
      }

      function Tc(e, t = e.loop, r = e.to) {
        const n = Hd(t);
        if (n) {
          const o = !0 !== n && Jd(n),
            i = (o || e).reverse,
            s = !o || o.reset;
          return Ec({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || tc(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function Ec(e) {
        const {
          to: t,
          from: r
        } = e = Jd(e), n = new Set;
        return ru.obj(t) && Rc(t, n), ru.obj(r) && Rc(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Rc(e, t) {
        iu(e, (e, r) => null != e && t.add(r))
      }
      var Dc = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Nc(e, t, r) {
        e.animation[r] = t[r] !== Zd(t, r) ? Kd(t[r], e.key) : void 0
      }

      function Ic(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Lc = ["onStart", "onChange", "onRest"],
        Mc = 1,
        zc = class {
          constructor(e, t) {
            this.id = Mc++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              ru.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Ec(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = su(e).map(Ec) : this.queue = [], this._flush ? this._flush(this, t) : (Bc(this, t), function(e, t) {
              return Promise.all(t.map(t => Ac(e, t))).then(t => dc(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              ou(su(t), t => r[t].stop(!!e))
            } else mc(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (ru.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              ou(su(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (ru.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              ou(su(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            iu(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, au(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !n && this._started,
              s = o || i && r.size ? this.get() : null;
            o && t.size && au(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, au(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Ml.onFrame(this._onFrame)
          }
        };
      async function Ac(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, u = ru.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const d = ru.arr(o) || ru.fun(o) ? o : void 0;
        d ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : ou(Lc, r => {
          const n = t[r];
          if (ru.fun(n)) {
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
            }, u && (u[r] = t[r])
          }
        });
        const c = e._state;
        t.pause === !c.paused ? (c.paused = t.pause, du(t.pause ? c.pauseQueue : c.resumeQueue)) : c.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          p = !0 === t.cancel || !0 === Zd(t, "cancel");
        (d || p && c.asyncId) && f.push(uc(++e._lastAsyncId, {
          props: t,
          state: c,
          actions: {
            pause: tu,
            resume: tu,
            start(t, r) {
              p ? (mc(c, e._lastAsyncId), r(pc(e))) : (t.onRest = a, r(hc(d, t, c, e)))
            }
          }
        })), c.paused && await new Promise(e => {
          c.resumeQueue.add(e)
        });
        const h = dc(e, await Promise.all(f));
        if (s && h.finished && (!r || !h.noop)) {
          const r = Tc(t, s, o);
          if (r) return Bc(e, [r]), Ac(e, r, !0)
        }
        return l && Ml.batchedUpdates(() => l(h, e, e.item)), h
      }

      function Vc(e, t) {
        const r = {
          ...e.springs
        };
        return t && ou(su(t), e => {
            ru.und(e.keys) && (e = Ec(e)), ru.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), qc(r, e, e => Fc(e))
          }),
          function(e, t) {
            iu(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, sd(t, e))
            })
          }(e, r), r
      }

      function Fc(e, t) {
        const r = new Sc;
        return r.key = e, t && sd(r, t), r
      }

      function qc(e, t, r) {
        t.keys && ou(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Bc(e, t) {
        ou(t, t => {
          qc(e.springs, t, t => Fc(t, e))
        })
      }
      var Wc = V.createContext({
          pause: !1,
          immediate: !1
        }),
        Xc = () => {
          const e = [],
            t = function(t) {
              xd(`${bd}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return ou(e, (e, o) => {
                if (ru.und(t)) n.push(e.start());
                else {
                  const i = r(t, e, o);
                  i && n.push(e.start(i))
                }
              }), n
            };
          t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
          }, t.delete = function(t) {
            const r = e.indexOf(t);
            ~r && e.splice(r, 1)
          }, t.pause = function() {
            return ou(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return ou(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            ou(e, (e, r) => {
              const n = ru.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return ou(e, (e, n) => {
              if (ru.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return ou(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return ou(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return ru.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        Hc = () => Xc(),
        Uc = () => (0, V.useState)(Hc)[0];

      function Kc(e, t, r) {
        const n = ru.fun(t) && t,
          {
            reset: o,
            sort: i,
            trail: s = 0,
            expires: a = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: u,
            ref: d,
            config: c
          } = n ? n() : t,
          f = (0, V.useMemo)(() => n || 3 == arguments.length ? Xc() : void 0, []),
          p = su(e),
          h = [],
          m = (0, V.useRef)(null),
          v = o ? null : m.current;
        Od(() => {
          m.current = h
        }), jd(() => (ou(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          ou(m.current, e => {
            e.expired && clearTimeout(e.expirationId), rc(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : Zc++
              })
            }
            return ru.und(r) ? e : ru.fun(r) ? e.map(r) : su(r)
          }(p, n ? n() : t, v),
          g = o && m.current || [];
        Od(() => ou(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          rc(e, f), Hd(u, t, r)
        }));
        const b = [];
        if (v && ou(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (h[t] = e)
          }), ou(p, (e, t) => {
            h[t] || (h[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new zc
            }, h[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          ou(b, (t, n) => {
            const o = v[n];
            ~t ? (e = h.indexOf(o), h[e] = {
              ...o,
              item: p[t]
            }) : r && h.splice(++e, 0, o)
          })
        }
        ru.fun(i) && h.sort((e, t) => i(e.item, t.item));
        let _ = -s;
        const w = Pd(),
          x = Gd(t),
          C = new Map,
          O = (0, V.useRef)(new Map),
          P = (0, V.useRef)(!1);
        ou(h, (e, r) => {
          const o = e.key,
            i = e.phase,
            u = n ? n() : t;
          let f, p;
          const h = Hd(u.delay || 0, o);
          if ("mount" == i) f = u.enter, p = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != i)
              if (e) f = u.leave, p = "leave";
              else {
                if (!(f = u.update)) return;
                p = "update"
              }
            else {
              if (e) return;
              f = u.enter, p = "enter"
            }
          }
          if (f = Hd(f, e.item, r), f = ru.obj(f) ? Jd(f) : {
              to: f
            }, !f.config) {
            const t = c || x.config;
            f.config = Hd(t, e.item, r, p)
          }
          _ += s;
          const g = {
            ...x,
            delay: h + _,
            ref: d,
            immediate: u.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == p && ru.und(g.from)) {
            const o = n ? n() : t,
              i = ru.und(o.initial) || v ? o.from : o.initial;
            g.from = Hd(i, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            Hd(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = Hd(a, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                }
              }
              e && t.some(e => e.expired) && (O.current.delete(r), l && (P.current = !0), w())
            }
          };
          const j = Vc(e.ctrl, g);
          "leave" === p && l ? O.current.set(e, {
            phase: p,
            springs: j,
            payload: g
          }) : C.set(e, {
            phase: p,
            springs: j,
            payload: g
          })
        });
        const j = (0, V.useContext)(Wc),
          S = function(e) {
            const t = (0, V.useRef)(void 0);
            return (0, V.useEffect)(() => {
              t.current = e
            }), t.current
          }(j),
          k = j !== S && function(e) {
            for (const t in e) return !0;
            return !1
          }(j);
        Od(() => {
          k && ou(h, e => {
            e.ctrl.start({
              default: j
            })
          })
        }, [j]), ou(C, (e, t) => {
          if (O.current.size) {
            const e = h.findIndex(e => e.key === t.key);
            h.splice(e, 1)
          }
        }), Od(() => {
          ou(O.current.size ? O.current : C, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), k && "enter" == e && n.start({
              default: j
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || P.current ? (n.start(t), P.current && (P.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const T = e => V.createElement(V.Fragment, null, h.map((t, r) => {
          const {
            springs: n
          } = C.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), i = ru.str(t.key) || ru.num(t.key) ? t.key : t.ctrl.id, s = V.version < "19.0.0", a = o?.props ?? {}, l = s ? o?.ref : a?.ref;
          return o && o.type ? V.createElement(o.type, {
            ...a,
            key: i,
            ref: l
          }) : o
        }));
        return f ? [T, f] : T
      }
      var Zc = 1,
        $c = class extends _c {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Xu(...t);
            const r = this._get(),
              n = Vd(r);
            Ed(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            nu(t, this.get()) || (Td(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Yc(this._active) && Qc(this)
          }
          _get() {
            const e = ru.arr(this.source) ? this.source.map(td) : su(td(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Yc(this._active) && (this.idle = !1, ou(Rd(this), e => {
              e.done = !1
            }), eu.skipAnimation ? (Ml.batchedUpdates(() => this.advance()), Qc(this)) : _u.start(this))
          }
          _attach() {
            let e = 1;
            ou(su(this.source), t => {
              ed(t) && sd(t, this), gc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            ou(su(this.source), e => {
              ed(e) && ad(e, this)
            }), this._active.clear(), Qc(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = su(this.source).reduce((e, t) => Math.max(e, (gc(t) ? t.priority : 0) + 1), 0))
          }
        };

      function Gc(e) {
        return !1 !== e.idle
      }

      function Yc(e) {
        return !e.size || Array.from(e).every(Gc)
      }

      function Qc(e) {
        e.idle || (e.idle = !0, ou(Rd(e), e => {
          e.done = !0
        }), nd(e, {
          type: "idle",
          parent: e
        }))
      }
      eu.assign({
        createStringInterpolator: gd,
        to: (e, t) => new $c(e, t)
      }), _u.advance;
      var Jc = /^--/;

      function ef(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Jc.test(e) || rf.hasOwnProperty(e) && rf[e] ? ("" + t).trim() : t + "px"
      }
      var tf = {},
        rf = {
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
        nf = ["Webkit", "Ms", "Moz", "O"];
      rf = Object.keys(rf).reduce((e, t) => (nf.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), rf);
      var of = /^(matrix|translate|scale|rotate|skew)/, sf = /^(translate)/, af = /^(rotate|skew)/, lf = (e, t) => ru.num(e) && 0 !== e ? e + t : e, uf = (e, t) => ru.arr(e) ? e.every(e => uf(e, t)) : ru.num(e) ? e === t : parseFloat(e) === t, df = class extends Md {
        constructor({
          x: e,
          y: t,
          z: r,
          ...n
        }) {
          const o = [],
            i = [];
          (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>lf(e,"px")).join(",")})`, uf(e, 0)])), iu(n, (e, t) => {
            if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
            else if (of.test(t)) {
              if (delete n[t], ru.und(e)) return;
              const r = sf.test(t) ? "px" : af.test(t) ? "deg" : "";
              o.push(su(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${lf(o,r)})`, uf(o, 0)] : e => [`${t}(${e.map(e=>lf(e,r)).join(",")})`, uf(e, t.startsWith("scale") ? 1 : 0)])
            }
          }), o.length && (n.transform = new cf(o, i)), super(n)
        }
      }, cf = class extends od {
        constructor(e, t) {
          super(), this.inputs = e, this.transforms = t, this._value = null
        }
        get() {
          return this._value || (this._value = this._get())
        }
        _get() {
          let e = "",
            t = !0;
          return ou(this.inputs, (r, n) => {
            const o = td(r[0]),
              [i, s] = this.transforms[n](ru.arr(o) ? o : r.map(td));
            e += " " + i, t = t && s
          }), t ? "none" : e
        }
        observerAdded(e) {
          1 == e && ou(this.inputs, e => ou(e, e => ed(e) && sd(e, this)))
        }
        observerRemoved(e) {
          0 == e && ou(this.inputs, e => ou(e, e => ed(e) && ad(e, this)))
        }
        eventObserved(e) {
          "change" == e.type && (this._value = null), nd(this, e)
        }
      };
      eu.assign({
        batchedUpdates: G.unstable_batchedUpdates,
        createStringInterpolator: gd,
        colors: Pu
      });
      var ff = Wd(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: i,
                scrollTop: s,
                scrollLeft: a,
                viewBox: l,
                ...u
              } = t,
              d = Object.values(u),
              c = Object.keys(u).map(t => r || e.hasAttribute(t) ? t : tf[t] || (tf[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = ef(t, o[t]);
                Jc.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } c.forEach((t, r) => {
              e.setAttribute(t, d[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new df(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        pf = ff.animated;

      function hf(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }
      "undefined" == typeof window || !window.document || window.document.createElement;
      var mf = r(85426);

      function vf(e) {
        const t = yf(e),
          r = V.forwardRef((e, r) => {
            const {
              children: n,
              ...o
            } = e, i = V.Children.toArray(n), s = i.find(bf);
            if (s) {
              const e = s.props.children,
                n = i.map(t => t === s ? V.Children.count(e) > 1 ? V.Children.only(null) : V.isValidElement(e) ? e.props.children : null : t);
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
      }

      function yf(e) {
        const t = V.forwardRef((e, t) => {
          const {
            children: r,
            ...n
          } = e;
          if (V.isValidElement(r)) {
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
                    i = t[n];
                  /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...i
                  } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== V.Fragment && (o.ref = t ? (0, Y.t)(t, e) : e), V.cloneElement(r, o)
          }
          return V.Children.count(r) > 1 ? V.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var gf = Symbol("radix.slottable");

      function bf(e) {
        return V.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === gf
      }
      var _f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const r = vf(`Primitive.${t}`),
          n = V.forwardRef((e, n) => {
            const {
              asChild: o,
              ...i
            } = e, s = o ? r : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, x.jsx)(s, {
              ...i,
              ref: n
            })
          });
        return n.displayName = `Primitive.${t}`, {
          ...e,
          [t]: n
        }
      }, {});

      function wf(e, t) {
        e && G.flushSync(() => e.dispatchEvent(t))
      }
      var xf, Cf = r(76286),
        Of = r(94040),
        Pf = "dismissableLayer.update",
        jf = V.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Sf = V.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, u = V.useContext(jf), [d, c] = V.useState(null), f = d?.ownerDocument ?? globalThis?.document, [, p] = V.useState({}), h = (0, Y.s)(t, e => c(e)), m = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = d ? m.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, _ = g >= y, w = function(e, t = globalThis?.document) {
            const r = (0, Cf.c)(e),
              n = V.useRef(!1),
              o = V.useRef(() => {});
            return V.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Ef("dismissableLayer.pointerDownOutside", r, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, {
                      once: !0
                    })) : n()
                  } else t.removeEventListener("click", o.current);
                  n.current = !1
                },
                i = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }, [t, r]), {
              onPointerDownCapture: () => n.current = !0
            }
          }(e => {
            const t = e.target,
              r = [...u.branches].some(e => e.contains(t));
            _ && !r && (o?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f), C = function(e, t = globalThis?.document) {
            const r = (0, Cf.c)(e),
              n = V.useRef(!1);
            return V.useEffect(() => {
              const e = e => {
                e.target && !n.current && Ef("dismissableLayer.focusOutside", r, {
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
            [...u.branches].some(e => e.contains(t)) || (i?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f);
          return (0, Of.U)(e => {
            g === u.layers.size - 1 && (n?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), V.useEffect(() => {
            if (d) return r && (0 === u.layersWithOutsidePointerEventsDisabled.size && (xf = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Tf(), () => {
              r && 1 === u.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = xf)
            }
          }, [d, f, r, u]), V.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Tf())
          }, [d, u]), V.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(Pf, e), () => document.removeEventListener(Pf, e)
          }, []), (0, x.jsx)(_f.div, {
            ...l,
            ref: h,
            style: {
              pointerEvents: b ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: hf(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: hf(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: hf(e.onPointerDownCapture, w.onPointerDownCapture)
          })
        });
      Sf.displayName = "DismissableLayer";
      var kf = V.forwardRef((e, t) => {
        const r = V.useContext(jf),
          n = V.useRef(null),
          o = (0, Y.s)(t, n);
        return V.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, x.jsx)(_f.div, {
          ...e,
          ref: o
        })
      });

      function Tf() {
        const e = new CustomEvent(Pf);
        document.dispatchEvent(e)
      }

      function Ef(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? wf(o, i) : o.dispatchEvent(i)
      }
      kf.displayName = "DismissableLayerBranch";
      var Rf = Sf,
        Df = kf,
        Nf = r(86126);
      const If = ["top", "right", "bottom", "left"],
        Lf = Math.min,
        Mf = Math.max,
        zf = Math.round,
        Af = Math.floor,
        Vf = e => ({
          x: e,
          y: e
        }),
        Ff = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        qf = {
          start: "end",
          end: "start"
        };

      function Bf(e, t, r) {
        return Mf(e, Lf(t, r))
      }

      function Wf(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Xf(e) {
        return e.split("-")[0]
      }

      function Hf(e) {
        return e.split("-")[1]
      }

      function Uf(e) {
        return "x" === e ? "y" : "x"
      }

      function Kf(e) {
        return "y" === e ? "height" : "width"
      }
      const Zf = new Set(["top", "bottom"]);

      function $f(e) {
        return Zf.has(Xf(e)) ? "y" : "x"
      }

      function Gf(e) {
        return Uf($f(e))
      }

      function Yf(e) {
        return e.replace(/start|end/g, e => qf[e])
      }
      const Qf = ["left", "right"],
        Jf = ["right", "left"],
        ep = ["top", "bottom"],
        tp = ["bottom", "top"];

      function rp(e) {
        return e.replace(/left|right|bottom|top/g, e => Ff[e])
      }

      function np(e) {
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

      function op(e) {
        const {
          x: t,
          y: r,
          width: n,
          height: o
        } = e;
        return {
          width: n,
          height: o,
          top: r,
          left: t,
          right: t + n,
          bottom: r + o,
          x: t,
          y: r
        }
      }

      function ip(e, t, r) {
        let {
          reference: n,
          floating: o
        } = e;
        const i = $f(t),
          s = Gf(t),
          a = Kf(s),
          l = Xf(t),
          u = "y" === i,
          d = n.x + n.width / 2 - o.width / 2,
          c = n.y + n.height / 2 - o.height / 2,
          f = n[a] / 2 - o[a] / 2;
        let p;
        switch (l) {
          case "top":
            p = {
              x: d,
              y: n.y - o.height
            };
            break;
          case "bottom":
            p = {
              x: d,
              y: n.y + n.height
            };
            break;
          case "right":
            p = {
              x: n.x + n.width,
              y: c
            };
            break;
          case "left":
            p = {
              x: n.x - o.width,
              y: c
            };
            break;
          default:
            p = {
              x: n.x,
              y: n.y
            }
        }
        switch (Hf(t)) {
          case "start":
            p[s] -= f * (r && u ? -1 : 1);
            break;
          case "end":
            p[s] += f * (r && u ? -1 : 1)
        }
        return p
      }
      async function sp(e, t) {
        var r;
        void 0 === t && (t = {});
        const {
          x: n,
          y: o,
          platform: i,
          rects: s,
          elements: a,
          strategy: l
        } = e, {
          boundary: u = "clippingAncestors",
          rootBoundary: d = "viewport",
          elementContext: c = "floating",
          altBoundary: f = !1,
          padding: p = 0
        } = Wf(t, e), h = np(p), m = a[f ? "floating" === c ? "reference" : "floating" : c], v = op(await i.getClippingRect({
          element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: u,
          rootBoundary: d,
          strategy: l
        })), y = "floating" === c ? {
          x: n,
          y: o,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(g)) && await (null == i.getScale ? void 0 : i.getScale(g)) || {
          x: 1,
          y: 1
        }, _ = op(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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

      function ap(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function lp(e) {
        return If.some(t => e[t] >= 0)
      }
      const up = new Set(["left", "top"]);

      function dp() {
        return "undefined" != typeof window
      }

      function cp(e) {
        return hp(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function fp(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function pp(e) {
        var t;
        return null == (t = (hp(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function hp(e) {
        return !!dp() && (e instanceof Node || e instanceof fp(e).Node)
      }

      function mp(e) {
        return !!dp() && (e instanceof Element || e instanceof fp(e).Element)
      }

      function vp(e) {
        return !!dp() && (e instanceof HTMLElement || e instanceof fp(e).HTMLElement)
      }

      function yp(e) {
        return !(!dp() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof fp(e).ShadowRoot)
      }
      const gp = new Set(["inline", "contents"]);

      function bp(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: o
        } = Rp(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !gp.has(o)
      }
      const _p = new Set(["table", "td", "th"]);

      function wp(e) {
        return _p.has(cp(e))
      }
      const xp = [":popover-open", ":modal"];

      function Cp(e) {
        return xp.some(t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        })
      }
      const Op = ["transform", "translate", "scale", "rotate", "perspective"],
        Pp = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        jp = ["paint", "layout", "strict", "content"];

      function Sp(e) {
        const t = kp(),
          r = mp(e) ? Rp(e) : e;
        return Op.some(e => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || Pp.some(e => (r.willChange || "").includes(e)) || jp.some(e => (r.contain || "").includes(e))
      }

      function kp() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      const Tp = new Set(["html", "body", "#document"]);

      function Ep(e) {
        return Tp.has(cp(e))
      }

      function Rp(e) {
        return fp(e).getComputedStyle(e)
      }

      function Dp(e) {
        return mp(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Np(e) {
        if ("html" === cp(e)) return e;
        const t = e.assignedSlot || e.parentNode || yp(e) && e.host || pp(e);
        return yp(t) ? t.host : t
      }

      function Ip(e) {
        const t = Np(e);
        return Ep(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vp(t) && bp(t) ? t : Ip(t)
      }

      function Lp(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const o = Ip(e),
          i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = fp(o);
        if (i) {
          const e = Mp(s);
          return t.concat(s, s.visualViewport || [], bp(o) ? o : [], e && r ? Lp(e) : [])
        }
        return t.concat(o, Lp(o, [], r))
      }

      function Mp(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function zp(e) {
        const t = Rp(e);
        let r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0;
        const o = vp(e),
          i = o ? e.offsetWidth : r,
          s = o ? e.offsetHeight : n,
          a = zf(r) !== i || zf(n) !== s;
        return a && (r = i, n = s), {
          width: r,
          height: n,
          $: a
        }
      }

      function Ap(e) {
        return mp(e) ? e : e.contextElement
      }

      function Vp(e) {
        const t = Ap(e);
        if (!vp(t)) return Vf(1);
        const r = t.getBoundingClientRect(),
          {
            width: n,
            height: o,
            $: i
          } = zp(t);
        let s = (i ? zf(r.width) : r.width) / n,
          a = (i ? zf(r.height) : r.height) / o;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
          x: s,
          y: a
        }
      }
      const Fp = Vf(0);

      function qp(e) {
        const t = fp(e);
        return kp() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Fp
      }

      function Bp(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const o = e.getBoundingClientRect(),
          i = Ap(e);
        let s = Vf(1);
        t && (n ? mp(n) && (s = Vp(n)) : s = Vp(e));
        const a = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== fp(e)) && t
        }(i, r, n) ? qp(i) : Vf(0);
        let l = (o.left + a.x) / s.x,
          u = (o.top + a.y) / s.y,
          d = o.width / s.x,
          c = o.height / s.y;
        if (i) {
          const e = fp(i),
            t = n && mp(n) ? fp(n) : n;
          let r = e,
            o = Mp(r);
          for (; o && n && t !== r;) {
            const e = Vp(o),
              t = o.getBoundingClientRect(),
              n = Rp(o),
              i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
            l *= e.x, u *= e.y, d *= e.x, c *= e.y, l += i, u += s, r = fp(o), o = Mp(r)
          }
        }
        return op({
          width: d,
          height: c,
          x: l,
          y: u
        })
      }

      function Wp(e, t) {
        const r = Dp(e).scrollLeft;
        return t ? t.left + r : Bp(pp(e)).left + r
      }

      function Xp(e, t) {
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - Wp(e, r),
          y: r.top + t.scrollTop
        }
      }
      const Hp = new Set(["absolute", "fixed"]);

      function Up(e, t, r) {
        let n;
        if ("viewport" === t) n = function(e, t) {
          const r = fp(e),
            n = pp(e),
            o = r.visualViewport;
          let i = n.clientWidth,
            s = n.clientHeight,
            a = 0,
            l = 0;
          if (o) {
            i = o.width, s = o.height;
            const e = kp();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, l = o.offsetTop)
          }
          const u = Wp(n);
          if (u <= 0) {
            const e = n.ownerDocument,
              t = e.body,
              r = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0,
              s = Math.abs(n.clientWidth - t.clientWidth - o);
            s <= 25 && (i -= s)
          } else u <= 25 && (i += u);
          return {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }(e, r);
        else if ("document" === t) n = function(e) {
          const t = pp(e),
            r = Dp(e),
            n = e.ownerDocument.body,
            o = Mf(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            i = Mf(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let s = -r.scrollLeft + Wp(e);
          const a = -r.scrollTop;
          return "rtl" === Rp(n).direction && (s += Mf(t.clientWidth, n.clientWidth) - o), {
            width: o,
            height: i,
            x: s,
            y: a
          }
        }(pp(e));
        else if (mp(t)) n = function(e, t) {
          const r = Bp(e, !0, "fixed" === t),
            n = r.top + e.clientTop,
            o = r.left + e.clientLeft,
            i = vp(e) ? Vp(e) : Vf(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: n * i.y
          }
        }(t, r);
        else {
          const r = qp(e);
          n = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
          }
        }
        return op(n)
      }

      function Kp(e, t) {
        const r = Np(e);
        return !(r === t || !mp(r) || Ep(r)) && ("fixed" === Rp(r).position || Kp(r, t))
      }

      function Zp(e, t, r) {
        const n = vp(t),
          o = pp(t),
          i = "fixed" === r,
          s = Bp(e, !0, i, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Vf(0);

        function u() {
          l.x = Wp(o)
        }
        if (n || !n && !i)
          if (("body" !== cp(t) || bp(o)) && (a = Dp(t)), n) {
            const e = Bp(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && u();
        i && !n && o && u();
        const d = !o || n || i ? Vf(0) : Xp(o, a);
        return {
          x: s.left + a.scrollLeft - l.x - d.x,
          y: s.top + a.scrollTop - l.y - d.y,
          width: s.width,
          height: s.height
        }
      }

      function $p(e) {
        return "static" === Rp(e).position
      }

      function Gp(e, t) {
        if (!vp(e) || "fixed" === Rp(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return pp(e) === r && (r = r.ownerDocument.body), r
      }

      function Yp(e, t) {
        const r = fp(e);
        if (Cp(e)) return r;
        if (!vp(e)) {
          let t = Np(e);
          for (; t && !Ep(t);) {
            if (mp(t) && !$p(t)) return t;
            t = Np(t)
          }
          return r
        }
        let n = Gp(e, t);
        for (; n && wp(n) && $p(n);) n = Gp(n, t);
        return n && Ep(n) && $p(n) && !Sp(n) ? r : n || function(e) {
          let t = Np(e);
          for (; vp(t) && !Ep(t);) {
            if (Sp(t)) return t;
            if (Cp(t)) return null;
            t = Np(t)
          }
          return null
        }(e) || r
      }
      const Qp = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: r,
            offsetParent: n,
            strategy: o
          } = e;
          const i = "fixed" === o,
            s = pp(n),
            a = !!t && Cp(t.floating);
          if (n === s || a && i) return r;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = Vf(1);
          const d = Vf(0),
            c = vp(n);
          if ((c || !c && !i) && (("body" !== cp(n) || bp(s)) && (l = Dp(n)), vp(n))) {
            const e = Bp(n);
            u = Vp(n), d.x = e.x + n.clientLeft, d.y = e.y + n.clientTop
          }
          const f = !s || c || i ? Vf(0) : Xp(s, l);
          return {
            width: r.width * u.x,
            height: r.height * u.y,
            x: r.x * u.x - l.scrollLeft * u.x + d.x + f.x,
            y: r.y * u.y - l.scrollTop * u.y + d.y + f.y
          }
        },
        getDocumentElement: pp,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: n,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === r ? Cp(t) ? [] : function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let n = Lp(e, [], !1).filter(e => mp(e) && "body" !== cp(e)),
                o = null;
              const i = "fixed" === Rp(e).position;
              let s = i ? Np(e) : e;
              for (; mp(s) && !Ep(s);) {
                const t = Rp(s),
                  r = Sp(s);
                r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && o && Hp.has(o.position) || bp(s) && !r && Kp(e, s)) ? n = n.filter(e => e !== s) : o = t, s = Np(s)
              }
              return t.set(e, n), n
            }(t, this._c) : [].concat(r), n],
            s = i[0],
            a = i.reduce((e, r) => {
              const n = Up(t, r, o);
              return e.top = Mf(n.top, e.top), e.right = Lf(n.right, e.right), e.bottom = Lf(n.bottom, e.bottom), e.left = Mf(n.left, e.left), e
            }, Up(t, s, o));
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
          }
        },
        getOffsetParent: Yp,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || Yp,
            r = this.getDimensions,
            n = await r(e.floating);
          return {
            reference: Zp(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: n.width,
              height: n.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: r
          } = zp(e);
          return {
            width: t,
            height: r
          }
        },
        getScale: Vp,
        isElement: mp,
        isRTL: function(e) {
          return "rtl" === Rp(e).direction
        }
      };

      function Jp(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const eh = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var r, n;
              const {
                x: o,
                y: i,
                placement: s,
                middlewareData: a
              } = t, l = await async function(e, t) {
                const {
                  placement: r,
                  platform: n,
                  elements: o
                } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), s = Xf(r), a = Hf(r), l = "y" === $f(r), u = up.has(s) ? -1 : 1, d = i && l ? -1 : 1, c = Wf(t, e);
                let {
                  mainAxis: f,
                  crossAxis: p,
                  alignmentAxis: h
                } = "number" == typeof c ? {
                  mainAxis: c,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: c.mainAxis || 0,
                  crossAxis: c.crossAxis || 0,
                  alignmentAxis: c.alignmentAxis
                };
                return a && "number" == typeof h && (p = "end" === a ? -1 * h : h), l ? {
                  x: p * d,
                  y: f * u
                } : {
                  x: f * u,
                  y: p * d
                }
              }(t, e);
              return s === (null == (r = a.offset) ? void 0 : r.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                  ...l,
                  placement: s
                }
              }
            }
          }
        },
        th = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: r,
                y: n,
                placement: o
              } = t, {
                mainAxis: i = !0,
                crossAxis: s = !1,
                limiter: a = {
                  fn: e => {
                    let {
                      x: t,
                      y: r
                    } = e;
                    return {
                      x: t,
                      y: r
                    }
                  }
                },
                ...l
              } = Wf(e, t), u = {
                x: r,
                y: n
              }, d = await sp(t, l), c = $f(Xf(o)), f = Uf(c);
              let p = u[f],
                h = u[c];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                p = Bf(p + d["y" === f ? "top" : "left"], p, p - d[e])
              }
              if (s) {
                const e = "y" === c ? "bottom" : "right";
                h = Bf(h + d["y" === c ? "top" : "left"], h, h - d[e])
              }
              const m = a.fn({
                ...t,
                [f]: p,
                [c]: h
              });
              return {
                ...m,
                data: {
                  x: m.x - r,
                  y: m.y - n,
                  enabled: {
                    [f]: i,
                    [c]: s
                  }
                }
              }
            }
          }
        },
        rh = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var r, n;
              const {
                placement: o,
                middlewareData: i,
                rects: s,
                initialPlacement: a,
                platform: l,
                elements: u
              } = t, {
                mainAxis: d = !0,
                crossAxis: c = !0,
                fallbackPlacements: f,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: m = !0,
                ...v
              } = Wf(e, t);
              if (null != (r = i.arrow) && r.alignmentOffset) return {};
              const y = Xf(o),
                g = $f(a),
                b = Xf(a) === a,
                _ = await (null == l.isRTL ? void 0 : l.isRTL(u.floating)),
                w = f || (b || !m ? [rp(a)] : function(e) {
                  const t = rp(e);
                  return [Yf(e), t, Yf(t)]
                }(a)),
                x = "none" !== h;
              !f && x && w.push(... function(e, t, r, n) {
                const o = Hf(e);
                let i = function(e, t, r) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return r ? t ? Jf : Qf : t ? Qf : Jf;
                    case "left":
                    case "right":
                      return t ? ep : tp;
                    default:
                      return []
                  }
                }(Xf(e), "start" === r, n);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(Yf)))), i
              }(a, m, h, _));
              const C = [a, ...w],
                O = await sp(t, v),
                P = [];
              let j = (null == (n = i.flip) ? void 0 : n.overflows) || [];
              if (d && P.push(O[y]), c) {
                const e = function(e, t, r) {
                  void 0 === r && (r = !1);
                  const n = Hf(e),
                    o = Gf(e),
                    i = Kf(o);
                  let s = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (s = rp(s)), [s, rp(s)]
                }(o, s, _);
                P.push(O[e[0]], O[e[1]])
              }
              if (j = [...j, {
                  placement: o,
                  overflows: P
                }], !P.every(e => e <= 0)) {
                var S, k;
                const e = ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1,
                  t = C[e];
                if (t && ("alignment" !== c || g === $f(t) || j.every(e => $f(e.placement) !== g || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: j
                  },
                  reset: {
                    placement: t
                  }
                };
                let r = null == (k = j.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : k.placement;
                if (!r) switch (p) {
                  case "bestFit": {
                    var T;
                    const e = null == (T = j.filter(e => {
                      if (x) {
                        const t = $f(e.placement);
                        return t === g || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : T[0];
                    e && (r = e);
                    break
                  }
                  case "initialPlacement":
                    r = a
                }
                if (o !== r) return {
                  reset: {
                    placement: r
                  }
                }
              }
              return {}
            }
          }
        },
        nh = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              var r, n;
              const {
                placement: o,
                rects: i,
                platform: s,
                elements: a
              } = t, {
                apply: l = () => {},
                ...u
              } = Wf(e, t), d = await sp(t, u), c = Xf(o), f = Hf(o), p = "y" === $f(o), {
                width: h,
                height: m
              } = i.floating;
              let v, y;
              "top" === c || "bottom" === c ? (v = c, y = f === (await (null == s.isRTL ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = c, v = "end" === f ? "top" : "bottom");
              const g = m - d.top - d.bottom,
                b = h - d.left - d.right,
                _ = Lf(m - d[v], g),
                w = Lf(h - d[y], b),
                x = !t.middlewareData.shift;
              let C = _,
                O = w;
              if (null != (r = t.middlewareData.shift) && r.enabled.x && (O = b), null != (n = t.middlewareData.shift) && n.enabled.y && (C = g), x && !f) {
                const e = Mf(d.left, 0),
                  t = Mf(d.right, 0),
                  r = Mf(d.top, 0),
                  n = Mf(d.bottom, 0);
                p ? O = h - 2 * (0 !== e || 0 !== t ? e + t : Mf(d.left, d.right)) : C = m - 2 * (0 !== r || 0 !== n ? r + n : Mf(d.top, d.bottom))
              }
              await l({
                ...t,
                availableWidth: O,
                availableHeight: C
              });
              const P = await s.getDimensions(a.floating);
              return h !== P.width || m !== P.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        oh = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: r
              } = t, {
                strategy: n = "referenceHidden",
                ...o
              } = Wf(e, t);
              switch (n) {
                case "referenceHidden": {
                  const e = ap(await sp(t, {
                    ...o,
                    elementContext: "reference"
                  }), r.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: lp(e)
                    }
                  }
                }
                case "escaped": {
                  const e = ap(await sp(t, {
                    ...o,
                    altBoundary: !0
                  }), r.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: lp(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        ih = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: r,
              y: n,
              placement: o,
              rects: i,
              platform: s,
              elements: a,
              middlewareData: l
            } = t, {
              element: u,
              padding: d = 0
            } = Wf(e, t) || {};
            if (null == u) return {};
            const c = np(d),
              f = {
                x: r,
                y: n
              },
              p = Gf(o),
              h = Kf(p),
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
              P = C / 2 - m[h] / 2 - 1,
              j = Lf(c[y], P),
              S = Lf(c[g], P),
              k = j,
              T = C - m[h] - S,
              E = C / 2 - m[h] / 2 + O,
              R = Bf(k, E, T),
              D = !l.arrow && null != Hf(o) && E !== R && i.reference[h] / 2 - (E < k ? j : S) - m[h] / 2 < 0,
              N = D ? E < k ? E - k : E - T : 0;
            return {
              [p]: f[p] + N,
              data: {
                [p]: R,
                centerOffset: E - R - N,
                ...D && {
                  alignmentOffset: N
                }
              },
              reset: D
            }
          }
        }),
        sh = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: r,
                y: n,
                placement: o,
                rects: i,
                middlewareData: s
              } = t, {
                offset: a = 0,
                mainAxis: l = !0,
                crossAxis: u = !0
              } = Wf(e, t), d = {
                x: r,
                y: n
              }, c = $f(o), f = Uf(c);
              let p = d[f],
                h = d[c];
              const m = Wf(a, t),
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
                  r = i.reference[f] + i.reference[e] - v.mainAxis;
                p < t ? p = t : p > r && (p = r)
              }
              if (u) {
                var y, g;
                const e = "y" === f ? "width" : "height",
                  t = up.has(Xf(o)),
                  r = i.reference[c] - i.floating[e] + (t && (null == (y = s.offset) ? void 0 : y[c]) || 0) + (t ? 0 : v.crossAxis),
                  n = i.reference[c] + i.reference[e] + (t ? 0 : (null == (g = s.offset) ? void 0 : g[c]) || 0) - (t ? v.crossAxis : 0);
                h < r ? h = r : h > n && (h = n)
              }
              return {
                [f]: p,
                [c]: h
              }
            }
          }
        },
        ah = (e, t, r) => {
          const n = new Map,
            o = {
              platform: Qp,
              ...r
            },
            i = {
              ...o.platform,
              _c: n
            };
          return (async (e, t, r) => {
            const {
              placement: n = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: s
            } = r, a = i.filter(Boolean), l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let u = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: d,
                y: c
              } = ip(u, n, l),
              f = n,
              p = {},
              h = 0;
            for (let r = 0; r < a.length; r++) {
              const {
                name: i,
                fn: m
              } = a[r], {
                x: v,
                y,
                data: g,
                reset: b
              } = await m({
                x: d,
                y: c,
                initialPlacement: n,
                placement: f,
                strategy: o,
                middlewareData: p,
                rects: u,
                platform: s,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              d = null != v ? v : d, c = null != y ? y : c, p = {
                ...p,
                [i]: {
                  ...p[i],
                  ...g
                }
              }, b && h <= 50 && (h++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (u = !0 === b.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : b.rects), ({
                x: d,
                y: c
              } = ip(u, f, l))), r = -1)
            }
            return {
              x: d,
              y: c,
              placement: f,
              strategy: o,
              middlewareData: p
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var lh = "undefined" != typeof document ? V.useLayoutEffect : function() {};

      function uh(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 !== n--;)
              if (!uh(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || uh(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function dh(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function ch(e, t) {
        const r = dh(e);
        return Math.round(t * r) / r
      }

      function fh(e) {
        const t = V.useRef(e);
        return lh(() => {
          t.current = e
        }), t
      }
      const ph = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: r,
              padding: n
            } = "function" == typeof e ? e(t) : e;
            return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? ih({
              element: r.current,
              padding: n
            }).fn(t) : {} : r ? ih({
              element: r,
              padding: n
            }).fn(t) : {};
            var o
          }
        }),
        hh = (e, t) => ({
          ...eh(e),
          options: [e, t]
        }),
        mh = (e, t) => ({
          ...th(e),
          options: [e, t]
        }),
        vh = (e, t) => ({
          ...sh(e),
          options: [e, t]
        }),
        yh = (e, t) => ({
          ...rh(e),
          options: [e, t]
        }),
        gh = (e, t) => ({
          ...nh(e),
          options: [e, t]
        }),
        bh = (e, t) => ({
          ...oh(e),
          options: [e, t]
        }),
        _h = (e, t) => ({
          ...ph(e),
          options: [e, t]
        });
      var wh = V.forwardRef((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, x.jsx)(_f.svg, {
          ...i,
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
      wh.displayName = "Arrow";
      var xh = wh,
        Ch = r(63155);

      function Oh(e) {
        const [t, r] = V.useState(void 0);
        return (0, Ch.N)(() => {
          if (e) {
            r({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver(t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const n = t[0];
              let o, i;
              if ("borderBoxSize" in n) {
                const e = n.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, i = t.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              r({
                width: o,
                height: i
              })
            });
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          r(void 0)
        }, [e]), t
      }
      var Ph = "Popper",
        [jh, Sh] = (0, mf.A)(Ph),
        [kh, Th] = jh(Ph),
        Eh = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = V.useState(null);
          return (0, x.jsx)(kh, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      Eh.displayName = Ph;
      var Rh = "PopperAnchor",
        Dh = V.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, i = Th(Rh, r), s = V.useRef(null), a = (0, Y.s)(t, s), l = V.useRef(null);
          return V.useEffect(() => {
            const e = l.current;
            l.current = n?.current || s.current, e !== l.current && i.onAnchorChange(l.current)
          }), n ? null : (0, x.jsx)(_f.div, {
            ...o,
            ref: a
          })
        });
      Dh.displayName = Rh;
      var Nh = "PopperContent",
        [Ih, Lh] = jh(Nh),
        Mh = V.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: c = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: h,
            ...m
          } = e, v = Th(Nh, r), [y, g] = V.useState(null), b = (0, Y.s)(t, e => g(e)), [_, w] = V.useState(null), C = Oh(_), O = C?.width ?? 0, P = C?.height ?? 0, j = n + ("center" !== i ? "-" + i : ""), S = "number" == typeof d ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
          }, k = Array.isArray(u) ? u : [u], T = k.length > 0, E = {
            padding: S,
            boundary: k.filter(Fh),
            altBoundary: T
          }, {
            refs: R,
            floatingStyles: D,
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
                reference: i,
                floating: s
              } = {},
              transform: a = !0,
              whileElementsMounted: l,
              open: u
            } = e, [d, c] = V.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = V.useState(n);
            uh(f, n) || p(n);
            const [h, m] = V.useState(null), [v, y] = V.useState(null), g = V.useCallback(e => {
              e !== x.current && (x.current = e, m(e))
            }, []), b = V.useCallback(e => {
              e !== C.current && (C.current = e, y(e))
            }, []), _ = i || h, w = s || v, x = V.useRef(null), C = V.useRef(null), O = V.useRef(d), P = null != l, j = fh(l), S = fh(o), k = fh(u), T = V.useCallback(() => {
              if (!x.current || !C.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              S.current && (e.platform = S.current), ah(x.current, C.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== k.current
                };
                E.current && !uh(O.current, t) && (O.current = t, G.flushSync(() => {
                  c(t)
                }))
              })
            }, [f, t, r, S, k]);
            lh(() => {
              !1 === u && O.current.isPositioned && (O.current.isPositioned = !1, c(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [u]);
            const E = V.useRef(!1);
            lh(() => (E.current = !0, () => {
              E.current = !1
            }), []), lh(() => {
              if (_ && (x.current = _), w && (C.current = w), _ && w) {
                if (j.current) return j.current(_, w, T);
                T()
              }
            }, [_, w, T, j, P]);
            const R = V.useMemo(() => ({
                reference: x,
                floating: C,
                setReference: g,
                setFloating: b
              }), [g, b]),
              D = V.useMemo(() => ({
                reference: _,
                floating: w
              }), [_, w]),
              N = V.useMemo(() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!D.floating) return e;
                const t = ch(D.floating, d.x),
                  n = ch(D.floating, d.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...dh(D.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }, [r, a, D.floating, d.x, d.y]);
            return V.useMemo(() => ({
              ...d,
              update: T,
              refs: R,
              elements: D,
              floatingStyles: N
            }), [d, T, R, D, N])
          }({
            strategy: "fixed",
            placement: j,
            whileElementsMounted: (...e) => function(e, t, r, n) {
              void 0 === n && (n = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: s = "function" == typeof ResizeObserver,
                layoutShift: a = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = n, u = Ap(e), d = o || i ? [...u ? Lp(u) : [], ...Lp(t)] : [];
              d.forEach(e => {
                o && e.addEventListener("scroll", r, {
                  passive: !0
                }), i && e.addEventListener("resize", r)
              });
              const c = u && a ? function(e, t) {
                let r, n = null;
                const o = pp(e);

                function i() {
                  var e;
                  clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                }
                return function s(a, l) {
                  void 0 === a && (a = !1), void 0 === l && (l = 1), i();
                  const u = e.getBoundingClientRect(),
                    {
                      left: d,
                      top: c,
                      width: f,
                      height: p
                    } = u;
                  if (a || t(), !f || !p) return;
                  const h = {
                    rootMargin: -Af(c) + "px " + -Af(o.clientWidth - (d + f)) + "px " + -Af(o.clientHeight - (c + p)) + "px " + -Af(d) + "px",
                    threshold: Mf(0, Lf(1, l)) || 1
                  };
                  let m = !0;

                  function v(t) {
                    const n = t[0].intersectionRatio;
                    if (n !== l) {
                      if (!m) return s();
                      n ? s(!1, n) : r = setTimeout(() => {
                        s(!1, 1e-7)
                      }, 1e3)
                    }
                    1 !== n || Jp(u, e.getBoundingClientRect()) || s(), m = !1
                  }
                  try {
                    n = new IntersectionObserver(v, {
                      ...h,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    n = new IntersectionObserver(v, h)
                  }
                  n.observe(e)
                }(!0), i
              }(u, r) : null;
              let f, p = -1,
                h = null;
              s && (h = new ResizeObserver(e => {
                let [n] = e;
                n && n.target === u && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                  var e;
                  null == (e = h) || e.observe(t)
                })), r()
              }), u && !l && h.observe(u), h.observe(t));
              let m = l ? Bp(e) : null;
              return l && function t() {
                const n = Bp(e);
                m && !Jp(m, n) && r(), m = n, f = requestAnimationFrame(t)
              }(), r(), () => {
                var e;
                d.forEach(e => {
                  o && e.removeEventListener("scroll", r), i && e.removeEventListener("resize", r)
                }), null == c || c(), null == (e = h) || e.disconnect(), h = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [hh({
              mainAxis: o + P,
              alignmentAxis: s
            }), l && mh({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === c ? vh() : void 0,
              ...E
            }), l && yh({
              ...E
            }), gh({
              ...E,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: i
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${r}px`), s.setProperty("--radix-popper-available-height", `${n}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), _ && _h({
              element: _,
              padding: a
            }), qh({
              arrowWidth: O,
              arrowHeight: P
            }), f && bh({
              strategy: "referenceHidden",
              ...E
            })]
          }), [M, z] = Bh(N), A = (0, Cf.c)(h);
          (0, Ch.N)(() => {
            I && A?.()
          }, [I, A]);
          const F = L.arrow?.x,
            q = L.arrow?.y,
            B = 0 !== L.arrow?.centerOffset,
            [W, X] = V.useState();
          return (0, Ch.N)(() => {
            y && X(window.getComputedStyle(y).zIndex)
          }, [y]), (0, x.jsx)("div", {
            ref: R.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...D,
              transform: I ? D.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: W,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, x.jsx)(Ih, {
              scope: r,
              placedSide: M,
              onArrowChange: w,
              arrowX: F,
              arrowY: q,
              shouldHideArrow: B,
              children: (0, x.jsx)(_f.div, {
                "data-side": M,
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
      Mh.displayName = Nh;
      var zh = "PopperArrow",
        Ah = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Vh = V.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Lh(zh, r), i = Ah[o.placedSide];
          return (0, x.jsx)("span", {
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
            children: (0, x.jsx)(xh, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function Fh(e) {
        return null !== e
      }
      Vh.displayName = zh;
      var qh = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, u] = Bh(r), d = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [u], c = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let p = "",
            h = "";
          return "bottom" === l ? (p = i ? d : `${c}px`, h = -a + "px") : "top" === l ? (p = i ? d : `${c}px`, h = `${n.floating.height+a}px`) : "right" === l ? (p = -a + "px", h = i ? d : `${f}px`) : "left" === l && (p = `${n.floating.width+a}px`, h = i ? d : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function Bh(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Wh = Eh,
        Xh = Dh,
        Hh = Mh,
        Uh = Vh,
        Kh = V.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, i] = V.useState(!1);
          (0, Ch.N)(() => i(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? G.createPortal((0, x.jsx)(_f.div, {
            ...n,
            ref: t
          }), s) : null
        });
      Kh.displayName = "Portal";
      var Zh = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = V.useState(), n = V.useRef(null), o = V.useRef(e), i = V.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = function(e, t) {
            return V.useReducer((e, r) => t[e][r] ?? e, e)
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
          return V.useEffect(() => {
            const e = $h(n.current);
            i.current = "mounted" === a ? e : "none"
          }, [a]), (0, Ch.N)(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = i.current,
                s = $h(t);
              l(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : r && n !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, l]), (0, Ch.N)(() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                s = i => {
                  const s = $h(n.current).includes(CSS.escape(i.animationName));
                  if (i.target === t && s && (l("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    })
                  }
                },
                a = e => {
                  e.target === t && (i.current = $h(n.current))
                };
              return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
                r.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
              }
            }
            l("ANIMATION_END")
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: V.useCallback(e => {
              n.current = e ? getComputedStyle(e) : null, r(e)
            }, [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : V.Children.only(r), i = (0, Y.s)(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? V.cloneElement(o, {
          ref: i
        }) : null
      };

      function $h(e) {
        return e?.animationName || "none"
      }
      Zh.displayName = "Presence";
      var Gh = r(53054),
        Yh = Object.freeze({
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
        Qh = V.forwardRef((e, t) => (0, x.jsx)(_f.span, {
          ...e,
          ref: t,
          style: {
            ...Yh,
            ...e.style
          }
        }));
      Qh.displayName = "VisuallyHidden";
      var Jh = Qh,
        [em, tm] = (0, mf.A)("Tooltip", [Sh]),
        rm = Sh(),
        nm = "TooltipProvider",
        om = 700,
        im = "tooltip.open",
        [sm, am] = em(nm),
        lm = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = om,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, s = V.useRef(!0), a = V.useRef(!1), l = V.useRef(0);
          return V.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, x.jsx)(sm, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: V.useCallback(() => {
              window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: V.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, n)
            }, [n]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: V.useCallback(e => {
              a.current = e
            }, []),
            disableHoverableContent: o,
            children: i
          })
        };
      lm.displayName = nm;
      var um = "Tooltip",
        [dm, cm] = em(um),
        fm = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
          } = e, l = am(um, e.__scopeTooltip), u = rm(t), [d, c] = V.useState(null), f = (0, Nf.B)(), p = V.useRef(0), h = s ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = V.useRef(!1), [y, g] = (0, Gh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(im))) : l.onClose(), i?.(e)
            },
            caller: um
          }), b = V.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), _ = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, v.current = !1, g(!0)
          }, [g]), w = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), C = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              v.current = !0, g(!0), p.current = 0
            }, m)
          }, [m, g]);
          return V.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, x.jsx)(Wh, {
            ...u,
            children: (0, x.jsx)(dm, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: d,
              onTriggerChange: c,
              onTriggerEnter: V.useCallback(() => {
                l.isOpenDelayedRef.current ? C() : _()
              }, [l.isOpenDelayedRef, C, _]),
              onTriggerLeave: V.useCallback(() => {
                h ? w() : (window.clearTimeout(p.current), p.current = 0)
              }, [w, h]),
              onOpen: _,
              onClose: w,
              disableHoverableContent: h,
              children: r
            })
          })
        };
      fm.displayName = um;
      var pm = "TooltipTrigger",
        hm = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = cm(pm, r), i = am(pm, r), s = rm(r), a = V.useRef(null), l = (0, Y.s)(t, a, o.onTriggerChange), u = V.useRef(!1), d = V.useRef(!1), c = V.useCallback(() => u.current = !1, []);
          return V.useEffect(() => () => document.removeEventListener("pointerup", c), [c]), (0, x.jsx)(Xh, {
            asChild: !0,
            ...s,
            children: (0, x.jsx)(_f.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: hf(e.onPointerMove, e => {
                "touch" !== e.pointerType && (d.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              }),
              onPointerLeave: hf(e.onPointerLeave, () => {
                o.onTriggerLeave(), d.current = !1
              }),
              onPointerDown: hf(e.onPointerDown, () => {
                o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", c, {
                  once: !0
                })
              }),
              onFocus: hf(e.onFocus, () => {
                u.current || o.onOpen()
              }),
              onBlur: hf(e.onBlur, o.onClose),
              onClick: hf(e.onClick, o.onClose)
            })
          })
        });
      hm.displayName = pm;
      var mm = "TooltipPortal",
        [vm, ym] = em(mm, {
          forceMount: void 0
        }),
        gm = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = cm(mm, t);
          return (0, x.jsx)(vm, {
            scope: t,
            forceMount: r,
            children: (0, x.jsx)(Zh, {
              present: r || i.open,
              children: (0, x.jsx)(Kh, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      gm.displayName = mm;
      var bm = "TooltipContent",
        _m = V.forwardRef((e, t) => {
          const r = ym(bm, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = cm(bm, e.__scopeTooltip);
          return (0, x.jsx)(Zh, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, x.jsx)(Pm, {
              side: o,
              ...i,
              ref: t
            }) : (0, x.jsx)(wm, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        wm = V.forwardRef((e, t) => {
          const r = cm(bm, e.__scopeTooltip),
            n = am(bm, e.__scopeTooltip),
            o = V.useRef(null),
            i = (0, Y.s)(t, o),
            [s, a] = V.useState(null),
            {
              trigger: l,
              onClose: u
            } = r,
            d = o.current,
            {
              onPointerInTransitChange: c
            } = n,
            f = V.useCallback(() => {
              a(null), c(!1)
            }, [c]),
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
              a(i), c(!0)
            }, [c]);
          return V.useEffect(() => () => f(), [f]), V.useEffect(() => {
            if (l && d) {
              const e = e => p(e, d),
                t = e => p(e, l);
              return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t)
              }
            }
          }, [l, d, p, f]), V.useEffect(() => {
            if (s) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = l?.contains(t) || d?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const s = t[e],
                        a = t[i],
                        l = s.x,
                        u = s.y,
                        d = a.x,
                        c = a.y;
                      u > n != c > n && r < (d - l) * (n - u) / (c - u) + l && (o = !o)
                    }
                    return o
                  }(r, s);
                n ? f() : o && (f(), u())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, d, s, u, f]), (0, x.jsx)(Pm, {
            ...e,
            ref: i
          })
        }),
        [xm, Cm] = em(um, {
          isInside: !1
        }),
        Om = function(e) {
          const t = ({
            children: e
          }) => (0, x.jsx)(x.Fragment, {
            children: e
          });
          return t.displayName = `${e}.Slottable`, t.__radixId = gf, t
        }("TooltipContent"),
        Pm = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
          } = e, l = cm(bm, r), u = rm(r), {
            onClose: d
          } = l;
          return V.useEffect(() => (document.addEventListener(im, d), () => document.removeEventListener(im, d)), [d]), V.useEffect(() => {
            if (l.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(l.trigger) && d()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [l.trigger, d]), (0, x.jsx)(Sf, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: d,
            children: (0, x.jsxs)(Hh, {
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
              children: [(0, x.jsx)(Om, {
                children: n
              }), (0, x.jsx)(xm, {
                scope: r,
                isInside: !0,
                children: (0, x.jsx)(Jh, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      _m.displayName = bm;
      var jm = "TooltipArrow",
        Sm = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = rm(r);
          return Cm(jm, r).isInside ? null : (0, x.jsx)(Uh, {
            ...o,
            ...n,
            ref: t
          })
        });
      Sm.displayName = jm;
      var km = lm,
        Tm = fm,
        Em = hm,
        Rm = gm,
        Dm = _m,
        Nm = Sm;
      const Im = (0, V.createContext)(null);

      function Lm() {
        const e = (0, V.useContext)(Im);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Mm = ({
          children: e,
          delayDuration: t,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [i = !1, s] = (0, K.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, x.jsx)(km, {
            delayDuration: t,
            children: (0, x.jsx)(Im.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, x.jsx)(Tm, {
                open: i,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        zm = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, x.jsx)(Em, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Am = (0, V.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: i = !0,
          sticky: s = "partial",
          ...a
        }, l) => {
          const {
            isOpen: u
          } = Lm(), d = (0, K.jt)(), c = pf(Dm), f = Kc(u, {
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
            config: nc.stiff,
            immediate: d
          }), p = (0, X.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: i,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, a);
          return f(e => (0, x.jsx)(c, {
            ...p,
            style: e,
            ref: l
          }))
        }),
        Vm = (0, V.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, X.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, x.jsx)(Nm, {
            ...r,
            ref: t
          })
        }),
        Fm = Rm;

      function qm(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var Bm = V.createContext(void 0);

      function Wm(e) {
        const t = V.useContext(Bm);
        return e || t || "ltr"
      }

      function Xm(e) {
        const t = V.useRef({
          value: e,
          previous: e
        });
        return V.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }

      function Hm(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, mf.A)(t),
          [o, i] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          s = e => {
            const {
              scope: t,
              children: r
            } = e, n = V.useRef(null), i = V.useRef(new Map).current;
            return (0, x.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: n,
              children: r
            })
          };
        s.displayName = t;
        const a = e + "CollectionSlot",
          l = vf(a),
          u = V.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = i(a, r), s = (0, Y.s)(t, o.collectionRef);
            return (0, x.jsx)(l, {
              ref: s,
              children: n
            })
          });
        u.displayName = a;
        const d = e + "CollectionItemSlot",
          c = "data-radix-collection-item",
          f = vf(d),
          p = V.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = V.useRef(null), a = (0, Y.s)(t, s), l = i(d, r);
            return V.useEffect(() => (l.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              l.itemMap.delete(s)
            })), (0, x.jsx)(f, {
              [c]: "",
              ref: a,
              children: n
            })
          });
        return p.displayName = d, [{
          Provider: s,
          Slot: u,
          ItemSlot: p
        }, function(t) {
          const r = i(e + "CollectionConsumer", t),
            n = V.useCallback(() => {
              const e = r.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${c}]`)),
                n = Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current));
              return n
            }, [r.collectionRef, r.itemMap]);
          return n
        }, n]
      }
      Map;
      var Um = ["PageUp", "PageDown"],
        Km = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Zm = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        $m = "Slider",
        [Gm, Ym, Qm] = Hm($m),
        [Jm, ev] = (0, mf.A)($m, [Qm]),
        [tv, rv] = Jm($m),
        nv = V.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: i = 1,
            orientation: s = "horizontal",
            disabled: a = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: u = [n],
            value: d,
            onValueChange: c = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: h,
            ...m
          } = e, v = V.useRef(new Set), y = V.useRef(0), g = "horizontal" === s ? sv : av, [b = [], _] = (0, Gh.i)({
            prop: d,
            defaultProp: u,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), c(e)
            }
          }), w = V.useRef(b);

          function C(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = function(e) {
                return (String(e).split(".")[1] || "").length
              }(i),
              a = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / i) * i + n, s),
              u = qm(a, [n, o]);
            _((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort((e, t) => e - t)
              }(e, u, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map((t, r) => e[r + 1] - t)
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, l * i)) {
                y.current = n.indexOf(u);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, x.jsx)(tv, {
            scope: e.__scopeSlider,
            name: r,
            disabled: a,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: b,
            orientation: s,
            form: h,
            children: (0, x.jsx)(Gm.Provider, {
              scope: e.__scopeSlider,
              children: (0, x.jsx)(Gm.Slot, {
                scope: e.__scopeSlider,
                children: (0, x.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: hf(m.onPointerDown, () => {
                    a || (w.current = b)
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
                    const e = w.current[y.current];
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
                      const r = Um.includes(e.key) || e.shiftKey && Km.includes(e.key) ? 10 : 1,
                        n = y.current;
                      C(b[n] + i * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      nv.displayName = $m;
      var [ov, iv] = Jm($m, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), sv = V.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: i,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: l,
          onStepKeyDown: u,
          ...d
        } = e, [c, f] = V.useState(null), p = (0, Y.s)(t, e => f(e)), h = V.useRef(void 0), m = Wm(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = h.current || c.getBoundingClientRect(),
            o = gv([0, t.width], y ? [r, n] : [n, r]);
          return h.current = t, o(e - t.left)
        }
        return (0, x.jsx)(ov, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, x.jsx)(lv, {
            dir: m,
            "data-orientation": "horizontal",
            ...d,
            ref: p,
            style: {
              ...d.style,
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
              const t = Zm[y ? "from-left" : "from-right"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), av = V.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...u
        } = e, d = V.useRef(null), c = (0, Y.s)(t, d), f = V.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || d.current.getBoundingClientRect(),
            o = gv([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, x.jsx)(ov, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, x.jsx)(lv, {
            "data-orientation": "vertical",
            ...u,
            ref: c,
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
              const t = Zm[p ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), lv = V.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...u
        } = e, d = rv($m, r);
        return (0, x.jsx)(_f.span, {
          ...u,
          ref: t,
          onKeyDown: hf(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : Um.concat(Km).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: hf(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: hf(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: hf(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), uv = "SliderTrack", dv = V.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = rv(uv, r);
        return (0, x.jsx)(_f.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      dv.displayName = uv;
      var cv = "SliderRange",
        fv = V.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = rv(cv, r), i = iv(cv, r), s = V.useRef(null), a = (0, Y.s)(t, s), l = o.values.length, u = o.values.map(e => yv(e, o.min, o.max)), d = l > 1 ? Math.min(...u) : 0, c = 100 - Math.max(...u);
          return (0, x.jsx)(_f.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: a,
            style: {
              ...e.style,
              [i.startEdge]: d + "%",
              [i.endEdge]: c + "%"
            }
          })
        });
      fv.displayName = cv;
      var pv = "SliderThumb",
        hv = V.forwardRef((e, t) => {
          const r = Ym(e.__scopeSlider),
            [n, o] = V.useState(null),
            i = (0, Y.s)(t, e => o(e)),
            s = V.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, x.jsx)(mv, {
            ...e,
            ref: i,
            index: s
          })
        }),
        mv = V.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, s = rv(pv, r), a = iv(pv, r), [l, u] = V.useState(null), d = (0, Y.s)(t, e => u(e)), c = !l || s.form || !!l.closest("form"), f = Oh(l), p = s.values[n], h = void 0 === p ? 0 : yv(p, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), v = f?.[a.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - gv([0, 50], [0, n])(t) * r) * r
          }(v, h, a.direction) : 0;
          return V.useEffect(() => {
            if (l) return s.thumbs.add(l), () => {
              s.thumbs.delete(l)
            }
          }, [l, s.thumbs]), (0, x.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${h}% + ${y}px)`
            },
            children: [(0, x.jsx)(Gm.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, x.jsx)(_f.span, {
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
                ref: d,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: hf(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), c && (0, x.jsx)(vv, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: p
            }, n)]
          })
        });
      hv.displayName = pv;
      var vv = V.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = V.useRef(null),
          i = (0, Y.s)(o, n),
          s = Xm(t);
        return V.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (s !== t && n) {
            const r = new Event("input", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [s, t]), (0, x.jsx)(_f.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      });

      function yv(e, t, r) {
        return qm(100 / (r - t) * (e - t), [0, 100])
      }

      function gv(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      vv.displayName = "RadioBubbleInput";
      var bv = nv,
        _v = dv,
        wv = fv,
        xv = hv,
        Cv = "focusScope.autoFocusOnMount",
        Ov = "focusScope.autoFocusOnUnmount",
        Pv = {
          bubbles: !1,
          cancelable: !0
        },
        jv = V.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = V.useState(null), u = (0, Cf.c)(o), d = (0, Cf.c)(i), c = V.useRef(null), f = (0, Y.s)(t, e => l(e)), p = V.useRef({
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
                  a.contains(t) ? c.current = t : Ev(c.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || Ev(c.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Ev(a)
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
              Rv.add(p);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(Cv, Pv);
                a.addEventListener(Cv, u), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Ev(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(Sv(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Ev(a))
              }
              return () => {
                a.removeEventListener(Cv, u), setTimeout(() => {
                  const t = new CustomEvent(Ov, Pv);
                  a.addEventListener(Ov, d), a.dispatchEvent(t), t.defaultPrevented || Ev(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(Ov, d), Rv.remove(p)
                }, 0)
              }
            }
          }, [a, u, d, p]);
          const h = V.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, i] = function(e) {
                  const t = Sv(e);
                  return [kv(t, e), kv(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && Ev(i, {
                select: !0
              })) : (e.preventDefault(), r && Ev(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, x.jsx)(_f.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: h
          })
        });

      function Sv(e) {
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

      function kv(e, t) {
        for (const r of e)
          if (!Tv(r, {
              upTo: t
            })) return r
      }

      function Tv(e, {
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

      function Ev(e, {
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
      jv.displayName = "FocusScope";
      var Rv = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Dv(e, t), e.unshift(t)
          },
          remove(t) {
            e = Dv(e, t), e[0]?.resume()
          }
        }
      }();

      function Dv(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var Nv = 0;

      function Iv() {
        V.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Lv()), document.body.insertAdjacentElement("beforeend", e[1] ?? Lv()), Nv++, () => {
            1 === Nv && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), Nv--
          }
        }, [])
      }

      function Lv() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Mv = r(97359),
        zv = r(94926),
        Av = "Dialog",
        [Vv, Fv] = (0, mf.A)(Av),
        [qv, Bv] = Vv(Av),
        Wv = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = V.useRef(null), l = V.useRef(null), [u, d] = (0, Gh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Av
          });
          return (0, x.jsx)(qv, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: (0, Nf.B)(),
            titleId: (0, Nf.B)(),
            descriptionId: (0, Nf.B)(),
            open: u,
            onOpenChange: d,
            onOpenToggle: V.useCallback(() => d(e => !e), [d]),
            modal: s,
            children: r
          })
        };
      Wv.displayName = Av;
      var Xv = "DialogTrigger",
        Hv = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Bv(Xv, r), i = (0, Y.s)(t, o.triggerRef);
          return (0, x.jsx)(_f.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": cy(o.open),
            ...n,
            ref: i,
            onClick: hf(e.onClick, o.onOpenToggle)
          })
        });
      Hv.displayName = Xv;
      var Uv = "DialogPortal",
        [Kv, Zv] = Vv(Uv, {
          forceMount: void 0
        }),
        $v = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Bv(Uv, t);
          return (0, x.jsx)(Kv, {
            scope: t,
            forceMount: r,
            children: V.Children.map(n, e => (0, x.jsx)(Zh, {
              present: r || i.open,
              children: (0, x.jsx)(Kh, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      $v.displayName = Uv;
      var Gv = "DialogOverlay",
        Yv = V.forwardRef((e, t) => {
          const r = Zv(Gv, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = Bv(Gv, e.__scopeDialog);
          return i.modal ? (0, x.jsx)(Zh, {
            present: n || i.open,
            children: (0, x.jsx)(Jv, {
              ...o,
              ref: t
            })
          }) : null
        });
      Yv.displayName = Gv;
      var Qv = vf("DialogOverlay.RemoveScroll"),
        Jv = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Bv(Gv, r);
          return (0, x.jsx)(Mv.A, {
            as: Qv,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, x.jsx)(_f.div, {
              "data-state": cy(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        ey = "DialogContent",
        ty = V.forwardRef((e, t) => {
          const r = Zv(ey, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = Bv(ey, e.__scopeDialog);
          return (0, x.jsx)(Zh, {
            present: n || i.open,
            children: i.modal ? (0, x.jsx)(ry, {
              ...o,
              ref: t
            }) : (0, x.jsx)(ny, {
              ...o,
              ref: t
            })
          })
        });
      ty.displayName = ey;
      var ry = V.forwardRef((e, t) => {
          const r = Bv(ey, e.__scopeDialog),
            n = V.useRef(null),
            o = (0, Y.s)(t, r.contentRef, n);
          return V.useEffect(() => {
            const e = n.current;
            if (e) return (0, zv.Eq)(e)
          }, []), (0, x.jsx)(oy, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: hf(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: hf(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: hf(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        ny = V.forwardRef((e, t) => {
          const r = Bv(ey, e.__scopeDialog),
            n = V.useRef(!1),
            o = V.useRef(!1);
          return (0, x.jsx)(oy, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                s = r.triggerRef.current?.contains(i);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        oy = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = Bv(ey, r), l = V.useRef(null), u = (0, Y.s)(t, l);
          return Iv(), (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(jv, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, x.jsx)(Sf, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": cy(a.open),
                ...s,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, x.jsxs)(x.Fragment, {
              children: [(0, x.jsx)(my, {
                titleId: a.titleId
              }), (0, x.jsx)(vy, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        iy = "DialogTitle",
        sy = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Bv(iy, r);
          return (0, x.jsx)(_f.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      sy.displayName = iy;
      var ay = "DialogDescription",
        ly = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Bv(ay, r);
          return (0, x.jsx)(_f.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      ly.displayName = ay;
      var uy = "DialogClose",
        dy = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Bv(uy, r);
          return (0, x.jsx)(_f.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: hf(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function cy(e) {
        return e ? "open" : "closed"
      }
      dy.displayName = uy;
      var fy = "DialogTitleWarning",
        [py, hy] = (0, mf.q)(fy, {
          contentName: ey,
          titleName: iy,
          docsSlug: "dialog"
        }),
        my = ({
          titleId: e
        }) => {
          const t = hy(fy),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return V.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        vy = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${hy("DialogDescriptionWarning").contentName}}.`;
          return V.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        yy = Wv,
        gy = Hv,
        by = $v,
        _y = Yv,
        wy = ty,
        xy = sy,
        Cy = ly,
        Oy = dy;
      const Py = (0, V.createContext)({
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
        jy = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: i = 300,
          zoomLevelStep: s = 100,
          clickAction: a = "close",
          doubleTapAction: l,
          tapAction: u,
          hideTrigger: d = !0,
          ...c
        }) => {
          const f = (0, $.Ym)(),
            p = (0, K.rl)(),
            h = (0, V.useRef)(null),
            m = (0, V.useRef)(null),
            v = (0, V.useRef)(null),
            y = (0, V.useRef)(null),
            g = (0, V.useRef)(null),
            b = (0, V.useRef)(null),
            _ = (0, V.useRef)(null),
            w = (0, V.useRef)(null),
            C = (0, V.useRef)(null),
            O = (0, V.useRef)(null),
            P = (0, V.useRef)(null),
            j = (0, V.useRef)(null),
            S = (0, V.useRef)(null),
            k = (0, V.useRef)(null),
            T = (0, V.useRef)(null),
            E = (0, V.useRef)(null),
            R = (0, V.useRef)(null),
            D = (0, V.useRef)(null),
            N = (0, V.useRef)(null),
            [I = !1, L] = (0, K.ic)({
              prop: t || n,
              onChange: r
            }),
            M = (0, V.useRef)(null);
          return M.current || (M.current = new El({
            width: 0,
            height: 0,
            zoomLevelOptions: {
              max: i,
              min: o,
              step: s
            },
            actionOptions: {
              click: a,
              tap: u || p ? "toggle-controls" : "close",
              doubleTap: l || p ? "zoom" : "none"
            }
          })), (0, x.jsx)(bl, {
            messages: _l,
            locale: f,
            children: (0, x.jsx)(Py.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: _,
                zoomPanRef: w,
                imageRef: C,
                placeholderRef: O,
                captionRef: P,
                controlsRef: j,
                closeRef: S,
                zoomRef: k,
                zoomInRef: T,
                zoomSliderRef: E,
                zoomOutRef: R,
                resetRef: D,
                downloadRef: N,
                open: I,
                setOpen: L,
                altText: e,
                hideTrigger: d,
                slide: M.current
              },
              children: (0, x.jsx)(ky, {
                ...c
              })
            })
          })
        },
        Sy = (0, V.createContext)({
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
        ky = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, V.useContext)(Py), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = Ss(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: i,
              triggerRef: s,
              triggerBorderRef: a,
              thumbnailRef: l,
              containerRef: u,
              zoomPanRef: d,
              placeholderRef: c,
              imageRef: f
            } = (0, V.useContext)(Py), p = (0, V.useRef)(null);
            p.current || (p.current = ws.timeline({
              defaults: pl
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
              m = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), ws.set([c.current, f.current], {
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
                }), ws.set([f.current], {
                  visibility: "hidden"
                }), await t.opener.loadPlaceholder(c.current), p.current.clear(), c.current && (p.current.to([c.current, f.current], {
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
                }), p.current.to([d.current], {
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
                }), n && p.current.to([s.current, a.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([c.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  duration: 0
                }), p.current.fromTo([u.current], {
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
                }, 0), p.current.fromTo([c.current, f.current], {
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
                }, 0), p.current.fromTo([d.current], {
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
                  [ml]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [ml]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await La(f.current), t.closing || (ws.set([f.current], {
                  visibility: "visible",
                  ...hl
                }), ws.set([c.current], {
                  visibility: "hidden",
                  ...hl
                }))))
              }),
              v = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              y = (0, V.useCallback)(async e => {
                e || (window.addEventListener("click", h), await v(), window.removeEventListener("click", h)), r(e)
              }, [r]),
              g = (0, V.useCallback)(() => y(!1), [y]);
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
            toggleControls: d
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = Ss(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: s,
              placeholderRef: a
            } = (0, V.useContext)(Py), l = t(async e => {
              r.zoomTo(e), ws.set([o.current], {
                ...r.getCurrentTransform(),
                ...hl
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), ws.to([o.current], {
                ...r.getCurrentTransform(),
                ...hl
              })
            }), d = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), ws.to([o.current], {
                ...r.getCurrentTransform(),
                ...hl
              })
            }), c = t(async () => {
              r.zoomAndPanToInitial(), ws.to([o.current], {
                ...r.getCurrentTransform(),
                ...hl
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              ws.to([i.current], {
                opacity: e,
                [ml]: t,
                ...hl
              })
            }), p = t(async () => {
              ws.to([o.current], {
                ...r.getCurrentTransform(),
                ...hl
              })
            }), h = (0, V.useCallback)(() => {
              n.current && o.current && (r.resize(), ws.set([o.current], {
                ...r.getCurrentTransform(),
                ...hl
              }), ws.set([n.current, a.current], {
                ...r.getUpdatedContentSize(),
                ...hl
              }), ws.set([s.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, V.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), window.addEventListener("resize", h), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), window.removeEventListener("resize", h)
            }), []), {
              zoomIn: u,
              zoomOut: d,
              zoomTo: l,
              resetZoom: c,
              toggleControls: f,
              update: p
            }
          })({
            close: o
          }), c = (0, X.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, x.jsx)(Sy.Provider, {
            value: {
              update: i,
              openAnim: n,
              close: o,
              zoomIn: s,
              zoomOut: a,
              zoomTo: l,
              resetZoom: u,
              toggleControls: d,
              onOpenChange: r
            },
            children: (0, x.jsx)(yy, {
              ...c
            })
          })
        },
        Ty = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, gl.A)(),
            {
              triggerRef: i,
              triggerBorderRef: s,
              altText: a
            } = (0, V.useContext)(Py),
            l = (0, K.UP)(i, n),
            u = (0, X.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Dl.OpenButtonLabel, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, x.jsx)(gy, {
            ref: l,
            ...u,
            children: (0, x.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, x.jsx)(Z.xV, {
                children: t
              })
            })
          })
        }),
        Ey = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, V.useContext)(Py), i = (0, K.UP)(o, n), s = (0, X.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? Z.DX : "img";
          return (0, x.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Ry = (0, V.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, V.useContext)(Py), o = (0, K.UP)(n, r), i = (0, X.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? Z.DX : be.Maximize2;
          return (0, x.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        Dy = ({
          ...e
        }) => (0, x.jsx)(by, {
          ...e
        }),
        Ny = (0, V.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, V.useContext)(Py), o = (0, K.UP)(n, r), i = (0, X.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, x.jsx)(_y, {
            ref: o,
            ...i
          })
        }),
        Iy = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, V.useContext)(Sy), {
            contentRef: i,
            altText: s,
            triggerRef: a
          } = (0, V.useContext)(Py), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, V.useContext)(Py), [t, r] = (0, V.useState)(e.getCursor()), n = (0, V.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, V.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), u = (0, Rl.m)("dark"), d = (0, K.UP)(i, n), c = (0, X.v6)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, a),
            className: (0, ge.clsx)("foundry_1a74xwb9", u),
            style: {
              cursor: l
            }
          });
          return (0, x.jsxs)(wy, {
            ref: d,
            ...c,
            children: [(0, x.jsx)(Z.s6, {
              children: (0, x.jsx)(xy, {
                children: s
              })
            }), t]
          })
        }),
        Ly = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, V.useContext)(Py);
          (() => {
            const {
              contextSafe: e
            } = Ss(), {
              toggleControls: t
            } = (0, V.useContext)(Sy), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: i,
              slide: s
            } = (0, V.useContext)(Py), a = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (ws.to([n.current], {
                ...s.getCurrentTransform(),
                ...hl
              }), ws.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...hl
              }), ws.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...hl
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || ws.to([n.current], {
                ...s.getCurrentTransform(),
                ...hl
              }))
            }), u = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (ws.to([n.current], {
                ...s.getCurrentTransform(),
                ...hl
              }), ws.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...hl
              }), ws.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...hl
              })))
            }), d = (0, V.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, K.iQ)({
              ref: i,
              onFocusIn: d
            }), Ia({
              onWheel: l,
              onDrag: a,
              onPinch: u
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
          const i = (0, K.UP)(o, n),
            s = (0, X.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, x.jsx)("div", {
            ref: i,
            ...s,
            children: (0, x.jsxs)(My, {
              children: [(0, x.jsx)(zy, {}), t]
            })
          })
        }),
        My = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, V.useContext)(Py), i = (0, K.UP)(o, n), s = (0, X.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? Z.DX : "div";
          return (0, x.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        zy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, V.useContext)(Py), i = (0, K.UP)(o, n), s = (0, X.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? Z.DX : "img";
          return (0, x.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Ay = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, V.useContext)(Py), i = (0, K.UP)(o, n), s = (0, X.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? Z.DX : "img";
          return (0, x.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Vy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, V.useContext)(Py), i = (0, K.UP)(o, n), s = (0, X.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? Z.DX : "p";
          return (0, x.jsx)(Cy, {
            asChild: !0,
            children: (0, x.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Fy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, V.useContext)(Py);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, V.useContext)(Sy);
            ol(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), ol(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), ol("r", n, {
              enabled: e,
              preventDefault: !0
            }), ol("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = (0, K.UP)(o, n),
            s = (0, X.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? Z.DX : "div";
          return (0, x.jsx)(tl, {
            children: (0, x.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        qy = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, x.jsx)(x.Fragment, {
            children: n
          });
          const i = (0, X.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, x.jsxs)(Mm, {
            delayDuration: 0,
            children: [(0, x.jsx)(zm, {
              children: n
            }), (0, x.jsxs)(Am, {
              ...i,
              children: [(0, x.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, x.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, x.jsx)(Vm, {})]
            })]
          })
        },
        By = (0, V.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, X.v6)(e, {
            isInline: !0
          });
          return (0, x.jsx)(Il, {
            ref: t,
            ...r
          })
        }),
        Wy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, i) {
          const s = (0, gl.A)(),
            {
              zoomRef: a
            } = (0, V.useContext)(Py),
            {
              canZoomIn: l,
              zoomIn: u,
              canZoomOut: d,
              zoomOut: c,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: h,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, V.useContext)(Py), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, V.useContext)(Sy), [o, i] = (0, V.useState)(!1), [s, a] = (0, V.useState)(!1), [l, u] = (0, V.useState)(0), [d, c] = (0, V.useState)(0), [f, p] = (0, V.useState)(0), h = (0, V.useCallback)(() => {
                i(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), u(Math.ceil(100 * e.currZoomLevel)), c(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, V.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, V.useEffect)(() => (e.addEventListener("zoom", h), () => {
                e.removeEventListener("zoom", h)
              }), [h]), {
                zoomTo: m,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: s,
                zoomProgress: l,
                minZoomLevel: d,
                maxZoomLevel: f
              }
            })(),
            v = (0, K.UP)(a, i),
            y = (0, X.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? Z.DX : "div";
          return (0, x.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, x.jsx)(qy, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Dl.ZoomInButtonLabel),
              metadata: s.formatMessage(Dl.ZoomInButtonTooltip, {
                shortcut: (0, x.jsx)(By, {
                  shortcut: "+"
                })
              }),
              children: (0, x.jsx)(qe, {
                label: s.formatMessage(Dl.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: fl({
                  position: "top"
                }),
                onPress: u,
                isDisabled: !l
              })
            }), (0, x.jsxs)(bv, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, x.jsx)(_v, {
                className: "foundry_1a74xwbu",
                children: (0, x.jsx)(wv, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, x.jsx)(qy, {
                side: "left",
                enabled: r,
                content: s.formatMessage(Dl.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, x.jsx)(xv, {
                  className: "foundry_1a74xwbw",
                  children: (0, x.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, x.jsx)(qy, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Dl.ZoomOutButtonLabel),
              metadata: s.formatMessage(Dl.ZoomOutButtonTooltip, {
                shortcut: (0, x.jsx)(By, {
                  shortcut: "-"
                })
              }),
              children: (0, x.jsx)(qe, {
                label: s.formatMessage(Dl.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: fl({
                  position: "bottom"
                }),
                onPress: c,
                isDisabled: !d
              })
            }), (0, x.jsx)(Z.xV, {
              children: n
            })]
          })
        }),
        Xy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const i = (0, gl.A)(),
            {
              closeRef: s
            } = (0, V.useContext)(Py),
            a = (0, K.UP)(s, o),
            l = (0, X.v6)(n, {
              "data-testid": e,
              className: cl({
                styled: !t
              })
            }),
            u = t ? (0, x.jsx)(Z.DX, {
              ref: a,
              ...l
            }) : (0, x.jsx)(qe, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: i.formatMessage(Dl.CloseButtonLabel)
            });
          return (0, x.jsx)(qy, {
            side: "right",
            enabled: r,
            content: i.formatMessage(Dl.CloseButtonLabel),
            metadata: i.formatMessage(Dl.CloseButtonTooltip, {
              shortcut: (0, x.jsx)(By, {
                shortcut: "Esc"
              })
            }),
            children: (0, x.jsx)(Oy, {
              asChild: !0,
              children: u
            })
          })
        }),
        Hy = (0, V.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, gl.A)(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, V.useContext)(Py), {
                contextSafe: r
              } = Ss(), {
                resetZoom: n
              } = (0, V.useContext)(Sy), [o, i] = (0, V.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                ws.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...hl
                })
              }), a = (0, V.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                i(t), s(t)
              }, [i]);
              return (0, V.useEffect)(() => (e.addEventListener("zoom", a), () => {
                e.removeEventListener("zoom", a)
              }), [a]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, V.useContext)(Py),
            a = (0, K.UP)(s, n),
            l = (0, X.v6)(r, i, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, x.jsx)(qy, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Dl.ResetZoomButtonLabel),
            metadata: o.formatMessage(Dl.ResetZoomButtonTooltip, {
              shortcut: (0, x.jsx)(By, {
                shortcut: "R"
              })
            }),
            children: (0, x.jsx)(qe, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Dl.ResetZoomButtonLabel)
            })
          })
        }),
        Uy = (0, V.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, gl.A)(),
            {
              downloadRef: i,
              imageRef: s
            } = (0, V.useContext)(Py),
            a = (0, K.UP)(i, n),
            l = (0, X.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, x.jsx)(qy, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Dl.DownloadButtonTooltip),
            children: (0, x.jsx)(qe, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Dl.DownloadButtonTooltip),
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
              })(s.current)
            })
          })
        }),
        Ky = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        Zy = "undefined" != typeof document ? V.useLayoutEffect : () => {},
        $y = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Gy = e => e && "window" in e && e.window === e ? e : $y(e).defaultView || window;

      function Yy(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
      const Qy = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function Jy(e, t) {
        return Qy ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Gy(e);
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
        }(e, t) && (!e.parentElement || Jy(e.parentElement, e))
      }
      const eg = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        tg = eg.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      eg.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const rg = eg.join(':not([hidden]):not([tabindex="-1"]),');

      function ng(e) {
        return e.matches(tg) && Jy(e) && !ig(e)
      }

      function og(e) {
        return e.matches(rg) && Jy(e) && !ig(e)
      }

      function ig(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function sg(e) {
        if (function() {
            if (null == ag) {
              ag = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return ag = !0, !0
                  }
                })
              } catch {}
            }
            return ag
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
      let ag = null;

      function lg(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function ug(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function dg(e) {
        let t = (0, V.useRef)({
          isFocused: !1,
          observer: null
        });
        return Zy(() => {
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
                  let t = lg(r);
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
      let cg = !1;

      function fg(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function pg(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function hg(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const mg = hg(function() {
          return pg(/^Mac/i)
        }),
        vg = hg(function() {
          return pg(/^iPhone/i)
        }),
        yg = hg(function() {
          return pg(/^iPad/i) || mg() && navigator.maxTouchPoints > 1
        }),
        gg = hg(function() {
          return vg() || yg()
        }),
        bg = (hg(function() {
          return mg() || gg()
        }), hg(function() {
          return fg(/AppleWebKit/i) && !_g()
        })),
        _g = hg(function() {
          return fg(/Chrome/i)
        }),
        wg = hg(function() {
          return fg(/Android/i)
        }),
        xg = hg(function() {
          return fg(/Firefox/i)
        });
      let Cg = new Map,
        Og = new Set;

      function Pg() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Cg.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Cg.delete(r.target)), 0 === Cg.size)) {
            for (let e of Og) e();
            Og.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = Cg.get(r.target);
          n || (n = new Set, Cg.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function jg(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of Cg) "isConnected" in e && !e.isConnected && Cg.delete(e)
          }(), 0 === Cg.size ? e() : Og.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Pg() : document.addEventListener("DOMContentLoaded", Pg));
      let Sg = "default",
        kg = "",
        Tg = new WeakMap;

      function Eg(e) {
        if (gg()) {
          if ("disabled" !== Sg) return;
          Sg = "restoring", setTimeout(() => {
            jg(() => {
              if ("restoring" === Sg) {
                const t = $y(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = kg || ""), kg = "", Sg = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Tg.has(e)) {
          let t = Tg.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Tg.delete(e)
        }
      }
      const Rg = V.createContext({
        register: () => {}
      });
      Rg.displayName = "PressResponderContext";
      var Dg = r(88842),
        Ng = r(57178),
        Ig = r(72562);

      function Lg(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const Mg = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        zg = V.createContext(Mg),
        Ag = V.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Vg = new WeakMap;
      const Fg = "function" == typeof V.useId ? function(e) {
        let t = V.useId(),
          [r] = (0, V.useState)(Xg());
        return e || `${r?"react-aria":`react-aria${Mg.prefix}`}-${t}`
      } : function(e) {
        let t = (0, V.useContext)(zg),
          r = function(e = !1) {
            let t = (0, V.useContext)(zg),
              r = (0, V.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = Vg.get(e);
                null == r ? Vg.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, Vg.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function qg() {
        return !1
      }

      function Bg() {
        return !0
      }

      function Wg(e) {
        return () => {}
      }

      function Xg() {
        return "function" == typeof V.useSyncExternalStore ? V.useSyncExternalStore(Wg, qg, Bg) : (0, V.useContext)(Ag)
      }
      let Hg, Ug = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Kg = new Map;

      function Zg(e) {
        let [t, r] = (0, V.useState)(e), n = (0, V.useRef)(null), o = Fg(t), i = (0, V.useRef)(null);
        if (Hg && Hg.register(i, o), Ug) {
          const e = Kg.get(o);
          e && !e.includes(n) ? e.push(n) : Kg.set(o, [n])
        }
        return Zy(() => {
          let e = o;
          return () => {
            Hg && Hg.unregister(i), Kg.delete(e)
          }
        }, [o]), (0, V.useEffect)(() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        }), o
      }

      function $g(e, t) {
        if (e === t) return e;
        let r = Kg.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = Kg.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function Gg(e = []) {
        let t = Zg(),
          [r, n] = function(e) {
            let [t, r] = (0, V.useState)(e), n = (0, V.useRef)(t), o = (0, V.useRef)(null), i = (0, V.useRef)(() => {
              if (!o.current) return;
              let e = o.current.next();
              e.done ? o.current = null : n.current === e.value ? i.current() : r(e.value)
            });
            Zy(() => {
              n.current = t, o.current && i.current()
            });
            let s = (0, V.useCallback)(e => {
              o.current = e(n.current), i.current()
            }, [i]);
            return [t, s]
          }(t),
          o = (0, V.useCallback)(() => {
            n(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, n]);
        return Zy(o, [t, o, ...e]), r
      }

      function Yg(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let r = !1;
          const n = e.map(e => {
            const n = Qg(e, t);
            return r || (r = "function" == typeof n), n
          });
          if (r) return () => {
            n.forEach((t, r) => {
              "function" == typeof t ? t() : Qg(e[r], null)
            })
          }
        }
      }

      function Qg(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function Jg(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Lg(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = $g(r, o) : "ref" === e && r && o ? t.ref = Yg(r, o) : t[e] = void 0 !== o ? o : r : t[e] = ge(r, o)
          }
        }
        return t
      }

      function eb(e, t) {
        Zy(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function tb() {
        let e = (0, V.useRef)(new Map),
          t = (0, V.useCallback)((t, r, n, o) => {
            let i = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(n), n(...t)
            } : n;
            e.current.set(n, {
              type: r,
              eventTarget: t,
              fn: i,
              options: o
            }), t.addEventListener(r, i, o)
          }, []),
          r = (0, V.useCallback)((t, r, n, o) => {
            var i;
            let s = (null === (i = e.current.get(n)) || void 0 === i ? void 0 : i.fn) || n;
            t.removeEventListener(r, s, o), e.current.delete(n)
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
      var rb;
      "undefined" != typeof FinalizationRegistry && (Hg = new FinalizationRegistry(e => {
        Kg.delete(e)
      }));
      const nb = null !== (rb = V.useInsertionEffect) && void 0 !== rb ? rb : Zy;

      function ob(e) {
        const t = (0, V.useRef)(null);
        return nb(() => {
          t.current = e
        }, [e]), (0, V.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      var ib = r(35412);

      function sb(e, t) {
        if (!(0, ib.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : Yy(r) ? r.host : r.parentNode
        }
        return !1
      }
      const ab = (e = document) => {
        var t;
        if (!(0, ib.Nf)()) return e.activeElement;
        let r = e.activeElement;
        for (; r && "shadowRoot" in r && (null === (t = r.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) r = r.shadowRoot.activeElement;
        return r
      };

      function lb(e) {
        return (0, ib.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }
      const ub = (0, V.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, e => cb(e, t))
        },
        useHref: e => e
      });

      function db() {
        return (0, V.useContext)(ub)
      }

      function cb(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        xg() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (mg() ? i = !0 : s = !0);
        let u = bg() && mg() && !yg() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l,
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        cb.isOpening = r, sg(e), e.dispatchEvent(u), cb.isOpening = !1
      }

      function fb(e) {
        var t;
        const r = db().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function pb(e, t, r, n) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let r = e.getAttribute("target");
          return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && r && (e.preventDefault(), t.open(e.currentTarget, e, r, n))
      }

      function hb(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (wg() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      cb.isOpening = !1;
      var mb = new WeakMap;
      class vb {
        continuePropagation() {
          (0, Ig._)(this, mb, !1)
        }
        get shouldStopPropagation() {
          return (0, Dg._)(this, mb)
        }
        constructor(e, t, r, n) {
          var o;
          (0, Ng._)(this, mb, {
            writable: !0,
            value: void 0
          }), (0, Ig._)(this, mb, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, u = 0,
            d = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, d = r.clientY), s && (null != l && null != d ? (a = l - s.left, u = d - s.top) : (a = s.width / 2, u = s.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = a, this.y = u, this.key = r.key
        }
      }
      const yb = Symbol("linkClicked"),
        gb = "react-aria-pressable-style",
        bb = "data-react-aria-pressable";

      function _b(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: i,
          onClick: s,
          isDisabled: a,
          isPressed: l,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: d,
          allowTextSelectionOnPress: c,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, V.useContext)(Rg);
          if (t) {
            let {
              register: r,
              ref: n,
              ...o
            } = t;
            e = Jg(o, e), r()
          }
          return eb(t, e.ref), e
        }(e), [h, m] = (0, V.useState)(!1), v = (0, V.useRef)({
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
        } = tb(), _ = (0, V.useCallback)((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new vb("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        }, [a, n, r]), w = (0, V.useCallback)((e, n, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new vb("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !a) {
            let r = new vb("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        }, [a, o, r, t]), x = ob(w), C = (0, V.useCallback)((e, t) => {
          let r = v.current;
          if (a) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new vb("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }, [a, i]), O = ob(C), P = (0, V.useCallback)(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Cb(t.target, e), t.pointerType, !1), t.isPressed = !1, I(null), t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), c || Eg(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [c, g, w]), j = ob(P), S = (0, V.useCallback)(e => {
          d && P(e)
        }, [d, P]), k = (0, V.useCallback)(e => {
          a || null == s || s(e)
        }, [a, s]), T = (0, V.useCallback)((e, t) => {
          if (!a && s) {
            let r = new MouseEvent("click", e);
            ug(r, t), s(lg(r))
          }
        }, [a, s]), E = ob(T), [R, D] = (0, V.useState)(!1);
        Zy(() => {
          let e = v.current;
          if (R) {
            let t = t => {
                var r;
                if (e.isPressed && e.target && xb(t, e.target)) {
                  var n;
                  Ob(lb(t), t.key) && t.preventDefault();
                  let r = lb(t),
                    o = sb(e.target, lb(t));
                  x(Cb(e.target, t), "keyboard", o), o && E(t, e.target), g(), "Enter" !== t.key && wb(e.target) && sb(e.target, r) && !t[yb] && (t[yb] = !0, cb(e.target, t, !1)), e.isPressed = !1, D(!1), null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
                } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                  var o;
                  let t = e.metaKeyEvents;
                  e.metaKeyEvents = void 0;
                  for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
                }
              },
              r = e.target,
              n = t => {
                r && xb(t, r) && !t.repeat && sb(r, lb(t)) && e.target && O(Cb(e.target, t), "keyboard")
              },
              o = Lg(n, t);
            return y($y(e.target), "keyup", o, !0), () => {
              b($y(e.target), "keyup", o, !0)
            }
          }
        }, [R, y, g, b]);
        let [N, I] = (0, V.useState)(null);
        Zy(() => {
          let e = v.current;
          if ("pointer" === N) {
            let t = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (sb(e.target, lb(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? j(t) : (sg(e.target), e.target.click()))
                      }, 80);
                    y(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else j(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                j(e)
              };
            return y($y(e.target), "pointerup", t, !1), y($y(e.target), "pointercancel", r, !1), () => {
              b($y(e.target), "pointerup", t, !1), b($y(e.target), "pointercancel", r, !1)
            }
          }
        }, [N, y, b]);
        let L = (0, V.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (xb(t.nativeEvent, t.currentTarget) && sb(t.currentTarget, lb(t.nativeEvent))) {
                  var r;
                  Ob(lb(t.nativeEvent), t.key) && t.preventDefault();
                  let n = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, D(!0), e.pointerType = "keyboard", n = _(t, "keyboard")), n && t.stopPropagation(), t.metaKey && mg() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || sb(t.currentTarget, lb(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !cb.isOpening) {
                  let r = !0;
                  if (a && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !hb(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = C(Cb(t.currentTarget, t), n),
                        i = w(Cb(t.currentTarget, t), n, !0);
                      r = o && i, e.isOverTarget = !1, k(t), P(t)
                    }
                  } else {
                    let e = _(t, "virtual"),
                      n = C(t, "virtual"),
                      o = w(t, "virtual");
                    k(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            };
          return "undefined" != typeof PointerEvent && (t.onPointerDown = t => {
            if (0 !== t.button || !sb(t.currentTarget, lb(t.nativeEvent))) return;
            if (r = t.nativeEvent, !wg() && 0 === r.width && 0 === r.height || 1 === r.width && 1 === r.height && 0 === r.pressure && 0 === r.detail && "mouse" === r.pointerType) return void(e.pointerType = "virtual");
            var r;
            e.pointerType = t.pointerType;
            let n = !0;
            if (!e.isPressed) {
              e.isPressed = !0, I("pointer"), e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, c || function(e) {
                if (gg()) {
                  if ("default" === Sg) {
                    const t = $y(e);
                    kg = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                  }
                  Sg = "disabled"
                } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                  let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                  Tg.set(e, e.style[t]), e.style[t] = "none"
                }
              }(e.target), n = _(t, e.pointerType);
              let r = lb(t.nativeEvent);
              "releasePointerCapture" in r && ("hasPointerCapture" in r ? r.hasPointerCapture(t.pointerId) && r.releasePointerCapture(t.pointerId) : r.releasePointerCapture(t.pointerId))
            }
            n && t.stopPropagation()
          }, t.onMouseDown = t => {
            if (sb(t.currentTarget, lb(t.nativeEvent)) && 0 === t.button) {
              if (u) {
                let r = function(e) {
                  for (; e && !ng(e);) e = e.parentElement;
                  let t = Gy(e),
                    r = t.document.activeElement;
                  if (!r || r === e) return;
                  cg = !0;
                  let n = !1,
                    o = e => {
                      (e.target === r || n) && e.stopImmediatePropagation()
                    },
                    i = t => {
                      (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, sg(r), l()))
                    },
                    s = t => {
                      (t.target === e || n) && t.stopImmediatePropagation()
                    },
                    a = t => {
                      (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, sg(r), l()))
                    };
                  t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                  let l = () => {
                      cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), cg = !1, n = !1
                    },
                    u = requestAnimationFrame(l);
                  return l
                }(t.target);
                r && e.disposables.push(r)
              }
              t.stopPropagation()
            }
          }, t.onPointerUp = t => {
            sb(t.currentTarget, lb(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || C(t, e.pointerType || t.pointerType))
          }, t.onPointerEnter = t => {
            t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(Cb(e.target, t), e.pointerType))
          }, t.onPointerLeave = t => {
            t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Cb(e.target, t), e.pointerType, !1), S(t))
          }, t.onDragStart = e => {
            sb(e.currentTarget, lb(e.nativeEvent)) && P(e)
          }), t
        }, [a, u, g, c, P, S, w, _, C, k, T]);
        return (0, V.useEffect)(() => {
          if (!f) return;
          const e = $y(f.current);
          if (!e || !e.head || e.getElementById(gb)) return;
          const t = e.createElement("style");
          t.id = gb, t.textContent = `\n@layer {\n  [${bb}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, V.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            c || Eg(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [c]), {
          isPressed: l || h,
          pressProps: Jg(p, L, {
            [bb]: !0
          })
        }
      }

      function wb(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function xb(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Gy(o).HTMLInputElement && !jb(o, r) || o instanceof Gy(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && wb(o)) && "Enter" !== r)
      }

      function Cb(e, t) {
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

      function Ob(e, t) {
        return e instanceof HTMLInputElement ? !jb(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : wb(e)))
        }(e)
      }
      const Pb = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function jb(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Pb.has(e.type)
      }

      function Sb(e) {
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

      function kb(e, t) {
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
          t % 2 ? kb(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Sb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kb(Object(r)).forEach(function(t) {
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
      var Rb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Db = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Tb(Tb({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) Rb(u, n, e.defaultVariants) && (r += " " + d);
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
      const Nb = (0, V.createContext)(null);

      function Ib() {
        const e = (0, V.useContext)(Nb);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Lb = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...s
        }, a) => {
          const l = (0, X.v6)({
              className: Db({
                status: i
              }),
              "data-testid": t
            }, s),
            u = r ? Z.DX : "div";
          return (0, x.jsx)(Nb.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: i,
              ...s
            },
            children: (0, x.jsx)(u, {
              ...l,
              ref: a,
              children: e
            })
          })
        }),
        Mb = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Ib(), i = (0, X.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: be.Check,
            invalid: be.X,
            neutral: be.TriangleAlert
          }, a = t ? Z.DX : s[o];
          return (0, x.jsx)(a, {
            ref: n,
            ...i
          })
        }),
        zb = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: s
          } = Ib(), a = (0, X.v6)({
            "data-testid": t,
            id: s || i
          }, n), l = r ? Z.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });
      var Ab = "ScrollArea",
        [Vb, Fb] = (0, mf.A)(Ab),
        [qb, Bb] = Vb(Ab),
        Wb = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...s
          } = e, [a, l] = V.useState(null), [u, d] = V.useState(null), [c, f] = V.useState(null), [p, h] = V.useState(null), [m, v] = V.useState(null), [y, g] = V.useState(0), [b, _] = V.useState(0), [w, C] = V.useState(!1), [O, P] = V.useState(!1), j = (0, Y.s)(t, e => l(e)), S = Wm(o);
          return (0, x.jsx)(qb, {
            scope: r,
            type: n,
            dir: S,
            scrollHideDelay: i,
            scrollArea: a,
            viewport: u,
            onViewportChange: d,
            content: c,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: w,
            onScrollbarXEnabledChange: C,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: O,
            onScrollbarYEnabledChange: P,
            onCornerWidthChange: g,
            onCornerHeightChange: _,
            children: (0, x.jsx)(_f.div, {
              dir: S,
              ...s,
              ref: j,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        });
      Wb.displayName = Ab;
      var Xb = "ScrollAreaViewport",
        Hb = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, s = Bb(Xb, r), a = V.useRef(null), l = (0, Y.s)(t, a, s.onViewportChange);
          return (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, x.jsx)(_f.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, x.jsx)("div", {
                ref: s.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        });
      Hb.displayName = Xb;
      var Ub = "ScrollAreaScrollbar",
        Kb = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Bb(Ub, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: s
          } = o, a = "horizontal" === e.orientation;
          return V.useEffect(() => (a ? i(!0) : s(!0), () => {
            a ? i(!1) : s(!1)
          }), [a, i, s]), "hover" === o.type ? (0, x.jsx)(Zb, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, x.jsx)($b, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, x.jsx)(Gb, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, x.jsx)(Yb, {
            ...n,
            ref: t
          }) : null
        });
      Kb.displayName = Ub;
      var Zb = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Bb(Ub, e.__scopeScrollArea), [i, s] = V.useState(!1);
          return V.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), s(!0)
                },
                n = () => {
                  t = window.setTimeout(() => s(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, x.jsx)(Zh, {
            present: r || i,
            children: (0, x.jsx)(Gb, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        $b = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Bb(Ub, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = m_(() => l("SCROLL_END"), 100), [a, l] = (u = {
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
          }, V.useReducer((e, t) => u[e][t] ?? e, "hidden"));
          var u;
          return V.useEffect(() => {
            if ("idle" === a) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [a, o.scrollHideDelay, l]), V.useEffect(() => {
            const e = o.viewport,
              t = i ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (l("SCROLL"), s()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, i, l, s]), (0, x.jsx)(Zh, {
            present: r || "hidden" !== a,
            children: (0, x.jsx)(Yb, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: hf(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: hf(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Gb = V.forwardRef((e, t) => {
          const r = Bb(Ub, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, s] = V.useState(!1),
            a = "horizontal" === e.orientation,
            l = m_(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(a ? e : t)
              }
            }, 10);
          return v_(r.viewport, l), v_(r.content, l), (0, x.jsx)(Zh, {
            present: n || i,
            children: (0, x.jsx)(Yb, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Yb = V.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Bb(Ub, e.__scopeScrollArea), i = V.useRef(null), s = V.useRef(0), [a, l] = V.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), u = u_(a.viewport, a.content), d = {
            ...n,
            sizes: a,
            onSizesChange: l,
            hasThumb: Boolean(u > 0 && u < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function c(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = d_(r),
                i = t || o / 2,
                s = o - i,
                a = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                u = r.content - r.viewport;
              return f_([a, l], "ltr" === n ? [0, u] : [-1 * u, 0])(e)
            }(e, s.current, a, t)
          }
          return "horizontal" === r ? (0, x.jsx)(Qb, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = c_(o.viewport.scrollLeft, a, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = c(e, o.dir))
            }
          }) : "vertical" === r ? (0, x.jsx)(Jb, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = c_(o.viewport.scrollTop, a);
                i.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = c(e))
            }
          }) : null
        }),
        Qb = V.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Bb(Ub, e.__scopeScrollArea), [s, a] = V.useState(), l = V.useRef(null), u = (0, Y.s)(t, l, i.onScrollbarXChange);
          return V.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, x.jsx)(r_, {
            "data-orientation": "horizontal",
            ...o,
            ref: u,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": d_(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), p_(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: l_(s.paddingLeft),
                  paddingEnd: l_(s.paddingRight)
                }
              })
            }
          })
        }),
        Jb = V.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Bb(Ub, e.__scopeScrollArea), [s, a] = V.useState(), l = V.useRef(null), u = (0, Y.s)(t, l, i.onScrollbarYChange);
          return V.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, x.jsx)(r_, {
            "data-orientation": "vertical",
            ...o,
            ref: u,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": d_(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), p_(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: l_(s.paddingTop),
                  paddingEnd: l_(s.paddingBottom)
                }
              })
            }
          })
        }),
        [e_, t_] = Vb(Ub),
        r_ = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: s,
            onThumbPointerDown: a,
            onThumbPositionChange: l,
            onDragScroll: u,
            onWheelScroll: d,
            onResize: c,
            ...f
          } = e, p = Bb(Ub, r), [h, m] = V.useState(null), v = (0, Y.s)(t, e => m(e)), y = V.useRef(null), g = V.useRef(""), b = p.viewport, _ = n.content - n.viewport, w = (0, Cf.c)(d), C = (0, Cf.c)(l), O = m_(c, 10);

          function P(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              u({
                x: t,
                y: r
              })
            }
          }
          return V.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = h?.contains(t);
              r && w(e, _)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, h, _, w]), V.useEffect(C, [n, C]), v_(h, O), v_(p.content, O), (0, x.jsx)(e_, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, Cf.c)(i),
            onThumbPointerUp: (0, Cf.c)(s),
            onThumbPositionChange: C,
            onThumbPointerDown: (0, Cf.c)(a),
            children: (0, x.jsx)(_f.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: hf(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), P(e))
              }),
              onPointerMove: hf(e.onPointerMove, P),
              onPointerUp: hf(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        n_ = "ScrollAreaThumb",
        o_ = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = t_(n_, e.__scopeScrollArea);
          return (0, x.jsx)(Zh, {
            present: r || o.hasThumb,
            children: (0, x.jsx)(i_, {
              ref: t,
              ...n
            })
          })
        }),
        i_ = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = Bb(n_, r), s = t_(n_, r), {
            onThumbPositionChange: a
          } = s, l = (0, Y.s)(t, e => s.onThumbChange(e)), u = V.useRef(void 0), d = m_(() => {
            u.current && (u.current(), u.current = void 0)
          }, 100);
          return V.useEffect(() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (d(), !u.current) {
                  const t = h_(e, a);
                  u.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [i.viewport, d, a]), (0, x.jsx)(_f.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: hf(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: hf(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      o_.displayName = n_;
      var s_ = "ScrollAreaCorner";
      V.forwardRef((e, t) => {
        const r = Bb(s_, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, x.jsx)(a_, {
          ...e,
          ref: t
        }) : null
      }).displayName = s_;
      var a_ = V.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Bb(s_, r), [i, s] = V.useState(0), [a, l] = V.useState(0), u = Boolean(i && a);
        return v_(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), v_(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), u ? (0, x.jsx)(_f.div, {
          ...n,
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

      function l_(e) {
        return e ? parseInt(e, 10) : 0
      }

      function u_(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function d_(e) {
        const t = u_(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function c_(e, t, r = "ltr") {
        const n = d_(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - n,
          l = qm(e, "ltr" === r ? [0, s] : [-1 * s, 0]);
        return f_([0, s], [0, a])(l)
      }

      function f_(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function p_(e, t) {
        return e > 0 && e < t
      }
      var h_ = (e, t = () => {}) => {
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
            s = r.left !== i.left,
            a = r.top !== i.top;
          (s || a) && t(), r = i, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function m_(e, t) {
        const r = (0, Cf.c)(e),
          n = V.useRef(0);
        return V.useEffect(() => () => window.clearTimeout(n.current), []), V.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function v_(e, t) {
        const r = (0, Cf.c)(t);
        (0, Ch.N)(() => {
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
      var y_ = Wb,
        g_ = Hb,
        b_ = Kb,
        __ = o_,
        w_ = [" ", "Enter", "ArrowUp", "ArrowDown"],
        x_ = [" ", "Enter"],
        C_ = "Select",
        [O_, P_, j_] = Hm(C_),
        [S_, k_] = (0, mf.A)(C_, [j_, Sh]),
        T_ = Sh(),
        [E_, R_] = S_(C_),
        [D_, N_] = S_(C_),
        I_ = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            value: s,
            defaultValue: a,
            onValueChange: l,
            dir: u,
            name: d,
            autoComplete: c,
            disabled: f,
            required: p,
            form: h
          } = e, m = T_(t), [v, y] = V.useState(null), [g, b] = V.useState(null), [_, w] = V.useState(!1), C = Wm(u), [O, P] = (0, Gh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: C_
          }), [j, S] = (0, Gh.i)({
            prop: s,
            defaultProp: a,
            onChange: l,
            caller: C_
          }), k = V.useRef(null), T = !v || h || !!v.closest("form"), [E, R] = V.useState(new Set), D = Array.from(E).map(e => e.props.value).join(";");
          return (0, x.jsx)(Wh, {
            ...m,
            children: (0, x.jsxs)(E_, {
              required: p,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: _,
              onValueNodeHasChildrenChange: w,
              contentId: (0, Nf.B)(),
              value: j,
              onValueChange: S,
              open: O,
              onOpenChange: P,
              dir: C,
              triggerPointerDownPosRef: k,
              disabled: f,
              children: [(0, x.jsx)(O_.Provider, {
                scope: t,
                children: (0, x.jsx)(D_, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: V.useCallback(e => {
                    R(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: V.useCallback(e => {
                    R(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), T ? (0, x.jsxs)(mw, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: d,
                autoComplete: c,
                value: j,
                onChange: e => S(e.target.value),
                disabled: f,
                form: h,
                children: [void 0 === j ? (0, x.jsx)("option", {
                  value: ""
                }) : null, Array.from(E)]
              }, D) : null]
            })
          })
        };
      I_.displayName = C_;
      var L_ = "SelectTrigger",
        M_ = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = T_(r), s = R_(L_, r), a = s.disabled || n, l = (0, Y.s)(t, s.onTriggerChange), u = P_(r), d = V.useRef("touch"), [c, f, p] = yw(e => {
            const t = u().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = gw(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), h = e => {
            a || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, x.jsx)(Xh, {
            asChild: !0,
            ...i,
            children: (0, x.jsx)(_f.button, {
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
              "data-placeholder": vw(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: hf(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== d.current && h(e)
              }),
              onPointerDown: hf(o.onPointerDown, e => {
                d.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: hf(o.onKeyDown, e => {
                const t = "" !== c.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || w_.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      M_.displayName = L_;
      var z_ = "SelectValue",
        A_ = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = R_(z_, r), {
            onValueNodeHasChildrenChange: u
          } = l, d = void 0 !== i, c = (0, Y.s)(t, l.onValueNodeChange);
          return (0, Ch.N)(() => {
            u(d)
          }, [u, d]), (0, x.jsx)(_f.span, {
            ...a,
            ref: c,
            style: {
              pointerEvents: "none"
            },
            children: vw(l.value) ? (0, x.jsx)(x.Fragment, {
              children: s
            }) : i
          })
        });
      A_.displayName = z_;
      var V_ = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, x.jsx)(_f.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      V_.displayName = "SelectIcon";
      var F_ = e => (0, x.jsx)(Kh, {
        asChild: !0,
        ...e
      });
      F_.displayName = "SelectPortal";
      var q_ = "SelectContent",
        B_ = V.forwardRef((e, t) => {
          const r = R_(q_, e.__scopeSelect),
            [n, o] = V.useState();
          if ((0, Ch.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? G.createPortal((0, x.jsx)(X_, {
              scope: e.__scopeSelect,
              children: (0, x.jsx)(O_.Slot, {
                scope: e.__scopeSelect,
                children: (0, x.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, x.jsx)(K_, {
            ...e,
            ref: t
          })
        });
      B_.displayName = q_;
      var W_ = 10,
        [X_, H_] = S_(q_),
        U_ = vf("SelectContent.RemoveScroll"),
        K_ = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            side: a,
            sideOffset: l,
            align: u,
            alignOffset: d,
            arrowPadding: c,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = R_(q_, r), [b, _] = V.useState(null), [w, C] = V.useState(null), O = (0, Y.s)(t, e => _(e)), [P, j] = V.useState(null), [S, k] = V.useState(null), T = P_(r), [E, R] = V.useState(!1), D = V.useRef(!1);
          V.useEffect(() => {
            if (b) return (0, zv.Eq)(b)
          }, [b]), Iv();
          const N = V.useCallback(e => {
              const [t, ...r] = T().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && w && (w.scrollTop = 0), r === n && w && (w.scrollTop = w.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [T, w]),
            I = V.useCallback(() => N([P, b]), [N, P, b]);
          V.useEffect(() => {
            E && I()
          }, [E, I]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: M
          } = g;
          V.useEffect(() => {
            if (b) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (M.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (M.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || L(!1), document.removeEventListener("pointermove", t), M.current = null
                };
              return null !== M.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [b, L, M]), V.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [z, A] = yw(e => {
            const t = T().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = gw(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), F = V.useCallback((e, t, r) => {
            const n = !D.current && !r;
            (void 0 !== g.value && g.value === t || n) && (j(e), n && (D.current = !0))
          }, [g.value]), q = V.useCallback(() => b?.focus(), [b]), B = V.useCallback((e, t, r) => {
            const n = !D.current && !r;
            (void 0 !== g.value && g.value === t || n) && k(e)
          }, [g.value]), W = "popper" === n ? $_ : Z_, X = W === $_ ? {
            side: a,
            sideOffset: l,
            align: u,
            alignOffset: d,
            arrowPadding: c,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v
          } : {};
          return (0, x.jsx)(X_, {
            scope: r,
            content: b,
            viewport: w,
            onViewportChange: C,
            itemRefCallback: F,
            selectedItem: P,
            onItemLeave: q,
            itemTextRefCallback: B,
            focusSelectedItem: I,
            selectedItemText: S,
            position: n,
            isPositioned: E,
            searchRef: z,
            children: (0, x.jsx)(Mv.A, {
              as: U_,
              allowPinchZoom: !0,
              children: (0, x.jsx)(jv, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: hf(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, x.jsx)(Sf, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, x.jsx)(W, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...X,
                    onPlaced: () => R(!0),
                    ref: O,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: hf(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || A(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = T().filter(e => !e.disabled);
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
      K_.displayName = "SelectContentImpl";
      var Z_ = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = R_(q_, r), s = H_(q_, r), [a, l] = V.useState(null), [u, d] = V.useState(null), c = (0, Y.s)(t, e => d(e)), f = P_(r), p = V.useRef(!1), h = V.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = s, b = V.useCallback(() => {
          if (i.trigger && i.valueNode && a && u && m && v && y) {
            const e = i.trigger.getBoundingClientRect(),
              t = u.getBoundingClientRect(),
              r = i.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const n = o.left - t.left,
                i = r.left - n,
                s = e.left - i,
                l = e.width + s,
                u = Math.max(l, t.width),
                d = window.innerWidth - W_,
                c = qm(i, [W_, Math.max(W_, d - u)]);
              a.style.minWidth = l + "px", a.style.left = c + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - i,
                l = e.width + s,
                u = Math.max(l, t.width),
                d = window.innerWidth - W_,
                c = qm(i, [W_, Math.max(W_, d - u)]);
              a.style.minWidth = l + "px", a.style.right = c + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * W_,
              d = m.scrollHeight,
              c = window.getComputedStyle(u),
              h = parseInt(c.borderTopWidth, 10),
              g = parseInt(c.paddingTop, 10),
              b = parseInt(c.borderBottomWidth, 10),
              _ = h + g + d + parseInt(c.paddingBottom, 10) + b,
              w = Math.min(5 * v.offsetHeight, _),
              x = window.getComputedStyle(m),
              C = parseInt(x.paddingTop, 10),
              O = parseInt(x.paddingBottom, 10),
              P = e.top + e.height / 2 - W_,
              j = l - P,
              S = v.offsetHeight / 2,
              k = h + g + (v.offsetTop + S),
              T = _ - k;
            if (k <= P) {
              const e = s.length > 0 && v === s[s.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = u.clientHeight - m.offsetTop - m.offsetHeight,
                r = k + Math.max(j, S + (e ? O : 0) + t + b);
              a.style.height = r + "px"
            } else {
              const e = s.length > 0 && v === s[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(P, h + m.offsetTop + (e ? C : 0) + S) + T;
              a.style.height = t + "px", m.scrollTop = k - P + m.offsetTop
            }
            a.style.margin = `${W_}px 0`, a.style.minHeight = w + "px", a.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, i.trigger, i.valueNode, a, u, m, v, y, i.dir, n]);
        (0, Ch.N)(() => b(), [b]);
        const [_, w] = V.useState();
        (0, Ch.N)(() => {
          u && w(window.getComputedStyle(u).zIndex)
        }, [u]);
        const C = V.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, x.jsx)(G_, {
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
              zIndex: _
            },
            children: (0, x.jsx)(_f.div, {
              ...o,
              ref: c,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      });
      Z_.displayName = "SelectItemAlignedPosition";
      var $_ = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = W_,
          ...i
        } = e, s = T_(r);
        return (0, x.jsx)(Hh, {
          ...s,
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
      });
      $_.displayName = "SelectPopperPosition";
      var [G_, Y_] = S_(q_, {}), Q_ = "SelectViewport", J_ = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = H_(Q_, r), s = Y_(Q_, r), a = (0, Y.s)(t, i.onViewportChange), l = V.useRef(0);
        return (0, x.jsxs)(x.Fragment, {
          children: [(0, x.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, x.jsx)(O_.Slot, {
            scope: r,
            children: (0, x.jsx)(_f.div, {
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
              onScroll: hf(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * W_,
                      o = parseFloat(r.style.minHeight),
                      i = parseFloat(r.style.height),
                      s = Math.max(o, i);
                    if (s < n) {
                      const o = s + e,
                        i = Math.min(n, o),
                        a = o - i;
                      r.style.height = i + "px", "0px" === r.style.bottom && (t.scrollTop = a > 0 ? a : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              })
            })
          })]
        })
      });
      J_.displayName = Q_;
      var ew = "SelectGroup",
        [tw, rw] = S_(ew);
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Nf.B)();
        return (0, x.jsx)(tw, {
          scope: r,
          id: o,
          children: (0, x.jsx)(_f.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = ew;
      var nw = "SelectLabel";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = rw(nw, r);
        return (0, x.jsx)(_f.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = nw;
      var ow = "SelectItem",
        [iw, sw] = S_(ow),
        aw = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...s
          } = e, a = R_(ow, r), l = H_(ow, r), u = a.value === n, [d, c] = V.useState(i ?? ""), [f, p] = V.useState(!1), h = (0, Y.s)(t, e => l.itemRefCallback?.(e, n, o)), m = (0, Nf.B)(), v = V.useRef("touch"), y = () => {
            o || (a.onValueChange(n), a.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, x.jsx)(iw, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: u,
            onItemTextChange: V.useCallback(e => {
              c(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, x.jsx)(O_.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: d,
              children: (0, x.jsx)(_f.div, {
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
                onFocus: hf(s.onFocus, () => p(!0)),
                onBlur: hf(s.onBlur, () => p(!1)),
                onClick: hf(s.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: hf(s.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: hf(s.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: hf(s.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: hf(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: hf(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (x_.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      aw.displayName = ow;
      var lw = "SelectItemText",
        uw = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, s = R_(lw, r), a = H_(lw, r), l = sw(lw, r), u = N_(lw, r), [d, c] = V.useState(null), f = (0, Y.s)(t, e => c(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), p = d?.textContent, h = V.useMemo(() => (0, x.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: p
          }, l.value), [l.disabled, l.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = u;
          return (0, Ch.N)(() => (m(h), () => v(h)), [m, v, h]), (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(_f.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? G.createPortal(i.children, s.valueNode) : null]
          })
        });
      uw.displayName = lw;
      var dw = "SelectItemIndicator";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return sw(dw, r).isSelected ? (0, x.jsx)(_f.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = dw;
      var cw = "SelectScrollUpButton";
      V.forwardRef((e, t) => {
        const r = H_(cw, e.__scopeSelect),
          n = Y_(cw, e.__scopeSelect),
          [o, i] = V.useState(!1),
          s = (0, Y.s)(t, n.onScrollButtonChange);
        return (0, Ch.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, x.jsx)(pw, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = cw;
      var fw = "SelectScrollDownButton";
      V.forwardRef((e, t) => {
        const r = H_(fw, e.__scopeSelect),
          n = Y_(fw, e.__scopeSelect),
          [o, i] = V.useState(!1),
          s = (0, Y.s)(t, n.onScrollButtonChange);
        return (0, Ch.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, x.jsx)(pw, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = fw;
      var pw = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = H_("SelectScrollButton", r), s = V.useRef(null), a = P_(r), l = V.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return V.useEffect(() => () => l(), [l]), (0, Ch.N)(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, x.jsx)(_f.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: hf(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: hf(o.onPointerMove, () => {
            i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: hf(o.onPointerLeave, () => {
            l()
          })
        })
      });
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, x.jsx)(_f.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var hw = "SelectArrow";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = T_(r), i = R_(hw, r), s = H_(hw, r);
        return i.open && "popper" === s.position ? (0, x.jsx)(Uh, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = hw;
      var mw = V.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = V.useRef(null),
          i = (0, Y.s)(n, o),
          s = Xm(t);
        return V.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (s !== t && n) {
            const r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [s, t]), (0, x.jsx)(_f.select, {
          ...r,
          style: {
            ...Yh,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function vw(e) {
        return "" === e || void 0 === e
      }

      function yw(e) {
        const t = (0, Cf.c)(e),
          r = V.useRef(""),
          n = V.useRef(0),
          o = V.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          i = V.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return V.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i]
      }

      function gw(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === n.length && (i = i.filter(e => e !== r));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      mw.displayName = "SelectBubbleInput";
      var bw = I_,
        _w = M_,
        ww = A_,
        xw = V_,
        Cw = F_,
        Ow = B_,
        Pw = J_,
        jw = aw,
        Sw = uw;

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
            var n, o, i;
            n = e, o = t, i = r[t], (o = kw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Rw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Dw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Nw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ew(Ew({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) Dw(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rw(e.variantClassNames, e => Rw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Iw = Nw({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Lw = Nw({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mw = Nw({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zw = Nw({
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
        Aw = Nw({
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
        Vw = Nw({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Fw = (0, V.createContext)(null);

      function qw() {
        const e = (0, V.useContext)(Fw);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Bw = (0, V.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: i,
          onValueChange: s,
          name: a,
          value: l,
          defaultOpen: u,
          onOpenChange: d,
          isOpen: c,
          size: f = "MD",
          status: p = "neutral",
          ...h
        }, m) => {
          const v = (0, V.useRef)(null),
            y = (0, K.UP)(v, m),
            g = (0, V.useId)(),
            b = (0, V.useId)(),
            _ = (0, V.useId)(),
            w = (0, V.useId)(),
            C = (0, V.useId)(),
            O = (0, V.useId)(),
            [P = !1, j] = (0, K.ic)({
              prop: c,
              defaultProp: u,
              onChange: d
            }),
            S = (0, X.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, x.jsx)(Fw.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: _,
              triggerId: O,
              hintId: w,
              popoverId: C,
              defaultValue: i,
              onValueChange: s,
              value: l,
              isOpen: P,
              setIsOpen: j,
              defaultOpen: u,
              onOpenChange: d,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, x.jsx)(bw, {
              required: r,
              disabled: n,
              open: P,
              onOpenChange: () => j(!o && !P),
              value: l,
              defaultValue: i,
              onValueChange: s,
              name: a,
              children: (0, x.jsx)("div", {
                ref: y,
                ...S,
                children: e
              })
            })
          })
        }),
        Ww = (0, V.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = qw(), s = (0, X.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Iw({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, x.jsx)(Ow, {
            ...s,
            ref: o,
            children: (0, x.jsx)(Pw, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Xw = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, x.jsxs)(y_, {
            ...o,
            ref: n,
            children: [(0, x.jsx)(Pw, {
              asChild: !0,
              children: (0, x.jsx)(g_, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                children: e
              })
            }), (0, x.jsx)(b_, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, x.jsx)(__, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Hw = (0, V.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...i
        }, s) => {
          const {
            isReadOnly: a,
            status: l,
            isDisabled: u,
            labelId: d,
            hintId: c,
            triggerId: f,
            popoverId: p,
            descriptionId: h,
            isOpen: m,
            value: v,
            size: y
          } = qw(), {
            isPressed: g,
            pressProps: b
          } = _b({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), _ = (0, X.v6)({
            id: f,
            className: Aw({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!u
            }),
            "aria-labelledby": (0, X.VW)(r, d, c),
            "aria-describedby": (0, X.VW)(n, h),
            "aria-activedescendant": v,
            "aria-controls": p,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, X.cJ)(b, "onKeyDown"), i), w = o ? Z.DX : _w;
          return (0, x.jsx)(w, {
            ..._,
            ref: s,
            children: e
          })
        }),
        Uw = (0, V.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: i
          } = qw(), s = (0, X.v6)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), a = t ? Z.DX : "span";
          return (0, x.jsx)(a, {
            ...s,
            ref: o,
            children: (0, x.jsx)(ww, {
              placeholder: e,
              "aria-label": i
            })
          })
        }),
        Kw = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: s
          } = qw(), a = s ? be.ChevronUp : be.ChevronDown, l = (0, X.v6)({
            asChild: !0,
            className: Vw({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, x.jsx)(xw, {
            ...l,
            ref: n,
            children: e || (0, x.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        Zw = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, s) => {
          const {
            isRequired: a,
            isDisabled: l,
            labelId: u,
            triggerId: d
          } = qw(), c = a && !o, f = (0, X.v6)({
            id: i.id || u,
            htmlFor: d,
            "data-testid": e,
            className: zw({
              showAsterisk: c,
              isDisabled: l
            })
          }, i), p = t ? Z.DX : "label";
          return (0, x.jsx)(Z.s6, {
            enabled: n,
            children: (0, x.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        $w = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = qw(), a = (0, X.v6)({
            className: Lw({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? Z.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Gw = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = qw(), a = (0, X.v6)({
            className: Mw({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? Z.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Yw = (0, V.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, V.useRef)(null),
            a = (0, K.UP)(s, i),
            l = (0, X.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, x.jsx)(jw, {
            ref: a,
            ...l,
            children: e
          })
        }),
        Qw = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, x.jsx)(Sw, {
            ref: n,
            asChild: !0,
            children: (0, x.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        Jw = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, x.jsx)(xw, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        ex = Cw,
        tx = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = qw(), a = (0, X.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? Z.DX : Lb;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        rx = Mb,
        nx = zb,
        ox = new Set(["id"]),
        ix = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        sx = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        ax = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        lx = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        ux = /^(data-.*)$/;

      function dx(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          global: o,
          events: i = o,
          propNames: s
        } = t, a = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (ox.has(t) || r && ix.has(t) || n && sx.has(t) || o && ax.has(t) || i && (lx.has(t) || t.endsWith("Capture") && lx.has(t.slice(0, -7))) || (null == s ? void 0 : s.has(t)) || ux.test(t)) && (a[t] = e[t]);
        return a
      }

      function cx(e, t, r) {
        let n = ob(() => {
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
      let fx = null,
        px = "keyboard";
      const hx = new Set;
      let mx = new Map,
        vx = !1,
        yx = !1;

      function gx(e, t) {
        for (let r of hx) r(e, t)
      }

      function bx(e) {
        vx = !0, !cb.isOpening && function(e) {
          return !(e.metaKey || !mg() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (fx = "keyboard", px = "keyboard", gx("keyboard", e))
      }

      function _x(e) {
        fx = "pointer", px = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (vx = !0, gx("pointer", e))
      }

      function wx(e) {
        !cb.isOpening && hb(e) && (vx = !0, fx = "virtual", px = "virtual")
      }

      function xx(e) {
        e.target !== window && e.target !== document && !cg && e.isTrusted && (vx || yx || (fx = "virtual", px = "virtual", gx("virtual", e)), vx = !1, yx = !1)
      }

      function Cx() {
        cg || (vx = !1, yx = !0)
      }

      function Ox(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || mx.get(Gy(e))) return;
        const t = Gy(e),
          r = $y(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          vx = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", bx, !0), r.addEventListener("keyup", bx, !0), r.addEventListener("click", wx, !0), t.addEventListener("focus", xx, !0), t.addEventListener("blur", Cx, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", _x, !0), r.addEventListener("pointermove", _x, !0), r.addEventListener("pointerup", _x, !0)), t.addEventListener("beforeunload", () => {
          Px(e)
        }, {
          once: !0
        }), mx.set(t, {
          focus: n
        })
      }
      const Px = (e, t) => {
        const r = Gy(e),
          n = $y(e);
        t && n.removeEventListener("DOMContentLoaded", t), mx.has(r) && (r.HTMLElement.prototype.focus = mx.get(r).focus, n.removeEventListener("keydown", bx, !0), n.removeEventListener("keyup", bx, !0), n.removeEventListener("click", wx, !0), r.removeEventListener("focus", xx, !0), r.removeEventListener("blur", Cx, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", _x, !0), n.removeEventListener("pointermove", _x, !0), n.removeEventListener("pointerup", _x, !0)), mx.delete(r))
      };

      function jx(e) {
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
        const t = $y(e);
        let r;
        "loading" !== t.readyState ? Ox(e) : (r = () => {
          Ox(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let Sx = V.createContext(null);

      function kx(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const i = (0, V.useCallback)(e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }, [n, o]),
            s = dg(i),
            a = (0, V.useCallback)(e => {
              const t = $y(e.target),
                n = t ? ab(t) : ab();
              e.target === e.currentTarget && n === lb(e.nativeEvent) && (r && r(e), o && o(!0), s(e))
            }, [o, r, s]);
          return {
            focusProps: {
              onFocus: !t && (r || o || n) ? a : void 0,
              onBlur: t || !n && !o ? void 0 : i
            }
          }
        }(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: jx(e.onKeyDown),
              onKeyUp: jx(e.onKeyUp)
            }
          }
        }(e), o = Jg(r, n), i = function(e) {
          let t = (0, V.useContext)(Sx) || {};
          eb(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), s = e.isDisabled ? {} : i, a = (0, V.useRef)(e.autoFocus);
        (0, V.useEffect)(() => {
          a.current && t.current && function(e) {
            const t = $y(e);
            if ("virtual" === fx) {
              let r = ab(t);
              jg(() => {
                const n = ab(t);
                n !== r && n !== t.body || !e.isConnected || sg(e)
              })
            } else sg(e)
          }(t.current), a.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Jg({
            ...o,
            tabIndex: l
          }, s)
        }
      }

      function Tx(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: i,
          name: s,
          form: a,
          children: l,
          "aria-label": u,
          "aria-labelledby": d,
          validationState: c = "valid",
          isInvalid: f,
          onPressStart: p,
          onPressEnd: h,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g
        } = e, {
          pressProps: b,
          isPressed: _
        } = _b({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g,
          isDisabled: n
        }), {
          pressProps: w,
          isPressed: x
        } = _b({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: m,
          onPressUp: y,
          onClick: g,
          onPress(e) {
            var n;
            null == v || v(e), t.toggle(), null === (n = r.current) || void 0 === n || n.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: C
        } = kx(e, r), O = Jg(b, C), P = dx(e, {
          labelable: !0
        });
        return cx(r, t.defaultSelected, t.setSelected), {
          labelProps: Jg(w, {
            onClick: e => e.preventDefault()
          }),
          inputProps: Jg(P, {
            "aria-invalid": f || "invalid" === c || void 0,
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
            name: s,
            form: a,
            type: "checkbox",
            ...O
          }),
          isSelected: t.isSelected,
          isPressed: _ || x,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === c
        }
      }
      var Ex;
      const Rx = "undefined" != typeof document ? null !== (Ex = V.useInsertionEffect) && void 0 !== Ex ? Ex : V.useLayoutEffect : () => {};

      function Dx(e, t, r) {
        let [n, o] = (0, V.useState)(e || t), i = (0, V.useRef)(n), s = (0, V.useRef)(void 0 !== e), a = void 0 !== e;
        (0, V.useEffect)(() => {
          s.current, s.current = a
        }, [a]);
        let l = a ? e : n;
        Rx(() => {
          i.current = l
        });
        let [, u] = (0, V.useReducer)(() => ({}), {}), d = (0, V.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(i.current) : e;
          Object.is(i.current, n) || (i.current = n, o(n), u(), null == r || r(n, ...t))
        }, [r]);
        return [l, d]
      }

      function Nx(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Dx(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, V.useState)(r);
        var i;
        return {
          isSelected: r,
          defaultSelected: null !== (i = e.defaultSelected) && void 0 !== i ? i : o,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }

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

      function Lx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lx(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ix(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lx(Object(r)).forEach(function(t) {
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
      var Ax = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Vx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mx(Mx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) Ax(u, n, e.defaultVariants) && (r += " " + d);
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
        Fx = Vx({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qx = Vx({
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
        Bx = Vx({
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
        Wx = Vx({
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
        Xx = Vx({
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
      const Hx = (0, V.createContext)(null);

      function Ux() {
        const e = (0, V.useContext)(Hx);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Kx = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: i = !1,
          isReadOnly: s = !1,
          ...a
        }, l) => {
          const u = (0, X.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, a),
            d = n ? Z.DX : "div",
            c = (0, V.useId)(),
            f = (0, V.useId)(),
            p = (0, V.useId)();
          return (0, x.jsx)(Hx.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: f,
              inputId: p,
              isDisabled: i,
              isReadOnly: s,
              ...a
            },
            children: (0, x.jsx)(d, {
              ...u,
              ref: l,
              children: o
            })
          })
        }),
        Zx = (0, V.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: i,
          isSelected: s,
          defaultSelected: a,
          onSelectedChange: l,
          name: u,
          value: d,
          ...c
        }, f) => {
          const p = (0, V.useRef)(null),
            h = (0, K.UP)(p, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: _,
              isReadOnly: w
            } = Ux(),
            C = Nx({
              isDisabled: _,
              isReadOnly: w,
              isSelected: s,
              defaultSelected: a,
              onChange: l
            }),
            {
              inputProps: O
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: i,
                isPressed: s,
                isDisabled: a,
                isReadOnly: l
              } = Tx(e, t, r);
              return {
                labelProps: n,
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
              "aria-labelledby": (0, X.VW)(n, g),
              "aria-describedby": (0, X.VW)(o, b),
              name: u,
              value: d,
              isDisabled: _,
              isReadOnly: w
            }, C, p),
            P = (0, X.v6)({
              className: Xx({
                appearance: v
              }),
              "data-state": C.isSelected ? "selected" : "unselected",
              "data-disabled": _ || w,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || _ || w || C.toggle()
              }
            }, c);
          return (0, x.jsxs)("div", {
            ...P,
            children: [(0, x.jsx)(Z.s6, {
              children: (0, x.jsx)("input", {
                ...O,
                ref: h
              })
            }), (0, x.jsx)("div", {
              className: Wx({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, x.jsx)("div", {
                className: qx({
                  size: m,
                  isSelected: C.isSelected
                })
              })
            })]
          })
        }),
        $x = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            isDisabled: s,
            labelId: a,
            inputId: l,
            size: u
          } = Ux(), d = (0, X.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: Bx({
              isDisabled: s,
              size: u
            })
          }, o), c = t ? Z.DX : "label";
          return (0, x.jsx)(Z.s6, {
            enabled: n,
            children: (0, x.jsx)(c, {
              ...d,
              ref: i,
              children: r
            })
          })
        }),
        Gx = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Ux(), a = n.id || s, l = (0, X.v6)({
            className: Fx({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), u = t ? Z.DX : "div";
          return (0, x.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Yx = {
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
        Qx = {
          ...Yx,
          customError: !0,
          valid: !1
        },
        Jx = {
          isInvalid: !1,
          validationDetails: Yx,
          validationErrors: []
        },
        eC = (0, V.createContext)({}),
        tC = "__formValidationState" + Date.now();

      function rC(e) {
        if (e[tC]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[tC];
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
            validate: s,
            validationBehavior: a = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: Qx
            } : null,
            u = (0, V.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return nC(r)
                }
                return []
              }(s, o);
              return oC(e)
            }, [s, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let d = (0, V.useContext)(eC),
            c = (0, V.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => nC(d[e])) : nC(d[n]) : [], [d, n]),
            [f, p] = (0, V.useState)(d),
            [h, m] = (0, V.useState)(!1);
          d !== f && (p(d), m(!1));
          let v = (0, V.useMemo)(() => oC(h ? [] : c), [h, c]),
            y = (0, V.useRef)(Jx),
            [g, b] = (0, V.useState)(Jx),
            _ = (0, V.useRef)(Jx),
            [w, x] = (0, V.useState)(!1);
          return (0, V.useEffect)(() => {
            if (!w) return;
            x(!1);
            let e = u || i || y.current;
            iC(e, _.current) || (_.current = e, b(e))
          }), {
            realtimeValidation: l || v || u || i || Jx,
            displayValidation: "native" === a ? l || v || g : l || v || u || i || g,
            updateValidation(e) {
              "aria" !== a || iC(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = Jx;
              iC(e, _.current) || (_.current = e, b(e)), "native" === a && x(!1), m(!0)
            },
            commitValidation() {
              "native" === a && x(!0), m(!0)
            }
          }
        }(e)
      }

      function nC(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function oC(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Qx
        } : null
      }

      function iC(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }

      function sC(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        Zy(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: aC(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, V.useRef)(!1),
          s = ob(() => {
            i.current || t.resetValidation()
          }),
          a = ob(e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var s, a;
            !e.defaultPrevented && r && i && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(i) === r.current && (o ? o() : null === (s = r.current) || void 0 === s || s.focus(), fx = a = "keyboard", px = a, gx(a, null)), e.preventDefault()
          }),
          l = ob(() => {
            t.commitValidation()
          });
        (0, V.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            n = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            i.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == n || n.call(t), i.current = !1
          }), e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", s), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", s), t && (t.reset = n)
          }
        }, [r, n])
      }

      function aC(e) {
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
      const lC = ({
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
        uC = ({
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
        dC = ({
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
        cC = ({
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
        fC = ({
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
        pC = ({
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

      function hC(e) {
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

      function mC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mC(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = hC(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vC(vC({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) gC(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yC(e.variantClassNames, e => yC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _C = bC({
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
        wC = bC({
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
        xC = bC({
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
        CC = bC({
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
      const OC = (0, V.createContext)(null);

      function PC() {
        const e = (0, V.useContext)(OC);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const jC = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...i
        }, s) => {
          const a = (0, X.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, X.cJ)(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? Z.DX : "div",
            u = (0, V.useId)(),
            d = (0, V.useId)(),
            c = (0, V.useId)();
          return (0, x.jsx)(OC.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: d,
              inputId: c,
              ...i
            },
            children: (0, x.jsx)(l, {
              ...a,
              ref: s,
              children: o
            })
          })
        }),
        SC = (0, V.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: i,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": u,
          "aria-labelledby": d,
          ...c
        }, f) => {
          const {
            size: p,
            appearance: h,
            isIndeterminate: m,
            isRequired: v,
            descriptionId: y,
            labelId: g,
            inputId: b,
            ..._
          } = PC(), w = (0, V.useRef)(null), C = c.id || b, {
            isPressed: O,
            pressProps: P
          } = _b({
            ref: w
          }), {
            setSelected: j,
            toggle: S,
            ...k
          } = Nx({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: T,
            isSelected: E,
            isDisabled: R,
            isReadOnly: D
          } = function(e, t, r) {
            let n = rC({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: i,
                validationDetails: s
              } = n.displayValidation,
              {
                labelProps: a,
                inputProps: l,
                isSelected: u,
                isPressed: d,
                isDisabled: c,
                isReadOnly: f
              } = Tx({
                ...e,
                isInvalid: o
              }, t, r);
            sC(e, n, r);
            let {
              isIndeterminate: p,
              isRequired: h,
              validationBehavior: m = "aria"
            } = e;
            (0, V.useEffect)(() => {
              r.current && (r.current.indeterminate = !!p)
            });
            let {
              pressProps: v
            } = _b({
              isDisabled: c || f,
              onPress() {
                let {
                  [tC]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: Jg(a, v, (0, V.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: u,
                "aria-required": h && "aria" === m || void 0,
                required: h && "native" === m
              },
              isSelected: u,
              isPressed: d,
              isDisabled: c,
              isReadOnly: f,
              isInvalid: o,
              validationErrors: i,
              validationDetails: s
            }
          }({
            "aria-label": "",
            id: C,
            name: o,
            ..._
          }, {
            ...k,
            toggle: S,
            setSelected: _.isReadOnly ? () => !1 : j
          }, w), N = (0, X.v6)({
            className: wC({
              size: p
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || R || D || S()
            }
          }, P, c), I = (0, X.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, X.VW)(d, g),
            "aria-describedby": (0, X.VW)(l, y),
            "aria-errormessage": (0, X.VW)(u, _.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, T), L = m ? a[`Dash${p}`] : a[`Check${p}`];
          return (0, x.jsxs)("div", {
            ...N,
            children: [(0, x.jsx)(Z.s6, {
              children: (0, x.jsx)("input", {
                ...I,
                ref: f
              })
            }), (0, x.jsx)("div", {
              className: _C({
                size: p,
                appearance: h
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : E ? "checked" : "unchecked",
              "data-disabled": R || D,
              "data-testid": e,
              "data-pressed": O,
              children: (0, x.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (E || m) && (0, x.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        kC = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...i
        }, s) => {
          const {
            size: a,
            labelId: l,
            inputId: u,
            isRequired: d
          } = PC(), c = i.id || l, f = d && !o, p = (0, X.v6)({
            className: CC({
              size: a,
              showAsterisk: f
            }),
            "data-testid": r,
            id: c,
            htmlFor: i.htmlFor || u
          }, i), h = t ? Z.DX : "label";
          return (0, x.jsx)(Z.s6, {
            enabled: n,
            children: (0, x.jsx)(h, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        TC = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = PC(), a = n.id || s, l = (0, X.v6)({
            className: xC({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), u = t ? Z.DX : "div";
          return (0, x.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        }),
        EC = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = PC(), s = n.id || i, a = (0, X.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: s
          }, n), l = t ? Z.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });

      function RC(e) {
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

      function DC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function NC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? DC(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = RC(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : DC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function IC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var LC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        MC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = NC(NC({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) LC(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return IC(e.variantClassNames, e => IC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zC = MC({
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
        AC = MC({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        VC = MC({
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
        FC = MC({
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
      const qC = (0, V.createContext)(null);

      function BC() {
        const e = (0, V.useContext)(qC);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const WC = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const u = (0, X.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, a),
            d = e ? Z.DX : "div",
            c = (0, V.useId)(),
            f = (0, V.useId)(),
            p = (0, V.useId)(),
            h = (0, V.useId)();
          return (0, x.jsx)(qC.Provider, {
            value: {
              labelId: c,
              descriptionId: f,
              hintId: p,
              inputId: h,
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: s,
              ...a
            },
            children: (0, x.jsx)(d, {
              ref: l,
              ...u,
              children: t
            })
          })
        }),
        XC = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, s) => {
          const {
            labelId: a,
            inputId: l,
            isDisabled: u,
            isRequired: d
          } = BC(), c = (0, X.v6)({
            className: VC({
              isDisabled: u,
              showAsterisk: d && !o
            }),
            "data-testid": r,
            id: a,
            htmlFor: l
          }, i), f = t ? Z.DX : "label";
          return (0, x.jsx)(Z.s6, {
            enabled: n,
            children: (0, x.jsx)(f, {
              ...c,
              ref: s,
              children: e
            })
          })
        }),
        HC = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: i,
          placeholder: s = " ",
          "aria-labelledby": a,
          "aria-describedby": l,
          ...u
        }, d) => {
          const {
            descriptionId: c,
            labelId: f,
            inputId: p,
            hintId: h,
            isDisabled: m,
            isRequired: v,
            isReadOnly: y,
            status: g
          } = BC(), b = (0, V.useRef)(null), _ = (0, K.UP)(b, d), w = (0, X.v6)({
            className: FC({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: i,
            id: u.id || p,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: s,
            "aria-labelledby": (0, X.VW)(u.id, f, h, a),
            "aria-describedby": (0, X.VW)(c, l),
            "data-testid": r,
            ..."invalid" === g && {
              "aria-invalid": !0,
              "aria-errormessage": c
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
          }, u), C = e ? Z.DX : "textarea";
          return (0, x.jsx)(C, {
            ref: _,
            ...w,
            children: t
          })
        }),
        UC = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = BC(), a = (0, X.v6)({
            className: zC({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? Z.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        KC = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = BC(), a = (0, X.v6)({
            className: AC({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? Z.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        ZC = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = BC(), a = (0, X.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? Z.DX : Lb;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        $C = Mb,
        GC = zb;
      let YC = Math.round(1e10 * Math.random()),
        QC = 0;
      const JC = new WeakMap;
      class eO {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!sb(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return sb(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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

      function tO(e, t) {
        return !!e && !!t && t.some(t => sb(t, e))
      }

      function rO(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? og : ng,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = $y(o),
          s = function(e, t, r, n) {
            return (0, ib.Nf)() ? new eO(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if (sb(null == t ? void 0 : t.from, e)) return NodeFilter.FILTER_REJECT;
              if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    let t = [];
                    if (e.form) {
                      var r, n;
                      let o = null === (n = e.form) || void 0 === n || null === (r = n.elements) || void 0 === r ? void 0 : r.namedItem(e.name);
                      t = [...null != o ? o : []]
                    } else t = [...$y(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                    return !!t && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !tO(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s
      }
      class nO {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new oO({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && tO(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new nO;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new oO({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class oO {
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

      function iO(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = Zg(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function sO(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: s
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = Zg(t);
          let s = Zg(),
            a = {};
          return r && (n = n ? `${s} ${n}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: iO({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), a = Gg([Boolean(t), Boolean(r), n, o]), l = Gg([Boolean(t), Boolean(r), n, o]);
        return s = Jg(s, {
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
      new nO;
      const aO = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        lO = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function uO(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return aO.has(t.script)
        }
        let t = e.split("-")[0];
        return lO.has(t)
      }
      const dO = Symbol.for("react-aria.i18n.locale");

      function cO() {
        let e = "undefined" != typeof window && window[dO] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: uO(e) ? "rtl" : "ltr"
        }
      }
      let fO = cO(),
        pO = new Set;

      function hO() {
        fO = cO();
        for (let e of pO) e(fO)
      }
      const mO = V.createContext(null);

      function vO() {
        let e = function() {
          let e = Xg(),
            [t, r] = (0, V.useState)(fO);
          return (0, V.useEffect)(() => (0 === pO.size && window.addEventListener("languagechange", hO), pO.add(r), () => {
            pO.delete(r), 0 === pO.size && window.removeEventListener("languagechange", hO)
          }), []), e ? {
            locale: "undefined" != typeof window && window[dO] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, V.useContext)(mO) || e
      }

      function yO(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: i,
          isDisabled: s,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: u
        } = vO(), {
          isInvalid: d,
          validationErrors: c,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: m,
          errorMessageProps: v
        } = sO({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || c
        }), y = dx(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, i = (0, V.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: s,
            removeAllGlobalListeners: a
          } = tb(), l = (0, V.useCallback)(e => {
            sb(e.currentTarget, e.target) && i.current.isFocusWithin && !sb(e.currentTarget, e.relatedTarget) && (i.current.isFocusWithin = !1, a(), r && r(e), o && o(!1))
          }, [r, o, i, a]), u = dg(l), d = (0, V.useCallback)(e => {
            if (!sb(e.currentTarget, e.target)) return;
            const t = $y(e.target),
              r = ab(t);
            if (!i.current.isFocusWithin && r === lb(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, u(e);
              let r = e.currentTarget;
              s(t, "focus", e => {
                if (i.current.isFocusWithin && !sb(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  ug(n, r);
                  let o = lg(n);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, u, s, l]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: d,
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
        }), b = Zg(r);
        return JC.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: Jg(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === u && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === u && "vertical" !== a ? "next" : "prev";
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
              let n, o = rO(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof Gy(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
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
          isInvalid: d,
          validationErrors: c,
          validationDetails: f
        }
      }

      function gO(e) {
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

      function bO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bO(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = gO(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bO(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function wO(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var xO = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        CO = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _O(_O({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) xO(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wO(e.variantClassNames, e => wO(e, e => e.split(" ")[0]))
            }
          }, t
        },
        OO = CO({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        PO = CO({
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
      const jO = (0, V.createContext)(null);

      function SO() {
        const e = (0, V.useContext)(jO);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const kO = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: i,
          "aria-labelledby": s,
          "aria-describedby": a,
          "aria-errormessage": l,
          status: u = "neutral",
          ...d
        }, c) => {
          const f = (0, V.useRef)(null),
            p = (0, K.UP)(f, c),
            h = (0, V.useId)(),
            m = (0, V.useId)(),
            v = (0, V.useId)(),
            y = function(e) {
              let t = (0, V.useMemo)(() => e.name || `radio-group-${YC}-${++QC}`, [e.name]);
              var r;
              let [n, o] = Dx(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i] = (0, V.useState)(n), [s, a] = (0, V.useState)(null), l = rC({
                ...e,
                value: n
              }), u = l.displayValidation.isInvalid;
              var d;
              return {
                ...l,
                name: t,
                selectedValue: n,
                defaultSelectedValue: void 0 !== e.value ? i : null !== (d = e.defaultValue) && void 0 !== d ? d : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: s,
                setLastFocusedValue: a,
                isDisabled: e.isDisabled || !1,
                isReadOnly: e.isReadOnly || !1,
                isRequired: e.isRequired || !1,
                validationState: e.validationState || (u ? "invalid" : null),
                isInvalid: u
              }
            }({
              ...d,
              isInvalid: "invalid" === u
            }),
            {
              radioGroupProps: g
            } = yO({
              ...d,
              orientation: r,
              "aria-labelledby": (0, X.VW)(h, s),
              "aria-describedby": (0, X.VW)(m, v, a),
              "aria-errormessage": (0, X.VW)(v, l)
            }, y),
            b = (0, X.v6)({
              className: "foundry_njguqn0"
            }, g, (0, X.cJ)(d, "isDisabled", "isRequired", "isReadOnly", "name")),
            _ = i ? Z.DX : "div";
          return (0, x.jsx)(jO.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: h,
              errorId: v,
              status: u,
              ...d
            },
            children: (0, x.jsx)(_, {
              ref: p,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        TO = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: s
          } = SO(), a = (0, X.v6)({
            "data-testid": e,
            className: PO({
              size: i,
              orientation: s
            })
          }, n), l = t ? Z.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: r
          })
        }),
        EO = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, s) => {
          const {
            isRequired: a,
            labelId: l
          } = SO(), u = a && !o, d = (0, X.v6)({
            id: i.id || l,
            "data-testid": e,
            className: OO({
              showAsterisk: u
            })
          }, i), c = t ? Z.DX : "div";
          return (0, x.jsx)(Z.s6, {
            enabled: n,
            children: (0, x.jsx)(c, {
              ...d,
              ref: s,
              children: r
            })
          })
        }),
        RO = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = SO(), s = (0, X.v6)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), a = t ? Z.DX : "div";
          return (0, x.jsx)(a, {
            ...s,
            ref: o,
            children: r
          })
        }),
        DO = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: s
          } = SO(), a = (0, X.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: s
          }, n), l = r ? Z.DX : Lb;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        NO = Mb,
        IO = zb;
      var LO = CO({
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
        MO = CO({
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
        zO = CO({
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
        AO = CO({
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
      const VO = ({
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
        FO = ({
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
        qO = ({
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
        BO = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, X.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? Z.DX : "label";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        WO = (0, V.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, V.useRef)(null),
            i = (0, K.UP)(o, n),
            s = (0, V.useId)(),
            {
              state: a,
              appearance: l,
              size: u,
              isReadOnly: c,
              isRequired: f
            } = SO(),
            {
              isPressed: p,
              pressProps: h
            } = _b({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: m
            } = function(e, t, r) {
              let {
                value: n,
                children: o,
                "aria-label": i,
                "aria-labelledby": s,
                onPressStart: a,
                onPressEnd: l,
                onPressChange: u,
                onPress: d,
                onPressUp: c,
                onClick: f
              } = e;
              const p = e.isDisabled || t.isDisabled;
              let h = t.selectedValue === n,
                {
                  pressProps: m,
                  isPressed: v
                } = _b({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: u,
                  onPress: d,
                  onPressUp: c,
                  onClick: f,
                  isDisabled: p
                }),
                {
                  pressProps: y,
                  isPressed: g
                } = _b({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: u,
                  onPressUp: c,
                  onClick: f,
                  isDisabled: p,
                  onPress(e) {
                    var o;
                    null == d || d(e), t.setSelectedValue(n), null === (o = r.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = kx(Jg(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                _ = Jg(m, b),
                w = dx(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === n && (x = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (x = 0), p && (x = void 0);
              let {
                name: C,
                form: O,
                descriptionId: P,
                errorMessageId: j,
                validationBehavior: S
              } = JC.get(t);
              return cx(r, t.defaultSelectedValue, t.setSelectedValue), sC({
                validationBehavior: S
              }, t, r), {
                labelProps: Jg(y, (0, V.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: Jg(w, {
                  ..._,
                  type: "radio",
                  name: C,
                  form: O,
                  tabIndex: x,
                  disabled: p,
                  required: t.isRequired && "native" === S,
                  checked: h,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? j : null, P].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: p,
                isSelected: h,
                isPressed: v || g
              }
            }({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, a, o),
            v = m.checked,
            y = m.disabled || a?.isReadOnly,
            g = (0, X.v6)(m, {
              disabled: y,
              readOnly: c,
              required: f,
              "data-testid": e,
              ...y && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            b = d[`Dot${u}`];
          return (0, x.jsxs)("div", {
            className: AO({
              size: u
            }),
            children: [(0, x.jsx)(Z.s6, {
              children: (0, x.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, x.jsx)("div", {
              className: zO({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": p,
              ...h,
              children: (0, x.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, x.jsx)(b, {})
              })
            })]
          })
        }),
        XO = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: s,
            state: a
          } = SO(), l = (0, V.useId)(), u = (0, X.v6)({
            id: l,
            "data-testid": e,
            className: MO({
              size: s,
              isDisabled: a?.isDisabled
            })
          }, o), d = t ? Z.DX : "div";
          return (0, x.jsx)(Z.s6, {
            enabled: n,
            children: (0, x.jsx)(d, {
              ...u,
              ref: i,
              children: r
            })
          })
        }),
        HO = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = SO(), s = (0, X.v6)({
            "data-testid": e,
            className: LO({
              isDisabled: i
            })
          }, n), a = t ? Z.DX : "span";
          return (0, x.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        });

      function UO(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function KO(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return UO(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? UO(e, t) : void 0
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
        var i, s = !0,
          a = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return s = e.done, e
          },
          e: function(e) {
            a = !0, i = e
          },
          f: function() {
            try {
              s || null == r.return || r.return()
            } finally {
              if (a) throw i
            }
          }
        }
      }

      function ZO(e, t, r) {
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

      function $O(e) {
        return $O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, $O(e)
      }

      function GO() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (GO = function() {
          return !!e
        })()
      }

      function YO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function QO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? YO(Object(r), !0).forEach(function(t) {
            ZO(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : YO(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function JO(e, t) {
        return JO = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, JO(e, t)
      }

      function eP(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          s = n,
          a = "",
          l = KO(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var u, d = r.value,
              c = !Object.prototype.hasOwnProperty.call(o, d) && (null === (u = o[s[0]]) || void 0 === u ? void 0 : u.test(d));
            (i && d === s[0] || c) && (s = s.slice(1), a += d)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return a
      }

      function tP(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          s = t.showMask,
          a = 0,
          l = "",
          u = KO(n);
        try {
          for (u.s(); !(r = u.n()).done;) {
            var d = r.value;
            if (!s && void 0 === e[a]) break;
            Object.prototype.hasOwnProperty.call(o, d) && void 0 !== e[a] ? l += e[a++] : l += d
          }
        } catch (e) {
          u.e(e)
        } finally {
          u.f()
        }
        if (i && !s) {
          for (var c = n.length - 1; c >= 0 && l[c] === n[c]; c--);
          l = l.slice(0, c + 1)
        }
        return l
      }

      function rP(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], i = 0; i < r.length; i++) {
          var s, a = null !== (s = e[i]) && void 0 !== s ? s : r[i],
            l = Object.prototype.hasOwnProperty.call(n, a) ? "replacement" : void 0 !== e[i] && e[i] !== r[i] ? "input" : "mask";
          o.push({
            type: l,
            value: a,
            index: i
          })
        }
        return o
      }

      function nP(e) {
        return e.length > 0 ? ZO({}, e, /./) : {}
      }

      function oP(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(n, o), u = i.slice(n, o), d = "", c = 0; c < u.length; c++) {
          var f = Object.prototype.hasOwnProperty.call(s, u[c]);
          f && void 0 !== l[c] && l[c] !== u[c] ? d += l[c] : f && a && (d += u[c])
        }
        return d
      }

      function iP(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? nP(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return tP(eP(e, {
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
      var sP = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function aP(e) {
        return sP.includes(e) ? "\\".concat(e) : e
      }

      function lP(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function uP(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function dP(e, t, r) {
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

      function cP(e) {
        return cP = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, cP(e)
      }

      function fP() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (fP = function() {
          return !!e
        })()
      }

      function pP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pP(Object(r), !0).forEach(function(t) {
            dP(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mP(e, t) {
        return mP = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, mP(e, t)
      }

      function vP(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return vP = function(e) {
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
              if (fP()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && mP(o, r.prototype), o
            }(e, arguments, cP(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), mP(r, e)
        }, vP(e)
      }
      var yP, gP = function(e) {
          function t(e) {
            var r;
            return lP(this, t), (r = function(e, t, r) {
              return t = cP(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, fP() ? Reflect.construct(t, r || [], cP(e).constructor) : t.apply(e, r))
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
            }), t && mP(e, t)
          }(t, e), uP(t)
        }(vP(Error)),
        bP = ["options"],
        _P = ["text", "email", "tel", "search", "url"],
        wP = uP(function e(t) {
          var r = t.init,
            n = t.tracking;
          lP(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (_P.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = i.initialValue,
                a = void 0 === s ? "" : s,
                l = i.controlled,
                u = void 0 !== l && l,
                d = r({
                  initialValue: e.value || a,
                  controlled: u
                }),
                c = d.value,
                f = d.options,
                p = {
                  value: c,
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
              Object.defineProperty(e, "value", hP(hP({}, v), {}, {
                set: function(t) {
                  var r;
                  m.value = t, null == v || null === (r = v.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = c;
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
                    if (h.cachedId === h.id) throw new gP("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new gP("The selection attributes have not been initialized.");
                    var l, u = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = u.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && i.length < u.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > u.length) throw new gP("Input type detection error.");
                    var d = "",
                      c = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) d = i.slice(m.selectionStart, s);
                    else {
                      var v = u.length - i.length;
                      c = s, f = s + v
                    }
                    p.value !== u ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var y = p.options,
                      g = n({
                        inputType: l,
                        previousValue: u,
                        previousOptions: y,
                        value: i,
                        addedValue: d,
                        changeStart: c,
                        changeEnd: f,
                        selectionStart: s,
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
                          var i = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(g, bP);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), p.value = _.value, p.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, u)
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
      yP = wP, Object.defineProperty(yP.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var xP, CP = ["track", "modify"];

      function OP(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? nP(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var PP = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = $O(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, GO() ? Reflect.construct(t, r || [], $O(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = OP(r),
                i = o.mask,
                s = o.replacement,
                a = o.separate,
                l = o.showMask;
              return {
                value: t = n || t ? t : l ? i : "",
                options: {
                  mask: i,
                  replacement: s,
                  separate: a
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                n = e.previousValue,
                o = e.previousOptions,
                i = e.addedValue,
                s = e.changeStart,
                a = e.changeEnd,
                l = OP(r),
                u = l.track,
                d = l.modify,
                c = function(e, t) {
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
                }(l, CP),
                f = c.mask,
                p = c.replacement,
                h = c.showMask,
                m = c.separate,
                v = QO(QO({}, "insert" === t ? {
                  inputType: t,
                  data: i
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: n,
                  selectionStart: s,
                  selectionEnd: a
                }),
                y = null == u ? void 0 : u(v);
              if (!1 === y) throw new gP("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == d ? void 0 : d(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? nP(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = oP(n, QO({
                  end: s
                }, o)),
                _ = oP(n, QO({
                  start: a
                }, o)),
                w = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(w, "");
              if (b && (b = eP(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: m
                }), x = x.slice(b.length)), i && (i = eP(i, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new gP("The character does not match the key value of the `replacement` object.");
              if (m) {
                var C = f.slice(s, a).replace(w, ""),
                  O = C.length - i.length;
                O < 0 ? _ = _.slice(-O) : O > 0 && (_ = C.slice(-O) + _)
              }
              _ && (_ = eP(_, {
                replacementChars: x,
                replacement: p,
                separate: m
              }));
              var P = tP(b + i + _, {
                  mask: f,
                  replacement: p,
                  separate: m,
                  showMask: h
                }),
                j = function(e) {
                  var t, r, n, o = e.inputType,
                    i = e.value,
                    s = e.addedValue,
                    a = e.beforeChangeValue,
                    l = e.replacement,
                    u = e.separate,
                    d = rP(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || u && "replacement" === t
                    }),
                    c = null === (t = d[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = d[a.length - 1]) || void 0 === r ? void 0 : r.index,
                    p = null === (n = d[a.length + s.length]) || void 0 === n ? void 0 : n.index;
                  if ("insert" === o) {
                    if (void 0 !== c) return c + 1;
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
                  value: P,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: p,
                  separate: m
                });
              return {
                value: P,
                selectionStart: j,
                selectionEnd: j,
                options: {
                  mask: f,
                  replacement: p,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return iP(e, OP(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? nP(n) : n;
              return rP(iP(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, OP(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? nP(n) : n,
                i = oP(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return eP(i, {
                replacementChars: r.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, OP(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? nP(n) : n, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < r.length; l++) {
                var u = r[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, u) ? "".concat(s ? "(?!".concat(aP(u), ")") : "", "(").concat(o[u].source, ")") : aP(u), l === r.length - 1 && (i && (a += ")?".repeat(r.length)), a += "$")
              }
              return a
            }(e, OP(r))
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
            }), t && JO(e, t)
          }(e, wP),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function jP(e) {
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

      function kP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? SP(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = jP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
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
      xP = PP, Object.defineProperty(xP.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var EP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        RP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kP(kP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) EP(u, n, e.defaultVariants) && (r += " " + d);
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
        },
        DP = RP({
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
        NP = RP({
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
        IP = RP({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        LP = RP({
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
        MP = RP({
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
        zP = RP({
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
      const AP = (0, V.createContext)(null);

      function VP() {
        const e = (0, V.useContext)(AP);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const FP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const [u, d] = (0, V.useState)("text"), c = (0, V.useId)(), f = (0, V.useId)(), p = (0, V.useId)(), h = (0, X.v6)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, a), m = e ? Z.DX : "div";
          return (0, x.jsx)(AP.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: s,
              labelId: c,
              inputId: f,
              descriptionId: p,
              type: u,
              setType: d,
              ...a
            },
            children: (0, x.jsx)(m, {
              ref: l,
              ...h,
              children: t
            })
          })
        }),
        qP = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...i
        }, s) => {
          const {
            isDisabled: a,
            isRequired: l,
            inputId: u,
            labelId: d
          } = VP(), c = l && !o, f = (0, X.v6)({
            id: i.id || d,
            htmlFor: i.htmlFor || u,
            "data-testid": e,
            className: zP({
              showAsterisk: c,
              isDisabled: a
            })
          }, i), p = t ? Z.DX : "label";
          return (0, x.jsx)(Z.s6, {
            enabled: n,
            children: (0, x.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        BP = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = VP(), s = (0, X.v6)({
            "data-testid": e,
            className: IP({
              isDisabled: i
            })
          }, n), a = t ? Z.DX : "span";
          return (0, x.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        }),
        WP = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: s,
            status: a
          } = VP(), l = (0, X.v6)({
            "data-testid": e,
            className: (0, ge.clsx)(DP({
              isDisabled: i,
              isReadOnly: s,
              isInvalid: "invalid" === a,
              isSuccess: "success" === a
            }), "foundry_8oytzo1")
          }, n), u = t ? Z.DX : "div";
          return (0, x.jsx)(u, {
            ref: o,
            ...l,
            children: r
          })
        }),
        XP = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: i,
          placeholder: s = " ",
          "aria-labelledby": a,
          "aria-describedby": l,
          type: u = "text",
          ...d
        }, c) => {
          const {
            isDisabled: f,
            isReadOnly: p,
            isRequired: h,
            status: m,
            labelId: v,
            inputId: y,
            descriptionId: g,
            setType: b,
            type: _
          } = VP();
          (0, V.useEffect)(() => b(u), []);
          const w = "invalid" === m,
            C = (0, X.v6)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: _,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, X.VW)(v, a),
              "aria-describedby": (0, X.VW)(g, l),
              "data-testid": e,
              className: (0, ge.clsx)(MP({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              ...w && {
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
            }, d),
            O = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                i = e.track,
                s = e.modify,
                a = (0, V.useRef)(null),
                l = (0, V.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: i,
                  modify: s
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = i, l.current.modify = s, (0, V.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(a, new PP(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: i
            }),
            P = (0, K.UP)(r && n ? O : null, c),
            j = t ? Z.DX : "input";
          return (0, x.jsx)(j, {
            ref: P,
            ...C
          })
        }),
        HP = (0, V.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: s
          } = VP(), a = (0, X.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, ge.clsx)(LP({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? Z.DX : _e[e];
          return (0, x.jsx)(l, {
            ref: i,
            ...a
          })
        }),
        UP = (0, V.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = VP(), n = (0, X.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzow"
          }, e);
          return (0, x.jsx)(qe, {
            ref: t,
            ...n
          })
        }),
        KP = (0, V.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i
          } = VP(), s = "password" === o, a = s ? e : t, l = (0, X.v6)({
            label: a,
            icon: s ? "Eye" : "EyeOff",
            onPress: () => {
              i(s ? "text" : "password")
            }
          }, r);
          return (0, x.jsxs)(Mm, {
            children: [(0, x.jsx)(zm, {
              children: (0, x.jsx)(UP, {
                ref: n,
                ...l
              })
            }), (0, x.jsxs)(Am, {
              side: "bottom",
              align: "end",
              children: [a, (0, x.jsx)(Vm, {})]
            })]
          })
        }),
        ZP = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = VP(), a = (0, X.v6)({
            className: NP({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? Z.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        $P = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = VP(), a = (0, X.v6)({
            className: "foundry_8oytzo12",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? Z.DX : Lb;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        GP = Mb,
        YP = zb;

      function QP(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ...l
        } = e, u = {};
        "a" !== r && (u = {
          role: "link",
          tabIndex: a ? void 0 : 0
        });
        let {
          focusableProps: d
        } = kx(e, t), {
          pressProps: c,
          isPressed: f
        } = _b({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ref: t
        }), p = dx(l, {
          labelable: !0
        }), h = Jg(d, c), m = db();
        return {
          isPressed: f,
          linkProps: Jg(p, fb(e), {
            ...h,
            ...u,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = c.onClick) || void 0 === r || r.call(c, t), pb(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function JP(e) {
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

      function ej(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ej(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = JP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ej(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function rj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var nj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        oj = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tj(tj({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) nj(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rj(e.variantClassNames, e => rj(e, e => e.split(" ")[0]))
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
      const ij = (0, V.forwardRef)(({
        children: e,
        ...t
      }, r) => {
        const n = (0, $.zQ)(),
          o = "string" == typeof t.size ? t.size : t.size?.[n] ?? "LG",
          i = (0, X.v6)({
            className: oj({
              size: o
            })
          }, t);
        return (0, x.jsx)(qe, {
          appearance: "ghost",
          icon: "X",
          ...i,
          ref: r,
          children: e
        })
      });

      function sj(e) {
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

      function aj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? aj(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = sj(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function uj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var dj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        cj = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lj(lj({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) dj(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uj(e.variantClassNames, e => uj(e, e => e.split(" ")[0]))
            }
          }, t
        },
        fj = cj({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pj = cj({
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
        hj = cj({
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
      const mj = (0, V.createContext)(null);

      function vj() {
        const e = (0, V.useContext)(mj);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const yj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const s = e ? Z.DX : "div",
            a = (0, X.v6)({
              className: hj({
                status: r,
                background: n
              })
            }, o);
          return (0, x.jsx)(mj.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, x.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a
            })
          })
        }),
        gj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, X.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        bj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, X.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        _j = {
          danger: be.CircleX,
          information: be.Info,
          success: be.CircleCheck,
          warning: be.TriangleAlert
        },
        wj = (0, V.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = vj(), i = e ? Z.DX : _j[o], s = (0, X.v6)({
            className: pj({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, x.jsx)(i, {
            label: "",
            ref: n,
            ...s
          })
        }),
        xj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, X.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Cj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, X.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Oj = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.useRef)(null),
            s = (0, K.UP)(i, o),
            a = e ? Z.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = QP(n, i),
            d = (0, X.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, x.jsx)(a, {
            "data-pressed": u,
            "data-testid": r,
            ref: s,
            ...d,
            children: t
          })
        }),
        Pj = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? Z.DX : "div",
            s = (0, X.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        jj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? Z.DX : "div";
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, ge.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        Sj = (0, V.forwardRef)((e, t) => {
          const {
            background: r
          } = vj(), n = "none" !== r, o = (0, X.v6)({
            className: fj({
              hasBackground: n
            })
          }, e);
          return (0, x.jsx)(ij, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var kj = r(16675);

      function Tj(e = {}) {
        let t, r = [];
        const n = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          return n ? n.map(e => r[e]).reduce((e, t) => Math.max(e, t), 0) : null
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
            "y" !== o && (r = s.map(e => e.height), n.forEach(e => t.on(e, i)), i())
          },
          destroy: function() {
            n.forEach(e => t.off(e, i));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      Tj.globalOptions = void 0;
      const Ej = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function Rj(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Dj(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Nj(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Ij(e = {}) {
        let t, r, n, o, i = [],
          s = [];
        const a = ["select"],
          l = ["pointerDown", "pointerUp"],
          u = ["slidesInView"],
          d = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function c(e, t) {
          ("pointerDown" === t ? Nj : Dj)(n, d.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return n.forEach(e => Dj(e, r)), i.forEach(e => Nj(e, r)), e
        }

        function p() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          i = f(t, i, d.snapped)
        }

        function h() {
          const e = r.slidesInView();
          s = f(e, s, d.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(i, s) {
            r = i;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = s, v = f(Ej, Ij.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (d.loop = Rj(t.loop), Nj(n, d.loop)), t.draggable && _ && (d.draggable = Rj(t.draggable), Nj(n, d.draggable)), t.dragging && (d.dragging = Rj(t.dragging), l.forEach(e => r.on(e, c))), t.snapped && (d.snapped = Rj(t.snapped), a.forEach(e => r.on(e, p)), p()), t.inView && (d.inView = Rj(t.inView), u.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            l.forEach(e => r.off(e, c)), a.forEach(e => r.off(e, p)), u.forEach(e => r.off(e, h)), Dj(n, d.loop), Dj(n, d.draggable), Dj(n, d.dragging), f([], i, d.snapped), f([], s, d.inView), Object.keys(d).forEach(e => {
              d[e] = []
            })
          }
        };
        return m
      }
      Ij.globalOptions = void 0;

      function Lj(e) {
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

      function Mj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function zj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mj(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Lj(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Aj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Vj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fj = "foundry_qmpv6yv",
        qj = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zj(zj({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) Vj(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Aj(e.variantClassNames, e => Aj(e, e => e.split(" ")[0]))
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
      const Bj = (0, V.createContext)(null);

      function Wj() {
        const e = (0, V.useContext)(Bj);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Xj = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: i,
          align: s = "left",
          ...a
        }, l) => {
          const u = (({
              loopPagination: e = !0
            }) => {
              const t = (0, K.rl)(),
                r = (0, K.jt)(),
                [n, o] = (0, V.useState)([]),
                i = n.length,
                [s, a] = (0, V.useState)(0),
                [l, u] = (0, kj.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [Tj(), Ij()]),
                d = (0, V.useRef)(0),
                c = (0, V.useRef)(!1),
                f = n[s],
                p = (0, V.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), a(t), c.current = !0
                }, [u]),
                h = (0, V.useCallback)(e => {
                  d.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, V.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    i = "scroll" === t;
                  e.scrollSnapList().forEach((t, s) => {
                    let a = t - n;
                    r.slideRegistry[s].forEach(s => {
                      if (i && !o.includes(s)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (s === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (a = t - (1 + n)), 1 === e && (a = t + (1 - n))
                        }
                      });
                      const l = (u = 1 - Math.abs(a * d.current), Math.min(Math.max(u, 0), 1)).toString();
                      var u;
                      e.slideNodes()[s].style.opacity = l
                    })
                  })
                }, []);
              return (0, V.useEffect)(() => {
                u && (h(u), m(u), u.on("reInit", h).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [u, m]), (0, V.useEffect)(() => {
                u && (p(u), u.on("select", p).on("reInit", p))
              }, [u, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => u?.scrollPrev(r),
                nextAlert: () => u?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: s,
                setCurrentAlertIndex: a,
                isInitialized: c.current,
                loopPagination: e,
                canScrollNext: () => u?.canScrollNext() || !1,
                canScrollPrev: () => u?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: d,
              isInitialized: c,
              setAlerts: f,
              numAlerts: p
            } = u;
          (0, V.useEffect)(() => {
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
            m = (0, X.v6)({
              className: qj(d)
            }, h, a),
            v = e ? Z.DX : "div";
          return (0, x.jsx)(Bj.Provider, {
            value: u,
            children: (0, x.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": c,
              ...m,
              children: t
            })
          })
        }),
        Hj = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Uj = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Wj();
          if (!e && !n || !n?.status) return null;
          const o = e || Hj[n.status],
            i = _e[o],
            s = (0, X.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, x.jsx)(i, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        Kj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, X.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Zj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, s) => {
          const a = e ? Z.DX : "div",
            l = (0, X.v6)({
              className: "foundry_qmpv6yo"
            }, i);
          return (0, x.jsx)(a, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        $j = (0, V.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = Wj(), s = (0, X.v6)({
            className: "foundry_qmpv6ym"
          }, r), a = (0, K.UP)(i, n), l = V.Children.map(t, e => {
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
            ...s,
            children: (0, x.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Gj = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.useRef)(null),
            s = (0, K.UP)(i, o),
            a = e ? Z.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = QP(n, i),
            d = (0, X.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, x.jsx)(a, {
            "data-pressed": u,
            "data-testid": r,
            ref: s,
            ...l,
            ...d,
            children: t
          })
        }),
        Yj = (0, V.forwardRef)((e, t) => {
          const r = (0, X.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, x.jsx)(ij, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Qj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? Z.DX : "div",
            s = (0, X.v6)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        Jj = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Wj(), i = (0, X.v6)({
            className: Fj
          }, t);
          return (0, x.jsx)(qe, {
            ref: r,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...i
          })
        }),
        eS = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Wj(), i = (0, X.v6)({
            className: Fj
          }, t);
          return (0, x.jsx)(qe, {
            ref: r,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...i
          })
        }),
        tS = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Wj(), i = (0, X.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn foundry_tdsdcdq"
          }, t);
          return (0, x.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [n + 1, "/", o]
          })
        });

      function rS(e) {
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

      function nS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function oS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nS(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = rS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function iS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        aS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = oS(oS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) sS(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return iS(e.variantClassNames, e => iS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        lS = aS({
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
        uS = aS({
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
        dS = aS({
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
      const cS = (0, V.createContext)(null);

      function fS() {
        const e = (0, V.useContext)(cS);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const pS = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: i,
          hasBorder: s,
          isDisabled: a,
          ...l
        }, u) => {
          const d = {
              size: n,
              background: o,
              color: i,
              hasBorder: s,
              isDisabled: a
            },
            c = (0, X.v6)({
              className: uS(d)
            }, l),
            f = e ? Z.DX : "div";
          return (0, x.jsx)(cS.Provider, {
            value: d,
            children: (0, x.jsx)(f, {
              ref: u,
              "data-testid": r,
              "aria-disabled": a,
              ...c,
              children: t
            })
          })
        }),
        hS = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = fS(), s = e ? Z.DX : "div", a = (0, X.v6)({
            className: dS({
              size: i
            })
          }, n);
          return (0, x.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        mS = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = _e[e],
            o = (0, X.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, x.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        vS = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = fS(), i = (0, X.v6)({
            className: lS({
              background: n
            })
          }, t);
          return (0, x.jsx)(qe, {
            ref: r,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...i
          })
        });
      var yS = "ToastProvider",
        [gS, bS, _S] = Hm("Toast"),
        [wS, xS] = (0, mf.A)("Toast", [_S]),
        [CS, OS] = wS(yS),
        PS = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
          } = e, [a, l] = V.useState(null), [u, d] = V.useState(0), c = V.useRef(!1), f = V.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${yS}\`. Expected non-empty \`string\`.`), (0, x.jsx)(gS.Provider, {
            scope: t,
            children: (0, x.jsx)(CS, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: i,
              toastCount: u,
              viewport: a,
              onViewportChange: l,
              onToastAdd: V.useCallback(() => d(e => e + 1), []),
              onToastRemove: V.useCallback(() => d(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: c,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      PS.displayName = yS;
      var jS = "ToastViewport",
        SS = ["F8"],
        kS = "toast.viewportPause",
        TS = "toast.viewportResume",
        ES = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = SS,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, s = OS(jS, r), a = bS(r), l = V.useRef(null), u = V.useRef(null), d = V.useRef(null), c = V.useRef(null), f = (0, Y.s)(t, c, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = s.toastCount > 0;
          V.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && c.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), V.useEffect(() => {
            const e = l.current,
              t = c.current;
            if (h && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(kS);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(TS);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && n()
                },
                i = () => {
                  e.contains(document.activeElement) || n()
                };
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", i), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", i), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [h, s.isClosePausedRef]);
          const m = V.useCallback(({
            tabbingDirection: e
          }) => {
            const t = a().map(t => {
              const r = t.ref.current,
                n = [r, ...ZS(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [a]);
          return V.useEffect(() => {
            const e = c.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void u.current?.focus();
                  const o = m({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    i = o.findIndex(e => e === r);
                  $S(o.slice(i + 1)) ? t.preventDefault() : n ? u.current?.focus() : d.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, x.jsxs)(Df, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, x.jsx)(DS, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                $S(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, x.jsx)(gS.Slot, {
              scope: r,
              children: (0, x.jsx)(_f.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), h && (0, x.jsx)(DS, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                $S(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      ES.displayName = jS;
      var RS = "ToastFocusProxy",
        DS = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, i = OS(RS, r);
          return (0, x.jsx)(Qh, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !i.viewport?.contains(t) && n()
            }
          })
        });
      DS.displayName = RS;
      var NS = "Toast",
        IS = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            ...s
          } = e, [a, l] = (0, Gh.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: i,
            caller: NS
          });
          return (0, x.jsx)(Zh, {
            present: r || a,
            children: (0, x.jsx)(zS, {
              open: a,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Cf.c)(e.onPause),
              onResume: (0, Cf.c)(e.onResume),
              onSwipeStart: hf(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: hf(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: hf(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: hf(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      IS.displayName = NS;
      var [LS, MS] = wS(NS, {
        onClose() {}
      }), zS = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: i,
          onClose: s,
          onEscapeKeyDown: a,
          onPause: l,
          onResume: u,
          onSwipeStart: d,
          onSwipeMove: c,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...h
        } = e, m = OS(NS, r), [v, y] = V.useState(null), g = (0, Y.s)(t, e => y(e)), b = V.useRef(null), _ = V.useRef(null), w = o || m.duration, C = V.useRef(0), O = V.useRef(w), P = V.useRef(0), {
          onToastAdd: j,
          onToastRemove: S
        } = m, k = (0, Cf.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), s()
        }), T = V.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(P.current), C.current = (new Date).getTime(), P.current = window.setTimeout(k, e))
        }, [k]);
        V.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                T(O.current), u?.()
              },
              r = () => {
                const e = (new Date).getTime() - C.current;
                O.current = O.current - e, window.clearTimeout(P.current), l?.()
              };
            return e.addEventListener(kS, r), e.addEventListener(TS, t), () => {
              e.removeEventListener(kS, r), e.removeEventListener(TS, t)
            }
          }
        }, [m.viewport, w, l, u, T]), V.useEffect(() => {
          i && !m.isClosePausedRef.current && T(w)
        }, [i, w, m.isClosePausedRef, T]), V.useEffect(() => (j(), () => S()), [j, S]);
        const E = V.useMemo(() => v ? HS(v) : null, [v]);
        return m.viewport ? (0, x.jsxs)(x.Fragment, {
          children: [E && (0, x.jsx)(AS, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: E
          }), (0, x.jsx)(LS, {
            scope: r,
            onClose: k,
            children: G.createPortal((0, x.jsx)(gS.ItemSlot, {
              scope: r,
              children: (0, x.jsx)(Rf, {
                asChild: !0,
                onEscapeKeyDown: hf(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || k(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, x.jsx)(_f.li, {
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
                  onKeyDown: hf(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, k()))
                  }),
                  onPointerDown: hf(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: hf(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(_.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      i = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      s = o ? i(0, t) : 0,
                      a = o ? 0 : i(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      u = {
                        x: s,
                        y: a
                      },
                      f = {
                        originalEvent: e,
                        delta: u
                      };
                    n ? (_.current = u, US("toast.swipeMove", c, f, {
                      discrete: !1
                    })) : KS(u, m.swipeDirection, l) ? (_.current = u, US("toast.swipeStart", d, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: hf(e.onPointerUp, e => {
                    const t = _.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), _.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      KS(t, m.swipeDirection, m.swipeThreshold) ? US("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : US("toast.swipeCancel", f, n, {
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
      }), AS = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = OS(NS, t), [i, s] = V.useState(!1), [a, l] = V.useState(!1);
        return function(e = () => {}) {
          const t = (0, Cf.c)(e);
          (0, Ch.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), V.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, x.jsx)(Kh, {
          asChild: !0,
          children: (0, x.jsx)(Qh, {
            ...n,
            children: i && (0, x.jsxs)(x.Fragment, {
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
        return (0, x.jsx)(_f.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var VS = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, x.jsx)(_f.div, {
          ...n,
          ref: t
        })
      });
      VS.displayName = "ToastDescription";
      var FS = "ToastAction",
        qS = V.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, x.jsx)(XS, {
            altText: r,
            asChild: !0,
            children: (0, x.jsx)(WS, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${FS}\`. Expected non-empty \`string\`.`), null)
        });
      qS.displayName = FS;
      var BS = "ToastClose",
        WS = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = MS(BS, r);
          return (0, x.jsx)(XS, {
            asChild: !0,
            children: (0, x.jsx)(_f.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: hf(e.onClick, o.onClose)
            })
          })
        });
      WS.displayName = BS;
      var XS = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, x.jsx)(_f.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function HS(e) {
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
              } else t.push(...HS(e))
          }
        }), t
      }

      function US(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.currentTarget,
          i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? wf(o, i) : o.dispatchEvent(i)
      }
      var KS = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          i = n > o;
        return "left" === t || "right" === t ? i && n > r : !i && o > r
      };

      function ZS(e) {
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

      function $S(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var GS = PS,
        YS = ES,
        QS = IS,
        JS = VS,
        ek = qS,
        tk = WS;

      function rk(e) {
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

      function nk(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ok(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nk(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = rk(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nk(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ik(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sk = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ak = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ok(ok({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) sk(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ik(e.variantClassNames, e => ik(e, e => e.split(" ")[0]))
            }
          }, t
        },
        lk = ak({
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
        uk = ak({
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
        dk = ak({
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
      const ck = ({
          testId: e,
          ...t
        }) => (0, x.jsx)(GS, {
          "data-testid": e,
          ...t
        }),
        fk = (0, V.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const i = (0, X.v6)({
            className: dk({
              position: r
            })
          }, n);
          return (0, x.jsx)(YS, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        pk = (0, V.createContext)(null);

      function hk() {
        const e = (0, V.useContext)(pk);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const mk = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, i) => {
          const s = e ? Z.DX : QS,
            a = (0, X.v6)({
              className: uk({
                appearance: n
              })
            }, o);
          return (0, x.jsx)(pk.Provider, {
            value: {
              appearance: n
            },
            children: (0, x.jsx)(s, {
              ref: i,
              "data-testid": r,
              ...a,
              children: t
            })
          })
        }),
        vk = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? Z.DX : JS,
            s = (0, X.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        yk = {
          danger: be.CircleX,
          information: be.Info,
          success: be.CircleCheck,
          warning: be.TriangleAlert,
          avocado: be.CircleCheck
        },
        gk = (0, V.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = hk(), o = e ? Z.DX : yk[n], i = (0, X.v6)({
            className: lk({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, x.jsx)(o, {
            ref: r,
            ...i
          })
        }),
        bk = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, X.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, x.jsx)(ek, {
            ref: o,
            "data-testid": r,
            ...i,
            children: e ? (0, x.jsx)(Z.DX, {
              children: t
            }) : (0, x.jsx)(Re, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        _k = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, i) => {
          const s = (0, X.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, x.jsx)(tk, {
            ref: i,
            "data-testid": r,
            ...s,
            children: e ? (0, x.jsx)(Z.DX, {
              children: t
            }) : (0, x.jsx)(ij, {
              size: "SM",
              label: n
            })
          })
        });

      function wk(e) {
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

      function xk(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ck(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xk(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = wk(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xk(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ok(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Pk = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jk = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ck(Ck({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) Pk(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ok(e.variantClassNames, e => Ok(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Sk = jk({
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
        kk = jk({
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
        Tk = jk({
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

      function Ek() {
        const e = (0, V.useContext)(Rk);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Rk = (0, V.createContext)(null),
        Dk = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const s = (0, X.v6)({
              className: Tk({
                size: n
              })
            }, o),
            a = r ? Z.DX : "ol";
          return (0, x.jsx)(Rk.Provider, {
            value: {
              size: n
            },
            children: (0, x.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        Nk = (0, V.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, V.useRef)(null),
            {
              size: a
            } = Ek(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: i = "a",
                ...s
              } = e, {
                linkProps: a
              } = QP({
                isDisabled: n || r,
                elementType: i,
                ...s
              }, t), l = {};
              return /^h[1-6]$/.test(i) || (l = a), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, s),
            u = r ? Z.DX : "a",
            d = (0, X.v6)({
              className: (0, ge.clsx)(Sk({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, x.jsx)("li", {
            className: kk({
              size: a
            }),
            ref: i,
            children: (0, x.jsx)(u, {
              ref: s,
              ...d,
              children: t
            })
          })
        }),
        Ik = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = _e[e];
          return (0, x.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        Lk = (0, V.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [s, a] = (0, V.useState)(r), {
            size: l
          } = Ek(), u = (0, X.v6)({
            className: kk({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, x.jsx)("li", {
            ref: i,
            ...u,
            children: (0, x.jsxs)(bw, {
              open: s,
              onOpenChange: () => a(!s),
              children: [(0, x.jsx)(_w, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, x.jsx)(Cw, {
                children: (0, x.jsx)(Ow, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, x.jsx)(Pw, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Mk = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? Z.DX : jw,
            s = (0, X.v6)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        });

      function zk(e) {
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

      function Ak(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ak(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = zk(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ak(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fk(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qk = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bk = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vk(Vk({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) qk(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fk(e.variantClassNames, e => Fk(e, e => e.split(" ")[0]))
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
      const Wk = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const i = e ? Z.DX : "div",
            s = (0, X.v6)({
              className: Bk({
                appearance: r
              })
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        Xk = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? Z.DX : "div",
            s = (0, X.v6)({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        Hk = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = _e[e],
            o = (0, X.v6)({
              size: "SM",
              className: "foundry_18omk9t3",
              label: ""
            }, t);
          return (0, x.jsx)(n, {
            ref: r,
            ...o
          })
        });
      var Uk = /^--/;

      function Kk(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Uk.test(e) || $k.hasOwnProperty(e) && $k[e] ? ("" + t).trim() : t + "px"
      }
      var Zk = {},
        $k = {
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
        Gk = ["Webkit", "Ms", "Moz", "O"];
      $k = Object.keys($k).reduce((e, t) => (Gk.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), $k);
      var Yk = /^(matrix|translate|scale|rotate|skew)/,
        Qk = /^(translate)/,
        Jk = /^(rotate|skew)/,
        eT = (e, t) => ru.num(e) && 0 !== e ? e + t : e,
        tT = (e, t) => ru.arr(e) ? e.every(e => tT(e, t)) : ru.num(e) ? e === t : parseFloat(e) === t,
        rT = class extends Md {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>eT(e,"px")).join(",")})`, tT(e, 0)])), iu(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (Yk.test(t)) {
                if (delete n[t], ru.und(e)) return;
                const r = Qk.test(t) ? "px" : Jk.test(t) ? "deg" : "";
                o.push(su(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${eT(o,r)})`, tT(o, 0)] : e => [`${t}(${e.map(e=>eT(e,r)).join(",")})`, tT(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new nT(o, i)), super(n)
          }
        },
        nT = class extends od {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return ou(this.inputs, (r, n) => {
              const o = td(r[0]),
                [i, s] = this.transforms[n](ru.arr(o) ? o : r.map(td));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && ou(this.inputs, e => ou(e, e => ed(e) && sd(e, this)))
          }
          observerRemoved(e) {
            0 == e && ou(this.inputs, e => ou(e, e => ed(e) && ad(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), nd(this, e)
          }
        };
      eu.assign({
        batchedUpdates: G.unstable_batchedUpdates,
        createStringInterpolator: gd,
        colors: Pu
      });
      var oT = Wd(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: i,
                scrollTop: s,
                scrollLeft: a,
                viewBox: l,
                ...u
              } = t,
              d = Object.values(u),
              c = Object.keys(u).map(t => r || e.hasAttribute(t) ? t : Zk[t] || (Zk[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Kk(t, o[t]);
                Uk.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } c.forEach((t, r) => {
              e.setAttribute(t, d[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new rT(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        iT = oT.animated,
        sT = "Dialog",
        [aT, lT] = (0, mf.A)(sT),
        [uT, dT] = aT(sT),
        cT = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = V.useRef(null), l = V.useRef(null), [u, d] = (0, Gh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: sT
          });
          return (0, x.jsx)(uT, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: (0, Nf.B)(),
            titleId: (0, Nf.B)(),
            descriptionId: (0, Nf.B)(),
            open: u,
            onOpenChange: d,
            onOpenToggle: V.useCallback(() => d(e => !e), [d]),
            modal: s,
            children: r
          })
        };
      cT.displayName = sT;
      var fT = "DialogTrigger",
        pT = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = dT(fT, r), i = (0, Y.s)(t, o.triggerRef);
          return (0, x.jsx)(_f.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": DT(o.open),
            ...n,
            ref: i,
            onClick: hf(e.onClick, o.onOpenToggle)
          })
        });
      pT.displayName = fT;
      var hT = "DialogPortal",
        [mT, vT] = aT(hT, {
          forceMount: void 0
        }),
        yT = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = dT(hT, t);
          return (0, x.jsx)(mT, {
            scope: t,
            forceMount: r,
            children: V.Children.map(n, e => (0, x.jsx)(Zh, {
              present: r || i.open,
              children: (0, x.jsx)(Kh, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      yT.displayName = hT;
      var gT = "DialogOverlay",
        bT = V.forwardRef((e, t) => {
          const r = vT(gT, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = dT(gT, e.__scopeDialog);
          return i.modal ? (0, x.jsx)(Zh, {
            present: n || i.open,
            children: (0, x.jsx)(wT, {
              ...o,
              ref: t
            })
          }) : null
        });
      bT.displayName = gT;
      var _T = vf("DialogOverlay.RemoveScroll"),
        wT = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = dT(gT, r);
          return (0, x.jsx)(Mv.A, {
            as: _T,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, x.jsx)(_f.div, {
              "data-state": DT(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        xT = "DialogContent",
        CT = V.forwardRef((e, t) => {
          const r = vT(xT, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = dT(xT, e.__scopeDialog);
          return (0, x.jsx)(Zh, {
            present: n || i.open,
            children: i.modal ? (0, x.jsx)(OT, {
              ...o,
              ref: t
            }) : (0, x.jsx)(PT, {
              ...o,
              ref: t
            })
          })
        });
      CT.displayName = xT;
      var OT = V.forwardRef((e, t) => {
          const r = dT(xT, e.__scopeDialog),
            n = V.useRef(null),
            o = (0, Y.s)(t, r.contentRef, n);
          return V.useEffect(() => {
            const e = n.current;
            if (e) return (0, zv.Eq)(e)
          }, []), (0, x.jsx)(jT, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: hf(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: hf(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: hf(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        PT = V.forwardRef((e, t) => {
          const r = dT(xT, e.__scopeDialog),
            n = V.useRef(!1),
            o = V.useRef(!1);
          return (0, x.jsx)(jT, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                s = r.triggerRef.current?.contains(i);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        jT = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = dT(xT, r), l = V.useRef(null), u = (0, Y.s)(t, l);
          return Iv(), (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(jv, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, x.jsx)(Sf, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": DT(a.open),
                ...s,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, x.jsxs)(x.Fragment, {
              children: [(0, x.jsx)(MT, {
                titleId: a.titleId
              }), (0, x.jsx)(zT, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        ST = "DialogTitle",
        kT = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = dT(ST, r);
          return (0, x.jsx)(_f.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      kT.displayName = ST;
      var TT = "DialogDescription",
        ET = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = dT(TT, r);
          return (0, x.jsx)(_f.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      ET.displayName = TT;
      var RT = "DialogClose";

      function DT(e) {
        return e ? "open" : "closed"
      }
      V.forwardRef((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = dT(RT, r);
        return (0, x.jsx)(_f.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: hf(e.onClick, () => o.onOpenChange(!1))
        })
      }).displayName = RT;
      var NT = "DialogTitleWarning",
        [IT, LT] = (0, mf.q)(NT, {
          contentName: xT,
          titleName: ST,
          docsSlug: "dialog"
        }),
        MT = ({
          titleId: e
        }) => {
          const t = LT(NT),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return V.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        zT = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${LT("DialogDescriptionWarning").contentName}}.`;
          return V.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        AT = cT,
        VT = pT,
        FT = yT,
        qT = bT,
        BT = CT,
        WT = kT,
        XT = ET;
      const HT = () => {
          const e = (0, K.Ub)(X.fi.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        UT = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function KT(e) {
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

      function ZT(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ZT(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = KT(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ZT(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function GT(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var YT = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        QT = "foundry_8kowh41",
        JT = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $T($T({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) YT(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return GT(e.variantClassNames, e => GT(e, e => e.split(" ")[0]))
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
      const eE = (0, V.createContext)(null);

      function tE() {
        const e = (0, V.useContext)(eE);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const rE = ({
          testId: e,
          defaultOpen: t,
          onOpenChange: r,
          isOpen: n,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: i,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
          ...l
        }) => {
          const u = (0, X.v6)({
              "data-testid": e
            }, l),
            [d, c] = (0, K.ic)({
              prop: n,
              defaultProp: t ?? !1,
              onChange: r
            }),
            f = (0, K.ZC)(d);
          return (0, x.jsx)(eE.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== f || !t),
              setIsOpen: c,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: i,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, V.useId)(),
              descriptionId: (0, V.useId)(),
              triggerRef: (0, V.useRef)(null),
              dialogSpringRef: Uc(),
              overlaySpringRef: Uc()
            },
            children: (0, x.jsx)(AT, {
              open: d,
              onOpenChange: c,
              ...u
            })
          })
        },
        nE = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: i
          } = tE(), s = UT(), a = (0, K.jt)(), l = Kc(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: nc.stiff,
            immediate: a || i
          }), u = (0, X.v6)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), d = iT(qT);
          return (0, V.useEffect)(() => {
            o.start()
          }, [n]), l((e, t) => t ? (0, x.jsx)(d, {
            forceMount: !0,
            ref: r,
            ...u,
            style: e
          }) : null)
        }),
        oE = (0, V.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, i) => {
          const {
            isOpen: s,
            setIsOpen: a,
            openImmediately: l,
            contentId: u,
            triggerRef: d,
            onOpenTransitionStart: c,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = tE(), y = (0, K.rl)(), g = (0, K.jt)(), b = (0, V.useRef)(null), _ = HT(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const i = UT(),
              s = HT(),
              a = (0, V.useRef)();
            var l;
            return {
              bindDrag: (l = ({
                velocity: [, l],
                offset: [, u],
                direction: [, d],
                cancel: c,
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
                  }(h, d)), (!a.current || u < -70) && c(), a.current) {
                  const e = 100 * (m - u) / m;
                  r.start({
                    ...i(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (u > .5 * m || l > .5 && d > 0 ? (t.start({
                  ...s(0),
                  immediate: !1,
                  config: nc.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...i(0),
                  immediate: !1,
                  config: nc.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: nc.stiff
                }), r.start({
                  ...i(100),
                  immediate: !1,
                  config: nc.stiff
                })))
              }, va(ya), Na({
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
          }), C = Kc(s, {
            from: _(0),
            enter: _(100),
            leave: _(0),
            delay: s ? 100 : 0,
            config: nc.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? c?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : h?.()
            }
          });
          (0, V.useEffect)(() => {
            m.start()
          }, [s]);
          const O = (0, K.UP)(b, i),
            P = y && !g && !n && w(),
            j = (0, X.v6)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || d.current?.focus()
              },
              id: u
            }, P || {}, o),
            S = iT(BT);
          return C((t, r) => r ? (0, x.jsx)(S, {
            forceMount: !0,
            ref: O,
            ...j,
            style: t,
            children: e
          }) : null)
        }),
        iE = ({
          testId: e,
          ...t
        }) => {
          const r = (0, X.v6)({
            "data-testid": e
          }, t);
          return (0, x.jsx)(FT, {
            forceMount: !0,
            ...r
          })
        },
        sE = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.v6)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, x.jsx)(WT, {
            ref: n,
            ...o,
            children: e
          })
        }),
        aE = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.v6)({
            "data-testid": t
          }, r);
          return (0, x.jsx)(XT, {
            ref: n,
            ...o,
            children: e
          })
        }),
        lE = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.v6)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, x.jsxs)(y_, {
            ref: n,
            ...o,
            children: [(0, x.jsx)(g_, {
              className: "foundry_xov33ne",
              children: e
            }), (0, x.jsx)(b_, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, x.jsx)(__, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        uE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, X.v6)({
              "data-testid": r,
              className: "foundry_xov33n2"
            }, n),
            s = e ? Z.DX : "div";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        dE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, X.v6)({
              "data-testid": r,
              className: "foundry_xov33n3"
            }, n),
            s = e ? Z.DX : "div";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        cE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, X.v6)({
              "data-testid": r,
              className: "foundry_xov33n8"
            }, n),
            s = e ? Z.DX : "header";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        fE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, X.v6)({
              "data-testid": r,
              className: "foundry_xov33nc"
            }, n),
            s = e ? Z.DX : "footer";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        pE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, i) => {
          const s = (0, X.v6)({
              "data-testid": r,
              className: JT({
                align: n
              })
            }, o),
            a = e ? Z.DX : WT;
          return (0, x.jsx)(a, {
            ref: i,
            ...s,
            children: t
          })
        }),
        hE = (0, V.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = tE(), a = (0, X.v6)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, x.jsx)(ij, {
            ...a,
            size: "MD",
            ref: o,
            children: e
          })
        }),
        mE = (0, V.forwardRef)((e, t) => {
          const r = (0, X.v6)({
            className: "foundry_xov33n5"
          }, e);
          return (0, x.jsx)(qe, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        }),
        vE = (0, V.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = tE(), a = (0, X.v6)({
            className: QT,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, x.jsx)(Re, {
            ref: o,
            ...a,
            children: e
          })
        }),
        yE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          onPress: r,
          onClick: n,
          ...o
        }, i) => {
          const {
            isControlled: s,
            setIsOpen: a,
            isOpen: l,
            contentId: u,
            triggerRef: d
          } = tE(), c = (0, K.UP)(d, i), f = (0, X.v6)({
            className: QT,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": u,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !s && a(!0)
            }
          }, o), p = e ? Z.DX : VT;
          return (0, x.jsx)(p, {
            ...f,
            ref: c,
            children: t
          })
        });

      function gE(...e) {
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
      var bE = Symbol.for("react.lazy"),
        _E = F[" use ".trim().toString()];

      function wE(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === bE && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function xE(e) {
        const t = V.forwardRef((e, t) => {
          let {
            children: r,
            ...n
          } = e;
          if (wE(r) && "function" == typeof _E && (r = _E(r._payload)), V.isValidElement(r)) {
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
                    i = t[n];
                  /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...i
                  } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== V.Fragment && (o.ref = t ? (0, Y.t)(t, e) : e), V.cloneElement(r, o)
          }
          return V.Children.count(r) > 1 ? V.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var CE = Symbol("radix.slottable");

      function OE(e) {
        return V.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === CE
      }
      var PE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = function(e) {
              const t = xE(e),
                r = V.forwardRef((e, r) => {
                  let {
                    children: n,
                    ...o
                  } = e;
                  wE(n) && "function" == typeof _E && (n = _E(n._payload));
                  const i = V.Children.toArray(n),
                    s = i.find(OE);
                  if (s) {
                    const e = s.props.children,
                      n = i.map(t => t === s ? V.Children.count(e) > 1 ? V.Children.only(null) : V.isValidElement(e) ? e.props.children : null : t);
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
                ...i
              } = e, s = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, x.jsx)(s, {
                ...i,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        jE = r(36553);

      function SE() {
        return () => {}
      }
      var kE = "Avatar",
        [TE, EE] = function(e, t = []) {
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
            const i = r.length;
            r = [...r, n];
            const s = t => {
              const {
                scope: r,
                children: n,
                ...s
              } = t, a = r?.[e]?.[i] || o, l = V.useMemo(() => s, Object.values(s));
              return (0, x.jsx)(a.Provider, {
                value: l,
                children: n
              })
            };
            return s.displayName = t + "Provider", [s, function(r, s) {
              const a = s?.[e]?.[i] || o,
                l = V.useContext(a);
              if (l) return l;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, gE(n, ...t)]
        }(kE),
        [RE, DE] = TE(kE),
        NE = V.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, i] = V.useState("idle");
          return (0, x.jsx)(RE, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: i,
            children: (0, x.jsx)(PE.span, {
              ...n,
              ref: t
            })
          })
        });
      NE.displayName = kE;
      var IE = "AvatarImage",
        LE = V.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...i
          } = e, s = DE(IE, r), a = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, jE.useSyncExternalStore)(SE, () => !0, () => !1),
              o = V.useRef(null),
              i = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, a] = V.useState(() => zE(i, e));
            return (0, Ch.N)(() => {
              a(zE(i, e))
            }, [i, e]), (0, Ch.N)(() => {
              const e = e => () => {
                a(e)
              };
              if (!i) return;
              const n = e("loaded"),
                o = e("error");
              return i.addEventListener("load", n), i.addEventListener("error", o), t && (i.referrerPolicy = t), "string" == typeof r && (i.crossOrigin = r), () => {
                i.removeEventListener("load", n), i.removeEventListener("error", o)
              }
            }, [i, r, t]), s
          }(n, i), l = (0, Cf.c)(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return (0, Ch.N)(() => {
            "idle" !== a && l(a)
          }, [a, l]), "loaded" === a ? (0, x.jsx)(PE.img, {
            ...i,
            ref: t,
            src: n
          }) : null
        });
      LE.displayName = IE;
      var ME = "AvatarFallback";

      function zE(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      V.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, i = DE(ME, r), [s, a] = V.useState(void 0 === n);
        return V.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => a(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== i.imageLoadingStatus ? (0, x.jsx)(PE.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = ME;
      var AE = NE,
        VE = LE;

      function FE(e) {
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

      function qE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function BE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qE(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = FE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function WE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var XE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        HE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = BE(BE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) XE(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return WE(e.variantClassNames, e => WE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        UE = HE({
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
        KE = "var(--foundry_v912w22)",
        ZE = "var(--foundry_v912w23)",
        $E = HE({
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
        GE = HE({
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
        YE = "var(--foundry_v912w21)",
        QE = "var(--foundry_v912w20)",
        JE = HE({
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
      const eR = (0, V.createContext)(null);

      function tR() {
        const e = (0, V.useContext)(eR);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const rR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: i = !1,
          ...s
        }, a) => {
          const l = (0, X.v6)({
            "data-testid": r,
            "aria-disabled": i,
            className: UE({
              isDisabled: i
            }),
            asChild: e
          }, s);
          return (0, x.jsx)(eR.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: i
            },
            children: (0, x.jsx)(AE, {
              ref: a,
              ...l,
              children: t
            })
          })
        }),
        nR = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: i,
            isDisabled: s
          } = tR(), [a, l] = (0, V.useState)(!1);
          (0, V.useEffect)(() => {
            l(!1)
          }, [r]);
          const u = a || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            d = (0, X.v6)({
              className: $E({
                isDisabled: s
              }),
              src: u,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, n);
          return (0, x.jsx)("span", {
            className: GE({
              size: i,
              isDisabled: s,
              isFallback: a
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, x.jsx)(VE, {
              ref: o,
              ...d
            })
          })
        }),
        oR = (0, V.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, V.useRef)(null),
            {
              size: i,
              status: s,
              isDisabled: a
            } = tR(),
            l = (0, K.UP)(o, n),
            u = (0, X.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: JE({
                status: s,
                size: i,
                isDisabled: a
              }),
              style: (0, B.DI)({
                [QE]: t?.online,
                [YE]: t?.offline,
                [KE]: t?.away,
                [ZE]: t?.busy
              })
            }, r);
          return (0, x.jsx)("span", {
            ref: l,
            ...u
          })
        });

      function iR(e) {
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

      function sR(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function aR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sR(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = iR(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sR(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function lR(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uR = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dR = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = aR(aR({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, d] of e.compoundVariants) uR(u, n, e.defaultVariants) && (r += " " + d);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lR(e.variantClassNames, e => lR(e, e => e.split(" ")[0]))
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
      const cR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, X.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? Z.DX : "nav";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        fR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, X.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? Z.DX : "div";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        pR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, V.useRef)(null),
            a = (0, K.UP)(s, i),
            {
              linkProps: l,
              isPressed: u
            } = QP(o, s),
            d = (0, X.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": u,
              "data-active": r,
              className: (0, ge.clsx)(dR({
                isActive: r
              }))
            }, l),
            c = e ? Z.DX : "a";
          return (0, x.jsx)(c, {
            ref: a,
            ...d,
            children: t
          })
        }),
        hR = (0, V.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, x.jsx)(pR, {
            ref: n,
            ...o,
            children: (0, x.jsx)(be.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        mR = (0, V.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, x.jsx)(pR, {
            ref: n,
            ...o,
            children: (0, x.jsx)(be.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        vR = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, X.v6)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, n),
            i = e ? Z.DX : "span";
          return (0, x.jsx)(i, {
            ...o,
            children: t || "..."
          })
        },
        yR = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, X.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            i = e ? Z.DX : "div";
          return (0, x.jsx)(i, {
            ...o,
            children: t
          })
        },
        gR = (0, V.createContext)(null);

      function bR() {
        const e = (0, V.useContext)(gR);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const _R = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, V.useId)(),
            i = (0, X.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? Z.DX : "div";
          return (0, x.jsx)(gR.Provider, {
            value: {
              labelId: o
            },
            children: (0, x.jsx)(s, {
              ...i,
              children: t
            })
          })
        },
        wR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: i
          } = bR(), s = (0, X.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, n), a = e ? Z.DX : "label";
          return (0, x.jsx)(a, {
            ref: o,
            id: i,
            ...s,
            children: t
          })
        }),
        xR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: i
          } = bR(), s = (0, X.v6)({
            "aria-labelledby": i,
            className: "foundry_2jlbztc"
          }, n), a = e ? Z.DX : Bw;
          return (0, x.jsxs)(a, {
            ...s,
            children: [(0, x.jsxs)(Hw, {
              ref: o,
              children: [(0, x.jsx)(Uw, {
                placeholder: r
              }), (0, x.jsx)(Kw, {})]
            }), (0, x.jsx)(ex, {
              children: (0, x.jsx)(Ww, {
                children: (0, x.jsx)(Xw, {
                  children: t
                })
              })
            })]
          })
        }),
        CR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, X.v6)({
              "data-testid": r
            }, n),
            s = e ? Z.DX : Yw;
          return (0, x.jsx)(s, {
            ...i,
            ref: o,
            children: (0, x.jsx)(Qw, {
              children: t
            })
          })
        }),
        OR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, X.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, n),
            s = e ? Z.DX : "p";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        })
    },
    79465: e => {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? a((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function o(e, t, r) {
        return e.concat(t).map(function(e) {
          return n(e, r)
        })
      }

      function i(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function a(e, r, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || o, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = n;
        var u = Array.isArray(r);
        return u === Array.isArray(e) ? u ? l.arrayMerge(e, r, l) : function(e, t, r) {
          var o = {};
          return r.isMergeableObject(e) && i(e).forEach(function(t) {
            o[t] = n(e[t], r)
          }), i(t).forEach(function(i) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, i) || (s(e, i) && r.isMergeableObject(t[i]) ? o[i] = function(e, t) {
              if (!t.customMerge) return a;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : a
            }(i, r)(e[i], t[i], r) : o[i] = n(t[i], r))
          }), o
        }(e, r, l) : n(r, l)
      }
      a.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return a(e, r, t)
        }, {})
      };
      var l = a;
      e.exports = l
    }
  }
]);