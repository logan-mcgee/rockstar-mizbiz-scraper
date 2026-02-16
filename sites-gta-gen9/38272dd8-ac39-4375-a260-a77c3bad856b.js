try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "38272dd8-ac39-4375-a260-a77c3bad856b", e._sentryDebugIdIdentifier = "sentry-dbid-38272dd8-ac39-4375-a260-a77c3bad856b")
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
  [2098], {
    44242: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => h,
        AlertBanner: () => p,
        Badge: () => g,
        Body: () => lt,
        Breadcrumbs: () => y,
        Button: () => Se,
        Checkbox: () => l,
        Code: () => ut,
        Dialog: () => b,
        Display: () => dt,
        Divider: () => Ue,
        Dropdown: () => i,
        Heading: () => ht,
        IconButton: () => Ae,
        Label: () => mt,
        Lightbox: () => o,
        Loader: () => et,
        RadioGroup: () => d,
        Spinner: () => he,
        Switch: () => s,
        Tag: () => m,
        Text: () => gt,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => yt,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Ef,
        Content: () => wf,
        Portal: () => xf,
        Root: () => bf,
        Trigger: () => _f,
        useTooltipContext: () => gf
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => _h,
        Close: () => Ch,
        Content: () => mh,
        Controls: () => wh,
        CssVars: () => Oh,
        Download: () => Th,
        Image: () => bh,
        Keyboard: () => xh,
        LightboxContext: () => sh,
        OpenIcon: () => fh,
        Overlay: () => ph,
        Portal: () => hh,
        Reset: () => Sh,
        Root: () => ah,
        RootImplContext: () => lh,
        Thumbnail: () => dh,
        Trigger: () => uh,
        Zoom: () => Ph,
        ZoomPan: () => vh
      });
      var i = {};
      r.r(i), r.d(i, {
        Content: () => ay,
        Description: () => hy,
        Hint: () => py,
        Label: () => fy,
        Option: () => my,
        OptionIcon: () => yy,
        OptionText: () => vy,
        Portal: () => gy,
        Root: () => sy,
        ScrollArea: () => ly,
        StatusIcon: () => _y,
        StatusRoot: () => by,
        StatusText: () => wy,
        Trigger: () => cy,
        TriggerIcon: () => dy,
        TriggerText: () => uy,
        useDropdownContext: () => iy
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => Xy,
        Input: () => qy,
        Label: () => Ky,
        Root: () => Gy,
        useSwitchContext: () => Uy
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => lg,
        CheckMD: () => ag,
        CheckXL: () => cg,
        DashLG: () => dg,
        DashMD: () => ug,
        DashXL: () => fg
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Og,
        ErrorText: () => Rg,
        Input: () => Sg,
        Label: () => Tg,
        Root: () => Cg
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => qg,
        Hint: () => Kg,
        Input: () => Gg,
        Label: () => Ug,
        Root: () => Fg,
        RootContext: () => zg,
        StatusIcon: () => Wg,
        StatusRoot: () => Xg,
        StatusText: () => Zg,
        useTextAreaContext: () => Vg
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => Kb,
        DotMD: () => qb,
        DotXL: () => Xb
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Mb,
        Input: () => Zb,
        Label: () => Ab,
        Option: () => Wb,
        OptionDescription: () => Yb,
        OptionLabel: () => $b,
        Options: () => Db,
        Root: () => Lb,
        StatusIcon: () => Hb,
        StatusRoot: () => Bb,
        StatusText: () => zb,
        useRadioGroupContext: () => kb
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Q_,
        Control: () => Z_,
        Description: () => ew,
        Hint: () => W_,
        Icon: () => Y_,
        Input: () => $_,
        Label: () => X_,
        PasswordButton: () => J_,
        Root: () => K_,
        StatusIcon: () => rw,
        StatusRoot: () => tw,
        StatusText: () => nw
      });
      var h = {};
      r.r(h), r.d(h, {
        Body: () => Sw,
        CloseButton: () => Lw,
        Description: () => Nw,
        ErrorText: () => kw,
        Footer: () => Iw,
        Header: () => Cw,
        Icon: () => Ow,
        Link: () => jw,
        Root: () => Pw,
        RootContext: () => Ew,
        Title: () => Rw,
        iconStatusMap: () => Tw,
        useAlertContext: () => xw
      });
      var p = {};
      r.r(p), r.d(p, {
        Alert: () => DE,
        CloseButton: () => BE,
        Description: () => LE,
        Icon: () => kE,
        Link: () => ME,
        PaginationCounter: () => FE,
        PaginationNav: () => HE,
        PaginationNextButton: () => zE,
        PaginationPrevButton: () => VE,
        PaginationViewport: () => AE,
        Root: () => jE,
        RootContext: () => RE,
        iconStatusMap: () => IE,
        useAlertBannerContext: () => NE
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => nx,
        Icon: () => rx,
        Label: () => tx,
        Root: () => ex,
        RootContext: () => QE,
        useTagContext: () => JE
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => sP,
        CloseButton: () => aP,
        Description: () => nP,
        Icon: () => iP,
        Provider: () => Qx,
        Root: () => rP,
        RootContext: () => eP,
        Viewport: () => Jx,
        iconAppearanceMap: () => oP,
        useToastContext: () => tP
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => wP,
        Item: () => _P,
        OverflowMenu: () => EP,
        OverflowMenuItem: () => xP,
        Root: () => bP,
        RootContext: () => gP,
        useBreadcrumbsContext: () => yP
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => IP,
        Label: () => jP,
        Root: () => NP
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => pR,
        Button: () => _R,
        CloseButton: () => gR,
        Content: () => lR,
        Description: () => dR,
        Footer: () => vR,
        Header: () => mR,
        HeaderButton: () => bR,
        HeaderTitle: () => yR,
        Layout: () => hR,
        Overlay: () => aR,
        Portal: () => cR,
        Root: () => sR,
        ScrollArea: () => fR,
        Title: () => uR,
        Trigger: () => wR,
        useDialogContext: () => iR
      });
      var _ = r(42295);

      function w(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class E extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var x = E;

      function P(e) {
        if ("string" != typeof e) throw new x(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = I.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = S[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new x(e);
          return `#${r}`
        }(e) : e;
        const r = O.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(T(e, 2), 16)), parseInt(T(e[3] || "f", 2), 16) / 255]
        }
        const n = R.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = N.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const i = j.exec(t);
        if (i) {
          const [t, r, n, o] = Array.from(i).slice(1).map(parseFloat);
          if (w(0, 100, r) !== r) throw new x(e);
          if (w(0, 100, n) !== n) throw new x(e);
          return [...L(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new x(e)
      }
      const C = e => parseInt(e.replace(/_/g, ""), 36),
        S = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = C(t.substring(0, 3)),
            n = C(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        T = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        O = new RegExp(`^#${T("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        R = new RegExp(`^#${T("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        N = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${T(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        j = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        I = /^[a-z]+$/i,
        k = e => Math.round(255 * e),
        L = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(k);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * n - 1)) * (t / 100),
            s = i * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (a = i, l = s) : o >= 1 && o < 2 ? (a = s, l = i) : o >= 2 && o < 3 ? (l = i, c = s) : o >= 3 && o < 4 ? (l = s, c = i) : o >= 4 && o < 5 ? (a = s, c = i) : o >= 5 && o < 6 && (a = i, c = s);
          const u = n - i / 2;
          return [a + u, l + u, c + u].map(k)
        };

      function D(e, t) {
        const [r, n, o, i] = function(e) {
          const [t, r, n, o] = P(e).map((e, t) => 3 === t ? e : e / 255), i = Math.max(t, r, n), s = Math.min(t, r, n), a = (i + s) / 2;
          if (i === s) return [0, 0, a, o];
          const l = i - s;
          return [60 * (t === i ? (r - n) / l + (r < n ? 6 : 0) : r === i ? (n - t) / l + 2 : (t - r) / l + 4), a > .5 ? l / (2 - i - s) : l / (i + s), a, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${w(0,100,100*t).toFixed()}%, ${w(0,100,100*r).toFixed()}%, ${parseFloat(w(0,1,n).toFixed(3))})`
        }(r, n, o - t, i)
      }

      function A(e, t) {
        return D(e, -t)
      }
      var M = r(62229),
        B = r.n(M),
        H = r(93715),
        z = r(57461),
        V = r(75523);
      const F = {
          enabled: {
            background: (0, H.Tm)(z.no.enabled.background),
            border: (0, H.Tm)(z.no.enabled.border),
            text: (0, H.Tm)(z.no.enabled.text),
            outline: (0, H.Tm)(z.no.enabled.outline)
          },
          hover: {
            background: (0, H.Tm)(z.no.hover.background),
            border: (0, H.Tm)(z.no.hover.border),
            text: (0, H.Tm)(z.no.hover.text),
            outline: (0, H.Tm)(z.no.hover.outline)
          },
          focus: {
            background: (0, H.Tm)(z.no.focus.background),
            border: (0, H.Tm)(z.no.focus.border),
            text: (0, H.Tm)(z.no.focus.text),
            outline: (0, H.Tm)(z.no.focus.outline)
          },
          pressed: {
            background: (0, H.Tm)(z.no.pressed.background),
            border: (0, H.Tm)(z.no.pressed.border),
            text: (0, H.Tm)(z.no.pressed.text),
            outline: (0, H.Tm)(z.no.pressed.outline)
          },
          disabled: {
            background: (0, H.Tm)(z.no.disabled.background),
            border: (0, H.Tm)(z.no.disabled.border),
            text: (0, H.Tm)(z.no.disabled.text),
            outline: (0, H.Tm)(z.no.disabled.outline)
          },
          loading: {
            background: (0, H.Tm)(z.no.loading.background),
            border: (0, H.Tm)(z.no.loading.border),
            text: (0, H.Tm)(z.no.loading.text),
            outline: (0, H.Tm)(z.no.loading.outline)
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
          enabled: c = !1
        }, u = []) => {
          (0, M.useEffect)(() => {
            if (!e.current || !i || !c) return;
            const u = `${i}:${t}:${r}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, V.IO)(u, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = P(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? H.LU.global.color.black.static[100] : H.LU.global.color.white.static[100]),
                  hover: s || (e >= r ? D(i, n) : A(i, n)),
                  pressed: a || (e >= r ? D(i, o) : A(i, o))
                }
              });
            return e.current.style.setProperty(F.enabled.background, i), e.current.style.setProperty(F.enabled.border, i), e.current.style.setProperty(F.enabled.text, d), e.current.style.setProperty(F.hover.background, f), e.current.style.setProperty(F.hover.border, f), e.current.style.setProperty(F.hover.text, d), e.current.style.setProperty(F.focus.background, f), e.current.style.setProperty(F.focus.border, f), e.current.style.setProperty(F.focus.text, d), e.current.style.setProperty(F.pressed.background, h), e.current.style.setProperty(F.pressed.border, h), e.current.style.setProperty(F.pressed.text, d), e.current.style.setProperty(F.loading.background, f), e.current.style.setProperty(F.loading.border, f), e.current.style.setProperty(F.loading.text, d), () => {
              e.current?.style.removeProperty(F.enabled.background), e.current?.style.removeProperty(F.enabled.border), e.current?.style.removeProperty(F.enabled.text), e.current?.style.removeProperty(F.hover.background), e.current?.style.removeProperty(F.hover.border), e.current?.style.removeProperty(F.hover.text), e.current?.style.removeProperty(F.focus.background), e.current?.style.removeProperty(F.focus.border), e.current?.style.removeProperty(F.focus.text), e.current?.style.removeProperty(F.pressed.background), e.current?.style.removeProperty(F.pressed.border), e.current?.style.removeProperty(F.pressed.text), e.current?.style.removeProperty(F.loading.background), e.current?.style.removeProperty(F.loading.border), e.current?.style.removeProperty(F.loading.text)
            }
          }, [e.current, t, r, n, o, i, s, a, l, c, ...u])
        };
      var G = r(46219),
        q = r(32067),
        K = (r(10131), {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        }),
        X = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        W = {
          dark: "foundry_nu8bkp6",
          darkHc: "foundry_nu8bkp8",
          light: "foundry_nu8bkp5",
          lightHc: "foundry_nu8bkp7",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        Z = "--foundry-platform-scales-ratio-65afb887",
        $ = "foundry_nu8bkp4",
        Y = "foundry_nu8bkp3";
      const Q = (0, M.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: X,
          platformScaleBreakpoints: K,
          locale: "en-US"
        }),
        J = () => (0, M.useContext)(Q),
        ee = () => {
          const {
            platformScale: e
          } = J();
          return e
        },
        te = (e, t) => {
          const r = "more" === t ? W.lightHc : W.light,
            n = "more" === t ? W.darkHc : W.dark;
          return "dark" === e ? n : r
        };
      const re = () => V.X3 ? null : document.body;
      (0, M.forwardRef)(({
        children: e,
        className: t,
        container: r = re(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: i,
        contrastMode: s,
        defaultContrastMode: a,
        platformScaleBreakpoints: l,
        platformScaleRatios: c,
        defaultPlatformScale: u,
        platformScale: d,
        onPlatformScaleChange: f,
        locale: h = "en-US"
      }, p) => {
        const m = (0, M.useRef)(null),
          v = (0, G.UP)(m, p),
          y = (0, M.useRef)(r),
          {
            ratio: g,
            scale: b
          } = function(e) {
            const t = (0, M.useMemo)(() => ({
                ...X,
                ...e.platformScaleRatios
              }), [e.platformScaleRatios]),
              r = (0, M.useMemo)(() => ({
                ...K,
                ...e.platformScaleBreakpoints
              }), [e.platformScaleBreakpoints]),
              [n, o] = (0, M.useState)(e.platformScale || e.defaultPlatformScale),
              i = (0, M.useCallback)(t => {
                o(t), e.onPlatformScaleChange?.(t)
              }, [e.onPlatformScaleChange]),
              s = (0, M.useRef)([]),
              a = () => {
                if (!V.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of s.current) t.removeEventListener("change", e);
                  s.current = []
                }
              };
            return (0, M.useEffect)(() => (e.platformScale ? i(e.platformScale) : (() => {
              if (!V.X3) {
                a();
                for (const e in r) {
                  const t = window.matchMedia(r[e]),
                    n = t => {
                      t.matches && i(e)
                    };
                  t.addEventListener("change", n), t.matches && i(e), s.current.push({
                    handler: n,
                    matchMedia: t
                  })
                }
              }
            })(), a), [r, e.platformScale, i]), {
              scale: n,
              ratio: t[n]
            }
          }({
            onPlatformScaleChange: f,
            platformScaleBreakpoints: l,
            platformScaleRatios: c,
            defaultPlatformScale: u,
            platformScale: d
          }),
          {
            appearanceClass: w,
            otherAppearanceClasses: E,
            providerColor: x,
            providerContrast: P
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: r,
            defaultContrastMode: n = "normal"
          }) {
            const o = (0, G.Ub)("(prefers-color-scheme: light)"),
              i = (0, G.Ub)("(prefers-color-scheme: dark)"),
              s = (0, G.Ub)("(prefers-contrast: more)"),
              a = "system" !== e && e || o && "light" || i && "dark" || t,
              l = r || s && "more" || n,
              c = (0, M.useMemo)(() => te(a, l), [a, l]),
              u = (0, M.useMemo)(() => ((e, t) => {
                const r = te(e, t);
                return [W.light, W.dark, W.lightHc, W.darkHc].filter(e => e !== r)
              })(a, l), [a, l]);
            return {
              appearanceClass: c,
              otherAppearanceClasses: u,
              providerColor: a,
              providerContrast: l
            }
          }({
            colorScheme: o,
            defaultColorScheme: i,
            contrastMode: s,
            defaultContrastMode: a
          });
        return (({
          container: e,
          currentScale: t,
          appearanceClass: r,
          otherAppearanceClasses: n,
          locale: o,
          className: i
        }) => {
          const s = (0, G.ZC)(i),
            a = (0, G.ZC)(e.current);
          (0, M.useEffect)(() => {
            e.current?.classList.contains($) || e.current?.classList.add($), e.current?.classList.contains(Y) || e.current?.classList.add(Y), e.current?.classList.add(r), e.current?.classList.remove(...n), s && i && e.current?.classList.contains(s) ? e.current?.classList.replace(s, i) : s && !i && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : i && e.current?.classList.add(i)
          }, [r, i]), (0, M.useEffect)(() => {
            e.current?.setAttribute("lang", o)
          }, [o]), (0, M.useEffect)(() => {
            e.current?.style.setProperty(Z, t.toString())
          }, [t]), (0, M.useEffect)(() => {
            a?.classList.remove($), a?.classList.remove(Y), a?.classList.remove(r), a?.style.removeProperty(Z), i && a?.classList.remove(i)
          }, [a])
        })({
          locale: h,
          className: t,
          appearanceClass: w,
          otherAppearanceClasses: E,
          currentScale: g,
          container: n ? m : y
        }), (0, _.jsx)(Q.Provider, {
          value: {
            locale: h,
            defaultColorScheme: i,
            colorScheme: x,
            defaultContrastMode: a,
            contrastMode: P,
            defaultPlatformScale: u,
            platformScale: b,
            platformScaleRatios: c,
            platformScaleBreakpoints: l
          },
          children: n ? (0, _.jsx)(q.DX, {
            ref: v,
            children: e
          }) : e
        })
      });
      var ne = r(71753);

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

      function ie(e, t) {
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
          t % 2 ? ie(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = oe(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ie(Object(r)).forEach(function(t) {
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
      var le, ce, ue = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        de = (le = {
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
        }, ce = e => {
          var t = le.defaultClassName,
            r = se(se({}, le.defaultVariants), e);
          for (var n in r) {
            var o, i = null !== (o = r[n]) && void 0 !== o ? o : le.defaultVariants[n];
            if (null != i) {
              var s = i;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var a = le.variantClassNames[n][s];
              a && (t += " " + a)
            }
          }
          for (var [l, c] of le.compoundVariants) ue(l, r, le.defaultVariants) && (t += " " + c);
          return t
        }, ce.variants = () => Object.keys(le.variantClassNames), ce.classNames = {
          get base() {
            return le.defaultClassName.split(" ")[0]
          },
          get variants() {
            return ae(le.variantClassNames, e => ae(e, e => e.split(" ")[0]))
          }
        }, ce);
      const fe = "pageMD",
        he = (0, M.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = fe,
          testId: n,
          ...o
        }, i) => {
          const s = ee(),
            a = "string" == typeof r ? r : r?.[s] ?? r.default ?? fe,
            l = (0, V.v6)({
              className: de({
                size: a
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, _.jsx)(ne.b, {
            label: e,
            children: (0, _.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: i,
              viewBox: "0 0 16 16",
              children: [!t && (0, _.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, _.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var pe = r(4572),
        me = r(45021);

      function ve(e) {
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

      function ye(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ye(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ve(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ye(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function be(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _e = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        we = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ge(ge({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) _e(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return be(e.variantClassNames, e => be(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ee = we({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav",
              link: "foundry_1qqcnuao foundry_1qqcnuaw"
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
      we({
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
      var xe = we({
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
        Pe = we({
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
        Ce = we({
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
      const Se = (0, M.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: i,
        iconRightLabel: s,
        appearance: a,
        size: l = "MD",
        fullWidth: c = !1,
        isLoading: u = !1,
        spinnerLabel: d,
        override_darkenLuminance: f = .035,
        override_textLuminance: h = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: v,
        override_hoverColor: y,
        override_pressedColor: g,
        override_textColor: b,
        ...w
      }, E) => {
        const x = (0, M.useRef)(null),
          P = (0, G.UP)(x, E),
          C = ee(),
          S = "string" == typeof l ? l : l?.[C] ?? l.default ?? "MD",
          {
            buttonProps: T
          } = (0, G.sL)((0, V.v6)(w, {
            isLoading: u
          }), x);
        U({
          refs: {
            buttonRef: x
          },
          config: {
            textLuminance: h,
            darkenLuminance: f,
            hoverLuminance: p,
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
        const O = (0, V.v6)({
            className: Ee({
              appearance: a,
              size: S,
              fullWidth: c,
              iconLeft: !!n,
              iconRight: !!i,
              isLoading: u
            }),
            "data-testid": e
          }, T),
          R = n && me[n],
          N = i && me[i],
          j = t ? q.DX : "button",
          I = c && (N || N && R);
        return (0, _.jsxs)(j, {
          ref: P,
          ...O,
          children: [I && (0, _.jsx)("div", {
            className: "foundry_17pcofy15"
          }), R && (0, _.jsx)(R, {
            label: o || "",
            size: S,
            className: (0, pe.clsx)(xe({
              size: S
            }), "foundry_17pcofy11")
          }), (0, _.jsx)(q.xV, {
            children: r
          }), N && (0, _.jsx)(N, {
            label: s || "",
            size: S,
            className: (0, pe.clsx)(xe({
              size: S
            }), Pe({
              fullWidth: c
            }))
          }), u && (0, _.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, _.jsx)(he, {
              label: d || "",
              size: "inline" + ("LG" === S ? "LG" : "MD"),
              hideTrack: !0,
              className: Ce({
                size: S
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

      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Oe(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Te(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oe(Object(r)).forEach(function(t) {
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
      var je = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ie = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Re(Re({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) je(c, n, e.defaultVariants) && (r += " " + u);
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
        ke = Ie({
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
        Le = Ie({
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
        De = Ie({
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
      const Ae = (0, M.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: i = !1,
        size: s = "LG",
        children: a,
        isLoading: l = !1,
        spinnerLabel: c,
        override_darkenLuminance: u = .035,
        override_textLuminance: d = .179,
        override_hoverLuminance: f = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: p,
        override_hoverColor: m,
        override_pressedColor: v,
        override_textColor: y,
        ...g
      }, b) => {
        const w = (0, M.useRef)(null),
          E = (0, G.UP)(w, b),
          x = ee(),
          P = "string" == typeof s ? s : s?.[x] ?? s.default ?? "LG",
          {
            buttonProps: C
          } = (0, G.sL)((0, V.v6)(g, {
            isLoading: l
          }), w);
        U({
          refs: {
            buttonRef: w
          },
          config: {
            textLuminance: d,
            darkenLuminance: u,
            hoverLuminance: f,
            pressedLuminance: h
          },
          overrides: {
            backgroundColor: p,
            hoverColor: m,
            pressedColor: v,
            textColor: y
          },
          enabled: "accent" === o
        }, [t]);
        const S = (0, V.v6)({
            className: Le({
              appearance: o,
              size: P,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, C),
          T = me[r],
          O = t ? q.DX : "button";
        return (0, _.jsxs)(O, {
          ref: E,
          ...S,
          children: [T && (0, _.jsx)(T, {
            label: n || "",
            size: P,
            className: ke({
              size: P
            })
          }), (0, _.jsx)(q.xV, {
            children: a
          }), l && (0, _.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, _.jsx)(he, {
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

      function Me(e) {
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

      function He(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Be(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Me(o)) in n ? Object.defineProperty(n, o, {
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

      function ze(e, t) {
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
        Fe = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = He(He({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ve(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ze(e.variantClassNames, e => ze(e, e => e.split(" ")[0]))
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
      const Ue = (0, M.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: i,
        ...s
      }, a) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          c = n || "hr" === l ? void 0 : "separator",
          u = o ? q.DX : l;
        return (0, _.jsx)(u, {
          ref: a,
          className: (0, pe.clsx)(Fe({
            thickness: r,
            orientation: t
          }), e),
          role: c,
          "aria-orientation": t,
          "data-testid": i,
          ...s
        })
      });

      function Ge(e) {
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

      function qe(e, t) {
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
          t % 2 ? qe(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ge(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Xe(e, t) {
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
        Ze = "var(--foundry_9dxgbc2)",
        $e = "var(--foundry_9dxgbc3)",
        Ye = (e => {
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
            for (var [c, u] of e.compoundVariants) We(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xe(e.variantClassNames, e => Xe(e, e => e.split(" ")[0]))
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
        Qe = "var(--foundry_9dxgbc0)",
        Je = "var(--foundry_9dxgbc1)";
      const et = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: i = "MD",
        ...s
      }, a) => {
        const l = ee(),
          c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          u = (0, V.v6)({
            className: Ye({
              size: c
            }),
            "data-testid": t,
            style: (0, H.DI)({
              [Qe]: n?.pulseColorBackground,
              [Je]: n?.pulseColorForeground,
              [Ze]: n?.gradientColorBackground,
              [$e]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          d = e ? q.DX : "div";
        return (0, _.jsx)(d, {
          ref: a,
          ...u,
          children: e ? (0, _.jsx)(q.xV, {
            children: r
          }) : (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, _.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function tt(e) {
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

      function rt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rt(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = tt(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ot(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var it = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        st = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = nt(nt({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) it(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ot(e.variantClassNames, e => ot(e, e => e.split(" ")[0]))
            }
          }, t
        },
        at = st({
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
      const lt = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? q.DX : "p",
          a = (0, V.v6)({
            className: at({
              size: n,
              appearance: r
            })
          }, o);
        return (0, _.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var ct = st({
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
      const ut = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const i = e ? q.DX : "p",
            s = (0, V.v6)({
              className: ct({
                appearance: r
              })
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        dt = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? q.DX : "h1",
            i = (0, V.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        });
      var ft = st({
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
      const ht = (0, M.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? q.DX : `h${t}`,
          s = (0, V.v6)(n, {
            className: ft({
              level: t
            })
          });
        return (0, _.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var pt = st({
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
      const mt = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? q.DX : "p",
          a = (0, V.v6)({
            className: pt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, _.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var vt = st({
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
      const yt = {
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
        gt = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? q.DX : yt[r] || "span",
            s = (0, V.v6)(n, {
              className: vt({
                semantic: r
              })
            });
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var bt = r(42828),
        _t = r(27654);
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

      function Et(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function xt(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -Et(t - e, r - t, n) + t : e > r ? +Et(e - r, r - t, n) + r : e
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

      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ct(Object(r), !0).forEach(function(t) {
            Pt(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ct(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const Tt = {
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
      const Rt = ["enter", "leave"];
      const Nt = ["gotpointercapture", "lostpointercapture"];

      function jt(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = Nt.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function It(e) {
        return "touches" in e
      }

      function kt(e) {
        return It(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Lt(e) {
        return It(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Dt(e, t) {
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

      function At(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Dt(r, n)
      }

      function Mt(e) {
        const t = Lt(e);
        return It(e) ? t.identifier : t.pointerId
      }

      function Bt(e) {
        const t = Lt(e);
        return [t.clientX, t.clientY]
      }

      function Ht(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function zt(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Vt() {}

      function Ft(...e) {
        return 0 === e.length ? Vt : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Ut(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Gt {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? zt(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            wt.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, s] = t._movement, [a, l] = r.threshold, {
            _step: c,
            values: u
          } = t;
          if (r.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(i) >= a && u[0]), !1 === c[1] && (c[1] = Math.abs(s) >= l && u[1])) : (!1 === c[0] && (c[0] = Math.abs(i) >= a && Math.sign(i) * a), !1 === c[1] && (c[1] = Math.abs(s) >= l && Math.sign(s) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const d = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== c[0] ? e - c[0] : 0, d[1] = !1 !== c[1] ? t - c[1] : 0
          } else d[0] = !1 !== c[0] ? i - c[0] : 0, d[1] = !1 !== c[1] ? s - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = zt(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [p < v ? -1 : p > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [i, s],
                [a, l]
              ] = e;
              return [xt(t, i, s, n), xt(r, a, l, o)]
            }(t._bounds, t.offset, _), t.delta = wt.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
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
          const n = this.handler(St(St(St({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class qt extends Gt {
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
          this.state.offset = wt.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = wt.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[kt(e)] : r.axisThreshold;
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
        Xt = {
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
        Wt = St(St({}, Xt), {}, {
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
        Zt = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        $t = "undefined" != typeof window && window.document && window.document.createElement;

      function Yt() {
        return $t && "ontouchstart" in window
      }
      const Qt = {
          isBrowser: $t,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Yt(),
          touchscreen: Yt() || $t && window.navigator.maxTouchPoints > 1,
          pointer: $t && "onpointerdown" in window,
          pointerLock: $t && "exitPointerLock" in window.document
        },
        Jt = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        er = St(St({}, Wt), {}, {
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
            const i = wt.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
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
          axisThreshold: e => e ? St(St({}, Jt), e) : Jt,
          keyboardDisplacement: (e = 10) => e
        });

      function tr(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, s] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && s < 0 || r > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const rr = St(St({}, Xt), {}, {
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
                const t = Ut(zt(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = Ut(zt(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, wt.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        nr = St(St({}, Wt), {}, {
          mouseOnly: (e = !0) => e
        }),
        or = Wt,
        ir = Wt,
        sr = St(St({}, Wt), {}, {
          mouseOnly: (e = !0) => e
        }),
        ar = new Map,
        lr = new Map;

      function cr(e) {
        ar.set(e.key, e.engine), lr.set(e.key, e.resolver)
      }
      const ur = {
          key: "drag",
          engine: class extends qt {
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Mt(e), r._pointerActive = !0, this.computeValues(Bt(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== kt(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
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
              const o = Bt(e);
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
              const n = Mt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= r.tapsThreshold && i <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, i] = t._movement, [s, a] = r.swipe.velocity, [l, c] = r.swipe.distance, u = r.swipe.duration;
                if (t.elapsedTime < u) {
                  const r = Math.abs(e / t.timeDelta),
                    u = Math.abs(n / t.timeDelta);
                  r > s && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > a && Math.abs(i) > c && (t.swipe[1] = Math.sign(n))
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
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, wt.addTo(r._movement, r._delta), this.compute(e), this.emit()
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
          resolver: er
        },
        dr = {
          key: "hover",
          engine: class extends qt {
            constructor(...e) {
              super(...e), Pt(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Bt(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Bt(e);
              t._movement = t._delta = wt.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: sr
        },
        fr = {
          key: "move",
          engine: class extends qt {
            constructor(...e) {
              super(...e), Pt(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Bt(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Bt(e),
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
          resolver: nr
        },
        hr = {
          key: "pinch",
          engine: class extends Gt {
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
              const n = At(e, t._touchIds);
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
              const o = Dt(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = At(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Dt(...Array.from(t.values()));
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
              t._delta = [-Ht(e)[1] / 100 * t.offset[0], 0], wt.addTo(t._movement, t._delta), tr(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: rr
        },
        pr = {
          key: "scroll",
          engine: class extends qt {
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
                    scrollLeft: i,
                    scrollTop: s
                  } = e.currentTarget;
                  return [null !== (t = null != n ? n : i) && void 0 !== t ? t : 0, null !== (r = null != o ? o : s) && void 0 !== r ? r : 0]
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
          resolver: or
        },
        mr = {
          key: "wheel",
          engine: class extends qt {
            constructor(...e) {
              super(...e), Pt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Ht(e), wt.addTo(t._movement, t._delta), tr(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: ir
        };
      const vr = {
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
        yr = ["target", "eventOptions", "window", "enabled", "transform"];

      function gr(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = gr(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class br {
        constructor(e, t) {
          Pt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const r = Tt[e];
              return e + (r && r[t] || t)
            }(t, r),
            a = St(St({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class _r {
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
      class wr {
        constructor(e) {
          var t, r;
          Pt(this, "gestures", new Set), Pt(this, "_targetEventStore", new br(this)), Pt(this, "gestureEventStores", {}), Pt(this, "gestureTimeoutStores", {}), Pt(this, "handlers", {}), Pt(this, "config", {}), Pt(this, "pointerIds", new Set), Pt(this, "touchIds", new Set), Pt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && Er(t, "drag"), r.wheel && Er(t, "wheel"), r.scroll && Er(t, "scroll"), r.move && Er(t, "move"), r.pinch && Er(t, "pinch"), r.hover && Er(t, "hover")
        }
        setEventIds(e) {
          return It(e) ? (this.touchIds = new Set(function(e) {
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
              c = function(e, t) {
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
              }(n, yr);
            if (r.shared = gr({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, vr), t) {
              const e = lr.get(t);
              r[t] = gr(St({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = lr.get(e);
                t && (r[e] = gr(St({
                  shared: r.shared
                }, c[e]), t))
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
                  i = xr(r, o.eventOptions, !!n);
                o.enabled && new(ar.get(t))(this, e, t).bind(i)
              }
              const o = xr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](St(St({}, this.state.shared), {}, {
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
                passive: i
              } = jt(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function Er(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new br(e, t), e.gestureTimeoutStores[t] = new _r
      }
      const xr = (e, t, r) => (n, o, i, s = {}, a = !1) => {
          var l, c;
          const u = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = s.passive) && void 0 !== c ? c : t.passive;
          let f = a ? n : function(e, t = "", r = !1) {
            const n = Tt[e],
              o = n && n[t] || t;
            return "on" + Ot(e) + Ot(o) + (function(e = !1, t) {
              return e && !Rt.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        Pr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Cr(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!ar.has(n)) return;
        const s = r + "Start",
          a = r + "End";
        o[n] = e => {
          let n;
          return e.first && s in t && t[s](e), r in t && (n = t[r](e)), e.last && a in t && t[a](e), n
        }, i[n] = i[n] || {}
      }

      function Sr(e, t = {}, r, n) {
        const o = B().useMemo(() => new wr(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), B().useEffect(o.effect.bind(o)), B().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function Tr(e, t) {
        const r = ([ur, hr, pr, mr, fr, dr].forEach(cr), function(e, t) {
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
            }(e), i = {};
            return Cr(o, r, "onDrag", "drag", i, t), Cr(o, r, "onWheel", "wheel", i, t), Cr(o, r, "onScroll", "scroll", i, t), Cr(o, r, "onPinch", "pinch", i, t), Cr(o, r, "onMove", "move", i, t), Cr(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return Sr(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const Or = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Rr = ([e, t]) => ({
        x: e,
        y: t
      }), Nr = (e, t) => (e.x = t.x, e.y = t.y, e), jr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Ir = (e, t, r) => Math.min(Math.max(e, t), r);

      function kr() {
        return kr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, kr.apply(null, arguments)
      }
      var Lr = ["shift", "alt", "meta", "mod", "ctrl"],
        Dr = {
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

      function Ar(e) {
        return (e && Dr[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Mr(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Br(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Ar(e)
        });
        return kr({}, {
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
        void 0 !== e.key && Vr([Ar(e.key), Ar(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && Fr([Ar(e.key), Ar(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Hr.clear()
      });
      var Hr = new Set;

      function zr(e) {
        return Array.isArray(e)
      }

      function Vr(e) {
        var t = Array.isArray(e) ? e : [e];
        Hr.has("meta") && Hr.forEach(function(e) {
          return ! function(e) {
            return Lr.includes(e)
          }(e) && Hr.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Hr.add(e.toLowerCase())
        })
      }

      function Fr(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Hr.clear() : t.forEach(function(e) {
          return Hr.delete(e.toLowerCase())
        })
      }

      function Ur(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, zr(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Gr = (0, M.createContext)(void 0);

      function qr(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, _.jsx)(Gr.Provider, {
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
      var Xr = (0, M.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Wr = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, M.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            s = o[1],
            a = (0, M.useState)([]),
            l = a[0],
            c = a[1],
            u = (0, M.useCallback)(function(e) {
              s(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            d = (0, M.useCallback)(function(e) {
              s(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, M.useCallback)(function(e) {
              s(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            h = (0, M.useCallback)(function(e) {
              c(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            p = (0, M.useCallback)(function(e) {
              c(function(t) {
                return t.filter(function(t) {
                  return !Kr(t, e)
                })
              })
            }, []);
          return (0, _.jsx)(Xr.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, _.jsx)(qr, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        Zr = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        $r = "undefined" != typeof window ? M.useLayoutEffect : M.useEffect;

      function Yr(e, t, r, n) {
        var o = (0, M.useState)(null),
          i = o[0],
          s = o[1],
          a = (0, M.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = zr(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, M.useCallback)(t, null != u ? u : []),
          f = (0, M.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, M.useRef)(void 0);
            return Kr(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, M.useContext)(Xr).enabledScopes,
          m = (0, M.useContext)(Gr);
        return $r(function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Ur(e, ["input", "textarea", "select"]) || Ur(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void Zr(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && Mr(c, null == h ? void 0 : h.splitKey).forEach(function(r) {
                    var n, o = Br(r, null == h ? void 0 : h.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, i = t.alt,
                          s = t.meta,
                          a = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = Ar(f),
                          g = d.toLowerCase();
                        if (!(null != u && u.includes(y) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (a) {
                            if (!p && !h) return !1
                          } else {
                            if (s === !p && "meta" !== g && "os" !== g) return !1;
                            if (c === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (zr(n = u) ? n : n.split(o)).every(function(e) {
                          return Hr.has(e.trim().toLowerCase())
                        })) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void Zr(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (Vr(Ar(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Fr(Ar(e.code)), a.current = !1, null != h && h.keyup && r(e, !0))
              },
              s = i || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Mr(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                return m.addHotkey(Br(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Mr(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                  return m.removeHotkey(Br(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                })
              }
          }
        }, [i, c, h, p]), s
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
            var n, o, i;
            n = e, o = t, i = r[t], (o = Qr(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
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
        nn = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = en(en({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) rn(c, n, e.defaultVariants) && (r += " " + u);
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
        })({
          defaultClassName: "foundry_1a74xwbo foundry_1a74xwbi",
          variantClassNames: {
            position: {
              top: "foundry_1a74xwbp",
              bottom: "foundry_1a74xwbq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      bt.gsap.registerPlugin(_t.useGSAP);
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
        an = (0, H.Tm)("var(--foundry_1a74xwb0)");
      var ln = r(78322);

      function cn(e, t) {
        var r = t && t.cache ? t.cache : _n,
          n = t && t.serializer ? t.serializer : pn;
        return (t && t.strategy ? t.strategy : hn)(e, {
          cache: r,
          serializer: n
        })
      }

      function un(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, n), t.set(i, s)), s
      }

      function dn(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function fn(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function hn(e, t) {
        return fn(e, this, 1 === e.length ? un : dn, t.cache.create(), t.serializer)
      }
      var pn = function() {
        return JSON.stringify(arguments)
      };

      function mn() {
        this.cache = Object.create(null)
      }
      mn.prototype.get = function(e) {
        return this.cache[e]
      }, mn.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var vn, yn, gn, bn, _n = {
          create: function() {
            return new mn
          }
        },
        wn = {
          variadic: function(e, t) {
            return fn(e, this, dn, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return fn(e, this, un, t.cache.create(), t.serializer)
          }
        };

      function En(e) {
        return e.type === yn.literal
      }

      function xn(e) {
        return e.type === yn.argument
      }

      function Pn(e) {
        return e.type === yn.number
      }

      function Cn(e) {
        return e.type === yn.date
      }

      function Sn(e) {
        return e.type === yn.time
      }

      function Tn(e) {
        return e.type === yn.select
      }

      function On(e) {
        return e.type === yn.plural
      }

      function Rn(e) {
        return e.type === yn.pound
      }

      function Nn(e) {
        return e.type === yn.tag
      }

      function jn(e) {
        return !(!e || "object" != typeof e || e.type !== gn.number)
      }

      function In(e) {
        return !(!e || "object" != typeof e || e.type !== gn.dateTime)
      }(bn = vn || (vn = {}))[bn.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", bn[bn.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", bn[bn.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", bn[bn.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", bn[bn.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", bn[bn.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", bn[bn.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", bn[bn.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", bn[bn.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", bn[bn.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", bn[bn.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", bn[bn.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", bn[bn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", bn[bn.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", bn[bn.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", bn[bn.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", bn[bn.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", bn[bn.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", bn[bn.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", bn[bn.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", bn[bn.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", bn[bn.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", bn[bn.INVALID_TAG = 23] = "INVALID_TAG", bn[bn.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", bn[bn.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", bn[bn.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(yn || (yn = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(gn || (gn = {}));
      var kn = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Ln = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Dn(e) {
        var t = {};
        return e.replace(Ln, function(e) {
          var r = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === r ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = r < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        }), t
      }
      var An = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Mn(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(An).filter(function(e) {
            return e.length > 0
          }); r < n.length; r++) {
          var o = n[r].split("/");
          if (0 === o.length) throw new Error("Invalid number skeleton");
          for (var i = o[0], s = o.slice(1), a = 0, l = s; a < l.length; a++)
            if (0 === l[a].length) throw new Error("Invalid number skeleton");
          t.push({
            stem: i,
            options: s
          })
        }
        return t
      }

      function Bn(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var Hn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        zn = /^(@+)?(\+|#+)?[rs]?$/g,
        Vn = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Fn = /^(0+)$/;

      function Un(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(zn, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function Gn(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function qn(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Fn.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Kn(e) {
        return Gn(e) || {}
      }

      function Xn(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var o = n[r];
          switch (o.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = o.options[0];
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              t.style = "unit", t.unit = Bn(o.options[0]);
              continue;
            case "compact-short":
            case "K":
              t.notation = "compact", t.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              t.notation = "compact", t.compactDisplay = "long";
              continue;
            case "scientific":
              t = (0, ln.__assign)((0, ln.__assign)((0, ln.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, ln.__assign)((0, ln.__assign)({}, e), Kn(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, ln.__assign)((0, ln.__assign)((0, ln.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, ln.__assign)((0, ln.__assign)({}, e), Kn(t))
              }, {}));
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              t.currencyDisplay = "code", t.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              t.currencyDisplay = "name", t.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(o.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              o.options[0].replace(Vn, function(e, r, n, o, i, s) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (Fn.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Hn.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Hn, function(e, r, n, o, i, s) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && s ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var i = o.options[0];
            "w" === i ? t = (0, ln.__assign)((0, ln.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, ln.__assign)((0, ln.__assign)({}, t), Un(i)))
          } else if (zn.test(o.stem)) t = (0, ln.__assign)((0, ln.__assign)({}, t), Un(o.stem));
          else {
            var s = Gn(o.stem);
            s && (t = (0, ln.__assign)((0, ln.__assign)({}, t), s));
            var a = qn(o.stem);
            a && (t = (0, ln.__assign)((0, ln.__assign)({}, t), a))
          }
        }
        return t
      }
      var Wn, Zn = {
        "001": ["H", "h"],
        419: ["h", "H", "hB", "hb"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["h", "H", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["h", "H", "hB", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["h", "H", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["h", "H", "hB", "hb"],
        CU: ["h", "H", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["h", "H", "hB", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["h", "H", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["h", "H", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["h", "H", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["h", "H", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["h", "H", "hB", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["h", "H", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["h", "H", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["h", "H", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "en-HK": ["h", "hb", "H", "hB"],
        "en-IL": ["H", "h", "hb", "hB"],
        "en-MY": ["h", "hb", "H", "hB"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"]
      };

      function $n(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (Zn[r || ""] || Zn[n || ""] || Zn["".concat(n, "-001")] || Zn["001"])[0]
      }
      var Yn = new RegExp("^".concat(kn.source, "*")),
        Qn = new RegExp("".concat(kn.source, "*$"));

      function Jn(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var eo = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        to = !!String.fromCodePoint,
        ro = !!Object.fromEntries,
        no = !!String.prototype.codePointAt,
        oo = !!String.prototype.trimStart,
        io = !!String.prototype.trimEnd,
        so = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        ao = !0;
      try {
        ao = "a" === (null === (Wn = vo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Wn ? void 0 : Wn[0])
      } catch (e) {
        ao = !1
      }
      var lo, co = eo ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        uo = to ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        fo = ro ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        ho = no ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        po = oo ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Yn, "")
        },
        mo = io ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Qn, "")
        };

      function vo(e, t) {
        return new RegExp(e, t)
      }
      if (ao) {
        var yo = vo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        lo = function(e, t) {
          var r;
          return yo.lastIndex = t, null !== (r = yo.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else lo = function(e, t) {
        for (var r = [];;) {
          var n = ho(e, t);
          if (void 0 === n || xo(n) || Po(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return uo.apply(void 0, r)
      };
      var go, bo, _o = function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        return e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var n = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, r)).err) return i;
              n.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(vn.UNMATCHED_CLOSING_TAG, Jn(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && wo(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  n.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  n.push(i.val)
                }
              } else {
                var s = this.clonePosition();
                this.bump(), n.push({
                  type: yn.pound,
                  location: Jn(s, this.clonePosition())
                })
              }
            }
          }
          return {
            val: n,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var n = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: yn.literal,
              value: "<".concat(n, "/>"),
              location: Jn(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !wo(this.char())) return this.error(vn.INVALID_TAG, Jn(s, this.clonePosition()));
              var a = this.clonePosition();
              return n !== this.parseTagName() ? this.error(vn.UNMATCHED_CLOSING_TAG, Jn(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: yn.tag,
                  value: n,
                  children: i,
                  location: Jn(r, this.clonePosition())
                },
                err: null
              } : this.error(vn.INVALID_TAG, Jn(s, this.clonePosition())))
            }
            return this.error(vn.UNCLOSED_TAG, Jn(r, this.clonePosition()))
          }
          return this.error(vn.INVALID_TAG, Jn(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && Eo(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) n += i;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                n += s
              }
            }
          }
          var a = Jn(r, this.clonePosition());
          return {
            val: {
              type: yn.literal,
              value: n,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (wo(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return uo.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), uo(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(vn.EXPECT_ARGUMENT_CLOSING_BRACE, Jn(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(vn.EMPTY_ARGUMENT, Jn(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(vn.MALFORMED_ARGUMENT, Jn(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(vn.EXPECT_ARGUMENT_CLOSING_BRACE, Jn(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: yn.argument,
                  value: n,
                  location: Jn(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(vn.EXPECT_ARGUMENT_CLOSING_BRACE, Jn(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(vn.MALFORMED_ARGUMENT, Jn(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = lo(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Jn(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (s) {
            case "":
              return this.error(vn.EXPECT_ARGUMENT_TYPE, Jn(i, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = mo(y.val)).length) return this.error(vn.EXPECT_ARGUMENT_STYLE, Jn(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Jn(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Jn(n, this.clonePosition());
              if (l && co(null == l ? void 0 : l.style, "::", 0)) {
                var d = po(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: yn.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(vn.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = $n(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += "a";
                      for (; s-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: gn.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Dn(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? yn.date : yn.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? yn.number : "date" === s ? yn.date : yn.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(vn.EXPECT_SELECT_ARGUMENT_OPTIONS, Jn(p, (0, ln.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(vn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Jn(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(vn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, vn.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Jn(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: yn.select,
                  value: r,
                  options: fo(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: yn.plural,
                  value: r,
                  options: fo(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(vn.INVALID_ARGUMENT_TYPE, Jn(i, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(vn.EXPECT_ARGUMENT_CLOSING_BRACE, Jn(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(vn.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Jn(r, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var r = [];
          try {
            r = Mn(e)
          } catch (e) {
            return this.error(vn.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: gn.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Xn(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, s = [], a = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(vn.EXPECT_PLURAL_ARGUMENT_SELECTOR, vn.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Jn(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? vn.DUPLICATE_SELECT_ARGUMENT_SELECTOR : vn.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? vn.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : vn.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Jn(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: Jn(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? vn.EXPECT_SELECT_ARGUMENT_SELECTOR : vn.EXPECT_PLURAL_ARGUMENT_SELECTOR, Jn(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(vn.MISSING_OTHER_CLAUSE, Jn(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            o = !0, i = 10 * i + (s - 48), this.bump()
          }
          var a = Jn(n, this.clonePosition());
          return o ? so(i *= r) ? {
            val: i,
            err: null
          } : this.error(t, a) : this.error(e, a)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = ho(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (co(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && xo(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function wo(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Eo(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function xo(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Po(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Co(e) {
        e.forEach(function(e) {
          if (delete e.location, Tn(e) || On(e))
            for (var t in e.options) delete e.options[t].location, Co(e.options[t].value);
          else Pn(e) && jn(e.style) || (Cn(e) || Sn(e)) && In(e.style) ? delete e.style.location : Nn(e) && Co(e.children)
        })
      }

      function So(e, t) {
        void 0 === t && (t = {}), t = (0, ln.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new _o(e, t).parse();
        if (r.err) {
          var n = SyntaxError(vn[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || Co(r.val), r.val
      }(bo = go || (go = {})).MISSING_VALUE = "MISSING_VALUE", bo.INVALID_VALUE = "INVALID_VALUE", bo.MISSING_INTL_API = "MISSING_INTL_API";
      var To, Oo = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, ln.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Ro = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), go.INVALID_VALUE, o) || this
          }
          return (0, ln.__extends)(t, e), t
        }(Oo),
        No = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), go.INVALID_VALUE, n) || this
          }
          return (0, ln.__extends)(t, e), t
        }(Oo),
        jo = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), go.MISSING_VALUE, r) || this
          }
          return (0, ln.__extends)(t, e), t
        }(Oo);

      function Io(e) {
        return "function" == typeof e
      }

      function ko(e, t, r, n, o, i, s) {
        if (1 === e.length && En(e[0])) return [{
          type: To.literal,
          value: e[0].value
        }];
        for (var a = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (En(u)) a.push({
            type: To.literal,
            value: u.value
          });
          else if (Rn(u)) "number" == typeof i && a.push({
            type: To.literal,
            value: r.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new jo(d, s);
            var f = o[d];
            if (xn(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), a.push({
              type: "string" == typeof f ? To.literal : To.object,
              value: f
            });
            else if (Cn(u)) {
              var h = "string" == typeof u.style ? n.date[u.style] : In(u.style) ? u.style.parsedOptions : void 0;
              a.push({
                type: To.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (Sn(u)) h = "string" == typeof u.style ? n.time[u.style] : In(u.style) ? u.style.parsedOptions : n.time.medium, a.push({
              type: To.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (Pn(u))(h = "string" == typeof u.style ? n.number[u.style] : jn(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), a.push({
              type: To.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (Nn(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!Io(v)) throw new No(m, "function", s);
                var y = v(ko(p, t, r, n, o, i).map(function(e) {
                  return e.value
                }));
                Array.isArray(y) || (y = [y]), a.push.apply(a, y.map(function(e) {
                  return {
                    type: "string" == typeof e ? To.literal : To.object,
                    value: e
                  }
                }))
              }
              if (Tn(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new Ro(u.value, f, Object.keys(u.options), s);
                a.push.apply(a, ko(g.value, t, r, n, o))
              } else if (On(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new Oo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', go.MISSING_INTL_API, s);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new Ro(u.value, f, Object.keys(u.options), s);
                a.push.apply(a, ko(g.value, t, r, n, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = a).length < 2 ? _ : _.reduce(function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === To.literal && t.type === To.literal ? r.value += t.value : e.push(t), e
        }, []);
        var _
      }

      function Lo(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(To || (To = {}));
      var Do, Ao = function() {
        function e(t, r, n, o) {
          void 0 === r && (r = e.defaultLocale);
          var i, s, a, l = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = l.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce(function(e, t) {
                return e.length && t.type === To.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }, []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return ko(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var c = o || {},
              u = (c.formatters, (0, ln.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, ln.__assign)((0, ln.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (s = e.formats, (a = n) ? Object.keys(s).reduce(function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, ln.__assign)((0, ln.__assign)((0, ln.__assign)({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
                return r[n] = (0, ln.__assign)((0, ln.__assign)({}, e[n]), t[n] || {}), r
              }, {})) : e
            }(s[t], a[t]), e
          }, (0, ln.__assign)({}, s)) : s), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: cn(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Lo(i.number),
              strategy: wn.variadic
            }),
            getDateTimeFormat: cn(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Lo(i.dateTime),
              strategy: wn.variadic
            }),
            getPluralRules: cn(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Lo(i.pluralRules),
              strategy: wn.variadic
            })
          })
        }
        return Object.defineProperty(e, "defaultLocale", {
          get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
          },
          enumerable: !1,
          configurable: !0
        }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
          if (void 0 !== Intl.Locale) {
            var t = Intl.NumberFormat.supportedLocalesOf(e);
            return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
          }
        }, e.__parse = So, e.formats = {
          number: {
            integer: {
              maximumFractionDigits: 0
            },
            currency: {
              style: "currency"
            },
            percent: {
              style: "percent"
            }
          },
          date: {
            short: {
              month: "numeric",
              day: "numeric",
              year: "2-digit"
            },
            medium: {
              month: "short",
              day: "numeric",
              year: "numeric"
            },
            long: {
              month: "long",
              day: "numeric",
              year: "numeric"
            },
            full: {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          time: {
            short: {
              hour: "numeric",
              minute: "numeric"
            },
            medium: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            },
            long: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            },
            full: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            }
          }
        }, e
      }();
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(Do || (Do = {}));
      var Mo = function(e) {
          function t(r, n, o) {
            var i = this,
              s = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(s ? "\n".concat(s.message, "\n").concat(s.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, ln.__extends)(t, e), t
        }(Error),
        Bo = function(e) {
          function t(t, r) {
            return e.call(this, Do.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, ln.__extends)(t, e), t
        }(Mo),
        Ho = function(e) {
          function t(t, r) {
            return e.call(this, Do.INVALID_CONFIG, t, r) || this
          }
          return (0, ln.__extends)(t, e), t
        }(Mo),
        zo = function(e) {
          function t(t, r) {
            return e.call(this, Do.MISSING_DATA, t, r) || this
          }
          return (0, ln.__extends)(t, e), t
        }(Mo),
        Vo = function(e) {
          function t(t, r, n) {
            var o = e.call(this, Do.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, ln.__extends)(t, e), t
        }(Mo),
        Fo = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, ln.__extends)(t, e), t
        }(Vo),
        Uo = function(e) {
          function t(t, r) {
            var n = e.call(this, Do.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            }).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, ln.__extends)(t, e), t
        }(Mo);

      function Go(e, t, r) {
        return void 0 === r && (r = {}), t.reduce(function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }, {})
      }
      var qo = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Ko(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }

      function Xo(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new Bo("No ".concat(t, " format named: ").concat(r)))
      }

      function Wo(e, t) {
        var r = t && t.cache ? t.cache : ti,
          n = t && t.serializer ? t.serializer : Jo;
        return (t && t.strategy ? t.strategy : Qo)(e, {
          cache: r,
          serializer: n
        })
      }

      function Zo(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, n), t.set(i, s)), s
      }

      function $o(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function Yo(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Qo(e, t) {
        return Yo(e, this, 1 === e.length ? Zo : $o, t.cache.create(), t.serializer)
      }
      var Jo = function() {
        return JSON.stringify(arguments)
      };

      function ei() {
        this.cache = Object.create(null)
      }
      ei.prototype.get = function(e) {
        return this.cache[e]
      }, ei.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var ti = {
          create: function() {
            return new ei
          }
        },
        ri = {
          variadic: function(e, t) {
            return Yo(e, this, $o, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Yo(e, this, Zo, t.cache.create(), t.serializer)
          }
        };

      function ni(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Wo(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ri.variadic
      }), Wo(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ri.variadic
      }), Wo(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ri.variadic
      }), Wo(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ri.variadic
      }), Wo(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ri.variadic
      });
      var oi = (0, ln.__assign)((0, ln.__assign)({}, qo), {
        textComponent: M.Fragment
      });
      r(35255);
      var ii = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? M.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = M.createContext(null)),
        si = (ii.Consumer, ii.Provider),
        ai = ii;

      function li(e, t) {
        return Object.keys(e).reduce(function(r, n) {
          return r[n] = (0, ln.__assign)({
            timeZone: t
          }, e[n]), r
        }, {})
      }

      function ci(e, t) {
        return Object.keys((0, ln.__assign)((0, ln.__assign)({}, e), t)).reduce(function(r, n) {
          return r[n] = (0, ln.__assign)((0, ln.__assign)({}, e[n] || {}), t[n] || {}), r
        }, {})
      }

      function ui(e, t) {
        if (!t) return e;
        var r = Ao.formats;
        return (0, ln.__assign)((0, ln.__assign)((0, ln.__assign)({}, r), e), {
          date: ci(li(r.date, t), li(e.date || {}, t)),
          time: ci(li(r.time, t), li(e.time || {}, t))
        })
      }
      cn(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: wn.variadic
      }), cn(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: wn.variadic
      }), cn(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: wn.variadic
      }), cn(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: wn.variadic
      }), cn(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: wn.variadic
      });
      var di = function(e, t, r, n, o) {
          var i = e.locale,
            s = e.formats,
            a = e.messages,
            l = e.defaultLocale,
            c = e.defaultFormats,
            u = e.fallbackOnEmptyString,
            d = e.onError,
            f = e.timeZone,
            h = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var p = r.id,
            m = r.defaultMessage;
          ! function(e, t, r) {
            if (void 0 === r && (r = Error), !e) throw new r("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          var v = String(p),
            y = a && Object.prototype.hasOwnProperty.call(a, v) && a[v];
          if (Array.isArray(y) && 1 === y.length && y[0].type === yn.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, ln.__assign)((0, ln.__assign)({}, h), n || {}), s = ui(s, f), c = ui(c, f), !y) {
            if (!1 === u && "" === y) return y;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Uo(r, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new Fo('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, i, s, (0, ln.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new Fo('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new Fo('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        fi = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function hi(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var s = r.format,
          a = s && Xo(o, "number", s, i) || {};
        return t(n, Go(r, fi, a))
      }

      function pi(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return hi(e, t, n).format(r)
        } catch (t) {
          e.onError(new Vo("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function mi(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return hi(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new Vo("Error formatting number.", e.locale, t))
        }
        return []
      }
      var vi = ["numeric", "style"];

      function yi(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new Oo('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', go.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var s = r.format,
              a = !!s && Xo(o, "relative", s, i) || {};
            return t(n, Go(r, vi, a))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new Vo("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var gi = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function bi(e, t, r, n) {
        var o = e.locale,
          i = e.formats,
          s = e.onError,
          a = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, ln.__assign)((0, ln.__assign)({}, a && {
            timeZone: a
          }), l && Xo(i, t, l, s)),
          u = Go(n, gi, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, ln.__assign)((0, ln.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function _i(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return bi(e, "date", t, s).format(a)
        } catch (t) {
          e.onError(new Vo("Error formatting date.", e.locale, t))
        }
        return String(a)
      }

      function wi(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return bi(e, "time", t, s).format(a)
        } catch (t) {
          e.onError(new Vo("Error formatting time.", e.locale, t))
        }
        return String(a)
      }

      function Ei(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = r[2],
          a = void 0 === s ? {} : s,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = Go(a, gi, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new Vo("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function xi(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return bi(e, "date", t, s).formatToParts(a)
        } catch (t) {
          e.onError(new Vo("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Pi(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return bi(e, "time", t, s).formatToParts(a)
        } catch (t) {
          e.onError(new Vo("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Ci = ["type"];

      function Si(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new Oo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', go.MISSING_INTL_API));
        var s = Go(n, Ci);
        try {
          return t(o, s).select(r)
        } catch (e) {
          i(new Vo("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Ti = ["type", "style"],
        Oi = Date.now();

      function Ri(e, t, r, n) {
        void 0 === n && (n = {});
        var o = Ni(e, t, r, n).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Ni(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || i(new Oo('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', go.MISSING_INTL_API));
        var s = Go(n, Ti);
        try {
          var a = {},
            l = r.map(function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(Oi, "_").concat(e, "_").concat(Oi)
                }(t);
                return a[r] = e, r
              }
              return String(e)
            });
          return t(o, s).formatToParts(l).map(function(e) {
            return "literal" === e.type ? e : (0, ln.__assign)((0, ln.__assign)({}, e), {
              value: a[e.value] || e.value
            })
          })
        } catch (e) {
          i(new Vo("Error formatting list.", o, e))
        }
        return r
      }
      var ji, Ii, ki, Li = ["style", "type", "fallback", "languageDisplay"];

      function Di(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Oo('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', go.MISSING_INTL_API));
        var s = Go(n, Li);
        try {
          return t(o, s).of(r)
        } catch (e) {
          i(new Vo("Error formatting display name.", o, e))
        }
      }

      function Ai(e, t) {
        var r = function(e) {
            void 0 === e && (e = {
              dateTime: {},
              number: {},
              message: {},
              relativeTime: {},
              pluralRules: {},
              list: {},
              displayNames: {}
            });
            var t = Intl.RelativeTimeFormat,
              r = Intl.ListFormat,
              n = Intl.DisplayNames,
              o = cn(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Ko(e.dateTime),
                strategy: wn.variadic
              }),
              i = cn(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Ko(e.number),
                strategy: wn.variadic
              }),
              s = cn(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, ln.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Ko(e.pluralRules),
                strategy: wn.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: cn(function(e, t, r, n) {
                return new Ao(e, t, r, (0, ln.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: s
                  }
                }, n || {}))
              }, {
                cache: Ko(e.message),
                strategy: wn.variadic
              }),
              getRelativeTimeFormat: cn(function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, ln.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Ko(e.relativeTime),
                strategy: wn.variadic
              }),
              getPluralRules: s,
              getListFormat: cn(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, ln.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Ko(e.list),
                strategy: wn.variadic
              }),
              getDisplayNames: cn(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, ln.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Ko(e.displayNames),
                strategy: wn.variadic
              })
            }
          }(t),
          n = (0, ln.__assign)((0, ln.__assign)({}, qo), e),
          o = n.locale,
          i = n.defaultLocale,
          s = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && s ? s(new zo('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && s && s(new zo('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new Ho('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, ln.__assign)((0, ln.__assign)({}, n), {
            formatters: r,
            formatNumber: pi.bind(null, n, r.getNumberFormat),
            formatNumberToParts: mi.bind(null, n, r.getNumberFormat),
            formatRelativeTime: yi.bind(null, n, r.getRelativeTimeFormat),
            formatDate: _i.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: xi.bind(null, n, r.getDateTimeFormat),
            formatTime: wi.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Ei.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Pi.bind(null, n, r.getDateTimeFormat),
            formatPlural: Si.bind(null, n, r.getPluralRules),
            formatMessage: di.bind(null, n, r),
            $t: di.bind(null, n, r),
            formatList: Ri.bind(null, n, r.getListFormat),
            formatListToParts: Ni.bind(null, n, r.getListFormat),
            formatDisplayName: Di.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(ji || (ji = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Ii || (Ii = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(ki || (ki = {}));
      var Mi, Bi = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Hi = {
          "001": ["H", "h"],
          419: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AD: ["H", "hB"],
          AE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AI: ["H", "h", "hb", "hB"],
          AL: ["h", "H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AR: ["h", "H", "hB", "hb"],
          AS: ["h", "H"],
          AT: ["H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          AW: ["H", "hB"],
          AX: ["H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BB: ["h", "hb", "H", "hB"],
          BD: ["h", "hB", "H"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BG: ["H", "hB", "h"],
          BH: ["h", "hB", "hb", "H"],
          BI: ["H", "h"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BN: ["hb", "hB", "h", "H"],
          BO: ["h", "H", "hB", "hb"],
          BQ: ["H"],
          BR: ["H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          BT: ["h", "H"],
          BW: ["H", "h", "hb", "hB"],
          BY: ["H", "h"],
          BZ: ["H", "h", "hb", "hB"],
          CA: ["h", "hb", "H", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CD: ["hB", "H"],
          CF: ["H", "h", "hB"],
          CG: ["H", "hB"],
          CH: ["H", "hB", "h"],
          CI: ["H", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CL: ["h", "H", "hB", "hb"],
          CM: ["H", "h", "hB"],
          CN: ["H", "hB", "hb", "h"],
          CO: ["h", "H", "hB", "hb"],
          CP: ["H"],
          CR: ["h", "H", "hB", "hb"],
          CU: ["h", "H", "hB", "hb"],
          CV: ["H", "hB"],
          CW: ["H", "hB"],
          CX: ["H", "h", "hb", "hB"],
          CY: ["h", "H", "hb", "hB"],
          CZ: ["H"],
          DE: ["H", "hB"],
          DG: ["H", "h", "hb", "hB"],
          DJ: ["h", "H"],
          DK: ["H"],
          DM: ["h", "hb", "H", "hB"],
          DO: ["h", "H", "hB", "hb"],
          DZ: ["h", "hB", "hb", "H"],
          EA: ["H", "h", "hB", "hb"],
          EC: ["h", "H", "hB", "hb"],
          EE: ["H", "hB"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          ER: ["h", "H"],
          ES: ["H", "hB", "h", "hb"],
          ET: ["hB", "hb", "h", "H"],
          FI: ["H"],
          FJ: ["h", "hb", "H", "hB"],
          FK: ["H", "h", "hb", "hB"],
          FM: ["h", "hb", "H", "hB"],
          FO: ["H", "h"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GE: ["H", "hB", "h"],
          GF: ["H", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GH: ["h", "H"],
          GI: ["H", "h", "hb", "hB"],
          GL: ["H", "h"],
          GM: ["h", "hb", "H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GQ: ["H", "hB", "h", "hb"],
          GR: ["h", "H", "hb", "hB"],
          GT: ["h", "H", "hB", "hb"],
          GU: ["h", "hb", "H", "hB"],
          GW: ["H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          HK: ["h", "hB", "hb", "H"],
          HN: ["h", "H", "hB", "hb"],
          HR: ["H", "hB"],
          HU: ["H", "h"],
          IC: ["H", "h", "hB", "hb"],
          ID: ["H"],
          IE: ["H", "h", "hb", "hB"],
          IL: ["H", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IN: ["h", "H"],
          IO: ["H", "h", "hb", "hB"],
          IQ: ["h", "hB", "hb", "H"],
          IR: ["hB", "H"],
          IS: ["H"],
          IT: ["H", "hB"],
          JE: ["H", "h", "hb", "hB"],
          JM: ["h", "hb", "H", "hB"],
          JO: ["h", "hB", "hb", "H"],
          JP: ["H", "K", "h"],
          KE: ["hB", "hb", "H", "h"],
          KG: ["H", "h", "hB", "hb"],
          KH: ["hB", "h", "H", "hb"],
          KI: ["h", "hb", "H", "hB"],
          KM: ["H", "h", "hB", "hb"],
          KN: ["h", "hb", "H", "hB"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          KW: ["h", "hB", "hb", "H"],
          KY: ["h", "hb", "H", "hB"],
          KZ: ["H", "hB"],
          LA: ["H", "hb", "hB", "h"],
          LB: ["h", "hB", "hb", "H"],
          LC: ["h", "hb", "H", "hB"],
          LI: ["H", "hB", "h"],
          LK: ["H", "h", "hB", "hb"],
          LR: ["h", "hb", "H", "hB"],
          LS: ["h", "H"],
          LT: ["H", "h", "hb", "hB"],
          LU: ["H", "h", "hB"],
          LV: ["H", "hB", "hb", "h"],
          LY: ["h", "hB", "hb", "H"],
          MA: ["H", "h", "hB", "hb"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          ME: ["H", "hB", "h"],
          MF: ["H", "hB"],
          MG: ["H", "h"],
          MH: ["h", "hb", "H", "hB"],
          MK: ["H", "h", "hb", "hB"],
          ML: ["H"],
          MM: ["hB", "hb", "H", "h"],
          MN: ["H", "h", "hb", "hB"],
          MO: ["h", "hB", "hb", "H"],
          MP: ["h", "hb", "H", "hB"],
          MQ: ["H", "hB"],
          MR: ["h", "hB", "hb", "H"],
          MS: ["H", "h", "hb", "hB"],
          MT: ["H", "h"],
          MU: ["H", "h"],
          MV: ["H", "h"],
          MW: ["h", "hb", "H", "hB"],
          MX: ["h", "H", "hB", "hb"],
          MY: ["hb", "hB", "h", "H"],
          MZ: ["H", "hB"],
          NA: ["h", "H", "hB", "hb"],
          NC: ["H", "hB"],
          NE: ["H"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NI: ["h", "H", "hB", "hb"],
          NL: ["H", "hB"],
          NO: ["H", "h"],
          NP: ["H", "h", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          OM: ["h", "hB", "hb", "H"],
          PA: ["h", "H", "hB", "hb"],
          PE: ["h", "H", "hB", "hb"],
          PF: ["H", "h", "hB"],
          PG: ["h", "H"],
          PH: ["h", "hB", "hb", "H"],
          PK: ["h", "hB", "H"],
          PL: ["H", "h"],
          PM: ["H", "hB"],
          PN: ["H", "h", "hb", "hB"],
          PR: ["h", "H", "hB", "hb"],
          PS: ["h", "hB", "hb", "H"],
          PT: ["H", "hB"],
          PW: ["h", "H"],
          PY: ["h", "H", "hB", "hb"],
          QA: ["h", "hB", "hb", "H"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          RS: ["H", "hB", "h"],
          RU: ["H"],
          RW: ["H", "h"],
          SA: ["h", "hB", "hb", "H"],
          SB: ["h", "hb", "H", "hB"],
          SC: ["H", "h", "hB"],
          SD: ["h", "hB", "hb", "H"],
          SE: ["H"],
          SG: ["h", "hb", "H", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SI: ["H", "hB"],
          SJ: ["H"],
          SK: ["H"],
          SL: ["h", "hb", "H", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          SO: ["h", "H"],
          SR: ["H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          ST: ["H", "hB"],
          SV: ["h", "H", "hB", "hb"],
          SX: ["H", "h", "hb", "hB"],
          SY: ["h", "hB", "hb", "H"],
          SZ: ["h", "hb", "H", "hB"],
          TA: ["H", "h", "hb", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TD: ["h", "H", "hB"],
          TF: ["H", "h", "hB"],
          TG: ["H", "hB"],
          TH: ["H", "h"],
          TJ: ["H", "h"],
          TL: ["H", "hB", "hb", "h"],
          TM: ["H", "h"],
          TN: ["h", "hB", "hb", "H"],
          TO: ["h", "H"],
          TR: ["H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          TW: ["hB", "hb", "h", "H"],
          TZ: ["hB", "hb", "H", "h"],
          UA: ["H", "hB", "h"],
          UG: ["hB", "hb", "H", "h"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          UY: ["h", "H", "hB", "hb"],
          UZ: ["H", "hB", "h"],
          VA: ["H", "h", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VE: ["h", "H", "hB", "hb"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          VN: ["H", "h"],
          VU: ["h", "H"],
          WF: ["H", "hB"],
          WS: ["h", "H"],
          XK: ["H", "hB", "h"],
          YE: ["h", "hB", "hb", "H"],
          YT: ["H", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          ZW: ["H", "h"],
          "af-ZA": ["H", "h", "hB", "hb"],
          "ar-001": ["h", "hB", "hb", "H"],
          "ca-ES": ["H", "h", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          "en-HK": ["h", "hb", "H", "hB"],
          "en-IL": ["H", "h", "hb", "hB"],
          "en-MY": ["h", "hb", "H", "hB"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "hi-IN": ["hB", "h", "H"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          "ta-IN": ["hB", "h", "hb", "H"],
          "te-IN": ["hB", "h", "H"],
          "zu-ZA": ["H", "hB", "hb", "h"]
        };

      function zi(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (Hi[r || ""] || Hi[n || ""] || Hi["".concat(n, "-001")] || Hi["001"])[0]
      }
      var Vi = new RegExp("^".concat(Bi.source, "*")),
        Fi = new RegExp("".concat(Bi.source, "*$"));

      function Ui(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Gi = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        qi = !!String.fromCodePoint,
        Ki = !!Object.fromEntries,
        Xi = !!String.prototype.codePointAt,
        Wi = !!String.prototype.trimStart,
        Zi = !!String.prototype.trimEnd,
        $i = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Yi = !0;
      try {
        Yi = "a" === (null === (Mi = ss("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Mi ? void 0 : Mi[0])
      } catch (e) {
        Yi = !1
      }
      var Qi, Ji, es = Gi ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        ts = qi ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        rs = Ki ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        ns = Xi ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        os = Wi ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Vi, "")
        },
        is = Zi ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Fi, "")
        };

      function ss(e, t) {
        return new RegExp(e, t)
      }
      if (Yi) {
        var as = ss("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Qi = function(e, t) {
          var r;
          return as.lastIndex = t, null !== (r = as.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Qi = function(e, t) {
        for (var r = [];;) {
          var n = ns(e, t);
          if (void 0 === n || us(n) || ds(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return ts.apply(void 0, r)
      };

      function ls(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function cs(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function us(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function ds(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function fs(e) {
        return e ? Object.keys(e).reduce(function(t, r) {
          var n, o = e[r];
          return t[r] = "function" == typeof o ? (n = o, function(e) {
            return n(M.Children.toArray(e))
          }) : o, t
        }, {}) : e
      }! function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var n = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, r)).err) return i;
              n.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(ji.UNMATCHED_CLOSING_TAG, Ui(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && ls(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  n.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  n.push(i.val)
                }
              } else {
                var s = this.clonePosition();
                this.bump(), n.push({
                  type: Ii.pound,
                  location: Ui(s, this.clonePosition())
                })
              }
            }
          }
          return {
            val: n,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var n = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: Ii.literal,
              value: "<".concat(n, "/>"),
              location: Ui(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !ls(this.char())) return this.error(ji.INVALID_TAG, Ui(s, this.clonePosition()));
              var a = this.clonePosition();
              return n !== this.parseTagName() ? this.error(ji.UNMATCHED_CLOSING_TAG, Ui(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Ii.tag,
                  value: n,
                  children: i,
                  location: Ui(r, this.clonePosition())
                },
                err: null
              } : this.error(ji.INVALID_TAG, Ui(s, this.clonePosition())))
            }
            return this.error(ji.UNCLOSED_TAG, Ui(r, this.clonePosition()))
          }
          return this.error(ji.INVALID_TAG, Ui(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && cs(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) n += i;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                n += s
              }
            }
          }
          var a = Ui(r, this.clonePosition());
          return {
            val: {
              type: Ii.literal,
              value: n,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ls(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return ts.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), ts(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(ji.EXPECT_ARGUMENT_CLOSING_BRACE, Ui(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(ji.EMPTY_ARGUMENT, Ui(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(ji.MALFORMED_ARGUMENT, Ui(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(ji.EXPECT_ARGUMENT_CLOSING_BRACE, Ui(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Ii.argument,
                  value: n,
                  location: Ui(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ji.EXPECT_ARGUMENT_CLOSING_BRACE, Ui(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(ji.MALFORMED_ARGUMENT, Ui(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Qi(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Ui(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (s) {
            case "":
              return this.error(ji.EXPECT_ARGUMENT_TYPE, Ui(i, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = is(y.val)).length) return this.error(ji.EXPECT_ARGUMENT_STYLE, Ui(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Ui(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Ui(n, this.clonePosition());
              if (l && es(null == l ? void 0 : l.style, "::", 0)) {
                var d = os(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: Ii.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(ji.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = zi(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += "a";
                      for (; s-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: ki.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Dn(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? Ii.date : Ii.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? Ii.number : "date" === s ? Ii.date : Ii.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(ji.EXPECT_SELECT_ARGUMENT_OPTIONS, Ui(p, (0, ln.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(ji.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ui(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(ji.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ji.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Ui(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: Ii.select,
                  value: r,
                  options: rs(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Ii.plural,
                  value: r,
                  options: rs(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(ji.INVALID_ARGUMENT_TYPE, Ui(i, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(ji.EXPECT_ARGUMENT_CLOSING_BRACE, Ui(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(ji.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ui(r, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var r = [];
          try {
            r = Mn(e)
          } catch (e) {
            return this.error(ji.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: ki.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Xn(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, s = [], a = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(ji.EXPECT_PLURAL_ARGUMENT_SELECTOR, ji.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Ui(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? ji.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ji.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? ji.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ji.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ui(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: Ui(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? ji.EXPECT_SELECT_ARGUMENT_SELECTOR : ji.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ui(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(ji.MISSING_OTHER_CLAUSE, Ui(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            o = !0, i = 10 * i + (s - 48), this.bump()
          }
          var a = Ui(n, this.clonePosition());
          return o ? $i(i *= r) ? {
            val: i,
            err: null
          } : this.error(t, a) : this.error(e, a)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = ns(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (es(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && us(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }
      }(),
      function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(Ji || (Ji = {}));
      var hs = function(e, t, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var s = fs(n),
            a = di.apply(void 0, (0, ln.__spreadArray)([e, t, r, s], o, !1));
          return Array.isArray(a) ? M.Children.toArray(a) : a
        },
        ps = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, ln.__rest)(e, ["defaultRichTextElements"]),
            o = fs(r),
            i = Ai((0, ln.__assign)((0, ln.__assign)((0, ln.__assign)({}, oi), n), {
              defaultRichTextElements: o
            }), t),
            s = {
              locale: i.locale,
              timeZone: i.timeZone,
              fallbackOnEmptyString: i.fallbackOnEmptyString,
              formats: i.formats,
              defaultLocale: i.defaultLocale,
              defaultFormats: i.defaultFormats,
              messages: i.messages,
              onError: i.onError,
              defaultRichTextElements: o
            };
          return (0, ln.__assign)((0, ln.__assign)({}, i), {
            formatMessage: hs.bind(null, s, i.formatters),
            $t: hs.bind(null, s, i.formatters)
          })
        };

      function ms(e) {
        return {
          locale: e.locale,
          timeZone: e.timeZone,
          fallbackOnEmptyString: e.fallbackOnEmptyString,
          formats: e.formats,
          textComponent: e.textComponent,
          messages: e.messages,
          defaultLocale: e.defaultLocale,
          defaultFormats: e.defaultFormats,
          onError: e.onError,
          onWarn: e.onWarn,
          wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
          defaultRichTextElements: e.defaultRichTextElements
        }
      }
      var vs = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cache = {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }, t.state = {
            cache: t.cache,
            intl: ps(ms(t.props), t.cache),
            prevConfig: ms(t.props)
          }, t
        }
        return (0, ln.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = ms(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var r = Object.keys(e),
              n = Object.keys(t),
              o = r.length;
            if (n.length !== o) return !1;
            for (var i = 0; i < o; i++) {
              var s = r[i];
              if (e[s] !== t[s] || !Object.prototype.hasOwnProperty.call(t, s)) return !1
            }
            return !0
          }(r, o) ? null : {
            intl: ps(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return ni(this.state.intl), M.createElement(si, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = oi, t
      }(M.PureComponent);
      const ys = vs;

      function gs() {
        var e = M.useContext(ai);
        return ni(e), e
      }
      var bs, _s;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(bs || (bs = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(_s || (_s = {}));
      var ws = function(e) {
        var t = gs(),
          r = e.value,
          n = e.children,
          o = (0, ln.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function Es(e) {
        var t = function(t) {
          var r = gs(),
            n = t.value,
            o = t.children,
            i = (0, ln.__rest)(t, ["value", "children"]),
            s = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(s, i) : r.formatTimeToParts(s, i))
        };
        return t.displayName = _s[e], t
      }

      function xs(e) {
        var t = function(t) {
          var r = gs(),
            n = t.value,
            o = t.children,
            i = (0, ln.__rest)(t, ["value", "children"]),
            s = r[e](n, i);
          if ("function" == typeof o) return o(s);
          var a = r.textComponent || M.Fragment;
          return M.createElement(a, null, s)
        };
        return t.displayName = bs[e], t
      }
      ws.displayName = "FormattedNumberParts", ws.displayName = "FormattedNumberParts", xs("formatDate"), xs("formatTime"), xs("formatNumber"), xs("formatList"), xs("formatDisplayName"), Es("formatDate"), Es("formatTime");
      const Ps = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, i] = (0, M.useState)(null);
          return (0, M.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              i(e.default)
            })
          }, [r]), o ? (0, _.jsx)(ys, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        Cs = {
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
        },
        Ss = (e, t) => {
          const r = "more" === t ? W.lightHc : W.light,
            n = "more" === t ? W.darkHc : W.dark;
          return "dark" === e ? n : r
        };
      class Ts {
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
          return r ? t : Ir(t, this.max[e], this.min[e])
        }
      }
      class Os {
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
      class Rs {
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
      class Ns {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Nr(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Nr(this.prevTap, {
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
      class js {
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
          e.src = this.thumbnail.currentSrc ?? "", await Or(e)
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
      class Is {
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
      class ks extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Ls extends Rs {
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
          if (!this.dispatch(e, new ks(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class Ds {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Rr(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Nr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Rr(e);
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
            i = Nr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Nr({
            x: 0,
            y: 0
          }, i);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Nr(this.startPan, i)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((a = s).x !== l.x || a.y !== l.y || n || o) && (Nr(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class As extends Rs {
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
          super(), this.width = e, this.height = t, this.opener = new js({
            slide: this
          }), this.bounds = new Ts({
            slide: this
          }), this.dragHandler = new Ns({
            slide: this
          }), this.scrollWheel = new Is({
            slide: this
          }), this.zoomHandler = new Ds({
            slide: this
          }), this.zoomLevels = new Os({
            options: r
          }), this.tapHandler = new Ls({
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
          r || (e = Ir(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), jr(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), jr(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Nr(this.pan, this.bounds.center)
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
      const Ms = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        Bs = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        Hs = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        zs = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        Vs = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        Fs = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        Us = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        Gs = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        qs = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        Ks = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Xs = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };
      var Ws = "foundry_bc732x1";
      const Zs = (0, M.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Yr(e, e => r?.(e), [r]), (0, _.jsx)(lt, {
        size: "XS",
        className: (0, pe.clsx)("foundry_bc732x0", {
          [Ws]: t
        }),
        asChild: !0,
        children: (0, _.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var $s = fa(),
        Ys = e => la(e, $s),
        Qs = fa();
      Ys.write = e => la(e, Qs);
      var Js = fa();
      Ys.onStart = e => la(e, Js);
      var ea = fa();
      Ys.onFrame = e => la(e, ea);
      var ta = fa();
      Ys.onFinish = e => la(e, ta);
      var ra = [];
      Ys.setTimeout = (e, t) => {
        const r = Ys.now() + t,
          n = () => {
            const e = ra.findIndex(e => e.cancel == n);
            ~e && ra.splice(e, 1), sa -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return ra.splice(na(r), 0, o), sa += 1, ca(), o
      };
      var na = e => ~(~ra.findIndex(t => t.time > e) || ~ra.length);
      Ys.cancel = e => {
        Js.delete(e), ea.delete(e), ta.delete(e), $s.delete(e), Qs.delete(e)
      }, Ys.sync = e => {
        aa = !0, Ys.batchedUpdates(e), aa = !1
      }, Ys.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Ys.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Js.delete(r), t = null
        }, n
      };
      var oa = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Ys.use = e => oa = e, Ys.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Ys.batchedUpdates = e => e(), Ys.catch = console.error, Ys.frameLoop = "always", Ys.advance = () => {
        "demand" !== Ys.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : da()
      };
      var ia = -1,
        sa = 0,
        aa = !1;

      function la(e, t) {
        aa ? (t.delete(e), e(0)) : (t.add(e), ca())
      }

      function ca() {
        ia < 0 && (ia = 0, "demand" !== Ys.frameLoop && oa(ua))
      }

      function ua() {
        ~ia && (oa(ua), Ys.batchedUpdates(da))
      }

      function da() {
        const e = ia;
        ia = Ys.now();
        const t = na(ia);
        t && (ha(ra.splice(0, t), e => e.handler()), sa -= t), sa ? (Js.flush(), $s.flush(e ? Math.min(64, ia - e) : 16.667), ea.flush(), Qs.flush(), ta.flush()) : ia = -1
      }

      function fa() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            sa += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (sa -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, sa -= t.size, ha(t, t => t(r) && e.add(t)), sa += e.size, t = e)
          }
        }
      }

      function ha(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Ys.catch(e)
          }
        })
      }
      var pa = Object.defineProperty,
        ma = {};

      function va() {}((e, t) => {
        for (var r in t) pa(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(ma, {
        assign: () => Na,
        colors: () => Ta,
        createStringInterpolator: () => xa,
        skipAnimation: () => Oa,
        to: () => Pa,
        willAdvance: () => Ra
      });
      var ya = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function ga(e, t) {
        if (ya.arr(e)) {
          if (!ya.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var ba = (e, t) => e.forEach(t);

      function _a(e, t, r) {
        if (ya.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var wa = e => ya.und(e) ? [] : ya.arr(e) ? e : [e];

      function Ea(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), ba(r, t)
        }
      }
      var xa, Pa, Ca = (e, ...t) => Ea(e, e => e(...t)),
        Sa = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Ta = null,
        Oa = !1,
        Ra = va,
        Na = e => {
          e.to && (Pa = e.to), e.now && (Ys.now = e.now), void 0 !== e.colors && (Ta = e.colors), null != e.skipAnimation && (Oa = e.skipAnimation), e.createStringInterpolator && (xa = e.createStringInterpolator), e.requestAnimationFrame && Ys.use(e.requestAnimationFrame), e.batchedUpdates && (Ys.batchedUpdates = e.batchedUpdates), e.willAdvance && (Ra = e.willAdvance), e.frameLoop && (Ys.frameLoop = e.frameLoop)
        },
        ja = new Set,
        Ia = [],
        ka = [],
        La = 0,
        Da = {
          get idle() {
            return !ja.size && !Ia.length
          },
          start(e) {
            La > e.priority ? (ja.add(e), Ys.onStart(Aa)) : (Ma(e), Ys(Ha))
          },
          advance: Ha,
          sort(e) {
            if (La) Ys.onFrame(() => Da.sort(e));
            else {
              const t = Ia.indexOf(e);
              ~t && (Ia.splice(t, 1), Ba(e))
            }
          },
          clear() {
            Ia = [], ja.clear()
          }
        };

      function Aa() {
        ja.forEach(Ma), ja.clear(), Ys(Ha)
      }

      function Ma(e) {
        Ia.includes(e) || Ba(e)
      }

      function Ba(e) {
        Ia.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(Ia), 0, e)
      }

      function Ha(e) {
        const t = ka;
        for (let r = 0; r < Ia.length; r++) {
          const n = Ia[r];
          La = n.priority, n.idle || (Ra(n), n.advance(e), n.idle || t.push(n))
        }
        return La = 0, (ka = Ia).length = 0, (Ia = t).length > 0
      }
      var za = "[-+]?\\d*\\.?\\d+",
        Va = za + "%";

      function Fa(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Ua = new RegExp("rgb" + Fa(za, za, za)),
        Ga = new RegExp("rgba" + Fa(za, za, za, za)),
        qa = new RegExp("hsl" + Fa(za, Va, Va)),
        Ka = new RegExp("hsla" + Fa(za, Va, Va, za)),
        Xa = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Wa = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Za = /^#([0-9a-fA-F]{6})$/,
        $a = /^#([0-9a-fA-F]{8})$/;

      function Ya(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Qa(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = Ya(o, n, e + 1 / 3),
          s = Ya(o, n, e),
          a = Ya(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function Ja(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function el(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function tl(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function rl(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function nl(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Za.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ta && void 0 !== Ta[e] ? Ta[e] : (t = Ua.exec(e)) ? (Ja(t[1]) << 24 | Ja(t[2]) << 16 | Ja(t[3]) << 8 | 255) >>> 0 : (t = Ga.exec(e)) ? (Ja(t[1]) << 24 | Ja(t[2]) << 16 | Ja(t[3]) << 8 | tl(t[4])) >>> 0 : (t = Xa.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = $a.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Wa.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = qa.exec(e)) ? (255 | Qa(el(t[1]), rl(t[2]), rl(t[3]))) >>> 0 : (t = Ka.exec(e)) ? (Qa(el(t[1]), rl(t[2]), rl(t[3])) | tl(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var ol = (e, t, r) => {
          if (ya.fun(e)) return e;
          if (ya.arr(e)) return ol({
            range: e,
            output: t,
            extrapolate: r
          });
          if (ya.str(e.output[0])) return xa(e);
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
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === s) return c;
                "clamp" === s && (c = t)
              }
              if (c > r) {
                if ("identity" === a) return c;
                "clamp" === a && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = i(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, s, a, n.map)
          }
        },
        il = 1.70158,
        sl = 1.525 * il,
        al = il + 1,
        ll = 2 * Math.PI / 3,
        cl = 2 * Math.PI / 4.5,
        ul = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        dl = {
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
          easeInBack: e => al * e * e * e - il * e * e,
          easeOutBack: e => 1 + al * Math.pow(e - 1, 3) + il * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - sl) / 2 : (Math.pow(2 * e - 2, 2) * ((sl + 1) * (2 * e - 2) + sl) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ll),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ll) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * cl) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * cl) / 2 + 1,
          easeInBounce: e => 1 - ul(1 - e),
          easeOutBounce: ul,
          easeInOutBounce: e => e < .5 ? (1 - ul(1 - 2 * e)) / 2 : (1 + ul(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        fl = Symbol.for("FluidValue.get"),
        hl = Symbol.for("FluidValue.observers"),
        pl = e => Boolean(e && e[fl]),
        ml = e => e && e[fl] ? e[fl]() : e,
        vl = e => e[hl] || null;

      function yl(e, t) {
        const r = e[hl];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var gl = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            bl(this, e)
          }
        },
        bl = (e, t) => xl(e, fl, t);

      function _l(e, t) {
        if (e[fl]) {
          let r = e[hl];
          r || xl(e, hl, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function wl(e, t) {
        const r = e[hl];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[hl] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var El, xl = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Pl = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Cl = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Sl = new RegExp(`(${Pl.source})(%|[a-z]+)`, "i"),
        Tl = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Ol = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Rl = e => {
          const [t, r] = Nl(e);
          if (!t || Sa()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && Ol.test(r) ? Rl(r) : r || e
        },
        Nl = e => {
          const t = Ol.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        jl = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        Il = e => {
          El || (El = Ta ? new RegExp(`(${Object.keys(Ta).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => ml(e).replace(Ol, Rl).replace(Cl, nl).replace(El, nl)),
            r = t.map(e => e.match(Pl).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => ol({
              ...e,
              output: t
            }));
          return e => {
            const r = !Sl.test(t[0]) && t.find(e => Sl.test(e))?.replace(Pl, "");
            let n = 0;
            return t[0].replace(Pl, () => `${o[n++](e)}${r||""}`).replace(Tl, jl)
          }
        },
        kl = "react-spring: ",
        Ll = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${kl}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Dl = Ll(console.warn),
        Al = Ll(console.warn);

      function Ml(e) {
        return ya.str(e) && ("#" == e[0] || /\d/.test(e) || !Sa() && Ol.test(e) || e in (Ta || {}))
      }
      var Bl = Sa() ? M.useEffect : M.useLayoutEffect;

      function Hl() {
        const e = (0, M.useState)()[1],
          t = (() => {
            const e = (0, M.useRef)(!1);
            return Bl(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var zl = e => (0, M.useEffect)(e, Vl),
        Vl = [];

      function Fl(e) {
        const t = (0, M.useRef)();
        return (0, M.useEffect)(() => {
          t.current = e
        }), t.current
      }
      var Ul = Symbol.for("Animated:node"),
        Gl = e => e && e[Ul],
        ql = (e, t) => {
          return r = e, n = Ul, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Kl = e => e && e[Ul] && e[Ul].getPayload(),
        Xl = class {
          constructor() {
            ql(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Wl = class extends Xl {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, ya.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Wl(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return ya.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, ya.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Zl = class extends Wl {
          constructor(e) {
            super(0), this._string = null, this._toString = ol({
              output: [e, e]
            })
          }
          static create(e) {
            return new Zl(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (ya.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = ol({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        $l = {
          dependencies: null
        },
        Yl = class extends Xl {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return _a(this.source, (r, n) => {
              var o;
              (o = r) && o[Ul] === o ? t[n] = r.getValue(e) : pl(r) ? t[n] = ml(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && ba(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return _a(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            $l.dependencies && pl(e) && $l.dependencies.add(e);
            const t = Kl(e);
            t && ba(t, e => this.add(e))
          }
        },
        Ql = class extends Yl {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Ql(e)
          }
          getValue() {
            return this.source.map(e => e.getValue())
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Jl)), !0)
          }
        };

      function Jl(e) {
        return (Ml(e) ? Zl : Wl).create(e)
      }

      function ec(e) {
        const t = Gl(e);
        return t ? t.constructor : ya.arr(e) ? Ql : Ml(e) ? Zl : Wl
      }
      var tc = (e, t) => {
          const r = !ya.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, M.forwardRef)((n, o) => {
            const i = (0, M.useRef)(null),
              s = r && (0, M.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (ya.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return $l.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Yl(e), $l.dependencies = null, [e, r]
              }(n, t),
              c = Hl(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && c()
              },
              d = new rc(u, l),
              f = (0, M.useRef)();
            Bl(() => (f.current = d, ba(l, e => _l(e, d)), () => {
              f.current && (ba(f.current.deps, e => wl(e, f.current)), Ys.cancel(f.current.update))
            })), (0, M.useEffect)(u, []), zl(() => () => {
              const e = f.current;
              ba(e.deps, t => wl(t, e))
            });
            const h = t.getComponentProps(a.getValue());
            return M.createElement(e, {
              ...h,
              ref: s
            })
          })
        },
        rc = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Ys.write(this.update)
          }
        },
        nc = Symbol.for("AnimatedComponent"),
        oc = e => ya.str(e) ? e : e && ya.str(e.displayName) ? e.displayName : ya.fun(e) && e.name || null;

      function ic(e, ...t) {
        return ya.fun(e) ? e(...t) : e
      }
      var sc = (e, t) => !0 === e || !!(t && e && (ya.fun(e) ? e(t) : wa(e).includes(t))),
        ac = (e, t) => ya.obj(e) ? t && e[t] : e,
        lc = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        cc = e => e,
        uc = (e, t = cc) => {
          let r = dc;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            ya.und(r) || (n[o] = r)
          }
          return n
        },
        dc = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        fc = {
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

      function hc(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (_a(e, (e, n) => {
              fc[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return _a(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function pc(e) {
        return e = ml(e), ya.arr(e) ? e.map(pc) : Ml(e) ? ma.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function mc(e) {
        return ya.fun(e) || ya.arr(e) && ya.obj(e[0])
      }
      var vc = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: dl.linear,
          clamp: !1
        },
        yc = class {
          constructor() {
            this.velocity = 0, Object.assign(this, vc)
          }
        };

      function gc(e, t) {
        if (ya.und(t.decay)) {
          const r = !ya.und(t.tension) || !ya.und(t.friction);
          !r && ya.und(t.frequency) && ya.und(t.damping) && ya.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var bc = [],
        _c = class {
          constructor() {
            this.changed = !1, this.values = bc, this.toValues = null, this.fromValues = bc, this.config = new yc, this.immediate = !1
          }
        };

      function wc(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, c, u = sc(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            ya.und(r.pause) || (o.paused = sc(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || sc(e, t)), l = ic(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - Ys.now()
          }

          function f() {
            l > 0 && !ma.skipAnimation ? (o.delayed = !0, c = Ys.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
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
      var Ec = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? Cc(e.get()) : t.every(e => e.noop) ? xc(e.get()) : Pc(e.get(), t.every(e => e.finished)),
        xc = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Pc = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        Cc = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Sc(e, t, r, n) {
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
          const c = uc(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && Cc(n) || o !== r.asyncId && Pc(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new Oc,
                s = new Rc;
              return (async () => {
                if (ma.skipAnimation) throw Tc(r), s.result = Pc(n, !1), d(s), s;
                h(i);
                const a = ya.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, _a(c, (e, t) => {
                  ya.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return h(i), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (ma.skipAnimation) return Tc(r), Pc(n, !1);
          try {
            let t;
            t = ya.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = Pc(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof Oc) m = e.result;
            else {
              if (!(e instanceof Rc)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? a : void 0, r.promise = i ? l : void 0)
          }
          return ya.fun(s) && Ys.batchedUpdates(() => {
            s(m, n, n.item)
          }), m
        })() : l
      }

      function Tc(e, t) {
        Ea(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Oc = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Rc = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Nc = e => e instanceof Ic,
        jc = 1,
        Ic = class extends gl {
          constructor() {
            super(...arguments), this.id = jc++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Gl(this);
            return e && e.getValue()
          }
          to(...e) {
            return ma.to(this, e)
          }
          interpolate(...e) {
            return Dl(`${kl}The "interpolate" function is deprecated in v9 (use "to" instead)`), ma.to(this, e)
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
            yl(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Da.sort(this), yl(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        kc = Symbol.for("SpringPhase"),
        Lc = e => (1 & e[kc]) > 0,
        Dc = e => (2 & e[kc]) > 0,
        Ac = e => (4 & e[kc]) > 0,
        Mc = (e, t) => t ? e[kc] |= 3 : e[kc] &= -3,
        Bc = (e, t) => t ? e[kc] |= 4 : e[kc] &= -5,
        Hc = class extends Ic {
          constructor(e, t) {
            if (super(), this.animation = new _c, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !ya.und(e) || !ya.und(t)) {
              const r = ya.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              ya.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Dc(this) || this._state.asyncTo) || Ac(this)
          }
          get goal() {
            return ml(this.animation.to)
          }
          get velocity() {
            const e = Gl(this);
            return e instanceof Wl ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return Lc(this)
          }
          get isAnimating() {
            return Dc(this)
          }
          get isPaused() {
            return Ac(this)
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
            } = n, s = Kl(n.to);
            !s && pl(n.to) && (o = wa(ml(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const c = a.constructor == Zl ? 1 : s ? s[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = ya.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (ya.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(a.lastPosition - d) <= f, s = o * n
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !ya.und(n),
                      h = r == c ? a.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(s) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (s = -s * n, d = c)), s += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * s) / i.mass * v, d += s * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, a.durationProgress = n), d = r + i.easing(n) * (c - r), s = (d - a.lastPosition) / e, u = 1 == n
                }
                a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              s && !s[l].done && (u = !1), u ? a.done = !0 : t = !1, a.setValue(d, i.round) && (r = !0)
            });
            const a = Gl(this),
              l = a.getValue();
            if (t) {
              const e = ml(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Ys.batchedUpdates(() => {
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
            if (Dc(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Ys.batchedUpdates(() => {
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
            return ya.und(e) ? (r = this.queue || [], this.queue = []) : r = [ya.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => Ec(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), Tc(this._state, e && this._lastCallId), Ys.batchedUpdates(() => this._stop(t, e)), this
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
            r = ya.obj(r) ? r[t] : r, (null == r || mc(r)) && (r = void 0), n = ya.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return Lc(this) || (e.reverse && ([r, n] = [n, r]), n = ml(n), ya.und(n) ? Gl(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, uc(e, (e, t) => /^on/.test(t) ? ac(e, r) : e)), Kc(this, e, "onProps"), Xc(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return wc(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  Ac(this) || (Bc(this, !0), Ca(i.pauseQueue), Xc(this, "onPause", Pc(this, zc(this, this.animation.to)), this))
                },
                resume: () => {
                  Ac(this) && (Bc(this, !1), Dc(this) && this._resume(), Ca(i.resumeQueue), Xc(this, "onResume", Pc(this, zc(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Vc(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(Cc(this));
            const n = !ya.und(e.to),
              o = !ya.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(Cc(this));
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
            !o || n || t.default && !ya.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !ga(d, c);
            f && (a.from = d), d = ml(d);
            const h = !ga(u, l);
            h && this._focus(u);
            const p = mc(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (gc(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), gc(e, t), Object.assign(e, t);
              for (const t in vc) null == e[t] && (e[t] = vc[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              ya.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, ic(t.config, i), t.config !== s.config ? ic(s.config, i) : void 0);
            let g = Gl(this);
            if (!g || ya.und(u)) return r(Pc(this, !0));
            const b = ya.und(t.reset) ? o && !t.default : !ya.und(d) && sc(t.reset, i),
              _ = b ? d : this.get(),
              w = pc(u),
              E = ya.num(w) || ya.arr(w) || Ml(w),
              x = !p && (!E || sc(s.immediate || t.immediate, i));
            if (h) {
              const e = ec(u);
              if (e !== g.constructor) {
                if (!x) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const P = g.constructor;
            let C = pl(u),
              S = !1;
            if (!C) {
              const e = b || !Lc(this) && f;
              (h || e) && (S = ga(pc(_), w), C = !S), (ga(a.immediate, x) || x) && ga(m.decay, v) && ga(m.velocity, y) || (C = !0)
            }
            if (S && Dc(this) && (a.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || pl(l)) && (a.values = g.getPayload(), a.toValues = pl(u) ? null : P == Zl ? [1] : wa(w)), a.immediate != x && (a.immediate = x, x || b || this._set(l)), C)) {
              const {
                onRest: e
              } = a;
              ba(qc, e => Kc(this, t, e));
              const n = Pc(this, zc(this, l));
              Ca(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && Ys.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? ic(s.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(Sc(t.to, t, this._state, this)) : C ? this._start() : Dc(this) && !h ? this._pendingCalls.add(r) : r(xc(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (vl(this) && this._detach(), t.to = e, vl(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            pl(t) && (_l(t, this), Nc(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            pl(e) && wl(e, this)
          }
          _set(e, t = !0) {
            const r = ml(e);
            if (!ya.und(r)) {
              const e = Gl(this);
              if (!e || !ga(r, e.getValue())) {
                const n = ec(r);
                e && e.constructor == n ? e.setValue(r) : ql(this, n.create(r)), e && Ys.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return Gl(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Xc(this, "onStart", Pc(this, zc(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), ic(this.animation.onChange, e, this)), ic(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Gl(this).reset(ml(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Dc(this) || (Mc(this, !0), Ac(this) || this._resume())
          }
          _resume() {
            ma.skipAnimation ? this.finish() : Da.start(this)
          }
          _stop(e, t) {
            if (Dc(this)) {
              Mc(this, !1);
              const r = this.animation;
              ba(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), yl(this, {
                type: "idle",
                parent: this
              });
              const n = t ? Cc(this.get()) : Pc(this.get(), zc(this, e ?? r.to));
              Ca(this._pendingCalls, n), r.changed && (r.changed = !1, Xc(this, "onRest", n, this))
            }
          }
        };

      function zc(e, t) {
        const r = pc(t);
        return ga(pc(e.get()), r)
      }

      function Vc(e, t = e.loop, r = e.to) {
        const n = ic(t);
        if (n) {
          const o = !0 !== n && hc(n),
            i = (o || e).reverse,
            s = !o || o.reset;
          return Fc({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || mc(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function Fc(e) {
        const {
          to: t,
          from: r
        } = e = hc(e), n = new Set;
        return ya.obj(t) && Gc(t, n), ya.obj(r) && Gc(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Uc(e) {
        const t = Fc(e);
        return ya.und(t.default) && (t.default = uc(t)), t
      }

      function Gc(e, t) {
        _a(e, (e, r) => null != e && t.add(r))
      }
      var qc = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Kc(e, t, r) {
        e.animation[r] = t[r] !== lc(t, r) ? ac(t[r], e.key) : void 0
      }

      function Xc(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Wc = ["onStart", "onChange", "onRest"],
        Zc = 1,
        $c = class {
          constructor(e, t) {
            this.id = Zc++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              ya.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Fc(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = wa(e).map(Fc) : this.queue = [], this._flush ? this._flush(this, t) : (nu(this, t), Yc(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              ba(wa(t), t => r[t].stop(!!e))
            } else Tc(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (ya.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              ba(wa(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (ya.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              ba(wa(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            _a(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Ea(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !n && this._started,
              s = o || i && r.size ? this.get() : null;
            o && t.size && Ea(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, Ea(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Ys.onFrame(this._onFrame)
          }
        };

      function Yc(e, t) {
        return Promise.all(t.map(t => Qc(e, t))).then(t => Ec(e, t))
      }
      async function Qc(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, c = ya.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = ya.arr(o) || ya.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : ba(Wc, r => {
          const n = t[r];
          if (ya.fun(n)) {
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
            }, c && (c[r] = t[r])
          }
        });
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Ca(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === lc(t, "cancel");
        (u || h && d.asyncId) && f.push(wc(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: va,
            resume: va,
            start(t, r) {
              h ? (Tc(d, e._lastAsyncId), r(Cc(e))) : (t.onRest = a, r(Sc(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = Ec(e, await Promise.all(f));
        if (s && p.finished && (!r || !p.noop)) {
          const r = Vc(t, s, o);
          if (r) return nu(e, [r]), Qc(e, r, !0)
        }
        return l && Ys.batchedUpdates(() => l(p, e, e.item)), p
      }

      function Jc(e, t) {
        const r = {
          ...e.springs
        };
        return t && ba(wa(t), e => {
          ya.und(e.keys) && (e = Fc(e)), ya.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), ru(r, e, e => tu(e))
        }), eu(e, r), r
      }

      function eu(e, t) {
        _a(t, (t, r) => {
          e.springs[r] || (e.springs[r] = t, _l(t, e))
        })
      }

      function tu(e, t) {
        const r = new Hc;
        return r.key = e, t && _l(r, t), r
      }

      function ru(e, t, r) {
        t.keys && ba(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function nu(e, t) {
        ba(t, t => {
          ru(e.springs, t, t => tu(t, e))
        })
      }
      var ou, iu, su = ({
          children: e,
          ...t
        }) => {
          const r = (0, M.useContext)(au),
            n = t.pause || !!r.pause,
            o = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, M.useState)(() => ({
              inputs: t,
              result: e()
            })), n = (0, M.useRef)(), o = n.current;
            let i = o;
            if (i) {
              const r = Boolean(t && i.inputs && function(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                  if (e[r] !== t[r]) return !1;
                return !0
              }(t, i.inputs));
              r || (i = {
                inputs: t,
                result: e()
              })
            } else i = r;
            return (0, M.useEffect)(() => {
              n.current = i, o == r && (r.inputs = r.result = void 0)
            }, [i]), i.result
          }(() => ({
            pause: n,
            immediate: o
          }), [n, o]);
          const {
            Provider: i
          } = au;
          return M.createElement(i, {
            value: t
          }, e)
        },
        au = (ou = su, iu = {}, Object.assign(ou, M.createContext(iu)), ou.Provider._context = ou, ou.Consumer._context = ou, ou);
      su.Provider = au.Provider, su.Consumer = au.Consumer;
      var lu = () => {
        const e = [],
          t = function(t) {
            Al(`${kl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return ba(e, (e, o) => {
              if (ya.und(t)) n.push(e.start());
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
          return ba(e, e => e.pause(...arguments)), this
        }, t.resume = function() {
          return ba(e, e => e.resume(...arguments)), this
        }, t.set = function(t) {
          ba(e, (e, r) => {
            const n = ya.fun(t) ? t(r, e) : t;
            n && e.set(n)
          })
        }, t.start = function(t) {
          const r = [];
          return ba(e, (e, n) => {
            if (ya.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          }), r
        }, t.stop = function() {
          return ba(e, e => e.stop(...arguments)), this
        }, t.update = function(t) {
          return ba(e, (e, r) => e.update(this._getProps(t, e, r))), this
        };
        const r = function(e, t, r) {
          return ya.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function cu(e, t) {
        const r = ya.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = ya.fun(t) && t;
            n && !r && (r = []);
            const o = (0, M.useMemo)(() => n || 3 == arguments.length ? lu() : void 0, []),
              i = (0, M.useRef)(0),
              s = Hl(),
              a = (0, M.useMemo)(() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Jc(e, t);
                  return i.current > 0 && !a.queue.length && !Object.keys(r).some(t => !e.springs[t]) ? Yc(e, t) : new Promise(n => {
                    eu(e, r), a.queue.push(() => {
                      n(Yc(e, t))
                    }), s()
                  })
                }
              }), []),
              l = (0, M.useRef)([...a.ctrls]),
              c = [],
              u = Fl(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new $c(null, a.flush)),
                  r = n ? n(o, e) : t[o];
                r && (c[o] = Uc(r))
              }
            }(0, M.useMemo)(() => {
              ba(l.current.slice(e, u), e => {
                (function(e, t) {
                  e.ref?.delete(e), t?.delete(e)
                })(e, o), e.stop(!0)
              }), l.current.length = e, d(u, e)
            }, [e]), (0, M.useMemo)(() => {
              d(0, Math.min(u, e))
            }, r);
            const f = l.current.map((e, t) => Jc(e, c[t])),
              h = (0, M.useContext)(su),
              p = Fl(h),
              m = h !== p && function(e) {
                for (const t in e) return !0;
                return !1
              }(h);
            Bl(() => {
              i.current++, a.ctrls = l.current;
              const {
                queue: e
              } = a;
              e.length && (a.queue = [], ba(e, e => e())), ba(l.current, (e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const r = c[t];
                r && (function(e, t) {
                  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
                }(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              })
            }), zl(() => () => {
              ba(a.ctrls, e => e.stop(!0))
            });
            const v = f.map(e => ({
              ...e
            }));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var uu = class extends Ic {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = ol(...t);
          const r = this._get(),
            n = ec(r);
          ql(this, n.create(r))
        }
        advance(e) {
          const t = this._get();
          ga(t, this.get()) || (Gl(this).setValue(t), this._onChange(t, this.idle)), !this.idle && fu(this._active) && hu(this)
        }
        _get() {
          const e = ya.arr(this.source) ? this.source.map(ml) : wa(ml(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !fu(this._active) && (this.idle = !1, ba(Kl(this), e => {
            e.done = !1
          }), ma.skipAnimation ? (Ys.batchedUpdates(() => this.advance()), hu(this)) : Da.start(this))
        }
        _attach() {
          let e = 1;
          ba(wa(this.source), t => {
            pl(t) && _l(t, this), Nc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          ba(wa(this.source), e => {
            pl(e) && wl(e, this)
          }), this._active.clear(), hu(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = wa(this.source).reduce((e, t) => Math.max(e, (Nc(t) ? t.priority : 0) + 1), 0))
        }
      };

      function du(e) {
        return !1 !== e.idle
      }

      function fu(e) {
        return !e.size || Array.from(e).every(du)
      }

      function hu(e) {
        e.idle || (e.idle = !0, ba(Kl(e), e => {
          e.done = !0
        }), yl(e, {
          type: "idle",
          parent: e
        }))
      }
      ma.assign({
        createStringInterpolator: Il,
        to: (e, t) => new uu(e, t)
      }), Da.advance;
      var pu = r(18429),
        mu = /^--/;

      function vu(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || mu.test(e) || gu.hasOwnProperty(e) && gu[e] ? ("" + t).trim() : t + "px"
      }
      var yu = {},
        gu = {
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
        bu = ["Webkit", "Ms", "Moz", "O"];
      gu = Object.keys(gu).reduce((e, t) => (bu.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), gu);
      var _u = /^(matrix|translate|scale|rotate|skew)/,
        wu = /^(translate)/,
        Eu = /^(rotate|skew)/,
        xu = (e, t) => ya.num(e) && 0 !== e ? e + t : e,
        Pu = (e, t) => ya.arr(e) ? e.every(e => Pu(e, t)) : ya.num(e) ? e === t : parseFloat(e) === t,
        Cu = class extends Yl {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>xu(e,"px")).join(",")})`, Pu(e, 0)])), _a(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (_u.test(t)) {
                if (delete n[t], ya.und(e)) return;
                const r = wu.test(t) ? "px" : Eu.test(t) ? "deg" : "";
                o.push(wa(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${xu(o,r)})`, Pu(o, 0)] : e => [`${t}(${e.map(e=>xu(e,r)).join(",")})`, Pu(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new Su(o, i)), super(n)
          }
        },
        Su = class extends gl {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return ba(this.inputs, (r, n) => {
              const o = ml(r[0]),
                [i, s] = this.transforms[n](ya.arr(o) ? o : r.map(ml));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && ba(this.inputs, e => ba(e, e => pl(e) && _l(e, this)))
          }
          observerRemoved(e) {
            0 == e && ba(this.inputs, e => ba(e, e => pl(e) && wl(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), yl(this, e)
          }
        };
      ma.assign({
        batchedUpdates: pu.unstable_batchedUpdates,
        createStringInterpolator: Il,
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
      var Tu, Ou = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Yl(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = oc(e) || "Anonymous";
              return (e = ya.str(e) ? i[e] || (i[e] = tc(e, o)) : e[nc] || (e[nc] = tc(e, o))).displayName = `Animated(${t})`, e
            };
          return _a(e, (t, r) => {
            ya.arr(e) && (r = oc(t)), i[r] = i(t)
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
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : yu[t] || (yu[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = vu(t, o[t]);
                mu.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new Cu(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        Ru = Ou.animated,
        Nu = r(94118),
        ju = r(95362),
        Iu = r(85426),
        ku = r(78004),
        Lu = r(76286),
        Du = r(94040),
        Au = "dismissableLayer.update",
        Mu = M.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Bu = M.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, c = M.useContext(Mu), [u, d] = M.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, h] = M.useState({}), p = (0, ju.s)(t, e => d(e)), m = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = u ? m.indexOf(u) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= y, E = function(e, t = globalThis?.document) {
            const r = (0, Lu.c)(e),
              n = M.useRef(!1),
              o = M.useRef(() => {});
            return M.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Vu("dismissableLayer.pointerDownOutside", r, i, {
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
              r = [...c.branches].some(e => e.contains(t));
            w && !r && (o?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f), x = function(e, t = globalThis?.document) {
            const r = (0, Lu.c)(e),
              n = M.useRef(!1);
            return M.useEffect(() => {
              const e = e => {
                e.target && !n.current && Vu("dismissableLayer.focusOutside", r, {
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
            [...c.branches].some(e => e.contains(t)) || (i?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f);
          return (0, Du.U)(e => {
            g === c.layers.size - 1 && (n?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), M.useEffect(() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Tu = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), zu(), () => {
              r && 1 === c.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = Tu)
            }
          }, [u, f, r, c]), M.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), zu())
          }, [u, c]), M.useEffect(() => {
            const e = () => h({});
            return document.addEventListener(Au, e), () => document.removeEventListener(Au, e)
          }, []), (0, _.jsx)(ku.sG.div, {
            ...l,
            ref: p,
            style: {
              pointerEvents: b ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Nu.mK)(e.onFocusCapture, x.onFocusCapture),
            onBlurCapture: (0, Nu.mK)(e.onBlurCapture, x.onBlurCapture),
            onPointerDownCapture: (0, Nu.mK)(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        });
      Bu.displayName = "DismissableLayer";
      var Hu = M.forwardRef((e, t) => {
        const r = M.useContext(Mu),
          n = M.useRef(null),
          o = (0, ju.s)(t, n);
        return M.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, _.jsx)(ku.sG.div, {
          ...e,
          ref: o
        })
      });

      function zu() {
        const e = new CustomEvent(Au);
        document.dispatchEvent(e)
      }

      function Vu(e, t, r, {
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
        }), n ? (0, ku.hO)(o, i) : o.dispatchEvent(i)
      }
      Hu.displayName = "DismissableLayerBranch";
      var Fu = Bu,
        Uu = Hu,
        Gu = r(86126),
        qu = r(64728),
        Ku = "undefined" != typeof document ? M.useLayoutEffect : function() {};

      function Xu(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 !== n--;)
              if (!Xu(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || Xu(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Wu(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Zu(e, t) {
        const r = Wu(e);
        return Math.round(t * r) / r
      }

      function $u(e) {
        const t = M.useRef(e);
        return Ku(() => {
          t.current = e
        }), t
      }
      const Yu = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: r,
              padding: n
            } = "function" == typeof e ? e(t) : e;
            return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? (0, qu.UE)({
              element: r.current,
              padding: n
            }).fn(t) : {} : r ? (0, qu.UE)({
              element: r,
              padding: n
            }).fn(t) : {};
            var o
          }
        }),
        Qu = (e, t) => ({
          ...(0, qu.cY)(e),
          options: [e, t]
        }),
        Ju = (e, t) => ({
          ...(0, qu.BN)(e),
          options: [e, t]
        }),
        ed = (e, t) => ({
          ...(0, qu.ER)(e),
          options: [e, t]
        }),
        td = (e, t) => ({
          ...(0, qu.UU)(e),
          options: [e, t]
        }),
        rd = (e, t) => ({
          ...(0, qu.Ej)(e),
          options: [e, t]
        }),
        nd = (e, t) => ({
          ...(0, qu.jD)(e),
          options: [e, t]
        }),
        od = (e, t) => ({
          ...Yu(e),
          options: [e, t]
        });
      var id = M.forwardRef((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, _.jsx)(ku.sG.svg, {
          ...i,
          ref: t,
          width: n,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? r : (0, _.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      });
      id.displayName = "Arrow";
      var sd = id,
        ad = r(63155);

      function ld(e) {
        const [t, r] = M.useState(void 0);
        return (0, ad.N)(() => {
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
      var cd = "Popper",
        [ud, dd] = (0, Iu.A)(cd),
        [fd, hd] = ud(cd),
        pd = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = M.useState(null);
          return (0, _.jsx)(fd, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      pd.displayName = cd;
      var md = "PopperAnchor",
        vd = M.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, i = hd(md, r), s = M.useRef(null), a = (0, ju.s)(t, s), l = M.useRef(null);
          return M.useEffect(() => {
            const e = l.current;
            l.current = n?.current || s.current, e !== l.current && i.onAnchorChange(l.current)
          }), n ? null : (0, _.jsx)(ku.sG.div, {
            ...o,
            ref: a
          })
        });
      vd.displayName = md;
      var yd = "PopperContent",
        [gd, bd] = ud(yd),
        _d = M.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: c = [],
            collisionPadding: u = 0,
            sticky: d = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: h = "optimized",
            onPlaced: p,
            ...m
          } = e, v = hd(yd, r), [y, g] = M.useState(null), b = (0, ju.s)(t, e => g(e)), [w, E] = M.useState(null), x = ld(w), P = x?.width ?? 0, C = x?.height ?? 0, S = n + ("center" !== i ? "-" + i : ""), T = "number" == typeof u ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
          }, O = Array.isArray(c) ? c : [c], R = O.length > 0, N = {
            padding: T,
            boundary: O.filter(Pd),
            altBoundary: R
          }, {
            refs: j,
            floatingStyles: I,
            placement: k,
            isPositioned: L,
            middlewareData: D
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
              open: c
            } = e, [u, d] = M.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, h] = M.useState(n);
            Xu(f, n) || h(n);
            const [p, m] = M.useState(null), [v, y] = M.useState(null), g = M.useCallback(e => {
              e !== E.current && (E.current = e, m(e))
            }, []), b = M.useCallback(e => {
              e !== x.current && (x.current = e, y(e))
            }, []), _ = i || p, w = s || v, E = M.useRef(null), x = M.useRef(null), P = M.useRef(u), C = null != l, S = $u(l), T = $u(o), O = $u(c), R = M.useCallback(() => {
              if (!E.current || !x.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              T.current && (e.platform = T.current), (0, qu.rD)(E.current, x.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== O.current
                };
                N.current && !Xu(P.current, t) && (P.current = t, pu.flushSync(() => {
                  d(t)
                }))
              })
            }, [f, t, r, T, O]);
            Ku(() => {
              !1 === c && P.current.isPositioned && (P.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [c]);
            const N = M.useRef(!1);
            Ku(() => (N.current = !0, () => {
              N.current = !1
            }), []), Ku(() => {
              if (_ && (E.current = _), w && (x.current = w), _ && w) {
                if (S.current) return S.current(_, w, R);
                R()
              }
            }, [_, w, R, S, C]);
            const j = M.useMemo(() => ({
                reference: E,
                floating: x,
                setReference: g,
                setFloating: b
              }), [g, b]),
              I = M.useMemo(() => ({
                reference: _,
                floating: w
              }), [_, w]),
              k = M.useMemo(() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!I.floating) return e;
                const t = Zu(I.floating, u.x),
                  n = Zu(I.floating, u.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...Wu(I.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }, [r, a, I.floating, u.x, u.y]);
            return M.useMemo(() => ({
              ...u,
              update: R,
              refs: j,
              elements: I,
              floatingStyles: k
            }), [u, R, j, I, k])
          }({
            strategy: "fixed",
            placement: S,
            whileElementsMounted: (...e) => (0, qu.ll)(...e, {
              animationFrame: "always" === h
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [Qu({
              mainAxis: o + C,
              alignmentAxis: s
            }), l && Ju({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === d ? ed() : void 0,
              ...N
            }), l && td({
              ...N
            }), rd({
              ...N,
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
            }), w && od({
              element: w,
              padding: a
            }), Cd({
              arrowWidth: P,
              arrowHeight: C
            }), f && nd({
              strategy: "referenceHidden",
              ...N
            })]
          }), [A, B] = Sd(k), H = (0, Lu.c)(p);
          (0, ad.N)(() => {
            L && H?.()
          }, [L, H]);
          const z = D.arrow?.x,
            V = D.arrow?.y,
            F = 0 !== D.arrow?.centerOffset,
            [U, G] = M.useState();
          return (0, ad.N)(() => {
            y && G(window.getComputedStyle(y).zIndex)
          }, [y]), (0, _.jsx)("div", {
            ref: j.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: L ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [D.transformOrigin?.x, D.transformOrigin?.y].join(" "),
              ...D.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, _.jsx)(gd, {
              scope: r,
              placedSide: A,
              onArrowChange: E,
              arrowX: z,
              arrowY: V,
              shouldHideArrow: F,
              children: (0, _.jsx)(ku.sG.div, {
                "data-side": A,
                "data-align": B,
                ...m,
                ref: b,
                style: {
                  ...m.style,
                  animation: L ? void 0 : "none"
                }
              })
            })
          })
        });
      _d.displayName = yd;
      var wd = "PopperArrow",
        Ed = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        xd = M.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = bd(wd, r), i = Ed[o.placedSide];
          return (0, _.jsx)("span", {
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
            children: (0, _.jsx)(sd, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function Pd(e) {
        return null !== e
      }
      xd.displayName = wd;
      var Cd = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, c] = Sd(r), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], d = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let h = "",
            p = "";
          return "bottom" === l ? (h = i ? u : `${d}px`, p = -a + "px") : "top" === l ? (h = i ? u : `${d}px`, p = `${n.floating.height+a}px`) : "right" === l ? (h = -a + "px", p = i ? u : `${f}px`) : "left" === l && (h = `${n.floating.width+a}px`, p = i ? u : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function Sd(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Td = pd,
        Od = vd,
        Rd = _d,
        Nd = xd,
        jd = M.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, i] = M.useState(!1);
          (0, ad.N)(() => i(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? pu.createPortal((0, _.jsx)(ku.sG.div, {
            ...n,
            ref: t
          }), s) : null
        });
      jd.displayName = "Portal";
      var Id = r(53146),
        kd = r(39447),
        Ld = r(53054),
        Dd = r(69055),
        [Ad, Md] = (0, Iu.A)("Tooltip", [dd]),
        Bd = dd(),
        Hd = "TooltipProvider",
        zd = 700,
        Vd = "tooltip.open",
        [Fd, Ud] = Ad(Hd),
        Gd = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = zd,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, s = M.useRef(!0), a = M.useRef(!1), l = M.useRef(0);
          return M.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, _.jsx)(Fd, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: M.useCallback(() => {
              window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: M.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, n)
            }, [n]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: M.useCallback(e => {
              a.current = e
            }, []),
            disableHoverableContent: o,
            children: i
          })
        };
      Gd.displayName = Hd;
      var qd = "Tooltip",
        [Kd, Xd] = Ad(qd),
        Wd = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
          } = e, l = Ud(qd, e.__scopeTooltip), c = Bd(t), [u, d] = M.useState(null), f = (0, Gu.B)(), h = M.useRef(0), p = s ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = M.useRef(!1), [y, g] = (0, Ld.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Vd))) : l.onClose(), i?.(e)
            },
            caller: qd
          }), b = M.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), w = M.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, v.current = !1, g(!0)
          }, [g]), E = M.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, g(!1)
          }, [g]), x = M.useCallback(() => {
            window.clearTimeout(h.current), h.current = window.setTimeout(() => {
              v.current = !0, g(!0), h.current = 0
            }, m)
          }, [m, g]);
          return M.useEffect(() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }, []), (0, _.jsx)(Td, {
            ...c,
            children: (0, _.jsx)(Kd, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: M.useCallback(() => {
                l.isOpenDelayedRef.current ? x() : w()
              }, [l.isOpenDelayedRef, x, w]),
              onTriggerLeave: M.useCallback(() => {
                p ? E() : (window.clearTimeout(h.current), h.current = 0)
              }, [E, p]),
              onOpen: w,
              onClose: E,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      Wd.displayName = qd;
      var Zd = "TooltipTrigger",
        $d = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Xd(Zd, r), i = Ud(Zd, r), s = Bd(r), a = M.useRef(null), l = (0, ju.s)(t, a, o.onTriggerChange), c = M.useRef(!1), u = M.useRef(!1), d = M.useCallback(() => c.current = !1, []);
          return M.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, _.jsx)(Od, {
            asChild: !0,
            ...s,
            children: (0, _.jsx)(ku.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, Nu.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (u.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              }),
              onPointerLeave: (0, Nu.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), u.current = !1
              }),
              onPointerDown: (0, Nu.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: (0, Nu.mK)(e.onFocus, () => {
                c.current || o.onOpen()
              }),
              onBlur: (0, Nu.mK)(e.onBlur, o.onClose),
              onClick: (0, Nu.mK)(e.onClick, o.onClose)
            })
          })
        });
      $d.displayName = Zd;
      var Yd = "TooltipPortal",
        [Qd, Jd] = Ad(Yd, {
          forceMount: void 0
        }),
        ef = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Xd(Yd, t);
          return (0, _.jsx)(Qd, {
            scope: t,
            forceMount: r,
            children: (0, _.jsx)(Id.C, {
              present: r || i.open,
              children: (0, _.jsx)(jd, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      ef.displayName = Yd;
      var tf = "TooltipContent",
        rf = M.forwardRef((e, t) => {
          const r = Jd(tf, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = Xd(tf, e.__scopeTooltip);
          return (0, _.jsx)(Id.C, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, _.jsx)(lf, {
              side: o,
              ...i,
              ref: t
            }) : (0, _.jsx)(nf, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        nf = M.forwardRef((e, t) => {
          const r = Xd(tf, e.__scopeTooltip),
            n = Ud(tf, e.__scopeTooltip),
            o = M.useRef(null),
            i = (0, ju.s)(t, o),
            [s, a] = M.useState(null),
            {
              trigger: l,
              onClose: c
            } = r,
            u = o.current,
            {
              onPointerInTransitChange: d
            } = n,
            f = M.useCallback(() => {
              a(null), d(!1)
            }, [d]),
            h = M.useCallback((e, t) => {
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
          return M.useEffect(() => () => f(), [f]), M.useEffect(() => {
            if (l && u) {
              const e = e => h(e, u),
                t = e => h(e, l);
              return l.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }, [l, u, h, f]), M.useEffect(() => {
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
                        c = s.y,
                        u = a.x,
                        d = a.y;
                      c > n != d > n && r < (u - l) * (n - c) / (d - c) + l && (o = !o)
                    }
                    return o
                  }(r, s);
                n ? f() : o && (f(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, u, s, c, f]), (0, _.jsx)(lf, {
            ...e,
            ref: i
          })
        }),
        [of, sf] = Ad(qd, {
          isInside: !1
        }),
        af = (0, kd.Dc)("TooltipContent"),
        lf = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
          } = e, l = Xd(tf, r), c = Bd(r), {
            onClose: u
          } = l;
          return M.useEffect(() => (document.addEventListener(Vd, u), () => document.removeEventListener(Vd, u)), [u]), M.useEffect(() => {
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
          }, [l.trigger, u]), (0, _.jsx)(Bu, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, _.jsxs)(Rd, {
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
              children: [(0, _.jsx)(af, {
                children: n
              }), (0, _.jsx)(of, {
                scope: r,
                isInside: !0,
                children: (0, _.jsx)(Dd.bL, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      rf.displayName = tf;
      var cf = "TooltipArrow",
        uf = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Bd(r);
          return sf(cf, r).isInside ? null : (0, _.jsx)(Nd, {
            ...o,
            ...n,
            ref: t
          })
        });
      uf.displayName = cf;
      var df = Gd,
        ff = Wd,
        hf = $d,
        pf = ef,
        mf = rf,
        vf = uf;
      const yf = (0, M.createContext)(null);

      function gf() {
        const e = (0, M.useContext)(yf);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const bf = ({
          children: e,
          delayDuration: t,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [i = !1, s] = (0, G.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, _.jsx)(df, {
            delayDuration: t,
            children: (0, _.jsx)(yf.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, _.jsx)(ff, {
                open: i,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        _f = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, _.jsx)(hf, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        wf = (0, M.forwardRef)(({
          testId: e,
          children: t,
          collisionBoundary: r,
          collisionPadding: n,
          onEscapeKeyDown: o,
          onPointerDownOutside: i,
          side: s = "top",
          sideOffset: a = 8,
          align: l = "center",
          alignOffset: c = 0,
          avoidCollisions: u = !0,
          sticky: d = "partial",
          ...f
        }, h) => {
          const {
            isOpen: p
          } = gf(), m = (0, G.ZC)(p), v = cu({
            opacity: p ? 1 : 0,
            immediate: p && !m
          }), y = (0, V.v6)({
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, f);
          return (0, _.jsx)(mf, {
            forceMount: !0,
            "data-testid": e,
            side: s,
            align: l,
            sticky: d,
            sideOffset: a,
            alignOffset: c,
            avoidCollisions: u,
            collisionPadding: n,
            collisionBoundary: r,
            onEscapeKeyDown: o,
            onPointerDownOutside: i,
            asChild: !0,
            children: (0, _.jsx)(Ru.div, {
              style: v,
              ...y,
              ref: h,
              children: t
            })
          })
        }),
        Ef = (0, M.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, V.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, _.jsx)(vf, {
            ...r,
            ref: t
          })
        }),
        xf = pf;

      function Pf(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var Cf = r(77768);

      function Sf(e) {
        const t = M.useRef({
          value: e,
          previous: e
        });
        return M.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
      var Tf = r(20027),
        Of = ["PageUp", "PageDown"],
        Rf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Nf = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        jf = "Slider",
        [If, kf, Lf] = (0, Tf.N)(jf),
        [Df, Af] = (0, Iu.A)(jf, [Lf]),
        [Mf, Bf] = Df(jf),
        Hf = M.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: i = 1,
            orientation: s = "horizontal",
            disabled: a = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: c = [n],
            value: u,
            onValueChange: d = () => {},
            onValueCommit: f = () => {},
            inverted: h = !1,
            form: p,
            ...m
          } = e, v = M.useRef(new Set), y = M.useRef(0), g = "horizontal" === s ? Ff : Uf, [b = [], w] = (0, Ld.i)({
            prop: u,
            defaultProp: c,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), E = M.useRef(b);

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
              c = Pf(a, [n, o]);
            w((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort((e, t) => e - t)
              }(e, c, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map((t, r) => e[r + 1] - t)
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, l * i)) {
                y.current = n.indexOf(c);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, _.jsx)(Mf, {
            scope: e.__scopeSlider,
            name: r,
            disabled: a,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: b,
            orientation: s,
            form: p,
            children: (0, _.jsx)(If.Provider, {
              scope: e.__scopeSlider,
              children: (0, _.jsx)(If.Slot, {
                scope: e.__scopeSlider,
                children: (0, _.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, Nu.mK)(m.onPointerDown, () => {
                    a || (E.current = b)
                  }),
                  min: n,
                  max: o,
                  inverted: h,
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
                    const e = E.current[y.current];
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
                      const r = Of.includes(e.key) || e.shiftKey && Rf.includes(e.key) ? 10 : 1,
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
      Hf.displayName = jf;
      var [zf, Vf] = Df(jf, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Ff = M.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: i,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...u
        } = e, [d, f] = M.useState(null), h = (0, ju.s)(t, e => f(e)), p = M.useRef(void 0), m = (0, Cf.jH)(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = eh([0, t.width], y ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, _.jsx)(zf, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, _.jsx)(Gf, {
            dir: m,
            "data-orientation": "horizontal",
            ...u,
            ref: h,
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
              p.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = Nf[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Uf = M.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...c
        } = e, u = M.useRef(null), d = (0, ju.s)(t, u), f = M.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = eh([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, _.jsx)(zf, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, _.jsx)(Gf, {
            "data-orientation": "vertical",
            ...c,
            ref: d,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = p(e.clientY);
              i?.(t)
            },
            onSlideMove: e => {
              const t = p(e.clientY);
              s?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, a?.()
            },
            onStepKeyDown: e => {
              const t = Nf[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Gf = M.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...c
        } = e, u = Bf(jf, r);
        return (0, _.jsx)(ku.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, Nu.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : Of.concat(Rf).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, Nu.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, Nu.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, Nu.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), qf = "SliderTrack", Kf = M.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Bf(qf, r);
        return (0, _.jsx)(ku.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Kf.displayName = qf;
      var Xf = "SliderRange",
        Wf = M.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Bf(Xf, r), i = Vf(Xf, r), s = M.useRef(null), a = (0, ju.s)(t, s), l = o.values.length, c = o.values.map(e => Jf(e, o.min, o.max)), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, _.jsx)(ku.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: a,
            style: {
              ...e.style,
              [i.startEdge]: u + "%",
              [i.endEdge]: d + "%"
            }
          })
        });
      Wf.displayName = Xf;
      var Zf = "SliderThumb",
        $f = M.forwardRef((e, t) => {
          const r = kf(e.__scopeSlider),
            [n, o] = M.useState(null),
            i = (0, ju.s)(t, e => o(e)),
            s = M.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, _.jsx)(Yf, {
            ...e,
            ref: i,
            index: s
          })
        }),
        Yf = M.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, s = Bf(Zf, r), a = Vf(Zf, r), [l, c] = M.useState(null), u = (0, ju.s)(t, e => c(e)), d = !l || s.form || !!l.closest("form"), f = ld(l), h = s.values[n], p = void 0 === h ? 0 : Jf(h, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), v = f?.[a.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - eh([0, 50], [0, n])(t) * r) * r
          }(v, p, a.direction) : 0;
          return M.useEffect(() => {
            if (l) return s.thumbs.add(l), () => {
              s.thumbs.delete(l)
            }
          }, [l, s.thumbs]), (0, _.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${p}% + ${y}px)`
            },
            children: [(0, _.jsx)(If.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, _.jsx)(ku.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": s.min,
                "aria-valuenow": h,
                "aria-valuemax": s.max,
                "aria-orientation": s.orientation,
                "data-orientation": s.orientation,
                "data-disabled": s.disabled ? "" : void 0,
                tabIndex: s.disabled ? void 0 : 0,
                ...i,
                ref: u,
                style: void 0 === h ? {
                  display: "none"
                } : e.style,
                onFocus: (0, Nu.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), d && (0, _.jsx)(Qf, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: h
            }, n)]
          })
        });
      $f.displayName = Zf;
      var Qf = M.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = M.useRef(null),
          i = (0, ju.s)(o, n),
          s = Sf(t);
        return M.useEffect(() => {
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
        }, [s, t]), (0, _.jsx)(ku.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      });

      function Jf(e, t, r) {
        return Pf(100 / (r - t) * (e - t), [0, 100])
      }

      function eh(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Qf.displayName = "RadioBubbleInput";
      var th = Hf,
        rh = Kf,
        nh = Wf,
        oh = $f,
        ih = r(48141);
      const sh = (0, M.createContext)({
          triggerRef: (0, M.createRef)(),
          triggerBorderRef: (0, M.createRef)(),
          thumbnailRef: (0, M.createRef)(),
          openIconRef: (0, M.createRef)(),
          overlayRef: (0, M.createRef)(),
          contentRef: (0, M.createRef)(),
          containerRef: (0, M.createRef)(),
          imageRef: (0, M.createRef)(),
          placeholderRef: (0, M.createRef)(),
          zoomPanRef: (0, M.createRef)(),
          captionRef: (0, M.createRef)(),
          controlsRef: (0, M.createRef)(),
          closeRef: (0, M.createRef)(),
          zoomRef: (0, M.createRef)(),
          zoomInRef: (0, M.createRef)(),
          zoomSliderRef: (0, M.createRef)(),
          zoomOutRef: (0, M.createRef)(),
          resetRef: (0, M.createRef)(),
          downloadRef: (0, M.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        ah = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: i = 300,
          zoomLevelStep: s = 100,
          clickAction: a = "close",
          doubleTapAction: l,
          tapAction: c,
          hideTrigger: u = !0,
          ...d
        }) => {
          const f = (() => {
              const {
                locale: e
              } = J();
              return e
            })(),
            h = (0, G.rl)(),
            p = (0, M.useRef)(null),
            m = (0, M.useRef)(null),
            v = (0, M.useRef)(null),
            y = (0, M.useRef)(null),
            g = (0, M.useRef)(null),
            b = (0, M.useRef)(null),
            w = (0, M.useRef)(null),
            E = (0, M.useRef)(null),
            x = (0, M.useRef)(null),
            P = (0, M.useRef)(null),
            C = (0, M.useRef)(null),
            S = (0, M.useRef)(null),
            T = (0, M.useRef)(null),
            O = (0, M.useRef)(null),
            R = (0, M.useRef)(null),
            N = (0, M.useRef)(null),
            j = (0, M.useRef)(null),
            I = (0, M.useRef)(null),
            k = (0, M.useRef)(null),
            [L = !1, D] = (0, G.ic)({
              prop: t || n,
              onChange: r
            }),
            A = (0, M.useRef)(null);
          return A.current || (A.current = new As({
            width: 0,
            height: 0,
            zoomLevelOptions: {
              max: i,
              min: o,
              step: s
            },
            actionOptions: {
              click: a,
              tap: c || h ? "toggle-controls" : "close",
              doubleTap: l || h ? "zoom" : "none"
            }
          })), (0, _.jsx)(Ps, {
            messages: Cs,
            locale: f,
            children: (0, _.jsx)(sh.Provider, {
              value: {
                triggerRef: p,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: E,
                imageRef: x,
                placeholderRef: P,
                captionRef: C,
                controlsRef: S,
                closeRef: T,
                zoomRef: O,
                zoomInRef: R,
                zoomSliderRef: N,
                zoomOutRef: j,
                resetRef: I,
                downloadRef: k,
                open: L,
                setOpen: D,
                altText: e,
                hideTrigger: u,
                slide: A.current
              },
              children: (0, _.jsx)(ch, {
                ...d
              })
            })
          })
        },
        lh = (0, M.createContext)({
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
        ch = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, M.useContext)(sh), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, _t.useGSAP)(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: i,
              triggerRef: s,
              triggerBorderRef: a,
              thumbnailRef: l,
              containerRef: c,
              zoomPanRef: u,
              placeholderRef: d,
              imageRef: f
            } = (0, M.useContext)(sh), h = (0, M.useRef)(null);
            h.current || (h.current = bt.gsap.timeline({
              defaults: on
            }));
            const p = (0, M.useCallback)(e => {
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), bt.gsap.set([d.current, f.current], {
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
                }), bt.gsap.set([f.current], {
                  visibility: "hidden"
                }), await t.opener.loadPlaceholder(d.current), h.current.clear(), d.current && (h.current.to([d.current, f.current], {
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
                }), h.current.to([u.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), h.current.to([c.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), n && h.current.to([s.current, a.current], {
                  opacity: 0,
                  duration: 0
                }), h.current.to([d.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  duration: 0
                }), h.current.fromTo([c.current], {
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
                }, 0), h.current.fromTo([d.current, f.current], {
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
                }, 0), h.current.fromTo([u.current], {
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
                }, 0), h.current.fromTo([o.current], {
                  opacity: 0
                }, {
                  opacity: () => t.getOverlayOpacity(),
                  data: {
                    invalidate: !0
                  }
                }, 0), h.current.fromTo([i.current], {
                  opacity: 0,
                  [an]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [an]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (h.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Or(f.current), t.closing || (bt.gsap.set([f.current], {
                  visibility: "visible",
                  ...sn
                }), bt.gsap.set([d.current], {
                  visibility: "hidden",
                  ...sn
                }))))
              }),
              v = e(async () => {
                t.close(), h.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await h.current.reverse()
              }),
              y = (0, M.useCallback)(async e => {
                e || (window.addEventListener("click", p), await v(), window.removeEventListener("click", p)), r(e)
              }, [r]),
              g = (0, M.useCallback)(() => y(!1), [y]);
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
            } = (0, _t.useGSAP)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: s,
              placeholderRef: a
            } = (0, M.useContext)(sh), l = t(async e => {
              r.zoomTo(e), bt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), bt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), bt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              })
            }), d = t(async () => {
              r.zoomAndPanToInitial(), bt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              bt.gsap.to([i.current], {
                opacity: e,
                [an]: t,
                ...sn
              })
            }), h = t(async () => {
              bt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              })
            }), p = (0, M.useCallback)(() => {
              n.current && o.current && (r.resize(), bt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...sn
              }), bt.gsap.set([n.current, a.current], {
                ...r.getUpdatedContentSize(),
                ...sn
              }), bt.gsap.set([s.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, M.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", h), r.addEventListener("toggle-controls", f), window.addEventListener("resize", p), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", h), r.removeEventListener("toggle-controls", f), window.removeEventListener("resize", p)
            }), []), {
              zoomIn: c,
              zoomOut: u,
              zoomTo: l,
              resetZoom: d,
              toggleControls: f,
              update: h
            }
          })({
            close: o
          }), d = (0, V.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, _.jsx)(lh.Provider, {
            value: {
              update: i,
              openAnim: n,
              close: o,
              zoomIn: s,
              zoomOut: a,
              zoomTo: l,
              resetZoom: c,
              toggleControls: u,
              onOpenChange: r
            },
            children: (0, _.jsx)(ih.bL, {
              ...d
            })
          })
        },
        uh = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = gs(),
            {
              triggerRef: i,
              triggerBorderRef: s,
              altText: a
            } = (0, M.useContext)(sh),
            l = (0, G.UP)(i, n),
            c = (0, V.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Ms, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, _.jsx)(ih.l9, {
            ref: l,
            ...c,
            children: (0, _.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, _.jsx)(q.xV, {
                children: t
              })
            })
          })
        }),
        dh = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, M.useContext)(sh), i = (0, G.UP)(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? q.DX : "img";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        fh = (0, M.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, M.useContext)(sh), o = (0, G.UP)(n, r), i = (0, V.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? q.DX : me.Maximize2;
          return (0, _.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        hh = ({
          ...e
        }) => (0, _.jsx)(ih.ZL, {
          ...e
        }),
        ph = (0, M.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, M.useContext)(sh), o = (0, G.UP)(n, r), i = (0, V.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, _.jsx)(ih.hJ, {
            ref: o,
            ...i
          })
        }),
        mh = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, M.useContext)(lh), {
            contrastMode: i
          } = (() => {
            const {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: r,
              defaultContrastMode: n,
              platformScale: o,
              defaultPlatformScale: i,
              platformScaleRatios: s,
              platformScaleBreakpoints: a,
              locale: l
            } = J();
            return {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: r,
              defaultContrastMode: n,
              platformScale: o,
              defaultPlatformScale: i,
              platformScaleRatios: s,
              platformScaleBreakpoints: a,
              locale: l
            }
          })(), {
            contentRef: s,
            altText: a,
            triggerRef: l
          } = (0, M.useContext)(sh), {
            cursor: c
          } = (() => {
            const {
              slide: e
            } = (0, M.useContext)(sh), [t, r] = (0, M.useState)(e.getCursor()), n = (0, M.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, M.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), u = ((e, t) => [W.tokens, W.typography, Ss("dark", t)].join(" "))(0, i), d = (0, G.UP)(s, n), f = (0, V.v6)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, l),
            className: (0, pe.clsx)("foundry_1a74xwb9", u),
            style: {
              cursor: c
            }
          });
          return (0, _.jsxs)(ih.UC, {
            ref: d,
            ...f,
            children: [(0, _.jsx)(q.s6, {
              children: (0, _.jsx)(ih.hE, {
                children: a
              })
            }), t]
          })
        }),
        vh = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, M.useContext)(sh);
          (() => {
            const {
              contextSafe: e
            } = (0, _t.useGSAP)(), {
              toggleControls: t
            } = (0, M.useContext)(lh), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: i,
              slide: s
            } = (0, M.useContext)(sh), a = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (bt.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...sn
              }), bt.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...sn
              }), bt.gsap.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...sn
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || bt.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...sn
              }))
            }), c = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (bt.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...sn
              }), bt.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...sn
              }), bt.gsap.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...sn
              })))
            }), u = (0, M.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, G.iQ)({
              ref: i,
              onFocusIn: u
            }), Tr({
              onWheel: l,
              onDrag: a,
              onPinch: c
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
          const i = (0, G.UP)(o, n),
            s = (0, V.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, _.jsx)("div", {
            ref: i,
            ...s,
            children: (0, _.jsxs)(yh, {
              children: [(0, _.jsx)(gh, {}), t]
            })
          })
        }),
        yh = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, M.useContext)(sh), i = (0, G.UP)(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? q.DX : "div";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        gh = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, M.useContext)(sh), i = (0, G.UP)(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? q.DX : "img";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        bh = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, M.useContext)(sh), i = (0, G.UP)(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? q.DX : "img";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        _h = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, M.useContext)(sh), i = (0, G.UP)(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? q.DX : "p";
          return (0, _.jsx)(ih.VY, {
            asChild: !0,
            children: (0, _.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        wh = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, M.useContext)(sh);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, M.useContext)(lh);
            Yr(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Yr(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), Yr("r", n, {
              enabled: e,
              preventDefault: !0
            }), Yr("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = (0, G.UP)(o, n),
            s = (0, V.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? q.DX : "div";
          return (0, _.jsx)(Wr, {
            children: (0, _.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Eh = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, _.jsx)(_.Fragment, {
            children: n
          });
          const i = (0, V.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, _.jsxs)(bf, {
            delayDuration: 0,
            children: [(0, _.jsx)(_f, {
              children: n
            }), (0, _.jsxs)(wf, {
              ...i,
              children: [(0, _.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, _.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, _.jsx)(Ef, {})]
            })]
          })
        },
        xh = (0, M.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, V.v6)(e, {
            isInline: !0
          });
          return (0, _.jsx)(Zs, {
            ref: t,
            ...r
          })
        }),
        Ph = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, i) {
          const s = gs(),
            {
              zoomRef: a
            } = (0, M.useContext)(sh),
            {
              canZoomIn: l,
              zoomIn: c,
              canZoomOut: u,
              zoomOut: d,
              zoomProgress: f,
              minZoomLevel: h,
              maxZoomLevel: p,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, M.useContext)(sh), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, M.useContext)(lh), [o, i] = (0, M.useState)(!1), [s, a] = (0, M.useState)(!1), [l, c] = (0, M.useState)(0), [u, d] = (0, M.useState)(0), [f, h] = (0, M.useState)(0), p = (0, M.useCallback)(() => {
                i(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), c(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), h(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, M.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, M.useEffect)(() => (e.addEventListener("zoom", p), () => {
                e.removeEventListener("zoom", p)
              }), [p]), {
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
            v = (0, G.UP)(a, i),
            y = (0, V.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbn"
            }),
            g = t ? q.DX : "div";
          return (0, _.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, _.jsx)(Eh, {
              side: "left",
              enabled: r,
              content: s.formatMessage(zs),
              metadata: s.formatMessage(Vs, {
                shortcut: (0, _.jsx)(xh, {
                  shortcut: "+"
                })
              }),
              children: (0, _.jsx)(Ae, {
                label: s.formatMessage(zs),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: nn({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, _.jsxs)(th, {
              className: "foundry_1a74xwbr",
              max: p,
              min: h,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, _.jsx)(rh, {
                className: "foundry_1a74xwbs",
                children: (0, _.jsx)(nh, {
                  className: "foundry_1a74xwbt"
                })
              }), (0, _.jsx)(Eh, {
                side: "left",
                enabled: r,
                content: s.formatMessage(Ks, {
                  zoom: f.toFixed(0)
                }),
                children: (0, _.jsx)(oh, {
                  className: "foundry_1a74xwbu",
                  children: (0, _.jsx)("span", {
                    className: "foundry_1a74xwbv"
                  })
                })
              })]
            }), (0, _.jsx)(Eh, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Fs),
              metadata: s.formatMessage(Us, {
                shortcut: (0, _.jsx)(xh, {
                  shortcut: "-"
                })
              }),
              children: (0, _.jsx)(Ae, {
                label: s.formatMessage(Fs),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: nn({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !u
              })
            }), (0, _.jsx)(q.xV, {
              children: n
            })]
          })
        }),
        Ch = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const i = gs(),
            {
              closeRef: s
            } = (0, M.useContext)(sh),
            a = (0, G.UP)(s, o),
            l = (0, V.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbk foundry_1a74xwbj"
            }),
            c = t ? (0, _.jsx)(q.DX, {
              ref: a,
              ...l
            }) : (0, _.jsx)(Ae, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: i.formatMessage(Bs)
            });
          return (0, _.jsx)(Eh, {
            side: "right",
            enabled: r,
            content: i.formatMessage(Bs),
            metadata: i.formatMessage(Hs, {
              shortcut: (0, _.jsx)(xh, {
                shortcut: "Esc"
              })
            }),
            children: (0, _.jsx)(ih.bm, {
              asChild: !0,
              children: c
            })
          })
        }),
        Sh = (0, M.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = gs(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, M.useContext)(sh), {
                contextSafe: r
              } = (0, _t.useGSAP)(), {
                resetZoom: n
              } = (0, M.useContext)(lh), [o, i] = (0, M.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                bt.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...sn
                })
              }), a = (0, M.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                i(t), s(t)
              }, [i]);
              return (0, M.useEffect)(() => (e.addEventListener("zoom", a), () => {
                e.removeEventListener("zoom", a)
              }), [a]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, M.useContext)(sh),
            a = (0, G.UP)(s, n),
            l = (0, V.v6)(r, i, {
              "data-testid": e,
              className: "foundry_1a74xwbl foundry_1a74xwbj"
            });
          return (0, _.jsx)(Eh, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Gs),
            metadata: o.formatMessage(qs, {
              shortcut: (0, _.jsx)(xh, {
                shortcut: "R"
              })
            }),
            children: (0, _.jsx)(Ae, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Gs)
            })
          })
        }),
        Th = (0, M.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = gs(),
            {
              downloadRef: i,
              imageRef: s
            } = (0, M.useContext)(sh),
            a = (0, G.UP)(i, n),
            l = (0, V.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbm foundry_1a74xwbj"
            });
          return (0, _.jsx)(Eh, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Xs),
            children: (0, _.jsx)(Ae, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Xs),
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
        Oh = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        Rh = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        Nh = Rh.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function jh(e) {
        return e.matches(Nh)
      }
      Rh.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), Rh.join(':not([hidden]):not([tabindex="-1"]),');
      const Ih = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        kh = e => e && "window" in e && e.window === e ? e : Ih(e).defaultView || window;

      function Lh(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }

      function Dh(e) {
        if (function() {
            if (null == Ah) {
              Ah = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Ah = !0, !0
                  }
                })
              } catch {}
            }
            return Ah
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
      let Ah = null;
      let Mh = !1;

      function Bh(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
      }

      function Hh(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function zh(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Vh = zh(function() {
          return Hh(/^Mac/i)
        }),
        Fh = zh(function() {
          return Hh(/^iPhone/i)
        }),
        Uh = zh(function() {
          return Hh(/^iPad/i) || Vh() && navigator.maxTouchPoints > 1
        }),
        Gh = zh(function() {
          return Fh() || Uh()
        }),
        qh = (zh(function() {
          return Vh() || Gh()
        }), zh(function() {
          return Bh(/AppleWebKit/i) && !Kh()
        })),
        Kh = zh(function() {
          return Bh(/Chrome/i)
        }),
        Xh = zh(function() {
          return Bh(/Android/i)
        }),
        Wh = zh(function() {
          return Bh(/Firefox/i)
        });
      let Zh = new Map,
        $h = new Set;

      function Yh() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Zh.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Zh.delete(r.target)), 0 === Zh.size)) {
            for (let e of $h) e();
            $h.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = Zh.get(r.target);
          n || (n = new Set, Zh.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Yh() : document.addEventListener("DOMContentLoaded", Yh));
      let Qh = "default",
        Jh = "",
        ep = new WeakMap;

      function tp(e) {
        if (Gh()) {
          if ("disabled" !== Qh) return;
          Qh = "restoring", setTimeout(() => {
            var t;
            t = () => {
              if ("restoring" === Qh) {
                const t = Ih(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Jh || ""), Jh = "", Qh = "default"
              }
            }, requestAnimationFrame(() => {
              ! function() {
                for (const [e] of Zh) "isConnected" in e && !e.isConnected && Zh.delete(e)
              }(), 0 === Zh.size ? t() : $h.add(t)
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ep.has(e)) {
          let t = ep.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), ep.delete(e)
        }
      }
      const rp = M.createContext({
        register: () => {}
      });
      rp.displayName = "PressResponderContext";
      var np = r(88842),
        op = r(57178),
        ip = r(72562);

      function sp(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let ap, lp = new Map;

      function cp(e, t) {
        if (e === t) return e;
        let r = lp.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = lp.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function up(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = sp(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = cp(r, o) : t[e] = void 0 !== o ? o : r : t[e] = pe(r, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (ap = new FinalizationRegistry(e => {
        lp.delete(e)
      }));
      const dp = "undefined" != typeof document ? M.useLayoutEffect : () => {};

      function fp(e) {
        const t = (0, M.useRef)(null);
        return dp(() => {
          t.current = e
        }, [e]), (0, M.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      var hp = r(35412);

      function pp(e, t) {
        if (!(0, hp.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : Lh(r) ? r.host : r.parentNode
        }
        return !1
      }

      function mp(e) {
        return (0, hp.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }

      function vp(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        Wh() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Vh() ? i = !0 : s = !0);
        let c = qh() && Vh() && !Uh() ? new KeyboardEvent("keydown", {
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
          bubbles: !0,
          cancelable: !0
        });
        vp.isOpening = r, Dh(e), e.dispatchEvent(c), vp.isOpening = !1
      }

      function yp(e) {
        let t = (0, M.useContext)(rp);
        if (t) {
          let {
            register: r,
            ...n
          } = t;
          e = up(n, e), r()
        }
        return function(e, t) {
          dp(() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          })
        }(t, e.ref), e
      }
      vp.isOpening = !1;
      var gp = new WeakMap;
      class bp {
        continuePropagation() {
          (0, ip._)(this, gp, !1)
        }
        get shouldStopPropagation() {
          return (0, np._)(this, gp)
        }
        constructor(e, t, r, n) {
          var o;
          (0, op._)(this, gp, {
            writable: !0,
            value: void 0
          }), (0, ip._)(this, gp, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, c = 0,
            u = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), s && (null != l && null != u ? (a = l - s.left, c = u - s.top) : (a = s.width / 2, c = s.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = a, this.y = c
        }
      }
      const _p = Symbol("linkClicked"),
        wp = "react-aria-pressable-style",
        Ep = "data-react-aria-pressable";

      function xp(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: i,
          onClick: s,
          isDisabled: a,
          isPressed: l,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: u,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = yp(e), [p, m] = (0, M.useState)(!1), v = (0, M.useRef)({
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
        } = function() {
          let e = (0, M.useRef)(new Map),
            t = (0, M.useCallback)((t, r, n, o) => {
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
            r = (0, M.useCallback)((t, r, n, o) => {
              var i;
              let s = (null === (i = e.current.get(n)) || void 0 === i ? void 0 : i.fn) || n;
              t.removeEventListener(r, s, o), e.current.delete(n)
            }, []),
            n = (0, M.useCallback)(() => {
              e.current.forEach((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              })
            }, [r]);
          return (0, M.useEffect)(() => n, [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), b = fp((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new bp("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        }), _ = fp((e, n, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new bp("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !a) {
            let r = new bp("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        }), w = fp((e, t) => {
          let r = v.current;
          if (a) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new bp("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }), E = fp(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(Sp(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || tp(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), x = fp(e => {
          u && E(e)
        }), P = fp(e => {
          null == s || s(e)
        }), C = fp((e, t) => {
          if (s) {
            let r = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(r, t), s(function(e) {
              let t = e;
              return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
            }(r))
          }
        }), S = (0, M.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Cp(t.nativeEvent, t.currentTarget) && pp(t.currentTarget, mp(t.nativeEvent))) {
                  var n;
                  Tp(mp(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        Cp(t, n) && !t.repeat && pp(n, mp(t)) && e.target && w(Sp(e.target, t), "keyboard")
                      };
                    y(Ih(t.currentTarget), "keyup", sp(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Vh() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var r;
                if ((!t || pp(t.currentTarget, mp(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !vp.isOpening) {
                  let n = !0;
                  if (a && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (r = t.nativeEvent).mozInputSource || !r.isTrusted) && (Xh() && r.pointerType ? "click" !== r.type || 1 !== r.buttons : 0 !== r.detail || r.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = w(Sp(t.currentTarget, t), r),
                        i = _(Sp(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, P(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      r = w(t, "virtual"),
                      o = _(t, "virtual");
                    P(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && Cp(t, e.target)) {
                var n;
                Tp(mp(t), t.key) && t.preventDefault();
                let r = mp(t),
                  o = pp(e.target, mp(t));
                _(Sp(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && Pp(e.target) && pp(e.target, r) && !t[_p] && (t[_p] = !0, vp(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !pp(t.currentTarget, mp(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Xh() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (Gh()) {
                    if ("default" === Qh) {
                      const t = Ih(e);
                      Jh = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Qh = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    ep.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = mp(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Ih(t.currentTarget), "pointerup", r, !1), y(Ih(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (pp(t.currentTarget, mp(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !jh(e);) e = e.parentElement;
                    let t = kh(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    Mh = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, Dh(r), l()))
                      },
                      s = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, Dh(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), Mh = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              pp(t.currentTarget, mp(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || w(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(Sp(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(Sp(e.target, t), e.pointerType, !1), x(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (pp(e.target, mp(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (Dh(e.target), e.target.click()))
                      }, 80);
                    y(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else E(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                E(e)
              };
            t.onDragStart = e => {
              pp(e.currentTarget, mp(e.nativeEvent)) && E(e)
            }
          }
          return t
        }, [y, a, c, g, d, E, x, _, b, w, P, C]);
        return (0, M.useEffect)(() => {
          if (!f) return;
          const e = Ih(f.current);
          if (!e || !e.head || e.getElementById(wp)) return;
          const t = e.createElement("style");
          t.id = wp, t.textContent = `\n@layer {\n  [${Ep}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, M.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            d || tp(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || p,
          pressProps: up(h, S, {
            [Ep]: !0
          })
        }
      }

      function Pp(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Cp(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof kh(o).HTMLInputElement && !Rp(o, r) || o instanceof kh(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Pp(o)) && "Enter" !== r)
      }

      function Sp(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n
        }
      }

      function Tp(e, t) {
        return e instanceof HTMLInputElement ? !Rp(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Pp(e)))
        }(e)
      }
      const Op = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Rp(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Op.has(e.type)
      }

      function Np(e) {
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

      function jp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ip(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jp(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Np(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function kp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Lp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Dp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ip(Ip({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Lp(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kp(e.variantClassNames, e => kp(e, e => e.split(" ")[0]))
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
      const Ap = (0, M.createContext)(null);

      function Mp() {
        const e = (0, M.useContext)(Ap);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Bp = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...s
        }, a) => {
          const l = (0, V.v6)({
              className: Dp({
                status: i
              }),
              "data-testid": t
            }, s),
            c = r ? q.DX : "div";
          return (0, _.jsx)(Ap.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: i,
              ...s
            },
            children: (0, _.jsx)(c, {
              ...l,
              ref: a,
              children: e
            })
          })
        }),
        Hp = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Mp(), i = (0, V.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: me.Check,
            invalid: me.X,
            neutral: me.TriangleAlert
          }, a = t ? q.DX : s[o];
          return (0, _.jsx)(a, {
            ref: n,
            ...i
          })
        }),
        zp = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: s
          } = Mp(), a = (0, V.v6)({
            "data-testid": t,
            id: s || i
          }, n), l = r ? q.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });
      var Vp = "ScrollArea",
        [Fp, Up] = (0, Iu.A)(Vp),
        [Gp, qp] = Fp(Vp),
        Kp = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...s
          } = e, [a, l] = M.useState(null), [c, u] = M.useState(null), [d, f] = M.useState(null), [h, p] = M.useState(null), [m, v] = M.useState(null), [y, g] = M.useState(0), [b, w] = M.useState(0), [E, x] = M.useState(!1), [P, C] = M.useState(!1), S = (0, ju.s)(t, e => l(e)), T = (0, Cf.jH)(o);
          return (0, _.jsx)(Gp, {
            scope: r,
            type: n,
            dir: T,
            scrollHideDelay: i,
            scrollArea: a,
            viewport: c,
            onViewportChange: u,
            content: d,
            onContentChange: f,
            scrollbarX: h,
            onScrollbarXChange: p,
            scrollbarXEnabled: E,
            onScrollbarXEnabledChange: x,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: P,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, _.jsx)(ku.sG.div, {
              dir: T,
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
      Kp.displayName = Vp;
      var Xp = "ScrollAreaViewport",
        Wp = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, s = qp(Xp, r), a = M.useRef(null), l = (0, ju.s)(t, a, s.onViewportChange);
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, _.jsx)(ku.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, _.jsx)("div", {
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
      Wp.displayName = Xp;
      var Zp = "ScrollAreaScrollbar",
        $p = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = qp(Zp, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: s
          } = o, a = "horizontal" === e.orientation;
          return M.useEffect(() => (a ? i(!0) : s(!0), () => {
            a ? i(!1) : s(!1)
          }), [a, i, s]), "hover" === o.type ? (0, _.jsx)(Yp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, _.jsx)(Qp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, _.jsx)(Jp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, _.jsx)(em, {
            ...n,
            ref: t
          }) : null
        });
      $p.displayName = Zp;
      var Yp = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = qp(Zp, e.__scopeScrollArea), [i, s] = M.useState(!1);
          return M.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, _.jsx)(Id.C, {
            present: r || i,
            children: (0, _.jsx)(Jp, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Qp = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = qp(Zp, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = gm(() => l("SCROLL_END"), 100), [a, l] = (c = {
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
          }, M.useReducer((e, t) => c[e][t] ?? e, "hidden"));
          var c;
          return M.useEffect(() => {
            if ("idle" === a) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [a, o.scrollHideDelay, l]), M.useEffect(() => {
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
          }, [o.viewport, i, l, s]), (0, _.jsx)(Id.C, {
            present: r || "hidden" !== a,
            children: (0, _.jsx)(em, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, Nu.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, Nu.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Jp = M.forwardRef((e, t) => {
          const r = qp(Zp, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, s] = M.useState(!1),
            a = "horizontal" === e.orientation,
            l = gm(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(a ? e : t)
              }
            }, 10);
          return bm(r.viewport, l), bm(r.content, l), (0, _.jsx)(Id.C, {
            present: n || i,
            children: (0, _.jsx)(em, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        em = M.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = qp(Zp, e.__scopeScrollArea), i = M.useRef(null), s = M.useRef(0), [a, l] = M.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = fm(a.viewport, a.content), u = {
            ...n,
            sizes: a,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function d(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = hm(r),
                i = t || o / 2,
                s = o - i,
                a = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                c = r.content - r.viewport;
              return mm([a, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, s.current, a, t)
          }
          return "horizontal" === r ? (0, _.jsx)(tm, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = pm(o.viewport.scrollLeft, a, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, _.jsx)(rm, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = pm(o.viewport.scrollTop, a);
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
        tm = M.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = qp(Zp, e.__scopeScrollArea), [s, a] = M.useState(), l = M.useRef(null), c = (0, ju.s)(t, l, i.onScrollbarXChange);
          return M.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, _.jsx)(im, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": hm(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), vm(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: dm(s.paddingLeft),
                  paddingEnd: dm(s.paddingRight)
                }
              })
            }
          })
        }),
        rm = M.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = qp(Zp, e.__scopeScrollArea), [s, a] = M.useState(), l = M.useRef(null), c = (0, ju.s)(t, l, i.onScrollbarYChange);
          return M.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, _.jsx)(im, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": hm(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), vm(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: dm(s.paddingTop),
                  paddingEnd: dm(s.paddingBottom)
                }
              })
            }
          })
        }),
        [nm, om] = Fp(Zp),
        im = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: s,
            onThumbPointerDown: a,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: u,
            onResize: d,
            ...f
          } = e, h = qp(Zp, r), [p, m] = M.useState(null), v = (0, ju.s)(t, e => m(e)), y = M.useRef(null), g = M.useRef(""), b = h.viewport, w = n.content - n.viewport, E = (0, Lu.c)(u), x = (0, Lu.c)(l), P = gm(d, 10);

          function C(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              c({
                x: t,
                y: r
              })
            }
          }
          return M.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && E(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, p, w, E]), M.useEffect(x, [n, x]), bm(p, P), bm(h.content, P), (0, _.jsx)(nm, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, Lu.c)(i),
            onThumbPointerUp: (0, Lu.c)(s),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, Lu.c)(a),
            children: (0, _.jsx)(ku.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Nu.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, Nu.mK)(e.onPointerMove, C),
              onPointerUp: (0, Nu.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        sm = "ScrollAreaThumb",
        am = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = om(sm, e.__scopeScrollArea);
          return (0, _.jsx)(Id.C, {
            present: r || o.hasThumb,
            children: (0, _.jsx)(lm, {
              ref: t,
              ...n
            })
          })
        }),
        lm = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = qp(sm, r), s = om(sm, r), {
            onThumbPositionChange: a
          } = s, l = (0, ju.s)(t, e => s.onThumbChange(e)), c = M.useRef(void 0), u = gm(() => {
            c.current && (c.current(), c.current = void 0)
          }, 100);
          return M.useEffect(() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = ym(e, a);
                  c.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [i.viewport, u, a]), (0, _.jsx)(ku.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, Nu.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, Nu.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      am.displayName = sm;
      var cm = "ScrollAreaCorner";
      M.forwardRef((e, t) => {
        const r = qp(cm, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, _.jsx)(um, {
          ...e,
          ref: t
        }) : null
      }).displayName = cm;
      var um = M.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = qp(cm, r), [i, s] = M.useState(0), [a, l] = M.useState(0), c = Boolean(i && a);
        return bm(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), bm(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), c ? (0, _.jsx)(ku.sG.div, {
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

      function dm(e) {
        return e ? parseInt(e, 10) : 0
      }

      function fm(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function hm(e) {
        const t = fm(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function pm(e, t, r = "ltr") {
        const n = hm(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - n,
          l = Pf(e, "ltr" === r ? [0, s] : [-1 * s, 0]);
        return mm([0, s], [0, a])(l)
      }

      function mm(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function vm(e, t) {
        return e > 0 && e < t
      }
      var ym = (e, t = () => {}) => {
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

      function gm(e, t) {
        const r = (0, Lu.c)(e),
          n = M.useRef(0);
        return M.useEffect(() => () => window.clearTimeout(n.current), []), M.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function bm(e, t) {
        const r = (0, Lu.c)(t);
        (0, ad.N)(() => {
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
      var _m = Kp,
        wm = Wp,
        Em = $p,
        xm = am,
        Pm = 0;

      function Cm() {
        M.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Sm()), document.body.insertAdjacentElement("beforeend", e[1] ?? Sm()), Pm++, () => {
            1 === Pm && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), Pm--
          }
        }, [])
      }

      function Sm() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Tm = "focusScope.autoFocusOnMount",
        Om = "focusScope.autoFocusOnUnmount",
        Rm = {
          bubbles: !1,
          cancelable: !0
        },
        Nm = M.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = M.useState(null), c = (0, Lu.c)(o), u = (0, Lu.c)(i), d = M.useRef(null), f = (0, ju.s)(t, e => l(e)), h = M.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          M.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (h.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? d.current = t : Lm(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || Lm(d.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Lm(a)
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
          }, [n, a, h.paused]), M.useEffect(() => {
            if (a) {
              Dm.add(h);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(Tm, Rm);
                a.addEventListener(Tm, c), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Lm(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(jm(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Lm(a))
              }
              return () => {
                a.removeEventListener(Tm, c), setTimeout(() => {
                  const t = new CustomEvent(Om, Rm);
                  a.addEventListener(Om, u), a.dispatchEvent(t), t.defaultPrevented || Lm(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(Om, u), Dm.remove(h)
                }, 0)
              }
            }
          }, [a, c, u, h]);
          const p = M.useCallback(e => {
            if (!r && !n) return;
            if (h.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, i] = function(e) {
                  const t = jm(e);
                  return [Im(t, e), Im(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && Lm(i, {
                select: !0
              })) : (e.preventDefault(), r && Lm(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, h.paused]);
          return (0, _.jsx)(ku.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: p
          })
        });

      function jm(e) {
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

      function Im(e, t) {
        for (const r of e)
          if (!km(r, {
              upTo: t
            })) return r
      }

      function km(e, {
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

      function Lm(e, {
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
      Nm.displayName = "FocusScope";
      var Dm = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Am(e, t), e.unshift(t)
          },
          remove(t) {
            e = Am(e, t), e[0]?.resume()
          }
        }
      }();

      function Am(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var Mm = r(94926),
        Bm = r(97359),
        Hm = [" ", "Enter", "ArrowUp", "ArrowDown"],
        zm = [" ", "Enter"],
        Vm = "Select",
        [Fm, Um, Gm] = (0, Tf.N)(Vm),
        [qm, Km] = (0, Iu.A)(Vm, [Gm, dd]),
        Xm = dd(),
        [Wm, Zm] = qm(Vm),
        [$m, Ym] = qm(Vm),
        Qm = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            value: s,
            defaultValue: a,
            onValueChange: l,
            dir: c,
            name: u,
            autoComplete: d,
            disabled: f,
            required: h,
            form: p
          } = e, m = Xm(t), [v, y] = M.useState(null), [g, b] = M.useState(null), [w, E] = M.useState(!1), x = (0, Cf.jH)(c), [P, C] = (0, Ld.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Vm
          }), [S, T] = (0, Ld.i)({
            prop: s,
            defaultProp: a,
            onChange: l,
            caller: Vm
          }), O = M.useRef(null), R = !v || p || !!v.closest("form"), [N, j] = M.useState(new Set), I = Array.from(N).map(e => e.props.value).join(";");
          return (0, _.jsx)(Td, {
            ...m,
            children: (0, _.jsxs)(Wm, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: E,
              contentId: (0, Gu.B)(),
              value: S,
              onValueChange: T,
              open: P,
              onOpenChange: C,
              dir: x,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [(0, _.jsx)(Fm.Provider, {
                scope: t,
                children: (0, _.jsx)($m, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: M.useCallback(e => {
                    j(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: M.useCallback(e => {
                    j(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), R ? (0, _.jsxs)(kv, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: S,
                onChange: e => T(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === S ? (0, _.jsx)("option", {
                  value: ""
                }) : null, Array.from(N)]
              }, I) : null]
            })
          })
        };
      Qm.displayName = Vm;
      var Jm = "SelectTrigger",
        ev = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = Xm(r), s = Zm(Jm, r), a = s.disabled || n, l = (0, ju.s)(t, s.onTriggerChange), c = Um(r), u = M.useRef("touch"), [d, f, h] = Dv(e => {
            const t = c().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Av(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), p = e => {
            a || (s.onOpenChange(!0), h()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, _.jsx)(Od, {
            asChild: !0,
            ...i,
            children: (0, _.jsx)(ku.sG.button, {
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
              "data-placeholder": Lv(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, Nu.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== u.current && p(e)
              }),
              onPointerDown: (0, Nu.mK)(o.onPointerDown, e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              }),
              onKeyDown: (0, Nu.mK)(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Hm.includes(e.key) && (p(), e.preventDefault())
              })
            })
          })
        });
      ev.displayName = Jm;
      var tv = "SelectValue",
        rv = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = Zm(tv, r), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== i, d = (0, ju.s)(t, l.onValueNodeChange);
          return (0, ad.N)(() => {
            c(u)
          }, [c, u]), (0, _.jsx)(ku.sG.span, {
            ...a,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: Lv(l.value) ? (0, _.jsx)(_.Fragment, {
              children: s
            }) : i
          })
        });
      rv.displayName = tv;
      var nv = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, _.jsx)(ku.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      nv.displayName = "SelectIcon";
      var ov = e => (0, _.jsx)(jd, {
        asChild: !0,
        ...e
      });
      ov.displayName = "SelectPortal";
      var iv = "SelectContent",
        sv = M.forwardRef((e, t) => {
          const r = Zm(iv, e.__scopeSelect),
            [n, o] = M.useState();
          if ((0, ad.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? pu.createPortal((0, _.jsx)(lv, {
              scope: e.__scopeSelect,
              children: (0, _.jsx)(Fm.Slot, {
                scope: e.__scopeSelect,
                children: (0, _.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, _.jsx)(dv, {
            ...e,
            ref: t
          })
        });
      sv.displayName = iv;
      var av = 10,
        [lv, cv] = qm(iv),
        uv = (0, kd.TL)("SelectContent.RemoveScroll"),
        dv = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            side: a,
            sideOffset: l,
            align: c,
            alignOffset: u,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = Zm(iv, r), [b, w] = M.useState(null), [E, x] = M.useState(null), P = (0, ju.s)(t, e => w(e)), [C, S] = M.useState(null), [T, O] = M.useState(null), R = Um(r), [N, j] = M.useState(!1), I = M.useRef(!1);
          M.useEffect(() => {
            if (b) return (0, Mm.Eq)(b)
          }, [b]), Cm();
          const k = M.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && E && (E.scrollTop = 0), r === n && E && (E.scrollTop = E.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [R, E]),
            L = M.useCallback(() => k([C, b]), [k, C, b]);
          M.useEffect(() => {
            N && L()
          }, [N, L]);
          const {
            onOpenChange: D,
            triggerPointerDownPosRef: A
          } = g;
          M.useEffect(() => {
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
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || D(!1), document.removeEventListener("pointermove", t), A.current = null
                };
              return null !== A.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [b, D, A]), M.useEffect(() => {
            const e = () => D(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [D]);
          const [B, H] = Dv(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Av(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), z = M.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (S(e), n && (I.current = !0))
          }, [g.value]), V = M.useCallback(() => b?.focus(), [b]), F = M.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && O(e)
          }, [g.value]), U = "popper" === n ? hv : fv, G = U === hv ? {
            side: a,
            sideOffset: l,
            align: c,
            alignOffset: u,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: v
          } : {};
          return (0, _.jsx)(lv, {
            scope: r,
            content: b,
            viewport: E,
            onViewportChange: x,
            itemRefCallback: z,
            selectedItem: C,
            onItemLeave: V,
            itemTextRefCallback: F,
            focusSelectedItem: L,
            selectedItemText: T,
            position: n,
            isPositioned: N,
            searchRef: B,
            children: (0, _.jsx)(Bm.A, {
              as: uv,
              allowPinchZoom: !0,
              children: (0, _.jsx)(Nm, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Nu.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, _.jsx)(Bu, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, _.jsx)(U, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...G,
                    onPlaced: () => j(!0),
                    ref: P,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, Nu.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || H(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => k(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      dv.displayName = "SelectContentImpl";
      var fv = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = Zm(iv, r), s = cv(iv, r), [a, l] = M.useState(null), [c, u] = M.useState(null), d = (0, ju.s)(t, e => u(e)), f = Um(r), h = M.useRef(!1), p = M.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = s, b = M.useCallback(() => {
          if (i.trigger && i.valueNode && a && c && m && v && y) {
            const e = i.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              r = i.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const n = o.left - t.left,
                i = r.left - n,
                s = e.left - i,
                l = e.width + s,
                c = Math.max(l, t.width),
                u = window.innerWidth - av,
                d = Pf(i, [av, Math.max(av, u - c)]);
              a.style.minWidth = l + "px", a.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - i,
                l = e.width + s,
                c = Math.max(l, t.width),
                u = window.innerWidth - av,
                d = Pf(i, [av, Math.max(av, u - c)]);
              a.style.minWidth = l + "px", a.style.right = d + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * av,
              u = m.scrollHeight,
              d = window.getComputedStyle(c),
              p = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              _ = p + g + u + parseInt(d.paddingBottom, 10) + b,
              w = Math.min(5 * v.offsetHeight, _),
              E = window.getComputedStyle(m),
              x = parseInt(E.paddingTop, 10),
              P = parseInt(E.paddingBottom, 10),
              C = e.top + e.height / 2 - av,
              S = l - C,
              T = v.offsetHeight / 2,
              O = p + g + (v.offsetTop + T),
              R = _ - O;
            if (O <= C) {
              const e = s.length > 0 && v === s[s.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = c.clientHeight - m.offsetTop - m.offsetHeight,
                r = O + Math.max(S, T + (e ? P : 0) + t + b);
              a.style.height = r + "px"
            } else {
              const e = s.length > 0 && v === s[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(C, p + m.offsetTop + (e ? x : 0) + T) + R;
              a.style.height = t + "px", m.scrollTop = O - C + m.offsetTop
            }
            a.style.margin = `${av}px 0`, a.style.minHeight = w + "px", a.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => h.current = !0)
          }
        }, [f, i.trigger, i.valueNode, a, c, m, v, y, i.dir, n]);
        (0, ad.N)(() => b(), [b]);
        const [w, E] = M.useState();
        (0, ad.N)(() => {
          c && E(window.getComputedStyle(c).zIndex)
        }, [c]);
        const x = M.useCallback(e => {
          e && !0 === p.current && (b(), g?.(), p.current = !1)
        }, [b, g]);
        return (0, _.jsx)(pv, {
          scope: r,
          contentWrapper: a,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: x,
          children: (0, _.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, _.jsx)(ku.sG.div, {
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
      fv.displayName = "SelectItemAlignedPosition";
      var hv = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = av,
          ...i
        } = e, s = Xm(r);
        return (0, _.jsx)(Rd, {
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
      hv.displayName = "SelectPopperPosition";
      var [pv, mv] = qm(iv, {}), vv = "SelectViewport", yv = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = cv(vv, r), s = mv(vv, r), a = (0, ju.s)(t, i.onViewportChange), l = M.useRef(0);
        return (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, _.jsx)(Fm.Slot, {
            scope: r,
            children: (0, _.jsx)(ku.sG.div, {
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
              onScroll: (0, Nu.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * av,
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
      yv.displayName = vv;
      var gv = "SelectGroup",
        [bv, _v] = qm(gv);
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Gu.B)();
        return (0, _.jsx)(bv, {
          scope: r,
          id: o,
          children: (0, _.jsx)(ku.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = gv;
      var wv = "SelectLabel";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = _v(wv, r);
        return (0, _.jsx)(ku.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = wv;
      var Ev = "SelectItem",
        [xv, Pv] = qm(Ev),
        Cv = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...s
          } = e, a = Zm(Ev, r), l = cv(Ev, r), c = a.value === n, [u, d] = M.useState(i ?? ""), [f, h] = M.useState(!1), p = (0, ju.s)(t, e => l.itemRefCallback?.(e, n, o)), m = (0, Gu.B)(), v = M.useRef("touch"), y = () => {
            o || (a.onValueChange(n), a.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, _.jsx)(xv, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: M.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, _.jsx)(Fm.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, _.jsx)(ku.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": c && f,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: p,
                onFocus: (0, Nu.mK)(s.onFocus, () => h(!0)),
                onBlur: (0, Nu.mK)(s.onBlur, () => h(!1)),
                onClick: (0, Nu.mK)(s.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, Nu.mK)(s.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, Nu.mK)(s.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, Nu.mK)(s.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Nu.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, Nu.mK)(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (zm.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Cv.displayName = Ev;
      var Sv = "SelectItemText",
        Tv = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, s = Zm(Sv, r), a = cv(Sv, r), l = Pv(Sv, r), c = Ym(Sv, r), [u, d] = M.useState(null), f = (0, ju.s)(t, e => d(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), h = u?.textContent, p = M.useMemo(() => (0, _.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return (0, ad.N)(() => (m(p), () => v(p)), [m, v, p]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(ku.sG.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? pu.createPortal(i.children, s.valueNode) : null]
          })
        });
      Tv.displayName = Sv;
      var Ov = "SelectItemIndicator";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Pv(Ov, r).isSelected ? (0, _.jsx)(ku.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = Ov;
      var Rv = "SelectScrollUpButton";
      M.forwardRef((e, t) => {
        const r = cv(Rv, e.__scopeSelect),
          n = mv(Rv, e.__scopeSelect),
          [o, i] = M.useState(!1),
          s = (0, ju.s)(t, n.onScrollButtonChange);
        return (0, ad.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, _.jsx)(jv, {
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
      }).displayName = Rv;
      var Nv = "SelectScrollDownButton";
      M.forwardRef((e, t) => {
        const r = cv(Nv, e.__scopeSelect),
          n = mv(Nv, e.__scopeSelect),
          [o, i] = M.useState(!1),
          s = (0, ju.s)(t, n.onScrollButtonChange);
        return (0, ad.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, _.jsx)(jv, {
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
      }).displayName = Nv;
      var jv = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = cv("SelectScrollButton", r), s = M.useRef(null), a = Um(r), l = M.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return M.useEffect(() => () => l(), [l]), (0, ad.N)(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, _.jsx)(ku.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, Nu.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, Nu.mK)(o.onPointerMove, () => {
            i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, Nu.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, _.jsx)(ku.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Iv = "SelectArrow";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Xm(r), i = Zm(Iv, r), s = cv(Iv, r);
        return i.open && "popper" === s.position ? (0, _.jsx)(Nd, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Iv;
      var kv = M.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = M.useRef(null),
          i = (0, ju.s)(n, o),
          s = Sf(t);
        return M.useEffect(() => {
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
        }, [s, t]), (0, _.jsx)(ku.sG.select, {
          ...r,
          style: {
            ...Dd.Qg,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function Lv(e) {
        return "" === e || void 0 === e
      }

      function Dv(e) {
        const t = (0, Lu.c)(e),
          r = M.useRef(""),
          n = M.useRef(0),
          o = M.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          i = M.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return M.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i]
      }

      function Av(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === n.length && (i = i.filter(e => e !== r));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      kv.displayName = "SelectBubbleInput";
      var Mv = Qm,
        Bv = ev,
        Hv = rv,
        zv = nv,
        Vv = ov,
        Fv = sv,
        Uv = yv,
        Gv = Cv,
        qv = Tv;

      function Kv(e) {
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

      function Xv(e, t) {
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
          t % 2 ? Xv(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Kv(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Zv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var $v = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Yv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Wv(Wv({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) $v(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zv(e.variantClassNames, e => Zv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Qv = Yv({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Jv = Yv({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ey = Yv({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ty = Yv({
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
        ry = Yv({
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
        ny = Yv({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const oy = (0, M.createContext)(null);

      function iy() {
        const e = (0, M.useContext)(oy);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const sy = (0, M.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: i,
          onValueChange: s,
          name: a,
          value: l,
          defaultOpen: c,
          onOpenChange: u,
          isOpen: d,
          size: f = "MD",
          status: h = "neutral",
          ...p
        }, m) => {
          const v = (0, M.useRef)(null),
            y = (0, G.UP)(v, m),
            g = (0, M.useId)(),
            b = (0, M.useId)(),
            w = (0, M.useId)(),
            E = (0, M.useId)(),
            x = (0, M.useId)(),
            P = (0, M.useId)(),
            [C = !1, S] = (0, G.ic)({
              prop: d,
              defaultProp: c,
              onChange: u
            }),
            T = (0, V.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, _.jsx)(oy.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: P,
              hintId: E,
              popoverId: x,
              defaultValue: i,
              onValueChange: s,
              value: l,
              isOpen: C,
              setIsOpen: S,
              defaultOpen: c,
              onOpenChange: u,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: h,
              size: f
            },
            children: (0, _.jsx)(Mv, {
              required: r,
              disabled: n,
              open: C,
              onOpenChange: () => S(!o && !C),
              value: l,
              defaultValue: i,
              onValueChange: s,
              name: a,
              children: (0, _.jsx)("div", {
                ref: y,
                ...T,
                children: e
              })
            })
          })
        }),
        ay = (0, M.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = iy(), s = (0, V.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Qv({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, _.jsx)(Fv, {
            ...s,
            ref: o,
            children: (0, _.jsx)(Uv, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        ly = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, _.jsxs)(_m, {
            ...o,
            ref: n,
            children: [(0, _.jsx)(wm, {
              className: "foundry_uaq1gwu",
              style: {
                overflowY: void 0
              },
              children: e
            }), (0, _.jsx)(Em, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, _.jsx)(xm, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        cy = (0, M.forwardRef)(({
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
            isDisabled: c,
            labelId: u,
            hintId: d,
            triggerId: f,
            popoverId: h,
            descriptionId: p,
            isOpen: m,
            value: v,
            size: y
          } = iy(), {
            isPressed: g,
            pressProps: b
          } = xp({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, V.v6)({
            id: f,
            className: ry({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, V.VW)(r, u, d),
            "aria-describedby": (0, V.VW)(n, p),
            "aria-activedescendant": v,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, V.cJ)(b, "onKeyDown"), i), E = o ? q.DX : Bv;
          return (0, _.jsx)(E, {
            ...w,
            ref: s,
            children: e
          })
        }),
        uy = (0, M.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: i
          } = iy(), s = (0, V.v6)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), a = t ? q.DX : "span";
          return (0, _.jsx)(a, {
            ...s,
            ref: o,
            children: (0, _.jsx)(Hv, {
              placeholder: e,
              "aria-label": i
            })
          })
        }),
        dy = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: s
          } = iy(), a = s ? me.ChevronUp : me.ChevronDown, l = (0, V.v6)({
            asChild: !0,
            className: ny({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, _.jsx)(zv, {
            ...l,
            ref: n,
            children: e || (0, _.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        fy = (0, M.forwardRef)(({
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
            labelId: c,
            triggerId: u
          } = iy(), d = a && !o, f = (0, V.v6)({
            id: i.id || c,
            htmlFor: u,
            "data-testid": e,
            className: ty({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), h = t ? q.DX : "label";
          return (0, _.jsx)(q.s6, {
            enabled: n,
            children: (0, _.jsx)(h, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        hy = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = iy(), a = (0, V.v6)({
            className: Jv({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? q.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        py = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = iy(), a = (0, V.v6)({
            className: ey({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? q.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        my = (0, M.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, M.useRef)(null),
            a = (0, G.UP)(s, i),
            l = (0, V.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, _.jsx)(Gv, {
            ref: a,
            ...l,
            children: e
          })
        }),
        vy = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, _.jsx)(qv, {
            ref: n,
            asChild: !0,
            children: (0, _.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        yy = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, _.jsx)(zv, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        gy = Vv,
        by = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = iy(), a = (0, V.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? q.DX : Bp;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        _y = Hp,
        wy = zp;
      var Ey = r(36768),
        xy = r(99098),
        Py = r(79888);

      function Cy(e, t, r) {
        let n = (0, Py.J)(() => {
          r && r(t)
        });
        (0, M.useEffect)(() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", n), () => {
            null == r || r.removeEventListener("reset", n)
          }
        }, [e, n])
      }
      var Sy = r(41149),
        Ty = r(52061);

      function Oy(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: i,
          name: s,
          form: a,
          children: l,
          "aria-label": c,
          "aria-labelledby": u,
          validationState: d = "valid",
          isInvalid: f,
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g
        } = e, {
          pressProps: b,
          isPressed: _
        } = (0, Sy.d)({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g,
          isDisabled: n
        }), {
          pressProps: w,
          isPressed: E
        } = (0, Sy.d)({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPressUp: y,
          onClick: g,
          onPress(e) {
            var n;
            null == v || v(e), t.toggle(), null === (n = r.current) || void 0 === n || n.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: x
        } = (0, Ty.Wc)(e, r), P = (0, Ey.v)(b, x), C = (0, xy.$)(e, {
          labelable: !0
        });
        return Cy(r, t.defaultSelected, t.setSelected), {
          labelProps: (0, Ey.v)(w, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, Ey.v)(C, {
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
            ...P
          }),
          isSelected: t.isSelected,
          isPressed: _ || E,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === d
        }
      }

      function Ry(e, t, r) {
        let [n, o] = (0, M.useState)(e || t), i = (0, M.useRef)(void 0 !== e), s = void 0 !== e;
        (0, M.useEffect)(() => {
          i.current, i.current = s
        }, [s]);
        let a = s ? e : n,
          l = (0, M.useCallback)((e, ...t) => {
            let n = (e, ...t) => {
              r && (Object.is(a, e) || r(e, ...t)), s || (a = e)
            };
            "function" == typeof e ? o((r, ...o) => {
              let i = e(s ? a : r, ...o);
              return n(i, ...t), s ? r : i
            }) : (s || o(e), n(e, ...t))
          }, [s, a, r]);
        return [a, l]
      }

      function Ny(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Ry(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, M.useState)(r);
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

      function jy(e) {
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

      function ky(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Iy(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = jy(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ly(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Dy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ay = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ky(ky({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Dy(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ly(e.variantClassNames, e => Ly(e, e => e.split(" ")[0]))
            }
          }, t
        },
        My = Ay({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        By = Ay({
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
        Hy = Ay({
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
        zy = Ay({
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
        Vy = Ay({
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
      const Fy = (0, M.createContext)(null);

      function Uy() {
        const e = (0, M.useContext)(Fy);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Gy = (0, M.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: i = !1,
          isReadOnly: s = !1,
          ...a
        }, l) => {
          const c = (0, V.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, a),
            u = n ? q.DX : "div",
            d = (0, M.useId)(),
            f = (0, M.useId)(),
            h = (0, M.useId)();
          return (0, _.jsx)(Fy.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: f,
              inputId: h,
              isDisabled: i,
              isReadOnly: s,
              ...a
            },
            children: (0, _.jsx)(u, {
              ...c,
              ref: l,
              children: o
            })
          })
        }),
        qy = (0, M.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: i,
          isSelected: s,
          defaultSelected: a,
          onSelectedChange: l,
          name: c,
          value: u,
          ...d
        }, f) => {
          const h = (0, M.useRef)(null),
            p = (0, G.UP)(h, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: E
            } = Uy(),
            x = Ny({
              isDisabled: w,
              isReadOnly: E,
              isSelected: s,
              defaultSelected: a,
              onChange: l
            }),
            {
              inputProps: P
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: i,
                isPressed: s,
                isDisabled: a,
                isReadOnly: l
              } = Oy(e, t, r);
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
              "aria-labelledby": (0, V.VW)(n, g),
              "aria-describedby": (0, V.VW)(o, b),
              name: c,
              value: u,
              isDisabled: w,
              isReadOnly: E
            }, x, h),
            C = (0, V.v6)({
              className: Vy({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": w || E,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || E || x.toggle()
              }
            }, d);
          return (0, _.jsxs)("div", {
            ...C,
            children: [(0, _.jsx)(q.s6, {
              children: (0, _.jsx)("input", {
                ...P,
                ref: p
              })
            }), (0, _.jsx)("div", {
              className: zy({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, _.jsx)("div", {
                className: By({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        Ky = (0, M.forwardRef)(({
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
            size: c
          } = Uy(), u = (0, V.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: Hy({
              isDisabled: s,
              size: c
            })
          }, o), d = t ? q.DX : "label";
          return (0, _.jsx)(q.s6, {
            enabled: n,
            children: (0, _.jsx)(d, {
              ...u,
              ref: i,
              children: r
            })
          })
        }),
        Xy = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Uy(), a = n.id || s, l = (0, V.v6)({
            className: My({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? q.DX : "div";
          return (0, _.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Wy = {
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
        Zy = {
          ...Wy,
          customError: !0,
          valid: !1
        },
        $y = {
          isInvalid: !1,
          validationDetails: Wy,
          validationErrors: []
        },
        Yy = (0, M.createContext)({}),
        Qy = "__formValidationState" + Date.now();

      function Jy(e) {
        if (e[Qy]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[Qy];
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
              validationDetails: Zy
            } : null,
            c = (0, M.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return eg(r)
                }
                return []
              }(s, o);
              return tg(e)
            }, [s, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, M.useContext)(Yy),
            d = (0, M.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => eg(u[e])) : eg(u[n]) : [], [u, n]),
            [f, h] = (0, M.useState)(u),
            [p, m] = (0, M.useState)(!1);
          u !== f && (h(u), m(!1));
          let v = (0, M.useMemo)(() => tg(p ? [] : d), [p, d]),
            y = (0, M.useRef)($y),
            [g, b] = (0, M.useState)($y),
            _ = (0, M.useRef)($y),
            [w, E] = (0, M.useState)(!1);
          return (0, M.useEffect)(() => {
            if (!w) return;
            E(!1);
            let e = c || i || y.current;
            rg(e, _.current) || (_.current = e, b(e))
          }), {
            realtimeValidation: l || v || c || i || $y,
            displayValidation: "native" === a ? l || v || g : l || v || c || i || g,
            updateValidation(e) {
              "aria" !== a || rg(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = $y;
              rg(e, _.current) || (_.current = e, b(e)), "native" === a && E(!1), m(!0)
            },
            commitValidation() {
              "native" === a && E(!0), m(!0)
            }
          }
        }(e)
      }

      function eg(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function tg(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Zy
        } : null
      }

      function rg(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }
      var ng = r(38223),
        og = r(28830);

      function ig(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, og.N)(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: sg(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, M.useRef)(!1),
          s = (0, Py.J)(() => {
            i.current || t.resetValidation()
          }),
          a = (0, Py.J)(e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var s;
            !e.defaultPrevented && r && i && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(i) === r.current && (o ? o() : null === (s = r.current) || void 0 === s || s.focus(), (0, ng.Cl)("keyboard")), e.preventDefault()
          }),
          l = (0, Py.J)(() => {
            t.commitValidation()
          });
        (0, M.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            n = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            i.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == n || n.call(t), i.current = !1
          }), e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", s), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", s), t && (t.reset = n)
          }
        }, [r, a, l, s, n])
      }

      function sg(e) {
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
      const ag = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        lg = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        cg = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        ug = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        dg = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        fg = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function hg(e) {
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

      function pg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function mg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pg(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = hg(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mg(mg({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vg(e.variantClassNames, e => vg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        bg = gg({
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
        _g = gg({
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
        wg = gg({
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
        Eg = gg({
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
      const xg = (0, M.createContext)(null);

      function Pg() {
        const e = (0, M.useContext)(xg);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Cg = (0, M.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...i
        }, s) => {
          const a = (0, V.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, V.cJ)(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? q.DX : "div",
            c = (0, M.useId)(),
            u = (0, M.useId)(),
            d = (0, M.useId)();
          return (0, _.jsx)(xg.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: u,
              inputId: d,
              ...i
            },
            children: (0, _.jsx)(l, {
              ...a,
              ref: s,
              children: o
            })
          })
        }),
        Sg = (0, M.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: i,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": c,
          "aria-labelledby": u,
          ...d
        }, f) => {
          const {
            size: h,
            appearance: p,
            isIndeterminate: m,
            isRequired: v,
            descriptionId: y,
            labelId: g,
            inputId: b,
            ...w
          } = Pg(), E = (0, M.useRef)(null), x = d.id || b, {
            isPressed: P,
            pressProps: C
          } = xp({
            ref: E
          }), {
            setSelected: S,
            toggle: T,
            ...O
          } = Ny({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: R,
            isSelected: N,
            isDisabled: j,
            isReadOnly: I
          } = function(e, t, r) {
            let n = Jy({
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
                isSelected: c,
                isPressed: u,
                isDisabled: d,
                isReadOnly: f
              } = Oy({
                ...e,
                isInvalid: o
              }, t, r);
            ig(e, n, r);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: m = "aria"
            } = e;
            (0, M.useEffect)(() => {
              r.current && (r.current.indeterminate = !!h)
            });
            let {
              pressProps: v
            } = (0, Sy.d)({
              isDisabled: d || f,
              onPress() {
                let {
                  [Qy]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, Ey.v)(a, v, (0, M.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: c,
                "aria-required": p && "aria" === m || void 0,
                required: p && "native" === m
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
            ...O,
            toggle: T,
            setSelected: w.isReadOnly ? () => !1 : S
          }, E), k = (0, V.v6)({
            className: _g({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || j || I || T()
            }
          }, C, d), L = (0, V.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, V.VW)(u, g),
            "aria-describedby": (0, V.VW)(l, y),
            "aria-errormessage": (0, V.VW)(c, w.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, R), D = m ? a[`Dash${h}`] : a[`Check${h}`];
          return (0, _.jsxs)("div", {
            ...k,
            children: [(0, _.jsx)(q.s6, {
              children: (0, _.jsx)("input", {
                ...L,
                ref: f
              })
            }), (0, _.jsx)("div", {
              className: bg({
                size: h,
                appearance: p
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : N ? "checked" : "unchecked",
              "data-disabled": j || I,
              "data-testid": e,
              "data-pressed": P,
              children: (0, _.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (N || m) && (0, _.jsx)(D, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Tg = (0, M.forwardRef)(({
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
            inputId: c,
            isRequired: u
          } = Pg(), d = i.id || l, f = u && !o, h = (0, V.v6)({
            className: Eg({
              size: a,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: i.htmlFor || c
          }, i), p = t ? q.DX : "label";
          return (0, _.jsx)(q.s6, {
            enabled: n,
            children: (0, _.jsx)(p, {
              ...h,
              ref: s,
              children: e
            })
          })
        }),
        Og = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Pg(), a = n.id || s, l = (0, V.v6)({
            className: wg({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? q.DX : "div";
          return (0, _.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Rg = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = Pg(), s = n.id || i, a = (0, V.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: s
          }, n), l = t ? q.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });

      function Ng(e) {
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

      function jg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ig(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jg(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ng(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function kg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Lg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Dg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ig(Ig({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Lg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kg(e.variantClassNames, e => kg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ag = Dg({
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
        Mg = Dg({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bg = Dg({
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
        Hg = Dg({
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
            isPressed: {
              false: "foundry_vq8c3je",
              true: "foundry_vq8c3jf"
            },
            isInvalid: {
              false: "foundry_vq8c3jg",
              true: "foundry_vq8c3jh"
            },
            isSuccess: {
              true: "foundry_vq8c3ji"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !1,
              isSuccess: !1,
              isReadOnly: !1,
              isInvalid: !1
            }, "foundry_vq8c3jj"],
            [{
              isDisabled: !1,
              isPressed: !0
            }, "foundry_vq8c3jk"],
            [{
              isInvalid: !0,
              isPressed: !0
            }, "foundry_vq8c3jl"]
          ]
        });
      const zg = (0, M.createContext)(null);

      function Vg() {
        const e = (0, M.useContext)(zg);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Fg = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const c = (0, V.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, a),
            u = e ? q.DX : "div",
            d = (0, M.useId)(),
            f = (0, M.useId)(),
            h = (0, M.useId)(),
            p = (0, M.useId)();
          return (0, _.jsx)(zg.Provider, {
            value: {
              labelId: d,
              descriptionId: f,
              hintId: h,
              inputId: p,
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: s,
              ...a
            },
            children: (0, _.jsx)(u, {
              ref: l,
              ...c,
              children: t
            })
          })
        }),
        Ug = (0, M.forwardRef)(({
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
            isDisabled: c,
            isRequired: u
          } = Vg(), d = (0, V.v6)({
            className: Bg({
              isDisabled: c,
              showAsterisk: u && !o
            }),
            "data-testid": r,
            id: a,
            htmlFor: l
          }, i), f = t ? q.DX : "label";
          return (0, _.jsx)(q.s6, {
            enabled: n,
            children: (0, _.jsx)(f, {
              ...d,
              ref: s,
              children: e
            })
          })
        }),
        Gg = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
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
            inputId: h,
            hintId: p,
            isDisabled: m,
            isRequired: v,
            isReadOnly: y,
            status: g
          } = Vg(), b = (0, M.useRef)(null), w = (0, G.UP)(b, u), {
            isPressed: E,
            pressProps: x
          } = xp({}), P = (0, V.v6)({
            className: Hg({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isPressed: E,
              isSuccess: "success" === g
            }),
            name: i,
            id: c.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: s,
            "aria-labelledby": (0, V.VW)(c.id, f, p, a),
            "aria-describedby": (0, V.VW)(d, l),
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
          }, x, c), C = e ? q.DX : "textarea";
          return (0, _.jsx)(C, {
            ref: w,
            ...P,
            children: t
          })
        }),
        qg = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Vg(), a = (0, V.v6)({
            className: Ag({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? q.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Kg = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = Vg(), a = (0, V.v6)({
            className: Mg({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? q.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Xg = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = Vg(), a = (0, V.v6)({
            className: "foundry_vq8c3jm",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? q.DX : Bp;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Wg = Hp,
        Zg = zp;
      let $g = Math.round(1e10 * Math.random()),
        Yg = 0;
      const Qg = new WeakMap;
      var Jg = r(62993),
        eb = r(49652),
        tb = r(42351),
        rb = r(13569);
      class nb {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, rb.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, rb.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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

      function ob(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
      }

      function ib(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? tb.A : tb.t,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = (0, Jg.TW)(o),
          s = function(e, t, r, n) {
            return (0, hp.Nf)() ? new nb(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              if (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) return NodeFilter.FILTER_REJECT;
              if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    let t = [];
                    if (e.form) {
                      var r, n;
                      let o = null === (n = e.form) || void 0 === n || null === (r = n.elements) || void 0 === r ? void 0 : r.namedItem(e.name);
                      t = [...null != o ? o : []]
                    } else t = [...(0, Jg.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                    return !!t && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !ob(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s
      }
      class sb {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new ab({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && ob(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new sb;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new ab({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class ab {
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

      function lb(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, eb.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function cb(e) {
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
          t = (0, eb.Bi)(t);
          let s = (0, eb.Bi)(),
            a = {};
          return r && (n = n ? `${s} ${n}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: lb({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), a = (0, eb.X1)([Boolean(t), Boolean(r), n, o]), l = (0, eb.X1)([Boolean(t), Boolean(r), n, o]);
        return s = (0, Ey.v)(s, {
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
      new sb;
      var ub = r(89839),
        db = r(73581);
      const fb = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        hb = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function pb(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return fb.has(t.script)
        }
        let t = e.split("-")[0];
        return hb.has(t)
      }
      var mb = r(50336);
      const vb = Symbol.for("react-aria.i18n.locale");

      function yb() {
        let e = "undefined" != typeof window && window[vb] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: pb(e) ? "rtl" : "ltr"
        }
      }
      let gb = yb(),
        bb = new Set;

      function _b() {
        gb = yb();
        for (let e of bb) e(gb)
      }
      const wb = M.createContext(null);

      function Eb() {
        let e = function() {
          let e = (0, mb.wR)(),
            [t, r] = (0, M.useState)(gb);
          return (0, M.useEffect)(() => (0 === bb.size && window.addEventListener("languagechange", _b), bb.add(r), () => {
            bb.delete(r), 0 === bb.size && window.removeEventListener("languagechange", _b)
          }), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, M.useContext)(wb) || e
      }

      function xb(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: i,
          isDisabled: s,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = Eb(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = cb({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = (0, xy.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, i = (0, M.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: s,
            removeAllGlobalListeners: a
          } = (0, db.A)(), l = (0, M.useCallback)(e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, a(), r && r(e), o && o(!1))
          }, [r, o, i, a]), c = (0, ub.yB)(l), u = (0, M.useCallback)(e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = (0, Jg.TW)(e.target),
              r = (0, rb.bq)(t);
            if (!i.current.isFocusWithin && r === (0, rb.wt)(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let r = e.currentTarget;
              s(t, "focus", e => {
                if (i.current.isFocusWithin && !(0, rb.sD)(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  (0, ub.o1)(n, r);
                  let o = (0, ub.eg)(n);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, c, s, l]);
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
            var n;
            null === (n = e.onBlur) || void 0 === n || n.call(e, r), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = (0, eb.Bi)(r);
        return Qg.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: (0, Ey.v)(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === c && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === c && "vertical" !== a ? "next" : "prev";
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
              let n, o = ib(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof(0, Jg.mD)(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": i || void 0,
            "aria-disabled": s || void 0,
            "aria-orientation": a,
            ...p,
            ...g
          }),
          labelProps: h,
          descriptionProps: m,
          errorMessageProps: v,
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        }
      }

      function Pb(e) {
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

      function Cb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Sb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cb(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Pb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cb(Object(r)).forEach(function(t) {
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
      var Ob = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Sb(Sb({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ob(c, n, e.defaultVariants) && (r += " " + u);
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
        Nb = Rb({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jb = Rb({
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
      const Ib = (0, M.createContext)(null);

      function kb() {
        const e = (0, M.useContext)(Ib);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Lb = (0, M.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: i,
          "aria-labelledby": s,
          "aria-describedby": a,
          "aria-errormessage": l,
          status: c = "neutral",
          ...u
        }, d) => {
          const f = (0, M.useRef)(null),
            h = (0, G.UP)(f, d),
            p = (0, M.useId)(),
            m = (0, M.useId)(),
            v = (0, M.useId)(),
            y = function(e) {
              let t = (0, M.useMemo)(() => e.name || `radio-group-${$g}-${++Yg}`, [e.name]);
              var r;
              let [n, o] = Ry(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i] = (0, M.useState)(n), [s, a] = (0, M.useState)(null), l = Jy({
                ...e,
                value: n
              }), c = l.displayValidation.isInvalid;
              var u;
              return {
                ...l,
                name: t,
                selectedValue: n,
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
            } = xb({
              ...u,
              orientation: r,
              "aria-labelledby": (0, V.VW)(p, s),
              "aria-describedby": (0, V.VW)(m, v, a),
              "aria-errormessage": (0, V.VW)(v, l)
            }, y),
            b = (0, V.v6)({
              className: "foundry_njguqn0"
            }, g, (0, V.cJ)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = i ? q.DX : "div";
          return (0, _.jsx)(Ib.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: p,
              errorId: v,
              status: c,
              ...u
            },
            children: (0, _.jsx)(w, {
              ref: h,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        Db = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: s
          } = kb(), a = (0, V.v6)({
            "data-testid": e,
            className: jb({
              size: i,
              orientation: s
            })
          }, n), l = t ? q.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: r
          })
        }),
        Ab = (0, M.forwardRef)(({
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
          } = kb(), c = a && !o, u = (0, V.v6)({
            id: i.id || l,
            "data-testid": e,
            className: Nb({
              showAsterisk: c
            })
          }, i), d = t ? q.DX : "div";
          return (0, _.jsx)(q.s6, {
            enabled: n,
            children: (0, _.jsx)(d, {
              ...u,
              ref: s,
              children: r
            })
          })
        }),
        Mb = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = kb(), s = (0, V.v6)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), a = t ? q.DX : "div";
          return (0, _.jsx)(a, {
            ...s,
            ref: o,
            children: r
          })
        }),
        Bb = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: s
          } = kb(), a = (0, V.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: s
          }, n), l = r ? q.DX : Bp;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Hb = Hp,
        zb = zp;
      var Vb = Rb({
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
        Fb = Rb({
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
        Ub = Rb({
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
        Gb = Rb({
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
      const qb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, _.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Kb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, _.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Xb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, _.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        Wb = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? q.DX : "label";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        Zb = (0, M.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, M.useRef)(null),
            i = (0, G.UP)(o, n),
            s = (0, M.useId)(),
            {
              state: a,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = kb(),
            {
              isPressed: h,
              pressProps: p
            } = xp({}),
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
                onPressChange: c,
                onPress: u,
                onPressUp: d,
                onClick: f
              } = e;
              const h = e.isDisabled || t.isDisabled;
              let p = t.selectedValue === n,
                {
                  pressProps: m,
                  isPressed: v
                } = (0, Sy.d)({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: c,
                  onPress: u,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: h
                }),
                {
                  pressProps: y,
                  isPressed: g
                } = (0, Sy.d)({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: c,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: h,
                  onPress(e) {
                    var o;
                    null == u || u(e), t.setSelectedValue(n), null === (o = r.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = (0, Ty.Wc)((0, Ey.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                _ = (0, Ey.v)(m, b),
                w = (0, xy.$)(e, {
                  labelable: !0
                }),
                E = -1;
              null != t.selectedValue ? t.selectedValue === n && (E = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (E = 0), h && (E = void 0);
              let {
                name: x,
                form: P,
                descriptionId: C,
                errorMessageId: S,
                validationBehavior: T
              } = Qg.get(t);
              return Cy(r, t.defaultSelectedValue, t.setSelectedValue), ig({
                validationBehavior: T
              }, t, r), {
                labelProps: (0, Ey.v)(y, (0, M.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, Ey.v)(w, {
                  ..._,
                  type: "radio",
                  name: x,
                  form: P,
                  tabIndex: E,
                  disabled: h,
                  required: t.isRequired && "native" === T,
                  checked: p,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? S : null, C].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: h,
                isSelected: p,
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
            g = (0, V.v6)(m, {
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
            b = u[`Dot${c}`];
          return (0, _.jsxs)("div", {
            className: Gb({
              size: c
            }),
            children: [(0, _.jsx)(q.s6, {
              children: (0, _.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, _.jsx)("div", {
              className: Ub({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": h,
              ...p,
              children: (0, _.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, _.jsx)(b, {})
              })
            })]
          })
        }),
        $b = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: s,
            state: a
          } = kb(), l = (0, M.useId)(), c = (0, V.v6)({
            id: l,
            "data-testid": e,
            className: Fb({
              size: s,
              isDisabled: a?.isDisabled
            })
          }, o), u = t ? q.DX : "div";
          return (0, _.jsx)(q.s6, {
            enabled: n,
            children: (0, _.jsx)(u, {
              ...c,
              ref: i,
              children: r
            })
          })
        }),
        Yb = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = kb(), s = (0, V.v6)({
            "data-testid": e,
            className: Vb({
              isDisabled: i
            })
          }, n), a = t ? q.DX : "span";
          return (0, _.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        });

      function Qb(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Jb(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Qb(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qb(e, t) : void 0
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

      function e_(e, t, r) {
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

      function t_(e) {
        return t_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, t_(e)
      }

      function r_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (r_ = function() {
          return !!e
        })()
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
            e_(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function i_(e, t) {
        return i_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, i_(e, t)
      }

      function s_(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          s = n,
          a = "",
          l = Jb(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var c, u = r.value,
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

      function a_(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          s = t.showMask,
          a = 0,
          l = "",
          c = Jb(n);
        try {
          for (c.s(); !(r = c.n()).done;) {
            var u = r.value;
            if (!s && void 0 === e[a]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[a] ? l += e[a++] : l += u
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (i && !s) {
          for (var d = n.length - 1; d >= 0 && l[d] === n[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function l_(e, t) {
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

      function c_(e) {
        return e.length > 0 ? e_({}, e, /./) : {}
      }

      function u_(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(n, o), c = i.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && a && (u += c[d])
        }
        return u
      }

      function d_(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? c_(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return a_(s_(e, {
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
      var f_ = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function h_(e) {
        return f_.includes(e) ? "\\".concat(e) : e
      }

      function p_(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function m_(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function v_(e, t, r) {
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

      function y_(e) {
        return y_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, y_(e)
      }

      function g_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (g_ = function() {
          return !!e
        })()
      }

      function b_(e, t) {
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
          t % 2 ? b_(Object(r), !0).forEach(function(t) {
            v_(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function w_(e, t) {
        return w_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, w_(e, t)
      }

      function E_(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return E_ = function(e) {
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
              if (g_()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && w_(o, r.prototype), o
            }(e, arguments, y_(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), w_(r, e)
        }, E_(e)
      }
      var x_, P_ = function(e) {
          function t(e) {
            var r;
            return p_(this, t), (r = function(e, t, r) {
              return t = y_(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, g_() ? Reflect.construct(t, r || [], y_(e).constructor) : t.apply(e, r))
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
            }), t && w_(e, t)
          }(t, e), m_(t)
        }(E_(Error)),
        C_ = ["options"],
        S_ = ["text", "email", "tel", "search", "url"],
        T_ = m_(function e(t) {
          var r = t.init,
            n = t.tracking;
          p_(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (S_.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = i.initialValue,
                a = void 0 === s ? "" : s,
                l = i.controlled,
                c = void 0 !== l && l,
                u = r({
                  initialValue: e.value || a,
                  controlled: c
                }),
                d = u.value,
                f = u.options,
                h = {
                  value: d,
                  options: f,
                  fallbackOptions: f
                },
                p = {
                  id: -1,
                  cachedId: -1
                },
                m = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                v = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", __(__({}, v), {}, {
                set: function(t) {
                  var r;
                  m.value = t, null == v || null === (r = v.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = d;
              var y = function() {
                  var t = function() {
                    var r, n;
                    m.selectionStart = null !== (r = e.selectionStart) && void 0 !== r ? r : 0, m.selectionEnd = null !== (n = e.selectionEnd) && void 0 !== n ? n : 0, p.id = window.setTimeout(t)
                  };
                  p.id = window.setTimeout(t)
                },
                g = function() {
                  window.clearTimeout(p.id), p.id = -1, p.cachedId = -1
                },
                b = function(t) {
                  try {
                    var r, o;
                    if (p.cachedId === p.id) throw new P_("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new P_("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new P_("Input type detection error.");
                    var u = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) u = i.slice(m.selectionStart, s);
                    else {
                      var v = c.length - i.length;
                      d = s, f = s + v
                    }
                    h.value !== c ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var y = h.options,
                      g = n({
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
                      }(g, C_);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), h.value = _.value, h.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, c)
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
      x_ = T_, Object.defineProperty(x_.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var O_, R_ = ["track", "modify"];

      function N_(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? c_(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var j_ = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = t_(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, r_() ? Reflect.construct(t, r || [], t_(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = N_(r),
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
                l = N_(r),
                c = l.track,
                u = l.modify,
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
                }(l, R_),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = o_(o_({}, "insert" === t ? {
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
                y = null == c ? void 0 : c(v);
              if (!1 === y) throw new P_("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? c_(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = u_(n, o_({
                  end: s
                }, o)),
                _ = u_(n, o_({
                  start: a
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(w, "");
              if (b && (b = s_(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: m
                }), E = E.slice(b.length)), i && (i = s_(i, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(i.length)), "insert" === t && "" === i) throw new P_("The character does not match the key value of the `replacement` object.");
              if (m) {
                var x = f.slice(s, a).replace(w, ""),
                  P = x.length - i.length;
                P < 0 ? _ = _.slice(-P) : P > 0 && (_ = x.slice(-P) + _)
              }
              _ && (_ = s_(_, {
                replacementChars: E,
                replacement: h,
                separate: m
              }));
              var C = a_(b + i + _, {
                  mask: f,
                  replacement: h,
                  separate: m,
                  showMask: p
                }),
                S = function(e) {
                  var t, r, n, o = e.inputType,
                    i = e.value,
                    s = e.addedValue,
                    a = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = l_(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    }),
                    d = null === (t = u[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = u[a.length - 1]) || void 0 === r ? void 0 : r.index,
                    h = null === (n = u[a.length + s.length]) || void 0 === n ? void 0 : n.index;
                  if ("insert" === o) {
                    if (void 0 !== d) return d + 1;
                    if (void 0 !== h) return h;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteForward" === o) {
                    if (void 0 !== h) return h;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteBackward" === o) {
                    if (void 0 !== f) return f + 1;
                    if (void 0 !== h) return h
                  }
                  var p = i.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  });
                  return -1 !== p ? p : i.length
                }({
                  inputType: t,
                  value: C,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: m
                });
              return {
                value: C,
                selectionStart: S,
                selectionEnd: S,
                options: {
                  mask: f,
                  replacement: h,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return d_(e, N_(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? c_(n) : n;
              return l_(d_(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, N_(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? c_(n) : n,
                i = u_(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return s_(i, {
                replacementChars: r.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, N_(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? c_(n) : n, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(s ? "(?!".concat(h_(c), ")") : "", "(").concat(o[c].source, ")") : h_(c), l === r.length - 1 && (i && (a += ")?".repeat(r.length)), a += "$")
              }
              return a
            }(e, N_(r))
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
            }), t && i_(e, t)
          }(e, T_),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function I_(e) {
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

      function k_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function L_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? k_(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = I_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function D_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      O_ = j_, Object.defineProperty(O_.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var A_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        M_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = L_(L_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) A_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return D_(e.variantClassNames, e => D_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        B_ = M_({
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
            },
            isPressed: {
              false: "foundry_8oytzok",
              true: "foundry_8oytzol"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isPressed: !0,
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1
            }, "foundry_8oytzom"],
            [{
              isPressed: !0,
              isInvalid: !0,
              isDisabled: !1
            }, "foundry_8oytzon"],
            [{
              isPressed: !1,
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1,
              isReadOnly: !1
            }, "foundry_8oytzoo"],
            [{
              isPressed: !1,
              isDisabled: !1
            }, "foundry_8oytzop"]
          ]
        }),
        H_ = M_({
          defaultClassName: "foundry_8oytzo13 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo14",
              true: "foundry_8oytzo15"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        z_ = M_({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        V_ = M_({
          defaultClassName: "foundry_8oytzov",
          variantClassNames: {
            side: {
              left: "foundry_8oytzow",
              right: "foundry_8oytzox"
            },
            isDisabled: {
              false: "foundry_8oytzoy",
              true: "foundry_8oytzoz"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        F_ = M_({
          defaultClassName: "foundry_8oytzoq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzor",
              true: "foundry_8oytzos"
            },
            isReadOnly: {
              false: "foundry_8oytzot",
              true: "foundry_8oytzou"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        U_ = M_({
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
      const G_ = (0, M.createContext)(null);

      function q_() {
        const e = (0, M.useContext)(G_);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const K_ = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const [c, u] = (0, M.useState)("text"), d = (0, M.useId)(), f = (0, M.useId)(), h = (0, M.useId)(), {
            isPressed: p,
            pressProps: m
          } = xp({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), v = {
            ...m,
            onKeyDown: () => {}
          }, y = (0, V.v6)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, a), g = e ? q.DX : "div";
          return (0, _.jsx)(G_.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: s,
              labelId: d,
              inputId: f,
              descriptionId: h,
              isPressed: p,
              pressProps: v,
              type: c,
              setType: u,
              ...a
            },
            children: (0, _.jsx)(g, {
              ref: l,
              ...y,
              children: t
            })
          })
        }),
        X_ = (0, M.forwardRef)(({
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
            inputId: c,
            labelId: u
          } = q_(), d = l && !o, f = (0, V.v6)({
            id: i.id || u,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: U_({
              showAsterisk: d,
              isDisabled: a
            })
          }, i), h = t ? q.DX : "label";
          return (0, _.jsx)(q.s6, {
            enabled: n,
            children: (0, _.jsx)(h, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        W_ = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = q_(), s = (0, V.v6)({
            "data-testid": e,
            className: z_({
              isDisabled: i
            })
          }, n), a = t ? q.DX : "span";
          return (0, _.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        }),
        Z_ = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: s,
            isPressed: a,
            pressProps: l,
            status: c
          } = q_(), u = (0, V.v6)({
            "data-testid": e,
            "data-pressed": a,
            className: (0, pe.clsx)(B_({
              isDisabled: i,
              isReadOnly: s,
              isInvalid: "invalid" === c,
              isPressed: a,
              isSuccess: "success" === c
            }), "foundry_8oytzo1")
          }, l, n), d = t ? q.DX : "div";
          return (0, _.jsx)(d, {
            ref: o,
            ...u,
            children: r
          })
        }),
        $_ = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
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
            isReadOnly: h,
            isRequired: p,
            status: m,
            labelId: v,
            inputId: y,
            descriptionId: g,
            setType: b,
            type: w
          } = q_();
          (0, M.useEffect)(() => b(c), []);
          const E = "invalid" === m,
            x = (0, V.v6)({
              disabled: f,
              readOnly: h,
              required: p,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, V.VW)(v, a),
              "aria-describedby": (0, V.VW)(g, l),
              "data-testid": e,
              className: (0, pe.clsx)(F_({
                isDisabled: f,
                isReadOnly: h
              }), "foundry_8oytzo2"),
              ...E && {
                "aria-invalid": !0,
                "aria-errormessage": g
              },
              ..."success" === m && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...p && {
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
                a = (0, M.useRef)(null),
                l = (0, M.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: i,
                  modify: s
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = i, l.current.modify = s, (0, M.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(a, new j_(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: i
            }),
            C = (0, G.UP)(r && n ? P : null, d),
            S = t ? q.DX : "input";
          return (0, _.jsx)(S, {
            ref: C,
            ...x
          })
        }),
        Y_ = (0, M.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: s
          } = q_(), a = (0, V.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, pe.clsx)(V_({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? q.DX : me[e];
          return (0, _.jsx)(l, {
            ref: i,
            ...a
          })
        }),
        Q_ = (0, M.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = q_(), n = (0, V.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzo10"
          }, e);
          return (0, _.jsx)(Ae, {
            ref: t,
            ...n
          })
        }),
        J_ = (0, M.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i
          } = q_(), s = "password" === o, a = s ? e : t, l = (0, V.v6)({
            label: a,
            icon: s ? "Eye" : "EyeOff",
            onPress: () => {
              i(s ? "text" : "password")
            }
          }, r);
          return (0, _.jsxs)(bf, {
            children: [(0, _.jsx)(_f, {
              children: (0, _.jsx)(Q_, {
                ref: n,
                ...l
              })
            }), (0, _.jsxs)(wf, {
              side: "bottom",
              align: "end",
              children: [a, (0, _.jsx)(Ef, {})]
            })]
          })
        }),
        ew = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = q_(), a = (0, V.v6)({
            className: H_({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? q.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        tw = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = q_(), a = (0, V.v6)({
            className: "foundry_8oytzo16",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? q.DX : Bp;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        rw = Hp,
        nw = zp;
      var ow = r(36566);

      function iw(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ...l
        } = e, c = {};
        "a" !== r && (c = {
          role: "link",
          tabIndex: a ? void 0 : 0
        });
        let {
          focusableProps: u
        } = (0, Ty.Wc)(e, t), {
          pressProps: d,
          isPressed: f
        } = (0, Sy.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ref: t
        }), h = (0, xy.$)(l, {
          labelable: !0
        }), p = (0, Ey.v)(u, d), m = (0, ow.rd)(), v = (0, ow._h)(e);
        return {
          isPressed: f,
          linkProps: (0, Ey.v)(h, v, {
            ...p,
            ...c,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), (0, ow.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function sw(e) {
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

      function aw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? aw(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = sw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lw(lw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) uw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cw(e.variantClassNames, e => cw(e, e => e.split(" ")[0]))
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
      const fw = (0, M.forwardRef)(({
        children: e,
        ...t
      }, r) => {
        const n = ee(),
          o = "string" == typeof t.size ? t.size : t.size?.[n] ?? "LG",
          i = (0, V.v6)({
            className: dw({
              size: o
            })
          }, t);
        return (0, _.jsx)(Ae, {
          appearance: "ghost",
          icon: "X",
          ...i,
          ref: r,
          children: e
        })
      });

      function hw(e) {
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

      function mw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pw(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = hw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mw(mw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vw(e.variantClassNames, e => vw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        bw = gw({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _w = gw({
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
        ww = gw({
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
      const Ew = (0, M.createContext)(null);

      function xw() {
        const e = (0, M.useContext)(Ew);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Pw = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const s = e ? q.DX : "div",
            a = (0, V.v6)({
              className: ww({
                status: r,
                background: n
              })
            }, o);
          return (0, _.jsx)(Ew.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, _.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a
            })
          })
        }),
        Cw = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? q.DX : "div",
            i = (0, V.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Sw = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? q.DX : "div",
            i = (0, V.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Tw = {
          danger: me.CircleX,
          information: me.Info,
          success: me.CircleCheck,
          warning: me.TriangleAlert
        },
        Ow = (0, M.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = xw(), i = e ? q.DX : Tw[o], s = (0, V.v6)({
            className: _w({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, _.jsx)(i, {
            label: "",
            ref: n,
            ...s
          })
        }),
        Rw = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? q.DX : "div",
            i = (0, V.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Nw = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? q.DX : "div",
            i = (0, V.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        jw = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, M.useRef)(null),
            s = (0, G.UP)(i, o),
            a = e ? q.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = iw(n, i),
            u = (0, V.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, _.jsx)(a, {
            "data-pressed": c,
            "data-testid": r,
            ref: s,
            ...u,
            children: t
          })
        }),
        Iw = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? q.DX : "div",
            s = (0, V.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        kw = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? q.DX : "div";
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, pe.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        Lw = (0, M.forwardRef)((e, t) => {
          const {
            background: r
          } = xw(), n = "none" !== r, o = (0, V.v6)({
            className: bw({
              hasBackground: n
            })
          }, e);
          return (0, _.jsx)(fw, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function Dw(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Aw(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Dw(n) && Dw(o) ? Aw(n, o) : n === o
        }))
      }

      function Mw(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function Bw(e) {
        return "number" == typeof e
      }

      function Hw(e) {
        return "string" == typeof e
      }

      function zw(e) {
        return "boolean" == typeof e
      }

      function Vw(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Fw(e) {
        return Math.abs(e)
      }

      function Uw(e) {
        return Math.sign(e)
      }

      function Gw(e, t) {
        return Fw(e - t)
      }

      function qw(e) {
        return $w(e).map(Number)
      }

      function Kw(e) {
        return e[Xw(e)]
      }

      function Xw(e) {
        return Math.max(0, e.length - 1)
      }

      function Ww(e, t) {
        return t === Xw(e)
      }

      function Zw(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function $w(e) {
        return Object.keys(e)
      }

      function Yw(e, t) {
        return [e, t].reduce((e, t) => ($w(t).forEach(r => {
          const n = e[r],
            o = t[r],
            i = Vw(n) && Vw(o);
          e[r] = i ? Yw(n, o) : o
        }), e), {})
      }

      function Qw(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function Jw() {
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

      function eE(e = 0, t = 0) {
        const r = Fw(e - t);

        function n(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function i(e) {
          return n(e) || o(e)
        }
        return {
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
        }
      }

      function tE(e, t, r) {
        const {
          constrain: n
        } = eE(0, e), o = e + 1;
        let i = s(t);

        function s(e) {
          return r ? Fw((o + e) % o) : n(e)
        }

        function a() {
          return i
        }

        function l() {
          return tE(e, a(), r)
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

      function rE(e, t, r, n, o, i, s, a, l, c, u, d, f, h, p, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], E = {
          passive: !1
        }, x = Jw(), P = Jw(), C = eE(50, 225).constrain(h.measure(20)), S = {
          mouse: 300,
          touch: 400
        }, T = {
          mouse: 500,
          touch: 600
        }, O = p ? 43 : 25;
        let R = !1,
          N = 0,
          j = 0,
          I = !1,
          k = !1,
          L = !1,
          D = !1;

        function A(e) {
          if (!Qw(e, n) && e.touches.length >= 2) return M(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            s = Gw(t, N),
            l = Gw(r, j);
          if (!k && !D) {
            if (!e.cancelable) return M(e);
            if (k = s > l, !k) return M(e)
          }
          const u = i.pointerMove(e);
          s > m && (L = !0), c.useFriction(.3).useDuration(.75), a.start(), o.add(_(u)), e.preventDefault()
        }

        function M(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            r = i.pointerUp(e) * (p ? T : S)[D ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * Uw(e)),
                n = u.byDistance(e, !p).distance;
              return p || Fw(e) < C ? n : v && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Fw(e) <= Fw(t)) return 0;
              const r = Gw(Fw(e), Fw(t));
              return Fw(r / e)
            }(r, n),
            s = O - 10 * o,
            a = y + o / 50;
          k = !1, I = !1, P.clear(), c.useDuration(s).useFriction(a), l.distance(n, !p), D = !1, f.emit("pointerUp")
        }

        function B(e) {
          L && (e.stopPropagation(), e.preventDefault(), L = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function a(a) {
              (zw(g) || g(e, a)) && function(e) {
                const a = Qw(e, n);
                D = a, L = p && a && !e.buttons && R, R = Gw(o.get(), s.get()) >= 2, a && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (I = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(s), function() {
                  const e = D ? r : t;
                  P.add(e, "touchmove", A, E).add(e, "touchend", M).add(e, "mousemove", A, E).add(e, "mouseup", M)
                }(), N = i.readPoint(e), j = i.readPoint(e, b), f.emit("pointerDown"))
              }(a)
            }
            const l = t;
            x.add(l, "dragstart", e => e.preventDefault(), E).add(l, "touchmove", () => {}, E).add(l, "touchend", () => {}).add(l, "touchstart", a).add(l, "mousedown", a).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", B, !0)
          },
          destroy: function() {
            x.clear(), P.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function nE(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (Qw(r, t) ? r : r.touches[0])[o]
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
            return s && !a && Fw(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function oE(e, t, r, n, o, i, s) {
        const a = [e].concat(n);
        let l, c, u = [],
          d = !1;

        function f(e) {
          return o.measureSize(s.measure(e))
        }
        return {
          init: function(o) {
            i && (c = f(e), u = n.map(f), l = new ResizeObserver(r => {
              (zw(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (d) return;
                  const r = i.target === e,
                    s = n.indexOf(i.target),
                    a = r ? c : u[s];
                  if (Fw(f(r ? e : n[s]) - a) >= .5) {
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

      function iE(e, t, r, n, o) {
        const i = o.measure(10),
          s = o.measure(50),
          a = eE(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = Fw(e[l] - t.get()),
              d = r.get() - t.get(),
              f = a.constrain(u / s);
            r.subtract(d * f), !o && Fw(d) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function sE(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: s,
            reachedMax: a
          } = eE(o, i),
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

      function aE(e) {
        let t = e;

        function r(e) {
          return Bw(e) ? e : e.get()
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

      function lE(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          n = t.style;
        let o = null,
          i = !1;
        const s = {
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
        };
        return s
      }

      function cE(e, t, r, n, o, i, s, a, l) {
        const c = qw(o),
          u = qw(o).reverse(),
          d = function() {
            const e = s[0];
            return p(h(u, e), r, !1)
          }().concat(function() {
            const e = t - s[0] - 1;
            return p(h(c, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function h(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function p(o, s, c) {
          const u = function(e) {
            return i.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(s);
          return o.map(t => {
            const n = c ? 0 : -r,
              o = c ? r : 0,
              i = c ? "end" : "start",
              s = u[t][i];
            return {
              index: t,
              loopPoint: s,
              slideLocation: aE(-1),
              translate: lE(e, l[t]),
              target: () => a.get() > s ? n : o
            }
          })
        }
        const m = {
          canLoop: function() {
            return d.every(({
              index: e
            }) => {
              const r = c.filter(t => t !== e);
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

      function uE(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver(e => {
              o || (zw(r) || r(i, e)) && function(e) {
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

      function dE(e, t, r, n, o, i, s) {
        const {
          align: a,
          axis: l,
          direction: c,
          startIndex: u,
          loop: d,
          duration: f,
          dragFree: h,
          dragThreshold: p,
          inViewThreshold: m,
          slidesToScroll: v,
          skipSnaps: y,
          containScroll: g,
          watchResize: b,
          watchSlides: _,
          watchDrag: w,
          watchFocus: E
        } = i, x = {
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
        }, P = x.measure(t), C = r.map(x.measure), S = function(e, t) {
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
        }(l, c), T = S.measureSize(P), O = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(T), R = function(e, t) {
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
              return Hw(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(a, T), N = !d && !!g, j = d || !!g, {
          slideSizes: I,
          slideSizesWithGaps: k,
          startGap: L,
          endGap: D
        } = function(e, t, r, n, o, i) {
          const {
            measureSize: s,
            startEdge: a,
            endEdge: l
          } = e, c = r[0] && o, u = function() {
            if (!c) return 0;
            const e = r[0];
            return Fw(t[a] - e[a])
          }(), d = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(Kw(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(s), h = r.map((e, t, r) => {
            const n = !t,
              o = Ww(r, t);
            return n ? f[t] + u : o ? f[t] + d : r[t + 1][a] - e[a]
          }).map(Fw);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: u,
            endGap: d
          }
        }(S, P, C, r, j, o), A = function(e, t, r, n, o, i, s, a, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, f = Bw(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return qw(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? qw(e).reduce((r, f, h) => {
                  const p = Kw(r) || 0,
                    m = 0 === p,
                    v = f === Xw(e),
                    y = o[c] - i[p][c],
                    g = o[c] - i[f][u],
                    b = !n && m ? d(s) : 0,
                    _ = Fw(g - (!n && v ? d(a) : 0) - (y + b));
                  return h && _ > t + l && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return h
        }(S, T, v, d, P, C, L, D, 2), {
          snaps: M,
          snapsAligned: B
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: s
          } = e, {
            groupSlides: a
          } = o, l = a(n).map(e => Kw(e)[s] - e[0][i]).map(Fw).map(t.measure), c = n.map(e => r[i] - e[i]).map(e => -Fw(e)), u = a(c).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: c,
            snapsAligned: u
          }
        }(S, R, P, C, A), H = -Kw(M) + Kw(k), {
          snapsContained: z,
          scrollContainLimit: V
        } = function(e, t, r, n) {
          const o = eE(-t + e, 0),
            i = r.map((e, t) => {
              const {
                min: n,
                max: i
              } = o, s = o.constrain(e), l = !t, c = Ww(r, t);
              return l ? i : c || a(n, s) ? n : a(i, s) ? i : s
            }).map(e => parseFloat(e.toFixed(3))),
            s = function() {
              const e = i[0],
                t = Kw(i);
              return eE(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function a(e, t) {
            return Gw(e, t) <= 1
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
        }(T, H, B, g), F = N ? z : B, {
          limit: U
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: eE(r ? n - e : Kw(t), n)
          }
        }(H, F, d), G = tE(Xw(F), u, d), q = G.clone(), K = qw(r), X = function(e, t, r, n) {
          const o = Jw(),
            i = 1e3 / 60;
          let s = null,
            a = 0,
            l = 0;

          function c(e) {
            if (!l) return;
            s || (s = e, r(), r());
            const o = e - s;
            for (s = e, a += o; a >= i;) r(), a -= i;
            n(a / i), l && (l = t.requestAnimationFrame(c))
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
          eventHandler: c,
          scrollBounds: u,
          options: {
            loop: d
          }
        }, f) => {
          const h = e.settled(),
            p = !u.shouldConstrain(),
            m = d ? h : h && p,
            v = m && !a.pointerDown();
          v && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), d && (i.loop(e.direction()), s.loop()), t.to(n.get()), v && c.emit("settle"), m || c.emit("scroll")
        })(ae, e)), W = F[G.get()], Z = aE(W), $ = aE(W), Y = aE(W), Q = aE(W), J = function(e, t, r, n, o) {
          let i = 0,
            s = 0,
            a = o,
            l = .68,
            c = e.get(),
            u = 0;

          function d(e) {
            return a = e, h
          }

          function f(e) {
            return l = e, h
          }
          const h = {
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
              return a ? (r.set(e), i += t / a, i *= l, c += i, e.add(i), o = c - u) : (i = 0, r.set(n), e.set(n), o = t), s = Uw(o), u = c, h
            },
            settled: function() {
              return Fw(n.get() - t.get()) < .001
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
          return h
        }(Z, Y, $, Q, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: i,
            removeOffset: s,
            constrain: a
          } = n;

          function l(e) {
            return e.concat().sort((e, t) => Fw(e) - Fw(t))[0]
          }

          function c(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter(e => Uw(e) === n);
            return i.length ? l(i) : Kw(o) - r
          }
          const u = {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: u,
                  distance: d
                } = function(r) {
                  const n = e ? s(r) : a(r),
                    o = t.map((e, t) => ({
                      diff: c(e - n, 0),
                      index: t
                    })).sort((e, t) => Fw(e.diff) - Fw(t.diff)),
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
                distance: r + c(t[u] - d, 0)
              }
            },
            byIndex: function(e, r) {
              return {
                index: e,
                distance: c(t[e] - o.get(), r)
              }
            },
            shortcut: c
          };
          return u
        }(d, F, H, U, Q), te = function(e, t, r, n, o, i, s) {
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
        }(X, G, q, J, ee, Q, s), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(U), ne = Jw(), oe = function(e, t, r, n) {
          const o = {};
          let i, s = null,
            a = null,
            l = !1;
          const c = {
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
                return $w(o).reduce((t, r) => {
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
          return c
        }(t, r, s, m), {
          slideRegistry: ie
        } = function(e, t, r, n, o, i) {
          const {
            groupSlides: s
          } = o, {
            min: a,
            max: l
          } = n, c = function() {
            const n = s(i),
              o = !e || "keepSnaps" === t;
            return 1 === r.length ? [i] : o ? n : n.slice(a, l).map((e, t, r) => {
              const n = !t,
                o = Ww(r, t);
              return n ? Zw(Kw(r[0]) + 1) : o ? Zw(Xw(i) - Kw(r)[0] + 1, Kw(r)[0]) : e
            })
          }();
          return {
            slideRegistry: c
          }
        }(N, g, F, V, A, K), se = function(e, t, r, n, o, i, s, a) {
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
                  (zw(a) || a(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    s.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex(e => e.includes(t));
                    Bw(i) && (o.useDuration(0), n.index(i, 0), s.emit("slideFocus"))
                  }(u)
                }, l)
              }))
            }
          };
          return d
        }(e, r, ie, te, J, ne, s, E), ae = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: s,
          containerRect: P,
          slideRects: C,
          animation: X,
          axis: S,
          dragHandler: rE(S, e, n, o, Q, nE(S, o), Z, X, te, J, ee, G, s, O, h, p, y, .68, w),
          eventStore: ne,
          percentOfView: O,
          index: G,
          indexPrevious: q,
          limit: U,
          location: Z,
          offsetLocation: Y,
          previousLocation: $,
          options: i,
          resizeHandler: oE(t, s, o, r, S, b, x),
          scrollBody: J,
          scrollBounds: iE(U, Y, Q, J, O),
          scrollLooper: sE(H, U, Y, [Z, Y, $, Q]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: cE(S, T, H, I, k, M, F, Y, r),
          slideFocus: se,
          slidesHandler: uE(t, s, _),
          slidesInView: oe,
          slideIndexes: K,
          slideRegistry: ie,
          slidesToScroll: A,
          target: Q,
          translate: lE(S, t)
        };
        return ae
      }
      const fE = {
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

      function hE(e) {
        function t(e, t) {
          return Yw(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = $w(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => $w(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function pE(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = hE(o),
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
          a = Jw(),
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
            mergeOptions: c,
            optionsAtMedia: u,
            optionsMediaQueries: d
          } = i,
          {
            on: f,
            off: h,
            emit: p
          } = l,
          m = S;
        let v, y, g, b, _ = !1,
          w = c(fE, pE.globalOptions),
          E = c(w),
          x = [];

        function P(t) {
          const r = dE(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? P(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function C(t, r) {
          _ || (w = c(w, t), E = u(w), x = r || x, function() {
            const {
              container: t,
              slides: r
            } = E, n = Hw(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = Hw(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = P(E), d([w, ...x.map(({
            options: e
          }) => e)]).forEach(e => a.add(e, "change", S)), E.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(N), v.eventHandler.init(N), v.resizeHandler.init(N), v.slidesHandler.init(N), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(N), y = s.init(N, x)))
        }

        function S(e, t) {
          const r = R();
          T(), C(c({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function T() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), s.destroy(), a.clear()
        }

        function O(e, t, r) {
          E.active && !_ && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : E.duration), v.scrollTo.index(e, r || 0))
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
            _ || (_ = !0, a.clear(), T(), l.emit("destroy"), l.clear())
          },
          off: h,
          on: f,
          emit: p,
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
            O(v.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            O(v.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return v.scrollProgress.get(v.offsetLocation.get())
          },
          scrollSnapList: function() {
            return v.scrollSnapList
          },
          scrollTo: O,
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
        return C(t, r), setTimeout(() => l.emit("init"), 0), N
      }

      function mE(e = {}, t = []) {
        const r = (0, M.useRef)(e),
          n = (0, M.useRef)(t),
          [o, i] = (0, M.useState)(),
          [s, a] = (0, M.useState)(),
          l = (0, M.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, M.useEffect)(() => {
          Aw(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, M.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = Mw(e),
              n = Mw(t);
            return r.every((e, t) => Aw(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, M.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && s) {
            pE.globalOptions = mE.globalOptions;
            const e = pE(s, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }, [s, i]), [a, o]
      }

      function vE(e = {}) {
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
      pE.globalOptions = void 0, mE.globalOptions = void 0, vE.globalOptions = void 0;
      const yE = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function gE(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function bE(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function _E(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function wE(e = {}) {
        let t, r, n, o, i = [],
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
          ("pointerDown" === t ? _E : bE)(n, u.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return n.forEach(e => bE(e, r)), i.forEach(e => _E(e, r)), e
        }

        function h() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          i = f(t, i, u.snapped)
        }

        function p() {
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
            } = s, v = f(yE, wE.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (u.loop = gE(t.loop), _E(n, u.loop)), t.draggable && _ && (u.draggable = gE(t.draggable), _E(n, u.draggable)), t.dragging && (u.dragging = gE(t.dragging), l.forEach(e => r.on(e, d))), t.snapped && (u.snapped = gE(t.snapped), a.forEach(e => r.on(e, h)), h()), t.inView && (u.inView = gE(t.inView), c.forEach(e => r.on(e, p)), p())
          },
          destroy: function() {
            l.forEach(e => r.off(e, d)), a.forEach(e => r.off(e, h)), c.forEach(e => r.off(e, p)), bE(n, u.loop), bE(n, u.draggable), bE(n, u.dragging), f([], i, u.snapped), f([], s, u.inView), Object.keys(u).forEach(e => {
              u[e] = []
            })
          }
        };
        return m
      }
      wE.globalOptions = void 0;

      function EE(e) {
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

      function xE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function PE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xE(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = EE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function CE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var SE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        TE = "foundry_qmpv6yt",
        OE = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = PE(PE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) SE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return CE(e.variantClassNames, e => CE(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_qmpv6y6",
          variantClassNames: {
            status: {
              danger: "foundry_qmpv6y7",
              information: "foundry_qmpv6y8",
              success: "foundry_qmpv6y9",
              warning: "foundry_qmpv6ya"
            },
            background: {
              static: "foundry_qmpv6yb",
              "two-tone": "foundry_qmpv6yc",
              neutral: "foundry_qmpv6yd"
            },
            align: {
              left: "foundry_qmpv6ye",
              center: "foundry_qmpv6yf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_qmpv6yg"],
            [{
              status: "information",
              background: "static"
            }, "foundry_qmpv6yh"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_qmpv6yi"],
            [{
              status: "success",
              background: "static"
            }, "foundry_qmpv6yj"]
          ]
        });
      const RE = (0, M.createContext)(null);

      function NE() {
        const e = (0, M.useContext)(RE);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const jE = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: i,
          align: s = "left",
          ...a
        }, l) => {
          const c = (({
              loopPagination: e = !0
            }) => {
              const t = (0, G.rl)(),
                r = (0, G.jt)(),
                [n, o] = (0, M.useState)([]),
                i = n.length,
                [s, a] = (0, M.useState)(0),
                [l, c] = mE({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [vE(), wE()]),
                u = (0, M.useRef)(0),
                d = (0, M.useRef)(!1),
                f = n[s],
                h = (0, M.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), a(t), d.current = !0
                }, [c]),
                p = (0, M.useCallback)(e => {
                  u.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, M.useCallback)((e, t) => {
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
                      const l = (c = 1 - Math.abs(a * u.current), Math.min(Math.max(c, 0), 1)).toString();
                      var c;
                      e.slideNodes()[s].style.opacity = l
                    })
                  })
                }, []);
              return (0, M.useEffect)(() => {
                c && (p(c), m(c), c.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [c, m]), (0, M.useEffect)(() => {
                c && (h(c), c.on("select", h).on("reInit", h))
              }, [c, h]), {
                setAlerts: o,
                alerts: n,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => c?.scrollPrev(r),
                nextAlert: () => c?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: s,
                setCurrentAlertIndex: a,
                isInitialized: d.current,
                loopPagination: e,
                canScrollNext: () => c?.canScrollNext() || !1,
                canScrollPrev: () => c?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: u,
              isInitialized: d,
              setAlerts: f,
              numAlerts: h
            } = c;
          (0, M.useEffect)(() => {
            o && i && f([{
              status: o,
              background: i,
              align: s
            }])
          }, []);
          const p = h > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, V.v6)({
              className: OE(u)
            }, p, a),
            v = e ? q.DX : "div";
          return (0, _.jsx)(RE.Provider, {
            value: c,
            children: (0, _.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        IE = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        kE = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = NE();
          if (!e && !n || !n?.status) return null;
          const o = e || IE[n.status],
            i = me[o],
            s = (0, V.v6)({
              className: "foundry_qmpv6yn"
            }, t);
          return (0, _.jsx)(i, {
            label: "",
            ref: r,
            size: "LG",
            "data-icon": !0,
            ...s
          })
        }),
        LE = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? q.DX : "div",
            i = (0, V.v6)({
              className: "foundry_qmpv6yo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        DE = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, s) => {
          const a = e ? q.DX : "div",
            l = (0, V.v6)({
              className: "foundry_qmpv6yk"
            }, i);
          return (0, _.jsx)(a, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        AE = (0, M.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = NE(), s = (0, V.v6)({
            className: "foundry_qmpv6yl"
          }, r), a = (0, G.UP)(i, n), l = M.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, M.useEffect)(() => {
            l && o(l)
          }, []), (0, _.jsx)("div", {
            ref: a,
            "data-testid": e,
            ...s,
            children: (0, _.jsx)("div", {
              className: "foundry_qmpv6ym",
              children: t
            })
          })
        }),
        ME = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, M.useRef)(null),
            s = (0, G.UP)(i, o),
            a = e ? q.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = iw(n, i),
            u = (0, V.v6)({
              className: "foundry_qmpv6yp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, _.jsx)(a, {
            "data-pressed": c,
            "data-testid": r,
            ref: s,
            ...l,
            ...u,
            children: t
          })
        }),
        BE = (0, M.forwardRef)((e, t) => {
          const r = (0, V.v6)({
            className: "foundry_qmpv6yq"
          }, e);
          return (0, _.jsx)(fw, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        HE = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? q.DX : "div",
            s = (0, V.v6)({
              className: "foundry_qmpv6ys"
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        zE = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = NE(), i = (0, V.v6)({
            className: TE
          }, t);
          return (0, _.jsx)(Ae, {
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
        VE = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = NE(), i = (0, V.v6)({
            className: TE
          }, t);
          return (0, _.jsx)(Ae, {
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
        FE = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = NE(), i = (0, V.v6)({
            className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
          }, t);
          return (0, _.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [n + 1, "/", o]
          })
        });

      function UE(e) {
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

      function GE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? GE(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = UE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : GE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function KE(e, t) {
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
        WE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qE(qE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) XE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return KE(e.variantClassNames, e => KE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ZE = WE({
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
        $E = WE({
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
        YE = WE({
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
      const QE = (0, M.createContext)(null);

      function JE() {
        const e = (0, M.useContext)(QE);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const ex = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: i,
          hasBorder: s,
          isDisabled: a,
          ...l
        }, c) => {
          const u = {
              size: n,
              background: o,
              color: i,
              hasBorder: s,
              isDisabled: a
            },
            d = (0, V.v6)({
              className: $E(u)
            }, l),
            f = e ? q.DX : "div";
          return (0, _.jsx)(QE.Provider, {
            value: u,
            children: (0, _.jsx)(f, {
              ref: c,
              "data-testid": r,
              "aria-disabled": a,
              ...d,
              children: t
            })
          })
        }),
        tx = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = JE(), s = e ? q.DX : "div", a = (0, V.v6)({
            className: YE({
              size: i
            })
          }, n);
          return (0, _.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        rx = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = me[e],
            o = (0, V.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, _.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        nx = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = JE(), i = (0, V.v6)({
            className: ZE({
              background: n
            })
          }, t);
          return (0, _.jsx)(Ae, {
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
      var ox = "ToastProvider",
        [ix, sx, ax] = (0, Tf.N)("Toast"),
        [lx, cx] = (0, Iu.A)("Toast", [ax]),
        [ux, dx] = lx(ox),
        fx = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
          } = e, [a, l] = M.useState(null), [c, u] = M.useState(0), d = M.useRef(!1), f = M.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${ox}\`. Expected non-empty \`string\`.`), (0, _.jsx)(ix.Provider, {
            scope: t,
            children: (0, _.jsx)(ux, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: i,
              toastCount: c,
              viewport: a,
              onViewportChange: l,
              onToastAdd: M.useCallback(() => u(e => e + 1), []),
              onToastRemove: M.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      fx.displayName = ox;
      var hx = "ToastViewport",
        px = ["F8"],
        mx = "toast.viewportPause",
        vx = "toast.viewportResume",
        yx = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = px,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, s = dx(hx, r), a = sx(r), l = M.useRef(null), c = M.useRef(null), u = M.useRef(null), d = M.useRef(null), f = (0, ju.s)(t, d, s.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), p = s.toastCount > 0;
          M.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), M.useEffect(() => {
            const e = l.current,
              t = d.current;
            if (p && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(mx);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(vx);
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
          }, [p, s.isClosePausedRef]);
          const m = M.useCallback(({
            tabbingDirection: e
          }) => {
            const t = a().map(t => {
              const r = t.ref.current,
                n = [r, ...Dx(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [a]);
          return M.useEffect(() => {
            const e = d.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void c.current?.focus();
                  const o = m({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    i = o.findIndex(e => e === r);
                  Ax(o.slice(i + 1)) ? t.preventDefault() : n ? c.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, _.jsxs)(Uu, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
              pointerEvents: p ? void 0 : "none"
            },
            children: [p && (0, _.jsx)(bx, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Ax(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, _.jsx)(ix.Slot, {
              scope: r,
              children: (0, _.jsx)(ku.sG.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), p && (0, _.jsx)(bx, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                Ax(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      yx.displayName = hx;
      var gx = "ToastFocusProxy",
        bx = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, i = dx(gx, r);
          return (0, _.jsx)(Dd.s6, {
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
      bx.displayName = gx;
      var _x = "Toast",
        wx = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            ...s
          } = e, [a, l] = (0, Ld.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: i,
            caller: _x
          });
          return (0, _.jsx)(Id.C, {
            present: r || a,
            children: (0, _.jsx)(Px, {
              open: a,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Lu.c)(e.onPause),
              onResume: (0, Lu.c)(e.onResume),
              onSwipeStart: (0, Nu.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Nu.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, Nu.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Nu.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      wx.displayName = _x;
      var [Ex, xx] = lx(_x, {
        onClose() {}
      }), Px = M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: i,
          onClose: s,
          onEscapeKeyDown: a,
          onPause: l,
          onResume: c,
          onSwipeStart: u,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: h,
          ...p
        } = e, m = dx(_x, r), [v, y] = M.useState(null), g = (0, ju.s)(t, e => y(e)), b = M.useRef(null), w = M.useRef(null), E = o || m.duration, x = M.useRef(0), P = M.useRef(E), C = M.useRef(0), {
          onToastAdd: S,
          onToastRemove: T
        } = m, O = (0, Lu.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), s()
        }), R = M.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), x.current = (new Date).getTime(), C.current = window.setTimeout(O, e))
        }, [O]);
        M.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                R(P.current), c?.()
              },
              r = () => {
                const e = (new Date).getTime() - x.current;
                P.current = P.current - e, window.clearTimeout(C.current), l?.()
              };
            return e.addEventListener(mx, r), e.addEventListener(vx, t), () => {
              e.removeEventListener(mx, r), e.removeEventListener(vx, t)
            }
          }
        }, [m.viewport, E, l, c, R]), M.useEffect(() => {
          i && !m.isClosePausedRef.current && R(E)
        }, [i, E, m.isClosePausedRef, R]), M.useEffect(() => (S(), () => T()), [S, T]);
        const N = M.useMemo(() => v ? Ix(v) : null, [v]);
        return m.viewport ? (0, _.jsxs)(_.Fragment, {
          children: [N && (0, _.jsx)(Cx, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: N
          }), (0, _.jsx)(Ex, {
            scope: r,
            onClose: O,
            children: pu.createPortal((0, _.jsx)(ix.ItemSlot, {
              scope: r,
              children: (0, _.jsx)(Fu, {
                asChild: !0,
                onEscapeKeyDown: (0, Nu.mK)(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || O(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, _.jsx)(ku.sG.li, {
                  tabIndex: 0,
                  "data-state": i ? "open" : "closed",
                  "data-swipe-direction": m.swipeDirection,
                  ...p,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, Nu.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, O()))
                  }),
                  onPointerDown: (0, Nu.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, Nu.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      i = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      s = o ? i(0, t) : 0,
                      a = o ? 0 : i(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      c = {
                        x: s,
                        y: a
                      },
                      f = {
                        originalEvent: e,
                        delta: c
                      };
                    n ? (w.current = c, kx("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : Lx(c, m.swipeDirection, l) ? (w.current = c, kx("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, Nu.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Lx(t, m.swipeDirection, m.swipeThreshold) ? kx("toast.swipeEnd", h, n, {
                        discrete: !0
                      }) : kx("toast.swipeCancel", f, n, {
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
      }), Cx = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = dx(_x, t), [i, s] = M.useState(!1), [a, l] = M.useState(!1);
        return function(e = () => {}) {
          const t = (0, Lu.c)(e);
          (0, ad.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), M.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, _.jsx)(jd, {
          asChild: !0,
          children: (0, _.jsx)(Dd.s6, {
            ...n,
            children: i && (0, _.jsxs)(_.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, _.jsx)(ku.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Sx = M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, _.jsx)(ku.sG.div, {
          ...n,
          ref: t
        })
      });
      Sx.displayName = "ToastDescription";
      var Tx = "ToastAction",
        Ox = M.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, _.jsx)(jx, {
            altText: r,
            asChild: !0,
            children: (0, _.jsx)(Nx, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Tx}\`. Expected non-empty \`string\`.`), null)
        });
      Ox.displayName = Tx;
      var Rx = "ToastClose",
        Nx = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = xx(Rx, r);
          return (0, _.jsx)(jx, {
            asChild: !0,
            children: (0, _.jsx)(ku.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, Nu.mK)(e.onClick, o.onClose)
            })
          })
        });
      Nx.displayName = Rx;
      var jx = M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, _.jsx)(ku.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Ix(e) {
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
              } else t.push(...Ix(e))
          }
        }), t
      }

      function kx(e, t, r, {
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
        }), n ? (0, ku.hO)(o, i) : o.dispatchEvent(i)
      }
      var Lx = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          i = n > o;
        return "left" === t || "right" === t ? i && n > r : !i && o > r
      };

      function Dx(e) {
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

      function Ax(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var Mx = fx,
        Bx = yx,
        Hx = wx,
        zx = Sx,
        Vx = Ox,
        Fx = Nx;

      function Ux(e) {
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

      function qx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gx(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ux(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Kx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qx(qx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Xx(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kx(e.variantClassNames, e => Kx(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Zx = Wx({
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
        $x = Wx({
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
        Yx = Wx({
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
      const Qx = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, _.jsx)(Mx, {
          ref: n,
          "data-testid": t,
          ...r,
          children: e
        })),
        Jx = (0, M.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const i = (0, V.v6)({
            className: Yx({
              position: r
            })
          }, n);
          return (0, _.jsx)(Bx, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        eP = (0, M.createContext)(null);

      function tP() {
        const e = (0, M.useContext)(eP);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const rP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, i) => {
          const s = e ? q.DX : Hx,
            a = (0, V.v6)({
              className: $x({
                appearance: n
              })
            }, o);
          return (0, _.jsx)(eP.Provider, {
            value: {
              appearance: n
            },
            children: (0, _.jsx)(s, {
              ref: i,
              "data-testid": r,
              ...a,
              children: t
            })
          })
        }),
        nP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? q.DX : zx,
            s = (0, V.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        oP = {
          danger: me.CircleX,
          information: me.Info,
          success: me.CircleCheck,
          warning: me.TriangleAlert,
          avocado: me.CircleCheck
        },
        iP = (0, M.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = tP(), o = e ? q.DX : oP[n], i = (0, V.v6)({
            className: Zx({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, _.jsx)(o, {
            ref: r,
            ...i
          })
        }),
        sP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? q.DX : Vx,
            s = (0, V.v6)({
              className: "foundry_dnh2nzq",
              asChild: !0
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, _.jsx)(q.xV, {
              children: t
            }) : (0, _.jsx)(Se, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        aP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? q.DX : Fx,
            s = (0, V.v6)({
              className: "foundry_dnh2nzr",
              asChild: !0
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, _.jsx)(q.xV, {
              children: t
            }) : (0, _.jsx)(fw, {
              size: "SM",
              label: ""
            })
          })
        });

      function lP(e) {
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

      function cP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function uP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? cP(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = lP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function dP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        hP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = uP(uP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) fP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dP(e.variantClassNames, e => dP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        pP = hP({
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
        mP = hP({
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
        vP = hP({
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

      function yP() {
        const e = (0, M.useContext)(gP);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const gP = (0, M.createContext)(null),
        bP = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const s = (0, V.v6)({
              className: vP({
                size: n
              })
            }, o),
            a = r ? q.DX : "ol";
          return (0, _.jsx)(gP.Provider, {
            value: {
              size: n
            },
            children: (0, _.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        _P = (0, M.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, M.useRef)(null),
            {
              size: a
            } = yP(),
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
              } = iw({
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
            c = r ? q.DX : "a",
            u = (0, V.v6)({
              className: (0, pe.clsx)(pP({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, _.jsx)("li", {
            className: mP({
              size: a
            }),
            ref: i,
            children: (0, _.jsx)(c, {
              ref: s,
              ...u,
              children: t
            })
          })
        }),
        wP = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = me[e];
          return (0, _.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        EP = (0, M.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [s, a] = (0, M.useState)(r), {
            size: l
          } = yP(), c = (0, V.v6)({
            className: mP({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, _.jsx)("li", {
            ref: i,
            ...c,
            children: (0, _.jsxs)(Mv, {
              open: s,
              onOpenChange: () => a(!s),
              children: [(0, _.jsx)(Bv, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, _.jsx)(Vv, {
                children: (0, _.jsx)(Fv, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, _.jsx)(Uv, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        xP = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? q.DX : Gv,
            s = (0, V.v6)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        });

      function PP(e) {
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

      function CP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function SP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? CP(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = PP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : CP(Object(r)).forEach(function(t) {
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
      var OP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        RP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = SP(SP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) OP(c, n, e.defaultVariants) && (r += " " + u);
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
      const NP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const i = e ? q.DX : "div",
            s = (0, V.v6)({
              className: RP({
                appearance: r
              })
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        jP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? q.DX : "div",
            s = (0, V.v6)({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        IP = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = me[e],
            o = (0, V.v6)({
              size: "SM",
              className: "foundry_18omk9t3",
              label: ""
            }, t);
          return (0, _.jsx)(n, {
            ref: r,
            ...o
          })
        });
      var kP = ZP(),
        LP = e => qP(e, kP),
        DP = ZP();
      LP.write = e => qP(e, DP);
      var AP = ZP();
      LP.onStart = e => qP(e, AP);
      var MP = ZP();
      LP.onFrame = e => qP(e, MP);
      var BP = ZP();
      LP.onFinish = e => qP(e, BP);
      var HP = [];
      LP.setTimeout = (e, t) => {
        const r = LP.now() + t,
          n = () => {
            const e = HP.findIndex(e => e.cancel == n);
            ~e && HP.splice(e, 1), UP -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return HP.splice(zP(r), 0, o), UP += 1, KP(), o
      };
      var zP = e => ~(~HP.findIndex(t => t.time > e) || ~HP.length);
      LP.cancel = e => {
        AP.delete(e), MP.delete(e), BP.delete(e), kP.delete(e), DP.delete(e)
      }, LP.sync = e => {
        GP = !0, LP.batchedUpdates(e), GP = !1
      }, LP.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, LP.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          AP.delete(r), t = null
        }, n
      };
      var VP = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      LP.use = e => VP = e, LP.now = "undefined" != typeof performance ? () => performance.now() : Date.now, LP.batchedUpdates = e => e(), LP.catch = console.error, LP.frameLoop = "always", LP.advance = () => {
        "demand" !== LP.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : WP()
      };
      var FP = -1,
        UP = 0,
        GP = !1;

      function qP(e, t) {
        GP ? (t.delete(e), e(0)) : (t.add(e), KP())
      }

      function KP() {
        FP < 0 && (FP = 0, "demand" !== LP.frameLoop && VP(XP))
      }

      function XP() {
        ~FP && (VP(XP), LP.batchedUpdates(WP))
      }

      function WP() {
        const e = FP;
        FP = LP.now();
        const t = zP(FP);
        t && ($P(HP.splice(0, t), e => e.handler()), UP -= t), UP ? (AP.flush(), kP.flush(e ? Math.min(64, FP - e) : 16.667), MP.flush(), DP.flush(), BP.flush()) : FP = -1
      }

      function ZP() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            UP += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (UP -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, UP -= t.size, $P(t, t => t(r) && e.add(t)), UP += e.size, t = e)
          }
        }
      }

      function $P(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            LP.catch(e)
          }
        })
      }
      var YP = Object.defineProperty,
        QP = {};

      function JP() {}((e, t) => {
        for (var r in t) YP(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(QP, {
        assign: () => hC,
        colors: () => uC,
        createStringInterpolator: () => sC,
        skipAnimation: () => dC,
        to: () => aC,
        willAdvance: () => fC
      });
      var eC = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function tC(e, t) {
        if (eC.arr(e)) {
          if (!eC.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var rC = (e, t) => e.forEach(t);

      function nC(e, t, r) {
        if (eC.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var oC = e => eC.und(e) ? [] : eC.arr(e) ? e : [e];

      function iC(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), rC(r, t)
        }
      }
      var sC, aC, lC = (e, ...t) => iC(e, e => e(...t)),
        cC = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        uC = null,
        dC = !1,
        fC = JP,
        hC = e => {
          e.to && (aC = e.to), e.now && (LP.now = e.now), void 0 !== e.colors && (uC = e.colors), null != e.skipAnimation && (dC = e.skipAnimation), e.createStringInterpolator && (sC = e.createStringInterpolator), e.requestAnimationFrame && LP.use(e.requestAnimationFrame), e.batchedUpdates && (LP.batchedUpdates = e.batchedUpdates), e.willAdvance && (fC = e.willAdvance), e.frameLoop && (LP.frameLoop = e.frameLoop)
        },
        pC = new Set,
        mC = [],
        vC = [],
        yC = 0,
        gC = {
          get idle() {
            return !pC.size && !mC.length
          },
          start(e) {
            yC > e.priority ? (pC.add(e), LP.onStart(bC)) : (_C(e), LP(EC))
          },
          advance: EC,
          sort(e) {
            if (yC) LP.onFrame(() => gC.sort(e));
            else {
              const t = mC.indexOf(e);
              ~t && (mC.splice(t, 1), wC(e))
            }
          },
          clear() {
            mC = [], pC.clear()
          }
        };

      function bC() {
        pC.forEach(_C), pC.clear(), LP(EC)
      }

      function _C(e) {
        mC.includes(e) || wC(e)
      }

      function wC(e) {
        mC.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(mC), 0, e)
      }

      function EC(e) {
        const t = vC;
        for (let r = 0; r < mC.length; r++) {
          const n = mC[r];
          yC = n.priority, n.idle || (fC(n), n.advance(e), n.idle || t.push(n))
        }
        return yC = 0, (vC = mC).length = 0, (mC = t).length > 0
      }
      var xC = "[-+]?\\d*\\.?\\d+",
        PC = xC + "%";

      function CC(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var SC = new RegExp("rgb" + CC(xC, xC, xC)),
        TC = new RegExp("rgba" + CC(xC, xC, xC, xC)),
        OC = new RegExp("hsl" + CC(xC, PC, PC)),
        RC = new RegExp("hsla" + CC(xC, PC, PC, xC)),
        NC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        jC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        IC = /^#([0-9a-fA-F]{6})$/,
        kC = /^#([0-9a-fA-F]{8})$/;

      function LC(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function DC(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = LC(o, n, e + 1 / 3),
          s = LC(o, n, e),
          a = LC(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function AC(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function MC(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function BC(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function HC(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function zC(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = IC.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : uC && void 0 !== uC[e] ? uC[e] : (t = SC.exec(e)) ? (AC(t[1]) << 24 | AC(t[2]) << 16 | AC(t[3]) << 8 | 255) >>> 0 : (t = TC.exec(e)) ? (AC(t[1]) << 24 | AC(t[2]) << 16 | AC(t[3]) << 8 | BC(t[4])) >>> 0 : (t = NC.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = kC.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = jC.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = OC.exec(e)) ? (255 | DC(MC(t[1]), HC(t[2]), HC(t[3]))) >>> 0 : (t = RC.exec(e)) ? (DC(MC(t[1]), HC(t[2]), HC(t[3])) | BC(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var VC = (e, t, r) => {
          if (eC.fun(e)) return e;
          if (eC.arr(e)) return VC({
            range: e,
            output: t,
            extrapolate: r
          });
          if (eC.str(e.output[0])) return sC(e);
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
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === s) return c;
                "clamp" === s && (c = t)
              }
              if (c > r) {
                if ("identity" === a) return c;
                "clamp" === a && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = i(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, s, a, n.map)
          }
        },
        FC = 1.70158,
        UC = 2.5949095,
        GC = 2.70158,
        qC = 2 * Math.PI / 3,
        KC = 2 * Math.PI / 4.5,
        XC = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        WC = {
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
          easeInBack: e => GC * e * e * e - FC * e * e,
          easeOutBack: e => 1 + GC * Math.pow(e - 1, 3) + FC * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - UC) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + UC) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * qC),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * qC) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * KC) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * KC) / 2 + 1,
          easeInBounce: e => 1 - XC(1 - e),
          easeOutBounce: XC,
          easeInOutBounce: e => e < .5 ? (1 - XC(1 - 2 * e)) / 2 : (1 + XC(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        ZC = Symbol.for("FluidValue.get"),
        $C = Symbol.for("FluidValue.observers"),
        YC = e => Boolean(e && e[ZC]),
        QC = e => e && e[ZC] ? e[ZC]() : e,
        JC = e => e[$C] || null;

      function eS(e, t) {
        const r = e[$C];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var tS = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            rS(this, e)
          }
        },
        rS = (e, t) => sS(e, ZC, t);

      function nS(e, t) {
        if (e[ZC]) {
          let r = e[$C];
          r || sS(e, $C, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function oS(e, t) {
        const r = e[$C];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[$C] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var iS, sS = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        aS = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        lS = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        cS = new RegExp(`(${aS.source})(%|[a-z]+)`, "i"),
        uS = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        dS = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        fS = e => {
          const [t, r] = hS(e);
          if (!t || cC()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && dS.test(r) ? fS(r) : r || e
        },
        hS = e => {
          const t = dS.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        pS = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        mS = e => {
          iS || (iS = uC ? new RegExp(`(${Object.keys(uC).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => QC(e).replace(dS, fS).replace(lS, zC).replace(iS, zC)),
            r = t.map(e => e.match(aS).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => VC({
              ...e,
              output: t
            }));
          return e => {
            const r = !cS.test(t[0]) && t.find(e => cS.test(e))?.replace(aS, "");
            let n = 0;
            return t[0].replace(aS, () => `${o[n++](e)}${r||""}`).replace(uS, pS)
          }
        },
        vS = "react-spring: ",
        yS = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${vS}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        gS = yS(console.warn),
        bS = yS(console.warn);

      function _S(e) {
        return eC.str(e) && ("#" == e[0] || /\d/.test(e) || !cC() && dS.test(e) || e in (uC || {}))
      }
      var wS = cC() ? M.useEffect : M.useLayoutEffect;

      function ES() {
        const e = (0, M.useState)()[1],
          t = (() => {
            const e = (0, M.useRef)(!1);
            return wS(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var xS = e => (0, M.useEffect)(e, PS),
        PS = [],
        CS = Symbol.for("Animated:node"),
        SS = e => e && e[CS],
        TS = (e, t) => {
          return r = e, n = CS, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        OS = e => e && e[CS] && e[CS].getPayload(),
        RS = class {
          constructor() {
            TS(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        NS = class e extends RS {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, eC.num(this._value) && (this.lastPosition = this._value)
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
            return eC.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, eC.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        jS = class e extends NS {
          constructor(e) {
            super(0), this._string = null, this._toString = VC({
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
            if (eC.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = VC({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        IS = {
          dependencies: null
        },
        kS = class extends RS {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return nC(this.source, (r, n) => {
              var o;
              (o = r) && o[CS] === o ? t[n] = r.getValue(e) : YC(r) ? t[n] = QC(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && rC(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return nC(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            IS.dependencies && YC(e) && IS.dependencies.add(e);
            const t = OS(e);
            t && rC(t, e => this.add(e))
          }
        },
        LS = class e extends kS {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(DS)), !0)
          }
        };

      function DS(e) {
        return (_S(e) ? jS : NS).create(e)
      }

      function AS(e) {
        const t = SS(e);
        return t ? t.constructor : eC.arr(e) ? LS : _S(e) ? jS : NS
      }
      var MS = (e, t) => {
          const r = !eC.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, M.forwardRef)((n, o) => {
            const i = (0, M.useRef)(null),
              s = r && (0, M.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (eC.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return IS.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new kS(e), IS.dependencies = null, [e, r]
              }(n, t),
              c = ES(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && c()
              },
              d = new BS(u, l),
              f = (0, M.useRef)(void 0);
            wS(() => (f.current = d, rC(l, e => nS(e, d)), () => {
              f.current && (rC(f.current.deps, e => oS(e, f.current)), LP.cancel(f.current.update))
            })), (0, M.useEffect)(u, []), xS(() => () => {
              const e = f.current;
              rC(e.deps, t => oS(t, e))
            });
            const h = t.getComponentProps(a.getValue());
            return M.createElement(e, {
              ...h,
              ref: s
            })
          })
        },
        BS = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && LP.write(this.update)
          }
        },
        HS = Symbol.for("AnimatedComponent"),
        zS = e => eC.str(e) ? e : e && eC.str(e.displayName) ? e.displayName : eC.fun(e) && e.name || null;

      function VS(e, ...t) {
        return eC.fun(e) ? e(...t) : e
      }
      var FS = (e, t) => !0 === e || !!(t && e && (eC.fun(e) ? e(t) : oC(e).includes(t))),
        US = (e, t) => eC.obj(e) ? t && e[t] : e,
        GS = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        qS = e => e,
        KS = (e, t = qS) => {
          let r = XS;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            eC.und(r) || (n[o] = r)
          }
          return n
        },
        XS = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        WS = {
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

      function ZS(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (nC(e, (e, n) => {
              WS[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return nC(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function $S(e) {
        return e = QC(e), eC.arr(e) ? e.map($S) : _S(e) ? QP.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function YS(e) {
        return eC.fun(e) || eC.arr(e) && eC.obj(e[0])
      }

      function QS(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var JS = {
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
        eT = {
          ...JS.default,
          mass: 1,
          damping: 1,
          easing: WC.linear,
          clamp: !1
        },
        tT = class {
          constructor() {
            this.velocity = 0, Object.assign(this, eT)
          }
        };

      function rT(e, t) {
        if (eC.und(t.decay)) {
          const r = !eC.und(t.tension) || !eC.und(t.friction);
          !r && eC.und(t.frequency) && eC.und(t.damping) && eC.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var nT = [],
        oT = class {
          constructor() {
            this.changed = !1, this.values = nT, this.toValues = null, this.fromValues = nT, this.config = new tT, this.immediate = !1
          }
        };

      function iT(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, c, u = FS(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            eC.und(r.pause) || (o.paused = FS(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || FS(e, t)), l = VS(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - LP.now()
          }

          function f() {
            l > 0 && !QP.skipAnimation ? (o.delayed = !0, c = LP.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
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
      var sT = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? cT(e.get()) : t.every(e => e.noop) ? aT(e.get()) : lT(e.get(), t.every(e => e.finished)),
        aT = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        lT = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        cT = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function uT(e, t, r, n) {
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
          const c = KS(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && cT(n) || o !== r.asyncId && lT(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new fT,
                s = new hT;
              return (async () => {
                if (QP.skipAnimation) throw dT(r), s.result = lT(n, !1), d(s), s;
                h(i);
                const a = eC.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, nC(c, (e, t) => {
                  eC.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return h(i), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (QP.skipAnimation) return dT(r), lT(n, !1);
          try {
            let t;
            t = eC.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = lT(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof fT) m = e.result;
            else {
              if (!(e instanceof hT)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? a : void 0, r.promise = i ? l : void 0)
          }
          return eC.fun(s) && LP.batchedUpdates(() => {
            s(m, n, n.item)
          }), m
        })() : l
      }

      function dT(e, t) {
        iC(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var fT = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        hT = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        pT = e => e instanceof vT,
        mT = 1,
        vT = class extends tS {
          constructor() {
            super(...arguments), this.id = mT++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = SS(this);
            return e && e.getValue()
          }
          to(...e) {
            return QP.to(this, e)
          }
          interpolate(...e) {
            return gS(`${vS}The "interpolate" function is deprecated in v9 (use "to" instead)`), QP.to(this, e)
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
            eS(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || gC.sort(this), eS(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        yT = Symbol.for("SpringPhase"),
        gT = e => (1 & e[yT]) > 0,
        bT = e => (2 & e[yT]) > 0,
        _T = e => (4 & e[yT]) > 0,
        wT = (e, t) => t ? e[yT] |= 3 : e[yT] &= -3,
        ET = (e, t) => t ? e[yT] |= 4 : e[yT] &= -5,
        xT = class extends vT {
          constructor(e, t) {
            if (super(), this.animation = new oT, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !eC.und(e) || !eC.und(t)) {
              const r = eC.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              eC.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(bT(this) || this._state.asyncTo) || _T(this)
          }
          get goal() {
            return QC(this.animation.to)
          }
          get velocity() {
            const e = SS(this);
            return e instanceof NS ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return gT(this)
          }
          get isAnimating() {
            return bT(this)
          }
          get isPaused() {
            return _T(this)
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
            } = n, s = OS(n.to);
            !s && YC(n.to) && (o = oC(QC(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const c = a.constructor == jS ? 1 : s ? s[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = eC.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (eC.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(a.lastPosition - d) <= f, s = o * n
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !eC.und(n),
                      h = r == c ? a.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(s) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (s = -s * n, d = c)), s += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * s) / i.mass * v, d += s * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, a.durationProgress = n), d = r + i.easing(n) * (c - r), s = (d - a.lastPosition) / e, u = 1 == n
                }
                a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              s && !s[l].done && (u = !1), u ? a.done = !0 : t = !1, a.setValue(d, i.round) && (r = !0)
            });
            const a = SS(this),
              l = a.getValue();
            if (t) {
              const e = QC(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return LP.batchedUpdates(() => {
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
            if (bT(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              LP.batchedUpdates(() => {
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
            return eC.und(e) ? (r = this.queue || [], this.queue = []) : r = [eC.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => sT(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), dT(this._state, e && this._lastCallId), LP.batchedUpdates(() => this._stop(t, e)), this
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
            r = eC.obj(r) ? r[t] : r, (null == r || YS(r)) && (r = void 0), n = eC.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return gT(this) || (e.reverse && ([r, n] = [n, r]), n = QC(n), eC.und(n) ? SS(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, KS(e, (e, t) => /^on/.test(t) ? US(e, r) : e)), RT(this, e, "onProps"), NT(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return iT(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  _T(this) || (ET(this, !0), lC(i.pauseQueue), NT(this, "onPause", lT(this, PT(this, this.animation.to)), this))
                },
                resume: () => {
                  _T(this) && (ET(this, !1), bT(this) && this._resume(), lC(i.resumeQueue), NT(this, "onResume", lT(this, PT(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = CT(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(cT(this));
            const n = !eC.und(e.to),
              o = !eC.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(cT(this));
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
            !o || n || t.default && !eC.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !tC(d, c);
            f && (a.from = d), d = QC(d);
            const h = !tC(u, l);
            h && this._focus(u);
            const p = YS(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (rT(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), rT(e, t), Object.assign(e, t);
              for (const t in eT) null == e[t] && (e[t] = eT[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              eC.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, VS(t.config, i), t.config !== s.config ? VS(s.config, i) : void 0);
            let g = SS(this);
            if (!g || eC.und(u)) return r(lT(this, !0));
            const b = eC.und(t.reset) ? o && !t.default : !eC.und(d) && FS(t.reset, i),
              _ = b ? d : this.get(),
              w = $S(u),
              E = eC.num(w) || eC.arr(w) || _S(w),
              x = !p && (!E || FS(s.immediate || t.immediate, i));
            if (h) {
              const e = AS(u);
              if (e !== g.constructor) {
                if (!x) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const P = g.constructor;
            let C = YC(u),
              S = !1;
            if (!C) {
              const e = b || !gT(this) && f;
              (h || e) && (S = tC($S(_), w), C = !S), (tC(a.immediate, x) || x) && tC(m.decay, v) && tC(m.velocity, y) || (C = !0)
            }
            if (S && bT(this) && (a.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || YC(l)) && (a.values = g.getPayload(), a.toValues = YC(u) ? null : P == jS ? [1] : oC(w)), a.immediate != x && (a.immediate = x, x || b || this._set(l)), C)) {
              const {
                onRest: e
              } = a;
              rC(OT, e => RT(this, t, e));
              const n = lT(this, PT(this, l));
              lC(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && LP.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? VS(s.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(uT(t.to, t, this._state, this)) : C ? this._start() : bT(this) && !h ? this._pendingCalls.add(r) : r(aT(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (JC(this) && this._detach(), t.to = e, JC(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            YC(t) && (nS(t, this), pT(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            YC(e) && oS(e, this)
          }
          _set(e, t = !0) {
            const r = QC(e);
            if (!eC.und(r)) {
              const e = SS(this);
              if (!e || !tC(r, e.getValue())) {
                const n = AS(r);
                e && e.constructor == n ? e.setValue(r) : TS(this, n.create(r)), e && LP.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return SS(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, NT(this, "onStart", lT(this, PT(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), VS(this.animation.onChange, e, this)), VS(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            SS(this).reset(QC(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), bT(this) || (wT(this, !0), _T(this) || this._resume())
          }
          _resume() {
            QP.skipAnimation ? this.finish() : gC.start(this)
          }
          _stop(e, t) {
            if (bT(this)) {
              wT(this, !1);
              const r = this.animation;
              rC(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), eS(this, {
                type: "idle",
                parent: this
              });
              const n = t ? cT(this.get()) : lT(this.get(), PT(this, e ?? r.to));
              lC(this._pendingCalls, n), r.changed && (r.changed = !1, NT(this, "onRest", n, this))
            }
          }
        };

      function PT(e, t) {
        const r = $S(t);
        return tC($S(e.get()), r)
      }

      function CT(e, t = e.loop, r = e.to) {
        const n = VS(t);
        if (n) {
          const o = !0 !== n && ZS(n),
            i = (o || e).reverse,
            s = !o || o.reset;
          return ST({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || YS(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function ST(e) {
        const {
          to: t,
          from: r
        } = e = ZS(e), n = new Set;
        return eC.obj(t) && TT(t, n), eC.obj(r) && TT(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function TT(e, t) {
        nC(e, (e, r) => null != e && t.add(r))
      }
      var OT = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function RT(e, t, r) {
        e.animation[r] = t[r] !== GS(t, r) ? US(t[r], e.key) : void 0
      }

      function NT(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var jT = ["onStart", "onChange", "onRest"],
        IT = 1,
        kT = class {
          constructor(e, t) {
            this.id = IT++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              eC.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(ST(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = oC(e).map(ST) : this.queue = [], this._flush ? this._flush(this, t) : (BT(this, t), function(e, t) {
              return Promise.all(t.map(t => LT(e, t))).then(t => sT(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              rC(oC(t), t => r[t].stop(!!e))
            } else dT(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (eC.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              rC(oC(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (eC.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              rC(oC(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            nC(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, iC(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !n && this._started,
              s = o || i && r.size ? this.get() : null;
            o && t.size && iC(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, iC(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            LP.onFrame(this._onFrame)
          }
        };
      async function LT(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, c = eC.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = eC.arr(o) || eC.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : rC(jT, r => {
          const n = t[r];
          if (eC.fun(n)) {
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
            }, c && (c[r] = t[r])
          }
        });
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, lC(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === GS(t, "cancel");
        (u || h && d.asyncId) && f.push(iT(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: JP,
            resume: JP,
            start(t, r) {
              h ? (dT(d, e._lastAsyncId), r(cT(e))) : (t.onRest = a, r(uT(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = sT(e, await Promise.all(f));
        if (s && p.finished && (!r || !p.noop)) {
          const r = CT(t, s, o);
          if (r) return BT(e, [r]), LT(e, r, !0)
        }
        return l && LP.batchedUpdates(() => l(p, e, e.item)), p
      }

      function DT(e, t) {
        const r = {
          ...e.springs
        };
        return t && rC(oC(t), e => {
            eC.und(e.keys) && (e = ST(e)), eC.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), MT(r, e, e => AT(e))
          }),
          function(e, t) {
            nC(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, nS(t, e))
            })
          }(e, r), r
      }

      function AT(e, t) {
        const r = new xT;
        return r.key = e, t && nS(r, t), r
      }

      function MT(e, t, r) {
        t.keys && rC(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function BT(e, t) {
        rC(t, t => {
          MT(e.springs, t, t => AT(t, e))
        })
      }
      var HT = M.createContext({
          pause: !1,
          immediate: !1
        }),
        zT = () => {
          const e = [],
            t = function(t) {
              bS(`${vS}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return rC(e, (e, o) => {
                if (eC.und(t)) n.push(e.start());
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
            return rC(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return rC(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            rC(e, (e, r) => {
              const n = eC.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return rC(e, (e, n) => {
              if (eC.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return rC(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return rC(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return eC.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        VT = () => zT(),
        FT = () => (0, M.useState)(VT)[0];

      function UT(e, t, r) {
        const n = eC.fun(t) && t,
          {
            reset: o,
            sort: i,
            trail: s = 0,
            expires: a = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: c,
            ref: u,
            config: d
          } = n ? n() : t,
          f = (0, M.useMemo)(() => n || 3 == arguments.length ? zT() : void 0, []),
          h = oC(e),
          p = [],
          m = (0, M.useRef)(null),
          v = o ? null : m.current;
        wS(() => {
          m.current = p
        }), xS(() => (rC(p, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          rC(m.current, e => {
            e.expired && clearTimeout(e.expirationId), QS(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : GT++
              })
            }
            return eC.und(r) ? e : eC.fun(r) ? e.map(r) : oC(r)
          }(h, n ? n() : t, v),
          g = o && m.current || [];
        wS(() => rC(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          QS(e, f), VS(c, t, r)
        }));
        const b = [];
        if (v && rC(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          }), rC(h, (e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new kT
            }, p[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          rC(b, (t, n) => {
            const o = v[n];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : r && p.splice(++e, 0, o)
          })
        }
        eC.fun(i) && p.sort((e, t) => i(e.item, t.item));
        let _ = -s;
        const w = ES(),
          E = KS(t),
          x = new Map,
          P = (0, M.useRef)(new Map),
          C = (0, M.useRef)(!1);
        rC(p, (e, r) => {
          const o = e.key,
            i = e.phase,
            c = n ? n() : t;
          let f, h;
          const p = VS(c.delay || 0, o);
          if ("mount" == i) f = c.enter, h = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != i)
              if (e) f = c.leave, h = "leave";
              else {
                if (!(f = c.update)) return;
                h = "update"
              }
            else {
              if (e) return;
              f = c.enter, h = "enter"
            }
          }
          if (f = VS(f, e.item, r), f = eC.obj(f) ? ZS(f) : {
              to: f
            }, !f.config) {
            const t = d || E.config;
            f.config = VS(t, e.item, r, h)
          }
          _ += s;
          const g = {
            ...E,
            delay: p + _,
            ref: u,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == h && eC.und(g.from)) {
            const o = n ? n() : t,
              i = eC.und(o.initial) || v ? o.from : o.initial;
            g.from = VS(i, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            VS(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = VS(a, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                }
              }
              e && t.some(e => e.expired) && (P.current.delete(r), l && (C.current = !0), w())
            }
          };
          const S = DT(e.ctrl, g);
          "leave" === h && l ? P.current.set(e, {
            phase: h,
            springs: S,
            payload: g
          }) : x.set(e, {
            phase: h,
            springs: S,
            payload: g
          })
        });
        const S = (0, M.useContext)(HT),
          T = function(e) {
            const t = (0, M.useRef)(void 0);
            return (0, M.useEffect)(() => {
              t.current = e
            }), t.current
          }(S),
          O = S !== T && function(e) {
            for (const t in e) return !0;
            return !1
          }(S);
        wS(() => {
          O && rC(p, e => {
            e.ctrl.start({
              default: S
            })
          })
        }, [S]), rC(x, (e, t) => {
          if (P.current.size) {
            const e = p.findIndex(e => e.key === t.key);
            p.splice(e, 1)
          }
        }), wS(() => {
          rC(P.current.size ? P.current : x, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), O && "enter" == e && n.start({
              default: S
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || C.current ? (n.start(t), C.current && (C.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const R = e => M.createElement(M.Fragment, null, p.map((t, r) => {
          const {
            springs: n
          } = x.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), i = eC.str(t.key) || eC.num(t.key) ? t.key : t.ctrl.id, s = M.version < "19.0.0", a = o?.props ?? {}, l = s ? o?.ref : a?.ref;
          return o && o.type ? M.createElement(o.type, {
            ...a,
            key: i,
            ref: l
          }) : o
        }));
        return f ? [R, f] : R
      }
      var GT = 1,
        qT = class extends vT {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = VC(...t);
            const r = this._get(),
              n = AS(r);
            TS(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            tC(t, this.get()) || (SS(this).setValue(t), this._onChange(t, this.idle)), !this.idle && XT(this._active) && WT(this)
          }
          _get() {
            const e = eC.arr(this.source) ? this.source.map(QC) : oC(QC(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !XT(this._active) && (this.idle = !1, rC(OS(this), e => {
              e.done = !1
            }), QP.skipAnimation ? (LP.batchedUpdates(() => this.advance()), WT(this)) : gC.start(this))
          }
          _attach() {
            let e = 1;
            rC(oC(this.source), t => {
              YC(t) && nS(t, this), pT(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            rC(oC(this.source), e => {
              YC(e) && oS(e, this)
            }), this._active.clear(), WT(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = oC(this.source).reduce((e, t) => Math.max(e, (pT(t) ? t.priority : 0) + 1), 0))
          }
        };

      function KT(e) {
        return !1 !== e.idle
      }

      function XT(e) {
        return !e.size || Array.from(e).every(KT)
      }

      function WT(e) {
        e.idle || (e.idle = !0, rC(OS(e), e => {
          e.done = !0
        }), eS(e, {
          type: "idle",
          parent: e
        }))
      }
      QP.assign({
        createStringInterpolator: mS,
        to: (e, t) => new qT(e, t)
      }), gC.advance;
      var ZT = /^--/;

      function $T(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || ZT.test(e) || QT.hasOwnProperty(e) && QT[e] ? ("" + t).trim() : t + "px"
      }
      var YT = {},
        QT = {
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
        JT = ["Webkit", "Ms", "Moz", "O"];
      QT = Object.keys(QT).reduce((e, t) => (JT.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), QT);
      var eO = /^(matrix|translate|scale|rotate|skew)/,
        tO = /^(translate)/,
        rO = /^(rotate|skew)/,
        nO = (e, t) => eC.num(e) && 0 !== e ? e + t : e,
        oO = (e, t) => eC.arr(e) ? e.every(e => oO(e, t)) : eC.num(e) ? e === t : parseFloat(e) === t,
        iO = class extends kS {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>nO(e,"px")).join(",")})`, oO(e, 0)])), nC(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (eO.test(t)) {
                if (delete n[t], eC.und(e)) return;
                const r = tO.test(t) ? "px" : rO.test(t) ? "deg" : "";
                o.push(oC(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${nO(o,r)})`, oO(o, 0)] : e => [`${t}(${e.map(e=>nO(e,r)).join(",")})`, oO(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new sO(o, i)), super(n)
          }
        },
        sO = class extends tS {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return rC(this.inputs, (r, n) => {
              const o = QC(r[0]),
                [i, s] = this.transforms[n](eC.arr(o) ? o : r.map(QC));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && rC(this.inputs, e => rC(e, e => YC(e) && nS(e, this)))
          }
          observerRemoved(e) {
            0 == e && rC(this.inputs, e => rC(e, e => YC(e) && oS(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), eS(this, e)
          }
        };
      QP.assign({
        batchedUpdates: pu.unstable_batchedUpdates,
        createStringInterpolator: mS,
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
      var aO = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new kS(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = zS(e) || "Anonymous";
              return (e = eC.str(e) ? i[e] || (i[e] = MS(e, o)) : e[HS] || (e[HS] = MS(e, o))).displayName = `Animated(${t})`, e
            };
          return nC(e, (t, r) => {
            eC.arr(e) && (r = zS(t)), i[r] = i(t)
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
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : YT[t] || (YT[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = $T(t, o[t]);
                ZT.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new iO(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        lO = aO.animated,
        cO = "Dialog",
        [uO, dO] = (0, Iu.A)(cO),
        [fO, hO] = uO(cO),
        pO = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = M.useRef(null), l = M.useRef(null), [c, u] = (0, Ld.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: cO
          });
          return (0, _.jsx)(fO, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: (0, Gu.B)(),
            titleId: (0, Gu.B)(),
            descriptionId: (0, Gu.B)(),
            open: c,
            onOpenChange: u,
            onOpenToggle: M.useCallback(() => u(e => !e), [u]),
            modal: s,
            children: r
          })
        };
      pO.displayName = cO;
      var mO = "DialogTrigger",
        vO = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = hO(mO, r), i = (0, ju.s)(t, o.triggerRef);
          return (0, _.jsx)(ku.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": DO(o.open),
            ...n,
            ref: i,
            onClick: (0, Nu.mK)(e.onClick, o.onOpenToggle)
          })
        });
      vO.displayName = mO;
      var yO = "DialogPortal",
        [gO, bO] = uO(yO, {
          forceMount: void 0
        }),
        _O = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = hO(yO, t);
          return (0, _.jsx)(gO, {
            scope: t,
            forceMount: r,
            children: M.Children.map(n, e => (0, _.jsx)(Id.C, {
              present: r || i.open,
              children: (0, _.jsx)(jd, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      _O.displayName = yO;
      var wO = "DialogOverlay",
        EO = M.forwardRef((e, t) => {
          const r = bO(wO, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = hO(wO, e.__scopeDialog);
          return i.modal ? (0, _.jsx)(Id.C, {
            present: n || i.open,
            children: (0, _.jsx)(PO, {
              ...o,
              ref: t
            })
          }) : null
        });
      EO.displayName = wO;
      var xO = (0, kd.TL)("DialogOverlay.RemoveScroll"),
        PO = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = hO(wO, r);
          return (0, _.jsx)(Bm.A, {
            as: xO,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, _.jsx)(ku.sG.div, {
              "data-state": DO(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        CO = "DialogContent",
        SO = M.forwardRef((e, t) => {
          const r = bO(CO, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = hO(CO, e.__scopeDialog);
          return (0, _.jsx)(Id.C, {
            present: n || i.open,
            children: i.modal ? (0, _.jsx)(TO, {
              ...o,
              ref: t
            }) : (0, _.jsx)(OO, {
              ...o,
              ref: t
            })
          })
        });
      SO.displayName = CO;
      var TO = M.forwardRef((e, t) => {
          const r = hO(CO, e.__scopeDialog),
            n = M.useRef(null),
            o = (0, ju.s)(t, r.contentRef, n);
          return M.useEffect(() => {
            const e = n.current;
            if (e) return (0, Mm.Eq)(e)
          }, []), (0, _.jsx)(RO, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, Nu.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, Nu.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, Nu.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        OO = M.forwardRef((e, t) => {
          const r = hO(CO, e.__scopeDialog),
            n = M.useRef(!1),
            o = M.useRef(!1);
          return (0, _.jsx)(RO, {
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
        RO = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = hO(CO, r), l = M.useRef(null), c = (0, ju.s)(t, l);
          return Cm(), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(Nm, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, _.jsx)(Bu, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": DO(a.open),
                ...s,
                ref: c,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(HO, {
                titleId: a.titleId
              }), (0, _.jsx)(zO, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        NO = "DialogTitle",
        jO = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = hO(NO, r);
          return (0, _.jsx)(ku.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      jO.displayName = NO;
      var IO = "DialogDescription",
        kO = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = hO(IO, r);
          return (0, _.jsx)(ku.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      kO.displayName = IO;
      var LO = "DialogClose";

      function DO(e) {
        return e ? "open" : "closed"
      }
      M.forwardRef((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = hO(LO, r);
        return (0, _.jsx)(ku.sG.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: (0, Nu.mK)(e.onClick, () => o.onOpenChange(!1))
        })
      }).displayName = LO;
      var AO = "DialogTitleWarning",
        [MO, BO] = (0, Iu.q)(AO, {
          contentName: CO,
          titleName: NO,
          docsSlug: "dialog"
        }),
        HO = ({
          titleId: e
        }) => {
          const t = BO(AO),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return M.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        zO = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${BO("DialogDescriptionWarning").contentName}}.`;
          return M.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        VO = pO,
        FO = vO,
        UO = _O,
        GO = EO,
        qO = SO,
        KO = jO,
        XO = kO;
      const WO = () => {
          const e = (0, G.Ub)(V.fi.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        ZO = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function $O({
        dialogRef: e,
        dialogSpringRef: t,
        overlaySpringRef: r,
        onCloseTransitionStart: n,
        onCloseTransitionComplete: o
      }) {
        const i = ZO(),
          s = WO(),
          a = (0, M.useRef)(),
          l = (cr(ur), Sr({
            drag: ({
              velocity: [, l],
              offset: [, c],
              direction: [, u],
              cancel: d,
              last: f,
              first: h,
              target: p
            }) => {
              const {
                height: m
              } = e.current.getBoundingClientRect();
              if (h && (a.current = function(e, t) {
                  for (; e;) {
                    if (e.scrollHeight > e.clientHeight) {
                      if (0 !== e.scrollTop) return !1;
                      if (t < 0) return !1;
                      if ("dialog" === e.getAttribute("role")) return !0
                    }
                    e = e.parentNode
                  }
                }(p, u)), (!a.current || c < -70) && d(), a.current) {
                const e = 100 * (m - c) / m;
                r.start({
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
                config: JS.stiff,
                onStart: n,
                onRest: o
              }), r.start({
                ...i(0),
                immediate: !1,
                config: JS.stiff
              })) : (t.start({
                ...s(100),
                immediate: !1,
                config: JS.stiff
              }), r.start({
                ...i(100),
                immediate: !1,
                config: JS.stiff
              })))
            }
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
          } || {}, "drag"));
        return {
          bindDrag: l
        }
      }

      function YO(e) {
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

      function QO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function JO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? QO(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = YO(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : QO(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function eR(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var tR = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        rR = "foundry_8kowh41",
        nR = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = JO(JO({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) tR(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return eR(e.variantClassNames, e => eR(e, e => e.split(" ")[0]))
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
      const oR = (0, M.createContext)(null);

      function iR() {
        const e = (0, M.useContext)(oR);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const sR = (0, M.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r,
          onOpenChange: n,
          isOpen: o,
          onOpenTransitionStart: i,
          onOpenTransitionComplete: s,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: l,
          ...c
        }, u) => {
          const d = (0, V.v6)({
              "data-testid": t
            }, c),
            [f, h] = (0, G.ic)({
              prop: o,
              defaultProp: r ?? !1,
              onChange: n
            }),
            p = (0, G.ZC)(f);
          return (0, _.jsx)(oR.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== o,
              openImmediately: !(void 0 !== p || !r),
              setIsOpen: h,
              onOpenTransitionStart: i,
              onOpenTransitionComplete: s,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: l,
              contentId: (0, M.useId)(),
              descriptionId: (0, M.useId)(),
              triggerRef: (0, M.useRef)(null),
              dialogSpringRef: FT(),
              overlaySpringRef: FT()
            },
            children: (0, _.jsx)(VO, {
              ref: u,
              open: f,
              onOpenChange: h,
              ...d,
              children: e
            })
          })
        }),
        aR = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isOpen: o,
            overlaySpringRef: i,
            openImmediately: s
          } = iR(), a = ZO(), l = (0, G.jt)(), c = UT(o, {
            ref: i,
            delay: o ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: JS.stiff,
            immediate: l || s
          }), u = (0, V.v6)({
            "data-testid": t,
            className: "foundry_xov33n0"
          }, r), d = lO(GO);
          return (0, M.useEffect)(() => {
            i.start()
          }, [o]), c((t, r) => r ? (0, _.jsx)(d, {
            forceMount: !0,
            ref: n,
            ...u,
            style: t,
            children: e
          }) : null)
        }),
        lR = (0, M.forwardRef)(({
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
            contentId: c,
            triggerRef: u,
            onOpenTransitionStart: d,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: h,
            onCloseTransitionComplete: p,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = iR(), y = (0, G.rl)(), g = (0, G.jt)(), b = (0, M.useRef)(null), w = WO(), {
            bindDrag: E
          } = $O({
            dialogRef: b,
            overlaySpringRef: v,
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              a(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), x = UT(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: JS.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? d?.() : h?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : p?.()
            }
          });
          (0, M.useEffect)(() => {
            m.start()
          }, [s]);
          const P = (0, G.UP)(b, i),
            C = y && !g && !n && E(),
            S = (0, V.v6)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: c
            }, C || {}, o),
            T = lO(qO);
          return x((t, r) => r ? (0, _.jsx)(T, {
            forceMount: !0,
            ref: P,
            ...S,
            style: t,
            children: e
          }) : null)
        }),
        cR = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            "data-testid": t
          }, r);
          return (0, _.jsx)(UO, {
            forceMount: !0,
            ref: n,
            ...o,
            children: e
          })
        }),
        uR = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, _.jsx)(KO, {
            ref: n,
            ...o,
            children: e
          })
        }),
        dR = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            "data-testid": t
          }, r);
          return (0, _.jsx)(XO, {
            ref: n,
            ...o,
            children: e
          })
        }),
        fR = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, _.jsxs)(_m, {
            ref: n,
            ...o,
            children: [(0, _.jsx)(wm, {
              className: "foundry_xov33ne",
              children: e
            }), (0, _.jsx)(Em, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, _.jsx)(xm, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        hR = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.v6)({
              "data-testid": r,
              className: "foundry_xov33n2"
            }, n),
            s = e ? q.DX : "div";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        pR = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.v6)({
              "data-testid": r,
              className: "foundry_xov33n3"
            }, n),
            s = e ? q.DX : "div";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        mR = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.v6)({
              "data-testid": r,
              className: "foundry_xov33n8"
            }, n),
            s = e ? q.DX : "header";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        vR = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.v6)({
              "data-testid": r,
              className: "foundry_xov33nc"
            }, n),
            s = e ? q.DX : "footer";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        yR = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, i) => {
          const s = (0, V.v6)({
              "data-testid": r,
              className: nR({
                align: n
              })
            }, o),
            a = e ? q.DX : KO;
          return (0, _.jsx)(a, {
            ref: i,
            ...s,
            children: t
          })
        }),
        gR = (0, M.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = iR(), a = (0, V.v6)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, _.jsx)(fw, {
            ...a,
            size: "MD",
            ref: o,
            children: e
          })
        }),
        bR = (0, M.forwardRef)((e, t) => {
          const r = (0, V.v6)({
            className: "foundry_xov33n5"
          }, e);
          return (0, _.jsx)(Ae, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        }),
        _R = (0, M.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = iR(), a = (0, V.v6)({
            className: rR,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, _.jsx)(Se, {
            ref: o,
            ...a,
            children: e
          })
        }),
        wR = (0, M.forwardRef)(({
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
            contentId: c,
            triggerRef: u
          } = iR(), d = (0, G.UP)(u, i), f = (0, V.v6)({
            className: rR,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !s && a(!0)
            }
          }, o), h = e ? q.DX : FO;
          return (0, _.jsx)(h, {
            ...f,
            ref: d,
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
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? l.arrayMerge(e, r, l) : function(e, t, r) {
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