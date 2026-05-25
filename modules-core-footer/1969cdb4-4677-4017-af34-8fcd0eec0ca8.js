try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1969cdb4-4677-4017-af34-8fcd0eec0ca8", e._sentryDebugIdIdentifier = "sentry-dbid-1969cdb4-4677-4017-af34-8fcd0eec0ca8")
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
  [4447], {
    63133(e, t, r) {
      var n = r(4637),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = n.useState,
        s = n.useEffect,
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
      var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
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
          u = n[1];
        return a(function() {
          o.value = r, o.getSnapshot = t, d(o) && u({
            inst: o
          })
        }, [e, r, t]), s(function() {
          return d(o) && u({
            inst: o
          }), e(function() {
            d(o) && u({
              inst: o
            })
          })
        }, [e]), l(r), r
      };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : u
    },
    89104(e, t, r) {
      e.exports = r(63133)
    },
    96651(e, t, r) {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => w,
        Badge: () => g,
        Body: () => tt,
        Breadcrumbs: () => y,
        Button: () => be,
        Checkbox: () => l,
        ChipGroup: () => C,
        Code: () => nt,
        Dialog: () => _,
        Display: () => ot,
        Divider: () => Me,
        Dropdown: () => i,
        Heading: () => st,
        IconButton: () => Re,
        Label: () => lt,
        Lightbox: () => o,
        Loader: () => Ge,
        Pagination: () => x,
        Popover: () => O,
        RadioGroup: () => c,
        ScrollArea: () => b,
        Spinner: () => se,
        Switch: () => s,
        Tag: () => m,
        Text: () => ct,
        TextArea: () => d,
        TextField: () => f,
        TextSemantics: () => ut,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Am,
        Content: () => Lm,
        Portal: () => Vm,
        Root: () => zm,
        Trigger: () => Mm,
        useTooltipContext: () => Im
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Xy,
        Close: () => Zy,
        Content: () => Ay,
        Controls: () => Wy,
        CssVars: () => Yy,
        Download: () => Ky,
        Image: () => By,
        Keyboard: () => Uy,
        LightboxContext: () => Ry,
        OpenIcon: () => zy,
        Overlay: () => Ly,
        Portal: () => My,
        Reset: () => $y,
        Root: () => Ty,
        RootImplContext: () => Dy,
        Thumbnail: () => Iy,
        Trigger: () => Ny,
        Zoom: () => Gy,
        ZoomPan: () => Vy
      });
      var i = {};
      r.r(i), r.d(i, {
        Content: () => y_,
        Description: () => C_,
        Hint: () => O_,
        Label: () => x_,
        Option: () => j_,
        OptionIcon: () => S_,
        OptionText: () => P_,
        Portal: () => k_,
        Root: () => v_,
        ScrollArea: () => g_,
        StatusIcon: () => T_,
        StatusRoot: () => R_,
        StatusText: () => D_,
        Trigger: () => b_,
        TriggerIcon: () => w_,
        TriggerText: () => __,
        useDropdownContext: () => m_
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => ow,
        Input: () => rw,
        Label: () => nw,
        Root: () => tw,
        useSwitchContext: () => ew
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => bw,
        CheckMD: () => gw,
        CheckXL: () => _w,
        DashLG: () => xw,
        DashMD: () => ww,
        DashXL: () => Cw
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => qw,
        ErrorText: () => Bw,
        Group: () => Hw,
        GroupDescription: () => Gw,
        GroupErrorText: () => $w,
        GroupItems: () => Zw,
        GroupLabel: () => Uw,
        Input: () => Vw,
        Label: () => Fw,
        Root: () => Aw,
        useGroupContext: () => Ww
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => cx,
        Hint: () => fx,
        Input: () => ux,
        Label: () => dx,
        Root: () => lx,
        RootContext: () => sx,
        StatusIcon: () => hx,
        StatusRoot: () => px,
        StatusText: () => mx,
        useTextAreaContext: () => ax
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => fC,
        DotMD: () => cC,
        DotXL: () => pC
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => nC,
        Input: () => mC,
        Label: () => rC,
        Option: () => hC,
        OptionDescription: () => yC,
        OptionLabel: () => vC,
        Options: () => tC,
        Root: () => eC,
        StatusIcon: () => iC,
        StatusRoot: () => oC,
        StatusText: () => sC,
        useRadioGroupContext: () => Jx
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => _O,
        Control: () => yO,
        Description: () => xO,
        Hint: () => vO,
        Icon: () => bO,
        Input: () => gO,
        Label: () => mO,
        PasswordButton: () => wO,
        Root: () => hO,
        StatusIcon: () => OO,
        StatusRoot: () => CO,
        StatusText: () => jO
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => $O,
        CloseButton: () => nj,
        Description: () => JO,
        ErrorText: () => rj,
        Footer: () => tj,
        Header: () => ZO,
        Icon: () => YO,
        Link: () => ej,
        Root: () => GO,
        RootContext: () => HO,
        Title: () => QO,
        iconStatusMap: () => KO,
        useAlertContext: () => UO
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => oP,
        CloseButton: () => aP,
        Description: () => nP,
        Icon: () => rP,
        Link: () => sP,
        PaginationCounter: () => cP,
        PaginationNav: () => lP,
        PaginationNextButton: () => dP,
        PaginationPrevButton: () => uP,
        PaginationViewport: () => iP,
        Root: () => eP,
        RootContext: () => Qj,
        iconStatusMap: () => tP,
        useAlertBannerContext: () => Jj
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => PP,
        Icon: () => jP,
        Label: () => OP,
        Root: () => CP,
        RootContext: () => wP,
        useTagContext: () => xP
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => RS,
        CloseButton: () => TS,
        Description: () => PS,
        Icon: () => kS,
        Provider: () => wS,
        Root: () => jS,
        RootContext: () => CS,
        Viewport: () => xS,
        iconAppearanceMap: () => SS,
        useToastContext: () => OS
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => WS,
        Item: () => XS,
        OverflowMenu: () => HS,
        OverflowMenuItem: () => US,
        Root: () => BS,
        RootContext: () => qS,
        useBreadcrumbsContext: () => FS
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => nk,
        Label: () => rk,
        Root: () => tk,
        useBadgeContext: () => ek
      });
      var b = {};
      r.r(b), r.d(b, {
        Corner: () => hk,
        Root: () => uk,
        Scrollbar: () => fk,
        Thumb: () => pk,
        Viewport: () => ck
      });
      var _ = {};
      r.r(_), r.d(_, {
        ActionArea: () => Vk,
        Button: () => Fk,
        CloseButton: () => Lk,
        Content: () => Tk,
        Description: () => Ek,
        Footer: () => qk,
        Header: () => zk,
        HeaderButton: () => Ak,
        HeaderTitle: () => Mk,
        Layout: () => Ik,
        Overlay: () => Rk,
        Portal: () => Xk,
        Root: () => kk,
        ScrollArea: () => Nk,
        Title: () => Dk,
        Trigger: () => Bk,
        useDialogContext: () => Sk
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => CR,
        Root: () => xR,
        StatusIndicator: () => OR,
        useAvatarContext: () => wR
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => LR,
        Dropdown: () => BR,
        DropdownLabel: () => qR,
        Ellipsis: () => MR,
        Item: () => NR,
        Label: () => WR,
        Next: () => zR,
        Option: () => XR,
        Pages: () => ER,
        Prev: () => IR,
        ResultsPerPage: () => FR,
        Root: () => DR
      });
      var C = {};
      r.r(C), r.d(C, {
        Icon: () => UT,
        Item: () => HT,
        Label: () => ZT,
        Root: () => WT,
        StatusIndicator: () => GT,
        useChipGroupContext: () => XT
      });
      var O = {};
      r.r(O), r.d(O, {
        Anchor: () => AD,
        Arrow: () => FD,
        Close: () => BD,
        Content: () => VD,
        Portal: () => qD,
        Root: () => ID,
        RootContext: () => ND,
        Trigger: () => zD,
        TriggerButton: () => LD
      });
      var j = r(39793);

      function P(e, t, r) {
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
        t = L.test(e) ? function(e) {
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
        const r = N.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(E(e, 2), 16)), parseInt(E(e[3] || "f", 2), 16) / 255]
        }
        const n = I.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = z.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const i = M.exec(t);
        if (i) {
          const [t, r, n, o] = Array.from(i).slice(1).map(parseFloat);
          if (P(0, 100, r) !== r) throw new k(e);
          if (P(0, 100, n) !== n) throw new k(e);
          return [...V(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new k(e)
      }
      const T = e => parseInt(e.replace(/_/g, ""), 36),
        D = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = T(t.substring(0, 3)),
            n = T(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        E = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        N = new RegExp(`^#${E("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        I = new RegExp(`^#${E("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        z = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${E(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        M = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        L = /^[a-z]+$/i,
        A = e => Math.round(255 * e),
        V = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(A);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * n - 1)) * (t / 100),
            s = i * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            l = 0,
            d = 0;
          o >= 0 && o < 1 ? (a = i, l = s) : o >= 1 && o < 2 ? (a = s, l = i) : o >= 2 && o < 3 ? (l = i, d = s) : o >= 3 && o < 4 ? (l = s, d = i) : o >= 4 && o < 5 ? (a = s, d = i) : o >= 5 && o < 6 && (a = i, d = s);
          const u = n - i / 2;
          return [a + u, l + u, d + u].map(A)
        };

      function F(e, t) {
        const [r, n, o, i] = function(e) {
          const [t, r, n, o] = R(e).map((e, t) => 3 === t ? e : e / 255), i = Math.max(t, r, n), s = Math.min(t, r, n), a = (i + s) / 2;
          if (i === s) return [0, 0, a, o];
          const l = i - s;
          return [60 * (t === i ? (r - n) / l + (r < n ? 6 : 0) : r === i ? (n - t) / l + 2 : (t - r) / l + 4), a > .5 ? l / (2 - i - s) : l / (i + s), a, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${P(0,100,100*t).toFixed()}%, ${P(0,100,100*r).toFixed()}%, ${parseFloat(P(0,1,n).toFixed(3))})`
        }(r, n, o - t, i)
      }

      function q(e, t) {
        return F(e, -t)
      }
      var B = r(4637),
        X = r.t(B, 2),
        W = r(76182),
        H = r(74631),
        U = r(35959);
      const G = {
          enabled: {
            background: (0, W.Tm)(H.no.enabled.background),
            border: (0, W.Tm)(H.no.enabled.border),
            text: (0, W.Tm)(H.no.enabled.text),
            outline: (0, W.Tm)(H.no.enabled.outline)
          },
          hover: {
            background: (0, W.Tm)(H.no.hover.background),
            border: (0, W.Tm)(H.no.hover.border),
            text: (0, W.Tm)(H.no.hover.text),
            outline: (0, W.Tm)(H.no.hover.outline)
          },
          focus: {
            background: (0, W.Tm)(H.no.focus.background),
            border: (0, W.Tm)(H.no.focus.border),
            text: (0, W.Tm)(H.no.focus.text),
            outline: (0, W.Tm)(H.no.focus.outline)
          },
          pressed: {
            background: (0, W.Tm)(H.no.pressed.background),
            border: (0, W.Tm)(H.no.pressed.border),
            text: (0, W.Tm)(H.no.pressed.text),
            outline: (0, W.Tm)(H.no.pressed.outline)
          },
          disabled: {
            background: (0, W.Tm)(H.no.disabled.background),
            border: (0, W.Tm)(H.no.disabled.border),
            text: (0, W.Tm)(H.no.disabled.text),
            outline: (0, W.Tm)(H.no.disabled.outline)
          },
          loading: {
            background: (0, W.Tm)(H.no.loading.background),
            border: (0, W.Tm)(H.no.loading.border),
            text: (0, W.Tm)(H.no.loading.text),
            outline: (0, W.Tm)(H.no.loading.outline)
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
            backgroundColor: i,
            hoverColor: s,
            pressedColor: a,
            textColor: l
          },
          enabled: d = !1
        }, u = []) => {
          (0, B.useEffect)(() => {
            if (!e.current || !i || !d) return;
            const u = `${i}:${t}:${r}`,
              {
                text: c,
                hover: f,
                pressed: p
              } = (0, U.IO)(u, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = R(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? W.LU.global.color.black.static[100] : W.LU.global.color.white.static[100]),
                  hover: s || (e >= r ? F(i, n) : q(i, n)),
                  pressed: a || (e >= r ? F(i, o) : q(i, o))
                }
              });
            return e.current.style.setProperty(G.enabled.background, i), e.current.style.setProperty(G.enabled.border, i), e.current.style.setProperty(G.enabled.text, c), e.current.style.setProperty(G.hover.background, f), e.current.style.setProperty(G.hover.border, f), e.current.style.setProperty(G.hover.text, c), e.current.style.setProperty(G.focus.background, f), e.current.style.setProperty(G.focus.border, f), e.current.style.setProperty(G.focus.text, c), e.current.style.setProperty(G.pressed.background, p), e.current.style.setProperty(G.pressed.border, p), e.current.style.setProperty(G.pressed.text, c), e.current.style.setProperty(G.loading.background, f), e.current.style.setProperty(G.loading.border, f), e.current.style.setProperty(G.loading.text, c), () => {
              e.current?.style.removeProperty(G.enabled.background), e.current?.style.removeProperty(G.enabled.border), e.current?.style.removeProperty(G.enabled.text), e.current?.style.removeProperty(G.hover.background), e.current?.style.removeProperty(G.hover.border), e.current?.style.removeProperty(G.hover.text), e.current?.style.removeProperty(G.focus.background), e.current?.style.removeProperty(G.focus.border), e.current?.style.removeProperty(G.focus.text), e.current?.style.removeProperty(G.pressed.background), e.current?.style.removeProperty(G.pressed.border), e.current?.style.removeProperty(G.pressed.text), e.current?.style.removeProperty(G.loading.background), e.current?.style.removeProperty(G.loading.border), e.current?.style.removeProperty(G.loading.text)
            }
          }, [e.current, t, r, n, o, i, s, a, l, d, ...u])
        };
      var $ = r(53374),
        K = r(23743),
        Y = r(359),
        Q = r(66892);

      function J(e) {
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

      function ee(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ee(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = J(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ee(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function re(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ne = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        oe = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = te(te({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) ne(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return re(e.variantClassNames, e => re(e, e => e.split(" ")[0]))
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
      const ie = "pageMD",
        se = (0, B.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = ie,
          testId: n,
          ...o
        }, i) => {
          const s = (0, Y.zQ)(),
            a = "string" == typeof r ? r : r?.[s] ?? r.default ?? ie,
            l = (0, U.v6)({
              className: oe({
                size: a
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, j.jsx)(Q.b, {
            label: e,
            children: (0, j.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: i,
              viewBox: "0 0 16 16",
              children: [!t && (0, j.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, j.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var ae = r(4921),
        le = r(35906);

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

      function ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ue(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = de(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ue(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function fe(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var pe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        he = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ce(ce({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) pe(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fe(e.variantClassNames, e => fe(e, e => e.split(" ")[0]))
            }
          }, t
        },
        me = he({
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
      he({
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
      var ve = he({
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
        ye = he({
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
        ge = he({
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
      const be = (0, B.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: i,
        iconRightLabel: s,
        appearance: a,
        size: l = "MD",
        fullWidth: d = !1,
        isLoading: u = !1,
        spinnerLabel: c,
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
        const C = (0, B.useRef)(null),
          O = (0, $.UP)(C, x),
          P = (0, Y.zQ)(),
          S = "string" == typeof l ? l : l?.[P] ?? l.default ?? "MD",
          {
            buttonProps: k
          } = (0, $.sL)((0, U.v6)(w, {
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
            textColor: _
          },
          enabled: "accent" === a
        }, [t]);
        const R = (0, U.v6)({
            className: me({
              appearance: a,
              size: S,
              fullWidth: d,
              iconLeft: !!n,
              iconRight: !!i
            }),
            "data-testid": e
          }, k),
          T = n && le[n],
          D = i && le[i],
          E = t ? K.DX : "button",
          N = d && (D || D && T);
        return (0, j.jsxs)(E, {
          ref: O,
          ...R,
          children: [N && (0, j.jsx)("div", {
            className: "foundry_17pcofy14"
          }), T && (0, j.jsx)(T, {
            label: o || "",
            size: S,
            className: (0, ae.$)(ve({
              size: S
            }), "foundry_17pcofy10")
          }), (0, j.jsx)(K.xV, {
            children: r
          }), D && (0, j.jsx)(D, {
            label: s || "",
            size: S,
            className: (0, ae.$)(ve({
              size: S
            }), ye({
              fullWidth: d
            }))
          }), u && (0, j.jsx)("div", {
            className: "foundry_17pcofy15",
            children: (0, j.jsx)(se, {
              label: c || "",
              size: "inline" + ("LG" === S ? "LG" : "MD"),
              hideTrack: !0,
              className: ge({
                size: S
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

      function we(e, t) {
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
          t % 2 ? we(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = _e(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : we(Object(r)).forEach(function(t) {
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
        je = e => {
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
            for (var [d, u] of e.compoundVariants) Oe(d, n, e.defaultVariants) && (r += " " + u);
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
        Pe = je({
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
        Se = je({
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
        ke = je({
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
      const Re = (0, B.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: i = !1,
        size: s = "LG",
        children: a,
        isLoading: l = !1,
        spinnerLabel: d,
        preventFocusOnPress: u = !1,
        override_darkenLuminance: c = .035,
        override_textLuminance: f = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: m,
        override_hoverColor: v,
        override_pressedColor: y,
        override_textColor: g,
        ...b
      }, _) => {
        const w = (0, B.useRef)(null),
          x = (0, $.UP)(w, _),
          C = (0, Y.zQ)(),
          O = "string" == typeof s ? s : s?.[C] ?? s.default ?? "LG",
          {
            buttonProps: P
          } = (0, $.sL)((0, U.v6)(b, {
            isLoading: l,
            preventFocusOnPress: u
          }), w);
        Z({
          refs: {
            buttonRef: w
          },
          config: {
            textLuminance: f,
            darkenLuminance: c,
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
        const S = (0, U.v6)({
            className: Se({
              appearance: o,
              size: O,
              fullWidth: i
            }),
            "data-testid": e
          }, P),
          k = le[r],
          R = t ? K.DX : "button";
        return (0, j.jsxs)(R, {
          ref: x,
          ...S,
          children: [k && (0, j.jsx)(k, {
            label: n || "",
            size: O,
            className: Pe({
              size: O
            })
          }), (0, j.jsx)(K.xV, {
            children: a
          }), l && (0, j.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, j.jsx)(se, {
              label: d || "",
              size: O && "SM" !== O ? `inline${O}` : "inlineMD",
              hideTrack: !0,
              className: ke({
                size: O
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

      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? De(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Te(o)) in n ? Object.defineProperty(n, o, {
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
        ze = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ee(Ee({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) Ie(d, n, e.defaultVariants) && (r += " " + u);
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
      const Me = (0, B.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: i,
        ...s
      }, a) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          d = n || "hr" === l ? void 0 : "separator",
          u = o ? K.DX : l;
        return (0, j.jsx)(u, {
          ref: a,
          className: (0, ae.$)(ze({
            thickness: r,
            orientation: t
          }), e),
          role: d,
          "aria-orientation": t,
          "data-testid": i,
          ...s
        })
      });

      function Le(e) {
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

      function Ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ae(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Le(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
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
      var qe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Be = "var(--foundry_9dxgbc2)",
        Xe = "var(--foundry_9dxgbc3)",
        We = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ve(Ve({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) qe(d, n, e.defaultVariants) && (r += " " + u);
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
        Ue = "var(--foundry_9dxgbc1)";
      const Ge = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: i = "MD",
        ...s
      }, a) => {
        const l = (0, Y.zQ)(),
          d = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          u = (0, U.v6)({
            className: We({
              size: d
            }),
            "data-testid": t,
            style: (0, W.DI)({
              [He]: n?.pulseColorBackground,
              [Ue]: n?.pulseColorForeground,
              [Be]: n?.gradientColorBackground,
              [Xe]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          c = e ? K.DX : "div";
        return (0, j.jsx)(c, {
          ref: a,
          ...u,
          children: e ? (0, j.jsx)(K.xV, {
            children: r
          }) : (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, j.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function Ze(e) {
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

      function Ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $e(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ze(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
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
      var Qe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Je = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ke(Ke({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) Qe(d, n, e.defaultVariants) && (r += " " + u);
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
        et = Je({
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
      const tt = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? K.DX : "p",
          a = (0, U.v6)({
            className: et({
              size: n,
              appearance: r
            })
          }, o);
        return (0, j.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var rt = Je({
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
      const nt = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const i = e ? K.DX : "p",
            s = (0, U.v6)({
              className: rt({
                appearance: r
              })
            }, n);
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        ot = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? K.DX : "h1",
            i = (0, U.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, j.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        });
      var it = Je({
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
      const st = (0, B.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? K.DX : `h${t}`,
          s = (0, U.v6)(n, {
            className: it({
              level: t
            })
          });
        return (0, j.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var at = Je({
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
      const lt = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? K.DX : "p",
          a = (0, U.v6)({
            className: at({
              size: n,
              appearance: r
            })
          }, o);
        return (0, j.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var dt = Je({
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
        ct = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? K.DX : ut[r] || "span",
            s = (0, U.v6)(n, {
              className: dt({
                semantic: r
              })
            });
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });

      function ft(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function pt(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }
      var ht, mt, vt, yt, gt, bt, _t, wt, xt, Ct, Ot, jt, Pt, St, kt, Rt, Tt, Dt = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        Et = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        Nt = 1e8,
        It = 1e-8,
        zt = 2 * Math.PI,
        Mt = zt / 4,
        Lt = 0,
        At = Math.sqrt,
        Vt = Math.cos,
        Ft = Math.sin,
        qt = function(e) {
          return "string" == typeof e
        },
        Bt = function(e) {
          return "function" == typeof e
        },
        Xt = function(e) {
          return "number" == typeof e
        },
        Wt = function(e) {
          return void 0 === e
        },
        Ht = function(e) {
          return "object" == typeof e
        },
        Ut = function(e) {
          return !1 !== e
        },
        Gt = function() {
          return "undefined" != typeof window
        },
        Zt = function(e) {
          return Bt(e) || qt(e)
        },
        $t = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Kt = Array.isArray,
        Yt = /(?:-?\.?\d|\.)+/gi,
        Qt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Jt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        er = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        tr = /[+-]=-?[.\d]+/,
        rr = /[^,'"\[\]\s]+/gi,
        nr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        or = {},
        ir = {},
        sr = function(e) {
          return (ir = zr(e, or)) && Lo
        },
        ar = function(e, t) {
          return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        },
        lr = function(e, t) {
          return !t && console.warn(e)
        },
        dr = function(e, t) {
          return e && (or[e] = t) && ir && (ir[e] = t) || or
        },
        ur = function() {
          return 0
        },
        cr = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        fr = {
          suppressEvents: !0,
          kill: !1
        },
        pr = {
          suppressEvents: !0
        },
        hr = {},
        mr = [],
        vr = {},
        yr = {},
        gr = {},
        br = 30,
        _r = [],
        wr = "",
        xr = function(e) {
          var t, r, n = e[0];
          if (Ht(n) || Bt(n) || (e = [e]), !(t = (n._gsap || {}).harness)) {
            for (r = _r.length; r-- && !_r[r].targetTest(n););
            t = _r[r]
          }
          for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new Kn(e[r], t))) || e.splice(r, 1);
          return e
        },
        Cr = function(e) {
          return e._gsap || xr(pn(e))[0]._gsap
        },
        Or = function(e, t, r) {
          return (r = e[t]) && Bt(r) ? e[t]() : Wt(r) && e.getAttribute && e.getAttribute(t) || r
        },
        jr = function(e, t) {
          return (e = e.split(",")).forEach(t) || e
        },
        Pr = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        Sr = function(e) {
          return Math.round(1e7 * e) / 1e7 || 0
        },
        kr = function(e, t) {
          var r = t.charAt(0),
            n = parseFloat(t.substr(2));
          return e = parseFloat(e), "+" === r ? e + n : "-" === r ? e - n : "*" === r ? e * n : e / n
        },
        Rr = function(e, t) {
          for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r;);
          return n < r
        },
        Tr = function() {
          var e, t, r = mr.length,
            n = mr.slice(0);
          for (vr = {}, mr.length = 0, e = 0; e < r; e++)(t = n[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        Dr = function(e, t, r, n) {
          mr.length && !mt && Tr(), e.render(t, r, n || mt && t < 0 && (e._initted || e._startAt)), mr.length && !mt && Tr()
        },
        Er = function(e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(rr).length < 2 ? t : qt(e) ? e.trim() : e
        },
        Nr = function(e) {
          return e
        },
        Ir = function(e, t) {
          for (var r in t) r in e || (e[r] = t[r]);
          return e
        },
        zr = function(e, t) {
          for (var r in t) e[r] = t[r];
          return e
        },
        Mr = function e(t, r) {
          for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = Ht(r[n]) ? e(t[n] || (t[n] = {}), r[n]) : r[n]);
          return t
        },
        Lr = function(e, t) {
          var r, n = {};
          for (r in e) r in t || (n[r] = e[r]);
          return n
        },
        Ar = function(e) {
          var t, r = e.parent || yt,
            n = e.keyframes ? (t = Kt(e.keyframes), function(e, r) {
              for (var n in r) n in e || "duration" === n && t || "ease" === n || (e[n] = r[n])
            }) : Ir;
          if (Ut(e.inherit))
            for (; r;) n(e, r.vars.defaults), r = r.parent || r._dp;
          return e
        },
        Vr = function(e, t, r, n, o) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var i, s = e[n];
          if (o)
            for (i = t[o]; s && s[o] > i;) s = s._prev;
          return s ? (t._next = s._next, s._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = s, t.parent = t._dp = e, t
        },
        Fr = function(e, t, r, n) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var o = t._prev,
            i = t._next;
          o ? o._next = i : e[r] === t && (e[r] = i), i ? i._prev = o : e[n] === t && (e[n] = o), t._next = t._prev = t.parent = null
        },
        qr = function(e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        Br = function(e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var r = e; r;) r._dirty = 1, r = r.parent;
          return e
        },
        Xr = function(e, t, r, n) {
          return e._startAt && (mt ? e._startAt.revert(fr) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n))
        },
        Wr = function e(t) {
          return !t || t._ts && e(t.parent)
        },
        Hr = function(e) {
          return e._repeat ? Ur(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        Ur = function(e, t) {
          var r = Math.floor(e /= t);
          return e && r === e ? r - 1 : r
        },
        Gr = function(e, t) {
          return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        },
        Zr = function(e) {
          return e._end = Sr(e._start + (e._tDur / Math.abs(e._ts || e._rts || It) || 0))
        },
        $r = function(e, t) {
          var r = e._dp;
          return r && r.smoothChildTiming && e._ts && (e._start = Sr(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Zr(e), r._dirty || Br(r, e)), e
        },
        Kr = function(e, t) {
          var r;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Gr(e.rawTime(), t), (!t._dur || dn(0, t.totalDuration(), r) - t._tTime > It) && t.render(r, !0)), Br(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            e._zTime = -1e-8
          }
        },
        Yr = function(e, t, r, n) {
          return t.parent && qr(t), t._start = Sr((Xt(r) ? r : r || e !== yt ? sn(e, r, t) : e._time) + t._delay), t._end = Sr(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Vr(e, t, "_first", "_last", e._sort ? "_start" : 0), tn(t) || (e._recent = t), n || Kr(e, t), e._ts < 0 && $r(e, e._tTime), e
        },
        Qr = function(e, t) {
          return (or.ScrollTrigger || ar("scrollTrigger", t)) && or.ScrollTrigger.create(t, e)
        },
        Jr = function(e, t, r, n, o) {
          return oo(e, t, o), e._initted ? !r && e._pt && !mt && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && xt !== Ln.frame ? (mr.push(e), e._lazy = [o, n], 1) : void 0 : 1
        },
        en = function e(t) {
          var r = t.parent;
          return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || e(r))
        },
        tn = function(e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t
        },
        rn = function(e, t, r, n) {
          var o = e._repeat,
            i = Sr(t) || 0,
            s = e._tTime / e._tDur;
          return s && !n && (e._time *= i / e._dur), e._dur = i, e._tDur = o ? o < 0 ? 1e10 : Sr(i * (o + 1) + e._rDelay * o) : i, s > 0 && !n && $r(e, e._tTime = e._tDur * s), e.parent && Zr(e), r || Br(e.parent, e), e
        },
        nn = function(e) {
          return e instanceof Qn ? Br(e) : rn(e, e._dur)
        },
        on = {
          _start: 0,
          endTime: ur,
          totalDuration: ur
        },
        sn = function e(t, r, n) {
          var o, i, s, a = t.labels,
            l = t._recent || on,
            d = t.duration() >= Nt ? l.endTime(!1) : t._dur;
          return qt(r) && (isNaN(r) || r in a) ? (i = r.charAt(0), s = "%" === r.substr(-1), o = r.indexOf("="), "<" === i || ">" === i ? (o >= 0 && (r = r.replace(/=/, "")), ("<" === i ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (o < 0 ? l : n).totalDuration() / 100 : 1)) : o < 0 ? (r in a || (a[r] = d), a[r]) : (i = parseFloat(r.charAt(o - 1) + r.substr(o + 1)), s && n && (i = i / 100 * (Kt(n) ? n[0] : n).totalDuration()), o > 1 ? e(t, r.substr(0, o - 1), n) + i : d + i)) : null == r ? d : +r
        },
        an = function(e, t, r) {
          var n, o, i = Xt(t[1]),
            s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
          if (i && (a.duration = t[1]), a.parent = r, e) {
            for (n = a, o = r; o && !("immediateRender" in n);) n = o.vars.defaults || {}, o = Ut(o.vars.inherit) && o.parent;
            a.immediateRender = Ut(n.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
          }
          return new uo(t[0], a, t[s + 1])
        },
        ln = function(e, t) {
          return e || 0 === e ? t(e) : t
        },
        dn = function(e, t, r) {
          return r < e ? e : r > t ? t : r
        },
        un = function(e, t) {
          return qt(e) && (t = nr.exec(e)) ? t[1] : ""
        },
        cn = [].slice,
        fn = function(e, t) {
          return e && Ht(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Ht(e[0])) && !e.nodeType && e !== gt
        },
        pn = function(e, t, r) {
          return vt && !t && vt.selector ? vt.selector(e) : !qt(e) || r || !bt && An() ? Kt(e) ? function(e, t, r) {
            return void 0 === r && (r = []), e.forEach(function(e) {
              var n;
              return qt(e) && !t || fn(e, 1) ? (n = r).push.apply(n, pn(e)) : r.push(e)
            }) || r
          }(e, r) : fn(e) ? cn.call(e, 0) : e ? [e] : [] : cn.call((t || _t).querySelectorAll(e), 0)
        },
        hn = function(e) {
          return e = pn(e)[0] || lr("Invalid scope") || {},
            function(t) {
              var r = e.current || e.nativeElement || e;
              return pn(t, r.querySelectorAll ? r : r === e ? lr("Invalid scope") || _t.createElement("div") : e)
            }
        },
        mn = function(e) {
          return e.sort(function() {
            return .5 - Math.random()
          })
        },
        vn = function(e) {
          if (Bt(e)) return e;
          var t = Ht(e) ? e : {
              each: e
            },
            r = Hn(t.ease),
            n = t.from || 0,
            o = parseFloat(t.base) || 0,
            i = {},
            s = n > 0 && n < 1,
            a = isNaN(n) || s,
            l = t.axis,
            d = n,
            u = n;
          return qt(n) ? d = u = {
              center: .5,
              edges: .5,
              end: 1
            } [n] || 0 : !s && a && (d = n[0], u = n[1]),
            function(e, s, c) {
              var f, p, h, m, v, y, g, b, _, w = (c || t).length,
                x = i[w];
              if (!x) {
                if (!(_ = "auto" === t.grid ? 0 : (t.grid || [1, Nt])[1])) {
                  for (g = -Nt; g < (g = c[_++].getBoundingClientRect().left) && _ < w;);
                  _ < w && _--
                }
                for (x = i[w] = [], f = a ? Math.min(_, w) * d - .5 : n % _, p = _ === Nt ? 0 : a ? w * u / _ - .5 : n / _ | 0, g = 0, b = Nt, y = 0; y < w; y++) h = y % _ - f, m = p - (y / _ | 0), x[y] = v = l ? Math.abs("y" === l ? m : h) : At(h * h + m * m), v > g && (g = v), v < b && (b = v);
                "random" === n && mn(x), x.max = g - b, x.min = b, x.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (_ > w ? w - 1 : l ? "y" === l ? w / _ : _ : Math.max(_, w / _)) || 0) * ("edges" === n ? -1 : 1), x.b = w < 0 ? o - w : o, x.u = un(t.amount || t.each) || 0, r = r && w < 0 ? Xn(r) : r
              }
              return w = (x[e] - x.min) / x.max || 0, Sr(x.b + (r ? r(w) : w) * x.v) + x.u
            }
        },
        yn = function(e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function(r) {
            var n = Sr(Math.round(parseFloat(r) / e) * e * t);
            return (n - n % 1) / t + (Xt(r) ? 0 : un(r))
          }
        },
        gn = function(e, t) {
          var r, n, o = Kt(e);
          return !o && Ht(e) && (r = o = e.radius || Nt, e.values ? (e = pn(e.values), (n = !Xt(e[0])) && (r *= r)) : e = yn(e.increment)), ln(t, o ? Bt(e) ? function(t) {
            return n = e(t), Math.abs(n - t) <= r ? n : t
          } : function(t) {
            for (var o, i, s = parseFloat(n ? t.x : t), a = parseFloat(n ? t.y : 0), l = Nt, d = 0, u = e.length; u--;)(o = n ? (o = e[u].x - s) * o + (i = e[u].y - a) * i : Math.abs(e[u] - s)) < l && (l = o, d = u);
            return d = !r || l <= r ? e[d] : t, n || d === t || Xt(t) ? d : d + un(t)
          } : yn(e))
        },
        bn = function(e, t, r, n) {
          return ln(Kt(e) ? !t : !0 === r ? !!(r = 0) : !n, function() {
            return Kt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + .99 * r)) / r) * r * n) / n
          })
        },
        _n = function(e, t, r) {
          return ln(r, function(r) {
            return e[~~t(r)]
          })
        },
        wn = function(e) {
          for (var t, r, n, o, i = 0, s = ""; ~(t = e.indexOf("random(", i));) n = e.indexOf(")", t), o = "[" === e.charAt(t + 7), r = e.substr(t + 7, n - t - 7).match(o ? rr : Yt), s += e.substr(i, t - i) + bn(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5), i = n + 1;
          return s + e.substr(i, e.length - i)
        },
        xn = function(e, t, r, n, o) {
          var i = t - e,
            s = n - r;
          return ln(o, function(t) {
            return r + ((t - e) / i * s || 0)
          })
        },
        Cn = function(e, t, r) {
          var n, o, i, s = e.labels,
            a = Nt;
          for (n in s)(o = s[n] - t) < 0 == !!r && o && a > (o = Math.abs(o)) && (i = n, a = o);
          return i
        },
        On = function(e, t, r) {
          var n, o, i, s = e.vars,
            a = s[t],
            l = vt,
            d = e._ctx;
          if (a) return n = s[t + "Params"], o = s.callbackScope || e, r && mr.length && Tr(), d && (vt = d), i = n ? a.apply(o, n) : a.call(o), vt = l, i
        },
        jn = function(e) {
          return qr(e), e.scrollTrigger && e.scrollTrigger.kill(!!mt), e.progress() < 1 && On(e, "onInterrupt"), e
        },
        Pn = [],
        Sn = function(e) {
          if (e)
            if (e = !e.name && e.default || e, Gt() || e.headless) {
              var t = e.name,
                r = Bt(e),
                n = t && !r && e.init ? function() {
                  this._props = []
                } : e,
                o = {
                  init: ur,
                  render: bo,
                  add: ro,
                  kill: wo,
                  modifier: _o,
                  rawVars: 0
                },
                i = {
                  targetTest: 0,
                  get: 0,
                  getSetter: mo,
                  aliases: {},
                  register: 0
                };
              if (An(), e !== n) {
                if (yr[t]) return;
                Ir(n, Ir(Lr(e, o), i)), zr(n.prototype, zr(o, Lr(e, i))), yr[n.prop = t] = n, e.targetTest && (_r.push(n), hr[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
              }
              dr(t, n), e.register && e.register(Lo, n, Oo)
            } else Pn.push(e)
        },
        kn = 255,
        Rn = {
          aqua: [0, kn, kn],
          lime: [0, kn, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, kn],
          navy: [0, 0, 128],
          white: [kn, kn, kn],
          olive: [128, 128, 0],
          yellow: [kn, kn, 0],
          orange: [kn, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [kn, 0, 0],
          pink: [kn, 192, 203],
          cyan: [0, kn, kn],
          transparent: [kn, kn, kn, 0]
        },
        Tn = function(e, t, r) {
          return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (r - t) * e * 6 : e < .5 ? r : 3 * e < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * kn + .5 | 0
        },
        Dn = function(e, t, r) {
          var n, o, i, s, a, l, d, u, c, f, p = e ? Xt(e) ? [e >> 16, e >> 8 & kn, e & kn] : 0 : Rn.black;
          if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Rn[e]) p = Rn[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (n = e.charAt(1), o = e.charAt(2), i = e.charAt(3), e = "#" + n + n + o + o + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & kn, p & kn, parseInt(e.substr(7), 16) / 255];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & kn, e & kn]
            } else if ("hsl" === e.substr(0, 3))
              if (p = f = e.match(Yt), t) {
                if (~e.indexOf("=")) return p = e.match(Qt), r && p.length < 4 && (p[3] = 1), p
              } else s = +p[0] % 360 / 360, a = +p[1] / 100, n = 2 * (l = +p[2] / 100) - (o = l <= .5 ? l * (a + 1) : l + a - l * a), p.length > 3 && (p[3] *= 1), p[0] = Tn(s + 1 / 3, n, o), p[1] = Tn(s, n, o), p[2] = Tn(s - 1 / 3, n, o);
            else p = e.match(Yt) || Rn.transparent;
            p = p.map(Number)
          }
          return t && !f && (n = p[0] / kn, o = p[1] / kn, i = p[2] / kn, l = ((d = Math.max(n, o, i)) + (u = Math.min(n, o, i))) / 2, d === u ? s = a = 0 : (c = d - u, a = l > .5 ? c / (2 - d - u) : c / (d + u), s = d === n ? (o - i) / c + (o < i ? 6 : 0) : d === o ? (i - n) / c + 2 : (n - o) / c + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * l + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        En = function(e) {
          var t = [],
            r = [],
            n = -1;
          return e.split(In).forEach(function(e) {
            var o = e.match(Jt) || [];
            t.push.apply(t, o), r.push(n += o.length + 1)
          }), t.c = r, t
        },
        Nn = function(e, t, r) {
          var n, o, i, s, a = "",
            l = (e + a).match(In),
            d = t ? "hsla(" : "rgba(",
            u = 0;
          if (!l) return e;
          if (l = l.map(function(e) {
              return (e = Dn(e, t, 1)) && d + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            }), r && (i = En(e), (n = r.c).join(a) !== i.c.join(a)))
            for (s = (o = e.replace(In, "1").split(Jt)).length - 1; u < s; u++) a += o[u] + (~n.indexOf(u) ? l.shift() || d + "0,0,0,0)" : (i.length ? i : l.length ? l : r).shift());
          if (!o)
            for (s = (o = e.split(In)).length - 1; u < s; u++) a += o[u] + l[u];
          return a + o[s]
        },
        In = function() {
          var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in Rn) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        zn = /hsl[a]?\(/,
        Mn = function(e) {
          var t, r = e.join(" ");
          if (In.lastIndex = 0, In.test(r)) return t = zn.test(r), e[1] = Nn(e[1], t), e[0] = Nn(e[0], t, En(e[1])), !0
        },
        Ln = function() {
          var e, t, r, n, o, i, s = Date.now,
            a = 500,
            l = 33,
            d = s(),
            u = d,
            c = 1e3 / 240,
            f = c,
            p = [],
            h = function r(h) {
              var m, v, y, g, b = s() - u,
                _ = !0 === h;
              if ((b > a || b < 0) && (d += b - l), ((m = (y = (u += b) - d) - f) > 0 || _) && (g = ++n.frame, o = y - 1e3 * n.time, n.time = y /= 1e3, f += m + (m >= c ? 4 : c - m), v = 1), _ || (e = t(r)), v)
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
              wt && (!bt && Gt() && (gt = bt = window, _t = gt.document || {}, or.gsap = Lo, (gt.gsapVersions || (gt.gsapVersions = [])).push(Lo.version), sr(ir || gt.GreenSockGlobals || !gt.gsap && gt || {}), Pn.forEach(Sn)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, e && n.sleep(), t = r || function(e) {
                return setTimeout(e, f - 1e3 * n.time + 1 | 0)
              }, Ot = 1, h(2))
            },
            sleep: function() {
              (r ? cancelAnimationFrame : clearTimeout)(e), Ot = 0, t = ur
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
              return n.remove(e), p[r ? "unshift" : "push"](o), An(), o
            },
            remove: function(e, t) {
              ~(t = p.indexOf(e)) && p.splice(t, 1) && i >= t && i--
            },
            _listeners: p
          }, n
        }(),
        An = function() {
          return !Ot && Ln.wake()
        },
        Vn = {},
        Fn = /^[\d.\-M][\d.\-,\s]/,
        qn = /["']/g,
        Bn = function(e) {
          for (var t, r, n, o = {}, i = e.substr(1, e.length - 3).split(":"), s = i[0], a = 1, l = i.length; a < l; a++) r = i[a], t = a !== l - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, t), o[s] = isNaN(n) ? n.replace(qn, "").trim() : +n, s = r.substr(t + 1).trim();
          return o
        },
        Xn = function(e) {
          return function(t) {
            return 1 - e(1 - t)
          }
        },
        Wn = function e(t, r) {
          for (var n, o = t._first; o;) o instanceof Qn ? e(o, r) : !o.vars.yoyoEase || o._yoyo && o._repeat || o._yoyo === r || (o.timeline ? e(o.timeline, r) : (n = o._ease, o._ease = o._yEase, o._yEase = n, o._yoyo = r)), o = o._next
        },
        Hn = function(e, t) {
          return e && (Bt(e) ? e : Vn[e] || function(e) {
            var t, r, n, o, i = (e + "").split("("),
              s = Vn[i[0]];
            return s && i.length > 1 && s.config ? s.config.apply(null, ~e.indexOf("{") ? [Bn(i[1])] : (t = e, r = t.indexOf("(") + 1, n = t.indexOf(")"), o = t.indexOf("(", r), t.substring(r, ~o && o < n ? t.indexOf(")", n + 1) : n)).split(",").map(Er)) : Vn._CE && Fn.test(e) ? Vn._CE("", e) : s
          }(e)) || t
        },
        Un = function(e, t, r, n) {
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
          return jr(e, function(e) {
            for (var t in Vn[e] = or[e] = i, Vn[o = e.toLowerCase()] = r, i) Vn[o + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Vn[e + "." + t] = i[t]
          }), i
        },
        Gn = function(e) {
          return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
          }
        },
        Zn = function e(t, r, n) {
          var o = r >= 1 ? r : 1,
            i = (n || (t ? .3 : .45)) / (r < 1 ? r : 1),
            s = i / zt * (Math.asin(1 / o) || 0),
            a = function(e) {
              return 1 === e ? 1 : o * Math.pow(2, -10 * e) * Ft((e - s) * i) + 1
            },
            l = "out" === t ? a : "in" === t ? function(e) {
              return 1 - a(1 - e)
            } : Gn(a);
          return i = zt / i, l.config = function(r, n) {
            return e(t, r, n)
          }, l
        },
        $n = function e(t, r) {
          void 0 === r && (r = 1.70158);
          var n = function(e) {
              return e ? --e * e * ((r + 1) * e + r) + 1 : 0
            },
            o = "out" === t ? n : "in" === t ? function(e) {
              return 1 - n(1 - e)
            } : Gn(n);
          return o.config = function(r) {
            return e(t, r)
          }, o
        };
      jr("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var r = t < 5 ? t + 1 : t;
        Un(e + ",Power" + (r - 1), t ? function(e) {
          return Math.pow(e, r)
        } : function(e) {
          return e
        }, function(e) {
          return 1 - Math.pow(1 - e, r)
        }, function(e) {
          return e < .5 ? Math.pow(2 * e, r) / 2 : 1 - Math.pow(2 * (1 - e), r) / 2
        })
      }), Vn.Linear.easeNone = Vn.none = Vn.Linear.easeIn, Un("Elastic", Zn("in"), Zn("out"), Zn()), jt = 7.5625, kt = 2 * (St = 1 / (Pt = 2.75)), Rt = 2.5 * St, Un("Bounce", function(e) {
        return 1 - Tt(1 - e)
      }, Tt = function(e) {
        return e < St ? jt * e * e : e < kt ? jt * Math.pow(e - 1.5 / Pt, 2) + .75 : e < Rt ? jt * (e -= 2.25 / Pt) * e + .9375 : jt * Math.pow(e - 2.625 / Pt, 2) + .984375
      }), Un("Expo", function(e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
      }), Un("Circ", function(e) {
        return -(At(1 - e * e) - 1)
      }), Un("Sine", function(e) {
        return 1 === e ? 1 : 1 - Vt(e * Mt)
      }), Un("Back", $n("in"), $n("out"), $n()), Vn.SteppedEase = Vn.steps = or.SteppedEase = {
        config: function(e, t) {
          void 0 === e && (e = 1);
          var r = 1 / e,
            n = e + (t ? 0 : 1),
            o = t ? 1 : 0;
          return function(e) {
            return ((n * dn(0, .99999999, e) | 0) + o) * r
          }
        }
      }, Et.ease = Vn["quad.out"], jr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return wr += e + "," + e + "Params,"
      });
      var Kn = function(e, t) {
          this.id = Lt++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Or, this.set = t ? t.getSetter : mo
        },
        Yn = function() {
          function e(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, rn(this, +e.duration, 1, 1), this.data = e.data, vt && (this._ctx = vt, vt.data.push(this)), Ot || Ln.wake()
          }
          var t = e.prototype;
          return t.delay = function(e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
          }, t.duration = function(e) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
          }, t.totalDuration = function(e) {
            return arguments.length ? (this._dirty = 0, rn(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, t.totalTime = function(e, t) {
            if (An(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for ($r(this, e), !r._dp || r.parent || Kr(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Yr(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === It || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), Dr(this, e, t)), this
          }, t.time = function(e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Hr(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
          }, t.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
          }, t.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Hr(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
          }, t.iteration = function(e, t) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * r, t) : this._repeat ? Ur(this._tTime, r) + 1 : 1
          }, t.timeScale = function(e, t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var r = this.parent && this._ts ? Gr(this.parent._time, this) : this._tTime;
            return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(dn(-Math.abs(this._delay), this._tDur, r), !1 !== t), Zr(this),
              function(e) {
                for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                return e
              }(this)
          }, t.paused = function(e) {
            return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (An(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== It && (this._tTime -= It)))), this) : this._ps
          }, t.startTime = function(e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return t && (t._sort || !this.parent) && Yr(t, this, e - this._delay), this
            }
            return this._start
          }, t.endTime = function(e) {
            return this._start + (Ut(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, t.rawTime = function(e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Gr(t.rawTime(e), this) : this._tTime : this._tTime
          }, t.revert = function(e) {
            void 0 === e && (e = pr);
            var t = mt;
            return mt = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), mt = t, this
          }, t.globalTime = function(e) {
            for (var t = this, r = arguments.length ? e : t.rawTime(); t;) r = t._start + r / (Math.abs(t._ts) || 1), t = t._dp;
            return !this.parent && this._sat ? this._sat.globalTime(e) : r
          }, t.repeat = function(e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, nn(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, t.repeatDelay = function(e) {
            if (arguments.length) {
              var t = this._time;
              return this._rDelay = e, nn(this), t ? this.time(t) : this
            }
            return this._rDelay
          }, t.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
          }, t.seek = function(e, t) {
            return this.totalTime(sn(this, e), Ut(t))
          }, t.restart = function(e, t) {
            return this.play().totalTime(e ? -this._delay : 0, Ut(t))
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
            return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= r && e < this.endTime(!0) - It))
          }, t.eventCallback = function(e, t, r) {
            var n = this.vars;
            return arguments.length > 1 ? (t ? (n[e] = t, r && (n[e + "Params"] = r), "onUpdate" === e && (this._onUpdate = t)) : delete n[e], this) : n[e]
          }, t.then = function(e) {
            var t = this;
            return new Promise(function(r) {
              var n = Bt(e) ? e : Nr,
                o = function() {
                  var e = t.then;
                  t.then = null, Bt(n) && (n = n(t)) && (n.then || n === t) && (t.then = e), r(n), t.then = e
                };
              t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? o() : t._prom = o
            })
          }, t.kill = function() {
            jn(this)
          }, e
        }();
      Ir(Yn.prototype, {
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
      var Qn = function(e) {
        function t(t, r) {
          var n;
          return void 0 === t && (t = {}), (n = e.call(this, t) || this).labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = Ut(t.sortChildren), yt && Yr(t.parent || yt, ft(n), r), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && Qr(ft(n), t.scrollTrigger), n
        }
        pt(t, e);
        var r = t.prototype;
        return r.to = function(e, t, r) {
          return an(0, arguments, this), this
        }, r.from = function(e, t, r) {
          return an(1, arguments, this), this
        }, r.fromTo = function(e, t, r, n) {
          return an(2, arguments, this), this
        }, r.set = function(e, t, r) {
          return t.duration = 0, t.parent = this, Ar(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new uo(e, t, sn(this, r), 1), this
        }, r.call = function(e, t, r) {
          return Yr(this, uo.delayedCall(0, e, t), r)
        }, r.staggerTo = function(e, t, r, n, o, i, s) {
          return r.duration = t, r.stagger = r.stagger || n, r.onComplete = i, r.onCompleteParams = s, r.parent = this, new uo(e, r, sn(this, o)), this
        }, r.staggerFrom = function(e, t, r, n, o, i, s) {
          return r.runBackwards = 1, Ar(r).immediateRender = Ut(r.immediateRender), this.staggerTo(e, t, r, n, o, i, s)
        }, r.staggerFromTo = function(e, t, r, n, o, i, s, a) {
          return n.startAt = r, Ar(n).immediateRender = Ut(n.immediateRender), this.staggerTo(e, t, n, o, i, s, a)
        }, r.render = function(e, t, r) {
          var n, o, i, s, a, l, d, u, c, f, p, h, m = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            g = e <= 0 ? 0 : Sr(e),
            b = this._zTime < 0 != e < 0 && (this._initted || !y);
          if (this !== yt && g > v && e >= 0 && (g = v), g !== this._tTime || r || b) {
            if (m !== this._time && y && (g += this._time - m, e += this._time - m), n = g, c = this._start, l = !(u = this._ts), b && (y || (m = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (p = this._yoyo, a = y + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * a + e, t, r);
              if (n = Sr(g % a), g === v ? (s = this._repeat, n = y) : ((s = ~~(g / a)) && s === g / a && (n = y, s--), n > y && (n = y)), f = Ur(this._tTime, a), !m && this._tTime && f !== s && this._tTime - f * a - this._dur <= 0 && (f = s), p && 1 & s && (n = y - n, h = 1), s !== f && !this._lock) {
                var _ = p && 1 & f,
                  w = _ === (p && 1 & s);
                if (s < f && (_ = !_), m = _ ? 0 : g % y ? y : g, this._lock = 1, this.render(m || (h ? 0 : Sr(s * a)), t, !y)._lock = 0, this._tTime = g, !t && this.parent && On(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), m && m !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (y = this._dur, v = this._tDur, w && (this._lock = 2, m = _ ? y : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                Wn(this, h)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (d = function(e, t, r) {
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
              }(this, Sr(m), Sr(n)), d && (g -= n - (n = d._start))), this._tTime = g, this._time = n, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, m = 0), !m && n && !t && !s && (On(this, "onStart"), this._tTime !== g)) return this;
            if (n >= m && e >= 0)
              for (o = this._first; o;) {
                if (i = o._next, (o._act || n >= o._start) && o._ts && d !== o) {
                  if (o.parent !== this) return this.render(e, t, r);
                  if (o.render(o._ts > 0 ? (n - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (n - o._start) * o._ts, t, r), n !== this._time || !this._ts && !l) {
                    d = 0, i && (g += this._zTime = -1e-8);
                    break
                  }
                }
                o = i
              } else {
                o = this._last;
                for (var x = e < 0 ? e : n; o;) {
                  if (i = o._prev, (o._act || x <= o._end) && o._ts && d !== o) {
                    if (o.parent !== this) return this.render(e, t, r);
                    if (o.render(o._ts > 0 ? (x - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (x - o._start) * o._ts, t, r || mt && (o._initted || o._startAt)), n !== this._time || !this._ts && !l) {
                      d = 0, i && (g += this._zTime = x ? -1e-8 : It);
                      break
                    }
                  }
                  o = i
                }
              }
            if (d && !t && (this.pause(), d.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1, this._ts)) return this._start = c, Zr(this), this.render(e, t, r);
            this._onUpdate && !t && On(this, "onUpdate", !0), (g === v && this._tTime >= this.totalDuration() || !g && m) && (c !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((e || !y) && (g === v && this._ts > 0 || !g && this._ts < 0) && qr(this, 1), t || e < 0 && !m || !g && !m && v || (On(this, g === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, r.add = function(e, t) {
          var r = this;
          if (Xt(t) || (t = sn(this, t, e)), !(e instanceof Yn)) {
            if (Kt(e)) return e.forEach(function(e) {
              return r.add(e, t)
            }), this;
            if (qt(e)) return this.addLabel(e, t);
            if (!Bt(e)) return this;
            e = uo.delayedCall(0, e)
          }
          return this !== e ? Yr(this, e, t) : this
        }, r.getChildren = function(e, t, r, n) {
          void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === n && (n = -Nt);
          for (var o = [], i = this._first; i;) i._start >= n && (i instanceof uo ? t && o.push(i) : (r && o.push(i), e && o.push.apply(o, i.getChildren(!0, t, r)))), i = i._next;
          return o
        }, r.getById = function(e) {
          for (var t = this.getChildren(1, 1, 1), r = t.length; r--;)
            if (t[r].vars.id === e) return t[r]
        }, r.remove = function(e) {
          return qt(e) ? this.removeLabel(e) : Bt(e) ? this.killTweensOf(e) : (Fr(this, e), e === this._recent && (this._recent = this._last), Br(this))
        }, r.totalTime = function(t, r) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Sr(Ln.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(e, t) {
          return this.labels[e] = sn(this, t), this
        }, r.removeLabel = function(e) {
          return delete this.labels[e], this
        }, r.addPause = function(e, t, r) {
          var n = uo.delayedCall(0, t || ur, r);
          return n.data = "isPause", this._hasPause = 1, Yr(this, n, sn(this, e))
        }, r.removePause = function(e) {
          var t = this._first;
          for (e = sn(this, e); t;) t._start === e && "isPause" === t.data && qr(t), t = t._next
        }, r.killTweensOf = function(e, t, r) {
          for (var n = this.getTweensOf(e, r), o = n.length; o--;) Jn !== n[o] && n[o].kill(e, t);
          return this
        }, r.getTweensOf = function(e, t) {
          for (var r, n = [], o = pn(e), i = this._first, s = Xt(t); i;) i instanceof uo ? Rr(i._targets, o) && (s ? (!Jn || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && n.push(i) : (r = i.getTweensOf(o, t)).length && n.push.apply(n, r), i = i._next;
          return n
        }, r.tweenTo = function(e, t) {
          t = t || {};
          var r, n = this,
            o = sn(n, e),
            i = t,
            s = i.startAt,
            a = i.onStart,
            l = i.onStartParams,
            d = i.immediateRender,
            u = uo.to(n, Ir({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration: t.duration || Math.abs((o - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || It,
              onStart: function() {
                if (n.pause(), !r) {
                  var e = t.duration || Math.abs((o - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                  u._dur !== e && rn(u, e, 0, 1).render(u._time, !0, !0), r = 1
                }
                a && a.apply(u, l || [])
              }
            }, t));
          return d ? u.render(0) : u
        }, r.tweenFromTo = function(e, t, r) {
          return this.tweenTo(t, Ir({
            startAt: {
              time: sn(this, e)
            }
          }, r))
        }, r.recent = function() {
          return this._recent
        }, r.nextLabel = function(e) {
          return void 0 === e && (e = this._time), Cn(this, sn(this, e))
        }, r.previousLabel = function(e) {
          return void 0 === e && (e = this._time), Cn(this, sn(this, e), 1)
        }, r.currentLabel = function(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + It)
        }, r.shiftChildren = function(e, t, r) {
          void 0 === r && (r = 0);
          for (var n, o = this._first, i = this.labels; o;) o._start >= r && (o._start += e, o._end += e), o = o._next;
          if (t)
            for (n in i) i[n] >= r && (i[n] += e);
          return Br(this)
        }, r.invalidate = function(t) {
          var r = this._first;
          for (this._lock = 0; r;) r.invalidate(t), r = r._next;
          return e.prototype.invalidate.call(this, t)
        }, r.clear = function(e) {
          void 0 === e && (e = !0);
          for (var t, r = this._first; r;) t = r._next, this.remove(r), r = t;
          return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Br(this)
        }, r.totalDuration = function(e) {
          var t, r, n, o = 0,
            i = this,
            s = i._last,
            a = Nt;
          if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e));
          if (i._dirty) {
            for (n = i.parent; s;) t = s._prev, s._dirty && s.totalDuration(), (r = s._start) > a && i._sort && s._ts && !i._lock ? (i._lock = 1, Yr(i, s, r - s._delay, 1)._lock = 0) : a = r, r < 0 && s._ts && (o -= r, (!n && !i._dp || n && n.smoothChildTiming) && (i._start += r / i._ts, i._time -= r, i._tTime -= r), i.shiftChildren(-r, !1, -1 / 0), a = 0), s._end > o && s._ts && (o = s._end), s = t;
            rn(i, i === yt && i._time > o ? i._time : o, 1, 1), i._dirty = 0
          }
          return i._tDur
        }, t.updateRoot = function(e) {
          if (yt._ts && (Dr(yt, Gr(e, yt)), xt = Ln.frame), Ln.frame >= br) {
            br += Dt.autoSleep || 120;
            var t = yt._first;
            if ((!t || !t._ts) && Dt.autoSleep && Ln._listeners.length < 2) {
              for (; t && !t._ts;) t = t._next;
              t || Ln.sleep()
            }
          }
        }, t
      }(Yn);
      Ir(Qn.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var Jn, eo, to = function(e, t, r, n, o, i, s) {
          var a, l, d, u, c, f, p, h, m = new Oo(this._pt, e, t, 0, 1, go, null, o),
            v = 0,
            y = 0;
          for (m.b = r, m.e = n, r += "", (p = ~(n += "").indexOf("random(")) && (n = wn(n)), i && (i(h = [r, n], e, t), r = h[0], n = h[1]), l = r.match(er) || []; a = er.exec(n);) u = a[0], c = n.substring(v, a.index), d ? d = (d + 1) % 5 : "rgba(" === c.substr(-5) && (d = 1), u !== l[y++] && (f = parseFloat(l[y - 1]) || 0, m._pt = {
            _next: m._pt,
            p: c || 1 === y ? c : ",",
            s: f,
            c: "=" === u.charAt(1) ? kr(f, u) - f : parseFloat(u) - f,
            m: d && d < 4 ? Math.round : 0
          }, v = er.lastIndex);
          return m.c = v < n.length ? n.substring(v, n.length) : "", m.fp = s, (tr.test(n) || p) && (m.e = 0), this._pt = m, m
        },
        ro = function(e, t, r, n, o, i, s, a, l, d) {
          Bt(n) && (n = n(o || 0, e, i));
          var u, c = e[t],
            f = "get" !== r ? r : Bt(c) ? l ? e[t.indexOf("set") || !Bt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : c,
            p = Bt(c) ? l ? po : fo : co;
          if (qt(n) && (~n.indexOf("random(") && (n = wn(n)), "=" === n.charAt(1) && ((u = kr(f, n) + (un(f) || 0)) || 0 === u) && (n = u)), !d || f !== n || eo) return isNaN(f * n) || "" === n ? (!c && !(t in e) && ar(t, n), to.call(this, e, t, f, n, p, a || Dt.stringFilter, l)) : (u = new Oo(this._pt, e, t, +f || 0, n - (f || 0), "boolean" == typeof c ? yo : vo, 0, p), l && (u.fp = l), s && u.modifier(s, this, e), this._pt = u)
        },
        no = function(e, t, r, n, o, i) {
          var s, a, l, d;
          if (yr[e] && !1 !== (s = new yr[e]).init(o, s.rawVars ? t[e] : function(e, t, r, n, o) {
              if (Bt(e) && (e = so(e, o, t, r, n)), !Ht(e) || e.style && e.nodeType || Kt(e) || $t(e)) return qt(e) ? so(e, o, t, r, n) : e;
              var i, s = {};
              for (i in e) s[i] = so(e[i], o, t, r, n);
              return s
            }(t[e], n, o, i, r), r, n, i) && (r._pt = a = new Oo(r._pt, o, e, 0, 1, s.render, s, 0, s.priority), r !== Ct))
            for (l = r._ptLookup[r._targets.indexOf(o)], d = s._props.length; d--;) l[s._props[d]] = a;
          return s
        },
        oo = function e(t, r, n) {
          var o, i, s, a, l, d, u, c, f, p, h, m, v, y = t.vars,
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
            k = t._startAt,
            R = t._targets,
            T = t.parent,
            D = T && "nested" === T.data ? T.vars.targets : R,
            E = "auto" === t._overwrite && !ht,
            N = t.timeline;
          if (N && (!j || !g) && (g = "none"), t._ease = Hn(g, Et.ease), t._yEase = O ? Xn(Hn(!0 === O ? g : O, Et.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !N && !!y.runBackwards, !N || j && !y.stagger) {
            if (m = (c = R[0] ? Cr(R[0]).harness : 0) && y[c.prop], o = Lr(y, hr), k && (k._zTime < 0 && k.progress(1), r < 0 && C && _ && !P ? k.render(-1, !0) : k.revert(C && S ? fr : cr), k._lazy = 0), b) {
              if (qr(t._startAt = uo.set(R, Ir({
                  data: "isStart",
                  overwrite: !1,
                  parent: T,
                  immediateRender: !0,
                  lazy: !k && Ut(w),
                  startAt: null,
                  delay: 0,
                  onUpdate: x && function() {
                    return On(t, "onUpdate")
                  },
                  stagger: 0
                }, b))), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (mt || !_ && !P) && t._startAt.revert(fr), _ && S && r <= 0 && n <= 0) return void(r && (t._zTime = r))
            } else if (C && S && !k)
              if (r && (_ = !1), s = Ir({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: _ && !k && Ut(w),
                  immediateRender: _,
                  stagger: 0,
                  parent: T
                }, o), m && (s[c.prop] = m), qr(t._startAt = uo.set(R, s)), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (mt ? t._startAt.revert(fr) : t._startAt.render(-1, !0)), t._zTime = r, _) {
                if (!r) return
              } else e(t._startAt, It, It);
            for (t._pt = t._ptCache = 0, w = S && Ut(w) || w && !S, i = 0; i < R.length; i++) {
              if (u = (l = R[i])._gsap || xr(R)[i]._gsap, t._ptLookup[i] = p = {}, vr[u.id] && mr.length && Tr(), h = D === R ? i : D.indexOf(l), c && !1 !== (f = new c).init(l, m || o, t, h, D) && (t._pt = a = new Oo(t._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(e) {
                  p[e] = a
                }), f.priority && (d = 1)), !c || m)
                for (s in o) yr[s] && (f = no(s, o, t, h, l, D)) ? f.priority && (d = 1) : p[s] = a = ro.call(t, l, s, "get", o[s], h, D, 0, y.stringFilter);
              t._op && t._op[i] && t.kill(l, t._op[i]), E && t._pt && (Jn = t, yt.killTweensOf(l, p, t.globalTime(r)), v = !t.parent, Jn = 0), t._pt && w && (vr[u.id] = 1)
            }
            d && Co(t), t._onInit && t._onInit(t)
          }
          t._onUpdate = x, t._initted = (!t._op || t._pt) && !v, j && r <= 0 && N.render(Nt, !0, !0)
        },
        io = function(e, t, r, n) {
          var o, i, s = t.ease || n || "power1.inOut";
          if (Kt(t)) i = r[e] || (r[e] = []), t.forEach(function(e, r) {
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
        so = function(e, t, r, n, o) {
          return Bt(e) ? e.call(t, r, n, o) : qt(e) && ~e.indexOf("random(") ? wn(e) : e
        },
        ao = wr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        lo = {};
      jr(ao + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
        return lo[e] = 1
      });
      var uo = function(e) {
        function t(t, r, n, o) {
          var i;
          "number" == typeof r && (n.duration = r, r = n, n = null);
          var s, a, l, d, u, c, f, p, h = (i = e.call(this, o ? r : Ar(r)) || this).vars,
            m = h.duration,
            v = h.delay,
            y = h.immediateRender,
            g = h.stagger,
            b = h.overwrite,
            _ = h.keyframes,
            w = h.defaults,
            x = h.scrollTrigger,
            C = h.yoyoEase,
            O = r.parent || yt,
            j = (Kt(t) || $t(t) ? Xt(t[0]) : "length" in r) ? [t] : pn(t);
          if (i._targets = j.length ? xr(j) : lr("GSAP target " + t + " not found. https://gsap.com", !Dt.nullTargetWarn) || [], i._ptLookup = [], i._overwrite = b, _ || g || Zt(m) || Zt(v)) {
            if (r = i.vars, (s = i.timeline = new Qn({
                data: "nested",
                defaults: w || {},
                targets: O && "nested" === O.data ? O.vars.targets : j
              })).kill(), s.parent = s._dp = ft(i), s._start = 0, g || Zt(m) || Zt(v)) {
              if (d = j.length, f = g && vn(g), Ht(g))
                for (u in g) ~ao.indexOf(u) && (p || (p = {}), p[u] = g[u]);
              for (a = 0; a < d; a++)(l = Lr(r, lo)).stagger = 0, C && (l.yoyoEase = C), p && zr(l, p), c = j[a], l.duration = +so(m, ft(i), a, c, j), l.delay = (+so(v, ft(i), a, c, j) || 0) - i._delay, !g && 1 === d && l.delay && (i._delay = v = l.delay, i._start += v, l.delay = 0), s.to(c, l, f ? f(a, c, j) : 0), s._ease = Vn.none;
              s.duration() ? m = v = 0 : i.timeline = 0
            } else if (_) {
              Ar(Ir(s.vars.defaults, {
                ease: "none"
              })), s._ease = Hn(_.ease || r.ease || "none");
              var P, S, k, R = 0;
              if (Kt(_)) _.forEach(function(e) {
                return s.to(j, e, ">")
              }), s.duration();
              else {
                for (u in l = {}, _) "ease" === u || "easeEach" === u || io(u, _[u], l, _.easeEach);
                for (u in l)
                  for (P = l[u].sort(function(e, t) {
                      return e.t - t.t
                    }), R = 0, a = 0; a < P.length; a++)(k = {
                    ease: (S = P[a]).e,
                    duration: (S.t - (a ? P[a - 1].t : 0)) / 100 * m
                  })[u] = S.v, s.to(j, k, R), R += k.duration;
                s.duration() < m && s.to({}, {
                  duration: m - s.duration()
                })
              }
            }
            m || i.duration(m = s.duration())
          } else i.timeline = 0;
          return !0 !== b || ht || (Jn = ft(i), yt.killTweensOf(j), Jn = 0), Yr(O, ft(i), n), r.reversed && i.reverse(), r.paused && i.paused(!0), (y || !m && !_ && i._start === Sr(O._time) && Ut(y) && Wr(ft(i)) && "nested" !== O.data) && (i._tTime = -1e-8, i.render(Math.max(0, -v) || 0)), x && Qr(ft(i), x), i
        }
        pt(t, e);
        var r = t.prototype;
        return r.render = function(e, t, r) {
          var n, o, i, s, a, l, d, u, c, f = this._time,
            p = this._tDur,
            h = this._dur,
            m = e < 0,
            v = e > p - It && !m ? p : e < It ? 0 : e;
          if (h) {
            if (v !== this._tTime || !e || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
              if (n = v, u = this.timeline, this._repeat) {
                if (s = h + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * s + e, t, r);
                if (n = Sr(v % s), v === p ? (i = this._repeat, n = h) : ((i = ~~(v / s)) && i === Sr(v / s) && (n = h, i--), n > h && (n = h)), (l = this._yoyo && 1 & i) && (c = this._yEase, n = h - n), a = Ur(this._tTime, s), n === f && !r && this._initted && i === a) return this._tTime = v, this;
                i !== a && (u && this._yEase && Wn(u, l), this.vars.repeatRefresh && !l && !this._lock && this._time !== s && this._initted && (this._lock = r = 1, this.render(Sr(s * i), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Jr(this, m ? e : n, r, t, v)) return this._tTime = 0, this;
                if (!(f === this._time || r && this.vars.repeatRefresh && i !== a)) return this;
                if (h !== this._dur) return this.render(e, t, r)
              }
              if (this._tTime = v, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (c || this._ease)(n / h), this._from && (this.ratio = d = 1 - d), n && !f && !t && !i && (On(this, "onStart"), this._tTime !== v)) return this;
              for (o = this._pt; o;) o.r(d, o.d), o = o._next;
              u && u.render(e < 0 ? e : u._dur * u._ease(n / this._dur), t, r) || this._startAt && (this._zTime = e), this._onUpdate && !t && (m && Xr(this, e, 0, r), On(this, "onUpdate")), this._repeat && i !== a && this.vars.onRepeat && !t && this.parent && On(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (m && !this._onUpdate && Xr(this, e, 0, !0), (e || !h) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && qr(this, 1), t || m && !f || !(v || f || l) || (On(this, v === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < p && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(e, t, r, n) {
            var o, i, s, a = e.ratio,
              l = t < 0 || !t && (!e._start && en(e) && (e._initted || !tn(e)) || (e._ts < 0 || e._dp._ts < 0) && !tn(e)) ? 0 : 1,
              d = e._rDelay,
              u = 0;
            if (d && e._repeat && (u = dn(0, e._tDur, t), i = Ur(u, d), e._yoyo && 1 & i && (l = 1 - l), i !== Ur(e._tTime, d) && (a = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== a || mt || n || e._zTime === It || !t && e._zTime) {
              if (!e._initted && Jr(e, t, n, r, u)) return;
              for (s = e._zTime, e._zTime = t || (r ? It : 0), r || (r = t && !s), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = u, o = e._pt; o;) o.r(l, o.d), o = o._next;
              t < 0 && Xr(e, t, 0, !0), e._onUpdate && !r && On(e, "onUpdate"), u && e._repeat && !r && e.parent && On(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && qr(e, 1), r || mt || (On(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = t)
          }(this, e, t, r);
          return this
        }, r.targets = function() {
          return this._targets
        }, r.invalidate = function(t) {
          return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
        }, r.resetTo = function(e, t, r, n, o) {
          Ot || Ln.wake(), this._ts || this.play();
          var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || oo(this, i),
            function(e, t, r, n, o, i, s, a) {
              var l, d, u, c, f = (e._pt && e._ptCache || (e._ptCache = {}))[t];
              if (!f)
                for (f = e._ptCache[t] = [], u = e._ptLookup, c = e._targets.length; c--;) {
                  if ((l = u[c][t]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                  if (!l) return eo = 1, e.vars[t] = "+=0", oo(e, s), eo = 0, a ? lr(t + " not eligible for reset") : 1;
                  f.push(l)
                }
              for (c = f.length; c--;)(l = (d = f[c])._pt || d).s = !n && 0 !== n || o ? l.s + (n || 0) + i * l.c : n, l.c = r - l.s, d.e && (d.e = Pr(r) + un(d.e)), d.b && (d.b = l.s + un(d.b))
            }(this, e, t, r, n, this._ease(i / this._dur), i, o) ? this.resetTo(e, t, r, n, 1) : ($r(this, 0), this.parent || Vr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(e, t) {
          if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? jn(this) : this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Jn && !0 !== Jn.vars.overwrite)._first || jn(this), this.parent && r !== this.timeline.totalDuration() && rn(this, this._dur * this.timeline._tDur / r, 0, 1), this
          }
          var n, o, i, s, a, l, d, u = this._targets,
            c = e ? pn(e) : u,
            f = this._ptLookup,
            p = this._pt;
          if ((!t || "all" === t) && function(e, t) {
              for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r];);
              return r < 0
            }(u, c)) return "all" === t && (this._pt = 0), jn(this);
          for (n = this._op = this._op || [], "all" !== t && (qt(t) && (a = {}, jr(t, function(e) {
              return a[e] = 1
            }), t = a), t = function(e, t) {
              var r, n, o, i, s = e[0] ? Cr(e[0]).harness : 0,
                a = s && s.aliases;
              if (!a) return t;
              for (n in r = zr({}, t), a)
                if (n in r)
                  for (o = (i = a[n].split(",")).length; o--;) r[i[o]] = r[n];
              return r
            }(u, t)), d = u.length; d--;)
            if (~c.indexOf(u[d]))
              for (a in o = f[d], "all" === t ? (n[d] = t, s = o, i = {}) : (i = n[d] = n[d] || {}, s = t), s)(l = o && o[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || Fr(this, l, "_pt"), delete o[a]), "all" !== i && (i[a] = 1);
          return this._initted && !this._pt && p && jn(this), this
        }, t.to = function(e, r) {
          return new t(e, r, arguments[2])
        }, t.from = function(e, t) {
          return an(1, arguments)
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
          return an(2, arguments)
        }, t.set = function(e, r) {
          return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(e, r)
        }, t.killTweensOf = function(e, t, r) {
          return yt.killTweensOf(e, t, r)
        }, t
      }(Yn);
      Ir(uo.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), jr("staggerTo,staggerFrom,staggerFromTo", function(e) {
        uo[e] = function() {
          var t = new Qn,
            r = cn.call(arguments, 0);
          return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r)
        }
      });
      var co = function(e, t, r) {
          return e[t] = r
        },
        fo = function(e, t, r) {
          return e[t](r)
        },
        po = function(e, t, r, n) {
          return e[t](n.fp, r)
        },
        ho = function(e, t, r) {
          return e.setAttribute(t, r)
        },
        mo = function(e, t) {
          return Bt(e[t]) ? fo : Wt(e[t]) && e.setAttribute ? ho : co
        },
        vo = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
        },
        yo = function(e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        },
        go = function(e, t) {
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
        bo = function(e, t) {
          for (var r = t._pt; r;) r.r(e, r.d), r = r._next
        },
        _o = function(e, t, r, n) {
          for (var o, i = this._pt; i;) o = i._next, i.p === n && i.modifier(e, t, r), i = o
        },
        wo = function(e) {
          for (var t, r, n = this._pt; n;) r = n._next, n.p === e && !n.op || n.op === e ? Fr(this, n, "_pt") : n.dep || (t = 1), n = r;
          return !t
        },
        xo = function(e, t, r, n) {
          n.mSet(e, t, n.m.call(n.tween, r, n.mt), n)
        },
        Co = function(e) {
          for (var t, r, n, o, i = e._pt; i;) {
            for (t = i._next, r = n; r && r.pr > i.pr;) r = r._next;
            (i._prev = r ? r._prev : o) ? i._prev._next = i: n = i, (i._next = r) ? r._prev = i : o = i, i = t
          }
          e._pt = n
        },
        Oo = function() {
          function e(e, t, r, n, o, i, s, a, l) {
            this.t = t, this.s = n, this.c = o, this.p = r, this.r = i || vo, this.d = s || this, this.set = a || co, this.pr = l || 0, this._next = e, e && (e._prev = this)
          }
          return e.prototype.modifier = function(e, t, r) {
            this.mSet = this.mSet || this.set, this.set = xo, this.m = e, this.mt = r, this.tween = t
          }, e
        }();
      jr(wr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return hr[e] = 1
      }), or.TweenMax = or.TweenLite = uo, or.TimelineLite = or.TimelineMax = Qn, yt = new Qn({
        sortChildren: !1,
        defaults: Et,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), Dt.stringFilter = Mn;
      var jo = [],
        Po = {},
        So = [],
        ko = 0,
        Ro = 0,
        To = function(e) {
          return (Po[e] || So).map(function(e) {
            return e()
          })
        },
        Do = function() {
          var e = Date.now(),
            t = [];
          e - ko > 2 && (To("matchMediaInit"), jo.forEach(function(e) {
            var r, n, o, i, s = e.queries,
              a = e.conditions;
            for (n in s)(r = gt.matchMedia(s[n]).matches) && (o = 1), r !== a[n] && (a[n] = r, i = 1);
            i && (e.revert(), o && t.push(e))
          }), To("matchMediaRevert"), t.forEach(function(e) {
            return e.onMatch(e, function(t) {
              return e.add(null, t)
            })
          }), ko = e, To("matchMedia"))
        },
        Eo = function() {
          function e(e, t) {
            this.selector = t && hn(t), this.data = [], this._r = [], this.isReverted = !1, this.id = Ro++, e && this.add(e)
          }
          var t = e.prototype;
          return t.add = function(e, t, r) {
            Bt(e) && (r = t, t = e, e = Bt);
            var n = this,
              o = function() {
                var e, o = vt,
                  i = n.selector;
                return o && o !== n && o.data.push(n), r && (n.selector = hn(r)), vt = n, e = t.apply(n, arguments), Bt(e) && n._r.push(e), vt = o, n.selector = i, n.isReverted = !1, e
              };
            return n.last = o, e === Bt ? o(n, function(e) {
              return n.add(null, e)
            }) : e ? n[e] = o : o
          }, t.ignore = function(e) {
            var t = vt;
            vt = null, e(this), vt = t
          }, t.getTweens = function() {
            var t = [];
            return this.data.forEach(function(r) {
              return r instanceof e ? t.push.apply(t, r.getTweens()) : r instanceof uo && !(r.parent && "nested" === r.parent.data) && t.push(r)
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
                  }), o = r.data.length; o--;)(t = r.data[o]) instanceof Qn ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof uo) && t.revert && t.revert(e);
                r._r.forEach(function(t) {
                  return t(e, r)
                }), r.isReverted = !0
              }() : this.data.forEach(function(e) {
                return e.kill && e.kill()
              }), this.clear(), t)
              for (var n = jo.length; n--;) jo[n].id === this.id && jo.splice(n, 1)
          }, t.revert = function(e) {
            this.kill(e || {})
          }, e
        }(),
        No = function() {
          function e(e) {
            this.contexts = [], this.scope = e, vt && vt.data.push(this)
          }
          var t = e.prototype;
          return t.add = function(e, t, r) {
            Ht(e) || (e = {
              matches: e
            });
            var n, o, i, s = new Eo(0, r || this.scope),
              a = s.conditions = {};
            for (o in vt && !s.selector && (s.selector = vt.selector), this.contexts.push(s), t = s.add("onMatch", t), s.queries = e, e) "all" === o ? i = 1 : (n = gt.matchMedia(e[o])) && (jo.indexOf(s) < 0 && jo.push(s), (a[o] = n.matches) && (i = 1), n.addListener ? n.addListener(Do) : n.addEventListener("change", Do));
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
        Io = {
          registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            t.forEach(function(e) {
              return Sn(e)
            })
          },
          timeline: function(e) {
            return new Qn(e)
          },
          getTweensOf: function(e, t) {
            return yt.getTweensOf(e, t)
          },
          getProperty: function(e, t, r, n) {
            qt(e) && (e = pn(e)[0]);
            var o = Cr(e || {}).get,
              i = r ? Nr : Er;
            return "native" === r && (r = ""), e ? t ? i((yr[t] && yr[t].get || o)(e, t, r, n)) : function(t, r, n) {
              return i((yr[t] && yr[t].get || o)(e, t, r, n))
            } : e
          },
          quickSetter: function(e, t, r) {
            if ((e = pn(e)).length > 1) {
              var n = e.map(function(e) {
                  return Lo.quickSetter(e, t, r)
                }),
                o = n.length;
              return function(e) {
                for (var t = o; t--;) n[t](e)
              }
            }
            e = e[0] || {};
            var i = yr[t],
              s = Cr(e),
              a = s.harness && (s.harness.aliases || {})[t] || t,
              l = i ? function(t) {
                var n = new i;
                Ct._pt = 0, n.init(e, r ? t + r : t, Ct, 0, [e]), n.render(1, n), Ct._pt && bo(1, Ct)
              } : s.set(e, a);
            return i ? l : function(t) {
              return l(e, a, r ? t + r : t, s, 1)
            }
          },
          quickTo: function(e, t, r) {
            var n, o = Lo.to(e, zr(((n = {})[t] = "+=0.1", n.paused = !0, n), r || {})),
              i = function(e, r, n) {
                return o.resetTo(t, e, r, n)
              };
            return i.tween = o, i
          },
          isTweening: function(e) {
            return yt.getTweensOf(e, !0).length > 0
          },
          defaults: function(e) {
            return e && e.ease && (e.ease = Hn(e.ease, Et.ease)), Mr(Et, e || {})
          },
          config: function(e) {
            return Mr(Dt, e || {})
          },
          registerEffect: function(e) {
            var t = e.name,
              r = e.effect,
              n = e.plugins,
              o = e.defaults,
              i = e.extendTimeline;
            (n || "").split(",").forEach(function(e) {
              return e && !yr[e] && !or[e] && lr(t + " effect requires " + e + " plugin.")
            }), gr[t] = function(e, t, n) {
              return r(pn(e), Ir(t || {}, o), n)
            }, i && (Qn.prototype[t] = function(e, r, n) {
              return this.add(gr[t](e, Ht(r) ? r : (n = r) && {}, this), n)
            })
          },
          registerEase: function(e, t) {
            Vn[e] = Hn(t)
          },
          parseEase: function(e, t) {
            return arguments.length ? Hn(e, t) : Vn
          },
          getById: function(e) {
            return yt.getById(e)
          },
          exportRoot: function(e, t) {
            void 0 === e && (e = {});
            var r, n, o = new Qn(e);
            for (o.smoothChildTiming = Ut(e.smoothChildTiming), yt.remove(o), o._dp = 0, o._time = o._tTime = yt._time, r = yt._first; r;) n = r._next, !t && !r._dur && r instanceof uo && r.vars.onComplete === r._targets[0] || Yr(o, r, r._start - r._delay), r = n;
            return Yr(yt, o, 0), o
          },
          context: function(e, t) {
            return e ? new Eo(e, t) : vt
          },
          matchMedia: function(e) {
            return new No(e)
          },
          matchMediaRefresh: function() {
            return jo.forEach(function(e) {
              var t, r, n = e.conditions;
              for (r in n) n[r] && (n[r] = !1, t = 1);
              t && e.revert()
            }) || Do()
          },
          addEventListener: function(e, t) {
            var r = Po[e] || (Po[e] = []);
            ~r.indexOf(t) || r.push(t)
          },
          removeEventListener: function(e, t) {
            var r = Po[e],
              n = r && r.indexOf(t);
            n >= 0 && r.splice(n, 1)
          },
          utils: {
            wrap: function e(t, r, n) {
              var o = r - t;
              return Kt(t) ? _n(t, e(0, t.length), r) : ln(n, function(e) {
                return (o + (e - t) % o) % o + t
              })
            },
            wrapYoyo: function e(t, r, n) {
              var o = r - t,
                i = 2 * o;
              return Kt(t) ? _n(t, e(0, t.length - 1), r) : ln(n, function(e) {
                return t + ((e = (i + (e - t) % i) % i || 0) > o ? i - e : e)
              })
            },
            distribute: vn,
            random: bn,
            snap: gn,
            normalize: function(e, t, r) {
              return xn(e, t, 0, 1, r)
            },
            getUnit: un,
            clamp: function(e, t, r) {
              return ln(r, function(r) {
                return dn(e, t, r)
              })
            },
            splitColor: Dn,
            toArray: pn,
            selector: hn,
            mapRange: xn,
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
                return e(parseFloat(r)) + (t || un(r))
              }
            },
            interpolate: function e(t, r, n, o) {
              var i = isNaN(t + r) ? 0 : function(e) {
                return (1 - e) * t + e * r
              };
              if (!i) {
                var s, a, l, d, u, c = qt(t),
                  f = {};
                if (!0 === n && (o = 1) && (n = null), c) t = {
                  p: t
                }, r = {
                  p: r
                };
                else if (Kt(t) && !Kt(r)) {
                  for (l = [], d = t.length, u = d - 2, a = 1; a < d; a++) l.push(e(t[a - 1], t[a]));
                  d--, i = function(e) {
                    e *= d;
                    var t = Math.min(u, ~~e);
                    return l[t](e - t)
                  }, n = r
                } else o || (t = zr(Kt(t) ? [] : {}, t));
                if (!l) {
                  for (s in r) ro.call(f, t, s, "get", r[s]);
                  i = function(e) {
                    return bo(e, f) || (c ? t.p : t)
                  }
                }
              }
              return ln(n, i)
            },
            shuffle: mn
          },
          install: sr,
          effects: gr,
          ticker: Ln,
          updateRoot: Qn.updateRoot,
          plugins: yr,
          globalTimeline: yt,
          core: {
            PropTween: Oo,
            globals: dr,
            Tween: uo,
            Timeline: Qn,
            Animation: Yn,
            getCache: Cr,
            _removeLinkedListItem: Fr,
            reverting: function() {
              return mt
            },
            context: function(e) {
              return e && vt && (vt.data.push(e), e._ctx = vt), vt
            },
            suppressOverwrites: function(e) {
              return ht = e
            }
          }
        };
      jr("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return Io[e] = uo[e]
      }), Ln.add(Qn.updateRoot), Ct = Io.to({}, {
        duration: 0
      });
      var zo = function(e, t) {
          for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
          return r
        },
        Mo = function(e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function(e, r, n) {
              n._onInit = function(e) {
                var n, o;
                if (qt(r) && (n = {}, jr(r, function(e) {
                    return n[e] = 1
                  }), r = n), t) {
                  for (o in n = {}, r) n[o] = t(r[o]);
                  r = n
                }! function(e, t) {
                  var r, n, o, i = e._targets;
                  for (r in t)
                    for (n = i.length; n--;)(o = e._ptLookup[n][r]) && (o = o.d) && (o._pt && (o = zo(o, r)), o && o.modifier && o.modifier(t[r], e, i[n], r))
                }(e, r)
              }
            }
          }
        },
        Lo = Io.registerPlugin({
          name: "attr",
          init: function(e, t, r, n, o) {
            var i, s, a;
            for (i in this.tween = r, t) a = e.getAttribute(i) || "", (s = this.add(e, "setAttribute", (a || 0) + "", t[i], n, o, 0, 0, i)).op = i, s.b = a, this._props.push(i)
          },
          render: function(e, t) {
            for (var r = t._pt; r;) mt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
          }
        }, {
          name: "endArray",
          init: function(e, t) {
            for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
          }
        }, Mo("roundProps", yn), Mo("modifiers"), Mo("snap", gn)) || Io;
      uo.version = Qn.version = Lo.version = "3.12.5", wt = 1, Gt() && An(), Vn.Power0, Vn.Power1, Vn.Power2, Vn.Power3, Vn.Power4, Vn.Linear, Vn.Quad, Vn.Cubic, Vn.Quart, Vn.Quint, Vn.Strong, Vn.Elastic, Vn.Back, Vn.SteppedEase, Vn.Bounce, Vn.Sine, Vn.Expo, Vn.Circ;
      var Ao, Vo, Fo, qo, Bo, Xo, Wo, Ho, Uo = {},
        Go = 180 / Math.PI,
        Zo = Math.PI / 180,
        $o = Math.atan2,
        Ko = /([A-Z])/g,
        Yo = /(left|right|width|margin|padding|x)/i,
        Qo = /[\s,\(]\S/,
        Jo = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        ei = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        ti = function(e, t) {
          return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        ri = function(e, t) {
          return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        ni = function(e, t) {
          var r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
        },
        oi = function(e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t)
        },
        ii = function(e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        },
        si = function(e, t, r) {
          return e.style[t] = r
        },
        ai = function(e, t, r) {
          return e.style.setProperty(t, r)
        },
        li = function(e, t, r) {
          return e._gsap[t] = r
        },
        di = function(e, t, r) {
          return e._gsap.scaleX = e._gsap.scaleY = r
        },
        ui = function(e, t, r, n, o) {
          var i = e._gsap;
          i.scaleX = i.scaleY = r, i.renderTransform(o, i)
        },
        ci = function(e, t, r, n, o) {
          var i = e._gsap;
          i[t] = r, i.renderTransform(o, i)
        },
        fi = "transform",
        pi = fi + "Origin",
        hi = function e(t, r) {
          var n = this,
            o = this.target,
            i = o.style,
            s = o._gsap;
          if (t in Uo && i) {
            if (this.tfm = this.tfm || {}, "transform" === t) return Jo.transform.split(",").forEach(function(t) {
              return e.call(n, t, r)
            });
            if (~(t = Jo[t] || t).indexOf(",") ? t.split(",").forEach(function(e) {
                return n.tfm[e] = Ei(o, e)
              }) : this.tfm[t] = s.x ? s[t] : Ei(o, t), t === pi && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(fi) >= 0) return;
            s.svg && (this.svgo = o.getAttribute("data-svg-origin"), this.props.push(pi, r, "")), t = fi
          }(i || r) && this.props.push(t, r, i[t])
        },
        mi = function(e) {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        vi = function() {
          var e, t, r = this.props,
            n = this.target,
            o = n.style,
            i = n._gsap;
          for (e = 0; e < r.length; e += 3) r[e + 1] ? n[r[e]] = r[e + 2] : r[e + 2] ? o[r[e]] = r[e + 2] : o.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(Ko, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (e = Wo()) && e.isStart || o[fi] || (mi(o), i.zOrigin && o[pi] && (o[pi] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
          }
        },
        yi = function(e, t) {
          var r = {
            target: e,
            props: [],
            revert: vi,
            save: hi
          };
          return e._gsap || Lo.core.getCache(e), t && t.split(",").forEach(function(e) {
            return r.save(e)
          }), r
        },
        gi = function(e, t) {
          var r = Vo.createElementNS ? Vo.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Vo.createElement(e);
          return r && r.style ? r : Vo.createElement(e)
        },
        bi = function e(t, r, n) {
          var o = getComputedStyle(t);
          return o[r] || o.getPropertyValue(r.replace(Ko, "-$1").toLowerCase()) || o.getPropertyValue(r) || !n && e(t, wi(r) || r, 1) || ""
        },
        _i = "O,Moz,ms,Ms,Webkit".split(","),
        wi = function(e, t, r) {
          var n = (t || Bo).style,
            o = 5;
          if (e in n && !r) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(_i[o] + e in n););
          return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? _i[o] : "") + e
        },
        xi = function() {
          "undefined" != typeof window && window.document && (Ao = window, Vo = Ao.document, Fo = Vo.documentElement, Bo = gi("div") || {
            style: {}
          }, gi("div"), fi = wi(fi), pi = fi + "Origin", Bo.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ho = !!wi("perspective"), Wo = Lo.core.reverting, qo = 1)
        },
        Ci = function e(t) {
          var r, n = gi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            o = this.parentNode,
            i = this.nextSibling,
            s = this.style.cssText;
          if (Fo.appendChild(n), n.appendChild(this), this.style.display = "block", t) try {
            r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
          } catch (e) {} else this._gsapBBox && (r = this._gsapBBox());
          return o && (i ? o.insertBefore(this, i) : o.appendChild(this)), Fo.removeChild(n), this.style.cssText = s, r
        },
        Oi = function(e, t) {
          for (var r = t.length; r--;)
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
        },
        ji = function(e) {
          var t;
          try {
            t = e.getBBox()
          } catch (r) {
            t = Ci.call(e, !0)
          }
          return t && (t.width || t.height) || e.getBBox === Ci || (t = Ci.call(e, !0)), !t || t.width || t.x || t.y ? t : {
            x: +Oi(e, ["x", "cx", "x1"]) || 0,
            y: +Oi(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Pi = function(e) {
          return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !ji(e))
        },
        Si = function(e, t) {
          if (t) {
            var r, n = e.style;
            t in Uo && t !== pi && (t = fi), n.removeProperty ? ("ms" !== (r = t.substr(0, 2)) && "webkit" !== t.substr(0, 6) || (t = "-" + t), n.removeProperty("--" === r ? t : t.replace(Ko, "-$1").toLowerCase())) : n.removeAttribute(t)
          }
        },
        ki = function(e, t, r, n, o, i) {
          var s = new Oo(e._pt, t, r, 0, 1, i ? ii : oi);
          return e._pt = s, s.b = n, s.e = o, e._props.push(r), s
        },
        Ri = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Ti = {
          grid: 1,
          flex: 1
        },
        Di = function e(t, r, n, o) {
          var i, s, a, l, d = parseFloat(n) || 0,
            u = (n + "").trim().substr((d + "").length) || "px",
            c = Bo.style,
            f = Yo.test(r),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            v = "px" === o,
            y = "%" === o;
          if (o === u || !d || Ri[o] || Ri[u]) return d;
          if ("px" !== u && !v && (d = e(t, r, n, "px")), l = t.getCTM && Pi(t), (y || "%" === u) && (Uo[r] || ~r.indexOf("adius"))) return i = l ? t.getBBox()[f ? "width" : "height"] : t[h], Pr(y ? d / i * m : d / 100 * i);
          if (c[f ? "width" : "height"] = m + (v ? u : o), s = ~r.indexOf("adius") || "em" === o && t.appendChild && !p ? t : t.parentNode, l && (s = (t.ownerSVGElement || {}).parentNode), s && s !== Vo && s.appendChild || (s = Vo.body), (a = s._gsap) && y && a.width && f && a.time === Ln.time && !a.uncache) return Pr(d / a.width * m);
          if (!y || "height" !== r && "width" !== r)(y || "%" === u) && !Ti[bi(s, "display")] && (c.position = bi(t, "position")), s === t && (c.position = "static"), s.appendChild(Bo), i = Bo[h], s.removeChild(Bo), c.position = "absolute";
          else {
            var g = t.style[r];
            t.style[r] = m + o, i = t[h], g ? t.style[r] = g : Si(t, r)
          }
          return f && y && ((a = Cr(s)).time = Ln.time, a.width = s[h]), Pr(v ? i * d / m : i && d ? m / i * d : 0)
        },
        Ei = function(e, t, r, n) {
          var o;
          return qo || xi(), t in Jo && "transform" !== t && ~(t = Jo[t]).indexOf(",") && (t = t.split(",")[0]), Uo[t] && "transform" !== t ? (o = Wi(e, n), o = "transformOrigin" !== t ? o[t] : o.svg ? o.origin : Hi(bi(e, pi)) + " " + o.zOrigin + "px") : (!(o = e.style[t]) || "auto" === o || n || ~(o + "").indexOf("calc(")) && (o = Li[t] && Li[t](e, t, r) || bi(e, t) || Or(e, t) || ("opacity" === t ? 1 : 0)), r && !~(o + "").trim().indexOf(" ") ? Di(e, t, o, r) + r : o
        },
        Ni = function(e, t, r, n) {
          if (!r || "none" === r) {
            var o = wi(t, e, 1),
              i = o && bi(e, o, 1);
            i && i !== r ? (t = o, r = i) : "borderColor" === t && (r = bi(e, "borderTopColor"))
          }
          var s, a, l, d, u, c, f, p, h, m, v, y = new Oo(this._pt, e.style, t, 0, 1, go),
            g = 0,
            b = 0;
          if (y.b = r, y.e = n, r += "", "auto" == (n += "") && (c = e.style[t], e.style[t] = n, n = bi(e, t) || n, c ? e.style[t] = c : Si(e, t)), Mn(s = [r, n]), n = s[1], l = (r = s[0]).match(Jt) || [], (n.match(Jt) || []).length) {
            for (; a = Jt.exec(n);) f = a[0], h = n.substring(g, a.index), u ? u = (u + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (u = 1), f !== (c = l[b++] || "") && (d = parseFloat(c) || 0, v = c.substr((d + "").length), "=" === f.charAt(1) && (f = kr(d, f) + v), p = parseFloat(f), m = f.substr((p + "").length), g = Jt.lastIndex - m.length, m || (m = m || Dt.units[t] || v, g === n.length && (n += m, y.e += m)), v !== m && (d = Di(e, t, c, m) || 0), y._pt = {
              _next: y._pt,
              p: h || 1 === b ? h : ",",
              s: d,
              c: p - d,
              m: u && u < 4 || "zIndex" === t ? Math.round : 0
            });
            y.c = g < n.length ? n.substring(g, n.length) : ""
          } else y.r = "display" === t && "none" === n ? ii : oi;
          return tr.test(n) && (y.e = 0), this._pt = y, y
        },
        Ii = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        zi = function(e) {
          var t = e.split(" "),
            r = t[0],
            n = t[1] || "50%";
          return "top" !== r && "bottom" !== r && "left" !== n && "right" !== n || (e = r, r = n, n = e), t[0] = Ii[r] || r, t[1] = Ii[n] || n, t.join(" ")
        },
        Mi = function(e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var r, n, o, i = t.t,
              s = i.style,
              a = t.u,
              l = i._gsap;
            if ("all" === a || !0 === a) s.cssText = "", n = 1;
            else
              for (o = (a = a.split(",")).length; --o > -1;) r = a[o], Uo[r] && (n = 1, r = "transformOrigin" === r ? pi : fi), Si(i, r);
            n && (Si(i, fi), l && (l.svg && i.removeAttribute("transform"), Wi(i, 1), l.uncache = 1, mi(s)))
          }
        },
        Li = {
          clearProps: function(e, t, r, n, o) {
            if ("isFromStart" !== o.data) {
              var i = e._pt = new Oo(e._pt, t, r, 0, 0, Mi);
              return i.u = n, i.pr = -10, i.tween = o, e._props.push(r), 1
            }
          }
        },
        Ai = [1, 0, 0, 1, 0, 0],
        Vi = {},
        Fi = function(e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        },
        qi = function(e) {
          var t = bi(e, fi);
          return Fi(t) ? Ai : t.substr(7).match(Qt).map(Pr)
        },
        Bi = function(e, t) {
          var r, n, o, i, s = e._gsap || Cr(e),
            a = e.style,
            l = qi(e);
          return s.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(o = e.transform.baseVal.consolidate().matrix).a, o.b, o.c, o.d, o.e, o.f]).join(",") ? Ai : l : (l !== Ai || e.offsetParent || e === Fo || s.svg || (o = a.display, a.display = "block", (r = e.parentNode) && e.offsetParent || (i = 1, n = e.nextElementSibling, Fo.appendChild(e)), l = qi(e), o ? a.display = o : Si(e, "display"), i && (n ? r.insertBefore(e, n) : r ? r.appendChild(e) : Fo.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        Xi = function(e, t, r, n, o, i) {
          var s, a, l, d = e._gsap,
            u = o || Bi(e, !0),
            c = d.xOrigin || 0,
            f = d.yOrigin || 0,
            p = d.xOffset || 0,
            h = d.yOffset || 0,
            m = u[0],
            v = u[1],
            y = u[2],
            g = u[3],
            b = u[4],
            _ = u[5],
            w = t.split(" "),
            x = parseFloat(w[0]) || 0,
            C = parseFloat(w[1]) || 0;
          r ? u !== Ai && (a = m * g - v * y) && (l = x * (-v / a) + C * (m / a) - (m * _ - v * b) / a, x = x * (g / a) + C * (-y / a) + (y * _ - g * b) / a, C = l) : (x = (s = ji(e)).x + (~w[0].indexOf("%") ? x / 100 * s.width : x), C = s.y + (~(w[1] || w[0]).indexOf("%") ? C / 100 * s.height : C)), n || !1 !== n && d.smooth ? (b = x - c, _ = C - f, d.xOffset = p + (b * m + _ * y) - b, d.yOffset = h + (b * v + _ * g) - _) : d.xOffset = d.yOffset = 0, d.xOrigin = x, d.yOrigin = C, d.smooth = !!n, d.origin = t, d.originIsAbsolute = !!r, e.style[pi] = "0px 0px", i && (ki(i, d, "xOrigin", c, x), ki(i, d, "yOrigin", f, C), ki(i, d, "xOffset", p, d.xOffset), ki(i, d, "yOffset", h, d.yOffset)), e.setAttribute("data-svg-origin", x + " " + C)
        },
        Wi = function(e, t) {
          var r = e._gsap || new Kn(e);
          if ("x" in r && !t && !r.uncache) return r;
          var n, o, i, s, a, l, d, u, c, f, p, h, m, v, y, g, b, _, w, x, C, O, j, P, S, k, R, T, D, E, N, I, z = e.style,
            M = r.scaleX < 0,
            L = "px",
            A = "deg",
            V = getComputedStyle(e),
            F = bi(e, pi) || "0";
          return n = o = i = l = d = u = c = f = p = 0, s = a = 1, r.svg = !(!e.getCTM || !Pi(e)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (z[fi] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[fi] ? V[fi] : "")), z.scale = z.rotate = z.translate = "none"), v = Bi(e, r.svg), r.svg && (r.uncache ? (S = e.getBBox(), F = r.xOrigin - S.x + "px " + (r.yOrigin - S.y) + "px", P = "") : P = !t && e.getAttribute("data-svg-origin"), Xi(e, P || F, !!P || r.originIsAbsolute, !1 !== r.smooth, v)), h = r.xOrigin || 0, m = r.yOrigin || 0, v !== Ai && (_ = v[0], w = v[1], x = v[2], C = v[3], n = O = v[4], o = j = v[5], 6 === v.length ? (s = Math.sqrt(_ * _ + w * w), a = Math.sqrt(C * C + x * x), l = _ || w ? $o(w, _) * Go : 0, (c = x || C ? $o(x, C) * Go + l : 0) && (a *= Math.abs(Math.cos(c * Zo))), r.svg && (n -= h - (h * _ + m * x), o -= m - (h * w + m * C))) : (I = v[6], E = v[7], R = v[8], T = v[9], D = v[10], N = v[11], n = v[12], o = v[13], i = v[14], d = (y = $o(I, D)) * Go, y && (P = O * (g = Math.cos(-y)) + R * (b = Math.sin(-y)), S = j * g + T * b, k = I * g + D * b, R = O * -b + R * g, T = j * -b + T * g, D = I * -b + D * g, N = E * -b + N * g, O = P, j = S, I = k), u = (y = $o(-x, D)) * Go, y && (g = Math.cos(-y), N = C * (b = Math.sin(-y)) + N * g, _ = P = _ * g - R * b, w = S = w * g - T * b, x = k = x * g - D * b), l = (y = $o(w, _)) * Go, y && (P = _ * (g = Math.cos(y)) + w * (b = Math.sin(y)), S = O * g + j * b, w = w * g - _ * b, j = j * g - O * b, _ = P, O = S), d && Math.abs(d) + Math.abs(l) > 359.9 && (d = l = 0, u = 180 - u), s = Pr(Math.sqrt(_ * _ + w * w + x * x)), a = Pr(Math.sqrt(j * j + I * I)), y = $o(O, j), c = Math.abs(y) > 2e-4 ? y * Go : 0, p = N ? 1 / (N < 0 ? -N : N) : 0), r.svg && (P = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Fi(bi(e, fi)), P && e.setAttribute("transform", P))), Math.abs(c) > 90 && Math.abs(c) < 270 && (M ? (s *= -1, c += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), t = t || r.uncache, r.x = n - ((r.xPercent = n && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + L, r.y = o - ((r.yPercent = o && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-o) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + L, r.z = i + L, r.scaleX = Pr(s), r.scaleY = Pr(a), r.rotation = Pr(l) + A, r.rotationX = Pr(d) + A, r.rotationY = Pr(u) + A, r.skewX = c + A, r.skewY = f + A, r.transformPerspective = p + L, (r.zOrigin = parseFloat(F.split(" ")[2]) || !t && r.zOrigin || 0) && (z[pi] = Hi(F)), r.xOffset = r.yOffset = 0, r.force3D = Dt.force3D, r.renderTransform = r.svg ? Qi : Ho ? Yi : Gi, r.uncache = 0, r
        },
        Hi = function(e) {
          return (e = e.split(" "))[0] + " " + e[1]
        },
        Ui = function(e, t, r) {
          var n = un(t);
          return Pr(parseFloat(t) + parseFloat(Di(e, "x", r + "px", n))) + n
        },
        Gi = function(e, t) {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Yi(e, t)
        },
        Zi = "0deg",
        $i = "0px",
        Ki = ") ",
        Yi = function(e, t) {
          var r = t || this,
            n = r.xPercent,
            o = r.yPercent,
            i = r.x,
            s = r.y,
            a = r.z,
            l = r.rotation,
            d = r.rotationY,
            u = r.rotationX,
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
          if (g && (u !== Zi || d !== Zi)) {
            var w, x = parseFloat(d) * Zo,
              C = Math.sin(x),
              O = Math.cos(x);
            x = parseFloat(u) * Zo, w = Math.cos(x), i = Ui(y, i, C * w * -g), s = Ui(y, s, -Math.sin(x) * -g), a = Ui(y, a, O * w * -g + g)
          }
          m !== $i && (b += "perspective(" + m + Ki), (n || o) && (b += "translate(" + n + "%, " + o + "%) "), (_ || i !== $i || s !== $i || a !== $i) && (b += a !== $i || _ ? "translate3d(" + i + ", " + s + ", " + a + ") " : "translate(" + i + ", " + s + Ki), l !== Zi && (b += "rotate(" + l + Ki), d !== Zi && (b += "rotateY(" + d + Ki), u !== Zi && (b += "rotateX(" + u + Ki), c === Zi && f === Zi || (b += "skew(" + c + ", " + f + Ki), 1 === p && 1 === h || (b += "scale(" + p + ", " + h + Ki), y.style[fi] = b || "translate(0, 0)"
        },
        Qi = function(e, t) {
          var r, n, o, i, s, a = t || this,
            l = a.xPercent,
            d = a.yPercent,
            u = a.x,
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
            C = parseFloat(u),
            O = parseFloat(c);
          f = parseFloat(f), p = parseFloat(p), (h = parseFloat(h)) && (p += h = parseFloat(h), f += h), f || p ? (f *= Zo, p *= Zo, r = Math.cos(f) * m, n = Math.sin(f) * m, o = Math.sin(f - p) * -v, i = Math.cos(f - p) * v, p && (h *= Zo, s = Math.tan(p - h), o *= s = Math.sqrt(1 + s * s), i *= s, h && (s = Math.tan(h), r *= s = Math.sqrt(1 + s * s), n *= s)), r = Pr(r), n = Pr(n), o = Pr(o), i = Pr(i)) : (r = m, i = v, n = o = 0), (C && !~(u + "").indexOf("px") || O && !~(c + "").indexOf("px")) && (C = Di(y, "x", u, "px"), O = Di(y, "y", c, "px")), (g || b || _ || w) && (C = Pr(C + g - (g * r + b * o) + _), O = Pr(O + b - (g * n + b * i) + w)), (l || d) && (s = y.getBBox(), C = Pr(C + l / 100 * s.width), O = Pr(O + d / 100 * s.height)), s = "matrix(" + r + "," + n + "," + o + "," + i + "," + C + "," + O + ")", y.setAttribute("transform", s), x && (y.style[fi] = s)
        },
        Ji = function(e, t, r, n, o) {
          var i, s, a = 360,
            l = qt(o),
            d = parseFloat(o) * (l && ~o.indexOf("rad") ? Go : 1) - n,
            u = n + d + "deg";
          return l && ("short" === (i = o.split("_")[1]) && (d %= a) !== d % 180 && (d += d < 0 ? a : -360), "cw" === i && d < 0 ? d = (d + 36e9) % a - ~~(d / a) * a : "ccw" === i && d > 0 && (d = (d - 36e9) % a - ~~(d / a) * a)), e._pt = s = new Oo(e._pt, t, r, n, d, ti), s.e = u, s.u = "deg", e._props.push(r), s
        },
        es = function(e, t) {
          for (var r in t) e[r] = t[r];
          return e
        },
        ts = function(e, t, r) {
          var n, o, i, s, a, l, d, u = es({}, r._gsap),
            c = r.style;
          for (o in u.svg ? (i = r.getAttribute("transform"), r.setAttribute("transform", ""), c[fi] = t, n = Wi(r, 1), Si(r, fi), r.setAttribute("transform", i)) : (i = getComputedStyle(r)[fi], c[fi] = t, n = Wi(r, 1), c[fi] = i), Uo)(i = u[o]) !== (s = n[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (a = un(i) !== (d = un(s)) ? Di(r, o, i, d) : parseFloat(i), l = parseFloat(s), e._pt = new Oo(e._pt, n, o, a, l - a, ei), e._pt.u = d || 0, e._props.push(o));
          es(n, u)
        };
      jr("padding,margin,Width,Radius", function(e, t) {
        var r = "Top",
          n = "Right",
          o = "Bottom",
          i = "Left",
          s = (t < 3 ? [r, n, o, i] : [r + i, r + n, o + n, o + i]).map(function(r) {
            return t < 2 ? e + r : "border" + r + e
          });
        Li[t > 1 ? "border" + e : e] = function(e, t, r, n, o) {
          var i, a;
          if (arguments.length < 4) return i = s.map(function(t) {
            return Ei(e, t, r)
          }), 5 === (a = i.join(" ")).split(i[0]).length ? i[0] : a;
          i = (n + "").split(" "), a = {}, s.forEach(function(e, t) {
            return a[e] = i[t] = i[t] || i[(t - 1) / 2 | 0]
          }), e.init(t, a, o)
        }
      });
      var rs, ns, os = {
        name: "css",
        register: xi,
        targetTest: function(e) {
          return e.style && e.nodeType
        },
        init: function(e, t, r, n, o) {
          var i, s, a, l, d, u, c, f, p, h, m, v, y, g, b, _, w = this._props,
            x = e.style,
            C = r.vars.startAt;
          for (c in qo || xi(), this.styles = this.styles || yi(e), _ = this.styles.props, this.tween = r, t)
            if ("autoRound" !== c && (s = t[c], !yr[c] || !no(c, t, r, n, e, o)))
              if (d = typeof s, u = Li[c], "function" === d && (d = typeof(s = s.call(r, n, e, o))), "string" === d && ~s.indexOf("random(") && (s = wn(s)), u) u(this, e, c, s, r) && (b = 1);
              else if ("--" === c.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(c) + "").trim(), s += "", In.lastIndex = 0, In.test(i) || (f = un(i), p = un(s)), p ? f !== p && (i = Di(e, c, i, p) + p) : f && (s += f), this.add(x, "setProperty", i, s, n, o, 0, 0, c), w.push(c), _.push(c, 0, x[c]);
          else if ("undefined" !== d) {
            if (C && c in C ? (i = "function" == typeof C[c] ? C[c].call(r, n, e, o) : C[c], qt(i) && ~i.indexOf("random(") && (i = wn(i)), un(i + "") || "auto" === i || (i += Dt.units[c] || un(Ei(e, c)) || ""), "=" === (i + "").charAt(1) && (i = Ei(e, c))) : i = Ei(e, c), l = parseFloat(i), (h = "string" === d && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), c in Jo && ("autoAlpha" === c && (1 === l && "hidden" === Ei(e, "visibility") && a && (l = 0), _.push("visibility", 0, x.visibility), ki(this, x, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== c && "transform" !== c && ~(c = Jo[c]).indexOf(",") && (c = c.split(",")[0])), m = c in Uo)
              if (this.styles.save(c), v || ((y = e._gsap).renderTransform && !t.parseTransform || Wi(e, t.parseTransform), g = !1 !== t.smoothOrigin && y.smooth, (v = this._pt = new Oo(this._pt, x, fi, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === c) this._pt = new Oo(this._pt, y, "scaleY", y.scaleY, (h ? kr(y.scaleY, h + a) : a) - y.scaleY || 0, ei), this._pt.u = 0, w.push("scaleY", c), c += "X";
              else {
                if ("transformOrigin" === c) {
                  _.push(pi, 0, x[pi]), s = zi(s), y.svg ? Xi(e, s, 0, g, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== y.zOrigin && ki(this, y, "zOrigin", y.zOrigin, p), ki(this, x, c, Hi(i), Hi(s)));
                  continue
                }
                if ("svgOrigin" === c) {
                  Xi(e, s, 1, g, 0, this);
                  continue
                }
                if (c in Vi) {
                  Ji(this, y, c, l, h ? kr(l, h + s) : s);
                  continue
                }
                if ("smoothOrigin" === c) {
                  ki(this, y, "smooth", y.smooth, s);
                  continue
                }
                if ("force3D" === c) {
                  y[c] = s;
                  continue
                }
                if ("transform" === c) {
                  ts(this, s, e);
                  continue
                }
              }
            else c in x || (c = wi(c) || c);
            if (m || (a || 0 === a) && (l || 0 === l) && !Qo.test(s) && c in x) a || (a = 0), (f = (i + "").substr((l + "").length)) !== (p = un(s) || (c in Dt.units ? Dt.units[c] : f)) && (l = Di(e, c, i, p)), this._pt = new Oo(this._pt, m ? y : x, c, l, (h ? kr(l, h + a) : a) - l, m || "px" !== p && "zIndex" !== c || !1 === t.autoRound ? ei : ni), this._pt.u = p || 0, f !== p && "%" !== p && (this._pt.b = i, this._pt.r = ri);
            else if (c in x) Ni.call(this, e, c, i, h ? h + s : s);
            else if (c in e) this.add(e, c, i || e[c], h ? h + s : s, n, o);
            else if ("parseTransform" !== c) {
              ar(c, s);
              continue
            }
            m || (c in x ? _.push(c, 0, x[c]) : _.push(c, 1, i || e[c])), w.push(c)
          }
          b && Co(this)
        },
        render: function(e, t) {
          if (t.tween._time || !Wo())
            for (var r = t._pt; r;) r.r(e, r.d), r = r._next;
          else t.styles.revert()
        },
        get: Ei,
        aliases: Jo,
        getSetter: function(e, t, r) {
          var n = Jo[t];
          return n && n.indexOf(",") < 0 && (t = n), t in Uo && t !== pi && (e._gsap.x || Ei(e, "x")) ? r && Xo === r ? "scale" === t ? di : li : (Xo = r || {}) && ("scale" === t ? ui : ci) : e.style && !Wt(e.style[t]) ? si : ~t.indexOf("-") ? ai : mo(e, t)
        },
        core: {
          _removeProperty: Si,
          _getMatrix: Bi
        }
      };
      Lo.utils.checkPrefix = wi, Lo.core.getStyleSaver = yi, ns = jr("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (rs = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
        Uo[e] = 1
      }), jr(rs, function(e) {
        Dt.units[e] = "deg", Vi[e] = 1
      }), Jo[ns[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + rs, jr("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
        var t = e.split(":");
        Jo[t[1]] = ns[t[0]]
      }), jr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
        Dt.units[e] = "px"
      }), Lo.registerPlugin(os);
      var is = Lo.registerPlugin(os) || Lo;
      is.core.Tween;
      let ss = "undefined" != typeof document ? B.useLayoutEffect : B.useEffect,
        as = e => e && !Array.isArray(e) && "object" == typeof e,
        ls = [],
        ds = {},
        us = is;
      const cs = (e, t = ls) => {
        let r = ds;
        as(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : ls) : as(t) && (r = t, t = "dependencies" in r ? r.dependencies : ls), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, i = (0, B.useRef)(!1), s = (0, B.useRef)(us.context(() => {}, n)), a = (0, B.useRef)(e => s.current.add(null, e)), l = t && t.length && !o;
        return l && ss(() => (i.current = !0, () => s.current.revert()), ls), ss(() => {
          if (e && s.current.add(e, n), !l || !i.current) return () => s.current.revert()
        }, t), {
          context: s.current,
          contextSafe: a.current
        }
      };
      cs.register = e => {
        us = e
      }, cs.headless = !0;
      const fs = {
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

      function ps(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function hs(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -ps(t - e, r - t, n) + t : e > r ? +ps(e - r, r - t, n) + r : e
      }

      function ms(e, t, r) {
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

      function vs(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ys(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vs(Object(r), !0).forEach(function(t) {
            ms(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vs(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const gs = {
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

      function bs(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const _s = ["enter", "leave"];
      const ws = ["gotpointercapture", "lostpointercapture"];

      function xs(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = ws.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Cs(e) {
        return "touches" in e
      }

      function Os(e) {
        return Cs(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function js(e) {
        return Cs(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Ps(e, t) {
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

      function Ss(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Ps(r, n)
      }

      function ks(e) {
        const t = js(e);
        return Cs(e) ? t.identifier : t.pointerId
      }

      function Rs(e) {
        const t = js(e);
        return [t.clientX, t.clientY]
      }

      function Ts(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Ds(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Es() {}

      function Ns(...e) {
        return 0 === e.length ? Es : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Is(e, t) {
        return Object.assign({}, t, e || {})
      }
      class zs {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Ds(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            fs.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, s] = t._movement, [a, l] = r.threshold, {
            _step: d,
            values: u
          } = t;
          if (r.hasCustomTransform ? (!1 === d[0] && (d[0] = Math.abs(i) >= a && u[0]), !1 === d[1] && (d[1] = Math.abs(s) >= l && u[1])) : (!1 === d[0] && (d[0] = Math.abs(i) >= a && Math.sign(i) * a), !1 === d[1] && (d[1] = Math.abs(s) >= l && Math.sign(s) * l)), t.intentional = !1 !== d[0] || !1 !== d[1], !t.intentional) return;
          const c = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = u;
            c[0] = !1 !== d[0] ? e - d[0] : 0, c[1] = !1 !== d[1] ? t - d[1] : 0
          } else c[0] = !1 !== d[0] ? i - d[0] : 0, c[1] = !1 !== d[1] ? s - d[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(c);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Ds(r.bounds, t)), this.setup && this.setup()), t.movement = c, this.computeOffset()));
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
              return [hs(t, i, s, n), hs(r, a, l, o)]
            }(t._bounds, t.offset, _), t.delta = fs.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = fs.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            fs.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(ys(ys(ys({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Ms extends zs {
        constructor(...e) {
          super(...e), ms(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = fs.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = fs.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Os(e)] : r.axisThreshold;
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
      const Ls = e => e,
        As = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => ys(ys({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return fs.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? fs.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Ls
          },
          threshold: e => fs.toVector(e, 0)
        },
        Vs = ys(ys({}, As), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Vs.bounds(e(t));
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
        Fs = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        qs = "undefined" != typeof window && window.document && window.document.createElement;

      function Bs() {
        return qs && "ontouchstart" in window
      }
      const Xs = {
          isBrowser: qs,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Bs(),
          touchscreen: Bs() || qs && window.navigator.maxTouchPoints > 1,
          pointer: qs && "onpointerdown" in window,
          pointerLock: qs && "exitPointerLock" in window.document
        },
        Ws = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Hs = ys(ys({}, Vs), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Xs.pointerLock, Xs.touch && r ? "touch" : this.pointerLock ? "mouse" : Xs.pointer && !o ? "pointer" : Xs.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Xs.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const i = fs.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(fs.toVector(e)),
              distance: this.transform(fs.toVector(t)),
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
          axisThreshold: e => e ? ys(ys({}, Ws), e) : Ws,
          keyboardDisplacement: (e = 10) => e
        });

      function Us(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, s] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && s < 0 || r > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Gs = ys(ys({}, As), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Xs.touch && Xs.gesture) return "gesture";
            if (Xs.touch && n) return "touch";
            if (Xs.touchscreen) {
              if (Xs.pointer) return "pointer";
              if (Xs.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = Is(Ds(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = Is(Ds(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, fs.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Zs = ys(ys({}, Vs), {}, {
          mouseOnly: (e = !0) => e
        }),
        $s = Vs,
        Ks = Vs,
        Ys = ys(ys({}, Vs), {}, {
          mouseOnly: (e = !0) => e
        }),
        Qs = new Map,
        Js = new Map;

      function ea(e) {
        Qs.set(e.key, e.engine), Js.set(e.key, e.resolver)
      }
      const ta = {
          key: "drag",
          engine: class extends Ms {
            constructor(...e) {
              super(...e), ms(this, "ingKey", "dragging")
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
                e._bounds = Vs.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = ks(e), r._pointerActive = !0, this.computeValues(Rs(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Os(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = ks(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Rs(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = fs.sub(o, t._values), this.computeValues(o)), fs.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = ks(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= r.tapsThreshold && i <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, i] = t._movement, [s, a] = r.swipe.velocity, [l, d] = r.swipe.distance, u = r.swipe.duration;
                if (t.elapsedTime < u) {
                  const r = Math.abs(e / t.timeDelta),
                    u = Math.abs(n / t.timeDelta);
                  r > s && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > a && Math.abs(i) > d && (t.swipe[1] = Math.sign(n))
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
              const t = Fs[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, fs.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Fs && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Hs
        },
        ra = {
          key: "hover",
          engine: class extends Ms {
            constructor(...e) {
              super(...e), ms(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Rs(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Rs(e);
              t._movement = t._delta = fs.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Ys
        },
        na = {
          key: "move",
          engine: class extends Ms {
            constructor(...e) {
              super(...e), ms(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Rs(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Rs(e),
                r = this.state;
              r._delta = fs.sub(t, r._values), fs.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Zs
        },
        oa = {
          key: "pinch",
          engine: class extends zs {
            constructor(...e) {
              super(...e), ms(this, "ingKey", "pinching"), ms(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? fs.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Ss(e, t._touchIds);
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
              const o = Ps(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Ss(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Ps(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = fs.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Ts(e)[1] / 100 * t.offset[0], 0], fs.addTo(t._movement, t._delta), Us(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Gs
        },
        ia = {
          key: "scroll",
          engine: class extends Ms {
            constructor(...e) {
              super(...e), ms(this, "ingKey", "scrolling")
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
              t._delta = fs.sub(r, t._values), fs.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: $s
        },
        sa = {
          key: "wheel",
          engine: class extends Ms {
            constructor(...e) {
              super(...e), ms(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Ts(e), fs.addTo(t._movement, t._delta), Us(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Ks
        };
      const aa = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Xs.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        la = ["target", "eventOptions", "window", "enabled", "transform"];

      function da(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = da(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class ua {
        constructor(e, t) {
          ms(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const r = gs[e];
              return e + (r && r[t] || t)
            }(t, r),
            a = ys(ys({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class ca {
        constructor() {
          ms(this, "_timeouts", new Map)
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
      class fa {
        constructor(e) {
          var t, r;
          ms(this, "gestures", new Set), ms(this, "_targetEventStore", new ua(this)), ms(this, "gestureEventStores", {}), ms(this, "gestureTimeoutStores", {}), ms(this, "handlers", {}), ms(this, "config", {}), ms(this, "pointerIds", new Set), ms(this, "touchIds", new Set), ms(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && pa(t, "drag"), r.wheel && pa(t, "wheel"), r.scroll && pa(t, "scroll"), r.move && pa(t, "move"), r.pinch && pa(t, "pinch"), r.hover && pa(t, "hover")
        }
        setEventIds(e) {
          return Cs(e) ? (this.touchIds = new Set(function(e) {
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
              d = function(e, t) {
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
              }(n, la);
            if (r.shared = da({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, aa), t) {
              const e = Js.get(t);
              r[t] = da(ys({
                shared: r.shared
              }, d), e)
            } else
              for (const e in d) {
                const t = Js.get(e);
                t && (r[e] = da(ys({
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
                  i = ha(r, o.eventOptions, !!n);
                o.enabled && new(Qs.get(t))(this, e, t).bind(i)
              }
              const o = ha(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](ys(ys({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = Ns(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: i
              } = xs(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function pa(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new ua(e, t), e.gestureTimeoutStores[t] = new ca
      }
      const ha = (e, t, r) => (n, o, i, s = {}, a = !1) => {
          var l, d;
          const u = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            c = null !== (d = s.passive) && void 0 !== d ? d : t.passive;
          let f = a ? n : function(e, t = "", r = !1) {
            const n = gs[e],
              o = n && n[t] || t;
            return "on" + bs(e) + bs(o) + (function(e = !1, t) {
              return e && !_s.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && c && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        ma = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function va(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!Qs.has(n)) return;
        const s = r + "Start",
          a = r + "End";
        o[n] = e => {
          let n;
          return e.first && s in t && t[s](e), r in t && (n = t[r](e)), e.last && a in t && t[a](e), n
        }, i[n] = i[n] || {}
      }

      function ya(e, t = {}, r, n) {
        const o = B.useMemo(() => new fa(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), B.useEffect(o.effect.bind(o)), B.useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function ga(e, t) {
        const r = ([ta, oa, ia, sa, na, ra].forEach(ea), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) ma.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return va(o, r, "onDrag", "drag", i, t), va(o, r, "onWheel", "wheel", i, t), va(o, r, "onScroll", "scroll", i, t), va(o, r, "onPinch", "pinch", i, t), va(o, r, "onMove", "move", i, t), va(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return ya(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const ba = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), _a = ([e, t]) => ({
        x: e,
        y: t
      }), wa = (e, t) => (e.x = t.x, e.y = t.y, e), xa = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Ca = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Oa = (e, t, r) => Math.min(Math.max(e, t), r);

      function ja() {
        return ja = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, ja.apply(null, arguments)
      }
      var Pa = ["shift", "alt", "meta", "mod", "ctrl"],
        Sa = {
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

      function ka(e) {
        return (e && Sa[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Ra(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Ta(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return ka(e)
        });
        return ja({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Pa.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && Na([ka(e.key), ka(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && Ia([ka(e.key), ka(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Da.clear()
      });
      var Da = new Set;

      function Ea(e) {
        return Array.isArray(e)
      }

      function Na(e) {
        var t = Array.isArray(e) ? e : [e];
        Da.has("meta") && Da.forEach(function(e) {
          return ! function(e) {
            return Pa.includes(e)
          }(e) && Da.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Da.add(e.toLowerCase())
        })
      }

      function Ia(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Da.clear() : t.forEach(function(e) {
          return Da.delete(e.toLowerCase())
        })
      }

      function za(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Ea(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Ma = (0, B.createContext)(void 0);

      function La(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, j.jsx)(Ma.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Aa(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Aa(e[n], t[n])
        }, !0) : e === t
      }
      var Va = (0, B.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Fa = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, B.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            s = o[1],
            a = (0, B.useState)([]),
            l = a[0],
            d = a[1],
            u = (0, B.useCallback)(function(e) {
              s(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            c = (0, B.useCallback)(function(e) {
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
              d(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, B.useCallback)(function(e) {
              d(function(t) {
                return t.filter(function(t) {
                  return !Aa(t, e)
                })
              })
            }, []);
          return (0, j.jsx)(Va.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: u,
              disableScope: c,
              toggleScope: f
            },
            children: (0, j.jsx)(La, {
              addHotkey: p,
              removeHotkey: h,
              children: n
            })
          })
        },
        qa = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Ba = "undefined" != typeof window ? B.useLayoutEffect : B.useEffect;

      function Xa(e, t, r, n) {
        var o = (0, B.useState)(null),
          i = o[0],
          s = o[1],
          a = (0, B.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          d = Ea(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          c = (0, B.useCallback)(t, null != u ? u : []),
          f = (0, B.useRef)(c);
        f.current = u ? c : t;
        var p = function(e) {
            var t = (0, B.useRef)(void 0);
            return Aa(t.current, e) || (t.current = e), t.current
          }(l),
          h = (0, B.useContext)(Va).enabledScopes,
          m = (0, B.useContext)(Ma);
        return Ba(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !za(e, ["input", "textarea", "select"]) || za(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void qa(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Ra(d, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = Ta(r, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, i = t.alt,
                          s = t.meta,
                          a = t.mod,
                          l = t.shift,
                          d = t.ctrl,
                          u = t.keys,
                          c = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = ka(f),
                          g = c.toLowerCase();
                        if (!(null != u && u.includes(y) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (a) {
                            if (!h && !p) return !1
                          } else {
                            if (s === !h && "meta" !== g && "os" !== g) return !1;
                            if (d === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (Ea(n = u) ? n : n.split(o)).every(function(e) {
                          return Da.has(e.trim().toLowerCase())
                        })) : !u)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void qa(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (Na(ka(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Ia(ka(e.code)), a.current = !1, null != p && p.keyup && r(e, !0))
              },
              s = i || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Ra(d, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return m.addHotkey(Ta(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Ra(d, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return m.removeHotkey(Ta(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [i, d, p, h]), s
      }

      function Wa(e) {
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

      function Ha(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ua(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ha(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Wa(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ha(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ga(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Za = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $a = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ua(Ua({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) Za(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ga(e.variantClassNames, e => Ga(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ka = $a({
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
        Ya = $a({
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
      is.registerPlugin(cs);
      const Qa = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Ja = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        el = (0, W.Tm)("var(--foundry_1a74xwb0)");
      var tl = r(54422),
        rl = r(57338),
        nl = r(74775);
      const ol = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, i] = (0, B.useState)(null);
          return (0, B.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              i(e.default)
            })
          }, [r]), o ? (0, j.jsx)(tl.A, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        il = {
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
      class sl {
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
          return r ? t : Oa(t, this.max[e], this.min[e])
        }
      }
      class al {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Ca(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.step = this.vFill - this.initial, this.max = this.getMax(), this.min = this.getMin()
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Ca(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Ca(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class ll {
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
      class dl {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", wa(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (wa(this.prevTap, {
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
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
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
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.h / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class ul {
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
          e.src = this.thumbnail.currentSrc ?? "", await ba(e)
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
      class cl {
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
      class fl extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class pl extends ll {
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
          if (!this.dispatch(e, new fl(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class hl {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = _a(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, wa(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = _a(e);
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
            i = wa({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = wa({
            x: 0,
            y: 0
          }, i);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, wa(this.startPan, i)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((a = s).x !== l.x || a.y !== l.y || n || o) && (wa(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class ml {
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
      class vl extends ll {
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
          dragOptions: i
        }) {
          super(), this.width = e, this.height = t, this.opener = new ul({
            slide: this
          }), this.bounds = new sl({
            slide: this
          }), this.dragHandler = new dl({
            options: i,
            slide: this
          }), this.scrollWheel = new cl({
            slide: this
          }), this.zoomHandler = new hl({
            slide: this
          }), this.zoomLevels = new al({
            options: r,
            slide: this
          }), this.tapHandler = new pl({
            options: n,
            slide: this
          }), this.panAreaSize = new ml({
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
          e = Ca(e), r || (e = Oa(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), xa(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), xa(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), wa(this.pan, this.bounds.center)
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
      var yl = r(99878);
      const gl = e => "dark" === e ? yl.xW.dark : yl.xW.light,
        bl = (0, rl.YK)({
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
        }),
        _l = e => e - .02,
        wl = (_l(768), _l(1440), _l(1920), _l(2560), new Map);

      function xl(e, t) {
        if (e === t) return e;
        const r = wl.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = wl.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function Cl(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function Ol(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const n = e[r];
          for (const e in n) {
            const r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Cl(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = xl(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, ae.$)(r, o)
          }
        }
        return t
      }
      var jl;
      r(68309), r(15963), r(54028), r(74143), r(88584), r(73892), r(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(jl || (jl = {})), Symbol.toStringTag;
      var Pl = r(38957);

      function Sl(e) {
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

      function kl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Rl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? kl(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Sl(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Tl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Dl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        El = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Rl(Rl({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) Dl(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tl(e.variantClassNames, e => Tl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nl = El({
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
      const Il = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? Pl.DX : "p",
          a = Ol({
            className: Nl({
              size: n,
              appearance: r
            })
          }, o);
        return (0, j.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var zl = El({
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
        const i = e ? Pl.DX : "p",
          s = Ol({
            className: zl({
              appearance: r
            })
          }, n);
        return (0, j.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...s
        })
      }), (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? Pl.DX : "h1",
          i = Ol({
            className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
          }, r);
        return (0, j.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...i
        })
      });
      var Ml = El({
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
        const i = e ? Pl.DX : `h${t}`,
          s = Ol(n, {
            className: Ml({
              level: t
            })
          });
        return (0, j.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var Ll = El({
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
      }, i) => {
        const s = e ? Pl.DX : "p",
          a = Ol({
            className: Ll({
              size: n,
              appearance: r
            })
          }, o);
        return (0, j.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var Al = El({
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
      const Vl = {
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
        const i = e ? Pl.DX : Vl[r] || "span",
          s = Ol(n, {
            className: Al({
              semantic: r
            })
          });
        return (0, j.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...s
        })
      });
      var Fl = "foundry_bc732x1";
      const ql = (0, B.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Xa(e, e => r?.(e), [r]), (0, j.jsx)(Il, {
        size: "XS",
        className: (0, ae.$)("foundry_bc732x0", {
          [Fl]: t
        }),
        asChild: !0,
        children: (0, j.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Bl = od(),
        Xl = e => ed(e, Bl),
        Wl = od();
      Xl.write = e => ed(e, Wl);
      var Hl = od();
      Xl.onStart = e => ed(e, Hl);
      var Ul = od();
      Xl.onFrame = e => ed(e, Ul);
      var Gl = od();
      Xl.onFinish = e => ed(e, Gl);
      var Zl = [];
      Xl.setTimeout = (e, t) => {
        const r = Xl.now() + t,
          n = () => {
            const e = Zl.findIndex(e => e.cancel == n);
            ~e && Zl.splice(e, 1), Ql -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Zl.splice($l(r), 0, o), Ql += 1, td(), o
      };
      var $l = e => ~(~Zl.findIndex(t => t.time > e) || ~Zl.length);
      Xl.cancel = e => {
        Hl.delete(e), Ul.delete(e), Gl.delete(e), Bl.delete(e), Wl.delete(e)
      }, Xl.sync = e => {
        Jl = !0, Xl.batchedUpdates(e), Jl = !1
      }, Xl.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Xl.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Hl.delete(r), t = null
        }, n
      };
      var Kl = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Xl.use = e => Kl = e, Xl.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Xl.batchedUpdates = e => e(), Xl.catch = console.error, Xl.frameLoop = "always", Xl.advance = () => {
        "demand" !== Xl.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : nd()
      };
      var Yl = -1,
        Ql = 0,
        Jl = !1;

      function ed(e, t) {
        Jl ? (t.delete(e), e(0)) : (t.add(e), td())
      }

      function td() {
        Yl < 0 && (Yl = 0, "demand" !== Xl.frameLoop && Kl(rd))
      }

      function rd() {
        ~Yl && (Kl(rd), Xl.batchedUpdates(nd))
      }

      function nd() {
        const e = Yl;
        Yl = Xl.now();
        const t = $l(Yl);
        t && (id(Zl.splice(0, t), e => e.handler()), Ql -= t), Ql ? (Hl.flush(), Bl.flush(e ? Math.min(64, Yl - e) : 16.667), Ul.flush(), Wl.flush(), Gl.flush()) : Yl = -1
      }

      function od() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Ql += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Ql -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Ql -= t.size, id(t, t => t(r) && e.add(t)), Ql += e.size, t = e)
          }
        }
      }

      function id(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Xl.catch(e)
          }
        })
      }
      var sd = Object.defineProperty,
        ad = {};

      function ld() {}((e, t) => {
        for (var r in t) sd(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(ad, {
        assign: () => xd,
        colors: () => bd,
        createStringInterpolator: () => md,
        skipAnimation: () => _d,
        to: () => vd,
        willAdvance: () => wd
      });
      var dd = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function ud(e, t) {
        if (dd.arr(e)) {
          if (!dd.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var cd = (e, t) => e.forEach(t);

      function fd(e, t, r) {
        if (dd.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var pd = e => dd.und(e) ? [] : dd.arr(e) ? e : [e];

      function hd(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), cd(r, t)
        }
      }
      var md, vd, yd = (e, ...t) => hd(e, e => e(...t)),
        gd = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        bd = null,
        _d = !1,
        wd = ld,
        xd = e => {
          e.to && (vd = e.to), e.now && (Xl.now = e.now), void 0 !== e.colors && (bd = e.colors), null != e.skipAnimation && (_d = e.skipAnimation), e.createStringInterpolator && (md = e.createStringInterpolator), e.requestAnimationFrame && Xl.use(e.requestAnimationFrame), e.batchedUpdates && (Xl.batchedUpdates = e.batchedUpdates), e.willAdvance && (wd = e.willAdvance), e.frameLoop && (Xl.frameLoop = e.frameLoop)
        },
        Cd = new Set,
        Od = [],
        jd = [],
        Pd = 0,
        Sd = {
          get idle() {
            return !Cd.size && !Od.length
          },
          start(e) {
            Pd > e.priority ? (Cd.add(e), Xl.onStart(kd)) : (Rd(e), Xl(Dd))
          },
          advance: Dd,
          sort(e) {
            if (Pd) Xl.onFrame(() => Sd.sort(e));
            else {
              const t = Od.indexOf(e);
              ~t && (Od.splice(t, 1), Td(e))
            }
          },
          clear() {
            Od = [], Cd.clear()
          }
        };

      function kd() {
        Cd.forEach(Rd), Cd.clear(), Xl(Dd)
      }

      function Rd(e) {
        Od.includes(e) || Td(e)
      }

      function Td(e) {
        Od.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(Od), 0, e)
      }

      function Dd(e) {
        const t = jd;
        for (let r = 0; r < Od.length; r++) {
          const n = Od[r];
          Pd = n.priority, n.idle || (wd(n), n.advance(e), n.idle || t.push(n))
        }
        return Pd = 0, (jd = Od).length = 0, (Od = t).length > 0
      }
      var Ed = "[-+]?\\d*\\.?\\d+",
        Nd = Ed + "%";

      function Id(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var zd = new RegExp("rgb" + Id(Ed, Ed, Ed)),
        Md = new RegExp("rgba" + Id(Ed, Ed, Ed, Ed)),
        Ld = new RegExp("hsl" + Id(Ed, Nd, Nd)),
        Ad = new RegExp("hsla" + Id(Ed, Nd, Nd, Ed)),
        Vd = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Fd = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        qd = /^#([0-9a-fA-F]{6})$/,
        Bd = /^#([0-9a-fA-F]{8})$/;

      function Xd(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Wd(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = Xd(o, n, e + 1 / 3),
          s = Xd(o, n, e),
          a = Xd(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function Hd(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Ud(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Gd(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Zd(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function $d(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = qd.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : bd && void 0 !== bd[e] ? bd[e] : (t = zd.exec(e)) ? (Hd(t[1]) << 24 | Hd(t[2]) << 16 | Hd(t[3]) << 8 | 255) >>> 0 : (t = Md.exec(e)) ? (Hd(t[1]) << 24 | Hd(t[2]) << 16 | Hd(t[3]) << 8 | Gd(t[4])) >>> 0 : (t = Vd.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Bd.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Fd.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Ld.exec(e)) ? (255 | Wd(Ud(t[1]), Zd(t[2]), Zd(t[3]))) >>> 0 : (t = Ad.exec(e)) ? (Wd(Ud(t[1]), Zd(t[2]), Zd(t[3])) | Gd(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Kd = (e, t, r) => {
          if (dd.fun(e)) return e;
          if (dd.arr(e)) return Kd({
            range: e,
            output: t,
            extrapolate: r
          });
          if (dd.str(e.output[0])) return md(e);
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
              let d = l ? l(e) : e;
              if (d < t) {
                if ("identity" === s) return d;
                "clamp" === s && (d = t)
              }
              if (d > r) {
                if ("identity" === a) return d;
                "clamp" === a && (d = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? d = -d : r === 1 / 0 ? d -= t : d = (d - t) / (r - t), d = i(d), n === -1 / 0 ? d = -d : o === 1 / 0 ? d += n : d = d * (o - n) + n, d)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, s, a, n.map)
          }
        },
        Yd = 1.70158,
        Qd = 1.525 * Yd,
        Jd = Yd + 1,
        eu = 2 * Math.PI / 3,
        tu = 2 * Math.PI / 4.5,
        ru = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        nu = {
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
          easeInBack: e => Jd * e * e * e - Yd * e * e,
          easeOutBack: e => 1 + Jd * Math.pow(e - 1, 3) + Yd * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Qd) / 2 : (Math.pow(2 * e - 2, 2) * ((Qd + 1) * (2 * e - 2) + Qd) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * eu),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * eu) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * tu) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * tu) / 2 + 1,
          easeInBounce: e => 1 - ru(1 - e),
          easeOutBounce: ru,
          easeInOutBounce: e => e < .5 ? (1 - ru(1 - 2 * e)) / 2 : (1 + ru(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        ou = Symbol.for("FluidValue.get"),
        iu = Symbol.for("FluidValue.observers"),
        su = e => Boolean(e && e[ou]),
        au = e => e && e[ou] ? e[ou]() : e,
        lu = e => e[iu] || null;

      function du(e, t) {
        const r = e[iu];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var uu = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            cu(this, e)
          }
        },
        cu = (e, t) => mu(e, ou, t);

      function fu(e, t) {
        if (e[ou]) {
          let r = e[iu];
          r || mu(e, iu, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function pu(e, t) {
        const r = e[iu];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[iu] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var hu, mu = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        vu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        yu = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        gu = new RegExp(`(${vu.source})(%|[a-z]+)`, "i"),
        bu = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        _u = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        wu = e => {
          const [t, r] = xu(e);
          if (!t || gd()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && _u.test(r) ? wu(r) : r || e
        },
        xu = e => {
          const t = _u.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Cu = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        Ou = e => {
          hu || (hu = bd ? new RegExp(`(${Object.keys(bd).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => au(e).replace(_u, wu).replace(yu, $d).replace(hu, $d)),
            r = t.map(e => e.match(vu).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Kd({
              ...e,
              output: t
            }));
          return e => {
            const r = !gu.test(t[0]) && t.find(e => gu.test(e))?.replace(vu, "");
            let n = 0;
            return t[0].replace(vu, () => `${o[n++](e)}${r||""}`).replace(bu, Cu)
          }
        },
        ju = "react-spring: ",
        Pu = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${ju}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Su = Pu(console.warn),
        ku = Pu(console.warn);

      function Ru(e) {
        return dd.str(e) && ("#" == e[0] || /\d/.test(e) || !gd() && _u.test(e) || e in (bd || {}))
      }
      var Tu = gd() ? B.useEffect : B.useLayoutEffect;

      function Du() {
        const e = (0, B.useState)()[1],
          t = (() => {
            const e = (0, B.useRef)(!1);
            return Tu(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Eu = e => (0, B.useEffect)(e, Nu),
        Nu = [],
        Iu = Symbol.for("Animated:node"),
        zu = e => e && e[Iu],
        Mu = (e, t) => {
          return r = e, n = Iu, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Lu = e => e && e[Iu] && e[Iu].getPayload(),
        Au = class {
          constructor() {
            Mu(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Vu = class e extends Au {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, dd.num(this._value) && (this.lastPosition = this._value)
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
            return dd.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, dd.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Fu = class e extends Vu {
          constructor(e) {
            super(0), this._string = null, this._toString = Kd({
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
            if (dd.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Kd({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        qu = {
          dependencies: null
        },
        Bu = class extends Au {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return fd(this.source, (r, n) => {
              var o;
              (o = r) && o[Iu] === o ? t[n] = r.getValue(e) : su(r) ? t[n] = au(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && cd(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return fd(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            qu.dependencies && su(e) && qu.dependencies.add(e);
            const t = Lu(e);
            t && cd(t, e => this.add(e))
          }
        },
        Xu = class e extends Bu {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Wu)), !0)
          }
        };

      function Wu(e) {
        return (Ru(e) ? Fu : Vu).create(e)
      }

      function Hu(e) {
        const t = zu(e);
        return t ? t.constructor : dd.arr(e) ? Xu : Ru(e) ? Fu : Vu
      }
      var Uu = (e, t) => {
          const r = !dd.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, B.forwardRef)((n, o) => {
            const i = (0, B.useRef)(null),
              s = r && (0, B.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (dd.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return qu.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Bu(e), qu.dependencies = null, [e, r]
              }(n, t),
              d = Du(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && d()
              },
              c = new Gu(u, l),
              f = (0, B.useRef)(void 0);
            Tu(() => (f.current = c, cd(l, e => fu(e, c)), () => {
              f.current && (cd(f.current.deps, e => pu(e, f.current)), Xl.cancel(f.current.update))
            })), (0, B.useEffect)(u, []), Eu(() => () => {
              const e = f.current;
              cd(e.deps, t => pu(t, e))
            });
            const p = t.getComponentProps(a.getValue());
            return B.createElement(e, {
              ...p,
              ref: s
            })
          })
        },
        Gu = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Xl.write(this.update)
          }
        },
        Zu = Symbol.for("AnimatedComponent"),
        $u = e => dd.str(e) ? e : e && dd.str(e.displayName) ? e.displayName : dd.fun(e) && e.name || null;

      function Ku(e, ...t) {
        return dd.fun(e) ? e(...t) : e
      }
      var Yu = (e, t) => !0 === e || !!(t && e && (dd.fun(e) ? e(t) : pd(e).includes(t))),
        Qu = (e, t) => dd.obj(e) ? t && e[t] : e,
        Ju = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        ec = e => e,
        tc = (e, t = ec) => {
          let r = rc;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            dd.und(r) || (n[o] = r)
          }
          return n
        },
        rc = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        nc = {
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

      function oc(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (fd(e, (e, n) => {
              nc[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return fd(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function ic(e) {
        return e = au(e), dd.arr(e) ? e.map(ic) : Ru(e) ? ad.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function sc(e) {
        return dd.fun(e) || dd.arr(e) && dd.obj(e[0])
      }

      function ac(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var lc = {
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
        dc = {
          ...lc.default,
          mass: 1,
          damping: 1,
          easing: nu.linear,
          clamp: !1
        },
        uc = class {
          constructor() {
            this.velocity = 0, Object.assign(this, dc)
          }
        };

      function cc(e, t) {
        if (dd.und(t.decay)) {
          const r = !dd.und(t.tension) || !dd.und(t.friction);
          !r && dd.und(t.frequency) && dd.und(t.damping) && dd.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var fc = [],
        pc = class {
          constructor() {
            this.changed = !1, this.values = fc, this.toValues = null, this.fromValues = fc, this.config = new uc, this.immediate = !1
          }
        };

      function hc(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, d, u = Yu(r.cancel ?? n?.cancel, t);
          if (u) p();
          else {
            dd.und(r.pause) || (o.paused = Yu(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Yu(e, t)), l = Ku(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function c() {
            o.resumeQueue.add(f), o.timeouts.delete(d), d.cancel(), l = d.time - Xl.now()
          }

          function f() {
            l > 0 && !ad.skipAnimation ? (o.delayed = !0, d = Xl.setTimeout(p, l), o.pauseQueue.add(c), o.timeouts.add(d)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(c), o.timeouts.delete(d), e <= (o.cancelId || 0) && (u = !0);
            try {
              i.start({
                ...r,
                callId: e,
                cancel: u
              }, s)
            } catch (e) {
              a(e)
            }
          }
        })
      }
      var mc = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? gc(e.get()) : t.every(e => e.noop) ? vc(e.get()) : yc(e.get(), t.every(e => e.finished)),
        vc = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        yc = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        gc = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function bc(e, t, r, n) {
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
          const d = tc(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, c;
          const f = new Promise((e, t) => (u = e, c = t)),
            p = e => {
              const t = o <= (r.cancelId || 0) && gc(n) || o !== r.asyncId && yc(n, !1);
              if (t) throw e.result = t, c(e), e
            },
            h = (e, t) => {
              const i = new wc,
                s = new xc;
              return (async () => {
                if (ad.skipAnimation) throw _c(r), s.result = yc(n, !1), c(s), s;
                p(i);
                const a = dd.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, fd(d, (e, t) => {
                  dd.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return p(i), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (ad.skipAnimation) return _c(r), yc(n, !1);
          try {
            let t;
            t = dd.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = yc(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof wc) m = e.result;
            else {
              if (!(e instanceof xc)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? a : void 0, r.promise = i ? l : void 0)
          }
          return dd.fun(s) && Xl.batchedUpdates(() => {
            s(m, n, n.item)
          }), m
        })() : l
      }

      function _c(e, t) {
        hd(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var wc = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        xc = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Cc = e => e instanceof jc,
        Oc = 1,
        jc = class extends uu {
          constructor() {
            super(...arguments), this.id = Oc++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = zu(this);
            return e && e.getValue()
          }
          to(...e) {
            return ad.to(this, e)
          }
          interpolate(...e) {
            return Su(`${ju}The "interpolate" function is deprecated in v9 (use "to" instead)`), ad.to(this, e)
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
            du(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Sd.sort(this), du(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Pc = Symbol.for("SpringPhase"),
        Sc = e => (1 & e[Pc]) > 0,
        kc = e => (2 & e[Pc]) > 0,
        Rc = e => (4 & e[Pc]) > 0,
        Tc = (e, t) => t ? e[Pc] |= 3 : e[Pc] &= -3,
        Dc = (e, t) => t ? e[Pc] |= 4 : e[Pc] &= -5,
        Ec = class extends jc {
          constructor(e, t) {
            if (super(), this.animation = new pc, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !dd.und(e) || !dd.und(t)) {
              const r = dd.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              dd.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(kc(this) || this._state.asyncTo) || Rc(this)
          }
          get goal() {
            return au(this.animation.to)
          }
          get velocity() {
            const e = zu(this);
            return e instanceof Vu ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return Sc(this)
          }
          get isAnimating() {
            return kc(this)
          }
          get isPaused() {
            return Rc(this)
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
            } = n, s = Lu(n.to);
            !s && su(n.to) && (o = pd(au(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const d = a.constructor == Fu ? 1 : s ? s[l].lastPosition : o[l];
              let u = n.immediate,
                c = d;
              if (!u) {
                if (c = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = dd.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (r == d ? .005 : Math.min(1, .001 * Math.abs(d - r)));
                if (dd.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    c = r + o / (1 - e) * (1 - n), u = Math.abs(a.lastPosition - c) <= f, s = o * n
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !dd.und(n),
                      p = r == d ? a.v0 > 0 : r < d;
                    let h, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (h = Math.abs(s) > t, h || (u = Math.abs(d - c) <= f, !u)); ++e) l && (m = c == d || c > d == p, m && (s = -s * n, c = d)), s += (1e-6 * -i.tension * (c - d) + .001 * -i.friction * s) / i.mass * v, c += s * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, a.durationProgress = n), c = r + i.easing(n) * (d - r), s = (c - a.lastPosition) / e, u = 1 == n
                }
                a.lastVelocity = s, Number.isNaN(c) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              s && !s[l].done && (u = !1), u ? a.done = !0 : t = !1, a.setValue(c, i.round) && (r = !0)
            });
            const a = zu(this),
              l = a.getValue();
            if (t) {
              const e = au(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Xl.batchedUpdates(() => {
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
            if (kc(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Xl.batchedUpdates(() => {
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
            return dd.und(e) ? (r = this.queue || [], this.queue = []) : r = [dd.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => mc(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), _c(this._state, e && this._lastCallId), Xl.batchedUpdates(() => this._stop(t, e)), this
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
            r = dd.obj(r) ? r[t] : r, (null == r || sc(r)) && (r = void 0), n = dd.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return Sc(this) || (e.reverse && ([r, n] = [n, r]), n = au(n), dd.und(n) ? zu(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, tc(e, (e, t) => /^on/.test(t) ? Qu(e, r) : e)), Ac(this, e, "onProps"), Vc(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return hc(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  Rc(this) || (Dc(this, !0), yd(i.pauseQueue), Vc(this, "onPause", yc(this, Nc(this, this.animation.to)), this))
                },
                resume: () => {
                  Rc(this) && (Dc(this, !1), kc(this) && this._resume(), yd(i.resumeQueue), Vc(this, "onResume", yc(this, Nc(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Ic(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(gc(this));
            const n = !dd.und(e.to),
              o = !dd.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(gc(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: s,
              animation: a
            } = this, {
              to: l,
              from: d
            } = a;
            let {
              to: u = l,
              from: c = d
            } = e;
            !o || n || t.default && !dd.und(u) || (u = c), t.reverse && ([u, c] = [c, u]);
            const f = !ud(c, d);
            f && (a.from = c), c = au(c);
            const p = !ud(u, l);
            p && this._focus(u);
            const h = sc(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !h && function(e, t, r) {
              r && (cc(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), cc(e, t), Object.assign(e, t);
              for (const t in dc) null == e[t] && (e[t] = dc[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              dd.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, Ku(t.config, i), t.config !== s.config ? Ku(s.config, i) : void 0);
            let g = zu(this);
            if (!g || dd.und(u)) return r(yc(this, !0));
            const b = dd.und(t.reset) ? o && !t.default : !dd.und(c) && Yu(t.reset, i),
              _ = b ? c : this.get(),
              w = ic(u),
              x = dd.num(w) || dd.arr(w) || Ru(w),
              C = !h && (!x || Yu(s.immediate || t.immediate, i));
            if (p) {
              const e = Hu(u);
              if (e !== g.constructor) {
                if (!C) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const O = g.constructor;
            let j = su(u),
              P = !1;
            if (!j) {
              const e = b || !Sc(this) && f;
              (p || e) && (P = ud(ic(_), w), j = !P), (ud(a.immediate, C) || C) && ud(m.decay, v) && ud(m.velocity, y) || (j = !0)
            }
            if (P && kc(this) && (a.changed && !b ? j = !0 : j || this._stop(l)), !h && ((j || su(l)) && (a.values = g.getPayload(), a.toValues = su(u) ? null : O == Fu ? [1] : pd(w)), a.immediate != C && (a.immediate = C, C || b || this._set(l)), j)) {
              const {
                onRest: e
              } = a;
              cd(Lc, e => Ac(this, t, e));
              const n = yc(this, Nc(this, l));
              yd(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && Xl.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? Ku(s.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(_), h ? r(bc(t.to, t, this._state, this)) : j ? this._start() : kc(this) && !p ? this._pendingCalls.add(r) : r(vc(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (lu(this) && this._detach(), t.to = e, lu(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            su(t) && (fu(t, this), Cc(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            su(e) && pu(e, this)
          }
          _set(e, t = !0) {
            const r = au(e);
            if (!dd.und(r)) {
              const e = zu(this);
              if (!e || !ud(r, e.getValue())) {
                const n = Hu(r);
                e && e.constructor == n ? e.setValue(r) : Mu(this, n.create(r)), e && Xl.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return zu(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Vc(this, "onStart", yc(this, Nc(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Ku(this.animation.onChange, e, this)), Ku(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            zu(this).reset(au(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), kc(this) || (Tc(this, !0), Rc(this) || this._resume())
          }
          _resume() {
            ad.skipAnimation ? this.finish() : Sd.start(this)
          }
          _stop(e, t) {
            if (kc(this)) {
              Tc(this, !1);
              const r = this.animation;
              cd(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), du(this, {
                type: "idle",
                parent: this
              });
              const n = t ? gc(this.get()) : yc(this.get(), Nc(this, e ?? r.to));
              yd(this._pendingCalls, n), r.changed && (r.changed = !1, Vc(this, "onRest", n, this))
            }
          }
        };

      function Nc(e, t) {
        const r = ic(t);
        return ud(ic(e.get()), r)
      }

      function Ic(e, t = e.loop, r = e.to) {
        const n = Ku(t);
        if (n) {
          const o = !0 !== n && oc(n),
            i = (o || e).reverse,
            s = !o || o.reset;
          return zc({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || sc(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function zc(e) {
        const {
          to: t,
          from: r
        } = e = oc(e), n = new Set;
        return dd.obj(t) && Mc(t, n), dd.obj(r) && Mc(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Mc(e, t) {
        fd(e, (e, r) => null != e && t.add(r))
      }
      var Lc = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Ac(e, t, r) {
        e.animation[r] = t[r] !== Ju(t, r) ? Qu(t[r], e.key) : void 0
      }

      function Vc(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Fc = ["onStart", "onChange", "onRest"],
        qc = 1,
        Bc = class {
          constructor(e, t) {
            this.id = qc++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              dd.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(zc(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = pd(e).map(zc) : this.queue = [], this._flush ? this._flush(this, t) : (Gc(this, t), function(e, t) {
              return Promise.all(t.map(t => Xc(e, t))).then(t => mc(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              cd(pd(t), t => r[t].stop(!!e))
            } else _c(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (dd.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              cd(pd(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (dd.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              cd(pd(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            fd(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, hd(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !n && this._started,
              s = o || i && r.size ? this.get() : null;
            o && t.size && hd(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, hd(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Xl.onFrame(this._onFrame)
          }
        };
      async function Xc(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, d = dd.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = dd.arr(o) || dd.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : cd(Fc, r => {
          const n = t[r];
          if (dd.fun(n)) {
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
        const c = e._state;
        t.pause === !c.paused ? (c.paused = t.pause, yd(t.pause ? c.pauseQueue : c.resumeQueue)) : c.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          p = !0 === t.cancel || !0 === Ju(t, "cancel");
        (u || p && c.asyncId) && f.push(hc(++e._lastAsyncId, {
          props: t,
          state: c,
          actions: {
            pause: ld,
            resume: ld,
            start(t, r) {
              p ? (_c(c, e._lastAsyncId), r(gc(e))) : (t.onRest = a, r(bc(u, t, c, e)))
            }
          }
        })), c.paused && await new Promise(e => {
          c.resumeQueue.add(e)
        });
        const h = mc(e, await Promise.all(f));
        if (s && h.finished && (!r || !h.noop)) {
          const r = Ic(t, s, o);
          if (r) return Gc(e, [r]), Xc(e, r, !0)
        }
        return l && Xl.batchedUpdates(() => l(h, e, e.item)), h
      }

      function Wc(e, t) {
        const r = {
          ...e.springs
        };
        return t && cd(pd(t), e => {
            dd.und(e.keys) && (e = zc(e)), dd.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), Uc(r, e, e => Hc(e))
          }),
          function(e, t) {
            fd(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, fu(t, e))
            })
          }(e, r), r
      }

      function Hc(e, t) {
        const r = new Ec;
        return r.key = e, t && fu(r, t), r
      }

      function Uc(e, t, r) {
        t.keys && cd(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Gc(e, t) {
        cd(t, t => {
          Uc(e.springs, t, t => Hc(t, e))
        })
      }
      var Zc = B.createContext({
          pause: !1,
          immediate: !1
        }),
        $c = () => {
          const e = [],
            t = function(t) {
              ku(`${ju}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return cd(e, (e, o) => {
                if (dd.und(t)) n.push(e.start());
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
            return cd(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return cd(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            cd(e, (e, r) => {
              const n = dd.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return cd(e, (e, n) => {
              if (dd.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return cd(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return cd(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return dd.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        Kc = () => $c(),
        Yc = () => (0, B.useState)(Kc)[0];

      function Qc(e, t, r) {
        const n = dd.fun(t) && t,
          {
            reset: o,
            sort: i,
            trail: s = 0,
            expires: a = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: d,
            ref: u,
            config: c
          } = n ? n() : t,
          f = (0, B.useMemo)(() => n || 3 == arguments.length ? $c() : void 0, []),
          p = pd(e),
          h = [],
          m = (0, B.useRef)(null),
          v = o ? null : m.current;
        Tu(() => {
          m.current = h
        }), Eu(() => (cd(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          cd(m.current, e => {
            e.expired && clearTimeout(e.expirationId), ac(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : Jc++
              })
            }
            return dd.und(r) ? e : dd.fun(r) ? e.map(r) : pd(r)
          }(p, n ? n() : t, v),
          g = o && m.current || [];
        Tu(() => cd(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          ac(e, f), Ku(d, t, r)
        }));
        const b = [];
        if (v && cd(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (h[t] = e)
          }), cd(p, (e, t) => {
            h[t] || (h[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new Bc
            }, h[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          cd(b, (t, n) => {
            const o = v[n];
            ~t ? (e = h.indexOf(o), h[e] = {
              ...o,
              item: p[t]
            }) : r && h.splice(++e, 0, o)
          })
        }
        dd.fun(i) && h.sort((e, t) => i(e.item, t.item));
        let _ = -s;
        const w = Du(),
          x = tc(t),
          C = new Map,
          O = (0, B.useRef)(new Map),
          j = (0, B.useRef)(!1);
        cd(h, (e, r) => {
          const o = e.key,
            i = e.phase,
            d = n ? n() : t;
          let f, p;
          const h = Ku(d.delay || 0, o);
          if ("mount" == i) f = d.enter, p = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != i)
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
          if (f = Ku(f, e.item, r), f = dd.obj(f) ? oc(f) : {
              to: f
            }, !f.config) {
            const t = c || x.config;
            f.config = Ku(t, e.item, r, p)
          }
          _ += s;
          const g = {
            ...x,
            delay: h + _,
            ref: u,
            immediate: d.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == p && dd.und(g.from)) {
            const o = n ? n() : t,
              i = dd.und(o.initial) || v ? o.from : o.initial;
            g.from = Ku(i, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            Ku(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = Ku(a, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                }
              }
              e && t.some(e => e.expired) && (O.current.delete(r), l && (j.current = !0), w())
            }
          };
          const P = Wc(e.ctrl, g);
          "leave" === p && l ? O.current.set(e, {
            phase: p,
            springs: P,
            payload: g
          }) : C.set(e, {
            phase: p,
            springs: P,
            payload: g
          })
        });
        const P = (0, B.useContext)(Zc),
          S = function(e) {
            const t = (0, B.useRef)(void 0);
            return (0, B.useEffect)(() => {
              t.current = e
            }), t.current
          }(P),
          k = P !== S && function(e) {
            for (const t in e) return !0;
            return !1
          }(P);
        Tu(() => {
          k && cd(h, e => {
            e.ctrl.start({
              default: P
            })
          })
        }, [P]), cd(C, (e, t) => {
          if (O.current.size) {
            const e = h.findIndex(e => e.key === t.key);
            h.splice(e, 1)
          }
        }), Tu(() => {
          cd(O.current.size ? O.current : C, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), k && "enter" == e && n.start({
              default: P
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || j.current ? (n.start(t), j.current && (j.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const R = e => B.createElement(B.Fragment, null, h.map((t, r) => {
          const {
            springs: n
          } = C.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), i = dd.str(t.key) || dd.num(t.key) ? t.key : t.ctrl.id, s = B.version < "19.0.0", a = o?.props ?? {}, l = s ? o?.ref : a?.ref;
          return o && o.type ? B.createElement(o.type, {
            ...a,
            key: i,
            ref: l
          }) : o
        }));
        return f ? [R, f] : R
      }
      var Jc = 1,
        ef = class extends jc {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Kd(...t);
            const r = this._get(),
              n = Hu(r);
            Mu(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            ud(t, this.get()) || (zu(this).setValue(t), this._onChange(t, this.idle)), !this.idle && rf(this._active) && nf(this)
          }
          _get() {
            const e = dd.arr(this.source) ? this.source.map(au) : pd(au(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !rf(this._active) && (this.idle = !1, cd(Lu(this), e => {
              e.done = !1
            }), ad.skipAnimation ? (Xl.batchedUpdates(() => this.advance()), nf(this)) : Sd.start(this))
          }
          _attach() {
            let e = 1;
            cd(pd(this.source), t => {
              su(t) && fu(t, this), Cc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            cd(pd(this.source), e => {
              su(e) && pu(e, this)
            }), this._active.clear(), nf(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = pd(this.source).reduce((e, t) => Math.max(e, (Cc(t) ? t.priority : 0) + 1), 0))
          }
        };

      function tf(e) {
        return !1 !== e.idle
      }

      function rf(e) {
        return !e.size || Array.from(e).every(tf)
      }

      function nf(e) {
        e.idle || (e.idle = !0, cd(Lu(e), e => {
          e.done = !0
        }), du(e, {
          type: "idle",
          parent: e
        }))
      }
      ad.assign({
        createStringInterpolator: Ou,
        to: (e, t) => new ef(e, t)
      }), Sd.advance;
      var of = r(84017), sf = /^--/;

      function af(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || sf.test(e) || df.hasOwnProperty(e) && df[e] ? ("" + t).trim() : t + "px"
      }
      var lf = {},
        df = {
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
        uf = ["Webkit", "Ms", "Moz", "O"];
      df = Object.keys(df).reduce((e, t) => (uf.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), df);
      var cf = /^(matrix|translate|scale|rotate|skew)/,
        ff = /^(translate)/,
        pf = /^(rotate|skew)/,
        hf = (e, t) => dd.num(e) && 0 !== e ? e + t : e,
        mf = (e, t) => dd.arr(e) ? e.every(e => mf(e, t)) : dd.num(e) ? e === t : parseFloat(e) === t,
        vf = class extends Bu {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>hf(e,"px")).join(",")})`, mf(e, 0)])), fd(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (cf.test(t)) {
                if (delete n[t], dd.und(e)) return;
                const r = ff.test(t) ? "px" : pf.test(t) ? "deg" : "";
                o.push(pd(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${hf(o,r)})`, mf(o, 0)] : e => [`${t}(${e.map(e=>hf(e,r)).join(",")})`, mf(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new yf(o, i)), super(n)
          }
        },
        yf = class extends uu {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return cd(this.inputs, (r, n) => {
              const o = au(r[0]),
                [i, s] = this.transforms[n](dd.arr(o) ? o : r.map(au));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && cd(this.inputs, e => cd(e, e => su(e) && fu(e, this)))
          }
          observerRemoved(e) {
            0 == e && cd(this.inputs, e => cd(e, e => su(e) && pu(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), du(this, e)
          }
        };
      ad.assign({
        batchedUpdates: of.unstable_batchedUpdates,
        createStringInterpolator: Ou,
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
      var gf = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Bu(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = $u(e) || "Anonymous";
              return (e = dd.str(e) ? i[e] || (i[e] = Uu(e, o)) : e[Zu] || (e[Zu] = Uu(e, o))).displayName = `Animated(${t})`, e
            };
          return fd(e, (t, r) => {
            dd.arr(e) && (r = $u(t)), i[r] = i(t)
          }), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
                ...d
              } = t,
              u = Object.values(d),
              c = Object.keys(d).map(t => r || e.hasAttribute(t) ? t : lf[t] || (lf[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = af(t, o[t]);
                sf.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } c.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new vf(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        bf = gf.animated;

      function _f(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }
      "undefined" == typeof window || !window.document || window.document.createElement;
      var wf = r(50446);

      function xf(e, t = []) {
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
          const o = B.createContext(n),
            i = r.length;
          r = [...r, n];
          const s = t => {
            const {
              scope: r,
              children: n,
              ...s
            } = t, a = r?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
            return (0, j.jsx)(a.Provider, {
              value: l,
              children: n
            })
          };
          return s.displayName = t + "Provider", [s, function(r, s) {
            const a = s?.[e]?.[i] || o,
              l = B.useContext(a);
            if (l) return l;
            if (void 0 !== n) return n;
            throw new Error(`\`${r}\` must be used within \`${t}\``)
          }]
        }, Cf(n, ...t)]
      }

      function Cf(...e) {
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

      function Of(e) {
        const t = jf(e),
          r = B.forwardRef((e, r) => {
            const {
              children: n,
              ...o
            } = e, i = B.Children.toArray(n), s = i.find(Sf);
            if (s) {
              const e = s.props.children,
                n = i.map(t => t === s ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, j.jsx)(t, {
                ...o,
                ref: r,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, n) : null
              })
            }
            return (0, j.jsx)(t, {
              ...o,
              ref: r,
              children: n
            })
          });
        return r.displayName = `${e}.Slot`, r
      }

      function jf(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: r,
            ...n
          } = e;
          if (B.isValidElement(r)) {
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
            return r.type !== B.Fragment && (o.ref = t ? (0, wf.t)(t, e) : e), B.cloneElement(r, o)
          }
          return B.Children.count(r) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Pf = Symbol("radix.slottable");

      function Sf(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Pf
      }
      var kf = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const r = Of(`Primitive.${t}`),
          n = B.forwardRef((e, n) => {
            const {
              asChild: o,
              ...i
            } = e, s = o ? r : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, j.jsx)(s, {
              ...i,
              ref: n
            })
          });
        return n.displayName = `Primitive.${t}`, {
          ...e,
          [t]: n
        }
      }, {});

      function Rf(e, t) {
        e && of.flushSync(() => e.dispatchEvent(t))
      }

      function Tf(e) {
        const t = B.useRef(e);
        return B.useEffect(() => {
          t.current = e
        }), B.useMemo(() => (...e) => t.current?.(...e), [])
      }
      var Df, Ef = "dismissableLayer.update",
        Nf = B.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        If = B.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, d = B.useContext(Nf), [u, c] = B.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, p] = B.useState({}), h = (0, wf.s)(t, e => c(e)), m = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = u ? m.indexOf(u) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = g >= y, w = function(e, t = globalThis?.document) {
            const r = Tf(e),
              n = B.useRef(!1),
              o = B.useRef(() => {});
            return B.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Lf("dismissableLayer.pointerDownOutside", r, i, {
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
              r = [...d.branches].some(e => e.contains(t));
            _ && !r && (o?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f), x = function(e, t = globalThis?.document) {
            const r = Tf(e),
              n = B.useRef(!1);
            return B.useEffect(() => {
              const e = e => {
                e.target && !n.current && Lf("dismissableLayer.focusOutside", r, {
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
            [...d.branches].some(e => e.contains(t)) || (i?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f);
          return function(e, t = globalThis?.document) {
            const r = Tf(e);
            B.useEffect(() => {
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
            g === d.layers.size - 1 && (n?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), B.useEffect(() => {
            if (u) return r && (0 === d.layersWithOutsidePointerEventsDisabled.size && (Df = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), Mf(), () => {
              r && 1 === d.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = Df)
            }
          }, [u, f, r, d]), B.useEffect(() => () => {
            u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), Mf())
          }, [u, d]), B.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(Ef, e), () => document.removeEventListener(Ef, e)
          }, []), (0, j.jsx)(kf.div, {
            ...l,
            ref: h,
            style: {
              pointerEvents: b ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: _f(e.onFocusCapture, x.onFocusCapture),
            onBlurCapture: _f(e.onBlurCapture, x.onBlurCapture),
            onPointerDownCapture: _f(e.onPointerDownCapture, w.onPointerDownCapture)
          })
        });
      If.displayName = "DismissableLayer";
      var zf = B.forwardRef((e, t) => {
        const r = B.useContext(Nf),
          n = B.useRef(null),
          o = (0, wf.s)(t, n);
        return B.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, j.jsx)(kf.div, {
          ...e,
          ref: o
        })
      });

      function Mf() {
        const e = new CustomEvent(Ef);
        document.dispatchEvent(e)
      }

      function Lf(e, t, r, {
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
        }), n ? Rf(o, i) : o.dispatchEvent(i)
      }
      zf.displayName = "DismissableLayerBranch";
      var Af = If,
        Vf = zf,
        Ff = globalThis?.document ? B.useLayoutEffect : () => {},
        qf = X[" useId ".trim().toString()] || (() => {}),
        Bf = 0;

      function Xf(e) {
        const [t, r] = B.useState(qf());
        return Ff(() => {
          e || r(e => e ?? String(Bf++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
      const Wf = ["top", "right", "bottom", "left"],
        Hf = Math.min,
        Uf = Math.max,
        Gf = Math.round,
        Zf = Math.floor,
        $f = e => ({
          x: e,
          y: e
        }),
        Kf = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function Yf(e, t, r) {
        return Uf(e, Hf(t, r))
      }

      function Qf(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Jf(e) {
        return e.split("-")[0]
      }

      function ep(e) {
        return e.split("-")[1]
      }

      function tp(e) {
        return "x" === e ? "y" : "x"
      }

      function rp(e) {
        return "y" === e ? "height" : "width"
      }

      function np(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
      }

      function op(e) {
        return tp(np(e))
      }

      function ip(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
      }
      const sp = ["left", "right"],
        ap = ["right", "left"],
        lp = ["top", "bottom"],
        dp = ["bottom", "top"];

      function up(e) {
        const t = Jf(e);
        return Kf[t] + e.slice(t.length)
      }

      function cp(e) {
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

      function fp(e) {
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

      function pp(e, t, r) {
        let {
          reference: n,
          floating: o
        } = e;
        const i = np(t),
          s = op(t),
          a = rp(s),
          l = Jf(t),
          d = "y" === i,
          u = n.x + n.width / 2 - o.width / 2,
          c = n.y + n.height / 2 - o.height / 2,
          f = n[a] / 2 - o[a] / 2;
        let p;
        switch (l) {
          case "top":
            p = {
              x: u,
              y: n.y - o.height
            };
            break;
          case "bottom":
            p = {
              x: u,
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
        switch (ep(t)) {
          case "start":
            p[s] -= f * (r && d ? -1 : 1);
            break;
          case "end":
            p[s] += f * (r && d ? -1 : 1)
        }
        return p
      }
      async function hp(e, t) {
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
          boundary: d = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: c = "floating",
          altBoundary: f = !1,
          padding: p = 0
        } = Qf(t, e), h = cp(p), m = a[f ? "floating" === c ? "reference" : "floating" : c], v = fp(await i.getClippingRect({
          element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: d,
          rootBoundary: u,
          strategy: l
        })), y = "floating" === c ? {
          x: n,
          y: o,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(g)) && await (null == i.getScale ? void 0 : i.getScale(g)) || {
          x: 1,
          y: 1
        }, _ = fp(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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

      function mp(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function vp(e) {
        return Wf.some(t => e[t] >= 0)
      }
      const yp = new Set(["left", "top"]);

      function gp() {
        return "undefined" != typeof window
      }

      function bp(e) {
        return xp(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function _p(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function wp(e) {
        var t;
        return null == (t = (xp(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function xp(e) {
        return !!gp() && (e instanceof Node || e instanceof _p(e).Node)
      }

      function Cp(e) {
        return !!gp() && (e instanceof Element || e instanceof _p(e).Element)
      }

      function Op(e) {
        return !!gp() && (e instanceof HTMLElement || e instanceof _p(e).HTMLElement)
      }

      function jp(e) {
        return !(!gp() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof _p(e).ShadowRoot)
      }

      function Pp(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: o
        } = Mp(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && "inline" !== o && "contents" !== o
      }

      function Sp(e) {
        return /^(table|td|th)$/.test(bp(e))
      }

      function kp(e) {
        try {
          if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
          return e.matches(":modal")
        } catch (e) {
          return !1
        }
      }
      const Rp = /transform|translate|scale|rotate|perspective|filter/,
        Tp = /paint|layout|strict|content/,
        Dp = e => !!e && "none" !== e;
      let Ep;

      function Np(e) {
        const t = Cp(e) ? Mp(e) : e;
        return Dp(t.transform) || Dp(t.translate) || Dp(t.scale) || Dp(t.rotate) || Dp(t.perspective) || !Ip() && (Dp(t.backdropFilter) || Dp(t.filter)) || Rp.test(t.willChange || "") || Tp.test(t.contain || "")
      }

      function Ip() {
        return null == Ep && (Ep = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Ep
      }

      function zp(e) {
        return /^(html|body|#document)$/.test(bp(e))
      }

      function Mp(e) {
        return _p(e).getComputedStyle(e)
      }

      function Lp(e) {
        return Cp(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Ap(e) {
        if ("html" === bp(e)) return e;
        const t = e.assignedSlot || e.parentNode || jp(e) && e.host || wp(e);
        return jp(t) ? t.host : t
      }

      function Vp(e) {
        const t = Ap(e);
        return zp(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Op(t) && Pp(t) ? t : Vp(t)
      }

      function Fp(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const o = Vp(e),
          i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = _p(o);
        if (i) {
          const e = qp(s);
          return t.concat(s, s.visualViewport || [], Pp(o) ? o : [], e && r ? Fp(e) : [])
        }
        return t.concat(o, Fp(o, [], r))
      }

      function qp(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function Bp(e) {
        const t = Mp(e);
        let r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0;
        const o = Op(e),
          i = o ? e.offsetWidth : r,
          s = o ? e.offsetHeight : n,
          a = Gf(r) !== i || Gf(n) !== s;
        return a && (r = i, n = s), {
          width: r,
          height: n,
          $: a
        }
      }

      function Xp(e) {
        return Cp(e) ? e : e.contextElement
      }

      function Wp(e) {
        const t = Xp(e);
        if (!Op(t)) return $f(1);
        const r = t.getBoundingClientRect(),
          {
            width: n,
            height: o,
            $: i
          } = Bp(t);
        let s = (i ? Gf(r.width) : r.width) / n,
          a = (i ? Gf(r.height) : r.height) / o;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
          x: s,
          y: a
        }
      }
      const Hp = $f(0);

      function Up(e) {
        const t = _p(e);
        return Ip() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Hp
      }

      function Gp(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const o = e.getBoundingClientRect(),
          i = Xp(e);
        let s = $f(1);
        t && (n ? Cp(n) && (s = Wp(n)) : s = Wp(e));
        const a = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== _p(e)) && t
        }(i, r, n) ? Up(i) : $f(0);
        let l = (o.left + a.x) / s.x,
          d = (o.top + a.y) / s.y,
          u = o.width / s.x,
          c = o.height / s.y;
        if (i) {
          const e = _p(i),
            t = n && Cp(n) ? _p(n) : n;
          let r = e,
            o = qp(r);
          for (; o && n && t !== r;) {
            const e = Wp(o),
              t = o.getBoundingClientRect(),
              n = Mp(o),
              i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
            l *= e.x, d *= e.y, u *= e.x, c *= e.y, l += i, d += s, r = _p(o), o = qp(r)
          }
        }
        return fp({
          width: u,
          height: c,
          x: l,
          y: d
        })
      }

      function Zp(e, t) {
        const r = Lp(e).scrollLeft;
        return t ? t.left + r : Gp(wp(e)).left + r
      }

      function $p(e, t) {
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - Zp(e, r),
          y: r.top + t.scrollTop
        }
      }

      function Kp(e, t, r) {
        let n;
        if ("viewport" === t) n = function(e, t) {
          const r = _p(e),
            n = wp(e),
            o = r.visualViewport;
          let i = n.clientWidth,
            s = n.clientHeight,
            a = 0,
            l = 0;
          if (o) {
            i = o.width, s = o.height;
            const e = Ip();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, l = o.offsetTop)
          }
          const d = Zp(n);
          if (d <= 0) {
            const e = n.ownerDocument,
              t = e.body,
              r = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0,
              s = Math.abs(n.clientWidth - t.clientWidth - o);
            s <= 25 && (i -= s)
          } else d <= 25 && (i += d);
          return {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }(e, r);
        else if ("document" === t) n = function(e) {
          const t = wp(e),
            r = Lp(e),
            n = e.ownerDocument.body,
            o = Uf(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            i = Uf(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let s = -r.scrollLeft + Zp(e);
          const a = -r.scrollTop;
          return "rtl" === Mp(n).direction && (s += Uf(t.clientWidth, n.clientWidth) - o), {
            width: o,
            height: i,
            x: s,
            y: a
          }
        }(wp(e));
        else if (Cp(t)) n = function(e, t) {
          const r = Gp(e, !0, "fixed" === t),
            n = r.top + e.clientTop,
            o = r.left + e.clientLeft,
            i = Op(e) ? Wp(e) : $f(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: n * i.y
          }
        }(t, r);
        else {
          const r = Up(e);
          n = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
          }
        }
        return fp(n)
      }

      function Yp(e, t) {
        const r = Ap(e);
        return !(r === t || !Cp(r) || zp(r)) && ("fixed" === Mp(r).position || Yp(r, t))
      }

      function Qp(e, t, r) {
        const n = Op(t),
          o = wp(t),
          i = "fixed" === r,
          s = Gp(e, !0, i, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = $f(0);

        function d() {
          l.x = Zp(o)
        }
        if (n || !n && !i)
          if (("body" !== bp(t) || Pp(o)) && (a = Lp(t)), n) {
            const e = Gp(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && d();
        i && !n && o && d();
        const u = !o || n || i ? $f(0) : $p(o, a);
        return {
          x: s.left + a.scrollLeft - l.x - u.x,
          y: s.top + a.scrollTop - l.y - u.y,
          width: s.width,
          height: s.height
        }
      }

      function Jp(e) {
        return "static" === Mp(e).position
      }

      function eh(e, t) {
        if (!Op(e) || "fixed" === Mp(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return wp(e) === r && (r = r.ownerDocument.body), r
      }

      function th(e, t) {
        const r = _p(e);
        if (kp(e)) return r;
        if (!Op(e)) {
          let t = Ap(e);
          for (; t && !zp(t);) {
            if (Cp(t) && !Jp(t)) return t;
            t = Ap(t)
          }
          return r
        }
        let n = eh(e, t);
        for (; n && Sp(n) && Jp(n);) n = eh(n, t);
        return n && zp(n) && Jp(n) && !Np(n) ? r : n || function(e) {
          let t = Ap(e);
          for (; Op(t) && !zp(t);) {
            if (Np(t)) return t;
            if (kp(t)) return null;
            t = Ap(t)
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
            s = wp(n),
            a = !!t && kp(t.floating);
          if (n === s || a && i) return r;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            d = $f(1);
          const u = $f(0),
            c = Op(n);
          if ((c || !c && !i) && (("body" !== bp(n) || Pp(s)) && (l = Lp(n)), c)) {
            const e = Gp(n);
            d = Wp(n), u.x = e.x + n.clientLeft, u.y = e.y + n.clientTop
          }
          const f = !s || c || i ? $f(0) : $p(s, l);
          return {
            width: r.width * d.x,
            height: r.height * d.y,
            x: r.x * d.x - l.scrollLeft * d.x + u.x + f.x,
            y: r.y * d.y - l.scrollTop * d.y + u.y + f.y
          }
        },
        getDocumentElement: wp,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: n,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === r ? kp(t) ? [] : function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let n = Fp(e, [], !1).filter(e => Cp(e) && "body" !== bp(e)),
                o = null;
              const i = "fixed" === Mp(e).position;
              let s = i ? Ap(e) : e;
              for (; Cp(s) && !zp(s);) {
                const t = Mp(s),
                  r = Np(s);
                r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && o && ("absolute" === o.position || "fixed" === o.position) || Pp(s) && !r && Yp(e, s)) ? n = n.filter(e => e !== s) : o = t, s = Ap(s)
              }
              return t.set(e, n), n
            }(t, this._c) : [].concat(r), n],
            s = Kp(t, i[0], o);
          let a = s.top,
            l = s.right,
            d = s.bottom,
            u = s.left;
          for (let e = 1; e < i.length; e++) {
            const r = Kp(t, i[e], o);
            a = Uf(r.top, a), l = Hf(r.right, l), d = Hf(r.bottom, d), u = Uf(r.left, u)
          }
          return {
            width: l - u,
            height: d - a,
            x: u,
            y: a
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
          } = Bp(e);
          return {
            width: t,
            height: r
          }
        },
        getScale: Wp,
        isElement: Cp,
        isRTL: function(e) {
          return "rtl" === Mp(e).direction
        }
      };

      function nh(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const oh = function(e) {
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
                elements: d
              } = t, {
                mainAxis: u = !0,
                crossAxis: c = !0,
                fallbackPlacements: f,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: m = !0,
                ...v
              } = Qf(e, t);
              if (null != (r = i.arrow) && r.alignmentOffset) return {};
              const y = Jf(o),
                g = np(a),
                b = Jf(a) === a,
                _ = await (null == l.isRTL ? void 0 : l.isRTL(d.floating)),
                w = f || (b || !m ? [up(a)] : function(e) {
                  const t = up(e);
                  return [ip(e), t, ip(t)]
                }(a)),
                x = "none" !== h;
              !f && x && w.push(... function(e, t, r, n) {
                const o = ep(e);
                let i = function(e, t, r) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return r ? t ? ap : sp : t ? sp : ap;
                    case "left":
                    case "right":
                      return t ? lp : dp;
                    default:
                      return []
                  }
                }(Jf(e), "start" === r, n);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(ip)))), i
              }(a, m, h, _));
              const C = [a, ...w],
                O = await l.detectOverflow(t, v),
                j = [];
              let P = (null == (n = i.flip) ? void 0 : n.overflows) || [];
              if (u && j.push(O[y]), c) {
                const e = function(e, t, r) {
                  void 0 === r && (r = !1);
                  const n = ep(e),
                    o = op(e),
                    i = rp(o);
                  let s = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (s = up(s)), [s, up(s)]
                }(o, s, _);
                j.push(O[e[0]], O[e[1]])
              }
              if (P = [...P, {
                  placement: o,
                  overflows: j
                }], !j.every(e => e <= 0)) {
                var S, k;
                const e = ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1,
                  t = C[e];
                if (t && ("alignment" !== c || g === np(t) || P.every(e => np(e.placement) !== g || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: P
                  },
                  reset: {
                    placement: t
                  }
                };
                let r = null == (k = P.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : k.placement;
                if (!r) switch (p) {
                  case "bestFit": {
                    var R;
                    const e = null == (R = P.filter(e => {
                      if (x) {
                        const t = np(e.placement);
                        return t === g || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : R[0];
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
              element: d,
              padding: u = 0
            } = Qf(e, t) || {};
            if (null == d) return {};
            const c = cp(u),
              f = {
                x: r,
                y: n
              },
              p = op(o),
              h = rp(p),
              m = await s.getDimensions(d),
              v = "y" === p,
              y = v ? "top" : "left",
              g = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              _ = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
              w = f[p] - i.reference[p],
              x = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(d));
            let C = x ? x[b] : 0;
            C && await (null == s.isElement ? void 0 : s.isElement(x)) || (C = a.floating[b] || i.floating[h]);
            const O = _ / 2 - w / 2,
              j = C / 2 - m[h] / 2 - 1,
              P = Hf(c[y], j),
              S = Hf(c[g], j),
              k = P,
              R = C - m[h] - S,
              T = C / 2 - m[h] / 2 + O,
              D = Yf(k, T, R),
              E = !l.arrow && null != ep(o) && T !== D && i.reference[h] / 2 - (T < k ? P : S) - m[h] / 2 < 0,
              N = E ? T < k ? T - k : T - R : 0;
            return {
              [p]: f[p] + N,
              data: {
                [p]: D,
                centerOffset: T - D - N,
                ...E && {
                  alignmentOffset: N
                }
              },
              reset: E
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
                crossAxis: d = !0
              } = Qf(e, t), u = {
                x: r,
                y: n
              }, c = np(o), f = tp(c);
              let p = u[f],
                h = u[c];
              const m = Qf(a, t),
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
              if (d) {
                var y, g;
                const e = "y" === f ? "width" : "height",
                  t = yp.has(Jf(o)),
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
            } = r, a = s.detectOverflow ? s : {
              ...s,
              detectOverflow: hp
            }, l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let d = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: u,
                y: c
              } = pp(d, n, l),
              f = n,
              p = 0;
            const h = {};
            for (let r = 0; r < i.length; r++) {
              const m = i[r];
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
                x: u,
                y: c,
                initialPlacement: n,
                placement: f,
                strategy: o,
                middlewareData: h,
                rects: d,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              u = null != g ? g : u, c = null != b ? b : c, h[v] = {
                ...h[v],
                ..._
              }, w && p < 50 && (p++, "object" == typeof w && (w.placement && (f = w.placement), w.rects && (d = !0 === w.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : w.rects), ({
                x: u,
                y: c
              } = pp(d, f, l))), r = -1)
            }
            return {
              x: u,
              y: c,
              placement: f,
              strategy: o,
              middlewareData: h
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var lh = "undefined" != typeof document ? B.useLayoutEffect : function() {};

      function dh(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 !== n--;)
              if (!dh(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || dh(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function uh(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function ch(e, t) {
        const r = uh(e);
        return Math.round(t * r) / r
      }

      function fh(e) {
        const t = B.useRef(e);
        return lh(() => {
          t.current = e
        }), t
      }
      const ph = (e, t) => {
          const r = function(e) {
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
                  } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), s = Jf(r), a = ep(r), l = "y" === np(r), d = yp.has(s) ? -1 : 1, u = i && l ? -1 : 1, c = Qf(t, e);
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
                    x: p * u,
                    y: f * d
                  } : {
                    x: f * d,
                    y: p * u
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
          }(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        hh = (e, t) => {
          const r = function(e) {
            return void 0 === e && (e = {}), {
              name: "shift",
              options: e,
              async fn(t) {
                const {
                  x: r,
                  y: n,
                  placement: o,
                  platform: i
                } = t, {
                  mainAxis: s = !0,
                  crossAxis: a = !1,
                  limiter: l = {
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
                  ...d
                } = Qf(e, t), u = {
                  x: r,
                  y: n
                }, c = await i.detectOverflow(t, d), f = np(Jf(o)), p = tp(f);
                let h = u[p],
                  m = u[f];
                if (s) {
                  const e = "y" === p ? "bottom" : "right";
                  h = Yf(h + c["y" === p ? "top" : "left"], h, h - c[e])
                }
                if (a) {
                  const e = "y" === f ? "bottom" : "right";
                  m = Yf(m + c["y" === f ? "top" : "left"], m, m - c[e])
                }
                const v = l.fn({
                  ...t,
                  [p]: h,
                  [f]: m
                });
                return {
                  ...v,
                  data: {
                    x: v.x - r,
                    y: v.y - n,
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
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        mh = (e, t) => ({
          fn: sh(e).fn,
          options: [e, t]
        }),
        vh = (e, t) => {
          const r = oh(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        yh = (e, t) => {
          const r = function(e) {
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
                  ...d
                } = Qf(e, t), u = await s.detectOverflow(t, d), c = Jf(o), f = ep(o), p = "y" === np(o), {
                  width: h,
                  height: m
                } = i.floating;
                let v, y;
                "top" === c || "bottom" === c ? (v = c, y = f === (await (null == s.isRTL ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = c, v = "end" === f ? "top" : "bottom");
                const g = m - u.top - u.bottom,
                  b = h - u.left - u.right,
                  _ = Hf(m - u[v], g),
                  w = Hf(h - u[y], b),
                  x = !t.middlewareData.shift;
                let C = _,
                  O = w;
                if (null != (r = t.middlewareData.shift) && r.enabled.x && (O = b), null != (n = t.middlewareData.shift) && n.enabled.y && (C = g), x && !f) {
                  const e = Uf(u.left, 0),
                    t = Uf(u.right, 0),
                    r = Uf(u.top, 0),
                    n = Uf(u.bottom, 0);
                  p ? O = h - 2 * (0 !== e || 0 !== t ? e + t : Uf(u.left, u.right)) : C = m - 2 * (0 !== r || 0 !== n ? r + n : Uf(u.top, u.bottom))
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
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        gh = (e, t) => {
          const r = function(e) {
            return void 0 === e && (e = {}), {
              name: "hide",
              options: e,
              async fn(t) {
                const {
                  rects: r,
                  platform: n
                } = t, {
                  strategy: o = "referenceHidden",
                  ...i
                } = Qf(e, t);
                switch (o) {
                  case "referenceHidden": {
                    const e = mp(await n.detectOverflow(t, {
                      ...i,
                      elementContext: "reference"
                    }), r.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: vp(e)
                      }
                    }
                  }
                  case "escaped": {
                    const e = mp(await n.detectOverflow(t, {
                      ...i,
                      altBoundary: !0
                    }), r.floating);
                    return {
                      data: {
                        escapedOffsets: e,
                        escaped: vp(e)
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
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        bh = (e, t) => {
          const r = (e => ({
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
          }))(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        };
      var _h = B.forwardRef((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, j.jsx)(kf.svg, {
          ...i,
          ref: t,
          width: n,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? r : (0, j.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      });
      _h.displayName = "Arrow";
      var wh = _h;

      function xh(e) {
        const [t, r] = B.useState(void 0);
        return Ff(() => {
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
      var Ch = "Popper",
        [Oh, jh] = xf(Ch),
        [Ph, Sh] = Oh(Ch),
        kh = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = B.useState(null);
          return (0, j.jsx)(Ph, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      kh.displayName = Ch;
      var Rh = "PopperAnchor",
        Th = B.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, i = Sh(Rh, r), s = B.useRef(null), a = (0, wf.s)(t, s), l = B.useRef(null);
          return B.useEffect(() => {
            const e = l.current;
            l.current = n?.current || s.current, e !== l.current && i.onAnchorChange(l.current)
          }), n ? null : (0, j.jsx)(kf.div, {
            ...o,
            ref: a
          })
        });
      Th.displayName = Rh;
      var Dh = "PopperContent",
        [Eh, Nh] = Oh(Dh),
        Ih = B.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: d = [],
            collisionPadding: u = 0,
            sticky: c = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: h,
            ...m
          } = e, v = Sh(Dh, r), [y, g] = B.useState(null), b = (0, wf.s)(t, e => g(e)), [_, w] = B.useState(null), x = xh(_), C = x?.width ?? 0, O = x?.height ?? 0, P = n + ("center" !== i ? "-" + i : ""), S = "number" == typeof u ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
          }, k = Array.isArray(d) ? d : [d], R = k.length > 0, T = {
            padding: S,
            boundary: k.filter(Ah),
            altBoundary: R
          }, {
            refs: D,
            floatingStyles: E,
            placement: N,
            isPositioned: I,
            middlewareData: z
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
              open: d
            } = e, [u, c] = B.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = B.useState(n);
            dh(f, n) || p(n);
            const [h, m] = B.useState(null), [v, y] = B.useState(null), g = B.useCallback(e => {
              e !== x.current && (x.current = e, m(e))
            }, []), b = B.useCallback(e => {
              e !== C.current && (C.current = e, y(e))
            }, []), _ = i || h, w = s || v, x = B.useRef(null), C = B.useRef(null), O = B.useRef(u), j = null != l, P = fh(l), S = fh(o), k = fh(d), R = B.useCallback(() => {
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
                T.current && !dh(O.current, t) && (O.current = t, of.flushSync(() => {
                  c(t)
                }))
              })
            }, [f, t, r, S, k]);
            lh(() => {
              !1 === d && O.current.isPositioned && (O.current.isPositioned = !1, c(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [d]);
            const T = B.useRef(!1);
            lh(() => (T.current = !0, () => {
              T.current = !1
            }), []), lh(() => {
              if (_ && (x.current = _), w && (C.current = w), _ && w) {
                if (P.current) return P.current(_, w, R);
                R()
              }
            }, [_, w, R, P, j]);
            const D = B.useMemo(() => ({
                reference: x,
                floating: C,
                setReference: g,
                setFloating: b
              }), [g, b]),
              E = B.useMemo(() => ({
                reference: _,
                floating: w
              }), [_, w]),
              N = B.useMemo(() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!E.floating) return e;
                const t = ch(E.floating, u.x),
                  n = ch(E.floating, u.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...uh(E.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }, [r, a, E.floating, u.x, u.y]);
            return B.useMemo(() => ({
              ...u,
              update: R,
              refs: D,
              elements: E,
              floatingStyles: N
            }), [u, R, D, E, N])
          }({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => function(e, t, r, n) {
              void 0 === n && (n = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: s = "function" == typeof ResizeObserver,
                layoutShift: a = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = n, d = Xp(e), u = o || i ? [...d ? Fp(d) : [], ...t ? Fp(t) : []] : [];
              u.forEach(e => {
                o && e.addEventListener("scroll", r, {
                  passive: !0
                }), i && e.addEventListener("resize", r)
              });
              const c = d && a ? function(e, t) {
                let r, n = null;
                const o = wp(e);

                function i() {
                  var e;
                  clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                }
                return function s(a, l) {
                  void 0 === a && (a = !1), void 0 === l && (l = 1), i();
                  const d = e.getBoundingClientRect(),
                    {
                      left: u,
                      top: c,
                      width: f,
                      height: p
                    } = d;
                  if (a || t(), !f || !p) return;
                  const h = {
                    rootMargin: -Zf(c) + "px " + -Zf(o.clientWidth - (u + f)) + "px " + -Zf(o.clientHeight - (c + p)) + "px " + -Zf(u) + "px",
                    threshold: Uf(0, Hf(1, l)) || 1
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
                    1 !== n || nh(d, e.getBoundingClientRect()) || s(), m = !1
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
              }(d, r) : null;
              let f, p = -1,
                h = null;
              s && (h = new ResizeObserver(e => {
                let [n] = e;
                n && n.target === d && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                  var e;
                  null == (e = h) || e.observe(t)
                })), r()
              }), d && !l && h.observe(d), t && h.observe(t));
              let m = l ? Gp(e) : null;
              return l && function t() {
                const n = Gp(e);
                m && !nh(m, n) && r(), m = n, f = requestAnimationFrame(t)
              }(), r(), () => {
                var e;
                u.forEach(e => {
                  o && e.removeEventListener("scroll", r), i && e.removeEventListener("resize", r)
                }), null == c || c(), null == (e = h) || e.disconnect(), h = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [ph({
              mainAxis: o + O,
              alignmentAxis: s
            }), l && hh({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === c ? mh() : void 0,
              ...T
            }), l && vh({
              ...T
            }), yh({
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
            }), _ && bh({
              element: _,
              padding: a
            }), Vh({
              arrowWidth: C,
              arrowHeight: O
            }), f && gh({
              strategy: "referenceHidden",
              ...T
            })]
          }), [M, L] = Fh(N), A = Tf(h);
          Ff(() => {
            I && A?.()
          }, [I, A]);
          const V = z.arrow?.x,
            F = z.arrow?.y,
            q = 0 !== z.arrow?.centerOffset,
            [X, W] = B.useState();
          return Ff(() => {
            y && W(window.getComputedStyle(y).zIndex)
          }, [y]), (0, j.jsx)("div", {
            ref: D.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...E,
              transform: I ? E.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: X,
              "--radix-popper-transform-origin": [z.transformOrigin?.x, z.transformOrigin?.y].join(" "),
              ...z.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, j.jsx)(Eh, {
              scope: r,
              placedSide: M,
              onArrowChange: w,
              arrowX: V,
              arrowY: F,
              shouldHideArrow: q,
              children: (0, j.jsx)(kf.div, {
                "data-side": M,
                "data-align": L,
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
      Ih.displayName = Dh;
      var zh = "PopperArrow",
        Mh = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Lh = B.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Nh(zh, r), i = Mh[o.placedSide];
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
            children: (0, j.jsx)(wh, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function Ah(e) {
        return null !== e
      }
      Lh.displayName = zh;
      var Vh = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, d] = Fh(r), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [d], c = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let p = "",
            h = "";
          return "bottom" === l ? (p = i ? u : `${c}px`, h = -a + "px") : "top" === l ? (p = i ? u : `${c}px`, h = `${n.floating.height+a}px`) : "right" === l ? (p = -a + "px", h = i ? u : `${f}px`) : "left" === l && (p = `${n.floating.width+a}px`, h = i ? u : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function Fh(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var qh = kh,
        Bh = Th,
        Xh = Ih,
        Wh = Lh,
        Hh = B.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, i] = B.useState(!1);
          Ff(() => i(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? of.createPortal((0, j.jsx)(kf.div, {
            ...n,
            ref: t
          }), s) : null
        });
      Hh.displayName = "Portal";
      var Uh = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = B.useState(), n = B.useRef(null), o = B.useRef(e), i = B.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = function(e, t) {
            return B.useReducer((e, r) => t[e][r] ?? e, e)
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
            const e = Gh(n.current);
            i.current = "mounted" === a ? e : "none"
          }, [a]), Ff(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = i.current,
                s = Gh(t);
              l(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : r && n !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, l]), Ff(() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                s = i => {
                  const s = Gh(n.current).includes(CSS.escape(i.animationName));
                  if (i.target === t && s && (l("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    })
                  }
                },
                a = e => {
                  e.target === t && (i.current = Gh(n.current))
                };
              return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
                r.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
              }
            }
            l("ANIMATION_END")
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: B.useCallback(e => {
              n.current = e ? getComputedStyle(e) : null, r(e)
            }, [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : B.Children.only(r), i = (0, wf.s)(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? B.cloneElement(o, {
          ref: i
        }) : null
      };

      function Gh(e) {
        return e?.animationName || "none"
      }
      Uh.displayName = "Presence";
      var Zh = X[" useInsertionEffect ".trim().toString()] || Ff;

      function $h({
        prop: e,
        defaultProp: t,
        onChange: r = () => {},
        caller: n
      }) {
        const [o, i, s] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [r, n] = B.useState(e), o = B.useRef(r), i = B.useRef(t);
          return Zh(() => {
            i.current = t
          }, [t]), B.useEffect(() => {
            o.current !== r && (i.current?.(r), o.current = r)
          }, [r, o]), [r, n, i]
        }({
          defaultProp: t,
          onChange: r
        }), a = void 0 !== e, l = a ? e : o; {
          const t = B.useRef(void 0 !== e);
          B.useEffect(() => {
            const e = t.current;
            if (e !== a) {
              const t = e ? "controlled" : "uncontrolled",
                r = a ? "controlled" : "uncontrolled";
              console.warn(`${n} is changing from ${t} to ${r}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = a
          }, [a, n])
        }
        const d = B.useCallback(t => {
          if (a) {
            const r = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            r !== e && s.current?.(r)
          } else i(t)
        }, [a, e, i, s]);
        return [l, d]
      }
      Symbol("RADIX:SYNC_STATE");
      var Kh = Object.freeze({
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
        Yh = B.forwardRef((e, t) => (0, j.jsx)(kf.span, {
          ...e,
          ref: t,
          style: {
            ...Kh,
            ...e.style
          }
        }));
      Yh.displayName = "VisuallyHidden";
      var Qh = Yh,
        [Jh, em] = xf("Tooltip", [jh]),
        tm = jh(),
        rm = "TooltipProvider",
        nm = 700,
        om = "tooltip.open",
        [im, sm] = Jh(rm),
        am = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = nm,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, s = B.useRef(!0), a = B.useRef(!1), l = B.useRef(0);
          return B.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, j.jsx)(im, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: B.useCallback(() => {
              window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: B.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, n)
            }, [n]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: B.useCallback(e => {
              a.current = e
            }, []),
            disableHoverableContent: o,
            children: i
          })
        };
      am.displayName = rm;
      var lm = "Tooltip",
        [dm, um] = Jh(lm),
        cm = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
          } = e, l = sm(lm, e.__scopeTooltip), d = tm(t), [u, c] = B.useState(null), f = Xf(), p = B.useRef(0), h = s ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = B.useRef(!1), [y, g] = $h({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(om))) : l.onClose(), i?.(e)
            },
            caller: lm
          }), b = B.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), _ = B.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, v.current = !1, g(!0)
          }, [g]), w = B.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), x = B.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              v.current = !0, g(!0), p.current = 0
            }, m)
          }, [m, g]);
          return B.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, j.jsx)(qh, {
            ...d,
            children: (0, j.jsx)(dm, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: c,
              onTriggerEnter: B.useCallback(() => {
                l.isOpenDelayedRef.current ? x() : _()
              }, [l.isOpenDelayedRef, x, _]),
              onTriggerLeave: B.useCallback(() => {
                h ? w() : (window.clearTimeout(p.current), p.current = 0)
              }, [w, h]),
              onOpen: _,
              onClose: w,
              disableHoverableContent: h,
              children: r
            })
          })
        };
      cm.displayName = lm;
      var fm = "TooltipTrigger",
        pm = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = um(fm, r), i = sm(fm, r), s = tm(r), a = B.useRef(null), l = (0, wf.s)(t, a, o.onTriggerChange), d = B.useRef(!1), u = B.useRef(!1), c = B.useCallback(() => d.current = !1, []);
          return B.useEffect(() => () => document.removeEventListener("pointerup", c), [c]), (0, j.jsx)(Bh, {
            asChild: !0,
            ...s,
            children: (0, j.jsx)(kf.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: _f(e.onPointerMove, e => {
                "touch" !== e.pointerType && (u.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              }),
              onPointerLeave: _f(e.onPointerLeave, () => {
                o.onTriggerLeave(), u.current = !1
              }),
              onPointerDown: _f(e.onPointerDown, () => {
                o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", c, {
                  once: !0
                })
              }),
              onFocus: _f(e.onFocus, () => {
                d.current || o.onOpen()
              }),
              onBlur: _f(e.onBlur, o.onClose),
              onClick: _f(e.onClick, o.onClose)
            })
          })
        });
      pm.displayName = fm;
      var hm = "TooltipPortal",
        [mm, vm] = Jh(hm, {
          forceMount: void 0
        }),
        ym = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = um(hm, t);
          return (0, j.jsx)(mm, {
            scope: t,
            forceMount: r,
            children: (0, j.jsx)(Uh, {
              present: r || i.open,
              children: (0, j.jsx)(Hh, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      ym.displayName = hm;
      var gm = "TooltipContent",
        bm = B.forwardRef((e, t) => {
          const r = vm(gm, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = um(gm, e.__scopeTooltip);
          return (0, j.jsx)(Uh, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, j.jsx)(Om, {
              side: o,
              ...i,
              ref: t
            }) : (0, j.jsx)(_m, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        _m = B.forwardRef((e, t) => {
          const r = um(gm, e.__scopeTooltip),
            n = sm(gm, e.__scopeTooltip),
            o = B.useRef(null),
            i = (0, wf.s)(t, o),
            [s, a] = B.useState(null),
            {
              trigger: l,
              onClose: d
            } = r,
            u = o.current,
            {
              onPointerInTransitChange: c
            } = n,
            f = B.useCallback(() => {
              a(null), c(!1)
            }, [c]),
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
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = l?.contains(t) || u?.contains(t),
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
                        d = s.y,
                        u = a.x,
                        c = a.y;
                      d > n != c > n && r < (u - l) * (n - d) / (c - d) + l && (o = !o)
                    }
                    return o
                  }(r, s);
                n ? f() : o && (f(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, u, s, d, f]), (0, j.jsx)(Om, {
            ...e,
            ref: i
          })
        }),
        [wm, xm] = Jh(lm, {
          isInside: !1
        }),
        Cm = function(e) {
          const t = ({
            children: e
          }) => (0, j.jsx)(j.Fragment, {
            children: e
          });
          return t.displayName = `${e}.Slottable`, t.__radixId = Pf, t
        }("TooltipContent"),
        Om = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
          } = e, l = um(gm, r), d = tm(r), {
            onClose: u
          } = l;
          return B.useEffect(() => (document.addEventListener(om, u), () => document.removeEventListener(om, u)), [u]), B.useEffect(() => {
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
          }, [l.trigger, u]), (0, j.jsx)(If, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, j.jsxs)(Xh, {
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
              children: [(0, j.jsx)(Cm, {
                children: n
              }), (0, j.jsx)(wm, {
                scope: r,
                isInside: !0,
                children: (0, j.jsx)(Qh, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      bm.displayName = gm;
      var jm = "TooltipArrow",
        Pm = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = tm(r);
          return xm(jm, r).isInside ? null : (0, j.jsx)(Wh, {
            ...o,
            ...n,
            ref: t
          })
        });
      Pm.displayName = jm;
      var Sm = am,
        km = cm,
        Rm = pm,
        Tm = ym,
        Dm = bm,
        Em = Pm;
      const Nm = (0, B.createContext)(null);

      function Im() {
        const e = (0, B.useContext)(Nm);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const zm = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [i = !1, s] = (0, $.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, j.jsx)(Sm, {
            delayDuration: t,
            children: (0, j.jsx)(Nm.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, j.jsx)(km, {
                open: i,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        Mm = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, j.jsx)(Rm, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Lm = (0, B.forwardRef)(({
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
            isOpen: d
          } = Im(), u = (0, $.jt)(), c = bf(Dm), f = Qc(d, {
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
            config: lc.stiff,
            immediate: u
          }), p = (0, U.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: i,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, a);
          return f(e => (0, j.jsx)(c, {
            ...p,
            style: e,
            ref: l
          }))
        }),
        Am = (0, B.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, U.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, j.jsx)(Em, {
            ...r,
            ref: t
          })
        }),
        Vm = Tm;

      function Fm(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var qm = B.createContext(void 0);

      function Bm(e) {
        const t = B.useContext(qm);
        return e || t || "ltr"
      }

      function Xm(e) {
        const t = B.useRef({
          value: e,
          previous: e
        });
        return B.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }

      function Wm(e) {
        const t = e + "CollectionProvider",
          [r, n] = xf(t),
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
            } = e, n = B.useRef(null), i = B.useRef(new Map).current;
            return (0, j.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: n,
              children: r
            })
          };
        s.displayName = t;
        const a = e + "CollectionSlot",
          l = Of(a),
          d = B.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = i(a, r), s = (0, wf.s)(t, o.collectionRef);
            return (0, j.jsx)(l, {
              ref: s,
              children: n
            })
          });
        d.displayName = a;
        const u = e + "CollectionItemSlot",
          c = "data-radix-collection-item",
          f = Of(u),
          p = B.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = B.useRef(null), a = (0, wf.s)(t, s), l = i(u, r);
            return B.useEffect(() => (l.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              l.itemMap.delete(s)
            })), (0, j.jsx)(f, {
              [c]: "",
              ref: a,
              children: n
            })
          });
        return p.displayName = u, [{
          Provider: s,
          Slot: d,
          ItemSlot: p
        }, function(t) {
          const r = i(e + "CollectionConsumer", t),
            n = B.useCallback(() => {
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
      var Hm = ["PageUp", "PageDown"],
        Um = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Gm = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Zm = "Slider",
        [$m, Km, Ym] = Wm(Zm),
        [Qm, Jm] = xf(Zm, [Ym]),
        [ev, tv] = Qm(Zm),
        rv = B.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: i = 1,
            orientation: s = "horizontal",
            disabled: a = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: d = [n],
            value: u,
            onValueChange: c = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: h,
            ...m
          } = e, v = B.useRef(new Set), y = B.useRef(0), g = "horizontal" === s ? iv : sv, [b = [], _] = $h({
            prop: u,
            defaultProp: d,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), c(e)
            }
          }), w = B.useRef(b);

          function x(e, t, {
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
              d = Fm(a, [n, o]);
            _((e = []) => {
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
                }(n, l * i)) {
                y.current = n.indexOf(d);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, j.jsx)(ev, {
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
            children: (0, j.jsx)($m.Provider, {
              scope: e.__scopeSlider,
              children: (0, j.jsx)($m.Slot, {
                scope: e.__scopeSlider,
                children: (0, j.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: _f(m.onPointerDown, () => {
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
                    x(e, t)
                  },
                  onSlideMove: a ? void 0 : function(e) {
                    x(e, y.current)
                  },
                  onSlideEnd: a ? void 0 : function() {
                    const e = w.current[y.current];
                    b[y.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !a && x(n, 0, {
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
                      const r = Hm.includes(e.key) || e.shiftKey && Um.includes(e.key) ? 10 : 1,
                        n = y.current;
                      x(b[n] + i * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      rv.displayName = Zm;
      var [nv, ov] = Qm(Zm, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), iv = B.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: i,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: l,
          onStepKeyDown: d,
          ...u
        } = e, [c, f] = B.useState(null), p = (0, wf.s)(t, e => f(e)), h = B.useRef(void 0), m = Bm(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = h.current || c.getBoundingClientRect(),
            o = yv([0, t.width], y ? [r, n] : [n, r]);
          return h.current = t, o(e - t.left)
        }
        return (0, j.jsx)(nv, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, j.jsx)(av, {
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
              const t = Gm[y ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), sv = B.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...d
        } = e, u = B.useRef(null), c = (0, wf.s)(t, u), f = B.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = yv([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, j.jsx)(nv, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, j.jsx)(av, {
            "data-orientation": "vertical",
            ...d,
            ref: c,
            style: {
              ...d.style,
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
              const t = Gm[p ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), av = B.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...d
        } = e, u = tv(Zm, r);
        return (0, j.jsx)(kf.span, {
          ...d,
          ref: t,
          onKeyDown: _f(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : Hm.concat(Um).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: _f(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: _f(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: _f(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), lv = "SliderTrack", dv = B.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = tv(lv, r);
        return (0, j.jsx)(kf.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      dv.displayName = lv;
      var uv = "SliderRange",
        cv = B.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = tv(uv, r), i = ov(uv, r), s = B.useRef(null), a = (0, wf.s)(t, s), l = o.values.length, d = o.values.map(e => vv(e, o.min, o.max)), u = l > 1 ? Math.min(...d) : 0, c = 100 - Math.max(...d);
          return (0, j.jsx)(kf.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: a,
            style: {
              ...e.style,
              [i.startEdge]: u + "%",
              [i.endEdge]: c + "%"
            }
          })
        });
      cv.displayName = uv;
      var fv = "SliderThumb",
        pv = B.forwardRef((e, t) => {
          const r = Km(e.__scopeSlider),
            [n, o] = B.useState(null),
            i = (0, wf.s)(t, e => o(e)),
            s = B.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, j.jsx)(hv, {
            ...e,
            ref: i,
            index: s
          })
        }),
        hv = B.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, s = tv(fv, r), a = ov(fv, r), [l, d] = B.useState(null), u = (0, wf.s)(t, e => d(e)), c = !l || s.form || !!l.closest("form"), f = xh(l), p = s.values[n], h = void 0 === p ? 0 : vv(p, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), v = f?.[a.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - yv([0, 50], [0, n])(t) * r) * r
          }(v, h, a.direction) : 0;
          return B.useEffect(() => {
            if (l) return s.thumbs.add(l), () => {
              s.thumbs.delete(l)
            }
          }, [l, s.thumbs]), (0, j.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${h}% + ${y}px)`
            },
            children: [(0, j.jsx)($m.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, j.jsx)(kf.span, {
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
                onFocus: _f(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), c && (0, j.jsx)(mv, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: p
            }, n)]
          })
        });
      pv.displayName = fv;
      var mv = B.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = B.useRef(null),
          i = (0, wf.s)(o, n),
          s = Xm(t);
        return B.useEffect(() => {
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
        }, [s, t]), (0, j.jsx)(kf.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      });

      function vv(e, t, r) {
        return Fm(100 / (r - t) * (e - t), [0, 100])
      }

      function yv(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      mv.displayName = "RadioBubbleInput";
      var gv = rv,
        bv = dv,
        _v = cv,
        wv = pv,
        xv = "focusScope.autoFocusOnMount",
        Cv = "focusScope.autoFocusOnUnmount",
        Ov = {
          bubbles: !1,
          cancelable: !0
        },
        jv = B.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = B.useState(null), d = Tf(o), u = Tf(i), c = B.useRef(null), f = (0, wf.s)(t, e => l(e)), p = B.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          B.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (p.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? c.current = t : Rv(c.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || Rv(c.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Rv(a)
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
          }, [n, a, p.paused]), B.useEffect(() => {
            if (a) {
              Tv.add(p);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(xv, Ov);
                a.addEventListener(xv, d), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Rv(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(Pv(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Rv(a))
              }
              return () => {
                a.removeEventListener(xv, d), setTimeout(() => {
                  const t = new CustomEvent(Cv, Ov);
                  a.addEventListener(Cv, u), a.dispatchEvent(t), t.defaultPrevented || Rv(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(Cv, u), Tv.remove(p)
                }, 0)
              }
            }
          }, [a, d, u, p]);
          const h = B.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, i] = function(e) {
                  const t = Pv(e);
                  return [Sv(t, e), Sv(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && Rv(i, {
                select: !0
              })) : (e.preventDefault(), r && Rv(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, j.jsx)(kf.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: h
          })
        });

      function Pv(e) {
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

      function Sv(e, t) {
        for (const r of e)
          if (!kv(r, {
              upTo: t
            })) return r
      }

      function kv(e, {
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

      function Rv(e, {
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
      var Tv = function() {
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
      var Ev = 0;

      function Nv() {
        B.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Iv()), document.body.insertAdjacentElement("beforeend", e[1] ?? Iv()), Ev++, () => {
            1 === Ev && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), Ev--
          }
        }, [])
      }

      function Iv() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var zv = r(35328),
        Mv = new WeakMap,
        Lv = new WeakMap,
        Av = {},
        Vv = 0,
        Fv = function(e) {
          return e && (e.host || Fv(e.parentNode))
        },
        qv = function(e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), function(e, t, r, n) {
            var o = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var r = Fv(t);
                return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            Av[r] || (Av[r] = new WeakMap);
            var i = Av[r],
              s = [],
              a = new Set,
              l = new Set(o),
              d = function(e) {
                e && !a.has(e) && (a.add(e), d(e.parentNode))
              };
            o.forEach(d);
            var u = function(e) {
              e && !l.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (a.has(e)) u(e);
                else try {
                  var t = e.getAttribute(n),
                    o = null !== t && "false" !== t,
                    l = (Mv.get(e) || 0) + 1,
                    d = (i.get(e) || 0) + 1;
                  Mv.set(e, l), i.set(e, d), s.push(e), 1 === l && o && Lv.set(e, !0), 1 === d && e.setAttribute(r, "true"), o || e.setAttribute(n, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return u(t), a.clear(), Vv++,
              function() {
                s.forEach(function(e) {
                  var t = Mv.get(e) - 1,
                    o = i.get(e) - 1;
                  Mv.set(e, t), i.set(e, o), t || (Lv.has(e) || e.removeAttribute(n), Lv.delete(e)), o || e.removeAttribute(r)
                }), --Vv || (Mv = new WeakMap, Mv = new WeakMap, Lv = new WeakMap, Av = {})
              }
          }(n, o, r, "aria-hidden")) : function() {
            return null
          }
        },
        Bv = "Dialog",
        [Xv, Wv] = xf(Bv),
        [Hv, Uv] = Xv(Bv),
        Gv = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = B.useRef(null), l = B.useRef(null), [d, u] = $h({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Bv
          });
          return (0, j.jsx)(Hv, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: Xf(),
            titleId: Xf(),
            descriptionId: Xf(),
            open: d,
            onOpenChange: u,
            onOpenToggle: B.useCallback(() => u(e => !e), [u]),
            modal: s,
            children: r
          })
        };
      Gv.displayName = Bv;
      var Zv = "DialogTrigger",
        $v = B.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Uv(Zv, r), i = (0, wf.s)(t, o.triggerRef);
          return (0, j.jsx)(kf.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": my(o.open),
            ...n,
            ref: i,
            onClick: _f(e.onClick, o.onOpenToggle)
          })
        });
      $v.displayName = Zv;
      var Kv = "DialogPortal",
        [Yv, Qv] = Xv(Kv, {
          forceMount: void 0
        }),
        Jv = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Uv(Kv, t);
          return (0, j.jsx)(Yv, {
            scope: t,
            forceMount: r,
            children: B.Children.map(n, e => (0, j.jsx)(Uh, {
              present: r || i.open,
              children: (0, j.jsx)(Hh, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      Jv.displayName = Kv;
      var ey = "DialogOverlay",
        ty = B.forwardRef((e, t) => {
          const r = Qv(ey, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = Uv(ey, e.__scopeDialog);
          return i.modal ? (0, j.jsx)(Uh, {
            present: n || i.open,
            children: (0, j.jsx)(ny, {
              ...o,
              ref: t
            })
          }) : null
        });
      ty.displayName = ey;
      var ry = Of("DialogOverlay.RemoveScroll"),
        ny = B.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Uv(ey, r);
          return (0, j.jsx)(zv.A, {
            as: ry,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, j.jsx)(kf.div, {
              "data-state": my(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        oy = "DialogContent",
        iy = B.forwardRef((e, t) => {
          const r = Qv(oy, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = Uv(oy, e.__scopeDialog);
          return (0, j.jsx)(Uh, {
            present: n || i.open,
            children: i.modal ? (0, j.jsx)(sy, {
              ...o,
              ref: t
            }) : (0, j.jsx)(ay, {
              ...o,
              ref: t
            })
          })
        });
      iy.displayName = oy;
      var sy = B.forwardRef((e, t) => {
          const r = Uv(oy, e.__scopeDialog),
            n = B.useRef(null),
            o = (0, wf.s)(t, r.contentRef, n);
          return B.useEffect(() => {
            const e = n.current;
            if (e) return qv(e)
          }, []), (0, j.jsx)(ly, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: _f(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: _f(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: _f(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        ay = B.forwardRef((e, t) => {
          const r = Uv(oy, e.__scopeDialog),
            n = B.useRef(!1),
            o = B.useRef(!1);
          return (0, j.jsx)(ly, {
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
        ly = B.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = Uv(oy, r), l = B.useRef(null), d = (0, wf.s)(t, l);
          return Nv(), (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(jv, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, j.jsx)(If, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": my(a.open),
                ...s,
                ref: d,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, j.jsxs)(j.Fragment, {
              children: [(0, j.jsx)(by, {
                titleId: a.titleId
              }), (0, j.jsx)(_y, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        dy = "DialogTitle",
        uy = B.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Uv(dy, r);
          return (0, j.jsx)(kf.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      uy.displayName = dy;
      var cy = "DialogDescription",
        fy = B.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Uv(cy, r);
          return (0, j.jsx)(kf.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      fy.displayName = cy;
      var py = "DialogClose",
        hy = B.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Uv(py, r);
          return (0, j.jsx)(kf.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: _f(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function my(e) {
        return e ? "open" : "closed"
      }
      hy.displayName = py;
      var vy = "DialogTitleWarning",
        [yy, gy] = function(e, t) {
          const r = B.createContext(t),
            n = e => {
              const {
                children: t,
                ...n
              } = e, o = B.useMemo(() => n, Object.values(n));
              return (0, j.jsx)(r.Provider, {
                value: o,
                children: t
              })
            };
          return n.displayName = e + "Provider", [n, function(n) {
            const o = B.useContext(r);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${n}\` must be used within \`${e}\``)
          }]
        }(vy, {
          contentName: oy,
          titleName: dy,
          docsSlug: "dialog"
        }),
        by = ({
          titleId: e
        }) => {
          const t = gy(vy),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return B.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        _y = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${gy("DialogDescriptionWarning").contentName}}.`;
          return B.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        wy = Gv,
        xy = $v,
        Cy = Jv,
        Oy = ty,
        jy = iy,
        Py = uy,
        Sy = fy,
        ky = hy;
      const Ry = (0, B.createContext)({
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
        Ty = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: i = 300,
          zoomLevelStep: s = 100,
          clickAction: a = "close",
          doubleTapAction: l,
          tapAction: d,
          hideTrigger: u = !0,
          ...c
        }) => {
          const f = (0, Y.Ym)(),
            p = (0, $.rl)(),
            h = (0, B.useRef)(null),
            m = (0, B.useRef)(null),
            v = (0, B.useRef)(null),
            y = (0, B.useRef)(null),
            g = (0, B.useRef)(null),
            b = (0, B.useRef)(null),
            _ = (0, B.useRef)(null),
            w = (0, B.useRef)(null),
            x = (0, B.useRef)(null),
            C = (0, B.useRef)(null),
            O = (0, B.useRef)(null),
            P = (0, B.useRef)(null),
            S = (0, B.useRef)(null),
            k = (0, B.useRef)(null),
            R = (0, B.useRef)(null),
            T = (0, B.useRef)(null),
            D = (0, B.useRef)(null),
            E = (0, B.useRef)(null),
            N = (0, B.useRef)(null),
            [I = !1, z] = (0, $.ic)({
              prop: t || n,
              onChange: r
            }),
            M = (0, B.useRef)(null);
          return M.current || (M.current = new vl({
            zoomLevelOptions: {
              max: i,
              min: o,
              step: s
            },
            actionOptions: {
              click: a,
              tap: d || (p ? "toggle-controls" : "close"),
              doubleTap: l || (p ? "zoom" : "none")
            }
          })), (0, j.jsx)(ol, {
            messages: il,
            locale: f,
            children: (0, j.jsx)(Ry.Provider, {
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
                zoomRef: k,
                zoomInRef: R,
                zoomSliderRef: T,
                zoomOutRef: D,
                resetRef: E,
                downloadRef: N,
                open: I,
                setOpen: z,
                altText: e,
                hideTrigger: u,
                slide: M.current
              },
              children: (0, j.jsx)(Ey, {
                ...c
              })
            })
          })
        },
        Dy = (0, B.createContext)({
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
        Ey = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, B.useContext)(Ry), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = cs(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: i,
              triggerRef: s,
              triggerBorderRef: a,
              thumbnailRef: l,
              containerRef: d,
              zoomPanRef: u,
              placeholderRef: c,
              imageRef: f
            } = (0, B.useContext)(Ry), p = (0, B.useRef)(null);
            p.current || (p.current = is.timeline({
              defaults: Qa
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), is.set([c.current, f.current], {
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
                }), is.set([f.current], {
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
                }), p.current.to([u.current], {
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
                }), n && p.current.to([s.current, a.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([c.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  borderRadius: t.opener.placeholderRadius,
                  duration: 0
                }), p.current.fromTo([d.current], {
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
                  [el]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [el]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await ba(f.current), t.closing || (is.set([f.current], {
                  visibility: "visible",
                  ...Ja
                }), is.set([c.current], {
                  visibility: "hidden",
                  ...Ja
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
            update: i,
            zoomIn: s,
            zoomOut: a,
            zoomTo: l,
            resetZoom: d,
            toggleControls: u
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = cs(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: s,
              placeholderRef: a
            } = (0, B.useContext)(Ry), l = t(async e => {
              r.zoomTo(e), is.set([o.current], {
                ...r.getCurrentTransform(),
                ...Ja
              })
            }), d = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), is.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ja
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), is.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ja
              })
            }), c = t(async () => {
              r.zoomAndPanToInitial(), is.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ja
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              is.to([i.current], {
                opacity: e,
                [el]: t,
                ...Ja
              })
            }), p = t(async () => {
              is.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ja
              })
            }), h = (0, B.useCallback)(() => {
              n.current && o.current && (is.set([o.current], {
                ...r.getCurrentTransform(),
                ...Ja
              }), is.set([n.current, a.current], {
                ...r.getUpdatedContentSize(),
                ...Ja
              }), is.set([s.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, B.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", h), window.addEventListener("resize", r.resize.bind(r)), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), r.removeEventListener("resize", h), window.removeEventListener("resize", r.resize.bind(r))
            }), []), {
              zoomIn: d,
              zoomOut: u,
              zoomTo: l,
              resetZoom: c,
              toggleControls: f,
              update: p
            }
          })({
            close: o
          }), c = (0, U.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, j.jsx)(Dy.Provider, {
            value: {
              update: i,
              openAnim: n,
              close: o,
              zoomIn: s,
              zoomOut: a,
              zoomTo: l,
              resetZoom: d,
              toggleControls: u,
              onOpenChange: r
            },
            children: (0, j.jsx)(wy, {
              ...c
            })
          })
        },
        Ny = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, nl.A)(),
            {
              triggerRef: i,
              triggerBorderRef: s,
              altText: a
            } = (0, B.useContext)(Ry),
            l = (0, $.UP)(i, n),
            d = (0, U.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(bl.OpenButtonLabel, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, j.jsx)(xy, {
            ref: l,
            ...d,
            children: (0, j.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, j.jsx)(K.xV, {
                children: t
              })
            })
          })
        }),
        Iy = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, B.useContext)(Ry), i = (0, $.UP)(o, n), s = (0, U.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? K.DX : "img";
          return (0, j.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        zy = (0, B.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, B.useContext)(Ry), o = (0, $.UP)(n, r), i = (0, U.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? K.DX : le.Maximize2;
          return (0, j.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        My = ({
          ...e
        }) => (0, j.jsx)(Cy, {
          ...e
        }),
        Ly = (0, B.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, B.useContext)(Ry), o = (0, $.UP)(n, r), i = (0, U.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, j.jsx)(Oy, {
            ref: o,
            ...i
          })
        }),
        Ay = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, B.useContext)(Dy), {
            contentRef: i,
            altText: s,
            triggerRef: a
          } = (0, B.useContext)(Ry), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, B.useContext)(Ry), [t, r] = (0, B.useState)(e.getCursor()), n = (0, B.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, B.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), d = [yl.xW.tokens, yl.xW.typography, yl.xW.grid, gl("dark")].join(" ");
          const u = (0, $.UP)(i, n),
            c = (0, U.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, a),
              className: (0, ae.$)("foundry_1a74xwb9", d),
              style: {
                cursor: l
              }
            });
          return (0, j.jsxs)(jy, {
            ref: u,
            ...c,
            children: [(0, j.jsx)(K.s6, {
              children: (0, j.jsx)(Py, {
                children: s
              })
            }), t]
          })
        }),
        Vy = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, B.useContext)(Ry);
          (() => {
            const {
              contextSafe: e
            } = cs(), {
              toggleControls: t
            } = (0, B.useContext)(Dy), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: i,
              slide: s
            } = (0, B.useContext)(Ry), a = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (is.to([n.current], {
                ...s.getCurrentTransform(),
                ...Ja
              }), is.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Ja
              }), is.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...Ja
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || is.to([n.current], {
                ...s.getCurrentTransform(),
                ...Ja
              }))
            }), d = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (is.to([n.current], {
                ...s.getCurrentTransform(),
                ...Ja
              }), is.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Ja
              }), is.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...Ja
              })))
            }), u = (0, B.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, $.iQ)({
              ref: i,
              onFocusIn: u
            }), ga({
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
          const i = (0, $.UP)(o, n),
            s = (0, U.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, j.jsx)("div", {
            ref: i,
            ...s,
            children: (0, j.jsxs)(Fy, {
              children: [(0, j.jsx)(qy, {}), t]
            })
          })
        }),
        Fy = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, B.useContext)(Ry), i = (0, $.UP)(o, n), s = (0, U.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? K.DX : "div";
          return (0, j.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        qy = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, B.useContext)(Ry), i = (0, $.UP)(o, n), s = (0, U.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? K.DX : "img";
          return (0, j.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        By = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, B.useContext)(Ry), i = (0, $.UP)(o, n), s = (0, U.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? K.DX : "img";
          return (0, j.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Xy = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, B.useContext)(Ry), i = (0, $.UP)(o, n), s = (0, U.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? K.DX : "p";
          return (0, j.jsx)(Sy, {
            asChild: !0,
            children: (0, j.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Wy = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, B.useContext)(Ry);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, B.useContext)(Dy);
            Xa(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Xa(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), Xa("r", n, {
              enabled: e,
              preventDefault: !0
            }), Xa("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = (0, $.UP)(o, n),
            s = (0, U.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? K.DX : "div";
          return (0, j.jsx)(Fa, {
            children: (0, j.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Hy = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, j.jsx)(j.Fragment, {
            children: n
          });
          const i = (0, U.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, j.jsxs)(zm, {
            delayDuration: 0,
            children: [(0, j.jsx)(Mm, {
              children: n
            }), (0, j.jsxs)(Lm, {
              ...i,
              children: [(0, j.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, j.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, j.jsx)(Am, {})]
            })]
          })
        },
        Uy = (0, B.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, U.v6)(e, {
            isInline: !0
          });
          return (0, j.jsx)(ql, {
            ref: t,
            ...r
          })
        }),
        Gy = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, i) {
          const s = (0, nl.A)(),
            {
              zoomRef: a
            } = (0, B.useContext)(Ry),
            {
              canZoomIn: l,
              zoomIn: d,
              canZoomOut: u,
              zoomOut: c,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: h,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, B.useContext)(Ry), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, B.useContext)(Dy), [o, i] = (0, B.useState)(!1), [s, a] = (0, B.useState)(!1), [l, d] = (0, B.useState)(0), [u, c] = (0, B.useState)(0), [f, p] = (0, B.useState)(0), h = (0, B.useCallback)(() => {
                i(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), d(Math.ceil(100 * e.currZoomLevel)), c(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
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
                canZoomOut: s,
                zoomProgress: l,
                minZoomLevel: u,
                maxZoomLevel: f
              }
            })(),
            v = (0, $.UP)(a, i),
            y = (0, U.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? K.DX : "div";
          return (0, j.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, j.jsx)(Hy, {
              side: "left",
              enabled: r,
              content: s.formatMessage(bl.ZoomInButtonLabel),
              metadata: s.formatMessage(bl.ZoomInButtonTooltip, {
                shortcut: (0, j.jsx)(Uy, {
                  shortcut: "+"
                })
              }),
              children: (0, j.jsx)(Re, {
                label: s.formatMessage(bl.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Ya({
                  position: "top"
                }),
                onPress: d,
                isDisabled: !l
              })
            }), (0, j.jsxs)(gv, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, j.jsx)(bv, {
                className: "foundry_1a74xwbu",
                children: (0, j.jsx)(_v, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, j.jsx)(Hy, {
                side: "left",
                enabled: r,
                content: s.formatMessage(bl.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, j.jsx)(wv, {
                  className: "foundry_1a74xwbw",
                  children: (0, j.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, j.jsx)(Hy, {
              side: "left",
              enabled: r,
              content: s.formatMessage(bl.ZoomOutButtonLabel),
              metadata: s.formatMessage(bl.ZoomOutButtonTooltip, {
                shortcut: (0, j.jsx)(Uy, {
                  shortcut: "-"
                })
              }),
              children: (0, j.jsx)(Re, {
                label: s.formatMessage(bl.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Ya({
                  position: "bottom"
                }),
                onPress: c,
                isDisabled: !u
              })
            }), (0, j.jsx)(K.xV, {
              children: n
            })]
          })
        }),
        Zy = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const i = (0, nl.A)(),
            {
              closeRef: s
            } = (0, B.useContext)(Ry),
            a = (0, $.UP)(s, o),
            l = (0, U.v6)(n, {
              "data-testid": e,
              className: Ka({
                styled: !t
              })
            }),
            d = t ? (0, j.jsx)(K.DX, {
              ref: a,
              ...l
            }) : (0, j.jsx)(Re, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: i.formatMessage(bl.CloseButtonLabel)
            });
          return (0, j.jsx)(Hy, {
            side: "right",
            enabled: r,
            content: i.formatMessage(bl.CloseButtonLabel),
            metadata: i.formatMessage(bl.CloseButtonTooltip, {
              shortcut: (0, j.jsx)(Uy, {
                shortcut: "Esc"
              })
            }),
            children: (0, j.jsx)(ky, {
              asChild: !0,
              children: d
            })
          })
        }),
        $y = (0, B.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, nl.A)(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, B.useContext)(Ry), {
                contextSafe: r
              } = cs(), {
                resetZoom: n
              } = (0, B.useContext)(Dy), [o, i] = (0, B.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                is.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Ja
                })
              }), a = (0, B.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                i(t), s(t)
              }, [i]);
              return (0, B.useEffect)(() => (e.addEventListener("zoom", a), () => {
                e.removeEventListener("zoom", a)
              }), [a]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, B.useContext)(Ry),
            a = (0, $.UP)(s, n),
            l = (0, U.v6)(r, i, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, j.jsx)(Hy, {
            side: "left",
            enabled: t,
            content: o.formatMessage(bl.ResetZoomButtonLabel),
            metadata: o.formatMessage(bl.ResetZoomButtonTooltip, {
              shortcut: (0, j.jsx)(Uy, {
                shortcut: "R"
              })
            }),
            children: (0, j.jsx)(Re, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(bl.ResetZoomButtonLabel)
            })
          })
        }),
        Ky = (0, B.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, nl.A)(),
            {
              downloadRef: i,
              imageRef: s
            } = (0, B.useContext)(Ry),
            a = (0, $.UP)(i, n),
            l = (0, U.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, j.jsx)(Hy, {
            side: "left",
            enabled: t,
            content: o.formatMessage(bl.DownloadButtonTooltip),
            children: (0, j.jsx)(Re, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(bl.DownloadButtonTooltip),
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
        Yy = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Qy = r(13258);

      function Jy(e) {
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

      function eg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eg(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Jy(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function rg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ng = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        og = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tg(tg({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) ng(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rg(e.variantClassNames, e => rg(e, e => e.split(" ")[0]))
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
      const ig = (0, B.createContext)(null);

      function sg() {
        const e = (0, B.useContext)(ig);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const ag = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...s
        }, a) => {
          const l = (0, U.v6)({
              className: og({
                status: i
              }),
              "data-testid": t
            }, s),
            d = r ? K.DX : "div";
          return (0, j.jsx)(ig.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: i,
              ...s
            },
            children: (0, j.jsx)(d, {
              ...l,
              ref: a,
              children: e
            })
          })
        }),
        lg = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = sg(), i = (0, U.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: le.Check,
            invalid: le.X,
            neutral: le.TriangleAlert
          }, a = t ? K.DX : s[o];
          return (0, j.jsx)(a, {
            ref: n,
            ...i
          })
        }),
        dg = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: s
          } = sg(), a = (0, U.v6)({
            "data-testid": t,
            id: s || i
          }, n), l = r ? K.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });
      var ug = "ScrollArea",
        [cg, fg] = xf(ug),
        [pg, hg] = cg(ug),
        mg = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...s
          } = e, [a, l] = B.useState(null), [d, u] = B.useState(null), [c, f] = B.useState(null), [p, h] = B.useState(null), [m, v] = B.useState(null), [y, g] = B.useState(0), [b, _] = B.useState(0), [w, x] = B.useState(!1), [C, O] = B.useState(!1), P = (0, wf.s)(t, e => l(e)), S = Bm(o);
          return (0, j.jsx)(pg, {
            scope: r,
            type: n,
            dir: S,
            scrollHideDelay: i,
            scrollArea: a,
            viewport: d,
            onViewportChange: u,
            content: c,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: w,
            onScrollbarXEnabledChange: x,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: O,
            onCornerWidthChange: g,
            onCornerHeightChange: _,
            children: (0, j.jsx)(kf.div, {
              dir: S,
              ...s,
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
      mg.displayName = ug;
      var vg = "ScrollAreaViewport",
        yg = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, s = hg(vg, r), a = B.useRef(null), l = (0, wf.s)(t, a, s.onViewportChange);
          return (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, j.jsx)(kf.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, j.jsx)("div", {
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
      yg.displayName = vg;
      var gg = "ScrollAreaScrollbar",
        bg = B.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = hg(gg, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: s
          } = o, a = "horizontal" === e.orientation;
          return B.useEffect(() => (a ? i(!0) : s(!0), () => {
            a ? i(!1) : s(!1)
          }), [a, i, s]), "hover" === o.type ? (0, j.jsx)(_g, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, j.jsx)(wg, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, j.jsx)(xg, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, j.jsx)(Cg, {
            ...n,
            ref: t
          }) : null
        });
      bg.displayName = gg;
      var _g = B.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = hg(gg, e.__scopeScrollArea), [i, s] = B.useState(!1);
          return B.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, j.jsx)(Uh, {
            present: r || i,
            children: (0, j.jsx)(xg, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        wg = B.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = hg(gg, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = Bg(() => l("SCROLL_END"), 100), [a, l] = (d = {
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
          }, B.useReducer((e, t) => d[e][t] ?? e, "hidden"));
          var d;
          return B.useEffect(() => {
            if ("idle" === a) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [a, o.scrollHideDelay, l]), B.useEffect(() => {
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
          }, [o.viewport, i, l, s]), (0, j.jsx)(Uh, {
            present: r || "hidden" !== a,
            children: (0, j.jsx)(Cg, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: _f(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: _f(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        xg = B.forwardRef((e, t) => {
          const r = hg(gg, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, s] = B.useState(!1),
            a = "horizontal" === e.orientation,
            l = Bg(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(a ? e : t)
              }
            }, 10);
          return Xg(r.viewport, l), Xg(r.content, l), (0, j.jsx)(Uh, {
            present: n || i,
            children: (0, j.jsx)(Cg, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Cg = B.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = hg(gg, e.__scopeScrollArea), i = B.useRef(null), s = B.useRef(0), [a, l] = B.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = Mg(a.viewport, a.content), u = {
            ...n,
            sizes: a,
            onSizesChange: l,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function c(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = Lg(r),
                i = t || o / 2,
                s = o - i,
                a = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                d = r.content - r.viewport;
              return Vg([a, l], "ltr" === n ? [0, d] : [-1 * d, 0])(e)
            }(e, s.current, a, t)
          }
          return "horizontal" === r ? (0, j.jsx)(Og, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Ag(o.viewport.scrollLeft, a, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = c(e, o.dir))
            }
          }) : "vertical" === r ? (0, j.jsx)(jg, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Ag(o.viewport.scrollTop, a);
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
        Og = B.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = hg(gg, e.__scopeScrollArea), [s, a] = B.useState(), l = B.useRef(null), d = (0, wf.s)(t, l, i.onScrollbarXChange);
          return B.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, j.jsx)(kg, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Lg(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Fg(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: zg(s.paddingLeft),
                  paddingEnd: zg(s.paddingRight)
                }
              })
            }
          })
        }),
        jg = B.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = hg(gg, e.__scopeScrollArea), [s, a] = B.useState(), l = B.useRef(null), d = (0, wf.s)(t, l, i.onScrollbarYChange);
          return B.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, j.jsx)(kg, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Lg(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Fg(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: zg(s.paddingTop),
                  paddingEnd: zg(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Pg, Sg] = cg(gg),
        kg = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: s,
            onThumbPointerDown: a,
            onThumbPositionChange: l,
            onDragScroll: d,
            onWheelScroll: u,
            onResize: c,
            ...f
          } = e, p = hg(gg, r), [h, m] = B.useState(null), v = (0, wf.s)(t, e => m(e)), y = B.useRef(null), g = B.useRef(""), b = p.viewport, _ = n.content - n.viewport, w = Tf(u), x = Tf(l), C = Bg(c, 10);

          function O(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              d({
                x: t,
                y: r
              })
            }
          }
          return B.useEffect(() => {
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
          }, [b, h, _, w]), B.useEffect(x, [n, x]), Xg(h, C), Xg(p.content, C), (0, j.jsx)(Pg, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: Tf(i),
            onThumbPointerUp: Tf(s),
            onThumbPositionChange: x,
            onThumbPointerDown: Tf(a),
            children: (0, j.jsx)(kf.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: _f(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), O(e))
              }),
              onPointerMove: _f(e.onPointerMove, O),
              onPointerUp: _f(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        Rg = "ScrollAreaThumb",
        Tg = B.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Sg(Rg, e.__scopeScrollArea);
          return (0, j.jsx)(Uh, {
            present: r || o.hasThumb,
            children: (0, j.jsx)(Dg, {
              ref: t,
              ...n
            })
          })
        }),
        Dg = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = hg(Rg, r), s = Sg(Rg, r), {
            onThumbPositionChange: a
          } = s, l = (0, wf.s)(t, e => s.onThumbChange(e)), d = B.useRef(void 0), u = Bg(() => {
            d.current && (d.current(), d.current = void 0)
          }, 100);
          return B.useEffect(() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (u(), !d.current) {
                  const t = qg(e, a);
                  d.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [i.viewport, u, a]), (0, j.jsx)(kf.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: _f(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: _f(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      Tg.displayName = Rg;
      var Eg = "ScrollAreaCorner",
        Ng = B.forwardRef((e, t) => {
          const r = hg(Eg, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, j.jsx)(Ig, {
            ...e,
            ref: t
          }) : null
        });
      Ng.displayName = Eg;
      var Ig = B.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = hg(Eg, r), [i, s] = B.useState(0), [a, l] = B.useState(0), d = Boolean(i && a);
        return Xg(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), Xg(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), d ? (0, j.jsx)(kf.div, {
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

      function zg(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Mg(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Lg(e) {
        const t = Mg(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Ag(e, t, r = "ltr") {
        const n = Lg(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - n,
          l = Fm(e, "ltr" === r ? [0, s] : [-1 * s, 0]);
        return Vg([0, s], [0, a])(l)
      }

      function Vg(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Fg(e, t) {
        return e > 0 && e < t
      }
      var qg = (e, t = () => {}) => {
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

      function Bg(e, t) {
        const r = Tf(e),
          n = B.useRef(0);
        return B.useEffect(() => () => window.clearTimeout(n.current), []), B.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Xg(e, t) {
        const r = Tf(t);
        Ff(() => {
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
      var Wg = mg,
        Hg = yg,
        Ug = bg,
        Gg = Tg,
        Zg = Ng,
        $g = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Kg = [" ", "Enter"],
        Yg = "Select",
        [Qg, Jg, eb] = Wm(Yg),
        [tb, rb] = xf(Yg, [eb, jh]),
        nb = jh(),
        [ob, ib] = tb(Yg),
        [sb, ab] = tb(Yg),
        lb = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            value: s,
            defaultValue: a,
            onValueChange: l,
            dir: d,
            name: u,
            autoComplete: c,
            disabled: f,
            required: p,
            form: h
          } = e, m = nb(t), [v, y] = B.useState(null), [g, b] = B.useState(null), [_, w] = B.useState(!1), x = Bm(d), [C, O] = $h({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Yg
          }), [P, S] = $h({
            prop: s,
            defaultProp: a,
            onChange: l,
            caller: Yg
          }), k = B.useRef(null), R = !v || h || !!v.closest("form"), [T, D] = B.useState(new Set), E = Array.from(T).map(e => e.props.value).join(";");
          return (0, j.jsx)(qh, {
            ...m,
            children: (0, j.jsxs)(ob, {
              required: p,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: _,
              onValueNodeHasChildrenChange: w,
              contentId: Xf(),
              value: P,
              onValueChange: S,
              open: C,
              onOpenChange: O,
              dir: x,
              triggerPointerDownPosRef: k,
              disabled: f,
              children: [(0, j.jsx)(Qg.Provider, {
                scope: t,
                children: (0, j.jsx)(sb, {
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
              }), R ? (0, j.jsxs)(Xb, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: u,
                autoComplete: c,
                value: P,
                onChange: e => S(e.target.value),
                disabled: f,
                form: h,
                children: [void 0 === P ? (0, j.jsx)("option", {
                  value: ""
                }) : null, Array.from(T)]
              }, E) : null]
            })
          })
        };
      lb.displayName = Yg;
      var db = "SelectTrigger",
        ub = B.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = nb(r), s = ib(db, r), a = s.disabled || n, l = (0, wf.s)(t, s.onTriggerChange), d = Jg(r), u = B.useRef("touch"), [c, f, p] = Hb(e => {
            const t = d().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Ub(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), h = e => {
            a || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, j.jsx)(Bh, {
            asChild: !0,
            ...i,
            children: (0, j.jsx)(kf.button, {
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
              "data-placeholder": Wb(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: _f(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== u.current && h(e)
              }),
              onPointerDown: _f(o.onPointerDown, e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: _f(o.onKeyDown, e => {
                const t = "" !== c.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || $g.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      ub.displayName = db;
      var cb = "SelectValue",
        fb = B.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = ib(cb, r), {
            onValueNodeHasChildrenChange: d
          } = l, u = void 0 !== i, c = (0, wf.s)(t, l.onValueNodeChange);
          return Ff(() => {
            d(u)
          }, [d, u]), (0, j.jsx)(kf.span, {
            ...a,
            ref: c,
            style: {
              pointerEvents: "none"
            },
            children: Wb(l.value) ? (0, j.jsx)(j.Fragment, {
              children: s
            }) : i
          })
        });
      fb.displayName = cb;
      var pb = B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, j.jsx)(kf.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      pb.displayName = "SelectIcon";
      var hb = e => (0, j.jsx)(Hh, {
        asChild: !0,
        ...e
      });
      hb.displayName = "SelectPortal";
      var mb = "SelectContent",
        vb = B.forwardRef((e, t) => {
          const r = ib(mb, e.__scopeSelect),
            [n, o] = B.useState();
          if (Ff(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? of.createPortal((0, j.jsx)(gb, {
              scope: e.__scopeSelect,
              children: (0, j.jsx)(Qg.Slot, {
                scope: e.__scopeSelect,
                children: (0, j.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, j.jsx)(wb, {
            ...e,
            ref: t
          })
        });
      vb.displayName = mb;
      var yb = 10,
        [gb, bb] = tb(mb),
        _b = Of("SelectContent.RemoveScroll"),
        wb = B.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            side: a,
            sideOffset: l,
            align: d,
            alignOffset: u,
            arrowPadding: c,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = ib(mb, r), [b, _] = B.useState(null), [w, x] = B.useState(null), C = (0, wf.s)(t, e => _(e)), [O, P] = B.useState(null), [S, k] = B.useState(null), R = Jg(r), [T, D] = B.useState(!1), E = B.useRef(!1);
          B.useEffect(() => {
            if (b) return qv(b)
          }, [b]), Nv();
          const N = B.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && w && (w.scrollTop = 0), r === n && w && (w.scrollTop = w.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [R, w]),
            I = B.useCallback(() => N([O, b]), [N, O, b]);
          B.useEffect(() => {
            T && I()
          }, [T, I]);
          const {
            onOpenChange: z,
            triggerPointerDownPosRef: M
          } = g;
          B.useEffect(() => {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || z(!1), document.removeEventListener("pointermove", t), M.current = null
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
          }, [b, z, M]), B.useEffect(() => {
            const e = () => z(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [z]);
          const [L, A] = Hb(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Ub(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), V = B.useCallback((e, t, r) => {
            const n = !E.current && !r;
            (void 0 !== g.value && g.value === t || n) && (P(e), n && (E.current = !0))
          }, [g.value]), F = B.useCallback(() => b?.focus(), [b]), q = B.useCallback((e, t, r) => {
            const n = !E.current && !r;
            (void 0 !== g.value && g.value === t || n) && k(e)
          }, [g.value]), X = "popper" === n ? Cb : xb, W = X === Cb ? {
            side: a,
            sideOffset: l,
            align: d,
            alignOffset: u,
            arrowPadding: c,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v
          } : {};
          return (0, j.jsx)(gb, {
            scope: r,
            content: b,
            viewport: w,
            onViewportChange: x,
            itemRefCallback: V,
            selectedItem: O,
            onItemLeave: F,
            itemTextRefCallback: q,
            focusSelectedItem: I,
            selectedItemText: S,
            position: n,
            isPositioned: T,
            searchRef: L,
            children: (0, j.jsx)(zv.A, {
              as: _b,
              allowPinchZoom: !0,
              children: (0, j.jsx)(jv, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: _f(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, j.jsx)(If, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, j.jsx)(X, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...W,
                    onPlaced: () => D(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: _f(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || A(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter(e => !e.disabled);
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
      wb.displayName = "SelectContentImpl";
      var xb = B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = ib(mb, r), s = bb(mb, r), [a, l] = B.useState(null), [d, u] = B.useState(null), c = (0, wf.s)(t, e => u(e)), f = Jg(r), p = B.useRef(!1), h = B.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = s, b = B.useCallback(() => {
          if (i.trigger && i.valueNode && a && d && m && v && y) {
            const e = i.trigger.getBoundingClientRect(),
              t = d.getBoundingClientRect(),
              r = i.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const n = o.left - t.left,
                i = r.left - n,
                s = e.left - i,
                l = e.width + s,
                d = Math.max(l, t.width),
                u = window.innerWidth - yb,
                c = Fm(i, [yb, Math.max(yb, u - d)]);
              a.style.minWidth = l + "px", a.style.left = c + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - i,
                l = e.width + s,
                d = Math.max(l, t.width),
                u = window.innerWidth - yb,
                c = Fm(i, [yb, Math.max(yb, u - d)]);
              a.style.minWidth = l + "px", a.style.right = c + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * yb,
              u = m.scrollHeight,
              c = window.getComputedStyle(d),
              h = parseInt(c.borderTopWidth, 10),
              g = parseInt(c.paddingTop, 10),
              b = parseInt(c.borderBottomWidth, 10),
              _ = h + g + u + parseInt(c.paddingBottom, 10) + b,
              w = Math.min(5 * v.offsetHeight, _),
              x = window.getComputedStyle(m),
              C = parseInt(x.paddingTop, 10),
              O = parseInt(x.paddingBottom, 10),
              j = e.top + e.height / 2 - yb,
              P = l - j,
              S = v.offsetHeight / 2,
              k = h + g + (v.offsetTop + S),
              R = _ - k;
            if (k <= j) {
              const e = s.length > 0 && v === s[s.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = d.clientHeight - m.offsetTop - m.offsetHeight,
                r = k + Math.max(P, S + (e ? O : 0) + t + b);
              a.style.height = r + "px"
            } else {
              const e = s.length > 0 && v === s[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(j, h + m.offsetTop + (e ? C : 0) + S) + R;
              a.style.height = t + "px", m.scrollTop = k - j + m.offsetTop
            }
            a.style.margin = `${yb}px 0`, a.style.minHeight = w + "px", a.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, i.trigger, i.valueNode, a, d, m, v, y, i.dir, n]);
        Ff(() => b(), [b]);
        const [_, w] = B.useState();
        Ff(() => {
          d && w(window.getComputedStyle(d).zIndex)
        }, [d]);
        const x = B.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, j.jsx)(Ob, {
          scope: r,
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
            children: (0, j.jsx)(kf.div, {
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
      xb.displayName = "SelectItemAlignedPosition";
      var Cb = B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = yb,
          ...i
        } = e, s = nb(r);
        return (0, j.jsx)(Xh, {
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
      Cb.displayName = "SelectPopperPosition";
      var [Ob, jb] = tb(mb, {}), Pb = "SelectViewport", Sb = B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = bb(Pb, r), s = jb(Pb, r), a = (0, wf.s)(t, i.onViewportChange), l = B.useRef(0);
        return (0, j.jsxs)(j.Fragment, {
          children: [(0, j.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, j.jsx)(Qg.Slot, {
            scope: r,
            children: (0, j.jsx)(kf.div, {
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
              onScroll: _f(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * yb,
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
      Sb.displayName = Pb;
      var kb = "SelectGroup",
        [Rb, Tb] = tb(kb);
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Xf();
        return (0, j.jsx)(Rb, {
          scope: r,
          id: o,
          children: (0, j.jsx)(kf.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = kb;
      var Db = "SelectLabel";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Tb(Db, r);
        return (0, j.jsx)(kf.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Db;
      var Eb = "SelectItem",
        [Nb, Ib] = tb(Eb),
        zb = B.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...s
          } = e, a = ib(Eb, r), l = bb(Eb, r), d = a.value === n, [u, c] = B.useState(i ?? ""), [f, p] = B.useState(!1), h = (0, wf.s)(t, e => l.itemRefCallback?.(e, n, o)), m = Xf(), v = B.useRef("touch"), y = () => {
            o || (a.onValueChange(n), a.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, j.jsx)(Nb, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: d,
            onItemTextChange: B.useCallback(e => {
              c(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, j.jsx)(Qg.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, j.jsx)(kf.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": d && f,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: h,
                onFocus: _f(s.onFocus, () => p(!0)),
                onBlur: _f(s.onBlur, () => p(!1)),
                onClick: _f(s.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: _f(s.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: _f(s.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: _f(s.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: _f(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: _f(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (Kg.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      zb.displayName = Eb;
      var Mb = "SelectItemText",
        Lb = B.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, s = ib(Mb, r), a = bb(Mb, r), l = Ib(Mb, r), d = ab(Mb, r), [u, c] = B.useState(null), f = (0, wf.s)(t, e => c(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), p = u?.textContent, h = B.useMemo(() => (0, j.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: p
          }, l.value), [l.disabled, l.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = d;
          return Ff(() => (m(h), () => v(h)), [m, v, h]), (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(kf.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? of.createPortal(i.children, s.valueNode) : null]
          })
        });
      Lb.displayName = Mb;
      var Ab = "SelectItemIndicator";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Ib(Ab, r).isSelected ? (0, j.jsx)(kf.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = Ab;
      var Vb = "SelectScrollUpButton";
      B.forwardRef((e, t) => {
        const r = bb(Vb, e.__scopeSelect),
          n = jb(Vb, e.__scopeSelect),
          [o, i] = B.useState(!1),
          s = (0, wf.s)(t, n.onScrollButtonChange);
        return Ff(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, j.jsx)(qb, {
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
      }).displayName = Vb;
      var Fb = "SelectScrollDownButton";
      B.forwardRef((e, t) => {
        const r = bb(Fb, e.__scopeSelect),
          n = jb(Fb, e.__scopeSelect),
          [o, i] = B.useState(!1),
          s = (0, wf.s)(t, n.onScrollButtonChange);
        return Ff(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, j.jsx)(qb, {
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
      }).displayName = Fb;
      var qb = B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = bb("SelectScrollButton", r), s = B.useRef(null), a = Jg(r), l = B.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return B.useEffect(() => () => l(), [l]), Ff(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, j.jsx)(kf.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: _f(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: _f(o.onPointerMove, () => {
            i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: _f(o.onPointerLeave, () => {
            l()
          })
        })
      });
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, j.jsx)(kf.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Bb = "SelectArrow";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = nb(r), i = ib(Bb, r), s = bb(Bb, r);
        return i.open && "popper" === s.position ? (0, j.jsx)(Wh, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Bb;
      var Xb = B.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = B.useRef(null),
          i = (0, wf.s)(n, o),
          s = Xm(t);
        return B.useEffect(() => {
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
        }, [s, t]), (0, j.jsx)(kf.select, {
          ...r,
          style: {
            ...Kh,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function Wb(e) {
        return "" === e || void 0 === e
      }

      function Hb(e) {
        const t = Tf(e),
          r = B.useRef(""),
          n = B.useRef(0),
          o = B.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          i = B.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return B.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i]
      }

      function Ub(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === n.length && (i = i.filter(e => e !== r));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      Xb.displayName = "SelectBubbleInput";
      var Gb = lb,
        Zb = ub,
        $b = fb,
        Kb = pb,
        Yb = hb,
        Qb = vb,
        Jb = Sb,
        e_ = zb,
        t_ = Lb;

      function r_(e) {
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

      function n_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function o_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? n_(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = r_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function i_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var s_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        a_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = o_(o_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) s_(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return i_(e.variantClassNames, e => i_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        l_ = a_({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        d_ = a_({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        u_ = a_({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        c_ = a_({
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
        f_ = a_({
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
        p_ = a_({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const h_ = (0, B.createContext)(null);

      function m_() {
        const e = (0, B.useContext)(h_);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const v_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: i,
          onValueChange: s,
          name: a,
          value: l,
          defaultOpen: d,
          onOpenChange: u,
          isOpen: c,
          size: f = "MD",
          status: p = "neutral",
          ...h
        }, m) => {
          const v = (0, B.useRef)(null),
            y = (0, $.UP)(v, m),
            g = (0, B.useId)(),
            b = (0, B.useId)(),
            _ = (0, B.useId)(),
            w = (0, B.useId)(),
            x = (0, B.useId)(),
            C = (0, B.useId)(),
            [O = !1, P] = (0, $.ic)({
              prop: c,
              defaultProp: d,
              onChange: u
            }),
            S = (0, U.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, j.jsx)(h_.Provider, {
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
              defaultOpen: d,
              onOpenChange: u,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, j.jsx)(Gb, {
              required: r,
              disabled: n,
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
        y_ = (0, B.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = m_(), s = (0, U.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: l_({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, j.jsx)(Qb, {
            ...s,
            ref: o,
            children: (0, j.jsx)(Jb, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        g_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, U.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, j.jsxs)(Wg, {
            ...o,
            ref: n,
            children: [(0, j.jsx)(Jb, {
              asChild: !0,
              children: (0, j.jsx)(Hg, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, j.jsx)(Ug, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, j.jsx)(Gg, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        b_ = (0, B.forwardRef)(({
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
            isDisabled: d,
            labelId: u,
            hintId: c,
            triggerId: f,
            popoverId: p,
            descriptionId: h,
            isOpen: m,
            value: v,
            size: y
          } = m_(), {
            isPressed: g,
            pressProps: b
          } = (0, Qy.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), _ = (0, U.v6)({
            id: f,
            className: f_({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!d
            }),
            "aria-labelledby": (0, U.VW)(r, u, c),
            "aria-describedby": (0, U.VW)(n, h),
            "aria-activedescendant": v,
            "aria-controls": p,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, U.cJ)(b, "onKeyDown"), i), w = o ? K.DX : Zb;
          return (0, j.jsx)(w, {
            ..._,
            ref: s,
            children: e
          })
        }),
        __ = (0, B.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? K.DX : "span";
          return (0, j.jsx)(s, {
            ...i,
            ref: o,
            children: (0, j.jsx)($b, {
              placeholder: e
            })
          })
        }),
        w_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: s
          } = m_(), a = s ? le.ChevronUp : le.ChevronDown, l = (0, U.v6)({
            asChild: !0,
            className: p_({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, j.jsx)(Kb, {
            ...l,
            ref: n,
            children: e || (0, j.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        x_ = (0, B.forwardRef)(({
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
            labelId: d,
            triggerId: u
          } = m_(), c = a && !o, f = (0, U.v6)({
            id: i.id || d,
            htmlFor: u,
            "data-testid": e,
            className: c_({
              showAsterisk: c,
              isDisabled: l
            })
          }, i), p = t ? K.DX : "label";
          return (0, j.jsx)(K.s6, {
            enabled: n,
            children: (0, j.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        C_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = m_(), a = (0, U.v6)({
            className: d_({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? K.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        O_ = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = m_(), a = (0, U.v6)({
            className: u_({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? K.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        j_ = (0, B.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, B.useRef)(null),
            a = (0, $.UP)(s, i),
            l = (0, U.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, j.jsx)(e_, {
            ref: a,
            ...l,
            children: e
          })
        }),
        P_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, U.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, j.jsx)(t_, {
            ref: n,
            asChild: !0,
            children: (0, j.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        S_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, U.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, j.jsx)(Kb, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        k_ = Yb,
        R_ = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = m_(), a = (0, U.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? K.DX : ag;
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        T_ = lg,
        D_ = dg;
      var E_ = r(42069),
        N_ = r(14961),
        I_ = r(37013),
        z_ = r(38140),
        M_ = r(96187);

      function L_(e, t, r) {
        let n = (0, M_.J)(e => {
          r && !e.defaultPrevented && r(t)
        });
        (0, B.useEffect)(() => {
          let t = e?.current?.form;
          return t?.addEventListener("reset", n), () => {
            t?.removeEventListener("reset", n)
          }
        }, [e])
      }

      function A_(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: i,
          name: s,
          form: a,
          children: l,
          "aria-label": d,
          "aria-labelledby": u,
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
        } = (0, Qy.d)({
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
        } = (0, Qy.d)({
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
        } = (0, z_.Wc)(e, r), O = (0, I_.v)(b, C), j = (0, E_.$)(e, {
          labelable: !0
        });
        return L_(r, t.defaultSelected, t.setSelected), {
          labelProps: (0, I_.v)(w, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, I_.v)(j, {
            "aria-invalid": f || "invalid" === c || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, N_.wt)(e).checked)
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
      const V_ = "undefined" != typeof document ? B.useInsertionEffect ?? B.useLayoutEffect : () => {};

      function F_(e, t, r) {
        let [n, o] = (0, B.useState)(e || t), i = (0, B.useRef)(n), s = (0, B.useRef)(void 0 !== e), a = void 0 !== e;
        (0, B.useEffect)(() => {
          s.current, s.current = a
        }, [a]);
        let l = a ? e : n;
        V_(() => {
          i.current = l
        });
        let [, d] = (0, B.useReducer)(() => ({}), {}), u = (0, B.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(i.current) : e;
          Object.is(i.current, n) || (i.current = n, o(n), d(), r?.(n, ...t))
        }, [r]);
        return [l, u]
      }

      function q_(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = F_(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, B.useState)(r);
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

      function B_(e) {
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

      function W_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? X_(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = B_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function H_(e, t) {
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
        G_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = W_(W_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) U_(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return H_(e.variantClassNames, e => H_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Z_ = G_({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $_ = G_({
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
        K_ = G_({
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
        Y_ = G_({
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
        Q_ = G_({
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
      const J_ = (0, B.createContext)(null);

      function ew() {
        const e = (0, B.useContext)(J_);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const tw = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: i = !1,
          isReadOnly: s = !1,
          ...a
        }, l) => {
          const d = (0, U.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, a),
            u = n ? K.DX : "div",
            c = (0, B.useId)(),
            f = (0, B.useId)(),
            p = (0, B.useId)();
          return (0, j.jsx)(J_.Provider, {
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
            children: (0, j.jsx)(u, {
              ...d,
              ref: l,
              children: o
            })
          })
        }),
        rw = (0, B.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: i,
          isSelected: s,
          defaultSelected: a,
          onSelectedChange: l,
          name: d,
          value: u,
          ...c
        }, f) => {
          const p = (0, B.useRef)(null),
            h = (0, $.UP)(p, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: _,
              isReadOnly: w
            } = ew(),
            x = q_({
              isDisabled: _,
              isReadOnly: w,
              isSelected: s,
              defaultSelected: a,
              onChange: l
            }),
            {
              inputProps: C
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: i,
                isPressed: s,
                isDisabled: a,
                isReadOnly: l
              } = A_(e, t, r);
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
              "aria-labelledby": (0, U.VW)(n, g),
              "aria-describedby": (0, U.VW)(o, b),
              name: d,
              value: u,
              isDisabled: _,
              isReadOnly: w
            }, x, p),
            O = (0, U.v6)({
              className: Q_({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": _ || w,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || _ || w || x.toggle()
              }
            }, c);
          return (0, j.jsxs)("div", {
            ...O,
            children: [(0, j.jsx)(K.s6, {
              children: (0, j.jsx)("input", {
                ...C,
                ref: h
              })
            }), (0, j.jsx)("div", {
              className: Y_({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, j.jsx)("div", {
                className: $_({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        nw = (0, B.forwardRef)(({
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
            size: d
          } = ew(), u = (0, U.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: K_({
              isDisabled: s,
              size: d
            })
          }, o), c = t ? K.DX : "label";
          return (0, j.jsx)(K.s6, {
            enabled: n,
            children: (0, j.jsx)(c, {
              ...u,
              ref: i,
              children: r
            })
          })
        }),
        ow = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = ew(), a = n.id || s, l = (0, U.v6)({
            className: Z_({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? K.DX : "div";
          return (0, j.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        });
      var iw = r(99386),
        sw = r(58907);

      function aw(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, sw.N)(() => {
          if ("native" === n && r?.current && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: lw(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, B.useRef)(!1),
          s = (0, M_.J)(() => {
            i.current || t.resetValidation()
          }),
          a = (0, M_.J)(e => {
            t.displayValidation.isInvalid || t.commitValidation();
            let n = r?.current?.form;
            !e.defaultPrevented && r && n && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!1 === r.validity?.valid) return r
              }
              return null
            }(n) === r.current && (o ? o() : r.current?.focus(), (0, iw.Cl)("keyboard")), e.preventDefault()
          }),
          l = (0, M_.J)(() => {
            t.commitValidation()
          });
        (0, B.useEffect)(() => {
          let e = r?.current;
          if (!e) return;
          let t = e.form,
            n = t?.reset;
          return t && (t.reset = () => {
            i.current = !window.event || "message" === window.event.type && (0, N_.wt)(window.event) instanceof MessagePort, n?.call(t), i.current = !1
          }), e.addEventListener("invalid", a), e.addEventListener("change", l), t?.addEventListener("reset", s), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), t?.removeEventListener("reset", s), t && (t.reset = n)
          }
        }, [r, n])
      }

      function lw(e) {
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
      const dw = {
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
        uw = {
          ...dw,
          customError: !0,
          valid: !1
        },
        cw = {
          isInvalid: !1,
          validationDetails: dw,
          validationErrors: []
        },
        fw = (0, B.createContext)({}),
        pw = "__reactAriaFormValidationState";

      function hw(e) {
        if (e[pw]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[pw];
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
          r && (t ||= "invalid" === r);
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: uw
            } : null,
            d = (0, B.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return mw(r)
                }
                return []
              }(s, o);
              return vw(e)
            }, [s, o]);
          i?.validationDetails.valid && (i = void 0);
          let u = (0, B.useContext)(fw),
            c = (0, B.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => mw(u[e])) : mw(u[n]) : [], [u, n]),
            [f, p] = (0, B.useState)(u),
            [h, m] = (0, B.useState)(!1);
          u !== f && (p(u), m(!1));
          let v = (0, B.useMemo)(() => vw(h ? [] : c), [h, c]),
            y = (0, B.useRef)(cw),
            [g, b] = (0, B.useState)(cw),
            _ = (0, B.useRef)(cw),
            [w, x] = (0, B.useState)(!1);
          return (0, B.useEffect)(() => {
            if (!w) return;
            x(!1);
            let e = d || i || y.current;
            yw(e, _.current) || (_.current = e, b(e))
          }), {
            realtimeValidation: l || v || d || i || cw,
            displayValidation: "native" === a ? l || v || g : l || v || d || i || g,
            updateValidation(e) {
              "aria" !== a || yw(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = cw;
              yw(e, _.current) || (_.current = e, b(e)), "native" === a && x(!1), m(!0)
            },
            commitValidation() {
              "native" === a && x(!0), m(!0)
            }
          }
        }(e)
      }

      function mw(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function vw(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: uw
        } : null
      }

      function yw(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }
      const gw = ({
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
        bw = ({
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
        _w = ({
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
        ww = ({
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
        xw = ({
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
        Cw = ({
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

      function Ow(e) {
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
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ow(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Sw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var kw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pw(Pw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) kw(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sw(e.variantClassNames, e => Sw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Tw = Rw({
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
        Dw = Rw({
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
        Ew = Rw({
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
        Nw = Rw({
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
        Iw = Rw({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zw = Rw({
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
      const Mw = (0, B.createContext)(null);

      function Lw() {
        const e = (0, B.useContext)(Mw);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Aw = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...i
        }, s) => {
          const a = (0, U.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, U.cJ)(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? K.DX : "div",
            d = (0, B.useId)(),
            u = (0, B.useId)(),
            c = (0, B.useId)();
          return (0, j.jsx)(Mw.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: u,
              inputId: c,
              ...i
            },
            children: (0, j.jsx)(l, {
              ...a,
              ref: s,
              children: o
            })
          })
        }),
        Vw = (0, B.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: i,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": d,
          "aria-labelledby": u,
          className: c,
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
          } = Lw(), x = (0, B.useRef)(null), C = f.id || _, {
            isPressed: O,
            pressProps: P
          } = (0, Qy.d)({
            ref: x
          }), {
            setSelected: S,
            toggle: k,
            ...R
          } = q_({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: T,
            isSelected: D,
            isDisabled: E,
            isReadOnly: N
          } = function(e, t, r) {
            let n = hw({
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
                isSelected: d,
                isPressed: u,
                isDisabled: c,
                isReadOnly: f
              } = A_({
                ...e,
                isInvalid: o
              }, t, r);
            aw(e, n, r);
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
            } = (0, Qy.d)({
              isDisabled: c || f,
              onPress() {
                let {
                  [pw]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, I_.v)(a, v, (0, B.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: d,
                "aria-required": h && "aria" === m || void 0,
                required: h && "native" === m
              },
              isSelected: d,
              isPressed: u,
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
            ...w
          }, {
            ...R,
            toggle: k,
            setSelected: w.isReadOnly ? () => !1 : S
          }, x), I = (0, U.v6)({
            className: Dw({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || E || N || k()
            }
          }, P, f), z = (0, U.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, U.VW)(u, b),
            "aria-describedby": (0, U.VW)(l, g),
            "aria-errormessage": (0, U.VW)(d, w.isInvalid ? g : void 0),
            "aria-required": y,
            required: y
          }, T), M = v ? a[`Dash${h}`] : a[`Check${h}`];
          return (0, j.jsxs)("div", {
            ...I,
            children: [(0, j.jsx)(K.s6, {
              children: (0, j.jsx)("input", {
                ...z,
                ref: p
              })
            }), (0, j.jsx)("div", {
              className: (0, ae.$)(Tw({
                size: h,
                appearance: m
              }), c),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : D ? "checked" : "unchecked",
              "data-disabled": E || N,
              "data-testid": e,
              "data-pressed": O,
              children: (0, j.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (D || v) && (0, j.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Fw = (0, B.forwardRef)(({
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
            inputId: d,
            isRequired: u
          } = Lw(), c = i.id || l, f = u && !o, p = (0, U.v6)({
            className: zw({
              size: a,
              showAsterisk: f
            }),
            "data-testid": r,
            id: c,
            htmlFor: i.htmlFor || d
          }, i), h = t ? K.DX : "label";
          return (0, j.jsx)(K.s6, {
            enabled: n,
            children: (0, j.jsx)(h, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        qw = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Lw(), a = n.id || s, l = (0, U.v6)({
            className: Ew({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? K.DX : "div";
          return (0, j.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Bw = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = Lw(), s = n.id || i, a = (0, U.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: s
          }, n), l = t ? K.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Xw = (0, B.createContext)(null);

      function Ww() {
        const e = (0, B.useContext)(Xw);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Hw = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...i
        }, s) => {
          const [a, l] = (0, B.useState)(null), [d, u] = (0, B.useState)(null), c = [a, d].filter(Boolean).join(" "), f = (0, U.v6)({
            "data-testid": e,
            "aria-describedby": c,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, i), p = t ? K.DX : "fieldset";
          return (0, j.jsx)(Xw.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: a,
              errorTextId: d,
              setDescriptionId: l,
              setErrorTextId: u
            },
            children: (0, j.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        Uw = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          optionalText: n = "optional",
          hideVisually: o = !1,
          hideRequiredAsterisk: i,
          ...s
        }, a) => {
          const {
            isRequired: l
          } = Ww(), d = l && !i, u = (0, U.v6)({
            "data-testid": r,
            className: Iw({
              showAsterisk: d
            })
          }, s), c = t ? K.DX : "legend";
          return (0, j.jsx)(K.s6, {
            enabled: o,
            children: (0, j.jsxs)(c, {
              ...u,
              ref: a,
              children: [(0, j.jsx)(K.xV, {
                children: e
              }), !l && (0, j.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        Gw = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: i
          } = Ww(), s = (0, B.useId)(), a = n.id || s;
          (0, B.useEffect)(() => {
            i(a)
          }, [i, a]);
          const l = (0, U.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
              id: a
            }, n),
            d = t ? K.DX : "div";
          return (0, j.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Zw = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = Ww(), s = (0, U.v6)({
            "data-testid": r,
            className: Nw({
              size: i
            })
          }, n), a = t ? K.DX : "div";
          return (0, j.jsx)(a, {
            ...s,
            ref: o,
            children: e
          })
        }),
        $w = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: i
          } = Ww(), s = (0, B.useId)(), a = n.id || s;
          (0, B.useEffect)(() => {
            i(a)
          }, [i, a]);
          const l = (0, U.v6)({
              "data-testid": r,
              id: a,
              className: "foundry_11gbdtyw foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
            }, n),
            d = le.X,
            u = t ? K.DX : "div";
          return (0, j.jsxs)(u, {
            ...l,
            ref: o,
            children: [(0, j.jsx)(d, {
              label: "",
              size: "SM"
            }), (0, j.jsx)(K.xV, {
              children: e
            })]
          })
        });

      function Kw(e) {
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

      function Qw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yw(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Kw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ex = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qw(Qw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) ex(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jw(e.variantClassNames, e => Jw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rx = tx({
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
        nx = tx({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ox = tx({
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
        ix = tx({
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
      const sx = (0, B.createContext)(null);

      function ax() {
        const e = (0, B.useContext)(sx);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const lx = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const d = (0, U.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, a),
            u = e ? K.DX : "div",
            c = (0, B.useId)(),
            f = (0, B.useId)(),
            p = (0, B.useId)(),
            h = (0, B.useId)();
          return (0, j.jsx)(sx.Provider, {
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
            children: (0, j.jsx)(u, {
              ref: l,
              ...d,
              children: t
            })
          })
        }),
        dx = (0, B.forwardRef)(({
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
            isDisabled: d,
            isRequired: u
          } = ax(), c = (0, U.v6)({
            className: ox({
              isDisabled: d,
              showAsterisk: u && !o
            }),
            "data-testid": r,
            id: a,
            htmlFor: l
          }, i), f = t ? K.DX : "label";
          return (0, j.jsx)(K.s6, {
            enabled: n,
            children: (0, j.jsx)(f, {
              ...c,
              ref: s,
              children: e
            })
          })
        }),
        ux = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: i,
          placeholder: s = " ",
          "aria-labelledby": a,
          "aria-describedby": l,
          ...d
        }, u) => {
          const {
            descriptionId: c,
            labelId: f,
            inputId: p,
            hintId: h,
            isDisabled: m,
            isRequired: v,
            isReadOnly: y,
            status: g
          } = ax(), b = (0, B.useRef)(null), _ = (0, $.UP)(b, u), w = (0, U.v6)({
            className: ix({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: i,
            id: d.id || p,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: s,
            "aria-labelledby": (0, U.VW)(d.id, f, h, a),
            "aria-describedby": (0, U.VW)(c, l),
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
          }, d), x = e ? K.DX : "textarea";
          return (0, j.jsx)(x, {
            ref: _,
            ...w,
            children: t
          })
        }),
        cx = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = ax(), a = (0, U.v6)({
            className: rx({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? K.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        fx = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = ax(), a = (0, U.v6)({
            className: nx({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? K.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        px = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = ax(), a = (0, U.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? K.DX : ag;
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        hx = lg,
        mx = dg;
      let vx = Math.round(1e10 * Math.random()),
        yx = 0;
      var gx = r(67892);
      class bx {
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
          if (!(0, N_.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, N_.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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
      var _x = r(28562),
        wx = r(1360);

      function xx(e, t) {
        return !!e && !!t && t.some(t => (0, N_.sD)(t, e))
      }

      function Cx(e, t, r) {
        let n = t?.tabbable ? wx.A : wx.t,
          o = e?.nodeType === Node.ELEMENT_NODE ? e : null,
          i = (0, _x.TW)(o),
          s = function(e, t, r, n) {
            return (0, gx.Nf)() ? new bx(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, N_.sD)(t?.from, e)) return NodeFilter.FILTER_REJECT;
              if (t?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, _x.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let r = (0, _x.mD)(e);
                      return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !xx(e, r) || t?.accept && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return t?.from && (s.currentNode = t.from), s
      }
      class Ox {
        constructor() {
          this.fastMap = new Map, this.root = new jx({
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
          let o = new jx({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && xx(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          let e = new Ox;
          for (let t of this.traverse()) e.addTreeNode(t.scopeRef, t.parent?.scopeRef ?? null, t.nodeToRestore);
          return e
        }
      }
      class jx {
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
      new Ox;
      const Px = new WeakMap;
      var Sx = r(13087);

      function kx(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, Sx.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Rx(e) {
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
          t = (0, Sx.Bi)(t);
          let s = (0, Sx.Bi)(),
            a = {};
          return r && (n = n ? `${s} ${n}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: kx({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), a = (0, Sx.X1)([Boolean(t), Boolean(r), n, o]), l = (0, Sx.X1)([Boolean(t), Boolean(r), n, o]);
        return s = (0, I_.v)(s, {
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
      var Tx = r(14142),
        Dx = r(87478);
      const Ex = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Nx = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Ix(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Ex.has(t.script)
        }
        let t = e.split("-")[0];
        return Nx.has(t)
      }
      var zx = r(6859);
      const Mx = Symbol.for("react-aria.i18n.locale");

      function Lx() {
        let e = "undefined" != typeof window && window[Mx] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Ix(e) ? "rtl" : "ltr"
        }
      }
      let Ax = Lx(),
        Vx = new Set;

      function Fx() {
        Ax = Lx();
        for (let e of Vx) e(Ax)
      }
      const qx = B.createContext(null);

      function Bx() {
        let e = function() {
          let e = (0, zx.wR)(),
            [t, r] = (0, B.useState)(Ax);
          return (0, B.useEffect)(() => (0 === Vx.size && window.addEventListener("languagechange", Fx), Vx.add(r), () => {
            Vx.delete(r), 0 === Vx.size && window.removeEventListener("languagechange", Fx)
          }), []), e ? {
            locale: "undefined" != typeof window && window[Mx] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, B.useContext)(qx) || e
      }

      function Xx(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: i,
          isDisabled: s,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: d
        } = Bx(), {
          isInvalid: u,
          validationErrors: c,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: m,
          errorMessageProps: v
        } = Rx({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || c
        }), y = (0, E_.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, i = (0, B.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: s,
            removeAllGlobalListeners: a
          } = (0, Dx.A)(), l = (0, B.useCallback)(e => {
            (0, N_.sD)(e.currentTarget, (0, N_.wt)(e)) && i.current.isFocusWithin && !(0, N_.sD)(e.currentTarget, e.relatedTarget) && (i.current.isFocusWithin = !1, a(), r && r(e), o && o(!1))
          }, [r, o, i, a]), d = (0, Tx.yB)(l), u = (0, B.useCallback)(e => {
            if (!(0, N_.sD)(e.currentTarget, (0, N_.wt)(e))) return;
            let t = (0, N_.wt)(e);
            const r = (0, _x.TW)(t),
              a = (0, N_.bq)(r);
            if (!i.current.isFocusWithin && a === t) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, d(e);
              let t = e.currentTarget;
              s(r, "focus", e => {
                let n = (0, N_.wt)(e);
                if (i.current.isFocusWithin && !(0, N_.sD)(t, n)) {
                  let e = new r.defaultView.FocusEvent("blur", {
                    relatedTarget: n
                  });
                  (0, Tx.o1)(e, t);
                  let o = (0, Tx.eg)(e);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, d, s, l]);
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
          onBlurWithin(r) {
            e.onBlur?.(r), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = (0, Sx.Bi)(r);
        return Px.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: (0, I_.v)(y, {
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
              let n, o = Cx(e.currentTarget, {
                from: (0, N_.wt)(e),
                accept: e => e instanceof(0, _x.mD)(e).HTMLInputElement && "radio" === e.type
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
          isInvalid: u,
          validationErrors: c,
          validationDetails: f
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

      function Ux(e) {
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

      function Gx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Zx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $x = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ux(Ux({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) Zx(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gx(e.variantClassNames, e => Gx(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Kx = $x({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Yx = $x({
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
      const Qx = (0, B.createContext)(null);

      function Jx() {
        const e = (0, B.useContext)(Qx);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const eC = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: i,
          "aria-labelledby": s,
          "aria-describedby": a,
          "aria-errormessage": l,
          status: d = "neutral",
          ...u
        }, c) => {
          const f = (0, B.useRef)(null),
            p = (0, $.UP)(f, c),
            h = (0, B.useId)(),
            m = (0, B.useId)(),
            v = (0, B.useId)(),
            y = function(e) {
              let t = (0, B.useMemo)(() => e.name || `radio-group-${vx}-${++yx}`, [e.name]),
                [r, n] = F_(e.value, e.defaultValue ?? null, e.onChange),
                [o] = (0, B.useState)(r),
                [i, s] = (0, B.useState)(null),
                a = hw({
                  ...e,
                  value: r
                }),
                l = a.displayValidation.isInvalid;
              return {
                ...a,
                name: t,
                selectedValue: r,
                defaultSelectedValue: void 0 !== e.value ? o : e.defaultValue ?? null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (n(t), a.commitValidation())
                },
                lastFocusedValue: i,
                setLastFocusedValue: s,
                isDisabled: e.isDisabled || !1,
                isReadOnly: e.isReadOnly || !1,
                isRequired: e.isRequired || !1,
                validationState: e.validationState || (l ? "invalid" : null),
                isInvalid: l
              }
            }({
              ...u,
              isInvalid: "invalid" === d
            }),
            {
              radioGroupProps: g
            } = Xx({
              ...u,
              orientation: r,
              "aria-labelledby": (0, U.VW)(h, s),
              "aria-describedby": (0, U.VW)(m, v, a),
              "aria-errormessage": (0, U.VW)(v, l)
            }, y),
            b = (0, U.v6)({
              className: "foundry_njguqn0"
            }, g, (0, U.cJ)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            _ = i ? K.DX : "div";
          return (0, j.jsx)(Qx.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: h,
              errorId: v,
              status: d,
              ...u
            },
            children: (0, j.jsx)(_, {
              ref: p,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        tC = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: s
          } = Jx(), a = (0, U.v6)({
            "data-testid": e,
            className: Yx({
              size: i,
              orientation: s
            })
          }, n), l = t ? K.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: r
          })
        }),
        rC = (0, B.forwardRef)(({
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
          } = Jx(), d = a && !o, u = (0, U.v6)({
            id: i.id || l,
            "data-testid": e,
            className: Kx({
              showAsterisk: d
            })
          }, i), c = t ? K.DX : "div";
          return (0, j.jsx)(K.s6, {
            enabled: n,
            children: (0, j.jsx)(c, {
              ...u,
              ref: s,
              children: r
            })
          })
        }),
        nC = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = Jx(), s = (0, U.v6)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), a = t ? K.DX : "div";
          return (0, j.jsx)(a, {
            ...s,
            ref: o,
            children: r
          })
        }),
        oC = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: s
          } = Jx(), a = (0, U.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: s
          }, n), l = r ? K.DX : ag;
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        iC = lg,
        sC = dg;
      var aC = $x({
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
        lC = $x({
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
        dC = $x({
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
        uC = $x({
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
      const cC = ({
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
        fC = ({
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
        pC = ({
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
        hC = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? K.DX : "label";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        mC = (0, B.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, B.useRef)(null),
            i = (0, $.UP)(o, n),
            s = (0, B.useId)(),
            {
              state: a,
              appearance: l,
              size: d,
              isReadOnly: c,
              isRequired: f
            } = Jx(),
            {
              isPressed: p,
              pressProps: h
            } = (0, Qy.d)({
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
                onPressChange: d,
                onPress: u,
                onPressUp: c,
                onClick: f
              } = e;
              const p = e.isDisabled || t.isDisabled;
              let h = t.selectedValue === n,
                {
                  pressProps: m,
                  isPressed: v
                } = (0, Qy.d)({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: d,
                  onPress: u,
                  onPressUp: c,
                  onClick: f,
                  isDisabled: p
                }),
                {
                  pressProps: y,
                  isPressed: g
                } = (0, Qy.d)({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: d,
                  onPressUp: c,
                  onClick: f,
                  isDisabled: p,
                  onPress(e) {
                    u?.(e), t.setSelectedValue(n), r.current?.focus()
                  }
                }),
                {
                  focusableProps: b
                } = (0, z_.Wc)((0, I_.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                _ = (0, I_.v)(m, b),
                w = (0, E_.$)(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === n && (x = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (x = 0), p && (x = void 0);
              let {
                name: C,
                form: O,
                descriptionId: j,
                errorMessageId: P,
                validationBehavior: S
              } = Px.get(t);
              return L_(r, t.defaultSelectedValue, t.setSelectedValue), aw({
                validationBehavior: S
              }, t, r), {
                labelProps: (0, I_.v)(y, (0, B.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, I_.v)(w, {
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
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? P : null, j].filter(Boolean).join(" ") || void 0
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
            g = (0, U.v6)(m, {
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
            b = u[`Dot${d}`];
          return (0, j.jsxs)("div", {
            className: uC({
              size: d
            }),
            children: [(0, j.jsx)(K.s6, {
              children: (0, j.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, j.jsx)("div", {
              className: dC({
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
        vC = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: s,
            state: a
          } = Jx(), l = (0, B.useId)(), d = (0, U.v6)({
            id: l,
            "data-testid": e,
            className: lC({
              size: s,
              isDisabled: a?.isDisabled
            })
          }, o), u = t ? K.DX : "div";
          return (0, j.jsx)(K.s6, {
            enabled: n,
            children: (0, j.jsx)(u, {
              ...d,
              ref: i,
              children: r
            })
          })
        }),
        yC = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = Jx(), s = (0, U.v6)({
            "data-testid": e,
            className: aC({
              isDisabled: i
            })
          }, n), a = t ? K.DX : "span";
          return (0, j.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        });

      function gC(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function bC(e, t, r) {
        return t = xC(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, CC() ? Reflect.construct(t, r || [], xC(e).constructor) : t.apply(e, r))
      }

      function _C(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return gC(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? gC(e, t) : void 0
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

      function wC(e, t, r) {
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

      function xC(e) {
        return xC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, xC(e)
      }

      function CC() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (CC = function() {
          return !!e
        })()
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

      function jC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? OC(Object(r), !0).forEach(function(t) {
            wC(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : OC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function PC(e, t) {
        return PC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, PC(e, t)
      }

      function SC(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          s = n,
          a = "",
          l = _C(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var d, u = r.value,
              c = !Object.prototype.hasOwnProperty.call(o, u) && (null === (d = o[s[0]]) || void 0 === d ? void 0 : d.test(u));
            (i && u === s[0] || c) && (s = s.slice(1), a += u)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return a
      }

      function kC(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          s = t.showMask,
          a = 0,
          l = "",
          d = _C(n);
        try {
          for (d.s(); !(r = d.n()).done;) {
            var u = r.value;
            if (!s && void 0 === e[a]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[a] ? l += e[a++] : l += u
          }
        } catch (e) {
          d.e(e)
        } finally {
          d.f()
        }
        if (i && !s) {
          for (var c = n.length - 1; c >= 0 && l[c] === n[c]; c--);
          l = l.slice(0, c + 1)
        }
        return l
      }

      function RC(e, t) {
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

      function TC(e) {
        return e.length > 0 ? wC({}, e, /./) : {}
      }

      function DC(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(n, o), d = i.slice(n, o), u = "", c = 0; c < d.length; c++) {
          var f = Object.prototype.hasOwnProperty.call(s, d[c]);
          f && void 0 !== l[c] && l[c] !== d[c] ? u += l[c] : f && a && (u += d[c])
        }
        return u
      }

      function EC(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? TC(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return kC(SC(e, {
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
      var NC = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function IC(e) {
        return NC.includes(e) ? "\\".concat(e) : e
      }

      function zC(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function MC(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function LC(e, t, r) {
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

      function AC(e) {
        return AC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, AC(e)
      }

      function VC() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (VC = function() {
          return !!e
        })()
      }

      function FC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? FC(Object(r), !0).forEach(function(t) {
            LC(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : FC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function BC(e, t) {
        return BC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, BC(e, t)
      }

      function XC(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return XC = function(e) {
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
              if (VC()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && BC(o, r.prototype), o
            }(e, arguments, AC(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), BC(r, e)
        }, XC(e)
      }
      var WC, HC = function(e) {
          function t(e) {
            var r;
            return zC(this, t), (r = function(e, t, r) {
              return t = AC(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, VC() ? Reflect.construct(t, r || [], AC(e).constructor) : t.apply(e, r))
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
            }), t && BC(e, t)
          }(t, e), MC(t)
        }(XC(Error)),
        UC = ["options"],
        GC = ["text", "email", "tel", "search", "url"],
        ZC = MC(function e(t) {
          var r = t.init,
            n = t.tracking;
          zC(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (GC.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = i.initialValue,
                a = void 0 === s ? "" : s,
                l = i.controlled,
                d = void 0 !== l && l,
                u = r({
                  initialValue: e.value || a,
                  controlled: d
                }),
                c = u.value,
                f = u.options,
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
              Object.defineProperty(e, "value", qC(qC({}, v), {}, {
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
                    if (h.cachedId === h.id) throw new HC("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new HC("The selection attributes have not been initialized.");
                    var l, d = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = d.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && i.length < d.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > d.length) throw new HC("Input type detection error.");
                    var u = "",
                      c = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) u = i.slice(m.selectionStart, s);
                    else {
                      var v = d.length - i.length;
                      c = s, f = s + v
                    }
                    p.value !== d ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var y = p.options,
                      g = n({
                        inputType: l,
                        previousValue: d,
                        previousOptions: y,
                        value: i,
                        addedValue: u,
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
                      }(g, UC);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), p.value = _.value, p.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, d)
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
      WC = ZC, Object.defineProperty(WC.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var $C, KC = ["track", "modify"];

      function YC(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? TC(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var QC = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = bC(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = YC(r),
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
                l = YC(r),
                d = l.track,
                u = l.modify,
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
                }(l, KC),
                f = c.mask,
                p = c.replacement,
                h = c.showMask,
                m = c.separate,
                v = jC(jC({}, "insert" === t ? {
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
                y = null == d ? void 0 : d(v);
              if (!1 === y) throw new HC("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? TC(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = DC(n, jC({
                  end: s
                }, o)),
                _ = DC(n, jC({
                  start: a
                }, o)),
                w = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(w, "");
              if (b && (b = SC(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: m
                }), x = x.slice(b.length)), i && (i = SC(i, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new HC("The character does not match the key value of the `replacement` object.");
              if (m) {
                var C = f.slice(s, a).replace(w, ""),
                  O = C.length - i.length;
                O < 0 ? _ = _.slice(-O) : O > 0 && (_ = C.slice(-O) + _)
              }
              _ && (_ = SC(_, {
                replacementChars: x,
                replacement: p,
                separate: m
              }));
              var j = kC(b + i + _, {
                  mask: f,
                  replacement: p,
                  separate: m,
                  showMask: h
                }),
                P = function(e) {
                  var t, r, n, o = e.inputType,
                    i = e.value,
                    s = e.addedValue,
                    a = e.beforeChangeValue,
                    l = e.replacement,
                    d = e.separate,
                    u = RC(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || d && "replacement" === t
                    }),
                    c = null === (t = u[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = u[a.length - 1]) || void 0 === r ? void 0 : r.index,
                    p = null === (n = u[a.length + s.length]) || void 0 === n ? void 0 : n.index;
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
            return EC(e, YC(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? TC(n) : n;
              return RC(EC(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, YC(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? TC(n) : n,
                i = DC(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return SC(i, {
                replacementChars: r.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, YC(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? TC(n) : n, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < r.length; l++) {
                var d = r[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, d) ? "".concat(s ? "(?!".concat(IC(d), ")") : "", "(").concat(o[d].source, ")") : IC(d), l === r.length - 1 && (i && (a += ")?".repeat(r.length)), a += "$")
              }
              return a
            }(e, YC(r))
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
            }), t && PC(e, t)
          }(e, ZC),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function JC(e) {
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

      function eO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eO(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = JC(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eO(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function rO(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      $C = QC, Object.defineProperty($C.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var nO = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        oO = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tO(tO({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) nO(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rO(e.variantClassNames, e => rO(e, e => e.split(" ")[0]))
            }
          }, t
        },
        iO = oO({
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
        sO = oO({
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
        aO = oO({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        lO = oO({
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
        dO = oO({
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
        uO = oO({
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
      const cO = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        fO = (0, B.createContext)(null);

      function pO() {
        const e = (0, B.useContext)(fO);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const hO = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const [d, u] = (0, B.useState)("text"), c = `${(0,B.useId)()}-label`, f = `${(0,B.useId)()}-input`, p = `${(0,B.useId)()}-description`, h = (0, B.useRef)(null), m = (0, B.useRef)(cO), v = (0, U.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, a), y = e ? K.DX : "div";
          return (0, j.jsx)(fO.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: s,
              labelId: c,
              inputId: f,
              descriptionId: p,
              type: d,
              setType: u,
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
        mO = (0, B.forwardRef)(({
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
            inputId: d,
            labelId: u
          } = pO(), c = l && !o, f = (0, U.v6)({
            id: i.id || u,
            htmlFor: i.htmlFor || d,
            "data-testid": e,
            className: uO({
              showAsterisk: c,
              isDisabled: a
            })
          }, i), p = t ? K.DX : "label";
          return (0, j.jsx)(K.s6, {
            enabled: n,
            children: (0, j.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        vO = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = pO(), s = (0, U.v6)({
            "data-testid": e,
            className: aO({
              isDisabled: i
            })
          }, n), a = t ? K.DX : "span";
          return (0, j.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        }),
        yO = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: s,
            status: a
          } = pO(), l = (0, U.v6)({
            "data-testid": e,
            className: (0, ae.$)(iO({
              isDisabled: i,
              isReadOnly: s,
              isInvalid: "invalid" === a,
              isSuccess: "success" === a
            }), "foundry_8oytzo1")
          }, n), d = t ? K.DX : "div";
          return (0, j.jsx)(d, {
            ref: o,
            ...l,
            children: r
          })
        }),
        gO = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: i,
          placeholder: s = " ",
          "aria-labelledby": a,
          "aria-describedby": l,
          type: d = "text",
          ...u
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
            type: _,
            inputRef: w,
            focusState: x
          } = pO();
          (0, B.useEffect)(() => b(d), []);
          const C = "invalid" === m,
            O = (0, U.v6)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: _,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, U.VW)(v, a),
              "aria-describedby": (0, U.VW)(g, l),
              "data-testid": e,
              className: (0, ae.$)(dO({
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
            }, u),
            P = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                i = e.track,
                s = e.modify,
                a = (0, B.useRef)(null),
                l = (0, B.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: i,
                  modify: s
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = i, l.current.modify = s, (0, B.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(a, new QC(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: i
            }),
            S = (0, $.UP)(r && n ? P : null, w, c),
            k = t ? K.DX : "input";
          return (0, j.jsx)(k, {
            ref: S,
            ...O
          })
        }),
        bO = (0, B.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: s
          } = pO(), a = (0, U.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, ae.$)(lO({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? K.DX : le[e];
          return (0, j.jsx)(l, {
            ref: i,
            ...a
          })
        }),
        _O = (0, B.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = pO(), n = (0, U.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, ae.$)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, j.jsx)(Re, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        wO = (0, B.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i,
            inputRef: s,
            focusState: a
          } = pO(), l = "password" === o, d = l ? e : t;
          (0, B.useEffect)(() => {
            a.current && (a.current.clickTriggered = !1)
          }, [a]);
          const u = (0, U.v6)({
            label: d,
            icon: l ? "Eye" : "EyeOff",
            onPress: () => {
              i(l ? "text" : "password");
              const e = s.current;
              if (a.current && e) {
                const {
                  selectionStart: t,
                  selectionEnd: r
                } = a.current;
                e.focus(), null === t && null === r || requestAnimationFrame(() => {
                  e.ownerDocument.activeElement === e && (e.selectionStart = t, e.selectionEnd = r)
                })
              }
            },
            preventFocusOnPress: !0
          }, r);
          return (0, j.jsxs)(zm, {
            children: [(0, j.jsx)(Mm, {
              children: (0, j.jsx)(_O, {
                ref: n,
                ...u
              })
            }), (0, j.jsxs)(Lm, {
              side: "bottom",
              align: "end",
              children: [d, (0, j.jsx)(Am, {})]
            })]
          })
        }),
        xO = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = pO(), a = (0, U.v6)({
            className: sO({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? K.DX : "div";
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        CO = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = pO(), a = (0, U.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? K.DX : ag;
          return (0, j.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        OO = lg,
        jO = dg;
      var PO = r(2577);

      function SO(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ...l
        } = e, d = {};
        "a" !== r && (d = {
          role: "link",
          tabIndex: a ? void 0 : 0
        });
        let {
          focusableProps: u
        } = (0, z_.Wc)(e, t), {
          pressProps: c,
          isPressed: f
        } = (0, Qy.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ref: t
        }), p = (0, E_.$)(l, {
          labelable: !0
        }), h = (0, I_.v)(u, c), m = (0, PO.rd)(), v = (0, PO._h)(e);
        return {
          isPressed: f,
          linkProps: (0, I_.v)(p, v, {
            ...h,
            ...d,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              c.onClick?.(t), (0, PO.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function kO(e) {
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

      function RO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function TO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? RO(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = kO(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : RO(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function DO(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var EO = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        NO = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = TO(TO({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) EO(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return DO(e.variantClassNames, e => DO(e, e => e.split(" ")[0]))
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
      const IO = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        zO = (0, B.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const i = (0, B.useRef)(null),
            s = (0, $.UP)(i, o),
            {
              buttonProps: a
            } = (0, $.sL)(n, i),
            l = (0, U.v6)({
              "data-testid": r,
              className: NO({
                size: t
              })
            }, a);
          return (0, j.jsx)("button", {
            ref: s,
            ...l,
            children: (0, j.jsx)(le.X, {
              label: e,
              size: IO[t]
            })
          })
        });

      function MO(e) {
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

      function LO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function AO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? LO(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = MO(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : LO(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function VO(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var FO = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qO = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = AO(AO({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) FO(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return VO(e.variantClassNames, e => VO(e, e => e.split(" ")[0]))
            }
          }, t
        },
        BO = qO({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        XO = qO({
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
        WO = qO({
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
      const HO = (0, B.createContext)(null);

      function UO() {
        const e = (0, B.useContext)(HO);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const GO = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const s = e ? K.DX : "div",
            a = (0, U.v6)({
              className: WO({
                status: r,
                background: n
              })
            }, o);
          return (0, j.jsx)(HO.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, j.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a
            })
          })
        }),
        ZO = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? K.DX : "div",
            i = (0, U.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, j.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        $O = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? K.DX : "div",
            i = (0, U.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, j.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        KO = {
          danger: le.CircleX,
          information: le.Info,
          success: le.CircleCheck,
          warning: le.TriangleAlert
        },
        YO = (0, B.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = UO(), i = e ? K.DX : KO[o], s = (0, U.v6)({
            className: XO({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, j.jsx)(i, {
            label: "",
            ref: n,
            ...s
          })
        }),
        QO = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? K.DX : "div",
            i = (0, U.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, j.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        JO = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? K.DX : "div",
            i = (0, U.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, j.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        ej = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, B.useRef)(null),
            s = (0, $.UP)(i, o),
            a = e ? K.DX : "a",
            {
              linkProps: l,
              isPressed: d
            } = SO(n, i),
            u = (0, U.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, j.jsx)(a, {
            "data-pressed": d,
            "data-testid": r,
            ref: s,
            ...u,
            children: t
          })
        }),
        tj = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? K.DX : "div",
            s = (0, U.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        rj = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? K.DX : "div";
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, ae.$)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        nj = (0, B.forwardRef)((e, t) => {
          const {
            background: r
          } = UO(), n = "none" !== r, o = (0, U.v6)({
            className: BO({
              hasBackground: n
            })
          }, e);
          return (0, j.jsx)(zO, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function oj(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function ij(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : oj(n) && oj(o) ? ij(n, o) : n === o
        }))
      }

      function sj(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function aj(e) {
        return "number" == typeof e
      }

      function lj(e) {
        return "string" == typeof e
      }

      function dj(e) {
        return "boolean" == typeof e
      }

      function uj(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function cj(e) {
        return Math.abs(e)
      }

      function fj(e) {
        return Math.sign(e)
      }

      function pj(e, t) {
        return cj(e - t)
      }

      function hj(e) {
        return bj(e).map(Number)
      }

      function mj(e) {
        return e[vj(e)]
      }

      function vj(e) {
        return Math.max(0, e.length - 1)
      }

      function yj(e, t) {
        return t === vj(e)
      }

      function gj(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function bj(e) {
        return Object.keys(e)
      }

      function _j(e, t) {
        return [e, t].reduce((e, t) => (bj(t).forEach(r => {
          const n = e[r],
            o = t[r],
            i = uj(n) && uj(o);
          e[r] = i ? _j(n, o) : o
        }), e), {})
      }

      function wj(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function xj() {
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

      function Cj(e = 0, t = 0) {
        const r = cj(e - t);

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

      function Oj(e, t, r) {
        const {
          constrain: n
        } = Cj(0, e), o = e + 1;
        let i = s(t);

        function s(e) {
          return r ? cj((o + e) % o) : n(e)
        }

        function a() {
          return i
        }

        function l() {
          return Oj(e, a(), r)
        }
        const d = {
          get: a,
          set: function(e) {
            return i = s(e), d
          },
          add: function(e) {
            return l().set(a() + e)
          },
          clone: l
        };
        return d
      }

      function jj(e, t, r, n, o, i, s, a, l, d, u, c, f, p, h, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, C = xj(), O = xj(), j = Cj(50, 225).constrain(p.measure(20)), P = {
          mouse: 300,
          touch: 400
        }, S = {
          mouse: 500,
          touch: 600
        }, k = h ? 43 : 25;
        let R = !1,
          T = 0,
          D = 0,
          E = !1,
          N = !1,
          I = !1,
          z = !1;

        function M(e) {
          if (!wj(e, n) && e.touches.length >= 2) return L(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            s = pj(t, T),
            l = pj(r, D);
          if (!N && !z) {
            if (!e.cancelable) return L(e);
            if (N = s > l, !N) return L(e)
          }
          const u = i.pointerMove(e);
          s > m && (I = !0), d.useFriction(.3).useDuration(.75), a.start(), o.add(_(u)), e.preventDefault()
        }

        function L(e) {
          const t = u.byDistance(0, !1).index !== c.get(),
            r = i.pointerUp(e) * (h ? S : P)[z ? "mouse" : "touch"],
            n = function(e, t) {
              const r = c.add(-1 * fj(e)),
                n = u.byDistance(e, !h).distance;
              return h || cj(e) < j ? n : v && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (cj(e) <= cj(t)) return 0;
              const r = pj(cj(e), cj(t));
              return cj(r / e)
            }(r, n),
            s = k - 10 * o,
            a = y + o / 50;
          N = !1, E = !1, O.clear(), d.useDuration(s).useFriction(a), l.distance(n, !h), z = !1, f.emit("pointerUp")
        }

        function A(e) {
          I && (e.stopPropagation(), e.preventDefault(), I = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function a(a) {
              (dj(g) || g(e, a)) && function(e) {
                const a = wj(e, n);
                z = a, I = h && a && !e.buttons && R, R = pj(o.get(), s.get()) >= 2, a && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (E = !0, i.pointerDown(e), d.useFriction(0).useDuration(0), o.set(s), function() {
                  const e = z ? r : t;
                  O.add(e, "touchmove", M, x).add(e, "touchend", L).add(e, "mousemove", M, x).add(e, "mouseup", L)
                }(), T = i.readPoint(e), D = i.readPoint(e, b), f.emit("pointerDown"))
              }(a)
            }
            const l = t;
            C.add(l, "dragstart", e => e.preventDefault(), x).add(l, "touchmove", () => {}, x).add(l, "touchend", () => {}).add(l, "touchstart", a).add(l, "mousedown", a).add(l, "touchcancel", L).add(l, "contextmenu", L).add(l, "click", A, !0)
          },
          destroy: function() {
            C.clear(), O.clear()
          },
          pointerDown: function() {
            return E
          }
        }
      }

      function Pj(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (wj(r, t) ? r : r.touches[0])[o]
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
            return s && !a && cj(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function Sj(e, t, r, n, o, i, s) {
        const a = [e].concat(n);
        let l, d, u = [],
          c = !1;

        function f(e) {
          return o.measureSize(s.measure(e))
        }
        return {
          init: function(o) {
            i && (d = f(e), u = n.map(f), l = new ResizeObserver(r => {
              (dj(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (c) return;
                  const r = i.target === e,
                    s = n.indexOf(i.target),
                    a = r ? d : u[s];
                  if (cj(f(r ? e : n[s]) - a) >= .5) {
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
            c = !0, l && l.disconnect()
          }
        }
      }

      function kj(e, t, r, n, o) {
        const i = o.measure(10),
          s = o.measure(50),
          a = Cj(.1, .99);
        let l = !1;

        function d() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: d,
          constrain: function(o) {
            if (!d()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = cj(e[l] - t.get()),
              c = r.get() - t.get(),
              f = a.constrain(u / s);
            r.subtract(c * f), !o && cj(c) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function Rj(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: s,
            reachedMax: a
          } = Cj(o, i),
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

      function Tj(e) {
        let t = e;

        function r(e) {
          return aj(e) ? e : e.get()
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

      function Dj(e, t) {
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

      function Ej(e, t, r, n, o, i, s, a, l) {
        const d = hj(o),
          u = hj(o).reverse(),
          c = function() {
            const e = s[0];
            return h(p(u, e), r, !1)
          }().concat(function() {
            const e = t - s[0] - 1;
            return h(p(d, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function p(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function h(o, s, d) {
          const u = function(e) {
            return i.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(s);
          return o.map(t => {
            const n = d ? 0 : -r,
              o = d ? r : 0,
              i = d ? "end" : "start",
              s = u[t][i];
            return {
              index: t,
              loopPoint: s,
              slideLocation: Tj(-1),
              translate: Dj(e, l[t]),
              target: () => a.get() > s ? n : o
            }
          })
        }
        const m = {
          canLoop: function() {
            return c.every(({
              index: e
            }) => {
              const r = d.filter(t => t !== e);
              return f(r, t) <= .1
            })
          },
          clear: function() {
            c.forEach(e => e.translate.clear())
          },
          loop: function() {
            c.forEach(e => {
              const {
                target: t,
                translate: r,
                slideLocation: n
              } = e, o = t();
              o !== n.get() && (r.to(o), n.set(o))
            })
          },
          loopPoints: c
        };
        return m
      }

      function Nj(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver(e => {
              o || (dj(r) || r(i, e)) && function(e) {
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

      function Ij(e, t, r, n, o, i, s) {
        const {
          align: a,
          axis: l,
          direction: d,
          startIndex: u,
          loop: c,
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
        }, O = C.measure(t), j = r.map(C.measure), P = function(e, t) {
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
        }(l, d), S = P.measureSize(O), k = function(e) {
          const t = {
            measure: function(t) {
              return e * (t / 100)
            }
          };
          return t
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
              return lj(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(a, S), T = !c && !!g, D = c || !!g, {
          slideSizes: E,
          slideSizesWithGaps: N,
          startGap: I,
          endGap: z
        } = function(e, t, r, n, o, i) {
          const {
            measureSize: s,
            startEdge: a,
            endEdge: l
          } = e, d = r[0] && o, u = function() {
            if (!d) return 0;
            const e = r[0];
            return cj(t[a] - e[a])
          }(), c = function() {
            if (!d) return 0;
            const e = i.getComputedStyle(mj(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(s), p = r.map((e, t, r) => {
            const n = !t,
              o = yj(r, t);
            return n ? f[t] + u : o ? f[t] + c : r[t + 1][a] - e[a]
          }).map(cj);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: u,
            endGap: c
          }
        }(P, O, j, r, D, o), M = function(e, t, r, n, o, i, s, a, l) {
          const {
            startEdge: d,
            endEdge: u,
            direction: c
          } = e, f = aj(r), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return hj(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? hj(e).reduce((r, f, p) => {
                  const h = mj(r) || 0,
                    m = 0 === h,
                    v = f === vj(e),
                    y = o[d] - i[h][d],
                    g = o[d] - i[f][u],
                    b = !n && m ? c(s) : 0,
                    _ = cj(g - (!n && v ? c(a) : 0) - (y + b));
                  return p && _ > t + l && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(P, S, v, c, O, j, I, z, 2), {
          snaps: L,
          snapsAligned: A
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: s
          } = e, {
            groupSlides: a
          } = o, l = a(n).map(e => mj(e)[s] - e[0][i]).map(cj).map(t.measure), d = n.map(e => r[i] - e[i]).map(e => -cj(e)), u = a(d).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: d,
            snapsAligned: u
          }
        }(P, R, O, j, M), V = -mj(L) + mj(N), {
          snapsContained: F,
          scrollContainLimit: q
        } = function(e, t, r, n) {
          const o = Cj(-t + e, 0),
            i = r.map((e, t) => {
              const {
                min: n,
                max: i
              } = o, s = o.constrain(e), a = !t, d = yj(r, t);
              return a ? i : d || l(n, s) ? n : l(i, s) ? i : s
            }).map(e => parseFloat(e.toFixed(3))),
            s = function() {
              const e = i[0],
                t = mj(i);
              return Cj(i.lastIndexOf(e), i.indexOf(t) + 1)
            }(),
            a = function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === n) return i;
              const {
                min: r,
                max: a
              } = s;
              return i.slice(r, a)
            }();

          function l(e, t) {
            return pj(e, t) <= 1
          }
          return {
            snapsContained: a,
            scrollContainLimit: s
          }
        }(S, V, A, g), B = T ? F : A, {
          limit: X
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: Cj(r ? n - e : mj(t), n)
          }
        }(V, B, c), W = Oj(vj(B), u, c), H = W.clone(), U = hj(r), G = function(e, t, r, n) {
          const o = xj(),
            i = 1e3 / 60;
          let s = null,
            a = 0,
            l = 0;

          function d(e) {
            if (!l) return;
            s || (s = e, r(), r());
            const o = e - s;
            for (s = e, a += o; a >= i;) r(), a -= i;
            n(a / i), l && (l = t.requestAnimationFrame(d))
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
              l || (l = t.requestAnimationFrame(d))
            },
            stop: u,
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
          eventHandler: d,
          scrollBounds: u,
          options: {
            loop: c
          }
        }, f) => {
          const p = e.settled(),
            h = !u.shouldConstrain(),
            m = c ? p : p && h,
            v = m && !a.pointerDown();
          v && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), c && (i.loop(e.direction()), s.loop()), t.to(n.get()), v && d.emit("settle"), m || d.emit("scroll")
        })(ae, e)), Z = B[W.get()], $ = Tj(Z), K = Tj(Z), Y = Tj(Z), Q = Tj(Z), J = function(e, t, r, n, o) {
          let i = 0,
            s = 0,
            a = o,
            l = .68,
            d = e.get(),
            u = 0;

          function c(e) {
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
              return a ? (r.set(e), i += t / a, i *= l, d += i, e.add(i), o = d - u) : (i = 0, r.set(n), e.set(n), o = t), s = fj(o), u = d, p
            },
            settled: function() {
              return cj(n.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return f(.68)
            },
            useBaseDuration: function() {
              return c(o)
            },
            useFriction: f,
            useDuration: c
          };
          return p
        }($, Y, K, Q, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: i,
            removeOffset: s,
            constrain: a
          } = n;

          function l(e) {
            return e.concat().sort((e, t) => cj(e) - cj(t))[0]
          }

          function d(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter(e => fj(e) === n);
            return i.length ? l(i) : mj(o) - r
          }
          const u = {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: u,
                  distance: c
                } = function(r) {
                  const n = e ? s(r) : a(r),
                    o = t.map((e, t) => ({
                      diff: d(e - n, 0),
                      index: t
                    })).sort((e, t) => cj(e.diff) - cj(t.diff)),
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
                index: u,
                distance: r
              } : {
                index: u,
                distance: r + d(t[u] - c, 0)
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
          return u
        }(c, B, V, X, Q), te = function(e, t, r, n, o, i, s) {
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
        }(G, W, H, J, ee, Q, s), re = function(e) {
          const {
            max: t,
            length: r
          } = e, n = {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          };
          return n
        }(X), ne = xj(), oe = function(e, t, r, n) {
          const o = {};
          let i, s = null,
            a = null,
            l = !1;
          const d = {
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
                return bj(o).reduce((t, r) => {
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
          return d
        }(t, r, s, m), {
          slideRegistry: ie
        } = function(e, t, r, n, o, i) {
          const {
            groupSlides: s
          } = o, {
            min: a,
            max: l
          } = n, d = function() {
            const n = s(i),
              o = !e || "keepSnaps" === t;
            return 1 === r.length ? [i] : o ? n : n.slice(a, l).map((e, t, r) => {
              const n = !t,
                o = yj(r, t);
              return n ? gj(mj(r[0]) + 1) : o ? gj(vj(i) - mj(r)[0] + 1, mj(r)[0]) : e
            })
          }();
          return {
            slideRegistry: d
          }
        }(T, g, B, q, M, U), se = function(e, t, r, n, o, i, s, a) {
          const l = {
            passive: !0,
            capture: !0
          };
          let d = 0;

          function u(e) {
            "Tab" === e.code && (d = (new Date).getTime())
          }
          const c = {
            init: function(c) {
              a && (i.add(document, "keydown", u, !1), t.forEach((t, u) => {
                i.add(t, "focus", t => {
                  (dj(a) || a(c, t)) && function(t) {
                    if ((new Date).getTime() - d > 10) return;
                    s.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex(e => e.includes(t));
                    aj(i) && (o.useDuration(0), n.index(i, 0), s.emit("slideFocus"))
                  }(u)
                }, l)
              }))
            }
          };
          return c
        }(e, r, ie, te, J, ne, s, x), ae = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: s,
          containerRect: O,
          slideRects: j,
          animation: G,
          axis: P,
          dragHandler: jj(P, e, n, o, Q, Pj(P, o), $, G, te, J, ee, W, s, k, p, h, y, .68, w),
          eventStore: ne,
          percentOfView: k,
          index: W,
          indexPrevious: H,
          limit: X,
          location: $,
          offsetLocation: Y,
          previousLocation: K,
          options: i,
          resizeHandler: Sj(t, s, o, r, P, b, C),
          scrollBody: J,
          scrollBounds: kj(X, Y, Q, J, k),
          scrollLooper: Rj(V, X, Y, [$, Y, K, Q]),
          scrollProgress: re,
          scrollSnapList: B.map(re.get),
          scrollSnaps: B,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Ej(P, S, V, E, N, L, B, Y, r),
          slideFocus: se,
          slidesHandler: Nj(t, s, _),
          slidesInView: oe,
          slideIndexes: U,
          slideRegistry: ie,
          slidesToScroll: M,
          target: Q,
          translate: Dj(P, t)
        };
        return ae
      }
      const zj = {
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

      function Mj(e) {
        function t(e, t) {
          return _j(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = bj(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => bj(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function Lj(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = Mj(o),
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
          a = xj(),
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
            optionsAtMedia: u,
            optionsMediaQueries: c
          } = i,
          {
            on: f,
            off: p,
            emit: h
          } = l,
          m = P;
        let v, y, g, b, _ = !1,
          w = d(zj, Lj.globalOptions),
          x = d(w),
          C = [];

        function O(t) {
          const r = Ij(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? O(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function j(t, r) {
          _ || (w = d(w, t), x = u(w), C = r || C, function() {
            const {
              container: t,
              slides: r
            } = x, n = lj(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = lj(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = O(x), c([w, ...C.map(({
            options: e
          }) => e)]).forEach(e => a.add(e, "change", P)), x.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(T), v.eventHandler.init(T), v.resizeHandler.init(T), v.slidesHandler.init(T), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(T), y = s.init(T, C)))
        }

        function P(e, t) {
          const r = R();
          S(), j(d({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function S() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), s.destroy(), a.clear()
        }

        function k(e, t, r) {
          x.active && !_ && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), v.scrollTo.index(e, r || 0))
        }

        function R() {
          return v.index.get()
        }
        const T = {
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
        return j(t, r), setTimeout(() => l.emit("init"), 0), T
      }

      function Aj(e = {}, t = []) {
        const r = (0, B.useRef)(e),
          n = (0, B.useRef)(t),
          [o, i] = (0, B.useState)(),
          [s, a] = (0, B.useState)(),
          l = (0, B.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, B.useEffect)(() => {
          ij(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, B.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = sj(e),
              n = sj(t);
            return r.every((e, t) => ij(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, B.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && s) {
            Lj.globalOptions = Aj.globalOptions;
            const e = Lj(s, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }, [s, i]), [a, o]
      }

      function Vj(e = {}) {
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
      Lj.globalOptions = void 0, Aj.globalOptions = void 0, Vj.globalOptions = void 0;
      const Fj = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function qj(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Bj(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Xj(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Wj(e = {}) {
        let t, r, n, o, i = [],
          s = [];
        const a = ["select"],
          l = ["pointerDown", "pointerUp"],
          d = ["slidesInView"],
          u = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function c(e, t) {
          ("pointerDown" === t ? Xj : Bj)(n, u.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return n.forEach(e => Bj(e, r)), i.forEach(e => Xj(e, r)), e
        }

        function p() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          i = f(t, i, u.snapped)
        }

        function h() {
          const e = r.slidesInView();
          s = f(e, s, u.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(i, s) {
            r = i;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = s, v = f(Fj, Wj.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (u.loop = qj(t.loop), Xj(n, u.loop)), t.draggable && _ && (u.draggable = qj(t.draggable), Xj(n, u.draggable)), t.dragging && (u.dragging = qj(t.dragging), l.forEach(e => r.on(e, c))), t.snapped && (u.snapped = qj(t.snapped), a.forEach(e => r.on(e, p)), p()), t.inView && (u.inView = qj(t.inView), d.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            l.forEach(e => r.off(e, c)), a.forEach(e => r.off(e, p)), d.forEach(e => r.off(e, h)), Bj(n, u.loop), Bj(n, u.draggable), Bj(n, u.dragging), f([], i, u.snapped), f([], s, u.inView), Object.keys(u).forEach(e => {
              u[e] = []
            })
          }
        };
        return m
      }
      Wj.globalOptions = void 0;

      function Hj(e) {
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

      function Uj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Gj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uj(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Hj(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Zj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var $j = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Kj = "foundry_qmpv6yv",
        Yj = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gj(Gj({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) $j(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zj(e.variantClassNames, e => Zj(e, e => e.split(" ")[0]))
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
      const Qj = (0, B.createContext)(null);

      function Jj() {
        const e = (0, B.useContext)(Qj);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const eP = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: i,
          align: s = "left",
          ...a
        }, l) => {
          const d = (({
              loopPagination: e = !0
            }) => {
              const t = (0, $.rl)(),
                r = (0, $.jt)(),
                [n, o] = (0, B.useState)([]),
                i = n.length,
                [s, a] = (0, B.useState)(0),
                [l, d] = Aj({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [Vj(), Wj()]),
                u = (0, B.useRef)(0),
                c = (0, B.useRef)(!1),
                f = n[s],
                p = (0, B.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), a(t), c.current = !0
                }, [d]),
                h = (0, B.useCallback)(e => {
                  u.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, B.useCallback)((e, t) => {
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
                      const l = (d = 1 - Math.abs(a * u.current), Math.min(Math.max(d, 0), 1)).toString();
                      var d;
                      e.slideNodes()[s].style.opacity = l
                    })
                  })
                }, []);
              return (0, B.useEffect)(() => {
                d && (h(d), m(d), d.on("reInit", h).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [d, m]), (0, B.useEffect)(() => {
                d && (p(d), d.on("select", p).on("reInit", p))
              }, [d, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => d?.scrollPrev(r),
                nextAlert: () => d?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: s,
                setCurrentAlertIndex: a,
                isInitialized: c.current,
                loopPagination: e,
                canScrollNext: () => d?.canScrollNext() || !1,
                canScrollPrev: () => d?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: u,
              isInitialized: c,
              setAlerts: f,
              numAlerts: p
            } = d;
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
            m = (0, U.v6)({
              className: Yj(u)
            }, h, a),
            v = e ? K.DX : "div";
          return (0, j.jsx)(Qj.Provider, {
            value: d,
            children: (0, j.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": c,
              ...m,
              children: t
            })
          })
        }),
        tP = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        rP = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Jj();
          if (!e && !n || !n?.status) return null;
          const o = e || tP[n.status],
            i = le[o],
            s = (0, U.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, j.jsx)(i, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        nP = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? K.DX : "div",
            i = (0, U.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, j.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        oP = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, s) => {
          const a = e ? K.DX : "div",
            l = (0, U.v6)({
              className: "foundry_qmpv6yo"
            }, i);
          return (0, j.jsx)(a, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        iP = (0, B.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = Jj(), s = (0, U.v6)({
            className: "foundry_qmpv6ym"
          }, r), a = (0, $.UP)(i, n), l = B.Children.map(t, e => {
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
          }, []), (0, j.jsx)("div", {
            ref: a,
            "data-testid": e,
            ...s,
            children: (0, j.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        sP = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, B.useRef)(null),
            s = (0, $.UP)(i, o),
            a = e ? K.DX : "a",
            {
              linkProps: l,
              isPressed: d
            } = SO(n, i),
            u = (0, U.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, j.jsx)(a, {
            "data-pressed": d,
            "data-testid": r,
            ref: s,
            ...l,
            ...u,
            children: t
          })
        }),
        aP = (0, B.forwardRef)((e, t) => {
          const r = (0, U.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, j.jsx)(zO, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        lP = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? K.DX : "div",
            s = (0, U.v6)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        dP = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Jj(), i = (0, U.v6)({
            className: Kj
          }, t);
          return (0, j.jsx)(Re, {
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
        uP = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Jj(), i = (0, U.v6)({
            className: Kj
          }, t);
          return (0, j.jsx)(Re, {
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
        cP = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Jj(), i = (0, U.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn foundry_tdsdcdr"
          }, t);
          return (0, j.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [n + 1, "/", o]
          })
        });

      function fP(e) {
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
            var n, o, i;
            n = e, o = t, i = r[t], (o = fP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var vP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hP(hP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) vP(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mP(e.variantClassNames, e => mP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        gP = yP({
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
        bP = yP({
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
        _P = yP({
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
      const wP = (0, B.createContext)(null);

      function xP() {
        const e = (0, B.useContext)(wP);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const CP = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: i,
          hasBorder: s,
          isDisabled: a,
          ...l
        }, d) => {
          const u = {
              size: n,
              background: o,
              color: i,
              hasBorder: s,
              isDisabled: a
            },
            c = (0, U.v6)({
              className: bP(u)
            }, l),
            f = e ? K.DX : "div";
          return (0, j.jsx)(wP.Provider, {
            value: u,
            children: (0, j.jsx)(f, {
              ref: d,
              "data-testid": r,
              "aria-disabled": a,
              ...c,
              children: t
            })
          })
        }),
        OP = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = xP(), s = e ? K.DX : "div", a = (0, U.v6)({
            className: _P({
              size: i
            })
          }, n);
          return (0, j.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        jP = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = le[e],
            o = (0, U.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, j.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        PP = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = xP(), i = (0, U.v6)({
            className: gP({
              background: n
            })
          }, t);
          return (0, j.jsx)(Re, {
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
      var SP = "ToastProvider",
        [kP, RP, TP] = Wm("Toast"),
        [DP, EP] = xf("Toast", [TP]),
        [NP, IP] = DP(SP),
        zP = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
          } = e, [a, l] = B.useState(null), [d, u] = B.useState(0), c = B.useRef(!1), f = B.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${SP}\`. Expected non-empty \`string\`.`), (0, j.jsx)(kP.Provider, {
            scope: t,
            children: (0, j.jsx)(NP, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: i,
              toastCount: d,
              viewport: a,
              onViewportChange: l,
              onToastAdd: B.useCallback(() => u(e => e + 1), []),
              onToastRemove: B.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: c,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      zP.displayName = SP;
      var MP = "ToastViewport",
        LP = ["F8"],
        AP = "toast.viewportPause",
        VP = "toast.viewportResume",
        FP = B.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = LP,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, s = IP(MP, r), a = RP(r), l = B.useRef(null), d = B.useRef(null), u = B.useRef(null), c = B.useRef(null), f = (0, wf.s)(t, c, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = s.toastCount > 0;
          B.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && c.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), B.useEffect(() => {
            const e = l.current,
              t = c.current;
            if (h && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(AP);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(VP);
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
          const m = B.useCallback(({
            tabbingDirection: e
          }) => {
            const t = a().map(t => {
              const r = t.ref.current,
                n = [r, ...oS(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [a]);
          return B.useEffect(() => {
            const e = c.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void d.current?.focus();
                  const o = m({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    i = o.findIndex(e => e === r);
                  iS(o.slice(i + 1)) ? t.preventDefault() : n ? d.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, j.jsxs)(Vf, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, j.jsx)(BP, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                iS(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, j.jsx)(kP.Slot, {
              scope: r,
              children: (0, j.jsx)(kf.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), h && (0, j.jsx)(BP, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                iS(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      FP.displayName = MP;
      var qP = "ToastFocusProxy",
        BP = B.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, i = IP(qP, r);
          return (0, j.jsx)(Yh, {
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
      BP.displayName = qP;
      var XP = "Toast",
        WP = B.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            ...s
          } = e, [a, l] = $h({
            prop: n,
            defaultProp: o ?? !0,
            onChange: i,
            caller: XP
          });
          return (0, j.jsx)(Uh, {
            present: r || a,
            children: (0, j.jsx)(GP, {
              open: a,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: Tf(e.onPause),
              onResume: Tf(e.onResume),
              onSwipeStart: _f(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: _f(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: _f(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: _f(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      WP.displayName = XP;
      var [HP, UP] = DP(XP, {
        onClose() {}
      }), GP = B.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: i,
          onClose: s,
          onEscapeKeyDown: a,
          onPause: l,
          onResume: d,
          onSwipeStart: u,
          onSwipeMove: c,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...h
        } = e, m = IP(XP, r), [v, y] = B.useState(null), g = (0, wf.s)(t, e => y(e)), b = B.useRef(null), _ = B.useRef(null), w = o || m.duration, x = B.useRef(0), C = B.useRef(w), O = B.useRef(0), {
          onToastAdd: P,
          onToastRemove: S
        } = m, k = Tf(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), s()
        }), R = B.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(O.current), x.current = (new Date).getTime(), O.current = window.setTimeout(k, e))
        }, [k]);
        B.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                R(C.current), d?.()
              },
              r = () => {
                const e = (new Date).getTime() - x.current;
                C.current = C.current - e, window.clearTimeout(O.current), l?.()
              };
            return e.addEventListener(AP, r), e.addEventListener(VP, t), () => {
              e.removeEventListener(AP, r), e.removeEventListener(VP, t)
            }
          }
        }, [m.viewport, w, l, d, R]), B.useEffect(() => {
          i && !m.isClosePausedRef.current && R(w)
        }, [i, w, m.isClosePausedRef, R]), B.useEffect(() => (P(), () => S()), [P, S]);
        const T = B.useMemo(() => v ? tS(v) : null, [v]);
        return m.viewport ? (0, j.jsxs)(j.Fragment, {
          children: [T && (0, j.jsx)(ZP, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: T
          }), (0, j.jsx)(HP, {
            scope: r,
            onClose: k,
            children: of.createPortal((0, j.jsx)(kP.ItemSlot, {
              scope: r,
              children: (0, j.jsx)(Af, {
                asChild: !0,
                onEscapeKeyDown: _f(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || k(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, j.jsx)(kf.li, {
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
                  onKeyDown: _f(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, k()))
                  }),
                  onPointerDown: _f(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: _f(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(_.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      i = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      s = o ? i(0, t) : 0,
                      a = o ? 0 : i(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      d = {
                        x: s,
                        y: a
                      },
                      f = {
                        originalEvent: e,
                        delta: d
                      };
                    n ? (_.current = d, rS("toast.swipeMove", c, f, {
                      discrete: !1
                    })) : nS(d, m.swipeDirection, l) ? (_.current = d, rS("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: _f(e.onPointerUp, e => {
                    const t = _.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), _.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      nS(t, m.swipeDirection, m.swipeThreshold) ? rS("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : rS("toast.swipeCancel", f, n, {
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
      }), ZP = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = IP(XP, t), [i, s] = B.useState(!1), [a, l] = B.useState(!1);
        return function(e = () => {}) {
          const t = Tf(e);
          Ff(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), B.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, j.jsx)(Hh, {
          asChild: !0,
          children: (0, j.jsx)(Yh, {
            ...n,
            children: i && (0, j.jsxs)(j.Fragment, {
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
        return (0, j.jsx)(kf.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var $P = B.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, j.jsx)(kf.div, {
          ...n,
          ref: t
        })
      });
      $P.displayName = "ToastDescription";
      var KP = "ToastAction",
        YP = B.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, j.jsx)(eS, {
            altText: r,
            asChild: !0,
            children: (0, j.jsx)(JP, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${KP}\`. Expected non-empty \`string\`.`), null)
        });
      YP.displayName = KP;
      var QP = "ToastClose",
        JP = B.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = UP(QP, r);
          return (0, j.jsx)(eS, {
            asChild: !0,
            children: (0, j.jsx)(kf.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: _f(e.onClick, o.onClose)
            })
          })
        });
      JP.displayName = QP;
      var eS = B.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, j.jsx)(kf.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function tS(e) {
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
              } else t.push(...tS(e))
          }
        }), t
      }

      function rS(e, t, r, {
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
        }), n ? Rf(o, i) : o.dispatchEvent(i)
      }
      var nS = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          i = n > o;
        return "left" === t || "right" === t ? i && n > r : !i && o > r
      };

      function oS(e) {
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

      function iS(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var sS = zP,
        aS = FP,
        lS = WP,
        dS = $P,
        uS = YP,
        cS = JP;

      function fS(e) {
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

      function pS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pS(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = fS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var vS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hS(hS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) vS(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mS(e.variantClassNames, e => mS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        gS = yS({
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
        bS = yS({
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
        _S = yS({
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
      const wS = ({
          testId: e,
          ...t
        }) => (0, j.jsx)(sS, {
          "data-testid": e,
          ...t
        }),
        xS = (0, B.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const i = (0, U.v6)({
            className: _S({
              position: r
            })
          }, n);
          return (0, j.jsx)(aS, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        CS = (0, B.createContext)(null);

      function OS() {
        const e = (0, B.useContext)(CS);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const jS = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, i) => {
          const s = e ? K.DX : lS,
            a = (0, U.v6)({
              className: bS({
                appearance: n
              })
            }, o);
          return (0, j.jsx)(CS.Provider, {
            value: {
              appearance: n
            },
            children: (0, j.jsx)(s, {
              ref: i,
              "data-testid": r,
              ...a,
              children: t
            })
          })
        }),
        PS = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? K.DX : dS,
            s = (0, U.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, j.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        SS = {
          danger: le.CircleX,
          information: le.Info,
          success: le.CircleCheck,
          warning: le.TriangleAlert,
          avocado: le.CircleCheck
        },
        kS = (0, B.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = OS(), o = e ? K.DX : SS[n], i = (0, U.v6)({
            className: gS({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, j.jsx)(o, {
            ref: r,
            ...i
          })
        }),
        RS = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, j.jsx)(uS, {
            ref: o,
            "data-testid": r,
            ...i,
            children: e ? (0, j.jsx)(K.DX, {
              children: t
            }) : (0, j.jsx)(be, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        TS = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, i) => {
          const s = (0, U.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, j.jsx)(cS, {
            ref: i,
            "data-testid": r,
            ...s,
            children: e ? (0, j.jsx)(K.DX, {
              children: t
            }) : (0, j.jsx)(zO, {
              size: "SM",
              label: n
            })
          })
        });

      function DS(e) {
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

      function ES(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function NS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ES(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = DS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ES(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function IS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var zS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        MS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = NS(NS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) zS(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return IS(e.variantClassNames, e => IS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        LS = MS({
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
        AS = MS({
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
        VS = MS({
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

      function FS() {
        const e = (0, B.useContext)(qS);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const qS = (0, B.createContext)(null),
        BS = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const s = (0, U.v6)({
              className: VS({
                size: n
              })
            }, o),
            a = r ? K.DX : "ol";
          return (0, j.jsx)(qS.Provider, {
            value: {
              size: n
            },
            children: (0, j.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        XS = (0, B.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, B.useRef)(null),
            {
              size: a
            } = FS(),
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
              } = SO({
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
            d = r ? K.DX : "a",
            u = (0, U.v6)({
              className: (0, ae.$)(LS({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, j.jsx)("li", {
            className: AS({
              size: a
            }),
            ref: i,
            children: (0, j.jsx)(d, {
              ref: s,
              ...u,
              children: t
            })
          })
        }),
        WS = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = le[e];
          return (0, j.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        HS = (0, B.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [s, a] = (0, B.useState)(r), {
            size: l
          } = FS(), d = (0, U.v6)({
            className: AS({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, j.jsx)("li", {
            ref: i,
            ...d,
            children: (0, j.jsxs)(Gb, {
              open: s,
              onOpenChange: () => a(!s),
              children: [(0, j.jsx)(Zb, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, j.jsx)(Yb, {
                children: (0, j.jsx)(Qb, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, j.jsx)(Jb, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        US = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? K.DX : e_,
            s = (0, U.v6)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, j.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        });

      function GS(e) {
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

      function ZS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ZS(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = GS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ZS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function KS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var YS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        QS = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $S($S({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) YS(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return KS(e.variantClassNames, e => KS(e, e => e.split(" ")[0]))
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
      const JS = (0, B.createContext)(null);

      function ek() {
        const e = (0, B.useContext)(JS);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const tk = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...i
        }, s) => {
          const a = e ? K.DX : "div",
            l = (0, U.v6)({
              className: QS({
                appearance: r,
                type: o,
                size: n
              })
            }, i);
          return (0, j.jsx)(JS.Provider, {
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
        rk = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? K.DX : "div",
            i = (0, U.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, j.jsx)(o, {
            ref: n,
            ...i
          })
        }),
        nk = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = le[e],
            o = (0, U.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, j.jsx)(n, {
            ref: r,
            ...o
          })
        });

      function ok(e) {
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

      function ik(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function sk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ik(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ok(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ik(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ak(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var lk = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dk = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sk(sk({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) lk(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ak(e.variantClassNames, e => ak(e, e => e.split(" ")[0]))
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
      const uk = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, U.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, j.jsx)(Wg, {
            ref: r,
            ...n
          })
        }),
        ck = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, U.v6)({
            "data-testid": e,
            className: "foundry_hwzz172",
            tabIndex: 0
          }, t);
          return (0, j.jsx)(Hg, {
            ref: r,
            ...n
          })
        }),
        fk = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, U.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, j.jsx)(Ug, {
            ref: r,
            ...n
          })
        }),
        pk = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, $.rl)(),
            o = (0, U.v6)({
              "data-testid": e,
              className: dk({
                isTouchDevice: n
              })
            }, t);
          return (0, j.jsx)(Gg, {
            ref: r,
            ...o
          })
        }),
        hk = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, U.v6)({
            "data-testid": e
          }, t);
          return (0, j.jsx)(Zg, {
            ref: r,
            ...n
          })
        }),
        mk = () => {
          const e = (0, $.Ub)(U.fi.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        vk = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function yk(e) {
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

      function gk(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function bk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gk(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = yk(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gk(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function _k(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wk = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xk = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bk(bk({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) wk(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _k(e.variantClassNames, e => _k(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ck = "foundry_8kowh41",
        Ok = xk({
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
        jk = xk({
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
      const Pk = (0, B.createContext)({
        isControlled: !1,
        openImmediately: !1,
        setIsOpen: () => {},
        contentId: "",
        descriptionId: "",
        triggerRef: (0, B.createRef)(),
        dialogSpringRef: $c(),
        overlaySpringRef: $c(),
        headerAlign: "center",
        setHeaderAlign: () => {}
      });

      function Sk() {
        const e = (0, B.useContext)(Pk);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const kk = ({
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
          const [d, u] = (0, B.useState)("center"), c = (0, U.v6)({
            "data-testid": e
          }, l), [f, p] = (0, $.ic)({
            prop: n,
            defaultProp: t ?? !1,
            onChange: r
          }), h = (0, $.ZC)(f);
          return (0, j.jsx)(Pk.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== h || !t),
              setIsOpen: p,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: i,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, B.useId)(),
              descriptionId: (0, B.useId)(),
              triggerRef: (0, B.useRef)(null),
              dialogSpringRef: Yc(),
              overlaySpringRef: Yc(),
              headerAlign: d,
              setHeaderAlign: u
            },
            children: (0, j.jsx)(wy, {
              open: f,
              onOpenChange: p,
              ...c
            })
          })
        },
        Rk = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: i
          } = Sk(), s = vk(), a = (0, $.jt)(), l = Qc(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: lc.stiff,
            immediate: a || i
          }), d = (0, U.v6)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), u = bf(Oy);
          return (0, B.useEffect)(() => {
            o.start()
          }, [n]), l((e, t) => t ? (0, j.jsx)(u, {
            forceMount: !0,
            ref: r,
            ...d,
            style: e
          }) : null)
        }),
        Tk = (0, B.forwardRef)(({
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
            contentId: d,
            triggerRef: u,
            onOpenTransitionStart: c,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = Sk(), y = (0, $.rl)(), g = (0, $.jt)(), b = (0, B.useRef)(null), _ = mk(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const i = vk(),
              s = mk(),
              a = (0, B.useRef)();
            var l;
            return {
              bindDrag: (l = ({
                velocity: [, l],
                offset: [, d],
                direction: [, u],
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
                  }(h, u)), (!a.current || d < -70) && c(), a.current) {
                  const e = 100 * (m - d) / m;
                  r.start({
                    ...i(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (d > .5 * m || l > .5 && u > 0 ? (t.start({
                  ...s(0),
                  immediate: !1,
                  config: lc.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...i(0),
                  immediate: !1,
                  config: lc.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: lc.stiff
                }), r.start({
                  ...i(100),
                  immediate: !1,
                  config: lc.stiff
                })))
              }, ea(ta), ya({
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
          }), x = Qc(s, {
            from: _(0),
            enter: _(100),
            leave: _(0),
            delay: s ? 100 : 0,
            config: lc.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? c?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : h?.()
            }
          });
          (0, B.useEffect)(() => {
            m.start()
          }, [s]);
          const C = (0, $.UP)(b, i),
            O = y && !g && !n && w(),
            P = (0, U.v6)({
              "data-testid": t,
              className: "foundry_xov33nf",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: d
            }, O || {}, o),
            S = bf(jy);
          return x((t, r) => r ? (0, j.jsx)("div", {
            className: "foundry_xov33n2",
            children: (0, j.jsx)(S, {
              forceMount: !0,
              ref: C,
              ...P,
              style: t,
              children: e
            })
          }) : null)
        }),
        Dk = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, U.v6)({
            "data-testid": t,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, j.jsx)(Py, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ek = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, U.v6)({
            "data-testid": t
          }, r);
          return (0, j.jsx)(Sy, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Nk = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, U.v6)({
            className: "foundry_xov33nj",
            "data-testid": t
          }, r);
          return (0, j.jsxs)(uk, {
            ref: n,
            ...o,
            children: [(0, j.jsx)(ck, {
              className: "foundry_xov33nk",
              children: e
            }), (0, j.jsx)(fk, {
              className: "foundry_xov33nl",
              orientation: "vertical",
              children: (0, j.jsx)(pk, {
                className: "foundry_xov33nm"
              })
            })]
          })
        }),
        Ik = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, n),
            s = e ? K.DX : "div";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        zk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            headerAlign: i
          } = (0, B.useContext)(Pk), s = (0, U.v6)({
            "data-testid": r,
            className: Ok({
              headerAlign: i
            })
          }, n), a = e ? K.DX : "header";
          return (0, j.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Mk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n = "left",
          appearance: o = "sentence",
          ...i
        }, s) => {
          const {
            setHeaderAlign: a
          } = (0, B.useContext)(Pk);
          (0, B.useEffect)(() => {
            a(n)
          }, [n]);
          const l = (0, U.v6)({
              "data-testid": r,
              className: jk({
                align: n,
                appearance: o
              })
            }, i),
            d = e ? K.DX : Py;
          return (0, j.jsx)(d, {
            ref: s,
            ...l,
            children: t
          })
        }),
        Lk = (0, B.forwardRef)(({
          onPress: e,
          onClick: t,
          ...r
        }, n) => {
          const {
            isControlled: o,
            setIsOpen: i
          } = Sk(), s = (0, U.v6)({
            className: (0, ae.$)("foundry_xov33n9", "foundry_xov33n1"),
            onPress: function(r) {
              e?.(r) ?? t?.(r), !o && i(!1)
            }
          }, r);
          return (0, j.jsx)(zO, {
            ...s,
            size: "LG",
            ref: n
          })
        }),
        Ak = (0, B.forwardRef)((e, t) => {
          const r = (0, U.v6)({
            className: "foundry_xov33n3"
          }, e);
          return (0, j.jsx)(Re, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        Vk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
              "data-testid": r,
              className: "foundry_xov33nh"
            }, n),
            s = e ? K.DX : "div";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        Fk = (0, B.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = Sk(), a = (0, U.v6)({
            className: Ck,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, j.jsx)(be, {
            ref: o,
            ...a,
            children: e
          })
        }),
        qk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
              "data-testid": r,
              className: "foundry_xov33ni"
            }, n),
            s = e ? K.DX : "footer";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        Bk = (0, B.forwardRef)(({
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
            contentId: d,
            triggerRef: u
          } = Sk(), c = (0, $.UP)(u, i), f = (0, U.v6)({
            className: Ck,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": d,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !s && a(!0)
            }
          }, o), p = e ? K.DX : xy;
          return (0, j.jsx)(p, {
            ...f,
            ref: c,
            children: t
          })
        }),
        Xk = ({
          testId: e,
          ...t
        }) => {
          const r = (0, U.v6)({
            "data-testid": e
          }, t);
          return (0, j.jsx)(Cy, {
            forceMount: !0,
            ...r
          })
        };

      function Wk(...e) {
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
      var Hk = r(20972),
        Uk = r(89104);

      function Gk() {
        return () => {}
      }
      var Zk = "Avatar",
        [$k, Kk] = function(e, t = []) {
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
            const i = r.length;
            r = [...r, n];
            const s = t => {
              const {
                scope: r,
                children: n,
                ...s
              } = t, a = r?.[e]?.[i] || o, l = B.useMemo(() => s, Object.values(s));
              return (0, j.jsx)(a.Provider, {
                value: l,
                children: n
              })
            };
            return s.displayName = t + "Provider", [s, function(r, s) {
              const a = s?.[e]?.[i] || o,
                l = B.useContext(a);
              if (l) return l;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, Wk(n, ...t)]
        }(Zk),
        [Yk, Qk] = $k(Zk),
        Jk = B.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, i] = B.useState("idle");
          return (0, j.jsx)(Yk, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: i,
            children: (0, j.jsx)(Hk.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      Jk.displayName = Zk;
      var eR = "AvatarImage",
        tR = B.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...i
          } = e, s = Qk(eR, r), a = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, Uk.useSyncExternalStore)(Gk, () => !0, () => !1),
              o = B.useRef(null),
              i = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, a] = B.useState(() => nR(i, e));
            return Ff(() => {
              a(nR(i, e))
            }, [i, e]), Ff(() => {
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
          }(n, i), l = Tf(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return Ff(() => {
            "idle" !== a && l(a)
          }, [a, l]), "loaded" === a ? (0, j.jsx)(Hk.sG.img, {
            ...i,
            ref: t,
            src: n
          }) : null
        });
      tR.displayName = eR;
      var rR = "AvatarFallback";

      function nR(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      B.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, i = Qk(rR, r), [s, a] = B.useState(void 0 === n);
        return B.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => a(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== i.imageLoadingStatus ? (0, j.jsx)(Hk.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = rR;
      var oR = Jk,
        iR = tR;

      function sR(e) {
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

      function aR(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? aR(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = sR(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aR(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function dR(e, t) {
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
        cR = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lR(lR({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) uR(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dR(e.variantClassNames, e => dR(e, e => e.split(" ")[0]))
            }
          }, t
        },
        fR = cR({
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
        pR = "var(--foundry_v912w22)",
        hR = "var(--foundry_v912w23)",
        mR = cR({
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
        vR = cR({
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
        yR = "var(--foundry_v912w21)",
        gR = "var(--foundry_v912w20)",
        bR = cR({
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
      const _R = (0, B.createContext)(null);

      function wR() {
        const e = (0, B.useContext)(_R);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const xR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: i = !1,
          ...s
        }, a) => {
          const l = (0, U.v6)({
            "data-testid": r,
            "aria-disabled": i,
            className: fR({
              isDisabled: i
            }),
            asChild: e
          }, s);
          return (0, j.jsx)(_R.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: i
            },
            children: (0, j.jsx)(oR, {
              ref: a,
              ...l,
              children: t
            })
          })
        }),
        CR = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: i,
            isDisabled: s
          } = wR(), [a, l] = (0, B.useState)(!1);
          (0, B.useEffect)(() => {
            l(!1)
          }, [r]);
          const d = a || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            u = (0, U.v6)({
              className: mR({
                isDisabled: s
              }),
              src: d,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, n);
          return (0, j.jsx)("span", {
            className: vR({
              size: i,
              isDisabled: s,
              isFallback: a
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, j.jsx)(iR, {
              ref: o,
              ...u
            })
          })
        }),
        OR = (0, B.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, B.useRef)(null),
            {
              size: i,
              status: s,
              isDisabled: a
            } = wR(),
            l = (0, $.UP)(o, n),
            d = (0, U.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: bR({
                status: s,
                size: i,
                isDisabled: a
              }),
              style: (0, W.DI)({
                [gR]: t?.online,
                [yR]: t?.offline,
                [pR]: t?.away,
                [hR]: t?.busy
              })
            }, r);
          return (0, j.jsx)("span", {
            ref: l,
            ...d
          })
        });

      function jR(e) {
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

      function PR(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function SR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? PR(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = jR(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : PR(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function kR(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var RR = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        TR = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = SR(SR({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) RR(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kR(e.variantClassNames, e => kR(e, e => e.split(" ")[0]))
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
      const DR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? K.DX : "nav";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        ER = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? K.DX : "div";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        NR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, B.useRef)(null),
            a = (0, $.UP)(s, i),
            {
              linkProps: l,
              isPressed: d
            } = SO(o, s),
            u = (0, U.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": d,
              "data-active": r,
              className: (0, ae.$)(TR({
                isActive: r
              }))
            }, l),
            c = e ? K.DX : "a";
          return (0, j.jsx)(c, {
            ref: a,
            ...u,
            children: t
          })
        }),
        IR = (0, B.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, U.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, j.jsx)(NR, {
            ref: n,
            ...o,
            children: (0, j.jsx)(le.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        zR = (0, B.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, U.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, j.jsx)(NR, {
            ref: n,
            ...o,
            children: (0, j.jsx)(le.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        MR = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, U.v6)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, n),
            i = e ? K.DX : "span";
          return (0, j.jsx)(i, {
            ...o,
            children: t || "..."
          })
        },
        LR = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, U.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            i = e ? K.DX : "div";
          return (0, j.jsx)(i, {
            ...o,
            children: t
          })
        },
        AR = (0, B.createContext)(null);

      function VR() {
        const e = (0, B.useContext)(AR);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const FR = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, B.useId)(),
            i = (0, U.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? K.DX : "div";
          return (0, j.jsx)(AR.Provider, {
            value: {
              labelId: o
            },
            children: (0, j.jsx)(s, {
              ...i,
              children: t
            })
          })
        },
        qR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: i
          } = VR(), s = (0, U.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, n), a = e ? K.DX : "label";
          return (0, j.jsx)(a, {
            ref: o,
            id: i,
            ...s,
            children: t
          })
        }),
        BR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: i
          } = VR(), s = (0, U.v6)({
            "aria-labelledby": i,
            className: "foundry_2jlbztc"
          }, n), a = e ? K.DX : v_;
          return (0, j.jsxs)(a, {
            ...s,
            children: [(0, j.jsxs)(b_, {
              ref: o,
              children: [(0, j.jsx)(__, {
                placeholder: r
              }), (0, j.jsx)(w_, {})]
            }), (0, j.jsx)(k_, {
              children: (0, j.jsx)(y_, {
                children: (0, j.jsx)(g_, {
                  children: t
                })
              })
            })]
          })
        }),
        XR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
              "data-testid": r
            }, n),
            s = e ? K.DX : j_;
          return (0, j.jsx)(s, {
            ...i,
            ref: o,
            children: (0, j.jsx)(P_, {
              children: t
            })
          })
        }),
        WR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, n),
            s = e ? K.DX : "p";
          return (0, j.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        });
      var HR = "rovingFocusGroup.onEntryFocus",
        UR = {
          bubbles: !1,
          cancelable: !0
        },
        GR = "RovingFocusGroup",
        [ZR, $R, KR] = Wm(GR),
        [YR, QR] = xf(GR, [KR]),
        [JR, eT] = YR(GR),
        tT = B.forwardRef((e, t) => (0, j.jsx)(ZR.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, j.jsx)(ZR.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, j.jsx)(rT, {
              ...e,
              ref: t
            })
          })
        }));
      tT.displayName = GR;
      var rT = B.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: i,
            currentTabStopId: s,
            defaultCurrentTabStopId: a,
            onCurrentTabStopIdChange: l,
            onEntryFocus: d,
            preventScrollOnEntryFocus: u = !1,
            ...c
          } = e, f = B.useRef(null), p = (0, wf.s)(t, f), h = Bm(i), [m, v] = $h({
            prop: s,
            defaultProp: a ?? null,
            onChange: l,
            caller: GR
          }), [y, g] = B.useState(!1), b = Tf(d), _ = $R(r), w = B.useRef(!1), [x, C] = B.useState(0);
          return B.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(HR, b), () => e.removeEventListener(HR, b)
          }, [b]), (0, j.jsx)(JR, {
            scope: r,
            orientation: n,
            dir: h,
            loop: o,
            currentTabStopId: m,
            onItemFocus: B.useCallback(e => v(e), [v]),
            onItemShiftTab: B.useCallback(() => g(!0), []),
            onFocusableItemAdd: B.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: B.useCallback(() => C(e => e - 1), []),
            children: (0, j.jsx)(kf.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...c,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: _f(e.onMouseDown, () => {
                w.current = !0
              }),
              onFocus: _f(e.onFocus, e => {
                const t = !w.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(HR, UR);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = _().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === m),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    sT(n, u)
                  }
                }
                w.current = !1
              }),
              onBlur: _f(e.onBlur, () => g(!1))
            })
          })
        }),
        nT = "RovingFocusGroupItem",
        oT = B.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: i,
            children: s,
            ...a
          } = e, l = Xf(), d = i || l, u = eT(nT, r), c = u.currentTabStopId === d, f = $R(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: m
          } = u;
          return B.useEffect(() => {
            if (n) return p(), () => h()
          }, [n, p, h]), (0, j.jsx)(ZR.ItemSlot, {
            scope: r,
            id: d,
            focusable: n,
            active: o,
            children: (0, j.jsx)(kf.span, {
              tabIndex: c ? 0 : -1,
              "data-orientation": u.orientation,
              ...a,
              ref: t,
              onMouseDown: _f(e.onMouseDown, e => {
                n ? u.onItemFocus(d) : e.preventDefault()
              }),
              onFocus: _f(e.onFocus, () => u.onItemFocus(d)),
              onKeyDown: _f(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void u.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : iT[n]
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
                    i = u.loop ? (n = o + 1, (r = i).map((e, t) => r[(n + t) % r.length])) : i.slice(o + 1)
                  }
                  setTimeout(() => sT(i))
                }
                var r, n
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: c,
                hasTabStop: null != m
              }) : s
            })
          })
        });
      oT.displayName = nT;
      var iT = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function sT(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var aT = tT,
        lT = oT,
        dT = "Toggle",
        uT = B.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...i
          } = e, [s, a] = $h({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: dT
          });
          return (0, j.jsx)(kf.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...i,
            ref: t,
            onClick: _f(e.onClick, () => {
              e.disabled || a(!s)
            })
          })
        });
      uT.displayName = dT;
      var cT = "ToggleGroup",
        [fT, pT] = xf(cT, [QR]),
        hT = QR(),
        mT = B.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, j.jsx)(gT, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, j.jsx)(bT, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${cT}\``)
        });
      mT.displayName = cT;
      var [vT, yT] = fT(cT), gT = B.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...i
        } = e, [s, a] = $h({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: cT
        });
        return (0, j.jsx)(vT, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: B.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: a,
          onItemDeactivate: B.useCallback(() => a(""), [a]),
          children: (0, j.jsx)(xT, {
            ...i,
            ref: t
          })
        })
      }), bT = B.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...i
        } = e, [s, a] = $h({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: cT
        }), l = B.useCallback(e => a((t = []) => [...t, e]), [a]), d = B.useCallback(e => a((t = []) => t.filter(t => t !== e)), [a]);
        return (0, j.jsx)(vT, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: l,
          onItemDeactivate: d,
          children: (0, j.jsx)(xT, {
            ...i,
            ref: t
          })
        })
      });
      mT.displayName = cT;
      var [_T, wT] = fT(cT), xT = B.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: i,
          dir: s,
          loop: a = !0,
          ...l
        } = e, d = hT(r), u = Bm(s), c = {
          role: "group",
          dir: u,
          ...l
        };
        return (0, j.jsx)(_T, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, j.jsx)(aT, {
            asChild: !0,
            ...d,
            orientation: i,
            dir: u,
            loop: a,
            children: (0, j.jsx)(kf.div, {
              ...c,
              ref: t
            })
          }) : (0, j.jsx)(kf.div, {
            ...c,
            ref: t
          })
        })
      }), CT = "ToggleGroupItem", OT = B.forwardRef((e, t) => {
        const r = yT(CT, e.__scopeToggleGroup),
          n = wT(CT, e.__scopeToggleGroup),
          o = hT(e.__scopeToggleGroup),
          i = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          a = {
            ...e,
            pressed: i,
            disabled: s
          },
          l = B.useRef(null);
        return n.rovingFocus ? (0, j.jsx)(lT, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: i,
          ref: l,
          children: (0, j.jsx)(jT, {
            ...a,
            ref: t
          })
        }) : (0, j.jsx)(jT, {
          ...a,
          ref: t
        })
      });
      OT.displayName = CT;
      var jT = B.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, i = yT(CT, r), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, a = "single" === i.type ? s : void 0;
          return (0, j.jsx)(uT, {
            ...a,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? i.onItemActivate(n) : i.onItemDeactivate(n)
            }
          })
        }),
        PT = mT,
        ST = OT;

      function kT(e) {
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

      function RT(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function TT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? RT(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = kT(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : RT(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function DT(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ET = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        NT = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = TT(TT({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) ET(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return DT(e.variantClassNames, e => DT(e, e => e.split(" ")[0]))
            }
          }, t
        },
        IT = "var(--foundry_zxwkyk2)",
        zT = "var(--foundry_zxwkyk3)",
        MT = NT({
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
        LT = NT({
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
        AT = NT({
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
        VT = "var(--foundry_zxwkyk1)",
        FT = "var(--foundry_zxwkyk0)",
        qT = NT({
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
      const BT = (0, B.createContext)(null);

      function XT() {
        const e = (0, B.useContext)(BT);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const WT = (0, B.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const i = (0, U.v6)({
            "data-testid": e,
            className: MT({
              size: t
            }),
            type: r
          }, n);
          return (0, j.jsx)(BT.Provider, {
            value: {
              size: t
            },
            children: (0, j.jsx)(PT, {
              ref: o,
              ...i
            })
          })
        }),
        HT = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = XT(), o = (0, U.v6)({
            "data-testid": e,
            className: LT({
              size: n
            })
          }, t);
          return (0, j.jsx)(ST, {
            ref: r,
            ...o
          })
        }),
        UT = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = XT(), o = le[e];
          return (0, j.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        GT = (0, B.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const i = (0, U.v6)({
            "data-testid": e,
            className: qT({
              status: r
            }),
            style: (0, W.DI)({
              [FT]: t?.online,
              [VT]: t?.offline,
              [IT]: t?.away,
              [zT]: t?.busy
            })
          }, n);
          return (0, j.jsx)("span", {
            ref: o,
            ...i
          })
        }),
        ZT = (0, B.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = XT(), i = (0, U.v6)({
            "data-testid": e,
            className: AT({
              variant: t,
              size: o
            })
          }, r);
          return (0, j.jsx)("span", {
            ref: n,
            ...i
          })
        });
      var $T = "Popover",
        [KT, YT] = xf($T, [jh]),
        QT = jh(),
        [JT, eD] = KT($T),
        tD = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !1
          } = e, a = QT(t), l = B.useRef(null), [d, u] = B.useState(!1), [c, f] = $h({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: $T
          });
          return (0, j.jsx)(qh, {
            ...a,
            children: (0, j.jsx)(JT, {
              scope: t,
              contentId: Xf(),
              triggerRef: l,
              open: c,
              onOpenChange: f,
              onOpenToggle: B.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: d,
              onCustomAnchorAdd: B.useCallback(() => u(!0), []),
              onCustomAnchorRemove: B.useCallback(() => u(!1), []),
              modal: s,
              children: r
            })
          })
        };
      tD.displayName = $T;
      var rD = "PopoverAnchor",
        nD = B.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = eD(rD, r), i = QT(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: a
          } = o;
          return B.useEffect(() => (s(), () => a()), [s, a]), (0, j.jsx)(Bh, {
            ...i,
            ...n,
            ref: t
          })
        });
      nD.displayName = rD;
      var oD = "PopoverTrigger",
        iD = B.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = eD(oD, r), i = QT(r), s = (0, wf.s)(t, o.triggerRef), a = (0, j.jsx)(kf.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": bD(o.open),
            ...n,
            ref: s,
            onClick: _f(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? a : (0, j.jsx)(Bh, {
            asChild: !0,
            ...i,
            children: a
          })
        });
      iD.displayName = oD;
      var sD = "PopoverPortal",
        [aD, lD] = KT(sD, {
          forceMount: void 0
        }),
        dD = e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = eD(sD, t);
          return (0, j.jsx)(aD, {
            scope: t,
            forceMount: r,
            children: (0, j.jsx)(Uh, {
              present: r || i.open,
              children: (0, j.jsx)(Hh, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      dD.displayName = sD;
      var uD = "PopoverContent",
        cD = B.forwardRef((e, t) => {
          const r = lD(uD, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = eD(uD, e.__scopePopover);
          return (0, j.jsx)(Uh, {
            present: n || i.open,
            children: i.modal ? (0, j.jsx)(pD, {
              ...o,
              ref: t
            }) : (0, j.jsx)(hD, {
              ...o,
              ref: t
            })
          })
        });
      cD.displayName = uD;
      var fD = Of("PopoverContent.RemoveScroll"),
        pD = B.forwardRef((e, t) => {
          const r = eD(uD, e.__scopePopover),
            n = B.useRef(null),
            o = (0, wf.s)(t, n),
            i = B.useRef(!1);
          return B.useEffect(() => {
            const e = n.current;
            if (e) return qv(e)
          }, []), (0, j.jsx)(zv.A, {
            as: fD,
            allowPinchZoom: !0,
            children: (0, j.jsx)(mD, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: _f(e.onCloseAutoFocus, e => {
                e.preventDefault(), i.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: _f(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                i.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: _f(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        hD = B.forwardRef((e, t) => {
          const r = eD(uD, e.__scopePopover),
            n = B.useRef(!1),
            o = B.useRef(!1);
          return (0, j.jsx)(mD, {
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
        mD = B.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onInteractOutside: u,
            ...c
          } = e, f = eD(uD, r), p = QT(r);
          return Nv(), (0, j.jsx)(jv, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: (0, j.jsx)(If, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: u,
              onEscapeKeyDown: a,
              onPointerDownOutside: l,
              onFocusOutside: d,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, j.jsx)(Xh, {
                "data-state": bD(f.open),
                role: "dialog",
                id: f.contentId,
                ...p,
                ...c,
                ref: t,
                style: {
                  ...c.style,
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
        vD = "PopoverClose",
        yD = B.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = eD(vD, r);
          return (0, j.jsx)(kf.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: _f(e.onClick, () => o.onOpenChange(!1))
          })
        });
      yD.displayName = vD;
      var gD = B.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = QT(r);
        return (0, j.jsx)(Wh, {
          ...o,
          ...n,
          ref: t
        })
      });

      function bD(e) {
        return e ? "open" : "closed"
      }
      gD.displayName = "PopoverArrow";
      var _D = tD,
        wD = nD,
        xD = iD,
        CD = dD,
        OD = cD,
        jD = yD,
        PD = gD;

      function SD(e) {
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

      function kD(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function RD(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? kD(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = SD(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kD(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function TD(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var DD = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ED = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = RD(RD({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, u] of e.compoundVariants) DD(d, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return TD(e.variantClassNames, e => TD(e, e => e.split(" ")[0]))
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
      const ND = (0, B.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        ID = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, i] = (0, $.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), s = (0, U.v6)({
            open: o,
            onOpenChange: i
          }, n);
          return (0, j.jsx)(ND.Provider, {
            value: {
              open: o,
              setOpen: i
            },
            children: (0, j.jsx)(_D, {
              ...s
            })
          })
        },
        zD = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, U.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, j.jsx)(xD, {
            ref: r,
            ...n
          })
        }),
        MD = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        LD = (0, B.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: i
          } = (0, B.useContext)(ND), s = (0, B.useRef)(null), a = (0, $.UP)(s, o), {
            buttonProps: l
          } = (0, $.sL)(n, s), d = (0, U.v6)({
            "data-testid": r,
            className: ED({
              size: t
            })
          }, l), u = i ? le.ChevronUp : le.ChevronDown;
          return (0, j.jsxs)("button", {
            ref: a,
            ...d,
            children: [e, (0, j.jsx)(u, {
              label: "",
              size: MD[t]
            })]
          })
        }),
        AD = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, U.v6)({
            "data-testid": e
          }, t);
          return (0, j.jsx)(wD, {
            ref: r,
            ...n
          })
        }),
        VD = (0, B.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, U.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, j.jsx)(OD, {
            ref: n,
            ...o
          })
        }),
        FD = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, U.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, j.jsx)(PD, {
            ref: r,
            ...n
          })
        }),
        qD = e => (0, j.jsx)(CD, {
          ...e
        }),
        BD = e => (0, j.jsx)(jD, {
          ...e
        })
    }
  }
]);