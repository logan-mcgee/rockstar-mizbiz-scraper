try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e6b0e298-2569-4458-b861-c4d66c6a7248", e._sentryDebugIdIdentifier = "sentry-dbid-e6b0e298-2569-4458-b861-c4d66c6a7248")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [7430], {
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
      var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
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
          c = n[1];
        return a(function() {
          o.value = r, o.getSnapshot = t, u(o) && c({
            inst: o
          })
        }, [e, r, t]), s(function() {
          return u(o) && c({
            inst: o
          }), e(function() {
            u(o) && c({
              inst: o
            })
          })
        }, [e]), l(r), r
      };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
    },
    54606: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => w,
        Badge: () => g,
        Body: () => ft,
        Breadcrumbs: () => y,
        Button: () => Te,
        Checkbox: () => l,
        Code: () => ht,
        Dialog: () => b,
        Display: () => mt,
        Divider: () => Ke,
        Dropdown: () => i,
        Heading: () => yt,
        IconButton: () => Fe,
        Label: () => bt,
        Lightbox: () => o,
        Loader: () => ot,
        Pagination: () => _,
        RadioGroup: () => d,
        Spinner: () => ye,
        Switch: () => s,
        Tag: () => m,
        Text: () => xt,
        TextArea: () => u,
        TextField: () => f,
        TextSemantics: () => _t,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Wm,
        Content: () => Bm,
        Portal: () => Hm,
        Root: () => Fm,
        Trigger: () => qm,
        useTooltipContext: () => Vm
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => $y,
        Close: () => Jy,
        Content: () => Wy,
        Controls: () => Zy,
        CssVars: () => rg,
        Download: () => tg,
        Image: () => Ky,
        Keyboard: () => Yy,
        LightboxContext: () => Iy,
        OpenIcon: () => Fy,
        Overlay: () => By,
        Portal: () => qy,
        Reset: () => eg,
        Root: () => Ly,
        RootImplContext: () => My,
        Thumbnail: () => Vy,
        Trigger: () => Ay,
        Zoom: () => Qy,
        ZoomPan: () => Hy
      });
      var i = {};
      r.r(i), r.d(i, {
        Content: () => Q_,
        Description: () => ox,
        Hint: () => ix,
        Label: () => nx,
        Option: () => sx,
        OptionIcon: () => lx,
        OptionText: () => ax,
        Portal: () => ux,
        Root: () => Y_,
        ScrollArea: () => J_,
        StatusIcon: () => dx,
        StatusRoot: () => cx,
        StatusText: () => fx,
        Trigger: () => ex,
        TriggerIcon: () => rx,
        TriggerText: () => tx,
        useDropdownContext: () => G_
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => iC,
        Input: () => nC,
        Label: () => oC,
        Root: () => rC,
        useSwitchContext: () => tC
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => gC,
        CheckMD: () => yC,
        CheckXL: () => bC,
        DashLG: () => _C,
        DashMD: () => wC,
        DashXL: () => xC
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => AC,
        ErrorText: () => VC,
        Input: () => MC,
        Label: () => zC,
        Root: () => LC
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => tO,
        Hint: () => rO,
        Input: () => eO,
        Label: () => JC,
        Root: () => QC,
        RootContext: () => GC,
        StatusIcon: () => oO,
        StatusRoot: () => nO,
        StatusText: () => iO,
        useTextAreaContext: () => YC
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => ZO,
        DotMD: () => $O,
        DotXL: () => GO
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => FO,
        Input: () => QO,
        Label: () => VO,
        Option: () => YO,
        OptionDescription: () => eP,
        OptionLabel: () => JO,
        Options: () => AO,
        Root: () => zO,
        StatusIcon: () => BO,
        StatusRoot: () => qO,
        StatusText: () => WO,
        useRadioGroupContext: () => MO
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => tj,
        Control: () => QP,
        Description: () => nj,
        Hint: () => YP,
        Icon: () => ej,
        Input: () => JP,
        Label: () => GP,
        PasswordButton: () => rj,
        Root: () => ZP,
        StatusIcon: () => ij,
        StatusRoot: () => oj,
        StatusText: () => sj
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => kj,
        CloseButton: () => Mj,
        Description: () => Dj,
        ErrorText: () => Lj,
        Footer: () => Ij,
        Header: () => Sj,
        Icon: () => Tj,
        Link: () => Nj,
        Root: () => jj,
        RootContext: () => Oj,
        Title: () => Rj,
        iconStatusMap: () => Ej,
        useAlertContext: () => Pj
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => zS,
        CloseButton: () => FS,
        Description: () => MS,
        Icon: () => LS,
        Link: () => VS,
        PaginationCounter: () => HS,
        PaginationNav: () => qS,
        PaginationNextButton: () => BS,
        PaginationPrevButton: () => WS,
        PaginationViewport: () => AS,
        Root: () => NS,
        RootContext: () => RS,
        iconStatusMap: () => IS,
        useAlertBannerContext: () => DS
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => ik,
        Icon: () => ok,
        Label: () => nk,
        Root: () => rk,
        RootContext: () => ek,
        useTagContext: () => tk
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => lE,
        CloseButton: () => uE,
        Description: () => iE,
        Icon: () => aE,
        Provider: () => eE,
        Root: () => oE,
        RootContext: () => rE,
        Viewport: () => tE,
        iconAppearanceMap: () => sE,
        useToastContext: () => nE
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => CE,
        Item: () => xE,
        OverflowMenu: () => OE,
        OverflowMenuItem: () => PE,
        Root: () => _E,
        RootContext: () => wE,
        useBreadcrumbsContext: () => bE
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => IE,
        Label: () => NE,
        Root: () => DE
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => JT,
        Button: () => iR,
        CloseButton: () => nR,
        Content: () => KT,
        Description: () => GT,
        Footer: () => tR,
        Header: () => eR,
        HeaderButton: () => oR,
        HeaderTitle: () => rR,
        Layout: () => QT,
        Overlay: () => UT,
        Portal: () => $T,
        Root: () => XT,
        ScrollArea: () => YT,
        Title: () => ZT,
        Trigger: () => sR,
        useDialogContext: () => HT
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => UR,
        Root: () => XR,
        StatusIndicator: () => KR,
        useAvatarContext: () => HR
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => sD,
        Dropdown: () => dD,
        DropdownLabel: () => cD,
        Ellipsis: () => iD,
        Item: () => rD,
        Label: () => pD,
        Next: () => oD,
        Option: () => fD,
        Pages: () => tD,
        Prev: () => nD,
        ResultsPerPage: () => uD,
        Root: () => eD
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
        const r = T.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(E(e, 2), 16)), parseInt(E(e[3] || "f", 2), 16) / 255]
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
        E = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        T = new RegExp(`^#${E("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        R = new RegExp(`^#${E("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        D = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${E(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
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
          const c = n - i / 2;
          return [a + c, l + c, u + c].map(L)
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
        H = r(75523);
      const X = {
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
        }, c = []) => {
          (0, V.useEffect)(() => {
            if (!e.current || !i || !u) return;
            const c = `${i}:${t}:${r}`,
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
                  const [r, n, o] = j(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? B.LU.global.color.black.static[100] : B.LU.global.color.white.static[100]),
                  hover: s || (e >= r ? z(i, n) : A(i, n)),
                  pressed: a || (e >= r ? z(i, o) : A(i, o))
                }
              });
            return e.current.style.setProperty(X.enabled.background, i), e.current.style.setProperty(X.enabled.border, i), e.current.style.setProperty(X.enabled.text, d), e.current.style.setProperty(X.hover.background, f), e.current.style.setProperty(X.hover.border, f), e.current.style.setProperty(X.hover.text, d), e.current.style.setProperty(X.focus.background, f), e.current.style.setProperty(X.focus.border, f), e.current.style.setProperty(X.focus.text, d), e.current.style.setProperty(X.pressed.background, p), e.current.style.setProperty(X.pressed.border, p), e.current.style.setProperty(X.pressed.text, d), e.current.style.setProperty(X.loading.background, f), e.current.style.setProperty(X.loading.border, f), e.current.style.setProperty(X.loading.text, d), () => {
              e.current?.style.removeProperty(X.enabled.background), e.current?.style.removeProperty(X.enabled.border), e.current?.style.removeProperty(X.enabled.text), e.current?.style.removeProperty(X.hover.background), e.current?.style.removeProperty(X.hover.border), e.current?.style.removeProperty(X.hover.text), e.current?.style.removeProperty(X.focus.background), e.current?.style.removeProperty(X.focus.border), e.current?.style.removeProperty(X.focus.text), e.current?.style.removeProperty(X.pressed.background), e.current?.style.removeProperty(X.pressed.border), e.current?.style.removeProperty(X.pressed.text), e.current?.style.removeProperty(X.loading.background), e.current?.style.removeProperty(X.loading.border), e.current?.style.removeProperty(X.loading.text)
            }
          }, [e.current, t, r, n, o, i, s, a, l, u, ...c])
        };
      var K = r(19403),
        $ = r(4408),
        Z = r(50078),
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

      function de(e, t) {
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
          t % 2 ? de(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ce(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : de(Object(r)).forEach(function(t) {
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
            for (var [u, c] of e.compoundVariants) he(u, n, e.defaultVariants) && (r += " " + c);
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
          const s = (0, Z.zQ)(),
            a = "string" == typeof r ? r : r?.[s] ?? r.default ?? ve,
            l = (0, H.v6)({
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
      var ge = r(10439),
        be = r(34232);

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
            var n, o, i;
            n = e, o = t, i = r[t], (o = we(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
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
      var Oe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pe = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xe(xe({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Oe(u, n, e.defaultVariants) && (r += " " + c);
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
        je = Pe({
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
      Pe({
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
      var Se = Pe({
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
        ke = Pe({
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
        Ee = Pe({
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
      const Te = (0, V.forwardRef)(({
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
        isLoading: c = !1,
        spinnerLabel: d,
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
        const C = (0, V.useRef)(null),
          O = (0, K.UP)(C, _),
          P = (0, Z.zQ)(),
          j = "string" == typeof l ? l : l?.[P] ?? l.default ?? "MD",
          {
            buttonProps: S
          } = (0, K.sL)((0, H.v6)(w, {
            isLoading: c
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
        const k = (0, H.v6)({
            className: je({
              appearance: a,
              size: j,
              fullWidth: u,
              iconLeft: !!n,
              iconRight: !!i,
              isLoading: c
            }),
            "data-testid": e
          }, S),
          E = n && be[n],
          T = i && be[i],
          R = t ? $.DX : "button",
          D = u && (T || T && E);
        return (0, x.jsxs)(R, {
          ref: O,
          ...k,
          children: [D && (0, x.jsx)("div", {
            className: "foundry_17pcofy15"
          }), E && (0, x.jsx)(E, {
            label: o || "",
            size: j,
            className: (0, ge.$)(Se({
              size: j
            }), "foundry_17pcofy11")
          }), (0, x.jsx)($.xV, {
            children: r
          }), T && (0, x.jsx)(T, {
            label: s || "",
            size: j,
            className: (0, ge.$)(Se({
              size: j
            }), ke({
              fullWidth: u
            }))
          }), c && (0, x.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, x.jsx)(ye, {
              label: d || "",
              size: "inline" + ("LG" === j ? "LG" : "MD"),
              hideTrack: !0,
              className: Ee({
                size: j
              })
            })
          })]
        })
      });

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

      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? De(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Re(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : De(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ie(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Le = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Me = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ne(Ne({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Le(u, n, e.defaultVariants) && (r += " " + c);
            return r
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
        ze = Me({
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
        Ae = Me({
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
        Ve = Me({
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
      const Fe = (0, V.forwardRef)(({
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
        override_darkenLuminance: c = .035,
        override_textLuminance: d = .179,
        override_hoverLuminance: f = .08,
        override_pressedLuminance: p = .15,
        override_backgroundColor: h,
        override_hoverColor: m,
        override_pressedColor: v,
        override_textColor: y,
        ...g
      }, b) => {
        const w = (0, V.useRef)(null),
          _ = (0, K.UP)(w, b),
          C = (0, Z.zQ)(),
          O = "string" == typeof s ? s : s?.[C] ?? s.default ?? "LG",
          {
            buttonProps: P
          } = (0, K.sL)((0, H.v6)(g, {
            isLoading: l
          }), w);
        U({
          refs: {
            buttonRef: w
          },
          config: {
            textLuminance: d,
            darkenLuminance: c,
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
        const j = (0, H.v6)({
            className: Ae({
              appearance: o,
              size: O,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, P),
          S = be[r],
          k = t ? $.DX : "button";
        return (0, x.jsxs)(k, {
          ref: _,
          ...j,
          children: [S && (0, x.jsx)(S, {
            label: n || "",
            size: O,
            className: ze({
              size: O
            })
          }), (0, x.jsx)($.xV, {
            children: a
          }), l && (0, x.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, x.jsx)(ye, {
              label: u || "",
              size: O && "SM" !== O ? `inline${O}` : "inlineMD",
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

      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Be(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = qe(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
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
      var Xe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ue = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = We(We({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Xe(u, n, e.defaultVariants) && (r += " " + c);
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
      const Ke = (0, V.forwardRef)(({
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
          c = o ? $.DX : l;
        return (0, x.jsx)(c, {
          ref: a,
          className: (0, ge.$)(Ue({
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

      function Ze(e, t) {
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
          t % 2 ? Ze(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $e(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ze(Object(r)).forEach(function(t) {
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
      var Qe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Je = "var(--foundry_9dxgbc2)",
        et = "var(--foundry_9dxgbc3)",
        tt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ge(Ge({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Qe(u, n, e.defaultVariants) && (r += " " + c);
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
        rt = "var(--foundry_9dxgbc0)",
        nt = "var(--foundry_9dxgbc1)";
      const ot = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: i = "MD",
        ...s
      }, a) => {
        const l = (0, Z.zQ)(),
          u = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          c = (0, H.v6)({
            className: tt({
              size: u
            }),
            "data-testid": t,
            style: (0, B.DI)({
              [rt]: n?.pulseColorBackground,
              [nt]: n?.pulseColorForeground,
              [Je]: n?.gradientColorBackground,
              [et]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          d = e ? $.DX : "div";
        return (0, x.jsx)(d, {
          ref: a,
          ...c,
          children: e ? (0, x.jsx)($.xV, {
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

      function it(e) {
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

      function at(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? st(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = it(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : st(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function lt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ut = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ct = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = at(at({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ut(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lt(e.variantClassNames, e => lt(e, e => e.split(" ")[0]))
            }
          }, t
        },
        dt = ct({
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
      const ft = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? $.DX : "p",
          a = (0, H.v6)({
            className: dt({
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
      var pt = ct({
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
      const ht = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const i = e ? $.DX : "p",
            s = (0, H.v6)({
              className: pt({
                appearance: r
              })
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        mt = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "h1",
            i = (0, H.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        });
      var vt = ct({
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
      const yt = (0, V.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? $.DX : `h${t}`,
          s = (0, H.v6)(n, {
            className: vt({
              level: t
            })
          });
        return (0, x.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var gt = ct({
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
      const bt = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? $.DX : "p",
          a = (0, H.v6)({
            className: gt({
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
      const _t = {
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
        xt = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? $.DX : _t[r] || "span",
            s = (0, H.v6)(n, {
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

      function Ct(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function Ot(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }
      var Pt, jt, St, kt, Et, Tt, Rt, Dt, Nt, It, Lt, Mt, zt, At, Vt, Ft, qt, Bt = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        Wt = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        Ht = 1e8,
        Xt = 1e-8,
        Ut = 2 * Math.PI,
        Kt = Ut / 4,
        $t = 0,
        Zt = Math.sqrt,
        Gt = Math.cos,
        Yt = Math.sin,
        Qt = function(e) {
          return "string" == typeof e
        },
        Jt = function(e) {
          return "function" == typeof e
        },
        er = function(e) {
          return "number" == typeof e
        },
        tr = function(e) {
          return void 0 === e
        },
        rr = function(e) {
          return "object" == typeof e
        },
        nr = function(e) {
          return !1 !== e
        },
        or = function() {
          return "undefined" != typeof window
        },
        ir = function(e) {
          return Jt(e) || Qt(e)
        },
        sr = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        ar = Array.isArray,
        lr = /random\([^)]+\)/g,
        ur = /,\s*/g,
        cr = /(?:-?\.?\d|\.)+/gi,
        dr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        fr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        pr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        hr = /[+-]=-?[.\d]+/,
        mr = /[^,'"\[\]\s]+/gi,
        vr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        yr = {},
        gr = {},
        br = function(e) {
          return (gr = Zr(e, yr)) && Yo
        },
        wr = function(e, t) {
          return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        },
        _r = function(e, t) {
          return !t && console.warn(e)
        },
        xr = function(e, t) {
          return e && (yr[e] = t) && gr && (gr[e] = t) || yr
        },
        Cr = function() {
          return 0
        },
        Or = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        Pr = {
          suppressEvents: !0,
          kill: !1
        },
        jr = {
          suppressEvents: !0
        },
        Sr = {},
        kr = [],
        Er = {},
        Tr = {},
        Rr = {},
        Dr = 30,
        Nr = [],
        Ir = "",
        Lr = function(e) {
          var t, r, n = e[0];
          if (rr(n) || Jt(n) || (e = [e]), !(t = (n._gsap || {}).harness)) {
            for (r = Nr.length; r-- && !Nr[r].targetTest(n););
            t = Nr[r]
          }
          for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new co(e[r], t))) || e.splice(r, 1);
          return e
        },
        Mr = function(e) {
          return e._gsap || Lr(Sn(e))[0]._gsap
        },
        zr = function(e, t, r) {
          return (r = e[t]) && Jt(r) ? e[t]() : tr(r) && e.getAttribute && e.getAttribute(t) || r
        },
        Ar = function(e, t) {
          return (e = e.split(",")).forEach(t) || e
        },
        Vr = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        Fr = function(e) {
          return Math.round(1e7 * e) / 1e7 || 0
        },
        qr = function(e, t) {
          var r = t.charAt(0),
            n = parseFloat(t.substr(2));
          return e = parseFloat(e), "+" === r ? e + n : "-" === r ? e - n : "*" === r ? e * n : e / n
        },
        Br = function(e, t) {
          for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r;);
          return n < r
        },
        Wr = function() {
          var e, t, r = kr.length,
            n = kr.slice(0);
          for (Er = {}, kr.length = 0, e = 0; e < r; e++)(t = n[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        Hr = function(e) {
          return !!(e._initted || e._startAt || e.add)
        },
        Xr = function(e, t, r, n) {
          kr.length && !jt && Wr(), e.render(t, r, n || !!(jt && t < 0 && Hr(e))), kr.length && !jt && Wr()
        },
        Ur = function(e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(mr).length < 2 ? t : Qt(e) ? e.trim() : e
        },
        Kr = function(e) {
          return e
        },
        $r = function(e, t) {
          for (var r in t) r in e || (e[r] = t[r]);
          return e
        },
        Zr = function(e, t) {
          for (var r in t) e[r] = t[r];
          return e
        },
        Gr = function e(t, r) {
          for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = rr(r[n]) ? e(t[n] || (t[n] = {}), r[n]) : r[n]);
          return t
        },
        Yr = function(e, t) {
          var r, n = {};
          for (r in e) r in t || (n[r] = e[r]);
          return n
        },
        Qr = function(e) {
          var t, r = e.parent || kt,
            n = e.keyframes ? (t = ar(e.keyframes), function(e, r) {
              for (var n in r) n in e || "duration" === n && t || "ease" === n || (e[n] = r[n])
            }) : $r;
          if (nr(e.inherit))
            for (; r;) n(e, r.vars.defaults), r = r.parent || r._dp;
          return e
        },
        Jr = function(e, t, r, n, o) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var i, s = e[n];
          if (o)
            for (i = t[o]; s && s[o] > i;) s = s._prev;
          return s ? (t._next = s._next, s._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = s, t.parent = t._dp = e, t
        },
        en = function(e, t, r, n) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var o = t._prev,
            i = t._next;
          o ? o._next = i : e[r] === t && (e[r] = i), i ? i._prev = o : e[n] === t && (e[n] = o), t._next = t._prev = t.parent = null
        },
        tn = function(e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        rn = function(e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var r = e; r;) r._dirty = 1, r = r.parent;
          return e
        },
        nn = function(e, t, r, n) {
          return e._startAt && (jt ? e._startAt.revert(Pr) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n))
        },
        on = function e(t) {
          return !t || t._ts && e(t.parent)
        },
        sn = function(e) {
          return e._repeat ? an(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        an = function(e, t) {
          var r = Math.floor(e = Fr(e / t));
          return e && r === e ? r - 1 : r
        },
        ln = function(e, t) {
          return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        },
        un = function(e) {
          return e._end = Fr(e._start + (e._tDur / Math.abs(e._ts || e._rts || Xt) || 0))
        },
        cn = function(e, t) {
          var r = e._dp;
          return r && r.smoothChildTiming && e._ts && (e._start = Fr(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), un(e), r._dirty || rn(r, e)), e
        },
        dn = function(e, t) {
          var r;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = ln(e.rawTime(), t), (!t._dur || Cn(0, t.totalDuration(), r) - t._tTime > Xt) && t.render(r, !0)), rn(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            e._zTime = -1e-8
          }
        },
        fn = function(e, t, r, n) {
          return t.parent && tn(t), t._start = Fr((er(r) ? r : r || e !== kt ? wn(e, r, t) : e._time) + t._delay), t._end = Fr(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Jr(e, t, "_first", "_last", e._sort ? "_start" : 0), vn(t) || (e._recent = t), n || dn(e, t), e._ts < 0 && cn(e, e._tTime), e
        },
        pn = function(e, t) {
          return (yr.ScrollTrigger || wr("scrollTrigger", t)) && yr.ScrollTrigger.create(t, e)
        },
        hn = function(e, t, r, n, o) {
          return bo(e, t, o), e._initted ? !r && e._pt && !jt && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && Nt !== Yn.frame ? (kr.push(e), e._lazy = [o, n], 1) : void 0 : 1
        },
        mn = function e(t) {
          var r = t.parent;
          return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || e(r))
        },
        vn = function(e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t
        },
        yn = function(e, t, r, n) {
          var o = e._repeat,
            i = Fr(t) || 0,
            s = e._tTime / e._tDur;
          return s && !n && (e._time *= i / e._dur), e._dur = i, e._tDur = o ? o < 0 ? 1e10 : Fr(i * (o + 1) + e._rDelay * o) : i, s > 0 && !n && cn(e, e._tTime = e._tDur * s), e.parent && un(e), r || rn(e.parent, e), e
        },
        gn = function(e) {
          return e instanceof po ? rn(e) : yn(e, e._dur)
        },
        bn = {
          _start: 0,
          endTime: Cr,
          totalDuration: Cr
        },
        wn = function e(t, r, n) {
          var o, i, s, a = t.labels,
            l = t._recent || bn,
            u = t.duration() >= Ht ? l.endTime(!1) : t._dur;
          return Qt(r) && (isNaN(r) || r in a) ? (i = r.charAt(0), s = "%" === r.substr(-1), o = r.indexOf("="), "<" === i || ">" === i ? (o >= 0 && (r = r.replace(/=/, "")), ("<" === i ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (o < 0 ? l : n).totalDuration() / 100 : 1)) : o < 0 ? (r in a || (a[r] = u), a[r]) : (i = parseFloat(r.charAt(o - 1) + r.substr(o + 1)), s && n && (i = i / 100 * (ar(n) ? n[0] : n).totalDuration()), o > 1 ? e(t, r.substr(0, o - 1), n) + i : u + i)) : null == r ? u : +r
        },
        _n = function(e, t, r) {
          var n, o, i = er(t[1]),
            s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
          if (i && (a.duration = t[1]), a.parent = r, e) {
            for (n = a, o = r; o && !("immediateRender" in n);) n = o.vars.defaults || {}, o = nr(o.vars.inherit) && o.parent;
            a.immediateRender = nr(n.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
          }
          return new Oo(t[0], a, t[s + 1])
        },
        xn = function(e, t) {
          return e || 0 === e ? t(e) : t
        },
        Cn = function(e, t, r) {
          return r < e ? e : r > t ? t : r
        },
        On = function(e, t) {
          return Qt(e) && (t = vr.exec(e)) ? t[1] : ""
        },
        Pn = [].slice,
        jn = function(e, t) {
          return e && rr(e) && "length" in e && (!t && !e.length || e.length - 1 in e && rr(e[0])) && !e.nodeType && e !== Et
        },
        Sn = function(e, t, r) {
          return St && !t && St.selector ? St.selector(e) : !Qt(e) || r || !Tt && Qn() ? ar(e) ? function(e, t, r) {
            return void 0 === r && (r = []), e.forEach(function(e) {
              var n;
              return Qt(e) && !t || jn(e, 1) ? (n = r).push.apply(n, Sn(e)) : r.push(e)
            }) || r
          }(e, r) : jn(e) ? Pn.call(e, 0) : e ? [e] : [] : Pn.call((t || Rt).querySelectorAll(e), 0)
        },
        kn = function(e) {
          return e = Sn(e)[0] || _r("Invalid scope") || {},
            function(t) {
              var r = e.current || e.nativeElement || e;
              return Sn(t, r.querySelectorAll ? r : r === e ? _r("Invalid scope") || Rt.createElement("div") : e)
            }
        },
        En = function(e) {
          return e.sort(function() {
            return .5 - Math.random()
          })
        },
        Tn = function(e) {
          if (Jt(e)) return e;
          var t = rr(e) ? e : {
              each: e
            },
            r = io(t.ease),
            n = t.from || 0,
            o = parseFloat(t.base) || 0,
            i = {},
            s = n > 0 && n < 1,
            a = isNaN(n) || s,
            l = t.axis,
            u = n,
            c = n;
          return Qt(n) ? u = c = {
              center: .5,
              edges: .5,
              end: 1
            } [n] || 0 : !s && a && (u = n[0], c = n[1]),
            function(e, s, d) {
              var f, p, h, m, v, y, g, b, w, _ = (d || t).length,
                x = i[_];
              if (!x) {
                if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, Ht])[1])) {
                  for (g = -Ht; g < (g = d[w++].getBoundingClientRect().left) && w < _;);
                  w < _ && w--
                }
                for (x = i[_] = [], f = a ? Math.min(w, _) * u - .5 : n % w, p = w === Ht ? 0 : a ? _ * c / w - .5 : n / w | 0, g = 0, b = Ht, y = 0; y < _; y++) h = y % w - f, m = p - (y / w | 0), x[y] = v = l ? Math.abs("y" === l ? m : h) : Zt(h * h + m * m), v > g && (g = v), v < b && (b = v);
                "random" === n && En(x), x.max = g - b, x.min = b, x.v = _ = (parseFloat(t.amount) || parseFloat(t.each) * (w > _ ? _ - 1 : l ? "y" === l ? _ / w : w : Math.max(w, _ / w)) || 0) * ("edges" === n ? -1 : 1), x.b = _ < 0 ? o - _ : o, x.u = On(t.amount || t.each) || 0, r = r && _ < 0 ? no(r) : r
              }
              return _ = (x[e] - x.min) / x.max || 0, Fr(x.b + (r ? r(_) : _) * x.v) + x.u
            }
        },
        Rn = function(e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function(r) {
            var n = Fr(Math.round(parseFloat(r) / e) * e * t);
            return (n - n % 1) / t + (er(r) ? 0 : On(r))
          }
        },
        Dn = function(e, t) {
          var r, n, o = ar(e);
          return !o && rr(e) && (r = o = e.radius || Ht, e.values ? (e = Sn(e.values), (n = !er(e[0])) && (r *= r)) : e = Rn(e.increment)), xn(t, o ? Jt(e) ? function(t) {
            return n = e(t), Math.abs(n - t) <= r ? n : t
          } : function(t) {
            for (var o, i, s = parseFloat(n ? t.x : t), a = parseFloat(n ? t.y : 0), l = Ht, u = 0, c = e.length; c--;)(o = n ? (o = e[c].x - s) * o + (i = e[c].y - a) * i : Math.abs(e[c] - s)) < l && (l = o, u = c);
            return u = !r || l <= r ? e[u] : t, n || u === t || er(t) ? u : u + On(t)
          } : Rn(e))
        },
        Nn = function(e, t, r, n) {
          return xn(ar(e) ? !t : !0 === r ? !!(r = 0) : !n, function() {
            return ar(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + .99 * r)) / r) * r * n) / n
          })
        },
        In = function(e, t, r) {
          return xn(r, function(r) {
            return e[~~t(r)]
          })
        },
        Ln = function(e) {
          return e.replace(lr, function(e) {
            var t = e.indexOf("[") + 1,
              r = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(ur);
            return Nn(t ? r : +r[0], t ? 0 : +r[1], +r[2] || 1e-5)
          })
        },
        Mn = function(e, t, r, n, o) {
          var i = t - e,
            s = n - r;
          return xn(o, function(t) {
            return r + ((t - e) / i * s || 0)
          })
        },
        zn = function(e, t, r) {
          var n, o, i, s = e.labels,
            a = Ht;
          for (n in s)(o = s[n] - t) < 0 == !!r && o && a > (o = Math.abs(o)) && (i = n, a = o);
          return i
        },
        An = function(e, t, r) {
          var n, o, i, s = e.vars,
            a = s[t],
            l = St,
            u = e._ctx;
          if (a) return n = s[t + "Params"], o = s.callbackScope || e, r && kr.length && Wr(), u && (St = u), i = n ? a.apply(o, n) : a.call(o), St = l, i
        },
        Vn = function(e) {
          return tn(e), e.scrollTrigger && e.scrollTrigger.kill(!!jt), e.progress() < 1 && An(e, "onInterrupt"), e
        },
        Fn = [],
        qn = function(e) {
          if (e)
            if (e = !e.name && e.default || e, or() || e.headless) {
              var t = e.name,
                r = Jt(e),
                n = t && !r && e.init ? function() {
                  this._props = []
                } : e,
                o = {
                  init: Cr,
                  render: No,
                  add: yo,
                  kill: Lo,
                  modifier: Io,
                  rawVars: 0
                },
                i = {
                  targetTest: 0,
                  get: 0,
                  getSetter: Eo,
                  aliases: {},
                  register: 0
                };
              if (Qn(), e !== n) {
                if (Tr[t]) return;
                $r(n, $r(Yr(e, o), i)), Zr(n.prototype, Zr(o, Yr(e, i))), Tr[n.prop = t] = n, e.targetTest && (Nr.push(n), Sr[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
              }
              xr(t, n), e.register && e.register(Yo, n, Ao)
            } else Fn.push(e)
        },
        Bn = 255,
        Wn = {
          aqua: [0, Bn, Bn],
          lime: [0, Bn, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, Bn],
          navy: [0, 0, 128],
          white: [Bn, Bn, Bn],
          olive: [128, 128, 0],
          yellow: [Bn, Bn, 0],
          orange: [Bn, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [Bn, 0, 0],
          pink: [Bn, 192, 203],
          cyan: [0, Bn, Bn],
          transparent: [Bn, Bn, Bn, 0]
        },
        Hn = function(e, t, r) {
          return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (r - t) * e * 6 : e < .5 ? r : 3 * e < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * Bn + .5 | 0
        },
        Xn = function(e, t, r) {
          var n, o, i, s, a, l, u, c, d, f, p = e ? er(e) ? [e >> 16, e >> 8 & Bn, e & Bn] : 0 : Wn.black;
          if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Wn[e]) p = Wn[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (n = e.charAt(1), o = e.charAt(2), i = e.charAt(3), e = "#" + n + n + o + o + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & Bn, p & Bn, parseInt(e.substr(7), 16) / 255];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & Bn, e & Bn]
            } else if ("hsl" === e.substr(0, 3))
              if (p = f = e.match(cr), t) {
                if (~e.indexOf("=")) return p = e.match(dr), r && p.length < 4 && (p[3] = 1), p
              } else s = +p[0] % 360 / 360, a = +p[1] / 100, n = 2 * (l = +p[2] / 100) - (o = l <= .5 ? l * (a + 1) : l + a - l * a), p.length > 3 && (p[3] *= 1), p[0] = Hn(s + 1 / 3, n, o), p[1] = Hn(s, n, o), p[2] = Hn(s - 1 / 3, n, o);
            else p = e.match(cr) || Wn.transparent;
            p = p.map(Number)
          }
          return t && !f && (n = p[0] / Bn, o = p[1] / Bn, i = p[2] / Bn, l = ((u = Math.max(n, o, i)) + (c = Math.min(n, o, i))) / 2, u === c ? s = a = 0 : (d = u - c, a = l > .5 ? d / (2 - u - c) : d / (u + c), s = u === n ? (o - i) / d + (o < i ? 6 : 0) : u === o ? (i - n) / d + 2 : (n - o) / d + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * l + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        Un = function(e) {
          var t = [],
            r = [],
            n = -1;
          return e.split($n).forEach(function(e) {
            var o = e.match(fr) || [];
            t.push.apply(t, o), r.push(n += o.length + 1)
          }), t.c = r, t
        },
        Kn = function(e, t, r) {
          var n, o, i, s, a = "",
            l = (e + a).match($n),
            u = t ? "hsla(" : "rgba(",
            c = 0;
          if (!l) return e;
          if (l = l.map(function(e) {
              return (e = Xn(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            }), r && (i = Un(e), (n = r.c).join(a) !== i.c.join(a)))
            for (s = (o = e.replace($n, "1").split(fr)).length - 1; c < s; c++) a += o[c] + (~n.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (i.length ? i : l.length ? l : r).shift());
          if (!o)
            for (s = (o = e.split($n)).length - 1; c < s; c++) a += o[c] + l[c];
          return a + o[s]
        },
        $n = function() {
          var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in Wn) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        Zn = /hsl[a]?\(/,
        Gn = function(e) {
          var t, r = e.join(" ");
          if ($n.lastIndex = 0, $n.test(r)) return t = Zn.test(r), e[1] = Kn(e[1], t), e[0] = Kn(e[0], t, Un(e[1])), !0
        },
        Yn = function() {
          var e, t, r, n, o, i, s = Date.now,
            a = 500,
            l = 33,
            u = s(),
            c = u,
            d = 1e3 / 240,
            f = d,
            p = [],
            h = function r(h) {
              var m, v, y, g, b = s() - c,
                w = !0 === h;
              if ((b > a || b < 0) && (u += b - l), ((m = (y = (c += b) - u) - f) > 0 || w) && (g = ++n.frame, o = y - 1e3 * n.time, n.time = y /= 1e3, f += m + (m >= d ? 4 : d - m), v = 1), w || (e = t(r)), v)
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
              Dt && (!Tt && or() && (Et = Tt = window, Rt = Et.document || {}, yr.gsap = Yo, (Et.gsapVersions || (Et.gsapVersions = [])).push(Yo.version), br(gr || Et.GreenSockGlobals || !Et.gsap && Et || {}), Fn.forEach(qn)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, e && n.sleep(), t = r || function(e) {
                return setTimeout(e, f - 1e3 * n.time + 1 | 0)
              }, Lt = 1, h(2))
            },
            sleep: function() {
              (r ? cancelAnimationFrame : clearTimeout)(e), Lt = 0, t = Cr
            },
            lagSmoothing: function(e, t) {
              a = e || 1 / 0, l = Math.min(t || 33, a)
            },
            fps: function(e) {
              d = 1e3 / (e || 240), f = 1e3 * n.time + d
            },
            add: function(e, t, r) {
              var o = t ? function(t, r, i, s) {
                e(t, r, i, s), n.remove(o)
              } : e;
              return n.remove(e), p[r ? "unshift" : "push"](o), Qn(), o
            },
            remove: function(e, t) {
              ~(t = p.indexOf(e)) && p.splice(t, 1) && i >= t && i--
            },
            _listeners: p
          }, n
        }(),
        Qn = function() {
          return !Lt && Yn.wake()
        },
        Jn = {},
        eo = /^[\d.\-M][\d.\-,\s]/,
        to = /["']/g,
        ro = function(e) {
          for (var t, r, n, o = {}, i = e.substr(1, e.length - 3).split(":"), s = i[0], a = 1, l = i.length; a < l; a++) r = i[a], t = a !== l - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, t), o[s] = isNaN(n) ? n.replace(to, "").trim() : +n, s = r.substr(t + 1).trim();
          return o
        },
        no = function(e) {
          return function(t) {
            return 1 - e(1 - t)
          }
        },
        oo = function e(t, r) {
          for (var n, o = t._first; o;) o instanceof po ? e(o, r) : !o.vars.yoyoEase || o._yoyo && o._repeat || o._yoyo === r || (o.timeline ? e(o.timeline, r) : (n = o._ease, o._ease = o._yEase, o._yEase = n, o._yoyo = r)), o = o._next
        },
        io = function(e, t) {
          return e && (Jt(e) ? e : Jn[e] || function(e) {
            var t, r, n, o, i = (e + "").split("("),
              s = Jn[i[0]];
            return s && i.length > 1 && s.config ? s.config.apply(null, ~e.indexOf("{") ? [ro(i[1])] : (t = e, r = t.indexOf("(") + 1, n = t.indexOf(")"), o = t.indexOf("(", r), t.substring(r, ~o && o < n ? t.indexOf(")", n + 1) : n)).split(",").map(Ur)) : Jn._CE && eo.test(e) ? Jn._CE("", e) : s
          }(e)) || t
        },
        so = function(e, t, r, n) {
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
          return Ar(e, function(e) {
            for (var t in Jn[e] = yr[e] = i, Jn[o = e.toLowerCase()] = r, i) Jn[o + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Jn[e + "." + t] = i[t]
          }), i
        },
        ao = function(e) {
          return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
          }
        },
        lo = function e(t, r, n) {
          var o = r >= 1 ? r : 1,
            i = (n || (t ? .3 : .45)) / (r < 1 ? r : 1),
            s = i / Ut * (Math.asin(1 / o) || 0),
            a = function(e) {
              return 1 === e ? 1 : o * Math.pow(2, -10 * e) * Yt((e - s) * i) + 1
            },
            l = "out" === t ? a : "in" === t ? function(e) {
              return 1 - a(1 - e)
            } : ao(a);
          return i = Ut / i, l.config = function(r, n) {
            return e(t, r, n)
          }, l
        },
        uo = function e(t, r) {
          void 0 === r && (r = 1.70158);
          var n = function(e) {
              return e ? --e * e * ((r + 1) * e + r) + 1 : 0
            },
            o = "out" === t ? n : "in" === t ? function(e) {
              return 1 - n(1 - e)
            } : ao(n);
          return o.config = function(r) {
            return e(t, r)
          }, o
        };
      Ar("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var r = t < 5 ? t + 1 : t;
        so(e + ",Power" + (r - 1), t ? function(e) {
          return Math.pow(e, r)
        } : function(e) {
          return e
        }, function(e) {
          return 1 - Math.pow(1 - e, r)
        }, function(e) {
          return e < .5 ? Math.pow(2 * e, r) / 2 : 1 - Math.pow(2 * (1 - e), r) / 2
        })
      }), Jn.Linear.easeNone = Jn.none = Jn.Linear.easeIn, so("Elastic", lo("in"), lo("out"), lo()), Mt = 7.5625, Vt = 2 * (At = 1 / (zt = 2.75)), Ft = 2.5 * At, so("Bounce", function(e) {
        return 1 - qt(1 - e)
      }, qt = function(e) {
        return e < At ? Mt * e * e : e < Vt ? Mt * Math.pow(e - 1.5 / zt, 2) + .75 : e < Ft ? Mt * (e -= 2.25 / zt) * e + .9375 : Mt * Math.pow(e - 2.625 / zt, 2) + .984375
      }), so("Expo", function(e) {
        return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e)
      }), so("Circ", function(e) {
        return -(Zt(1 - e * e) - 1)
      }), so("Sine", function(e) {
        return 1 === e ? 1 : 1 - Gt(e * Kt)
      }), so("Back", uo("in"), uo("out"), uo()), Jn.SteppedEase = Jn.steps = yr.SteppedEase = {
        config: function(e, t) {
          void 0 === e && (e = 1);
          var r = 1 / e,
            n = e + (t ? 0 : 1),
            o = t ? 1 : 0;
          return function(e) {
            return ((n * Cn(0, .99999999, e) | 0) + o) * r
          }
        }
      }, Wt.ease = Jn["quad.out"], Ar("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return Ir += e + "," + e + "Params,"
      });
      var co = function(e, t) {
          this.id = $t++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : zr, this.set = t ? t.getSetter : Eo
        },
        fo = function() {
          function e(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, yn(this, +e.duration, 1, 1), this.data = e.data, St && (this._ctx = St, St.data.push(this)), Lt || Yn.wake()
          }
          var t = e.prototype;
          return t.delay = function(e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
          }, t.duration = function(e) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
          }, t.totalDuration = function(e) {
            return arguments.length ? (this._dirty = 0, yn(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, t.totalTime = function(e, t) {
            if (Qn(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (cn(this, e), !r._dp || r.parent || dn(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && fn(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === Xt || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), Xr(this, e, t)), this
          }, t.time = function(e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + sn(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
          }, t.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
          }, t.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + sn(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
          }, t.iteration = function(e, t) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * r, t) : this._repeat ? an(this._tTime, r) + 1 : 1
          }, t.timeScale = function(e, t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var r = this.parent && this._ts ? ln(this.parent._time, this) : this._tTime;
            return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Cn(-Math.abs(this._delay), this.totalDuration(), r), !1 !== t), un(this),
              function(e) {
                for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                return e
              }(this)
          }, t.paused = function(e) {
            return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Qn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Xt && (this._tTime -= Xt)))), this) : this._ps
          }, t.startTime = function(e) {
            if (arguments.length) {
              this._start = Fr(e);
              var t = this.parent || this._dp;
              return t && (t._sort || !this.parent) && fn(t, this, this._start - this._delay), this
            }
            return this._start
          }, t.endTime = function(e) {
            return this._start + (nr(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, t.rawTime = function(e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ln(t.rawTime(e), this) : this._tTime : this._tTime
          }, t.revert = function(e) {
            void 0 === e && (e = jr);
            var t = jt;
            return jt = e, Hr(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), jt = t, this
          }, t.globalTime = function(e) {
            for (var t = this, r = arguments.length ? e : t.rawTime(); t;) r = t._start + r / (Math.abs(t._ts) || 1), t = t._dp;
            return !this.parent && this._sat ? this._sat.globalTime(e) : r
          }, t.repeat = function(e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, gn(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, t.repeatDelay = function(e) {
            if (arguments.length) {
              var t = this._time;
              return this._rDelay = e, gn(this), t ? this.time(t) : this
            }
            return this._rDelay
          }, t.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
          }, t.seek = function(e, t) {
            return this.totalTime(wn(this, e), nr(t))
          }, t.restart = function(e, t) {
            return this.play().totalTime(e ? -this._delay : 0, nr(t)), this._dur || (this._zTime = -1e-8), this
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
            return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= r && e < this.endTime(!0) - Xt))
          }, t.eventCallback = function(e, t, r) {
            var n = this.vars;
            return arguments.length > 1 ? (t ? (n[e] = t, r && (n[e + "Params"] = r), "onUpdate" === e && (this._onUpdate = t)) : delete n[e], this) : n[e]
          }, t.then = function(e) {
            var t = this,
              r = t._prom;
            return new Promise(function(n) {
              var o = Jt(e) ? e : Kr,
                i = function() {
                  var e = t.then;
                  t.then = null, r && r(), Jt(o) && (o = o(t)) && (o.then || o === t) && (t.then = e), n(o), t.then = e
                };
              t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? i() : t._prom = i
            })
          }, t.kill = function() {
            Vn(this)
          }, e
        }();
      $r(fo.prototype, {
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
      var po = function(e) {
        function t(t, r) {
          var n;
          return void 0 === t && (t = {}), (n = e.call(this, t) || this).labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = nr(t.sortChildren), kt && fn(t.parent || kt, Ct(n), r), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && pn(Ct(n), t.scrollTrigger), n
        }
        Ot(t, e);
        var r = t.prototype;
        return r.to = function(e, t, r) {
          return _n(0, arguments, this), this
        }, r.from = function(e, t, r) {
          return _n(1, arguments, this), this
        }, r.fromTo = function(e, t, r, n) {
          return _n(2, arguments, this), this
        }, r.set = function(e, t, r) {
          return t.duration = 0, t.parent = this, Qr(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Oo(e, t, wn(this, r), 1), this
        }, r.call = function(e, t, r) {
          return fn(this, Oo.delayedCall(0, e, t), r)
        }, r.staggerTo = function(e, t, r, n, o, i, s) {
          return r.duration = t, r.stagger = r.stagger || n, r.onComplete = i, r.onCompleteParams = s, r.parent = this, new Oo(e, r, wn(this, o)), this
        }, r.staggerFrom = function(e, t, r, n, o, i, s) {
          return r.runBackwards = 1, Qr(r).immediateRender = nr(r.immediateRender), this.staggerTo(e, t, r, n, o, i, s)
        }, r.staggerFromTo = function(e, t, r, n, o, i, s, a) {
          return n.startAt = r, Qr(n).immediateRender = nr(n.immediateRender), this.staggerTo(e, t, n, o, i, s, a)
        }, r.render = function(e, t, r) {
          var n, o, i, s, a, l, u, c, d, f, p, h, m = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            g = e <= 0 ? 0 : Fr(e),
            b = this._zTime < 0 != e < 0 && (this._initted || !y);
          if (this !== kt && g > v && e >= 0 && (g = v), g !== this._tTime || r || b) {
            if (m !== this._time && y && (g += this._time - m, e += this._time - m), n = g, d = this._start, l = !(c = this._ts), b && (y || (m = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (p = this._yoyo, a = y + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * a + e, t, r);
              if (n = Fr(g % a), g === v ? (s = this._repeat, n = y) : ((s = ~~(f = Fr(g / a))) && s === f && (n = y, s--), n > y && (n = y)), f = an(this._tTime, a), !m && this._tTime && f !== s && this._tTime - f * a - this._dur <= 0 && (f = s), p && 1 & s && (n = y - n, h = 1), s !== f && !this._lock) {
                var w = p && 1 & f,
                  _ = w === (p && 1 & s);
                if (s < f && (w = !w), m = w ? 0 : g % y ? y : g, this._lock = 1, this.render(m || (h ? 0 : Fr(s * a)), t, !y)._lock = 0, this._tTime = g, !t && this.parent && An(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1, f = s), m && m !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (y = this._dur, v = this._tDur, _ && (this._lock = 2, m = w ? y : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                oo(this, h)
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
              }(this, Fr(m), Fr(n)), u && (g -= n - (n = u._start))), this._tTime = g, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, m = 0), !m && g && y && !t && !f && (An(this, "onStart"), this._tTime !== g)) return this;
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
                    if (o.render(o._ts > 0 ? (x - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (x - o._start) * o._ts, t, r || jt && Hr(o)), n !== this._time || !this._ts && !l) {
                      u = 0, i && (g += this._zTime = x ? -1e-8 : Xt);
                      break
                    }
                  }
                  o = i
                }
              }
            if (u && !t && (this.pause(), u.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1, this._ts)) return this._start = d, un(this), this.render(e, t, r);
            this._onUpdate && !t && An(this, "onUpdate", !0), (g === v && this._tTime >= this.totalDuration() || !g && m) && (d !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((e || !y) && (g === v && this._ts > 0 || !g && this._ts < 0) && tn(this, 1), t || e < 0 && !m || !g && !m && v || (An(this, g === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, r.add = function(e, t) {
          var r = this;
          if (er(t) || (t = wn(this, t, e)), !(e instanceof fo)) {
            if (ar(e)) return e.forEach(function(e) {
              return r.add(e, t)
            }), this;
            if (Qt(e)) return this.addLabel(e, t);
            if (!Jt(e)) return this;
            e = Oo.delayedCall(0, e)
          }
          return this !== e ? fn(this, e, t) : this
        }, r.getChildren = function(e, t, r, n) {
          void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === n && (n = -Ht);
          for (var o = [], i = this._first; i;) i._start >= n && (i instanceof Oo ? t && o.push(i) : (r && o.push(i), e && o.push.apply(o, i.getChildren(!0, t, r)))), i = i._next;
          return o
        }, r.getById = function(e) {
          for (var t = this.getChildren(1, 1, 1), r = t.length; r--;)
            if (t[r].vars.id === e) return t[r]
        }, r.remove = function(e) {
          return Qt(e) ? this.removeLabel(e) : Jt(e) ? this.killTweensOf(e) : (e.parent === this && en(this, e), e === this._recent && (this._recent = this._last), rn(this))
        }, r.totalTime = function(t, r) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Fr(Yn.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(e, t) {
          return this.labels[e] = wn(this, t), this
        }, r.removeLabel = function(e) {
          return delete this.labels[e], this
        }, r.addPause = function(e, t, r) {
          var n = Oo.delayedCall(0, t || Cr, r);
          return n.data = "isPause", this._hasPause = 1, fn(this, n, wn(this, e))
        }, r.removePause = function(e) {
          var t = this._first;
          for (e = wn(this, e); t;) t._start === e && "isPause" === t.data && tn(t), t = t._next
        }, r.killTweensOf = function(e, t, r) {
          for (var n = this.getTweensOf(e, r), o = n.length; o--;) ho !== n[o] && n[o].kill(e, t);
          return this
        }, r.getTweensOf = function(e, t) {
          for (var r, n = [], o = Sn(e), i = this._first, s = er(t); i;) i instanceof Oo ? Br(i._targets, o) && (s ? (!ho || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && n.push(i) : (r = i.getTweensOf(o, t)).length && n.push.apply(n, r), i = i._next;
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
            c = Oo.to(n, $r({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration: t.duration || Math.abs((o - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || Xt,
              onStart: function() {
                if (n.pause(), !r) {
                  var e = t.duration || Math.abs((o - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                  c._dur !== e && yn(c, e, 0, 1).render(c._time, !0, !0), r = 1
                }
                a && a.apply(c, l || [])
              }
            }, t));
          return u ? c.render(0) : c
        }, r.tweenFromTo = function(e, t, r) {
          return this.tweenTo(t, $r({
            startAt: {
              time: wn(this, e)
            }
          }, r))
        }, r.recent = function() {
          return this._recent
        }, r.nextLabel = function(e) {
          return void 0 === e && (e = this._time), zn(this, wn(this, e))
        }, r.previousLabel = function(e) {
          return void 0 === e && (e = this._time), zn(this, wn(this, e), 1)
        }, r.currentLabel = function(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + Xt)
        }, r.shiftChildren = function(e, t, r) {
          void 0 === r && (r = 0);
          var n, o = this._first,
            i = this.labels;
          for (e = Fr(e); o;) o._start >= r && (o._start += e, o._end += e), o = o._next;
          if (t)
            for (n in i) i[n] >= r && (i[n] += e);
          return rn(this)
        }, r.invalidate = function(t) {
          var r = this._first;
          for (this._lock = 0; r;) r.invalidate(t), r = r._next;
          return e.prototype.invalidate.call(this, t)
        }, r.clear = function(e) {
          void 0 === e && (e = !0);
          for (var t, r = this._first; r;) t = r._next, this.remove(r), r = t;
          return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), rn(this)
        }, r.totalDuration = function(e) {
          var t, r, n, o = 0,
            i = this,
            s = i._last,
            a = Ht;
          if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e));
          if (i._dirty) {
            for (n = i.parent; s;) t = s._prev, s._dirty && s.totalDuration(), (r = s._start) > a && i._sort && s._ts && !i._lock ? (i._lock = 1, fn(i, s, r - s._delay, 1)._lock = 0) : a = r, r < 0 && s._ts && (o -= r, (!n && !i._dp || n && n.smoothChildTiming) && (i._start += Fr(r / i._ts), i._time -= r, i._tTime -= r), i.shiftChildren(-r, !1, -Infinity), a = 0), s._end > o && s._ts && (o = s._end), s = t;
            yn(i, i === kt && i._time > o ? i._time : o, 1, 1), i._dirty = 0
          }
          return i._tDur
        }, t.updateRoot = function(e) {
          if (kt._ts && (Xr(kt, ln(e, kt)), Nt = Yn.frame), Yn.frame >= Dr) {
            Dr += Bt.autoSleep || 120;
            var t = kt._first;
            if ((!t || !t._ts) && Bt.autoSleep && Yn._listeners.length < 2) {
              for (; t && !t._ts;) t = t._next;
              t || Yn.sleep()
            }
          }
        }, t
      }(fo);
      $r(po.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var ho, mo, vo = function(e, t, r, n, o, i, s) {
          var a, l, u, c, d, f, p, h, m = new Ao(this._pt, e, t, 0, 1, Do, null, o),
            v = 0,
            y = 0;
          for (m.b = r, m.e = n, r += "", (p = ~(n += "").indexOf("random(")) && (n = Ln(n)), i && (i(h = [r, n], e, t), r = h[0], n = h[1]), l = r.match(pr) || []; a = pr.exec(n);) c = a[0], d = n.substring(v, a.index), u ? u = (u + 1) % 5 : "rgba(" === d.substr(-5) && (u = 1), c !== l[y++] && (f = parseFloat(l[y - 1]) || 0, m._pt = {
            _next: m._pt,
            p: d || 1 === y ? d : ",",
            s: f,
            c: "=" === c.charAt(1) ? qr(f, c) - f : parseFloat(c) - f,
            m: u && u < 4 ? Math.round : 0
          }, v = pr.lastIndex);
          return m.c = v < n.length ? n.substring(v, n.length) : "", m.fp = s, (hr.test(n) || p) && (m.e = 0), this._pt = m, m
        },
        yo = function(e, t, r, n, o, i, s, a, l, u) {
          Jt(n) && (n = n(o || 0, e, i));
          var c, d = e[t],
            f = "get" !== r ? r : Jt(d) ? l ? e[t.indexOf("set") || !Jt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : d,
            p = Jt(d) ? l ? So : jo : Po;
          if (Qt(n) && (~n.indexOf("random(") && (n = Ln(n)), "=" === n.charAt(1) && ((c = qr(f, n) + (On(f) || 0)) || 0 === c) && (n = c)), !u || f !== n || mo) return isNaN(f * n) || "" === n ? (!d && !(t in e) && wr(t, n), vo.call(this, e, t, f, n, p, a || Bt.stringFilter, l)) : (c = new Ao(this._pt, e, t, +f || 0, n - (f || 0), "boolean" == typeof d ? Ro : To, 0, p), l && (c.fp = l), s && c.modifier(s, this, e), this._pt = c)
        },
        go = function(e, t, r, n, o, i) {
          var s, a, l, u;
          if (Tr[e] && !1 !== (s = new Tr[e]).init(o, s.rawVars ? t[e] : function(e, t, r, n, o) {
              if (Jt(e) && (e = _o(e, o, t, r, n)), !rr(e) || e.style && e.nodeType || ar(e) || sr(e)) return Qt(e) ? _o(e, o, t, r, n) : e;
              var i, s = {};
              for (i in e) s[i] = _o(e[i], o, t, r, n);
              return s
            }(t[e], n, o, i, r), r, n, i) && (r._pt = a = new Ao(r._pt, o, e, 0, 1, s.render, s, 0, s.priority), r !== It))
            for (l = r._ptLookup[r._targets.indexOf(o)], u = s._props.length; u--;) l[s._props[u]] = a;
          return s
        },
        bo = function e(t, r, n) {
          var o, i, s, a, l, u, c, d, f, p, h, m, v, y = t.vars,
            g = y.ease,
            b = y.startAt,
            w = y.immediateRender,
            _ = y.lazy,
            x = y.onUpdate,
            C = y.runBackwards,
            O = y.yoyoEase,
            P = y.keyframes,
            j = y.autoRevert,
            S = t._dur,
            k = t._startAt,
            E = t._targets,
            T = t.parent,
            R = T && "nested" === T.data ? T.vars.targets : E,
            D = "auto" === t._overwrite && !Pt,
            N = t.timeline;
          if (N && (!P || !g) && (g = "none"), t._ease = io(g, Wt.ease), t._yEase = O ? no(io(!0 === O ? g : O, Wt.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !N && !!y.runBackwards, !N || P && !y.stagger) {
            if (m = (d = E[0] ? Mr(E[0]).harness : 0) && y[d.prop], o = Yr(y, Sr), k && (k._zTime < 0 && k.progress(1), r < 0 && C && w && !j ? k.render(-1, !0) : k.revert(C && S ? Pr : Or), k._lazy = 0), b) {
              if (tn(t._startAt = Oo.set(E, $r({
                  data: "isStart",
                  overwrite: !1,
                  parent: T,
                  immediateRender: !0,
                  lazy: !k && nr(_),
                  startAt: null,
                  delay: 0,
                  onUpdate: x && function() {
                    return An(t, "onUpdate")
                  },
                  stagger: 0
                }, b))), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (jt || !w && !j) && t._startAt.revert(Pr), w && S && r <= 0 && n <= 0) return void(r && (t._zTime = r))
            } else if (C && S && !k)
              if (r && (w = !1), s = $r({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: w && !k && nr(_),
                  immediateRender: w,
                  stagger: 0,
                  parent: T
                }, o), m && (s[d.prop] = m), tn(t._startAt = Oo.set(E, s)), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (jt ? t._startAt.revert(Pr) : t._startAt.render(-1, !0)), t._zTime = r, w) {
                if (!r) return
              } else e(t._startAt, Xt, Xt);
            for (t._pt = t._ptCache = 0, _ = S && nr(_) || _ && !S, i = 0; i < E.length; i++) {
              if (c = (l = E[i])._gsap || Lr(E)[i]._gsap, t._ptLookup[i] = p = {}, Er[c.id] && kr.length && Wr(), h = R === E ? i : R.indexOf(l), d && !1 !== (f = new d).init(l, m || o, t, h, R) && (t._pt = a = new Ao(t._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(e) {
                  p[e] = a
                }), f.priority && (u = 1)), !d || m)
                for (s in o) Tr[s] && (f = go(s, o, t, h, l, R)) ? f.priority && (u = 1) : p[s] = a = yo.call(t, l, s, "get", o[s], h, R, 0, y.stringFilter);
              t._op && t._op[i] && t.kill(l, t._op[i]), D && t._pt && (ho = t, kt.killTweensOf(l, p, t.globalTime(r)), v = !t.parent, ho = 0), t._pt && _ && (Er[c.id] = 1)
            }
            u && zo(t), t._onInit && t._onInit(t)
          }
          t._onUpdate = x, t._initted = (!t._op || t._pt) && !v, P && r <= 0 && N.render(Ht, !0, !0)
        },
        wo = function(e, t, r, n) {
          var o, i, s = t.ease || n || "power1.inOut";
          if (ar(t)) i = r[e] || (r[e] = []), t.forEach(function(e, r) {
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
        _o = function(e, t, r, n, o) {
          return Jt(e) ? e.call(t, r, n, o) : Qt(e) && ~e.indexOf("random(") ? Ln(e) : e
        },
        xo = Ir + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Co = {};
      Ar(xo + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
        return Co[e] = 1
      });
      var Oo = function(e) {
        function t(t, r, n, o) {
          var i;
          "number" == typeof r && (n.duration = r, r = n, n = null);
          var s, a, l, u, c, d, f, p, h = (i = e.call(this, o ? r : Qr(r)) || this).vars,
            m = h.duration,
            v = h.delay,
            y = h.immediateRender,
            g = h.stagger,
            b = h.overwrite,
            w = h.keyframes,
            _ = h.defaults,
            x = h.scrollTrigger,
            C = h.yoyoEase,
            O = r.parent || kt,
            P = (ar(t) || sr(t) ? er(t[0]) : "length" in r) ? [t] : Sn(t);
          if (i._targets = P.length ? Lr(P) : _r("GSAP target " + t + " not found. https://gsap.com", !Bt.nullTargetWarn) || [], i._ptLookup = [], i._overwrite = b, w || g || ir(m) || ir(v)) {
            if (r = i.vars, (s = i.timeline = new po({
                data: "nested",
                defaults: _ || {},
                targets: O && "nested" === O.data ? O.vars.targets : P
              })).kill(), s.parent = s._dp = Ct(i), s._start = 0, g || ir(m) || ir(v)) {
              if (u = P.length, f = g && Tn(g), rr(g))
                for (c in g) ~xo.indexOf(c) && (p || (p = {}), p[c] = g[c]);
              for (a = 0; a < u; a++)(l = Yr(r, Co)).stagger = 0, C && (l.yoyoEase = C), p && Zr(l, p), d = P[a], l.duration = +_o(m, Ct(i), a, d, P), l.delay = (+_o(v, Ct(i), a, d, P) || 0) - i._delay, !g && 1 === u && l.delay && (i._delay = v = l.delay, i._start += v, l.delay = 0), s.to(d, l, f ? f(a, d, P) : 0), s._ease = Jn.none;
              s.duration() ? m = v = 0 : i.timeline = 0
            } else if (w) {
              Qr($r(s.vars.defaults, {
                ease: "none"
              })), s._ease = io(w.ease || r.ease || "none");
              var j, S, k, E = 0;
              if (ar(w)) w.forEach(function(e) {
                return s.to(P, e, ">")
              }), s.duration();
              else {
                for (c in l = {}, w) "ease" === c || "easeEach" === c || wo(c, w[c], l, w.easeEach);
                for (c in l)
                  for (j = l[c].sort(function(e, t) {
                      return e.t - t.t
                    }), E = 0, a = 0; a < j.length; a++)(k = {
                    ease: (S = j[a]).e,
                    duration: (S.t - (a ? j[a - 1].t : 0)) / 100 * m
                  })[c] = S.v, s.to(P, k, E), E += k.duration;
                s.duration() < m && s.to({}, {
                  duration: m - s.duration()
                })
              }
            }
            m || i.duration(m = s.duration())
          } else i.timeline = 0;
          return !0 !== b || Pt || (ho = Ct(i), kt.killTweensOf(P), ho = 0), fn(O, Ct(i), n), r.reversed && i.reverse(), r.paused && i.paused(!0), (y || !m && !w && i._start === Fr(O._time) && nr(y) && on(Ct(i)) && "nested" !== O.data) && (i._tTime = -1e-8, i.render(Math.max(0, -v) || 0)), x && pn(Ct(i), x), i
        }
        Ot(t, e);
        var r = t.prototype;
        return r.render = function(e, t, r) {
          var n, o, i, s, a, l, u, c, d, f = this._time,
            p = this._tDur,
            h = this._dur,
            m = e < 0,
            v = e > p - Xt && !m ? p : e < Xt ? 0 : e;
          if (h) {
            if (v !== this._tTime || !e || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m || this._lazy) {
              if (n = v, c = this.timeline, this._repeat) {
                if (s = h + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * s + e, t, r);
                if (n = Fr(v % s), v === p ? (i = this._repeat, n = h) : (i = ~~(a = Fr(v / s))) && i === a ? (n = h, i--) : n > h && (n = h), (l = this._yoyo && 1 & i) && (d = this._yEase, n = h - n), a = an(this._tTime, s), n === f && !r && this._initted && i === a) return this._tTime = v, this;
                i !== a && (c && this._yEase && oo(c, l), this.vars.repeatRefresh && !l && !this._lock && n !== s && this._initted && (this._lock = r = 1, this.render(Fr(s * i), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (hn(this, m ? e : n, r, t, v)) return this._tTime = 0, this;
                if (!(f === this._time || r && this.vars.repeatRefresh && i !== a)) return this;
                if (h !== this._dur) return this.render(e, t, r)
              }
              if (this._tTime = v, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (d || this._ease)(n / h), this._from && (this.ratio = u = 1 - u), !f && v && !t && !a && (An(this, "onStart"), this._tTime !== v)) return this;
              for (o = this._pt; o;) o.r(u, o.d), o = o._next;
              c && c.render(e < 0 ? e : c._dur * c._ease(n / this._dur), t, r) || this._startAt && (this._zTime = e), this._onUpdate && !t && (m && nn(this, e, 0, r), An(this, "onUpdate")), this._repeat && i !== a && this.vars.onRepeat && !t && this.parent && An(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (m && !this._onUpdate && nn(this, e, 0, !0), (e || !h) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && tn(this, 1), t || m && !f || !(v || f || l) || (An(this, v === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < p && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(e, t, r, n) {
            var o, i, s, a = e.ratio,
              l = t < 0 || !t && (!e._start && mn(e) && (e._initted || !vn(e)) || (e._ts < 0 || e._dp._ts < 0) && !vn(e)) ? 0 : 1,
              u = e._rDelay,
              c = 0;
            if (u && e._repeat && (c = Cn(0, e._tDur, t), i = an(c, u), e._yoyo && 1 & i && (l = 1 - l), i !== an(e._tTime, u) && (a = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== a || jt || n || e._zTime === Xt || !t && e._zTime) {
              if (!e._initted && hn(e, t, n, r, c)) return;
              for (s = e._zTime, e._zTime = t || (r ? Xt : 0), r || (r = t && !s), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = c, o = e._pt; o;) o.r(l, o.d), o = o._next;
              t < 0 && nn(e, t, 0, !0), e._onUpdate && !r && An(e, "onUpdate"), c && e._repeat && !r && e.parent && An(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && tn(e, 1), r || jt || (An(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = t)
          }(this, e, t, r);
          return this
        }, r.targets = function() {
          return this._targets
        }, r.invalidate = function(t) {
          return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
        }, r.resetTo = function(e, t, r, n, o) {
          Lt || Yn.wake(), this._ts || this.play();
          var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || bo(this, i),
            function(e, t, r, n, o, i, s, a) {
              var l, u, c, d, f = (e._pt && e._ptCache || (e._ptCache = {}))[t];
              if (!f)
                for (f = e._ptCache[t] = [], c = e._ptLookup, d = e._targets.length; d--;) {
                  if ((l = c[d][t]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                  if (!l) return mo = 1, e.vars[t] = "+=0", bo(e, s), mo = 0, a ? _r(t + " not eligible for reset") : 1;
                  f.push(l)
                }
              for (d = f.length; d--;)(l = (u = f[d])._pt || u).s = !n && 0 !== n || o ? l.s + (n || 0) + i * l.c : n, l.c = r - l.s, u.e && (u.e = Vr(r) + On(u.e)), u.b && (u.b = l.s + On(u.b))
            }(this, e, t, r, n, this._ease(i / this._dur), i, o) ? this.resetTo(e, t, r, n, 1) : (cn(this, 0), this.parent || Jr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(e, t) {
          if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? Vn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!jt), this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, ho && !0 !== ho.vars.overwrite)._first || Vn(this), this.parent && r !== this.timeline.totalDuration() && yn(this, this._dur * this.timeline._tDur / r, 0, 1), this
          }
          var n, o, i, s, a, l, u, c = this._targets,
            d = e ? Sn(e) : c,
            f = this._ptLookup,
            p = this._pt;
          if ((!t || "all" === t) && function(e, t) {
              for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r];);
              return r < 0
            }(c, d)) return "all" === t && (this._pt = 0), Vn(this);
          for (n = this._op = this._op || [], "all" !== t && (Qt(t) && (a = {}, Ar(t, function(e) {
              return a[e] = 1
            }), t = a), t = function(e, t) {
              var r, n, o, i, s = e[0] ? Mr(e[0]).harness : 0,
                a = s && s.aliases;
              if (!a) return t;
              for (n in r = Zr({}, t), a)
                if (n in r)
                  for (o = (i = a[n].split(",")).length; o--;) r[i[o]] = r[n];
              return r
            }(c, t)), u = c.length; u--;)
            if (~d.indexOf(c[u]))
              for (a in o = f[u], "all" === t ? (n[u] = t, s = o, i = {}) : (i = n[u] = n[u] || {}, s = t), s)(l = o && o[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || en(this, l, "_pt"), delete o[a]), "all" !== i && (i[a] = 1);
          return this._initted && !this._pt && p && Vn(this), this
        }, t.to = function(e, r) {
          return new t(e, r, arguments[2])
        }, t.from = function(e, t) {
          return _n(1, arguments)
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
          return _n(2, arguments)
        }, t.set = function(e, r) {
          return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(e, r)
        }, t.killTweensOf = function(e, t, r) {
          return kt.killTweensOf(e, t, r)
        }, t
      }(fo);
      $r(Oo.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), Ar("staggerTo,staggerFrom,staggerFromTo", function(e) {
        Oo[e] = function() {
          var t = new po,
            r = Pn.call(arguments, 0);
          return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r)
        }
      });
      var Po = function(e, t, r) {
          return e[t] = r
        },
        jo = function(e, t, r) {
          return e[t](r)
        },
        So = function(e, t, r, n) {
          return e[t](n.fp, r)
        },
        ko = function(e, t, r) {
          return e.setAttribute(t, r)
        },
        Eo = function(e, t) {
          return Jt(e[t]) ? jo : tr(e[t]) && e.setAttribute ? ko : Po
        },
        To = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
        },
        Ro = function(e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        },
        Do = function(e, t) {
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
        No = function(e, t) {
          for (var r = t._pt; r;) r.r(e, r.d), r = r._next
        },
        Io = function(e, t, r, n) {
          for (var o, i = this._pt; i;) o = i._next, i.p === n && i.modifier(e, t, r), i = o
        },
        Lo = function(e) {
          for (var t, r, n = this._pt; n;) r = n._next, n.p === e && !n.op || n.op === e ? en(this, n, "_pt") : n.dep || (t = 1), n = r;
          return !t
        },
        Mo = function(e, t, r, n) {
          n.mSet(e, t, n.m.call(n.tween, r, n.mt), n)
        },
        zo = function(e) {
          for (var t, r, n, o, i = e._pt; i;) {
            for (t = i._next, r = n; r && r.pr > i.pr;) r = r._next;
            (i._prev = r ? r._prev : o) ? i._prev._next = i: n = i, (i._next = r) ? r._prev = i : o = i, i = t
          }
          e._pt = n
        },
        Ao = function() {
          function e(e, t, r, n, o, i, s, a, l) {
            this.t = t, this.s = n, this.c = o, this.p = r, this.r = i || To, this.d = s || this, this.set = a || Po, this.pr = l || 0, this._next = e, e && (e._prev = this)
          }
          return e.prototype.modifier = function(e, t, r) {
            this.mSet = this.mSet || this.set, this.set = Mo, this.m = e, this.mt = r, this.tween = t
          }, e
        }();
      Ar(Ir + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return Sr[e] = 1
      }), yr.TweenMax = yr.TweenLite = Oo, yr.TimelineLite = yr.TimelineMax = po, kt = new po({
        sortChildren: !1,
        defaults: Wt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), Bt.stringFilter = Gn;
      var Vo = [],
        Fo = {},
        qo = [],
        Bo = 0,
        Wo = 0,
        Ho = function(e) {
          return (Fo[e] || qo).map(function(e) {
            return e()
          })
        },
        Xo = function() {
          var e = Date.now(),
            t = [];
          e - Bo > 2 && (Ho("matchMediaInit"), Vo.forEach(function(e) {
            var r, n, o, i, s = e.queries,
              a = e.conditions;
            for (n in s)(r = Et.matchMedia(s[n]).matches) && (o = 1), r !== a[n] && (a[n] = r, i = 1);
            i && (e.revert(), o && t.push(e))
          }), Ho("matchMediaRevert"), t.forEach(function(e) {
            return e.onMatch(e, function(t) {
              return e.add(null, t)
            })
          }), Bo = e, Ho("matchMedia"))
        },
        Uo = function() {
          function e(e, t) {
            this.selector = t && kn(t), this.data = [], this._r = [], this.isReverted = !1, this.id = Wo++, e && this.add(e)
          }
          var t = e.prototype;
          return t.add = function(e, t, r) {
            Jt(e) && (r = t, t = e, e = Jt);
            var n = this,
              o = function() {
                var e, o = St,
                  i = n.selector;
                return o && o !== n && o.data.push(n), r && (n.selector = kn(r)), St = n, e = t.apply(n, arguments), Jt(e) && n._r.push(e), St = o, n.selector = i, n.isReverted = !1, e
              };
            return n.last = o, e === Jt ? o(n, function(e) {
              return n.add(null, e)
            }) : e ? n[e] = o : o
          }, t.ignore = function(e) {
            var t = St;
            St = null, e(this), St = t
          }, t.getTweens = function() {
            var t = [];
            return this.data.forEach(function(r) {
              return r instanceof e ? t.push.apply(t, r.getTweens()) : r instanceof Oo && !(r.parent && "nested" === r.parent.data) && t.push(r)
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
                  }), o = r.data.length; o--;)(t = r.data[o]) instanceof po ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof Oo) && t.revert && t.revert(e);
                r._r.forEach(function(t) {
                  return t(e, r)
                }), r.isReverted = !0
              }() : this.data.forEach(function(e) {
                return e.kill && e.kill()
              }), this.clear(), t)
              for (var n = Vo.length; n--;) Vo[n].id === this.id && Vo.splice(n, 1)
          }, t.revert = function(e) {
            this.kill(e || {})
          }, e
        }(),
        Ko = function() {
          function e(e) {
            this.contexts = [], this.scope = e, St && St.data.push(this)
          }
          var t = e.prototype;
          return t.add = function(e, t, r) {
            rr(e) || (e = {
              matches: e
            });
            var n, o, i, s = new Uo(0, r || this.scope),
              a = s.conditions = {};
            for (o in St && !s.selector && (s.selector = St.selector), this.contexts.push(s), t = s.add("onMatch", t), s.queries = e, e) "all" === o ? i = 1 : (n = Et.matchMedia(e[o])) && (Vo.indexOf(s) < 0 && Vo.push(s), (a[o] = n.matches) && (i = 1), n.addListener ? n.addListener(Xo) : n.addEventListener("change", Xo));
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
              return qn(e)
            })
          },
          timeline: function(e) {
            return new po(e)
          },
          getTweensOf: function(e, t) {
            return kt.getTweensOf(e, t)
          },
          getProperty: function(e, t, r, n) {
            Qt(e) && (e = Sn(e)[0]);
            var o = Mr(e || {}).get,
              i = r ? Kr : Ur;
            return "native" === r && (r = ""), e ? t ? i((Tr[t] && Tr[t].get || o)(e, t, r, n)) : function(t, r, n) {
              return i((Tr[t] && Tr[t].get || o)(e, t, r, n))
            } : e
          },
          quickSetter: function(e, t, r) {
            if ((e = Sn(e)).length > 1) {
              var n = e.map(function(e) {
                  return Yo.quickSetter(e, t, r)
                }),
                o = n.length;
              return function(e) {
                for (var t = o; t--;) n[t](e)
              }
            }
            e = e[0] || {};
            var i = Tr[t],
              s = Mr(e),
              a = s.harness && (s.harness.aliases || {})[t] || t,
              l = i ? function(t) {
                var n = new i;
                It._pt = 0, n.init(e, r ? t + r : t, It, 0, [e]), n.render(1, n), It._pt && No(1, It)
              } : s.set(e, a);
            return i ? l : function(t) {
              return l(e, a, r ? t + r : t, s, 1)
            }
          },
          quickTo: function(e, t, r) {
            var n, o = Yo.to(e, $r(((n = {})[t] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})),
              i = function(e, r, n) {
                return o.resetTo(t, e, r, n)
              };
            return i.tween = o, i
          },
          isTweening: function(e) {
            return kt.getTweensOf(e, !0).length > 0
          },
          defaults: function(e) {
            return e && e.ease && (e.ease = io(e.ease, Wt.ease)), Gr(Wt, e || {})
          },
          config: function(e) {
            return Gr(Bt, e || {})
          },
          registerEffect: function(e) {
            var t = e.name,
              r = e.effect,
              n = e.plugins,
              o = e.defaults,
              i = e.extendTimeline;
            (n || "").split(",").forEach(function(e) {
              return e && !Tr[e] && !yr[e] && _r(t + " effect requires " + e + " plugin.")
            }), Rr[t] = function(e, t, n) {
              return r(Sn(e), $r(t || {}, o), n)
            }, i && (po.prototype[t] = function(e, r, n) {
              return this.add(Rr[t](e, rr(r) ? r : (n = r) && {}, this), n)
            })
          },
          registerEase: function(e, t) {
            Jn[e] = io(t)
          },
          parseEase: function(e, t) {
            return arguments.length ? io(e, t) : Jn
          },
          getById: function(e) {
            return kt.getById(e)
          },
          exportRoot: function(e, t) {
            void 0 === e && (e = {});
            var r, n, o = new po(e);
            for (o.smoothChildTiming = nr(e.smoothChildTiming), kt.remove(o), o._dp = 0, o._time = o._tTime = kt._time, r = kt._first; r;) n = r._next, !t && !r._dur && r instanceof Oo && r.vars.onComplete === r._targets[0] || fn(o, r, r._start - r._delay), r = n;
            return fn(kt, o, 0), o
          },
          context: function(e, t) {
            return e ? new Uo(e, t) : St
          },
          matchMedia: function(e) {
            return new Ko(e)
          },
          matchMediaRefresh: function() {
            return Vo.forEach(function(e) {
              var t, r, n = e.conditions;
              for (r in n) n[r] && (n[r] = !1, t = 1);
              t && e.revert()
            }) || Xo()
          },
          addEventListener: function(e, t) {
            var r = Fo[e] || (Fo[e] = []);
            ~r.indexOf(t) || r.push(t)
          },
          removeEventListener: function(e, t) {
            var r = Fo[e],
              n = r && r.indexOf(t);
            n >= 0 && r.splice(n, 1)
          },
          utils: {
            wrap: function e(t, r, n) {
              var o = r - t;
              return ar(t) ? In(t, e(0, t.length), r) : xn(n, function(e) {
                return (o + (e - t) % o) % o + t
              })
            },
            wrapYoyo: function e(t, r, n) {
              var o = r - t,
                i = 2 * o;
              return ar(t) ? In(t, e(0, t.length - 1), r) : xn(n, function(e) {
                return t + ((e = (i + (e - t) % i) % i || 0) > o ? i - e : e)
              })
            },
            distribute: Tn,
            random: Nn,
            snap: Dn,
            normalize: function(e, t, r) {
              return Mn(e, t, 0, 1, r)
            },
            getUnit: On,
            clamp: function(e, t, r) {
              return xn(r, function(r) {
                return Cn(e, t, r)
              })
            },
            splitColor: Xn,
            toArray: Sn,
            selector: kn,
            mapRange: Mn,
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
                return e(parseFloat(r)) + (t || On(r))
              }
            },
            interpolate: function e(t, r, n, o) {
              var i = isNaN(t + r) ? 0 : function(e) {
                return (1 - e) * t + e * r
              };
              if (!i) {
                var s, a, l, u, c, d = Qt(t),
                  f = {};
                if (!0 === n && (o = 1) && (n = null), d) t = {
                  p: t
                }, r = {
                  p: r
                };
                else if (ar(t) && !ar(r)) {
                  for (l = [], u = t.length, c = u - 2, a = 1; a < u; a++) l.push(e(t[a - 1], t[a]));
                  u--, i = function(e) {
                    e *= u;
                    var t = Math.min(c, ~~e);
                    return l[t](e - t)
                  }, n = r
                } else o || (t = Zr(ar(t) ? [] : {}, t));
                if (!l) {
                  for (s in r) yo.call(f, t, s, "get", r[s]);
                  i = function(e) {
                    return No(e, f) || (d ? t.p : t)
                  }
                }
              }
              return xn(n, i)
            },
            shuffle: En
          },
          install: br,
          effects: Rr,
          ticker: Yn,
          updateRoot: po.updateRoot,
          plugins: Tr,
          globalTimeline: kt,
          core: {
            PropTween: Ao,
            globals: xr,
            Tween: Oo,
            Timeline: po,
            Animation: fo,
            getCache: Mr,
            _removeLinkedListItem: en,
            reverting: function() {
              return jt
            },
            context: function(e) {
              return e && St && (St.data.push(e), e._ctx = St), St
            },
            suppressOverwrites: function(e) {
              return Pt = e
            }
          }
        };
      Ar("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return $o[e] = Oo[e]
      }), Yn.add(po.updateRoot), It = $o.to({}, {
        duration: 0
      });
      var Zo = function(e, t) {
          for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
          return r
        },
        Go = function(e, t) {
          return {
            name: e,
            headless: 1,
            rawVars: 1,
            init: function(e, r, n) {
              n._onInit = function(e) {
                var n, o;
                if (Qt(r) && (n = {}, Ar(r, function(e) {
                    return n[e] = 1
                  }), r = n), t) {
                  for (o in n = {}, r) n[o] = t(r[o]);
                  r = n
                }! function(e, t) {
                  var r, n, o, i = e._targets;
                  for (r in t)
                    for (n = i.length; n--;)(o = e._ptLookup[n][r]) && (o = o.d) && (o._pt && (o = Zo(o, r)), o && o.modifier && o.modifier(t[r], e, i[n], r))
                }(e, r)
              }
            }
          }
        },
        Yo = $o.registerPlugin({
          name: "attr",
          init: function(e, t, r, n, o) {
            var i, s, a;
            for (i in this.tween = r, t) a = e.getAttribute(i) || "", (s = this.add(e, "setAttribute", (a || 0) + "", t[i], n, o, 0, 0, i)).op = i, s.b = a, this._props.push(i)
          },
          render: function(e, t) {
            for (var r = t._pt; r;) jt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
          }
        }, {
          name: "endArray",
          headless: 1,
          init: function(e, t) {
            for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
          }
        }, Go("roundProps", Rn), Go("modifiers"), Go("snap", Dn)) || $o;
      Oo.version = po.version = Yo.version = "3.14.2", Dt = 1, or() && Qn(), Jn.Power0, Jn.Power1, Jn.Power2, Jn.Power3, Jn.Power4, Jn.Linear, Jn.Quad, Jn.Cubic, Jn.Quart, Jn.Quint, Jn.Strong, Jn.Elastic, Jn.Back, Jn.SteppedEase, Jn.Bounce, Jn.Sine, Jn.Expo, Jn.Circ;
      var Qo, Jo, ei, ti, ri, ni, oi, ii, si = {},
        ai = 180 / Math.PI,
        li = Math.PI / 180,
        ui = Math.atan2,
        ci = /([A-Z])/g,
        di = /(left|right|width|margin|padding|x)/i,
        fi = /[\s,\(]\S/,
        pi = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        hi = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        mi = function(e, t) {
          return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        vi = function(e, t) {
          return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        yi = function(e, t) {
          return t.set(t.t, t.p, 1 === e ? t.e : e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        gi = function(e, t) {
          var r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
        },
        bi = function(e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t)
        },
        wi = function(e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        },
        _i = function(e, t, r) {
          return e.style[t] = r
        },
        xi = function(e, t, r) {
          return e.style.setProperty(t, r)
        },
        Ci = function(e, t, r) {
          return e._gsap[t] = r
        },
        Oi = function(e, t, r) {
          return e._gsap.scaleX = e._gsap.scaleY = r
        },
        Pi = function(e, t, r, n, o) {
          var i = e._gsap;
          i.scaleX = i.scaleY = r, i.renderTransform(o, i)
        },
        ji = function(e, t, r, n, o) {
          var i = e._gsap;
          i[t] = r, i.renderTransform(o, i)
        },
        Si = "transform",
        ki = Si + "Origin",
        Ei = function e(t, r) {
          var n = this,
            o = this.target,
            i = o.style,
            s = o._gsap;
          if (t in si && i) {
            if (this.tfm = this.tfm || {}, "transform" === t) return pi.transform.split(",").forEach(function(t) {
              return e.call(n, t, r)
            });
            if (~(t = pi[t] || t).indexOf(",") ? t.split(",").forEach(function(e) {
                return n.tfm[e] = Ki(o, e)
              }) : this.tfm[t] = s.x ? s[t] : Ki(o, t), t === ki && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(Si) >= 0) return;
            s.svg && (this.svgo = o.getAttribute("data-svg-origin"), this.props.push(ki, r, "")), t = Si
          }(i || r) && this.props.push(t, r, i[t])
        },
        Ti = function(e) {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        Ri = function() {
          var e, t, r = this.props,
            n = this.target,
            o = n.style,
            i = n._gsap;
          for (e = 0; e < r.length; e += 3) r[e + 1] ? 2 === r[e + 1] ? n[r[e]](r[e + 2]) : n[r[e]] = r[e + 2] : r[e + 2] ? o[r[e]] = r[e + 2] : o.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(ci, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (e = oi()) && e.isStart || o[Si] || (Ti(o), i.zOrigin && o[ki] && (o[ki] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
          }
        },
        Di = function(e, t) {
          var r = {
            target: e,
            props: [],
            revert: Ri,
            save: Ei
          };
          return e._gsap || Yo.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(e) {
            return r.save(e)
          }), r
        },
        Ni = function(e, t) {
          var r = Jo.createElementNS ? Jo.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Jo.createElement(e);
          return r && r.style ? r : Jo.createElement(e)
        },
        Ii = function e(t, r, n) {
          var o = getComputedStyle(t);
          return o[r] || o.getPropertyValue(r.replace(ci, "-$1").toLowerCase()) || o.getPropertyValue(r) || !n && e(t, Mi(r) || r, 1) || ""
        },
        Li = "O,Moz,ms,Ms,Webkit".split(","),
        Mi = function(e, t, r) {
          var n = (t || ri).style,
            o = 5;
          if (e in n && !r) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Li[o] + e in n););
          return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? Li[o] : "") + e
        },
        zi = function() {
          "undefined" != typeof window && window.document && (Qo = window, Jo = Qo.document, ei = Jo.documentElement, ri = Ni("div") || {
            style: {}
          }, Ni("div"), Si = Mi(Si), ki = Si + "Origin", ri.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ii = !!Mi("perspective"), oi = Yo.core.reverting, ti = 1)
        },
        Ai = function(e) {
          var t, r = e.ownerSVGElement,
            n = Ni("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            o = e.cloneNode(!0);
          o.style.display = "block", n.appendChild(o), ei.appendChild(n);
          try {
            t = o.getBBox()
          } catch (e) {}
          return n.removeChild(o), ei.removeChild(n), t
        },
        Vi = function(e, t) {
          for (var r = t.length; r--;)
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
        },
        Fi = function(e) {
          var t, r;
          try {
            t = e.getBBox()
          } catch (n) {
            t = Ai(e), r = 1
          }
          return t && (t.width || t.height) || r || (t = Ai(e)), !t || t.width || t.x || t.y ? t : {
            x: +Vi(e, ["x", "cx", "x1"]) || 0,
            y: +Vi(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        qi = function(e) {
          return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Fi(e))
        },
        Bi = function(e, t) {
          if (t) {
            var r, n = e.style;
            t in si && t !== ki && (t = Si), n.removeProperty ? ("ms" !== (r = t.substr(0, 2)) && "webkit" !== t.substr(0, 6) || (t = "-" + t), n.removeProperty("--" === r ? t : t.replace(ci, "-$1").toLowerCase())) : n.removeAttribute(t)
          }
        },
        Wi = function(e, t, r, n, o, i) {
          var s = new Ao(e._pt, t, r, 0, 1, i ? wi : bi);
          return e._pt = s, s.b = n, s.e = o, e._props.push(r), s
        },
        Hi = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Xi = {
          grid: 1,
          flex: 1
        },
        Ui = function e(t, r, n, o) {
          var i, s, a, l, u = parseFloat(n) || 0,
            c = (n + "").trim().substr((u + "").length) || "px",
            d = ri.style,
            f = di.test(r),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            v = "px" === o,
            y = "%" === o;
          if (o === c || !u || Hi[o] || Hi[c]) return u;
          if ("px" !== c && !v && (u = e(t, r, n, "px")), l = t.getCTM && qi(t), (y || "%" === c) && (si[r] || ~r.indexOf("adius"))) return i = l ? t.getBBox()[f ? "width" : "height"] : t[h], Vr(y ? u / i * m : u / 100 * i);
          if (d[f ? "width" : "height"] = m + (v ? c : o), s = "rem" !== o && ~r.indexOf("adius") || "em" === o && t.appendChild && !p ? t : t.parentNode, l && (s = (t.ownerSVGElement || {}).parentNode), s && s !== Jo && s.appendChild || (s = Jo.body), (a = s._gsap) && y && a.width && f && a.time === Yn.time && !a.uncache) return Vr(u / a.width * m);
          if (!y || "height" !== r && "width" !== r)(y || "%" === c) && !Xi[Ii(s, "display")] && (d.position = Ii(t, "position")), s === t && (d.position = "static"), s.appendChild(ri), i = ri[h], s.removeChild(ri), d.position = "absolute";
          else {
            var g = t.style[r];
            t.style[r] = m + o, i = t[h], g ? t.style[r] = g : Bi(t, r)
          }
          return f && y && ((a = Mr(s)).time = Yn.time, a.width = s[h]), Vr(v ? i * u / m : i && u ? m / i * u : 0)
        },
        Ki = function(e, t, r, n) {
          var o;
          return ti || zi(), t in pi && "transform" !== t && ~(t = pi[t]).indexOf(",") && (t = t.split(",")[0]), si[t] && "transform" !== t ? (o = is(e, n), o = "transformOrigin" !== t ? o[t] : o.svg ? o.origin : ss(Ii(e, ki)) + " " + o.zOrigin + "px") : (!(o = e.style[t]) || "auto" === o || n || ~(o + "").indexOf("calc(")) && (o = Qi[t] && Qi[t](e, t, r) || Ii(e, t) || zr(e, t) || ("opacity" === t ? 1 : 0)), r && !~(o + "").trim().indexOf(" ") ? Ui(e, t, o, r) + r : o
        },
        $i = function(e, t, r, n) {
          if (!r || "none" === r) {
            var o = Mi(t, e, 1),
              i = o && Ii(e, o, 1);
            i && i !== r ? (t = o, r = i) : "borderColor" === t && (r = Ii(e, "borderTopColor"))
          }
          var s, a, l, u, c, d, f, p, h, m, v, y = new Ao(this._pt, e.style, t, 0, 1, Do),
            g = 0,
            b = 0;
          if (y.b = r, y.e = n, r += "", "var(--" === (n += "").substring(0, 6) && (n = Ii(e, n.substring(4, n.indexOf(")")))), "auto" === n && (d = e.style[t], e.style[t] = n, n = Ii(e, t) || n, d ? e.style[t] = d : Bi(e, t)), Gn(s = [r, n]), n = s[1], l = (r = s[0]).match(fr) || [], (n.match(fr) || []).length) {
            for (; a = fr.exec(n);) f = a[0], h = n.substring(g, a.index), c ? c = (c + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (c = 1), f !== (d = l[b++] || "") && (u = parseFloat(d) || 0, v = d.substr((u + "").length), "=" === f.charAt(1) && (f = qr(u, f) + v), p = parseFloat(f), m = f.substr((p + "").length), g = fr.lastIndex - m.length, m || (m = m || Bt.units[t] || v, g === n.length && (n += m, y.e += m)), v !== m && (u = Ui(e, t, d, m) || 0), y._pt = {
              _next: y._pt,
              p: h || 1 === b ? h : ",",
              s: u,
              c: p - u,
              m: c && c < 4 || "zIndex" === t ? Math.round : 0
            });
            y.c = g < n.length ? n.substring(g, n.length) : ""
          } else y.r = "display" === t && "none" === n ? wi : bi;
          return hr.test(n) && (y.e = 0), this._pt = y, y
        },
        Zi = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Gi = function(e) {
          var t = e.split(" "),
            r = t[0],
            n = t[1] || "50%";
          return "top" !== r && "bottom" !== r && "left" !== n && "right" !== n || (e = r, r = n, n = e), t[0] = Zi[r] || r, t[1] = Zi[n] || n, t.join(" ")
        },
        Yi = function(e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var r, n, o, i = t.t,
              s = i.style,
              a = t.u,
              l = i._gsap;
            if ("all" === a || !0 === a) s.cssText = "", n = 1;
            else
              for (o = (a = a.split(",")).length; --o > -1;) r = a[o], si[r] && (n = 1, r = "transformOrigin" === r ? ki : Si), Bi(i, r);
            n && (Bi(i, Si), l && (l.svg && i.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", is(i, 1), l.uncache = 1, Ti(s)))
          }
        },
        Qi = {
          clearProps: function(e, t, r, n, o) {
            if ("isFromStart" !== o.data) {
              var i = e._pt = new Ao(e._pt, t, r, 0, 0, Yi);
              return i.u = n, i.pr = -10, i.tween = o, e._props.push(r), 1
            }
          }
        },
        Ji = [1, 0, 0, 1, 0, 0],
        es = {},
        ts = function(e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        },
        rs = function(e) {
          var t = Ii(e, Si);
          return ts(t) ? Ji : t.substr(7).match(dr).map(Vr)
        },
        ns = function(e, t) {
          var r, n, o, i, s = e._gsap || Mr(e),
            a = e.style,
            l = rs(e);
          return s.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(o = e.transform.baseVal.consolidate().matrix).a, o.b, o.c, o.d, o.e, o.f]).join(",") ? Ji : l : (l !== Ji || e.offsetParent || e === ei || s.svg || (o = a.display, a.display = "block", (r = e.parentNode) && (e.offsetParent || e.getBoundingClientRect().width) || (i = 1, n = e.nextElementSibling, ei.appendChild(e)), l = rs(e), o ? a.display = o : Bi(e, "display"), i && (n ? r.insertBefore(e, n) : r ? r.appendChild(e) : ei.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        os = function(e, t, r, n, o, i) {
          var s, a, l, u = e._gsap,
            c = o || ns(e, !0),
            d = u.xOrigin || 0,
            f = u.yOrigin || 0,
            p = u.xOffset || 0,
            h = u.yOffset || 0,
            m = c[0],
            v = c[1],
            y = c[2],
            g = c[3],
            b = c[4],
            w = c[5],
            _ = t.split(" "),
            x = parseFloat(_[0]) || 0,
            C = parseFloat(_[1]) || 0;
          r ? c !== Ji && (a = m * g - v * y) && (l = x * (-v / a) + C * (m / a) - (m * w - v * b) / a, x = x * (g / a) + C * (-y / a) + (y * w - g * b) / a, C = l) : (x = (s = Fi(e)).x + (~_[0].indexOf("%") ? x / 100 * s.width : x), C = s.y + (~(_[1] || _[0]).indexOf("%") ? C / 100 * s.height : C)), n || !1 !== n && u.smooth ? (b = x - d, w = C - f, u.xOffset = p + (b * m + w * y) - b, u.yOffset = h + (b * v + w * g) - w) : u.xOffset = u.yOffset = 0, u.xOrigin = x, u.yOrigin = C, u.smooth = !!n, u.origin = t, u.originIsAbsolute = !!r, e.style[ki] = "0px 0px", i && (Wi(i, u, "xOrigin", d, x), Wi(i, u, "yOrigin", f, C), Wi(i, u, "xOffset", p, u.xOffset), Wi(i, u, "yOffset", h, u.yOffset)), e.setAttribute("data-svg-origin", x + " " + C)
        },
        is = function(e, t) {
          var r = e._gsap || new co(e);
          if ("x" in r && !t && !r.uncache) return r;
          var n, o, i, s, a, l, u, c, d, f, p, h, m, v, y, g, b, w, _, x, C, O, P, j, S, k, E, T, R, D, N, I, L = e.style,
            M = r.scaleX < 0,
            z = "px",
            A = "deg",
            V = getComputedStyle(e),
            F = Ii(e, ki) || "0";
          return n = o = i = l = u = c = d = f = p = 0, s = a = 1, r.svg = !(!e.getCTM || !qi(e)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (L[Si] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[Si] ? V[Si] : "")), L.scale = L.rotate = L.translate = "none"), v = ns(e, r.svg), r.svg && (r.uncache ? (S = e.getBBox(), F = r.xOrigin - S.x + "px " + (r.yOrigin - S.y) + "px", j = "") : j = !t && e.getAttribute("data-svg-origin"), os(e, j || F, !!j || r.originIsAbsolute, !1 !== r.smooth, v)), h = r.xOrigin || 0, m = r.yOrigin || 0, v !== Ji && (w = v[0], _ = v[1], x = v[2], C = v[3], n = O = v[4], o = P = v[5], 6 === v.length ? (s = Math.sqrt(w * w + _ * _), a = Math.sqrt(C * C + x * x), l = w || _ ? ui(_, w) * ai : 0, (d = x || C ? ui(x, C) * ai + l : 0) && (a *= Math.abs(Math.cos(d * li))), r.svg && (n -= h - (h * w + m * x), o -= m - (h * _ + m * C))) : (I = v[6], D = v[7], E = v[8], T = v[9], R = v[10], N = v[11], n = v[12], o = v[13], i = v[14], u = (y = ui(I, R)) * ai, y && (j = O * (g = Math.cos(-y)) + E * (b = Math.sin(-y)), S = P * g + T * b, k = I * g + R * b, E = O * -b + E * g, T = P * -b + T * g, R = I * -b + R * g, N = D * -b + N * g, O = j, P = S, I = k), c = (y = ui(-x, R)) * ai, y && (g = Math.cos(-y), N = C * (b = Math.sin(-y)) + N * g, w = j = w * g - E * b, _ = S = _ * g - T * b, x = k = x * g - R * b), l = (y = ui(_, w)) * ai, y && (j = w * (g = Math.cos(y)) + _ * (b = Math.sin(y)), S = O * g + P * b, _ = _ * g - w * b, P = P * g - O * b, w = j, O = S), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), s = Vr(Math.sqrt(w * w + _ * _ + x * x)), a = Vr(Math.sqrt(P * P + I * I)), y = ui(O, P), d = Math.abs(y) > 2e-4 ? y * ai : 0, p = N ? 1 / (N < 0 ? -N : N) : 0), r.svg && (j = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !ts(Ii(e, Si)), j && e.setAttribute("transform", j))), Math.abs(d) > 90 && Math.abs(d) < 270 && (M ? (s *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, d += d <= 0 ? 180 : -180)), t = t || r.uncache, r.x = n - ((r.xPercent = n && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + z, r.y = o - ((r.yPercent = o && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-o) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + z, r.z = i + z, r.scaleX = Vr(s), r.scaleY = Vr(a), r.rotation = Vr(l) + A, r.rotationX = Vr(u) + A, r.rotationY = Vr(c) + A, r.skewX = d + A, r.skewY = f + A, r.transformPerspective = p + z, (r.zOrigin = parseFloat(F.split(" ")[2]) || !t && r.zOrigin || 0) && (L[ki] = ss(F)), r.xOffset = r.yOffset = 0, r.force3D = Bt.force3D, r.renderTransform = r.svg ? ps : ii ? fs : ls, r.uncache = 0, r
        },
        ss = function(e) {
          return (e = e.split(" "))[0] + " " + e[1]
        },
        as = function(e, t, r) {
          var n = On(t);
          return Vr(parseFloat(t) + parseFloat(Ui(e, "x", r + "px", n))) + n
        },
        ls = function(e, t) {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, fs(e, t)
        },
        us = "0deg",
        cs = "0px",
        ds = ") ",
        fs = function(e, t) {
          var r = t || this,
            n = r.xPercent,
            o = r.yPercent,
            i = r.x,
            s = r.y,
            a = r.z,
            l = r.rotation,
            u = r.rotationY,
            c = r.rotationX,
            d = r.skewX,
            f = r.skewY,
            p = r.scaleX,
            h = r.scaleY,
            m = r.transformPerspective,
            v = r.force3D,
            y = r.target,
            g = r.zOrigin,
            b = "",
            w = "auto" === v && e && 1 !== e || !0 === v;
          if (g && (c !== us || u !== us)) {
            var _, x = parseFloat(u) * li,
              C = Math.sin(x),
              O = Math.cos(x);
            x = parseFloat(c) * li, _ = Math.cos(x), i = as(y, i, C * _ * -g), s = as(y, s, -Math.sin(x) * -g), a = as(y, a, O * _ * -g + g)
          }
          m !== cs && (b += "perspective(" + m + ds), (n || o) && (b += "translate(" + n + "%, " + o + "%) "), (w || i !== cs || s !== cs || a !== cs) && (b += a !== cs || w ? "translate3d(" + i + ", " + s + ", " + a + ") " : "translate(" + i + ", " + s + ds), l !== us && (b += "rotate(" + l + ds), u !== us && (b += "rotateY(" + u + ds), c !== us && (b += "rotateX(" + c + ds), d === us && f === us || (b += "skew(" + d + ", " + f + ds), 1 === p && 1 === h || (b += "scale(" + p + ", " + h + ds), y.style[Si] = b || "translate(0, 0)"
        },
        ps = function(e, t) {
          var r, n, o, i, s, a = t || this,
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
            w = a.xOffset,
            _ = a.yOffset,
            x = a.forceCSS,
            C = parseFloat(c),
            O = parseFloat(d);
          f = parseFloat(f), p = parseFloat(p), (h = parseFloat(h)) && (p += h = parseFloat(h), f += h), f || p ? (f *= li, p *= li, r = Math.cos(f) * m, n = Math.sin(f) * m, o = Math.sin(f - p) * -v, i = Math.cos(f - p) * v, p && (h *= li, s = Math.tan(p - h), o *= s = Math.sqrt(1 + s * s), i *= s, h && (s = Math.tan(h), r *= s = Math.sqrt(1 + s * s), n *= s)), r = Vr(r), n = Vr(n), o = Vr(o), i = Vr(i)) : (r = m, i = v, n = o = 0), (C && !~(c + "").indexOf("px") || O && !~(d + "").indexOf("px")) && (C = Ui(y, "x", c, "px"), O = Ui(y, "y", d, "px")), (g || b || w || _) && (C = Vr(C + g - (g * r + b * o) + w), O = Vr(O + b - (g * n + b * i) + _)), (l || u) && (s = y.getBBox(), C = Vr(C + l / 100 * s.width), O = Vr(O + u / 100 * s.height)), s = "matrix(" + r + "," + n + "," + o + "," + i + "," + C + "," + O + ")", y.setAttribute("transform", s), x && (y.style[Si] = s)
        },
        hs = function(e, t, r, n, o) {
          var i, s, a = 360,
            l = Qt(o),
            u = parseFloat(o) * (l && ~o.indexOf("rad") ? ai : 1) - n,
            c = n + u + "deg";
          return l && ("short" === (i = o.split("_")[1]) && (u %= a) !== u % 180 && (u += u < 0 ? a : -360), "cw" === i && u < 0 ? u = (u + 36e9) % a - ~~(u / a) * a : "ccw" === i && u > 0 && (u = (u - 36e9) % a - ~~(u / a) * a)), e._pt = s = new Ao(e._pt, t, r, n, u, mi), s.e = c, s.u = "deg", e._props.push(r), s
        },
        ms = function(e, t) {
          for (var r in t) e[r] = t[r];
          return e
        },
        vs = function(e, t, r) {
          var n, o, i, s, a, l, u, c = ms({}, r._gsap),
            d = r.style;
          for (o in c.svg ? (i = r.getAttribute("transform"), r.setAttribute("transform", ""), d[Si] = t, n = is(r, 1), Bi(r, Si), r.setAttribute("transform", i)) : (i = getComputedStyle(r)[Si], d[Si] = t, n = is(r, 1), d[Si] = i), si)(i = c[o]) !== (s = n[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (a = On(i) !== (u = On(s)) ? Ui(r, o, i, u) : parseFloat(i), l = parseFloat(s), e._pt = new Ao(e._pt, n, o, a, l - a, hi), e._pt.u = u || 0, e._props.push(o));
          ms(n, c)
        };
      Ar("padding,margin,Width,Radius", function(e, t) {
        var r = "Top",
          n = "Right",
          o = "Bottom",
          i = "Left",
          s = (t < 3 ? [r, n, o, i] : [r + i, r + n, o + n, o + i]).map(function(r) {
            return t < 2 ? e + r : "border" + r + e
          });
        Qi[t > 1 ? "border" + e : e] = function(e, t, r, n, o) {
          var i, a;
          if (arguments.length < 4) return i = s.map(function(t) {
            return Ki(e, t, r)
          }), 5 === (a = i.join(" ")).split(i[0]).length ? i[0] : a;
          i = (n + "").split(" "), a = {}, s.forEach(function(e, t) {
            return a[e] = i[t] = i[t] || i[(t - 1) / 2 | 0]
          }), e.init(t, a, o)
        }
      });
      var ys, gs, bs = {
        name: "css",
        register: zi,
        targetTest: function(e) {
          return e.style && e.nodeType
        },
        init: function(e, t, r, n, o) {
          var i, s, a, l, u, c, d, f, p, h, m, v, y, g, b, w, _, x = this._props,
            C = e.style,
            O = r.vars.startAt;
          for (d in ti || zi(), this.styles = this.styles || Di(e), w = this.styles.props, this.tween = r, t)
            if ("autoRound" !== d && (s = t[d], !Tr[d] || !go(d, t, r, n, e, o)))
              if (u = typeof s, c = Qi[d], "function" === u && (u = typeof(s = s.call(r, n, e, o))), "string" === u && ~s.indexOf("random(") && (s = Ln(s)), c) c(this, e, d, s, r) && (b = 1);
              else if ("--" === d.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(d) + "").trim(), s += "", $n.lastIndex = 0, $n.test(i) || (f = On(i), (p = On(s)) ? f !== p && (i = Ui(e, d, i, p) + p) : f && (s += f)), this.add(C, "setProperty", i, s, n, o, 0, 0, d), x.push(d), w.push(d, 0, C[d]);
          else if ("undefined" !== u) {
            if (O && d in O ? (i = "function" == typeof O[d] ? O[d].call(r, n, e, o) : O[d], Qt(i) && ~i.indexOf("random(") && (i = Ln(i)), On(i + "") || "auto" === i || (i += Bt.units[d] || On(Ki(e, d)) || ""), "=" === (i + "").charAt(1) && (i = Ki(e, d))) : i = Ki(e, d), l = parseFloat(i), (h = "string" === u && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), d in pi && ("autoAlpha" === d && (1 === l && "hidden" === Ki(e, "visibility") && a && (l = 0), w.push("visibility", 0, C.visibility), Wi(this, C, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== d && "transform" !== d && ~(d = pi[d]).indexOf(",") && (d = d.split(",")[0])), m = d in si) {
              if (this.styles.save(d), _ = s, "string" === u && "var(--" === s.substring(0, 6)) {
                if ("calc(" === (s = Ii(e, s.substring(4, s.indexOf(")")))).substring(0, 5)) {
                  var P = e.style.perspective;
                  e.style.perspective = s, s = Ii(e, "perspective"), P ? e.style.perspective = P : Bi(e, "perspective")
                }
                a = parseFloat(s)
              }
              if (v || ((y = e._gsap).renderTransform && !t.parseTransform || is(e, t.parseTransform), g = !1 !== t.smoothOrigin && y.smooth, (v = this._pt = new Ao(this._pt, C, Si, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === d) this._pt = new Ao(this._pt, y, "scaleY", y.scaleY, (h ? qr(y.scaleY, h + a) : a) - y.scaleY || 0, hi), this._pt.u = 0, x.push("scaleY", d), d += "X";
              else {
                if ("transformOrigin" === d) {
                  w.push(ki, 0, C[ki]), s = Gi(s), y.svg ? os(e, s, 0, g, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== y.zOrigin && Wi(this, y, "zOrigin", y.zOrigin, p), Wi(this, C, d, ss(i), ss(s)));
                  continue
                }
                if ("svgOrigin" === d) {
                  os(e, s, 1, g, 0, this);
                  continue
                }
                if (d in es) {
                  hs(this, y, d, l, h ? qr(l, h + s) : s);
                  continue
                }
                if ("smoothOrigin" === d) {
                  Wi(this, y, "smooth", y.smooth, s);
                  continue
                }
                if ("force3D" === d) {
                  y[d] = s;
                  continue
                }
                if ("transform" === d) {
                  vs(this, s, e);
                  continue
                }
              }
            } else d in C || (d = Mi(d) || d);
            if (m || (a || 0 === a) && (l || 0 === l) && !fi.test(s) && d in C) a || (a = 0), (f = (i + "").substr((l + "").length)) !== (p = On(s) || (d in Bt.units ? Bt.units[d] : f)) && (l = Ui(e, d, i, p)), this._pt = new Ao(this._pt, m ? y : C, d, l, (h ? qr(l, h + a) : a) - l, m || "px" !== p && "zIndex" !== d || !1 === t.autoRound ? hi : gi), this._pt.u = p || 0, m && _ !== s ? (this._pt.b = i, this._pt.e = _, this._pt.r = yi) : f !== p && "%" !== p && (this._pt.b = i, this._pt.r = vi);
            else if (d in C) $i.call(this, e, d, i, h ? h + s : s);
            else if (d in e) this.add(e, d, i || e[d], h ? h + s : s, n, o);
            else if ("parseTransform" !== d) {
              wr(d, s);
              continue
            }
            m || (d in C ? w.push(d, 0, C[d]) : "function" == typeof e[d] ? w.push(d, 2, e[d]()) : w.push(d, 1, i || e[d])), x.push(d)
          }
          b && zo(this)
        },
        render: function(e, t) {
          if (t.tween._time || !oi())
            for (var r = t._pt; r;) r.r(e, r.d), r = r._next;
          else t.styles.revert()
        },
        get: Ki,
        aliases: pi,
        getSetter: function(e, t, r) {
          var n = pi[t];
          return n && n.indexOf(",") < 0 && (t = n), t in si && t !== ki && (e._gsap.x || Ki(e, "x")) ? r && ni === r ? "scale" === t ? Oi : Ci : (ni = r || {}) && ("scale" === t ? Pi : ji) : e.style && !tr(e.style[t]) ? _i : ~t.indexOf("-") ? xi : Eo(e, t)
        },
        core: {
          _removeProperty: Bi,
          _getMatrix: ns
        }
      };
      Yo.utils.checkPrefix = Mi, Yo.core.getStyleSaver = Di, gs = Ar("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (ys = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
        si[e] = 1
      }), Ar(ys, function(e) {
        Bt.units[e] = "deg", es[e] = 1
      }), pi[gs[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ys, Ar("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
        var t = e.split(":");
        pi[t[1]] = gs[t[0]]
      }), Ar("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
        Bt.units[e] = "px"
      }), Yo.registerPlugin(bs);
      var ws = Yo.registerPlugin(bs) || Yo;
      ws.core.Tween;
      let _s = "undefined" != typeof document ? V.useLayoutEffect : V.useEffect,
        xs = e => e && !Array.isArray(e) && "object" == typeof e,
        Cs = [],
        Os = {},
        Ps = ws;
      const js = (e, t = Cs) => {
        let r = Os;
        xs(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : Cs) : xs(t) && (r = t, t = "dependencies" in r ? r.dependencies : Cs), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, i = (0, V.useRef)(!1), s = (0, V.useRef)(Ps.context(() => {}, n)), a = (0, V.useRef)(e => s.current.add(null, e)), l = t && t.length && !o;
        return l && _s(() => (i.current = !0, () => s.current.revert()), Cs), _s(() => {
          if (e && s.current.add(e, n), !l || !i.current) return () => s.current.revert()
        }, t), {
          context: s.current,
          contextSafe: a.current
        }
      };
      js.register = e => {
        Ps = e
      }, js.headless = !0;
      const Ss = {
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

      function ks(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function Es(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -ks(t - e, r - t, n) + t : e > r ? +ks(e - r, r - t, n) + r : e
      }

      function Ts(e, t, r) {
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

      function Rs(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ds(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rs(Object(r), !0).forEach(function(t) {
            Ts(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rs(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const Ns = {
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

      function Is(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Ls = ["enter", "leave"];
      const Ms = ["gotpointercapture", "lostpointercapture"];

      function zs(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = Ms.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function As(e) {
        return "touches" in e
      }

      function Vs(e) {
        return As(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Fs(e) {
        return As(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function qs(e, t) {
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

      function Bs(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return qs(r, n)
      }

      function Ws(e) {
        const t = Fs(e);
        return As(e) ? t.identifier : t.pointerId
      }

      function Hs(e) {
        const t = Fs(e);
        return [t.clientX, t.clientY]
      }

      function Xs(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Us(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Ks() {}

      function $s(...e) {
        return 0 === e.length ? Ks : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Zs(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Gs {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Us(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            Ss.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, s] = t._movement, [a, l] = r.threshold, {
            _step: u,
            values: c
          } = t;
          if (r.hasCustomTransform ? (!1 === u[0] && (u[0] = Math.abs(i) >= a && c[0]), !1 === u[1] && (u[1] = Math.abs(s) >= l && c[1])) : (!1 === u[0] && (u[0] = Math.abs(i) >= a && Math.sign(i) * a), !1 === u[1] && (u[1] = Math.abs(s) >= l && Math.sign(s) * l)), t.intentional = !1 !== u[0] || !1 !== u[1], !t.intentional) return;
          const d = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = c;
            d[0] = !1 !== u[0] ? e - u[0] : 0, d[1] = !1 !== u[1] ? t - u[1] : 0
          } else d[0] = !1 !== u[0] ? i - u[0] : 0, d[1] = !1 !== u[1] ? s - u[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Us(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [h, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [h < v ? -1 : h > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [i, s],
                [a, l]
              ] = e;
              return [Es(t, i, s, n), Es(r, a, l, o)]
            }(t._bounds, t.offset, w), t.delta = Ss.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = Ss.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Ss.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(Ds(Ds(Ds({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Ys extends Gs {
        constructor(...e) {
          super(...e), Ts(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Ss.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Ss.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Vs(e)] : r.axisThreshold;
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
      const Qs = e => e,
        Js = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => Ds(Ds({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Ss.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Ss.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Qs
          },
          threshold: e => Ss.toVector(e, 0)
        },
        ea = Ds(Ds({}, Js), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => ea.bounds(e(t));
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
        ta = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        ra = "undefined" != typeof window && window.document && window.document.createElement;

      function na() {
        return ra && "ontouchstart" in window
      }
      const oa = {
          isBrowser: ra,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: na(),
          touchscreen: na() || ra && window.navigator.maxTouchPoints > 1,
          pointer: ra && "onpointerdown" in window,
          pointerLock: ra && "exitPointerLock" in window.document
        },
        ia = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        sa = Ds(Ds({}, ea), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && oa.pointerLock, oa.touch && r ? "touch" : this.pointerLock ? "mouse" : oa.pointer && !o ? "pointer" : oa.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, oa.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const i = Ss.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(Ss.toVector(e)),
              distance: this.transform(Ss.toVector(t)),
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
          axisThreshold: e => e ? Ds(Ds({}, ia), e) : ia,
          keyboardDisplacement: (e = 10) => e
        });

      function aa(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, s] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && s < 0 || r > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const la = Ds(Ds({}, Js), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !oa.touch && oa.gesture) return "gesture";
            if (oa.touch && n) return "touch";
            if (oa.touchscreen) {
              if (oa.pointer) return "pointer";
              if (oa.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = Zs(Us(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = Zs(Us(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, Ss.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        ua = Ds(Ds({}, ea), {}, {
          mouseOnly: (e = !0) => e
        }),
        ca = ea,
        da = ea,
        fa = Ds(Ds({}, ea), {}, {
          mouseOnly: (e = !0) => e
        }),
        pa = new Map,
        ha = new Map;

      function ma(e) {
        pa.set(e.key, e.engine), ha.set(e.key, e.resolver)
      }
      const va = {
          key: "drag",
          engine: class extends Ys {
            constructor(...e) {
              super(...e), Ts(this, "ingKey", "dragging")
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
                e._bounds = ea.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Ws(e), r._pointerActive = !0, this.computeValues(Hs(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Vs(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Ws(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Hs(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Ss.sub(o, t._values), this.computeValues(o)), Ss.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Ws(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= r.tapsThreshold && i <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, i] = t._movement, [s, a] = r.swipe.velocity, [l, u] = r.swipe.distance, c = r.swipe.duration;
                if (t.elapsedTime < c) {
                  const r = Math.abs(e / t.timeDelta),
                    c = Math.abs(n / t.timeDelta);
                  r > s && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), c > a && Math.abs(i) > u && (t.swipe[1] = Math.sign(n))
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
              const t = ta[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, Ss.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in ta && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: sa
        },
        ya = {
          key: "hover",
          engine: class extends Ys {
            constructor(...e) {
              super(...e), Ts(this, "ingKey", "hovering")
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
              t._movement = t._delta = Ss.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: fa
        },
        ga = {
          key: "move",
          engine: class extends Ys {
            constructor(...e) {
              super(...e), Ts(this, "ingKey", "moving")
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
              r._delta = Ss.sub(t, r._values), Ss.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: ua
        },
        ba = {
          key: "pinch",
          engine: class extends Gs {
            constructor(...e) {
              super(...e), Ts(this, "ingKey", "pinching"), Ts(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? Ss.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Bs(e, t._touchIds);
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
              const o = qs(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Bs(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = qs(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = Ss.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Xs(e)[1] / 100 * t.offset[0], 0], Ss.addTo(t._movement, t._delta), aa(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: la
        },
        wa = {
          key: "scroll",
          engine: class extends Ys {
            constructor(...e) {
              super(...e), Ts(this, "ingKey", "scrolling")
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
              t._delta = Ss.sub(r, t._values), Ss.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
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
        _a = {
          key: "wheel",
          engine: class extends Ys {
            constructor(...e) {
              super(...e), Ts(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Xs(e), Ss.addTo(t._movement, t._delta), aa(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: da
        };
      const xa = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (oa.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Ca = ["target", "eventOptions", "window", "enabled", "transform"];

      function Oa(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = Oa(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class Pa {
        constructor(e, t) {
          Ts(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const r = Ns[e];
              return e + (r && r[t] || t)
            }(t, r),
            a = Ds(Ds({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class ja {
        constructor() {
          Ts(this, "_timeouts", new Map)
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
      class Sa {
        constructor(e) {
          var t, r;
          Ts(this, "gestures", new Set), Ts(this, "_targetEventStore", new Pa(this)), Ts(this, "gestureEventStores", {}), Ts(this, "gestureTimeoutStores", {}), Ts(this, "handlers", {}), Ts(this, "config", {}), Ts(this, "pointerIds", new Set), Ts(this, "touchIds", new Set), Ts(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && ka(t, "drag"), r.wheel && ka(t, "wheel"), r.scroll && ka(t, "scroll"), r.move && ka(t, "move"), r.pinch && ka(t, "pinch"), r.hover && ka(t, "hover")
        }
        setEventIds(e) {
          return As(e) ? (this.touchIds = new Set(function(e) {
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
              }(n, Ca);
            if (r.shared = Oa({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, xa), t) {
              const e = ha.get(t);
              r[t] = Oa(Ds({
                shared: r.shared
              }, u), e)
            } else
              for (const e in u) {
                const t = ha.get(e);
                t && (r[e] = Oa(Ds({
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
                o.enabled && new(pa.get(t))(this, e, t).bind(i)
              }
              const o = Ea(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](Ds(Ds({}, this.state.shared), {}, {
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
              } = zs(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function ka(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Pa(e, t), e.gestureTimeoutStores[t] = new ja
      }
      const Ea = (e, t, r) => (n, o, i, s = {}, a = !1) => {
          var l, u;
          const c = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            d = null !== (u = s.passive) && void 0 !== u ? u : t.passive;
          let f = a ? n : function(e, t = "", r = !1) {
            const n = Ns[e],
              o = n && n[t] || t;
            return "on" + Is(e) + Is(o) + (function(e = !1, t) {
              return e && !Ls.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        Ta = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Ra(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!pa.has(n)) return;
        const s = r + "Start",
          a = r + "End";
        o[n] = e => {
          let n;
          return e.first && s in t && t[s](e), r in t && (n = t[r](e)), e.last && a in t && t[a](e), n
        }, i[n] = i[n] || {}
      }

      function Da(e, t = {}, r, n) {
        const o = q().useMemo(() => new Sa(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), q().useEffect(o.effect.bind(o)), q().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function Na(e, t) {
        const r = ([va, ba, wa, _a, ga, ya].forEach(ma), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) Ta.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return Ra(o, r, "onDrag", "drag", i, t), Ra(o, r, "onWheel", "wheel", i, t), Ra(o, r, "onScroll", "scroll", i, t), Ra(o, r, "onPinch", "pinch", i, t), Ra(o, r, "onMove", "move", i, t), Ra(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return Da(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const Ia = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), La = ([e, t]) => ({
        x: e,
        y: t
      }), Ma = (e, t) => (e.x = t.x, e.y = t.y, e), za = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Aa = (e, t, r) => Math.min(Math.max(e, t), r);

      function Va() {
        return Va = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Va.apply(null, arguments)
      }
      var Fa = ["shift", "alt", "meta", "mod", "ctrl"],
        qa = {
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

      function Ba(e) {
        return (e && qa[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Wa(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Ha(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Ba(e)
        });
        return Va({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Fa.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && Ka([Ba(e.key), Ba(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && $a([Ba(e.key), Ba(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Xa.clear()
      });
      var Xa = new Set;

      function Ua(e) {
        return Array.isArray(e)
      }

      function Ka(e) {
        var t = Array.isArray(e) ? e : [e];
        Xa.has("meta") && Xa.forEach(function(e) {
          return ! function(e) {
            return Fa.includes(e)
          }(e) && Xa.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Xa.add(e.toLowerCase())
        })
      }

      function $a(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Xa.clear() : t.forEach(function(e) {
          return Xa.delete(e.toLowerCase())
        })
      }

      function Za(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Ua(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Ga = (0, V.createContext)(void 0);

      function Ya(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, x.jsx)(Ga.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Qa(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Qa(e[n], t[n])
        }, !0) : e === t
      }
      var Ja = (0, V.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        el = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, V.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            s = o[1],
            a = (0, V.useState)([]),
            l = a[0],
            u = a[1],
            c = (0, V.useCallback)(function(e) {
              s(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            d = (0, V.useCallback)(function(e) {
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
                  return !Qa(t, e)
                })
              })
            }, []);
          return (0, x.jsx)(Ja.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: c,
              disableScope: d,
              toggleScope: f
            },
            children: (0, x.jsx)(Ya, {
              addHotkey: p,
              removeHotkey: h,
              children: n
            })
          })
        },
        tl = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        rl = "undefined" != typeof window ? V.useLayoutEffect : V.useEffect;

      function nl(e, t, r, n) {
        var o = (0, V.useState)(null),
          i = o[0],
          s = o[1],
          a = (0, V.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          u = Ua(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, V.useCallback)(t, null != c ? c : []),
          f = (0, V.useRef)(d);
        f.current = c ? d : t;
        var p = function(e) {
            var t = (0, V.useRef)(void 0);
            return Qa(t.current, e) || (t.current = e), t.current
          }(l),
          h = (0, V.useContext)(Ja).enabledScopes,
          m = (0, V.useContext)(Ga);
        return rl(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Za(e, ["input", "textarea", "select"]) || Za(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void tl(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Wa(u, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = Ha(r, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, i = t.alt,
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
                          y = Ba(f),
                          g = d.toLowerCase();
                        if (!(null != c && c.includes(y) || null != c && c.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
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
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (Ua(n = c) ? n : n.split(o)).every(function(e) {
                          return Xa.has(e.trim().toLowerCase())
                        })) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void tl(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (Ka(Ba(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && ($a(Ba(e.code)), a.current = !1, null != p && p.keyup && r(e, !0))
              },
              s = i || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Wa(u, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return m.addHotkey(Ha(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Wa(u, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return m.removeHotkey(Ha(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [i, u, p, h]), s
      }

      function ol(e) {
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

      function il(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function sl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? il(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ol(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : il(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function al(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ll = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ul = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sl(sl({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ll(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return al(e.variantClassNames, e => al(e, e => e.split(" ")[0]))
            }
          }, t
        },
        cl = ul({
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
        dl = ul({
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
      ws.registerPlugin(js);
      const fl = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        pl = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        hl = (0, B.Tm)("var(--foundry_1a74xwb0)");
      var ml = r(9872),
        vl = r(24944),
        yl = r(30597);
      const gl = ({
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
          }, [r]), o ? (0, x.jsx)(ml.A, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        bl = {
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
          "zh-TW": r.e(2234).then(r.bind(r, 59853))
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
          return r ? t : Aa(t, this.max[e], this.min[e])
        }
      }
      class _l {
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
      class xl {
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
      class Cl {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Ma(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Ma(this.prevTap, {
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
      class Ol {
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
          e.src = this.thumbnail.currentSrc ?? "", await Ia(e)
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
      class Pl {
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
      class jl extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Sl extends xl {
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
          if (!this.dispatch(e, new jl(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class kl {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = La(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Ma(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = La(e);
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
            i = Ma({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Ma({
            x: 0,
            y: 0
          }, i);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Ma(this.startPan, i)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((a = s).x !== l.x || a.y !== l.y || n || o) && (Ma(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class El extends xl {
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
          super(), this.width = e, this.height = t, this.opener = new Ol({
            slide: this
          }), this.bounds = new wl({
            slide: this
          }), this.dragHandler = new Cl({
            slide: this
          }), this.scrollWheel = new Pl({
            slide: this
          }), this.zoomHandler = new kl({
            slide: this
          }), this.zoomLevels = new _l({
            options: r
          }), this.tapHandler = new Sl({
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
          r || (e = Aa(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), za(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), za(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Ma(this.pan, this.bounds.center)
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
      var Tl = r(86825);
      const Rl = e => "dark" === e ? Tl.xW.dark : Tl.xW.light,
        Dl = (0, vl.YK)({
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
      }, n) => (nl(e, e => r?.(e), [r]), (0, x.jsx)(ft, {
        size: "XS",
        className: (0, ge.$)("foundry_bc732x0", {
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
            ~e && ql.splice(e, 1), Xl -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return ql.splice(Bl(r), 0, o), Xl += 1, $l(), o
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
      var Hl = -1,
        Xl = 0,
        Ul = !1;

      function Kl(e, t) {
        Ul ? (t.delete(e), e(0)) : (t.add(e), $l())
      }

      function $l() {
        Hl < 0 && (Hl = 0, "demand" !== Ml.frameLoop && Wl(Zl))
      }

      function Zl() {
        ~Hl && (Wl(Zl), Ml.batchedUpdates(Gl))
      }

      function Gl() {
        const e = Hl;
        Hl = Ml.now();
        const t = Bl(Hl);
        t && (Ql(ql.splice(0, t), e => e.handler()), Xl -= t), Xl ? (Al.flush(), Ll.flush(e ? Math.min(64, Hl - e) : 16.667), Vl.flush(), zl.flush(), Fl.flush()) : Hl = -1
      }

      function Yl() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Xl += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Xl -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Xl -= t.size, Ql(t, t => t(r) && e.add(t)), Xl += e.size, t = e)
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
      var lu, uu, cu = (e, ...t) => au(e, e => e(...t)),
        du = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
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
        wu = {
          get idle() {
            return !vu.size && !yu.length
          },
          start(e) {
            bu > e.priority ? (vu.add(e), Ml.onStart(_u)) : (xu(e), Ml(Ou))
          },
          advance: Ou,
          sort(e) {
            if (bu) Ml.onFrame(() => wu.sort(e));
            else {
              const t = yu.indexOf(e);
              ~t && (yu.splice(t, 1), Cu(e))
            }
          },
          clear() {
            yu = [], vu.clear()
          }
        };

      function _u() {
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
      var Eu = new RegExp("rgb" + ku(ju, ju, ju)),
        Tu = new RegExp("rgba" + ku(ju, ju, ju, ju)),
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
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Lu.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : fu && void 0 !== fu[e] ? fu[e] : (t = Eu.exec(e)) ? (Vu(t[1]) << 24 | Vu(t[2]) << 16 | Vu(t[3]) << 8 | 255) >>> 0 : (t = Tu.exec(e)) ? (Vu(t[1]) << 24 | Vu(t[2]) << 16 | Vu(t[3]) << 8 | qu(t[4])) >>> 0 : (t = Nu.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Mu.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Iu.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Ru.exec(e)) ? (255 | Au(Fu(t[1]), Bu(t[2]), Bu(t[3]))) >>> 0 : (t = Du.exec(e)) ? (Au(Fu(t[1]), Bu(t[2]), Bu(t[3])) | qu(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Hu = (e, t, r) => {
          if (ru.fun(e)) return e;
          if (ru.arr(e)) return Hu({
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
        Xu = 1.70158,
        Uu = 1.525 * Xu,
        Ku = Xu + 1,
        $u = 2 * Math.PI / 3,
        Zu = 2 * Math.PI / 4.5,
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
          easeInBack: e => Ku * e * e * e - Xu * e * e,
          easeOutBack: e => 1 + Ku * Math.pow(e - 1, 3) + Xu * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Uu) / 2 : (Math.pow(2 * e - 2, 2) * ((Uu + 1) * (2 * e - 2) + Uu) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * $u),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * $u) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Zu) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Zu) / 2 + 1,
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
        ec = e => Boolean(e && e[Qu]),
        tc = e => e && e[Qu] ? e[Qu]() : e,
        rc = e => e[Ju] || null;

      function nc(e, t) {
        const r = e[Ju];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var oc = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            ic(this, e)
          }
        },
        ic = (e, t) => uc(e, Qu, t);

      function sc(e, t) {
        if (e[Qu]) {
          let r = e[Ju];
          r || uc(e, Ju, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function ac(e, t) {
        const r = e[Ju];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Ju] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var lc, uc = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        cc = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        dc = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        fc = new RegExp(`(${cc.source})(%|[a-z]+)`, "i"),
        pc = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        hc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        mc = e => {
          const [t, r] = vc(e);
          if (!t || du()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && hc.test(r) ? mc(r) : r || e
        },
        vc = e => {
          const t = hc.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        yc = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        gc = e => {
          lc || (lc = fu ? new RegExp(`(${Object.keys(fu).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => tc(e).replace(hc, mc).replace(dc, Wu).replace(lc, Wu)),
            r = t.map(e => e.match(cc).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Hu({
              ...e,
              output: t
            }));
          return e => {
            const r = !fc.test(t[0]) && t.find(e => fc.test(e))?.replace(cc, "");
            let n = 0;
            return t[0].replace(cc, () => `${o[n++](e)}${r||""}`).replace(pc, yc)
          }
        },
        bc = "react-spring: ",
        wc = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${bc}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        _c = wc(console.warn),
        xc = wc(console.warn);

      function Cc(e) {
        return ru.str(e) && ("#" == e[0] || /\d/.test(e) || !du() && hc.test(e) || e in (fu || {}))
      }
      var Oc = du() ? V.useEffect : V.useLayoutEffect;

      function Pc() {
        const e = (0, V.useState)()[1],
          t = (() => {
            const e = (0, V.useRef)(!1);
            return Oc(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var jc = e => (0, V.useEffect)(e, Sc),
        Sc = [],
        kc = Symbol.for("Animated:node"),
        Ec = e => e && e[kc],
        Tc = (e, t) => {
          return r = e, n = kc, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Rc = e => e && e[kc] && e[kc].getPayload(),
        Dc = class {
          constructor() {
            Tc(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Nc = class e extends Dc {
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
        Ic = class e extends Nc {
          constructor(e) {
            super(0), this._string = null, this._toString = Hu({
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
            e && (this._toString = Hu({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Lc = {
          dependencies: null
        },
        Mc = class extends Dc {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return iu(this.source, (r, n) => {
              var o;
              (o = r) && o[kc] === o ? t[n] = r.getValue(e) : ec(r) ? t[n] = tc(r) : e || (t[n] = r)
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
            Lc.dependencies && ec(e) && Lc.dependencies.add(e);
            const t = Rc(e);
            t && ou(t, e => this.add(e))
          }
        },
        zc = class e extends Mc {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Ac)), !0)
          }
        };

      function Ac(e) {
        return (Cc(e) ? Ic : Nc).create(e)
      }

      function Vc(e) {
        const t = Ec(e);
        return t ? t.constructor : ru.arr(e) ? zc : Cc(e) ? Ic : Nc
      }
      var Fc = (e, t) => {
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
                return Lc.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Mc(e), Lc.dependencies = null, [e, r]
              }(n, t),
              u = Pc(),
              c = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && u()
              },
              d = new qc(c, l),
              f = (0, V.useRef)(void 0);
            Oc(() => (f.current = d, ou(l, e => sc(e, d)), () => {
              f.current && (ou(f.current.deps, e => ac(e, f.current)), Ml.cancel(f.current.update))
            })), (0, V.useEffect)(c, []), jc(() => () => {
              const e = f.current;
              ou(e.deps, t => ac(t, e))
            });
            const p = t.getComponentProps(a.getValue());
            return V.createElement(e, {
              ...p,
              ref: s
            })
          })
        },
        qc = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Ml.write(this.update)
          }
        },
        Bc = Symbol.for("AnimatedComponent"),
        Wc = (e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Mc(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = Hc(e) || "Anonymous";
              return (e = ru.str(e) ? i[e] || (i[e] = Fc(e, o)) : e[Bc] || (e[Bc] = Fc(e, o))).displayName = `Animated(${t})`, e
            };
          return iu(e, (t, r) => {
            ru.arr(e) && (r = Hc(t)), i[r] = i(t)
          }), {
            animated: i
          }
        },
        Hc = e => ru.str(e) ? e : e && ru.str(e.displayName) ? e.displayName : ru.fun(e) && e.name || null;

      function Xc(e, ...t) {
        return ru.fun(e) ? e(...t) : e
      }
      var Uc = (e, t) => !0 === e || !!(t && e && (ru.fun(e) ? e(t) : su(e).includes(t))),
        Kc = (e, t) => ru.obj(e) ? t && e[t] : e,
        $c = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Zc = e => e,
        Gc = (e, t = Zc) => {
          let r = Yc;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            ru.und(r) || (n[o] = r)
          }
          return n
        },
        Yc = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Qc = {
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

      function Jc(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (iu(e, (e, n) => {
              Qc[n] || (t[n] = e, r++)
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

      function ed(e) {
        return e = tc(e), ru.arr(e) ? e.map(ed) : Cc(e) ? eu.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function td(e) {
        return ru.fun(e) || ru.arr(e) && ru.obj(e[0])
      }

      function rd(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var nd = {
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
        od = {
          ...nd.default,
          mass: 1,
          damping: 1,
          easing: Yu.linear,
          clamp: !1
        },
        id = class {
          constructor() {
            this.velocity = 0, Object.assign(this, od)
          }
        };

      function sd(e, t) {
        if (ru.und(t.decay)) {
          const r = !ru.und(t.tension) || !ru.und(t.friction);
          !r && ru.und(t.frequency) && ru.und(t.damping) && ru.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var ad = [],
        ld = class {
          constructor() {
            this.changed = !1, this.values = ad, this.toValues = null, this.fromValues = ad, this.config = new id, this.immediate = !1
          }
        };

      function ud(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, u, c = Uc(r.cancel ?? n?.cancel, t);
          if (c) p();
          else {
            ru.und(r.pause) || (o.paused = Uc(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Uc(e, t)), l = Xc(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - Ml.now()
          }

          function f() {
            l > 0 && !eu.skipAnimation ? (o.delayed = !0, u = Ml.setTimeout(p, l), o.pauseQueue.add(d), o.timeouts.add(u)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
            try {
              i.start({
                ...r,
                callId: e,
                cancel: c
              }, s)
            } catch (e) {
              a(e)
            }
          }
        })
      }
      var cd = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? pd(e.get()) : t.every(e => e.noop) ? dd(e.get()) : fd(e.get(), t.every(e => e.finished)),
        dd = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        fd = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        pd = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function hd(e, t, r, n) {
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
          const u = Gc(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, d;
          const f = new Promise((e, t) => (c = e, d = t)),
            p = e => {
              const t = o <= (r.cancelId || 0) && pd(n) || o !== r.asyncId && fd(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            h = (e, t) => {
              const i = new vd,
                s = new yd;
              return (async () => {
                if (eu.skipAnimation) throw md(r), s.result = fd(n, !1), d(s), s;
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
          if (eu.skipAnimation) return md(r), fd(n, !1);
          try {
            let t;
            t = ru.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, n.stop.bind(n))), await Promise.all([t.then(c), f]), m = fd(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof vd) m = e.result;
            else {
              if (!(e instanceof yd)) throw e;
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

      function md(e, t) {
        au(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var vd = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        yd = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        gd = e => e instanceof wd,
        bd = 1,
        wd = class extends oc {
          constructor() {
            super(...arguments), this.id = bd++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Ec(this);
            return e && e.getValue()
          }
          to(...e) {
            return eu.to(this, e)
          }
          interpolate(...e) {
            return _c(`${bc}The "interpolate" function is deprecated in v9 (use "to" instead)`), eu.to(this, e)
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
            nc(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || wu.sort(this), nc(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        _d = Symbol.for("SpringPhase"),
        xd = e => (1 & e[_d]) > 0,
        Cd = e => (2 & e[_d]) > 0,
        Od = e => (4 & e[_d]) > 0,
        Pd = (e, t) => t ? e[_d] |= 3 : e[_d] &= -3,
        jd = (e, t) => t ? e[_d] |= 4 : e[_d] &= -5,
        Sd = class extends wd {
          constructor(e, t) {
            if (super(), this.animation = new ld, this.defaultProps = {}, this._state = {
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
            return !(Cd(this) || this._state.asyncTo) || Od(this)
          }
          get goal() {
            return tc(this.animation.to)
          }
          get velocity() {
            const e = Ec(this);
            return e instanceof Nc ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return xd(this)
          }
          get isAnimating() {
            return Cd(this)
          }
          get isPaused() {
            return Od(this)
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
            } = n, s = Rc(n.to);
            !s && ec(n.to) && (o = su(tc(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const u = a.constructor == Ic ? 1 : s ? s[l].lastPosition : o[l];
              let c = n.immediate,
                d = u;
              if (!c) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = ru.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (r == u ? .005 : Math.min(1, .001 * Math.abs(u - r)));
                if (ru.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), c = Math.abs(a.lastPosition - d) <= f, s = o * n
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !ru.und(n),
                      p = r == u ? a.v0 > 0 : r < u;
                    let h, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (h = Math.abs(s) > t, h || (c = Math.abs(u - d) <= f, !c)); ++e) l && (m = d == u || d > u == p, m && (s = -s * n, d = u)), s += (1e-6 * -i.tension * (d - u) + .001 * -i.friction * s) / i.mass * v, d += s * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, a.durationProgress = n), d = r + i.easing(n) * (u - r), s = (d - a.lastPosition) / e, c = 1 == n
                }
                a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              s && !s[l].done && (c = !1), c ? a.done = !0 : t = !1, a.setValue(d, i.round) && (r = !0)
            });
            const a = Ec(this),
              l = a.getValue();
            if (t) {
              const e = tc(n.to);
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
            if (Cd(this)) {
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
            }], Promise.all(r.map(e => this._update(e))).then(e => cd(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), md(this._state, e && this._lastCallId), Ml.batchedUpdates(() => this._stop(t, e)), this
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
            r = ru.obj(r) ? r[t] : r, (null == r || td(r)) && (r = void 0), n = ru.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return xd(this) || (e.reverse && ([r, n] = [n, r]), n = tc(n), ru.und(n) ? Ec(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, Gc(e, (e, t) => /^on/.test(t) ? Kc(e, r) : e)), Nd(this, e, "onProps"), Id(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return ud(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  Od(this) || (jd(this, !0), cu(i.pauseQueue), Id(this, "onPause", fd(this, kd(this, this.animation.to)), this))
                },
                resume: () => {
                  Od(this) && (jd(this, !1), Cd(this) && this._resume(), cu(i.resumeQueue), Id(this, "onResume", fd(this, kd(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Ed(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(pd(this));
            const n = !ru.und(e.to),
              o = !ru.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(pd(this));
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
            !o || n || t.default && !ru.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const f = !nu(d, u);
            f && (a.from = d), d = tc(d);
            const p = !nu(c, l);
            p && this._focus(c);
            const h = td(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !h && function(e, t, r) {
              r && (sd(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), sd(e, t), Object.assign(e, t);
              for (const t in od) null == e[t] && (e[t] = od[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              ru.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, Xc(t.config, i), t.config !== s.config ? Xc(s.config, i) : void 0);
            let g = Ec(this);
            if (!g || ru.und(c)) return r(fd(this, !0));
            const b = ru.und(t.reset) ? o && !t.default : !ru.und(d) && Uc(t.reset, i),
              w = b ? d : this.get(),
              _ = ed(c),
              x = ru.num(_) || ru.arr(_) || Cc(_),
              C = !h && (!x || Uc(s.immediate || t.immediate, i));
            if (p) {
              const e = Vc(c);
              if (e !== g.constructor) {
                if (!C) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const O = g.constructor;
            let P = ec(c),
              j = !1;
            if (!P) {
              const e = b || !xd(this) && f;
              (p || e) && (j = nu(ed(w), _), P = !j), (nu(a.immediate, C) || C) && nu(m.decay, v) && nu(m.velocity, y) || (P = !0)
            }
            if (j && Cd(this) && (a.changed && !b ? P = !0 : P || this._stop(l)), !h && ((P || ec(l)) && (a.values = g.getPayload(), a.toValues = ec(c) ? null : O == Ic ? [1] : su(_)), a.immediate != C && (a.immediate = C, C || b || this._set(l)), P)) {
              const {
                onRest: e
              } = a;
              ou(Dd, e => Nd(this, t, e));
              const n = fd(this, kd(this, l));
              cu(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && Ml.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? Xc(s.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(w), h ? r(hd(t.to, t, this._state, this)) : P ? this._start() : Cd(this) && !p ? this._pendingCalls.add(r) : r(dd(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (rc(this) && this._detach(), t.to = e, rc(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ec(t) && (sc(t, this), gd(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ec(e) && ac(e, this)
          }
          _set(e, t = !0) {
            const r = tc(e);
            if (!ru.und(r)) {
              const e = Ec(this);
              if (!e || !nu(r, e.getValue())) {
                const n = Vc(r);
                e && e.constructor == n ? e.setValue(r) : Tc(this, n.create(r)), e && Ml.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return Ec(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Id(this, "onStart", fd(this, kd(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Xc(this.animation.onChange, e, this)), Xc(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Ec(this).reset(tc(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Cd(this) || (Pd(this, !0), Od(this) || this._resume())
          }
          _resume() {
            eu.skipAnimation ? this.finish() : wu.start(this)
          }
          _stop(e, t) {
            if (Cd(this)) {
              Pd(this, !1);
              const r = this.animation;
              ou(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), nc(this, {
                type: "idle",
                parent: this
              });
              const n = t ? pd(this.get()) : fd(this.get(), kd(this, e ?? r.to));
              cu(this._pendingCalls, n), r.changed && (r.changed = !1, Id(this, "onRest", n, this))
            }
          }
        };

      function kd(e, t) {
        const r = ed(t);
        return nu(ed(e.get()), r)
      }

      function Ed(e, t = e.loop, r = e.to) {
        const n = Xc(t);
        if (n) {
          const o = !0 !== n && Jc(n),
            i = (o || e).reverse,
            s = !o || o.reset;
          return Td({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || td(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function Td(e) {
        const {
          to: t,
          from: r
        } = e = Jc(e), n = new Set;
        return ru.obj(t) && Rd(t, n), ru.obj(r) && Rd(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Rd(e, t) {
        iu(e, (e, r) => null != e && t.add(r))
      }
      var Dd = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Nd(e, t, r) {
        e.animation[r] = t[r] !== $c(t, r) ? Kc(t[r], e.key) : void 0
      }

      function Id(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Ld = ["onStart", "onChange", "onRest"],
        Md = 1,
        zd = class {
          constructor(e, t) {
            this.id = Md++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return e && this.queue.push(Td(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = su(e).map(Td) : this.queue = [], this._flush ? this._flush(this, t) : (Bd(this, t), function(e, t) {
              return Promise.all(t.map(t => Ad(e, t))).then(t => cd(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              ou(su(t), t => r[t].stop(!!e))
            } else md(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
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
      async function Ad(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, u = ru.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const c = ru.arr(o) || ru.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : ou(Ld, r => {
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
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, cu(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          p = !0 === t.cancel || !0 === $c(t, "cancel");
        (c || p && d.asyncId) && f.push(ud(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: tu,
            resume: tu,
            start(t, r) {
              p ? (md(d, e._lastAsyncId), r(pd(e))) : (t.onRest = a, r(hd(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const h = cd(e, await Promise.all(f));
        if (s && h.finished && (!r || !h.noop)) {
          const r = Ed(t, s, o);
          if (r) return Bd(e, [r]), Ad(e, r, !0)
        }
        return l && Ml.batchedUpdates(() => l(h, e, e.item)), h
      }

      function Vd(e, t) {
        const r = {
          ...e.springs
        };
        return t && ou(su(t), e => {
            ru.und(e.keys) && (e = Td(e)), ru.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), qd(r, e, e => Fd(e))
          }),
          function(e, t) {
            iu(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, sc(t, e))
            })
          }(e, r), r
      }

      function Fd(e, t) {
        const r = new Sd;
        return r.key = e, t && sc(r, t), r
      }

      function qd(e, t, r) {
        t.keys && ou(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Bd(e, t) {
        ou(t, t => {
          qd(e.springs, t, t => Fd(t, e))
        })
      }
      var Wd = V.createContext({
          pause: !1,
          immediate: !1
        }),
        Hd = () => {
          const e = [],
            t = function(t) {
              xc(`${bc}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
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
        Xd = () => Hd(),
        Ud = () => (0, V.useState)(Xd)[0];

      function Kd(e, t, r) {
        const n = ru.fun(t) && t,
          {
            reset: o,
            sort: i,
            trail: s = 0,
            expires: a = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: u,
            ref: c,
            config: d
          } = n ? n() : t,
          f = (0, V.useMemo)(() => n || 3 == arguments.length ? Hd() : void 0, []),
          p = su(e),
          h = [],
          m = (0, V.useRef)(null),
          v = o ? null : m.current;
        Oc(() => {
          m.current = h
        }), jc(() => (ou(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          ou(m.current, e => {
            e.expired && clearTimeout(e.expirationId), rd(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : $d++
              })
            }
            return ru.und(r) ? e : ru.fun(r) ? e.map(r) : su(r)
          }(p, n ? n() : t, v),
          g = o && m.current || [];
        Oc(() => ou(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          rd(e, f), Xc(u, t, r)
        }));
        const b = [];
        if (v && ou(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (h[t] = e)
          }), ou(p, (e, t) => {
            h[t] || (h[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new zd
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
        let w = -s;
        const _ = Pc(),
          x = Gc(t),
          C = new Map,
          O = (0, V.useRef)(new Map),
          P = (0, V.useRef)(!1);
        ou(h, (e, r) => {
          const o = e.key,
            i = e.phase,
            u = n ? n() : t;
          let f, p;
          const h = Xc(u.delay || 0, o);
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
          if (f = Xc(f, e.item, r), f = ru.obj(f) ? Jc(f) : {
              to: f
            }, !f.config) {
            const t = d || x.config;
            f.config = Xc(t, e.item, r, p)
          }
          w += s;
          const g = {
            ...x,
            delay: h + w,
            ref: c,
            immediate: u.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == p && ru.und(g.from)) {
            const o = n ? n() : t,
              i = ru.und(o.initial) || v ? o.from : o.initial;
            g.from = Xc(i, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            Xc(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = Xc(a, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(_, n)))
                }
              }
              e && t.some(e => e.expired) && (O.current.delete(r), l && (P.current = !0), _())
            }
          };
          const j = Vd(e.ctrl, g);
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
        const j = (0, V.useContext)(Wd),
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
        Oc(() => {
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
        }), Oc(() => {
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
        const E = e => V.createElement(V.Fragment, null, h.map((t, r) => {
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
        return f ? [E, f] : E
      }
      var $d = 1,
        Zd = class extends wd {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Hu(...t);
            const r = this._get(),
              n = Vc(r);
            Tc(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            nu(t, this.get()) || (Ec(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Yd(this._active) && Qd(this)
          }
          _get() {
            const e = ru.arr(this.source) ? this.source.map(tc) : su(tc(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Yd(this._active) && (this.idle = !1, ou(Rc(this), e => {
              e.done = !1
            }), eu.skipAnimation ? (Ml.batchedUpdates(() => this.advance()), Qd(this)) : wu.start(this))
          }
          _attach() {
            let e = 1;
            ou(su(this.source), t => {
              ec(t) && sc(t, this), gd(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            ou(su(this.source), e => {
              ec(e) && ac(e, this)
            }), this._active.clear(), Qd(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = su(this.source).reduce((e, t) => Math.max(e, (gd(t) ? t.priority : 0) + 1), 0))
          }
        };

      function Gd(e) {
        return !1 !== e.idle
      }

      function Yd(e) {
        return !e.size || Array.from(e).every(Gd)
      }

      function Qd(e) {
        e.idle || (e.idle = !0, ou(Rc(e), e => {
          e.done = !0
        }), nc(e, {
          type: "idle",
          parent: e
        }))
      }
      eu.assign({
        createStringInterpolator: gc,
        to: (e, t) => new Zd(e, t)
      }), wu.advance;
      var Jd = /^--/;

      function ef(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Jd.test(e) || rf.hasOwnProperty(e) && rf[e] ? ("" + t).trim() : t + "px"
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
      var of = /^(matrix|translate|scale|rotate|skew)/, sf = /^(translate)/, af = /^(rotate|skew)/, lf = (e, t) => ru.num(e) && 0 !== e ? e + t : e, uf = (e, t) => ru.arr(e) ? e.every(e => uf(e, t)) : ru.num(e) ? e === t : parseFloat(e) === t, cf = class extends Mc {
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
          }), o.length && (n.transform = new df(o, i)), super(n)
        }
      }, df = class extends oc {
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
            const o = tc(r[0]),
              [i, s] = this.transforms[n](ru.arr(o) ? o : r.map(tc));
            e += " " + i, t = t && s
          }), t ? "none" : e
        }
        observerAdded(e) {
          1 == e && ou(this.inputs, e => ou(e, e => ec(e) && sc(e, this)))
        }
        observerRemoved(e) {
          0 == e && ou(this.inputs, e => ou(e, e => ec(e) && ac(e, this)))
        }
        eventObserved(e) {
          "change" == e.type && (this._value = null), nc(this, e)
        }
      };
      eu.assign({
        batchedUpdates: G.unstable_batchedUpdates,
        createStringInterpolator: gc,
        colors: Pu
      });
      var ff = Wc(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
              c = Object.values(u),
              d = Object.keys(u).map(t => r || e.hasAttribute(t) ? t : tf[t] || (tf[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = ef(t, o[t]);
                Jd.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new cf(e),
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

      function mf(e, t) {
        const r = V.createContext(t),
          n = e => {
            const {
              children: t,
              ...n
            } = e, o = V.useMemo(() => n, Object.values(n));
            return (0, x.jsx)(r.Provider, {
              value: o,
              children: t
            })
          };
        return n.displayName = e + "Provider", [n, function(n) {
          const o = V.useContext(r);
          if (o) return o;
          if (void 0 !== t) return t;
          throw new Error(`\`${n}\` must be used within \`${e}\``)
        }]
      }

      function vf(e, t = []) {
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
          const o = V.createContext(n),
            i = r.length;
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
        }, yf(n, ...t)]
      }

      function yf(...e) {
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

      function gf(e) {
        const t = bf(e),
          r = V.forwardRef((e, r) => {
            const {
              children: n,
              ...o
            } = e, i = V.Children.toArray(n), s = i.find(_f);
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

      function bf(e) {
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
      "undefined" == typeof window || !window.document || window.document.createElement;
      var wf = Symbol("radix.slottable");

      function _f(e) {
        return V.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === wf
      }
      var xf = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const r = gf(`Primitive.${t}`),
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

      function Cf(e, t) {
        e && G.flushSync(() => e.dispatchEvent(t))
      }

      function Of(e) {
        const t = V.useRef(e);
        return V.useEffect(() => {
          t.current = e
        }), V.useMemo(() => (...e) => t.current?.(...e), [])
      }
      var Pf, jf = "dismissableLayer.update",
        Sf = V.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        kf = V.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, u = V.useContext(Sf), [c, d] = V.useState(null), f = c?.ownerDocument ?? globalThis?.document, [, p] = V.useState({}), h = (0, Y.s)(t, e => d(e)), m = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = c ? m.indexOf(c) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= y, _ = function(e, t = globalThis?.document) {
            const r = Of(e),
              n = V.useRef(!1),
              o = V.useRef(() => {});
            return V.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Rf("dismissableLayer.pointerDownOutside", r, i, {
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
            w && !r && (o?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f), C = function(e, t = globalThis?.document) {
            const r = Of(e),
              n = V.useRef(!1);
            return V.useEffect(() => {
              const e = e => {
                e.target && !n.current && Rf("dismissableLayer.focusOutside", r, {
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
          return function(e, t = globalThis?.document) {
            const r = Of(e);
            V.useEffect(() => {
              const e = e => {
                "Escape" === e.key && r(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }, [r, t])
          }(e => {
            g === u.layers.size - 1 && (n?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), V.useEffect(() => {
            if (c) return r && (0 === u.layersWithOutsidePointerEventsDisabled.size && (Pf = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Tf(), () => {
              r && 1 === u.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = Pf)
            }
          }, [c, f, r, u]), V.useEffect(() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Tf())
          }, [c, u]), V.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(jf, e), () => document.removeEventListener(jf, e)
          }, []), (0, x.jsx)(xf.div, {
            ...l,
            ref: h,
            style: {
              pointerEvents: b ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: hf(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: hf(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: hf(e.onPointerDownCapture, _.onPointerDownCapture)
          })
        });
      kf.displayName = "DismissableLayer";
      var Ef = V.forwardRef((e, t) => {
        const r = V.useContext(Sf),
          n = V.useRef(null),
          o = (0, Y.s)(t, n);
        return V.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, x.jsx)(xf.div, {
          ...e,
          ref: o
        })
      });

      function Tf() {
        const e = new CustomEvent(jf);
        document.dispatchEvent(e)
      }

      function Rf(e, t, r, {
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
        }), n ? Cf(o, i) : o.dispatchEvent(i)
      }
      Ef.displayName = "DismissableLayerBranch";
      var Df = kf,
        Nf = Ef,
        If = globalThis?.document ? V.useLayoutEffect : () => {},
        Lf = F[" useId ".trim().toString()] || (() => {}),
        Mf = 0;

      function zf(e) {
        const [t, r] = V.useState(Lf());
        return If(() => {
          e || r(e => e ?? String(Mf++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
      const Af = ["top", "right", "bottom", "left"],
        Vf = Math.min,
        Ff = Math.max,
        qf = Math.round,
        Bf = Math.floor,
        Wf = e => ({
          x: e,
          y: e
        }),
        Hf = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Xf = {
          start: "end",
          end: "start"
        };

      function Uf(e, t, r) {
        return Ff(e, Vf(t, r))
      }

      function Kf(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function $f(e) {
        return e.split("-")[0]
      }

      function Zf(e) {
        return e.split("-")[1]
      }

      function Gf(e) {
        return "x" === e ? "y" : "x"
      }

      function Yf(e) {
        return "y" === e ? "height" : "width"
      }
      const Qf = new Set(["top", "bottom"]);

      function Jf(e) {
        return Qf.has($f(e)) ? "y" : "x"
      }

      function ep(e) {
        return Gf(Jf(e))
      }

      function tp(e) {
        return e.replace(/start|end/g, e => Xf[e])
      }
      const rp = ["left", "right"],
        np = ["right", "left"],
        op = ["top", "bottom"],
        ip = ["bottom", "top"];

      function sp(e) {
        return e.replace(/left|right|bottom|top/g, e => Hf[e])
      }

      function ap(e) {
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

      function lp(e) {
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

      function up(e, t, r) {
        let {
          reference: n,
          floating: o
        } = e;
        const i = Jf(t),
          s = ep(t),
          a = Yf(s),
          l = $f(t),
          u = "y" === i,
          c = n.x + n.width / 2 - o.width / 2,
          d = n.y + n.height / 2 - o.height / 2,
          f = n[a] / 2 - o[a] / 2;
        let p;
        switch (l) {
          case "top":
            p = {
              x: c,
              y: n.y - o.height
            };
            break;
          case "bottom":
            p = {
              x: c,
              y: n.y + n.height
            };
            break;
          case "right":
            p = {
              x: n.x + n.width,
              y: d
            };
            break;
          case "left":
            p = {
              x: n.x - o.width,
              y: d
            };
            break;
          default:
            p = {
              x: n.x,
              y: n.y
            }
        }
        switch (Zf(t)) {
          case "start":
            p[s] -= f * (r && u ? -1 : 1);
            break;
          case "end":
            p[s] += f * (r && u ? -1 : 1)
        }
        return p
      }
      async function cp(e, t) {
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
          rootBoundary: c = "viewport",
          elementContext: d = "floating",
          altBoundary: f = !1,
          padding: p = 0
        } = Kf(t, e), h = ap(p), m = a[f ? "floating" === d ? "reference" : "floating" : d], v = lp(await i.getClippingRect({
          element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: u,
          rootBoundary: c,
          strategy: l
        })), y = "floating" === d ? {
          x: n,
          y: o,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(g)) && await (null == i.getScale ? void 0 : i.getScale(g)) || {
          x: 1,
          y: 1
        }, w = lp(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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

      function dp(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function fp(e) {
        return Af.some(t => e[t] >= 0)
      }
      const pp = new Set(["left", "top"]);

      function hp() {
        return "undefined" != typeof window
      }

      function mp(e) {
        return gp(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function vp(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function yp(e) {
        var t;
        return null == (t = (gp(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function gp(e) {
        return !!hp() && (e instanceof Node || e instanceof vp(e).Node)
      }

      function bp(e) {
        return !!hp() && (e instanceof Element || e instanceof vp(e).Element)
      }

      function wp(e) {
        return !!hp() && (e instanceof HTMLElement || e instanceof vp(e).HTMLElement)
      }

      function _p(e) {
        return !(!hp() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof vp(e).ShadowRoot)
      }
      const xp = new Set(["inline", "contents"]);

      function Cp(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: o
        } = Lp(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !xp.has(o)
      }
      const Op = new Set(["table", "td", "th"]);

      function Pp(e) {
        return Op.has(mp(e))
      }
      const jp = [":popover-open", ":modal"];

      function Sp(e) {
        return jp.some(t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        })
      }
      const kp = ["transform", "translate", "scale", "rotate", "perspective"],
        Ep = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        Tp = ["paint", "layout", "strict", "content"];

      function Rp(e) {
        const t = Dp(),
          r = bp(e) ? Lp(e) : e;
        return kp.some(e => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || Ep.some(e => (r.willChange || "").includes(e)) || Tp.some(e => (r.contain || "").includes(e))
      }

      function Dp() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      const Np = new Set(["html", "body", "#document"]);

      function Ip(e) {
        return Np.has(mp(e))
      }

      function Lp(e) {
        return vp(e).getComputedStyle(e)
      }

      function Mp(e) {
        return bp(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function zp(e) {
        if ("html" === mp(e)) return e;
        const t = e.assignedSlot || e.parentNode || _p(e) && e.host || yp(e);
        return _p(t) ? t.host : t
      }

      function Ap(e) {
        const t = zp(e);
        return Ip(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wp(t) && Cp(t) ? t : Ap(t)
      }

      function Vp(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const o = Ap(e),
          i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = vp(o);
        if (i) {
          const e = Fp(s);
          return t.concat(s, s.visualViewport || [], Cp(o) ? o : [], e && r ? Vp(e) : [])
        }
        return t.concat(o, Vp(o, [], r))
      }

      function Fp(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function qp(e) {
        const t = Lp(e);
        let r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0;
        const o = wp(e),
          i = o ? e.offsetWidth : r,
          s = o ? e.offsetHeight : n,
          a = qf(r) !== i || qf(n) !== s;
        return a && (r = i, n = s), {
          width: r,
          height: n,
          $: a
        }
      }

      function Bp(e) {
        return bp(e) ? e : e.contextElement
      }

      function Wp(e) {
        const t = Bp(e);
        if (!wp(t)) return Wf(1);
        const r = t.getBoundingClientRect(),
          {
            width: n,
            height: o,
            $: i
          } = qp(t);
        let s = (i ? qf(r.width) : r.width) / n,
          a = (i ? qf(r.height) : r.height) / o;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
          x: s,
          y: a
        }
      }
      const Hp = Wf(0);

      function Xp(e) {
        const t = vp(e);
        return Dp() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Hp
      }

      function Up(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const o = e.getBoundingClientRect(),
          i = Bp(e);
        let s = Wf(1);
        t && (n ? bp(n) && (s = Wp(n)) : s = Wp(e));
        const a = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== vp(e)) && t
        }(i, r, n) ? Xp(i) : Wf(0);
        let l = (o.left + a.x) / s.x,
          u = (o.top + a.y) / s.y,
          c = o.width / s.x,
          d = o.height / s.y;
        if (i) {
          const e = vp(i),
            t = n && bp(n) ? vp(n) : n;
          let r = e,
            o = Fp(r);
          for (; o && n && t !== r;) {
            const e = Wp(o),
              t = o.getBoundingClientRect(),
              n = Lp(o),
              i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
            l *= e.x, u *= e.y, c *= e.x, d *= e.y, l += i, u += s, r = vp(o), o = Fp(r)
          }
        }
        return lp({
          width: c,
          height: d,
          x: l,
          y: u
        })
      }

      function Kp(e, t) {
        const r = Mp(e).scrollLeft;
        return t ? t.left + r : Up(yp(e)).left + r
      }

      function $p(e, t) {
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - Kp(e, r),
          y: r.top + t.scrollTop
        }
      }
      const Zp = new Set(["absolute", "fixed"]);

      function Gp(e, t, r) {
        let n;
        if ("viewport" === t) n = function(e, t) {
          const r = vp(e),
            n = yp(e),
            o = r.visualViewport;
          let i = n.clientWidth,
            s = n.clientHeight,
            a = 0,
            l = 0;
          if (o) {
            i = o.width, s = o.height;
            const e = Dp();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, l = o.offsetTop)
          }
          const u = Kp(n);
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
          const t = yp(e),
            r = Mp(e),
            n = e.ownerDocument.body,
            o = Ff(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            i = Ff(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let s = -r.scrollLeft + Kp(e);
          const a = -r.scrollTop;
          return "rtl" === Lp(n).direction && (s += Ff(t.clientWidth, n.clientWidth) - o), {
            width: o,
            height: i,
            x: s,
            y: a
          }
        }(yp(e));
        else if (bp(t)) n = function(e, t) {
          const r = Up(e, !0, "fixed" === t),
            n = r.top + e.clientTop,
            o = r.left + e.clientLeft,
            i = wp(e) ? Wp(e) : Wf(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: n * i.y
          }
        }(t, r);
        else {
          const r = Xp(e);
          n = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
          }
        }
        return lp(n)
      }

      function Yp(e, t) {
        const r = zp(e);
        return !(r === t || !bp(r) || Ip(r)) && ("fixed" === Lp(r).position || Yp(r, t))
      }

      function Qp(e, t, r) {
        const n = wp(t),
          o = yp(t),
          i = "fixed" === r,
          s = Up(e, !0, i, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Wf(0);

        function u() {
          l.x = Kp(o)
        }
        if (n || !n && !i)
          if (("body" !== mp(t) || Cp(o)) && (a = Mp(t)), n) {
            const e = Up(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && u();
        i && !n && o && u();
        const c = !o || n || i ? Wf(0) : $p(o, a);
        return {
          x: s.left + a.scrollLeft - l.x - c.x,
          y: s.top + a.scrollTop - l.y - c.y,
          width: s.width,
          height: s.height
        }
      }

      function Jp(e) {
        return "static" === Lp(e).position
      }

      function eh(e, t) {
        if (!wp(e) || "fixed" === Lp(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return yp(e) === r && (r = r.ownerDocument.body), r
      }

      function th(e, t) {
        const r = vp(e);
        if (Sp(e)) return r;
        if (!wp(e)) {
          let t = zp(e);
          for (; t && !Ip(t);) {
            if (bp(t) && !Jp(t)) return t;
            t = zp(t)
          }
          return r
        }
        let n = eh(e, t);
        for (; n && Pp(n) && Jp(n);) n = eh(n, t);
        return n && Ip(n) && Jp(n) && !Rp(n) ? r : n || function(e) {
          let t = zp(e);
          for (; wp(t) && !Ip(t);) {
            if (Rp(t)) return t;
            if (Sp(t)) return null;
            t = zp(t)
          }
          return null
        }(e) || r
      }
      const rh = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: r,
            offsetParent: n,
            strategy: o
          } = e;
          const i = "fixed" === o,
            s = yp(n),
            a = !!t && Sp(t.floating);
          if (n === s || a && i) return r;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = Wf(1);
          const c = Wf(0),
            d = wp(n);
          if ((d || !d && !i) && (("body" !== mp(n) || Cp(s)) && (l = Mp(n)), wp(n))) {
            const e = Up(n);
            u = Wp(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop
          }
          const f = !s || d || i ? Wf(0) : $p(s, l);
          return {
            width: r.width * u.x,
            height: r.height * u.y,
            x: r.x * u.x - l.scrollLeft * u.x + c.x + f.x,
            y: r.y * u.y - l.scrollTop * u.y + c.y + f.y
          }
        },
        getDocumentElement: yp,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: n,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === r ? Sp(t) ? [] : function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let n = Vp(e, [], !1).filter(e => bp(e) && "body" !== mp(e)),
                o = null;
              const i = "fixed" === Lp(e).position;
              let s = i ? zp(e) : e;
              for (; bp(s) && !Ip(s);) {
                const t = Lp(s),
                  r = Rp(s);
                r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && o && Zp.has(o.position) || Cp(s) && !r && Yp(e, s)) ? n = n.filter(e => e !== s) : o = t, s = zp(s)
              }
              return t.set(e, n), n
            }(t, this._c) : [].concat(r), n],
            s = i[0],
            a = i.reduce((e, r) => {
              const n = Gp(t, r, o);
              return e.top = Ff(n.top, e.top), e.right = Vf(n.right, e.right), e.bottom = Vf(n.bottom, e.bottom), e.left = Ff(n.left, e.left), e
            }, Gp(t, s, o));
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
          }
        },
        getOffsetParent: th,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || th,
            r = this.getDimensions,
            n = await r(e.floating);
          return {
            reference: Qp(e.reference, await t(e.floating), e.strategy),
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
          } = qp(e);
          return {
            width: t,
            height: r
          }
        },
        getScale: Wp,
        isElement: bp,
        isRTL: function(e) {
          return "rtl" === Lp(e).direction
        }
      };

      function nh(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const oh = function(e) {
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
                } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), s = $f(r), a = Zf(r), l = "y" === Jf(r), u = pp.has(s) ? -1 : 1, c = i && l ? -1 : 1, d = Kf(t, e);
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
        ih = function(e) {
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
              } = Kf(e, t), u = {
                x: r,
                y: n
              }, c = await cp(t, l), d = Jf($f(o)), f = Gf(d);
              let p = u[f],
                h = u[d];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                p = Uf(p + c["y" === f ? "top" : "left"], p, p - c[e])
              }
              if (s) {
                const e = "y" === d ? "bottom" : "right";
                h = Uf(h + c["y" === d ? "top" : "left"], h, h - c[e])
              }
              const m = a.fn({
                ...t,
                [f]: p,
                [d]: h
              });
              return {
                ...m,
                data: {
                  x: m.x - r,
                  y: m.y - n,
                  enabled: {
                    [f]: i,
                    [d]: s
                  }
                }
              }
            }
          }
        },
        sh = function(e) {
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
                mainAxis: c = !0,
                crossAxis: d = !0,
                fallbackPlacements: f,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: m = !0,
                ...v
              } = Kf(e, t);
              if (null != (r = i.arrow) && r.alignmentOffset) return {};
              const y = $f(o),
                g = Jf(a),
                b = $f(a) === a,
                w = await (null == l.isRTL ? void 0 : l.isRTL(u.floating)),
                _ = f || (b || !m ? [sp(a)] : function(e) {
                  const t = sp(e);
                  return [tp(e), t, tp(t)]
                }(a)),
                x = "none" !== h;
              !f && x && _.push(... function(e, t, r, n) {
                const o = Zf(e);
                let i = function(e, t, r) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return r ? t ? np : rp : t ? rp : np;
                    case "left":
                    case "right":
                      return t ? op : ip;
                    default:
                      return []
                  }
                }($f(e), "start" === r, n);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(tp)))), i
              }(a, m, h, w));
              const C = [a, ..._],
                O = await cp(t, v),
                P = [];
              let j = (null == (n = i.flip) ? void 0 : n.overflows) || [];
              if (c && P.push(O[y]), d) {
                const e = function(e, t, r) {
                  void 0 === r && (r = !1);
                  const n = Zf(e),
                    o = ep(e),
                    i = Yf(o);
                  let s = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (s = sp(s)), [s, sp(s)]
                }(o, s, w);
                P.push(O[e[0]], O[e[1]])
              }
              if (j = [...j, {
                  placement: o,
                  overflows: P
                }], !P.every(e => e <= 0)) {
                var S, k;
                const e = ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1,
                  t = C[e];
                if (t && ("alignment" !== d || g === Jf(t) || j.every(e => Jf(e.placement) !== g || e.overflows[0] > 0))) return {
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
                    var E;
                    const e = null == (E = j.filter(e => {
                      if (x) {
                        const t = Jf(e.placement);
                        return t === g || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : E[0];
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
        ah = function(e) {
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
              } = Kf(e, t), c = await cp(t, u), d = $f(o), f = Zf(o), p = "y" === Jf(o), {
                width: h,
                height: m
              } = i.floating;
              let v, y;
              "top" === d || "bottom" === d ? (v = d, y = f === (await (null == s.isRTL ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = d, v = "end" === f ? "top" : "bottom");
              const g = m - c.top - c.bottom,
                b = h - c.left - c.right,
                w = Vf(m - c[v], g),
                _ = Vf(h - c[y], b),
                x = !t.middlewareData.shift;
              let C = w,
                O = _;
              if (null != (r = t.middlewareData.shift) && r.enabled.x && (O = b), null != (n = t.middlewareData.shift) && n.enabled.y && (C = g), x && !f) {
                const e = Ff(c.left, 0),
                  t = Ff(c.right, 0),
                  r = Ff(c.top, 0),
                  n = Ff(c.bottom, 0);
                p ? O = h - 2 * (0 !== e || 0 !== t ? e + t : Ff(c.left, c.right)) : C = m - 2 * (0 !== r || 0 !== n ? r + n : Ff(c.top, c.bottom))
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
        lh = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: r
              } = t, {
                strategy: n = "referenceHidden",
                ...o
              } = Kf(e, t);
              switch (n) {
                case "referenceHidden": {
                  const e = dp(await cp(t, {
                    ...o,
                    elementContext: "reference"
                  }), r.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: fp(e)
                    }
                  }
                }
                case "escaped": {
                  const e = dp(await cp(t, {
                    ...o,
                    altBoundary: !0
                  }), r.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: fp(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        uh = e => ({
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
              padding: c = 0
            } = Kf(e, t) || {};
            if (null == u) return {};
            const d = ap(c),
              f = {
                x: r,
                y: n
              },
              p = ep(o),
              h = Yf(p),
              m = await s.getDimensions(u),
              v = "y" === p,
              y = v ? "top" : "left",
              g = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              w = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
              _ = f[p] - i.reference[p],
              x = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(u));
            let C = x ? x[b] : 0;
            C && await (null == s.isElement ? void 0 : s.isElement(x)) || (C = a.floating[b] || i.floating[h]);
            const O = w / 2 - _ / 2,
              P = C / 2 - m[h] / 2 - 1,
              j = Vf(d[y], P),
              S = Vf(d[g], P),
              k = j,
              E = C - m[h] - S,
              T = C / 2 - m[h] / 2 + O,
              R = Uf(k, T, E),
              D = !l.arrow && null != Zf(o) && T !== R && i.reference[h] / 2 - (T < k ? j : S) - m[h] / 2 < 0,
              N = D ? T < k ? T - k : T - E : 0;
            return {
              [p]: f[p] + N,
              data: {
                [p]: R,
                centerOffset: T - R - N,
                ...D && {
                  alignmentOffset: N
                }
              },
              reset: D
            }
          }
        }),
        ch = function(e) {
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
              } = Kf(e, t), c = {
                x: r,
                y: n
              }, d = Jf(o), f = Gf(d);
              let p = c[f],
                h = c[d];
              const m = Kf(a, t),
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
                  t = pp.has($f(o)),
                  r = i.reference[d] - i.floating[e] + (t && (null == (y = s.offset) ? void 0 : y[d]) || 0) + (t ? 0 : v.crossAxis),
                  n = i.reference[d] + i.reference[e] + (t ? 0 : (null == (g = s.offset) ? void 0 : g[d]) || 0) - (t ? v.crossAxis : 0);
                h < r ? h = r : h > n && (h = n)
              }
              return {
                [f]: p,
                [d]: h
              }
            }
          }
        },
        dh = (e, t, r) => {
          const n = new Map,
            o = {
              platform: rh,
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
                x: c,
                y: d
              } = up(u, n, l),
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
                x: c,
                y: d,
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
              c = null != v ? v : c, d = null != y ? y : d, p = {
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
                x: c,
                y: d
              } = up(u, f, l))), r = -1)
            }
            return {
              x: c,
              y: d,
              placement: f,
              strategy: o,
              middlewareData: p
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var fh = "undefined" != typeof document ? V.useLayoutEffect : function() {};

      function ph(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 !== n--;)
              if (!ph(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || ph(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function hh(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function mh(e, t) {
        const r = hh(e);
        return Math.round(t * r) / r
      }

      function vh(e) {
        const t = V.useRef(e);
        return fh(() => {
          t.current = e
        }), t
      }
      const yh = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: r,
              padding: n
            } = "function" == typeof e ? e(t) : e;
            return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? uh({
              element: r.current,
              padding: n
            }).fn(t) : {} : r ? uh({
              element: r,
              padding: n
            }).fn(t) : {};
            var o
          }
        }),
        gh = (e, t) => ({
          ...oh(e),
          options: [e, t]
        }),
        bh = (e, t) => ({
          ...ih(e),
          options: [e, t]
        }),
        wh = (e, t) => ({
          ...ch(e),
          options: [e, t]
        }),
        _h = (e, t) => ({
          ...sh(e),
          options: [e, t]
        }),
        xh = (e, t) => ({
          ...ah(e),
          options: [e, t]
        }),
        Ch = (e, t) => ({
          ...lh(e),
          options: [e, t]
        }),
        Oh = (e, t) => ({
          ...yh(e),
          options: [e, t]
        });
      var Ph = V.forwardRef((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, x.jsx)(xf.svg, {
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
      Ph.displayName = "Arrow";
      var jh = Ph;

      function Sh(e) {
        const [t, r] = V.useState(void 0);
        return If(() => {
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
      var kh = "Popper",
        [Eh, Th] = vf(kh),
        [Rh, Dh] = Eh(kh),
        Nh = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = V.useState(null);
          return (0, x.jsx)(Rh, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      Nh.displayName = kh;
      var Ih = "PopperAnchor",
        Lh = V.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, i = Dh(Ih, r), s = V.useRef(null), a = (0, Y.s)(t, s), l = V.useRef(null);
          return V.useEffect(() => {
            const e = l.current;
            l.current = n?.current || s.current, e !== l.current && i.onAnchorChange(l.current)
          }), n ? null : (0, x.jsx)(xf.div, {
            ...o,
            ref: a
          })
        });
      Lh.displayName = Ih;
      var Mh = "PopperContent",
        [zh, Ah] = Eh(Mh),
        Vh = V.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
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
          } = e, v = Dh(Mh, r), [y, g] = V.useState(null), b = (0, Y.s)(t, e => g(e)), [w, _] = V.useState(null), C = Sh(w), O = C?.width ?? 0, P = C?.height ?? 0, j = n + ("center" !== i ? "-" + i : ""), S = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, k = Array.isArray(u) ? u : [u], E = k.length > 0, T = {
            padding: S,
            boundary: k.filter(Wh),
            altBoundary: E
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
            } = e, [c, d] = V.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = V.useState(n);
            ph(f, n) || p(n);
            const [h, m] = V.useState(null), [v, y] = V.useState(null), g = V.useCallback(e => {
              e !== x.current && (x.current = e, m(e))
            }, []), b = V.useCallback(e => {
              e !== C.current && (C.current = e, y(e))
            }, []), w = i || h, _ = s || v, x = V.useRef(null), C = V.useRef(null), O = V.useRef(c), P = null != l, j = vh(l), S = vh(o), k = vh(u), E = V.useCallback(() => {
              if (!x.current || !C.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              S.current && (e.platform = S.current), dh(x.current, C.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== k.current
                };
                T.current && !ph(O.current, t) && (O.current = t, G.flushSync(() => {
                  d(t)
                }))
              })
            }, [f, t, r, S, k]);
            fh(() => {
              !1 === u && O.current.isPositioned && (O.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [u]);
            const T = V.useRef(!1);
            fh(() => (T.current = !0, () => {
              T.current = !1
            }), []), fh(() => {
              if (w && (x.current = w), _ && (C.current = _), w && _) {
                if (j.current) return j.current(w, _, E);
                E()
              }
            }, [w, _, E, j, P]);
            const R = V.useMemo(() => ({
                reference: x,
                floating: C,
                setReference: g,
                setFloating: b
              }), [g, b]),
              D = V.useMemo(() => ({
                reference: w,
                floating: _
              }), [w, _]),
              N = V.useMemo(() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!D.floating) return e;
                const t = mh(D.floating, c.x),
                  n = mh(D.floating, c.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...hh(D.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }, [r, a, D.floating, c.x, c.y]);
            return V.useMemo(() => ({
              ...c,
              update: E,
              refs: R,
              elements: D,
              floatingStyles: N
            }), [c, E, R, D, N])
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
              } = n, u = Bp(e), c = o || i ? [...u ? Vp(u) : [], ...Vp(t)] : [];
              c.forEach(e => {
                o && e.addEventListener("scroll", r, {
                  passive: !0
                }), i && e.addEventListener("resize", r)
              });
              const d = u && a ? function(e, t) {
                let r, n = null;
                const o = yp(e);

                function i() {
                  var e;
                  clearTimeout(r), null == (e = n) || e.disconnect(), n = null
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
                    rootMargin: -Bf(d) + "px " + -Bf(o.clientWidth - (c + f)) + "px " + -Bf(o.clientHeight - (d + p)) + "px " + -Bf(c) + "px",
                    threshold: Ff(0, Vf(1, l)) || 1
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
                    1 !== n || nh(u, e.getBoundingClientRect()) || s(), m = !1
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
              let m = l ? Up(e) : null;
              return l && function t() {
                const n = Up(e);
                m && !nh(m, n) && r(), m = n, f = requestAnimationFrame(t)
              }(), r(), () => {
                var e;
                c.forEach(e => {
                  o && e.removeEventListener("scroll", r), i && e.removeEventListener("resize", r)
                }), null == d || d(), null == (e = h) || e.disconnect(), h = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [gh({
              mainAxis: o + P,
              alignmentAxis: s
            }), l && bh({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === d ? wh() : void 0,
              ...T
            }), l && _h({
              ...T
            }), xh({
              ...T,
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
            }), w && Oh({
              element: w,
              padding: a
            }), Hh({
              arrowWidth: O,
              arrowHeight: P
            }), f && Ch({
              strategy: "referenceHidden",
              ...T
            })]
          }), [M, z] = Xh(N), A = Of(h);
          If(() => {
            I && A?.()
          }, [I, A]);
          const F = L.arrow?.x,
            q = L.arrow?.y,
            B = 0 !== L.arrow?.centerOffset,
            [W, H] = V.useState();
          return If(() => {
            y && H(window.getComputedStyle(y).zIndex)
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
            children: (0, x.jsx)(zh, {
              scope: r,
              placedSide: M,
              onArrowChange: _,
              arrowX: F,
              arrowY: q,
              shouldHideArrow: B,
              children: (0, x.jsx)(xf.div, {
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
      Vh.displayName = Mh;
      var Fh = "PopperArrow",
        qh = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Bh = V.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Ah(Fh, r), i = qh[o.placedSide];
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
            children: (0, x.jsx)(jh, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function Wh(e) {
        return null !== e
      }
      Bh.displayName = Fh;
      var Hh = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, u] = Xh(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [u], d = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let p = "",
            h = "";
          return "bottom" === l ? (p = i ? c : `${d}px`, h = -a + "px") : "top" === l ? (p = i ? c : `${d}px`, h = `${n.floating.height+a}px`) : "right" === l ? (p = -a + "px", h = i ? c : `${f}px`) : "left" === l && (p = `${n.floating.width+a}px`, h = i ? c : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function Xh(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Uh = Nh,
        Kh = Lh,
        $h = Vh,
        Zh = Bh,
        Gh = V.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, i] = V.useState(!1);
          If(() => i(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? G.createPortal((0, x.jsx)(xf.div, {
            ...n,
            ref: t
          }), s) : null
        });
      Gh.displayName = "Portal";
      var Yh = e => {
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
            const e = Qh(n.current);
            i.current = "mounted" === a ? e : "none"
          }, [a]), If(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = i.current,
                s = Qh(t);
              l(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : r && n !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, l]), If(() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                s = i => {
                  const s = Qh(n.current).includes(CSS.escape(i.animationName));
                  if (i.target === t && s && (l("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    })
                  }
                },
                a = e => {
                  e.target === t && (i.current = Qh(n.current))
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

      function Qh(e) {
        return e?.animationName || "none"
      }
      Yh.displayName = "Presence";
      var Jh = F[" useInsertionEffect ".trim().toString()] || If;

      function em({
        prop: e,
        defaultProp: t,
        onChange: r = () => {},
        caller: n
      }) {
        const [o, i, s] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [r, n] = V.useState(e), o = V.useRef(r), i = V.useRef(t);
          return Jh(() => {
            i.current = t
          }, [t]), V.useEffect(() => {
            o.current !== r && (i.current?.(r), o.current = r)
          }, [r, o]), [r, n, i]
        }({
          defaultProp: t,
          onChange: r
        }), a = void 0 !== e, l = a ? e : o; {
          const t = V.useRef(void 0 !== e);
          V.useEffect(() => {
            const e = t.current;
            if (e !== a) {
              const t = e ? "controlled" : "uncontrolled",
                r = a ? "controlled" : "uncontrolled";
              console.warn(`${n} is changing from ${t} to ${r}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = a
          }, [a, n])
        }
        const u = V.useCallback(t => {
          if (a) {
            const r = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            r !== e && s.current?.(r)
          } else i(t)
        }, [a, e, i, s]);
        return [l, u]
      }
      Symbol("RADIX:SYNC_STATE");
      var tm = Object.freeze({
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
        rm = V.forwardRef((e, t) => (0, x.jsx)(xf.span, {
          ...e,
          ref: t,
          style: {
            ...tm,
            ...e.style
          }
        }));
      rm.displayName = "VisuallyHidden";
      var nm = rm,
        [om, im] = vf("Tooltip", [Th]),
        sm = Th(),
        am = "TooltipProvider",
        lm = 700,
        um = "tooltip.open",
        [cm, dm] = om(am),
        fm = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = lm,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, s = V.useRef(!0), a = V.useRef(!1), l = V.useRef(0);
          return V.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, x.jsx)(cm, {
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
      fm.displayName = am;
      var pm = "Tooltip",
        [hm, mm] = om(pm),
        vm = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
          } = e, l = dm(pm, e.__scopeTooltip), u = sm(t), [c, d] = V.useState(null), f = zf(), p = V.useRef(0), h = s ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = V.useRef(!1), [y, g] = em({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(um))) : l.onClose(), i?.(e)
            },
            caller: pm
          }), b = V.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), w = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, v.current = !1, g(!0)
          }, [g]), _ = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), C = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              v.current = !0, g(!0), p.current = 0
            }, m)
          }, [m, g]);
          return V.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, x.jsx)(Uh, {
            ...u,
            children: (0, x.jsx)(hm, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: d,
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
      vm.displayName = pm;
      var ym = "TooltipTrigger",
        gm = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = mm(ym, r), i = dm(ym, r), s = sm(r), a = V.useRef(null), l = (0, Y.s)(t, a, o.onTriggerChange), u = V.useRef(!1), c = V.useRef(!1), d = V.useCallback(() => u.current = !1, []);
          return V.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, x.jsx)(Kh, {
            asChild: !0,
            ...s,
            children: (0, x.jsx)(xf.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: hf(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: hf(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: hf(e.onPointerDown, () => {
                o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", d, {
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
      gm.displayName = ym;
      var bm = "TooltipPortal",
        [wm, _m] = om(bm, {
          forceMount: void 0
        }),
        xm = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = mm(bm, t);
          return (0, x.jsx)(wm, {
            scope: t,
            forceMount: r,
            children: (0, x.jsx)(Yh, {
              present: r || i.open,
              children: (0, x.jsx)(Gh, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      xm.displayName = bm;
      var Cm = "TooltipContent",
        Om = V.forwardRef((e, t) => {
          const r = _m(Cm, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = mm(Cm, e.__scopeTooltip);
          return (0, x.jsx)(Yh, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, x.jsx)(Em, {
              side: o,
              ...i,
              ref: t
            }) : (0, x.jsx)(Pm, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        Pm = V.forwardRef((e, t) => {
          const r = mm(Cm, e.__scopeTooltip),
            n = dm(Cm, e.__scopeTooltip),
            o = V.useRef(null),
            i = (0, Y.s)(t, o),
            [s, a] = V.useState(null),
            {
              trigger: l,
              onClose: u
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: d
            } = n,
            f = V.useCallback(() => {
              a(null), d(!1)
            }, [d]),
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
              a(i), d(!0)
            }, [d]);
          return V.useEffect(() => () => f(), [f]), V.useEffect(() => {
            if (l && c) {
              const e = e => p(e, c),
                t = e => p(e, l);
              return l.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [l, c, p, f]), V.useEffect(() => {
            if (s) {
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
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const s = t[e],
                        a = t[i],
                        l = s.x,
                        u = s.y,
                        c = a.x,
                        d = a.y;
                      u > n != d > n && r < (c - l) * (n - u) / (d - u) + l && (o = !o)
                    }
                    return o
                  }(r, s);
                n ? f() : o && (f(), u())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, c, s, u, f]), (0, x.jsx)(Em, {
            ...e,
            ref: i
          })
        }),
        [jm, Sm] = om(pm, {
          isInside: !1
        }),
        km = function(e) {
          const t = ({
            children: e
          }) => (0, x.jsx)(x.Fragment, {
            children: e
          });
          return t.displayName = `${e}.Slottable`, t.__radixId = wf, t
        }("TooltipContent"),
        Em = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
          } = e, l = mm(Cm, r), u = sm(r), {
            onClose: c
          } = l;
          return V.useEffect(() => (document.addEventListener(um, c), () => document.removeEventListener(um, c)), [c]), V.useEffect(() => {
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
          }, [l.trigger, c]), (0, x.jsx)(kf, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, x.jsxs)($h, {
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
              children: [(0, x.jsx)(km, {
                children: n
              }), (0, x.jsx)(jm, {
                scope: r,
                isInside: !0,
                children: (0, x.jsx)(nm, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Om.displayName = Cm;
      var Tm = "TooltipArrow",
        Rm = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = sm(r);
          return Sm(Tm, r).isInside ? null : (0, x.jsx)(Zh, {
            ...o,
            ...n,
            ref: t
          })
        });
      Rm.displayName = Tm;
      var Dm = fm,
        Nm = vm,
        Im = gm,
        Lm = xm,
        Mm = Om,
        zm = Rm;
      const Am = (0, V.createContext)(null);

      function Vm() {
        const e = (0, V.useContext)(Am);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Fm = ({
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
          return (0, x.jsx)(Dm, {
            delayDuration: t,
            children: (0, x.jsx)(Am.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, x.jsx)(Nm, {
                open: i,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        qm = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, x.jsx)(Im, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Bm = (0, V.forwardRef)(({
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
          } = Vm(), c = (0, K.jt)(), d = pf(Mm), f = Kd(u, {
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
            config: nd.stiff,
            immediate: c
          }), p = (0, H.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: i,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, a);
          return f(e => (0, x.jsx)(d, {
            ...p,
            style: e,
            ref: l
          }))
        }),
        Wm = (0, V.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, H.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, x.jsx)(zm, {
            ...r,
            ref: t
          })
        }),
        Hm = Lm;

      function Xm(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var Um = V.createContext(void 0);

      function Km(e) {
        const t = V.useContext(Um);
        return e || t || "ltr"
      }

      function $m(e) {
        const t = V.useRef({
          value: e,
          previous: e
        });
        return V.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }

      function Zm(e) {
        const t = e + "CollectionProvider",
          [r, n] = vf(t),
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
          l = gf(a),
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
        const c = e + "CollectionItemSlot",
          d = "data-radix-collection-item",
          f = gf(c),
          p = V.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = V.useRef(null), a = (0, Y.s)(t, s), l = i(c, r);
            return V.useEffect(() => (l.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              l.itemMap.delete(s)
            })), (0, x.jsx)(f, {
              [d]: "",
              ref: a,
              children: n
            })
          });
        return p.displayName = c, [{
          Provider: s,
          Slot: u,
          ItemSlot: p
        }, function(t) {
          const r = i(e + "CollectionConsumer", t),
            n = V.useCallback(() => {
              const e = r.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${d}]`)),
                n = Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current));
              return n
            }, [r.collectionRef, r.itemMap]);
          return n
        }, n]
      }
      Map;
      var Gm = ["PageUp", "PageDown"],
        Ym = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Qm = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Jm = "Slider",
        [ev, tv, rv] = Zm(Jm),
        [nv, ov] = vf(Jm, [rv]),
        [iv, sv] = nv(Jm),
        av = V.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: i = 1,
            orientation: s = "horizontal",
            disabled: a = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: u = [n],
            value: c,
            onValueChange: d = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: h,
            ...m
          } = e, v = V.useRef(new Set), y = V.useRef(0), g = "horizontal" === s ? cv : dv, [b = [], w] = em({
            prop: c,
            defaultProp: u,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), _ = V.useRef(b);

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
              u = Xm(a, [n, o]);
            w((e = []) => {
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
          return (0, x.jsx)(iv, {
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
            children: (0, x.jsx)(ev.Provider, {
              scope: e.__scopeSlider,
              children: (0, x.jsx)(ev.Slot, {
                scope: e.__scopeSlider,
                children: (0, x.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: hf(m.onPointerDown, () => {
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
                      const r = Gm.includes(e.key) || e.shiftKey && Ym.includes(e.key) ? 10 : 1,
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
      av.displayName = Jm;
      var [lv, uv] = nv(Jm, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), cv = V.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: i,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: l,
          onStepKeyDown: u,
          ...c
        } = e, [d, f] = V.useState(null), p = (0, Y.s)(t, e => f(e)), h = V.useRef(void 0), m = Km(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = h.current || d.getBoundingClientRect(),
            o = xv([0, t.width], y ? [r, n] : [n, r]);
          return h.current = t, o(e - t.left)
        }
        return (0, x.jsx)(lv, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, x.jsx)(fv, {
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
              const t = Qm[y ? "from-left" : "from-right"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), dv = V.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...u
        } = e, c = V.useRef(null), d = (0, Y.s)(t, c), f = V.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = xv([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, x.jsx)(lv, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, x.jsx)(fv, {
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
              const t = Qm[p ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), fv = V.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...u
        } = e, c = sv(Jm, r);
        return (0, x.jsx)(xf.span, {
          ...u,
          ref: t,
          onKeyDown: hf(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : Gm.concat(Ym).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: hf(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: hf(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: hf(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), pv = "SliderTrack", hv = V.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = sv(pv, r);
        return (0, x.jsx)(xf.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      hv.displayName = pv;
      var mv = "SliderRange",
        vv = V.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = sv(mv, r), i = uv(mv, r), s = V.useRef(null), a = (0, Y.s)(t, s), l = o.values.length, u = o.values.map(e => _v(e, o.min, o.max)), c = l > 1 ? Math.min(...u) : 0, d = 100 - Math.max(...u);
          return (0, x.jsx)(xf.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: a,
            style: {
              ...e.style,
              [i.startEdge]: c + "%",
              [i.endEdge]: d + "%"
            }
          })
        });
      vv.displayName = mv;
      var yv = "SliderThumb",
        gv = V.forwardRef((e, t) => {
          const r = tv(e.__scopeSlider),
            [n, o] = V.useState(null),
            i = (0, Y.s)(t, e => o(e)),
            s = V.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, x.jsx)(bv, {
            ...e,
            ref: i,
            index: s
          })
        }),
        bv = V.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, s = sv(yv, r), a = uv(yv, r), [l, u] = V.useState(null), c = (0, Y.s)(t, e => u(e)), d = !l || s.form || !!l.closest("form"), f = Sh(l), p = s.values[n], h = void 0 === p ? 0 : _v(p, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), v = f?.[a.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - xv([0, 50], [0, n])(t) * r) * r
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
            children: [(0, x.jsx)(ev.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, x.jsx)(xf.span, {
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
                onFocus: hf(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), d && (0, x.jsx)(wv, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: p
            }, n)]
          })
        });
      gv.displayName = yv;
      var wv = V.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = V.useRef(null),
          i = (0, Y.s)(o, n),
          s = $m(t);
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
        }, [s, t]), (0, x.jsx)(xf.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      });

      function _v(e, t, r) {
        return Xm(100 / (r - t) * (e - t), [0, 100])
      }

      function xv(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      wv.displayName = "RadioBubbleInput";
      var Cv = av,
        Ov = hv,
        Pv = vv,
        jv = gv,
        Sv = "focusScope.autoFocusOnMount",
        kv = "focusScope.autoFocusOnUnmount",
        Ev = {
          bubbles: !1,
          cancelable: !0
        },
        Tv = V.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = V.useState(null), u = Of(o), c = Of(i), d = V.useRef(null), f = (0, Y.s)(t, e => l(e)), p = V.useRef({
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
                  a.contains(t) ? d.current = t : Iv(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || Iv(d.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Iv(a)
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
              Lv.add(p);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(Sv, Ev);
                a.addEventListener(Sv, u), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Iv(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(Rv(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Iv(a))
              }
              return () => {
                a.removeEventListener(Sv, u), setTimeout(() => {
                  const t = new CustomEvent(kv, Ev);
                  a.addEventListener(kv, c), a.dispatchEvent(t), t.defaultPrevented || Iv(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(kv, c), Lv.remove(p)
                }, 0)
              }
            }
          }, [a, u, c, p]);
          const h = V.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, i] = function(e) {
                  const t = Rv(e);
                  return [Dv(t, e), Dv(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && Iv(i, {
                select: !0
              })) : (e.preventDefault(), r && Iv(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, x.jsx)(xf.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: h
          })
        });

      function Rv(e) {
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

      function Dv(e, t) {
        for (const r of e)
          if (!Nv(r, {
              upTo: t
            })) return r
      }

      function Nv(e, {
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

      function Iv(e, {
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
      Tv.displayName = "FocusScope";
      var Lv = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Mv(e, t), e.unshift(t)
          },
          remove(t) {
            e = Mv(e, t), e[0]?.resume()
          }
        }
      }();

      function Mv(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var zv = 0;

      function Av() {
        V.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Vv()), document.body.insertAdjacentElement("beforeend", e[1] ?? Vv()), zv++, () => {
            1 === zv && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), zv--
          }
        }, [])
      }

      function Vv() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Fv = r(97359),
        qv = new WeakMap,
        Bv = new WeakMap,
        Wv = {},
        Hv = 0,
        Xv = function(e) {
          return e && (e.host || Xv(e.parentNode))
        },
        Uv = function(e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), function(e, t, r, n) {
            var o = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var r = Xv(t);
                return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            Wv[r] || (Wv[r] = new WeakMap);
            var i = Wv[r],
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
                  var t = e.getAttribute(n),
                    o = null !== t && "false" !== t,
                    l = (qv.get(e) || 0) + 1,
                    u = (i.get(e) || 0) + 1;
                  qv.set(e, l), i.set(e, u), s.push(e), 1 === l && o && Bv.set(e, !0), 1 === u && e.setAttribute(r, "true"), o || e.setAttribute(n, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return c(t), a.clear(), Hv++,
              function() {
                s.forEach(function(e) {
                  var t = qv.get(e) - 1,
                    o = i.get(e) - 1;
                  qv.set(e, t), i.set(e, o), t || (Bv.has(e) || e.removeAttribute(n), Bv.delete(e)), o || e.removeAttribute(r)
                }), --Hv || (qv = new WeakMap, qv = new WeakMap, Bv = new WeakMap, Wv = {})
              }
          }(n, o, r, "aria-hidden")) : function() {
            return null
          }
        },
        Kv = "Dialog",
        [$v, Zv] = vf(Kv),
        [Gv, Yv] = $v(Kv),
        Qv = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = V.useRef(null), l = V.useRef(null), [u, c] = em({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Kv
          });
          return (0, x.jsx)(Gv, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: zf(),
            titleId: zf(),
            descriptionId: zf(),
            open: u,
            onOpenChange: c,
            onOpenToggle: V.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: r
          })
        };
      Qv.displayName = Kv;
      var Jv = "DialogTrigger",
        ey = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Yv(Jv, r), i = (0, Y.s)(t, o.triggerRef);
          return (0, x.jsx)(xf.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": wy(o.open),
            ...n,
            ref: i,
            onClick: hf(e.onClick, o.onOpenToggle)
          })
        });
      ey.displayName = Jv;
      var ty = "DialogPortal",
        [ry, ny] = $v(ty, {
          forceMount: void 0
        }),
        oy = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Yv(ty, t);
          return (0, x.jsx)(ry, {
            scope: t,
            forceMount: r,
            children: V.Children.map(n, e => (0, x.jsx)(Yh, {
              present: r || i.open,
              children: (0, x.jsx)(Gh, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      oy.displayName = ty;
      var iy = "DialogOverlay",
        sy = V.forwardRef((e, t) => {
          const r = ny(iy, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = Yv(iy, e.__scopeDialog);
          return i.modal ? (0, x.jsx)(Yh, {
            present: n || i.open,
            children: (0, x.jsx)(ly, {
              ...o,
              ref: t
            })
          }) : null
        });
      sy.displayName = iy;
      var ay = gf("DialogOverlay.RemoveScroll"),
        ly = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Yv(iy, r);
          return (0, x.jsx)(Fv.A, {
            as: ay,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, x.jsx)(xf.div, {
              "data-state": wy(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        uy = "DialogContent",
        cy = V.forwardRef((e, t) => {
          const r = ny(uy, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = Yv(uy, e.__scopeDialog);
          return (0, x.jsx)(Yh, {
            present: n || i.open,
            children: i.modal ? (0, x.jsx)(dy, {
              ...o,
              ref: t
            }) : (0, x.jsx)(fy, {
              ...o,
              ref: t
            })
          })
        });
      cy.displayName = uy;
      var dy = V.forwardRef((e, t) => {
          const r = Yv(uy, e.__scopeDialog),
            n = V.useRef(null),
            o = (0, Y.s)(t, r.contentRef, n);
          return V.useEffect(() => {
            const e = n.current;
            if (e) return Uv(e)
          }, []), (0, x.jsx)(py, {
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
        fy = V.forwardRef((e, t) => {
          const r = Yv(uy, e.__scopeDialog),
            n = V.useRef(!1),
            o = V.useRef(!1);
          return (0, x.jsx)(py, {
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
        py = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = Yv(uy, r), l = V.useRef(null), u = (0, Y.s)(t, l);
          return Av(), (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(Tv, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, x.jsx)(kf, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": wy(a.open),
                ...s,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, x.jsxs)(x.Fragment, {
              children: [(0, x.jsx)(Oy, {
                titleId: a.titleId
              }), (0, x.jsx)(Py, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        hy = "DialogTitle",
        my = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Yv(hy, r);
          return (0, x.jsx)(xf.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      my.displayName = hy;
      var vy = "DialogDescription",
        yy = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Yv(vy, r);
          return (0, x.jsx)(xf.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      yy.displayName = vy;
      var gy = "DialogClose",
        by = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Yv(gy, r);
          return (0, x.jsx)(xf.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: hf(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function wy(e) {
        return e ? "open" : "closed"
      }
      by.displayName = gy;
      var _y = "DialogTitleWarning",
        [xy, Cy] = mf(_y, {
          contentName: uy,
          titleName: hy,
          docsSlug: "dialog"
        }),
        Oy = ({
          titleId: e
        }) => {
          const t = Cy(_y),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return V.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        Py = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Cy("DialogDescriptionWarning").contentName}}.`;
          return V.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        jy = Qv,
        Sy = ey,
        ky = oy,
        Ey = sy,
        Ty = cy,
        Ry = my,
        Dy = yy,
        Ny = by;
      const Iy = (0, V.createContext)({
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
        Ly = ({
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
          hideTrigger: c = !0,
          ...d
        }) => {
          const f = (0, Z.Ym)(),
            p = (0, K.rl)(),
            h = (0, V.useRef)(null),
            m = (0, V.useRef)(null),
            v = (0, V.useRef)(null),
            y = (0, V.useRef)(null),
            g = (0, V.useRef)(null),
            b = (0, V.useRef)(null),
            w = (0, V.useRef)(null),
            _ = (0, V.useRef)(null),
            C = (0, V.useRef)(null),
            O = (0, V.useRef)(null),
            P = (0, V.useRef)(null),
            j = (0, V.useRef)(null),
            S = (0, V.useRef)(null),
            k = (0, V.useRef)(null),
            E = (0, V.useRef)(null),
            T = (0, V.useRef)(null),
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
          })), (0, x.jsx)(gl, {
            messages: bl,
            locale: f,
            children: (0, x.jsx)(Iy.Provider, {
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
                placeholderRef: O,
                captionRef: P,
                controlsRef: j,
                closeRef: S,
                zoomRef: k,
                zoomInRef: E,
                zoomSliderRef: T,
                zoomOutRef: R,
                resetRef: D,
                downloadRef: N,
                open: I,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: M.current
              },
              children: (0, x.jsx)(zy, {
                ...d
              })
            })
          })
        },
        My = (0, V.createContext)({
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
        zy = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, V.useContext)(Iy), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = js(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: i,
              triggerRef: s,
              triggerBorderRef: a,
              thumbnailRef: l,
              containerRef: u,
              zoomPanRef: c,
              placeholderRef: d,
              imageRef: f
            } = (0, V.useContext)(Iy), p = (0, V.useRef)(null);
            p.current || (p.current = ws.timeline({
              defaults: fl
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), ws.set([d.current, f.current], {
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
                }), n && p.current.to([s.current, a.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([d.current, f.current], {
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
                  [hl]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [hl]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Ia(f.current), t.closing || (ws.set([f.current], {
                  visibility: "visible",
                  ...pl
                }), ws.set([d.current], {
                  visibility: "hidden",
                  ...pl
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
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = js(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: s,
              placeholderRef: a
            } = (0, V.useContext)(Iy), l = t(async e => {
              r.zoomTo(e), ws.set([o.current], {
                ...r.getCurrentTransform(),
                ...pl
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), ws.to([o.current], {
                ...r.getCurrentTransform(),
                ...pl
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), ws.to([o.current], {
                ...r.getCurrentTransform(),
                ...pl
              })
            }), d = t(async () => {
              r.zoomAndPanToInitial(), ws.to([o.current], {
                ...r.getCurrentTransform(),
                ...pl
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              ws.to([i.current], {
                opacity: e,
                [hl]: t,
                ...pl
              })
            }), p = t(async () => {
              ws.to([o.current], {
                ...r.getCurrentTransform(),
                ...pl
              })
            }), h = (0, V.useCallback)(() => {
              n.current && o.current && (r.resize(), ws.set([o.current], {
                ...r.getCurrentTransform(),
                ...pl
              }), ws.set([n.current, a.current], {
                ...r.getUpdatedContentSize(),
                ...pl
              }), ws.set([s.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, V.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), window.addEventListener("resize", h), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), window.removeEventListener("resize", h)
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
            onOpenChange: r
          });
          return (0, x.jsx)(My.Provider, {
            value: {
              update: i,
              openAnim: n,
              close: o,
              zoomIn: s,
              zoomOut: a,
              zoomTo: l,
              resetZoom: u,
              toggleControls: c,
              onOpenChange: r
            },
            children: (0, x.jsx)(jy, {
              ...d
            })
          })
        },
        Ay = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, yl.A)(),
            {
              triggerRef: i,
              triggerBorderRef: s,
              altText: a
            } = (0, V.useContext)(Iy),
            l = (0, K.UP)(i, n),
            u = (0, H.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Dl.OpenButtonLabel, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, x.jsx)(Sy, {
            ref: l,
            ...u,
            children: (0, x.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, x.jsx)($.xV, {
                children: t
              })
            })
          })
        }),
        Vy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, V.useContext)(Iy), i = (0, K.UP)(o, n), s = (0, H.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? $.DX : "img";
          return (0, x.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Fy = (0, V.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, V.useContext)(Iy), o = (0, K.UP)(n, r), i = (0, H.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? $.DX : be.Maximize2;
          return (0, x.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        qy = ({
          ...e
        }) => (0, x.jsx)(ky, {
          ...e
        }),
        By = (0, V.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, V.useContext)(Iy), o = (0, K.UP)(n, r), i = (0, H.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, x.jsx)(Ey, {
            ref: o,
            ...i
          })
        }),
        Wy = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, V.useContext)(My), {
            contentRef: i,
            altText: s,
            triggerRef: a
          } = (0, V.useContext)(Iy), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, V.useContext)(Iy), [t, r] = (0, V.useState)(e.getCursor()), n = (0, V.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, V.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), u = [Tl.xW.tokens, Tl.xW.typography, Rl("dark")].join(" ");
          const c = (0, K.UP)(i, n),
            d = (0, H.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, a),
              className: (0, ge.$)("foundry_1a74xwb9", u),
              style: {
                cursor: l
              }
            });
          return (0, x.jsxs)(Ty, {
            ref: c,
            ...d,
            children: [(0, x.jsx)($.s6, {
              children: (0, x.jsx)(Ry, {
                children: s
              })
            }), t]
          })
        }),
        Hy = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, V.useContext)(Iy);
          (() => {
            const {
              contextSafe: e
            } = js(), {
              toggleControls: t
            } = (0, V.useContext)(My), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: i,
              slide: s
            } = (0, V.useContext)(Iy), a = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (ws.to([n.current], {
                ...s.getCurrentTransform(),
                ...pl
              }), ws.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...pl
              }), ws.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...pl
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || ws.to([n.current], {
                ...s.getCurrentTransform(),
                ...pl
              }))
            }), u = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (ws.to([n.current], {
                ...s.getCurrentTransform(),
                ...pl
              }), ws.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...pl
              }), ws.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...pl
              })))
            }), c = (0, V.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, K.iQ)({
              ref: i,
              onFocusIn: c
            }), Na({
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
            s = (0, H.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, x.jsx)("div", {
            ref: i,
            ...s,
            children: (0, x.jsxs)(Xy, {
              children: [(0, x.jsx)(Uy, {}), t]
            })
          })
        }),
        Xy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, V.useContext)(Iy), i = (0, K.UP)(o, n), s = (0, H.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? $.DX : "div";
          return (0, x.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Uy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, V.useContext)(Iy), i = (0, K.UP)(o, n), s = (0, H.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? $.DX : "img";
          return (0, x.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Ky = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, V.useContext)(Iy), i = (0, K.UP)(o, n), s = (0, H.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? $.DX : "img";
          return (0, x.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        $y = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, V.useContext)(Iy), i = (0, K.UP)(o, n), s = (0, H.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? $.DX : "p";
          return (0, x.jsx)(Dy, {
            asChild: !0,
            children: (0, x.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Zy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, V.useContext)(Iy);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, V.useContext)(My);
            nl(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), nl(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), nl("r", n, {
              enabled: e,
              preventDefault: !0
            }), nl("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = (0, K.UP)(o, n),
            s = (0, H.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? $.DX : "div";
          return (0, x.jsx)(el, {
            children: (0, x.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Gy = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, x.jsx)(x.Fragment, {
            children: n
          });
          const i = (0, H.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, x.jsxs)(Fm, {
            delayDuration: 0,
            children: [(0, x.jsx)(qm, {
              children: n
            }), (0, x.jsxs)(Bm, {
              ...i,
              children: [(0, x.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, x.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, x.jsx)(Wm, {})]
            })]
          })
        },
        Yy = (0, V.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, H.v6)(e, {
            isInline: !0
          });
          return (0, x.jsx)(Il, {
            ref: t,
            ...r
          })
        }),
        Qy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, i) {
          const s = (0, yl.A)(),
            {
              zoomRef: a
            } = (0, V.useContext)(Iy),
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
              } = (0, V.useContext)(Iy), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, V.useContext)(My), [o, i] = (0, V.useState)(!1), [s, a] = (0, V.useState)(!1), [l, u] = (0, V.useState)(0), [c, d] = (0, V.useState)(0), [f, p] = (0, V.useState)(0), h = (0, V.useCallback)(() => {
                i(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), u(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
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
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            v = (0, K.UP)(a, i),
            y = (0, H.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? $.DX : "div";
          return (0, x.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, x.jsx)(Gy, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Dl.ZoomInButtonLabel),
              metadata: s.formatMessage(Dl.ZoomInButtonTooltip, {
                shortcut: (0, x.jsx)(Yy, {
                  shortcut: "+"
                })
              }),
              children: (0, x.jsx)(Fe, {
                label: s.formatMessage(Dl.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: dl({
                  position: "top"
                }),
                onPress: u,
                isDisabled: !l
              })
            }), (0, x.jsxs)(Cv, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, x.jsx)(Ov, {
                className: "foundry_1a74xwbu",
                children: (0, x.jsx)(Pv, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, x.jsx)(Gy, {
                side: "left",
                enabled: r,
                content: s.formatMessage(Dl.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, x.jsx)(jv, {
                  className: "foundry_1a74xwbw",
                  children: (0, x.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, x.jsx)(Gy, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Dl.ZoomOutButtonLabel),
              metadata: s.formatMessage(Dl.ZoomOutButtonTooltip, {
                shortcut: (0, x.jsx)(Yy, {
                  shortcut: "-"
                })
              }),
              children: (0, x.jsx)(Fe, {
                label: s.formatMessage(Dl.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: dl({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !c
              })
            }), (0, x.jsx)($.xV, {
              children: n
            })]
          })
        }),
        Jy = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const i = (0, yl.A)(),
            {
              closeRef: s
            } = (0, V.useContext)(Iy),
            a = (0, K.UP)(s, o),
            l = (0, H.v6)(n, {
              "data-testid": e,
              className: cl({
                styled: !t
              })
            }),
            u = t ? (0, x.jsx)($.DX, {
              ref: a,
              ...l
            }) : (0, x.jsx)(Fe, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: i.formatMessage(Dl.CloseButtonLabel)
            });
          return (0, x.jsx)(Gy, {
            side: "right",
            enabled: r,
            content: i.formatMessage(Dl.CloseButtonLabel),
            metadata: i.formatMessage(Dl.CloseButtonTooltip, {
              shortcut: (0, x.jsx)(Yy, {
                shortcut: "Esc"
              })
            }),
            children: (0, x.jsx)(Ny, {
              asChild: !0,
              children: u
            })
          })
        }),
        eg = (0, V.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, yl.A)(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, V.useContext)(Iy), {
                contextSafe: r
              } = js(), {
                resetZoom: n
              } = (0, V.useContext)(My), [o, i] = (0, V.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                ws.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...pl
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
            } = (0, V.useContext)(Iy),
            a = (0, K.UP)(s, n),
            l = (0, H.v6)(r, i, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, x.jsx)(Gy, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Dl.ResetZoomButtonLabel),
            metadata: o.formatMessage(Dl.ResetZoomButtonTooltip, {
              shortcut: (0, x.jsx)(Yy, {
                shortcut: "R"
              })
            }),
            children: (0, x.jsx)(Fe, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Dl.ResetZoomButtonLabel)
            })
          })
        }),
        tg = (0, V.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, yl.A)(),
            {
              downloadRef: i,
              imageRef: s
            } = (0, V.useContext)(Iy),
            a = (0, K.UP)(i, n),
            l = (0, H.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, x.jsx)(Gy, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Dl.DownloadButtonTooltip),
            children: (0, x.jsx)(Fe, {
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
        rg = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        ng = "undefined" != typeof document ? V.useLayoutEffect : () => {},
        og = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        ig = e => e && "window" in e && e.window === e ? e : og(e).defaultView || window;

      function sg(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
      const ag = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function lg(e, t) {
        return ag ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = ig(e);
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
        }(e, t) && (!e.parentElement || lg(e.parentElement, e))
      }
      const ug = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        cg = ug.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      ug.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const dg = ug.join(':not([hidden]):not([tabindex="-1"]),');

      function fg(e) {
        return e.matches(cg) && lg(e) && !hg(e)
      }

      function pg(e) {
        return e.matches(dg) && lg(e) && !hg(e)
      }

      function hg(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function mg(e) {
        if (function() {
            if (null == vg) {
              vg = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return vg = !0, !0
                  }
                })
              } catch {}
            }
            return vg
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
      let vg = null;

      function yg(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function gg(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function bg(e) {
        let t = (0, V.useRef)({
          isFocused: !1,
          observer: null
        });
        return ng(() => {
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
                  let t = yg(r);
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
      let wg = !1;

      function _g(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function xg(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Cg(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Og = Cg(function() {
          return xg(/^Mac/i)
        }),
        Pg = Cg(function() {
          return xg(/^iPhone/i)
        }),
        jg = Cg(function() {
          return xg(/^iPad/i) || Og() && navigator.maxTouchPoints > 1
        }),
        Sg = Cg(function() {
          return Pg() || jg()
        }),
        kg = (Cg(function() {
          return Og() || Sg()
        }), Cg(function() {
          return _g(/AppleWebKit/i) && !Eg()
        })),
        Eg = Cg(function() {
          return _g(/Chrome/i)
        }),
        Tg = Cg(function() {
          return _g(/Android/i)
        }),
        Rg = Cg(function() {
          return _g(/Firefox/i)
        });
      let Dg = new Map,
        Ng = new Set;

      function Ig() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Dg.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Dg.delete(r.target)), 0 === Dg.size)) {
            for (let e of Ng) e();
            Ng.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = Dg.get(r.target);
          n || (n = new Set, Dg.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function Lg(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of Dg) "isConnected" in e && !e.isConnected && Dg.delete(e)
          }(), 0 === Dg.size ? e() : Ng.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Ig() : document.addEventListener("DOMContentLoaded", Ig));
      let Mg = "default",
        zg = "",
        Ag = new WeakMap;

      function Vg(e) {
        if (Sg()) {
          if ("disabled" !== Mg) return;
          Mg = "restoring", setTimeout(() => {
            Lg(() => {
              if ("restoring" === Mg) {
                const t = og(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = zg || ""), zg = "", Mg = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Ag.has(e)) {
          let t = Ag.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Ag.delete(e)
        }
      }
      const Fg = V.createContext({
        register: () => {}
      });
      Fg.displayName = "PressResponderContext";
      var qg = r(88842),
        Bg = r(57178),
        Wg = r(72562);

      function Hg(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const Xg = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Ug = V.createContext(Xg),
        Kg = V.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let $g = new WeakMap;
      const Zg = "function" == typeof V.useId ? function(e) {
        let t = V.useId(),
          [r] = (0, V.useState)(Jg());
        return e || `${r?"react-aria":`react-aria${Xg.prefix}`}-${t}`
      } : function(e) {
        let t = (0, V.useContext)(Ug),
          r = function(e = !1) {
            let t = (0, V.useContext)(Ug),
              r = (0, V.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = $g.get(e);
                null == r ? $g.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, $g.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function Gg() {
        return !1
      }

      function Yg() {
        return !0
      }

      function Qg(e) {
        return () => {}
      }

      function Jg() {
        return "function" == typeof V.useSyncExternalStore ? V.useSyncExternalStore(Qg, Gg, Yg) : (0, V.useContext)(Kg)
      }
      let eb, tb = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        rb = new Map;

      function nb(e) {
        let [t, r] = (0, V.useState)(e), n = (0, V.useRef)(null), o = Zg(t), i = (0, V.useRef)(null);
        if (eb && eb.register(i, o), tb) {
          const e = rb.get(o);
          e && !e.includes(n) ? e.push(n) : rb.set(o, [n])
        }
        return ng(() => {
          let e = o;
          return () => {
            eb && eb.unregister(i), rb.delete(e)
          }
        }, [o]), (0, V.useEffect)(() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        }), o
      }

      function ob(e, t) {
        if (e === t) return e;
        let r = rb.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = rb.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function ib(e = []) {
        let t = nb(),
          [r, n] = function(e) {
            let [t, r] = (0, V.useState)(e), n = (0, V.useRef)(t), o = (0, V.useRef)(null), i = (0, V.useRef)(() => {
              if (!o.current) return;
              let e = o.current.next();
              e.done ? o.current = null : n.current === e.value ? i.current() : r(e.value)
            });
            ng(() => {
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
        return ng(o, [t, o, ...e]), r
      }

      function sb(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let r = !1;
          const n = e.map(e => {
            const n = ab(e, t);
            return r || (r = "function" == typeof n), n
          });
          if (r) return () => {
            n.forEach((t, r) => {
              "function" == typeof t ? t() : ab(e[r], null)
            })
          }
        }
      }

      function ab(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function lb(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Hg(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = ob(r, o) : "ref" === e && r && o ? t.ref = sb(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, ge.A)(r, o)
          }
        }
        return t
      }

      function ub(e, t) {
        ng(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function cb() {
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
      var db;
      "undefined" != typeof FinalizationRegistry && (eb = new FinalizationRegistry(e => {
        rb.delete(e)
      }));
      const fb = null !== (db = V.useInsertionEffect) && void 0 !== db ? db : ng;

      function pb(e) {
        const t = (0, V.useRef)(null);
        return fb(() => {
          t.current = e
        }, [e]), (0, V.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      var hb = r(35412);

      function mb(e, t) {
        if (!(0, hb.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : sg(r) ? r.host : r.parentNode
        }
        return !1
      }
      const vb = (e = document) => {
        var t;
        if (!(0, hb.Nf)()) return e.activeElement;
        let r = e.activeElement;
        for (; r && "shadowRoot" in r && (null === (t = r.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) r = r.shadowRoot.activeElement;
        return r
      };

      function yb(e) {
        return (0, hb.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }
      const gb = (0, V.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, e => wb(e, t))
        },
        useHref: e => e
      });

      function bb() {
        return (0, V.useContext)(gb)
      }

      function wb(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        Rg() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Og() ? i = !0 : s = !0);
        let u = kg() && Og() && !jg() ? new KeyboardEvent("keydown", {
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
        wb.isOpening = r, mg(e), e.dispatchEvent(u), wb.isOpening = !1
      }

      function _b(e) {
        var t;
        const r = bb().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function xb(e, t, r, n) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let r = e.getAttribute("target");
          return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && r && (e.preventDefault(), t.open(e.currentTarget, e, r, n))
      }

      function Cb(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (Tg() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      wb.isOpening = !1;
      var Ob = new WeakMap;
      class Pb {
        continuePropagation() {
          (0, Wg._)(this, Ob, !1)
        }
        get shouldStopPropagation() {
          return (0, qg._)(this, Ob)
        }
        constructor(e, t, r, n) {
          var o;
          (0, Bg._)(this, Ob, {
            writable: !0,
            value: void 0
          }), (0, Wg._)(this, Ob, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, u = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), s && (null != l && null != c ? (a = l - s.left, u = c - s.top) : (a = s.width / 2, u = s.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = a, this.y = u, this.key = r.key
        }
      }
      const jb = Symbol("linkClicked"),
        Sb = "react-aria-pressable-style",
        kb = "data-react-aria-pressable";

      function Eb(e) {
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
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, V.useContext)(Fg);
          if (t) {
            let {
              register: r,
              ref: n,
              ...o
            } = t;
            e = lb(o, e), r()
          }
          return ub(t, e.ref), e
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
        } = cb(), w = (0, V.useCallback)((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Pb("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        }, [a, n, r]), _ = (0, V.useCallback)((e, n, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Pb("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !a) {
            let r = new Pb("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        }, [a, o, r, t]), x = pb(_), C = (0, V.useCallback)((e, t) => {
          let r = v.current;
          if (a) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new Pb("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }, [a, i]), O = pb(C), P = (0, V.useCallback)(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(Db(t.target, e), t.pointerType, !1), t.isPressed = !1, I(null), t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || Vg(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [d, g, _]), j = pb(P), S = (0, V.useCallback)(e => {
          c && P(e)
        }, [c, P]), k = (0, V.useCallback)(e => {
          a || null == s || s(e)
        }, [a, s]), E = (0, V.useCallback)((e, t) => {
          if (!a && s) {
            let r = new MouseEvent("click", e);
            gg(r, t), s(yg(r))
          }
        }, [a, s]), T = pb(E), [R, D] = (0, V.useState)(!1);
        ng(() => {
          let e = v.current;
          if (R) {
            let t = t => {
                var r;
                if (e.isPressed && e.target && Rb(t, e.target)) {
                  var n;
                  Nb(yb(t), t.key) && t.preventDefault();
                  let r = yb(t),
                    o = mb(e.target, yb(t));
                  x(Db(e.target, t), "keyboard", o), o && T(t, e.target), g(), "Enter" !== t.key && Tb(e.target) && mb(e.target, r) && !t[jb] && (t[jb] = !0, wb(e.target, t, !1)), e.isPressed = !1, D(!1), null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
                } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                  var o;
                  let t = e.metaKeyEvents;
                  e.metaKeyEvents = void 0;
                  for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
                }
              },
              r = e.target,
              n = t => {
                r && Rb(t, r) && !t.repeat && mb(r, yb(t)) && e.target && O(Db(e.target, t), "keyboard")
              },
              o = Hg(n, t);
            return y(og(e.target), "keyup", o, !0), () => {
              b(og(e.target), "keyup", o, !0)
            }
          }
        }, [R, y, g, b]);
        let [N, I] = (0, V.useState)(null);
        ng(() => {
          let e = v.current;
          if ("pointer" === N) {
            let t = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (mb(e.target, yb(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? j(t) : (mg(e.target), e.target.click()))
                      }, 80);
                    y(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else j(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                j(e)
              };
            return y(og(e.target), "pointerup", t, !1), y(og(e.target), "pointercancel", r, !1), () => {
              b(og(e.target), "pointerup", t, !1), b(og(e.target), "pointercancel", r, !1)
            }
          }
        }, [N, y, b]);
        let L = (0, V.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Rb(t.nativeEvent, t.currentTarget) && mb(t.currentTarget, yb(t.nativeEvent))) {
                  var r;
                  Nb(yb(t.nativeEvent), t.key) && t.preventDefault();
                  let n = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, D(!0), e.pointerType = "keyboard", n = w(t, "keyboard")), n && t.stopPropagation(), t.metaKey && Og() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || mb(t.currentTarget, yb(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !wb.isOpening) {
                  let r = !0;
                  if (a && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Cb(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = C(Db(t.currentTarget, t), n),
                        i = _(Db(t.currentTarget, t), n, !0);
                      r = o && i, e.isOverTarget = !1, k(t), P(t)
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
            if (0 !== t.button || !mb(t.currentTarget, yb(t.nativeEvent))) return;
            if (r = t.nativeEvent, !Tg() && 0 === r.width && 0 === r.height || 1 === r.width && 1 === r.height && 0 === r.pressure && 0 === r.detail && "mouse" === r.pointerType) return void(e.pointerType = "virtual");
            var r;
            e.pointerType = t.pointerType;
            let n = !0;
            if (!e.isPressed) {
              e.isPressed = !0, I("pointer"), e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                if (Sg()) {
                  if ("default" === Mg) {
                    const t = og(e);
                    zg = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                  }
                  Mg = "disabled"
                } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                  let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                  Ag.set(e, e.style[t]), e.style[t] = "none"
                }
              }(e.target), n = w(t, e.pointerType);
              let r = yb(t.nativeEvent);
              "releasePointerCapture" in r && ("hasPointerCapture" in r ? r.hasPointerCapture(t.pointerId) && r.releasePointerCapture(t.pointerId) : r.releasePointerCapture(t.pointerId))
            }
            n && t.stopPropagation()
          }, t.onMouseDown = t => {
            if (mb(t.currentTarget, yb(t.nativeEvent)) && 0 === t.button) {
              if (u) {
                let r = function(e) {
                  for (; e && !fg(e);) e = e.parentElement;
                  let t = ig(e),
                    r = t.document.activeElement;
                  if (!r || r === e) return;
                  wg = !0;
                  let n = !1,
                    o = e => {
                      (e.target === r || n) && e.stopImmediatePropagation()
                    },
                    i = t => {
                      (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, mg(r), l()))
                    },
                    s = t => {
                      (t.target === e || n) && t.stopImmediatePropagation()
                    },
                    a = t => {
                      (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, mg(r), l()))
                    };
                  t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                  let l = () => {
                      cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), wg = !1, n = !1
                    },
                    u = requestAnimationFrame(l);
                  return l
                }(t.target);
                r && e.disposables.push(r)
              }
              t.stopPropagation()
            }
          }, t.onPointerUp = t => {
            mb(t.currentTarget, yb(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || C(t, e.pointerType || t.pointerType))
          }, t.onPointerEnter = t => {
            t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, w(Db(e.target, t), e.pointerType))
          }, t.onPointerLeave = t => {
            t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(Db(e.target, t), e.pointerType, !1), S(t))
          }, t.onDragStart = e => {
            mb(e.currentTarget, yb(e.nativeEvent)) && P(e)
          }), t
        }, [a, u, g, d, P, S, _, w, C, k, E]);
        return (0, V.useEffect)(() => {
          if (!f) return;
          const e = og(f.current);
          if (!e || !e.head || e.getElementById(Sb)) return;
          const t = e.createElement("style");
          t.id = Sb, t.textContent = `\n@layer {\n  [${kb}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, V.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            d || Vg(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || h,
          pressProps: lb(p, L, {
            [kb]: !0
          })
        }
      }

      function Tb(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Rb(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof ig(o).HTMLInputElement && !Lb(o, r) || o instanceof ig(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Tb(o)) && "Enter" !== r)
      }

      function Db(e, t) {
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

      function Nb(e, t) {
        return e instanceof HTMLInputElement ? !Lb(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Tb(e)))
        }(e)
      }
      const Ib = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Lb(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Ib.has(e.type)
      }

      function Mb(e) {
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

      function zb(e, t) {
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
          t % 2 ? zb(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Mb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zb(Object(r)).forEach(function(t) {
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
        qb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ab(Ab({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Fb(u, n, e.defaultVariants) && (r += " " + c);
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
      const Bb = (0, V.createContext)(null);

      function Wb() {
        const e = (0, V.useContext)(Bb);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Hb = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...s
        }, a) => {
          const l = (0, H.v6)({
              className: qb({
                status: i
              }),
              "data-testid": t
            }, s),
            u = r ? $.DX : "div";
          return (0, x.jsx)(Bb.Provider, {
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
        Xb = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Wb(), i = (0, H.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: be.Check,
            invalid: be.X,
            neutral: be.TriangleAlert
          }, a = t ? $.DX : s[o];
          return (0, x.jsx)(a, {
            ref: n,
            ...i
          })
        }),
        Ub = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: s
          } = Wb(), a = (0, H.v6)({
            "data-testid": t,
            id: s || i
          }, n), l = r ? $.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });
      var Kb = "ScrollArea",
        [$b, Zb] = vf(Kb),
        [Gb, Yb] = $b(Kb),
        Qb = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...s
          } = e, [a, l] = V.useState(null), [u, c] = V.useState(null), [d, f] = V.useState(null), [p, h] = V.useState(null), [m, v] = V.useState(null), [y, g] = V.useState(0), [b, w] = V.useState(0), [_, C] = V.useState(!1), [O, P] = V.useState(!1), j = (0, Y.s)(t, e => l(e)), S = Km(o);
          return (0, x.jsx)(Gb, {
            scope: r,
            type: n,
            dir: S,
            scrollHideDelay: i,
            scrollArea: a,
            viewport: u,
            onViewportChange: c,
            content: d,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: _,
            onScrollbarXEnabledChange: C,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: O,
            onScrollbarYEnabledChange: P,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, x.jsx)(xf.div, {
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
      Qb.displayName = Kb;
      var Jb = "ScrollAreaViewport",
        ew = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, s = Yb(Jb, r), a = V.useRef(null), l = (0, Y.s)(t, a, s.onViewportChange);
          return (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, x.jsx)(xf.div, {
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
      ew.displayName = Jb;
      var tw = "ScrollAreaScrollbar",
        rw = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Yb(tw, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: s
          } = o, a = "horizontal" === e.orientation;
          return V.useEffect(() => (a ? i(!0) : s(!0), () => {
            a ? i(!1) : s(!1)
          }), [a, i, s]), "hover" === o.type ? (0, x.jsx)(nw, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, x.jsx)(ow, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, x.jsx)(iw, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, x.jsx)(sw, {
            ...n,
            ref: t
          }) : null
        });
      rw.displayName = tw;
      var nw = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Yb(tw, e.__scopeScrollArea), [i, s] = V.useState(!1);
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, x.jsx)(Yh, {
            present: r || i,
            children: (0, x.jsx)(iw, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        ow = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Yb(tw, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = Ow(() => l("SCROLL_END"), 100), [a, l] = (u = {
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
          }, [o.viewport, i, l, s]), (0, x.jsx)(Yh, {
            present: r || "hidden" !== a,
            children: (0, x.jsx)(sw, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: hf(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: hf(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        iw = V.forwardRef((e, t) => {
          const r = Yb(tw, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, s] = V.useState(!1),
            a = "horizontal" === e.orientation,
            l = Ow(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(a ? e : t)
              }
            }, 10);
          return Pw(r.viewport, l), Pw(r.content, l), (0, x.jsx)(Yh, {
            present: n || i,
            children: (0, x.jsx)(sw, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        sw = V.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Yb(tw, e.__scopeScrollArea), i = V.useRef(null), s = V.useRef(0), [a, l] = V.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), u = gw(a.viewport, a.content), c = {
            ...n,
            sizes: a,
            onSizesChange: l,
            hasThumb: Boolean(u > 0 && u < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function d(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = bw(r),
                i = t || o / 2,
                s = o - i,
                a = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                u = r.content - r.viewport;
              return _w([a, l], "ltr" === n ? [0, u] : [-1 * u, 0])(e)
            }(e, s.current, a, t)
          }
          return "horizontal" === r ? (0, x.jsx)(aw, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = ww(o.viewport.scrollLeft, a, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, x.jsx)(lw, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = ww(o.viewport.scrollTop, a);
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
        aw = V.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Yb(tw, e.__scopeScrollArea), [s, a] = V.useState(), l = V.useRef(null), u = (0, Y.s)(t, l, i.onScrollbarXChange);
          return V.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, x.jsx)(dw, {
            "data-orientation": "horizontal",
            ...o,
            ref: u,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": bw(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), xw(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: yw(s.paddingLeft),
                  paddingEnd: yw(s.paddingRight)
                }
              })
            }
          })
        }),
        lw = V.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Yb(tw, e.__scopeScrollArea), [s, a] = V.useState(), l = V.useRef(null), u = (0, Y.s)(t, l, i.onScrollbarYChange);
          return V.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, x.jsx)(dw, {
            "data-orientation": "vertical",
            ...o,
            ref: u,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": bw(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), xw(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: yw(s.paddingTop),
                  paddingEnd: yw(s.paddingBottom)
                }
              })
            }
          })
        }),
        [uw, cw] = $b(tw),
        dw = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: s,
            onThumbPointerDown: a,
            onThumbPositionChange: l,
            onDragScroll: u,
            onWheelScroll: c,
            onResize: d,
            ...f
          } = e, p = Yb(tw, r), [h, m] = V.useState(null), v = (0, Y.s)(t, e => m(e)), y = V.useRef(null), g = V.useRef(""), b = p.viewport, w = n.content - n.viewport, _ = Of(c), C = Of(l), O = Ow(d, 10);

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
              r && _(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, h, w, _]), V.useEffect(C, [n, C]), Pw(h, O), Pw(p.content, O), (0, x.jsx)(uw, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: Of(i),
            onThumbPointerUp: Of(s),
            onThumbPositionChange: C,
            onThumbPointerDown: Of(a),
            children: (0, x.jsx)(xf.div, {
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
        fw = "ScrollAreaThumb",
        pw = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = cw(fw, e.__scopeScrollArea);
          return (0, x.jsx)(Yh, {
            present: r || o.hasThumb,
            children: (0, x.jsx)(hw, {
              ref: t,
              ...n
            })
          })
        }),
        hw = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = Yb(fw, r), s = cw(fw, r), {
            onThumbPositionChange: a
          } = s, l = (0, Y.s)(t, e => s.onThumbChange(e)), u = V.useRef(void 0), c = Ow(() => {
            u.current && (u.current(), u.current = void 0)
          }, 100);
          return V.useEffect(() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (c(), !u.current) {
                  const t = Cw(e, a);
                  u.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [i.viewport, c, a]), (0, x.jsx)(xf.div, {
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
      pw.displayName = fw;
      var mw = "ScrollAreaCorner";
      V.forwardRef((e, t) => {
        const r = Yb(mw, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, x.jsx)(vw, {
          ...e,
          ref: t
        }) : null
      }).displayName = mw;
      var vw = V.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Yb(mw, r), [i, s] = V.useState(0), [a, l] = V.useState(0), u = Boolean(i && a);
        return Pw(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), Pw(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), u ? (0, x.jsx)(xf.div, {
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

      function yw(e) {
        return e ? parseInt(e, 10) : 0
      }

      function gw(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function bw(e) {
        const t = gw(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function ww(e, t, r = "ltr") {
        const n = bw(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - n,
          l = Xm(e, "ltr" === r ? [0, s] : [-1 * s, 0]);
        return _w([0, s], [0, a])(l)
      }

      function _w(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function xw(e, t) {
        return e > 0 && e < t
      }
      var Cw = (e, t = () => {}) => {
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

      function Ow(e, t) {
        const r = Of(e),
          n = V.useRef(0);
        return V.useEffect(() => () => window.clearTimeout(n.current), []), V.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Pw(e, t) {
        const r = Of(t);
        If(() => {
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
      var jw = Qb,
        Sw = ew,
        kw = rw,
        Ew = pw,
        Tw = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Rw = [" ", "Enter"],
        Dw = "Select",
        [Nw, Iw, Lw] = Zm(Dw),
        [Mw, zw] = vf(Dw, [Lw, Th]),
        Aw = Th(),
        [Vw, Fw] = Mw(Dw),
        [qw, Bw] = Mw(Dw),
        Ww = e => {
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
            name: c,
            autoComplete: d,
            disabled: f,
            required: p,
            form: h
          } = e, m = Aw(t), [v, y] = V.useState(null), [g, b] = V.useState(null), [w, _] = V.useState(!1), C = Km(u), [O, P] = em({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Dw
          }), [j, S] = em({
            prop: s,
            defaultProp: a,
            onChange: l,
            caller: Dw
          }), k = V.useRef(null), E = !v || h || !!v.closest("form"), [T, R] = V.useState(new Set), D = Array.from(T).map(e => e.props.value).join(";");
          return (0, x.jsx)(Uh, {
            ...m,
            children: (0, x.jsxs)(Vw, {
              required: p,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: _,
              contentId: zf(),
              value: j,
              onValueChange: S,
              open: O,
              onOpenChange: P,
              dir: C,
              triggerPointerDownPosRef: k,
              disabled: f,
              children: [(0, x.jsx)(Nw.Provider, {
                scope: t,
                children: (0, x.jsx)(qw, {
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
              }), E ? (0, x.jsxs)(O_, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: c,
                autoComplete: d,
                value: j,
                onChange: e => S(e.target.value),
                disabled: f,
                form: h,
                children: [void 0 === j ? (0, x.jsx)("option", {
                  value: ""
                }) : null, Array.from(T)]
              }, D) : null]
            })
          })
        };
      Ww.displayName = Dw;
      var Hw = "SelectTrigger",
        Xw = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = Aw(r), s = Fw(Hw, r), a = s.disabled || n, l = (0, Y.s)(t, s.onTriggerChange), u = Iw(r), c = V.useRef("touch"), [d, f, p] = j_(e => {
            const t = u().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = S_(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), h = e => {
            a || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, x.jsx)(Kh, {
            asChild: !0,
            ...i,
            children: (0, x.jsx)(xf.button, {
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
              "data-placeholder": P_(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: hf(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: hf(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: hf(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Tw.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      Xw.displayName = Hw;
      var Uw = "SelectValue",
        Kw = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = Fw(Uw, r), {
            onValueNodeHasChildrenChange: u
          } = l, c = void 0 !== i, d = (0, Y.s)(t, l.onValueNodeChange);
          return If(() => {
            u(c)
          }, [u, c]), (0, x.jsx)(xf.span, {
            ...a,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: P_(l.value) ? (0, x.jsx)(x.Fragment, {
              children: s
            }) : i
          })
        });
      Kw.displayName = Uw;
      var $w = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, x.jsx)(xf.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      $w.displayName = "SelectIcon";
      var Zw = e => (0, x.jsx)(Gh, {
        asChild: !0,
        ...e
      });
      Zw.displayName = "SelectPortal";
      var Gw = "SelectContent",
        Yw = V.forwardRef((e, t) => {
          const r = Fw(Gw, e.__scopeSelect),
            [n, o] = V.useState();
          if (If(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? G.createPortal((0, x.jsx)(Jw, {
              scope: e.__scopeSelect,
              children: (0, x.jsx)(Nw.Slot, {
                scope: e.__scopeSelect,
                children: (0, x.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, x.jsx)(r_, {
            ...e,
            ref: t
          })
        });
      Yw.displayName = Gw;
      var Qw = 10,
        [Jw, e_] = Mw(Gw),
        t_ = gf("SelectContent.RemoveScroll"),
        r_ = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
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
          } = e, g = Fw(Gw, r), [b, w] = V.useState(null), [_, C] = V.useState(null), O = (0, Y.s)(t, e => w(e)), [P, j] = V.useState(null), [S, k] = V.useState(null), E = Iw(r), [T, R] = V.useState(!1), D = V.useRef(!1);
          V.useEffect(() => {
            if (b) return Uv(b)
          }, [b]), Av();
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
            T && I()
          }, [T, I]);
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
          const [z, A] = j_(e => {
            const t = E().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = S_(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), F = V.useCallback((e, t, r) => {
            const n = !D.current && !r;
            (void 0 !== g.value && g.value === t || n) && (j(e), n && (D.current = !0))
          }, [g.value]), q = V.useCallback(() => b?.focus(), [b]), B = V.useCallback((e, t, r) => {
            const n = !D.current && !r;
            (void 0 !== g.value && g.value === t || n) && k(e)
          }, [g.value]), W = "popper" === n ? o_ : n_, H = W === o_ ? {
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
          return (0, x.jsx)(Jw, {
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
            isPositioned: T,
            searchRef: z,
            children: (0, x.jsx)(Fv.A, {
              as: t_,
              allowPinchZoom: !0,
              children: (0, x.jsx)(Tv, {
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
                children: (0, x.jsx)(kf, {
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
                    ...H,
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
      r_.displayName = "SelectContentImpl";
      var n_ = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = Fw(Gw, r), s = e_(Gw, r), [a, l] = V.useState(null), [u, c] = V.useState(null), d = (0, Y.s)(t, e => c(e)), f = Iw(r), p = V.useRef(!1), h = V.useRef(!0), {
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
                c = window.innerWidth - Qw,
                d = Xm(i, [Qw, Math.max(Qw, c - u)]);
              a.style.minWidth = l + "px", a.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - i,
                l = e.width + s,
                u = Math.max(l, t.width),
                c = window.innerWidth - Qw,
                d = Xm(i, [Qw, Math.max(Qw, c - u)]);
              a.style.minWidth = l + "px", a.style.right = d + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * Qw,
              c = m.scrollHeight,
              d = window.getComputedStyle(u),
              h = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              w = h + g + c + parseInt(d.paddingBottom, 10) + b,
              _ = Math.min(5 * v.offsetHeight, w),
              x = window.getComputedStyle(m),
              C = parseInt(x.paddingTop, 10),
              O = parseInt(x.paddingBottom, 10),
              P = e.top + e.height / 2 - Qw,
              j = l - P,
              S = v.offsetHeight / 2,
              k = h + g + (v.offsetTop + S),
              E = w - k;
            if (k <= P) {
              const e = s.length > 0 && v === s[s.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = u.clientHeight - m.offsetTop - m.offsetHeight,
                r = k + Math.max(j, S + (e ? O : 0) + t + b);
              a.style.height = r + "px"
            } else {
              const e = s.length > 0 && v === s[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(P, h + m.offsetTop + (e ? C : 0) + S) + E;
              a.style.height = t + "px", m.scrollTop = k - P + m.offsetTop
            }
            a.style.margin = `${Qw}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, i.trigger, i.valueNode, a, u, m, v, y, i.dir, n]);
        If(() => b(), [b]);
        const [w, _] = V.useState();
        If(() => {
          u && _(window.getComputedStyle(u).zIndex)
        }, [u]);
        const C = V.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, x.jsx)(i_, {
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
            children: (0, x.jsx)(xf.div, {
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
      n_.displayName = "SelectItemAlignedPosition";
      var o_ = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Qw,
          ...i
        } = e, s = Aw(r);
        return (0, x.jsx)($h, {
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
      o_.displayName = "SelectPopperPosition";
      var [i_, s_] = Mw(Gw, {}), a_ = "SelectViewport", l_ = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = e_(a_, r), s = s_(a_, r), a = (0, Y.s)(t, i.onViewportChange), l = V.useRef(0);
        return (0, x.jsxs)(x.Fragment, {
          children: [(0, x.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, x.jsx)(Nw.Slot, {
            scope: r,
            children: (0, x.jsx)(xf.div, {
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
                    const n = window.innerHeight - 2 * Qw,
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
      l_.displayName = a_;
      var u_ = "SelectGroup",
        [c_, d_] = Mw(u_);
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = zf();
        return (0, x.jsx)(c_, {
          scope: r,
          id: o,
          children: (0, x.jsx)(xf.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = u_;
      var f_ = "SelectLabel";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = d_(f_, r);
        return (0, x.jsx)(xf.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = f_;
      var p_ = "SelectItem",
        [h_, m_] = Mw(p_),
        v_ = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...s
          } = e, a = Fw(p_, r), l = e_(p_, r), u = a.value === n, [c, d] = V.useState(i ?? ""), [f, p] = V.useState(!1), h = (0, Y.s)(t, e => l.itemRefCallback?.(e, n, o)), m = zf(), v = V.useRef("touch"), y = () => {
            o || (a.onValueChange(n), a.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, x.jsx)(h_, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: u,
            onItemTextChange: V.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, x.jsx)(Nw.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, x.jsx)(xf.div, {
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
                  "" !== l.searchRef?.current && " " === e.key || (Rw.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      v_.displayName = p_;
      var y_ = "SelectItemText",
        g_ = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, s = Fw(y_, r), a = e_(y_, r), l = m_(y_, r), u = Bw(y_, r), [c, d] = V.useState(null), f = (0, Y.s)(t, e => d(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), p = c?.textContent, h = V.useMemo(() => (0, x.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: p
          }, l.value), [l.disabled, l.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = u;
          return If(() => (m(h), () => v(h)), [m, v, h]), (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(xf.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? G.createPortal(i.children, s.valueNode) : null]
          })
        });
      g_.displayName = y_;
      var b_ = "SelectItemIndicator";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return m_(b_, r).isSelected ? (0, x.jsx)(xf.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = b_;
      var w_ = "SelectScrollUpButton";
      V.forwardRef((e, t) => {
        const r = e_(w_, e.__scopeSelect),
          n = s_(w_, e.__scopeSelect),
          [o, i] = V.useState(!1),
          s = (0, Y.s)(t, n.onScrollButtonChange);
        return If(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, x.jsx)(x_, {
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
      }).displayName = w_;
      var __ = "SelectScrollDownButton";
      V.forwardRef((e, t) => {
        const r = e_(__, e.__scopeSelect),
          n = s_(__, e.__scopeSelect),
          [o, i] = V.useState(!1),
          s = (0, Y.s)(t, n.onScrollButtonChange);
        return If(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, x.jsx)(x_, {
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
      }).displayName = __;
      var x_ = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = e_("SelectScrollButton", r), s = V.useRef(null), a = Iw(r), l = V.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return V.useEffect(() => () => l(), [l]), If(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, x.jsx)(xf.div, {
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
        return (0, x.jsx)(xf.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var C_ = "SelectArrow";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Aw(r), i = Fw(C_, r), s = e_(C_, r);
        return i.open && "popper" === s.position ? (0, x.jsx)(Zh, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = C_;
      var O_ = V.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = V.useRef(null),
          i = (0, Y.s)(n, o),
          s = $m(t);
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
        }, [s, t]), (0, x.jsx)(xf.select, {
          ...r,
          style: {
            ...tm,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function P_(e) {
        return "" === e || void 0 === e
      }

      function j_(e) {
        const t = Of(e),
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

      function S_(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === n.length && (i = i.filter(e => e !== r));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      O_.displayName = "SelectBubbleInput";
      var k_ = Ww,
        E_ = Xw,
        T_ = Kw,
        R_ = $w,
        D_ = Zw,
        N_ = Yw,
        I_ = l_,
        L_ = v_,
        M_ = g_;

      function z_(e) {
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

      function A_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function V_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? A_(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = z_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function F_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var q_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        B_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = V_(V_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) q_(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return F_(e.variantClassNames, e => F_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        W_ = B_({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        H_ = B_({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        X_ = B_({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        U_ = B_({
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
        K_ = B_({
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
        $_ = B_({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Z_ = (0, V.createContext)(null);

      function G_() {
        const e = (0, V.useContext)(Z_);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Y_ = (0, V.forwardRef)(({
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
          onOpenChange: c,
          isOpen: d,
          size: f = "MD",
          status: p = "neutral",
          ...h
        }, m) => {
          const v = (0, V.useRef)(null),
            y = (0, K.UP)(v, m),
            g = (0, V.useId)(),
            b = (0, V.useId)(),
            w = (0, V.useId)(),
            _ = (0, V.useId)(),
            C = (0, V.useId)(),
            O = (0, V.useId)(),
            [P = !1, j] = (0, K.ic)({
              prop: d,
              defaultProp: u,
              onChange: c
            }),
            S = (0, H.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, x.jsx)(Z_.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: O,
              hintId: _,
              popoverId: C,
              defaultValue: i,
              onValueChange: s,
              value: l,
              isOpen: P,
              setIsOpen: j,
              defaultOpen: u,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, x.jsx)(k_, {
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
        Q_ = (0, V.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = G_(), s = (0, H.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: W_({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, x.jsx)(N_, {
            ...s,
            ref: o,
            children: (0, x.jsx)(I_, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        J_ = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, x.jsxs)(jw, {
            ...o,
            ref: n,
            children: [(0, x.jsx)(I_, {
              asChild: !0,
              children: (0, x.jsx)(Sw, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                children: e
              })
            }), (0, x.jsx)(kw, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, x.jsx)(Ew, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        ex = (0, V.forwardRef)(({
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
            labelId: c,
            hintId: d,
            triggerId: f,
            popoverId: p,
            descriptionId: h,
            isOpen: m,
            value: v,
            size: y
          } = G_(), {
            isPressed: g,
            pressProps: b
          } = Eb({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, H.v6)({
            id: f,
            className: K_({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!u
            }),
            "aria-labelledby": (0, H.VW)(r, c, d),
            "aria-describedby": (0, H.VW)(n, h),
            "aria-activedescendant": v,
            "aria-controls": p,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, H.cJ)(b, "onKeyDown"), i), _ = o ? $.DX : E_;
          return (0, x.jsx)(_, {
            ...w,
            ref: s,
            children: e
          })
        }),
        tx = (0, V.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: i
          } = G_(), s = (0, H.v6)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), a = t ? $.DX : "span";
          return (0, x.jsx)(a, {
            ...s,
            ref: o,
            children: (0, x.jsx)(T_, {
              placeholder: e,
              "aria-label": i
            })
          })
        }),
        rx = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: s
          } = G_(), a = s ? be.ChevronUp : be.ChevronDown, l = (0, H.v6)({
            asChild: !0,
            className: $_({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, x.jsx)(R_, {
            ...l,
            ref: n,
            children: e || (0, x.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        nx = (0, V.forwardRef)(({
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
            triggerId: c
          } = G_(), d = a && !o, f = (0, H.v6)({
            id: i.id || u,
            htmlFor: c,
            "data-testid": e,
            className: U_({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), p = t ? $.DX : "label";
          return (0, x.jsx)($.s6, {
            enabled: n,
            children: (0, x.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        ox = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = G_(), a = (0, H.v6)({
            className: H_({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? $.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        ix = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = G_(), a = (0, H.v6)({
            className: X_({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? $.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        sx = (0, V.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, V.useRef)(null),
            a = (0, K.UP)(s, i),
            l = (0, H.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, x.jsx)(L_, {
            ref: a,
            ...l,
            children: e
          })
        }),
        ax = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, x.jsx)(M_, {
            ref: n,
            asChild: !0,
            children: (0, x.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        lx = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, x.jsx)(R_, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        ux = D_,
        cx = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = G_(), a = (0, H.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? $.DX : Hb;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        dx = Xb,
        fx = Ub,
        px = new Set(["id"]),
        hx = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        mx = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        vx = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        yx = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        gx = /^(data-.*)$/;

      function bx(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          global: o,
          events: i = o,
          propNames: s
        } = t, a = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (px.has(t) || r && hx.has(t) || n && mx.has(t) || o && vx.has(t) || i && (yx.has(t) || t.endsWith("Capture") && yx.has(t.slice(0, -7))) || (null == s ? void 0 : s.has(t)) || gx.test(t)) && (a[t] = e[t]);
        return a
      }

      function wx(e, t, r) {
        let n = pb(() => {
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
      let _x = null,
        xx = "keyboard";
      const Cx = new Set;
      let Ox = new Map,
        Px = !1,
        jx = !1;

      function Sx(e, t) {
        for (let r of Cx) r(e, t)
      }

      function kx(e) {
        Px = !0, !wb.isOpening && function(e) {
          return !(e.metaKey || !Og() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (_x = "keyboard", xx = "keyboard", Sx("keyboard", e))
      }

      function Ex(e) {
        _x = "pointer", xx = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (Px = !0, Sx("pointer", e))
      }

      function Tx(e) {
        !wb.isOpening && Cb(e) && (Px = !0, _x = "virtual", xx = "virtual")
      }

      function Rx(e) {
        e.target !== window && e.target !== document && !wg && e.isTrusted && (Px || jx || (_x = "virtual", xx = "virtual", Sx("virtual", e)), Px = !1, jx = !1)
      }

      function Dx() {
        wg || (Px = !1, jx = !0)
      }

      function Nx(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || Ox.get(ig(e))) return;
        const t = ig(e),
          r = og(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Px = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", kx, !0), r.addEventListener("keyup", kx, !0), r.addEventListener("click", Tx, !0), t.addEventListener("focus", Rx, !0), t.addEventListener("blur", Dx, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", Ex, !0), r.addEventListener("pointermove", Ex, !0), r.addEventListener("pointerup", Ex, !0)), t.addEventListener("beforeunload", () => {
          Ix(e)
        }, {
          once: !0
        }), Ox.set(t, {
          focus: n
        })
      }
      const Ix = (e, t) => {
        const r = ig(e),
          n = og(e);
        t && n.removeEventListener("DOMContentLoaded", t), Ox.has(r) && (r.HTMLElement.prototype.focus = Ox.get(r).focus, n.removeEventListener("keydown", kx, !0), n.removeEventListener("keyup", kx, !0), n.removeEventListener("click", Tx, !0), r.removeEventListener("focus", Rx, !0), r.removeEventListener("blur", Dx, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", Ex, !0), n.removeEventListener("pointermove", Ex, !0), n.removeEventListener("pointerup", Ex, !0)), Ox.delete(r))
      };

      function Lx(e) {
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
        const t = og(e);
        let r;
        "loading" !== t.readyState ? Nx(e) : (r = () => {
          Nx(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let Mx = V.createContext(null);

      function zx(e, t) {
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
            s = bg(i),
            a = (0, V.useCallback)(e => {
              const t = og(e.target),
                n = t ? vb(t) : vb();
              e.target === e.currentTarget && n === yb(e.nativeEvent) && (r && r(e), o && o(!0), s(e))
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
              onKeyDown: Lx(e.onKeyDown),
              onKeyUp: Lx(e.onKeyUp)
            }
          }
        }(e), o = lb(r, n), i = function(e) {
          let t = (0, V.useContext)(Mx) || {};
          ub(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), s = e.isDisabled ? {} : i, a = (0, V.useRef)(e.autoFocus);
        (0, V.useEffect)(() => {
          a.current && t.current && function(e) {
            const t = og(e);
            if ("virtual" === _x) {
              let r = vb(t);
              Lg(() => {
                const n = vb(t);
                n !== r && n !== t.body || !e.isConnected || mg(e)
              })
            } else mg(e)
          }(t.current), a.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: lb({
            ...o,
            tabIndex: l
          }, s)
        }
      }

      function Ax(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: i,
          name: s,
          form: a,
          children: l,
          "aria-label": u,
          "aria-labelledby": c,
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
        } = Eb({
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
        } = Eb({
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
        } = zx(e, r), O = lb(b, C), P = bx(e, {
          labelable: !0
        });
        return wx(r, t.defaultSelected, t.setSelected), {
          labelProps: lb(_, {
            onClick: e => e.preventDefault()
          }),
          inputProps: lb(P, {
            "aria-invalid": f || "invalid" === d || void 0,
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
          isPressed: w || x,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === d
        }
      }
      var Vx;
      const Fx = "undefined" != typeof document ? null !== (Vx = V.useInsertionEffect) && void 0 !== Vx ? Vx : V.useLayoutEffect : () => {};

      function qx(e, t, r) {
        let [n, o] = (0, V.useState)(e || t), i = (0, V.useRef)(n), s = (0, V.useRef)(void 0 !== e), a = void 0 !== e;
        (0, V.useEffect)(() => {
          s.current, s.current = a
        }, [a]);
        let l = a ? e : n;
        Fx(() => {
          i.current = l
        });
        let [, u] = (0, V.useReducer)(() => ({}), {}), c = (0, V.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(i.current) : e;
          Object.is(i.current, n) || (i.current = n, o(n), u(), null == r || r(n, ...t))
        }, [r]);
        return [l, c]
      }

      function Bx(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = qx(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, V.useState)(r);
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

      function Wx(e) {
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

      function Hx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Xx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hx(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Wx(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hx(Object(r)).forEach(function(t) {
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
      var Kx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $x = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Xx(Xx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Kx(u, n, e.defaultVariants) && (r += " " + c);
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
        },
        Zx = $x({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gx = $x({
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
        Yx = $x({
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
        Qx = $x({
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
        Jx = $x({
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
      const eC = (0, V.createContext)(null);

      function tC() {
        const e = (0, V.useContext)(eC);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const rC = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: i = !1,
          isReadOnly: s = !1,
          ...a
        }, l) => {
          const u = (0, H.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, a),
            c = n ? $.DX : "div",
            d = (0, V.useId)(),
            f = (0, V.useId)(),
            p = (0, V.useId)();
          return (0, x.jsx)(eC.Provider, {
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
            children: (0, x.jsx)(c, {
              ...u,
              ref: l,
              children: o
            })
          })
        }),
        nC = (0, V.forwardRef)(({
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
          value: c,
          ...d
        }, f) => {
          const p = (0, V.useRef)(null),
            h = (0, K.UP)(p, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: _
            } = tC(),
            C = Bx({
              isDisabled: w,
              isReadOnly: _,
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
              } = Ax(e, t, r);
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
              "aria-labelledby": (0, H.VW)(n, g),
              "aria-describedby": (0, H.VW)(o, b),
              name: u,
              value: c,
              isDisabled: w,
              isReadOnly: _
            }, C, p),
            P = (0, H.v6)({
              className: Jx({
                appearance: v
              }),
              "data-state": C.isSelected ? "selected" : "unselected",
              "data-disabled": w || _,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || _ || C.toggle()
              }
            }, d);
          return (0, x.jsxs)("div", {
            ...P,
            children: [(0, x.jsx)($.s6, {
              children: (0, x.jsx)("input", {
                ...O,
                ref: h
              })
            }), (0, x.jsx)("div", {
              className: Qx({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, x.jsx)("div", {
                className: Gx({
                  size: m,
                  isSelected: C.isSelected
                })
              })
            })]
          })
        }),
        oC = (0, V.forwardRef)(({
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
          } = tC(), c = (0, H.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: Yx({
              isDisabled: s,
              size: u
            })
          }, o), d = t ? $.DX : "label";
          return (0, x.jsx)($.s6, {
            enabled: n,
            children: (0, x.jsx)(d, {
              ...c,
              ref: i,
              children: r
            })
          })
        }),
        iC = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = tC(), a = n.id || s, l = (0, H.v6)({
            className: Zx({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), u = t ? $.DX : "div";
          return (0, x.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        }),
        sC = {
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
        aC = {
          ...sC,
          customError: !0,
          valid: !1
        },
        lC = {
          isInvalid: !1,
          validationDetails: sC,
          validationErrors: []
        },
        uC = (0, V.createContext)({}),
        cC = "__formValidationState" + Date.now();

      function dC(e) {
        if (e[cC]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[cC];
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
              validationDetails: aC
            } : null,
            u = (0, V.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return fC(r)
                }
                return []
              }(s, o);
              return pC(e)
            }, [s, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let c = (0, V.useContext)(uC),
            d = (0, V.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => fC(c[e])) : fC(c[n]) : [], [c, n]),
            [f, p] = (0, V.useState)(c),
            [h, m] = (0, V.useState)(!1);
          c !== f && (p(c), m(!1));
          let v = (0, V.useMemo)(() => pC(h ? [] : d), [h, d]),
            y = (0, V.useRef)(lC),
            [g, b] = (0, V.useState)(lC),
            w = (0, V.useRef)(lC),
            [_, x] = (0, V.useState)(!1);
          return (0, V.useEffect)(() => {
            if (!_) return;
            x(!1);
            let e = u || i || y.current;
            hC(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: l || v || u || i || lC,
            displayValidation: "native" === a ? l || v || g : l || v || u || i || g,
            updateValidation(e) {
              "aria" !== a || hC(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = lC;
              hC(e, w.current) || (w.current = e, b(e)), "native" === a && x(!1), m(!0)
            },
            commitValidation() {
              "native" === a && x(!0), m(!0)
            }
          }
        }(e)
      }

      function fC(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function pC(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: aC
        } : null
      }

      function hC(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }

      function mC(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        ng(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: vC(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, V.useRef)(!1),
          s = pb(() => {
            i.current || t.resetValidation()
          }),
          a = pb(e => {
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
            }(i) === r.current && (o ? o() : null === (s = r.current) || void 0 === s || s.focus(), _x = a = "keyboard", xx = a, Sx(a, null)), e.preventDefault()
          }),
          l = pb(() => {
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

      function vC(e) {
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
      const yC = ({
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
        gC = ({
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
        bC = ({
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
        wC = ({
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
        _C = ({
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
        xC = ({
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

      function CC(e) {
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

      function OC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function PC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? OC(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = CC(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : OC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var SC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = PC(PC({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) SC(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jC(e.variantClassNames, e => jC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        EC = kC({
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
        TC = kC({
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
        RC = kC({
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
        DC = kC({
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
      const NC = (0, V.createContext)(null);

      function IC() {
        const e = (0, V.useContext)(NC);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const LC = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...i
        }, s) => {
          const a = (0, H.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, H.cJ)(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? $.DX : "div",
            u = (0, V.useId)(),
            c = (0, V.useId)(),
            d = (0, V.useId)();
          return (0, x.jsx)(NC.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: c,
              inputId: d,
              ...i
            },
            children: (0, x.jsx)(l, {
              ...a,
              ref: s,
              children: o
            })
          })
        }),
        MC = (0, V.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: i,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": u,
          "aria-labelledby": c,
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
          } = IC(), _ = (0, V.useRef)(null), C = d.id || b, {
            isPressed: O,
            pressProps: P
          } = Eb({
            ref: _
          }), {
            setSelected: j,
            toggle: S,
            ...k
          } = Bx({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: E,
            isSelected: T,
            isDisabled: R,
            isReadOnly: D
          } = function(e, t, r) {
            let n = dC({
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
                isPressed: c,
                isDisabled: d,
                isReadOnly: f
              } = Ax({
                ...e,
                isInvalid: o
              }, t, r);
            mC(e, n, r);
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
            } = Eb({
              isDisabled: d || f,
              onPress() {
                let {
                  [cC]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: lb(a, v, (0, V.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: u,
                "aria-required": h && "aria" === m || void 0,
                required: h && "native" === m
              },
              isSelected: u,
              isPressed: c,
              isDisabled: d,
              isReadOnly: f,
              isInvalid: o,
              validationErrors: i,
              validationDetails: s
            }
          }({
            "aria-label": "",
            id: C,
            name: o,
            ...w
          }, {
            ...k,
            toggle: S,
            setSelected: w.isReadOnly ? () => !1 : j
          }, _), N = (0, H.v6)({
            className: TC({
              size: p
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || R || D || S()
            }
          }, P, d), I = (0, H.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, H.VW)(c, g),
            "aria-describedby": (0, H.VW)(l, y),
            "aria-errormessage": (0, H.VW)(u, w.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, E), L = m ? a[`Dash${p}`] : a[`Check${p}`];
          return (0, x.jsxs)("div", {
            ...N,
            children: [(0, x.jsx)($.s6, {
              children: (0, x.jsx)("input", {
                ...I,
                ref: f
              })
            }), (0, x.jsx)("div", {
              className: EC({
                size: p,
                appearance: h
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : T ? "checked" : "unchecked",
              "data-disabled": R || D,
              "data-testid": e,
              "data-pressed": O,
              children: (0, x.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (T || m) && (0, x.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        zC = (0, V.forwardRef)(({
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
            isRequired: c
          } = IC(), d = i.id || l, f = c && !o, p = (0, H.v6)({
            className: DC({
              size: a,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: i.htmlFor || u
          }, i), h = t ? $.DX : "label";
          return (0, x.jsx)($.s6, {
            enabled: n,
            children: (0, x.jsx)(h, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        AC = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = IC(), a = n.id || s, l = (0, H.v6)({
            className: RC({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), u = t ? $.DX : "div";
          return (0, x.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        }),
        VC = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = IC(), s = n.id || i, a = (0, H.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: s
          }, n), l = t ? $.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });

      function FC(e) {
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

      function qC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function BC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qC(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = FC(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qC(Object(r)).forEach(function(t) {
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
      var HC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        XC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = BC(BC({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) HC(u, n, e.defaultVariants) && (r += " " + c);
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
        },
        UC = XC({
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
        KC = XC({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $C = XC({
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
        ZC = XC({
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
      const GC = (0, V.createContext)(null);

      function YC() {
        const e = (0, V.useContext)(GC);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const QC = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const u = (0, H.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, a),
            c = e ? $.DX : "div",
            d = (0, V.useId)(),
            f = (0, V.useId)(),
            p = (0, V.useId)(),
            h = (0, V.useId)();
          return (0, x.jsx)(GC.Provider, {
            value: {
              labelId: d,
              descriptionId: f,
              hintId: p,
              inputId: h,
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: s,
              ...a
            },
            children: (0, x.jsx)(c, {
              ref: l,
              ...u,
              children: t
            })
          })
        }),
        JC = (0, V.forwardRef)(({
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
            isRequired: c
          } = YC(), d = (0, H.v6)({
            className: $C({
              isDisabled: u,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: a,
            htmlFor: l
          }, i), f = t ? $.DX : "label";
          return (0, x.jsx)($.s6, {
            enabled: n,
            children: (0, x.jsx)(f, {
              ...d,
              ref: s,
              children: e
            })
          })
        }),
        eO = (0, V.forwardRef)(({
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
          } = YC(), b = (0, V.useRef)(null), w = (0, K.UP)(b, c), _ = (0, H.v6)({
            className: ZC({
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
            "aria-labelledby": (0, H.VW)(u.id, f, h, a),
            "aria-describedby": (0, H.VW)(d, l),
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
          }, u), C = e ? $.DX : "textarea";
          return (0, x.jsx)(C, {
            ref: w,
            ..._,
            children: t
          })
        }),
        tO = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = YC(), a = (0, H.v6)({
            className: UC({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? $.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        rO = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = YC(), a = (0, H.v6)({
            className: KC({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? $.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        nO = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = YC(), a = (0, H.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? $.DX : Hb;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        oO = Xb,
        iO = Ub;
      let sO = Math.round(1e10 * Math.random()),
        aO = 0;
      const lO = new WeakMap;
      class uO {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!mb(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return mb(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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

      function cO(e, t) {
        return !!e && !!t && t.some(t => mb(t, e))
      }

      function dO(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? pg : fg,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = og(o),
          s = function(e, t, r, n) {
            return (0, hb.Nf)() ? new uO(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if (mb(null == t ? void 0 : t.from, e)) return NodeFilter.FILTER_REJECT;
              if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    let t = [];
                    if (e.form) {
                      var r, n;
                      let o = null === (n = e.form) || void 0 === n || null === (r = n.elements) || void 0 === r ? void 0 : r.namedItem(e.name);
                      t = [...null != o ? o : []]
                    } else t = [...og(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                    return !!t && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !cO(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s
      }
      class fO {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new pO({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && cO(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new fO;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new pO({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class pO {
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

      function hO(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = nb(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function mO(e) {
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
          t = nb(t);
          let s = nb(),
            a = {};
          return r && (n = n ? `${s} ${n}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: hO({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), a = ib([Boolean(t), Boolean(r), n, o]), l = ib([Boolean(t), Boolean(r), n, o]);
        return s = lb(s, {
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
      new fO;
      const vO = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        yO = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function gO(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return vO.has(t.script)
        }
        let t = e.split("-")[0];
        return yO.has(t)
      }
      const bO = Symbol.for("react-aria.i18n.locale");

      function wO() {
        let e = "undefined" != typeof window && window[bO] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: gO(e) ? "rtl" : "ltr"
        }
      }
      let _O = wO(),
        xO = new Set;

      function CO() {
        _O = wO();
        for (let e of xO) e(_O)
      }
      const OO = V.createContext(null);

      function PO() {
        let e = function() {
          let e = Jg(),
            [t, r] = (0, V.useState)(_O);
          return (0, V.useEffect)(() => (0 === xO.size && window.addEventListener("languagechange", CO), xO.add(r), () => {
            xO.delete(r), 0 === xO.size && window.removeEventListener("languagechange", CO)
          }), []), e ? {
            locale: "undefined" != typeof window && window[bO] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, V.useContext)(OO) || e
      }

      function jO(e, t) {
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
        } = PO(), {
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: m,
          errorMessageProps: v
        } = mO({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = bx(e, {
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
          } = cb(), l = (0, V.useCallback)(e => {
            mb(e.currentTarget, e.target) && i.current.isFocusWithin && !mb(e.currentTarget, e.relatedTarget) && (i.current.isFocusWithin = !1, a(), r && r(e), o && o(!1))
          }, [r, o, i, a]), u = bg(l), c = (0, V.useCallback)(e => {
            if (!mb(e.currentTarget, e.target)) return;
            const t = og(e.target),
              r = vb(t);
            if (!i.current.isFocusWithin && r === yb(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, u(e);
              let r = e.currentTarget;
              s(t, "focus", e => {
                if (i.current.isFocusWithin && !mb(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  gg(n, r);
                  let o = yg(n);
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
        }), b = nb(r);
        return lO.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: lb(y, {
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
              let n, o = dO(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof ig(e).HTMLInputElement && "radio" === e.type
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
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        }
      }

      function SO(e) {
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

      function kO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function EO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? kO(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = SO(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kO(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function TO(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var RO = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        DO = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = EO(EO({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) RO(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return TO(e.variantClassNames, e => TO(e, e => e.split(" ")[0]))
            }
          }, t
        },
        NO = DO({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        IO = DO({
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
      const LO = (0, V.createContext)(null);

      function MO() {
        const e = (0, V.useContext)(LO);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const zO = (0, V.forwardRef)(({
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
          ...c
        }, d) => {
          const f = (0, V.useRef)(null),
            p = (0, K.UP)(f, d),
            h = (0, V.useId)(),
            m = (0, V.useId)(),
            v = (0, V.useId)(),
            y = function(e) {
              let t = (0, V.useMemo)(() => e.name || `radio-group-${sO}-${++aO}`, [e.name]);
              var r;
              let [n, o] = qx(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i] = (0, V.useState)(n), [s, a] = (0, V.useState)(null), l = dC({
                ...e,
                value: n
              }), u = l.displayValidation.isInvalid;
              var c;
              return {
                ...l,
                name: t,
                selectedValue: n,
                defaultSelectedValue: void 0 !== e.value ? i : null !== (c = e.defaultValue) && void 0 !== c ? c : null,
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
              ...c,
              isInvalid: "invalid" === u
            }),
            {
              radioGroupProps: g
            } = jO({
              ...c,
              orientation: r,
              "aria-labelledby": (0, H.VW)(h, s),
              "aria-describedby": (0, H.VW)(m, v, a),
              "aria-errormessage": (0, H.VW)(v, l)
            }, y),
            b = (0, H.v6)({
              className: "foundry_njguqn0"
            }, g, (0, H.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = i ? $.DX : "div";
          return (0, x.jsx)(LO.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: h,
              errorId: v,
              status: u,
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
        AO = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: s
          } = MO(), a = (0, H.v6)({
            "data-testid": e,
            className: IO({
              size: i,
              orientation: s
            })
          }, n), l = t ? $.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: r
          })
        }),
        VO = (0, V.forwardRef)(({
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
          } = MO(), u = a && !o, c = (0, H.v6)({
            id: i.id || l,
            "data-testid": e,
            className: NO({
              showAsterisk: u
            })
          }, i), d = t ? $.DX : "div";
          return (0, x.jsx)($.s6, {
            enabled: n,
            children: (0, x.jsx)(d, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        FO = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = MO(), s = (0, H.v6)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), a = t ? $.DX : "div";
          return (0, x.jsx)(a, {
            ...s,
            ref: o,
            children: r
          })
        }),
        qO = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: s
          } = MO(), a = (0, H.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: s
          }, n), l = r ? $.DX : Hb;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        BO = Xb,
        WO = Ub;
      var HO = DO({
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
        XO = DO({
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
        UO = DO({
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
        KO = DO({
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
      const $O = ({
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
        ZO = ({
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
        GO = ({
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
        YO = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? $.DX : "label";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        QO = (0, V.forwardRef)(({
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
              isReadOnly: d,
              isRequired: f
            } = MO(),
            {
              isPressed: p,
              pressProps: h
            } = Eb({
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
                onPress: c,
                onPressUp: d,
                onClick: f
              } = e;
              const p = e.isDisabled || t.isDisabled;
              let h = t.selectedValue === n,
                {
                  pressProps: m,
                  isPressed: v
                } = Eb({
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
                } = Eb({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: u,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: p,
                  onPress(e) {
                    var o;
                    null == c || c(e), t.setSelectedValue(n), null === (o = r.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = zx(lb(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                w = lb(m, b),
                _ = bx(e, {
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
              } = lO.get(t);
              return wx(r, t.defaultSelectedValue, t.setSelectedValue), mC({
                validationBehavior: S
              }, t, r), {
                labelProps: lb(y, (0, V.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: lb(_, {
                  ...w,
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
            }, r),
            b = c[`Dot${u}`];
          return (0, x.jsxs)("div", {
            className: KO({
              size: u
            }),
            children: [(0, x.jsx)($.s6, {
              children: (0, x.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, x.jsx)("div", {
              className: UO({
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
        JO = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: s,
            state: a
          } = MO(), l = (0, V.useId)(), u = (0, H.v6)({
            id: l,
            "data-testid": e,
            className: XO({
              size: s,
              isDisabled: a?.isDisabled
            })
          }, o), c = t ? $.DX : "div";
          return (0, x.jsx)($.s6, {
            enabled: n,
            children: (0, x.jsx)(c, {
              ...u,
              ref: i,
              children: r
            })
          })
        }),
        eP = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = MO(), s = (0, H.v6)({
            "data-testid": e,
            className: HO({
              isDisabled: i
            })
          }, n), a = t ? $.DX : "span";
          return (0, x.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        });

      function tP(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function rP(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return tP(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? tP(e, t) : void 0
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

      function nP(e, t, r) {
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

      function oP(e) {
        return oP = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, oP(e)
      }

      function iP() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (iP = function() {
          return !!e
        })()
      }

      function sP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function aP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sP(Object(r), !0).forEach(function(t) {
            nP(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function lP(e, t) {
        return lP = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, lP(e, t)
      }

      function uP(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          s = n,
          a = "",
          l = rP(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var u, c = r.value,
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

      function cP(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          s = t.showMask,
          a = 0,
          l = "",
          u = rP(n);
        try {
          for (u.s(); !(r = u.n()).done;) {
            var c = r.value;
            if (!s && void 0 === e[a]) break;
            Object.prototype.hasOwnProperty.call(o, c) && void 0 !== e[a] ? l += e[a++] : l += c
          }
        } catch (e) {
          u.e(e)
        } finally {
          u.f()
        }
        if (i && !s) {
          for (var d = n.length - 1; d >= 0 && l[d] === n[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function dP(e, t) {
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

      function fP(e) {
        return e.length > 0 ? nP({}, e, /./) : {}
      }

      function pP(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(n, o), u = i.slice(n, o), c = "", d = 0; d < u.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, u[d]);
          f && void 0 !== l[d] && l[d] !== u[d] ? c += l[d] : f && a && (c += u[d])
        }
        return c
      }

      function hP(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? fP(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return cP(uP(e, {
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
      var mP = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function vP(e) {
        return mP.includes(e) ? "\\".concat(e) : e
      }

      function yP(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function gP(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function bP(e, t, r) {
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

      function wP(e) {
        return wP = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, wP(e)
      }

      function _P() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (_P = function() {
          return !!e
        })()
      }

      function xP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function CP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xP(Object(r), !0).forEach(function(t) {
            bP(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function OP(e, t) {
        return OP = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, OP(e, t)
      }

      function PP(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return PP = function(e) {
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
              if (_P()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && OP(o, r.prototype), o
            }(e, arguments, wP(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), OP(r, e)
        }, PP(e)
      }
      var jP, SP = function(e) {
          function t(e) {
            var r;
            return yP(this, t), (r = function(e, t, r) {
              return t = wP(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, _P() ? Reflect.construct(t, r || [], wP(e).constructor) : t.apply(e, r))
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
            }), t && OP(e, t)
          }(t, e), gP(t)
        }(PP(Error)),
        kP = ["options"],
        EP = ["text", "email", "tel", "search", "url"],
        TP = gP(function e(t) {
          var r = t.init,
            n = t.tracking;
          yP(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (EP.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = i.initialValue,
                a = void 0 === s ? "" : s,
                l = i.controlled,
                u = void 0 !== l && l,
                c = r({
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
              Object.defineProperty(e, "value", CP(CP({}, v), {}, {
                set: function(t) {
                  var r;
                  m.value = t, null == v || null === (r = v.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = d;
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
                    if (h.cachedId === h.id) throw new SP("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new SP("The selection attributes have not been initialized.");
                    var l, u = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = u.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && i.length < u.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > u.length) throw new SP("Input type detection error.");
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
                      g = n({
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
                          var i = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(g, kP);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), p.value = w.value, p.options = b, m.selectionStart = w.selectionStart, m.selectionEnd = w.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, u)
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
      jP = TP, Object.defineProperty(jP.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var RP, DP = ["track", "modify"];

      function NP(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? fP(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var IP = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = oP(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, iP() ? Reflect.construct(t, r || [], oP(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = NP(r),
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
                l = NP(r),
                u = l.track,
                c = l.modify,
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
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(l, DP),
                f = d.mask,
                p = d.replacement,
                h = d.showMask,
                m = d.separate,
                v = aP(aP({}, "insert" === t ? {
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
              if (!1 === y) throw new SP("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == c ? void 0 : c(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? fP(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = pP(n, aP({
                  end: s
                }, o)),
                w = pP(n, aP({
                  start: a
                }, o)),
                _ = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(_, "");
              if (b && (b = uP(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: m
                }), x = x.slice(b.length)), i && (i = uP(i, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new SP("The character does not match the key value of the `replacement` object.");
              if (m) {
                var C = f.slice(s, a).replace(_, ""),
                  O = C.length - i.length;
                O < 0 ? w = w.slice(-O) : O > 0 && (w = C.slice(-O) + w)
              }
              w && (w = uP(w, {
                replacementChars: x,
                replacement: p,
                separate: m
              }));
              var P = cP(b + i + w, {
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
                    c = dP(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || u && "replacement" === t
                    }),
                    d = null === (t = c[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = c[a.length - 1]) || void 0 === r ? void 0 : r.index,
                    p = null === (n = c[a.length + s.length]) || void 0 === n ? void 0 : n.index;
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
            return hP(e, NP(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? fP(n) : n;
              return dP(hP(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, NP(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? fP(n) : n,
                i = pP(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return uP(i, {
                replacementChars: r.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, NP(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? fP(n) : n, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < r.length; l++) {
                var u = r[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, u) ? "".concat(s ? "(?!".concat(vP(u), ")") : "", "(").concat(o[u].source, ")") : vP(u), l === r.length - 1 && (i && (a += ")?".repeat(r.length)), a += "$")
              }
              return a
            }(e, NP(r))
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
            }), t && lP(e, t)
          }(e, TP),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function LP(e) {
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

      function MP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function zP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? MP(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = LP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : MP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function AP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      RP = IP, Object.defineProperty(RP.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var VP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        FP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zP(zP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) VP(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return AP(e.variantClassNames, e => AP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        qP = FP({
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
        BP = FP({
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
        WP = FP({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        HP = FP({
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
        XP = FP({
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
        UP = FP({
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
      const KP = (0, V.createContext)(null);

      function $P() {
        const e = (0, V.useContext)(KP);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const ZP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const [u, c] = (0, V.useState)("text"), d = (0, V.useId)(), f = (0, V.useId)(), p = (0, V.useId)(), h = (0, H.v6)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, a), m = e ? $.DX : "div";
          return (0, x.jsx)(KP.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: s,
              labelId: d,
              inputId: f,
              descriptionId: p,
              type: u,
              setType: c,
              ...a
            },
            children: (0, x.jsx)(m, {
              ref: l,
              ...h,
              children: t
            })
          })
        }),
        GP = (0, V.forwardRef)(({
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
            labelId: c
          } = $P(), d = l && !o, f = (0, H.v6)({
            id: i.id || c,
            htmlFor: i.htmlFor || u,
            "data-testid": e,
            className: UP({
              showAsterisk: d,
              isDisabled: a
            })
          }, i), p = t ? $.DX : "label";
          return (0, x.jsx)($.s6, {
            enabled: n,
            children: (0, x.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        YP = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = $P(), s = (0, H.v6)({
            "data-testid": e,
            className: WP({
              isDisabled: i
            })
          }, n), a = t ? $.DX : "span";
          return (0, x.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        }),
        QP = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: s,
            status: a
          } = $P(), l = (0, H.v6)({
            "data-testid": e,
            className: (0, ge.$)(qP({
              isDisabled: i,
              isReadOnly: s,
              isInvalid: "invalid" === a,
              isSuccess: "success" === a
            }), "foundry_8oytzo1")
          }, n), u = t ? $.DX : "div";
          return (0, x.jsx)(u, {
            ref: o,
            ...l,
            children: r
          })
        }),
        JP = (0, V.forwardRef)(({
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
            type: w
          } = $P();
          (0, V.useEffect)(() => b(u), []);
          const _ = "invalid" === m,
            C = (0, H.v6)({
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
              className: (0, ge.$)(XP({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              ..._ && {
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
                }(a, new IP(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: i
            }),
            P = (0, K.UP)(r && n ? O : null, d),
            j = t ? $.DX : "input";
          return (0, x.jsx)(j, {
            ref: P,
            ...C
          })
        }),
        ej = (0, V.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: s
          } = $P(), a = (0, H.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, ge.$)(HP({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? $.DX : be[e];
          return (0, x.jsx)(l, {
            ref: i,
            ...a
          })
        }),
        tj = (0, V.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = $P(), n = (0, H.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzow"
          }, e);
          return (0, x.jsx)(Fe, {
            ref: t,
            ...n
          })
        }),
        rj = (0, V.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i
          } = $P(), s = "password" === o, a = s ? e : t, l = (0, H.v6)({
            label: a,
            icon: s ? "Eye" : "EyeOff",
            onPress: () => {
              i(s ? "text" : "password")
            }
          }, r);
          return (0, x.jsxs)(Fm, {
            children: [(0, x.jsx)(qm, {
              children: (0, x.jsx)(tj, {
                ref: n,
                ...l
              })
            }), (0, x.jsxs)(Bm, {
              side: "bottom",
              align: "end",
              children: [a, (0, x.jsx)(Wm, {})]
            })]
          })
        }),
        nj = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = $P(), a = (0, H.v6)({
            className: BP({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? $.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        oj = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = $P(), a = (0, H.v6)({
            className: "foundry_8oytzo12",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? $.DX : Hb;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        ij = Xb,
        sj = Ub;

      function aj(e, t) {
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
          focusableProps: c
        } = zx(e, t), {
          pressProps: d,
          isPressed: f
        } = Eb({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ref: t
        }), p = bx(l, {
          labelable: !0
        }), h = lb(c, d), m = bb();
        return {
          isPressed: f,
          linkProps: lb(p, _b(e), {
            ...h,
            ...u,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), xb(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function lj(e) {
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

      function uj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function cj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? uj(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = lj(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function dj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pj = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cj(cj({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) fj(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dj(e.variantClassNames, e => dj(e, e => e.split(" ")[0]))
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
      const hj = (0, V.forwardRef)(({
        children: e,
        ...t
      }, r) => {
        const n = (0, Z.zQ)(),
          o = "string" == typeof t.size ? t.size : t.size?.[n] ?? "LG",
          i = (0, H.v6)({
            className: pj({
              size: o
            })
          }, t);
        return (0, x.jsx)(Fe, {
          appearance: "ghost",
          icon: "X",
          ...i,
          ref: r,
          children: e
        })
      });

      function mj(e) {
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

      function vj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vj(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = mj(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wj = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yj(yj({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) bj(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gj(e.variantClassNames, e => gj(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _j = wj({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xj = wj({
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
        Cj = wj({
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
      const Oj = (0, V.createContext)(null);

      function Pj() {
        const e = (0, V.useContext)(Oj);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const jj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const s = e ? $.DX : "div",
            a = (0, H.v6)({
              className: Cj({
                status: r,
                background: n
              })
            }, o);
          return (0, x.jsx)(Oj.Provider, {
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
        Sj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        kj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Ej = {
          danger: be.CircleX,
          information: be.Info,
          success: be.CircleCheck,
          warning: be.TriangleAlert
        },
        Tj = (0, V.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Pj(), i = e ? $.DX : Ej[o], s = (0, H.v6)({
            className: xj({
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
        Rj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Dj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Nj = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.useRef)(null),
            s = (0, K.UP)(i, o),
            a = e ? $.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = aj(n, i),
            c = (0, H.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, x.jsx)(a, {
            "data-pressed": u,
            "data-testid": r,
            ref: s,
            ...c,
            children: t
          })
        }),
        Ij = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? $.DX : "div",
            s = (0, H.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        Lj = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? $.DX : "div";
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, ge.$)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        Mj = (0, V.forwardRef)((e, t) => {
          const {
            background: r
          } = Pj(), n = "none" !== r, o = (0, H.v6)({
            className: _j({
              hasBackground: n
            })
          }, e);
          return (0, x.jsx)(hj, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function zj(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Aj(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : zj(n) && zj(o) ? Aj(n, o) : n === o
        }))
      }

      function Vj(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function Fj(e) {
        return "number" == typeof e
      }

      function qj(e) {
        return "string" == typeof e
      }

      function Bj(e) {
        return "boolean" == typeof e
      }

      function Wj(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Hj(e) {
        return Math.abs(e)
      }

      function Xj(e) {
        return Math.sign(e)
      }

      function Uj(e, t) {
        return Hj(e - t)
      }

      function Kj(e) {
        return Qj(e).map(Number)
      }

      function $j(e) {
        return e[Zj(e)]
      }

      function Zj(e) {
        return Math.max(0, e.length - 1)
      }

      function Gj(e, t) {
        return t === Zj(e)
      }

      function Yj(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function Qj(e) {
        return Object.keys(e)
      }

      function Jj(e, t) {
        return [e, t].reduce((e, t) => (Qj(t).forEach(r => {
          const n = e[r],
            o = t[r],
            i = Wj(n) && Wj(o);
          e[r] = i ? Jj(n, o) : o
        }), e), {})
      }

      function eS(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function tS() {
        let e = [];
        const t = {
          add: function(r, n, o, i = {
            passive: !0
          }) {
            let s;
            if ("addEventListener" in r) r.addEventListener(n, o, i), s = () => r.removeEventListener(n, o, i);
            else {
              const e = r;
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

      function rS(e = 0, t = 0) {
        const r = Hj(e - t);

        function n(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function i(e) {
          return n(e) || o(e)
        }
        const s = {
          length: r,
          max: t,
          min: e,
          constrain: function(r) {
            return i(r) ? n(r) ? e : t : r
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: n,
          removeOffset: function(e) {
            return r ? e - r * Math.ceil((e - t) / r) : e
          }
        };
        return s
      }

      function nS(e, t, r) {
        const {
          constrain: n
        } = rS(0, e), o = e + 1;
        let i = s(t);

        function s(e) {
          return r ? Hj((o + e) % o) : n(e)
        }

        function a() {
          return i
        }

        function l() {
          return nS(e, a(), r)
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

      function oS(e, t, r, n, o, i, s, a, l, u, c, d, f, p, h, m, v, y, g) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, C = tS(), O = tS(), P = rS(50, 225).constrain(p.measure(20)), j = {
          mouse: 300,
          touch: 400
        }, S = {
          mouse: 500,
          touch: 600
        }, k = h ? 43 : 25;
        let E = !1,
          T = 0,
          R = 0,
          D = !1,
          N = !1,
          I = !1,
          L = !1;

        function M(e) {
          if (!eS(e, n) && e.touches.length >= 2) return z(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            s = Uj(t, T),
            l = Uj(r, R);
          if (!N && !L) {
            if (!e.cancelable) return z(e);
            if (N = s > l, !N) return z(e)
          }
          const c = i.pointerMove(e);
          s > m && (I = !0), u.useFriction(.3).useDuration(.75), a.start(), o.add(w(c)), e.preventDefault()
        }

        function z(e) {
          const t = c.byDistance(0, !1).index !== d.get(),
            r = i.pointerUp(e) * (h ? S : j)[L ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * Xj(e)),
                n = c.byDistance(e, !h).distance;
              return h || Hj(e) < P ? n : v && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Hj(e) <= Hj(t)) return 0;
              const r = Uj(Hj(e), Hj(t));
              return Hj(r / e)
            }(r, n),
            s = k - 10 * o,
            a = y + o / 50;
          N = !1, D = !1, O.clear(), u.useDuration(s).useFriction(a), l.distance(n, !h), L = !1, f.emit("pointerUp")
        }

        function A(e) {
          I && (e.stopPropagation(), e.preventDefault(), I = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function a(a) {
              (Bj(g) || g(e, a)) && function(e) {
                const a = eS(e, n);
                L = a, I = h && a && !e.buttons && E, E = Uj(o.get(), s.get()) >= 2, a && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (D = !0, i.pointerDown(e), u.useFriction(0).useDuration(0), o.set(s), function() {
                  const e = L ? r : t;
                  O.add(e, "touchmove", M, x).add(e, "touchend", z).add(e, "mousemove", M, x).add(e, "mouseup", z)
                }(), T = i.readPoint(e), R = i.readPoint(e, b), f.emit("pointerDown"))
              }(a)
            }
            const l = t;
            C.add(l, "dragstart", e => e.preventDefault(), x).add(l, "touchmove", () => {}, x).add(l, "touchend", () => {}).add(l, "touchstart", a).add(l, "mousedown", a).add(l, "touchcancel", z).add(l, "contextmenu", z).add(l, "click", A, !0)
          },
          destroy: function() {
            C.clear(), O.clear()
          },
          pointerDown: function() {
            return D
          }
        }
      }

      function iS(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (eS(r, t) ? r : r.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return r = e, n = e, i(e)
          },
          pointerMove: function(e) {
            const t = i(e) - i(n),
              s = o(e) - o(r) > 170;
            return n = e, s && (r = e), t
          },
          pointerUp: function(e) {
            if (!r || !n) return 0;
            const t = i(n) - i(r),
              s = o(e) - o(r),
              a = o(e) - o(n) > 170,
              l = t / s;
            return s && !a && Hj(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function sS(e, t, r, n, o, i, s) {
        const a = [e].concat(n);
        let l, u, c = [],
          d = !1;

        function f(e) {
          return o.measureSize(s.measure(e))
        }
        return {
          init: function(o) {
            i && (u = f(e), c = n.map(f), l = new ResizeObserver(r => {
              (Bj(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (d) return;
                  const r = i.target === e,
                    s = n.indexOf(i.target),
                    a = r ? u : c[s];
                  if (Hj(f(r ? e : n[s]) - a) >= .5) {
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

      function aS(e, t, r, n, o) {
        const i = o.measure(10),
          s = o.measure(50),
          a = rS(.1, .99);
        let l = !1;

        function u() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: u,
          constrain: function(o) {
            if (!u()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = Hj(e[l] - t.get()),
              d = r.get() - t.get(),
              f = a.constrain(c / s);
            r.subtract(d * f), !o && Hj(d) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function lS(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: s,
            reachedMax: a
          } = rS(o, i),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? a(r.get()) : -1 === e && s(r.get())
                }(t)) return;
              const o = e * (-1 * t);
              n.forEach(e => e.add(o))
            }
          };
        return l
      }

      function uS(e) {
        let t = e;

        function r(e) {
          return Fj(e) ? e : e.get()
        }
        const n = {
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
        };
        return n
      }

      function cS(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          n = t.style;
        let o = null,
          i = !1;
        return {
          clear: function() {
            i || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (i) return;
            const s = (a = e.direction(t), Math.round(100 * a) / 100);
            var a;
            s !== o && (n.transform = r(s), o = s)
          },
          toggleActive: function(e) {
            i = !e
          }
        }
      }

      function dS(e, t, r, n, o, i, s, a, l) {
        const u = Kj(o),
          c = Kj(o).reverse(),
          d = function() {
            const e = s[0];
            return h(p(c, e), r, !1)
          }().concat(function() {
            const e = t - s[0] - 1;
            return h(p(u, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function p(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function h(o, s, u) {
          const c = function(e) {
            return i.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(s);
          return o.map(t => {
            const n = u ? 0 : -r,
              o = u ? r : 0,
              i = u ? "end" : "start",
              s = c[t][i];
            return {
              index: t,
              loopPoint: s,
              slideLocation: uS(-1),
              translate: cS(e, l[t]),
              target: () => a.get() > s ? n : o
            }
          })
        }
        const m = {
          canLoop: function() {
            return d.every(({
              index: e
            }) => {
              const r = u.filter(t => t !== e);
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

      function fS(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver(e => {
              o || (Bj(r) || r(i, e)) && function(e) {
                for (const r of e)
                  if ("childList" === r.type) {
                    i.reInit(), t.emit("slidesChanged");
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

      function pS(e, t, r, n, o, i, s) {
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
          watchSlides: w,
          watchDrag: _,
          watchFocus: x
        } = i, C = {
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
        }, O = C.measure(t), P = r.map(C.measure), j = function(e, t) {
          const r = "rtl" === t,
            n = "y" === e,
            o = !n && r ? -1 : 1,
            i = {
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
          return i
        }(l, u), S = j.measureSize(O), k = function(e) {
          const t = {
            measure: function(t) {
              return e * (t / 100)
            }
          };
          return t
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
              return qj(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(a, S), T = !d && !!g, R = d || !!g, {
          slideSizes: D,
          slideSizesWithGaps: N,
          startGap: I,
          endGap: L
        } = function(e, t, r, n, o, i) {
          const {
            measureSize: s,
            startEdge: a,
            endEdge: l
          } = e, u = r[0] && o, c = function() {
            if (!u) return 0;
            const e = r[0];
            return Hj(t[a] - e[a])
          }(), d = function() {
            if (!u) return 0;
            const e = i.getComputedStyle($j(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(s), p = r.map((e, t, r) => {
            const n = !t,
              o = Gj(r, t);
            return n ? f[t] + c : o ? f[t] + d : r[t + 1][a] - e[a]
          }).map(Hj);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: c,
            endGap: d
          }
        }(j, O, P, r, R, o), M = function(e, t, r, n, o, i, s, a, l) {
          const {
            startEdge: u,
            endEdge: c,
            direction: d
          } = e, f = Fj(r), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return Kj(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? Kj(e).reduce((r, f, p) => {
                  const h = $j(r) || 0,
                    m = 0 === h,
                    v = f === Zj(e),
                    y = o[u] - i[h][u],
                    g = o[u] - i[f][c],
                    b = !n && m ? d(s) : 0,
                    w = Hj(g - (!n && v ? d(a) : 0) - (y + b));
                  return p && w > t + l && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(j, S, v, d, O, P, I, L, 2), {
          snaps: z,
          snapsAligned: A
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: s
          } = e, {
            groupSlides: a
          } = o, l = a(n).map(e => $j(e)[s] - e[0][i]).map(Hj).map(t.measure), u = n.map(e => r[i] - e[i]).map(e => -Hj(e)), c = a(u).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: u,
            snapsAligned: c
          }
        }(j, E, O, P, M), V = -$j(z) + $j(N), {
          snapsContained: F,
          scrollContainLimit: q
        } = function(e, t, r, n) {
          const o = rS(-t + e, 0),
            i = r.map((e, t) => {
              const {
                min: n,
                max: i
              } = o, s = o.constrain(e), l = !t, u = Gj(r, t);
              return l ? i : u || a(n, s) ? n : a(i, s) ? i : s
            }).map(e => parseFloat(e.toFixed(3))),
            s = function() {
              const e = i[0],
                t = $j(i);
              return rS(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function a(e, t) {
            return Uj(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === n) return i;
              const {
                min: r,
                max: a
              } = s;
              return i.slice(r, a)
            }(),
            scrollContainLimit: s
          }
        }(S, V, A, g), B = T ? F : A, {
          limit: W
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: rS(r ? n - e : $j(t), n)
          }
        }(V, B, d), H = nS(Zj(B), c, d), X = H.clone(), U = Kj(r), K = function(e, t, r, n) {
          const o = tS(),
            i = 1e3 / 60;
          let s = null,
            a = 0,
            l = 0;

          function u(e) {
            if (!l) return;
            s || (s = e, r(), r());
            const o = e - s;
            for (s = e, a += o; a >= i;) r(), a -= i;
            n(a / i), l && (l = t.requestAnimationFrame(u))
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
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), d && (i.loop(e.direction()), s.loop()), t.to(n.get()), v && u.emit("settle"), m || u.emit("scroll")
        })(ae, e)), $ = B[H.get()], Z = uS($), G = uS($), Y = uS($), Q = uS($), J = function(e, t, r, n, o) {
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
              const t = n.get() - e.get();
              let o = 0;
              return a ? (r.set(e), i += t / a, i *= l, u += i, e.add(i), o = u - c) : (i = 0, r.set(n), e.set(n), o = t), s = Xj(o), c = u, p
            },
            settled: function() {
              return Hj(n.get() - t.get()) < .001
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
        }(Z, Y, G, Q, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: i,
            removeOffset: s,
            constrain: a
          } = n;

          function l(e) {
            return e.concat().sort((e, t) => Hj(e) - Hj(t))[0]
          }

          function u(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter(e => Xj(e) === n);
            return i.length ? l(i) : $j(o) - r
          }
          const c = {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: c,
                  distance: d
                } = function(r) {
                  const n = e ? s(r) : a(r),
                    o = t.map((e, t) => ({
                      diff: u(e - n, 0),
                      index: t
                    })).sort((e, t) => Hj(e.diff) - Hj(t.diff)),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: n
                  }
                }(l),
                f = !e && i(l);
              return !n || f ? {
                index: c,
                distance: r
              } : {
                index: c,
                distance: r + u(t[c] - d, 0)
              }
            },
            byIndex: function(e, r) {
              return {
                index: e,
                distance: u(t[e] - o.get(), r)
              }
            },
            shortcut: u
          };
          return c
        }(d, B, V, W, Q), te = function(e, t, r, n, o, i, s) {
          function a(o) {
            const a = o.distance,
              l = o.index !== t.get();
            i.add(a), a && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (r.set(t.get()), t.set(o.index), s.emit("select"))
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
        }(K, H, X, J, ee, Q, s), re = function(e) {
          const {
            max: t,
            length: r
          } = e, n = {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          };
          return n
        }(W), ne = tS(), oe = function(e, t, r, n) {
          const o = {};
          let i, s = null,
            a = null,
            l = !1;
          const u = {
            init: function() {
              i = new IntersectionObserver(e => {
                l || (e.forEach(e => {
                  const r = t.indexOf(e.target);
                  o[r] = e
                }), s = null, a = null, r.emit("slidesInView"))
              }, {
                root: e.parentElement,
                threshold: n
              }), t.forEach(e => i.observe(e))
            },
            destroy: function() {
              i && i.disconnect(), l = !0
            },
            get: function(e = !0) {
              if (e && s) return s;
              if (!e && a) return a;
              const t = function(e) {
                return Qj(o).reduce((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: i
                    } = o[n];
                  return (e && i || !e && !i) && t.push(n), t
                }, [])
              }(e);
              return e && (s = t), e || (a = t), t
            }
          };
          return u
        }(t, r, s, m), {
          slideRegistry: ie
        } = function(e, t, r, n, o, i) {
          const {
            groupSlides: s
          } = o, {
            min: a,
            max: l
          } = n, u = function() {
            const n = s(i),
              o = !e || "keepSnaps" === t;
            return 1 === r.length ? [i] : o ? n : n.slice(a, l).map((e, t, r) => {
              const n = !t,
                o = Gj(r, t);
              return n ? Yj($j(r[0]) + 1) : o ? Yj(Zj(i) - $j(r)[0] + 1, $j(r)[0]) : e
            })
          }();
          return {
            slideRegistry: u
          }
        }(T, g, B, q, M, U), se = function(e, t, r, n, o, i, s, a) {
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
                  (Bj(a) || a(d, t)) && function(t) {
                    if ((new Date).getTime() - u > 10) return;
                    s.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex(e => e.includes(t));
                    Fj(i) && (o.useDuration(0), n.index(i, 0), s.emit("slideFocus"))
                  }(c)
                }, l)
              }))
            }
          };
          return d
        }(e, r, ie, te, J, ne, s, x), ae = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: s,
          containerRect: O,
          slideRects: P,
          animation: K,
          axis: j,
          dragHandler: oS(j, e, n, o, Q, iS(j, o), Z, K, te, J, ee, H, s, k, p, h, y, .68, _),
          eventStore: ne,
          percentOfView: k,
          index: H,
          indexPrevious: X,
          limit: W,
          location: Z,
          offsetLocation: Y,
          previousLocation: G,
          options: i,
          resizeHandler: sS(t, s, o, r, j, b, C),
          scrollBody: J,
          scrollBounds: aS(W, Y, Q, J, k),
          scrollLooper: lS(V, W, Y, [Z, Y, G, Q]),
          scrollProgress: re,
          scrollSnapList: B.map(re.get),
          scrollSnaps: B,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: dS(j, S, V, D, N, z, B, Y, r),
          slideFocus: se,
          slidesHandler: fS(t, s, w),
          slidesInView: oe,
          slideIndexes: U,
          slideRegistry: ie,
          slidesToScroll: M,
          target: Q,
          translate: cS(j, t)
        };
        return ae
      }
      const hS = {
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

      function mS(e) {
        function t(e, t) {
          return Jj(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = Qj(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => Qj(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function vS(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = mS(o),
          s = function(e) {
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
          }(i),
          a = tS(),
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
            mergeOptions: u,
            optionsAtMedia: c,
            optionsMediaQueries: d
          } = i,
          {
            on: f,
            off: p,
            emit: h
          } = l,
          m = j;
        let v, y, g, b, w = !1,
          _ = u(hS, vS.globalOptions),
          x = u(_),
          C = [];

        function O(t) {
          const r = pS(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? O(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function P(t, r) {
          w || (_ = u(_, t), x = c(_), C = r || C, function() {
            const {
              container: t,
              slides: r
            } = x, n = qj(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = qj(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = O(x), d([_, ...C.map(({
            options: e
          }) => e)]).forEach(e => a.add(e, "change", j)), x.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(T), v.eventHandler.init(T), v.resizeHandler.init(T), v.slidesHandler.init(T), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(T), y = s.init(T, C)))
        }

        function j(e, t) {
          const r = E();
          S(), P(u({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function S() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), s.destroy(), a.clear()
        }

        function k(e, t, r) {
          x.active && !w && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), v.scrollTo.index(e, r || 0))
        }

        function E() {
          return v.index.get()
        }
        const T = {
          canScrollNext: function() {
            return v.index.add(1).get() !== E()
          },
          canScrollPrev: function() {
            return v.index.add(-1).get() !== E()
          },
          containerNode: function() {
            return g
          },
          internalEngine: function() {
            return v
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
          selectedScrollSnap: E,
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
        return P(t, r), setTimeout(() => l.emit("init"), 0), T
      }

      function yS(e = {}, t = []) {
        const r = (0, V.useRef)(e),
          n = (0, V.useRef)(t),
          [o, i] = (0, V.useState)(),
          [s, a] = (0, V.useState)(),
          l = (0, V.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, V.useEffect)(() => {
          Aj(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, V.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = Vj(e),
              n = Vj(t);
            return r.every((e, t) => Aj(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, V.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && s) {
            vS.globalOptions = yS.globalOptions;
            const e = vS(s, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }, [s, i]), [a, o]
      }

      function gS(e = {}) {
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
      vS.globalOptions = void 0, yS.globalOptions = void 0, gS.globalOptions = void 0;
      const bS = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function wS(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function _S(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function xS(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function CS(e = {}) {
        let t, r, n, o, i = [],
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
          ("pointerDown" === t ? xS : _S)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return n.forEach(e => _S(e, r)), i.forEach(e => xS(e, r)), e
        }

        function p() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          i = f(t, i, c.snapped)
        }

        function h() {
          const e = r.slidesInView();
          s = f(e, s, c.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(i, s) {
            r = i;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = s, v = f(bS, CS.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (c.loop = wS(t.loop), xS(n, c.loop)), t.draggable && w && (c.draggable = wS(t.draggable), xS(n, c.draggable)), t.dragging && (c.dragging = wS(t.dragging), l.forEach(e => r.on(e, d))), t.snapped && (c.snapped = wS(t.snapped), a.forEach(e => r.on(e, p)), p()), t.inView && (c.inView = wS(t.inView), u.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            l.forEach(e => r.off(e, d)), a.forEach(e => r.off(e, p)), u.forEach(e => r.off(e, h)), _S(n, c.loop), _S(n, c.draggable), _S(n, c.dragging), f([], i, c.snapped), f([], s, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return m
      }
      CS.globalOptions = void 0;

      function OS(e) {
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

      function PS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function jS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? PS(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = OS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : PS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function SS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var kS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ES = "foundry_qmpv6yv",
        TS = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = jS(jS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) kS(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return SS(e.variantClassNames, e => SS(e, e => e.split(" ")[0]))
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
      const RS = (0, V.createContext)(null);

      function DS() {
        const e = (0, V.useContext)(RS);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const NS = (0, V.forwardRef)(({
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
                [l, u] = yS({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [gS(), CS()]),
                c = (0, V.useRef)(0),
                d = (0, V.useRef)(!1),
                f = n[s],
                p = (0, V.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), a(t), d.current = !0
                }, [u]),
                h = (0, V.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
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
                      const l = (u = 1 - Math.abs(a * c.current), Math.min(Math.max(u, 0), 1)).toString();
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
                isInitialized: d.current,
                loopPagination: e,
                canScrollNext: () => u?.canScrollNext() || !1,
                canScrollPrev: () => u?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: c,
              isInitialized: d,
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
            m = (0, H.v6)({
              className: TS(c)
            }, h, a),
            v = e ? $.DX : "div";
          return (0, x.jsx)(RS.Provider, {
            value: u,
            children: (0, x.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        IS = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        LS = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = DS();
          if (!e && !n || !n?.status) return null;
          const o = e || IS[n.status],
            i = be[o],
            s = (0, H.v6)({
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
        MS = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            i = (0, H.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        zS = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, s) => {
          const a = e ? $.DX : "div",
            l = (0, H.v6)({
              className: "foundry_qmpv6yo"
            }, i);
          return (0, x.jsx)(a, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        AS = (0, V.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = DS(), s = (0, H.v6)({
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
        VS = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.useRef)(null),
            s = (0, K.UP)(i, o),
            a = e ? $.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = aj(n, i),
            c = (0, H.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, x.jsx)(a, {
            "data-pressed": u,
            "data-testid": r,
            ref: s,
            ...l,
            ...c,
            children: t
          })
        }),
        FS = (0, V.forwardRef)((e, t) => {
          const r = (0, H.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, x.jsx)(hj, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        qS = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? $.DX : "div",
            s = (0, H.v6)({
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
        BS = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = DS(), i = (0, H.v6)({
            className: ES
          }, t);
          return (0, x.jsx)(Fe, {
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
        WS = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = DS(), i = (0, H.v6)({
            className: ES
          }, t);
          return (0, x.jsx)(Fe, {
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
        HS = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = DS(), i = (0, H.v6)({
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

      function XS(e) {
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

      function US(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function KS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? US(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = XS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : US(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $S(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ZS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        GS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = KS(KS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ZS(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $S(e.variantClassNames, e => $S(e, e => e.split(" ")[0]))
            }
          }, t
        },
        YS = GS({
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
        QS = GS({
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
        JS = GS({
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
      const ek = (0, V.createContext)(null);

      function tk() {
        const e = (0, V.useContext)(ek);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const rk = (0, V.forwardRef)(({
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
          const c = {
              size: n,
              background: o,
              color: i,
              hasBorder: s,
              isDisabled: a
            },
            d = (0, H.v6)({
              className: QS(c)
            }, l),
            f = e ? $.DX : "div";
          return (0, x.jsx)(ek.Provider, {
            value: c,
            children: (0, x.jsx)(f, {
              ref: u,
              "data-testid": r,
              "aria-disabled": a,
              ...d,
              children: t
            })
          })
        }),
        nk = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = tk(), s = e ? $.DX : "div", a = (0, H.v6)({
            className: JS({
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
        ok = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = be[e],
            o = (0, H.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, x.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        ik = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = tk(), i = (0, H.v6)({
            className: YS({
              background: n
            })
          }, t);
          return (0, x.jsx)(Fe, {
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
      var sk = "ToastProvider",
        [ak, lk, uk] = Zm("Toast"),
        [ck, dk] = vf("Toast", [uk]),
        [fk, pk] = ck(sk),
        hk = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
          } = e, [a, l] = V.useState(null), [u, c] = V.useState(0), d = V.useRef(!1), f = V.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${sk}\`. Expected non-empty \`string\`.`), (0, x.jsx)(ak.Provider, {
            scope: t,
            children: (0, x.jsx)(fk, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: i,
              toastCount: u,
              viewport: a,
              onViewportChange: l,
              onToastAdd: V.useCallback(() => c(e => e + 1), []),
              onToastRemove: V.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      hk.displayName = sk;
      var mk = "ToastViewport",
        vk = ["F8"],
        yk = "toast.viewportPause",
        gk = "toast.viewportResume",
        bk = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = vk,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, s = pk(mk, r), a = lk(r), l = V.useRef(null), u = V.useRef(null), c = V.useRef(null), d = V.useRef(null), f = (0, Y.s)(t, d, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = s.toastCount > 0;
          V.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), V.useEffect(() => {
            const e = l.current,
              t = d.current;
            if (h && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(yk);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(gk);
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
                n = [r, ...zk(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [a]);
          return V.useEffect(() => {
            const e = d.current;
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
                  Ak(o.slice(i + 1)) ? t.preventDefault() : n ? u.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, x.jsxs)(Nf, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, x.jsx)(_k, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                Ak(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, x.jsx)(ak.Slot, {
              scope: r,
              children: (0, x.jsx)(xf.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), h && (0, x.jsx)(_k, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Ak(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      bk.displayName = mk;
      var wk = "ToastFocusProxy",
        _k = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, i = pk(wk, r);
          return (0, x.jsx)(rm, {
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
      _k.displayName = wk;
      var xk = "Toast",
        Ck = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            ...s
          } = e, [a, l] = em({
            prop: n,
            defaultProp: o ?? !0,
            onChange: i,
            caller: xk
          });
          return (0, x.jsx)(Yh, {
            present: r || a,
            children: (0, x.jsx)(jk, {
              open: a,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: Of(e.onPause),
              onResume: Of(e.onResume),
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
      Ck.displayName = xk;
      var [Ok, Pk] = ck(xk, {
        onClose() {}
      }), jk = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
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
        } = e, m = pk(xk, r), [v, y] = V.useState(null), g = (0, Y.s)(t, e => y(e)), b = V.useRef(null), w = V.useRef(null), _ = o || m.duration, C = V.useRef(0), O = V.useRef(_), P = V.useRef(0), {
          onToastAdd: j,
          onToastRemove: S
        } = m, k = Of(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), s()
        }), E = V.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(P.current), C.current = (new Date).getTime(), P.current = window.setTimeout(k, e))
        }, [k]);
        V.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                E(O.current), u?.()
              },
              r = () => {
                const e = (new Date).getTime() - C.current;
                O.current = O.current - e, window.clearTimeout(P.current), l?.()
              };
            return e.addEventListener(yk, r), e.addEventListener(gk, t), () => {
              e.removeEventListener(yk, r), e.removeEventListener(gk, t)
            }
          }
        }, [m.viewport, _, l, u, E]), V.useEffect(() => {
          i && !m.isClosePausedRef.current && E(_)
        }, [i, _, m.isClosePausedRef, E]), V.useEffect(() => (j(), () => S()), [j, S]);
        const T = V.useMemo(() => v ? Ik(v) : null, [v]);
        return m.viewport ? (0, x.jsxs)(x.Fragment, {
          children: [T && (0, x.jsx)(Sk, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: T
          }), (0, x.jsx)(Ok, {
            scope: r,
            onClose: k,
            children: G.createPortal((0, x.jsx)(ak.ItemSlot, {
              scope: r,
              children: (0, x.jsx)(Df, {
                asChild: !0,
                onEscapeKeyDown: hf(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || k(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, x.jsx)(xf.li, {
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
                      n = Boolean(w.current),
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
                    n ? (w.current = u, Lk("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : Mk(u, m.swipeDirection, l) ? (w.current = u, Lk("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: hf(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Mk(t, m.swipeDirection, m.swipeThreshold) ? Lk("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : Lk("toast.swipeCancel", f, n, {
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
      }), Sk = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = pk(xk, t), [i, s] = V.useState(!1), [a, l] = V.useState(!1);
        return function(e = () => {}) {
          const t = Of(e);
          If(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), V.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, x.jsx)(Gh, {
          asChild: !0,
          children: (0, x.jsx)(rm, {
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
        return (0, x.jsx)(xf.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var kk = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, x.jsx)(xf.div, {
          ...n,
          ref: t
        })
      });
      kk.displayName = "ToastDescription";
      var Ek = "ToastAction",
        Tk = V.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, x.jsx)(Nk, {
            altText: r,
            asChild: !0,
            children: (0, x.jsx)(Dk, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ek}\`. Expected non-empty \`string\`.`), null)
        });
      Tk.displayName = Ek;
      var Rk = "ToastClose",
        Dk = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Pk(Rk, r);
          return (0, x.jsx)(Nk, {
            asChild: !0,
            children: (0, x.jsx)(xf.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: hf(e.onClick, o.onClose)
            })
          })
        });
      Dk.displayName = Rk;
      var Nk = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, x.jsx)(xf.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Ik(e) {
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
              } else t.push(...Ik(e))
          }
        }), t
      }

      function Lk(e, t, r, {
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
        }), n ? Cf(o, i) : o.dispatchEvent(i)
      }
      var Mk = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          i = n > o;
        return "left" === t || "right" === t ? i && n > r : !i && o > r
      };

      function zk(e) {
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

      function Ak(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var Vk = hk,
        Fk = bk,
        qk = Ck,
        Bk = kk,
        Wk = Tk,
        Hk = Dk;

      function Xk(e) {
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

      function Uk(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Kk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uk(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Xk(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uk(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $k(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Zk = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gk = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kk(Kk({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Zk(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $k(e.variantClassNames, e => $k(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Yk = Gk({
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
        Qk = Gk({
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
        Jk = Gk({
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
      const eE = ({
          testId: e,
          ...t
        }) => (0, x.jsx)(Vk, {
          "data-testid": e,
          ...t
        }),
        tE = (0, V.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const i = (0, H.v6)({
            className: Jk({
              position: r
            })
          }, n);
          return (0, x.jsx)(Fk, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        rE = (0, V.createContext)(null);

      function nE() {
        const e = (0, V.useContext)(rE);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const oE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, i) => {
          const s = e ? $.DX : qk,
            a = (0, H.v6)({
              className: Qk({
                appearance: n
              })
            }, o);
          return (0, x.jsx)(rE.Provider, {
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
        iE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? $.DX : Bk,
            s = (0, H.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        sE = {
          danger: be.CircleX,
          information: be.Info,
          success: be.CircleCheck,
          warning: be.TriangleAlert,
          avocado: be.CircleCheck
        },
        aE = (0, V.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = nE(), o = e ? $.DX : sE[n], i = (0, H.v6)({
            className: Yk({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, x.jsx)(o, {
            ref: r,
            ...i
          })
        }),
        lE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, H.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, x.jsx)(Wk, {
            ref: o,
            "data-testid": r,
            ...i,
            children: e ? (0, x.jsx)($.DX, {
              children: t
            }) : (0, x.jsx)(Te, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        uE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, i) => {
          const s = (0, H.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, x.jsx)(Hk, {
            ref: i,
            "data-testid": r,
            ...s,
            children: e ? (0, x.jsx)($.DX, {
              children: t
            }) : (0, x.jsx)(hj, {
              size: "SM",
              label: n
            })
          })
        });

      function cE(e) {
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

      function dE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function fE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dE(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = cE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        mE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fE(fE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) hE(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pE(e.variantClassNames, e => pE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        vE = mE({
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
        yE = mE({
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
        gE = mE({
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

      function bE() {
        const e = (0, V.useContext)(wE);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const wE = (0, V.createContext)(null),
        _E = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const s = (0, H.v6)({
              className: gE({
                size: n
              })
            }, o),
            a = r ? $.DX : "ol";
          return (0, x.jsx)(wE.Provider, {
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
        xE = (0, V.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, V.useRef)(null),
            {
              size: a
            } = bE(),
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
              } = aj({
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
            u = r ? $.DX : "a",
            c = (0, H.v6)({
              className: (0, ge.$)(vE({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, x.jsx)("li", {
            className: yE({
              size: a
            }),
            ref: i,
            children: (0, x.jsx)(u, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        CE = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = be[e];
          return (0, x.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        OE = (0, V.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [s, a] = (0, V.useState)(r), {
            size: l
          } = bE(), u = (0, H.v6)({
            className: yE({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, x.jsx)("li", {
            ref: i,
            ...u,
            children: (0, x.jsxs)(k_, {
              open: s,
              onOpenChange: () => a(!s),
              children: [(0, x.jsx)(E_, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, x.jsx)(D_, {
                children: (0, x.jsx)(N_, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, x.jsx)(I_, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        PE = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? $.DX : L_,
            s = (0, H.v6)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        });

      function jE(e) {
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

      function SE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? SE(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = jE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : SE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function EE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var TE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        RE = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kE(kE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) TE(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return EE(e.variantClassNames, e => EE(e, e => e.split(" ")[0]))
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
      const DE = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const i = e ? $.DX : "div",
            s = (0, H.v6)({
              className: RE({
                appearance: r
              })
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        NE = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? $.DX : "div",
            s = (0, H.v6)({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        IE = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = be[e],
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
      var LE = /^--/;

      function ME(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || LE.test(e) || AE.hasOwnProperty(e) && AE[e] ? ("" + t).trim() : t + "px"
      }
      var zE = {},
        AE = {
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
        VE = ["Webkit", "Ms", "Moz", "O"];
      AE = Object.keys(AE).reduce((e, t) => (VE.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), AE);
      var FE = /^(matrix|translate|scale|rotate|skew)/,
        qE = /^(translate)/,
        BE = /^(rotate|skew)/,
        WE = (e, t) => ru.num(e) && 0 !== e ? e + t : e,
        HE = (e, t) => ru.arr(e) ? e.every(e => HE(e, t)) : ru.num(e) ? e === t : parseFloat(e) === t,
        XE = class extends Mc {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>WE(e,"px")).join(",")})`, HE(e, 0)])), iu(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (FE.test(t)) {
                if (delete n[t], ru.und(e)) return;
                const r = qE.test(t) ? "px" : BE.test(t) ? "deg" : "";
                o.push(su(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${WE(o,r)})`, HE(o, 0)] : e => [`${t}(${e.map(e=>WE(e,r)).join(",")})`, HE(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new UE(o, i)), super(n)
          }
        },
        UE = class extends oc {
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
              const o = tc(r[0]),
                [i, s] = this.transforms[n](ru.arr(o) ? o : r.map(tc));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && ou(this.inputs, e => ou(e, e => ec(e) && sc(e, this)))
          }
          observerRemoved(e) {
            0 == e && ou(this.inputs, e => ou(e, e => ec(e) && ac(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), nc(this, e)
          }
        };
      eu.assign({
        batchedUpdates: G.unstable_batchedUpdates,
        createStringInterpolator: gc,
        colors: Pu
      });
      var KE = Wc(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
              c = Object.values(u),
              d = Object.keys(u).map(t => r || e.hasAttribute(t) ? t : zE[t] || (zE[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = ME(t, o[t]);
                LE.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new XE(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        $E = KE.animated,
        ZE = "Dialog",
        [GE, YE] = vf(ZE),
        [QE, JE] = GE(ZE),
        eT = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = V.useRef(null), l = V.useRef(null), [u, c] = em({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: ZE
          });
          return (0, x.jsx)(QE, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: zf(),
            titleId: zf(),
            descriptionId: zf(),
            open: u,
            onOpenChange: c,
            onOpenToggle: V.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: r
          })
        };
      eT.displayName = ZE;
      var tT = "DialogTrigger",
        rT = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = JE(tT, r), i = (0, Y.s)(t, o.triggerRef);
          return (0, x.jsx)(xf.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": _T(o.open),
            ...n,
            ref: i,
            onClick: hf(e.onClick, o.onOpenToggle)
          })
        });
      rT.displayName = tT;
      var nT = "DialogPortal",
        [oT, iT] = GE(nT, {
          forceMount: void 0
        }),
        sT = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = JE(nT, t);
          return (0, x.jsx)(oT, {
            scope: t,
            forceMount: r,
            children: V.Children.map(n, e => (0, x.jsx)(Yh, {
              present: r || i.open,
              children: (0, x.jsx)(Gh, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      sT.displayName = nT;
      var aT = "DialogOverlay",
        lT = V.forwardRef((e, t) => {
          const r = iT(aT, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = JE(aT, e.__scopeDialog);
          return i.modal ? (0, x.jsx)(Yh, {
            present: n || i.open,
            children: (0, x.jsx)(cT, {
              ...o,
              ref: t
            })
          }) : null
        });
      lT.displayName = aT;
      var uT = gf("DialogOverlay.RemoveScroll"),
        cT = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = JE(aT, r);
          return (0, x.jsx)(Fv.A, {
            as: uT,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, x.jsx)(xf.div, {
              "data-state": _T(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        dT = "DialogContent",
        fT = V.forwardRef((e, t) => {
          const r = iT(dT, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = JE(dT, e.__scopeDialog);
          return (0, x.jsx)(Yh, {
            present: n || i.open,
            children: i.modal ? (0, x.jsx)(pT, {
              ...o,
              ref: t
            }) : (0, x.jsx)(hT, {
              ...o,
              ref: t
            })
          })
        });
      fT.displayName = dT;
      var pT = V.forwardRef((e, t) => {
          const r = JE(dT, e.__scopeDialog),
            n = V.useRef(null),
            o = (0, Y.s)(t, r.contentRef, n);
          return V.useEffect(() => {
            const e = n.current;
            if (e) return Uv(e)
          }, []), (0, x.jsx)(mT, {
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
        hT = V.forwardRef((e, t) => {
          const r = JE(dT, e.__scopeDialog),
            n = V.useRef(!1),
            o = V.useRef(!1);
          return (0, x.jsx)(mT, {
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
        mT = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = JE(dT, r), l = V.useRef(null), u = (0, Y.s)(t, l);
          return Av(), (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(Tv, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, x.jsx)(kf, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": _T(a.open),
                ...s,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, x.jsxs)(x.Fragment, {
              children: [(0, x.jsx)(PT, {
                titleId: a.titleId
              }), (0, x.jsx)(jT, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        vT = "DialogTitle",
        yT = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = JE(vT, r);
          return (0, x.jsx)(xf.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      yT.displayName = vT;
      var gT = "DialogDescription",
        bT = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = JE(gT, r);
          return (0, x.jsx)(xf.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      bT.displayName = gT;
      var wT = "DialogClose";

      function _T(e) {
        return e ? "open" : "closed"
      }
      V.forwardRef((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = JE(wT, r);
        return (0, x.jsx)(xf.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: hf(e.onClick, () => o.onOpenChange(!1))
        })
      }).displayName = wT;
      var xT = "DialogTitleWarning",
        [CT, OT] = mf(xT, {
          contentName: dT,
          titleName: vT,
          docsSlug: "dialog"
        }),
        PT = ({
          titleId: e
        }) => {
          const t = OT(xT),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return V.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        jT = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${OT("DialogDescriptionWarning").contentName}}.`;
          return V.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        ST = eT,
        kT = rT,
        ET = sT,
        TT = lT,
        RT = fT,
        DT = yT,
        NT = bT;
      const IT = () => {
          const e = (0, K.Ub)(H.fi.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        LT = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function MT(e) {
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

      function zT(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function AT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zT(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = MT(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zT(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function VT(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var FT = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qT = "foundry_8kowh41",
        BT = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = AT(AT({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) FT(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return VT(e.variantClassNames, e => VT(e, e => e.split(" ")[0]))
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
      const WT = (0, V.createContext)(null);

      function HT() {
        const e = (0, V.useContext)(WT);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const XT = ({
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
          const u = (0, H.v6)({
              "data-testid": e
            }, l),
            [c, d] = (0, K.ic)({
              prop: n,
              defaultProp: t ?? !1,
              onChange: r
            }),
            f = (0, K.ZC)(c);
          return (0, x.jsx)(WT.Provider, {
            value: {
              isOpen: c,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== f || !t),
              setIsOpen: d,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: i,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, V.useId)(),
              descriptionId: (0, V.useId)(),
              triggerRef: (0, V.useRef)(null),
              dialogSpringRef: Ud(),
              overlaySpringRef: Ud()
            },
            children: (0, x.jsx)(ST, {
              open: c,
              onOpenChange: d,
              ...u
            })
          })
        },
        UT = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: i
          } = HT(), s = LT(), a = (0, K.jt)(), l = Kd(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: nd.stiff,
            immediate: a || i
          }), u = (0, H.v6)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), c = $E(TT);
          return (0, V.useEffect)(() => {
            o.start()
          }, [n]), l((e, t) => t ? (0, x.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...u,
            style: e
          }) : null)
        }),
        KT = (0, V.forwardRef)(({
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
            triggerRef: c,
            onOpenTransitionStart: d,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = HT(), y = (0, K.rl)(), g = (0, K.jt)(), b = (0, V.useRef)(null), w = IT(), {
            bindDrag: _
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const i = LT(),
              s = IT(),
              a = (0, V.useRef)();
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
                  r.start({
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
                  config: nd.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...i(0),
                  immediate: !1,
                  config: nd.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: nd.stiff
                }), r.start({
                  ...i(100),
                  immediate: !1,
                  config: nd.stiff
                })))
              }, ma(va), Da({
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
          }), C = Kd(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: nd.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? d?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : h?.()
            }
          });
          (0, V.useEffect)(() => {
            m.start()
          }, [s]);
          const O = (0, K.UP)(b, i),
            P = y && !g && !n && _(),
            j = (0, H.v6)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: u
            }, P || {}, o),
            S = $E(RT);
          return C((t, r) => r ? (0, x.jsx)(S, {
            forceMount: !0,
            ref: O,
            ...j,
            style: t,
            children: e
          }) : null)
        }),
        $T = ({
          testId: e,
          ...t
        }) => {
          const r = (0, H.v6)({
            "data-testid": e
          }, t);
          return (0, x.jsx)(ET, {
            forceMount: !0,
            ...r
          })
        },
        ZT = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, x.jsx)(DT, {
            ref: n,
            ...o,
            children: e
          })
        }),
        GT = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            "data-testid": t
          }, r);
          return (0, x.jsx)(NT, {
            ref: n,
            ...o,
            children: e
          })
        }),
        YT = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, x.jsxs)(jw, {
            ref: n,
            ...o,
            children: [(0, x.jsx)(Sw, {
              className: "foundry_xov33ne",
              children: e
            }), (0, x.jsx)(kw, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, x.jsx)(Ew, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        QT = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": r,
              className: "foundry_xov33n2"
            }, n),
            s = e ? $.DX : "div";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        JT = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": r,
              className: "foundry_xov33n3"
            }, n),
            s = e ? $.DX : "div";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        eR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": r,
              className: "foundry_xov33n8"
            }, n),
            s = e ? $.DX : "header";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        tR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": r,
              className: "foundry_xov33nc"
            }, n),
            s = e ? $.DX : "footer";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        rR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, i) => {
          const s = (0, H.v6)({
              "data-testid": r,
              className: BT({
                align: n
              })
            }, o),
            a = e ? $.DX : DT;
          return (0, x.jsx)(a, {
            ref: i,
            ...s,
            children: t
          })
        }),
        nR = (0, V.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = HT(), a = (0, H.v6)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, x.jsx)(hj, {
            ...a,
            size: "MD",
            ref: o,
            children: e
          })
        }),
        oR = (0, V.forwardRef)((e, t) => {
          const r = (0, H.v6)({
            className: "foundry_xov33n5"
          }, e);
          return (0, x.jsx)(Fe, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        }),
        iR = (0, V.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = HT(), a = (0, H.v6)({
            className: qT,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, x.jsx)(Te, {
            ref: o,
            ...a,
            children: e
          })
        }),
        sR = (0, V.forwardRef)(({
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
            triggerRef: c
          } = HT(), d = (0, K.UP)(c, i), f = (0, H.v6)({
            className: qT,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": u,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !s && a(!0)
            }
          }, o), p = e ? $.DX : kT;
          return (0, x.jsx)(p, {
            ...f,
            ref: d,
            children: t
          })
        });

      function aR(...e) {
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
      var lR = Symbol.for("react.lazy"),
        uR = F[" use ".trim().toString()];

      function cR(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === lR && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function dR(e) {
        const t = V.forwardRef((e, t) => {
          let {
            children: r,
            ...n
          } = e;
          if (cR(r) && "function" == typeof uR && (r = uR(r._payload)), V.isValidElement(r)) {
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
      var fR = Symbol("radix.slottable");

      function pR(e) {
        return V.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === fR
      }
      var hR = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = function(e) {
              const t = dR(e),
                r = V.forwardRef((e, r) => {
                  let {
                    children: n,
                    ...o
                  } = e;
                  cR(n) && "function" == typeof uR && (n = uR(n._payload));
                  const i = V.Children.toArray(n),
                    s = i.find(pR);
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
        mR = r(36553);

      function vR() {
        return () => {}
      }
      var yR = "Avatar",
        [gR, bR] = function(e, t = []) {
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
          }, aR(n, ...t)]
        }(yR),
        [wR, _R] = gR(yR),
        xR = V.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, i] = V.useState("idle");
          return (0, x.jsx)(wR, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: i,
            children: (0, x.jsx)(hR.span, {
              ...n,
              ref: t
            })
          })
        });
      xR.displayName = yR;
      var CR = "AvatarImage",
        OR = V.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...i
          } = e, s = _R(CR, r), a = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, mR.useSyncExternalStore)(vR, () => !0, () => !1),
              o = V.useRef(null),
              i = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, a] = V.useState(() => jR(i, e));
            return If(() => {
              a(jR(i, e))
            }, [i, e]), If(() => {
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
          }(n, i), l = Of(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return If(() => {
            "idle" !== a && l(a)
          }, [a, l]), "loaded" === a ? (0, x.jsx)(hR.img, {
            ...i,
            ref: t,
            src: n
          }) : null
        });
      OR.displayName = CR;
      var PR = "AvatarFallback";

      function jR(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      V.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, i = _R(PR, r), [s, a] = V.useState(void 0 === n);
        return V.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => a(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== i.imageLoadingStatus ? (0, x.jsx)(hR.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = PR;
      var SR = xR,
        kR = OR;

      function ER(e) {
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

      function TR(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function RR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? TR(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ER(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : TR(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function DR(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var NR = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        IR = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = RR(RR({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) NR(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return DR(e.variantClassNames, e => DR(e, e => e.split(" ")[0]))
            }
          }, t
        },
        LR = IR({
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
        MR = "var(--foundry_v912w22)",
        zR = "var(--foundry_v912w23)",
        AR = IR({
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
        VR = IR({
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
        FR = "var(--foundry_v912w21)",
        qR = "var(--foundry_v912w20)",
        BR = IR({
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
      const WR = (0, V.createContext)(null);

      function HR() {
        const e = (0, V.useContext)(WR);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const XR = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: i = !1,
          ...s
        }, a) => {
          const l = (0, H.v6)({
            "data-testid": r,
            "aria-disabled": i,
            className: LR({
              isDisabled: i
            }),
            asChild: e
          }, s);
          return (0, x.jsx)(WR.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: i
            },
            children: (0, x.jsx)(SR, {
              ref: a,
              ...l,
              children: t
            })
          })
        }),
        UR = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: i,
            isDisabled: s
          } = HR(), [a, l] = (0, V.useState)(!1);
          (0, V.useEffect)(() => {
            l(!1)
          }, [r]);
          const u = a || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, H.v6)({
              className: AR({
                isDisabled: s
              }),
              src: u,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, n);
          return (0, x.jsx)("span", {
            className: VR({
              size: i,
              isDisabled: s,
              isFallback: a
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, x.jsx)(kR, {
              ref: o,
              ...c
            })
          })
        }),
        KR = (0, V.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, V.useRef)(null),
            {
              size: i,
              status: s,
              isDisabled: a
            } = HR(),
            l = (0, K.UP)(o, n),
            u = (0, H.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: BR({
                status: s,
                size: i,
                isDisabled: a
              }),
              style: (0, B.DI)({
                [qR]: t?.online,
                [FR]: t?.offline,
                [MR]: t?.away,
                [zR]: t?.busy
              })
            }, r);
          return (0, x.jsx)("span", {
            ref: l,
            ...u
          })
        });

      function $R(e) {
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

      function ZR(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function GR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ZR(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $R(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ZR(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function YR(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var QR = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        JR = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = GR(GR({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) QR(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return YR(e.variantClassNames, e => YR(e, e => e.split(" ")[0]))
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
      const eD = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? $.DX : "nav";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        tD = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, H.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? $.DX : "div";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        rD = (0, V.forwardRef)(({
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
            } = aj(o, s),
            c = (0, H.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": u,
              "data-active": r,
              className: (0, ge.$)(JR({
                isActive: r
              }))
            }, l),
            d = e ? $.DX : "a";
          return (0, x.jsx)(d, {
            ref: a,
            ...c,
            children: t
          })
        }),
        nD = (0, V.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, x.jsx)(rD, {
            ref: n,
            ...o,
            children: (0, x.jsx)(be.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        oD = (0, V.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, x.jsx)(rD, {
            ref: n,
            ...o,
            children: (0, x.jsx)(be.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        iD = ({
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
            i = e ? $.DX : "span";
          return (0, x.jsx)(i, {
            ...o,
            children: t || "..."
          })
        },
        sD = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, H.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            i = e ? $.DX : "div";
          return (0, x.jsx)(i, {
            ...o,
            children: t
          })
        },
        aD = (0, V.createContext)(null);

      function lD() {
        const e = (0, V.useContext)(aD);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const uD = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, V.useId)(),
            i = (0, H.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? $.DX : "div";
          return (0, x.jsx)(aD.Provider, {
            value: {
              labelId: o
            },
            children: (0, x.jsx)(s, {
              ...i,
              children: t
            })
          })
        },
        cD = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: i
          } = lD(), s = (0, H.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, n), a = e ? $.DX : "label";
          return (0, x.jsx)(a, {
            ref: o,
            id: i,
            ...s,
            children: t
          })
        }),
        dD = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: i
          } = lD(), s = (0, H.v6)({
            "aria-labelledby": i,
            className: "foundry_2jlbztc"
          }, n), a = e ? $.DX : Y_;
          return (0, x.jsxs)(a, {
            ...s,
            children: [(0, x.jsxs)(ex, {
              ref: o,
              children: [(0, x.jsx)(tx, {
                placeholder: r
              }), (0, x.jsx)(rx, {})]
            }), (0, x.jsx)(ux, {
              children: (0, x.jsx)(Q_, {
                children: (0, x.jsx)(J_, {
                  children: t
                })
              })
            })]
          })
        }),
        fD = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": r
            }, n),
            s = e ? $.DX : sx;
          return (0, x.jsx)(s, {
            ...i,
            ref: o,
            children: (0, x.jsx)(ax, {
              children: t
            })
          })
        }),
        pD = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, H.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, n),
            s = e ? $.DX : "p";
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        })
    }
  }
]);