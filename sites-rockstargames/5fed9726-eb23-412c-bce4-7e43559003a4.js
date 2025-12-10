try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5fed9726-eb23-412c-bce4-7e43559003a4", e._sentryDebugIdIdentifier = "sentry-dbid-5fed9726-eb23-412c-bce4-7e43559003a4")
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
  [1568], {
    16859: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        a = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        g = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        _ = r ? Symbol.for("react.scope") : 60119;

      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case u:
                case d:
                case i:
                case a:
                case s:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case f:
                    case v:
                    case m:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function E(e) {
        return w(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = f, t.Fragment = i, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = a, t.StrictMode = s, t.Suspense = h, t.isAsyncMode = function(e) {
        return E(e) || w(e) === u
      }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
        return w(e) === c
      }, t.isContextProvider = function(e) {
        return w(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return w(e) === f
      }, t.isFragment = function(e) {
        return w(e) === i
      }, t.isLazy = function(e) {
        return w(e) === v
      }, t.isMemo = function(e) {
        return w(e) === m
      }, t.isPortal = function(e) {
        return w(e) === o
      }, t.isProfiler = function(e) {
        return w(e) === a
      }, t.isStrictMode = function(e) {
        return w(e) === s
      }, t.isSuspense = function(e) {
        return w(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === a || e === s || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === g || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === y)
      }, t.typeOf = w
    },
    35255: (e, t, r) => {
      var n = r(88335),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        a = {};

      function l(e) {
        return n.isMemo(e) ? s : a[e.$$typeof] || o
      }
      a[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[n.Memo] = s;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (p) {
            var o = h(r);
            o && o !== p && e(t, o, n)
          }
          var s = u(r);
          d && (s = s.concat(d(r)));
          for (var a = l(t), m = l(r), v = 0; v < s.length; ++v) {
            var y = s[v];
            if (!(i[y] || n && n[y] || m && m[y] || a && a[y])) {
              var g = f(r, y);
              try {
                c(t, y, g)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    70456: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => h,
        AlertBanner: () => p,
        Badge: () => g,
        Body: () => Je,
        Breadcrumbs: () => y,
        Button: () => ye,
        Checkbox: () => l,
        Code: () => tt,
        Dialog: () => b,
        Display: () => rt,
        Divider: () => De,
        Dropdown: () => i,
        Heading: () => ot,
        IconButton: () => Te,
        Label: () => st,
        Lightbox: () => o,
        Loader: () => qe,
        RadioGroup: () => d,
        Spinner: () => ne,
        Switch: () => s,
        Tag: () => m,
        Text: () => ct,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => lt,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Vh,
        Content: () => zh,
        Portal: () => Fh,
        Root: () => Bh,
        Trigger: () => Hh,
        useTooltipContext: () => Mh
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => tv,
        Close: () => sv,
        Content: () => Zm,
        Controls: () => rv,
        CssVars: () => cv,
        Download: () => lv,
        Image: () => ev,
        Keyboard: () => ov,
        LightboxContext: () => Vm,
        OpenIcon: () => Wm,
        Overlay: () => $m,
        Portal: () => Km,
        Reset: () => av,
        Root: () => Fm,
        RootImplContext: () => Um,
        Thumbnail: () => Xm,
        Trigger: () => qm,
        Zoom: () => iv,
        ZoomPan: () => Ym
      });
      var i = {};
      r.r(i), r.d(i, {
        Content: () => zb,
        Description: () => Xb,
        Hint: () => Wb,
        Label: () => qb,
        Option: () => Kb,
        OptionIcon: () => Zb,
        OptionText: () => $b,
        Portal: () => Yb,
        Root: () => Hb,
        ScrollArea: () => Vb,
        StatusIcon: () => Jb,
        StatusRoot: () => Qb,
        StatusText: () => e_,
        Trigger: () => Fb,
        TriggerIcon: () => Gb,
        TriggerText: () => Ub,
        useDropdownContext: () => Bb
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => S_,
        Input: () => P_,
        Label: () => C_,
        Root: () => x_,
        useSwitchContext: () => E_
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => V_,
        CheckMD: () => z_,
        CheckXL: () => F_,
        DashLG: () => G_,
        DashMD: () => U_,
        DashXL: () => q_
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => aw,
        ErrorText: () => lw,
        Input: () => iw,
        Label: () => sw,
        Root: () => ow
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => Pw,
        Hint: () => Cw,
        Input: () => xw,
        Label: () => Ew,
        Root: () => ww,
        RootContext: () => bw,
        StatusIcon: () => Tw,
        StatusRoot: () => Sw,
        StatusText: () => Ow,
        useTextAreaContext: () => _w
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => CE,
        DotMD: () => PE,
        DotXL: () => SE
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => vE,
        Input: () => OE,
        Label: () => mE,
        Option: () => TE,
        OptionDescription: () => NE,
        OptionLabel: () => RE,
        Options: () => pE,
        Root: () => hE,
        StatusIcon: () => gE,
        StatusRoot: () => yE,
        StatusText: () => bE,
        useRadioGroupContext: () => fE
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => jx,
        Control: () => Ox,
        Description: () => kx,
        Hint: () => Tx,
        Icon: () => Nx,
        Input: () => Rx,
        Label: () => Sx,
        PasswordButton: () => Ix,
        Root: () => Cx,
        StatusIcon: () => Lx,
        StatusRoot: () => Dx,
        StatusText: () => Ax
      });
      var h = {};
      r.r(h), r.d(h, {
        Body: () => iP,
        CloseButton: () => hP,
        Description: () => cP,
        ErrorText: () => fP,
        Footer: () => dP,
        Header: () => oP,
        Icon: () => aP,
        Link: () => uP,
        Root: () => nP,
        RootContext: () => tP,
        Title: () => lP,
        iconStatusMap: () => sP,
        useAlertContext: () => rP
      });
      var p = {};
      r.r(p), r.d(p, {
        Alert: () => DP,
        CloseButton: () => MP,
        Description: () => kP,
        Icon: () => IP,
        Link: () => AP,
        PaginationCounter: () => VP,
        PaginationNav: () => BP,
        PaginationNextButton: () => HP,
        PaginationPrevButton: () => zP,
        PaginationViewport: () => LP,
        Root: () => NP,
        RootContext: () => OP,
        iconStatusMap: () => jP,
        useAlertBannerContext: () => RP
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => rC,
        Icon: () => tC,
        Label: () => eC,
        Root: () => JP,
        RootContext: () => YP,
        useTagContext: () => QP
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => iS,
        CloseButton: () => sS,
        Description: () => rS,
        Icon: () => oS,
        Provider: () => YC,
        Root: () => tS,
        RootContext: () => JC,
        Viewport: () => QC,
        iconAppearanceMap: () => nS,
        useToastContext: () => eS
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => _S,
        Item: () => bS,
        OverflowMenu: () => wS,
        OverflowMenuItem: () => ES,
        Root: () => gS,
        RootContext: () => yS,
        useBreadcrumbsContext: () => vS
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => jS,
        Label: () => NS,
        Root: () => RS
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => hj,
        Button: () => bj,
        CloseButton: () => yj,
        Content: () => aj,
        Description: () => uj,
        Footer: () => mj,
        Header: () => pj,
        HeaderButton: () => gj,
        HeaderTitle: () => vj,
        Layout: () => fj,
        Overlay: () => sj,
        Portal: () => lj,
        Root: () => ij,
        ScrollArea: () => dj,
        Title: () => cj,
        Trigger: () => _j,
        useDialogContext: () => oj
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
          return [...D(t, r, n), Number.isNaN(o) ? 1 : o]
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
        D = (e, t, r) => {
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

      function L(e, t) {
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
        return L(e, -t)
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
                  hover: s || (e >= r ? L(i, n) : A(i, n)),
                  pressed: a || (e >= r ? L(i, o) : A(i, o))
                }
              });
            return e.current.style.setProperty(F.enabled.background, i), e.current.style.setProperty(F.enabled.border, i), e.current.style.setProperty(F.enabled.text, d), e.current.style.setProperty(F.hover.background, f), e.current.style.setProperty(F.hover.border, f), e.current.style.setProperty(F.hover.text, d), e.current.style.setProperty(F.focus.background, f), e.current.style.setProperty(F.focus.border, f), e.current.style.setProperty(F.focus.text, d), e.current.style.setProperty(F.pressed.background, h), e.current.style.setProperty(F.pressed.border, h), e.current.style.setProperty(F.pressed.text, d), e.current.style.setProperty(F.loading.background, f), e.current.style.setProperty(F.loading.border, f), e.current.style.setProperty(F.loading.text, d), () => {
              e.current?.style.removeProperty(F.enabled.background), e.current?.style.removeProperty(F.enabled.border), e.current?.style.removeProperty(F.enabled.text), e.current?.style.removeProperty(F.hover.background), e.current?.style.removeProperty(F.hover.border), e.current?.style.removeProperty(F.hover.text), e.current?.style.removeProperty(F.focus.background), e.current?.style.removeProperty(F.focus.border), e.current?.style.removeProperty(F.focus.text), e.current?.style.removeProperty(F.pressed.background), e.current?.style.removeProperty(F.pressed.border), e.current?.style.removeProperty(F.pressed.text), e.current?.style.removeProperty(F.loading.background), e.current?.style.removeProperty(F.loading.border), e.current?.style.removeProperty(F.loading.text)
            }
          }, [e.current, t, r, n, o, i, s, a, l, c, ...u])
        };
      var G = r(46219),
        q = r(32067),
        X = r(50078),
        W = r(71753);

      function K(e) {
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

      function $(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = K(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Y(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Q, J, ee = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        te = (Q = {
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
        }, J = e => {
          var t = Q.defaultClassName,
            r = Z(Z({}, Q.defaultVariants), e);
          for (var n in r) {
            var o, i = null !== (o = r[n]) && void 0 !== o ? o : Q.defaultVariants[n];
            if (null != i) {
              var s = i;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var a = Q.variantClassNames[n][s];
              a && (t += " " + a)
            }
          }
          for (var [l, c] of Q.compoundVariants) ee(l, r, Q.defaultVariants) && (t += " " + c);
          return t
        }, J.variants = () => Object.keys(Q.variantClassNames), J.classNames = {
          get base() {
            return Q.defaultClassName.split(" ")[0]
          },
          get variants() {
            return Y(Q.variantClassNames, e => Y(e, e => e.split(" ")[0]))
          }
        }, J);
      const re = "pageMD",
        ne = (0, M.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = re,
          testId: n,
          ...o
        }, i) => {
          const s = (0, X.zQ)(),
            a = "string" == typeof r ? r : r?.[s] ?? r.default ?? re,
            l = (0, V.v6)({
              className: te({
                size: a
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, _.jsx)(W.b, {
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
      var oe = r(4572),
        ie = r(90058),
        se = r.t(ie, 2);

      function ae(e) {
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

      function le(e, t) {
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
          t % 2 ? le(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ae(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : le(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ue(e, t) {
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
        fe = e => {
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
            for (var [c, u] of e.compoundVariants) de(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ue(e.variantClassNames, e => ue(e, e => e.split(" ")[0]))
            }
          }, t
        },
        he = fe({
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
      fe({
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
      var pe = fe({
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
        me = fe({
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
        ve = fe({
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
      const ye = (0, M.forwardRef)(({
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
          C = (0, X.zQ)(),
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
            className: he({
              appearance: a,
              size: S,
              fullWidth: c,
              iconLeft: !!n,
              iconRight: !!i,
              isLoading: u
            }),
            "data-testid": e
          }, T),
          R = n && se[n],
          N = i && se[i],
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
            className: (0, oe.clsx)(pe({
              size: S
            }), "foundry_17pcofy11")
          }), (0, _.jsx)(q.xV, {
            children: r
          }), N && (0, _.jsx)(N, {
            label: s || "",
            size: S,
            className: (0, oe.clsx)(pe({
              size: S
            }), me({
              fullWidth: c
            }))
          }), u && (0, _.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, _.jsx)(ne, {
              label: d || "",
              size: "inline" + ("LG" === S ? "LG" : "MD"),
              hideTrack: !0,
              className: ve({
                size: S
              })
            })
          })]
        })
      });

      function ge(e) {
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

      function be(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? be(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ge(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : be(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function we(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ee = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xe = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _e(_e({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ee(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return we(e.variantClassNames, e => we(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Pe = xe({
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
        Ce = xe({
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
        Se = xe({
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
      const Te = (0, M.forwardRef)(({
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
          x = (0, X.zQ)(),
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
            className: Ce({
              appearance: o,
              size: P,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, C),
          T = se[r],
          O = t ? q.DX : "button";
        return (0, _.jsxs)(O, {
          ref: E,
          ...S,
          children: [T && (0, _.jsx)(T, {
            label: n || "",
            size: P,
            className: Pe({
              size: P
            })
          }), (0, _.jsx)(q.xV, {
            children: a
          }), l && (0, _.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, _.jsx)(ne, {
              label: c || "",
              size: P && "SM" !== P ? `inline${P}` : "inlineMD",
              hideTrack: !0,
              className: Se({
                size: P
              })
            })
          })]
        })
      });

      function Oe(e) {
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

      function Re(e, t) {
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
          t % 2 ? Re(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Oe(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Re(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function je(e, t) {
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
        ke = (e => {
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
            for (var [c, u] of e.compoundVariants) Ie(c, n, e.defaultVariants) && (r += " " + u);
            return r
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
      const De = (0, M.forwardRef)(({
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
          className: (0, oe.clsx)(ke({
            thickness: r,
            orientation: t
          }), e),
          role: c,
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

      function Me(e) {
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

      function Be(e, t) {
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
        ze = "var(--foundry_9dxgbc2)",
        Ve = "var(--foundry_9dxgbc3)",
        Fe = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Me(Me({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) He(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Be(e.variantClassNames, e => Be(e, e => e.split(" ")[0]))
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
        Ue = "var(--foundry_9dxgbc0)",
        Ge = "var(--foundry_9dxgbc1)";
      const qe = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: i = "MD",
        ...s
      }, a) => {
        const l = (0, X.zQ)(),
          c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          u = (0, V.v6)({
            className: Fe({
              size: c
            }),
            "data-testid": t,
            style: (0, H.DI)({
              [Ue]: n?.pulseColorBackground,
              [Ge]: n?.pulseColorForeground,
              [ze]: n?.gradientColorBackground,
              [Ve]: n?.gradientColorForeground
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

      function Xe(e) {
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

      function Ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? We(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Xe(o)) in n ? Object.defineProperty(n, o, {
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

      function $e(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ze = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ye = e => {
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
            for (var [c, u] of e.compoundVariants) Ze(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $e(e.variantClassNames, e => $e(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Qe = Ye({
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
      const Je = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? q.DX : "p",
          a = (0, V.v6)({
            className: Qe({
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
      var et = Ye({
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
      const tt = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const i = e ? q.DX : "p",
            s = (0, V.v6)({
              className: et({
                appearance: r
              })
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        rt = (0, M.forwardRef)(({
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
      var nt = Ye({
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
      const ot = (0, M.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? q.DX : `h${t}`,
          s = (0, V.v6)(n, {
            className: nt({
              level: t
            })
          });
        return (0, _.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var it = Ye({
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
      const st = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? q.DX : "p",
          a = (0, V.v6)({
            className: it({
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
      var at = Ye({
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
      const lt = {
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
        ct = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? q.DX : lt[r] || "span",
            s = (0, V.v6)(n, {
              className: at({
                semantic: r
              })
            });
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var ut = r(79719),
        dt = r(44154);
      const ft = {
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

      function ht(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function pt(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -ht(t - e, r - t, n) + t : e > r ? +ht(e - r, r - t, n) + r : e
      }

      function mt(e, t, r) {
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

      function vt(e, t) {
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
          t % 2 ? vt(Object(r), !0).forEach(function(t) {
            mt(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const gt = {
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

      function bt(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const _t = ["enter", "leave"];
      const wt = ["gotpointercapture", "lostpointercapture"];

      function Et(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = wt.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function xt(e) {
        return "touches" in e
      }

      function Pt(e) {
        return xt(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Ct(e) {
        return xt(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function St(e, t) {
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

      function Tt(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return St(r, n)
      }

      function Ot(e) {
        const t = Ct(e);
        return xt(e) ? t.identifier : t.pointerId
      }

      function Rt(e) {
        const t = Ct(e);
        return [t.clientX, t.clientY]
      }

      function Nt(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function jt(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function It() {}

      function kt(...e) {
        return 0 === e.length ? It : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Dt(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Lt {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? jt(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            ft.addTo(t._distance, e)
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
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = jt(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
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
              return [pt(t, i, s, n), pt(r, a, l, o)]
            }(t._bounds, t.offset, _), t.delta = ft.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = ft.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            ft.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(yt(yt(yt({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class At extends Lt {
        constructor(...e) {
          super(...e), mt(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = ft.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = ft.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Pt(e)] : r.axisThreshold;
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
      const Mt = e => e,
        Bt = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => yt(yt({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return ft.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? ft.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Mt
          },
          threshold: e => ft.toVector(e, 0)
        },
        Ht = yt(yt({}, Bt), {}, {
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
        zt = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Vt = "undefined" != typeof window && window.document && window.document.createElement;

      function Ft() {
        return Vt && "ontouchstart" in window
      }
      const Ut = {
          isBrowser: Vt,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Ft(),
          touchscreen: Ft() || Vt && window.navigator.maxTouchPoints > 1,
          pointer: Vt && "onpointerdown" in window,
          pointerLock: Vt && "exitPointerLock" in window.document
        },
        Gt = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        qt = yt(yt({}, Ht), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Ut.pointerLock, Ut.touch && r ? "touch" : this.pointerLock ? "mouse" : Ut.pointer && !o ? "pointer" : Ut.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Ut.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const i = ft.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(ft.toVector(e)),
              distance: this.transform(ft.toVector(t)),
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
          axisThreshold: e => e ? yt(yt({}, Gt), e) : Gt,
          keyboardDisplacement: (e = 10) => e
        });

      function Xt(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, s] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && s < 0 || r > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Wt = yt(yt({}, Bt), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Ut.touch && Ut.gesture) return "gesture";
            if (Ut.touch && n) return "touch";
            if (Ut.touchscreen) {
              if (Ut.pointer) return "pointer";
              if (Ut.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = Dt(jt(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = Dt(jt(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, ft.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Kt = yt(yt({}, Ht), {}, {
          mouseOnly: (e = !0) => e
        }),
        $t = Ht,
        Zt = Ht,
        Yt = yt(yt({}, Ht), {}, {
          mouseOnly: (e = !0) => e
        }),
        Qt = new Map,
        Jt = new Map;

      function er(e) {
        Qt.set(e.key, e.engine), Jt.set(e.key, e.resolver)
      }
      const tr = {
          key: "drag",
          engine: class extends At {
            constructor(...e) {
              super(...e), mt(this, "ingKey", "dragging")
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Ot(e), r._pointerActive = !0, this.computeValues(Rt(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Pt(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Ot(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Rt(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = ft.sub(o, t._values), this.computeValues(o)), ft.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Ot(e);
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
              const t = zt[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, ft.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in zt && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: qt
        },
        rr = {
          key: "hover",
          engine: class extends At {
            constructor(...e) {
              super(...e), mt(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Rt(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Rt(e);
              t._movement = t._delta = ft.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Yt
        },
        nr = {
          key: "move",
          engine: class extends At {
            constructor(...e) {
              super(...e), mt(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Rt(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Rt(e),
                r = this.state;
              r._delta = ft.sub(t, r._values), ft.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Kt
        },
        or = {
          key: "pinch",
          engine: class extends Lt {
            constructor(...e) {
              super(...e), mt(this, "ingKey", "pinching"), mt(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? ft.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const o = St(...Array.from(r.values()));
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
              const r = St(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = ft.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Nt(e)[1] / 100 * t.offset[0], 0], ft.addTo(t._movement, t._delta), Xt(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Wt
        },
        ir = {
          key: "scroll",
          engine: class extends At {
            constructor(...e) {
              super(...e), mt(this, "ingKey", "scrolling")
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
              t._delta = ft.sub(r, t._values), ft.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: $t
        },
        sr = {
          key: "wheel",
          engine: class extends At {
            constructor(...e) {
              super(...e), mt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Nt(e), ft.addTo(t._movement, t._delta), Xt(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Zt
        };
      const ar = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Ut.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        lr = ["target", "eventOptions", "window", "enabled", "transform"];

      function cr(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = cr(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class ur {
        constructor(e, t) {
          mt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const r = gt[e];
              return e + (r && r[t] || t)
            }(t, r),
            a = yt(yt({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class dr {
        constructor() {
          mt(this, "_timeouts", new Map)
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
      class fr {
        constructor(e) {
          var t, r;
          mt(this, "gestures", new Set), mt(this, "_targetEventStore", new ur(this)), mt(this, "gestureEventStores", {}), mt(this, "gestureTimeoutStores", {}), mt(this, "handlers", {}), mt(this, "config", {}), mt(this, "pointerIds", new Set), mt(this, "touchIds", new Set), mt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && hr(t, "drag"), r.wheel && hr(t, "wheel"), r.scroll && hr(t, "scroll"), r.move && hr(t, "move"), r.pinch && hr(t, "pinch"), r.hover && hr(t, "hover")
        }
        setEventIds(e) {
          return xt(e) ? (this.touchIds = new Set(function(e) {
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
              }(n, lr);
            if (r.shared = cr({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, ar), t) {
              const e = Jt.get(t);
              r[t] = cr(yt({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Jt.get(e);
                t && (r[e] = cr(yt({
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
                  i = pr(r, o.eventOptions, !!n);
                o.enabled && new(Qt.get(t))(this, e, t).bind(i)
              }
              const o = pr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](yt(yt({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = kt(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: i
              } = Et(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function hr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new ur(e, t), e.gestureTimeoutStores[t] = new dr
      }
      const pr = (e, t, r) => (n, o, i, s = {}, a = !1) => {
          var l, c;
          const u = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = s.passive) && void 0 !== c ? c : t.passive;
          let f = a ? n : function(e, t = "", r = !1) {
            const n = gt[e],
              o = n && n[t] || t;
            return "on" + bt(e) + bt(o) + (function(e = !1, t) {
              return e && !_t.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        mr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function vr(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!Qt.has(n)) return;
        const s = r + "Start",
          a = r + "End";
        o[n] = e => {
          let n;
          return e.first && s in t && t[s](e), r in t && (n = t[r](e)), e.last && a in t && t[a](e), n
        }, i[n] = i[n] || {}
      }

      function yr(e, t = {}, r, n) {
        const o = B().useMemo(() => new fr(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), B().useEffect(o.effect.bind(o)), B().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function gr(e, t) {
        const r = ([tr, or, ir, sr, nr, rr].forEach(er), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) mr.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return vr(o, r, "onDrag", "drag", i, t), vr(o, r, "onWheel", "wheel", i, t), vr(o, r, "onScroll", "scroll", i, t), vr(o, r, "onPinch", "pinch", i, t), vr(o, r, "onMove", "move", i, t), vr(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return yr(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const br = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), _r = ([e, t]) => ({
        x: e,
        y: t
      }), wr = (e, t) => (e.x = t.x, e.y = t.y, e), Er = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, xr = (e, t, r) => Math.min(Math.max(e, t), r);

      function Pr() {
        return Pr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Pr.apply(null, arguments)
      }
      var Cr = ["shift", "alt", "meta", "mod", "ctrl"],
        Sr = {
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
        return (e && Sr[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Or(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Rr(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Tr(e)
        });
        return Pr({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Cr.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && Ir([Tr(e.key), Tr(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && kr([Tr(e.key), Tr(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Nr.clear()
      });
      var Nr = new Set;

      function jr(e) {
        return Array.isArray(e)
      }

      function Ir(e) {
        var t = Array.isArray(e) ? e : [e];
        Nr.has("meta") && Nr.forEach(function(e) {
          return ! function(e) {
            return Cr.includes(e)
          }(e) && Nr.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Nr.add(e.toLowerCase())
        })
      }

      function kr(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Nr.clear() : t.forEach(function(e) {
          return Nr.delete(e.toLowerCase())
        })
      }

      function Dr(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, jr(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Lr = (0, M.createContext)(void 0);

      function Ar(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, _.jsx)(Lr.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Mr(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Mr(e[n], t[n])
        }, !0) : e === t
      }
      var Br = (0, M.createContext)({
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
                  return !Mr(t, e)
                })
              })
            }, []);
          return (0, _.jsx)(Br.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, _.jsx)(Ar, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        zr = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Vr = "undefined" != typeof window ? M.useLayoutEffect : M.useEffect;

      function Fr(e, t, r, n) {
        var o = (0, M.useState)(null),
          i = o[0],
          s = o[1],
          a = (0, M.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = jr(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, M.useCallback)(t, null != u ? u : []),
          f = (0, M.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, M.useRef)(void 0);
            return Mr(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, M.useContext)(Br).enabledScopes,
          m = (0, M.useContext)(Lr);
        return Vr(function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Dr(e, ["input", "textarea", "select"]) || Dr(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void zr(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && Or(c, null == h ? void 0 : h.splitKey).forEach(function(r) {
                    var n, o = Rr(r, null == h ? void 0 : h.combinationKey);
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
                          y = Tr(f),
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
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (jr(n = u) ? n : n.split(o)).every(function(e) {
                          return Nr.has(e.trim().toLowerCase())
                        })) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void zr(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (Ir(Tr(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (kr(Tr(e.code)), a.current = !1, null != h && h.keyup && r(e, !0))
              },
              s = i || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Or(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                return m.addHotkey(Rr(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Or(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                  return m.removeHotkey(Rr(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                })
              }
          }
        }, [i, c, h, p]), s
      }

      function Ur(e) {
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

      function Gr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gr(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ur(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Xr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wr = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Kr = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qr(qr({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Wr(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xr(e.variantClassNames, e => Xr(e, e => e.split(" ")[0]))
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
      ut.os.registerPlugin(dt.L);
      const $r = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Zr = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Yr = (0, H.Tm)("var(--foundry_1a74xwb0)");
      var Qr = r(78322);

      function Jr(e, t) {
        var r = t && t.cache ? t.cache : dn,
          n = t && t.serializer ? t.serializer : on;
        return (t && t.strategy ? t.strategy : nn)(e, {
          cache: r,
          serializer: n
        })
      }

      function en(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, n), t.set(i, s)), s
      }

      function tn(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function rn(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function nn(e, t) {
        return rn(e, this, 1 === e.length ? en : tn, t.cache.create(), t.serializer)
      }
      var on = function() {
        return JSON.stringify(arguments)
      };

      function sn() {
        this.cache = Object.create(null)
      }
      sn.prototype.get = function(e) {
        return this.cache[e]
      }, sn.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var an, ln, cn, un, dn = {
          create: function() {
            return new sn
          }
        },
        fn = {
          variadic: function(e, t) {
            return rn(e, this, tn, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return rn(e, this, en, t.cache.create(), t.serializer)
          }
        };

      function hn(e) {
        return e.type === ln.literal
      }

      function pn(e) {
        return e.type === ln.argument
      }

      function mn(e) {
        return e.type === ln.number
      }

      function vn(e) {
        return e.type === ln.date
      }

      function yn(e) {
        return e.type === ln.time
      }

      function gn(e) {
        return e.type === ln.select
      }

      function bn(e) {
        return e.type === ln.plural
      }

      function _n(e) {
        return e.type === ln.pound
      }

      function wn(e) {
        return e.type === ln.tag
      }

      function En(e) {
        return !(!e || "object" != typeof e || e.type !== cn.number)
      }

      function xn(e) {
        return !(!e || "object" != typeof e || e.type !== cn.dateTime)
      }(un = an || (an = {}))[un.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", un[un.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", un[un.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", un[un.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", un[un.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", un[un.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", un[un.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", un[un.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", un[un.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", un[un.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", un[un.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", un[un.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", un[un.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", un[un.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", un[un.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", un[un.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", un[un.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", un[un.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", un[un.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", un[un.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", un[un.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", un[un.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", un[un.INVALID_TAG = 23] = "INVALID_TAG", un[un.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", un[un.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", un[un.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(ln || (ln = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(cn || (cn = {}));
      var Pn = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Cn = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Sn(e) {
        var t = {};
        return e.replace(Cn, function(e) {
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
      var Tn = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function On(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(Tn).filter(function(e) {
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

      function Rn(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var Nn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        jn = /^(@+)?(\+|#+)?[rs]?$/g,
        In = /(\*)(0+)|(#+)(0+)|(0+)/g,
        kn = /^(0+)$/;

      function Dn(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(jn, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function Ln(e) {
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

      function An(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !kn.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Mn(e) {
        return Ln(e) || {}
      }

      function Bn(e) {
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
              t.style = "unit", t.unit = Rn(o.options[0]);
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
              t = (0, Qr.__assign)((0, Qr.__assign)((0, Qr.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, Qr.__assign)((0, Qr.__assign)({}, e), Mn(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, Qr.__assign)((0, Qr.__assign)((0, Qr.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, Qr.__assign)((0, Qr.__assign)({}, e), Mn(t))
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
              o.options[0].replace(In, function(e, r, n, o, i, s) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (kn.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Nn.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Nn, function(e, r, n, o, i, s) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && s ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var i = o.options[0];
            "w" === i ? t = (0, Qr.__assign)((0, Qr.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, Qr.__assign)((0, Qr.__assign)({}, t), Dn(i)))
          } else if (jn.test(o.stem)) t = (0, Qr.__assign)((0, Qr.__assign)({}, t), Dn(o.stem));
          else {
            var s = Ln(o.stem);
            s && (t = (0, Qr.__assign)((0, Qr.__assign)({}, t), s));
            var a = An(o.stem);
            a && (t = (0, Qr.__assign)((0, Qr.__assign)({}, t), a))
          }
        }
        return t
      }
      var Hn, zn = {
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

      function Vn(e) {
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
        return "root" !== n && (r = e.maximize().region), (zn[r || ""] || zn[n || ""] || zn["".concat(n, "-001")] || zn["001"])[0]
      }
      var Fn = new RegExp("^".concat(Pn.source, "*")),
        Un = new RegExp("".concat(Pn.source, "*$"));

      function Gn(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var qn = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Xn = !!String.fromCodePoint,
        Wn = !!Object.fromEntries,
        Kn = !!String.prototype.codePointAt,
        $n = !!String.prototype.trimStart,
        Zn = !!String.prototype.trimEnd,
        Yn = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Qn = !0;
      try {
        Qn = "a" === (null === (Hn = so("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Hn ? void 0 : Hn[0])
      } catch (e) {
        Qn = !1
      }
      var Jn, eo = qn ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        to = Xn ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        ro = Wn ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        no = Kn ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        oo = $n ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Fn, "")
        },
        io = Zn ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Un, "")
        };

      function so(e, t) {
        return new RegExp(e, t)
      }
      if (Qn) {
        var ao = so("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Jn = function(e, t) {
          var r;
          return ao.lastIndex = t, null !== (r = ao.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Jn = function(e, t) {
        for (var r = [];;) {
          var n = no(e, t);
          if (void 0 === n || po(n) || mo(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return to.apply(void 0, r)
      };
      var lo, co, uo = function() {
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
                  return this.error(an.UNMATCHED_CLOSING_TAG, Gn(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && fo(this.peek() || 0)) {
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
                  type: ln.pound,
                  location: Gn(s, this.clonePosition())
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
              type: ln.literal,
              value: "<".concat(n, "/>"),
              location: Gn(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !fo(this.char())) return this.error(an.INVALID_TAG, Gn(s, this.clonePosition()));
              var a = this.clonePosition();
              return n !== this.parseTagName() ? this.error(an.UNMATCHED_CLOSING_TAG, Gn(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: ln.tag,
                  value: n,
                  children: i,
                  location: Gn(r, this.clonePosition())
                },
                err: null
              } : this.error(an.INVALID_TAG, Gn(s, this.clonePosition())))
            }
            return this.error(an.UNCLOSED_TAG, Gn(r, this.clonePosition()))
          }
          return this.error(an.INVALID_TAG, Gn(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && ho(this.char());) this.bump();
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
          var a = Gn(r, this.clonePosition());
          return {
            val: {
              type: ln.literal,
              value: n,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (fo(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return to.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), to(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE, Gn(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(an.EMPTY_ARGUMENT, Gn(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(an.MALFORMED_ARGUMENT, Gn(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE, Gn(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: ln.argument,
                  value: n,
                  location: Gn(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE, Gn(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(an.MALFORMED_ARGUMENT, Gn(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Jn(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Gn(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (s) {
            case "":
              return this.error(an.EXPECT_ARGUMENT_TYPE, Gn(i, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = io(y.val)).length) return this.error(an.EXPECT_ARGUMENT_STYLE, Gn(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Gn(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Gn(n, this.clonePosition());
              if (l && eo(null == l ? void 0 : l.style, "::", 0)) {
                var d = oo(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: ln.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(an.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = Vn(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += "a";
                      for (; s-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: cn.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Sn(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? ln.date : ln.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? ln.number : "date" === s ? ln.date : ln.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(an.EXPECT_SELECT_ARGUMENT_OPTIONS, Gn(p, (0, Qr.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(an.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Gn(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(an.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, an.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Gn(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: ln.select,
                  value: r,
                  options: ro(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: ln.plural,
                  value: r,
                  options: ro(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(an.INVALID_ARGUMENT_TYPE, Gn(i, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE, Gn(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(an.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Gn(r, this.clonePosition()));
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
            r = On(e)
          } catch (e) {
            return this.error(an.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: cn.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Bn(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, s = [], a = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(an.EXPECT_PLURAL_ARGUMENT_SELECTOR, an.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Gn(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? an.DUPLICATE_SELECT_ARGUMENT_SELECTOR : an.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? an.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : an.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Gn(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: Gn(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? an.EXPECT_SELECT_ARGUMENT_SELECTOR : an.EXPECT_PLURAL_ARGUMENT_SELECTOR, Gn(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(an.MISSING_OTHER_CLAUSE, Gn(this.clonePosition(), this.clonePosition())) : {
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
          var a = Gn(n, this.clonePosition());
          return o ? Yn(i *= r) ? {
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
          var t = no(this.message, e);
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
          if (eo(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && po(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function fo(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function ho(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function po(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function mo(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function vo(e) {
        e.forEach(function(e) {
          if (delete e.location, gn(e) || bn(e))
            for (var t in e.options) delete e.options[t].location, vo(e.options[t].value);
          else mn(e) && En(e.style) || (vn(e) || yn(e)) && xn(e.style) ? delete e.style.location : wn(e) && vo(e.children)
        })
      }

      function yo(e, t) {
        void 0 === t && (t = {}), t = (0, Qr.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new uo(e, t).parse();
        if (r.err) {
          var n = SyntaxError(an[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || vo(r.val), r.val
      }(co = lo || (lo = {})).MISSING_VALUE = "MISSING_VALUE", co.INVALID_VALUE = "INVALID_VALUE", co.MISSING_INTL_API = "MISSING_INTL_API";
      var go, bo = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, Qr.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        _o = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), lo.INVALID_VALUE, o) || this
          }
          return (0, Qr.__extends)(t, e), t
        }(bo),
        wo = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), lo.INVALID_VALUE, n) || this
          }
          return (0, Qr.__extends)(t, e), t
        }(bo),
        Eo = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), lo.MISSING_VALUE, r) || this
          }
          return (0, Qr.__extends)(t, e), t
        }(bo);

      function xo(e) {
        return "function" == typeof e
      }

      function Po(e, t, r, n, o, i, s) {
        if (1 === e.length && hn(e[0])) return [{
          type: go.literal,
          value: e[0].value
        }];
        for (var a = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (hn(u)) a.push({
            type: go.literal,
            value: u.value
          });
          else if (_n(u)) "number" == typeof i && a.push({
            type: go.literal,
            value: r.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new Eo(d, s);
            var f = o[d];
            if (pn(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), a.push({
              type: "string" == typeof f ? go.literal : go.object,
              value: f
            });
            else if (vn(u)) {
              var h = "string" == typeof u.style ? n.date[u.style] : xn(u.style) ? u.style.parsedOptions : void 0;
              a.push({
                type: go.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (yn(u)) h = "string" == typeof u.style ? n.time[u.style] : xn(u.style) ? u.style.parsedOptions : n.time.medium, a.push({
              type: go.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (mn(u))(h = "string" == typeof u.style ? n.number[u.style] : En(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), a.push({
              type: go.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (wn(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!xo(v)) throw new wo(m, "function", s);
                var y = v(Po(p, t, r, n, o, i).map(function(e) {
                  return e.value
                }));
                Array.isArray(y) || (y = [y]), a.push.apply(a, y.map(function(e) {
                  return {
                    type: "string" == typeof e ? go.literal : go.object,
                    value: e
                  }
                }))
              }
              if (gn(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new _o(u.value, f, Object.keys(u.options), s);
                a.push.apply(a, Po(g.value, t, r, n, o))
              } else if (bn(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new bo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', lo.MISSING_INTL_API, s);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new _o(u.value, f, Object.keys(u.options), s);
                a.push.apply(a, Po(g.value, t, r, n, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = a).length < 2 ? _ : _.reduce(function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === go.literal && t.type === go.literal ? r.value += t.value : e.push(t), e
        }, []);
        var _
      }

      function Co(e) {
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
      }(go || (go = {}));
      var So, To = function() {
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
                return e.length && t.type === go.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }, []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return Po(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
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
              u = (c.formatters, (0, Qr.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, Qr.__assign)((0, Qr.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (s = e.formats, (a = n) ? Object.keys(s).reduce(function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, Qr.__assign)((0, Qr.__assign)((0, Qr.__assign)({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
                return r[n] = (0, Qr.__assign)((0, Qr.__assign)({}, e[n]), t[n] || {}), r
              }, {})) : e
            }(s[t], a[t]), e
          }, (0, Qr.__assign)({}, s)) : s), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: Jr(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Co(i.number),
              strategy: fn.variadic
            }),
            getDateTimeFormat: Jr(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Co(i.dateTime),
              strategy: fn.variadic
            }),
            getPluralRules: Jr(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Co(i.pluralRules),
              strategy: fn.variadic
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
        }, e.__parse = yo, e.formats = {
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
      }(So || (So = {}));
      var Oo = function(e) {
          function t(r, n, o) {
            var i = this,
              s = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(s ? "\n".concat(s.message, "\n").concat(s.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, Qr.__extends)(t, e), t
        }(Error),
        Ro = function(e) {
          function t(t, r) {
            return e.call(this, So.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, Qr.__extends)(t, e), t
        }(Oo),
        No = function(e) {
          function t(t, r) {
            return e.call(this, So.INVALID_CONFIG, t, r) || this
          }
          return (0, Qr.__extends)(t, e), t
        }(Oo),
        jo = function(e) {
          function t(t, r) {
            return e.call(this, So.MISSING_DATA, t, r) || this
          }
          return (0, Qr.__extends)(t, e), t
        }(Oo),
        Io = function(e) {
          function t(t, r, n) {
            var o = e.call(this, So.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, Qr.__extends)(t, e), t
        }(Oo),
        ko = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, Qr.__extends)(t, e), t
        }(Io),
        Do = function(e) {
          function t(t, r) {
            var n = e.call(this, So.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            }).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, Qr.__extends)(t, e), t
        }(Oo);

      function Lo(e, t, r) {
        return void 0 === r && (r = {}), t.reduce(function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }, {})
      }
      var Ao = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Mo(e) {
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

      function Bo(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new Ro("No ".concat(t, " format named: ").concat(r)))
      }

      function Ho(e, t) {
        var r = t && t.cache ? t.cache : Xo,
          n = t && t.serializer ? t.serializer : Go;
        return (t && t.strategy ? t.strategy : Uo)(e, {
          cache: r,
          serializer: n
        })
      }

      function zo(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, n), t.set(i, s)), s
      }

      function Vo(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function Fo(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Uo(e, t) {
        return Fo(e, this, 1 === e.length ? zo : Vo, t.cache.create(), t.serializer)
      }
      var Go = function() {
        return JSON.stringify(arguments)
      };

      function qo() {
        this.cache = Object.create(null)
      }
      qo.prototype.get = function(e) {
        return this.cache[e]
      }, qo.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Xo = {
          create: function() {
            return new qo
          }
        },
        Wo = {
          variadic: function(e, t) {
            return Fo(e, this, Vo, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Fo(e, this, zo, t.cache.create(), t.serializer)
          }
        };

      function Ko(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Ho(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Wo.variadic
      }), Ho(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Wo.variadic
      }), Ho(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Wo.variadic
      }), Ho(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Wo.variadic
      }), Ho(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Wo.variadic
      });
      var $o = (0, Qr.__assign)((0, Qr.__assign)({}, Ao), {
        textComponent: M.Fragment
      });
      r(35255);
      var Zo = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? M.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = M.createContext(null)),
        Yo = (Zo.Consumer, Zo.Provider),
        Qo = Zo;

      function Jo(e, t) {
        return Object.keys(e).reduce(function(r, n) {
          return r[n] = (0, Qr.__assign)({
            timeZone: t
          }, e[n]), r
        }, {})
      }

      function ei(e, t) {
        return Object.keys((0, Qr.__assign)((0, Qr.__assign)({}, e), t)).reduce(function(r, n) {
          return r[n] = (0, Qr.__assign)((0, Qr.__assign)({}, e[n] || {}), t[n] || {}), r
        }, {})
      }

      function ti(e, t) {
        if (!t) return e;
        var r = To.formats;
        return (0, Qr.__assign)((0, Qr.__assign)((0, Qr.__assign)({}, r), e), {
          date: ei(Jo(r.date, t), Jo(e.date || {}, t)),
          time: ei(Jo(r.time, t), Jo(e.time || {}, t))
        })
      }
      Jr(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: fn.variadic
      }), Jr(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: fn.variadic
      }), Jr(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: fn.variadic
      }), Jr(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: fn.variadic
      }), Jr(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: fn.variadic
      });
      var ri = function(e, t, r, n, o) {
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
          if (Array.isArray(y) && 1 === y.length && y[0].type === ln.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, Qr.__assign)((0, Qr.__assign)({}, h), n || {}), s = ti(s, f), c = ti(c, f), !y) {
            if (!1 === u && "" === y) return y;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Do(r, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new ko('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, i, s, (0, Qr.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new ko('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new ko('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        ni = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function oi(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var s = r.format,
          a = s && Bo(o, "number", s, i) || {};
        return t(n, Lo(r, ni, a))
      }

      function ii(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return oi(e, t, n).format(r)
        } catch (t) {
          e.onError(new Io("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function si(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return oi(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new Io("Error formatting number.", e.locale, t))
        }
        return []
      }
      var ai = ["numeric", "style"];

      function li(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new bo('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', lo.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var s = r.format,
              a = !!s && Bo(o, "relative", s, i) || {};
            return t(n, Lo(r, ai, a))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new Io("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var ci = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function ui(e, t, r, n) {
        var o = e.locale,
          i = e.formats,
          s = e.onError,
          a = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, Qr.__assign)((0, Qr.__assign)({}, a && {
            timeZone: a
          }), l && Bo(i, t, l, s)),
          u = Lo(n, ci, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, Qr.__assign)((0, Qr.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function di(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return ui(e, "date", t, s).format(a)
        } catch (t) {
          e.onError(new Io("Error formatting date.", e.locale, t))
        }
        return String(a)
      }

      function fi(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return ui(e, "time", t, s).format(a)
        } catch (t) {
          e.onError(new Io("Error formatting time.", e.locale, t))
        }
        return String(a)
      }

      function hi(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = r[2],
          a = void 0 === s ? {} : s,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = Lo(a, ci, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new Io("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function pi(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return ui(e, "date", t, s).formatToParts(a)
        } catch (t) {
          e.onError(new Io("Error formatting date.", e.locale, t))
        }
        return []
      }

      function mi(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return ui(e, "time", t, s).formatToParts(a)
        } catch (t) {
          e.onError(new Io("Error formatting time.", e.locale, t))
        }
        return []
      }
      var vi = ["type"];

      function yi(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new bo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', lo.MISSING_INTL_API));
        var s = Lo(n, vi);
        try {
          return t(o, s).select(r)
        } catch (e) {
          i(new Io("Error formatting plural.", o, e))
        }
        return "other"
      }
      var gi = ["type", "style"],
        bi = Date.now();

      function _i(e, t, r, n) {
        void 0 === n && (n = {});
        var o = wi(e, t, r, n).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function wi(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || i(new bo('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', lo.MISSING_INTL_API));
        var s = Lo(n, gi);
        try {
          var a = {},
            l = r.map(function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(bi, "_").concat(e, "_").concat(bi)
                }(t);
                return a[r] = e, r
              }
              return String(e)
            });
          return t(o, s).formatToParts(l).map(function(e) {
            return "literal" === e.type ? e : (0, Qr.__assign)((0, Qr.__assign)({}, e), {
              value: a[e.value] || e.value
            })
          })
        } catch (e) {
          i(new Io("Error formatting list.", o, e))
        }
        return r
      }
      var Ei, xi, Pi, Ci = ["style", "type", "fallback", "languageDisplay"];

      function Si(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new bo('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', lo.MISSING_INTL_API));
        var s = Lo(n, Ci);
        try {
          return t(o, s).of(r)
        } catch (e) {
          i(new Io("Error formatting display name.", o, e))
        }
      }

      function Ti(e, t) {
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
              o = Jr(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Mo(e.dateTime),
                strategy: fn.variadic
              }),
              i = Jr(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Mo(e.number),
                strategy: fn.variadic
              }),
              s = Jr(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Qr.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Mo(e.pluralRules),
                strategy: fn.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: Jr(function(e, t, r, n) {
                return new To(e, t, r, (0, Qr.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: s
                  }
                }, n || {}))
              }, {
                cache: Mo(e.message),
                strategy: fn.variadic
              }),
              getRelativeTimeFormat: Jr(function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, Qr.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Mo(e.relativeTime),
                strategy: fn.variadic
              }),
              getPluralRules: s,
              getListFormat: Jr(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, Qr.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Mo(e.list),
                strategy: fn.variadic
              }),
              getDisplayNames: Jr(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Qr.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Mo(e.displayNames),
                strategy: fn.variadic
              })
            }
          }(t),
          n = (0, Qr.__assign)((0, Qr.__assign)({}, Ao), e),
          o = n.locale,
          i = n.defaultLocale,
          s = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && s ? s(new jo('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && s && s(new jo('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new No('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, Qr.__assign)((0, Qr.__assign)({}, n), {
            formatters: r,
            formatNumber: ii.bind(null, n, r.getNumberFormat),
            formatNumberToParts: si.bind(null, n, r.getNumberFormat),
            formatRelativeTime: li.bind(null, n, r.getRelativeTimeFormat),
            formatDate: di.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: pi.bind(null, n, r.getDateTimeFormat),
            formatTime: fi.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: hi.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: mi.bind(null, n, r.getDateTimeFormat),
            formatPlural: yi.bind(null, n, r.getPluralRules),
            formatMessage: ri.bind(null, n, r),
            $t: ri.bind(null, n, r),
            formatList: _i.bind(null, n, r.getListFormat),
            formatListToParts: wi.bind(null, n, r.getListFormat),
            formatDisplayName: Si.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Ei || (Ei = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(xi || (xi = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Pi || (Pi = {}));
      var Oi, Ri = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Ni = {
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

      function ji(e) {
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
        return "root" !== n && (r = e.maximize().region), (Ni[r || ""] || Ni[n || ""] || Ni["".concat(n, "-001")] || Ni["001"])[0]
      }
      var Ii = new RegExp("^".concat(Ri.source, "*")),
        ki = new RegExp("".concat(Ri.source, "*$"));

      function Di(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Li = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Ai = !!String.fromCodePoint,
        Mi = !!Object.fromEntries,
        Bi = !!String.prototype.codePointAt,
        Hi = !!String.prototype.trimStart,
        zi = !!String.prototype.trimEnd,
        Vi = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Fi = !0;
      try {
        Fi = "a" === (null === (Oi = Yi("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Oi ? void 0 : Oi[0])
      } catch (e) {
        Fi = !1
      }
      var Ui, Gi, qi = Li ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Xi = Ai ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Wi = Mi ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        Ki = Bi ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        $i = Hi ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Ii, "")
        },
        Zi = zi ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(ki, "")
        };

      function Yi(e, t) {
        return new RegExp(e, t)
      }
      if (Fi) {
        var Qi = Yi("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Ui = function(e, t) {
          var r;
          return Qi.lastIndex = t, null !== (r = Qi.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Ui = function(e, t) {
        for (var r = [];;) {
          var n = Ki(e, t);
          if (void 0 === n || ts(n) || rs(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Xi.apply(void 0, r)
      };

      function Ji(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function es(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function ts(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function rs(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function ns(e) {
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
                  return this.error(Ei.UNMATCHED_CLOSING_TAG, Di(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Ji(this.peek() || 0)) {
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
                  type: xi.pound,
                  location: Di(s, this.clonePosition())
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
              type: xi.literal,
              value: "<".concat(n, "/>"),
              location: Di(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Ji(this.char())) return this.error(Ei.INVALID_TAG, Di(s, this.clonePosition()));
              var a = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Ei.UNMATCHED_CLOSING_TAG, Di(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: xi.tag,
                  value: n,
                  children: i,
                  location: Di(r, this.clonePosition())
                },
                err: null
              } : this.error(Ei.INVALID_TAG, Di(s, this.clonePosition())))
            }
            return this.error(Ei.UNCLOSED_TAG, Di(r, this.clonePosition()))
          }
          return this.error(Ei.INVALID_TAG, Di(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && es(this.char());) this.bump();
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
          var a = Di(r, this.clonePosition());
          return {
            val: {
              type: xi.literal,
              value: n,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Ji(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Xi.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Xi(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ei.EXPECT_ARGUMENT_CLOSING_BRACE, Di(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ei.EMPTY_ARGUMENT, Di(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Ei.MALFORMED_ARGUMENT, Di(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ei.EXPECT_ARGUMENT_CLOSING_BRACE, Di(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: xi.argument,
                  value: n,
                  location: Di(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ei.EXPECT_ARGUMENT_CLOSING_BRACE, Di(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Ei.MALFORMED_ARGUMENT, Di(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Ui(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Di(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (s) {
            case "":
              return this.error(Ei.EXPECT_ARGUMENT_TYPE, Di(i, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Zi(y.val)).length) return this.error(Ei.EXPECT_ARGUMENT_STYLE, Di(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Di(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Di(n, this.clonePosition());
              if (l && qi(null == l ? void 0 : l.style, "::", 0)) {
                var d = $i(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: xi.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Ei.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = ji(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += "a";
                      for (; s-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: Pi.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Sn(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? xi.date : xi.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? xi.number : "date" === s ? xi.date : xi.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ei.EXPECT_SELECT_ARGUMENT_OPTIONS, Di(p, (0, Qr.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Ei.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Di(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Ei.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ei.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Di(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: xi.select,
                  value: r,
                  options: Wi(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: xi.plural,
                  value: r,
                  options: Wi(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Ei.INVALID_ARGUMENT_TYPE, Di(i, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ei.EXPECT_ARGUMENT_CLOSING_BRACE, Di(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ei.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Di(r, this.clonePosition()));
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
            r = On(e)
          } catch (e) {
            return this.error(Ei.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Pi.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Bn(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, s = [], a = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Ei.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ei.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Di(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? Ei.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ei.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Ei.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ei.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Di(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: Di(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? Ei.EXPECT_SELECT_ARGUMENT_SELECTOR : Ei.EXPECT_PLURAL_ARGUMENT_SELECTOR, Di(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Ei.MISSING_OTHER_CLAUSE, Di(this.clonePosition(), this.clonePosition())) : {
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
          var a = Di(n, this.clonePosition());
          return o ? Vi(i *= r) ? {
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
          var t = Ki(this.message, e);
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
          if (qi(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && ts(this.char());) this.bump()
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
      }(Gi || (Gi = {}));
      var os = function(e, t, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var s = ns(n),
            a = ri.apply(void 0, (0, Qr.__spreadArray)([e, t, r, s], o, !1));
          return Array.isArray(a) ? M.Children.toArray(a) : a
        },
        is = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, Qr.__rest)(e, ["defaultRichTextElements"]),
            o = ns(r),
            i = Ti((0, Qr.__assign)((0, Qr.__assign)((0, Qr.__assign)({}, $o), n), {
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
          return (0, Qr.__assign)((0, Qr.__assign)({}, i), {
            formatMessage: os.bind(null, s, i.formatters),
            $t: os.bind(null, s, i.formatters)
          })
        };

      function ss(e) {
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
      var as = function(e) {
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
            intl: is(ss(t.props), t.cache),
            prevConfig: ss(t.props)
          }, t
        }
        return (0, Qr.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = ss(e);
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
            intl: is(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return Ko(this.state.intl), M.createElement(Yo, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = $o, t
      }(M.PureComponent);
      const ls = as;

      function cs() {
        var e = M.useContext(Qo);
        return Ko(e), e
      }
      var us, ds;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(us || (us = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(ds || (ds = {}));
      var fs = function(e) {
        var t = cs(),
          r = e.value,
          n = e.children,
          o = (0, Qr.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function hs(e) {
        var t = function(t) {
          var r = cs(),
            n = t.value,
            o = t.children,
            i = (0, Qr.__rest)(t, ["value", "children"]),
            s = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(s, i) : r.formatTimeToParts(s, i))
        };
        return t.displayName = ds[e], t
      }

      function ps(e) {
        var t = function(t) {
          var r = cs(),
            n = t.value,
            o = t.children,
            i = (0, Qr.__rest)(t, ["value", "children"]),
            s = r[e](n, i);
          if ("function" == typeof o) return o(s);
          var a = r.textComponent || M.Fragment;
          return M.createElement(a, null, s)
        };
        return t.displayName = us[e], t
      }
      fs.displayName = "FormattedNumberParts", fs.displayName = "FormattedNumberParts", ps("formatDate"), ps("formatTime"), ps("formatNumber"), ps("formatList"), ps("formatDisplayName"), hs("formatDate"), hs("formatTime");
      const ms = ({
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
          }, [r]), o ? (0, _.jsx)(ls, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        vs = {
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
      var ys = r(25778);
      class gs {
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
          return r ? t : xr(t, this.max[e], this.min[e])
        }
      }
      class bs {
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
      class _s {
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
      class ws {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", wr(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (wr(this.prevTap, {
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
      class Es {
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
          e.src = this.thumbnail.currentSrc ?? "", await br(e)
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
      class xs {
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
      class Ps extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Cs extends _s {
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
          if (!this.dispatch(e, new Ps(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class Ss {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = _r(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, wr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = _r(e);
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
            i = wr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = wr({
            x: 0,
            y: 0
          }, i);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, wr(this.startPan, i)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((a = s).x !== l.x || a.y !== l.y || n || o) && (wr(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class Ts extends _s {
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
          super(), this.width = e, this.height = t, this.opener = new Es({
            slide: this
          }), this.bounds = new gs({
            slide: this
          }), this.dragHandler = new ws({
            slide: this
          }), this.scrollWheel = new xs({
            slide: this
          }), this.zoomHandler = new Ss({
            slide: this
          }), this.zoomLevels = new bs({
            options: r
          }), this.tapHandler = new Cs({
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
          r || (e = xr(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Er(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Er(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), wr(this.pan, this.bounds.center)
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
      const Os = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        Rs = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        Ns = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        js = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        Is = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        ks = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        Ds = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        Ls = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        As = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        Ms = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Bs = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };
      var Hs = "foundry_bc732x1";
      const zs = (0, M.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Fr(e, e => r?.(e), [r]), (0, _.jsx)(Je, {
        size: "XS",
        className: (0, oe.clsx)("foundry_bc732x0", {
          [Hs]: t
        }),
        asChild: !0,
        children: (0, _.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Vs = na(),
        Fs = e => Js(e, Vs),
        Us = na();
      Fs.write = e => Js(e, Us);
      var Gs = na();
      Fs.onStart = e => Js(e, Gs);
      var qs = na();
      Fs.onFrame = e => Js(e, qs);
      var Xs = na();
      Fs.onFinish = e => Js(e, Xs);
      var Ws = [];
      Fs.setTimeout = (e, t) => {
        const r = Fs.now() + t,
          n = () => {
            const e = Ws.findIndex(e => e.cancel == n);
            ~e && Ws.splice(e, 1), Ys -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Ws.splice(Ks(r), 0, o), Ys += 1, ea(), o
      };
      var Ks = e => ~(~Ws.findIndex(t => t.time > e) || ~Ws.length);
      Fs.cancel = e => {
        Gs.delete(e), qs.delete(e), Xs.delete(e), Vs.delete(e), Us.delete(e)
      }, Fs.sync = e => {
        Qs = !0, Fs.batchedUpdates(e), Qs = !1
      }, Fs.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Fs.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Gs.delete(r), t = null
        }, n
      };
      var $s = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Fs.use = e => $s = e, Fs.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Fs.batchedUpdates = e => e(), Fs.catch = console.error, Fs.frameLoop = "always", Fs.advance = () => {
        "demand" !== Fs.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : ra()
      };
      var Zs = -1,
        Ys = 0,
        Qs = !1;

      function Js(e, t) {
        Qs ? (t.delete(e), e(0)) : (t.add(e), ea())
      }

      function ea() {
        Zs < 0 && (Zs = 0, "demand" !== Fs.frameLoop && $s(ta))
      }

      function ta() {
        ~Zs && ($s(ta), Fs.batchedUpdates(ra))
      }

      function ra() {
        const e = Zs;
        Zs = Fs.now();
        const t = Ks(Zs);
        t && (oa(Ws.splice(0, t), e => e.handler()), Ys -= t), Ys ? (Gs.flush(), Vs.flush(e ? Math.min(64, Zs - e) : 16.667), qs.flush(), Us.flush(), Xs.flush()) : Zs = -1
      }

      function na() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Ys += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Ys -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Ys -= t.size, oa(t, t => t(r) && e.add(t)), Ys += e.size, t = e)
          }
        }
      }

      function oa(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Fs.catch(e)
          }
        })
      }
      var ia = Object.defineProperty,
        sa = {};

      function aa() {}((e, t) => {
        for (var r in t) ia(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(sa, {
        assign: () => wa,
        colors: () => ga,
        createStringInterpolator: () => pa,
        skipAnimation: () => ba,
        to: () => ma,
        willAdvance: () => _a
      });
      var la = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function ca(e, t) {
        if (la.arr(e)) {
          if (!la.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var ua = (e, t) => e.forEach(t);

      function da(e, t, r) {
        if (la.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var fa = e => la.und(e) ? [] : la.arr(e) ? e : [e];

      function ha(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), ua(r, t)
        }
      }
      var pa, ma, va = (e, ...t) => ha(e, e => e(...t)),
        ya = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        ga = null,
        ba = !1,
        _a = aa,
        wa = e => {
          e.to && (ma = e.to), e.now && (Fs.now = e.now), void 0 !== e.colors && (ga = e.colors), null != e.skipAnimation && (ba = e.skipAnimation), e.createStringInterpolator && (pa = e.createStringInterpolator), e.requestAnimationFrame && Fs.use(e.requestAnimationFrame), e.batchedUpdates && (Fs.batchedUpdates = e.batchedUpdates), e.willAdvance && (_a = e.willAdvance), e.frameLoop && (Fs.frameLoop = e.frameLoop)
        },
        Ea = new Set,
        xa = [],
        Pa = [],
        Ca = 0,
        Sa = {
          get idle() {
            return !Ea.size && !xa.length
          },
          start(e) {
            Ca > e.priority ? (Ea.add(e), Fs.onStart(Ta)) : (Oa(e), Fs(Na))
          },
          advance: Na,
          sort(e) {
            if (Ca) Fs.onFrame(() => Sa.sort(e));
            else {
              const t = xa.indexOf(e);
              ~t && (xa.splice(t, 1), Ra(e))
            }
          },
          clear() {
            xa = [], Ea.clear()
          }
        };

      function Ta() {
        Ea.forEach(Oa), Ea.clear(), Fs(Na)
      }

      function Oa(e) {
        xa.includes(e) || Ra(e)
      }

      function Ra(e) {
        xa.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(xa), 0, e)
      }

      function Na(e) {
        const t = Pa;
        for (let r = 0; r < xa.length; r++) {
          const n = xa[r];
          Ca = n.priority, n.idle || (_a(n), n.advance(e), n.idle || t.push(n))
        }
        return Ca = 0, (Pa = xa).length = 0, (xa = t).length > 0
      }
      var ja = "[-+]?\\d*\\.?\\d+",
        Ia = ja + "%";

      function ka(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Da = new RegExp("rgb" + ka(ja, ja, ja)),
        La = new RegExp("rgba" + ka(ja, ja, ja, ja)),
        Aa = new RegExp("hsl" + ka(ja, Ia, Ia)),
        Ma = new RegExp("hsla" + ka(ja, Ia, Ia, ja)),
        Ba = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ha = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        za = /^#([0-9a-fA-F]{6})$/,
        Va = /^#([0-9a-fA-F]{8})$/;

      function Fa(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Ua(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = Fa(o, n, e + 1 / 3),
          s = Fa(o, n, e),
          a = Fa(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function Ga(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function qa(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Xa(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Wa(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Ka(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = za.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : ga && void 0 !== ga[e] ? ga[e] : (t = Da.exec(e)) ? (Ga(t[1]) << 24 | Ga(t[2]) << 16 | Ga(t[3]) << 8 | 255) >>> 0 : (t = La.exec(e)) ? (Ga(t[1]) << 24 | Ga(t[2]) << 16 | Ga(t[3]) << 8 | Xa(t[4])) >>> 0 : (t = Ba.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Va.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ha.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Aa.exec(e)) ? (255 | Ua(qa(t[1]), Wa(t[2]), Wa(t[3]))) >>> 0 : (t = Ma.exec(e)) ? (Ua(qa(t[1]), Wa(t[2]), Wa(t[3])) | Xa(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var $a = (e, t, r) => {
          if (la.fun(e)) return e;
          if (la.arr(e)) return $a({
            range: e,
            output: t,
            extrapolate: r
          });
          if (la.str(e.output[0])) return pa(e);
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
        Za = 1.70158,
        Ya = 1.525 * Za,
        Qa = Za + 1,
        Ja = 2 * Math.PI / 3,
        el = 2 * Math.PI / 4.5,
        tl = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        rl = {
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
          easeInBack: e => Qa * e * e * e - Za * e * e,
          easeOutBack: e => 1 + Qa * Math.pow(e - 1, 3) + Za * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Ya) / 2 : (Math.pow(2 * e - 2, 2) * ((Ya + 1) * (2 * e - 2) + Ya) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Ja),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Ja) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * el) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * el) / 2 + 1,
          easeInBounce: e => 1 - tl(1 - e),
          easeOutBounce: tl,
          easeInOutBounce: e => e < .5 ? (1 - tl(1 - 2 * e)) / 2 : (1 + tl(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        nl = Symbol.for("FluidValue.get"),
        ol = Symbol.for("FluidValue.observers"),
        il = e => Boolean(e && e[nl]),
        sl = e => e && e[nl] ? e[nl]() : e,
        al = e => e[ol] || null;

      function ll(e, t) {
        const r = e[ol];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var cl = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            ul(this, e)
          }
        },
        ul = (e, t) => pl(e, nl, t);

      function dl(e, t) {
        if (e[nl]) {
          let r = e[ol];
          r || pl(e, ol, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function fl(e, t) {
        const r = e[ol];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[ol] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var hl, pl = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        ml = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        vl = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        yl = new RegExp(`(${ml.source})(%|[a-z]+)`, "i"),
        gl = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        bl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        _l = e => {
          const [t, r] = wl(e);
          if (!t || ya()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && bl.test(r) ? _l(r) : r || e
        },
        wl = e => {
          const t = bl.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        El = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        xl = e => {
          hl || (hl = ga ? new RegExp(`(${Object.keys(ga).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => sl(e).replace(bl, _l).replace(vl, Ka).replace(hl, Ka)),
            r = t.map(e => e.match(ml).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => $a({
              ...e,
              output: t
            }));
          return e => {
            const r = !yl.test(t[0]) && t.find(e => yl.test(e))?.replace(ml, "");
            let n = 0;
            return t[0].replace(ml, () => `${o[n++](e)}${r||""}`).replace(gl, El)
          }
        },
        Pl = "react-spring: ",
        Cl = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Pl}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Sl = Cl(console.warn),
        Tl = Cl(console.warn);

      function Ol(e) {
        return la.str(e) && ("#" == e[0] || /\d/.test(e) || !ya() && bl.test(e) || e in (ga || {}))
      }
      var Rl = ya() ? M.useEffect : M.useLayoutEffect;

      function Nl() {
        const e = (0, M.useState)()[1],
          t = (() => {
            const e = (0, M.useRef)(!1);
            return Rl(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var jl = e => (0, M.useEffect)(e, Il),
        Il = [];

      function kl(e) {
        const t = (0, M.useRef)();
        return (0, M.useEffect)(() => {
          t.current = e
        }), t.current
      }
      var Dl = Symbol.for("Animated:node"),
        Ll = e => e && e[Dl],
        Al = (e, t) => {
          return r = e, n = Dl, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Ml = e => e && e[Dl] && e[Dl].getPayload(),
        Bl = class {
          constructor() {
            Al(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Hl = class extends Bl {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, la.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Hl(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return la.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, la.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        zl = class extends Hl {
          constructor(e) {
            super(0), this._string = null, this._toString = $a({
              output: [e, e]
            })
          }
          static create(e) {
            return new zl(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (la.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = $a({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Vl = {
          dependencies: null
        },
        Fl = class extends Bl {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return da(this.source, (r, n) => {
              var o;
              (o = r) && o[Dl] === o ? t[n] = r.getValue(e) : il(r) ? t[n] = sl(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && ua(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return da(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Vl.dependencies && il(e) && Vl.dependencies.add(e);
            const t = Ml(e);
            t && ua(t, e => this.add(e))
          }
        },
        Ul = class extends Fl {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Ul(e)
          }
          getValue() {
            return this.source.map(e => e.getValue())
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Gl)), !0)
          }
        };

      function Gl(e) {
        return (Ol(e) ? zl : Hl).create(e)
      }

      function ql(e) {
        const t = Ll(e);
        return t ? t.constructor : la.arr(e) ? Ul : Ol(e) ? zl : Hl
      }
      var Xl = (e, t) => {
          const r = !la.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, M.forwardRef)((n, o) => {
            const i = (0, M.useRef)(null),
              s = r && (0, M.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (la.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return Vl.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Fl(e), Vl.dependencies = null, [e, r]
              }(n, t),
              c = Nl(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && c()
              },
              d = new Wl(u, l),
              f = (0, M.useRef)();
            Rl(() => (f.current = d, ua(l, e => dl(e, d)), () => {
              f.current && (ua(f.current.deps, e => fl(e, f.current)), Fs.cancel(f.current.update))
            })), (0, M.useEffect)(u, []), jl(() => () => {
              const e = f.current;
              ua(e.deps, t => fl(t, e))
            });
            const h = t.getComponentProps(a.getValue());
            return M.createElement(e, {
              ...h,
              ref: s
            })
          })
        },
        Wl = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Fs.write(this.update)
          }
        },
        Kl = Symbol.for("AnimatedComponent"),
        $l = e => la.str(e) ? e : e && la.str(e.displayName) ? e.displayName : la.fun(e) && e.name || null;

      function Zl(e, ...t) {
        return la.fun(e) ? e(...t) : e
      }
      var Yl = (e, t) => !0 === e || !!(t && e && (la.fun(e) ? e(t) : fa(e).includes(t))),
        Ql = (e, t) => la.obj(e) ? t && e[t] : e,
        Jl = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        ec = e => e,
        tc = (e, t = ec) => {
          let r = rc;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            la.und(r) || (n[o] = r)
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
          if (da(e, (e, n) => {
              nc[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return da(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function ic(e) {
        return e = sl(e), la.arr(e) ? e.map(ic) : Ol(e) ? sa.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function sc(e) {
        return la.fun(e) || la.arr(e) && la.obj(e[0])
      }
      var ac = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: rl.linear,
          clamp: !1
        },
        lc = class {
          constructor() {
            this.velocity = 0, Object.assign(this, ac)
          }
        };

      function cc(e, t) {
        if (la.und(t.decay)) {
          const r = !la.und(t.tension) || !la.und(t.friction);
          !r && la.und(t.frequency) && la.und(t.damping) && la.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var uc = [],
        dc = class {
          constructor() {
            this.changed = !1, this.values = uc, this.toValues = null, this.fromValues = uc, this.config = new lc, this.immediate = !1
          }
        };

      function fc(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, c, u = Yl(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            la.und(r.pause) || (o.paused = Yl(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Yl(e, t)), l = Zl(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - Fs.now()
          }

          function f() {
            l > 0 && !sa.skipAnimation ? (o.delayed = !0, c = Fs.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
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
      var hc = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? vc(e.get()) : t.every(e => e.noop) ? pc(e.get()) : mc(e.get(), t.every(e => e.finished)),
        pc = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        mc = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        vc = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function yc(e, t, r, n) {
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
          const c = tc(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && vc(n) || o !== r.asyncId && mc(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new bc,
                s = new _c;
              return (async () => {
                if (sa.skipAnimation) throw gc(r), s.result = mc(n, !1), d(s), s;
                h(i);
                const a = la.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, da(c, (e, t) => {
                  la.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return h(i), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (sa.skipAnimation) return gc(r), mc(n, !1);
          try {
            let t;
            t = la.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = mc(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof bc) m = e.result;
            else {
              if (!(e instanceof _c)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? a : void 0, r.promise = i ? l : void 0)
          }
          return la.fun(s) && Fs.batchedUpdates(() => {
            s(m, n, n.item)
          }), m
        })() : l
      }

      function gc(e, t) {
        ha(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var bc = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        _c = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        wc = e => e instanceof xc,
        Ec = 1,
        xc = class extends cl {
          constructor() {
            super(...arguments), this.id = Ec++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Ll(this);
            return e && e.getValue()
          }
          to(...e) {
            return sa.to(this, e)
          }
          interpolate(...e) {
            return Sl(`${Pl}The "interpolate" function is deprecated in v9 (use "to" instead)`), sa.to(this, e)
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
            ll(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Sa.sort(this), ll(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Pc = Symbol.for("SpringPhase"),
        Cc = e => (1 & e[Pc]) > 0,
        Sc = e => (2 & e[Pc]) > 0,
        Tc = e => (4 & e[Pc]) > 0,
        Oc = (e, t) => t ? e[Pc] |= 3 : e[Pc] &= -3,
        Rc = (e, t) => t ? e[Pc] |= 4 : e[Pc] &= -5,
        Nc = class extends xc {
          constructor(e, t) {
            if (super(), this.animation = new dc, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !la.und(e) || !la.und(t)) {
              const r = la.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              la.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Sc(this) || this._state.asyncTo) || Tc(this)
          }
          get goal() {
            return sl(this.animation.to)
          }
          get velocity() {
            const e = Ll(this);
            return e instanceof Hl ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return Cc(this)
          }
          get isAnimating() {
            return Sc(this)
          }
          get isPaused() {
            return Tc(this)
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
            } = n, s = Ml(n.to);
            !s && il(n.to) && (o = fa(sl(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const c = a.constructor == zl ? 1 : s ? s[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = la.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (la.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(a.lastPosition - d) <= f, s = o * n
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !la.und(n),
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
            const a = Ll(this),
              l = a.getValue();
            if (t) {
              const e = sl(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Fs.batchedUpdates(() => {
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
            if (Sc(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Fs.batchedUpdates(() => {
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
            return la.und(e) ? (r = this.queue || [], this.queue = []) : r = [la.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => hc(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), gc(this._state, e && this._lastCallId), Fs.batchedUpdates(() => this._stop(t, e)), this
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
            r = la.obj(r) ? r[t] : r, (null == r || sc(r)) && (r = void 0), n = la.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return Cc(this) || (e.reverse && ([r, n] = [n, r]), n = sl(n), la.und(n) ? Ll(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, tc(e, (e, t) => /^on/.test(t) ? Ql(e, r) : e)), Mc(this, e, "onProps"), Bc(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return fc(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  Tc(this) || (Rc(this, !0), va(i.pauseQueue), Bc(this, "onPause", mc(this, jc(this, this.animation.to)), this))
                },
                resume: () => {
                  Tc(this) && (Rc(this, !1), Sc(this) && this._resume(), va(i.resumeQueue), Bc(this, "onResume", mc(this, jc(this, this.animation.to)), this))
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
            if (t.cancel) return this.stop(!0), r(vc(this));
            const n = !la.und(e.to),
              o = !la.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(vc(this));
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
            !o || n || t.default && !la.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !ca(d, c);
            f && (a.from = d), d = sl(d);
            const h = !ca(u, l);
            h && this._focus(u);
            const p = sc(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (cc(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), cc(e, t), Object.assign(e, t);
              for (const t in ac) null == e[t] && (e[t] = ac[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              la.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, Zl(t.config, i), t.config !== s.config ? Zl(s.config, i) : void 0);
            let g = Ll(this);
            if (!g || la.und(u)) return r(mc(this, !0));
            const b = la.und(t.reset) ? o && !t.default : !la.und(d) && Yl(t.reset, i),
              _ = b ? d : this.get(),
              w = ic(u),
              E = la.num(w) || la.arr(w) || Ol(w),
              x = !p && (!E || Yl(s.immediate || t.immediate, i));
            if (h) {
              const e = ql(u);
              if (e !== g.constructor) {
                if (!x) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const P = g.constructor;
            let C = il(u),
              S = !1;
            if (!C) {
              const e = b || !Cc(this) && f;
              (h || e) && (S = ca(ic(_), w), C = !S), (ca(a.immediate, x) || x) && ca(m.decay, v) && ca(m.velocity, y) || (C = !0)
            }
            if (S && Sc(this) && (a.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || il(l)) && (a.values = g.getPayload(), a.toValues = il(u) ? null : P == zl ? [1] : fa(w)), a.immediate != x && (a.immediate = x, x || b || this._set(l)), C)) {
              const {
                onRest: e
              } = a;
              ua(Ac, e => Mc(this, t, e));
              const n = mc(this, jc(this, l));
              va(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && Fs.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? Zl(s.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(yc(t.to, t, this._state, this)) : C ? this._start() : Sc(this) && !h ? this._pendingCalls.add(r) : r(pc(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (al(this) && this._detach(), t.to = e, al(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            il(t) && (dl(t, this), wc(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            il(e) && fl(e, this)
          }
          _set(e, t = !0) {
            const r = sl(e);
            if (!la.und(r)) {
              const e = Ll(this);
              if (!e || !ca(r, e.getValue())) {
                const n = ql(r);
                e && e.constructor == n ? e.setValue(r) : Al(this, n.create(r)), e && Fs.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return Ll(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Bc(this, "onStart", mc(this, jc(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Zl(this.animation.onChange, e, this)), Zl(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Ll(this).reset(sl(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Sc(this) || (Oc(this, !0), Tc(this) || this._resume())
          }
          _resume() {
            sa.skipAnimation ? this.finish() : Sa.start(this)
          }
          _stop(e, t) {
            if (Sc(this)) {
              Oc(this, !1);
              const r = this.animation;
              ua(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ll(this, {
                type: "idle",
                parent: this
              });
              const n = t ? vc(this.get()) : mc(this.get(), jc(this, e ?? r.to));
              va(this._pendingCalls, n), r.changed && (r.changed = !1, Bc(this, "onRest", n, this))
            }
          }
        };

      function jc(e, t) {
        const r = ic(t);
        return ca(ic(e.get()), r)
      }

      function Ic(e, t = e.loop, r = e.to) {
        const n = Zl(t);
        if (n) {
          const o = !0 !== n && oc(n),
            i = (o || e).reverse,
            s = !o || o.reset;
          return kc({
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

      function kc(e) {
        const {
          to: t,
          from: r
        } = e = oc(e), n = new Set;
        return la.obj(t) && Lc(t, n), la.obj(r) && Lc(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Dc(e) {
        const t = kc(e);
        return la.und(t.default) && (t.default = tc(t)), t
      }

      function Lc(e, t) {
        da(e, (e, r) => null != e && t.add(r))
      }
      var Ac = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Mc(e, t, r) {
        e.animation[r] = t[r] !== Jl(t, r) ? Ql(t[r], e.key) : void 0
      }

      function Bc(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Hc = ["onStart", "onChange", "onRest"],
        zc = 1,
        Vc = class {
          constructor(e, t) {
            this.id = zc++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              la.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(kc(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = fa(e).map(kc) : this.queue = [], this._flush ? this._flush(this, t) : (Kc(this, t), Fc(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              ua(fa(t), t => r[t].stop(!!e))
            } else gc(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (la.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              ua(fa(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (la.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              ua(fa(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            da(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, ha(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !n && this._started,
              s = o || i && r.size ? this.get() : null;
            o && t.size && ha(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, ha(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Fs.onFrame(this._onFrame)
          }
        };

      function Fc(e, t) {
        return Promise.all(t.map(t => Uc(e, t))).then(t => hc(e, t))
      }
      async function Uc(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, c = la.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = la.arr(o) || la.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : ua(Hc, r => {
          const n = t[r];
          if (la.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, va(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === Jl(t, "cancel");
        (u || h && d.asyncId) && f.push(fc(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: aa,
            resume: aa,
            start(t, r) {
              h ? (gc(d, e._lastAsyncId), r(vc(e))) : (t.onRest = a, r(yc(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = hc(e, await Promise.all(f));
        if (s && p.finished && (!r || !p.noop)) {
          const r = Ic(t, s, o);
          if (r) return Kc(e, [r]), Uc(e, r, !0)
        }
        return l && Fs.batchedUpdates(() => l(p, e, e.item)), p
      }

      function Gc(e, t) {
        const r = {
          ...e.springs
        };
        return t && ua(fa(t), e => {
          la.und(e.keys) && (e = kc(e)), la.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Wc(r, e, e => Xc(e))
        }), qc(e, r), r
      }

      function qc(e, t) {
        da(t, (t, r) => {
          e.springs[r] || (e.springs[r] = t, dl(t, e))
        })
      }

      function Xc(e, t) {
        const r = new Nc;
        return r.key = e, t && dl(r, t), r
      }

      function Wc(e, t, r) {
        t.keys && ua(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Kc(e, t) {
        ua(t, t => {
          Wc(e.springs, t, t => Xc(t, e))
        })
      }
      var $c, Zc, Yc = ({
          children: e,
          ...t
        }) => {
          const r = (0, M.useContext)(Qc),
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
          } = Qc;
          return M.createElement(i, {
            value: t
          }, e)
        },
        Qc = ($c = Yc, Zc = {}, Object.assign($c, M.createContext(Zc)), $c.Provider._context = $c, $c.Consumer._context = $c, $c);
      Yc.Provider = Qc.Provider, Yc.Consumer = Qc.Consumer;
      var Jc = () => {
        const e = [],
          t = function(t) {
            Tl(`${Pl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return ua(e, (e, o) => {
              if (la.und(t)) n.push(e.start());
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
          return ua(e, e => e.pause(...arguments)), this
        }, t.resume = function() {
          return ua(e, e => e.resume(...arguments)), this
        }, t.set = function(t) {
          ua(e, (e, r) => {
            const n = la.fun(t) ? t(r, e) : t;
            n && e.set(n)
          })
        }, t.start = function(t) {
          const r = [];
          return ua(e, (e, n) => {
            if (la.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          }), r
        }, t.stop = function() {
          return ua(e, e => e.stop(...arguments)), this
        }, t.update = function(t) {
          return ua(e, (e, r) => e.update(this._getProps(t, e, r))), this
        };
        const r = function(e, t, r) {
          return la.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function eu(e, t) {
        const r = la.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = la.fun(t) && t;
            n && !r && (r = []);
            const o = (0, M.useMemo)(() => n || 3 == arguments.length ? Jc() : void 0, []),
              i = (0, M.useRef)(0),
              s = Nl(),
              a = (0, M.useMemo)(() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Gc(e, t);
                  return i.current > 0 && !a.queue.length && !Object.keys(r).some(t => !e.springs[t]) ? Fc(e, t) : new Promise(n => {
                    qc(e, r), a.queue.push(() => {
                      n(Fc(e, t))
                    }), s()
                  })
                }
              }), []),
              l = (0, M.useRef)([...a.ctrls]),
              c = [],
              u = kl(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new Vc(null, a.flush)),
                  r = n ? n(o, e) : t[o];
                r && (c[o] = Dc(r))
              }
            }(0, M.useMemo)(() => {
              ua(l.current.slice(e, u), e => {
                (function(e, t) {
                  e.ref?.delete(e), t?.delete(e)
                })(e, o), e.stop(!0)
              }), l.current.length = e, d(u, e)
            }, [e]), (0, M.useMemo)(() => {
              d(0, Math.min(u, e))
            }, r);
            const f = l.current.map((e, t) => Gc(e, c[t])),
              h = (0, M.useContext)(Yc),
              p = kl(h),
              m = h !== p && function(e) {
                for (const t in e) return !0;
                return !1
              }(h);
            Rl(() => {
              i.current++, a.ctrls = l.current;
              const {
                queue: e
              } = a;
              e.length && (a.queue = [], ua(e, e => e())), ua(l.current, (e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const r = c[t];
                r && (function(e, t) {
                  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
                }(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              })
            }), jl(() => () => {
              ua(a.ctrls, e => e.stop(!0))
            });
            const v = f.map(e => ({
              ...e
            }));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var tu = class extends xc {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = $a(...t);
          const r = this._get(),
            n = ql(r);
          Al(this, n.create(r))
        }
        advance(e) {
          const t = this._get();
          ca(t, this.get()) || (Ll(this).setValue(t), this._onChange(t, this.idle)), !this.idle && nu(this._active) && ou(this)
        }
        _get() {
          const e = la.arr(this.source) ? this.source.map(sl) : fa(sl(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !nu(this._active) && (this.idle = !1, ua(Ml(this), e => {
            e.done = !1
          }), sa.skipAnimation ? (Fs.batchedUpdates(() => this.advance()), ou(this)) : Sa.start(this))
        }
        _attach() {
          let e = 1;
          ua(fa(this.source), t => {
            il(t) && dl(t, this), wc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          ua(fa(this.source), e => {
            il(e) && fl(e, this)
          }), this._active.clear(), ou(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = fa(this.source).reduce((e, t) => Math.max(e, (wc(t) ? t.priority : 0) + 1), 0))
        }
      };

      function ru(e) {
        return !1 !== e.idle
      }

      function nu(e) {
        return !e.size || Array.from(e).every(ru)
      }

      function ou(e) {
        e.idle || (e.idle = !0, ua(Ml(e), e => {
          e.done = !0
        }), ll(e, {
          type: "idle",
          parent: e
        }))
      }
      sa.assign({
        createStringInterpolator: xl,
        to: (e, t) => new tu(e, t)
      }), Sa.advance;
      var iu = r(44853),
        su = /^--/;

      function au(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || su.test(e) || cu.hasOwnProperty(e) && cu[e] ? ("" + t).trim() : t + "px"
      }
      var lu = {},
        cu = {
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
        uu = ["Webkit", "Ms", "Moz", "O"];
      cu = Object.keys(cu).reduce((e, t) => (uu.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), cu);
      var du = /^(matrix|translate|scale|rotate|skew)/,
        fu = /^(translate)/,
        hu = /^(rotate|skew)/,
        pu = (e, t) => la.num(e) && 0 !== e ? e + t : e,
        mu = (e, t) => la.arr(e) ? e.every(e => mu(e, t)) : la.num(e) ? e === t : parseFloat(e) === t,
        vu = class extends Fl {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>pu(e,"px")).join(",")})`, mu(e, 0)])), da(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (du.test(t)) {
                if (delete n[t], la.und(e)) return;
                const r = fu.test(t) ? "px" : hu.test(t) ? "deg" : "";
                o.push(fa(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${pu(o,r)})`, mu(o, 0)] : e => [`${t}(${e.map(e=>pu(e,r)).join(",")})`, mu(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new yu(o, i)), super(n)
          }
        },
        yu = class extends cl {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return ua(this.inputs, (r, n) => {
              const o = sl(r[0]),
                [i, s] = this.transforms[n](la.arr(o) ? o : r.map(sl));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && ua(this.inputs, e => ua(e, e => il(e) && dl(e, this)))
          }
          observerRemoved(e) {
            0 == e && ua(this.inputs, e => ua(e, e => il(e) && fl(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ll(this, e)
          }
        };
      sa.assign({
        batchedUpdates: iu.unstable_batchedUpdates,
        createStringInterpolator: xl,
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
      var gu = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Fl(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = $l(e) || "Anonymous";
              return (e = la.str(e) ? i[e] || (i[e] = Xl(e, o)) : e[Kl] || (e[Kl] = Xl(e, o))).displayName = `Animated(${t})`, e
            };
          return da(e, (t, r) => {
            la.arr(e) && (r = $l(t)), i[r] = i(t)
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
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : lu[t] || (lu[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = au(t, o[t]);
                su.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new vu(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        bu = gu.animated;

      function _u(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }
      "undefined" == typeof window || !window.document || window.document.createElement;
      var wu, Eu = r(95362),
        xu = r(85426),
        Pu = r(78004),
        Cu = r(76286),
        Su = r(94040),
        Tu = "dismissableLayer.update",
        Ou = M.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Ru = M.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, c = M.useContext(Ou), [u, d] = M.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, h] = M.useState({}), p = (0, Eu.s)(t, e => d(e)), m = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = u ? m.indexOf(u) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= y, E = function(e, t = globalThis?.document) {
            const r = (0, Cu.c)(e),
              n = M.useRef(!1),
              o = M.useRef(() => {});
            return M.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Iu("dismissableLayer.pointerDownOutside", r, i, {
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
            const r = (0, Cu.c)(e),
              n = M.useRef(!1);
            return M.useEffect(() => {
              const e = e => {
                e.target && !n.current && Iu("dismissableLayer.focusOutside", r, {
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
          return (0, Su.U)(e => {
            g === c.layers.size - 1 && (n?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), M.useEffect(() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (wu = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), ju(), () => {
              r && 1 === c.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = wu)
            }
          }, [u, f, r, c]), M.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), ju())
          }, [u, c]), M.useEffect(() => {
            const e = () => h({});
            return document.addEventListener(Tu, e), () => document.removeEventListener(Tu, e)
          }, []), (0, _.jsx)(Pu.sG.div, {
            ...l,
            ref: p,
            style: {
              pointerEvents: b ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: _u(e.onFocusCapture, x.onFocusCapture),
            onBlurCapture: _u(e.onBlurCapture, x.onBlurCapture),
            onPointerDownCapture: _u(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        });
      Ru.displayName = "DismissableLayer";
      var Nu = M.forwardRef((e, t) => {
        const r = M.useContext(Ou),
          n = M.useRef(null),
          o = (0, Eu.s)(t, n);
        return M.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, _.jsx)(Pu.sG.div, {
          ...e,
          ref: o
        })
      });

      function ju() {
        const e = new CustomEvent(Tu);
        document.dispatchEvent(e)
      }

      function Iu(e, t, r, {
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
        }), n ? (0, Pu.hO)(o, i) : o.dispatchEvent(i)
      }
      Nu.displayName = "DismissableLayerBranch";
      var ku = Ru,
        Du = Nu,
        Lu = r(86126);
      const Au = ["top", "right", "bottom", "left"],
        Mu = Math.min,
        Bu = Math.max,
        Hu = Math.round,
        zu = Math.floor,
        Vu = e => ({
          x: e,
          y: e
        }),
        Fu = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Uu = {
          start: "end",
          end: "start"
        };

      function Gu(e, t, r) {
        return Bu(e, Mu(t, r))
      }

      function qu(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Xu(e) {
        return e.split("-")[0]
      }

      function Wu(e) {
        return e.split("-")[1]
      }

      function Ku(e) {
        return "x" === e ? "y" : "x"
      }

      function $u(e) {
        return "y" === e ? "height" : "width"
      }
      const Zu = new Set(["top", "bottom"]);

      function Yu(e) {
        return Zu.has(Xu(e)) ? "y" : "x"
      }

      function Qu(e) {
        return Ku(Yu(e))
      }

      function Ju(e) {
        return e.replace(/start|end/g, e => Uu[e])
      }
      const ed = ["left", "right"],
        td = ["right", "left"],
        rd = ["top", "bottom"],
        nd = ["bottom", "top"];

      function od(e) {
        return e.replace(/left|right|bottom|top/g, e => Fu[e])
      }

      function id(e) {
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

      function sd(e) {
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

      function ad(e, t, r) {
        let {
          reference: n,
          floating: o
        } = e;
        const i = Yu(t),
          s = Qu(t),
          a = $u(s),
          l = Xu(t),
          c = "y" === i,
          u = n.x + n.width / 2 - o.width / 2,
          d = n.y + n.height / 2 - o.height / 2,
          f = n[a] / 2 - o[a] / 2;
        let h;
        switch (l) {
          case "top":
            h = {
              x: u,
              y: n.y - o.height
            };
            break;
          case "bottom":
            h = {
              x: u,
              y: n.y + n.height
            };
            break;
          case "right":
            h = {
              x: n.x + n.width,
              y: d
            };
            break;
          case "left":
            h = {
              x: n.x - o.width,
              y: d
            };
            break;
          default:
            h = {
              x: n.x,
              y: n.y
            }
        }
        switch (Wu(t)) {
          case "start":
            h[s] -= f * (r && c ? -1 : 1);
            break;
          case "end":
            h[s] += f * (r && c ? -1 : 1)
        }
        return h
      }
      async function ld(e, t) {
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
          boundary: c = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: f = !1,
          padding: h = 0
        } = qu(t, e), p = id(h), m = a[f ? "floating" === d ? "reference" : "floating" : d], v = sd(await i.getClippingRect({
          element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: c,
          rootBoundary: u,
          strategy: l
        })), y = "floating" === d ? {
          x: n,
          y: o,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(g)) && await (null == i.getScale ? void 0 : i.getScale(g)) || {
          x: 1,
          y: 1
        }, _ = sd(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: y,
          offsetParent: g,
          strategy: l
        }) : y);
        return {
          top: (v.top - _.top + p.top) / b.y,
          bottom: (_.bottom - v.bottom + p.bottom) / b.y,
          left: (v.left - _.left + p.left) / b.x,
          right: (_.right - v.right + p.right) / b.x
        }
      }

      function cd(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function ud(e) {
        return Au.some(t => e[t] >= 0)
      }
      const dd = new Set(["left", "top"]);

      function fd() {
        return "undefined" != typeof window
      }

      function hd(e) {
        return vd(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function pd(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function md(e) {
        var t;
        return null == (t = (vd(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function vd(e) {
        return !!fd() && (e instanceof Node || e instanceof pd(e).Node)
      }

      function yd(e) {
        return !!fd() && (e instanceof Element || e instanceof pd(e).Element)
      }

      function gd(e) {
        return !!fd() && (e instanceof HTMLElement || e instanceof pd(e).HTMLElement)
      }

      function bd(e) {
        return !(!fd() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof pd(e).ShadowRoot)
      }
      const _d = new Set(["inline", "contents"]);

      function wd(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: o
        } = kd(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !_d.has(o)
      }
      const Ed = new Set(["table", "td", "th"]);

      function xd(e) {
        return Ed.has(hd(e))
      }
      const Pd = [":popover-open", ":modal"];

      function Cd(e) {
        return Pd.some(t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        })
      }
      const Sd = ["transform", "translate", "scale", "rotate", "perspective"],
        Td = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        Od = ["paint", "layout", "strict", "content"];

      function Rd(e) {
        const t = Nd(),
          r = yd(e) ? kd(e) : e;
        return Sd.some(e => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || Td.some(e => (r.willChange || "").includes(e)) || Od.some(e => (r.contain || "").includes(e))
      }

      function Nd() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      const jd = new Set(["html", "body", "#document"]);

      function Id(e) {
        return jd.has(hd(e))
      }

      function kd(e) {
        return pd(e).getComputedStyle(e)
      }

      function Dd(e) {
        return yd(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Ld(e) {
        if ("html" === hd(e)) return e;
        const t = e.assignedSlot || e.parentNode || bd(e) && e.host || md(e);
        return bd(t) ? t.host : t
      }

      function Ad(e) {
        const t = Ld(e);
        return Id(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gd(t) && wd(t) ? t : Ad(t)
      }

      function Md(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const o = Ad(e),
          i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = pd(o);
        if (i) {
          const e = Bd(s);
          return t.concat(s, s.visualViewport || [], wd(o) ? o : [], e && r ? Md(e) : [])
        }
        return t.concat(o, Md(o, [], r))
      }

      function Bd(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function Hd(e) {
        const t = kd(e);
        let r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0;
        const o = gd(e),
          i = o ? e.offsetWidth : r,
          s = o ? e.offsetHeight : n,
          a = Hu(r) !== i || Hu(n) !== s;
        return a && (r = i, n = s), {
          width: r,
          height: n,
          $: a
        }
      }

      function zd(e) {
        return yd(e) ? e : e.contextElement
      }

      function Vd(e) {
        const t = zd(e);
        if (!gd(t)) return Vu(1);
        const r = t.getBoundingClientRect(),
          {
            width: n,
            height: o,
            $: i
          } = Hd(t);
        let s = (i ? Hu(r.width) : r.width) / n,
          a = (i ? Hu(r.height) : r.height) / o;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
          x: s,
          y: a
        }
      }
      const Fd = Vu(0);

      function Ud(e) {
        const t = pd(e);
        return Nd() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Fd
      }

      function Gd(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const o = e.getBoundingClientRect(),
          i = zd(e);
        let s = Vu(1);
        t && (n ? yd(n) && (s = Vd(n)) : s = Vd(e));
        const a = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== pd(e)) && t
        }(i, r, n) ? Ud(i) : Vu(0);
        let l = (o.left + a.x) / s.x,
          c = (o.top + a.y) / s.y,
          u = o.width / s.x,
          d = o.height / s.y;
        if (i) {
          const e = pd(i),
            t = n && yd(n) ? pd(n) : n;
          let r = e,
            o = Bd(r);
          for (; o && n && t !== r;) {
            const e = Vd(o),
              t = o.getBoundingClientRect(),
              n = kd(o),
              i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
            l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += i, c += s, r = pd(o), o = Bd(r)
          }
        }
        return sd({
          width: u,
          height: d,
          x: l,
          y: c
        })
      }

      function qd(e, t) {
        const r = Dd(e).scrollLeft;
        return t ? t.left + r : Gd(md(e)).left + r
      }

      function Xd(e, t) {
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - qd(e, r),
          y: r.top + t.scrollTop
        }
      }
      const Wd = new Set(["absolute", "fixed"]);

      function Kd(e, t, r) {
        let n;
        if ("viewport" === t) n = function(e, t) {
          const r = pd(e),
            n = md(e),
            o = r.visualViewport;
          let i = n.clientWidth,
            s = n.clientHeight,
            a = 0,
            l = 0;
          if (o) {
            i = o.width, s = o.height;
            const e = Nd();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, l = o.offsetTop)
          }
          const c = qd(n);
          if (c <= 0) {
            const e = n.ownerDocument,
              t = e.body,
              r = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0,
              s = Math.abs(n.clientWidth - t.clientWidth - o);
            s <= 25 && (i -= s)
          } else c <= 25 && (i += c);
          return {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }(e, r);
        else if ("document" === t) n = function(e) {
          const t = md(e),
            r = Dd(e),
            n = e.ownerDocument.body,
            o = Bu(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            i = Bu(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let s = -r.scrollLeft + qd(e);
          const a = -r.scrollTop;
          return "rtl" === kd(n).direction && (s += Bu(t.clientWidth, n.clientWidth) - o), {
            width: o,
            height: i,
            x: s,
            y: a
          }
        }(md(e));
        else if (yd(t)) n = function(e, t) {
          const r = Gd(e, !0, "fixed" === t),
            n = r.top + e.clientTop,
            o = r.left + e.clientLeft,
            i = gd(e) ? Vd(e) : Vu(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: n * i.y
          }
        }(t, r);
        else {
          const r = Ud(e);
          n = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
          }
        }
        return sd(n)
      }

      function $d(e, t) {
        const r = Ld(e);
        return !(r === t || !yd(r) || Id(r)) && ("fixed" === kd(r).position || $d(r, t))
      }

      function Zd(e, t, r) {
        const n = gd(t),
          o = md(t),
          i = "fixed" === r,
          s = Gd(e, !0, i, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Vu(0);

        function c() {
          l.x = qd(o)
        }
        if (n || !n && !i)
          if (("body" !== hd(t) || wd(o)) && (a = Dd(t)), n) {
            const e = Gd(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && c();
        i && !n && o && c();
        const u = !o || n || i ? Vu(0) : Xd(o, a);
        return {
          x: s.left + a.scrollLeft - l.x - u.x,
          y: s.top + a.scrollTop - l.y - u.y,
          width: s.width,
          height: s.height
        }
      }

      function Yd(e) {
        return "static" === kd(e).position
      }

      function Qd(e, t) {
        if (!gd(e) || "fixed" === kd(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return md(e) === r && (r = r.ownerDocument.body), r
      }

      function Jd(e, t) {
        const r = pd(e);
        if (Cd(e)) return r;
        if (!gd(e)) {
          let t = Ld(e);
          for (; t && !Id(t);) {
            if (yd(t) && !Yd(t)) return t;
            t = Ld(t)
          }
          return r
        }
        let n = Qd(e, t);
        for (; n && xd(n) && Yd(n);) n = Qd(n, t);
        return n && Id(n) && Yd(n) && !Rd(n) ? r : n || function(e) {
          let t = Ld(e);
          for (; gd(t) && !Id(t);) {
            if (Rd(t)) return t;
            if (Cd(t)) return null;
            t = Ld(t)
          }
          return null
        }(e) || r
      }
      const ef = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: r,
            offsetParent: n,
            strategy: o
          } = e;
          const i = "fixed" === o,
            s = md(n),
            a = !!t && Cd(t.floating);
          if (n === s || a && i) return r;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            c = Vu(1);
          const u = Vu(0),
            d = gd(n);
          if ((d || !d && !i) && (("body" !== hd(n) || wd(s)) && (l = Dd(n)), gd(n))) {
            const e = Gd(n);
            c = Vd(n), u.x = e.x + n.clientLeft, u.y = e.y + n.clientTop
          }
          const f = !s || d || i ? Vu(0) : Xd(s, l);
          return {
            width: r.width * c.x,
            height: r.height * c.y,
            x: r.x * c.x - l.scrollLeft * c.x + u.x + f.x,
            y: r.y * c.y - l.scrollTop * c.y + u.y + f.y
          }
        },
        getDocumentElement: md,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: n,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === r ? Cd(t) ? [] : function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let n = Md(e, [], !1).filter(e => yd(e) && "body" !== hd(e)),
                o = null;
              const i = "fixed" === kd(e).position;
              let s = i ? Ld(e) : e;
              for (; yd(s) && !Id(s);) {
                const t = kd(s),
                  r = Rd(s);
                r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && o && Wd.has(o.position) || wd(s) && !r && $d(e, s)) ? n = n.filter(e => e !== s) : o = t, s = Ld(s)
              }
              return t.set(e, n), n
            }(t, this._c) : [].concat(r), n],
            s = i[0],
            a = i.reduce((e, r) => {
              const n = Kd(t, r, o);
              return e.top = Bu(n.top, e.top), e.right = Mu(n.right, e.right), e.bottom = Mu(n.bottom, e.bottom), e.left = Bu(n.left, e.left), e
            }, Kd(t, s, o));
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
          }
        },
        getOffsetParent: Jd,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || Jd,
            r = this.getDimensions,
            n = await r(e.floating);
          return {
            reference: Zd(e.reference, await t(e.floating), e.strategy),
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
          } = Hd(e);
          return {
            width: t,
            height: r
          }
        },
        getScale: Vd,
        isElement: yd,
        isRTL: function(e) {
          return "rtl" === kd(e).direction
        }
      };

      function tf(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const rf = function(e) {
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
                } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), s = Xu(r), a = Wu(r), l = "y" === Yu(r), c = dd.has(s) ? -1 : 1, u = i && l ? -1 : 1, d = qu(t, e);
                let {
                  mainAxis: f,
                  crossAxis: h,
                  alignmentAxis: p
                } = "number" == typeof d ? {
                  mainAxis: d,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: d.mainAxis || 0,
                  crossAxis: d.crossAxis || 0,
                  alignmentAxis: d.alignmentAxis
                };
                return a && "number" == typeof p && (h = "end" === a ? -1 * p : p), l ? {
                  x: h * u,
                  y: f * c
                } : {
                  x: f * c,
                  y: h * u
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
        nf = function(e) {
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
              } = qu(e, t), c = {
                x: r,
                y: n
              }, u = await ld(t, l), d = Yu(Xu(o)), f = Ku(d);
              let h = c[f],
                p = c[d];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                h = Gu(h + u["y" === f ? "top" : "left"], h, h - u[e])
              }
              if (s) {
                const e = "y" === d ? "bottom" : "right";
                p = Gu(p + u["y" === d ? "top" : "left"], p, p - u[e])
              }
              const m = a.fn({
                ...t,
                [f]: h,
                [d]: p
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
        of = function(e) {
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
                elements: c
              } = t, {
                mainAxis: u = !0,
                crossAxis: d = !0,
                fallbackPlacements: f,
                fallbackStrategy: h = "bestFit",
                fallbackAxisSideDirection: p = "none",
                flipAlignment: m = !0,
                ...v
              } = qu(e, t);
              if (null != (r = i.arrow) && r.alignmentOffset) return {};
              const y = Xu(o),
                g = Yu(a),
                b = Xu(a) === a,
                _ = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                w = f || (b || !m ? [od(a)] : function(e) {
                  const t = od(e);
                  return [Ju(e), t, Ju(t)]
                }(a)),
                E = "none" !== p;
              !f && E && w.push(... function(e, t, r, n) {
                const o = Wu(e);
                let i = function(e, t, r) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return r ? t ? td : ed : t ? ed : td;
                    case "left":
                    case "right":
                      return t ? rd : nd;
                    default:
                      return []
                  }
                }(Xu(e), "start" === r, n);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(Ju)))), i
              }(a, m, p, _));
              const x = [a, ...w],
                P = await ld(t, v),
                C = [];
              let S = (null == (n = i.flip) ? void 0 : n.overflows) || [];
              if (u && C.push(P[y]), d) {
                const e = function(e, t, r) {
                  void 0 === r && (r = !1);
                  const n = Wu(e),
                    o = Qu(e),
                    i = $u(o);
                  let s = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (s = od(s)), [s, od(s)]
                }(o, s, _);
                C.push(P[e[0]], P[e[1]])
              }
              if (S = [...S, {
                  placement: o,
                  overflows: C
                }], !C.every(e => e <= 0)) {
                var T, O;
                const e = ((null == (T = i.flip) ? void 0 : T.index) || 0) + 1,
                  t = x[e];
                if (t && ("alignment" !== d || g === Yu(t) || S.every(e => Yu(e.placement) !== g || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: S
                  },
                  reset: {
                    placement: t
                  }
                };
                let r = null == (O = S.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : O.placement;
                if (!r) switch (h) {
                  case "bestFit": {
                    var R;
                    const e = null == (R = S.filter(e => {
                      if (E) {
                        const t = Yu(e.placement);
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
        sf = function(e) {
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
                ...c
              } = qu(e, t), u = await ld(t, c), d = Xu(o), f = Wu(o), h = "y" === Yu(o), {
                width: p,
                height: m
              } = i.floating;
              let v, y;
              "top" === d || "bottom" === d ? (v = d, y = f === (await (null == s.isRTL ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = d, v = "end" === f ? "top" : "bottom");
              const g = m - u.top - u.bottom,
                b = p - u.left - u.right,
                _ = Mu(m - u[v], g),
                w = Mu(p - u[y], b),
                E = !t.middlewareData.shift;
              let x = _,
                P = w;
              if (null != (r = t.middlewareData.shift) && r.enabled.x && (P = b), null != (n = t.middlewareData.shift) && n.enabled.y && (x = g), E && !f) {
                const e = Bu(u.left, 0),
                  t = Bu(u.right, 0),
                  r = Bu(u.top, 0),
                  n = Bu(u.bottom, 0);
                h ? P = p - 2 * (0 !== e || 0 !== t ? e + t : Bu(u.left, u.right)) : x = m - 2 * (0 !== r || 0 !== n ? r + n : Bu(u.top, u.bottom))
              }
              await l({
                ...t,
                availableWidth: P,
                availableHeight: x
              });
              const C = await s.getDimensions(a.floating);
              return p !== C.width || m !== C.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        af = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: r
              } = t, {
                strategy: n = "referenceHidden",
                ...o
              } = qu(e, t);
              switch (n) {
                case "referenceHidden": {
                  const e = cd(await ld(t, {
                    ...o,
                    elementContext: "reference"
                  }), r.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: ud(e)
                    }
                  }
                }
                case "escaped": {
                  const e = cd(await ld(t, {
                    ...o,
                    altBoundary: !0
                  }), r.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: ud(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        lf = e => ({
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
              element: c,
              padding: u = 0
            } = qu(e, t) || {};
            if (null == c) return {};
            const d = id(u),
              f = {
                x: r,
                y: n
              },
              h = Qu(o),
              p = $u(h),
              m = await s.getDimensions(c),
              v = "y" === h,
              y = v ? "top" : "left",
              g = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              _ = i.reference[p] + i.reference[h] - f[h] - i.floating[p],
              w = f[h] - i.reference[h],
              E = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(c));
            let x = E ? E[b] : 0;
            x && await (null == s.isElement ? void 0 : s.isElement(E)) || (x = a.floating[b] || i.floating[p]);
            const P = _ / 2 - w / 2,
              C = x / 2 - m[p] / 2 - 1,
              S = Mu(d[y], C),
              T = Mu(d[g], C),
              O = S,
              R = x - m[p] - T,
              N = x / 2 - m[p] / 2 + P,
              j = Gu(O, N, R),
              I = !l.arrow && null != Wu(o) && N !== j && i.reference[p] / 2 - (N < O ? S : T) - m[p] / 2 < 0,
              k = I ? N < O ? N - O : N - R : 0;
            return {
              [h]: f[h] + k,
              data: {
                [h]: j,
                centerOffset: N - j - k,
                ...I && {
                  alignmentOffset: k
                }
              },
              reset: I
            }
          }
        }),
        cf = function(e) {
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
                crossAxis: c = !0
              } = qu(e, t), u = {
                x: r,
                y: n
              }, d = Yu(o), f = Ku(d);
              let h = u[f],
                p = u[d];
              const m = qu(a, t),
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
                h < t ? h = t : h > r && (h = r)
              }
              if (c) {
                var y, g;
                const e = "y" === f ? "width" : "height",
                  t = dd.has(Xu(o)),
                  r = i.reference[d] - i.floating[e] + (t && (null == (y = s.offset) ? void 0 : y[d]) || 0) + (t ? 0 : v.crossAxis),
                  n = i.reference[d] + i.reference[e] + (t ? 0 : (null == (g = s.offset) ? void 0 : g[d]) || 0) - (t ? v.crossAxis : 0);
                p < r ? p = r : p > n && (p = n)
              }
              return {
                [f]: h,
                [d]: p
              }
            }
          }
        },
        uf = (e, t, r) => {
          const n = new Map,
            o = {
              platform: ef,
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
            let c = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: u,
                y: d
              } = ad(c, n, l),
              f = n,
              h = {},
              p = 0;
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
                x: u,
                y: d,
                initialPlacement: n,
                placement: f,
                strategy: o,
                middlewareData: h,
                rects: c,
                platform: s,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              u = null != v ? v : u, d = null != y ? y : d, h = {
                ...h,
                [i]: {
                  ...h[i],
                  ...g
                }
              }, b && p <= 50 && (p++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (c = !0 === b.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : b.rects), ({
                x: u,
                y: d
              } = ad(c, f, l))), r = -1)
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
      var df = "undefined" != typeof document ? M.useLayoutEffect : function() {};

      function ff(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 !== n--;)
              if (!ff(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || ff(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function hf(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function pf(e, t) {
        const r = hf(e);
        return Math.round(t * r) / r
      }

      function mf(e) {
        const t = M.useRef(e);
        return df(() => {
          t.current = e
        }), t
      }
      const vf = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: r,
              padding: n
            } = "function" == typeof e ? e(t) : e;
            return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? lf({
              element: r.current,
              padding: n
            }).fn(t) : {} : r ? lf({
              element: r,
              padding: n
            }).fn(t) : {};
            var o
          }
        }),
        yf = (e, t) => ({
          ...rf(e),
          options: [e, t]
        }),
        gf = (e, t) => ({
          ...nf(e),
          options: [e, t]
        }),
        bf = (e, t) => ({
          ...cf(e),
          options: [e, t]
        }),
        _f = (e, t) => ({
          ...of(e),
          options: [e, t]
        }),
        wf = (e, t) => ({
          ...sf(e),
          options: [e, t]
        }),
        Ef = (e, t) => ({
          ...af(e),
          options: [e, t]
        }),
        xf = (e, t) => ({
          ...vf(e),
          options: [e, t]
        });
      var Pf = M.forwardRef((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, _.jsx)(Pu.sG.svg, {
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
      Pf.displayName = "Arrow";
      var Cf = Pf,
        Sf = r(63155);

      function Tf(e) {
        const [t, r] = M.useState(void 0);
        return (0, Sf.N)(() => {
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
      var Of = "Popper",
        [Rf, Nf] = (0, xu.A)(Of),
        [jf, If] = Rf(Of),
        kf = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = M.useState(null);
          return (0, _.jsx)(jf, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      kf.displayName = Of;
      var Df = "PopperAnchor",
        Lf = M.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, i = If(Df, r), s = M.useRef(null), a = (0, Eu.s)(t, s), l = M.useRef(null);
          return M.useEffect(() => {
            const e = l.current;
            l.current = n?.current || s.current, e !== l.current && i.onAnchorChange(l.current)
          }), n ? null : (0, _.jsx)(Pu.sG.div, {
            ...o,
            ref: a
          })
        });
      Lf.displayName = Df;
      var Af = "PopperContent",
        [Mf, Bf] = Rf(Af),
        Hf = M.forwardRef((e, t) => {
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
          } = e, v = If(Af, r), [y, g] = M.useState(null), b = (0, Eu.s)(t, e => g(e)), [w, E] = M.useState(null), x = Tf(w), P = x?.width ?? 0, C = x?.height ?? 0, S = n + ("center" !== i ? "-" + i : ""), T = "number" == typeof u ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
          }, O = Array.isArray(c) ? c : [c], R = O.length > 0, N = {
            padding: T,
            boundary: O.filter(Uf),
            altBoundary: R
          }, {
            refs: j,
            floatingStyles: I,
            placement: k,
            isPositioned: D,
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
              open: c
            } = e, [u, d] = M.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, h] = M.useState(n);
            ff(f, n) || h(n);
            const [p, m] = M.useState(null), [v, y] = M.useState(null), g = M.useCallback(e => {
              e !== E.current && (E.current = e, m(e))
            }, []), b = M.useCallback(e => {
              e !== x.current && (x.current = e, y(e))
            }, []), _ = i || p, w = s || v, E = M.useRef(null), x = M.useRef(null), P = M.useRef(u), C = null != l, S = mf(l), T = mf(o), O = mf(c), R = M.useCallback(() => {
              if (!E.current || !x.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              T.current && (e.platform = T.current), uf(E.current, x.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== O.current
                };
                N.current && !ff(P.current, t) && (P.current = t, iu.flushSync(() => {
                  d(t)
                }))
              })
            }, [f, t, r, T, O]);
            df(() => {
              !1 === c && P.current.isPositioned && (P.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [c]);
            const N = M.useRef(!1);
            df(() => (N.current = !0, () => {
              N.current = !1
            }), []), df(() => {
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
                const t = pf(I.floating, u.x),
                  n = pf(I.floating, u.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...hf(I.floating) >= 1.5 && {
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
            whileElementsMounted: (...e) => function(e, t, r, n) {
              void 0 === n && (n = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: s = "function" == typeof ResizeObserver,
                layoutShift: a = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = n, c = zd(e), u = o || i ? [...c ? Md(c) : [], ...Md(t)] : [];
              u.forEach(e => {
                o && e.addEventListener("scroll", r, {
                  passive: !0
                }), i && e.addEventListener("resize", r)
              });
              const d = c && a ? function(e, t) {
                let r, n = null;
                const o = md(e);

                function i() {
                  var e;
                  clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                }
                return function s(a, l) {
                  void 0 === a && (a = !1), void 0 === l && (l = 1), i();
                  const c = e.getBoundingClientRect(),
                    {
                      left: u,
                      top: d,
                      width: f,
                      height: h
                    } = c;
                  if (a || t(), !f || !h) return;
                  const p = {
                    rootMargin: -zu(d) + "px " + -zu(o.clientWidth - (u + f)) + "px " + -zu(o.clientHeight - (d + h)) + "px " + -zu(u) + "px",
                    threshold: Bu(0, Mu(1, l)) || 1
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
                    1 !== n || tf(c, e.getBoundingClientRect()) || s(), m = !1
                  }
                  try {
                    n = new IntersectionObserver(v, {
                      ...p,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    n = new IntersectionObserver(v, p)
                  }
                  n.observe(e)
                }(!0), i
              }(c, r) : null;
              let f, h = -1,
                p = null;
              s && (p = new ResizeObserver(e => {
                let [n] = e;
                n && n.target === c && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
                  var e;
                  null == (e = p) || e.observe(t)
                })), r()
              }), c && !l && p.observe(c), p.observe(t));
              let m = l ? Gd(e) : null;
              return l && function t() {
                const n = Gd(e);
                m && !tf(m, n) && r(), m = n, f = requestAnimationFrame(t)
              }(), r(), () => {
                var e;
                u.forEach(e => {
                  o && e.removeEventListener("scroll", r), i && e.removeEventListener("resize", r)
                }), null == d || d(), null == (e = p) || e.disconnect(), p = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === h
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [yf({
              mainAxis: o + C,
              alignmentAxis: s
            }), l && gf({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === d ? bf() : void 0,
              ...N
            }), l && _f({
              ...N
            }), wf({
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
            }), w && xf({
              element: w,
              padding: a
            }), Gf({
              arrowWidth: P,
              arrowHeight: C
            }), f && Ef({
              strategy: "referenceHidden",
              ...N
            })]
          }), [A, B] = qf(k), H = (0, Cu.c)(p);
          (0, Sf.N)(() => {
            D && H?.()
          }, [D, H]);
          const z = L.arrow?.x,
            V = L.arrow?.y,
            F = 0 !== L.arrow?.centerOffset,
            [U, G] = M.useState();
          return (0, Sf.N)(() => {
            y && G(window.getComputedStyle(y).zIndex)
          }, [y]), (0, _.jsx)("div", {
            ref: j.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: D ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, _.jsx)(Mf, {
              scope: r,
              placedSide: A,
              onArrowChange: E,
              arrowX: z,
              arrowY: V,
              shouldHideArrow: F,
              children: (0, _.jsx)(Pu.sG.div, {
                "data-side": A,
                "data-align": B,
                ...m,
                ref: b,
                style: {
                  ...m.style,
                  animation: D ? void 0 : "none"
                }
              })
            })
          })
        });
      Hf.displayName = Af;
      var zf = "PopperArrow",
        Vf = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Ff = M.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Bf(zf, r), i = Vf[o.placedSide];
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
            children: (0, _.jsx)(Cf, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function Uf(e) {
        return null !== e
      }
      Ff.displayName = zf;
      var Gf = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, c] = qf(r), u = {
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

      function qf(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Xf = kf,
        Wf = Lf,
        Kf = Hf,
        $f = Ff,
        Zf = M.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, i] = M.useState(!1);
          (0, Sf.N)(() => i(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? iu.createPortal((0, _.jsx)(Pu.sG.div, {
            ...n,
            ref: t
          }), s) : null
        });
      Zf.displayName = "Portal";
      var Yf = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = M.useState(), n = M.useRef(null), o = M.useRef(e), i = M.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = function(e, t) {
            return M.useReducer((e, r) => t[e][r] ?? e, e)
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
          return M.useEffect(() => {
            const e = Qf(n.current);
            i.current = "mounted" === a ? e : "none"
          }, [a]), (0, Sf.N)(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = i.current,
                s = Qf(t);
              l(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : r && n !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, l]), (0, Sf.N)(() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                s = i => {
                  const s = Qf(n.current).includes(CSS.escape(i.animationName));
                  if (i.target === t && s && (l("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    })
                  }
                },
                a = e => {
                  e.target === t && (i.current = Qf(n.current))
                };
              return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
                r.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
              }
            }
            l("ANIMATION_END")
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: M.useCallback(e => {
              n.current = e ? getComputedStyle(e) : null, r(e)
            }, [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : M.Children.only(r), i = (0, Eu.s)(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? M.cloneElement(o, {
          ref: i
        }) : null
      };

      function Qf(e) {
        return e?.animationName || "none"
      }
      Yf.displayName = "Presence";
      var Jf = r(39447),
        eh = r(53054),
        th = r(69055),
        [rh, nh] = (0, xu.A)("Tooltip", [Nf]),
        oh = Nf(),
        ih = "TooltipProvider",
        sh = 700,
        ah = "tooltip.open",
        [lh, ch] = rh(ih),
        uh = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = sh,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, s = M.useRef(!0), a = M.useRef(!1), l = M.useRef(0);
          return M.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, _.jsx)(lh, {
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
      uh.displayName = ih;
      var dh = "Tooltip",
        [fh, hh] = rh(dh),
        ph = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
          } = e, l = ch(dh, e.__scopeTooltip), c = oh(t), [u, d] = M.useState(null), f = (0, Lu.B)(), h = M.useRef(0), p = s ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = M.useRef(!1), [y, g] = (0, eh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ah))) : l.onClose(), i?.(e)
            },
            caller: dh
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
          }, []), (0, _.jsx)(Xf, {
            ...c,
            children: (0, _.jsx)(fh, {
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
      ph.displayName = dh;
      var mh = "TooltipTrigger",
        vh = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = hh(mh, r), i = ch(mh, r), s = oh(r), a = M.useRef(null), l = (0, Eu.s)(t, a, o.onTriggerChange), c = M.useRef(!1), u = M.useRef(!1), d = M.useCallback(() => c.current = !1, []);
          return M.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, _.jsx)(Wf, {
            asChild: !0,
            ...s,
            children: (0, _.jsx)(Pu.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: _u(e.onPointerMove, e => {
                "touch" !== e.pointerType && (u.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              }),
              onPointerLeave: _u(e.onPointerLeave, () => {
                o.onTriggerLeave(), u.current = !1
              }),
              onPointerDown: _u(e.onPointerDown, () => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: _u(e.onFocus, () => {
                c.current || o.onOpen()
              }),
              onBlur: _u(e.onBlur, o.onClose),
              onClick: _u(e.onClick, o.onClose)
            })
          })
        });
      vh.displayName = mh;
      var yh = "TooltipPortal",
        [gh, bh] = rh(yh, {
          forceMount: void 0
        }),
        _h = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = hh(yh, t);
          return (0, _.jsx)(gh, {
            scope: t,
            forceMount: r,
            children: (0, _.jsx)(Yf, {
              present: r || i.open,
              children: (0, _.jsx)(Zf, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      _h.displayName = yh;
      var wh = "TooltipContent",
        Eh = M.forwardRef((e, t) => {
          const r = bh(wh, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = hh(wh, e.__scopeTooltip);
          return (0, _.jsx)(Yf, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, _.jsx)(Th, {
              side: o,
              ...i,
              ref: t
            }) : (0, _.jsx)(xh, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        xh = M.forwardRef((e, t) => {
          const r = hh(wh, e.__scopeTooltip),
            n = ch(wh, e.__scopeTooltip),
            o = M.useRef(null),
            i = (0, Eu.s)(t, o),
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
          }, [l, u, s, c, f]), (0, _.jsx)(Th, {
            ...e,
            ref: i
          })
        }),
        [Ph, Ch] = rh(dh, {
          isInside: !1
        }),
        Sh = (0, Jf.Dc)("TooltipContent"),
        Th = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
          } = e, l = hh(wh, r), c = oh(r), {
            onClose: u
          } = l;
          return M.useEffect(() => (document.addEventListener(ah, u), () => document.removeEventListener(ah, u)), [u]), M.useEffect(() => {
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
          }, [l.trigger, u]), (0, _.jsx)(Ru, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, _.jsxs)(Kf, {
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
              children: [(0, _.jsx)(Sh, {
                children: n
              }), (0, _.jsx)(Ph, {
                scope: r,
                isInside: !0,
                children: (0, _.jsx)(th.bL, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Eh.displayName = wh;
      var Oh = "TooltipArrow",
        Rh = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = oh(r);
          return Ch(Oh, r).isInside ? null : (0, _.jsx)($f, {
            ...o,
            ...n,
            ref: t
          })
        });
      Rh.displayName = Oh;
      var Nh = uh,
        jh = ph,
        Ih = vh,
        kh = _h,
        Dh = Eh,
        Lh = Rh;
      const Ah = (0, M.createContext)(null);

      function Mh() {
        const e = (0, M.useContext)(Ah);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Bh = ({
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
          return (0, _.jsx)(Nh, {
            delayDuration: t,
            children: (0, _.jsx)(Ah.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, _.jsx)(jh, {
                open: i,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        Hh = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, _.jsx)(Ih, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        zh = (0, M.forwardRef)(({
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
          } = Mh(), m = (0, G.ZC)(p), v = eu({
            opacity: p ? 1 : 0,
            immediate: p && !m
          }), y = (0, V.v6)({
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, f);
          return (0, _.jsx)(Dh, {
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
            children: (0, _.jsx)(bu.div, {
              style: v,
              ...y,
              ref: h,
              children: t
            })
          })
        }),
        Vh = (0, M.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, V.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, _.jsx)(Lh, {
            ...r,
            ref: t
          })
        }),
        Fh = kh;

      function Uh(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var Gh = M.createContext(void 0);

      function qh(e) {
        const t = M.useContext(Gh);
        return e || t || "ltr"
      }

      function Xh(e) {
        const t = M.useRef({
          value: e,
          previous: e
        });
        return M.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }

      function Wh(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, xu.A)(t),
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
            } = e, n = M.useRef(null), i = M.useRef(new Map).current;
            return (0, _.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: n,
              children: r
            })
          };
        s.displayName = t;
        const a = e + "CollectionSlot",
          l = (0, Jf.TL)(a),
          c = M.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = i(a, r), s = (0, Eu.s)(t, o.collectionRef);
            return (0, _.jsx)(l, {
              ref: s,
              children: n
            })
          });
        c.displayName = a;
        const u = e + "CollectionItemSlot",
          d = "data-radix-collection-item",
          f = (0, Jf.TL)(u),
          h = M.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = M.useRef(null), a = (0, Eu.s)(t, s), l = i(u, r);
            return M.useEffect(() => (l.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              l.itemMap.delete(s)
            })), (0, _.jsx)(f, {
              [d]: "",
              ref: a,
              children: n
            })
          });
        return h.displayName = u, [{
          Provider: s,
          Slot: c,
          ItemSlot: h
        }, function(t) {
          const r = i(e + "CollectionConsumer", t),
            n = M.useCallback(() => {
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
      var Kh = ["PageUp", "PageDown"],
        $h = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Zh = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Yh = "Slider",
        [Qh, Jh, ep] = Wh(Yh),
        [tp, rp] = (0, xu.A)(Yh, [ep]),
        [np, op] = tp(Yh),
        ip = M.forwardRef((e, t) => {
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
          } = e, v = M.useRef(new Set), y = M.useRef(0), g = "horizontal" === s ? lp : cp, [b = [], w] = (0, eh.i)({
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
              c = Uh(a, [n, o]);
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
          return (0, _.jsx)(np, {
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
            children: (0, _.jsx)(Qh.Provider, {
              scope: e.__scopeSlider,
              children: (0, _.jsx)(Qh.Slot, {
                scope: e.__scopeSlider,
                children: (0, _.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: _u(m.onPointerDown, () => {
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
                      const r = Kh.includes(e.key) || e.shiftKey && $h.includes(e.key) ? 10 : 1,
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
      ip.displayName = Yh;
      var [sp, ap] = tp(Yh, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), lp = M.forwardRef((e, t) => {
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
        } = e, [d, f] = M.useState(null), h = (0, Eu.s)(t, e => f(e)), p = M.useRef(void 0), m = qh(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = _p([0, t.width], y ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, _.jsx)(sp, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, _.jsx)(up, {
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
              const t = Zh[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), cp = M.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...c
        } = e, u = M.useRef(null), d = (0, Eu.s)(t, u), f = M.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = _p([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, _.jsx)(sp, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, _.jsx)(up, {
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
              const t = Zh[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), up = M.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...c
        } = e, u = op(Yh, r);
        return (0, _.jsx)(Pu.sG.span, {
          ...c,
          ref: t,
          onKeyDown: _u(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : Kh.concat($h).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: _u(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: _u(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: _u(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), dp = "SliderTrack", fp = M.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = op(dp, r);
        return (0, _.jsx)(Pu.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      fp.displayName = dp;
      var hp = "SliderRange",
        pp = M.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = op(hp, r), i = ap(hp, r), s = M.useRef(null), a = (0, Eu.s)(t, s), l = o.values.length, c = o.values.map(e => bp(e, o.min, o.max)), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, _.jsx)(Pu.sG.span, {
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
      pp.displayName = hp;
      var mp = "SliderThumb",
        vp = M.forwardRef((e, t) => {
          const r = Jh(e.__scopeSlider),
            [n, o] = M.useState(null),
            i = (0, Eu.s)(t, e => o(e)),
            s = M.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, _.jsx)(yp, {
            ...e,
            ref: i,
            index: s
          })
        }),
        yp = M.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, s = op(mp, r), a = ap(mp, r), [l, c] = M.useState(null), u = (0, Eu.s)(t, e => c(e)), d = !l || s.form || !!l.closest("form"), f = Tf(l), h = s.values[n], p = void 0 === h ? 0 : bp(h, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), v = f?.[a.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - _p([0, 50], [0, n])(t) * r) * r
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
            children: [(0, _.jsx)(Qh.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, _.jsx)(Pu.sG.span, {
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
                onFocus: _u(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), d && (0, _.jsx)(gp, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: h
            }, n)]
          })
        });
      vp.displayName = mp;
      var gp = M.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = M.useRef(null),
          i = (0, Eu.s)(o, n),
          s = Xh(t);
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
        }, [s, t]), (0, _.jsx)(Pu.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      });

      function bp(e, t, r) {
        return Uh(100 / (r - t) * (e - t), [0, 100])
      }

      function _p(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      gp.displayName = "RadioBubbleInput";
      var wp = ip,
        Ep = fp,
        xp = pp,
        Pp = vp;

      function Cp(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }

      function Sp(e) {
        const t = Tp(e),
          r = M.forwardRef((e, r) => {
            const {
              children: n,
              ...o
            } = e, i = M.Children.toArray(n), s = i.find(Rp);
            if (s) {
              const e = s.props.children,
                n = i.map(t => t === s ? M.Children.count(e) > 1 ? M.Children.only(null) : M.isValidElement(e) ? e.props.children : null : t);
              return (0, _.jsx)(t, {
                ...o,
                ref: r,
                children: M.isValidElement(e) ? M.cloneElement(e, void 0, n) : null
              })
            }
            return (0, _.jsx)(t, {
              ...o,
              ref: r,
              children: n
            })
          });
        return r.displayName = `${e}.Slot`, r
      }

      function Tp(e) {
        const t = M.forwardRef((e, t) => {
          const {
            children: r,
            ...n
          } = e;
          if (M.isValidElement(r)) {
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
                    i(...e), o(...e)
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
            return r.type !== M.Fragment && (o.ref = t ? (0, Eu.t)(t, e) : e), M.cloneElement(r, o)
          }
          return M.Children.count(r) > 1 ? M.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Op = Symbol("radix.slottable");

      function Rp(e) {
        return M.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Op
      }
      var Np, jp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = Sp(`Primitive.${t}`),
            n = M.forwardRef((e, n) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, _.jsx)(s, {
                ...i,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        Ip = "dismissableLayer.update",
        kp = M.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Dp = M.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, c = M.useContext(kp), [u, d] = M.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, h] = M.useState({}), p = (0, Eu.s)(t, e => d(e)), m = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = u ? m.indexOf(u) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= y, E = function(e, t = globalThis?.document) {
            const r = (0, Cu.c)(e),
              n = M.useRef(!1),
              o = M.useRef(() => {});
            return M.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Ap("dismissableLayer.pointerDownOutside", r, i, {
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
            const r = (0, Cu.c)(e),
              n = M.useRef(!1);
            return M.useEffect(() => {
              const e = e => {
                e.target && !n.current && Ap("dismissableLayer.focusOutside", r, {
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
          return (0, Su.U)(e => {
            g === c.layers.size - 1 && (n?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), M.useEffect(() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Np = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Lp(), () => {
              r && 1 === c.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = Np)
            }
          }, [u, f, r, c]), M.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Lp())
          }, [u, c]), M.useEffect(() => {
            const e = () => h({});
            return document.addEventListener(Ip, e), () => document.removeEventListener(Ip, e)
          }, []), (0, _.jsx)(jp.div, {
            ...l,
            ref: p,
            style: {
              pointerEvents: b ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Cp(e.onFocusCapture, x.onFocusCapture),
            onBlurCapture: Cp(e.onBlurCapture, x.onBlurCapture),
            onPointerDownCapture: Cp(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        });

      function Lp() {
        const e = new CustomEvent(Ip);
        document.dispatchEvent(e)
      }

      function Ap(e, t, r, {
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
        }), n ? function(e, t) {
          e && iu.flushSync(() => e.dispatchEvent(t))
        }(o, i) : o.dispatchEvent(i)
      }
      Dp.displayName = "DismissableLayer", M.forwardRef((e, t) => {
        const r = M.useContext(kp),
          n = M.useRef(null),
          o = (0, Eu.s)(t, n);
        return M.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, _.jsx)(jp.div, {
          ...e,
          ref: o
        })
      }).displayName = "DismissableLayerBranch";
      var Mp = "focusScope.autoFocusOnMount",
        Bp = "focusScope.autoFocusOnUnmount",
        Hp = {
          bubbles: !1,
          cancelable: !0
        },
        zp = M.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = M.useState(null), c = (0, Cu.c)(o), u = (0, Cu.c)(i), d = M.useRef(null), f = (0, Eu.s)(t, e => l(e)), h = M.useRef({
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
                  a.contains(t) ? d.current = t : Gp(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || Gp(d.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Gp(a)
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
              qp.add(h);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(Mp, Hp);
                a.addEventListener(Mp, c), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Gp(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(Vp(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Gp(a))
              }
              return () => {
                a.removeEventListener(Mp, c), setTimeout(() => {
                  const t = new CustomEvent(Bp, Hp);
                  a.addEventListener(Bp, u), a.dispatchEvent(t), t.defaultPrevented || Gp(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(Bp, u), qp.remove(h)
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
                  const t = Vp(e);
                  return [Fp(t, e), Fp(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && Gp(i, {
                select: !0
              })) : (e.preventDefault(), r && Gp(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, h.paused]);
          return (0, _.jsx)(jp.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: p
          })
        });

      function Vp(e) {
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

      function Fp(e, t) {
        for (const r of e)
          if (!Up(r, {
              upTo: t
            })) return r
      }

      function Up(e, {
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

      function Gp(e, {
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
      zp.displayName = "FocusScope";
      var qp = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Xp(e, t), e.unshift(t)
          },
          remove(t) {
            e = Xp(e, t), e[0]?.resume()
          }
        }
      }();

      function Xp(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var Wp = M.forwardRef((e, t) => {
        const {
          container: r,
          ...n
        } = e, [o, i] = M.useState(!1);
        (0, Sf.N)(() => i(!0), []);
        const s = r || o && globalThis?.document?.body;
        return s ? iu.createPortal((0, _.jsx)(jp.div, {
          ...n,
          ref: t
        }), s) : null
      });
      Wp.displayName = "Portal";
      var Kp = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = M.useState(), n = M.useRef(null), o = M.useRef(e), i = M.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = function(e, t) {
            return M.useReducer((e, r) => t[e][r] ?? e, e)
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
          return M.useEffect(() => {
            const e = $p(n.current);
            i.current = "mounted" === a ? e : "none"
          }, [a]), (0, Sf.N)(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = i.current,
                s = $p(t);
              l(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : r && n !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, l]), (0, Sf.N)(() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                s = i => {
                  const s = $p(n.current).includes(i.animationName);
                  if (i.target === t && s && (l("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    })
                  }
                },
                a = e => {
                  e.target === t && (i.current = $p(n.current))
                };
              return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
                r.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
              }
            }
            l("ANIMATION_END")
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: M.useCallback(e => {
              n.current = e ? getComputedStyle(e) : null, r(e)
            }, [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : M.Children.only(r), i = (0, Eu.s)(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? M.cloneElement(o, {
          ref: i
        }) : null
      };

      function $p(e) {
        return e?.animationName || "none"
      }
      Kp.displayName = "Presence";
      var Zp = 0;

      function Yp() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Qp = r(97359),
        Jp = r(94926),
        em = "Dialog",
        [tm, rm] = (0, xu.A)(em),
        [nm, om] = tm(em),
        im = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = M.useRef(null), l = M.useRef(null), [c, u] = (0, eh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: em
          });
          return (0, _.jsx)(nm, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: (0, Lu.B)(),
            titleId: (0, Lu.B)(),
            descriptionId: (0, Lu.B)(),
            open: c,
            onOpenChange: u,
            onOpenToggle: M.useCallback(() => u(e => !e), [u]),
            modal: s,
            children: r
          })
        };
      im.displayName = em;
      var sm = "DialogTrigger",
        am = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = om(sm, r), i = (0, Eu.s)(t, o.triggerRef);
          return (0, _.jsx)(jp.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Tm(o.open),
            ...n,
            ref: i,
            onClick: Cp(e.onClick, o.onOpenToggle)
          })
        });
      am.displayName = sm;
      var lm = "DialogPortal",
        [cm, um] = tm(lm, {
          forceMount: void 0
        }),
        dm = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = om(lm, t);
          return (0, _.jsx)(cm, {
            scope: t,
            forceMount: r,
            children: M.Children.map(n, e => (0, _.jsx)(Kp, {
              present: r || i.open,
              children: (0, _.jsx)(Wp, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      dm.displayName = lm;
      var fm = "DialogOverlay",
        hm = M.forwardRef((e, t) => {
          const r = um(fm, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = om(fm, e.__scopeDialog);
          return i.modal ? (0, _.jsx)(Kp, {
            present: n || i.open,
            children: (0, _.jsx)(mm, {
              ...o,
              ref: t
            })
          }) : null
        });
      hm.displayName = fm;
      var pm = Sp("DialogOverlay.RemoveScroll"),
        mm = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = om(fm, r);
          return (0, _.jsx)(Qp.A, {
            as: pm,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, _.jsx)(jp.div, {
              "data-state": Tm(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        vm = "DialogContent",
        ym = M.forwardRef((e, t) => {
          const r = um(vm, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = om(vm, e.__scopeDialog);
          return (0, _.jsx)(Kp, {
            present: n || i.open,
            children: i.modal ? (0, _.jsx)(gm, {
              ...o,
              ref: t
            }) : (0, _.jsx)(bm, {
              ...o,
              ref: t
            })
          })
        });
      ym.displayName = vm;
      var gm = M.forwardRef((e, t) => {
          const r = om(vm, e.__scopeDialog),
            n = M.useRef(null),
            o = (0, Eu.s)(t, r.contentRef, n);
          return M.useEffect(() => {
            const e = n.current;
            if (e) return (0, Jp.Eq)(e)
          }, []), (0, _.jsx)(_m, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Cp(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: Cp(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: Cp(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        bm = M.forwardRef((e, t) => {
          const r = om(vm, e.__scopeDialog),
            n = M.useRef(!1),
            o = M.useRef(!1);
          return (0, _.jsx)(_m, {
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
        _m = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = om(vm, r), l = M.useRef(null), c = (0, Eu.s)(t, l);
          return M.useEffect(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? Yp()), document.body.insertAdjacentElement("beforeend", e[1] ?? Yp()), Zp++, () => {
              1 === Zp && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), Zp--
            }
          }, []), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(zp, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, _.jsx)(Dp, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Tm(a.open),
                ...s,
                ref: c,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(jm, {
                titleId: a.titleId
              }), (0, _.jsx)(Im, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        wm = "DialogTitle",
        Em = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = om(wm, r);
          return (0, _.jsx)(jp.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      Em.displayName = wm;
      var xm = "DialogDescription",
        Pm = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = om(xm, r);
          return (0, _.jsx)(jp.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      Pm.displayName = xm;
      var Cm = "DialogClose",
        Sm = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = om(Cm, r);
          return (0, _.jsx)(jp.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: Cp(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function Tm(e) {
        return e ? "open" : "closed"
      }
      Sm.displayName = Cm;
      var Om = "DialogTitleWarning",
        [Rm, Nm] = (0, xu.q)(Om, {
          contentName: vm,
          titleName: wm,
          docsSlug: "dialog"
        }),
        jm = ({
          titleId: e
        }) => {
          const t = Nm(Om),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return M.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        Im = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Nm("DialogDescriptionWarning").contentName}}.`;
          return M.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        km = im,
        Dm = am,
        Lm = dm,
        Am = hm,
        Mm = ym,
        Bm = Em,
        Hm = Pm,
        zm = Sm;
      const Vm = (0, M.createContext)({
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
        Fm = ({
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
          const f = (0, X.Ym)(),
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
            [D = !1, L] = (0, G.ic)({
              prop: t || n,
              onChange: r
            }),
            A = (0, M.useRef)(null);
          return A.current || (A.current = new Ts({
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
          })), (0, _.jsx)(ms, {
            messages: vs,
            locale: f,
            children: (0, _.jsx)(Vm.Provider, {
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
                open: D,
                setOpen: L,
                altText: e,
                hideTrigger: u,
                slide: A.current
              },
              children: (0, _.jsx)(Gm, {
                ...d
              })
            })
          })
        },
        Um = (0, M.createContext)({
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
        Gm = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, M.useContext)(Vm), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, dt.L)(), {
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
            } = (0, M.useContext)(Vm), h = (0, M.useRef)(null);
            h.current || (h.current = ut.os.timeline({
              defaults: $r
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), ut.os.set([d.current, f.current], {
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
                }), ut.os.set([f.current], {
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
                  [Yr]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Yr]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (h.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await br(f.current), t.closing || (ut.os.set([f.current], {
                  visibility: "visible",
                  ...Zr
                }), ut.os.set([d.current], {
                  visibility: "hidden",
                  ...Zr
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
            } = (0, dt.L)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: s,
              placeholderRef: a
            } = (0, M.useContext)(Vm), l = t(async e => {
              r.zoomTo(e), ut.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Zr
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), ut.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Zr
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), ut.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Zr
              })
            }), d = t(async () => {
              r.zoomAndPanToInitial(), ut.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Zr
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              ut.os.to([i.current], {
                opacity: e,
                [Yr]: t,
                ...Zr
              })
            }), h = t(async () => {
              ut.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Zr
              })
            }), p = (0, M.useCallback)(() => {
              n.current && o.current && (r.resize(), ut.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Zr
              }), ut.os.set([n.current, a.current], {
                ...r.getUpdatedContentSize(),
                ...Zr
              }), ut.os.set([s.current], {
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
          return (0, _.jsx)(Um.Provider, {
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
            children: (0, _.jsx)(km, {
              ...d
            })
          })
        },
        qm = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = cs(),
            {
              triggerRef: i,
              triggerBorderRef: s,
              altText: a
            } = (0, M.useContext)(Vm),
            l = (0, G.UP)(i, n),
            c = (0, V.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Os, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, _.jsx)(Dm, {
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
        Xm = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, M.useContext)(Vm), i = (0, G.UP)(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? q.DX : "img";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Wm = (0, M.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, M.useContext)(Vm), o = (0, G.UP)(n, r), i = (0, V.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? q.DX : ie.Maximize2;
          return (0, _.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        Km = ({
          ...e
        }) => (0, _.jsx)(Lm, {
          ...e
        }),
        $m = (0, M.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, M.useContext)(Vm), o = (0, G.UP)(n, r), i = (0, V.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, _.jsx)(Am, {
            ref: o,
            ...i
          })
        }),
        Zm = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, M.useContext)(Um), {
            contrastMode: i
          } = (0, X.DP)(), {
            contentRef: s,
            altText: a,
            triggerRef: l
          } = (0, M.useContext)(Vm), {
            cursor: c
          } = (() => {
            const {
              slide: e
            } = (0, M.useContext)(Vm), [t, r] = (0, M.useState)(e.getCursor()), n = (0, M.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, M.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), u = (0, ys.m)("dark", i), d = (0, G.UP)(s, n), f = (0, V.v6)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, l),
            className: (0, oe.clsx)("foundry_1a74xwb9", u),
            style: {
              cursor: c
            }
          });
          return (0, _.jsxs)(Mm, {
            ref: d,
            ...f,
            children: [(0, _.jsx)(q.s6, {
              children: (0, _.jsx)(Bm, {
                children: a
              })
            }), t]
          })
        }),
        Ym = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, M.useContext)(Vm);
          (() => {
            const {
              contextSafe: e
            } = (0, dt.L)(), {
              toggleControls: t
            } = (0, M.useContext)(Um), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: i,
              slide: s
            } = (0, M.useContext)(Vm), a = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (ut.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Zr
              }), ut.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Zr
              }), ut.os.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...Zr
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || ut.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Zr
              }))
            }), c = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (ut.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Zr
              }), ut.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Zr
              }), ut.os.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...Zr
              })))
            }), u = (0, M.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, G.iQ)({
              ref: i,
              onFocusIn: u
            }), gr({
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
            children: (0, _.jsxs)(Qm, {
              children: [(0, _.jsx)(Jm, {}), t]
            })
          })
        }),
        Qm = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, M.useContext)(Vm), i = (0, G.UP)(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? q.DX : "div";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Jm = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, M.useContext)(Vm), i = (0, G.UP)(o, n), s = (0, V.v6)(r, {
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
        ev = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, M.useContext)(Vm), i = (0, G.UP)(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? q.DX : "img";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        tv = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, M.useContext)(Vm), i = (0, G.UP)(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? q.DX : "p";
          return (0, _.jsx)(Hm, {
            asChild: !0,
            children: (0, _.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        rv = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, M.useContext)(Vm);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, M.useContext)(Um);
            Fr(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Fr(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), Fr("r", n, {
              enabled: e,
              preventDefault: !0
            }), Fr("esc", o, {
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
          return (0, _.jsx)(Hr, {
            children: (0, _.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        nv = ({
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
          return (0, _.jsxs)(Bh, {
            delayDuration: 0,
            children: [(0, _.jsx)(Hh, {
              children: n
            }), (0, _.jsxs)(zh, {
              ...i,
              children: [(0, _.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, _.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, _.jsx)(Vh, {})]
            })]
          })
        },
        ov = (0, M.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, V.v6)(e, {
            isInline: !0
          });
          return (0, _.jsx)(zs, {
            ref: t,
            ...r
          })
        }),
        iv = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, i) {
          const s = cs(),
            {
              zoomRef: a
            } = (0, M.useContext)(Vm),
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
              } = (0, M.useContext)(Vm), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, M.useContext)(Um), [o, i] = (0, M.useState)(!1), [s, a] = (0, M.useState)(!1), [l, c] = (0, M.useState)(0), [u, d] = (0, M.useState)(0), [f, h] = (0, M.useState)(0), p = (0, M.useCallback)(() => {
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
            children: [(0, _.jsx)(nv, {
              side: "left",
              enabled: r,
              content: s.formatMessage(js),
              metadata: s.formatMessage(Is, {
                shortcut: (0, _.jsx)(ov, {
                  shortcut: "+"
                })
              }),
              children: (0, _.jsx)(Te, {
                label: s.formatMessage(js),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Kr({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, _.jsxs)(wp, {
              className: "foundry_1a74xwbr",
              max: p,
              min: h,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, _.jsx)(Ep, {
                className: "foundry_1a74xwbs",
                children: (0, _.jsx)(xp, {
                  className: "foundry_1a74xwbt"
                })
              }), (0, _.jsx)(nv, {
                side: "left",
                enabled: r,
                content: s.formatMessage(Ms, {
                  zoom: f.toFixed(0)
                }),
                children: (0, _.jsx)(Pp, {
                  className: "foundry_1a74xwbu",
                  children: (0, _.jsx)("span", {
                    className: "foundry_1a74xwbv"
                  })
                })
              })]
            }), (0, _.jsx)(nv, {
              side: "left",
              enabled: r,
              content: s.formatMessage(ks),
              metadata: s.formatMessage(Ds, {
                shortcut: (0, _.jsx)(ov, {
                  shortcut: "-"
                })
              }),
              children: (0, _.jsx)(Te, {
                label: s.formatMessage(ks),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Kr({
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
        sv = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const i = cs(),
            {
              closeRef: s
            } = (0, M.useContext)(Vm),
            a = (0, G.UP)(s, o),
            l = (0, V.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbk foundry_1a74xwbj"
            }),
            c = t ? (0, _.jsx)(q.DX, {
              ref: a,
              ...l
            }) : (0, _.jsx)(Te, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: i.formatMessage(Rs)
            });
          return (0, _.jsx)(nv, {
            side: "right",
            enabled: r,
            content: i.formatMessage(Rs),
            metadata: i.formatMessage(Ns, {
              shortcut: (0, _.jsx)(ov, {
                shortcut: "Esc"
              })
            }),
            children: (0, _.jsx)(zm, {
              asChild: !0,
              children: c
            })
          })
        }),
        av = (0, M.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = cs(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, M.useContext)(Vm), {
                contextSafe: r
              } = (0, dt.L)(), {
                resetZoom: n
              } = (0, M.useContext)(Um), [o, i] = (0, M.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                ut.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Zr
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
            } = (0, M.useContext)(Vm),
            a = (0, G.UP)(s, n),
            l = (0, V.v6)(r, i, {
              "data-testid": e,
              className: "foundry_1a74xwbl foundry_1a74xwbj"
            });
          return (0, _.jsx)(nv, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Ls),
            metadata: o.formatMessage(As, {
              shortcut: (0, _.jsx)(ov, {
                shortcut: "R"
              })
            }),
            children: (0, _.jsx)(Te, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Ls)
            })
          })
        }),
        lv = (0, M.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = cs(),
            {
              downloadRef: i,
              imageRef: s
            } = (0, M.useContext)(Vm),
            a = (0, G.UP)(i, n),
            l = (0, V.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbm foundry_1a74xwbj"
            });
          return (0, _.jsx)(nv, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Bs),
            children: (0, _.jsx)(Te, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Bs),
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
        cv = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        uv = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        dv = uv.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function fv(e) {
        return e.matches(dv)
      }
      uv.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), uv.join(':not([hidden]):not([tabindex="-1"]),');
      const hv = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        pv = e => e && "window" in e && e.window === e ? e : hv(e).defaultView || window;

      function mv(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }

      function vv(e) {
        if (function() {
            if (null == yv) {
              yv = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return yv = !0, !0
                  }
                })
              } catch {}
            }
            return yv
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
      let yv = null;
      let gv = !1;

      function bv(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
      }

      function _v(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function wv(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Ev = wv(function() {
          return _v(/^Mac/i)
        }),
        xv = wv(function() {
          return _v(/^iPhone/i)
        }),
        Pv = wv(function() {
          return _v(/^iPad/i) || Ev() && navigator.maxTouchPoints > 1
        }),
        Cv = wv(function() {
          return xv() || Pv()
        }),
        Sv = (wv(function() {
          return Ev() || Cv()
        }), wv(function() {
          return bv(/AppleWebKit/i) && !Tv()
        })),
        Tv = wv(function() {
          return bv(/Chrome/i)
        }),
        Ov = wv(function() {
          return bv(/Android/i)
        }),
        Rv = wv(function() {
          return bv(/Firefox/i)
        });
      let Nv = new Map,
        jv = new Set;

      function Iv() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Nv.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Nv.delete(r.target)), 0 === Nv.size)) {
            for (let e of jv) e();
            jv.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = Nv.get(r.target);
          n || (n = new Set, Nv.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Iv() : document.addEventListener("DOMContentLoaded", Iv));
      let kv = "default",
        Dv = "",
        Lv = new WeakMap;

      function Av(e) {
        if (Cv()) {
          if ("disabled" !== kv) return;
          kv = "restoring", setTimeout(() => {
            var t;
            t = () => {
              if ("restoring" === kv) {
                const t = hv(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Dv || ""), Dv = "", kv = "default"
              }
            }, requestAnimationFrame(() => {
              ! function() {
                for (const [e] of Nv) "isConnected" in e && !e.isConnected && Nv.delete(e)
              }(), 0 === Nv.size ? t() : jv.add(t)
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Lv.has(e)) {
          let t = Lv.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Lv.delete(e)
        }
      }
      const Mv = M.createContext({
        register: () => {}
      });
      Mv.displayName = "PressResponderContext";
      var Bv = r(88842),
        Hv = r(57178),
        zv = r(72562);

      function Vv(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Fv, Uv = new Map;

      function Gv(e, t) {
        if (e === t) return e;
        let r = Uv.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = Uv.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function qv(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Vv(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Gv(r, o) : t[e] = void 0 !== o ? o : r : t[e] = oe(r, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (Fv = new FinalizationRegistry(e => {
        Uv.delete(e)
      }));
      const Xv = "undefined" != typeof document ? M.useLayoutEffect : () => {};

      function Wv(e) {
        const t = (0, M.useRef)(null);
        return Xv(() => {
          t.current = e
        }, [e]), (0, M.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      var Kv = r(35412);

      function $v(e, t) {
        if (!(0, Kv.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : mv(r) ? r.host : r.parentNode
        }
        return !1
      }

      function Zv(e) {
        return (0, Kv.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }

      function Yv(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        Rv() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Ev() ? i = !0 : s = !0);
        let c = Sv() && Ev() && !Pv() ? new KeyboardEvent("keydown", {
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
        Yv.isOpening = r, vv(e), e.dispatchEvent(c), Yv.isOpening = !1
      }

      function Qv(e) {
        let t = (0, M.useContext)(Mv);
        if (t) {
          let {
            register: r,
            ...n
          } = t;
          e = qv(n, e), r()
        }
        return function(e, t) {
          Xv(() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          })
        }(t, e.ref), e
      }
      Yv.isOpening = !1;
      var Jv = new WeakMap;
      class ey {
        continuePropagation() {
          (0, zv._)(this, Jv, !1)
        }
        get shouldStopPropagation() {
          return (0, Bv._)(this, Jv)
        }
        constructor(e, t, r, n) {
          var o;
          (0, Hv._)(this, Jv, {
            writable: !0,
            value: void 0
          }), (0, zv._)(this, Jv, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, c = 0,
            u = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), s && (null != l && null != u ? (a = l - s.left, c = u - s.top) : (a = s.width / 2, c = s.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = a, this.y = c
        }
      }
      const ty = Symbol("linkClicked"),
        ry = "react-aria-pressable-style",
        ny = "data-react-aria-pressable";

      function oy(e) {
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
        } = Qv(e), [p, m] = (0, M.useState)(!1), v = (0, M.useRef)({
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
        }(), b = Wv((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new ey("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        }), _ = Wv((e, n, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new ey("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !a) {
            let r = new ey("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        }), w = Wv((e, t) => {
          let r = v.current;
          if (a) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new ey("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }), E = Wv(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(ay(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || Av(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), x = Wv(e => {
          u && E(e)
        }), P = Wv(e => {
          null == s || s(e)
        }), C = Wv((e, t) => {
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
                if (sy(t.nativeEvent, t.currentTarget) && $v(t.currentTarget, Zv(t.nativeEvent))) {
                  var n;
                  ly(Zv(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        sy(t, n) && !t.repeat && $v(n, Zv(t)) && e.target && w(ay(e.target, t), "keyboard")
                      };
                    y(hv(t.currentTarget), "keyup", Vv(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Ev() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var r;
                if ((!t || $v(t.currentTarget, Zv(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Yv.isOpening) {
                  let n = !0;
                  if (a && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (r = t.nativeEvent).mozInputSource || !r.isTrusted) && (Ov() && r.pointerType ? "click" !== r.type || 1 !== r.buttons : 0 !== r.detail || r.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = w(ay(t.currentTarget, t), r),
                        i = _(ay(t.currentTarget, t), r, !0);
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
              if (e.isPressed && e.target && sy(t, e.target)) {
                var n;
                ly(Zv(t), t.key) && t.preventDefault();
                let r = Zv(t),
                  o = $v(e.target, Zv(t));
                _(ay(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && iy(e.target) && $v(e.target, r) && !t[ty] && (t[ty] = !0, Yv(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !$v(t.currentTarget, Zv(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Ov() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (Cv()) {
                    if ("default" === kv) {
                      const t = hv(e);
                      Dv = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    kv = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Lv.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = Zv(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(hv(t.currentTarget), "pointerup", r, !1), y(hv(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if ($v(t.currentTarget, Zv(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !fv(e);) e = e.parentElement;
                    let t = pv(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    gv = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, vv(r), l()))
                      },
                      s = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, vv(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), gv = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              $v(t.currentTarget, Zv(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || w(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(ay(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(ay(e.target, t), e.pointerType, !1), x(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if ($v(e.target, Zv(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (vv(e.target), e.target.click()))
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
              $v(e.currentTarget, Zv(e.nativeEvent)) && E(e)
            }
          }
          return t
        }, [y, a, c, g, d, E, x, _, b, w, P, C]);
        return (0, M.useEffect)(() => {
          if (!f) return;
          const e = hv(f.current);
          if (!e || !e.head || e.getElementById(ry)) return;
          const t = e.createElement("style");
          t.id = ry, t.textContent = `\n@layer {\n  [${ny}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, M.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            d || Av(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || p,
          pressProps: qv(h, S, {
            [ny]: !0
          })
        }
      }

      function iy(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function sy(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof pv(o).HTMLInputElement && !uy(o, r) || o instanceof pv(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && iy(o)) && "Enter" !== r)
      }

      function ay(e, t) {
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

      function ly(e, t) {
        return e instanceof HTMLInputElement ? !uy(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : iy(e)))
        }(e)
      }
      const cy = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function uy(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : cy.has(e.type)
      }

      function dy(e) {
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

      function fy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fy(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = dy(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function py(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var my = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vy = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hy(hy({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) my(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return py(e.variantClassNames, e => py(e, e => e.split(" ")[0]))
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
      const yy = (0, M.createContext)(null);

      function gy() {
        const e = (0, M.useContext)(yy);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const by = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...s
        }, a) => {
          const l = (0, V.v6)({
              className: vy({
                status: i
              }),
              "data-testid": t
            }, s),
            c = r ? q.DX : "div";
          return (0, _.jsx)(yy.Provider, {
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
        _y = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = gy(), i = (0, V.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: ie.Check,
            invalid: ie.X,
            neutral: ie.TriangleAlert
          }, a = t ? q.DX : s[o];
          return (0, _.jsx)(a, {
            ref: n,
            ...i
          })
        }),
        wy = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: s
          } = gy(), a = (0, V.v6)({
            "data-testid": t,
            id: s || i
          }, n), l = r ? q.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });
      var Ey = "ScrollArea",
        [xy, Py] = (0, xu.A)(Ey),
        [Cy, Sy] = xy(Ey),
        Ty = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...s
          } = e, [a, l] = M.useState(null), [c, u] = M.useState(null), [d, f] = M.useState(null), [h, p] = M.useState(null), [m, v] = M.useState(null), [y, g] = M.useState(0), [b, w] = M.useState(0), [E, x] = M.useState(!1), [P, C] = M.useState(!1), S = (0, Eu.s)(t, e => l(e)), T = qh(o);
          return (0, _.jsx)(Cy, {
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
            children: (0, _.jsx)(Pu.sG.div, {
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
      Ty.displayName = Ey;
      var Oy = "ScrollAreaViewport",
        Ry = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, s = Sy(Oy, r), a = M.useRef(null), l = (0, Eu.s)(t, a, s.onViewportChange);
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, _.jsx)(Pu.sG.div, {
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
      Ry.displayName = Oy;
      var Ny = "ScrollAreaScrollbar",
        jy = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Sy(Ny, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: s
          } = o, a = "horizontal" === e.orientation;
          return M.useEffect(() => (a ? i(!0) : s(!0), () => {
            a ? i(!1) : s(!1)
          }), [a, i, s]), "hover" === o.type ? (0, _.jsx)(Iy, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, _.jsx)(ky, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, _.jsx)(Dy, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, _.jsx)(Ly, {
            ...n,
            ref: t
          }) : null
        });
      jy.displayName = Ny;
      var Iy = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Sy(Ny, e.__scopeScrollArea), [i, s] = M.useState(!1);
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, _.jsx)(Yf, {
            present: r || i,
            children: (0, _.jsx)(Dy, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        ky = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Sy(Ny, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = Jy(() => l("SCROLL_END"), 100), [a, l] = (c = {
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
          }, [o.viewport, i, l, s]), (0, _.jsx)(Yf, {
            present: r || "hidden" !== a,
            children: (0, _.jsx)(Ly, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: _u(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: _u(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Dy = M.forwardRef((e, t) => {
          const r = Sy(Ny, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, s] = M.useState(!1),
            a = "horizontal" === e.orientation,
            l = Jy(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(a ? e : t)
              }
            }, 10);
          return eg(r.viewport, l), eg(r.content, l), (0, _.jsx)(Yf, {
            present: n || i,
            children: (0, _.jsx)(Ly, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Ly = M.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Sy(Ny, e.__scopeScrollArea), i = M.useRef(null), s = M.useRef(0), [a, l] = M.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = Wy(a.viewport, a.content), u = {
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
              const o = Ky(r),
                i = t || o / 2,
                s = o - i,
                a = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                c = r.content - r.viewport;
              return Zy([a, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, s.current, a, t)
          }
          return "horizontal" === r ? (0, _.jsx)(Ay, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = $y(o.viewport.scrollLeft, a, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, _.jsx)(My, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = $y(o.viewport.scrollTop, a);
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
        Ay = M.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Sy(Ny, e.__scopeScrollArea), [s, a] = M.useState(), l = M.useRef(null), c = (0, Eu.s)(t, l, i.onScrollbarXChange);
          return M.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, _.jsx)(zy, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Ky(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Yy(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Xy(s.paddingLeft),
                  paddingEnd: Xy(s.paddingRight)
                }
              })
            }
          })
        }),
        My = M.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Sy(Ny, e.__scopeScrollArea), [s, a] = M.useState(), l = M.useRef(null), c = (0, Eu.s)(t, l, i.onScrollbarYChange);
          return M.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, _.jsx)(zy, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Ky(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Yy(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Xy(s.paddingTop),
                  paddingEnd: Xy(s.paddingBottom)
                }
              })
            }
          })
        }),
        [By, Hy] = xy(Ny),
        zy = M.forwardRef((e, t) => {
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
          } = e, h = Sy(Ny, r), [p, m] = M.useState(null), v = (0, Eu.s)(t, e => m(e)), y = M.useRef(null), g = M.useRef(""), b = h.viewport, w = n.content - n.viewport, E = (0, Cu.c)(u), x = (0, Cu.c)(l), P = Jy(d, 10);

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
          }, [b, p, w, E]), M.useEffect(x, [n, x]), eg(p, P), eg(h.content, P), (0, _.jsx)(By, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, Cu.c)(i),
            onThumbPointerUp: (0, Cu.c)(s),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, Cu.c)(a),
            children: (0, _.jsx)(Pu.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: _u(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: _u(e.onPointerMove, C),
              onPointerUp: _u(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        Vy = "ScrollAreaThumb",
        Fy = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Hy(Vy, e.__scopeScrollArea);
          return (0, _.jsx)(Yf, {
            present: r || o.hasThumb,
            children: (0, _.jsx)(Uy, {
              ref: t,
              ...n
            })
          })
        }),
        Uy = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = Sy(Vy, r), s = Hy(Vy, r), {
            onThumbPositionChange: a
          } = s, l = (0, Eu.s)(t, e => s.onThumbChange(e)), c = M.useRef(void 0), u = Jy(() => {
            c.current && (c.current(), c.current = void 0)
          }, 100);
          return M.useEffect(() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = Qy(e, a);
                  c.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [i.viewport, u, a]), (0, _.jsx)(Pu.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: _u(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: _u(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      Fy.displayName = Vy;
      var Gy = "ScrollAreaCorner";
      M.forwardRef((e, t) => {
        const r = Sy(Gy, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, _.jsx)(qy, {
          ...e,
          ref: t
        }) : null
      }).displayName = Gy;
      var qy = M.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Sy(Gy, r), [i, s] = M.useState(0), [a, l] = M.useState(0), c = Boolean(i && a);
        return eg(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), eg(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), c ? (0, _.jsx)(Pu.sG.div, {
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

      function Xy(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Wy(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Ky(e) {
        const t = Wy(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function $y(e, t, r = "ltr") {
        const n = Ky(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - n,
          l = Uh(e, "ltr" === r ? [0, s] : [-1 * s, 0]);
        return Zy([0, s], [0, a])(l)
      }

      function Zy(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Yy(e, t) {
        return e > 0 && e < t
      }
      var Qy = (e, t = () => {}) => {
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

      function Jy(e, t) {
        const r = (0, Cu.c)(e),
          n = M.useRef(0);
        return M.useEffect(() => () => window.clearTimeout(n.current), []), M.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function eg(e, t) {
        const r = (0, Cu.c)(t);
        (0, Sf.N)(() => {
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
      var tg = Ty,
        rg = Ry,
        ng = jy,
        og = Fy,
        ig = 0;

      function sg() {
        M.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? ag()), document.body.insertAdjacentElement("beforeend", e[1] ?? ag()), ig++, () => {
            1 === ig && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), ig--
          }
        }, [])
      }

      function ag() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var lg = "focusScope.autoFocusOnMount",
        cg = "focusScope.autoFocusOnUnmount",
        ug = {
          bubbles: !1,
          cancelable: !0
        },
        dg = M.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = M.useState(null), c = (0, Cu.c)(o), u = (0, Cu.c)(i), d = M.useRef(null), f = (0, Eu.s)(t, e => l(e)), h = M.useRef({
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
                  a.contains(t) ? d.current = t : mg(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || mg(d.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && mg(a)
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
              vg.add(h);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(lg, ug);
                a.addEventListener(lg, c), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (mg(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(fg(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && mg(a))
              }
              return () => {
                a.removeEventListener(lg, c), setTimeout(() => {
                  const t = new CustomEvent(cg, ug);
                  a.addEventListener(cg, u), a.dispatchEvent(t), t.defaultPrevented || mg(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(cg, u), vg.remove(h)
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
                  const t = fg(e);
                  return [hg(t, e), hg(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && mg(i, {
                select: !0
              })) : (e.preventDefault(), r && mg(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, h.paused]);
          return (0, _.jsx)(Pu.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: p
          })
        });

      function fg(e) {
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

      function hg(e, t) {
        for (const r of e)
          if (!pg(r, {
              upTo: t
            })) return r
      }

      function pg(e, {
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

      function mg(e, {
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
      dg.displayName = "FocusScope";
      var vg = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = yg(e, t), e.unshift(t)
          },
          remove(t) {
            e = yg(e, t), e[0]?.resume()
          }
        }
      }();

      function yg(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var gg = [" ", "Enter", "ArrowUp", "ArrowDown"],
        bg = [" ", "Enter"],
        _g = "Select",
        [wg, Eg, xg] = Wh(_g),
        [Pg, Cg] = (0, xu.A)(_g, [xg, Nf]),
        Sg = Nf(),
        [Tg, Og] = Pg(_g),
        [Rg, Ng] = Pg(_g),
        jg = e => {
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
          } = e, m = Sg(t), [v, y] = M.useState(null), [g, b] = M.useState(null), [w, E] = M.useState(!1), x = qh(c), [P, C] = (0, eh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: _g
          }), [S, T] = (0, eh.i)({
            prop: s,
            defaultProp: a,
            onChange: l,
            caller: _g
          }), O = M.useRef(null), R = !v || p || !!v.closest("form"), [N, j] = M.useState(new Set), I = Array.from(N).map(e => e.props.value).join(";");
          return (0, _.jsx)(Xf, {
            ...m,
            children: (0, _.jsxs)(Tg, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: E,
              contentId: (0, Lu.B)(),
              value: S,
              onValueChange: T,
              open: P,
              onOpenChange: C,
              dir: x,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [(0, _.jsx)(wg.Provider, {
                scope: t,
                children: (0, _.jsx)(Rg, {
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
              }), R ? (0, _.jsxs)(fb, {
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
      jg.displayName = _g;
      var Ig = "SelectTrigger",
        kg = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = Sg(r), s = Og(Ig, r), a = s.disabled || n, l = (0, Eu.s)(t, s.onTriggerChange), c = Eg(r), u = M.useRef("touch"), [d, f, h] = pb(e => {
            const t = c().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = mb(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), p = e => {
            a || (s.onOpenChange(!0), h()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, _.jsx)(Wf, {
            asChild: !0,
            ...i,
            children: (0, _.jsx)(Pu.sG.button, {
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
              "data-placeholder": hb(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: _u(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== u.current && p(e)
              }),
              onPointerDown: _u(o.onPointerDown, e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              }),
              onKeyDown: _u(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || gg.includes(e.key) && (p(), e.preventDefault())
              })
            })
          })
        });
      kg.displayName = Ig;
      var Dg = "SelectValue",
        Lg = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = Og(Dg, r), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== i, d = (0, Eu.s)(t, l.onValueNodeChange);
          return (0, Sf.N)(() => {
            c(u)
          }, [c, u]), (0, _.jsx)(Pu.sG.span, {
            ...a,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: hb(l.value) ? (0, _.jsx)(_.Fragment, {
              children: s
            }) : i
          })
        });
      Lg.displayName = Dg;
      var Ag = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, _.jsx)(Pu.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Ag.displayName = "SelectIcon";
      var Mg = e => (0, _.jsx)(Zf, {
        asChild: !0,
        ...e
      });
      Mg.displayName = "SelectPortal";
      var Bg = "SelectContent",
        Hg = M.forwardRef((e, t) => {
          const r = Og(Bg, e.__scopeSelect),
            [n, o] = M.useState();
          if ((0, Sf.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? iu.createPortal((0, _.jsx)(Vg, {
              scope: e.__scopeSelect,
              children: (0, _.jsx)(wg.Slot, {
                scope: e.__scopeSelect,
                children: (0, _.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, _.jsx)(Gg, {
            ...e,
            ref: t
          })
        });
      Hg.displayName = Bg;
      var zg = 10,
        [Vg, Fg] = Pg(Bg),
        Ug = (0, Jf.TL)("SelectContent.RemoveScroll"),
        Gg = M.forwardRef((e, t) => {
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
          } = e, g = Og(Bg, r), [b, w] = M.useState(null), [E, x] = M.useState(null), P = (0, Eu.s)(t, e => w(e)), [C, S] = M.useState(null), [T, O] = M.useState(null), R = Eg(r), [N, j] = M.useState(!1), I = M.useRef(!1);
          M.useEffect(() => {
            if (b) return (0, Jp.Eq)(b)
          }, [b]), sg();
          const k = M.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && E && (E.scrollTop = 0), r === n && E && (E.scrollTop = E.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [R, E]),
            D = M.useCallback(() => k([C, b]), [k, C, b]);
          M.useEffect(() => {
            N && D()
          }, [N, D]);
          const {
            onOpenChange: L,
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || L(!1), document.removeEventListener("pointermove", t), A.current = null
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
          }, [b, L, A]), M.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [B, H] = pb(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = mb(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), z = M.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (S(e), n && (I.current = !0))
          }, [g.value]), V = M.useCallback(() => b?.focus(), [b]), F = M.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && O(e)
          }, [g.value]), U = "popper" === n ? Xg : qg, G = U === Xg ? {
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
          return (0, _.jsx)(Vg, {
            scope: r,
            content: b,
            viewport: E,
            onViewportChange: x,
            itemRefCallback: z,
            selectedItem: C,
            onItemLeave: V,
            itemTextRefCallback: F,
            focusSelectedItem: D,
            selectedItemText: T,
            position: n,
            isPositioned: N,
            searchRef: B,
            children: (0, _.jsx)(Qp.A, {
              as: Ug,
              allowPinchZoom: !0,
              children: (0, _.jsx)(dg, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: _u(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, _.jsx)(Ru, {
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
                    onKeyDown: _u(y.onKeyDown, e => {
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
      Gg.displayName = "SelectContentImpl";
      var qg = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = Og(Bg, r), s = Fg(Bg, r), [a, l] = M.useState(null), [c, u] = M.useState(null), d = (0, Eu.s)(t, e => u(e)), f = Eg(r), h = M.useRef(!1), p = M.useRef(!0), {
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
                u = window.innerWidth - zg,
                d = Uh(i, [zg, Math.max(zg, u - c)]);
              a.style.minWidth = l + "px", a.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - i,
                l = e.width + s,
                c = Math.max(l, t.width),
                u = window.innerWidth - zg,
                d = Uh(i, [zg, Math.max(zg, u - c)]);
              a.style.minWidth = l + "px", a.style.right = d + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * zg,
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
              C = e.top + e.height / 2 - zg,
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
            a.style.margin = `${zg}px 0`, a.style.minHeight = w + "px", a.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => h.current = !0)
          }
        }, [f, i.trigger, i.valueNode, a, c, m, v, y, i.dir, n]);
        (0, Sf.N)(() => b(), [b]);
        const [w, E] = M.useState();
        (0, Sf.N)(() => {
          c && E(window.getComputedStyle(c).zIndex)
        }, [c]);
        const x = M.useCallback(e => {
          e && !0 === p.current && (b(), g?.(), p.current = !1)
        }, [b, g]);
        return (0, _.jsx)(Wg, {
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
            children: (0, _.jsx)(Pu.sG.div, {
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
      qg.displayName = "SelectItemAlignedPosition";
      var Xg = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = zg,
          ...i
        } = e, s = Sg(r);
        return (0, _.jsx)(Kf, {
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
      Xg.displayName = "SelectPopperPosition";
      var [Wg, Kg] = Pg(Bg, {}), $g = "SelectViewport", Zg = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = Fg($g, r), s = Kg($g, r), a = (0, Eu.s)(t, i.onViewportChange), l = M.useRef(0);
        return (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, _.jsx)(wg.Slot, {
            scope: r,
            children: (0, _.jsx)(Pu.sG.div, {
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
              onScroll: _u(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * zg,
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
      Zg.displayName = $g;
      var Yg = "SelectGroup",
        [Qg, Jg] = Pg(Yg);
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Lu.B)();
        return (0, _.jsx)(Qg, {
          scope: r,
          id: o,
          children: (0, _.jsx)(Pu.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Yg;
      var eb = "SelectLabel";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Jg(eb, r);
        return (0, _.jsx)(Pu.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = eb;
      var tb = "SelectItem",
        [rb, nb] = Pg(tb),
        ob = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...s
          } = e, a = Og(tb, r), l = Fg(tb, r), c = a.value === n, [u, d] = M.useState(i ?? ""), [f, h] = M.useState(!1), p = (0, Eu.s)(t, e => l.itemRefCallback?.(e, n, o)), m = (0, Lu.B)(), v = M.useRef("touch"), y = () => {
            o || (a.onValueChange(n), a.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, _.jsx)(rb, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: M.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, _.jsx)(wg.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, _.jsx)(Pu.sG.div, {
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
                onFocus: _u(s.onFocus, () => h(!0)),
                onBlur: _u(s.onBlur, () => h(!1)),
                onClick: _u(s.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: _u(s.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: _u(s.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: _u(s.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: _u(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: _u(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (bg.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      ob.displayName = tb;
      var ib = "SelectItemText",
        sb = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, s = Og(ib, r), a = Fg(ib, r), l = nb(ib, r), c = Ng(ib, r), [u, d] = M.useState(null), f = (0, Eu.s)(t, e => d(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), h = u?.textContent, p = M.useMemo(() => (0, _.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return (0, Sf.N)(() => (m(p), () => v(p)), [m, v, p]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(Pu.sG.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? iu.createPortal(i.children, s.valueNode) : null]
          })
        });
      sb.displayName = ib;
      var ab = "SelectItemIndicator";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return nb(ab, r).isSelected ? (0, _.jsx)(Pu.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = ab;
      var lb = "SelectScrollUpButton";
      M.forwardRef((e, t) => {
        const r = Fg(lb, e.__scopeSelect),
          n = Kg(lb, e.__scopeSelect),
          [o, i] = M.useState(!1),
          s = (0, Eu.s)(t, n.onScrollButtonChange);
        return (0, Sf.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, _.jsx)(ub, {
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
      }).displayName = lb;
      var cb = "SelectScrollDownButton";
      M.forwardRef((e, t) => {
        const r = Fg(cb, e.__scopeSelect),
          n = Kg(cb, e.__scopeSelect),
          [o, i] = M.useState(!1),
          s = (0, Eu.s)(t, n.onScrollButtonChange);
        return (0, Sf.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, _.jsx)(ub, {
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
      }).displayName = cb;
      var ub = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = Fg("SelectScrollButton", r), s = M.useRef(null), a = Eg(r), l = M.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return M.useEffect(() => () => l(), [l]), (0, Sf.N)(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, _.jsx)(Pu.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: _u(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: _u(o.onPointerMove, () => {
            i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: _u(o.onPointerLeave, () => {
            l()
          })
        })
      });
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, _.jsx)(Pu.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var db = "SelectArrow";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Sg(r), i = Og(db, r), s = Fg(db, r);
        return i.open && "popper" === s.position ? (0, _.jsx)($f, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = db;
      var fb = M.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = M.useRef(null),
          i = (0, Eu.s)(n, o),
          s = Xh(t);
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
        }, [s, t]), (0, _.jsx)(Pu.sG.select, {
          ...r,
          style: {
            ...th.Qg,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function hb(e) {
        return "" === e || void 0 === e
      }

      function pb(e) {
        const t = (0, Cu.c)(e),
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

      function mb(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === n.length && (i = i.filter(e => e !== r));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      fb.displayName = "SelectBubbleInput";
      var vb = jg,
        yb = kg,
        gb = Lg,
        bb = Ag,
        _b = Mg,
        wb = Hg,
        Eb = Zg,
        xb = ob,
        Pb = sb;

      function Cb(e) {
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

      function Tb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sb(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Cb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ob(e, t) {
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
        Nb = e => {
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
            for (var [c, u] of e.compoundVariants) Rb(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ob(e.variantClassNames, e => Ob(e, e => e.split(" ")[0]))
            }
          }, t
        },
        jb = Nb({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ib = Nb({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kb = Nb({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Db = Nb({
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
        Lb = Nb({
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
        Ab = Nb({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Mb = (0, M.createContext)(null);

      function Bb() {
        const e = (0, M.useContext)(Mb);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Hb = (0, M.forwardRef)(({
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
          return (0, _.jsx)(Mb.Provider, {
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
            children: (0, _.jsx)(vb, {
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
        zb = (0, M.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = Bb(), s = (0, V.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: jb({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, _.jsx)(wb, {
            ...s,
            ref: o,
            children: (0, _.jsx)(Eb, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Vb = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, _.jsxs)(tg, {
            ...o,
            ref: n,
            children: [(0, _.jsx)(rg, {
              className: "foundry_uaq1gwu",
              style: {
                overflowY: void 0
              },
              children: e
            }), (0, _.jsx)(ng, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, _.jsx)(og, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Fb = (0, M.forwardRef)(({
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
          } = Bb(), {
            isPressed: g,
            pressProps: b
          } = oy({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, V.v6)({
            id: f,
            className: Lb({
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
          }, (0, V.cJ)(b, "onKeyDown"), i), E = o ? q.DX : yb;
          return (0, _.jsx)(E, {
            ...w,
            ref: s,
            children: e
          })
        }),
        Ub = (0, M.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: i
          } = Bb(), s = (0, V.v6)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), a = t ? q.DX : "span";
          return (0, _.jsx)(a, {
            ...s,
            ref: o,
            children: (0, _.jsx)(gb, {
              placeholder: e,
              "aria-label": i
            })
          })
        }),
        Gb = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: s
          } = Bb(), a = s ? ie.ChevronUp : ie.ChevronDown, l = (0, V.v6)({
            asChild: !0,
            className: Ab({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, _.jsx)(bb, {
            ...l,
            ref: n,
            children: e || (0, _.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        qb = (0, M.forwardRef)(({
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
          } = Bb(), d = a && !o, f = (0, V.v6)({
            id: i.id || c,
            htmlFor: u,
            "data-testid": e,
            className: Db({
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
        Xb = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Bb(), a = (0, V.v6)({
            className: Ib({
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
        Wb = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = Bb(), a = (0, V.v6)({
            className: kb({
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
        Kb = (0, M.forwardRef)(({
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
          return (0, _.jsx)(xb, {
            ref: a,
            ...l,
            children: e
          })
        }),
        $b = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, _.jsx)(Pb, {
            ref: n,
            asChild: !0,
            children: (0, _.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        Zb = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, _.jsx)(bb, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        Yb = _b,
        Qb = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = Bb(), a = (0, V.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? q.DX : by;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Jb = _y,
        e_ = wy;
      var t_ = r(36768),
        r_ = r(99098),
        n_ = r(79888);

      function o_(e, t, r) {
        let n = (0, n_.J)(() => {
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
      var i_ = r(41149),
        s_ = r(52061);

      function a_(e, t, r) {
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
        } = (0, i_.d)({
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
        } = (0, i_.d)({
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
        } = (0, s_.Wc)(e, r), P = (0, t_.v)(b, x), C = (0, r_.$)(e, {
          labelable: !0
        });
        return o_(r, t.defaultSelected, t.setSelected), {
          labelProps: (0, t_.v)(w, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, t_.v)(C, {
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

      function l_(e, t, r) {
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

      function c_(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = l_(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, M.useState)(r);
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

      function u_(e) {
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

      function d_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function f_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? d_(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = u_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function h_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var p_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        m_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = f_(f_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) p_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return h_(e.variantClassNames, e => h_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        v_ = m_({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        y_ = m_({
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
        g_ = m_({
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
        b_ = m_({
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
        __ = m_({
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
      const w_ = (0, M.createContext)(null);

      function E_() {
        const e = (0, M.useContext)(w_);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const x_ = (0, M.forwardRef)(({
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
          return (0, _.jsx)(w_.Provider, {
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
        P_ = (0, M.forwardRef)(({
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
            } = E_(),
            x = c_({
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
              } = a_(e, t, r);
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
              className: __({
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
              className: b_({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, _.jsx)("div", {
                className: y_({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        C_ = (0, M.forwardRef)(({
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
          } = E_(), u = (0, V.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: g_({
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
        S_ = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = E_(), a = n.id || s, l = (0, V.v6)({
            className: v_({
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
        T_ = {
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
        O_ = {
          ...T_,
          customError: !0,
          valid: !1
        },
        R_ = {
          isInvalid: !1,
          validationDetails: T_,
          validationErrors: []
        },
        N_ = (0, M.createContext)({}),
        j_ = "__formValidationState" + Date.now();

      function I_(e) {
        if (e[j_]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[j_];
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
              validationDetails: O_
            } : null,
            c = (0, M.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return k_(r)
                }
                return []
              }(s, o);
              return D_(e)
            }, [s, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, M.useContext)(N_),
            d = (0, M.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => k_(u[e])) : k_(u[n]) : [], [u, n]),
            [f, h] = (0, M.useState)(u),
            [p, m] = (0, M.useState)(!1);
          u !== f && (h(u), m(!1));
          let v = (0, M.useMemo)(() => D_(p ? [] : d), [p, d]),
            y = (0, M.useRef)(R_),
            [g, b] = (0, M.useState)(R_),
            _ = (0, M.useRef)(R_),
            [w, E] = (0, M.useState)(!1);
          return (0, M.useEffect)(() => {
            if (!w) return;
            E(!1);
            let e = c || i || y.current;
            L_(e, _.current) || (_.current = e, b(e))
          }), {
            realtimeValidation: l || v || c || i || R_,
            displayValidation: "native" === a ? l || v || g : l || v || c || i || g,
            updateValidation(e) {
              "aria" !== a || L_(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = R_;
              L_(e, _.current) || (_.current = e, b(e)), "native" === a && E(!1), m(!0)
            },
            commitValidation() {
              "native" === a && E(!0), m(!0)
            }
          }
        }(e)
      }

      function k_(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function D_(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: O_
        } : null
      }

      function L_(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }
      var A_ = r(38223),
        M_ = r(28830);

      function B_(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, M_.N)(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: H_(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, M.useRef)(!1),
          s = (0, n_.J)(() => {
            i.current || t.resetValidation()
          }),
          a = (0, n_.J)(e => {
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
            }(i) === r.current && (o ? o() : null === (s = r.current) || void 0 === s || s.focus(), (0, A_.Cl)("keyboard")), e.preventDefault()
          }),
          l = (0, n_.J)(() => {
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

      function H_(e) {
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
      const z_ = ({
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
        V_ = ({
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
        F_ = ({
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
        U_ = ({
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
        G_ = ({
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
        q_ = ({
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

      function X_(e) {
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

      function K_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? W_(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = X_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Z_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Y_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = K_(K_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Z_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $_(e.variantClassNames, e => $_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Q_ = Y_({
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
        J_ = Y_({
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
        ew = Y_({
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
        tw = Y_({
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
      const rw = (0, M.createContext)(null);

      function nw() {
        const e = (0, M.useContext)(rw);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const ow = (0, M.forwardRef)(({
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
          return (0, _.jsx)(rw.Provider, {
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
        iw = (0, M.forwardRef)(({
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
          } = nw(), E = (0, M.useRef)(null), x = d.id || b, {
            isPressed: P,
            pressProps: C
          } = oy({
            ref: E
          }), {
            setSelected: S,
            toggle: T,
            ...O
          } = c_({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: R,
            isSelected: N,
            isDisabled: j,
            isReadOnly: I
          } = function(e, t, r) {
            let n = I_({
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
              } = a_({
                ...e,
                isInvalid: o
              }, t, r);
            B_(e, n, r);
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
            } = (0, i_.d)({
              isDisabled: d || f,
              onPress() {
                let {
                  [j_]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, t_.v)(a, v, (0, M.useMemo)(() => ({
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
            className: J_({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || j || I || T()
            }
          }, C, d), D = (0, V.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, V.VW)(u, g),
            "aria-describedby": (0, V.VW)(l, y),
            "aria-errormessage": (0, V.VW)(c, w.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, R), L = m ? a[`Dash${h}`] : a[`Check${h}`];
          return (0, _.jsxs)("div", {
            ...k,
            children: [(0, _.jsx)(q.s6, {
              children: (0, _.jsx)("input", {
                ...D,
                ref: f
              })
            }), (0, _.jsx)("div", {
              className: Q_({
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
                children: (N || m) && (0, _.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        sw = (0, M.forwardRef)(({
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
          } = nw(), d = i.id || l, f = u && !o, h = (0, V.v6)({
            className: tw({
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
        aw = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = nw(), a = n.id || s, l = (0, V.v6)({
            className: ew({
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
        lw = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = nw(), s = n.id || i, a = (0, V.v6)({
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

      function cw(e) {
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

      function uw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function dw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? uw(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = cw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function fw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = dw(dw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) hw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fw(e.variantClassNames, e => fw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        mw = pw({
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
        vw = pw({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yw = pw({
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
        gw = pw({
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
      const bw = (0, M.createContext)(null);

      function _w() {
        const e = (0, M.useContext)(bw);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const ww = (0, M.forwardRef)(({
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
          return (0, _.jsx)(bw.Provider, {
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
        Ew = (0, M.forwardRef)(({
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
          } = _w(), d = (0, V.v6)({
            className: yw({
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
        xw = (0, M.forwardRef)(({
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
          } = _w(), b = (0, M.useRef)(null), w = (0, G.UP)(b, u), {
            isPressed: E,
            pressProps: x
          } = oy({}), P = (0, V.v6)({
            className: gw({
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
        Pw = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = _w(), a = (0, V.v6)({
            className: mw({
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
        Cw = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = _w(), a = (0, V.v6)({
            className: vw({
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
        Sw = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = _w(), a = (0, V.v6)({
            className: "foundry_vq8c3jm",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? q.DX : by;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Tw = _y,
        Ow = wy;
      let Rw = Math.round(1e10 * Math.random()),
        Nw = 0;
      const jw = new WeakMap;
      var Iw = r(62993),
        kw = r(49652),
        Dw = r(42351),
        Lw = r(13569);
      class Aw {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, Lw.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, Lw.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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

      function Mw(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
      }

      function Bw(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? Dw.A : Dw.t,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = (0, Iw.TW)(o),
          s = function(e, t, r, n) {
            return (0, Kv.Nf)() ? new Aw(e, t, r, n) : e.createTreeWalker(t, r, n)
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
                    } else t = [...(0, Iw.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                    return !!t && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !Mw(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s
      }
      class Hw {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new zw({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Mw(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Hw;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new zw({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class zw {
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

      function Vw(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, kw.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Fw(e) {
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
          t = (0, kw.Bi)(t);
          let s = (0, kw.Bi)(),
            a = {};
          return r && (n = n ? `${s} ${n}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: Vw({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), a = (0, kw.X1)([Boolean(t), Boolean(r), n, o]), l = (0, kw.X1)([Boolean(t), Boolean(r), n, o]);
        return s = (0, t_.v)(s, {
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
      new Hw;
      var Uw = r(89839),
        Gw = r(73581);
      const qw = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Xw = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Ww(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return qw.has(t.script)
        }
        let t = e.split("-")[0];
        return Xw.has(t)
      }
      var Kw = r(50336);
      const $w = Symbol.for("react-aria.i18n.locale");

      function Zw() {
        let e = "undefined" != typeof window && window[$w] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Ww(e) ? "rtl" : "ltr"
        }
      }
      let Yw = Zw(),
        Qw = new Set;

      function Jw() {
        Yw = Zw();
        for (let e of Qw) e(Yw)
      }
      const eE = M.createContext(null);

      function tE() {
        let e = function() {
          let e = (0, Kw.wR)(),
            [t, r] = (0, M.useState)(Yw);
          return (0, M.useEffect)(() => (0 === Qw.size && window.addEventListener("languagechange", Jw), Qw.add(r), () => {
            Qw.delete(r), 0 === Qw.size && window.removeEventListener("languagechange", Jw)
          }), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, M.useContext)(eE) || e
      }

      function rE(e, t) {
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
        } = tE(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = Fw({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = (0, r_.$)(e, {
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
          } = (0, Gw.A)(), l = (0, M.useCallback)(e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, a(), r && r(e), o && o(!1))
          }, [r, o, i, a]), c = (0, Uw.yB)(l), u = (0, M.useCallback)(e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = (0, Iw.TW)(e.target),
              r = (0, Lw.bq)(t);
            if (!i.current.isFocusWithin && r === (0, Lw.wt)(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let r = e.currentTarget;
              s(t, "focus", e => {
                if (i.current.isFocusWithin && !(0, Lw.sD)(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  (0, Uw.o1)(n, r);
                  let o = (0, Uw.eg)(n);
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
        }), b = (0, kw.Bi)(r);
        return jw.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: (0, t_.v)(y, {
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
              let n, o = Bw(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof(0, Iw.mD)(e).HTMLInputElement && "radio" === e.type
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

      function nE(e) {
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

      function oE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function iE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oE(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = nE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var aE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        lE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = iE(iE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) aE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sE(e.variantClassNames, e => sE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        cE = lE({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        uE = lE({
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
      const dE = (0, M.createContext)(null);

      function fE() {
        const e = (0, M.useContext)(dE);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const hE = (0, M.forwardRef)(({
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
              let t = (0, M.useMemo)(() => e.name || `radio-group-${Rw}-${++Nw}`, [e.name]);
              var r;
              let [n, o] = l_(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i] = (0, M.useState)(n), [s, a] = (0, M.useState)(null), l = I_({
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
            } = rE({
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
          return (0, _.jsx)(dE.Provider, {
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
        pE = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: s
          } = fE(), a = (0, V.v6)({
            "data-testid": e,
            className: uE({
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
        mE = (0, M.forwardRef)(({
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
          } = fE(), c = a && !o, u = (0, V.v6)({
            id: i.id || l,
            "data-testid": e,
            className: cE({
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
        vE = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = fE(), s = (0, V.v6)({
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
        yE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: s
          } = fE(), a = (0, V.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: s
          }, n), l = r ? q.DX : by;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        gE = _y,
        bE = wy;
      var _E = lE({
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
        wE = lE({
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
        EE = lE({
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
        xE = lE({
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
      const PE = ({
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
        CE = ({
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
        SE = ({
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
        TE = (0, M.forwardRef)(({
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
        OE = (0, M.forwardRef)(({
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
            } = fE(),
            {
              isPressed: h,
              pressProps: p
            } = oy({}),
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
                } = (0, i_.d)({
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
                } = (0, i_.d)({
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
                } = (0, s_.Wc)((0, t_.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                _ = (0, t_.v)(m, b),
                w = (0, r_.$)(e, {
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
              } = jw.get(t);
              return o_(r, t.defaultSelectedValue, t.setSelectedValue), B_({
                validationBehavior: T
              }, t, r), {
                labelProps: (0, t_.v)(y, (0, M.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, t_.v)(w, {
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
            className: xE({
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
              className: EE({
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
        RE = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: s,
            state: a
          } = fE(), l = (0, M.useId)(), c = (0, V.v6)({
            id: l,
            "data-testid": e,
            className: wE({
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
        NE = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = fE(), s = (0, V.v6)({
            "data-testid": e,
            className: _E({
              isDisabled: i
            })
          }, n), a = t ? q.DX : "span";
          return (0, _.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        });

      function jE(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function IE(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return jE(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? jE(e, t) : void 0
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

      function kE(e, t, r) {
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

      function DE(e) {
        return DE = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, DE(e)
      }

      function LE() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (LE = function() {
          return !!e
        })()
      }

      function AE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ME(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? AE(Object(r), !0).forEach(function(t) {
            kE(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : AE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function BE(e, t) {
        return BE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, BE(e, t)
      }

      function HE(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          s = n,
          a = "",
          l = IE(e);
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

      function zE(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          s = t.showMask,
          a = 0,
          l = "",
          c = IE(n);
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

      function VE(e, t) {
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

      function FE(e) {
        return e.length > 0 ? kE({}, e, /./) : {}
      }

      function UE(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(n, o), c = i.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && a && (u += c[d])
        }
        return u
      }

      function GE(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? FE(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return zE(HE(e, {
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
      var qE = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function XE(e) {
        return qE.includes(e) ? "\\".concat(e) : e
      }

      function WE(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function KE(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function $E(e, t, r) {
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

      function ZE(e) {
        return ZE = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, ZE(e)
      }

      function YE() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (YE = function() {
          return !!e
        })()
      }

      function QE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function JE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? QE(Object(r), !0).forEach(function(t) {
            $E(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : QE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ex(e, t) {
        return ex = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, ex(e, t)
      }

      function tx(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return tx = function(e) {
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
              if (YE()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && ex(o, r.prototype), o
            }(e, arguments, ZE(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), ex(r, e)
        }, tx(e)
      }
      var rx, nx = function(e) {
          function t(e) {
            var r;
            return WE(this, t), (r = function(e, t, r) {
              return t = ZE(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, YE() ? Reflect.construct(t, r || [], ZE(e).constructor) : t.apply(e, r))
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
            }), t && ex(e, t)
          }(t, e), KE(t)
        }(tx(Error)),
        ox = ["options"],
        ix = ["text", "email", "tel", "search", "url"],
        sx = KE(function e(t) {
          var r = t.init,
            n = t.tracking;
          WE(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (ix.includes(e.type)) {
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
              Object.defineProperty(e, "value", JE(JE({}, v), {}, {
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
                    if (p.cachedId === p.id) throw new nx("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new nx("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new nx("Input type detection error.");
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
                      }(g, ox);
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
      rx = sx, Object.defineProperty(rx.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var ax, lx = ["track", "modify"];

      function cx(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? FE(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var ux = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = DE(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, LE() ? Reflect.construct(t, r || [], DE(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = cx(r),
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
                l = cx(r),
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
                }(l, lx),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = ME(ME({}, "insert" === t ? {
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
              if (!1 === y) throw new nx("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? FE(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = UE(n, ME({
                  end: s
                }, o)),
                _ = UE(n, ME({
                  start: a
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(w, "");
              if (b && (b = HE(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: m
                }), E = E.slice(b.length)), i && (i = HE(i, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(i.length)), "insert" === t && "" === i) throw new nx("The character does not match the key value of the `replacement` object.");
              if (m) {
                var x = f.slice(s, a).replace(w, ""),
                  P = x.length - i.length;
                P < 0 ? _ = _.slice(-P) : P > 0 && (_ = x.slice(-P) + _)
              }
              _ && (_ = HE(_, {
                replacementChars: E,
                replacement: h,
                separate: m
              }));
              var C = zE(b + i + _, {
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
                    u = VE(i, {
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
            return GE(e, cx(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? FE(n) : n;
              return VE(GE(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, cx(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? FE(n) : n,
                i = UE(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return HE(i, {
                replacementChars: r.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, cx(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? FE(n) : n, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(s ? "(?!".concat(XE(c), ")") : "", "(").concat(o[c].source, ")") : XE(c), l === r.length - 1 && (i && (a += ")?".repeat(r.length)), a += "$")
              }
              return a
            }(e, cx(r))
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
            }), t && BE(e, t)
          }(e, sx),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function dx(e) {
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

      function fx(e, t) {
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
          t % 2 ? fx(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = dx(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function px(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      ax = ux, Object.defineProperty(ax.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var mx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hx(hx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) mx(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return px(e.variantClassNames, e => px(e, e => e.split(" ")[0]))
            }
          }, t
        },
        yx = vx({
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
        gx = vx({
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
        bx = vx({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _x = vx({
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
        wx = vx({
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
        Ex = vx({
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
      const xx = (0, M.createContext)(null);

      function Px() {
        const e = (0, M.useContext)(xx);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Cx = (0, M.forwardRef)(({
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
          } = oy({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), v = {
            ...m,
            onKeyDown: () => {}
          }, y = (0, V.v6)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, a), g = e ? q.DX : "div";
          return (0, _.jsx)(xx.Provider, {
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
        Sx = (0, M.forwardRef)(({
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
          } = Px(), d = l && !o, f = (0, V.v6)({
            id: i.id || u,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: Ex({
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
        Tx = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = Px(), s = (0, V.v6)({
            "data-testid": e,
            className: bx({
              isDisabled: i
            })
          }, n), a = t ? q.DX : "span";
          return (0, _.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        }),
        Ox = (0, M.forwardRef)(({
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
          } = Px(), u = (0, V.v6)({
            "data-testid": e,
            "data-pressed": a,
            className: (0, oe.clsx)(yx({
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
        Rx = (0, M.forwardRef)(({
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
          } = Px();
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
              className: (0, oe.clsx)(wx({
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
                }(a, new ux(l.current))
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
        Nx = (0, M.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: s
          } = Px(), a = (0, V.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, oe.clsx)(_x({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? q.DX : se[e];
          return (0, _.jsx)(l, {
            ref: i,
            ...a
          })
        }),
        jx = (0, M.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Px(), n = (0, V.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzo10"
          }, e);
          return (0, _.jsx)(Te, {
            ref: t,
            ...n
          })
        }),
        Ix = (0, M.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i
          } = Px(), s = "password" === o, a = s ? e : t, l = (0, V.v6)({
            label: a,
            icon: s ? "Eye" : "EyeOff",
            onPress: () => {
              i(s ? "text" : "password")
            }
          }, r);
          return (0, _.jsxs)(Bh, {
            children: [(0, _.jsx)(Hh, {
              children: (0, _.jsx)(jx, {
                ref: n,
                ...l
              })
            }), (0, _.jsxs)(zh, {
              side: "bottom",
              align: "end",
              children: [a, (0, _.jsx)(Vh, {})]
            })]
          })
        }),
        kx = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Px(), a = (0, V.v6)({
            className: gx({
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
        Dx = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = Px(), a = (0, V.v6)({
            className: "foundry_8oytzo16",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? q.DX : by;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Lx = _y,
        Ax = wy;
      var Mx = r(36566);

      function Bx(e, t) {
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
        } = (0, s_.Wc)(e, t), {
          pressProps: d,
          isPressed: f
        } = (0, i_.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ref: t
        }), h = (0, r_.$)(l, {
          labelable: !0
        }), p = (0, t_.v)(u, d), m = (0, Mx.rd)(), v = (0, Mx._h)(e);
        return {
          isPressed: f,
          linkProps: (0, t_.v)(h, v, {
            ...p,
            ...c,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), (0, Mx.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function Hx(e) {
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

      function zx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zx(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Hx(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ux = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gx = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vx(Vx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ux(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fx(e.variantClassNames, e => Fx(e, e => e.split(" ")[0]))
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
      const qx = (0, M.forwardRef)(({
        children: e,
        ...t
      }, r) => {
        const n = (0, X.zQ)(),
          o = "string" == typeof t.size ? t.size : t.size?.[n] ?? "LG",
          i = (0, V.v6)({
            className: Gx({
              size: o
            })
          }, t);
        return (0, _.jsx)(Te, {
          appearance: "ghost",
          icon: "X",
          ...i,
          ref: r,
          children: e
        })
      });

      function Xx(e) {
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

      function Wx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Kx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Wx(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Xx(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wx(Object(r)).forEach(function(t) {
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
      var Zx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Yx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kx(Kx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Zx(c, n, e.defaultVariants) && (r += " " + u);
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
        Qx = Yx({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Jx = Yx({
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
        eP = Yx({
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
      const tP = (0, M.createContext)(null);

      function rP() {
        const e = (0, M.useContext)(tP);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const nP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const s = e ? q.DX : "div",
            a = (0, V.v6)({
              className: eP({
                status: r,
                background: n
              })
            }, o);
          return (0, _.jsx)(tP.Provider, {
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
        oP = (0, M.forwardRef)(({
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
        iP = (0, M.forwardRef)(({
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
        sP = {
          danger: ie.CircleX,
          information: ie.Info,
          success: ie.CircleCheck,
          warning: ie.TriangleAlert
        },
        aP = (0, M.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = rP(), i = e ? q.DX : sP[o], s = (0, V.v6)({
            className: Jx({
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
        lP = (0, M.forwardRef)(({
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
        cP = (0, M.forwardRef)(({
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
        uP = (0, M.forwardRef)(({
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
            } = Bx(n, i),
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
        dP = (0, M.forwardRef)(({
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
        fP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? q.DX : "div";
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, oe.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        hP = (0, M.forwardRef)((e, t) => {
          const {
            background: r
          } = rP(), n = "none" !== r, o = (0, V.v6)({
            className: Qx({
              hasBackground: n
            })
          }, e);
          return (0, _.jsx)(qx, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var pP = r(16675);

      function mP(e = {}) {
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
      mP.globalOptions = void 0;
      const vP = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function yP(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function gP(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function bP(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function _P(e = {}) {
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
          ("pointerDown" === t ? bP : gP)(n, u.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return n.forEach(e => gP(e, r)), i.forEach(e => bP(e, r)), e
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
            } = s, v = f(vP, _P.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (u.loop = yP(t.loop), bP(n, u.loop)), t.draggable && _ && (u.draggable = yP(t.draggable), bP(n, u.draggable)), t.dragging && (u.dragging = yP(t.dragging), l.forEach(e => r.on(e, d))), t.snapped && (u.snapped = yP(t.snapped), a.forEach(e => r.on(e, h)), h()), t.inView && (u.inView = yP(t.inView), c.forEach(e => r.on(e, p)), p())
          },
          destroy: function() {
            l.forEach(e => r.off(e, d)), a.forEach(e => r.off(e, h)), c.forEach(e => r.off(e, p)), gP(n, u.loop), gP(n, u.draggable), gP(n, u.dragging), f([], i, u.snapped), f([], s, u.inView), Object.keys(u).forEach(e => {
              u[e] = []
            })
          }
        };
        return m
      }
      _P.globalOptions = void 0;

      function wP(e) {
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

      function EP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function xP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? EP(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = wP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : EP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function PP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var CP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        SP = "foundry_qmpv6yt",
        TP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xP(xP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) CP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return PP(e.variantClassNames, e => PP(e, e => e.split(" ")[0]))
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
      const OP = (0, M.createContext)(null);

      function RP() {
        const e = (0, M.useContext)(OP);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const NP = (0, M.forwardRef)(({
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
                [l, c] = (0, pP.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [mP(), _P()]),
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
              className: TP(u)
            }, p, a),
            v = e ? q.DX : "div";
          return (0, _.jsx)(OP.Provider, {
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
        jP = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        IP = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = RP();
          if (!e && !n || !n?.status) return null;
          const o = e || jP[n.status],
            i = se[o],
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
        kP = (0, M.forwardRef)(({
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
        DP = (0, M.forwardRef)(({
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
        LP = (0, M.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = RP(), s = (0, V.v6)({
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
        AP = (0, M.forwardRef)(({
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
            } = Bx(n, i),
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
        MP = (0, M.forwardRef)((e, t) => {
          const r = (0, V.v6)({
            className: "foundry_qmpv6yq"
          }, e);
          return (0, _.jsx)(qx, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        BP = (0, M.forwardRef)(({
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
        HP = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = RP(), i = (0, V.v6)({
            className: SP
          }, t);
          return (0, _.jsx)(Te, {
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
        zP = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = RP(), i = (0, V.v6)({
            className: SP
          }, t);
          return (0, _.jsx)(Te, {
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
        VP = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = RP(), i = (0, V.v6)({
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

      function FP(e) {
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

      function UP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function GP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? UP(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = FP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : UP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var XP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        WP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = GP(GP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) XP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qP(e.variantClassNames, e => qP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        KP = WP({
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
        $P = WP({
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
        ZP = WP({
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
      const YP = (0, M.createContext)(null);

      function QP() {
        const e = (0, M.useContext)(YP);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const JP = (0, M.forwardRef)(({
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
              className: $P(u)
            }, l),
            f = e ? q.DX : "div";
          return (0, _.jsx)(YP.Provider, {
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
        eC = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = QP(), s = e ? q.DX : "div", a = (0, V.v6)({
            className: ZP({
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
        tC = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = se[e],
            o = (0, V.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, _.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        rC = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = QP(), i = (0, V.v6)({
            className: KP({
              background: n
            })
          }, t);
          return (0, _.jsx)(Te, {
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
      var nC = "ToastProvider",
        [oC, iC, sC] = Wh("Toast"),
        [aC, lC] = (0, xu.A)("Toast", [sC]),
        [cC, uC] = aC(nC),
        dC = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
          } = e, [a, l] = M.useState(null), [c, u] = M.useState(0), d = M.useRef(!1), f = M.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${nC}\`. Expected non-empty \`string\`.`), (0, _.jsx)(oC.Provider, {
            scope: t,
            children: (0, _.jsx)(cC, {
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
      dC.displayName = nC;
      var fC = "ToastViewport",
        hC = ["F8"],
        pC = "toast.viewportPause",
        mC = "toast.viewportResume",
        vC = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = hC,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, s = uC(fC, r), a = iC(r), l = M.useRef(null), c = M.useRef(null), u = M.useRef(null), d = M.useRef(null), f = (0, Eu.s)(t, d, s.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), p = s.toastCount > 0;
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
                    const e = new CustomEvent(pC);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(mC);
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
                n = [r, ...DC(r)];
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
                  LC(o.slice(i + 1)) ? t.preventDefault() : n ? c.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, _.jsxs)(Du, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
              pointerEvents: p ? void 0 : "none"
            },
            children: [p && (0, _.jsx)(gC, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                LC(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, _.jsx)(oC.Slot, {
              scope: r,
              children: (0, _.jsx)(Pu.sG.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), p && (0, _.jsx)(gC, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                LC(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      vC.displayName = fC;
      var yC = "ToastFocusProxy",
        gC = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, i = uC(yC, r);
          return (0, _.jsx)(th.s6, {
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
      gC.displayName = yC;
      var bC = "Toast",
        _C = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            ...s
          } = e, [a, l] = (0, eh.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: i,
            caller: bC
          });
          return (0, _.jsx)(Yf, {
            present: r || a,
            children: (0, _.jsx)(xC, {
              open: a,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Cu.c)(e.onPause),
              onResume: (0, Cu.c)(e.onResume),
              onSwipeStart: _u(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: _u(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: _u(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: _u(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      _C.displayName = bC;
      var [wC, EC] = aC(bC, {
        onClose() {}
      }), xC = M.forwardRef((e, t) => {
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
        } = e, m = uC(bC, r), [v, y] = M.useState(null), g = (0, Eu.s)(t, e => y(e)), b = M.useRef(null), w = M.useRef(null), E = o || m.duration, x = M.useRef(0), P = M.useRef(E), C = M.useRef(0), {
          onToastAdd: S,
          onToastRemove: T
        } = m, O = (0, Cu.c)(() => {
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
            return e.addEventListener(pC, r), e.addEventListener(mC, t), () => {
              e.removeEventListener(pC, r), e.removeEventListener(mC, t)
            }
          }
        }, [m.viewport, E, l, c, R]), M.useEffect(() => {
          i && !m.isClosePausedRef.current && R(E)
        }, [i, E, m.isClosePausedRef, R]), M.useEffect(() => (S(), () => T()), [S, T]);
        const N = M.useMemo(() => v ? jC(v) : null, [v]);
        return m.viewport ? (0, _.jsxs)(_.Fragment, {
          children: [N && (0, _.jsx)(PC, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: N
          }), (0, _.jsx)(wC, {
            scope: r,
            onClose: O,
            children: iu.createPortal((0, _.jsx)(oC.ItemSlot, {
              scope: r,
              children: (0, _.jsx)(ku, {
                asChild: !0,
                onEscapeKeyDown: _u(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || O(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, _.jsx)(Pu.sG.li, {
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
                  onKeyDown: _u(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, O()))
                  }),
                  onPointerDown: _u(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: _u(e.onPointerMove, e => {
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
                    n ? (w.current = c, IC("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : kC(c, m.swipeDirection, l) ? (w.current = c, IC("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: _u(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      kC(t, m.swipeDirection, m.swipeThreshold) ? IC("toast.swipeEnd", h, n, {
                        discrete: !0
                      }) : IC("toast.swipeCancel", f, n, {
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
      }), PC = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = uC(bC, t), [i, s] = M.useState(!1), [a, l] = M.useState(!1);
        return function(e = () => {}) {
          const t = (0, Cu.c)(e);
          (0, Sf.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), M.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, _.jsx)(Zf, {
          asChild: !0,
          children: (0, _.jsx)(th.s6, {
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
        return (0, _.jsx)(Pu.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var CC = M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, _.jsx)(Pu.sG.div, {
          ...n,
          ref: t
        })
      });
      CC.displayName = "ToastDescription";
      var SC = "ToastAction",
        TC = M.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, _.jsx)(NC, {
            altText: r,
            asChild: !0,
            children: (0, _.jsx)(RC, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${SC}\`. Expected non-empty \`string\`.`), null)
        });
      TC.displayName = SC;
      var OC = "ToastClose",
        RC = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = EC(OC, r);
          return (0, _.jsx)(NC, {
            asChild: !0,
            children: (0, _.jsx)(Pu.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: _u(e.onClick, o.onClose)
            })
          })
        });
      RC.displayName = OC;
      var NC = M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, _.jsx)(Pu.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function jC(e) {
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
              } else t.push(...jC(e))
          }
        }), t
      }

      function IC(e, t, r, {
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
        }), n ? (0, Pu.hO)(o, i) : o.dispatchEvent(i)
      }
      var kC = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          i = n > o;
        return "left" === t || "right" === t ? i && n > r : !i && o > r
      };

      function DC(e) {
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

      function LC(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var AC = dC,
        MC = vC,
        BC = _C,
        HC = CC,
        zC = TC,
        VC = RC;

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

      function UC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function GC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? UC(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = FC(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : UC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var XC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        WC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = GC(GC({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) XC(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qC(e.variantClassNames, e => qC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        KC = WC({
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
        $C = WC({
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
        ZC = WC({
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
      const YC = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, _.jsx)(AC, {
          ref: n,
          "data-testid": t,
          ...r,
          children: e
        })),
        QC = (0, M.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const i = (0, V.v6)({
            className: ZC({
              position: r
            })
          }, n);
          return (0, _.jsx)(MC, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        JC = (0, M.createContext)(null);

      function eS() {
        const e = (0, M.useContext)(JC);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const tS = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, i) => {
          const s = e ? q.DX : BC,
            a = (0, V.v6)({
              className: $C({
                appearance: n
              })
            }, o);
          return (0, _.jsx)(JC.Provider, {
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
        rS = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? q.DX : HC,
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
        nS = {
          danger: ie.CircleX,
          information: ie.Info,
          success: ie.CircleCheck,
          warning: ie.TriangleAlert,
          avocado: ie.CircleCheck
        },
        oS = (0, M.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = eS(), o = e ? q.DX : nS[n], i = (0, V.v6)({
            className: KC({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, _.jsx)(o, {
            ref: r,
            ...i
          })
        }),
        iS = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? q.DX : zC,
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
            }) : (0, _.jsx)(ye, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        sS = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? q.DX : VC,
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
            }) : (0, _.jsx)(qx, {
              size: "SM",
              label: ""
            })
          })
        });

      function aS(e) {
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

      function lS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function cS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lS(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = aS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function uS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var dS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cS(cS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) dS(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uS(e.variantClassNames, e => uS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        hS = fS({
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
        pS = fS({
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
        mS = fS({
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

      function vS() {
        const e = (0, M.useContext)(yS);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const yS = (0, M.createContext)(null),
        gS = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const s = (0, V.v6)({
              className: mS({
                size: n
              })
            }, o),
            a = r ? q.DX : "ol";
          return (0, _.jsx)(yS.Provider, {
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
        bS = (0, M.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, M.useRef)(null),
            {
              size: a
            } = vS(),
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
              } = Bx({
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
              className: (0, oe.clsx)(hS({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, _.jsx)("li", {
            className: pS({
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
        _S = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = se[e];
          return (0, _.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        wS = (0, M.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [s, a] = (0, M.useState)(r), {
            size: l
          } = vS(), c = (0, V.v6)({
            className: pS({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, _.jsx)("li", {
            ref: i,
            ...c,
            children: (0, _.jsxs)(vb, {
              open: s,
              onOpenChange: () => a(!s),
              children: [(0, _.jsx)(yb, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, _.jsx)(_b, {
                children: (0, _.jsx)(wb, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, _.jsx)(Eb, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        ES = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? q.DX : xb,
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

      function xS(e) {
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

      function CS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? PS(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = xS(o)) in n ? Object.defineProperty(n, o, {
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
      var TS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        OS = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = CS(CS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) TS(c, n, e.defaultVariants) && (r += " " + u);
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
      const RS = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const i = e ? q.DX : "div",
            s = (0, V.v6)({
              className: OS({
                appearance: r
              })
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        NS = (0, M.forwardRef)(({
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
        jS = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = se[e],
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
      var IS = KS(),
        kS = e => GS(e, IS),
        DS = KS();
      kS.write = e => GS(e, DS);
      var LS = KS();
      kS.onStart = e => GS(e, LS);
      var AS = KS();
      kS.onFrame = e => GS(e, AS);
      var MS = KS();
      kS.onFinish = e => GS(e, MS);
      var BS = [];
      kS.setTimeout = (e, t) => {
        const r = kS.now() + t,
          n = () => {
            const e = BS.findIndex(e => e.cancel == n);
            ~e && BS.splice(e, 1), FS -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return BS.splice(HS(r), 0, o), FS += 1, qS(), o
      };
      var HS = e => ~(~BS.findIndex(t => t.time > e) || ~BS.length);
      kS.cancel = e => {
        LS.delete(e), AS.delete(e), MS.delete(e), IS.delete(e), DS.delete(e)
      }, kS.sync = e => {
        US = !0, kS.batchedUpdates(e), US = !1
      }, kS.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, kS.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          LS.delete(r), t = null
        }, n
      };
      var zS = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      kS.use = e => zS = e, kS.now = "undefined" != typeof performance ? () => performance.now() : Date.now, kS.batchedUpdates = e => e(), kS.catch = console.error, kS.frameLoop = "always", kS.advance = () => {
        "demand" !== kS.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : WS()
      };
      var VS = -1,
        FS = 0,
        US = !1;

      function GS(e, t) {
        US ? (t.delete(e), e(0)) : (t.add(e), qS())
      }

      function qS() {
        VS < 0 && (VS = 0, "demand" !== kS.frameLoop && zS(XS))
      }

      function XS() {
        ~VS && (zS(XS), kS.batchedUpdates(WS))
      }

      function WS() {
        const e = VS;
        VS = kS.now();
        const t = HS(VS);
        t && ($S(BS.splice(0, t), e => e.handler()), FS -= t), FS ? (LS.flush(), IS.flush(e ? Math.min(64, VS - e) : 16.667), AS.flush(), DS.flush(), MS.flush()) : VS = -1
      }

      function KS() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            FS += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (FS -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, FS -= t.size, $S(t, t => t(r) && e.add(t)), FS += e.size, t = e)
          }
        }
      }

      function $S(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            kS.catch(e)
          }
        })
      }
      var ZS = Object.defineProperty,
        YS = {};

      function QS() {}((e, t) => {
        for (var r in t) ZS(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(YS, {
        assign: () => fT,
        colors: () => cT,
        createStringInterpolator: () => iT,
        skipAnimation: () => uT,
        to: () => sT,
        willAdvance: () => dT
      });
      var JS = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function eT(e, t) {
        if (JS.arr(e)) {
          if (!JS.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var tT = (e, t) => e.forEach(t);

      function rT(e, t, r) {
        if (JS.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var nT = e => JS.und(e) ? [] : JS.arr(e) ? e : [e];

      function oT(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), tT(r, t)
        }
      }
      var iT, sT, aT = (e, ...t) => oT(e, e => e(...t)),
        lT = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        cT = null,
        uT = !1,
        dT = QS,
        fT = e => {
          e.to && (sT = e.to), e.now && (kS.now = e.now), void 0 !== e.colors && (cT = e.colors), null != e.skipAnimation && (uT = e.skipAnimation), e.createStringInterpolator && (iT = e.createStringInterpolator), e.requestAnimationFrame && kS.use(e.requestAnimationFrame), e.batchedUpdates && (kS.batchedUpdates = e.batchedUpdates), e.willAdvance && (dT = e.willAdvance), e.frameLoop && (kS.frameLoop = e.frameLoop)
        },
        hT = new Set,
        pT = [],
        mT = [],
        vT = 0,
        yT = {
          get idle() {
            return !hT.size && !pT.length
          },
          start(e) {
            vT > e.priority ? (hT.add(e), kS.onStart(gT)) : (bT(e), kS(wT))
          },
          advance: wT,
          sort(e) {
            if (vT) kS.onFrame(() => yT.sort(e));
            else {
              const t = pT.indexOf(e);
              ~t && (pT.splice(t, 1), _T(e))
            }
          },
          clear() {
            pT = [], hT.clear()
          }
        };

      function gT() {
        hT.forEach(bT), hT.clear(), kS(wT)
      }

      function bT(e) {
        pT.includes(e) || _T(e)
      }

      function _T(e) {
        pT.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(pT), 0, e)
      }

      function wT(e) {
        const t = mT;
        for (let r = 0; r < pT.length; r++) {
          const n = pT[r];
          vT = n.priority, n.idle || (dT(n), n.advance(e), n.idle || t.push(n))
        }
        return vT = 0, (mT = pT).length = 0, (pT = t).length > 0
      }
      var ET = "[-+]?\\d*\\.?\\d+",
        xT = ET + "%";

      function PT(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var CT = new RegExp("rgb" + PT(ET, ET, ET)),
        ST = new RegExp("rgba" + PT(ET, ET, ET, ET)),
        TT = new RegExp("hsl" + PT(ET, xT, xT)),
        OT = new RegExp("hsla" + PT(ET, xT, xT, ET)),
        RT = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        NT = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        jT = /^#([0-9a-fA-F]{6})$/,
        IT = /^#([0-9a-fA-F]{8})$/;

      function kT(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function DT(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = kT(o, n, e + 1 / 3),
          s = kT(o, n, e),
          a = kT(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function LT(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function AT(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function MT(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function BT(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function HT(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = jT.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : cT && void 0 !== cT[e] ? cT[e] : (t = CT.exec(e)) ? (LT(t[1]) << 24 | LT(t[2]) << 16 | LT(t[3]) << 8 | 255) >>> 0 : (t = ST.exec(e)) ? (LT(t[1]) << 24 | LT(t[2]) << 16 | LT(t[3]) << 8 | MT(t[4])) >>> 0 : (t = RT.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = IT.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = NT.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = TT.exec(e)) ? (255 | DT(AT(t[1]), BT(t[2]), BT(t[3]))) >>> 0 : (t = OT.exec(e)) ? (DT(AT(t[1]), BT(t[2]), BT(t[3])) | MT(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var zT = (e, t, r) => {
          if (JS.fun(e)) return e;
          if (JS.arr(e)) return zT({
            range: e,
            output: t,
            extrapolate: r
          });
          if (JS.str(e.output[0])) return iT(e);
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
        VT = 1.70158,
        FT = 2.5949095,
        UT = 2.70158,
        GT = 2 * Math.PI / 3,
        qT = 2 * Math.PI / 4.5,
        XT = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        WT = {
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
          easeInBack: e => UT * e * e * e - VT * e * e,
          easeOutBack: e => 1 + UT * Math.pow(e - 1, 3) + VT * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - FT) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + FT) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * GT),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * GT) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * qT) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * qT) / 2 + 1,
          easeInBounce: e => 1 - XT(1 - e),
          easeOutBounce: XT,
          easeInOutBounce: e => e < .5 ? (1 - XT(1 - 2 * e)) / 2 : (1 + XT(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        KT = Symbol.for("FluidValue.get"),
        $T = Symbol.for("FluidValue.observers"),
        ZT = e => Boolean(e && e[KT]),
        YT = e => e && e[KT] ? e[KT]() : e,
        QT = e => e[$T] || null;

      function JT(e, t) {
        const r = e[$T];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var eO = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            tO(this, e)
          }
        },
        tO = (e, t) => iO(e, KT, t);

      function rO(e, t) {
        if (e[KT]) {
          let r = e[$T];
          r || iO(e, $T, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function nO(e, t) {
        const r = e[$T];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[$T] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var oO, iO = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        sO = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        aO = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        lO = new RegExp(`(${sO.source})(%|[a-z]+)`, "i"),
        cO = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        uO = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        dO = e => {
          const [t, r] = fO(e);
          if (!t || lT()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && uO.test(r) ? dO(r) : r || e
        },
        fO = e => {
          const t = uO.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        hO = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        pO = e => {
          oO || (oO = cT ? new RegExp(`(${Object.keys(cT).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => YT(e).replace(uO, dO).replace(aO, HT).replace(oO, HT)),
            r = t.map(e => e.match(sO).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => zT({
              ...e,
              output: t
            }));
          return e => {
            const r = !lO.test(t[0]) && t.find(e => lO.test(e))?.replace(sO, "");
            let n = 0;
            return t[0].replace(sO, () => `${o[n++](e)}${r||""}`).replace(cO, hO)
          }
        },
        mO = "react-spring: ",
        vO = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${mO}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        yO = vO(console.warn),
        gO = vO(console.warn);

      function bO(e) {
        return JS.str(e) && ("#" == e[0] || /\d/.test(e) || !lT() && uO.test(e) || e in (cT || {}))
      }
      var _O = lT() ? M.useEffect : M.useLayoutEffect;

      function wO() {
        const e = (0, M.useState)()[1],
          t = (() => {
            const e = (0, M.useRef)(!1);
            return _O(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var EO = e => (0, M.useEffect)(e, xO),
        xO = [],
        PO = Symbol.for("Animated:node"),
        CO = e => e && e[PO],
        SO = (e, t) => {
          return r = e, n = PO, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        TO = e => e && e[PO] && e[PO].getPayload(),
        OO = class {
          constructor() {
            SO(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        RO = class e extends OO {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, JS.num(this._value) && (this.lastPosition = this._value)
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
            return JS.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, JS.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        NO = class e extends RO {
          constructor(e) {
            super(0), this._string = null, this._toString = zT({
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
            if (JS.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = zT({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        jO = {
          dependencies: null
        },
        IO = class extends OO {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return rT(this.source, (r, n) => {
              var o;
              (o = r) && o[PO] === o ? t[n] = r.getValue(e) : ZT(r) ? t[n] = YT(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && tT(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return rT(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            jO.dependencies && ZT(e) && jO.dependencies.add(e);
            const t = TO(e);
            t && tT(t, e => this.add(e))
          }
        },
        kO = class e extends IO {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(DO)), !0)
          }
        };

      function DO(e) {
        return (bO(e) ? NO : RO).create(e)
      }

      function LO(e) {
        const t = CO(e);
        return t ? t.constructor : JS.arr(e) ? kO : bO(e) ? NO : RO
      }
      var AO = (e, t) => {
          const r = !JS.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, M.forwardRef)((n, o) => {
            const i = (0, M.useRef)(null),
              s = r && (0, M.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (JS.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return jO.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new IO(e), jO.dependencies = null, [e, r]
              }(n, t),
              c = wO(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && c()
              },
              d = new MO(u, l),
              f = (0, M.useRef)(void 0);
            _O(() => (f.current = d, tT(l, e => rO(e, d)), () => {
              f.current && (tT(f.current.deps, e => nO(e, f.current)), kS.cancel(f.current.update))
            })), (0, M.useEffect)(u, []), EO(() => () => {
              const e = f.current;
              tT(e.deps, t => nO(t, e))
            });
            const h = t.getComponentProps(a.getValue());
            return M.createElement(e, {
              ...h,
              ref: s
            })
          })
        },
        MO = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && kS.write(this.update)
          }
        },
        BO = Symbol.for("AnimatedComponent"),
        HO = e => JS.str(e) ? e : e && JS.str(e.displayName) ? e.displayName : JS.fun(e) && e.name || null;

      function zO(e, ...t) {
        return JS.fun(e) ? e(...t) : e
      }
      var VO = (e, t) => !0 === e || !!(t && e && (JS.fun(e) ? e(t) : nT(e).includes(t))),
        FO = (e, t) => JS.obj(e) ? t && e[t] : e,
        UO = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        GO = e => e,
        qO = (e, t = GO) => {
          let r = XO;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            JS.und(r) || (n[o] = r)
          }
          return n
        },
        XO = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        WO = {
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

      function KO(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (rT(e, (e, n) => {
              WO[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return rT(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function $O(e) {
        return e = YT(e), JS.arr(e) ? e.map($O) : bO(e) ? YS.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function ZO(e) {
        return JS.fun(e) || JS.arr(e) && JS.obj(e[0])
      }

      function YO(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var QO = {
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
        JO = {
          ...QO.default,
          mass: 1,
          damping: 1,
          easing: WT.linear,
          clamp: !1
        },
        eR = class {
          constructor() {
            this.velocity = 0, Object.assign(this, JO)
          }
        };

      function tR(e, t) {
        if (JS.und(t.decay)) {
          const r = !JS.und(t.tension) || !JS.und(t.friction);
          !r && JS.und(t.frequency) && JS.und(t.damping) && JS.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var rR = [],
        nR = class {
          constructor() {
            this.changed = !1, this.values = rR, this.toValues = null, this.fromValues = rR, this.config = new eR, this.immediate = !1
          }
        };

      function oR(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, c, u = VO(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            JS.und(r.pause) || (o.paused = VO(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || VO(e, t)), l = zO(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - kS.now()
          }

          function f() {
            l > 0 && !YS.skipAnimation ? (o.delayed = !0, c = kS.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
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
      var iR = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? lR(e.get()) : t.every(e => e.noop) ? sR(e.get()) : aR(e.get(), t.every(e => e.finished)),
        sR = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        aR = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        lR = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function cR(e, t, r, n) {
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
          const c = qO(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && lR(n) || o !== r.asyncId && aR(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new dR,
                s = new fR;
              return (async () => {
                if (YS.skipAnimation) throw uR(r), s.result = aR(n, !1), d(s), s;
                h(i);
                const a = JS.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, rT(c, (e, t) => {
                  JS.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return h(i), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (YS.skipAnimation) return uR(r), aR(n, !1);
          try {
            let t;
            t = JS.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = aR(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof dR) m = e.result;
            else {
              if (!(e instanceof fR)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? a : void 0, r.promise = i ? l : void 0)
          }
          return JS.fun(s) && kS.batchedUpdates(() => {
            s(m, n, n.item)
          }), m
        })() : l
      }

      function uR(e, t) {
        oT(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var dR = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        fR = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        hR = e => e instanceof mR,
        pR = 1,
        mR = class extends eO {
          constructor() {
            super(...arguments), this.id = pR++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = CO(this);
            return e && e.getValue()
          }
          to(...e) {
            return YS.to(this, e)
          }
          interpolate(...e) {
            return yO(`${mO}The "interpolate" function is deprecated in v9 (use "to" instead)`), YS.to(this, e)
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
            JT(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || yT.sort(this), JT(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        vR = Symbol.for("SpringPhase"),
        yR = e => (1 & e[vR]) > 0,
        gR = e => (2 & e[vR]) > 0,
        bR = e => (4 & e[vR]) > 0,
        _R = (e, t) => t ? e[vR] |= 3 : e[vR] &= -3,
        wR = (e, t) => t ? e[vR] |= 4 : e[vR] &= -5,
        ER = class extends mR {
          constructor(e, t) {
            if (super(), this.animation = new nR, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !JS.und(e) || !JS.und(t)) {
              const r = JS.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              JS.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(gR(this) || this._state.asyncTo) || bR(this)
          }
          get goal() {
            return YT(this.animation.to)
          }
          get velocity() {
            const e = CO(this);
            return e instanceof RO ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return yR(this)
          }
          get isAnimating() {
            return gR(this)
          }
          get isPaused() {
            return bR(this)
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
            } = n, s = TO(n.to);
            !s && ZT(n.to) && (o = nT(YT(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const c = a.constructor == NO ? 1 : s ? s[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = JS.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (JS.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(a.lastPosition - d) <= f, s = o * n
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !JS.und(n),
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
            const a = CO(this),
              l = a.getValue();
            if (t) {
              const e = YT(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return kS.batchedUpdates(() => {
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
            if (gR(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              kS.batchedUpdates(() => {
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
            return JS.und(e) ? (r = this.queue || [], this.queue = []) : r = [JS.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => iR(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), uR(this._state, e && this._lastCallId), kS.batchedUpdates(() => this._stop(t, e)), this
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
            r = JS.obj(r) ? r[t] : r, (null == r || ZO(r)) && (r = void 0), n = JS.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return yR(this) || (e.reverse && ([r, n] = [n, r]), n = YT(n), JS.und(n) ? CO(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, qO(e, (e, t) => /^on/.test(t) ? FO(e, r) : e)), OR(this, e, "onProps"), RR(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return oR(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  bR(this) || (wR(this, !0), aT(i.pauseQueue), RR(this, "onPause", aR(this, xR(this, this.animation.to)), this))
                },
                resume: () => {
                  bR(this) && (wR(this, !1), gR(this) && this._resume(), aT(i.resumeQueue), RR(this, "onResume", aR(this, xR(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = PR(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(lR(this));
            const n = !JS.und(e.to),
              o = !JS.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(lR(this));
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
            !o || n || t.default && !JS.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !eT(d, c);
            f && (a.from = d), d = YT(d);
            const h = !eT(u, l);
            h && this._focus(u);
            const p = ZO(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (tR(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), tR(e, t), Object.assign(e, t);
              for (const t in JO) null == e[t] && (e[t] = JO[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              JS.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, zO(t.config, i), t.config !== s.config ? zO(s.config, i) : void 0);
            let g = CO(this);
            if (!g || JS.und(u)) return r(aR(this, !0));
            const b = JS.und(t.reset) ? o && !t.default : !JS.und(d) && VO(t.reset, i),
              _ = b ? d : this.get(),
              w = $O(u),
              E = JS.num(w) || JS.arr(w) || bO(w),
              x = !p && (!E || VO(s.immediate || t.immediate, i));
            if (h) {
              const e = LO(u);
              if (e !== g.constructor) {
                if (!x) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const P = g.constructor;
            let C = ZT(u),
              S = !1;
            if (!C) {
              const e = b || !yR(this) && f;
              (h || e) && (S = eT($O(_), w), C = !S), (eT(a.immediate, x) || x) && eT(m.decay, v) && eT(m.velocity, y) || (C = !0)
            }
            if (S && gR(this) && (a.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || ZT(l)) && (a.values = g.getPayload(), a.toValues = ZT(u) ? null : P == NO ? [1] : nT(w)), a.immediate != x && (a.immediate = x, x || b || this._set(l)), C)) {
              const {
                onRest: e
              } = a;
              tT(TR, e => OR(this, t, e));
              const n = aR(this, xR(this, l));
              aT(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && kS.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? zO(s.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(cR(t.to, t, this._state, this)) : C ? this._start() : gR(this) && !h ? this._pendingCalls.add(r) : r(sR(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (QT(this) && this._detach(), t.to = e, QT(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ZT(t) && (rO(t, this), hR(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ZT(e) && nO(e, this)
          }
          _set(e, t = !0) {
            const r = YT(e);
            if (!JS.und(r)) {
              const e = CO(this);
              if (!e || !eT(r, e.getValue())) {
                const n = LO(r);
                e && e.constructor == n ? e.setValue(r) : SO(this, n.create(r)), e && kS.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return CO(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, RR(this, "onStart", aR(this, xR(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), zO(this.animation.onChange, e, this)), zO(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            CO(this).reset(YT(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), gR(this) || (_R(this, !0), bR(this) || this._resume())
          }
          _resume() {
            YS.skipAnimation ? this.finish() : yT.start(this)
          }
          _stop(e, t) {
            if (gR(this)) {
              _R(this, !1);
              const r = this.animation;
              tT(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), JT(this, {
                type: "idle",
                parent: this
              });
              const n = t ? lR(this.get()) : aR(this.get(), xR(this, e ?? r.to));
              aT(this._pendingCalls, n), r.changed && (r.changed = !1, RR(this, "onRest", n, this))
            }
          }
        };

      function xR(e, t) {
        const r = $O(t);
        return eT($O(e.get()), r)
      }

      function PR(e, t = e.loop, r = e.to) {
        const n = zO(t);
        if (n) {
          const o = !0 !== n && KO(n),
            i = (o || e).reverse,
            s = !o || o.reset;
          return CR({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || ZO(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function CR(e) {
        const {
          to: t,
          from: r
        } = e = KO(e), n = new Set;
        return JS.obj(t) && SR(t, n), JS.obj(r) && SR(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function SR(e, t) {
        rT(e, (e, r) => null != e && t.add(r))
      }
      var TR = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function OR(e, t, r) {
        e.animation[r] = t[r] !== UO(t, r) ? FO(t[r], e.key) : void 0
      }

      function RR(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var NR = ["onStart", "onChange", "onRest"],
        jR = 1,
        IR = class {
          constructor(e, t) {
            this.id = jR++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              JS.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(CR(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = nT(e).map(CR) : this.queue = [], this._flush ? this._flush(this, t) : (MR(this, t), function(e, t) {
              return Promise.all(t.map(t => kR(e, t))).then(t => iR(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              tT(nT(t), t => r[t].stop(!!e))
            } else uR(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (JS.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              tT(nT(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (JS.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              tT(nT(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            rT(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, oT(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !n && this._started,
              s = o || i && r.size ? this.get() : null;
            o && t.size && oT(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, oT(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            kS.onFrame(this._onFrame)
          }
        };
      async function kR(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, c = JS.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = JS.arr(o) || JS.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : tT(NR, r => {
          const n = t[r];
          if (JS.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, aT(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === UO(t, "cancel");
        (u || h && d.asyncId) && f.push(oR(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: QS,
            resume: QS,
            start(t, r) {
              h ? (uR(d, e._lastAsyncId), r(lR(e))) : (t.onRest = a, r(cR(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = iR(e, await Promise.all(f));
        if (s && p.finished && (!r || !p.noop)) {
          const r = PR(t, s, o);
          if (r) return MR(e, [r]), kR(e, r, !0)
        }
        return l && kS.batchedUpdates(() => l(p, e, e.item)), p
      }

      function DR(e, t) {
        const r = {
          ...e.springs
        };
        return t && tT(nT(t), e => {
            JS.und(e.keys) && (e = CR(e)), JS.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), AR(r, e, e => LR(e))
          }),
          function(e, t) {
            rT(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, rO(t, e))
            })
          }(e, r), r
      }

      function LR(e, t) {
        const r = new ER;
        return r.key = e, t && rO(r, t), r
      }

      function AR(e, t, r) {
        t.keys && tT(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function MR(e, t) {
        tT(t, t => {
          AR(e.springs, t, t => LR(t, e))
        })
      }
      var BR = M.createContext({
          pause: !1,
          immediate: !1
        }),
        HR = () => {
          const e = [],
            t = function(t) {
              gO(`${mO}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return tT(e, (e, o) => {
                if (JS.und(t)) n.push(e.start());
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
            return tT(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return tT(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            tT(e, (e, r) => {
              const n = JS.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return tT(e, (e, n) => {
              if (JS.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return tT(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return tT(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return JS.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        zR = () => HR(),
        VR = () => (0, M.useState)(zR)[0];

      function FR(e, t, r) {
        const n = JS.fun(t) && t,
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
          f = (0, M.useMemo)(() => n || 3 == arguments.length ? HR() : void 0, []),
          h = nT(e),
          p = [],
          m = (0, M.useRef)(null),
          v = o ? null : m.current;
        _O(() => {
          m.current = p
        }), EO(() => (tT(p, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          tT(m.current, e => {
            e.expired && clearTimeout(e.expirationId), YO(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : UR++
              })
            }
            return JS.und(r) ? e : JS.fun(r) ? e.map(r) : nT(r)
          }(h, n ? n() : t, v),
          g = o && m.current || [];
        _O(() => tT(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          YO(e, f), zO(c, t, r)
        }));
        const b = [];
        if (v && tT(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          }), tT(h, (e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new IR
            }, p[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          tT(b, (t, n) => {
            const o = v[n];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : r && p.splice(++e, 0, o)
          })
        }
        JS.fun(i) && p.sort((e, t) => i(e.item, t.item));
        let _ = -s;
        const w = wO(),
          E = qO(t),
          x = new Map,
          P = (0, M.useRef)(new Map),
          C = (0, M.useRef)(!1);
        tT(p, (e, r) => {
          const o = e.key,
            i = e.phase,
            c = n ? n() : t;
          let f, h;
          const p = zO(c.delay || 0, o);
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
          if (f = zO(f, e.item, r), f = JS.obj(f) ? KO(f) : {
              to: f
            }, !f.config) {
            const t = d || E.config;
            f.config = zO(t, e.item, r, h)
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
          if ("enter" == h && JS.und(g.from)) {
            const o = n ? n() : t,
              i = JS.und(o.initial) || v ? o.from : o.initial;
            g.from = zO(i, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            zO(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = zO(a, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                }
              }
              e && t.some(e => e.expired) && (P.current.delete(r), l && (C.current = !0), w())
            }
          };
          const S = DR(e.ctrl, g);
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
        const S = (0, M.useContext)(BR),
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
        _O(() => {
          O && tT(p, e => {
            e.ctrl.start({
              default: S
            })
          })
        }, [S]), tT(x, (e, t) => {
          if (P.current.size) {
            const e = p.findIndex(e => e.key === t.key);
            p.splice(e, 1)
          }
        }), _O(() => {
          tT(P.current.size ? P.current : x, ({
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
          }, t.item, t, r), i = JS.str(t.key) || JS.num(t.key) ? t.key : t.ctrl.id, s = M.version < "19.0.0", a = o?.props ?? {}, l = s ? o?.ref : a?.ref;
          return o && o.type ? M.createElement(o.type, {
            ...a,
            key: i,
            ref: l
          }) : o
        }));
        return f ? [R, f] : R
      }
      var UR = 1,
        GR = class extends mR {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = zT(...t);
            const r = this._get(),
              n = LO(r);
            SO(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            eT(t, this.get()) || (CO(this).setValue(t), this._onChange(t, this.idle)), !this.idle && XR(this._active) && WR(this)
          }
          _get() {
            const e = JS.arr(this.source) ? this.source.map(YT) : nT(YT(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !XR(this._active) && (this.idle = !1, tT(TO(this), e => {
              e.done = !1
            }), YS.skipAnimation ? (kS.batchedUpdates(() => this.advance()), WR(this)) : yT.start(this))
          }
          _attach() {
            let e = 1;
            tT(nT(this.source), t => {
              ZT(t) && rO(t, this), hR(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            tT(nT(this.source), e => {
              ZT(e) && nO(e, this)
            }), this._active.clear(), WR(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = nT(this.source).reduce((e, t) => Math.max(e, (hR(t) ? t.priority : 0) + 1), 0))
          }
        };

      function qR(e) {
        return !1 !== e.idle
      }

      function XR(e) {
        return !e.size || Array.from(e).every(qR)
      }

      function WR(e) {
        e.idle || (e.idle = !0, tT(TO(e), e => {
          e.done = !0
        }), JT(e, {
          type: "idle",
          parent: e
        }))
      }
      YS.assign({
        createStringInterpolator: pO,
        to: (e, t) => new GR(e, t)
      }), yT.advance;
      var KR = /^--/;

      function $R(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || KR.test(e) || YR.hasOwnProperty(e) && YR[e] ? ("" + t).trim() : t + "px"
      }
      var ZR = {},
        YR = {
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
        QR = ["Webkit", "Ms", "Moz", "O"];
      YR = Object.keys(YR).reduce((e, t) => (QR.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), YR);
      var JR = /^(matrix|translate|scale|rotate|skew)/,
        eN = /^(translate)/,
        tN = /^(rotate|skew)/,
        rN = (e, t) => JS.num(e) && 0 !== e ? e + t : e,
        nN = (e, t) => JS.arr(e) ? e.every(e => nN(e, t)) : JS.num(e) ? e === t : parseFloat(e) === t,
        oN = class extends IO {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>rN(e,"px")).join(",")})`, nN(e, 0)])), rT(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (JR.test(t)) {
                if (delete n[t], JS.und(e)) return;
                const r = eN.test(t) ? "px" : tN.test(t) ? "deg" : "";
                o.push(nT(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${rN(o,r)})`, nN(o, 0)] : e => [`${t}(${e.map(e=>rN(e,r)).join(",")})`, nN(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new iN(o, i)), super(n)
          }
        },
        iN = class extends eO {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return tT(this.inputs, (r, n) => {
              const o = YT(r[0]),
                [i, s] = this.transforms[n](JS.arr(o) ? o : r.map(YT));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && tT(this.inputs, e => tT(e, e => ZT(e) && rO(e, this)))
          }
          observerRemoved(e) {
            0 == e && tT(this.inputs, e => tT(e, e => ZT(e) && nO(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), JT(this, e)
          }
        };
      YS.assign({
        batchedUpdates: iu.unstable_batchedUpdates,
        createStringInterpolator: pO,
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
      var sN = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new IO(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = HO(e) || "Anonymous";
              return (e = JS.str(e) ? i[e] || (i[e] = AO(e, o)) : e[BO] || (e[BO] = AO(e, o))).displayName = `Animated(${t})`, e
            };
          return rT(e, (t, r) => {
            JS.arr(e) && (r = HO(t)), i[r] = i(t)
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
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : ZR[t] || (ZR[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = $R(t, o[t]);
                KR.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new oN(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        aN = sN.animated,
        lN = "Dialog",
        [cN, uN] = (0, xu.A)(lN),
        [dN, fN] = cN(lN),
        hN = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = M.useRef(null), l = M.useRef(null), [c, u] = (0, eh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: lN
          });
          return (0, _.jsx)(dN, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: (0, Lu.B)(),
            titleId: (0, Lu.B)(),
            descriptionId: (0, Lu.B)(),
            open: c,
            onOpenChange: u,
            onOpenToggle: M.useCallback(() => u(e => !e), [u]),
            modal: s,
            children: r
          })
        };
      hN.displayName = lN;
      var pN = "DialogTrigger",
        mN = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = fN(pN, r), i = (0, Eu.s)(t, o.triggerRef);
          return (0, _.jsx)(Pu.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": DN(o.open),
            ...n,
            ref: i,
            onClick: _u(e.onClick, o.onOpenToggle)
          })
        });
      mN.displayName = pN;
      var vN = "DialogPortal",
        [yN, gN] = cN(vN, {
          forceMount: void 0
        }),
        bN = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = fN(vN, t);
          return (0, _.jsx)(yN, {
            scope: t,
            forceMount: r,
            children: M.Children.map(n, e => (0, _.jsx)(Yf, {
              present: r || i.open,
              children: (0, _.jsx)(Zf, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      bN.displayName = vN;
      var _N = "DialogOverlay",
        wN = M.forwardRef((e, t) => {
          const r = gN(_N, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = fN(_N, e.__scopeDialog);
          return i.modal ? (0, _.jsx)(Yf, {
            present: n || i.open,
            children: (0, _.jsx)(xN, {
              ...o,
              ref: t
            })
          }) : null
        });
      wN.displayName = _N;
      var EN = (0, Jf.TL)("DialogOverlay.RemoveScroll"),
        xN = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = fN(_N, r);
          return (0, _.jsx)(Qp.A, {
            as: EN,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, _.jsx)(Pu.sG.div, {
              "data-state": DN(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        PN = "DialogContent",
        CN = M.forwardRef((e, t) => {
          const r = gN(PN, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = fN(PN, e.__scopeDialog);
          return (0, _.jsx)(Yf, {
            present: n || i.open,
            children: i.modal ? (0, _.jsx)(SN, {
              ...o,
              ref: t
            }) : (0, _.jsx)(TN, {
              ...o,
              ref: t
            })
          })
        });
      CN.displayName = PN;
      var SN = M.forwardRef((e, t) => {
          const r = fN(PN, e.__scopeDialog),
            n = M.useRef(null),
            o = (0, Eu.s)(t, r.contentRef, n);
          return M.useEffect(() => {
            const e = n.current;
            if (e) return (0, Jp.Eq)(e)
          }, []), (0, _.jsx)(ON, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: _u(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: _u(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: _u(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        TN = M.forwardRef((e, t) => {
          const r = fN(PN, e.__scopeDialog),
            n = M.useRef(!1),
            o = M.useRef(!1);
          return (0, _.jsx)(ON, {
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
        ON = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = fN(PN, r), l = M.useRef(null), c = (0, Eu.s)(t, l);
          return sg(), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(dg, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, _.jsx)(Ru, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": DN(a.open),
                ...s,
                ref: c,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(BN, {
                titleId: a.titleId
              }), (0, _.jsx)(HN, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        RN = "DialogTitle",
        NN = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = fN(RN, r);
          return (0, _.jsx)(Pu.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      NN.displayName = RN;
      var jN = "DialogDescription",
        IN = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = fN(jN, r);
          return (0, _.jsx)(Pu.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      IN.displayName = jN;
      var kN = "DialogClose";

      function DN(e) {
        return e ? "open" : "closed"
      }
      M.forwardRef((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = fN(kN, r);
        return (0, _.jsx)(Pu.sG.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: _u(e.onClick, () => o.onOpenChange(!1))
        })
      }).displayName = kN;
      var LN = "DialogTitleWarning",
        [AN, MN] = (0, xu.q)(LN, {
          contentName: PN,
          titleName: RN,
          docsSlug: "dialog"
        }),
        BN = ({
          titleId: e
        }) => {
          const t = MN(LN),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return M.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        HN = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${MN("DialogDescriptionWarning").contentName}}.`;
          return M.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        zN = hN,
        VN = mN,
        FN = bN,
        UN = wN,
        GN = CN,
        qN = NN,
        XN = IN;
      const WN = () => {
          const e = (0, G.Ub)(V.fi.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        KN = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function $N({
        dialogRef: e,
        dialogSpringRef: t,
        overlaySpringRef: r,
        onCloseTransitionStart: n,
        onCloseTransitionComplete: o
      }) {
        const i = KN(),
          s = WN(),
          a = (0, M.useRef)(),
          l = (er(tr), yr({
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
                config: QO.stiff,
                onStart: n,
                onRest: o
              }), r.start({
                ...i(0),
                immediate: !1,
                config: QO.stiff
              })) : (t.start({
                ...s(100),
                immediate: !1,
                config: QO.stiff
              }), r.start({
                ...i(100),
                immediate: !1,
                config: QO.stiff
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

      function ZN(e) {
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

      function YN(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function QN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? YN(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ZN(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : YN(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function JN(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ej = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tj = "foundry_8kowh41",
        rj = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = QN(QN({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ej(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return JN(e.variantClassNames, e => JN(e, e => e.split(" ")[0]))
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
      const nj = (0, M.createContext)(null);

      function oj() {
        const e = (0, M.useContext)(nj);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const ij = (0, M.forwardRef)(({
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
          return (0, _.jsx)(nj.Provider, {
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
              dialogSpringRef: VR(),
              overlaySpringRef: VR()
            },
            children: (0, _.jsx)(zN, {
              ref: u,
              open: f,
              onOpenChange: h,
              ...d,
              children: e
            })
          })
        }),
        sj = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isOpen: o,
            overlaySpringRef: i,
            openImmediately: s
          } = oj(), a = KN(), l = (0, G.jt)(), c = FR(o, {
            ref: i,
            delay: o ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: QO.stiff,
            immediate: l || s
          }), u = (0, V.v6)({
            "data-testid": t,
            className: "foundry_xov33n0"
          }, r), d = aN(UN);
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
        aj = (0, M.forwardRef)(({
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
          } = oj(), y = (0, G.rl)(), g = (0, G.jt)(), b = (0, M.useRef)(null), w = WN(), {
            bindDrag: E
          } = $N({
            dialogRef: b,
            overlaySpringRef: v,
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              a(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), x = FR(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: QO.stiff,
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
            T = aN(GN);
          return x((t, r) => r ? (0, _.jsx)(T, {
            forceMount: !0,
            ref: P,
            ...S,
            style: t,
            children: e
          }) : null)
        }),
        lj = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            "data-testid": t
          }, r);
          return (0, _.jsx)(FN, {
            forceMount: !0,
            ref: n,
            ...o,
            children: e
          })
        }),
        cj = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, _.jsx)(qN, {
            ref: n,
            ...o,
            children: e
          })
        }),
        uj = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            "data-testid": t
          }, r);
          return (0, _.jsx)(XN, {
            ref: n,
            ...o,
            children: e
          })
        }),
        dj = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, _.jsxs)(tg, {
            ref: n,
            ...o,
            children: [(0, _.jsx)(rg, {
              className: "foundry_xov33ne",
              children: e
            }), (0, _.jsx)(ng, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, _.jsx)(og, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        fj = (0, M.forwardRef)(({
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
        hj = (0, M.forwardRef)(({
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
        pj = (0, M.forwardRef)(({
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
        mj = (0, M.forwardRef)(({
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
        vj = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, i) => {
          const s = (0, V.v6)({
              "data-testid": r,
              className: rj({
                align: n
              })
            }, o),
            a = e ? q.DX : qN;
          return (0, _.jsx)(a, {
            ref: i,
            ...s,
            children: t
          })
        }),
        yj = (0, M.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = oj(), a = (0, V.v6)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, _.jsx)(qx, {
            ...a,
            size: "MD",
            ref: o,
            children: e
          })
        }),
        gj = (0, M.forwardRef)((e, t) => {
          const r = (0, V.v6)({
            className: "foundry_xov33n5"
          }, e);
          return (0, _.jsx)(Te, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        }),
        bj = (0, M.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = oj(), a = (0, V.v6)({
            className: tj,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, _.jsx)(ye, {
            ref: o,
            ...a,
            children: e
          })
        }),
        _j = (0, M.forwardRef)(({
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
          } = oj(), d = (0, G.UP)(u, i), f = (0, V.v6)({
            className: tj,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !s && a(!0)
            }
          }, o), h = e ? q.DX : VN;
          return (0, _.jsx)(h, {
            ...f,
            ref: d,
            children: t
          })
        })
    },
    71753: (e, t, r) => {
      r.d(t, {
        b: () => a
      });
      var n = r(62229),
        o = r(69055),
        i = r(42295),
        s = ({
          children: e,
          label: t
        }) => {
          const r = n.Children.only(e);
          return (0, i.jsxs)(i.Fragment, {
            children: [n.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, i.jsx)(o.bL, {
              children: t
            })]
          })
        };
      s.displayName = "AccessibleIcon";
      var a = s
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
    },
    88335: (e, t, r) => {
      e.exports = r(16859)
    }
  }
]);